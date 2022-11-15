/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26873 
Modified By     : Admin 
Modified Date   : 2022-Nov-15 4:21 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_reversal
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'
import {npss_cs_reversal_acceptService} from '../../../custom_widget/npss_cs_reversal_accept/npss_cs_reversal_accept.service'
import {npss_cs_reversal_rejectService} from '../../../custom_widget/npss_cs_reversal_reject/npss_cs_reversal_reject.service'
import {npss_cs_reject_pack002Service} from '../../../custom_widget/npss_cs_reject_pack002/npss_cs_reject_pack002.service'
import {npss_cs_return_pac_004Service} from '../../../custom_widget/npss_cs_return_pac_004/npss_cs_return_pac_004.service'

@Component({
	selector: 's_rct_reversal',
	templateUrl: './s_rct_reversal.component.html',
	styleUrls: ['./s_rct_reversal.component.css'],
	providers:[torus_cs_show_hideService,npss_cs_reversal_acceptService,npss_cs_reversal_rejectService,npss_cs_reject_pack002Service,npss_cs_return_pac_004Service]
})
    
// Start of class 
export class s_rct_reversalComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_rct_reversal"
	wftpa_id : string = "WFT_NPSS_P_1304_1666862675236_0"
	cg_code : string = "CG_1304_1666855803455"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID"}
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
	uicgc_8 : string = "comment_list"
	uicgc_9 : string = "reversal_ui"
	key_events : any = {}
	btl_1304_1666856823236 : string = "p_change_return_layout"
	btl_1304_1666856778120 : string = "p_accept_layout"
	btl_1304_1666856478860 : string = "p_accept_ui_layout"
	btl_1304_1666856426885 : string = "p_main_layout"
	forms : any = ["uicgc_9","uicgc_5","uicgc_6","uicgc_4","uicgc_3"]
	p_accept_layout__spap_for_accept_showpopup : boolean = false
	p_change_return_layout__crr_for_spap_showpopup : boolean = false
	queue : any = {}
	transaction_list : any = {}
	navigation : any = {}
	navigation_review : any = {}
	reversal_action_ui : any = {}
	reversal_action_ui_back : any = {}
	reversal_action_ui_reject : any = {}
	reversal_action_ui_accept : any = {}
	reversal_action_ui_return : any = {}
	reversal_action_ui_approve : any = {}
	reversal_action_ui_change_return_reason : any = {}
	reversal_action_ui_trigger_btn : any = {}
	accept_ui : any = {}
	accept_ui_save : any = {}
	change_return_ui : any = {}
	change_return_ui_save : any = {}
	process_log_list : any = {}
	comment_list : any = {}
	reversal_ui : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private torus_cs_show_hideService:torus_cs_show_hideService,private npss_cs_reversal_acceptService:npss_cs_reversal_acceptService,private npss_cs_reversal_rejectService:npss_cs_reversal_rejectService,private npss_cs_reject_pack002Service:npss_cs_reject_pack002Service,private npss_cs_return_pac_004Service:npss_cs_return_pac_004Service) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Queue" 
		this.queue.uictrl_code = "datatable"
		this.queue.uicgc_desc = "Queue"
		this.queue.uicgc_code = "uicgc_1"
		this.queue.params = {"need_pag_datatable":"Y","need_search":"N"}
		this.queue.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863057903","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Tran Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1667196358383","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1667196358598","date_format":false},{"column_name":"TRAN_COUNT","alias_name":"","mq_id":"MQ_1667196358830","date_format":false},{"column_name":"QUEUE_DESC","alias_name":"","mq_id":"MQ_1667196370862","date_format":false}],"joins":[]},"eq_text":"select  PROCESS_STATUS,  STATUS,  COUNT(STATUS) TRAN_COUNT,  QUEUE_DESC,  Q_SORT_ORDER,  QS_SORT_ORDER from  (  select   T.NPSST_ID,   T.VALUE_DATE,   T.PROCESS_TYPE,   T.UETR,   T.CLRSYSREF,   T.CHANNEL_ID,   T.DBTR_PHONE_NO,   T.DBTR_EMAIL_ID,   T.DBTR_DOCUMENT_ID,   T.CDTR_PHONE_NO,   T.CDTR_EMAIL_ID,   T.CDTR_DOCUMENT_ID,   T.CDTR_IBAN,   T.INTRBK_STTLM_AMNT,   T.HDR_MSG_ID,   T.PRODUCT_CODE,   T.DBTR_ACCT_NO,   T.DBTR_ACCT_NAME,   T.DBTR_IBAN,   T.BASE_CURRENCY,   T.BASE_AMOUNT,   T.CDTR_ACCT_NO,   T.CDTR_ACCT_NAME,   T.DR_SORT_CODE,   T.CR_SORT_CODE,   T.INTRBK_STTLM_CUR,   T.RATE_CODE,   T.EXCHANGE_RATE,   T.CATEGORY_PURPOSE,   T.HDR_CREATED_DATE,   T.HDR_TOTAL_RECORDS,   T.HDR_TOTAL_AMOUNT,   T.HDR_SETTLEMENT_DATE,   T.HDR_SETTLEMENT_METHOD,   T.HDR_CLEARING_SYSTEM,   T.PAYMENT_ENDTOEND_ID,   T.INSTRUMENT_TYPE,   T.CHARGE_BEARER,   T.MESSAGE_DATA,   T.EXHF_ID,   T.DBTR_CUST_TYPE,   T.CHANNEL_REFNO,   T.CHANNEL_USERID,   T.CHANNEL_PRODUCT,   T.CHANNEL_SUB_PRODUCT,   T.CHANNEL_TRAN_CODE,   T.TRAN_INFO,   T.INSTRUCTION_ID,   T.TRAN_REF_ID,   T.CATEGORY_PURPOSE_PRTY,   T.EXT_ORG_ID_CODE,   T.ISSUER_TYPE_CODE,   T.DBTR_BIRTH_DATE,   T.DBTR_CITY_BIRTH,   T.DBTR_COUNTRY,   T.EXT_PERSON_ID_CODE,   T.EXT_ACCT_ID_CODE,   T.CR_ACCT_IDENTIFICATION,   T.CR_ACCT_ID_CODE,   T.EXT_PURPOSE_CODE,   T.EXT_PURPOSE_PRTY,   T.REMITTANCE_INFO,   T.INWARD_FILE_NAME,   T.PROCESS_STATUS,   T.TENANT_ID,   T.STATUS,   T.CREATED_DATE,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   T.CREATED_BY,   T.CREATED_BY_NAME,   T.SYSTEM_ID,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   CASE    WHEN T.EXHF_ID IS NULL THEN 'REAL_TIME'   ELSE 'BULK' END AS MEM_PAYMENT_METHOD  from   NPSS_TRANSACTIONS T  left join TRANSACTION_SET TS on   T.NPSST_ID = TS.TRN_ID   and T.DTT_CODE = TS.DTT_CODE  inner join CORE_Q_STATUS_ROLES QR on   T.STATUS = QR.PROCESS_QUEUE_STATUS   and T.PROCESS_STATUS = QR.QUEUE_CODE  inner join CORE_APP_Q_SETUP PQ on   T.PROCESS_STATUS = PQ.QUEUE_CODE) VM $WHERE group by  PROCESS_STATUS,  STATUS,  QUEUE_DESC,  Q_SORT_ORDER,  QS_SORT_ORDER"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Tran Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"TRAN_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		this.transaction_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863233602","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"MEM_PAYMENT_METHOD","alias_name":"","mq_id":"MQ_1668415265731","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  MODIFIED_DATE_UTC,  DATEMI,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  INTRBK_STTLM_AMNT,  INTRBK_STTLM_CUR,  DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  EXHF_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  MEM_PAYMENT_METHOD,  TRAN_REF_ID from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.UETR,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   case    when A.EXHF_ID is null then 'REAL_TIME'    else 'BULK'   end as MEM_PAYMENT_METHOD  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS HST View Transaction CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref No","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		
		// "Review" Button of "Navigation" component
		this.navigation_review.label_name = "Review"
		this.navigation_review.show = true
		this.navigation_review.disabled = false
		this.navigation_review.params = {"icon_only":false,"uicgcc_style":"fa fa-arrow-circle-right"}
		this.navigation_review.dynamic_param = {}
		this.navigation_review.role = []
		this.navigation_review.action = ""
	
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
		
		// "Reject" Button of "Reversal Action UI" component
		this.reversal_action_ui_reject.label_name = "Reject"
		this.reversal_action_ui_reject.show = true
		this.reversal_action_ui_reject.disabled = false
		this.reversal_action_ui_reject.params = {"icon_only":false,"uicgcc_style":"fa fa-thumbs-o-down"}
		this.reversal_action_ui_reject.dynamic_param = {}
		this.reversal_action_ui_reject.role = []
		this.reversal_action_ui_reject.action = ""
		
		// "Accept" Button of "Reversal Action UI" component
		this.reversal_action_ui_accept.label_name = "Accept"
		this.reversal_action_ui_accept.show = true
		this.reversal_action_ui_accept.disabled = false
		this.reversal_action_ui_accept.params = {"icon_only":false,"uicgcc_style":"fa fa-thumbs-o-up"}
		this.reversal_action_ui_accept.dynamic_param = {}
		this.reversal_action_ui_accept.role = []
		this.reversal_action_ui_accept.action = ""
		
		// "Return" Button of "Reversal Action UI" component
		this.reversal_action_ui_return.label_name = "Return"
		this.reversal_action_ui_return.show = true
		this.reversal_action_ui_return.disabled = false
		this.reversal_action_ui_return.params = {"icon_only":false,"uicgcc_style":"fa fa-share"}
		this.reversal_action_ui_return.dynamic_param = {}
		this.reversal_action_ui_return.role = []
		this.reversal_action_ui_return.action = ""
		
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
		
		// "Trigger btn" Button of "Reversal Action UI" component
		this.reversal_action_ui_trigger_btn.label_name = "Trigger btn"
		this.reversal_action_ui_trigger_btn.show = true
		this.reversal_action_ui_trigger_btn.disabled = false
		this.reversal_action_ui_trigger_btn.params = {"icon_only":false,"uicgcc_style":""}
		this.reversal_action_ui_trigger_btn.dynamic_param = {}
		this.reversal_action_ui_trigger_btn.role = []
		this.reversal_action_ui_trigger_btn.action = ""
	
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
		this.process_log_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_7","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863318385","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"SELECT REVERSAL_DESCRIPTION,        T24_RETURN_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE,        REVERSAL_DESC,        T24_RETURN_DESC,        CBUAE_RETURN_DESC,        TENANT_ID,        DT_CODE,        DTT_CODE   FROM (SELECT A.NPSSTPL_ID,                A.MSG_ID,                A.UETR,                A.NPSSTRRD_REFNO,                A.PROCESS_NAME,                A.PROCESSING_SYSTEM,                A.RESPONSE_CODE,                A.PROCESS_REF_NO,                A.RESPONSE_DATA,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') AS CREATEDDATEMILISEC,                A.CREATED_DATE,                A.PROCESS_STATUS,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.TENANT_ID,                A.REQUEST_DATA_JSON,                A.RESPONSE_DATA_JSON,                A.T24_RETURN_CODE,                A.ADDITIONAL_INFO,                T24RC.RETURN_DESCRIPTION AS T24_RETURN_DESC,                CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                A.CBUAE_RETURN_CODE,                CBUAERC.RETURN_DESCRIPTION AS CBUAE_RETURN_DESC,                CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,                A.REVERSAL_CODE,                CCD.CD_DESCRIPTION AS REVERSAL_DESC,                CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION           FROM NPSS_TRN_PROCESS_LOG A           LEFT JOIN CORE_NC_CODE_DESCRIPTIONS CCD ON CCD.CD_CODE =                                                      A.REVERSAL_CODE                                                  AND CCD.CD_CATEGORY =                                                      'REVERSAL_REASON_IDENTIFIER_CODE'           LEFT JOIN CORE_NC_RETURN_CODES T24RC ON T24RC.RETURN_CODE =                                                   A.T24_RETURN_CODE                                               AND T24RC.PROCESSING_SYSTEM =                                                   'T24'           LEFT JOIN CORE_NC_RETURN_CODES CBUAERC ON CBUAERC.RETURN_CODE =                                                     A.CBUAE_RETURN_CODE                                                 AND CBUAERC.PROCESSING_SYSTEM =                                                     'CBUAE'          ORDER BY A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Return Process Log CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"RCTInwardReversalRequest","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"IP_RCT_REVERSAL_REQ_RECEIVED","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.process_log_list.context_menu = []
		this.process_log_list.views = {}
		this.process_log_list.onChangecomponent = new EventEmitter<any>()
		this.process_log_list.show = true
		this.process_log_list.dynamic_param = {}
	
		// Component level properties - "Comment List" 
		this.comment_list.uictrl_code = "datatable"
		this.comment_list.uicgc_desc = "Comment List"
		this.comment_list.uicgc_code = "uicgc_8"
		this.comment_list.params = {"need_pag_datatable":"Y","need_search":"N"}
		this.comment_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_8","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863771649","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Comment MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"comment_text","alias_name":"","mq_id":"MQ_1666863666352","date_format":false}],"joins":[]},"eq_text":"SELECT comment_text   FROM (SELECT                t.tc_id,                t.comment_text,                t.dt_code,                t.dtt_code,                ts.ts_id,                ts.trn_id           FROM transaction_comments T          INNER JOIN transaction_set ts ON T.ts_id = ts.ts_id                                       AND ts.dtt_code = T.dtt_code) VW $WHERE ORDER BY tc_id DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Transaction Comment CCD","filter":[{"filter_name":"TRN_ID","binding_name":"TRN_ID","binding_value":"","source_name":"MI_LEVEL_NPSSTPL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Comments","target_column":"comment_text","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.comment_list.context_menu = []
		this.comment_list.views = {}
		this.comment_list.onChangecomponent = new EventEmitter<any>()
		this.comment_list.show = true
		this.comment_list.dynamic_param = {}
	
		// Component level properties - "Reversal UI" 
		this.reversal_ui.uictrl_code = "dynamic_ui"
		this.reversal_ui.uicgc_desc = "Reversal UI"
		this.reversal_ui.uicgc_code = "uicgc_9"
		this.reversal_ui.params = {}
		this.reversal_ui.datasource = {}
		this.reversal_ui.context_menu = []
		this.reversal_ui.views = {"first":"DTT_1304_1665901217208","is_tab_mode":"N","dtt_1304_1665901217208":{"0":[{"dttv_id":"NPSS RCT Reversal UI","tab_order":0,"tab_name":"","uicgc_description":"Reversal UI","role_description":"default","dtt_description":"NPSS Transactions"}]}}
		this.reversal_ui.onChangecomponent = new EventEmitter<any>()
		this.reversal_ui.show = true
		this.reversal_ui.dynamic_param = {}
		this.reversal_ui.f_npss_rct_reversal_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.reversal_ui.form_name = "f_npss_rct_reversal_ui"
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__create_form()
		this.page_load__de_for_crr()
		this.page_load__de_for_reject()
		this.page_load__de_for_return()
		this.page_load__de_for_approve()
		this.page_load__de_for_accept()
		this.page_load__he_for_review_btn()
	}

	//Handler for INTERNAL event of "create form"
	create_form__internal(parent_event_result){
		this.create_form__cc_for_sh_ide_for_cc(parent_event_result)
	}

	//Handler for INTERNAL event of "cc for sh ide for cc"
	cc_for_sh_ide_for_cc__internal(parent_event_result){
		this.cc_for_sh_ide_for_cc__brfq_for_sh_to_queue(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for sh to queue"
	brfq_for_sh_to_queue__internal(parent_event_result){
		this.brfq_for_sh_to_queue__select_first_record_for_queue(parent_event_result)
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
		this.sh_for_tran_list_selections__brfq_for_tran_list(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for tran list"
	brfq_for_tran_list__internal(parent_event_result){
		this.brfq_for_tran_list__sfr_for_tl(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__selection_changed(){
		this.transaction_list__svm_for_transaction_list()
		this.transaction_list__ssr_for_tran_list_to_reversal_ui()
	}

	//Handler for INTERNAL event of "svm for transaction list"
	svm_for_transaction_list__internal(parent_event_result){
		this.svm_for_transaction_list__cc_for_show_hide_in_tran_list(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation review"
	navigation_review__action_button_click(){
		this.navigation_review__brfq_for_process_log()
		this.navigation_review__bt_for_reversal_ui()
		this.navigation_review__de_for_review()
	}

	//Handler for INTERNAL event of "brfq for process log"
	brfq_for_process_log__internal(parent_event_result){
		this.brfq_for_process_log__sfr_for_process_log(parent_event_result)
		this.brfq_for_process_log__brfq_success_sp(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "reversal action ui accept"
	reversal_action_ui_accept__action_button_click(){
		this.reversal_action_ui_accept__spap_for_accept()
	}

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__selection_changed(){
		this.process_log_list__bind_tran_for_crui()
		this.process_log_list__svm_for_process_log()
		this.process_log_list__ee_for_crr()
		this.process_log_list__ee_for_accept()
		this.process_log_list__ee_for_approve()
		this.process_log_list__ee_for_reject()
		this.process_log_list__ee_for_return()
	}

	//Handler for INTERNAL event of "svm for process log"
	svm_for_process_log__internal(parent_event_result){
		this.svm_for_process_log__trigger_btn_click_for_process_log_to_tbc(parent_event_result)
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
		this.reversal_action_ui_reject__cc_for_reject()
	}

	//Handler for INTERNAL event of "cc for reject"
	cc_for_reject__internal(parent_event_result){
		this.cc_for_reject__reject_info(parent_event_result)
	}

	//Handler for INTERNAL event of "reject info"
	reject_info__internal(parent_event_result){
		this.reject_info__rs_for_reject(parent_event_result)
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

	//Handler for ACTION_BUTTON_CLICK event of "reversal action ui return"
	reversal_action_ui_return__action_button_click(){
		this.reversal_action_ui_return__cc_forreturn()
	}

	//Handler for INTERNAL event of "cc forreturn"
	cc_forreturn__internal(parent_event_result){
		this.cc_forreturn__return_info(parent_event_result)
	}

	//Handler for INTERNAL event of "return info"
	return_info__internal(parent_event_result){
		this.return_info__rs_for_return(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "npss pl rtn reason ui t24 return code"
	npss_pl_rtn_reason_ui_t24_return_code__selection_changed(){
		this.npss_pl_rtn_reason_ui_t24_return_code__fcb_for_source__accept_ui()
	}

	//Handler for SELECTION_CHANGED event of "npss pl change rtn reason ui t24 return code"
	npss_pl_change_rtn_reason_ui_t24_return_code__selection_changed(){
		this.npss_pl_change_rtn_reason_ui_t24_return_code__fcb_for_source__change_return_ui()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__create_form() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666856861235"
		let event_params={"caller_name":"page_load__create_form","event_desc":"Create form","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""}}
		let handler_code="create_form"
		let internals="create_form__cc_for_sh_ide_for_cc,"
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
		let destn_id="reversal_action_ui_return"
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

	//Handler for INTERNAL event of "create form"
	create_form__cc_for_sh_ide_for_cc(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="create_form"
		let destn_id=""
		let parent_source_id="page_load"
		let event_code="e_1666856875571"
		let event_params={"caller_name":"create_form__cc_for_sh_ide_for_cc","event_desc":"CC for SH ide for CC","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="cc_for_sh_ide_for_cc__brfq_for_sh_to_queue,"
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
	cc_for_sh_ide_for_cc__brfq_for_sh_to_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_sh_ide_for_cc"
		let destn_id="queue"
		let parent_source_id="create_form"
		let event_code="e_1666856910263"
		let event_params={"caller_name":"cc_for_sh_ide_for_cc__brfq_for_sh_to_queue","event_desc":"BRFQ for SH to Queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_sh_to_queue__select_first_record_for_queue,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863057903","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Tran Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1667196358383","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1667196358598","date_format":false},{"column_name":"TRAN_COUNT","alias_name":"","mq_id":"MQ_1667196358830","date_format":false},{"column_name":"QUEUE_DESC","alias_name":"","mq_id":"MQ_1667196370862","date_format":false}],"joins":[]},"eq_text":"select  PROCESS_STATUS,  STATUS,  COUNT(STATUS) TRAN_COUNT,  QUEUE_DESC,  Q_SORT_ORDER,  QS_SORT_ORDER from  (  select   T.NPSST_ID,   T.VALUE_DATE,   T.PROCESS_TYPE,   T.UETR,   T.CLRSYSREF,   T.CHANNEL_ID,   T.DBTR_PHONE_NO,   T.DBTR_EMAIL_ID,   T.DBTR_DOCUMENT_ID,   T.CDTR_PHONE_NO,   T.CDTR_EMAIL_ID,   T.CDTR_DOCUMENT_ID,   T.CDTR_IBAN,   T.INTRBK_STTLM_AMNT,   T.HDR_MSG_ID,   T.PRODUCT_CODE,   T.DBTR_ACCT_NO,   T.DBTR_ACCT_NAME,   T.DBTR_IBAN,   T.BASE_CURRENCY,   T.BASE_AMOUNT,   T.CDTR_ACCT_NO,   T.CDTR_ACCT_NAME,   T.DR_SORT_CODE,   T.CR_SORT_CODE,   T.INTRBK_STTLM_CUR,   T.RATE_CODE,   T.EXCHANGE_RATE,   T.CATEGORY_PURPOSE,   T.HDR_CREATED_DATE,   T.HDR_TOTAL_RECORDS,   T.HDR_TOTAL_AMOUNT,   T.HDR_SETTLEMENT_DATE,   T.HDR_SETTLEMENT_METHOD,   T.HDR_CLEARING_SYSTEM,   T.PAYMENT_ENDTOEND_ID,   T.INSTRUMENT_TYPE,   T.CHARGE_BEARER,   T.MESSAGE_DATA,   T.EXHF_ID,   T.DBTR_CUST_TYPE,   T.CHANNEL_REFNO,   T.CHANNEL_USERID,   T.CHANNEL_PRODUCT,   T.CHANNEL_SUB_PRODUCT,   T.CHANNEL_TRAN_CODE,   T.TRAN_INFO,   T.INSTRUCTION_ID,   T.TRAN_REF_ID,   T.CATEGORY_PURPOSE_PRTY,   T.EXT_ORG_ID_CODE,   T.ISSUER_TYPE_CODE,   T.DBTR_BIRTH_DATE,   T.DBTR_CITY_BIRTH,   T.DBTR_COUNTRY,   T.EXT_PERSON_ID_CODE,   T.EXT_ACCT_ID_CODE,   T.CR_ACCT_IDENTIFICATION,   T.CR_ACCT_ID_CODE,   T.EXT_PURPOSE_CODE,   T.EXT_PURPOSE_PRTY,   T.REMITTANCE_INFO,   T.INWARD_FILE_NAME,   T.PROCESS_STATUS,   T.TENANT_ID,   T.STATUS,   T.CREATED_DATE,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   T.CREATED_BY,   T.CREATED_BY_NAME,   T.SYSTEM_ID,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   CASE    WHEN T.EXHF_ID IS NULL THEN 'REAL_TIME'   ELSE 'BULK' END AS MEM_PAYMENT_METHOD  from   NPSS_TRANSACTIONS T  left join TRANSACTION_SET TS on   T.NPSST_ID = TS.TRN_ID   and T.DTT_CODE = TS.DTT_CODE  inner join CORE_Q_STATUS_ROLES QR on   T.STATUS = QR.PROCESS_QUEUE_STATUS   and T.PROCESS_STATUS = QR.QUEUE_CODE  inner join CORE_APP_Q_SETUP PQ on   T.PROCESS_STATUS = PQ.QUEUE_CODE) VM $WHERE group by  PROCESS_STATUS,  STATUS,  QUEUE_DESC,  Q_SORT_ORDER,  QS_SORT_ORDER"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Tran Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"TRAN_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for sh to queue"
	brfq_for_sh_to_queue__select_first_record_for_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_sh_to_queue"
		let destn_id="queue"
		let parent_source_id="cc_for_sh_ide_for_cc"
		let event_code="e_1667459105976"
		let event_params={"caller_name":"brfq_for_sh_to_queue__select_first_record_for_queue","event_desc":"Select First Record for Queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863057903","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Tran Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1667196358383","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1667196358598","date_format":false},{"column_name":"TRAN_COUNT","alias_name":"","mq_id":"MQ_1667196358830","date_format":false},{"column_name":"QUEUE_DESC","alias_name":"","mq_id":"MQ_1667196370862","date_format":false}],"joins":[]},"eq_text":"select  PROCESS_STATUS,  STATUS,  COUNT(STATUS) TRAN_COUNT,  QUEUE_DESC,  Q_SORT_ORDER,  QS_SORT_ORDER from  (  select   T.NPSST_ID,   T.VALUE_DATE,   T.PROCESS_TYPE,   T.UETR,   T.CLRSYSREF,   T.CHANNEL_ID,   T.DBTR_PHONE_NO,   T.DBTR_EMAIL_ID,   T.DBTR_DOCUMENT_ID,   T.CDTR_PHONE_NO,   T.CDTR_EMAIL_ID,   T.CDTR_DOCUMENT_ID,   T.CDTR_IBAN,   T.INTRBK_STTLM_AMNT,   T.HDR_MSG_ID,   T.PRODUCT_CODE,   T.DBTR_ACCT_NO,   T.DBTR_ACCT_NAME,   T.DBTR_IBAN,   T.BASE_CURRENCY,   T.BASE_AMOUNT,   T.CDTR_ACCT_NO,   T.CDTR_ACCT_NAME,   T.DR_SORT_CODE,   T.CR_SORT_CODE,   T.INTRBK_STTLM_CUR,   T.RATE_CODE,   T.EXCHANGE_RATE,   T.CATEGORY_PURPOSE,   T.HDR_CREATED_DATE,   T.HDR_TOTAL_RECORDS,   T.HDR_TOTAL_AMOUNT,   T.HDR_SETTLEMENT_DATE,   T.HDR_SETTLEMENT_METHOD,   T.HDR_CLEARING_SYSTEM,   T.PAYMENT_ENDTOEND_ID,   T.INSTRUMENT_TYPE,   T.CHARGE_BEARER,   T.MESSAGE_DATA,   T.EXHF_ID,   T.DBTR_CUST_TYPE,   T.CHANNEL_REFNO,   T.CHANNEL_USERID,   T.CHANNEL_PRODUCT,   T.CHANNEL_SUB_PRODUCT,   T.CHANNEL_TRAN_CODE,   T.TRAN_INFO,   T.INSTRUCTION_ID,   T.TRAN_REF_ID,   T.CATEGORY_PURPOSE_PRTY,   T.EXT_ORG_ID_CODE,   T.ISSUER_TYPE_CODE,   T.DBTR_BIRTH_DATE,   T.DBTR_CITY_BIRTH,   T.DBTR_COUNTRY,   T.EXT_PERSON_ID_CODE,   T.EXT_ACCT_ID_CODE,   T.CR_ACCT_IDENTIFICATION,   T.CR_ACCT_ID_CODE,   T.EXT_PURPOSE_CODE,   T.EXT_PURPOSE_PRTY,   T.REMITTANCE_INFO,   T.INWARD_FILE_NAME,   T.PROCESS_STATUS,   T.TENANT_ID,   T.STATUS,   T.CREATED_DATE,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   T.CREATED_BY,   T.CREATED_BY_NAME,   T.SYSTEM_ID,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   CASE    WHEN T.EXHF_ID IS NULL THEN 'REAL_TIME'   ELSE 'BULK' END AS MEM_PAYMENT_METHOD  from   NPSS_TRANSACTIONS T  left join TRANSACTION_SET TS on   T.NPSST_ID = TS.TRN_ID   and T.DTT_CODE = TS.DTT_CODE  inner join CORE_Q_STATUS_ROLES QR on   T.STATUS = QR.PROCESS_QUEUE_STATUS   and T.PROCESS_STATUS = QR.QUEUE_CODE  inner join CORE_APP_Q_SETUP PQ on   T.PROCESS_STATUS = PQ.QUEUE_CODE) VM $WHERE group by  PROCESS_STATUS,  STATUS,  QUEUE_DESC,  Q_SORT_ORDER,  QS_SORT_ORDER"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Tran Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"TRAN_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let event_code="e_1666856944151"
		let event_params={"caller_name":"queue__svm_for_queue","event_desc":"SVM for Queue","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_queue__sh_for_tran_list_selections,"
		let event_data={"queue":{"e_1666856944151":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_1","event_code":"E_1666856944151","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"HARDCODED","column_name":"BULK","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"},{"type":"LOCAL","column_name":"PROCESS_STATUS","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_STATUS","setd3name":"PROCESS_STATUS"},{"type":"LOCAL","column_name":"STATUS","level":"MI_LEVEL","name":"MI_LEVEL_STATUS","setd3name":"STATUS"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863057903","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Tran Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1667196358383","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1667196358598","date_format":false},{"column_name":"TRAN_COUNT","alias_name":"","mq_id":"MQ_1667196358830","date_format":false},{"column_name":"QUEUE_DESC","alias_name":"","mq_id":"MQ_1667196370862","date_format":false}],"joins":[]},"eq_text":"select  PROCESS_STATUS,  STATUS,  COUNT(STATUS) TRAN_COUNT,  QUEUE_DESC,  Q_SORT_ORDER,  QS_SORT_ORDER from  (  select   T.NPSST_ID,   T.VALUE_DATE,   T.PROCESS_TYPE,   T.UETR,   T.CLRSYSREF,   T.CHANNEL_ID,   T.DBTR_PHONE_NO,   T.DBTR_EMAIL_ID,   T.DBTR_DOCUMENT_ID,   T.CDTR_PHONE_NO,   T.CDTR_EMAIL_ID,   T.CDTR_DOCUMENT_ID,   T.CDTR_IBAN,   T.INTRBK_STTLM_AMNT,   T.HDR_MSG_ID,   T.PRODUCT_CODE,   T.DBTR_ACCT_NO,   T.DBTR_ACCT_NAME,   T.DBTR_IBAN,   T.BASE_CURRENCY,   T.BASE_AMOUNT,   T.CDTR_ACCT_NO,   T.CDTR_ACCT_NAME,   T.DR_SORT_CODE,   T.CR_SORT_CODE,   T.INTRBK_STTLM_CUR,   T.RATE_CODE,   T.EXCHANGE_RATE,   T.CATEGORY_PURPOSE,   T.HDR_CREATED_DATE,   T.HDR_TOTAL_RECORDS,   T.HDR_TOTAL_AMOUNT,   T.HDR_SETTLEMENT_DATE,   T.HDR_SETTLEMENT_METHOD,   T.HDR_CLEARING_SYSTEM,   T.PAYMENT_ENDTOEND_ID,   T.INSTRUMENT_TYPE,   T.CHARGE_BEARER,   T.MESSAGE_DATA,   T.EXHF_ID,   T.DBTR_CUST_TYPE,   T.CHANNEL_REFNO,   T.CHANNEL_USERID,   T.CHANNEL_PRODUCT,   T.CHANNEL_SUB_PRODUCT,   T.CHANNEL_TRAN_CODE,   T.TRAN_INFO,   T.INSTRUCTION_ID,   T.TRAN_REF_ID,   T.CATEGORY_PURPOSE_PRTY,   T.EXT_ORG_ID_CODE,   T.ISSUER_TYPE_CODE,   T.DBTR_BIRTH_DATE,   T.DBTR_CITY_BIRTH,   T.DBTR_COUNTRY,   T.EXT_PERSON_ID_CODE,   T.EXT_ACCT_ID_CODE,   T.CR_ACCT_IDENTIFICATION,   T.CR_ACCT_ID_CODE,   T.EXT_PURPOSE_CODE,   T.EXT_PURPOSE_PRTY,   T.REMITTANCE_INFO,   T.INWARD_FILE_NAME,   T.PROCESS_STATUS,   T.TENANT_ID,   T.STATUS,   T.CREATED_DATE,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   T.CREATED_BY,   T.CREATED_BY_NAME,   T.SYSTEM_ID,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   CASE    WHEN T.EXHF_ID IS NULL THEN 'REAL_TIME'   ELSE 'BULK' END AS MEM_PAYMENT_METHOD  from   NPSS_TRANSACTIONS T  left join TRANSACTION_SET TS on   T.NPSST_ID = TS.TRN_ID   and T.DTT_CODE = TS.DTT_CODE  inner join CORE_Q_STATUS_ROLES QR on   T.STATUS = QR.PROCESS_QUEUE_STATUS   and T.PROCESS_STATUS = QR.QUEUE_CODE  inner join CORE_APP_Q_SETUP PQ on   T.PROCESS_STATUS = PQ.QUEUE_CODE) VM $WHERE group by  PROCESS_STATUS,  STATUS,  QUEUE_DESC,  Q_SORT_ORDER,  QS_SORT_ORDER"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Tran Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"TRAN_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let internals="sh_for_tran_list_selections__brfq_for_tran_list,"
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
	sh_for_tran_list_selections__brfq_for_tran_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="sh_for_tran_list_selections"
		let destn_id="transaction_list"
		let parent_source_id="svm_for_queue"
		let event_code="e_1666857870892"
		let event_params={"caller_name":"sh_for_tran_list_selections__brfq_for_tran_list","event_desc":"BRFQ for Tran list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_tran_list__sfr_for_tl,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863233602","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"MEM_PAYMENT_METHOD","alias_name":"","mq_id":"MQ_1668415265731","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  MODIFIED_DATE_UTC,  DATEMI,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  INTRBK_STTLM_AMNT,  INTRBK_STTLM_CUR,  DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  EXHF_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  MEM_PAYMENT_METHOD,  TRAN_REF_ID from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.UETR,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   case    when A.EXHF_ID is null then 'REAL_TIME'    else 'BULK'   end as MEM_PAYMENT_METHOD  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS HST View Transaction CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref No","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for tran list"
	brfq_for_tran_list__sfr_for_tl(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_tran_list"
		let destn_id="transaction_list"
		let parent_source_id="sh_for_tran_list_selections"
		let event_code="e_1666857915820"
		let event_params={"caller_name":"brfq_for_tran_list__sfr_for_tl","event_desc":"SFR for TL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863233602","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"MEM_PAYMENT_METHOD","alias_name":"","mq_id":"MQ_1668415265731","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  MODIFIED_DATE_UTC,  DATEMI,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  INTRBK_STTLM_AMNT,  INTRBK_STTLM_CUR,  DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  EXHF_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  MEM_PAYMENT_METHOD,  TRAN_REF_ID from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.UETR,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   case    when A.EXHF_ID is null then 'REAL_TIME'    else 'BULK'   end as MEM_PAYMENT_METHOD  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS HST View Transaction CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref No","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let event_data={"transaction_list":{"e_1666857041976":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_2","event_code":"E_1666857041976","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"HARDCODED","column_name":"SELECT","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"},{"type":"LOCAL","column_name":"NPSST_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSST_ID","setd3name":"NPSST_ID"},{"type":"LOCAL","column_name":"UETR","level":"MI_LEVEL","name":"MI_LEVEL_UETR","setd3name":"UETR"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863233602","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"MEM_PAYMENT_METHOD","alias_name":"","mq_id":"MQ_1668415265731","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  MODIFIED_DATE_UTC,  DATEMI,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  INTRBK_STTLM_AMNT,  INTRBK_STTLM_CUR,  DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  EXHF_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  MEM_PAYMENT_METHOD,  TRAN_REF_ID from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.UETR,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   case    when A.EXHF_ID is null then 'REAL_TIME'    else 'BULK'   end as MEM_PAYMENT_METHOD  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS HST View Transaction CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref No","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
	navigation_review__brfq_for_process_log() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_review"
		let destn_id="process_log_list"
		let parent_source_id=""
		let event_code="e_1666857167825"
		let event_params={"caller_name":"navigation_review__brfq_for_process_log","event_desc":"BRFQ for Process Log","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_review","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_process_log__sfr_for_process_log,brfq_for_process_log__brfq_success_sp,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_7","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863318385","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"SELECT REVERSAL_DESCRIPTION,        T24_RETURN_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE,        REVERSAL_DESC,        T24_RETURN_DESC,        CBUAE_RETURN_DESC,        TENANT_ID,        DT_CODE,        DTT_CODE   FROM (SELECT A.NPSSTPL_ID,                A.MSG_ID,                A.UETR,                A.NPSSTRRD_REFNO,                A.PROCESS_NAME,                A.PROCESSING_SYSTEM,                A.RESPONSE_CODE,                A.PROCESS_REF_NO,                A.RESPONSE_DATA,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') AS CREATEDDATEMILISEC,                A.CREATED_DATE,                A.PROCESS_STATUS,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.TENANT_ID,                A.REQUEST_DATA_JSON,                A.RESPONSE_DATA_JSON,                A.T24_RETURN_CODE,                A.ADDITIONAL_INFO,                T24RC.RETURN_DESCRIPTION AS T24_RETURN_DESC,                CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                A.CBUAE_RETURN_CODE,                CBUAERC.RETURN_DESCRIPTION AS CBUAE_RETURN_DESC,                CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,                A.REVERSAL_CODE,                CCD.CD_DESCRIPTION AS REVERSAL_DESC,                CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION           FROM NPSS_TRN_PROCESS_LOG A           LEFT JOIN CORE_NC_CODE_DESCRIPTIONS CCD ON CCD.CD_CODE =                                                      A.REVERSAL_CODE                                                  AND CCD.CD_CATEGORY =                                                      'REVERSAL_REASON_IDENTIFIER_CODE'           LEFT JOIN CORE_NC_RETURN_CODES T24RC ON T24RC.RETURN_CODE =                                                   A.T24_RETURN_CODE                                               AND T24RC.PROCESSING_SYSTEM =                                                   'T24'           LEFT JOIN CORE_NC_RETURN_CODES CBUAERC ON CBUAERC.RETURN_CODE =                                                     A.CBUAE_RETURN_CODE                                                 AND CBUAERC.PROCESSING_SYSTEM =                                                     'CBUAE'          ORDER BY A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Return Process Log CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"RCTInwardReversalRequest","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"IP_RCT_REVERSAL_REQ_RECEIVED","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
	navigation_review__de_for_review() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_review"
		let destn_id="reversal_ui"
		let parent_source_id=""
		let event_code="e_1666931667370"
		let event_params={"caller_name":"navigation_review__de_for_review","event_desc":"DE for Review","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_review","raiseparam":{}}
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

	//Handler for INTERNAL event of "brfq for process log"
	brfq_for_process_log__sfr_for_process_log(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_process_log"
		let destn_id="process_log_list"
		let parent_source_id="navigation_review"
		let event_code="e_1666857189655"
		let event_params={"caller_name":"brfq_for_process_log__sfr_for_process_log","event_desc":"SFR for Process Log","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_review","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_7","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863318385","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"SELECT REVERSAL_DESCRIPTION,        T24_RETURN_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE,        REVERSAL_DESC,        T24_RETURN_DESC,        CBUAE_RETURN_DESC,        TENANT_ID,        DT_CODE,        DTT_CODE   FROM (SELECT A.NPSSTPL_ID,                A.MSG_ID,                A.UETR,                A.NPSSTRRD_REFNO,                A.PROCESS_NAME,                A.PROCESSING_SYSTEM,                A.RESPONSE_CODE,                A.PROCESS_REF_NO,                A.RESPONSE_DATA,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') AS CREATEDDATEMILISEC,                A.CREATED_DATE,                A.PROCESS_STATUS,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.TENANT_ID,                A.REQUEST_DATA_JSON,                A.RESPONSE_DATA_JSON,                A.T24_RETURN_CODE,                A.ADDITIONAL_INFO,                T24RC.RETURN_DESCRIPTION AS T24_RETURN_DESC,                CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                A.CBUAE_RETURN_CODE,                CBUAERC.RETURN_DESCRIPTION AS CBUAE_RETURN_DESC,                CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,                A.REVERSAL_CODE,                CCD.CD_DESCRIPTION AS REVERSAL_DESC,                CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION           FROM NPSS_TRN_PROCESS_LOG A           LEFT JOIN CORE_NC_CODE_DESCRIPTIONS CCD ON CCD.CD_CODE =                                                      A.REVERSAL_CODE                                                  AND CCD.CD_CATEGORY =                                                      'REVERSAL_REASON_IDENTIFIER_CODE'           LEFT JOIN CORE_NC_RETURN_CODES T24RC ON T24RC.RETURN_CODE =                                                   A.T24_RETURN_CODE                                               AND T24RC.PROCESSING_SYSTEM =                                                   'T24'           LEFT JOIN CORE_NC_RETURN_CODES CBUAERC ON CBUAERC.RETURN_CODE =                                                     A.CBUAE_RETURN_CODE                                                 AND CBUAERC.PROCESSING_SYSTEM =                                                     'CBUAE'          ORDER BY A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Return Process Log CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"RCTInwardReversalRequest","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"IP_RCT_REVERSAL_REQ_RECEIVED","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for process log"
	brfq_for_process_log__brfq_success_sp(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_process_log"
		let destn_id=""
		let parent_source_id="navigation_review"
		let event_code="e_1666857967659"
		let event_params={"caller_name":"brfq_for_process_log__brfq_success_sp","event_desc":"BRFQ success SP","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_review","raiseparam":{"profile_code":"BTL_1304_1666856478860"},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "reversal action ui accept"
	reversal_action_ui_accept__spap_for_accept() { 
		let Dest_Is_ctrl=true
		
		let source_id="reversal_action_ui_accept"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666857226486"
		let event_params={"caller_name":"reversal_action_ui_accept__spap_for_accept","event_desc":"SPAP for Accept","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"reversal_action_ui_accept","raiseparam":{"popup_category":"profile","variable":"p_accept_layout__spap_for_accept","selector":"p_accept_layout","profile_code":"BTL_1304_1666856778120","window_title":"Return Reason","window_height":300,"window_width":"600px","window_close_icon":"Y","eventdes":"spap_for_accept","eventcode":"E_1666857226486"}}
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

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__bind_tran_for_crui() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="change_return_ui"
		let parent_source_id=""
		let event_code="e_1666857345002"
		let event_params={"caller_name":"process_log_list__bind_tran_for_crui","event_desc":"Bind Tran for CRUI","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__svm_for_process_log() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="process_log_list"
		let parent_source_id=""
		let event_code="e_1666866360875"
		let event_params={"caller_name":"process_log_list__svm_for_process_log","event_desc":"SVM for Process Log","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_process_log__trigger_btn_click_for_process_log_to_tbc,"
		let event_data={"process_log_list":{"e_1666866360875":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_7","event_code":"E_1666866360875","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"NPSSTPL_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSSTPL_ID","setd3name":"NPSSTPL_ID"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_7","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863318385","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"SELECT REVERSAL_DESCRIPTION,        T24_RETURN_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE,        REVERSAL_DESC,        T24_RETURN_DESC,        CBUAE_RETURN_DESC,        TENANT_ID,        DT_CODE,        DTT_CODE   FROM (SELECT A.NPSSTPL_ID,                A.MSG_ID,                A.UETR,                A.NPSSTRRD_REFNO,                A.PROCESS_NAME,                A.PROCESSING_SYSTEM,                A.RESPONSE_CODE,                A.PROCESS_REF_NO,                A.RESPONSE_DATA,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') AS CREATEDDATEMILISEC,                A.CREATED_DATE,                A.PROCESS_STATUS,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.TENANT_ID,                A.REQUEST_DATA_JSON,                A.RESPONSE_DATA_JSON,                A.T24_RETURN_CODE,                A.ADDITIONAL_INFO,                T24RC.RETURN_DESCRIPTION AS T24_RETURN_DESC,                CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                A.CBUAE_RETURN_CODE,                CBUAERC.RETURN_DESCRIPTION AS CBUAE_RETURN_DESC,                CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,                A.REVERSAL_CODE,                CCD.CD_DESCRIPTION AS REVERSAL_DESC,                CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION           FROM NPSS_TRN_PROCESS_LOG A           LEFT JOIN CORE_NC_CODE_DESCRIPTIONS CCD ON CCD.CD_CODE =                                                      A.REVERSAL_CODE                                                  AND CCD.CD_CATEGORY =                                                      'REVERSAL_REASON_IDENTIFIER_CODE'           LEFT JOIN CORE_NC_RETURN_CODES T24RC ON T24RC.RETURN_CODE =                                                   A.T24_RETURN_CODE                                               AND T24RC.PROCESSING_SYSTEM =                                                   'T24'           LEFT JOIN CORE_NC_RETURN_CODES CBUAERC ON CBUAERC.RETURN_CODE =                                                     A.CBUAE_RETURN_CODE                                                 AND CBUAERC.PROCESSING_SYSTEM =                                                     'CBUAE'          ORDER BY A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Return Process Log CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"RCTInwardReversalRequest","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"IP_RCT_REVERSAL_REQ_RECEIVED","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let destn_id="reversal_action_ui_return"
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

	//Handler for INTERNAL event of "svm for process log"
	svm_for_process_log__trigger_btn_click_for_process_log_to_tbc(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_process_log"
		let destn_id="reversal_action_ui_trigger_btn"
		let parent_source_id="process_log_list"
		let event_code="e_1666867053732"
		let event_params={"caller_name":"svm_for_process_log__trigger_btn_click_for_process_log_to_tbc","event_desc":"Trigger btn click for Process log to TBC","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{},"parent_event_result":"SUCCESS"}
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
		let destn_id="comment_list"
		let parent_source_id=""
		let event_code="e_1666866840507"
		let event_params={"caller_name":"reversal_action_ui_trigger_btn__brfq_for_comment_list","event_desc":"BRFQ for Comment List","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"reversal_action_ui_trigger_btn","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_8","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666863771649","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Comment MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"comment_text","alias_name":"","mq_id":"MQ_1666863666352","date_format":false}],"joins":[]},"eq_text":"SELECT comment_text   FROM (SELECT                t.tc_id,                t.comment_text,                t.dt_code,                t.dtt_code,                ts.ts_id,                ts.trn_id           FROM transaction_comments T          INNER JOIN transaction_set ts ON T.ts_id = ts.ts_id                                       AND ts.dtt_code = T.dtt_code) VW $WHERE ORDER BY tc_id DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Transaction Comment CCD","filter":[{"filter_name":"TRN_ID","binding_name":"TRN_ID","binding_value":"","source_name":"MI_LEVEL_NPSSTPL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Comments","target_column":"comment_text","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
			this.npss_cs_reversal_acceptService.fn_npss_cs_reversal_accept(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let event_params={"caller_name":"cc_for_reversal_ide__accept_info","event_desc":"Accept info","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Data has been accepted successfully","root_source_id":"accept_ui_save","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
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
	reversal_action_ui_reject__cc_for_reject() { 
		let Dest_Is_ctrl=true
		
		let source_id="reversal_action_ui_reject"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666875373156"
		let event_params={"caller_name":"reversal_action_ui_reject__cc_for_reject","event_desc":"CC For reject","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"reversal_action_ui_reject","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_reject__reject_info,"
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_reversal_rejectService.fn_npss_cs_reversal_reject(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for reject"
	cc_for_reject__reject_info(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_reject"
		let destn_id=""
		let parent_source_id="reversal_action_ui_reject"
		let event_code="e_1666875415919"
		let event_params={"caller_name":"cc_for_reject__reject_info","event_desc":"Reject info","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Data has been rejected successfully","root_source_id":"reversal_action_ui_reject","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="reject_info__rs_for_reject,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "reject info"
	reject_info__rs_for_reject(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="reject_info"
		let destn_id=""
		let parent_source_id="cc_for_reject"
		let event_code="e_1666875465706"
		let event_params={"caller_name":"reject_info__rs_for_reject","event_desc":"RS for Reject","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"reversal_action_ui_reject","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "reversal action ui return"
	reversal_action_ui_return__cc_forreturn() { 
		let Dest_Is_ctrl=true
		
		let source_id="reversal_action_ui_return"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666875671210"
		let event_params={"caller_name":"reversal_action_ui_return__cc_forreturn","event_desc":"CC forReturn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"reversal_action_ui_return","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_forreturn__return_info,"
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_return_pac_004Service.fn_npss_cs_return_pac_004(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let parent_source_id="reversal_action_ui_return"
		let event_code="e_1666875696862"
		let event_params={"caller_name":"cc_forreturn__return_info","event_desc":"Return info","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Data has been returned successfully","root_source_id":"reversal_action_ui_return","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
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
		let event_params={"caller_name":"return_info__rs_for_return","event_desc":"RS for return","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"reversal_action_ui_return","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for SELECTION_CHANGED event of "npss pl rtn reason ui t24 return code"
	npss_pl_rtn_reason_ui_t24_return_code__fcb_for_source__accept_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="npss_pl_rtn_reason_ui_t24_return_code"
		let destn_id="npss_pl_rtn_reason_ui_cbuae_return_code"
		let parent_source_id=""
		let event_code="e_1666876334010"
		let event_params={"source_comp_id":"accept_ui","source_ctrl_id":"t24_return_code","destn_comp_id":"accept_ui","destn_ctrl_id":"cbuae_return_code","caller_name":"npss_pl_rtn_reason_ui_t24_return_code__fcb_for_source__accept_ui","event_desc":"FCB for source","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"npss_pl_rtn_reason_ui~uicgc_5~ui~df_1304_1665905157963~14","raiseparam":{"parentcolumn":"SOURCE_RETURN_CODE","need_selecteditem":"N"}}
		let handler_code="filter_combo_binding"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.filter_combo_binding(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "npss pl change rtn reason ui t24 return code"
	npss_pl_change_rtn_reason_ui_t24_return_code__fcb_for_source__change_return_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="npss_pl_change_rtn_reason_ui_t24_return_code"
		let destn_id="npss_pl_change_rtn_reason_ui_cbuae_return_code"
		let parent_source_id=""
		let event_code="e_1666876517487"
		let event_params={"source_comp_id":"change_return_ui","source_ctrl_id":"t24_return_code","destn_comp_id":"change_return_ui","destn_ctrl_id":"cbuae_return_code","caller_name":"npss_pl_change_rtn_reason_ui_t24_return_code__fcb_for_source__change_return_ui","event_desc":"FCB for Source","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"npss_pl_change_rtn_reason_ui~uicgc_6~ui~df_1304_1665905157963~14","raiseparam":{"parentcolumn":"SOURCE_RETURN_CODE","need_selecteditem":"N"}}
		let handler_code="filter_combo_binding"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.filter_combo_binding(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
