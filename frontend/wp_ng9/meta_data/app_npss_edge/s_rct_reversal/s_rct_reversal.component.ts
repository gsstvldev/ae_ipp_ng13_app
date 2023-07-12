/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 31048 
Modified By     : Admin 
Modified Date   : 2023-Jul-12 12:43 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_reversal
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {torus_cs_change_routingkeyService} from '../../../custom_widget/torus_cs_change_routingkey/torus_cs_change_routingkey.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'
import {npss_cs_reversal_set_status_and_bind_valueService} from '../../../custom_widget/npss_cs_reversal_set_status_and_bind_value/npss_cs_reversal_set_status_and_bind_value.service'
import {npss_cs_rev_get_usable_balanceService} from '../../../custom_widget/npss_cs_rev_get_usable_balance/npss_cs_rev_get_usable_balance.service'
import {npss_cs_ip_rev_accept_inau_reserve_fundService} from '../../../custom_widget/npss_cs_ip_rev_accept_inau_reserve_fund/npss_cs_ip_rev_accept_inau_reserve_fund.service'
import {npss_cs_reject_pack002Service} from '../../../custom_widget/npss_cs_reject_pack002/npss_cs_reject_pack002.service'
import {npss_cs_ip_rev_ret_auth_pacs004Service} from '../../../custom_widget/npss_cs_ip_rev_ret_auth_pacs004/npss_cs_ip_rev_ret_auth_pacs004.service'
import {npss_cs_ip_rev_reject_inau_reserve_fundService} from '../../../custom_widget/npss_cs_ip_rev_reject_inau_reserve_fund/npss_cs_ip_rev_reject_inau_reserve_fund.service'
import {npss_cs_reversal_cancelService} from '../../../custom_widget/npss_cs_reversal_cancel/npss_cs_reversal_cancel.service'
import {npss_cs_reversal_send_to_makerService} from '../../../custom_widget/npss_cs_reversal_send_to_maker/npss_cs_reversal_send_to_maker.service'
import {npss_cs_reversal_force_to_postService} from '../../../custom_widget/npss_cs_reversal_force_to_post/npss_cs_reversal_force_to_post.service'

@Component({
	selector: 's_rct_reversal',
	templateUrl: './s_rct_reversal.component.html',
	styleUrls: ['./s_rct_reversal.component.css'],
	providers:[torus_cs_change_routingkeyService,torus_cs_show_hideService,npss_cs_reversal_set_status_and_bind_valueService,npss_cs_rev_get_usable_balanceService,npss_cs_ip_rev_accept_inau_reserve_fundService,npss_cs_reject_pack002Service,npss_cs_ip_rev_ret_auth_pacs004Service,npss_cs_ip_rev_reject_inau_reserve_fundService,npss_cs_reversal_cancelService,npss_cs_reversal_send_to_makerService,npss_cs_reversal_force_to_postService]
})
    
// Start of class 
export class s_rct_reversalComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_rct_reversal"
	wftpa_id : string = "WFT_NPSS_P_1304_1666862675236_0"
	cg_code : string = "CG_1304_1666855803455"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID","dtt_1304_1670492310194":"NPSSASP_ID","dtt_1304_1670589169341":"NPSSCAPL_ID","dtt_1304_1672928670076":"NPSSNL_ID","dtt_1304_1674198360280":"NPSSE_ID","dtt_1304_1681973868376":"NPSSPSR_ID","dtt_1304_1681974712398":"NPSSSBR_ID","dtt_1304_1681974988885":"NPSSBFSR_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "queue"
	uicgc_2 : string = "transaction_list"
	uicgc_3 : string = "navigation"
	uicgc_4 : string = "reversal_action_ui"
	uicgc_5 : string = "accept_ui"
	uicgc_6 : string = "change_return_ui"
	uicgc_7 : string = "process_log_list"
	uicgc_8 : string = "remarks_list"
	uicgc_9 : string = "reversal_ui"
	uicgc_10 : string = "remarks_ui"
	uicgc_11 : string = "view_dr_cr_details"
	uicgc_12 : string = "back_ui"
	uicgc_14 : string = "view_payment_details"
	uicgc_15 : string = "process_log_ui"
	uicgc_16 : string = "history_detail"
	uicgc_17 : string = "message_back_ui"
	uicgc_18 : string = "message_detail"
	uicgc_19 : string = "message_detail_action"
	uicgc_20 : string = "message_detail_ui"
	uicgc_23 : string = "response_ui"
	uicgc_24 : string = "request_ui"
	uicgc_25 : string = "single_back_ui"
	uicgc_26 : string = "process_log_control_ui"
	uicgc_30 : string = "trig_action_for_list_ui"
	uicgc_31 : string = "get_usable_balance_widget"
	uicgc_32 : string = "cancel_return_ui"
	uicgc_33 : string = "reject_ui"
	uicgc_34 : string = "send_to_maker_ui"
	uicgc_35 : string = "reversal_additional_ui"
	uicgc_36 : string = "search"
	uicgc_37 : string = "cbs_accounts"
	uicgc_38 : string = "original_transaction_details"
	uicgc_39 : string = "refund_processing_details"
	key_events : any = {}
	btl_1304_1678258415615 : string = "p_fab_reversal_new_layout"
	btl_1304_1677670346639 : string = "p_reversal_new__layout"
	btl_1304_1672294771926 : string = "p_search_layout"
	btl_1304_1672139504213 : string = "p_send_to_maker_layout"
	btl_1304_1671280977095 : string = "p_fh_review_layout"
	btl_1304_1671195425258 : string = "p_cancel_layout"
	btl_1304_1670243823771 : string = "p_view_req_and_res_profile"
	btl_1304_1669438778345 : string = "p_view_response_layout"
	btl_1304_1669378545899 : string = "p_view_message_ui_layout"
	btl_1304_1669378450385 : string = "p_view_message_list_layout"
	btl_1304_1669377560031 : string = "p_view_request_layout"
	btl_1304_1669377273486 : string = "p_view_history_layout"
	btl_1304_1669202289940 : string = "p_vertical_layout"
	btl_1304_1668694521732 : string = "p_remarks_layout"
	btl_1304_1666856823236 : string = "p_change_return_layout"
	btl_1304_1666856778120 : string = "p_accept_layout"
	btl_1304_1666856478860 : string = "p_fab_review_layout"
	btl_1304_1666856426885 : string = "p_main_layout"
	forms : any = ["uicgc_9","uicgc_35","uicgc_5","uicgc_24","uicgc_36","uicgc_34","uicgc_26","uicgc_32","uicgc_6","uicgc_23","uicgc_20","uicgc_33","uicgc_4","uicgc_25","uicgc_17","uicgc_19","uicgc_15","uicgc_12","uicgc_10","uicgc_3"]
	p_change_return_layout__crr_for_spap_showpopup : boolean = false
	p_remarks_layout__spap_for_reject_code_showpopup : boolean = false
	p_cancel_layout__spap_for_rau_cancel_showpopup : boolean = false
	p_send_to_maker_layout__spap_for_send_to_maker_showpopup : boolean = false
	p_search_layout__spap_for_search_showpopup : boolean = false
	queue : any = {}
	transaction_list : any = {}
	navigation : any = {}
	navigation_search : any = {}
	navigation_review : any = {}
	navigation_view_tran : any = {}
	navigation_view_process_log : any = {}
	navigation_view_message_log : any = {}
	reversal_action_ui : any = {}
	reversal_action_ui_back : any = {}
	reversal_action_ui_accept : any = {}
	reversal_action_ui_capprove : any = {}
	reversal_action_ui_approve : any = {}
	reversal_action_ui_change_return_reason : any = {}
	reversal_action_ui_cancel__send_to_maker : any = {}
	reversal_action_ui_send_to_maker : any = {}
	reversal_action_ui_force_post : any = {}
	reversal_action_ui_trigger_btn : any = {}
	reversal_action_ui_reject : any = {}
	accept_ui : any = {}
	accept_ui_save : any = {}
	change_return_ui : any = {}
	change_return_ui_save : any = {}
	process_log_list : any = {}
	remarks_list : any = {}
	reversal_ui : any = {}
	remarks_ui : any = {}
	remarks_ui_save : any = {}
	view_dr_cr_details : any = {}
	back_ui : any = {}
	back_ui_back : any = {}
	view_payment_details : any = {}
	process_log_ui : any = {}
	process_log_ui_back : any = {}
	process_log_ui_view_response : any = {}
	process_log_ui_view_request : any = {}
	process_log_ui_view_req_and_res : any = {}
	history_detail : any = {}
	message_back_ui : any = {}
	message_back_ui_back : any = {}
	message_detail : any = {}
	message_detail_action : any = {}
	message_detail_action_back : any = {}
	message_detail_action_view_message : any = {}
	message_detail_ui : any = {}
	response_ui : any = {}
	request_ui : any = {}
	single_back_ui : any = {}
	single_back_ui_back : any = {}
	process_log_control_ui : any = {}
	trig_action_for_list_ui : any = {}
	trig_action_for_list_ui_trg_queue : any = {}
	trig_action_for_list_ui_trig_tran_list : any = {}
	get_usable_balance_widget : any = {}
	cancel_return_ui : any = {}
	cancel_return_ui_return_to_maker : any = {}
	reject_ui : any = {}
	send_to_maker_ui : any = {}
	send_to_maker_ui_save : any = {}
	reversal_additional_ui : any = {}
	search : any = {}
	search_clear : any = {}
	search_search : any = {}
	cbs_accounts : any = {}
	original_transaction_details : any = {}
	refund_processing_details : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private torus_cs_change_routingkeyService:torus_cs_change_routingkeyService,private torus_cs_show_hideService:torus_cs_show_hideService,private npss_cs_reversal_set_status_and_bind_valueService:npss_cs_reversal_set_status_and_bind_valueService,private npss_cs_rev_get_usable_balanceService:npss_cs_rev_get_usable_balanceService,private npss_cs_ip_rev_accept_inau_reserve_fundService:npss_cs_ip_rev_accept_inau_reserve_fundService,private npss_cs_reject_pack002Service:npss_cs_reject_pack002Service,private npss_cs_ip_rev_ret_auth_pacs004Service:npss_cs_ip_rev_ret_auth_pacs004Service,private npss_cs_ip_rev_reject_inau_reserve_fundService:npss_cs_ip_rev_reject_inau_reserve_fundService,private npss_cs_reversal_cancelService:npss_cs_reversal_cancelService,private npss_cs_reversal_send_to_makerService:npss_cs_reversal_send_to_makerService,private npss_cs_reversal_force_to_postService:npss_cs_reversal_force_to_postService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Queue" 
		this.queue.uictrl_code = "datatable"
		this.queue.uicgc_desc = "Queue"
		this.queue.uicgc_code = "uicgc_1"
		this.queue.params = {"need_pag_datatable":"Y","need_search":"N"}
		this.queue.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863057903","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Reversal Tran Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1671019841112","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671019841297","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1675348669752","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS from  (  select   NT.CREATED_DATE,   NT.STATUS,   NT.PROCESS_STATUS,   NT.UETR,   NT.DBTR_IBAN,   NT.PROCESSING_SYSTEM,   NT.TENANT_ID,   NT.MODIFIED_DATE,   NT.MODIFIED_DATE_UTC,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   NT.CREATED_BY,   NT.CREATED_BY_NAME,   NT.SYSTEM_ID,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   NT.DEPARTMENT_CODE,   NT.VALUE_DATE,   NT.DBTR_ACCT_NO,   NT.CDTR_ACCT_NO,   NT.CR_ACCT_IDENTIFICATION,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.CLRSYSREF,   NT.PAYMENT_ENDTOEND_ID,   NT.INTRBK_STTLM_AMNT,   NT.REVERSAL_AMOUNT,   case    when NT.CDTR_IBAN is not null    and NT.CR_ACCT_IDENTIFICATION is null then NT.ACCOUNT_CURRENCY    when NT.CDTR_IBAN is null    and NT.CR_ACCT_IDENTIFICATION is not null then UPPER('AED')    else UPPER('OTHERS')   end as CURRENCY,   NT.PROCESS_TYPE,   NTPL.reversal_code,   NT.PROCESS_GROUP  from   NPSS_TRANSACTIONS NT  inner join npss_trn_process_log NTPL on   NT.UETR = NTPL.UETR and NT.STATUS = NTPL.STATUS  left join TRANSACTION_SET TS on   NT.NPSST_ID = TS.TRN_ID   and NT.DTT_CODE = TS.DTT_CODE  inner join <TRAN_DB>.CORE_Q_STATUS_ROLES QR on   NT.STATUS = QR.PROCESS_QUEUE_STATUS   and NT.PROCESS_STATUS = QR.QUEUE_CODE  inner join <TRAN_DB>.CORE_APP_Q_SETUP PQ on   NT.PROCESS_STATUS = PQ.QUEUE_CODE) VW $WHERE order by  PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Reversal Tran Queue CCD","filter":[{"filter_name":"CURRENCY","binding_name":"CURRENCY","binding_value":"","source_name":"AED","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}},"e_1671116806678":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"E_1671116806678","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1671117829324","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS FH Reversal Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1671116969274","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671116969473","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1675348211329","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM, PROCESS_STATUS,  STATUS from  (  select   NT.CREATED_DATE,   NT.STATUS,   NT.PROCESS_STATUS,   NT.UETR,   NT.PROCESSING_SYSTEM,   NT.TENANT_ID,   NT.MODIFIED_DATE,   NT.MODIFIED_DATE_UTC,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   NT.CREATED_BY,   NT.CREATED_BY_NAME,   NT.DBTR_IBAN,   NT.SYSTEM_ID,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   NT.DEPARTMENT_CODE,   NT.VALUE_DATE,   NT.CR_ACCT_IDENTIFICATION,   NT.DBTR_ACCT_NO,   NT.CDTR_ACCT_NO,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.CLRSYSREF,   NT.PAYMENT_ENDTOEND_ID,   NT.INTRBK_STTLM_AMNT,   NT.REVERSAL_AMOUNT,   NT.PROCESS_TYPE,   NTPL.reversal_code  from   NPSS_TRANSACTIONS NT  inner join npss_trn_process_log NTPL on   NT.UETR = NTPL.UETR   and NT.STATUS = NTPL.STATUS  left join TRANSACTION_SET TS on   NT.NPSST_ID = TS.TRN_ID   and NT.DTT_CODE = TS.DTT_CODE  inner join <TRAN_DB>.CORE_Q_STATUS_ROLES QR on   NT.STATUS = QR.PROCESS_QUEUE_STATUS   and NT.PROCESS_STATUS = QR.QUEUE_CODE  inner join <TRAN_DB>.CORE_APP_Q_SETUP PQ on   NT.PROCESS_STATUS = PQ.QUEUE_CODE) VW $WHERE order by  PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS FH Reversal Tran Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.queue.context_menu = []
		this.queue.views = {}
		this.queue.onChangecomponent = new EventEmitter<any>()
		this.queue.show = true
		this.queue.dynamic_param = {}
	
		// Component level properties - "Transaction List" 
		this.transaction_list.uictrl_code = "datatable"
		this.transaction_list.uicgc_desc = "Transaction List"
		this.transaction_list.uicgc_code = "uicgc_2"
		this.transaction_list.params = {"need_pag_datatable":"Y","need_search":"N"}
		this.transaction_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863233602","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Reversal Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1671020531499","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1671020563113","date_format":false,"currency_format":true},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1671020567393","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1671020573899","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1671020604449","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1671020974992","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1671020996246","date_format":false},{"column_name":"REMARKS","alias_name":"","mq_id":"MQ_1671025906550","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1671030938331","date_format":false},{"column_name":"REVERSAL_AMOUNT","alias_name":"","mq_id":"MQ_1671108760508","date_format":false,"currency_format":true},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1675410254697","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1681124808770","date_format":false}],"joins":[]},"eq_text":"select  distinct UETR,  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  REVERSAL_DESCRIPTION,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  fn_pcidss_decrypt(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  CURRENCY,  REMARKS,  REVERSAL_AMOUNT,  ACCOUNT_CURRENCY,  BUY_RATE,  TRAN_CHARGE,  BUY_MARGIN,  TRAN_AMOUNT,  SELL_MARGIN,  SELL_RATE from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM,   case    when A.CDTR_IBAN is not null    and A.CR_ACCT_IDENTIFICATION is null then A.ACCOUNT_CURRENCY    when A.CDTR_IBAN is null    and A.CR_ACCT_IDENTIFICATION is not null then UPPER('AED')    else UPPER('OTHERS')   end as CURRENCY,   A.REMARKS,   A.CR_ACCT_IDENTIFICATION,   A.REVERSAL_AMOUNT,   NTPL.REVERSAL_CODE,   A.ACCOUNT_CURRENCY,   A.BUY_RATE,   A.TRAN_CHARGE,   A.BUY_MARGIN,   A.TRAN_AMOUNT,   A.SELL_MARGIN,   A.SELL_RATE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   NPSS_TRANSACTIONS A  left join npss_trn_process_log NTPL on   A.UETR = NTPL.UETR   and ntpl.status = 'IP_RCT_REVERSAL_REQ_RECEIVED'  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = ntpl.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Reversal Transaction CCD","filter":[{"filter_name":"CURRENCY","binding_name":"CURRENCY","binding_value":"","source_name":"AED","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Inward Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Reversal Amount","target_column":"REVERSAL_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Reversal Reason","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remarks","target_column":"REMARKS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"dependson":""},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"dependson":""}]}}}}},"e_1671117277660":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"E_1671117277660","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1671118207740","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS FH Reversal Tran MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1671117222780","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1671117576110","date_format":false,"currency_format":true},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1671117576292","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1671117576476","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1671117576980","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1671117577180","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1671117577564","date_format":false},{"column_name":"REMARKS","alias_name":"","mq_id":"MQ_1671117577780","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1671117655930","date_format":false},{"column_name":"REVERSAL_AMOUNT","alias_name":"","mq_id":"MQ_1671117656154","date_format":false,"currency_format":true}],"joins":[]},"eq_text":"select distinct UETR,  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  fn_pcidss_decrypt(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  REMARKS,  REVERSAL_AMOUNT from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.CR_ACCT_IDENTIFICATION,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM,   A.REMARKS,   A.REVERSAL_AMOUNT,   NTPL.reversal_code  from   NPSS_TRANSACTIONS A  inner join npss_trn_process_log NTPL on   A.UETR = NTPL.UETR  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS FH Reversal Transaction CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Inward Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Reversal Amount","target_column":"REVERSAL_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remarks","target_column":"REMARKS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.transaction_list.context_menu = []
		this.transaction_list.views = {}
		this.transaction_list.onChangecomponent = new EventEmitter<any>()
		this.transaction_list.show = true
		this.transaction_list.dynamic_param = {}
	
		// Component level properties - "Navigation" 
		this.navigation.uictrl_code = "dynamic_ui"
		this.navigation.uicgc_desc = "Navigation"
		this.navigation.uicgc_code = "uicgc_3"
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
		
		// "Review" Button of "Navigation" component
		this.navigation_review.label_name = "Review"
		this.navigation_review.show = true
		this.navigation_review.disabled = false
		this.navigation_review.params = {"icon_only":false,"uicgcc_style":"fa fa-arrow-circle-right"}
		this.navigation_review.dynamic_param = {}
		this.navigation_review.role = []
		this.navigation_review.action = ""
		
		// "View Tran" Button of "Navigation" component
		this.navigation_view_tran.label_name = "View Tran"
		this.navigation_view_tran.show = true
		this.navigation_view_tran.disabled = true
		this.navigation_view_tran.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.navigation_view_tran.dynamic_param = {}
		this.navigation_view_tran.role = []
		this.navigation_view_tran.action = ""
		
		// "View Process Log" Button of "Navigation" component
		this.navigation_view_process_log.label_name = "View Process Log"
		this.navigation_view_process_log.show = true
		this.navigation_view_process_log.disabled = false
		this.navigation_view_process_log.params = {"icon_only":false,"uicgcc_style":"fa fa-building"}
		this.navigation_view_process_log.dynamic_param = {}
		this.navigation_view_process_log.role = []
		this.navigation_view_process_log.action = ""
		
		// "View Message Log" Button of "Navigation" component
		this.navigation_view_message_log.label_name = "View Message Log"
		this.navigation_view_message_log.show = true
		this.navigation_view_message_log.disabled = true
		this.navigation_view_message_log.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.navigation_view_message_log.dynamic_param = {}
		this.navigation_view_message_log.role = []
		this.navigation_view_message_log.action = ""
	
		// Component level properties - "Reversal Action UI" 
		this.reversal_action_ui.uictrl_code = "dynamic_ui"
		this.reversal_action_ui.uicgc_desc = "Reversal Action UI"
		this.reversal_action_ui.uicgc_code = "uicgc_4"
		this.reversal_action_ui.params = {}
		this.reversal_action_ui.datasource = {}
		this.reversal_action_ui.context_menu = []
		this.reversal_action_ui.views = {}
		this.reversal_action_ui.onChangecomponent = new EventEmitter<any>()
		this.reversal_action_ui.show = true
		this.reversal_action_ui.dynamic_param = {}
		this.reversal_action_ui.f_reversal_action_ui = {"show":true}
		this.reversal_action_ui.current_view = "f_reversal_action_ui"
		
		// "Back" Button of "Reversal Action UI" component
		this.reversal_action_ui_back.label_name = "Back"
		this.reversal_action_ui_back.show = true
		this.reversal_action_ui_back.disabled = false
		this.reversal_action_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.reversal_action_ui_back.dynamic_param = {}
		this.reversal_action_ui_back.role = []
		this.reversal_action_ui_back.action = ""
		
		// "Accept" Button of "Reversal Action UI" component
		this.reversal_action_ui_accept.label_name = "Accept"
		this.reversal_action_ui_accept.show = true
		this.reversal_action_ui_accept.disabled = false
		this.reversal_action_ui_accept.params = {"icon_only":false,"uicgcc_style":"fa fa-thumbs-o-up"}
		this.reversal_action_ui_accept.dynamic_param = {}
		this.reversal_action_ui_accept.role = []
		this.reversal_action_ui_accept.action = ""
		
		// "C-Approve" Button of "Reversal Action UI" component
		this.reversal_action_ui_capprove.label_name = "C-Approve"
		this.reversal_action_ui_capprove.show = true
		this.reversal_action_ui_capprove.disabled = false
		this.reversal_action_ui_capprove.params = {"icon_only":false,"uicgcc_style":"fa fa-share"}
		this.reversal_action_ui_capprove.dynamic_param = {}
		this.reversal_action_ui_capprove.role = []
		this.reversal_action_ui_capprove.action = ""
		
		// "Approve" Button of "Reversal Action UI" component
		this.reversal_action_ui_approve.label_name = "Approve"
		this.reversal_action_ui_approve.show = true
		this.reversal_action_ui_approve.disabled = false
		this.reversal_action_ui_approve.params = {"icon_only":false,"uicgcc_style":""}
		this.reversal_action_ui_approve.dynamic_param = {}
		this.reversal_action_ui_approve.role = []
		this.reversal_action_ui_approve.action = ""
		
		// "Change Return Reason" Button of "Reversal Action UI" component
		this.reversal_action_ui_change_return_reason.label_name = "Change Return Reason"
		this.reversal_action_ui_change_return_reason.show = true
		this.reversal_action_ui_change_return_reason.disabled = false
		this.reversal_action_ui_change_return_reason.params = {"icon_only":false,"uicgcc_style":"fa fa-exchange"}
		this.reversal_action_ui_change_return_reason.dynamic_param = {}
		this.reversal_action_ui_change_return_reason.role = []
		this.reversal_action_ui_change_return_reason.action = ""
		
		// "Cancel & Send to Maker" Button of "Reversal Action UI" component
		this.reversal_action_ui_cancel__send_to_maker.label_name = "Cancel & Send to Maker"
		this.reversal_action_ui_cancel__send_to_maker.show = true
		this.reversal_action_ui_cancel__send_to_maker.disabled = false
		this.reversal_action_ui_cancel__send_to_maker.params = {"icon_only":false,"uicgcc_style":"fa fa-remove"}
		this.reversal_action_ui_cancel__send_to_maker.dynamic_param = {}
		this.reversal_action_ui_cancel__send_to_maker.role = []
		this.reversal_action_ui_cancel__send_to_maker.action = ""
		
		// "Send to Maker" Button of "Reversal Action UI" component
		this.reversal_action_ui_send_to_maker.label_name = "Send to Maker"
		this.reversal_action_ui_send_to_maker.show = true
		this.reversal_action_ui_send_to_maker.disabled = false
		this.reversal_action_ui_send_to_maker.params = {"icon_only":false,"uicgcc_style":"fa fa-step-backward"}
		this.reversal_action_ui_send_to_maker.dynamic_param = {}
		this.reversal_action_ui_send_to_maker.role = []
		this.reversal_action_ui_send_to_maker.action = ""
		
		// "Force Post" Button of "Reversal Action UI" component
		this.reversal_action_ui_force_post.label_name = "Force Post"
		this.reversal_action_ui_force_post.show = true
		this.reversal_action_ui_force_post.disabled = false
		this.reversal_action_ui_force_post.params = {"icon_only":false,"uicgcc_style":"fa fa-check-square-o"}
		this.reversal_action_ui_force_post.dynamic_param = {}
		this.reversal_action_ui_force_post.role = []
		this.reversal_action_ui_force_post.action = ""
		
		// "Trigger btn" Button of "Reversal Action UI" component
		this.reversal_action_ui_trigger_btn.label_name = "Trigger btn"
		this.reversal_action_ui_trigger_btn.show = true
		this.reversal_action_ui_trigger_btn.disabled = false
		this.reversal_action_ui_trigger_btn.params = {"icon_only":false,"uicgcc_style":""}
		this.reversal_action_ui_trigger_btn.dynamic_param = {}
		this.reversal_action_ui_trigger_btn.role = []
		this.reversal_action_ui_trigger_btn.action = ""
		
		// "Reject" Button of "Reversal Action UI" component
		this.reversal_action_ui_reject.label_name = "Reject"
		this.reversal_action_ui_reject.show = true
		this.reversal_action_ui_reject.disabled = false
		this.reversal_action_ui_reject.params = {"icon_only":false,"uicgcc_style":"fa fa-thumbs-o-down"}
		this.reversal_action_ui_reject.dynamic_param = {}
		this.reversal_action_ui_reject.role = []
		this.reversal_action_ui_reject.action = ""
	
		// Component level properties - "Accept UI" 
		this.accept_ui.uictrl_code = "dynamic_ui"
		this.accept_ui.uicgc_desc = "Accept UI"
		this.accept_ui.uicgc_code = "uicgc_5"
		this.accept_ui.params = {}
		this.accept_ui.datasource = {}
		this.accept_ui.context_menu = []
		this.accept_ui.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS PL RTN Reason UI","tab_order":0,"tab_name":"","uicgc_description":"Accept UI","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.accept_ui.onChangecomponent = new EventEmitter<any>()
		this.accept_ui.show = true
		this.accept_ui.dynamic_param = {}
		this.accept_ui.f_npss_pl_rtn_reason_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.accept_ui.form_name = "f_npss_pl_rtn_reason_ui"
		
		// "Save" Button of "Accept UI" component
		this.accept_ui_save.label_name = "Save"
		this.accept_ui_save.show = true
		this.accept_ui_save.disabled = false
		this.accept_ui_save.params = {"icon_only":false,"uicgcc_style":"fa fa-floppy-o"}
		this.accept_ui_save.dynamic_param = {}
		this.accept_ui_save.role = []
		this.accept_ui_save.action = ""
	
		// Component level properties - "Change Return UI" 
		this.change_return_ui.uictrl_code = "dynamic_ui"
		this.change_return_ui.uicgc_desc = "Change Return UI"
		this.change_return_ui.uicgc_code = "uicgc_6"
		this.change_return_ui.params = {}
		this.change_return_ui.datasource = {}
		this.change_return_ui.context_menu = []
		this.change_return_ui.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS PL Change RTN Reason UI","tab_order":0,"tab_name":"","uicgc_description":"Change Return UI","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.change_return_ui.onChangecomponent = new EventEmitter<any>()
		this.change_return_ui.show = true
		this.change_return_ui.dynamic_param = {}
		this.change_return_ui.f_npss_pl_change_rtn_reason_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.change_return_ui.form_name = "f_npss_pl_change_rtn_reason_ui"
		
		// "Save" Button of "Change Return UI" component
		this.change_return_ui_save.label_name = "Save"
		this.change_return_ui_save.show = true
		this.change_return_ui_save.disabled = false
		this.change_return_ui_save.params = {"icon_only":false,"uicgcc_style":"fa fa-floppy-o"}
		this.change_return_ui_save.dynamic_param = {}
		this.change_return_ui_save.role = []
		this.change_return_ui_save.action = ""
	
		// Component level properties - "Process Log List" 
		this.process_log_list.uictrl_code = "datatable"
		this.process_log_list.uicgc_desc = "Process Log List"
		this.process_log_list.uicgc_code = "uicgc_7"
		this.process_log_list.params = {"need_pag_datatable":"Y","need_search":"N"}
		this.process_log_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_7","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863318385","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Return Process Log CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_REVPL_PROCESSSTATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_REVPL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Reversal Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Reversal Reason","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.process_log_list.context_menu = []
		this.process_log_list.views = {}
		this.process_log_list.onChangecomponent = new EventEmitter<any>()
		this.process_log_list.show = true
		this.process_log_list.dynamic_param = {}
	
		// Component level properties - "Remarks List" 
		this.remarks_list.uictrl_code = "datatable"
		this.remarks_list.uicgc_desc = "Remarks List"
		this.remarks_list.uicgc_code = "uicgc_8"
		this.remarks_list.params = {"need_pag_datatable":"Y","need_search":"N"}
		this.remarks_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_8","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863771649","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Remarks MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"remarks","alias_name":"","mq_id":"MQ_1679295852705","date_format":false}],"joins":[]},"eq_text":"select remarks,npsst_id,tenant_id  from npss_transactions nt $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Remarks CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Remarks","target_column":"remarks","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.remarks_list.context_menu = []
		this.remarks_list.views = {}
		this.remarks_list.onChangecomponent = new EventEmitter<any>()
		this.remarks_list.show = true
		this.remarks_list.dynamic_param = {}
	
		// Component level properties - "Reversal UI" 
		this.reversal_ui.uictrl_code = "dynamic_ui"
		this.reversal_ui.uicgc_desc = "Reversal UI"
		this.reversal_ui.uicgc_code = "uicgc_9"
		this.reversal_ui.params = {}
		this.reversal_ui.datasource = {}
		this.reversal_ui.context_menu = []
		this.reversal_ui.views = {"first":"DTT_1304_1665901217208","is_tab_mode":"N","dtt_1304_1665901217208":{"0":[{"dttv_id":"Reversal AED UI","tab_order":0,"tab_name":"","uicgc_description":"Reversal UI","role_description":"default","dtt_description":"NPSS Transactions"}]}}
		this.reversal_ui.onChangecomponent = new EventEmitter<any>()
		this.reversal_ui.show = true
		this.reversal_ui.dynamic_param = {}
		this.reversal_ui.f_reversal_aed_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.reversal_ui.form_name = "f_reversal_aed_ui"
	
		// Component level properties - "Remarks UI" 
		this.remarks_ui.uictrl_code = "dynamic_ui"
		this.remarks_ui.uicgc_desc = "Remarks UI"
		this.remarks_ui.uicgc_code = "uicgc_10"
		this.remarks_ui.params = {}
		this.remarks_ui.datasource = {}
		this.remarks_ui.context_menu = []
		this.remarks_ui.views = {}
		this.remarks_ui.onChangecomponent = new EventEmitter<any>()
		this.remarks_ui.show = true
		this.remarks_ui.dynamic_param = {}
		this.remarks_ui.f_remarks_ui = {"show":true}
		this.remarks_ui.current_view = "f_remarks_ui"
		
		// "Save" Button of "Remarks UI" component
		this.remarks_ui_save.label_name = "Save"
		this.remarks_ui_save.show = true
		this.remarks_ui_save.disabled = false
		this.remarks_ui_save.params = {"icon_only":false,"uicgcc_style":"fa fa-floppy-o"}
		this.remarks_ui_save.dynamic_param = {}
		this.remarks_ui_save.role = []
		this.remarks_ui_save.action = ""
	
		// Component level properties - "View Dr Cr Details" 
		this.view_dr_cr_details.uictrl_code = "datatable"
		this.view_dr_cr_details.uicgc_desc = "View Dr Cr Details"
		this.view_dr_cr_details.uicgc_code = "uicgc_11"
		this.view_dr_cr_details.params = {"advance_dynamic_search":"N","need_vertical":"Y","need_search":"N"}
		this.view_dr_cr_details.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_11","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1673093401100","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Decr HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1673092056492","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092056684","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092056908","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1673092057076","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092057228","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092057420","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092057588","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1673092057748","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1673092057924","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1673092127114","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1673092127282","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1673092127458","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1673092127626","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1673092127778","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092127946","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092128266","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092128473","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1673092236606","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092236782","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092236942","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092237110","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1673092237270","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1673092237447","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1673092237623","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1673092290325","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1673092290485","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673092290653","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1673092290821","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1673092290981","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1673092291149","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1673092291341","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1673092291501","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1673092354435","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1673092354603","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1673092354779","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1673092354947","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1673092355115","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1673092355283","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1673092355467","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092402433","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1673092402801","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1673092403129","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(DBTR_ACCT_NO,$PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  fn_pcidss_decrypt(CR_ACCT_IDENTIFICATION,$PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  TRAN_REF_ID,  PROCESSING_SYSTEM from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   A.CR_ACCT_IDENTIFICATION,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Decr Vertical Dr Cr CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Created Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Acceptance Date Time","target_column":"ACCP_DATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Sort Code","target_column":"CR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Identification","target_column":"CR_ACCT_IDENTIFICATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Sort Code","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Identification","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Private Identification","target_column":"DBTR_PRVT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Other Issuer","target_column":"DBTR_OTHER_ISSUER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.view_dr_cr_details.context_menu = []
		this.view_dr_cr_details.views = {}
		this.view_dr_cr_details.onChangecomponent = new EventEmitter<any>()
		this.view_dr_cr_details.show = true
		this.view_dr_cr_details.dynamic_param = {"column_header_name":"Field","value_header_name":"Value"}
	
		// Component level properties - "Back UI" 
		this.back_ui.uictrl_code = "dynamic_ui"
		this.back_ui.uicgc_desc = "Back UI"
		this.back_ui.uicgc_code = "uicgc_12"
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
		this.view_payment_details.uicgc_code = "uicgc_14"
		this.view_payment_details.params = {"need_vertical":"Y","advance_dynamic_search":"N","need_search":"N"}
		this.view_payment_details.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_14","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1673093439023","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Decr HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1673092056492","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092056684","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092056908","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1673092057076","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092057228","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092057420","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092057588","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1673092057748","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1673092057924","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1673092127114","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1673092127282","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1673092127458","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1673092127626","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1673092127778","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092127946","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092128266","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092128473","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1673092236606","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092236782","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092236942","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092237110","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1673092237270","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1673092237447","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1673092237623","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1673092290325","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1673092290485","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673092290653","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1673092290821","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1673092290981","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1673092291149","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1673092291341","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1673092291501","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1673092354435","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1673092354603","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1673092354779","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1673092354947","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1673092355115","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1673092355283","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1673092355467","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092402433","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1673092402801","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1673092403129","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(DBTR_ACCT_NO,$PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  fn_pcidss_decrypt(CR_ACCT_IDENTIFICATION,$PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  TRAN_REF_ID,  PROCESSING_SYSTEM from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   A.CR_ACCT_IDENTIFICATION,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Decr Vertical Payment CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Id","target_column":"NPSST_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Txn Value Date","target_column":"VALUE_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd-MM-yyyy HH:mm:ss\"","date_format":true},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Batch Id","target_column":"EXHF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E reference id","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Category Purpose","target_column":"category_purpose","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Issuer Type Code","target_column":"issuer_type_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remittance Info","target_column":"REMITTANCE_INFO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.view_payment_details.context_menu = []
		this.view_payment_details.views = {}
		this.view_payment_details.onChangecomponent = new EventEmitter<any>()
		this.view_payment_details.show = true
		this.view_payment_details.dynamic_param = {"column_header_name":"Field","value_header_name":"Value"}
	
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
	
		// Component level properties - "History Detail" 
		this.history_detail.uictrl_code = "datatable"
		this.history_detail.uicgc_desc = "History Detail"
		this.history_detail.uicgc_code = "uicgc_16"
		this.history_detail.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.history_detail.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_16","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1669384350002","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.history_detail.context_menu = []
		this.history_detail.views = {}
		this.history_detail.onChangecomponent = new EventEmitter<any>()
		this.history_detail.show = true
		this.history_detail.dynamic_param = {}
	
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
	
		// Component level properties - "Message Detail" 
		this.message_detail.uictrl_code = "datatable"
		this.message_detail.uicgc_desc = "Message Detail"
		this.message_detail.uicgc_code = "uicgc_18"
		this.message_detail.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.message_detail.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_18","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1669384391224","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1668573850306","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1668573852117","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1668573852786","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1668573853731","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1668573854459","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1668573869044","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1668573871186","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573874178","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573876315","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668573884586","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1668573900766","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1668573911947","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1668573917043","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1668573918291","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1668573918796","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1668573919355","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1668573919955","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1668573925605","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1668587107858","date_format":false}],"joins":[]},"eq_text":"select  NPSSTRRD_ID,  MSG_ID,  UETR,  PARENT_NPSSTRRD_REFNO,  NPSSTRRD_REFNO,  PROCESS_CODE,  PROCESS_DETAIL,  EXHF_ID,  PROCESS_NAME,  MESSAGE_DESC,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  STATUS,  PROCESS_STATUS,PROCESS_TYPE,  MESSAGE_DATA,  CREATEDDATEMILISEC,  DT_CODE,  DTT_CODE from  (  select   NPSSTRRD.NPSSTRRD_ID,   NPSSTRRD.MSG_ID,   NPSSTRRD.UETR,   NPSSTRRD.PARENT_NPSSTRRD_REFNO,   NPSSTRRD.NPSSTRRD_REFNO,   NPSSTRRD.MESSAGE_DATA,   NPSSTRRD.PROCESS_CODE,   NPSSTRRD.PROCESS_DETAIL,   NPSSTRRD.EXHF_ID,   NPSSTRRD.PROCESS_NAME,   NPSSTRRD.MESSAGE_DESC,   NPSSTRRD.CHANNEL_ID,   NPSSTRRD.CHANNEL_REFNO,   NPSSTRRD.CHANNEL_USERID,   NPSSTRRD.CHANNEL_PRODUCT,   NPSSTRRD.CHANNEL_SUB_PRODUCT,   NPSSTRRD.CHANNEL_TRAN_CODE,   NPSSTRRD.CREATED_BY,   NPSSTRRD.CREATED_BY_NAME,   NPSSTRRD.CREATED_DATE,   NPSSTRRD.DT_CODE,   NPSSTRRD.DT_DESCRIPTION,   NPSSTRRD.DTT_CODE,   NPSSTRRD.DTT_DESCRIPTION,   NPSSTRRD.MODIFIED_BY,   NPSSTRRD.MODIFIED_BY_NAME,   NPSSTRRD.MODIFIED_DATE,   NPSSTRRD.STATUS,   NPSSTRRD.PROCESS_STATUS,NT.PROCESS_TYPE,   NPSSTRRD.SYSTEM_ID,   NPSSTRRD.SYSTEM_NAME,   NPSSTRRD.TENANT_ID,   NPSSTRRD.APP_ID,   NPSSTRRD.VERSION_NO,   TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC  from   NPSS_TRN_REQ_RESP_DTLS NPSSTRRD  inner join NPSS_TRANSACTIONS NT on   NPSSTRRD.UETR = NT.UETR) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS REQ RES CCD","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.message_detail.context_menu = []
		this.message_detail.views = {}
		this.message_detail.onChangecomponent = new EventEmitter<any>()
		this.message_detail.show = true
		this.message_detail.dynamic_param = {}
	
		// Component level properties - "Message Detail Action" 
		this.message_detail_action.uictrl_code = "dynamic_ui"
		this.message_detail_action.uicgc_desc = "Message Detail Action"
		this.message_detail_action.uicgc_code = "uicgc_19"
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
		this.message_detail_ui.uicgc_code = "uicgc_20"
		this.message_detail_ui.params = {}
		this.message_detail_ui.datasource = {}
		this.message_detail_ui.context_menu = []
		this.message_detail_ui.views = {"first":"DTT_1304_1665903906193","is_tab_mode":"N","dtt_1304_1665903906193":{"0":[{"dttv_id":"NPSS Message Data UI","tab_order":0,"tab_name":"","uicgc_description":"Message Detail UI","role_description":"default","dtt_description":"NPSS TRN REQ RESP DTLS"}]}}
		this.message_detail_ui.onChangecomponent = new EventEmitter<any>()
		this.message_detail_ui.show = true
		this.message_detail_ui.dynamic_param = {}
		this.message_detail_ui.f_npss_message_data_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.message_detail_ui.form_name = "f_npss_message_data_ui"
	
		// Component level properties - "Response UI" 
		this.response_ui.uictrl_code = "dynamic_ui"
		this.response_ui.uicgc_desc = "Response UI"
		this.response_ui.uicgc_code = "uicgc_23"
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
		this.request_ui.uicgc_code = "uicgc_24"
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
		this.single_back_ui.uicgc_code = "uicgc_25"
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
	
		// Component level properties - "Process Log Control UI" 
		this.process_log_control_ui.uictrl_code = "dynamic_ui"
		this.process_log_control_ui.uicgc_desc = "Process Log Control UI"
		this.process_log_control_ui.uicgc_code = "uicgc_26"
		this.process_log_control_ui.params = {}
		this.process_log_control_ui.datasource = {}
		this.process_log_control_ui.context_menu = []
		this.process_log_control_ui.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS Reversal PLog UI","tab_order":0,"tab_name":"","uicgc_description":"Process Log Control UI","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.process_log_control_ui.onChangecomponent = new EventEmitter<any>()
		this.process_log_control_ui.show = true
		this.process_log_control_ui.dynamic_param = {}
		this.process_log_control_ui.f_npss_reversal_plog_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.process_log_control_ui.form_name = "f_npss_reversal_plog_ui"
	
		// Component level properties - "Trig action for List UI" 
		this.trig_action_for_list_ui.uictrl_code = "dynamic_ui"
		this.trig_action_for_list_ui.uicgc_desc = "Trig action for List UI"
		this.trig_action_for_list_ui.uicgc_code = "uicgc_30"
		this.trig_action_for_list_ui.params = {}
		this.trig_action_for_list_ui.datasource = {}
		this.trig_action_for_list_ui.context_menu = []
		this.trig_action_for_list_ui.views = {}
		this.trig_action_for_list_ui.onChangecomponent = new EventEmitter<any>()
		this.trig_action_for_list_ui.show = true
		this.trig_action_for_list_ui.dynamic_param = {}
		
		// "Trg Queue" Button of "Trig action for List UI" component
		this.trig_action_for_list_ui_trg_queue.label_name = "Trg Queue"
		this.trig_action_for_list_ui_trg_queue.show = true
		this.trig_action_for_list_ui_trg_queue.disabled = false
		this.trig_action_for_list_ui_trg_queue.params = {"icon_only":false,"uicgcc_style":""}
		this.trig_action_for_list_ui_trg_queue.dynamic_param = {}
		this.trig_action_for_list_ui_trg_queue.role = []
		this.trig_action_for_list_ui_trg_queue.action = ""
		
		// "Trig Tran List" Button of "Trig action for List UI" component
		this.trig_action_for_list_ui_trig_tran_list.label_name = "Trig Tran List"
		this.trig_action_for_list_ui_trig_tran_list.show = true
		this.trig_action_for_list_ui_trig_tran_list.disabled = false
		this.trig_action_for_list_ui_trig_tran_list.params = {"icon_only":false,"uicgcc_style":""}
		this.trig_action_for_list_ui_trig_tran_list.dynamic_param = {}
		this.trig_action_for_list_ui_trig_tran_list.role = []
		this.trig_action_for_list_ui_trig_tran_list.action = ""
	
		// Component level properties - "Get Usable Balance Widget" 
		this.get_usable_balance_widget.uictrl_code = "custom_widget"
		this.get_usable_balance_widget.uicgc_desc = "Get Usable Balance Widget"
		this.get_usable_balance_widget.uicgc_code = "uicgc_31"
		this.get_usable_balance_widget.params = {}
		this.get_usable_balance_widget.datasource = {}
		this.get_usable_balance_widget.context_menu = []
		this.get_usable_balance_widget.views = {}
		this.get_usable_balance_widget.onChangecomponent = new EventEmitter<any>()
		this.get_usable_balance_widget.show = true
		this.get_usable_balance_widget.dynamic_param = {}
	
		// Component level properties - "Cancel Return UI" 
		this.cancel_return_ui.uictrl_code = "dynamic_ui"
		this.cancel_return_ui.uicgc_desc = "Cancel Return UI"
		this.cancel_return_ui.uicgc_code = "uicgc_32"
		this.cancel_return_ui.params = {}
		this.cancel_return_ui.datasource = {}
		this.cancel_return_ui.context_menu = []
		this.cancel_return_ui.views = {"first":"DTT_1304_1665901217208","is_tab_mode":"N","dtt_1304_1665901217208":{"0":[{"dttv_id":"NPSS Remarks UI","tab_order":0,"tab_name":"","uicgc_description":"Cancel Return UI","role_description":"default","dtt_description":"NPSS Transactions"}]}}
		this.cancel_return_ui.onChangecomponent = new EventEmitter<any>()
		this.cancel_return_ui.show = true
		this.cancel_return_ui.dynamic_param = {}
		this.cancel_return_ui.f_npss_remarks_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.cancel_return_ui.form_name = "f_npss_remarks_ui"
		
		// "Return to Maker" Button of "Cancel Return UI" component
		this.cancel_return_ui_return_to_maker.label_name = "Return to Maker"
		this.cancel_return_ui_return_to_maker.show = true
		this.cancel_return_ui_return_to_maker.disabled = false
		this.cancel_return_ui_return_to_maker.params = {"icon_only":false,"uicgcc_style":"fa fa-floppy-o"}
		this.cancel_return_ui_return_to_maker.dynamic_param = {}
		this.cancel_return_ui_return_to_maker.role = []
		this.cancel_return_ui_return_to_maker.action = ""
	
		// Component level properties - "Reject UI" 
		this.reject_ui.uictrl_code = "dynamic_ui"
		this.reject_ui.uicgc_desc = "Reject UI"
		this.reject_ui.uicgc_code = "uicgc_33"
		this.reject_ui.params = {}
		this.reject_ui.datasource = {}
		this.reject_ui.context_menu = []
		this.reject_ui.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS Reject UI","tab_order":0,"tab_name":"","uicgc_description":"Reject UI","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.reject_ui.onChangecomponent = new EventEmitter<any>()
		this.reject_ui.show = true
		this.reject_ui.dynamic_param = {}
		this.reject_ui.f_npss_reject_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.reject_ui.form_name = "f_npss_reject_ui"
	
		// Component level properties - "Send to Maker UI" 
		this.send_to_maker_ui.uictrl_code = "dynamic_ui"
		this.send_to_maker_ui.uicgc_desc = "Send to Maker UI"
		this.send_to_maker_ui.uicgc_code = "uicgc_34"
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
	
		// Component level properties - "Reversal Additional UI" 
		this.reversal_additional_ui.uictrl_code = "dynamic_ui"
		this.reversal_additional_ui.uicgc_desc = "Reversal Additional UI"
		this.reversal_additional_ui.uicgc_code = "uicgc_35"
		this.reversal_additional_ui.params = {}
		this.reversal_additional_ui.datasource = {}
		this.reversal_additional_ui.context_menu = []
		this.reversal_additional_ui.views = {"first":"DTT_1304_1665901217208","is_tab_mode":"N","dtt_1304_1665901217208":{"0":[{"dttv_id":"NPSS Tran Remarks UI","tab_order":0,"tab_name":"","uicgc_description":"Reversal Additional UI","role_description":"default","dtt_description":"NPSS Transactions"}]}}
		this.reversal_additional_ui.onChangecomponent = new EventEmitter<any>()
		this.reversal_additional_ui.show = true
		this.reversal_additional_ui.dynamic_param = {}
		this.reversal_additional_ui.f_npss_tran_remarks_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.reversal_additional_ui.form_name = "f_npss_tran_remarks_ui"
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_36"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1665901217208","is_tab_mode":"N","dtt_1304_1665901217208":{"0":[{"dttv_id":"NPSS Reversal SRCH","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Transactions"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_reversal_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_reversal_srch"
		
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
	
		// Component level properties - "CBS Accounts" 
		this.cbs_accounts.uictrl_code = "datatable"
		this.cbs_accounts.uicgc_desc = "CBS Accounts"
		this.cbs_accounts.uicgc_code = "uicgc_37"
		this.cbs_accounts.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.cbs_accounts.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_37","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1674106680765","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Rev CBS Account MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"ACCOUNT_NUMBER","alias_name":"","mq_id":"MQ_1674106327804","date_format":false},{"column_name":"ACCOUNT_NAME","alias_name":"","mq_id":"MQ_1674106327988","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1674106525607","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1674106532094","date_format":false}],"joins":[]},"eq_text":"select  ACCOUNT_NUMBER,  NPSST_ID,  ACCOUNT_NAME,  TENANT_ID from  (  select   case when cnca.alternate_account_type in ('VA.IBAN','VA.BBAN') then ACCOUNT_NUMBER         else null         end as account_number,         case when cnca.alternate_account_type in ('VA.IBAN','VA.BBAN') then ACCOUNT_NAME         else null         end as account_name,   CNCA.ALTERNATE_ACCOUNT_ID,   NT.TENANT_ID,   NT.CDTR_IBAN,   NT.NPSST_ID,   NT.DTT_CODE,   NT.DT_CODE  from   <tran_db>.CORE_NC_CBS_ACCOUNTS CNCA  inner join NPSS_TRANSACTIONS NT on   CNCA.ALTERNATE_ACCOUNT_ID = NT.CDTR_IBAN)V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Rev CBS Account CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Real Account No","target_column":"ACCOUNT_NUMBER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Real Account Name","target_column":"ACCOUNT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.cbs_accounts.context_menu = []
		this.cbs_accounts.views = {}
		this.cbs_accounts.onChangecomponent = new EventEmitter<any>()
		this.cbs_accounts.show = true
		this.cbs_accounts.dynamic_param = {}
	
		// Component level properties - "Original Transaction Details" 
		this.original_transaction_details.uictrl_code = "datatable"
		this.original_transaction_details.uicgc_desc = "Original Transaction Details"
		this.original_transaction_details.uicgc_code = "uicgc_38"
		this.original_transaction_details.params = {"need_pag_datatable":"Y","need_vertical":"Y","need_search":"N"}
		this.original_transaction_details.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_38","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1677670972659","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"Reversal Vertical MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1677667251146","date_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1677667251485","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1677667251650","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1677667251818","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1677667251962","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1677667252130","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1677667252298","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1677667252466","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1677667252634","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1677667302832","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1677667303016","date_format":false,"currency_format":true},{"column_name":"CR_ACCT_POSTING_RESTRICTION_CODE","alias_name":"","mq_id":"MQ_1677667303144","date_format":false},{"column_name":"EXCHANGE_RATE","alias_name":"","mq_id":"MQ_1677667303320","date_format":false},{"column_name":"gm_margin","alias_name":"","mq_id":"MQ_1677667303472","date_format":false,"currency_format":true},{"column_name":"TRAN_CHARGE","alias_name":"","mq_id":"MQ_1677667358262","date_format":false,"currency_format":true},{"column_name":"BUY_MARGIN","alias_name":"","mq_id":"MQ_1677667358422","date_format":false},{"column_name":"TRAN_AMOUNT","alias_name":"","mq_id":"MQ_1677667358576","date_format":false,"currency_format":true},{"column_name":"BUY_MARGIN","alias_name":"","mq_id":"MQ_1677667384406","date_format":false,"currency_format":true},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1677667384574","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1677667412051","date_format":false},{"column_name":"REVERSAL_AMOUNT","alias_name":"","mq_id":"MQ_1677667412195","date_format":false,"currency_format":true},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1677667443668","date_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"","mq_id":"MQ_1677667443803","date_format":false},{"column_name":"customer_posting_restriction_description","alias_name":"","mq_id":"MQ_1677667457003","date_format":false},{"column_name":"customer_posting_restriction_code","alias_name":"","mq_id":"MQ_1677667457147","date_format":false},{"column_name":"CHARGE_AMOUNT","alias_name":"","mq_id":"MQ_1677667485266","date_format":false,"currency_format":true},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1677667655195","date_format":false},{"column_name":"AMOUNT_CREDITED","alias_name":"","mq_id":"MQ_1677667655355","date_format":false},{"column_name":"AMT_CR_LOC_CUR","alias_name":"","mq_id":"MQ_1677667670675","date_format":false},{"column_name":"REMARKS","alias_name":"","mq_id":"MQ_1677667670819","date_format":false},{"column_name":"DEALT_AMOUNT","alias_name":"","mq_id":"MQ_1677669809374","date_format":false,"currency_format":true},{"column_name":"CONTRA_AMOUNT","alias_name":"","mq_id":"MQ_1677669809534","date_format":false,"currency_format":true},{"column_name":"SELL_CURRENCY","alias_name":"","mq_id":"MQ_1677669809670","date_format":false},{"column_name":"BUY_CURRENCY","alias_name":"","mq_id":"MQ_1677669834966","date_format":false},{"column_name":"account_number","alias_name":"","mq_id":"MQ_1677819938829","date_format":false},{"column_name":"createddate","alias_name":"","mq_id":"MQ_1678262833464","date_format":true},{"column_name":"CHARGEAMOUNT","alias_name":"","mq_id":"MQ_1678280863548","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1682343496223","date_format":false},{"column_name":"posting_restriction_code","alias_name":"","mq_id":"MQ_1682666722794","date_format":false},{"column_name":"account_postring_type_description","alias_name":"","mq_id":"MQ_1682666723128","date_format":false},{"column_name":"force_post_flag","alias_name":"","mq_id":"MQ_1682685496006","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  fn_pcidss_decrypt(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  CURRENCY,  REMARKS,  REVERSAL_AMOUNT,  ACCOUNT_CURRENCY,  exchange_rate,  gm_margin,  customer_posting_restriction_description,  customer_posting_restriction_code,  posting_restriction_code,  account_postring_type_description,  REVERSAL_CODE,  PROCESS_REF_NO,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  CONTRA_AMOUNT,  DEALT_AMOUNT,  account_number,  createddate,  CHARGEAMOUNT,  BuyRate,  gmmargin,  SELL_MARGIN,  SELL_RATE,  force_post_flag from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   case    when A.status = 'IP_RCT_RR_RETURN_READY' then 'Maker Accepted Transaction'    when A.status = 'IP_RCT_REV_REQ_REJECTED' then 'Maker Rejected Transaction'    else 'others'   end as Status,   case    when A.status = 'IP_RCT_RR_RETURN_READY' then 'Y'   end as force_post_flag,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM,   case    when A.CDTR_IBAN is not null    and A.CR_ACCT_IDENTIFICATION is null then A.ACCOUNT_CURRENCY    when A.CDTR_IBAN is null    and A.CR_ACCT_IDENTIFICATION is not null then UPPER('AED')    else UPPER('OTHERS')   end as CURRENCY,   A.REMARKS,   A.CR_ACCT_IDENTIFICATION,   A.REVERSAL_AMOUNT,   NTPL.REVERSAL_CODE,   NTPL.BUY_CURRENCY,   NTPL.SELL_CURRENCY,   NTPL.PROCESS_REF_NO,   NTPL.AMOUNT_CREDITED,   NTPL.AMT_CR_LOC_CUR,   NTPL.CHARGE_AMOUNT,   NTPL.CONTRA_AMOUNT,   NTPL.DEALT_AMOUNT,   A.ACCOUNT_CURRENCY,   A.SELL_MARGIN,   A.SELL_RATE,   PL.exchange_rate,   PL.gm_margin,   CNCA.customer_posting_restriction_description,   CNCA.customer_posting_restriction_code,   CNCA.posting_restriction_code,   CNCA.account_postring_type_description,   cnca.account_number,   PRL.created_date as createddate,   ICP.charge_amount as CHARGEAMOUNT,   NPSSPL.EXCHANGE_RATE as BuyRate,   NPSSPL.gm_margin as gmmargin  from   NPSS_TRANSACTIONS A  inner join npss_trn_process_log NTPL on   A.UETR = NTPL.UETR   and A.STATUS = NTPL.STATUS  left join npss_trn_process_log PL on   A.UETR = PL.UETR   and PL.STATUS = 'IP_RCT_DEAL_RECEIVED'   and pl.process_name = 'Get Deal'  left join npss_trn_process_log NPSSPL on   A.UETR = NPSSPL.UETR   and NPSSPL.STATUS = 'IP_RCT_REV_DEAL_RECEIVED'   and NPSSPL.process_name = 'Get Deal'  left join npss_trn_process_log PRL on   A.UETR = PRL.UETR   and PRL.process_name = 'Receive Pacs007'  left join npss_trn_process_log ICP on   A.UETR = ICP.UETR   and PRL.process_name = 'Inward Credit Posting'  left join <tran_db>.core_nc_cbs_accounts cnca on   cnca.alternate_account_id = A.CDTR_IBAN  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Reversal AED Vertical CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Original Txn Value Date","target_column":"VALUE_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Original CR Account Number","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account Currency","target_column":"ACCOUNT_CURRENCY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Clearing Sys Ref Number","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original E2E reference Number","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Txn Amount AED","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"Original Txn Charges AED","target_column":"CHARGEAMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Txn Amount Account Currency","target_column":"TRAN_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true}]}}}}}}
		this.original_transaction_details.context_menu = []
		this.original_transaction_details.views = {}
		this.original_transaction_details.onChangecomponent = new EventEmitter<any>()
		this.original_transaction_details.show = true
		this.original_transaction_details.dynamic_param = {"column_header_name":"Field","value_header_name":"Value"}
	
		// Component level properties - "Refund Processing Details" 
		this.refund_processing_details.uictrl_code = "datatable"
		this.refund_processing_details.uicgc_desc = "Refund Processing Details"
		this.refund_processing_details.uicgc_code = "uicgc_39"
		this.refund_processing_details.params = {"need_pag_datatable":"Y","need_vertical":"Y","need_search":"N"}
		this.refund_processing_details.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_39","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678261913315","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"Reversal Vertical MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1677667251146","date_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1677667251485","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1677667251650","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1677667251818","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1677667251962","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1677667252130","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1677667252298","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1677667252466","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1677667252634","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1677667302832","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1677667303016","date_format":false,"currency_format":true},{"column_name":"CR_ACCT_POSTING_RESTRICTION_CODE","alias_name":"","mq_id":"MQ_1677667303144","date_format":false},{"column_name":"EXCHANGE_RATE","alias_name":"","mq_id":"MQ_1677667303320","date_format":false},{"column_name":"gm_margin","alias_name":"","mq_id":"MQ_1677667303472","date_format":false,"currency_format":true},{"column_name":"TRAN_CHARGE","alias_name":"","mq_id":"MQ_1677667358262","date_format":false,"currency_format":true},{"column_name":"BUY_MARGIN","alias_name":"","mq_id":"MQ_1677667358422","date_format":false},{"column_name":"TRAN_AMOUNT","alias_name":"","mq_id":"MQ_1677667358576","date_format":false,"currency_format":true},{"column_name":"BUY_MARGIN","alias_name":"","mq_id":"MQ_1677667384406","date_format":false,"currency_format":true},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1677667384574","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1677667412051","date_format":false},{"column_name":"REVERSAL_AMOUNT","alias_name":"","mq_id":"MQ_1677667412195","date_format":false,"currency_format":true},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1677667443668","date_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"","mq_id":"MQ_1677667443803","date_format":false},{"column_name":"customer_posting_restriction_description","alias_name":"","mq_id":"MQ_1677667457003","date_format":false},{"column_name":"customer_posting_restriction_code","alias_name":"","mq_id":"MQ_1677667457147","date_format":false},{"column_name":"CHARGE_AMOUNT","alias_name":"","mq_id":"MQ_1677667485266","date_format":false,"currency_format":true},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1677667655195","date_format":false},{"column_name":"AMOUNT_CREDITED","alias_name":"","mq_id":"MQ_1677667655355","date_format":false},{"column_name":"AMT_CR_LOC_CUR","alias_name":"","mq_id":"MQ_1677667670675","date_format":false},{"column_name":"REMARKS","alias_name":"","mq_id":"MQ_1677667670819","date_format":false},{"column_name":"DEALT_AMOUNT","alias_name":"","mq_id":"MQ_1677669809374","date_format":false,"currency_format":true},{"column_name":"CONTRA_AMOUNT","alias_name":"","mq_id":"MQ_1677669809534","date_format":false,"currency_format":true},{"column_name":"SELL_CURRENCY","alias_name":"","mq_id":"MQ_1677669809670","date_format":false},{"column_name":"BUY_CURRENCY","alias_name":"","mq_id":"MQ_1677669834966","date_format":false},{"column_name":"account_number","alias_name":"","mq_id":"MQ_1677819938829","date_format":false},{"column_name":"createddate","alias_name":"","mq_id":"MQ_1678262833464","date_format":true},{"column_name":"CHARGEAMOUNT","alias_name":"","mq_id":"MQ_1678280863548","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1682343496223","date_format":false},{"column_name":"posting_restriction_code","alias_name":"","mq_id":"MQ_1682666722794","date_format":false},{"column_name":"account_postring_type_description","alias_name":"","mq_id":"MQ_1682666723128","date_format":false},{"column_name":"force_post_flag","alias_name":"","mq_id":"MQ_1682685496006","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  fn_pcidss_decrypt(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  CURRENCY,  REMARKS,  REVERSAL_AMOUNT,  ACCOUNT_CURRENCY,  exchange_rate,  gm_margin,  customer_posting_restriction_description,  customer_posting_restriction_code,  posting_restriction_code,  account_postring_type_description,  REVERSAL_CODE,  PROCESS_REF_NO,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  CONTRA_AMOUNT,  DEALT_AMOUNT,  account_number,  createddate,  CHARGEAMOUNT,  BuyRate,  gmmargin,  SELL_MARGIN,  SELL_RATE,  force_post_flag from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   case    when A.status = 'IP_RCT_RR_RETURN_READY' then 'Maker Accepted Transaction'    when A.status = 'IP_RCT_REV_REQ_REJECTED' then 'Maker Rejected Transaction'    else 'others'   end as Status,   case    when A.status = 'IP_RCT_RR_RETURN_READY' then 'Y'   end as force_post_flag,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM,   case    when A.CDTR_IBAN is not null    and A.CR_ACCT_IDENTIFICATION is null then A.ACCOUNT_CURRENCY    when A.CDTR_IBAN is null    and A.CR_ACCT_IDENTIFICATION is not null then UPPER('AED')    else UPPER('OTHERS')   end as CURRENCY,   A.REMARKS,   A.CR_ACCT_IDENTIFICATION,   A.REVERSAL_AMOUNT,   NTPL.REVERSAL_CODE,   NTPL.BUY_CURRENCY,   NTPL.SELL_CURRENCY,   NTPL.PROCESS_REF_NO,   NTPL.AMOUNT_CREDITED,   NTPL.AMT_CR_LOC_CUR,   NTPL.CHARGE_AMOUNT,   NTPL.CONTRA_AMOUNT,   NTPL.DEALT_AMOUNT,   A.ACCOUNT_CURRENCY,   A.SELL_MARGIN,   A.SELL_RATE,   PL.exchange_rate,   PL.gm_margin,   CNCA.customer_posting_restriction_description,   CNCA.customer_posting_restriction_code,   CNCA.posting_restriction_code,   CNCA.account_postring_type_description,   cnca.account_number,   PRL.created_date as createddate,   ICP.charge_amount as CHARGEAMOUNT,   NPSSPL.EXCHANGE_RATE as BuyRate,   NPSSPL.gm_margin as gmmargin  from   NPSS_TRANSACTIONS A  inner join npss_trn_process_log NTPL on   A.UETR = NTPL.UETR   and A.STATUS = NTPL.STATUS  left join npss_trn_process_log PL on   A.UETR = PL.UETR   and PL.STATUS = 'IP_RCT_DEAL_RECEIVED'   and pl.process_name = 'Get Deal'  left join npss_trn_process_log NPSSPL on   A.UETR = NPSSPL.UETR   and NPSSPL.STATUS = 'IP_RCT_REV_DEAL_RECEIVED'   and NPSSPL.process_name = 'Get Deal'  left join npss_trn_process_log PRL on   A.UETR = PRL.UETR   and PRL.process_name = 'Receive Pacs007'  left join npss_trn_process_log ICP on   A.UETR = ICP.UETR   and PRL.process_name = 'Inward Credit Posting'  left join <tran_db>.core_nc_cbs_accounts cnca on   cnca.alternate_account_id = A.CDTR_IBAN  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"Reversal Refund Vertical AED CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Txn Value Date","target_column":"createddate","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"DR Account Number","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"DR Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"DR Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Posting Restriction Code","target_column":"posting_restriction_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Posting Restriction Description","target_column":"account_postring_type_description","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Posting Restriction Code","target_column":"customer_posting_restriction_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Posting Restriction Description","target_column":"customer_posting_restriction_description","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Refund Request Txn Amount AED","target_column":"REVERSAL_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"Force Post Flag","target_column":"force_post_flag","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Accept/Reject","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.refund_processing_details.context_menu = []
		this.refund_processing_details.views = {}
		this.refund_processing_details.onChangecomponent = new EventEmitter<any>()
		this.refund_processing_details.show = true
		this.refund_processing_details.dynamic_param = {"column_header_name":"Field","value_header_name":"Value"}
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__de_for_crr()
		this.page_load__de_for_reject()
		this.page_load__de_for_return()
		this.page_load__de_for_approve()
		this.page_load__de_for_accept()
		this.page_load__he_for_review_btn()
		this.page_load__he_for_vd()
		this.page_load__de_for_vlh_from_pl()
		this.page_load__cc_for_routing_key()
		this.page_load__de_for_rau_cancel()
	}

	//Handler for INTERNAL event of "cc for routing key"
	cc_for_routing_key__internal(parent_event_result){
		this.cc_for_routing_key__cf_for_page(parent_event_result)
	}

	//Handler for INTERNAL event of "cf for page"
	cf_for_page__internal(){
		this.cf_for_page__cc_for_sh_ide_for_cc()
	}

	//Handler for INTERNAL event of "cc for sh ide for cc"
	cc_for_sh_ide_for_cc__internal(parent_event_result){
		this.cc_for_sh_ide_for_cc__trg_btn_queue_list(parent_event_result)
		this.cc_for_sh_ide_for_cc__trb_for_search(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "queue"
	queue__selection_changed(){
		this.queue__svm_for_queue()
	}

	//Handler for INTERNAL event of "svm for queue"
	svm_for_queue__internal(parent_event_result){
		this.svm_for_queue__sh_for_tran_list_selections(parent_event_result)
	}

	//Handler for INTERNAL event of "sh for tran list selections"
	sh_for_tran_list_selections__internal(parent_event_result){
		this.sh_for_tran_list_selections__tbc_for_tran_list(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__selection_changed(peventcontext){
		if(!peventcontext) { 
 			peventcontext = this.transaction_list__sec_for_transaction_list()
		 }
		this.transaction_list__svm_for_transaction_list()
		this.transaction_list__ssr_for_tran_list_to_reversal_ui()
		this.transaction_list__ee_for_vd()
		this.transaction_list__ee_for_vlh()
		this.transaction_list__ee_for_vm()
		this.transaction_list__ssr_for_rev_add_ui()
		this.transaction_list__svm_for_only_fab(peventcontext)
		this.transaction_list__ee_for_review_from_tran_list()
	}

	//Handler for INTERNAL event of "svm for transaction list"
	svm_for_transaction_list__internal(parent_event_result){
		this.svm_for_transaction_list__cc_for_show_hide_in_tran_list(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation review"
	navigation_review__action_button_click(peventcontext){
		if(!peventcontext) { 
 			peventcontext = this.navigation_review__sec_for_profile()
		 }
		this.navigation_review__bt_for_reversal_ui()
		this.navigation_review__de_for_pl_ui()
		this.navigation_review__cc_for_set_status_bind_value()
		this.navigation_review__cc_for_get_usable_balance(peventcontext)
		this.navigation_review__sp_for_fh(peventcontext)
		this.navigation_review__sp_for_fab(peventcontext)
		this.navigation_review__he_for_aefin(peventcontext)
		this.navigation_review__de_for_rev_add_ui()
		this.navigation_review__bt_for_rev_add_ui()
		this.navigation_review__he_for_force_post(peventcontext)
		this.navigation_review__brfq_for_cbc_account()
		this.navigation_review__he_for_fin(peventcontext)
		this.navigation_review__e_1674122143563()
		this.navigation_review__brfq_for_reversal()
		this.navigation_review__brfq_for_list()
		this.navigation_review__e_1679293130373()
	}

	//Handler for INTERNAL event of "cc for set status bind value"
	cc_for_set_status_bind_value__internal(parent_event_result){
		this.cc_for_set_status_bind_value__brfq_for_process_log(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for process log"
	brfq_for_process_log__internal(parent_event_result){
		this.brfq_for_process_log__sfr_for_process_log(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for cbc account"
	brfq_for_cbc_account__internal(parent_event_result){
		this.brfq_for_cbc_account__sfr_for_cbs(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for reversal"
	brfq_for_reversal__internal(parent_event_result){
		this.brfq_for_reversal__sfr_for_reversal_vl(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for list"
	brfq_for_list__internal(parent_event_result){
		this.brfq_for_list__e_1678260180312(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "reversal action ui accept"
	reversal_action_ui_accept__action_button_click(){
		this.reversal_action_ui_accept__conf_info_for_accept()
	}

	//Handler for INTERNAL event of "conf info for accept"
	conf_info_for_accept__internal(parent_event_result){
		this.conf_info_for_accept__cc_for_accept_ide(parent_event_result)
	}

	//Handler for INTERNAL event of "cc for accept ide"
	cc_for_accept_ide__internal(parent_event_result){
		this.cc_for_accept_ide__info_for_accept(parent_event_result)
	}

	//Handler for INTERNAL event of "info for accept"
	info_for_accept__internal(parent_event_result){
		this.info_for_accept__rs_for_accepts(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__selection_changed(){
		this.process_log_list__svm_for_process_log()
		this.process_log_list__ee_for_crr()
		this.process_log_list__ee_for_accept()
		this.process_log_list__ee_for_approve()
		this.process_log_list__ee_for_reject()
		this.process_log_list__ee_for_return()
		this.process_log_list__ssr_for_cru()
		this.process_log_list__ee_for_rau_cancel()
	}

	//Handler for ACTION_BUTTON_CLICK event of "change return ui save"
	change_return_ui_save__action_button_click(){
		this.change_return_ui_save__ve_for_crrui()
	}

	//Handler for INTERNAL event of "ve for crrui"
	ve_for_crrui__internal(parent_event_result){
		this.ve_for_crrui__save_for_cr(parent_event_result)
	}

	//Handler for INTERNAL event of "save for cr"
	save_for_cr__internal(parent_event_result){
		this.save_for_cr__return_reason_info(parent_event_result)
	}

	//Handler for INTERNAL event of "return reason info"
	return_reason_info__internal(parent_event_result){
		this.return_reason_info__rs_for_crui(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "reversal action ui trigger btn"
	reversal_action_ui_trigger_btn__action_button_click(){
		this.reversal_action_ui_trigger_btn__brfq_for_comment_list()
	}

	//Handler for ACTION_BUTTON_CLICK event of "reversal action ui change return reason"
	reversal_action_ui_change_return_reason__action_button_click(){
		this.reversal_action_ui_change_return_reason__crr_for_spap()
		this.reversal_action_ui_change_return_reason__bind_tran_for_crui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "reversal action ui back"
	reversal_action_ui_back__action_button_click(){
		this.reversal_action_ui_back__rs_for_back_profile()
	}

	//Handler for ACTION_BUTTON_CLICK event of "accept ui save"
	accept_ui_save__action_button_click(){
		this.accept_ui_save__ve_for_accept()
	}

	//Handler for INTERNAL event of "ve for accept"
	ve_for_accept__internal(parent_event_result){
		this.ve_for_accept__cc_for_reversal_ide(parent_event_result)
	}

	//Handler for INTERNAL event of "cc for reversal ide"
	cc_for_reversal_ide__internal(parent_event_result){
		this.cc_for_reversal_ide__accept_info(parent_event_result)
	}

	//Handler for INTERNAL event of "accept info"
	accept_info__internal(parent_event_result){
		this.accept_info__accept_success_rs(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "reversal action ui reject"
	reversal_action_ui_reject__action_button_click(){
		this.reversal_action_ui_reject__spap_for_reject_code()
	}

	//Handler for ACTION_BUTTON_CLICK event of "reversal action ui approve"
	reversal_action_ui_approve__action_button_click(){
		this.reversal_action_ui_approve__cc_for_approves()
	}

	//Handler for INTERNAL event of "cc for approves"
	cc_for_approves__internal(parent_event_result){
		this.cc_for_approves__info_for_approve(parent_event_result)
	}

	//Handler for INTERNAL event of "info for approve"
	info_for_approve__internal(parent_event_result){
		this.info_for_approve__rs_for_approve(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "reversal action ui capprove"
	reversal_action_ui_capprove__action_button_click(){
		this.reversal_action_ui_capprove__cc_forreturn()
	}

	//Handler for INTERNAL event of "cc forreturn"
	cc_forreturn__internal(parent_event_result){
		this.cc_forreturn__return_info(parent_event_result)
	}

	//Handler for INTERNAL event of "return info"
	return_info__internal(parent_event_result){
		this.return_info__rs_for_return(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "remarks ui save"
	remarks_ui_save__action_button_click(){
		this.remarks_ui_save__validate_for_remarks()
	}

	//Handler for INTERNAL event of "validate for remarks"
	validate_for_remarks__internal(parent_event_result){
		this.validate_for_remarks__cc_remarks(parent_event_result)
	}

	//Handler for INTERNAL event of "cc remarks"
	cc_remarks__internal(parent_event_result){
		this.cc_remarks__info_remarks(parent_event_result)
	}

	//Handler for INTERNAL event of "info remarks"
	info_remarks__internal(parent_event_result){
		this.info_remarks__rc_after_reject_remarks(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "back ui back"
	back_ui_back__action_button_click(){
		this.back_ui_back__sp_for_back()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation view tran"
	navigation_view_tran__action_button_click(){
		this.navigation_view_tran__sp_for_vd()
		this.navigation_view_tran__brfq_for_vtd()
		this.navigation_view_tran__brfq_for_payment_list()
	}

	//Handler for ACTION_BUTTON_CLICK event of "message back ui back"
	message_back_ui_back__action_button_click(){
		this.message_back_ui_back__sp_for_message_back()
	}

	//Handler for ACTION_BUTTON_CLICK event of "message detail action back"
	message_detail_action_back__action_button_click(){
		this.message_detail_action_back__sp_for_mda()
	}

	//Handler for ACTION_BUTTON_CLICK event of "single back ui back"
	single_back_ui_back__action_button_click(){
		this.single_back_ui_back__sp_for_reqres()
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui back"
	process_log_ui_back__action_button_click(){
		this.process_log_ui_back__sp_to_main_layout()
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view request"
	process_log_ui_view_request__action_button_click(){
		this.process_log_ui_view_request__sp_for_view_req()
		this.process_log_ui_view_request__bt_for_view_req()
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view response"
	process_log_ui_view_response__action_button_click(){
		this.process_log_ui_view_response__sp_for_view_res()
		this.process_log_ui_view_response__bt_for_view_res()
	}

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__selection_changed(){
		this.history_detail__ssr_for_res_ui()
		this.history_detail__ssr_for_req_ui()
		this.history_detail__ee_for_view_res()
		this.history_detail__ee_for_view_req()
		this.history_detail__ee_for_vreq_vres()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation view process log"
	navigation_view_process_log__action_button_click(){
		this.navigation_view_process_log__brfq_for_hd()
		this.navigation_view_process_log__sp_for_vlh()
	}

	//Handler for INTERNAL event of "brfq for hd"
	brfq_for_hd__internal(parent_event_result){
		this.brfq_for_hd__sfr_for_hdl(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation view message log"
	navigation_view_message_log__action_button_click(){
		this.navigation_view_message_log__sp_for_vmd()
		this.navigation_view_message_log__brfq_for_vm()
	}

	//Handler for INTERNAL event of "brfq for vm"
	brfq_for_vm__internal(parent_event_result){
		this.brfq_for_vm__sfr_for_md(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "message detail"
	message_detail__selection_changed(){
		this.message_detail__ee_from_message_detail_to_show_message()
		this.message_detail__ssr_for_mgsgs()
	}

	//Handler for ACTION_BUTTON_CLICK event of "message detail action view message"
	message_detail_action_view_message__action_button_click(){
		this.message_detail_action_view_message__bt_for_mgsg()
		this.message_detail_action_view_message__sp_for_view_message_data()
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view req and res"
	process_log_ui_view_req_and_res__action_button_click(){
		this.process_log_ui_view_req_and_res__bt_req()
		this.process_log_ui_view_req_and_res__bt_for_res()
		this.process_log_ui_view_req_and_res__sp_for_v_req_and_v_res()
	}

	//Handler for ACTION_BUTTON_CLICK event of "trig action for list ui trg queue"
	trig_action_for_list_ui_trg_queue__action_button_click(peventcontext){
		if(!peventcontext) { 
 			peventcontext = this.trig_action_for_list_ui_trg_queue__sec_for_queue_list()
		 }
		this.trig_action_for_list_ui_trg_queue__ssp_for_tri_queue_for_fab(peventcontext)
		this.trig_action_for_list_ui_trg_queue__ssp_for_tri_queue_for_fh(peventcontext)
	}

	//Handler for INTERNAL event of "brfq for fhs"
	brfq_for_fhs__internal(parent_event_result){
		this.brfq_for_fhs__sfr_for_fhs(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for queue fab"
	brfq_for_queue_fab__internal(parent_event_result){
		this.brfq_for_queue_fab__sfr_for_fabs(parent_event_result)
	}

	//Handler for INTERNAL event of "ssp for tri queue for fab"
	ssp_for_tri_queue_for_fab__internal(){
		this.ssp_for_tri_queue_for_fab__brfq_for_queue_fab()
	}

	//Handler for INTERNAL event of "ssp for tri queue for fh"
	ssp_for_tri_queue_for_fh__internal(){
		this.ssp_for_tri_queue_for_fh__brfq_for_fhs()
	}

	//Handler for ACTION_BUTTON_CLICK event of "trig action for list ui trig tran list"
	trig_action_for_list_ui_trig_tran_list__action_button_click(peventcontext){
		if(!peventcontext) { 
 			peventcontext = this.trig_action_for_list_ui_trig_tran_list__sec_for_tran_list()
		 }
		this.trig_action_for_list_ui_trig_tran_list__ssp_for_queue_to_tran__fab(peventcontext)
		this.trig_action_for_list_ui_trig_tran_list__ssp_for_queue_to_tran__fh(peventcontext)
	}

	//Handler for INTERNAL event of "brfq for tran fab"
	brfq_for_tran_fab__internal(parent_event_result){
		this.brfq_for_tran_fab__sfr_for_tran_fab(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for fh trans"
	brfq_for_fh_trans__internal(parent_event_result){
		this.brfq_for_fh_trans__sfr_for_tran_fh(parent_event_result)
	}

	//Handler for INTERNAL event of "ssp for queue to tran  fh"
	ssp_for_queue_to_tran__fh__internal(parent_event_result){
		this.ssp_for_queue_to_tran__fh__brfq_for_fh_trans(parent_event_result)
	}

	//Handler for INTERNAL event of "ssp for queue to tran  fab"
	ssp_for_queue_to_tran__fab__internal(parent_event_result){
		this.ssp_for_queue_to_tran__fab__brfq_for_tran_fab(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "reversal action ui cancel  send to maker"
	reversal_action_ui_cancel__send_to_maker__action_button_click(){
		this.reversal_action_ui_cancel__send_to_maker__spap_for_rau_cancel()
	}

	//Handler for ACTION_BUTTON_CLICK event of "cancel return ui return to maker"
	cancel_return_ui_return_to_maker__action_button_click(){
		this.cancel_return_ui_return_to_maker__ve_for_cancel_ui()
	}

	//Handler for INTERNAL event of "ve for cancel ui"
	ve_for_cancel_ui__internal(parent_event_result){
		this.ve_for_cancel_ui__cc_for_cancel_btn(parent_event_result)
	}

	//Handler for INTERNAL event of "cc for cancel btn"
	cc_for_cancel_btn__internal(parent_event_result){
		this.cc_for_cancel_btn__im_for_cancel_btn(parent_event_result)
	}

	//Handler for INTERNAL event of "im for cancel btn"
	im_for_cancel_btn__internal(parent_event_result){
		this.im_for_cancel_btn__rs_for_cancel_btn(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "send to maker ui save"
	send_to_maker_ui_save__action_button_click(){
		this.send_to_maker_ui_save__cc_for_send_to_maker_save()
	}

	//Handler for INTERNAL event of "cc for send to maker save"
	cc_for_send_to_maker_save__internal(){
		this.cc_for_send_to_maker_save__im_for_send_to_maker_save()
	}

	//Handler for INTERNAL event of "im for send to maker save"
	im_for_send_to_maker_save__internal(){
		this.im_for_send_to_maker_save__rs_for_send_to_maker_save()
	}

	//Handler for ACTION_BUTTON_CLICK event of "reversal action ui send to maker"
	reversal_action_ui_send_to_maker__action_button_click(){
		this.reversal_action_ui_send_to_maker__spap_for_send_to_maker()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__tbc_for_search_to_queue()
		this.search_search__close_popup()
		this.search_search__clear_ui_for_tran_list()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__clear_ui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation search"
	navigation_search__action_button_click(){
		this.navigation_search__spap_for_search()
		this.navigation_search__claer_ui()
	}

	//Handler for INTERNAL event of "cc for force post"
	cc_for_force_post__internal(parent_event_result){
		this.cc_for_force_post__info_for_force_post(parent_event_result)
	}

	//Handler for INTERNAL event of "info for force post"
	info_for_force_post__internal(parent_event_result){
		this.info_for_force_post__rs_for_fp(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "reversal action ui force post"
	reversal_action_ui_force_post__action_button_click(){
		this.reversal_action_ui_force_post__conf_msg_for_fp()
	}

	//Handler for INTERNAL event of "conf msg for fp"
	conf_msg_for_fp__internal(parent_event_result){
		this.conf_msg_for_fp__cc_for_force_post(parent_event_result)
	}

	//Handler for DPSINIT event of "page_load"
	page_load__de_for_crr() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="reversal_action_ui_change_return_reason"
		let parent_source_id=""
		let event_code="e_1666879161968"
		let event_params={"caller_name":"page_load__de_for_crr","event_desc":"DE for CRR","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__de_for_reject() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="reversal_action_ui_reject"
		let parent_source_id=""
		let event_code="e_1666960296129"
		let event_params={"caller_name":"page_load__de_for_reject","event_desc":"DE For Reject","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__de_for_return() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="reversal_action_ui_capprove"
		let parent_source_id=""
		let event_code="e_1666960339800"
		let event_params={"caller_name":"page_load__de_for_return","event_desc":"DE for Return","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__de_for_approve() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="reversal_action_ui_approve"
		let parent_source_id=""
		let event_code="e_1666960399963"
		let event_params={"caller_name":"page_load__de_for_approve","event_desc":"DE for Approve","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__de_for_accept() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="reversal_action_ui_accept"
		let parent_source_id=""
		let event_code="e_1666960452316"
		let event_params={"caller_name":"page_load__de_for_accept","event_desc":"DE for Accept","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__he_for_review_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_review"
		let parent_source_id=""
		let event_code="e_1667991462999"
		let event_params={"caller_name":"page_load__he_for_review_btn","event_desc":"HE for review btn","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_vd() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_view_tran"
		let parent_source_id=""
		let event_code="e_1669203448813"
		let event_params={"caller_name":"page_load__he_for_vd","event_desc":"HE for VD","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
		let destn_id="navigation_view_process_log"
		let parent_source_id=""
		let event_code="e_1669382984565"
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
	page_load__cc_for_routing_key() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669383440305"
		let event_params={"caller_name":"page_load__cc_for_routing_key","event_desc":"CC for routing key","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_routing_key__cf_for_page,"
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
	page_load__de_for_rau_cancel() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="reversal_action_ui_cancel__send_to_maker"
		let parent_source_id=""
		let event_code="e_1671195090885"
		let event_params={"caller_name":"page_load__de_for_rau_cancel","event_desc":"DE for RAU Cancel","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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

	//Handler for INTERNAL event of "cc for routing key"
	cc_for_routing_key__cf_for_page(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_routing_key"
		let destn_id=""
		let parent_source_id="page_load"
		let event_code="e_1669383487029"
		let event_params={"caller_name":"cc_for_routing_key__cf_for_page","event_desc":"CF for page","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""},"parent_event_result":"SUCCESS"}
		let handler_code="create_form"
		let internals="cf_for_page__cc_for_sh_ide_for_cc,"
		let event_data={}
		let data_source={}
		try {
			this.handler.create_form(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cf for page"
	cf_for_page__cc_for_sh_ide_for_cc() { 
		let Dest_Is_ctrl=true
		
		let source_id="cf_for_page"
		let destn_id=""
		let parent_source_id="cc_for_routing_key"
		let event_code="e_1669383518338"
		let event_params={"caller_name":"cf_for_page__cc_for_sh_ide_for_cc","event_desc":"CC for SH ide for CC","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_sh_ide_for_cc__trg_btn_queue_list,cc_for_sh_ide_for_cc__trb_for_search,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for sh ide for cc"
	cc_for_sh_ide_for_cc__trg_btn_queue_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_sh_ide_for_cc"
		let destn_id="trig_action_for_list_ui_trg_queue"
		let parent_source_id="cf_for_page"
		let event_code="e_1671116751166"
		let event_params={"caller_name":"cc_for_sh_ide_for_cc__trg_btn_queue_list","event_desc":"Trg btn queue list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for INTERNAL event of "cc for sh ide for cc"
	cc_for_sh_ide_for_cc__trb_for_search(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_sh_ide_for_cc"
		let destn_id="search_search"
		let parent_source_id="cf_for_page"
		let event_code="e_1672298183764"
		let event_params={"caller_name":"cc_for_sh_ide_for_cc__trb_for_search","event_desc":"TRB FOR SEARCH","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for SELECTION_CHANGED event of "queue"
	queue__svm_for_queue() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="queue"
		let parent_source_id=""
		let event_code="e_1666856944151"
		let event_params={"caller_name":"queue__svm_for_queue","event_desc":"SVM for Queue","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_queue__sh_for_tran_list_selections,"
		let event_data={"queue":{"e_1666856944151":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_1","event_code":"E_1666856944151","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"HARDCODED","column_name":"BULK","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"},{"type":"LOCAL","column_name":"PROCESS_STATUS","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_STATUS","setd3name":"PROCESS_STATUS"},{"type":"LOCAL","column_name":"STATUS","level":"MI_LEVEL","name":"MI_LEVEL_STATUS","setd3name":"STATUS"},{"type":"LOCAL","column_name":"PROCESSING_SYSTEM","level":"MI_LEVEL","name":"MI_LEVEL_PROCESSING_SYSTEM","setd3name":"PROCESSING_SYSTEM"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863057903","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Reversal Tran Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1671019841112","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671019841297","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1675348669752","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS from  (  select   NT.CREATED_DATE,   NT.STATUS,   NT.PROCESS_STATUS,   NT.UETR,   NT.DBTR_IBAN,   NT.PROCESSING_SYSTEM,   NT.TENANT_ID,   NT.MODIFIED_DATE,   NT.MODIFIED_DATE_UTC,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   NT.CREATED_BY,   NT.CREATED_BY_NAME,   NT.SYSTEM_ID,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   NT.DEPARTMENT_CODE,   NT.VALUE_DATE,   NT.DBTR_ACCT_NO,   NT.CDTR_ACCT_NO,   NT.CR_ACCT_IDENTIFICATION,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.CLRSYSREF,   NT.PAYMENT_ENDTOEND_ID,   NT.INTRBK_STTLM_AMNT,   NT.REVERSAL_AMOUNT,   case    when NT.CDTR_IBAN is not null    and NT.CR_ACCT_IDENTIFICATION is null then NT.ACCOUNT_CURRENCY    when NT.CDTR_IBAN is null    and NT.CR_ACCT_IDENTIFICATION is not null then UPPER('AED')    else UPPER('OTHERS')   end as CURRENCY,   NT.PROCESS_TYPE,   NTPL.reversal_code,   NT.PROCESS_GROUP  from   NPSS_TRANSACTIONS NT  inner join npss_trn_process_log NTPL on   NT.UETR = NTPL.UETR and NT.STATUS = NTPL.STATUS  left join TRANSACTION_SET TS on   NT.NPSST_ID = TS.TRN_ID   and NT.DTT_CODE = TS.DTT_CODE  inner join <TRAN_DB>.CORE_Q_STATUS_ROLES QR on   NT.STATUS = QR.PROCESS_QUEUE_STATUS   and NT.PROCESS_STATUS = QR.QUEUE_CODE  inner join <TRAN_DB>.CORE_APP_Q_SETUP PQ on   NT.PROCESS_STATUS = PQ.QUEUE_CODE) VW $WHERE order by  PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Reversal Tran Queue CCD","filter":[{"filter_name":"CURRENCY","binding_name":"CURRENCY","binding_value":"","source_name":"AED","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for queue"
	svm_for_queue__sh_for_tran_list_selections(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_queue"
		let destn_id=""
		let parent_source_id="queue"
		let event_code="e_1666857830655"
		let event_params={"caller_name":"svm_for_queue__sh_for_tran_list_selections","event_desc":"SH for Tran list selections","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="sh_for_tran_list_selections__tbc_for_tran_list,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "sh for tran list selections"
	sh_for_tran_list_selections__tbc_for_tran_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="sh_for_tran_list_selections"
		let destn_id="trig_action_for_list_ui_trig_tran_list"
		let parent_source_id="svm_for_queue"
		let event_code="e_1671117151062"
		let event_params={"caller_name":"sh_for_tran_list_selections__tbc_for_tran_list","event_desc":"TBC for Tran List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__sec_for_transaction_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1673326451807"
		let event_params={"caller_name":"transaction_list__sec_for_transaction_list","event_desc":"SEC for Transaction List","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{}}
		let handler_code="set_event_context"
		let internals=""
		let event_data={"transaction_list":{"e_1673326451807":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_2","event_code":"E_1673326451807","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[],"get_from_memory":[],"set_event_context":"Y","sec_value":{"type":"SESSION_LEVEL","value":"ROOT_SCODE"}}}}}}}}}
		let data_source={}
		try {
			return this.handler.set_event_context(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__svm_for_transaction_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1666857041976"
		let event_params={"caller_name":"transaction_list__svm_for_transaction_list","event_desc":"SVM for Transaction List","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_transaction_list__cc_for_show_hide_in_tran_list,"
		let event_data={"transaction_list":{"e_1666857041976":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_2","event_code":"E_1666857041976","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"HARDCODED","column_name":"SELECT","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"},{"type":"LOCAL","column_name":"NPSST_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSST_ID","setd3name":"NPSST_ID"},{"type":"LOCAL","column_name":"UETR","level":"MI_LEVEL","name":"MI_LEVEL_UETR","setd3name":"UETR"},{"type":"LOCAL","column_name":"CDTR_IBAN","level":"MI_LEVEL","name":"MI_LEVEL_CDTR_IBAN","setd3name":"CDTR_IBAN"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863233602","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Reversal Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1671020531499","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1671020563113","date_format":false,"currency_format":true},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1671020567393","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1671020573899","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1671020604449","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1671020974992","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1671020996246","date_format":false},{"column_name":"REMARKS","alias_name":"","mq_id":"MQ_1671025906550","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1671030938331","date_format":false},{"column_name":"REVERSAL_AMOUNT","alias_name":"","mq_id":"MQ_1671108760508","date_format":false,"currency_format":true},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1675410254697","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1681124808770","date_format":false}],"joins":[]},"eq_text":"select  distinct UETR,  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  REVERSAL_DESCRIPTION,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  fn_pcidss_decrypt(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  CURRENCY,  REMARKS,  REVERSAL_AMOUNT,  ACCOUNT_CURRENCY,  BUY_RATE,  TRAN_CHARGE,  BUY_MARGIN,  TRAN_AMOUNT,  SELL_MARGIN,  SELL_RATE from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM,   case    when A.CDTR_IBAN is not null    and A.CR_ACCT_IDENTIFICATION is null then A.ACCOUNT_CURRENCY    when A.CDTR_IBAN is null    and A.CR_ACCT_IDENTIFICATION is not null then UPPER('AED')    else UPPER('OTHERS')   end as CURRENCY,   A.REMARKS,   A.CR_ACCT_IDENTIFICATION,   A.REVERSAL_AMOUNT,   NTPL.REVERSAL_CODE,   A.ACCOUNT_CURRENCY,   A.BUY_RATE,   A.TRAN_CHARGE,   A.BUY_MARGIN,   A.TRAN_AMOUNT,   A.SELL_MARGIN,   A.SELL_RATE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   NPSS_TRANSACTIONS A  left join npss_trn_process_log NTPL on   A.UETR = NTPL.UETR   and ntpl.status = 'IP_RCT_REVERSAL_REQ_RECEIVED'  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = ntpl.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Reversal Transaction CCD","filter":[{"filter_name":"CURRENCY","binding_name":"CURRENCY","binding_value":"","source_name":"AED","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Inward Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Reversal Amount","target_column":"REVERSAL_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Reversal Reason","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remarks","target_column":"REMARKS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"dependson":""},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"dependson":""}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__ssr_for_tran_list_to_reversal_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="reversal_ui"
		let parent_source_id=""
		let event_code="e_1666866705722"
		let event_params={"caller_name":"transaction_list__ssr_for_tran_list_to_reversal_ui","event_desc":"SSR for Tran List to Reversal UI","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{}}
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
	transaction_list__ee_for_vd() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_view_tran"
		let parent_source_id=""
		let event_code="e_1669202549243"
		let event_params={"caller_name":"transaction_list__ee_for_vd","event_desc":"EE for VD","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
		let destn_id="navigation_view_process_log"
		let parent_source_id=""
		let event_code="e_1669383029014"
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
		let destn_id="navigation_view_message_log"
		let parent_source_id=""
		let event_code="e_1669383855972"
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
	transaction_list__ssr_for_rev_add_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="reversal_additional_ui"
		let parent_source_id=""
		let event_code="e_1672140462644"
		let event_params={"caller_name":"transaction_list__ssr_for_rev_add_ui","event_desc":"SSR for rev add UI","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{}}
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
	transaction_list__svm_for_only_fab(peventcontext) { 
		let Dest_Is_ctrl=true
		let eventcontext =["NPSS_AEFAB"]
		if(eventcontext.indexOf(peventcontext)==-1) return true;
		let source_id="transaction_list"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1673326577221"
		let event_params={"caller_name":"transaction_list__svm_for_only_fab","event_desc":"SVM for only FAB","event_type":"SELECTION_CHANGED","caller_event_context":"NPSS_AEFAB","root_source_id":"transaction_list","raiseparam":{},"eventcontext":["NPSS_AEFAB"]}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={"transaction_list":{"e_1673326577221":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_2","event_code":"E_1673326577221","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"ACCOUNT_NUMBER","level":"MI_LEVEL","name":"MI_LEVEL_CBS_CR_ACCOUNT_NO","setd3name":"CBS_CR_ACCOUNT_NO"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863233602","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Reversal Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1671020531499","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1671020563113","date_format":false,"currency_format":true},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1671020567393","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1671020573899","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1671020604449","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1671020974992","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1671020996246","date_format":false},{"column_name":"REMARKS","alias_name":"","mq_id":"MQ_1671025906550","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1671030938331","date_format":false},{"column_name":"REVERSAL_AMOUNT","alias_name":"","mq_id":"MQ_1671108760508","date_format":false,"currency_format":true},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1675410254697","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1681124808770","date_format":false}],"joins":[]},"eq_text":"select  distinct UETR,  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  REVERSAL_DESCRIPTION,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  fn_pcidss_decrypt(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  CURRENCY,  REMARKS,  REVERSAL_AMOUNT,  ACCOUNT_CURRENCY,  BUY_RATE,  TRAN_CHARGE,  BUY_MARGIN,  TRAN_AMOUNT,  SELL_MARGIN,  SELL_RATE from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM,   case    when A.CDTR_IBAN is not null    and A.CR_ACCT_IDENTIFICATION is null then A.ACCOUNT_CURRENCY    when A.CDTR_IBAN is null    and A.CR_ACCT_IDENTIFICATION is not null then UPPER('AED')    else UPPER('OTHERS')   end as CURRENCY,   A.REMARKS,   A.CR_ACCT_IDENTIFICATION,   A.REVERSAL_AMOUNT,   NTPL.REVERSAL_CODE,   A.ACCOUNT_CURRENCY,   A.BUY_RATE,   A.TRAN_CHARGE,   A.BUY_MARGIN,   A.TRAN_AMOUNT,   A.SELL_MARGIN,   A.SELL_RATE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   NPSS_TRANSACTIONS A  left join npss_trn_process_log NTPL on   A.UETR = NTPL.UETR   and ntpl.status = 'IP_RCT_REVERSAL_REQ_RECEIVED'  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = ntpl.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Reversal Transaction CCD","filter":[{"filter_name":"CURRENCY","binding_name":"CURRENCY","binding_value":"","source_name":"AED","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Inward Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Reversal Amount","target_column":"REVERSAL_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Reversal Reason","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remarks","target_column":"REMARKS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"dependson":""},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"dependson":""}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__ee_for_review_from_tran_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_review"
		let parent_source_id=""
		let event_code="e_1675411193351"
		let event_params={"caller_name":"transaction_list__ee_for_review_from_tran_list","event_desc":"EE for review from tran list","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"Y","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for INTERNAL event of "svm for transaction list"
	svm_for_transaction_list__cc_for_show_hide_in_tran_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_transaction_list"
		let destn_id=""
		let parent_source_id="transaction_list"
		let event_code="e_1666873459717"
		let event_params={"caller_name":"svm_for_transaction_list__cc_for_show_hide_in_tran_list","event_desc":"CC for show hide in tran list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation review"
	navigation_review__sec_for_profile() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_review"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671281309024"
		let event_params={"caller_name":"navigation_review__sec_for_profile","event_desc":"SEC for Profile","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_review","raiseparam":{}}
		let handler_code="set_event_context"
		let internals=""
		let event_data={"navigation_review":{"e_1671281309024":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGCC_5","event_code":"E_1671281309024","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[],"get_from_memory":[],"set_event_context":"Y","sec_value":{"type":"SESSION_LEVEL","value":"ROOT_SCODE"}}}}}}}}}
		let data_source={}
		try {
			return this.handler.set_event_context(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation review"
	navigation_review__bt_for_reversal_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_review"
		let destn_id="reversal_ui"
		let parent_source_id=""
		let event_code="e_1666866749401"
		let event_params={"caller_name":"navigation_review__bt_for_reversal_ui","event_desc":"BT for Reversal UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_review","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation review"
	navigation_review__de_for_pl_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_review"
		let destn_id="process_log_control_ui"
		let parent_source_id=""
		let event_code="e_1671021013372"
		let event_params={"caller_name":"navigation_review__de_for_pl_ui","event_desc":"DE for PL UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_review","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation review"
	navigation_review__cc_for_set_status_bind_value() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_review"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671169173938"
		let event_params={"caller_name":"navigation_review__cc_for_set_status_bind_value","event_desc":"CC for set status bind value","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_review","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_set_status_bind_value__brfq_for_process_log,"
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_reversal_set_status_and_bind_valueService.fn_npss_cs_reversal_set_status_and_bind_value(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation review"
	navigation_review__cc_for_get_usable_balance(peventcontext) { 
		let Dest_Is_ctrl=true
		let eventcontext =["NPSS_AEFAB"]
		if(eventcontext.indexOf(peventcontext)==-1) return true;
		let source_id="navigation_review"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671173796901"
		let event_params={"caller_name":"navigation_review__cc_for_get_usable_balance","event_desc":"CC For Get usable Balance","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"NPSS_AEFAB","root_source_id":"navigation_review","raiseparam":{},"eventcontext":["NPSS_AEFAB"]}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation review"
	navigation_review__sp_for_fh(peventcontext) { 
		let Dest_Is_ctrl=true
		let eventcontext =["NPSS_AEFIN"]
		if(eventcontext.indexOf(peventcontext)==-1) return true;
		let source_id="navigation_review"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671281368795"
		let event_params={"caller_name":"navigation_review__sp_for_fh","event_desc":"SP FOR FH","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"NPSS_AEFIN","root_source_id":"navigation_review","raiseparam":{"profile_code":"BTL_1304_1671280977095"},"eventcontext":["NPSS_AEFIN"]}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation review"
	navigation_review__sp_for_fab(peventcontext) { 
		let Dest_Is_ctrl=true
		let eventcontext =["NPSS_AEFAB"]
		if(eventcontext.indexOf(peventcontext)==-1) return true;
		let source_id="navigation_review"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671281475777"
		let event_params={"caller_name":"navigation_review__sp_for_fab","event_desc":"SP for FAB","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"NPSS_AEFAB","root_source_id":"navigation_review","raiseparam":{"profile_code":"BTL_1304_1678258415615"},"eventcontext":["NPSS_AEFAB"]}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation review"
	navigation_review__he_for_aefin(peventcontext) { 
		let Dest_Is_ctrl=true
		let eventcontext =["NPSS_AEFIN"]
		if(eventcontext.indexOf(peventcontext)==-1) return true;
		let source_id="navigation_review"
		let destn_id="process_log_control_ui"
		let parent_source_id=""
		let event_code="e_1671692861445"
		let event_params={"caller_name":"navigation_review__he_for_aefin","event_desc":"HE for AEFIN","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"NPSS_AEFIN","root_source_id":"navigation_review","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""},"eventcontext":["NPSS_AEFIN"]}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation review"
	navigation_review__de_for_rev_add_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_review"
		let destn_id="reversal_additional_ui"
		let parent_source_id=""
		let event_code="e_1672140604952"
		let event_params={"caller_name":"navigation_review__de_for_rev_add_ui","event_desc":"DE for rev add ui","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_review","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation review"
	navigation_review__bt_for_rev_add_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_review"
		let destn_id="reversal_additional_ui"
		let parent_source_id=""
		let event_code="e_1672140641153"
		let event_params={"caller_name":"navigation_review__bt_for_rev_add_ui","event_desc":"BT for rev add ui","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_review","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation review"
	navigation_review__he_for_force_post(peventcontext) { 
		let Dest_Is_ctrl=true
		let eventcontext =["NPSS_AEFIN"]
		if(eventcontext.indexOf(peventcontext)==-1) return true;
		let source_id="navigation_review"
		let destn_id="reversal_action_ui_force_post"
		let parent_source_id=""
		let event_code="e_1673499885144"
		let event_params={"caller_name":"navigation_review__he_for_force_post","event_desc":"HE for Force post","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"NPSS_AEFIN","root_source_id":"navigation_review","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""},"eventcontext":["NPSS_AEFIN"]}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation review"
	navigation_review__brfq_for_cbc_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_review"
		let destn_id="cbs_accounts"
		let parent_source_id=""
		let event_code="e_1674106284411"
		let event_params={"caller_name":"navigation_review__brfq_for_cbc_account","event_desc":"BRFQ for CBC account","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_review","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_cbc_account__sfr_for_cbs,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_37","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1674106680765","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Rev CBS Account MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"ACCOUNT_NUMBER","alias_name":"","mq_id":"MQ_1674106327804","date_format":false},{"column_name":"ACCOUNT_NAME","alias_name":"","mq_id":"MQ_1674106327988","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1674106525607","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1674106532094","date_format":false}],"joins":[]},"eq_text":"select  ACCOUNT_NUMBER,  NPSST_ID,  ACCOUNT_NAME,  TENANT_ID from  (  select   case when cnca.alternate_account_type in ('VA.IBAN','VA.BBAN') then ACCOUNT_NUMBER         else null         end as account_number,         case when cnca.alternate_account_type in ('VA.IBAN','VA.BBAN') then ACCOUNT_NAME         else null         end as account_name,   CNCA.ALTERNATE_ACCOUNT_ID,   NT.TENANT_ID,   NT.CDTR_IBAN,   NT.NPSST_ID,   NT.DTT_CODE,   NT.DT_CODE  from   <tran_db>.CORE_NC_CBS_ACCOUNTS CNCA  inner join NPSS_TRANSACTIONS NT on   CNCA.ALTERNATE_ACCOUNT_ID = NT.CDTR_IBAN)V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Rev CBS Account CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Real Account No","target_column":"ACCOUNT_NUMBER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Real Account Name","target_column":"ACCOUNT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation review"
	navigation_review__he_for_fin(peventcontext) { 
		let Dest_Is_ctrl=true
		let eventcontext =["NPSS_AEFIN"]
		if(eventcontext.indexOf(peventcontext)==-1) return true;
		let source_id="navigation_review"
		let destn_id="cbs_accounts"
		let parent_source_id=""
		let event_code="e_1674106429480"
		let event_params={"caller_name":"navigation_review__he_for_fin","event_desc":"HE for FIN","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"NPSS_AEFIN","root_source_id":"navigation_review","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""},"eventcontext":["NPSS_AEFIN"]}
		let handler_code="hide_element"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_37","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1674106680765","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Rev CBS Account MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"ACCOUNT_NUMBER","alias_name":"","mq_id":"MQ_1674106327804","date_format":false},{"column_name":"ACCOUNT_NAME","alias_name":"","mq_id":"MQ_1674106327988","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1674106525607","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1674106532094","date_format":false}],"joins":[]},"eq_text":"select  ACCOUNT_NUMBER,  NPSST_ID,  ACCOUNT_NAME,  TENANT_ID from  (  select   case when cnca.alternate_account_type in ('VA.IBAN','VA.BBAN') then ACCOUNT_NUMBER         else null         end as account_number,         case when cnca.alternate_account_type in ('VA.IBAN','VA.BBAN') then ACCOUNT_NAME         else null         end as account_name,   CNCA.ALTERNATE_ACCOUNT_ID,   NT.TENANT_ID,   NT.CDTR_IBAN,   NT.NPSST_ID,   NT.DTT_CODE,   NT.DT_CODE  from   <tran_db>.CORE_NC_CBS_ACCOUNTS CNCA  inner join NPSS_TRANSACTIONS NT on   CNCA.ALTERNATE_ACCOUNT_ID = NT.CDTR_IBAN)V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Rev CBS Account CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Real Account No","target_column":"ACCOUNT_NUMBER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Real Account Name","target_column":"ACCOUNT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.hide_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation review"
	navigation_review__e_1674122143563() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_review"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1674122143563"
		let event_params={"caller_name":"navigation_review__e_1674122143563","event_desc":"E_1674122143563","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_review","raiseparam":{"profile_code":"BTL_1304_1678258415615"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation review"
	navigation_review__brfq_for_reversal() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_review"
		let destn_id="original_transaction_details"
		let parent_source_id=""
		let event_code="e_1677670692577"
		let event_params={"caller_name":"navigation_review__brfq_for_reversal","event_desc":"BRFQ for Reversal","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_review","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_reversal__sfr_for_reversal_vl,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_38","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1677670972659","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"Reversal Vertical MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1677667251146","date_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1677667251485","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1677667251650","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1677667251818","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1677667251962","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1677667252130","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1677667252298","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1677667252466","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1677667252634","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1677667302832","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1677667303016","date_format":false,"currency_format":true},{"column_name":"CR_ACCT_POSTING_RESTRICTION_CODE","alias_name":"","mq_id":"MQ_1677667303144","date_format":false},{"column_name":"EXCHANGE_RATE","alias_name":"","mq_id":"MQ_1677667303320","date_format":false},{"column_name":"gm_margin","alias_name":"","mq_id":"MQ_1677667303472","date_format":false,"currency_format":true},{"column_name":"TRAN_CHARGE","alias_name":"","mq_id":"MQ_1677667358262","date_format":false,"currency_format":true},{"column_name":"BUY_MARGIN","alias_name":"","mq_id":"MQ_1677667358422","date_format":false},{"column_name":"TRAN_AMOUNT","alias_name":"","mq_id":"MQ_1677667358576","date_format":false,"currency_format":true},{"column_name":"BUY_MARGIN","alias_name":"","mq_id":"MQ_1677667384406","date_format":false,"currency_format":true},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1677667384574","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1677667412051","date_format":false},{"column_name":"REVERSAL_AMOUNT","alias_name":"","mq_id":"MQ_1677667412195","date_format":false,"currency_format":true},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1677667443668","date_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"","mq_id":"MQ_1677667443803","date_format":false},{"column_name":"customer_posting_restriction_description","alias_name":"","mq_id":"MQ_1677667457003","date_format":false},{"column_name":"customer_posting_restriction_code","alias_name":"","mq_id":"MQ_1677667457147","date_format":false},{"column_name":"CHARGE_AMOUNT","alias_name":"","mq_id":"MQ_1677667485266","date_format":false,"currency_format":true},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1677667655195","date_format":false},{"column_name":"AMOUNT_CREDITED","alias_name":"","mq_id":"MQ_1677667655355","date_format":false},{"column_name":"AMT_CR_LOC_CUR","alias_name":"","mq_id":"MQ_1677667670675","date_format":false},{"column_name":"REMARKS","alias_name":"","mq_id":"MQ_1677667670819","date_format":false},{"column_name":"DEALT_AMOUNT","alias_name":"","mq_id":"MQ_1677669809374","date_format":false,"currency_format":true},{"column_name":"CONTRA_AMOUNT","alias_name":"","mq_id":"MQ_1677669809534","date_format":false,"currency_format":true},{"column_name":"SELL_CURRENCY","alias_name":"","mq_id":"MQ_1677669809670","date_format":false},{"column_name":"BUY_CURRENCY","alias_name":"","mq_id":"MQ_1677669834966","date_format":false},{"column_name":"account_number","alias_name":"","mq_id":"MQ_1677819938829","date_format":false},{"column_name":"createddate","alias_name":"","mq_id":"MQ_1678262833464","date_format":true},{"column_name":"CHARGEAMOUNT","alias_name":"","mq_id":"MQ_1678280863548","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1682343496223","date_format":false},{"column_name":"posting_restriction_code","alias_name":"","mq_id":"MQ_1682666722794","date_format":false},{"column_name":"account_postring_type_description","alias_name":"","mq_id":"MQ_1682666723128","date_format":false},{"column_name":"force_post_flag","alias_name":"","mq_id":"MQ_1682685496006","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  fn_pcidss_decrypt(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  CURRENCY,  REMARKS,  REVERSAL_AMOUNT,  ACCOUNT_CURRENCY,  exchange_rate,  gm_margin,  customer_posting_restriction_description,  customer_posting_restriction_code,  posting_restriction_code,  account_postring_type_description,  REVERSAL_CODE,  PROCESS_REF_NO,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  CONTRA_AMOUNT,  DEALT_AMOUNT,  account_number,  createddate,  CHARGEAMOUNT,  BuyRate,  gmmargin,  SELL_MARGIN,  SELL_RATE,  force_post_flag from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   case    when A.status = 'IP_RCT_RR_RETURN_READY' then 'Maker Accepted Transaction'    when A.status = 'IP_RCT_REV_REQ_REJECTED' then 'Maker Rejected Transaction'    else 'others'   end as Status,   case    when A.status = 'IP_RCT_RR_RETURN_READY' then 'Y'   end as force_post_flag,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM,   case    when A.CDTR_IBAN is not null    and A.CR_ACCT_IDENTIFICATION is null then A.ACCOUNT_CURRENCY    when A.CDTR_IBAN is null    and A.CR_ACCT_IDENTIFICATION is not null then UPPER('AED')    else UPPER('OTHERS')   end as CURRENCY,   A.REMARKS,   A.CR_ACCT_IDENTIFICATION,   A.REVERSAL_AMOUNT,   NTPL.REVERSAL_CODE,   NTPL.BUY_CURRENCY,   NTPL.SELL_CURRENCY,   NTPL.PROCESS_REF_NO,   NTPL.AMOUNT_CREDITED,   NTPL.AMT_CR_LOC_CUR,   NTPL.CHARGE_AMOUNT,   NTPL.CONTRA_AMOUNT,   NTPL.DEALT_AMOUNT,   A.ACCOUNT_CURRENCY,   A.SELL_MARGIN,   A.SELL_RATE,   PL.exchange_rate,   PL.gm_margin,   CNCA.customer_posting_restriction_description,   CNCA.customer_posting_restriction_code,   CNCA.posting_restriction_code,   CNCA.account_postring_type_description,   cnca.account_number,   PRL.created_date as createddate,   ICP.charge_amount as CHARGEAMOUNT,   NPSSPL.EXCHANGE_RATE as BuyRate,   NPSSPL.gm_margin as gmmargin  from   NPSS_TRANSACTIONS A  inner join npss_trn_process_log NTPL on   A.UETR = NTPL.UETR   and A.STATUS = NTPL.STATUS  left join npss_trn_process_log PL on   A.UETR = PL.UETR   and PL.STATUS = 'IP_RCT_DEAL_RECEIVED'   and pl.process_name = 'Get Deal'  left join npss_trn_process_log NPSSPL on   A.UETR = NPSSPL.UETR   and NPSSPL.STATUS = 'IP_RCT_REV_DEAL_RECEIVED'   and NPSSPL.process_name = 'Get Deal'  left join npss_trn_process_log PRL on   A.UETR = PRL.UETR   and PRL.process_name = 'Receive Pacs007'  left join npss_trn_process_log ICP on   A.UETR = ICP.UETR   and PRL.process_name = 'Inward Credit Posting'  left join <tran_db>.core_nc_cbs_accounts cnca on   cnca.alternate_account_id = A.CDTR_IBAN  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Reversal AED Vertical CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Original Txn Value Date","target_column":"VALUE_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Original CR Account Number","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account Currency","target_column":"ACCOUNT_CURRENCY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Clearing Sys Ref Number","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original E2E reference Number","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Txn Amount AED","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"Original Txn Charges AED","target_column":"CHARGEAMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Txn Amount Account Currency","target_column":"TRAN_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation review"
	navigation_review__brfq_for_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_review"
		let destn_id="refund_processing_details"
		let parent_source_id=""
		let event_code="e_1678260168532"
		let event_params={"caller_name":"navigation_review__brfq_for_list","event_desc":"BRFQ for List","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_review","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_list__e_1678260180312,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_39","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678261913315","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"Reversal Vertical MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1677667251146","date_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1677667251485","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1677667251650","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1677667251818","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1677667251962","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1677667252130","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1677667252298","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1677667252466","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1677667252634","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1677667302832","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1677667303016","date_format":false,"currency_format":true},{"column_name":"CR_ACCT_POSTING_RESTRICTION_CODE","alias_name":"","mq_id":"MQ_1677667303144","date_format":false},{"column_name":"EXCHANGE_RATE","alias_name":"","mq_id":"MQ_1677667303320","date_format":false},{"column_name":"gm_margin","alias_name":"","mq_id":"MQ_1677667303472","date_format":false,"currency_format":true},{"column_name":"TRAN_CHARGE","alias_name":"","mq_id":"MQ_1677667358262","date_format":false,"currency_format":true},{"column_name":"BUY_MARGIN","alias_name":"","mq_id":"MQ_1677667358422","date_format":false},{"column_name":"TRAN_AMOUNT","alias_name":"","mq_id":"MQ_1677667358576","date_format":false,"currency_format":true},{"column_name":"BUY_MARGIN","alias_name":"","mq_id":"MQ_1677667384406","date_format":false,"currency_format":true},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1677667384574","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1677667412051","date_format":false},{"column_name":"REVERSAL_AMOUNT","alias_name":"","mq_id":"MQ_1677667412195","date_format":false,"currency_format":true},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1677667443668","date_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"","mq_id":"MQ_1677667443803","date_format":false},{"column_name":"customer_posting_restriction_description","alias_name":"","mq_id":"MQ_1677667457003","date_format":false},{"column_name":"customer_posting_restriction_code","alias_name":"","mq_id":"MQ_1677667457147","date_format":false},{"column_name":"CHARGE_AMOUNT","alias_name":"","mq_id":"MQ_1677667485266","date_format":false,"currency_format":true},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1677667655195","date_format":false},{"column_name":"AMOUNT_CREDITED","alias_name":"","mq_id":"MQ_1677667655355","date_format":false},{"column_name":"AMT_CR_LOC_CUR","alias_name":"","mq_id":"MQ_1677667670675","date_format":false},{"column_name":"REMARKS","alias_name":"","mq_id":"MQ_1677667670819","date_format":false},{"column_name":"DEALT_AMOUNT","alias_name":"","mq_id":"MQ_1677669809374","date_format":false,"currency_format":true},{"column_name":"CONTRA_AMOUNT","alias_name":"","mq_id":"MQ_1677669809534","date_format":false,"currency_format":true},{"column_name":"SELL_CURRENCY","alias_name":"","mq_id":"MQ_1677669809670","date_format":false},{"column_name":"BUY_CURRENCY","alias_name":"","mq_id":"MQ_1677669834966","date_format":false},{"column_name":"account_number","alias_name":"","mq_id":"MQ_1677819938829","date_format":false},{"column_name":"createddate","alias_name":"","mq_id":"MQ_1678262833464","date_format":true},{"column_name":"CHARGEAMOUNT","alias_name":"","mq_id":"MQ_1678280863548","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1682343496223","date_format":false},{"column_name":"posting_restriction_code","alias_name":"","mq_id":"MQ_1682666722794","date_format":false},{"column_name":"account_postring_type_description","alias_name":"","mq_id":"MQ_1682666723128","date_format":false},{"column_name":"force_post_flag","alias_name":"","mq_id":"MQ_1682685496006","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  fn_pcidss_decrypt(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  CURRENCY,  REMARKS,  REVERSAL_AMOUNT,  ACCOUNT_CURRENCY,  exchange_rate,  gm_margin,  customer_posting_restriction_description,  customer_posting_restriction_code,  posting_restriction_code,  account_postring_type_description,  REVERSAL_CODE,  PROCESS_REF_NO,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  CONTRA_AMOUNT,  DEALT_AMOUNT,  account_number,  createddate,  CHARGEAMOUNT,  BuyRate,  gmmargin,  SELL_MARGIN,  SELL_RATE,  force_post_flag from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   case    when A.status = 'IP_RCT_RR_RETURN_READY' then 'Maker Accepted Transaction'    when A.status = 'IP_RCT_REV_REQ_REJECTED' then 'Maker Rejected Transaction'    else 'others'   end as Status,   case    when A.status = 'IP_RCT_RR_RETURN_READY' then 'Y'   end as force_post_flag,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM,   case    when A.CDTR_IBAN is not null    and A.CR_ACCT_IDENTIFICATION is null then A.ACCOUNT_CURRENCY    when A.CDTR_IBAN is null    and A.CR_ACCT_IDENTIFICATION is not null then UPPER('AED')    else UPPER('OTHERS')   end as CURRENCY,   A.REMARKS,   A.CR_ACCT_IDENTIFICATION,   A.REVERSAL_AMOUNT,   NTPL.REVERSAL_CODE,   NTPL.BUY_CURRENCY,   NTPL.SELL_CURRENCY,   NTPL.PROCESS_REF_NO,   NTPL.AMOUNT_CREDITED,   NTPL.AMT_CR_LOC_CUR,   NTPL.CHARGE_AMOUNT,   NTPL.CONTRA_AMOUNT,   NTPL.DEALT_AMOUNT,   A.ACCOUNT_CURRENCY,   A.SELL_MARGIN,   A.SELL_RATE,   PL.exchange_rate,   PL.gm_margin,   CNCA.customer_posting_restriction_description,   CNCA.customer_posting_restriction_code,   CNCA.posting_restriction_code,   CNCA.account_postring_type_description,   cnca.account_number,   PRL.created_date as createddate,   ICP.charge_amount as CHARGEAMOUNT,   NPSSPL.EXCHANGE_RATE as BuyRate,   NPSSPL.gm_margin as gmmargin  from   NPSS_TRANSACTIONS A  inner join npss_trn_process_log NTPL on   A.UETR = NTPL.UETR   and A.STATUS = NTPL.STATUS  left join npss_trn_process_log PL on   A.UETR = PL.UETR   and PL.STATUS = 'IP_RCT_DEAL_RECEIVED'   and pl.process_name = 'Get Deal'  left join npss_trn_process_log NPSSPL on   A.UETR = NPSSPL.UETR   and NPSSPL.STATUS = 'IP_RCT_REV_DEAL_RECEIVED'   and NPSSPL.process_name = 'Get Deal'  left join npss_trn_process_log PRL on   A.UETR = PRL.UETR   and PRL.process_name = 'Receive Pacs007'  left join npss_trn_process_log ICP on   A.UETR = ICP.UETR   and PRL.process_name = 'Inward Credit Posting'  left join <tran_db>.core_nc_cbs_accounts cnca on   cnca.alternate_account_id = A.CDTR_IBAN  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"Reversal Refund Vertical AED CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Txn Value Date","target_column":"createddate","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"DR Account Number","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"DR Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"DR Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Posting Restriction Code","target_column":"posting_restriction_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Posting Restriction Description","target_column":"account_postring_type_description","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Posting Restriction Code","target_column":"customer_posting_restriction_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Posting Restriction Description","target_column":"customer_posting_restriction_description","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Refund Request Txn Amount AED","target_column":"REVERSAL_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"Force Post Flag","target_column":"force_post_flag","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Accept/Reject","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation review"
	navigation_review__e_1679293130373() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_review"
		let destn_id="reversal_action_ui_trigger_btn"
		let parent_source_id=""
		let event_code="e_1679293130373"
		let event_params={"caller_name":"navigation_review__e_1679293130373","event_desc":"E_1679293130373","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_review","raiseparam":{}}
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

	//Handler for INTERNAL event of "cc for set status bind value"
	cc_for_set_status_bind_value__brfq_for_process_log(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_set_status_bind_value"
		let destn_id="process_log_list"
		let parent_source_id="navigation_review"
		let event_code="e_1671169222000"
		let event_params={"caller_name":"cc_for_set_status_bind_value__brfq_for_process_log","event_desc":"BRFQ for Process Log","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_review","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_process_log__sfr_for_process_log,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_7","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863318385","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Return Process Log CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_REVPL_PROCESSSTATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_REVPL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Reversal Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Reversal Reason","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for process log"
	brfq_for_process_log__sfr_for_process_log(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_process_log"
		let destn_id="process_log_list"
		let parent_source_id="cc_for_set_status_bind_value"
		let event_code="e_1671169237600"
		let event_params={"caller_name":"brfq_for_process_log__sfr_for_process_log","event_desc":"SFR for Process Log","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_review","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_7","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863318385","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Return Process Log CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_REVPL_PROCESSSTATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_REVPL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Reversal Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Reversal Reason","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for cbc account"
	brfq_for_cbc_account__sfr_for_cbs(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_cbc_account"
		let destn_id="cbs_accounts"
		let parent_source_id="navigation_review"
		let event_code="e_1674106316186"
		let event_params={"caller_name":"brfq_for_cbc_account__sfr_for_cbs","event_desc":"SFR FOR CBS","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_review","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_37","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1674106680765","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Rev CBS Account MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"ACCOUNT_NUMBER","alias_name":"","mq_id":"MQ_1674106327804","date_format":false},{"column_name":"ACCOUNT_NAME","alias_name":"","mq_id":"MQ_1674106327988","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1674106525607","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1674106532094","date_format":false}],"joins":[]},"eq_text":"select  ACCOUNT_NUMBER,  NPSST_ID,  ACCOUNT_NAME,  TENANT_ID from  (  select   case when cnca.alternate_account_type in ('VA.IBAN','VA.BBAN') then ACCOUNT_NUMBER         else null         end as account_number,         case when cnca.alternate_account_type in ('VA.IBAN','VA.BBAN') then ACCOUNT_NAME         else null         end as account_name,   CNCA.ALTERNATE_ACCOUNT_ID,   NT.TENANT_ID,   NT.CDTR_IBAN,   NT.NPSST_ID,   NT.DTT_CODE,   NT.DT_CODE  from   <tran_db>.CORE_NC_CBS_ACCOUNTS CNCA  inner join NPSS_TRANSACTIONS NT on   CNCA.ALTERNATE_ACCOUNT_ID = NT.CDTR_IBAN)V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Rev CBS Account CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Real Account No","target_column":"ACCOUNT_NUMBER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Real Account Name","target_column":"ACCOUNT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for reversal"
	brfq_for_reversal__sfr_for_reversal_vl(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_reversal"
		let destn_id="original_transaction_details"
		let parent_source_id="navigation_review"
		let event_code="e_1677670702073"
		let event_params={"caller_name":"brfq_for_reversal__sfr_for_reversal_vl","event_desc":"SFR for reversal VL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_review","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_38","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1677670972659","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"Reversal Vertical MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1677667251146","date_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1677667251485","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1677667251650","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1677667251818","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1677667251962","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1677667252130","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1677667252298","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1677667252466","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1677667252634","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1677667302832","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1677667303016","date_format":false,"currency_format":true},{"column_name":"CR_ACCT_POSTING_RESTRICTION_CODE","alias_name":"","mq_id":"MQ_1677667303144","date_format":false},{"column_name":"EXCHANGE_RATE","alias_name":"","mq_id":"MQ_1677667303320","date_format":false},{"column_name":"gm_margin","alias_name":"","mq_id":"MQ_1677667303472","date_format":false,"currency_format":true},{"column_name":"TRAN_CHARGE","alias_name":"","mq_id":"MQ_1677667358262","date_format":false,"currency_format":true},{"column_name":"BUY_MARGIN","alias_name":"","mq_id":"MQ_1677667358422","date_format":false},{"column_name":"TRAN_AMOUNT","alias_name":"","mq_id":"MQ_1677667358576","date_format":false,"currency_format":true},{"column_name":"BUY_MARGIN","alias_name":"","mq_id":"MQ_1677667384406","date_format":false,"currency_format":true},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1677667384574","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1677667412051","date_format":false},{"column_name":"REVERSAL_AMOUNT","alias_name":"","mq_id":"MQ_1677667412195","date_format":false,"currency_format":true},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1677667443668","date_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"","mq_id":"MQ_1677667443803","date_format":false},{"column_name":"customer_posting_restriction_description","alias_name":"","mq_id":"MQ_1677667457003","date_format":false},{"column_name":"customer_posting_restriction_code","alias_name":"","mq_id":"MQ_1677667457147","date_format":false},{"column_name":"CHARGE_AMOUNT","alias_name":"","mq_id":"MQ_1677667485266","date_format":false,"currency_format":true},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1677667655195","date_format":false},{"column_name":"AMOUNT_CREDITED","alias_name":"","mq_id":"MQ_1677667655355","date_format":false},{"column_name":"AMT_CR_LOC_CUR","alias_name":"","mq_id":"MQ_1677667670675","date_format":false},{"column_name":"REMARKS","alias_name":"","mq_id":"MQ_1677667670819","date_format":false},{"column_name":"DEALT_AMOUNT","alias_name":"","mq_id":"MQ_1677669809374","date_format":false,"currency_format":true},{"column_name":"CONTRA_AMOUNT","alias_name":"","mq_id":"MQ_1677669809534","date_format":false,"currency_format":true},{"column_name":"SELL_CURRENCY","alias_name":"","mq_id":"MQ_1677669809670","date_format":false},{"column_name":"BUY_CURRENCY","alias_name":"","mq_id":"MQ_1677669834966","date_format":false},{"column_name":"account_number","alias_name":"","mq_id":"MQ_1677819938829","date_format":false},{"column_name":"createddate","alias_name":"","mq_id":"MQ_1678262833464","date_format":true},{"column_name":"CHARGEAMOUNT","alias_name":"","mq_id":"MQ_1678280863548","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1682343496223","date_format":false},{"column_name":"posting_restriction_code","alias_name":"","mq_id":"MQ_1682666722794","date_format":false},{"column_name":"account_postring_type_description","alias_name":"","mq_id":"MQ_1682666723128","date_format":false},{"column_name":"force_post_flag","alias_name":"","mq_id":"MQ_1682685496006","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  fn_pcidss_decrypt(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  CURRENCY,  REMARKS,  REVERSAL_AMOUNT,  ACCOUNT_CURRENCY,  exchange_rate,  gm_margin,  customer_posting_restriction_description,  customer_posting_restriction_code,  posting_restriction_code,  account_postring_type_description,  REVERSAL_CODE,  PROCESS_REF_NO,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  CONTRA_AMOUNT,  DEALT_AMOUNT,  account_number,  createddate,  CHARGEAMOUNT,  BuyRate,  gmmargin,  SELL_MARGIN,  SELL_RATE,  force_post_flag from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   case    when A.status = 'IP_RCT_RR_RETURN_READY' then 'Maker Accepted Transaction'    when A.status = 'IP_RCT_REV_REQ_REJECTED' then 'Maker Rejected Transaction'    else 'others'   end as Status,   case    when A.status = 'IP_RCT_RR_RETURN_READY' then 'Y'   end as force_post_flag,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM,   case    when A.CDTR_IBAN is not null    and A.CR_ACCT_IDENTIFICATION is null then A.ACCOUNT_CURRENCY    when A.CDTR_IBAN is null    and A.CR_ACCT_IDENTIFICATION is not null then UPPER('AED')    else UPPER('OTHERS')   end as CURRENCY,   A.REMARKS,   A.CR_ACCT_IDENTIFICATION,   A.REVERSAL_AMOUNT,   NTPL.REVERSAL_CODE,   NTPL.BUY_CURRENCY,   NTPL.SELL_CURRENCY,   NTPL.PROCESS_REF_NO,   NTPL.AMOUNT_CREDITED,   NTPL.AMT_CR_LOC_CUR,   NTPL.CHARGE_AMOUNT,   NTPL.CONTRA_AMOUNT,   NTPL.DEALT_AMOUNT,   A.ACCOUNT_CURRENCY,   A.SELL_MARGIN,   A.SELL_RATE,   PL.exchange_rate,   PL.gm_margin,   CNCA.customer_posting_restriction_description,   CNCA.customer_posting_restriction_code,   CNCA.posting_restriction_code,   CNCA.account_postring_type_description,   cnca.account_number,   PRL.created_date as createddate,   ICP.charge_amount as CHARGEAMOUNT,   NPSSPL.EXCHANGE_RATE as BuyRate,   NPSSPL.gm_margin as gmmargin  from   NPSS_TRANSACTIONS A  inner join npss_trn_process_log NTPL on   A.UETR = NTPL.UETR   and A.STATUS = NTPL.STATUS  left join npss_trn_process_log PL on   A.UETR = PL.UETR   and PL.STATUS = 'IP_RCT_DEAL_RECEIVED'   and pl.process_name = 'Get Deal'  left join npss_trn_process_log NPSSPL on   A.UETR = NPSSPL.UETR   and NPSSPL.STATUS = 'IP_RCT_REV_DEAL_RECEIVED'   and NPSSPL.process_name = 'Get Deal'  left join npss_trn_process_log PRL on   A.UETR = PRL.UETR   and PRL.process_name = 'Receive Pacs007'  left join npss_trn_process_log ICP on   A.UETR = ICP.UETR   and PRL.process_name = 'Inward Credit Posting'  left join <tran_db>.core_nc_cbs_accounts cnca on   cnca.alternate_account_id = A.CDTR_IBAN  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Reversal AED Vertical CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Original Txn Value Date","target_column":"VALUE_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Original CR Account Number","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account Currency","target_column":"ACCOUNT_CURRENCY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Clearing Sys Ref Number","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original E2E reference Number","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Txn Amount AED","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"Original Txn Charges AED","target_column":"CHARGEAMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Txn Amount Account Currency","target_column":"TRAN_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for list"
	brfq_for_list__e_1678260180312(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_list"
		let destn_id="refund_processing_details"
		let parent_source_id="navigation_review"
		let event_code="e_1678260180312"
		let event_params={"caller_name":"brfq_for_list__e_1678260180312","event_desc":"E_1678260180312","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_review","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_39","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678261913315","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"Reversal Vertical MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1677667251146","date_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1677667251485","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1677667251650","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1677667251818","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1677667251962","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1677667252130","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1677667252298","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1677667252466","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1677667252634","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1677667302832","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1677667303016","date_format":false,"currency_format":true},{"column_name":"CR_ACCT_POSTING_RESTRICTION_CODE","alias_name":"","mq_id":"MQ_1677667303144","date_format":false},{"column_name":"EXCHANGE_RATE","alias_name":"","mq_id":"MQ_1677667303320","date_format":false},{"column_name":"gm_margin","alias_name":"","mq_id":"MQ_1677667303472","date_format":false,"currency_format":true},{"column_name":"TRAN_CHARGE","alias_name":"","mq_id":"MQ_1677667358262","date_format":false,"currency_format":true},{"column_name":"BUY_MARGIN","alias_name":"","mq_id":"MQ_1677667358422","date_format":false},{"column_name":"TRAN_AMOUNT","alias_name":"","mq_id":"MQ_1677667358576","date_format":false,"currency_format":true},{"column_name":"BUY_MARGIN","alias_name":"","mq_id":"MQ_1677667384406","date_format":false,"currency_format":true},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1677667384574","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1677667412051","date_format":false},{"column_name":"REVERSAL_AMOUNT","alias_name":"","mq_id":"MQ_1677667412195","date_format":false,"currency_format":true},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1677667443668","date_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"","mq_id":"MQ_1677667443803","date_format":false},{"column_name":"customer_posting_restriction_description","alias_name":"","mq_id":"MQ_1677667457003","date_format":false},{"column_name":"customer_posting_restriction_code","alias_name":"","mq_id":"MQ_1677667457147","date_format":false},{"column_name":"CHARGE_AMOUNT","alias_name":"","mq_id":"MQ_1677667485266","date_format":false,"currency_format":true},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1677667655195","date_format":false},{"column_name":"AMOUNT_CREDITED","alias_name":"","mq_id":"MQ_1677667655355","date_format":false},{"column_name":"AMT_CR_LOC_CUR","alias_name":"","mq_id":"MQ_1677667670675","date_format":false},{"column_name":"REMARKS","alias_name":"","mq_id":"MQ_1677667670819","date_format":false},{"column_name":"DEALT_AMOUNT","alias_name":"","mq_id":"MQ_1677669809374","date_format":false,"currency_format":true},{"column_name":"CONTRA_AMOUNT","alias_name":"","mq_id":"MQ_1677669809534","date_format":false,"currency_format":true},{"column_name":"SELL_CURRENCY","alias_name":"","mq_id":"MQ_1677669809670","date_format":false},{"column_name":"BUY_CURRENCY","alias_name":"","mq_id":"MQ_1677669834966","date_format":false},{"column_name":"account_number","alias_name":"","mq_id":"MQ_1677819938829","date_format":false},{"column_name":"createddate","alias_name":"","mq_id":"MQ_1678262833464","date_format":true},{"column_name":"CHARGEAMOUNT","alias_name":"","mq_id":"MQ_1678280863548","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1682343496223","date_format":false},{"column_name":"posting_restriction_code","alias_name":"","mq_id":"MQ_1682666722794","date_format":false},{"column_name":"account_postring_type_description","alias_name":"","mq_id":"MQ_1682666723128","date_format":false},{"column_name":"force_post_flag","alias_name":"","mq_id":"MQ_1682685496006","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  fn_pcidss_decrypt(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  CURRENCY,  REMARKS,  REVERSAL_AMOUNT,  ACCOUNT_CURRENCY,  exchange_rate,  gm_margin,  customer_posting_restriction_description,  customer_posting_restriction_code,  posting_restriction_code,  account_postring_type_description,  REVERSAL_CODE,  PROCESS_REF_NO,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  CONTRA_AMOUNT,  DEALT_AMOUNT,  account_number,  createddate,  CHARGEAMOUNT,  BuyRate,  gmmargin,  SELL_MARGIN,  SELL_RATE,  force_post_flag from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   case    when A.status = 'IP_RCT_RR_RETURN_READY' then 'Maker Accepted Transaction'    when A.status = 'IP_RCT_REV_REQ_REJECTED' then 'Maker Rejected Transaction'    else 'others'   end as Status,   case    when A.status = 'IP_RCT_RR_RETURN_READY' then 'Y'   end as force_post_flag,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM,   case    when A.CDTR_IBAN is not null    and A.CR_ACCT_IDENTIFICATION is null then A.ACCOUNT_CURRENCY    when A.CDTR_IBAN is null    and A.CR_ACCT_IDENTIFICATION is not null then UPPER('AED')    else UPPER('OTHERS')   end as CURRENCY,   A.REMARKS,   A.CR_ACCT_IDENTIFICATION,   A.REVERSAL_AMOUNT,   NTPL.REVERSAL_CODE,   NTPL.BUY_CURRENCY,   NTPL.SELL_CURRENCY,   NTPL.PROCESS_REF_NO,   NTPL.AMOUNT_CREDITED,   NTPL.AMT_CR_LOC_CUR,   NTPL.CHARGE_AMOUNT,   NTPL.CONTRA_AMOUNT,   NTPL.DEALT_AMOUNT,   A.ACCOUNT_CURRENCY,   A.SELL_MARGIN,   A.SELL_RATE,   PL.exchange_rate,   PL.gm_margin,   CNCA.customer_posting_restriction_description,   CNCA.customer_posting_restriction_code,   CNCA.posting_restriction_code,   CNCA.account_postring_type_description,   cnca.account_number,   PRL.created_date as createddate,   ICP.charge_amount as CHARGEAMOUNT,   NPSSPL.EXCHANGE_RATE as BuyRate,   NPSSPL.gm_margin as gmmargin  from   NPSS_TRANSACTIONS A  inner join npss_trn_process_log NTPL on   A.UETR = NTPL.UETR   and A.STATUS = NTPL.STATUS  left join npss_trn_process_log PL on   A.UETR = PL.UETR   and PL.STATUS = 'IP_RCT_DEAL_RECEIVED'   and pl.process_name = 'Get Deal'  left join npss_trn_process_log NPSSPL on   A.UETR = NPSSPL.UETR   and NPSSPL.STATUS = 'IP_RCT_REV_DEAL_RECEIVED'   and NPSSPL.process_name = 'Get Deal'  left join npss_trn_process_log PRL on   A.UETR = PRL.UETR   and PRL.process_name = 'Receive Pacs007'  left join npss_trn_process_log ICP on   A.UETR = ICP.UETR   and PRL.process_name = 'Inward Credit Posting'  left join <tran_db>.core_nc_cbs_accounts cnca on   cnca.alternate_account_id = A.CDTR_IBAN  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"Reversal Refund Vertical AED CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Txn Value Date","target_column":"createddate","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"DR Account Number","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"DR Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"DR Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Posting Restriction Code","target_column":"posting_restriction_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Posting Restriction Description","target_column":"account_postring_type_description","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Posting Restriction Code","target_column":"customer_posting_restriction_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Posting Restriction Description","target_column":"customer_posting_restriction_description","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Refund Request Txn Amount AED","target_column":"REVERSAL_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"Force Post Flag","target_column":"force_post_flag","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Accept/Reject","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "reversal action ui accept"
	reversal_action_ui_accept__conf_info_for_accept() { 
		let Dest_Is_ctrl=true
		
		let source_id="reversal_action_ui_accept"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1672212220468"
		let event_params={"caller_name":"reversal_action_ui_accept__conf_info_for_accept","event_desc":"Conf info for accept","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","message_text":"Do you want to accept ?","root_source_id":"reversal_action_ui_accept","raiseparam":{"conf_msg":""}}
		let handler_code="conf_msg"
		let internals="conf_info_for_accept__cc_for_accept_ide,"
		let event_data={}
		let data_source={}
		try {
			this.handler.conf_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "conf info for accept"
	conf_info_for_accept__cc_for_accept_ide(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="YES"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="conf_info_for_accept"
		let destn_id=""
		let parent_source_id="reversal_action_ui_accept"
		let event_code="e_1672212459182"
		let event_params={"caller_name":"conf_info_for_accept__cc_for_accept_ide","event_desc":"CC for accept ide","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"reversal_action_ui_accept","raiseparam":{},"parent_event_result":"YES"}
		let handler_code="custom_connectors"
		let internals="cc_for_accept_ide__info_for_accept,"
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_ip_rev_accept_inau_reserve_fundService.fn_npss_cs_ip_rev_accept_inau_reserve_fund(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for accept ide"
	cc_for_accept_ide__info_for_accept(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_accept_ide"
		let destn_id=""
		let parent_source_id="conf_info_for_accept"
		let event_code="e_1672212594886"
		let event_params={"caller_name":"cc_for_accept_ide__info_for_accept","event_desc":"info for accept","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Funds reversed and forward to checker","root_source_id":"reversal_action_ui_accept","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="info_for_accept__rs_for_accepts,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "info for accept"
	info_for_accept__rs_for_accepts(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="info_for_accept"
		let destn_id=""
		let parent_source_id="cc_for_accept_ide"
		let event_code="e_1672212632516"
		let event_params={"caller_name":"info_for_accept__rs_for_accepts","event_desc":"RS for accepts","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"reversal_action_ui_accept","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__svm_for_process_log() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="process_log_list"
		let parent_source_id=""
		let event_code="e_1666866360875"
		let event_params={"caller_name":"process_log_list__svm_for_process_log","event_desc":"SVM for Process Log","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={"process_log_list":{"e_1666866360875":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_7","event_code":"E_1666866360875","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"NPSSTPL_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSSTPL_ID","setd3name":"NPSSTPL_ID"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_7","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863318385","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Return Process Log CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_REVPL_PROCESSSTATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_REVPL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Reversal Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Reversal Reason","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__ee_for_crr() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="reversal_action_ui_change_return_reason"
		let parent_source_id=""
		let event_code="e_1666879201793"
		let event_params={"caller_name":"process_log_list__ee_for_crr","event_desc":"EE For CRR","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__ee_for_accept() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="reversal_action_ui_accept"
		let parent_source_id=""
		let event_code="e_1666960496370"
		let event_params={"caller_name":"process_log_list__ee_for_accept","event_desc":"EE for Accept","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__ee_for_approve() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="reversal_action_ui_approve"
		let parent_source_id=""
		let event_code="e_1666960524747"
		let event_params={"caller_name":"process_log_list__ee_for_approve","event_desc":"EE for Approve","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__ee_for_reject() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="reversal_action_ui_reject"
		let parent_source_id=""
		let event_code="e_1666960556431"
		let event_params={"caller_name":"process_log_list__ee_for_reject","event_desc":"EE for Reject","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__ee_for_return() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="reversal_action_ui_capprove"
		let parent_source_id=""
		let event_code="e_1666960644352"
		let event_params={"caller_name":"process_log_list__ee_for_return","event_desc":"EE for Return","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__ssr_for_cru() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="change_return_ui"
		let parent_source_id=""
		let event_code="e_1671184586800"
		let event_params={"caller_name":"process_log_list__ssr_for_cru","event_desc":"SSR for CRU","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__ee_for_rau_cancel() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="reversal_action_ui_cancel__send_to_maker"
		let parent_source_id=""
		let event_code="e_1671195126516"
		let event_params={"caller_name":"process_log_list__ee_for_rau_cancel","event_desc":"EE for RAU Cancel","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "change return ui save"
	change_return_ui_save__ve_for_crrui() { 
		let Dest_Is_ctrl=true
		
		let source_id="change_return_ui_save"
		let destn_id="change_return_ui"
		let parent_source_id=""
		let event_code="e_1666875197979"
		let event_params={"caller_name":"change_return_ui_save__ve_for_crrui","event_desc":"VE for CRRUI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"change_return_ui_save","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="ve_for_crrui__save_for_cr,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ve for crrui"
	ve_for_crrui__save_for_cr(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ve_for_crrui"
		let destn_id="change_return_ui"
		let parent_source_id="change_return_ui_save"
		let event_code="e_1666875229752"
		let event_params={"caller_name":"ve_for_crrui__save_for_cr","event_desc":"Save for CR","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"change_return_ui_save","raiseparam":{"reset_selection":"Y","need_clear_value":"Y","no_change_status_on_modify":"Y","release_lock":"Y","clear_cache":"Y"},"parent_event_result":"SUCCESS"}
		let handler_code="save_tran"
		let internals="save_for_cr__return_reason_info,"
		let event_data={}
		let data_source={}
		try {
			this.handler.save_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "save for cr"
	save_for_cr__return_reason_info(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="save_for_cr"
		let destn_id=""
		let parent_source_id="ve_for_crrui"
		let event_code="e_1666875247184"
		let event_params={"caller_name":"save_for_cr__return_reason_info","event_desc":"Return Reason info","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Data has been changed successfully","root_source_id":"change_return_ui_save","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="return_reason_info__rs_for_crui,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "return reason info"
	return_reason_info__rs_for_crui(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="return_reason_info"
		let destn_id=""
		let parent_source_id="save_for_cr"
		let event_code="e_1666875275371"
		let event_params={"caller_name":"return_reason_info__rs_for_crui","event_desc":"RS for CRUI","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"change_return_ui_save","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "reversal action ui trigger btn"
	reversal_action_ui_trigger_btn__brfq_for_comment_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="reversal_action_ui_trigger_btn"
		let destn_id="remarks_list"
		let parent_source_id=""
		let event_code="e_1666866840507"
		let event_params={"caller_name":"reversal_action_ui_trigger_btn__brfq_for_comment_list","event_desc":"BRFQ for Comment List","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"reversal_action_ui_trigger_btn","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_8","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863771649","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Remarks MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"remarks","alias_name":"","mq_id":"MQ_1679295852705","date_format":false}],"joins":[]},"eq_text":"select remarks,npsst_id,tenant_id  from npss_transactions nt $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Remarks CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Remarks","target_column":"remarks","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "reversal action ui change return reason"
	reversal_action_ui_change_return_reason__crr_for_spap() { 
		let Dest_Is_ctrl=true
		
		let source_id="reversal_action_ui_change_return_reason"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666875023412"
		let event_params={"caller_name":"reversal_action_ui_change_return_reason__crr_for_spap","event_desc":"CRR For SPAP","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"reversal_action_ui_change_return_reason","raiseparam":{"popup_category":"profile","variable":"p_change_return_layout__crr_for_spap","selector":"p_change_return_layout","profile_code":"BTL_1304_1666856823236","window_title":"Change Return Reason","window_height":300,"window_width":"600px","window_close_icon":"Y","eventdes":"crr_for_spap","eventcode":"E_1666875023412"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "reversal action ui change return reason"
	reversal_action_ui_change_return_reason__bind_tran_for_crui() { 
		let Dest_Is_ctrl=true
		
		let source_id="reversal_action_ui_change_return_reason"
		let destn_id="change_return_ui"
		let parent_source_id=""
		let event_code="e_1671184607723"
		let event_params={"caller_name":"reversal_action_ui_change_return_reason__bind_tran_for_crui","event_desc":"Bind Tran for CRUI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"reversal_action_ui_change_return_reason","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "reversal action ui back"
	reversal_action_ui_back__rs_for_back_profile() { 
		let Dest_Is_ctrl=true
		
		let source_id="reversal_action_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666875137726"
		let event_params={"caller_name":"reversal_action_ui_back__rs_for_back_profile","event_desc":"RS for back profile","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"reversal_action_ui_back","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "accept ui save"
	accept_ui_save__ve_for_accept() { 
		let Dest_Is_ctrl=true
		
		let source_id="accept_ui_save"
		let destn_id="accept_ui"
		let parent_source_id=""
		let event_code="e_1666875170341"
		let event_params={"caller_name":"accept_ui_save__ve_for_accept","event_desc":"VE for Accept","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"accept_ui_save","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="ve_for_accept__cc_for_reversal_ide,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ve for accept"
	ve_for_accept__cc_for_reversal_ide(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ve_for_accept"
		let destn_id=""
		let parent_source_id="accept_ui_save"
		let event_code="e_1666875291197"
		let event_params={"caller_name":"ve_for_accept__cc_for_reversal_ide","event_desc":"CC for reversal ide","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"accept_ui_save","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="cc_for_reversal_ide__accept_info,"
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_ip_rev_accept_inau_reserve_fundService.fn_npss_cs_ip_rev_accept_inau_reserve_fund(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for reversal ide"
	cc_for_reversal_ide__accept_info(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_reversal_ide"
		let destn_id=""
		let parent_source_id="ve_for_accept"
		let event_code="e_1666875316386"
		let event_params={"caller_name":"cc_for_reversal_ide__accept_info","event_desc":"Accept info","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Funds reversed and forward to checker","root_source_id":"accept_ui_save","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="accept_info__accept_success_rs,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "accept info"
	accept_info__accept_success_rs(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="accept_info"
		let destn_id=""
		let parent_source_id="cc_for_reversal_ide"
		let event_code="e_1666875865234"
		let event_params={"caller_name":"accept_info__accept_success_rs","event_desc":"Accept success RS","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"accept_ui_save","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "reversal action ui reject"
	reversal_action_ui_reject__spap_for_reject_code() { 
		let Dest_Is_ctrl=true
		
		let source_id="reversal_action_ui_reject"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1668694663530"
		let event_params={"caller_name":"reversal_action_ui_reject__spap_for_reject_code","event_desc":"SPAP for Reject Code","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"reversal_action_ui_reject","raiseparam":{"popup_category":"profile","variable":"p_remarks_layout__spap_for_reject_code","selector":"p_remarks_layout","profile_code":"BTL_1304_1668694521732","window_title":"Remark Details","window_height":300,"window_width":"600px","window_close_icon":"Y","eventdes":"spap_for_reject_code","eventcode":"E_1668694663530"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "reversal action ui approve"
	reversal_action_ui_approve__cc_for_approves() { 
		let Dest_Is_ctrl=true
		
		let source_id="reversal_action_ui_approve"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666875519076"
		let event_params={"caller_name":"reversal_action_ui_approve__cc_for_approves","event_desc":"CC for approves","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"reversal_action_ui_approve","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_approves__info_for_approve,"
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_reject_pack002Service.fn_npss_cs_reject_pack002(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for approves"
	cc_for_approves__info_for_approve(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_approves"
		let destn_id=""
		let parent_source_id="reversal_action_ui_approve"
		let event_code="e_1666875545933"
		let event_params={"caller_name":"cc_for_approves__info_for_approve","event_desc":"info for approve","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Data has been approved successfully","root_source_id":"reversal_action_ui_approve","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="info_for_approve__rs_for_approve,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "info for approve"
	info_for_approve__rs_for_approve(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="info_for_approve"
		let destn_id=""
		let parent_source_id="cc_for_approves"
		let event_code="e_1666875636739"
		let event_params={"caller_name":"info_for_approve__rs_for_approve","event_desc":"RS for Approve","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"reversal_action_ui_approve","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "reversal action ui capprove"
	reversal_action_ui_capprove__cc_forreturn() { 
		let Dest_Is_ctrl=true
		
		let source_id="reversal_action_ui_capprove"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666875671210"
		let event_params={"caller_name":"reversal_action_ui_capprove__cc_forreturn","event_desc":"CC forReturn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"reversal_action_ui_capprove","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_forreturn__return_info,"
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_ip_rev_ret_auth_pacs004Service.fn_npss_cs_ip_rev_ret_auth_pacs004(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc forreturn"
	cc_forreturn__return_info(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_forreturn"
		let destn_id=""
		let parent_source_id="reversal_action_ui_capprove"
		let event_code="e_1666875696862"
		let event_params={"caller_name":"cc_forreturn__return_info","event_desc":"Return info","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Data has been returned successfully","root_source_id":"reversal_action_ui_capprove","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="return_info__rs_for_return,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "return info"
	return_info__rs_for_return(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="return_info"
		let destn_id=""
		let parent_source_id="cc_forreturn"
		let event_code="e_1666875726655"
		let event_params={"caller_name":"return_info__rs_for_return","event_desc":"RS for return","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"reversal_action_ui_capprove","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "remarks ui save"
	remarks_ui_save__validate_for_remarks() { 
		let Dest_Is_ctrl=true
		
		let source_id="remarks_ui_save"
		let destn_id="remarks_ui"
		let parent_source_id=""
		let event_code="e_1671021909122"
		let event_params={"caller_name":"remarks_ui_save__validate_for_remarks","event_desc":"Validate for Remarks","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"remarks_ui_save","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="validate_for_remarks__cc_remarks,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "validate for remarks"
	validate_for_remarks__cc_remarks(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="validate_for_remarks"
		let destn_id=""
		let parent_source_id="remarks_ui_save"
		let event_code="e_1671021956007"
		let event_params={"caller_name":"validate_for_remarks__cc_remarks","event_desc":"CC Remarks","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"remarks_ui_save","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="cc_remarks__info_remarks,"
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_ip_rev_reject_inau_reserve_fundService.fn_npss_cs_ip_rev_reject_inau_reserve_fund(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc remarks"
	cc_remarks__info_remarks(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_remarks"
		let destn_id=""
		let parent_source_id="validate_for_remarks"
		let event_code="e_1671022028630"
		let event_params={"caller_name":"cc_remarks__info_remarks","event_desc":"info remarks","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Reversal request has been rejected successfully","root_source_id":"remarks_ui_save","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="info_remarks__rc_after_reject_remarks,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "info remarks"
	info_remarks__rc_after_reject_remarks(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="info_remarks"
		let destn_id=""
		let parent_source_id="cc_remarks"
		let event_code="e_1671022045441"
		let event_params={"caller_name":"info_remarks__rc_after_reject_remarks","event_desc":"RC after reject remarks","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"remarks_ui_save","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "back ui back"
	back_ui_back__sp_for_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669202362141"
		let event_params={"caller_name":"back_ui_back__sp_for_back","event_desc":"SP for back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"back_ui_back","raiseparam":{"profile_code":"BTL_1304_1666856426885"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view tran"
	navigation_view_tran__sp_for_vd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_tran"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669202470807"
		let event_params={"caller_name":"navigation_view_tran__sp_for_vd","event_desc":"SP for VD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_tran","raiseparam":{"profile_code":"BTL_1304_1669202289940"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view tran"
	navigation_view_tran__brfq_for_vtd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_tran"
		let destn_id="view_dr_cr_details"
		let parent_source_id=""
		let event_code="e_1669202502516"
		let event_params={"caller_name":"navigation_view_tran__brfq_for_vtd","event_desc":"BRFQ for VTD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_tran","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_11","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1673093401100","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Decr HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1673092056492","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092056684","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092056908","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1673092057076","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092057228","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092057420","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092057588","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1673092057748","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1673092057924","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1673092127114","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1673092127282","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1673092127458","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1673092127626","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1673092127778","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092127946","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092128266","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092128473","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1673092236606","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092236782","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092236942","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092237110","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1673092237270","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1673092237447","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1673092237623","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1673092290325","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1673092290485","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673092290653","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1673092290821","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1673092290981","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1673092291149","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1673092291341","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1673092291501","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1673092354435","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1673092354603","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1673092354779","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1673092354947","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1673092355115","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1673092355283","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1673092355467","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092402433","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1673092402801","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1673092403129","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(DBTR_ACCT_NO,$PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  fn_pcidss_decrypt(CR_ACCT_IDENTIFICATION,$PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  TRAN_REF_ID,  PROCESSING_SYSTEM from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   A.CR_ACCT_IDENTIFICATION,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Decr Vertical Dr Cr CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Created Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Acceptance Date Time","target_column":"ACCP_DATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Sort Code","target_column":"CR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Identification","target_column":"CR_ACCT_IDENTIFICATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Sort Code","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Identification","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Private Identification","target_column":"DBTR_PRVT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Other Issuer","target_column":"DBTR_OTHER_ISSUER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation view tran"
	navigation_view_tran__brfq_for_payment_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_tran"
		let destn_id="view_payment_details"
		let parent_source_id=""
		let event_code="e_1669285544111"
		let event_params={"caller_name":"navigation_view_tran__brfq_for_payment_list","event_desc":"BRFQ for Payment list","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_tran","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_14","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1673093439023","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Decr HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1673092056492","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092056684","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092056908","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1673092057076","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092057228","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092057420","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092057588","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1673092057748","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1673092057924","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1673092127114","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1673092127282","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1673092127458","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1673092127626","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1673092127778","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092127946","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092128266","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092128473","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1673092236606","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092236782","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092236942","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092237110","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1673092237270","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1673092237447","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1673092237623","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1673092290325","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1673092290485","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673092290653","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1673092290821","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1673092290981","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1673092291149","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1673092291341","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1673092291501","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1673092354435","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1673092354603","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1673092354779","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1673092354947","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1673092355115","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1673092355283","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1673092355467","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092402433","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1673092402801","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1673092403129","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(DBTR_ACCT_NO,$PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  fn_pcidss_decrypt(CR_ACCT_IDENTIFICATION,$PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  TRAN_REF_ID,  PROCESSING_SYSTEM from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   A.CR_ACCT_IDENTIFICATION,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Decr Vertical Payment CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Id","target_column":"NPSST_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Txn Value Date","target_column":"VALUE_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd-MM-yyyy HH:mm:ss\"","date_format":true},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Batch Id","target_column":"EXHF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E reference id","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Category Purpose","target_column":"category_purpose","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Issuer Type Code","target_column":"issuer_type_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remittance Info","target_column":"REMITTANCE_INFO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let event_code="e_1669378824280"
		let event_params={"caller_name":"message_back_ui_back__sp_for_message_back","event_desc":"SP for message back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_back_ui_back","raiseparam":{"profile_code":"BTL_1304_1669378450385"}}
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
		let event_code="e_1669378863568"
		let event_params={"caller_name":"message_detail_action_back__sp_for_mda","event_desc":"SP for MDA","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_detail_action_back","raiseparam":{"profile_code":"BTL_1304_1666856426885"}}
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
		let event_code="e_1669378909543"
		let event_params={"caller_name":"single_back_ui_back__sp_for_reqres","event_desc":"SP for REQ,RES","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"single_back_ui_back","raiseparam":{"profile_code":"BTL_1304_1669377273486"}}
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
	process_log_ui_back__sp_to_main_layout() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669379224924"
		let event_params={"caller_name":"process_log_ui_back__sp_to_main_layout","event_desc":"SP to Main layout","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_back","raiseparam":{"profile_code":"BTL_1304_1666856426885"}}
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
	process_log_ui_view_request__sp_for_view_req() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_request"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669379316206"
		let event_params={"caller_name":"process_log_ui_view_request__sp_for_view_req","event_desc":"SP for View req","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_request","raiseparam":{"profile_code":"BTL_1304_1669377560031"}}
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
	process_log_ui_view_request__bt_for_view_req() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_request"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1669379456681"
		let event_params={"caller_name":"process_log_ui_view_request__bt_for_view_req","event_desc":"BT for View req","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_request","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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
	process_log_ui_view_response__sp_for_view_res() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_response"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669379325382"
		let event_params={"caller_name":"process_log_ui_view_response__sp_for_view_res","event_desc":"SP for View res","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_response","raiseparam":{"profile_code":"BTL_1304_1669438778345"}}
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
	process_log_ui_view_response__bt_for_view_res() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_response"
		let destn_id="response_ui"
		let parent_source_id=""
		let event_code="e_1669379416004"
		let event_params={"caller_name":"process_log_ui_view_response__bt_for_view_res","event_desc":"BT for View res","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_response","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__ssr_for_res_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="response_ui"
		let parent_source_id=""
		let event_code="e_1669382313243"
		let event_params={"caller_name":"history_detail__ssr_for_res_ui","event_desc":"SSR for res UI","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{}}
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
	history_detail__ssr_for_req_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1669382342330"
		let event_params={"caller_name":"history_detail__ssr_for_req_ui","event_desc":"SSR for req UI","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{}}
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
	history_detail__ee_for_view_res() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="process_log_ui_view_request"
		let parent_source_id=""
		let event_code="e_1669382379662"
		let event_params={"caller_name":"history_detail__ee_for_view_res","event_desc":"EE for view res","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	history_detail__ee_for_view_req() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="process_log_ui_view_response"
		let parent_source_id=""
		let event_code="e_1669382438792"
		let event_params={"caller_name":"history_detail__ee_for_view_req","event_desc":"EE for view req","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	history_detail__ee_for_vreq_vres() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="process_log_ui_view_req_and_res"
		let parent_source_id=""
		let event_code="e_1670244809778"
		let event_params={"caller_name":"history_detail__ee_for_vreq_vres","event_desc":"EE for VReq Vres","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view process log"
	navigation_view_process_log__brfq_for_hd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_process_log"
		let destn_id="history_detail"
		let parent_source_id=""
		let event_code="e_1669382496358"
		let event_params={"caller_name":"navigation_view_process_log__brfq_for_hd","event_desc":"BRFQ for HD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_process_log","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_hd__sfr_for_hdl,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_16","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1669384350002","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation view process log"
	navigation_view_process_log__sp_for_vlh() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_process_log"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669382872136"
		let event_params={"caller_name":"navigation_view_process_log__sp_for_vlh","event_desc":"SP for VLH","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_process_log","raiseparam":{"profile_code":"BTL_1304_1669377273486"}}
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
	brfq_for_hd__sfr_for_hdl(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_hd"
		let destn_id="history_detail"
		let parent_source_id="navigation_view_process_log"
		let event_code="e_1669382521620"
		let event_params={"caller_name":"brfq_for_hd__sfr_for_hdl","event_desc":"SFR for HDL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_view_process_log","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_16","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1669384350002","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation view message log"
	navigation_view_message_log__sp_for_vmd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_message_log"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669383391305"
		let event_params={"caller_name":"navigation_view_message_log__sp_for_vmd","event_desc":"SP for VMD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_message_log","raiseparam":{"profile_code":"BTL_1304_1669378450385"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view message log"
	navigation_view_message_log__brfq_for_vm() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_message_log"
		let destn_id="message_detail"
		let parent_source_id=""
		let event_code="e_1669383745510"
		let event_params={"caller_name":"navigation_view_message_log__brfq_for_vm","event_desc":"BRFQ for VM","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_message_log","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_vm__sfr_for_md,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_18","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1669384391224","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1668573850306","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1668573852117","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1668573852786","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1668573853731","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1668573854459","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1668573869044","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1668573871186","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573874178","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573876315","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668573884586","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1668573900766","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1668573911947","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1668573917043","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1668573918291","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1668573918796","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1668573919355","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1668573919955","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1668573925605","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1668587107858","date_format":false}],"joins":[]},"eq_text":"select  NPSSTRRD_ID,  MSG_ID,  UETR,  PARENT_NPSSTRRD_REFNO,  NPSSTRRD_REFNO,  PROCESS_CODE,  PROCESS_DETAIL,  EXHF_ID,  PROCESS_NAME,  MESSAGE_DESC,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  STATUS,  PROCESS_STATUS,PROCESS_TYPE,  MESSAGE_DATA,  CREATEDDATEMILISEC,  DT_CODE,  DTT_CODE from  (  select   NPSSTRRD.NPSSTRRD_ID,   NPSSTRRD.MSG_ID,   NPSSTRRD.UETR,   NPSSTRRD.PARENT_NPSSTRRD_REFNO,   NPSSTRRD.NPSSTRRD_REFNO,   NPSSTRRD.MESSAGE_DATA,   NPSSTRRD.PROCESS_CODE,   NPSSTRRD.PROCESS_DETAIL,   NPSSTRRD.EXHF_ID,   NPSSTRRD.PROCESS_NAME,   NPSSTRRD.MESSAGE_DESC,   NPSSTRRD.CHANNEL_ID,   NPSSTRRD.CHANNEL_REFNO,   NPSSTRRD.CHANNEL_USERID,   NPSSTRRD.CHANNEL_PRODUCT,   NPSSTRRD.CHANNEL_SUB_PRODUCT,   NPSSTRRD.CHANNEL_TRAN_CODE,   NPSSTRRD.CREATED_BY,   NPSSTRRD.CREATED_BY_NAME,   NPSSTRRD.CREATED_DATE,   NPSSTRRD.DT_CODE,   NPSSTRRD.DT_DESCRIPTION,   NPSSTRRD.DTT_CODE,   NPSSTRRD.DTT_DESCRIPTION,   NPSSTRRD.MODIFIED_BY,   NPSSTRRD.MODIFIED_BY_NAME,   NPSSTRRD.MODIFIED_DATE,   NPSSTRRD.STATUS,   NPSSTRRD.PROCESS_STATUS,NT.PROCESS_TYPE,   NPSSTRRD.SYSTEM_ID,   NPSSTRRD.SYSTEM_NAME,   NPSSTRRD.TENANT_ID,   NPSSTRRD.APP_ID,   NPSSTRRD.VERSION_NO,   TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC  from   NPSS_TRN_REQ_RESP_DTLS NPSSTRRD  inner join NPSS_TRANSACTIONS NT on   NPSSTRRD.UETR = NT.UETR) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS REQ RES CCD","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let parent_source_id="navigation_view_message_log"
		let event_code="e_1669383777332"
		let event_params={"caller_name":"brfq_for_vm__sfr_for_md","event_desc":"SFR for MD","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_view_message_log","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_18","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1669384391224","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1668573850306","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1668573852117","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1668573852786","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1668573853731","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1668573854459","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1668573869044","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1668573871186","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573874178","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573876315","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668573884586","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1668573900766","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1668573911947","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1668573917043","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1668573918291","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1668573918796","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1668573919355","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1668573919955","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1668573925605","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1668587107858","date_format":false}],"joins":[]},"eq_text":"select  NPSSTRRD_ID,  MSG_ID,  UETR,  PARENT_NPSSTRRD_REFNO,  NPSSTRRD_REFNO,  PROCESS_CODE,  PROCESS_DETAIL,  EXHF_ID,  PROCESS_NAME,  MESSAGE_DESC,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  STATUS,  PROCESS_STATUS,PROCESS_TYPE,  MESSAGE_DATA,  CREATEDDATEMILISEC,  DT_CODE,  DTT_CODE from  (  select   NPSSTRRD.NPSSTRRD_ID,   NPSSTRRD.MSG_ID,   NPSSTRRD.UETR,   NPSSTRRD.PARENT_NPSSTRRD_REFNO,   NPSSTRRD.NPSSTRRD_REFNO,   NPSSTRRD.MESSAGE_DATA,   NPSSTRRD.PROCESS_CODE,   NPSSTRRD.PROCESS_DETAIL,   NPSSTRRD.EXHF_ID,   NPSSTRRD.PROCESS_NAME,   NPSSTRRD.MESSAGE_DESC,   NPSSTRRD.CHANNEL_ID,   NPSSTRRD.CHANNEL_REFNO,   NPSSTRRD.CHANNEL_USERID,   NPSSTRRD.CHANNEL_PRODUCT,   NPSSTRRD.CHANNEL_SUB_PRODUCT,   NPSSTRRD.CHANNEL_TRAN_CODE,   NPSSTRRD.CREATED_BY,   NPSSTRRD.CREATED_BY_NAME,   NPSSTRRD.CREATED_DATE,   NPSSTRRD.DT_CODE,   NPSSTRRD.DT_DESCRIPTION,   NPSSTRRD.DTT_CODE,   NPSSTRRD.DTT_DESCRIPTION,   NPSSTRRD.MODIFIED_BY,   NPSSTRRD.MODIFIED_BY_NAME,   NPSSTRRD.MODIFIED_DATE,   NPSSTRRD.STATUS,   NPSSTRRD.PROCESS_STATUS,NT.PROCESS_TYPE,   NPSSTRRD.SYSTEM_ID,   NPSSTRRD.SYSTEM_NAME,   NPSSTRRD.TENANT_ID,   NPSSTRRD.APP_ID,   NPSSTRRD.VERSION_NO,   TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC  from   NPSS_TRN_REQ_RESP_DTLS NPSSTRRD  inner join NPSS_TRANSACTIONS NT on   NPSSTRRD.UETR = NT.UETR) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS REQ RES CCD","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let event_code="e_1669383955572"
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
		let event_code="e_1669384064012"
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

	//Handler for ACTION_BUTTON_CLICK event of "message detail action view message"
	message_detail_action_view_message__bt_for_mgsg() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail_action_view_message"
		let destn_id="message_detail_ui"
		let parent_source_id=""
		let event_code="e_1669383991409"
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

	//Handler for ACTION_BUTTON_CLICK event of "message detail action view message"
	message_detail_action_view_message__sp_for_view_message_data() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail_action_view_message"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669384100689"
		let event_params={"caller_name":"message_detail_action_view_message__sp_for_view_message_data","event_desc":"SP for view message DATA","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_detail_action_view_message","raiseparam":{"profile_code":"BTL_1304_1669378545899"}}
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
		let event_code="e_1670244041861"
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
		let event_code="e_1670244091303"
		let event_params={"caller_name":"process_log_ui_view_req_and_res__bt_for_res","event_desc":"BT FOR RES","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_req_and_res","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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
	process_log_ui_view_req_and_res__sp_for_v_req_and_v_res() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_req_and_res"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1670244119210"
		let event_params={"caller_name":"process_log_ui_view_req_and_res__sp_for_v_req_and_v_res","event_desc":"SP for V REQ and V RES","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_req_and_res","raiseparam":{"profile_code":"BTL_1304_1670243823771"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "trig action for list ui trg queue"
	trig_action_for_list_ui_trg_queue__sec_for_queue_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="trig_action_for_list_ui_trg_queue"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671117099361"
		let event_params={"caller_name":"trig_action_for_list_ui_trg_queue__sec_for_queue_list","event_desc":"SEC for Queue List","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"trig_action_for_list_ui_trg_queue","raiseparam":{}}
		let handler_code="set_event_context"
		let internals=""
		let event_data={"trig_action_for_list_ui_trg_queue":{"e_1671117099361":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGCC_51","event_code":"E_1671117099361","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[],"get_from_memory":[],"set_event_context":"Y","sec_value":{"type":"SESSION_LEVEL","value":"ROOT_SCODE"}}}}}}}}}
		let data_source={}
		try {
			return this.handler.set_event_context(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "trig action for list ui trg queue"
	trig_action_for_list_ui_trg_queue__ssp_for_tri_queue_for_fab(peventcontext) { 
		let Dest_Is_ctrl=true
		let eventcontext =["NPSS_AEFAB"]
		if(eventcontext.indexOf(peventcontext)==-1) return true;
		let source_id="trig_action_for_list_ui_trg_queue"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1672299325405"
		let event_params={"caller_name":"trig_action_for_list_ui_trg_queue__ssp_for_tri_queue_for_fab","event_desc":"SSP for Tri queue for FAB","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"NPSS_AEFAB","root_source_id":"trig_action_for_list_ui_trg_queue","raiseparam":{},"eventcontext":["NPSS_AEFAB"]}
		let handler_code="set_search_params"
		let internals="ssp_for_tri_queue_for_fab__brfq_for_queue_fab,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "trig action for list ui trg queue"
	trig_action_for_list_ui_trg_queue__ssp_for_tri_queue_for_fh(peventcontext) { 
		let Dest_Is_ctrl=true
		let eventcontext =["NPSS_AEFIN"]
		if(eventcontext.indexOf(peventcontext)==-1) return true;
		let source_id="trig_action_for_list_ui_trg_queue"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1672299345663"
		let event_params={"caller_name":"trig_action_for_list_ui_trg_queue__ssp_for_tri_queue_for_fh","event_desc":"SSP for Tri queue for FH","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"NPSS_AEFIN","root_source_id":"trig_action_for_list_ui_trg_queue","raiseparam":{},"eventcontext":["NPSS_AEFIN"]}
		let handler_code="set_search_params"
		let internals="ssp_for_tri_queue_for_fh__brfq_for_fhs,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for fhs"
	brfq_for_fhs__sfr_for_fhs(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_fhs"
		let destn_id="queue"
		let parent_source_id="ssp_for_tri_queue_for_fh"
		let event_code="e_1671116934338"
		let event_params={"caller_name":"brfq_for_fhs__sfr_for_fhs","event_desc":"SFR for FHs","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"trig_action_for_list_ui_trg_queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863057903","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Reversal Tran Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1671019841112","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671019841297","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1675348669752","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS from  (  select   NT.CREATED_DATE,   NT.STATUS,   NT.PROCESS_STATUS,   NT.UETR,   NT.DBTR_IBAN,   NT.PROCESSING_SYSTEM,   NT.TENANT_ID,   NT.MODIFIED_DATE,   NT.MODIFIED_DATE_UTC,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   NT.CREATED_BY,   NT.CREATED_BY_NAME,   NT.SYSTEM_ID,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   NT.DEPARTMENT_CODE,   NT.VALUE_DATE,   NT.DBTR_ACCT_NO,   NT.CDTR_ACCT_NO,   NT.CR_ACCT_IDENTIFICATION,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.CLRSYSREF,   NT.PAYMENT_ENDTOEND_ID,   NT.INTRBK_STTLM_AMNT,   NT.REVERSAL_AMOUNT,   case    when NT.CDTR_IBAN is not null    and NT.CR_ACCT_IDENTIFICATION is null then NT.ACCOUNT_CURRENCY    when NT.CDTR_IBAN is null    and NT.CR_ACCT_IDENTIFICATION is not null then UPPER('AED')    else UPPER('OTHERS')   end as CURRENCY,   NT.PROCESS_TYPE,   NTPL.reversal_code,   NT.PROCESS_GROUP  from   NPSS_TRANSACTIONS NT  inner join npss_trn_process_log NTPL on   NT.UETR = NTPL.UETR and NT.STATUS = NTPL.STATUS  left join TRANSACTION_SET TS on   NT.NPSST_ID = TS.TRN_ID   and NT.DTT_CODE = TS.DTT_CODE  inner join <TRAN_DB>.CORE_Q_STATUS_ROLES QR on   NT.STATUS = QR.PROCESS_QUEUE_STATUS   and NT.PROCESS_STATUS = QR.QUEUE_CODE  inner join <TRAN_DB>.CORE_APP_Q_SETUP PQ on   NT.PROCESS_STATUS = PQ.QUEUE_CODE) VW $WHERE order by  PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Reversal Tran Queue CCD","filter":[{"filter_name":"CURRENCY","binding_name":"CURRENCY","binding_value":"","source_name":"AED","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for queue fab"
	brfq_for_queue_fab__sfr_for_fabs(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_queue_fab"
		let destn_id="queue"
		let parent_source_id="ssp_for_tri_queue_for_fab"
		let event_code="e_1671117050522"
		let event_params={"caller_name":"brfq_for_queue_fab__sfr_for_fabs","event_desc":"SFR for FABs","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"trig_action_for_list_ui_trg_queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863057903","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Reversal Tran Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1671019841112","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671019841297","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1675348669752","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS from  (  select   NT.CREATED_DATE,   NT.STATUS,   NT.PROCESS_STATUS,   NT.UETR,   NT.DBTR_IBAN,   NT.PROCESSING_SYSTEM,   NT.TENANT_ID,   NT.MODIFIED_DATE,   NT.MODIFIED_DATE_UTC,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   NT.CREATED_BY,   NT.CREATED_BY_NAME,   NT.SYSTEM_ID,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   NT.DEPARTMENT_CODE,   NT.VALUE_DATE,   NT.DBTR_ACCT_NO,   NT.CDTR_ACCT_NO,   NT.CR_ACCT_IDENTIFICATION,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.CLRSYSREF,   NT.PAYMENT_ENDTOEND_ID,   NT.INTRBK_STTLM_AMNT,   NT.REVERSAL_AMOUNT,   case    when NT.CDTR_IBAN is not null    and NT.CR_ACCT_IDENTIFICATION is null then NT.ACCOUNT_CURRENCY    when NT.CDTR_IBAN is null    and NT.CR_ACCT_IDENTIFICATION is not null then UPPER('AED')    else UPPER('OTHERS')   end as CURRENCY,   NT.PROCESS_TYPE,   NTPL.reversal_code,   NT.PROCESS_GROUP  from   NPSS_TRANSACTIONS NT  inner join npss_trn_process_log NTPL on   NT.UETR = NTPL.UETR and NT.STATUS = NTPL.STATUS  left join TRANSACTION_SET TS on   NT.NPSST_ID = TS.TRN_ID   and NT.DTT_CODE = TS.DTT_CODE  inner join <TRAN_DB>.CORE_Q_STATUS_ROLES QR on   NT.STATUS = QR.PROCESS_QUEUE_STATUS   and NT.PROCESS_STATUS = QR.QUEUE_CODE  inner join <TRAN_DB>.CORE_APP_Q_SETUP PQ on   NT.PROCESS_STATUS = PQ.QUEUE_CODE) VW $WHERE order by  PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Reversal Tran Queue CCD","filter":[{"filter_name":"CURRENCY","binding_name":"CURRENCY","binding_value":"","source_name":"AED","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for tri queue for fab"
	ssp_for_tri_queue_for_fab__brfq_for_queue_fab() { 
		let Dest_Is_ctrl=true
		
		let source_id="ssp_for_tri_queue_for_fab"
		let destn_id="queue"
		let parent_source_id="trig_action_for_list_ui_trg_queue"
		let event_code="e_1671116864621"
		let event_params={"caller_name":"ssp_for_tri_queue_for_fab__brfq_for_queue_fab","event_desc":"BRFQ for queue FAB","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"trig_action_for_list_ui_trg_queue","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_queue_fab__sfr_for_fabs,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863057903","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Reversal Tran Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1671019841112","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671019841297","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1675348669752","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS from  (  select   NT.CREATED_DATE,   NT.STATUS,   NT.PROCESS_STATUS,   NT.UETR,   NT.DBTR_IBAN,   NT.PROCESSING_SYSTEM,   NT.TENANT_ID,   NT.MODIFIED_DATE,   NT.MODIFIED_DATE_UTC,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   NT.CREATED_BY,   NT.CREATED_BY_NAME,   NT.SYSTEM_ID,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   NT.DEPARTMENT_CODE,   NT.VALUE_DATE,   NT.DBTR_ACCT_NO,   NT.CDTR_ACCT_NO,   NT.CR_ACCT_IDENTIFICATION,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.CLRSYSREF,   NT.PAYMENT_ENDTOEND_ID,   NT.INTRBK_STTLM_AMNT,   NT.REVERSAL_AMOUNT,   case    when NT.CDTR_IBAN is not null    and NT.CR_ACCT_IDENTIFICATION is null then NT.ACCOUNT_CURRENCY    when NT.CDTR_IBAN is null    and NT.CR_ACCT_IDENTIFICATION is not null then UPPER('AED')    else UPPER('OTHERS')   end as CURRENCY,   NT.PROCESS_TYPE,   NTPL.reversal_code,   NT.PROCESS_GROUP  from   NPSS_TRANSACTIONS NT  inner join npss_trn_process_log NTPL on   NT.UETR = NTPL.UETR and NT.STATUS = NTPL.STATUS  left join TRANSACTION_SET TS on   NT.NPSST_ID = TS.TRN_ID   and NT.DTT_CODE = TS.DTT_CODE  inner join <TRAN_DB>.CORE_Q_STATUS_ROLES QR on   NT.STATUS = QR.PROCESS_QUEUE_STATUS   and NT.PROCESS_STATUS = QR.QUEUE_CODE  inner join <TRAN_DB>.CORE_APP_Q_SETUP PQ on   NT.PROCESS_STATUS = PQ.QUEUE_CODE) VW $WHERE order by  PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Reversal Tran Queue CCD","filter":[{"filter_name":"CURRENCY","binding_name":"CURRENCY","binding_value":"","source_name":"AED","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for tri queue for fh"
	ssp_for_tri_queue_for_fh__brfq_for_fhs() { 
		let Dest_Is_ctrl=true
		
		let source_id="ssp_for_tri_queue_for_fh"
		let destn_id="queue"
		let parent_source_id="trig_action_for_list_ui_trg_queue"
		let event_code="e_1671116806678"
		let event_params={"caller_name":"ssp_for_tri_queue_for_fh__brfq_for_fhs","event_desc":"BRFQ for FHs","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"trig_action_for_list_ui_trg_queue","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_fhs__sfr_for_fhs,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863057903","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Reversal Tran Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1671019841112","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671019841297","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1675348669752","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS from  (  select   NT.CREATED_DATE,   NT.STATUS,   NT.PROCESS_STATUS,   NT.UETR,   NT.DBTR_IBAN,   NT.PROCESSING_SYSTEM,   NT.TENANT_ID,   NT.MODIFIED_DATE,   NT.MODIFIED_DATE_UTC,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   NT.CREATED_BY,   NT.CREATED_BY_NAME,   NT.SYSTEM_ID,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   NT.DEPARTMENT_CODE,   NT.VALUE_DATE,   NT.DBTR_ACCT_NO,   NT.CDTR_ACCT_NO,   NT.CR_ACCT_IDENTIFICATION,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.CLRSYSREF,   NT.PAYMENT_ENDTOEND_ID,   NT.INTRBK_STTLM_AMNT,   NT.REVERSAL_AMOUNT,   case    when NT.CDTR_IBAN is not null    and NT.CR_ACCT_IDENTIFICATION is null then NT.ACCOUNT_CURRENCY    when NT.CDTR_IBAN is null    and NT.CR_ACCT_IDENTIFICATION is not null then UPPER('AED')    else UPPER('OTHERS')   end as CURRENCY,   NT.PROCESS_TYPE,   NTPL.reversal_code,   NT.PROCESS_GROUP  from   NPSS_TRANSACTIONS NT  inner join npss_trn_process_log NTPL on   NT.UETR = NTPL.UETR and NT.STATUS = NTPL.STATUS  left join TRANSACTION_SET TS on   NT.NPSST_ID = TS.TRN_ID   and NT.DTT_CODE = TS.DTT_CODE  inner join <TRAN_DB>.CORE_Q_STATUS_ROLES QR on   NT.STATUS = QR.PROCESS_QUEUE_STATUS   and NT.PROCESS_STATUS = QR.QUEUE_CODE  inner join <TRAN_DB>.CORE_APP_Q_SETUP PQ on   NT.PROCESS_STATUS = PQ.QUEUE_CODE) VW $WHERE order by  PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Reversal Tran Queue CCD","filter":[{"filter_name":"CURRENCY","binding_name":"CURRENCY","binding_value":"","source_name":"AED","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}},"e_1671116806678":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"E_1671116806678","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1671117829324","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS FH Reversal Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1671116969274","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671116969473","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1675348211329","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM, PROCESS_STATUS,  STATUS from  (  select   NT.CREATED_DATE,   NT.STATUS,   NT.PROCESS_STATUS,   NT.UETR,   NT.PROCESSING_SYSTEM,   NT.TENANT_ID,   NT.MODIFIED_DATE,   NT.MODIFIED_DATE_UTC,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   NT.CREATED_BY,   NT.CREATED_BY_NAME,   NT.DBTR_IBAN,   NT.SYSTEM_ID,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   NT.DEPARTMENT_CODE,   NT.VALUE_DATE,   NT.CR_ACCT_IDENTIFICATION,   NT.DBTR_ACCT_NO,   NT.CDTR_ACCT_NO,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.CLRSYSREF,   NT.PAYMENT_ENDTOEND_ID,   NT.INTRBK_STTLM_AMNT,   NT.REVERSAL_AMOUNT,   NT.PROCESS_TYPE,   NTPL.reversal_code  from   NPSS_TRANSACTIONS NT  inner join npss_trn_process_log NTPL on   NT.UETR = NTPL.UETR   and NT.STATUS = NTPL.STATUS  left join TRANSACTION_SET TS on   NT.NPSST_ID = TS.TRN_ID   and NT.DTT_CODE = TS.DTT_CODE  inner join <TRAN_DB>.CORE_Q_STATUS_ROLES QR on   NT.STATUS = QR.PROCESS_QUEUE_STATUS   and NT.PROCESS_STATUS = QR.QUEUE_CODE  inner join <TRAN_DB>.CORE_APP_Q_SETUP PQ on   NT.PROCESS_STATUS = PQ.QUEUE_CODE) VW $WHERE order by  PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS FH Reversal Tran Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "trig action for list ui trig tran list"
	trig_action_for_list_ui_trig_tran_list__sec_for_tran_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="trig_action_for_list_ui_trig_tran_list"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671117431055"
		let event_params={"caller_name":"trig_action_for_list_ui_trig_tran_list__sec_for_tran_list","event_desc":"SEC for Tran List","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"trig_action_for_list_ui_trig_tran_list","raiseparam":{}}
		let handler_code="set_event_context"
		let internals=""
		let event_data={"trig_action_for_list_ui_trig_tran_list":{"e_1671117431055":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGCC_52","event_code":"E_1671117431055","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[],"get_from_memory":[],"set_event_context":"Y","sec_value":{"type":"SESSION_LEVEL","value":"ROOT_SCODE"}}}}}}}}}
		let data_source={}
		try {
			return this.handler.set_event_context(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "trig action for list ui trig tran list"
	trig_action_for_list_ui_trig_tran_list__ssp_for_queue_to_tran__fab(peventcontext) { 
		let Dest_Is_ctrl=true
		let eventcontext =["NPSS_AEFAB"]
		if(eventcontext.indexOf(peventcontext)==-1) return true;
		let source_id="trig_action_for_list_ui_trig_tran_list"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1672295711879"
		let event_params={"caller_name":"trig_action_for_list_ui_trig_tran_list__ssp_for_queue_to_tran__fab","event_desc":"SSP for Queue to tran  FAB","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"NPSS_AEFAB","root_source_id":"trig_action_for_list_ui_trig_tran_list","raiseparam":{},"eventcontext":["NPSS_AEFAB"]}
		let handler_code="set_search_params"
		let internals="ssp_for_queue_to_tran__fab__brfq_for_tran_fab,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "trig action for list ui trig tran list"
	trig_action_for_list_ui_trig_tran_list__ssp_for_queue_to_tran__fh(peventcontext) { 
		let Dest_Is_ctrl=true
		let eventcontext =["NPSS_AEFIN"]
		if(eventcontext.indexOf(peventcontext)==-1) return true;
		let source_id="trig_action_for_list_ui_trig_tran_list"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1672295820920"
		let event_params={"caller_name":"trig_action_for_list_ui_trig_tran_list__ssp_for_queue_to_tran__fh","event_desc":"SSP for Queue to tran  FH","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"NPSS_AEFIN","root_source_id":"trig_action_for_list_ui_trig_tran_list","raiseparam":{},"eventcontext":["NPSS_AEFIN"]}
		let handler_code="set_search_params"
		let internals="ssp_for_queue_to_tran__fh__brfq_for_fh_trans,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for tran fab"
	brfq_for_tran_fab__sfr_for_tran_fab(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_tran_fab"
		let destn_id="transaction_list"
		let parent_source_id="ssp_for_queue_to_tran__fab"
		let event_code="e_1671117337554"
		let event_params={"caller_name":"brfq_for_tran_fab__sfr_for_tran_fab","event_desc":"SFR For Tran FAB","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"trig_action_for_list_ui_trig_tran_list","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863233602","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Reversal Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1671020531499","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1671020563113","date_format":false,"currency_format":true},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1671020567393","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1671020573899","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1671020604449","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1671020974992","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1671020996246","date_format":false},{"column_name":"REMARKS","alias_name":"","mq_id":"MQ_1671025906550","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1671030938331","date_format":false},{"column_name":"REVERSAL_AMOUNT","alias_name":"","mq_id":"MQ_1671108760508","date_format":false,"currency_format":true},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1675410254697","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1681124808770","date_format":false}],"joins":[]},"eq_text":"select  distinct UETR,  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  REVERSAL_DESCRIPTION,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  fn_pcidss_decrypt(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  CURRENCY,  REMARKS,  REVERSAL_AMOUNT,  ACCOUNT_CURRENCY,  BUY_RATE,  TRAN_CHARGE,  BUY_MARGIN,  TRAN_AMOUNT,  SELL_MARGIN,  SELL_RATE from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM,   case    when A.CDTR_IBAN is not null    and A.CR_ACCT_IDENTIFICATION is null then A.ACCOUNT_CURRENCY    when A.CDTR_IBAN is null    and A.CR_ACCT_IDENTIFICATION is not null then UPPER('AED')    else UPPER('OTHERS')   end as CURRENCY,   A.REMARKS,   A.CR_ACCT_IDENTIFICATION,   A.REVERSAL_AMOUNT,   NTPL.REVERSAL_CODE,   A.ACCOUNT_CURRENCY,   A.BUY_RATE,   A.TRAN_CHARGE,   A.BUY_MARGIN,   A.TRAN_AMOUNT,   A.SELL_MARGIN,   A.SELL_RATE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   NPSS_TRANSACTIONS A  left join npss_trn_process_log NTPL on   A.UETR = NTPL.UETR   and ntpl.status = 'IP_RCT_REVERSAL_REQ_RECEIVED'  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = ntpl.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Reversal Transaction CCD","filter":[{"filter_name":"CURRENCY","binding_name":"CURRENCY","binding_value":"","source_name":"AED","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Inward Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Reversal Amount","target_column":"REVERSAL_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Reversal Reason","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remarks","target_column":"REMARKS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"dependson":""},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"dependson":""}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for fh trans"
	brfq_for_fh_trans__sfr_for_tran_fh(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_fh_trans"
		let destn_id="transaction_list"
		let parent_source_id="ssp_for_queue_to_tran__fh"
		let event_code="e_1671117388104"
		let event_params={"caller_name":"brfq_for_fh_trans__sfr_for_tran_fh","event_desc":"SFR for tran FH","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"trig_action_for_list_ui_trig_tran_list","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863233602","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Reversal Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1671020531499","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1671020563113","date_format":false,"currency_format":true},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1671020567393","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1671020573899","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1671020604449","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1671020974992","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1671020996246","date_format":false},{"column_name":"REMARKS","alias_name":"","mq_id":"MQ_1671025906550","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1671030938331","date_format":false},{"column_name":"REVERSAL_AMOUNT","alias_name":"","mq_id":"MQ_1671108760508","date_format":false,"currency_format":true},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1675410254697","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1681124808770","date_format":false}],"joins":[]},"eq_text":"select  distinct UETR,  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  REVERSAL_DESCRIPTION,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  fn_pcidss_decrypt(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  CURRENCY,  REMARKS,  REVERSAL_AMOUNT,  ACCOUNT_CURRENCY,  BUY_RATE,  TRAN_CHARGE,  BUY_MARGIN,  TRAN_AMOUNT,  SELL_MARGIN,  SELL_RATE from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM,   case    when A.CDTR_IBAN is not null    and A.CR_ACCT_IDENTIFICATION is null then A.ACCOUNT_CURRENCY    when A.CDTR_IBAN is null    and A.CR_ACCT_IDENTIFICATION is not null then UPPER('AED')    else UPPER('OTHERS')   end as CURRENCY,   A.REMARKS,   A.CR_ACCT_IDENTIFICATION,   A.REVERSAL_AMOUNT,   NTPL.REVERSAL_CODE,   A.ACCOUNT_CURRENCY,   A.BUY_RATE,   A.TRAN_CHARGE,   A.BUY_MARGIN,   A.TRAN_AMOUNT,   A.SELL_MARGIN,   A.SELL_RATE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   NPSS_TRANSACTIONS A  left join npss_trn_process_log NTPL on   A.UETR = NTPL.UETR   and ntpl.status = 'IP_RCT_REVERSAL_REQ_RECEIVED'  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = ntpl.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Reversal Transaction CCD","filter":[{"filter_name":"CURRENCY","binding_name":"CURRENCY","binding_value":"","source_name":"AED","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Inward Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Reversal Amount","target_column":"REVERSAL_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Reversal Reason","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remarks","target_column":"REMARKS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"dependson":""},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"dependson":""}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for queue to tran  fh"
	ssp_for_queue_to_tran__fh__brfq_for_fh_trans(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_queue_to_tran__fh"
		let destn_id="transaction_list"
		let parent_source_id="trig_action_for_list_ui_trig_tran_list"
		let event_code="e_1671117277660"
		let event_params={"caller_name":"ssp_for_queue_to_tran__fh__brfq_for_fh_trans","event_desc":"BRFQ for FH TranS","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"trig_action_for_list_ui_trig_tran_list","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_fh_trans__sfr_for_tran_fh,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863233602","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Reversal Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1671020531499","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1671020563113","date_format":false,"currency_format":true},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1671020567393","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1671020573899","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1671020604449","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1671020974992","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1671020996246","date_format":false},{"column_name":"REMARKS","alias_name":"","mq_id":"MQ_1671025906550","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1671030938331","date_format":false},{"column_name":"REVERSAL_AMOUNT","alias_name":"","mq_id":"MQ_1671108760508","date_format":false,"currency_format":true},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1675410254697","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1681124808770","date_format":false}],"joins":[]},"eq_text":"select  distinct UETR,  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  REVERSAL_DESCRIPTION,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  fn_pcidss_decrypt(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  CURRENCY,  REMARKS,  REVERSAL_AMOUNT,  ACCOUNT_CURRENCY,  BUY_RATE,  TRAN_CHARGE,  BUY_MARGIN,  TRAN_AMOUNT,  SELL_MARGIN,  SELL_RATE from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM,   case    when A.CDTR_IBAN is not null    and A.CR_ACCT_IDENTIFICATION is null then A.ACCOUNT_CURRENCY    when A.CDTR_IBAN is null    and A.CR_ACCT_IDENTIFICATION is not null then UPPER('AED')    else UPPER('OTHERS')   end as CURRENCY,   A.REMARKS,   A.CR_ACCT_IDENTIFICATION,   A.REVERSAL_AMOUNT,   NTPL.REVERSAL_CODE,   A.ACCOUNT_CURRENCY,   A.BUY_RATE,   A.TRAN_CHARGE,   A.BUY_MARGIN,   A.TRAN_AMOUNT,   A.SELL_MARGIN,   A.SELL_RATE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   NPSS_TRANSACTIONS A  left join npss_trn_process_log NTPL on   A.UETR = NTPL.UETR   and ntpl.status = 'IP_RCT_REVERSAL_REQ_RECEIVED'  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = ntpl.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Reversal Transaction CCD","filter":[{"filter_name":"CURRENCY","binding_name":"CURRENCY","binding_value":"","source_name":"AED","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Inward Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Reversal Amount","target_column":"REVERSAL_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Reversal Reason","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remarks","target_column":"REMARKS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"dependson":""},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"dependson":""}]}}}}},"e_1671117277660":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"E_1671117277660","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1671118207740","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS FH Reversal Tran MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1671117222780","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1671117576110","date_format":false,"currency_format":true},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1671117576292","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1671117576476","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1671117576980","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1671117577180","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1671117577564","date_format":false},{"column_name":"REMARKS","alias_name":"","mq_id":"MQ_1671117577780","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1671117655930","date_format":false},{"column_name":"REVERSAL_AMOUNT","alias_name":"","mq_id":"MQ_1671117656154","date_format":false,"currency_format":true}],"joins":[]},"eq_text":"select distinct UETR,  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  fn_pcidss_decrypt(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  REMARKS,  REVERSAL_AMOUNT from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.CR_ACCT_IDENTIFICATION,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM,   A.REMARKS,   A.REVERSAL_AMOUNT,   NTPL.reversal_code  from   NPSS_TRANSACTIONS A  inner join npss_trn_process_log NTPL on   A.UETR = NTPL.UETR  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS FH Reversal Transaction CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Inward Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Reversal Amount","target_column":"REVERSAL_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remarks","target_column":"REMARKS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for queue to tran  fab"
	ssp_for_queue_to_tran__fab__brfq_for_tran_fab(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_queue_to_tran__fab"
		let destn_id="transaction_list"
		let parent_source_id="trig_action_for_list_ui_trig_tran_list"
		let event_code="e_1671117265854"
		let event_params={"caller_name":"ssp_for_queue_to_tran__fab__brfq_for_tran_fab","event_desc":"BRFQ for Tran FAB","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"trig_action_for_list_ui_trig_tran_list","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_tran_fab__sfr_for_tran_fab,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863233602","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Reversal Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1671020531499","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1671020563113","date_format":false,"currency_format":true},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1671020567393","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1671020573899","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1671020604449","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1671020974992","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1671020996246","date_format":false},{"column_name":"REMARKS","alias_name":"","mq_id":"MQ_1671025906550","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1671030938331","date_format":false},{"column_name":"REVERSAL_AMOUNT","alias_name":"","mq_id":"MQ_1671108760508","date_format":false,"currency_format":true},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1675410254697","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1681124808770","date_format":false}],"joins":[]},"eq_text":"select  distinct UETR,  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  REVERSAL_DESCRIPTION,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  fn_pcidss_decrypt(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  CURRENCY,  REMARKS,  REVERSAL_AMOUNT,  ACCOUNT_CURRENCY,  BUY_RATE,  TRAN_CHARGE,  BUY_MARGIN,  TRAN_AMOUNT,  SELL_MARGIN,  SELL_RATE from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM,   case    when A.CDTR_IBAN is not null    and A.CR_ACCT_IDENTIFICATION is null then A.ACCOUNT_CURRENCY    when A.CDTR_IBAN is null    and A.CR_ACCT_IDENTIFICATION is not null then UPPER('AED')    else UPPER('OTHERS')   end as CURRENCY,   A.REMARKS,   A.CR_ACCT_IDENTIFICATION,   A.REVERSAL_AMOUNT,   NTPL.REVERSAL_CODE,   A.ACCOUNT_CURRENCY,   A.BUY_RATE,   A.TRAN_CHARGE,   A.BUY_MARGIN,   A.TRAN_AMOUNT,   A.SELL_MARGIN,   A.SELL_RATE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   NPSS_TRANSACTIONS A  left join npss_trn_process_log NTPL on   A.UETR = NTPL.UETR   and ntpl.status = 'IP_RCT_REVERSAL_REQ_RECEIVED'  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = ntpl.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Reversal Transaction CCD","filter":[{"filter_name":"CURRENCY","binding_name":"CURRENCY","binding_value":"","source_name":"AED","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Inward Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Reversal Amount","target_column":"REVERSAL_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Reversal Reason","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remarks","target_column":"REMARKS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"dependson":""},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"dependson":""}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "reversal action ui cancel  send to maker"
	reversal_action_ui_cancel__send_to_maker__spap_for_rau_cancel() { 
		let Dest_Is_ctrl=true
		
		let source_id="reversal_action_ui_cancel__send_to_maker"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671195155853"
		let event_params={"caller_name":"reversal_action_ui_cancel__send_to_maker__spap_for_rau_cancel","event_desc":"SPAP for RAU Cancel","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"reversal_action_ui_cancel__send_to_maker","raiseparam":{"popup_category":"profile","variable":"p_cancel_layout__spap_for_rau_cancel","selector":"p_cancel_layout","profile_code":"BTL_1304_1671195425258","window_title":"Cancel Reason","window_height":300,"window_width":"600px","window_close_icon":"Y","eventdes":"spap_for_rau_cancel","eventcode":"E_1671195155853"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "cancel return ui return to maker"
	cancel_return_ui_return_to_maker__ve_for_cancel_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="cancel_return_ui_return_to_maker"
		let destn_id="cancel_return_ui"
		let parent_source_id=""
		let event_code="e_1671196302975"
		let event_params={"caller_name":"cancel_return_ui_return_to_maker__ve_for_cancel_ui","event_desc":"VE for cancel UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"cancel_return_ui_return_to_maker","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="ve_for_cancel_ui__cc_for_cancel_btn,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ve for cancel ui"
	ve_for_cancel_ui__cc_for_cancel_btn(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ve_for_cancel_ui"
		let destn_id=""
		let parent_source_id="cancel_return_ui_return_to_maker"
		let event_code="e_1671196599243"
		let event_params={"caller_name":"ve_for_cancel_ui__cc_for_cancel_btn","event_desc":"CC for Cancel btn","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"cancel_return_ui_return_to_maker","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="cc_for_cancel_btn__im_for_cancel_btn,"
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_reversal_cancelService.fn_npss_cs_reversal_cancel(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for cancel btn"
	cc_for_cancel_btn__im_for_cancel_btn(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_cancel_btn"
		let destn_id=""
		let parent_source_id="ve_for_cancel_ui"
		let event_code="e_1671196638325"
		let event_params={"caller_name":"cc_for_cancel_btn__im_for_cancel_btn","event_desc":"IM for cancel btn","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Accepted request has been cancelled successfully.","root_source_id":"cancel_return_ui_return_to_maker","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="im_for_cancel_btn__rs_for_cancel_btn,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "im for cancel btn"
	im_for_cancel_btn__rs_for_cancel_btn(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="im_for_cancel_btn"
		let destn_id=""
		let parent_source_id="cc_for_cancel_btn"
		let event_code="e_1671196665669"
		let event_params={"caller_name":"im_for_cancel_btn__rs_for_cancel_btn","event_desc":"RS for cancel btn","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"cancel_return_ui_return_to_maker","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "send to maker ui save"
	send_to_maker_ui_save__cc_for_send_to_maker_save() { 
		let Dest_Is_ctrl=true
		
		let source_id="send_to_maker_ui_save"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1672139778453"
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
	cc_for_send_to_maker_save__im_for_send_to_maker_save() { 
		let Dest_Is_ctrl=true
		
		let source_id="cc_for_send_to_maker_save"
		let destn_id=""
		let parent_source_id="send_to_maker_ui_save"
		let event_code="e_1672139849361"
		let event_params={"caller_name":"cc_for_send_to_maker_save__im_for_send_to_maker_save","event_desc":"IM for Send to maker save","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Reversal request has been sent to maker successfully","root_source_id":"send_to_maker_ui_save","raiseparam":{"info_msg":""}}
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
	im_for_send_to_maker_save__rs_for_send_to_maker_save() { 
		let Dest_Is_ctrl=true
		
		let source_id="im_for_send_to_maker_save"
		let destn_id=""
		let parent_source_id="cc_for_send_to_maker_save"
		let event_code="e_1672139857468"
		let event_params={"caller_name":"im_for_send_to_maker_save__rs_for_send_to_maker_save","event_desc":"RS for send to maker save","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"send_to_maker_ui_save","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "reversal action ui send to maker"
	reversal_action_ui_send_to_maker__spap_for_send_to_maker() { 
		let Dest_Is_ctrl=true
		
		let source_id="reversal_action_ui_send_to_maker"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1672140069914"
		let event_params={"caller_name":"reversal_action_ui_send_to_maker__spap_for_send_to_maker","event_desc":"SPAP for send to maker","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"reversal_action_ui_send_to_maker","raiseparam":{"popup_category":"profile","variable":"p_send_to_maker_layout__spap_for_send_to_maker","selector":"p_send_to_maker_layout","profile_code":"BTL_1304_1672139504213","window_title":"","window_height":200,"window_width":"600px","window_close_icon":"Y","eventdes":"spap_for_send_to_maker","eventcode":"E_1672140069914"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__tbc_for_search_to_queue() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="trig_action_for_list_ui_trg_queue"
		let parent_source_id=""
		let event_code="e_1672299665930"
		let event_params={"caller_name":"search_search__tbc_for_search_to_queue","event_desc":"TBC for search to queue","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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
	search_search__close_popup() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1672299923992"
		let event_params={"popup_info":{"context":""},"caller_name":"search_search__close_popup","event_desc":"Close Popup","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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
	search_search__clear_ui_for_tran_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1672300109363"
		let event_params={"caller_name":"search_search__clear_ui_for_tran_list","event_desc":"Clear UI for Tran List","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863233602","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Reversal Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1671020531499","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1671020563113","date_format":false,"currency_format":true},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1671020567393","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1671020573899","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1671020604449","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1671020974992","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1671020996246","date_format":false},{"column_name":"REMARKS","alias_name":"","mq_id":"MQ_1671025906550","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1671030938331","date_format":false},{"column_name":"REVERSAL_AMOUNT","alias_name":"","mq_id":"MQ_1671108760508","date_format":false,"currency_format":true},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1675410254697","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1681124808770","date_format":false}],"joins":[]},"eq_text":"select  distinct UETR,  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  REVERSAL_DESCRIPTION,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  fn_pcidss_decrypt(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  CURRENCY,  REMARKS,  REVERSAL_AMOUNT,  ACCOUNT_CURRENCY,  BUY_RATE,  TRAN_CHARGE,  BUY_MARGIN,  TRAN_AMOUNT,  SELL_MARGIN,  SELL_RATE from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM,   case    when A.CDTR_IBAN is not null    and A.CR_ACCT_IDENTIFICATION is null then A.ACCOUNT_CURRENCY    when A.CDTR_IBAN is null    and A.CR_ACCT_IDENTIFICATION is not null then UPPER('AED')    else UPPER('OTHERS')   end as CURRENCY,   A.REMARKS,   A.CR_ACCT_IDENTIFICATION,   A.REVERSAL_AMOUNT,   NTPL.REVERSAL_CODE,   A.ACCOUNT_CURRENCY,   A.BUY_RATE,   A.TRAN_CHARGE,   A.BUY_MARGIN,   A.TRAN_AMOUNT,   A.SELL_MARGIN,   A.SELL_RATE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   NPSS_TRANSACTIONS A  left join npss_trn_process_log NTPL on   A.UETR = NTPL.UETR   and ntpl.status = 'IP_RCT_REVERSAL_REQ_RECEIVED'  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = ntpl.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Reversal Transaction CCD","filter":[{"filter_name":"CURRENCY","binding_name":"CURRENCY","binding_value":"","source_name":"AED","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Inward Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Reversal Amount","target_column":"REVERSAL_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Reversal Reason","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remarks","target_column":"REMARKS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"dependson":""},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"dependson":""}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let event_code="e_1672299899001"
		let event_params={"caller_name":"search_clear__clear_ui","event_desc":"Clear ui","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_clear","raiseparam":{"need_reset_key_column":"N"}}
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
	navigation_search__spap_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1672299988119"
		let event_params={"caller_name":"navigation_search__spap_for_search","event_desc":"SPAP for search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_for_search","selector":"p_search_layout","profile_code":"BTL_1304_1672294771926","window_title":"Search","window_height":400,"window_width":"650px","window_close_icon":"Y","eventdes":"spap_for_search","eventcode":"E_1672299988119"}}
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
	navigation_search__claer_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1672300077924"
		let event_params={"caller_name":"navigation_search__claer_ui","event_desc":"Claer UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_search","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for INTERNAL event of "cc for force post"
	cc_for_force_post__info_for_force_post(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_force_post"
		let destn_id=""
		let parent_source_id="conf_msg_for_fp"
		let event_code="e_1673499029602"
		let event_params={"caller_name":"cc_for_force_post__info_for_force_post","event_desc":"info for force post","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Transaction has been forced to post successfully","root_source_id":"reversal_action_ui_force_post","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="info_for_force_post__rs_for_fp,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "info for force post"
	info_for_force_post__rs_for_fp(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="info_for_force_post"
		let destn_id=""
		let parent_source_id="cc_for_force_post"
		let event_code="e_1673499069520"
		let event_params={"caller_name":"info_for_force_post__rs_for_fp","event_desc":"RS for FP","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"reversal_action_ui_force_post","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "reversal action ui force post"
	reversal_action_ui_force_post__conf_msg_for_fp() { 
		let Dest_Is_ctrl=true
		
		let source_id="reversal_action_ui_force_post"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1680618047391"
		let event_params={"caller_name":"reversal_action_ui_force_post__conf_msg_for_fp","event_desc":"conf msg for FP","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","message_text":"Do you want to perform force post ?","root_source_id":"reversal_action_ui_force_post","raiseparam":{"conf_msg":""}}
		let handler_code="conf_msg"
		let internals="conf_msg_for_fp__cc_for_force_post,"
		let event_data={}
		let data_source={}
		try {
			this.handler.conf_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "conf msg for fp"
	conf_msg_for_fp__cc_for_force_post(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="YES"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="conf_msg_for_fp"
		let destn_id=""
		let parent_source_id="reversal_action_ui_force_post"
		let event_code="e_1673499000574"
		let event_params={"caller_name":"conf_msg_for_fp__cc_for_force_post","event_desc":"CC for Force post","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"reversal_action_ui_force_post","raiseparam":{},"parent_event_result":"YES"}
		let handler_code="custom_connectors"
		let internals="cc_for_force_post__info_for_force_post,"
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_reversal_force_to_postService.fn_npss_cs_reversal_force_to_post(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
