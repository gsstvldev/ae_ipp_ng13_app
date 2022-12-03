/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27166 
Modified By     : Admin 
Modified Date   : 2022-Dec-03 6:44 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_view_inward_payments
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {torus_cs_change_routingkeyService} from '../../../custom_widget/torus_cs_change_routingkey/torus_cs_change_routingkey.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'

@Component({
	selector: 's_rct_view_inward_payments',
	templateUrl: './s_rct_view_inward_payments.component.html',
	styleUrls: ['./s_rct_view_inward_payments.component.css'],
	providers:[torus_cs_change_routingkeyService,torus_cs_show_hideService]
})
    
// Start of class 
export class s_rct_view_inward_paymentsComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_rct_view_inward_payments"
	wftpa_id : string = "WFT_NPSS_P_1304_1669177561854_0"
	cg_code : string = "CG_1304_1669177172525"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "back_ui"
	uicgc_2 : string = "status_by_group"
	uicgc_3 : string = "navigation_ui"
	uicgc_4 : string = "transaction_list"
	uicgc_5 : string = "view_dr_cr_details"
	uicgc_7 : string = "search"
	uicgc_8 : string = "history_detail"
	uicgc_9 : string = "process_by_system"
	uicgc_10 : string = "process_log_ui"
	uicgc_11 : string = "response_ui"
	uicgc_12 : string = "request_ui"
	uicgc_13 : string = "single_back_ui"
	uicgc_14 : string = "message_detail_ui"
	uicgc_15 : string = "message_detail"
	uicgc_16 : string = "message_back_ui"
	uicgc_17 : string = "message_detail_action"
	uicgc_18 : string = "summary_list"
	uicgc_19 : string = "view_payment_details"
	uicgc_20 : string = "main_message_detail_ui"
	uicgc_21 : string = "main_request_ui"
	uicgc_22 : string = "main_response_ui"
	key_events : any = {}
	btl_1304_1669632768345 : string = "p_view_main_message_ui_layout"
	btl_1304_1669632180521 : string = "p_view_main_request_layout"
	btl_1304_1669632008351 : string = "p_view_main_response_layout"
	btl_1304_1668608225654 : string = "p_view_message_ui_layout"
	btl_1304_1668607321233 : string = "p_view_message_list_layout"
	btl_1304_1668606425707 : string = "p_view_request_layout"
	btl_1304_1668606353377 : string = "p_view_response_layout"
	btl_1304_1668497379186 : string = "p_view_history_layout"
	btl_1304_1668497253326 : string = "p_vertical_layout"
	btl_1304_1668497202456 : string = "p_search_layout"
	btl_1304_1668497054916 : string = "p_main_layout"
	forms : any = ["uicgc_20","uicgc_12","uicgc_21","uicgc_22","uicgc_11","uicgc_7","uicgc_14","uicgc_1","uicgc_16","uicgc_17","uicgc_13","uicgc_10","uicgc_3"]
	p_search_layout__spap_for_search_showpopup : boolean = false
	back_ui : any = {}
	back_ui_back : any = {}
	status_by_group : any = {}
	navigation_ui : any = {}
	navigation_ui_search : any = {}
	navigation_ui_view_tran : any = {}
	navigation_ui_view_log_history : any = {}
	navigation_ui_view_message_history : any = {}
	navigation_ui_view_response : any = {}
	navigation_ui_view_request : any = {}
	navigation_ui_view_message : any = {}
	navigation_ui_reset : any = {}
	navigation_ui_trg_disable_view_data_ui : any = {}
	transaction_list : any = {}
	view_dr_cr_details : any = {}
	search : any = {}
	search_search : any = {}
	search_clear : any = {}
	history_detail : any = {}
	process_by_system : any = {}
	process_log_ui : any = {}
	process_log_ui_back : any = {}
	process_log_ui_view_response : any = {}
	process_log_ui_view_request : any = {}
	response_ui : any = {}
	request_ui : any = {}
	single_back_ui : any = {}
	single_back_ui_back : any = {}
	message_detail_ui : any = {}
	message_detail : any = {}
	message_back_ui : any = {}
	message_back_ui_back : any = {}
	message_detail_action : any = {}
	message_detail_action_back : any = {}
	message_detail_action_view_message : any = {}
	summary_list : any = {}
	view_payment_details : any = {}
	main_message_detail_ui : any = {}
	main_request_ui : any = {}
	main_response_ui : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private torus_cs_change_routingkeyService:torus_cs_change_routingkeyService,private torus_cs_show_hideService:torus_cs_show_hideService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Back UI" 
		this.back_ui.uictrl_code = "dynamic_ui"
		this.back_ui.uicgc_desc = "Back UI"
		this.back_ui.uicgc_code = "uicgc_1"
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
		this.back_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.back_ui_back.dynamic_param = {}
		this.back_ui_back.role = []
		this.back_ui_back.action = ""
	
		// Component level properties - "Status by Group" 
		this.status_by_group.uictrl_code = "chart"
		this.status_by_group.uicgc_desc = "Status by Group"
		this.status_by_group.uicgc_code = "uicgc_2"
		this.status_by_group.params = {}
		this.status_by_group.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669179567882","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Row Group Name MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"GROUP_NAME","alias_name":"","mq_id":"MQ_1669177856684","date_format":false},{"column_name":"GROUP_COUNT","alias_name":"","mq_id":"MQ_1669177856860","date_format":false}],"joins":[]},"eq_text":"SELECT  GROUP_NAME,  GN_SORT_ORDER,  COUNT(GROUP_NAME) AS GROUP_COUNT FROM  (  SELECT   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NT.TENANT_ID,   NT.DEPARTMENT_CODE,   NTPL.STATUS,   NTPL.PROCESSING_SYSTEM,   NTPL.PROCESS_STATUS,   NTPL.GROUP_NAME,   NTPL.PROCESS_TYPE,   NTPL.PAYMENT_MODE,   NTPL.RULE_GROUP,   NTPL.NPSSTPL_ID,   NTPL.DT_CODE,   NTPL.DTT_CODE,   NTPL.REQUEST_DATA_JSON,   NTPL.RESPONSE_DATA_JSON,   NTPL.MSG_ID,   NTPL.PROCESS_NAME,   RR.NPSSTRRD_ID,   RR.RR_MSG_ID,   RR.PARENT_NPSSTRRD_REFNO,   RR.MESSAGE_DATA,   RR.PROCESS_CODE,   RR.PROCESS_DETAIL,   RR.NPSSTRRD_REFNO,   RR.RR_DT_CODE,   RR.RR_DTT_CODE,   RR.RR_PROCESS_NAME,   RR.RR_MESSAGE_DESC,   NT.DBTR_ACCT_NAME ,   NT.DBTR_PHONE_NO ,   NT.DBTR_EMAIL_ID ,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN ,   NT.DBTR_CUST_TYPE ,   NT.DBTR_PRVT_ID ,   NT.DBTR_OTHER_ISSUER ,   NT.CDTR_ACCT_NAME ,   NT.CDTR_PHONE_NO ,   NT.CDTR_EMAIL_ID ,   NT.CDTR_DOCUMENT_ID ,   NT.DR_SORT_CODE ,   NT.CR_SORT_CODE ,   NT.CATEGORY_PURPOSE ,   NT.CATEGORY_PURPOSE_PRTY ,   NT.CR_ACCT_IDENTIFICATION ,   NT.BASE_CURRENCY ,   NT.BASE_AMOUNT ,   NT.HDR_TOTAL_RECORDS ,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM ,   NT.CHARGE_BEARER ,   NT.REMITTANCE_INFO ,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID ,   NT.CHANNEL_REFNO ,   NT.CHANNEL_USERID ,   NT.CHANNEL_PRODUCT ,   NT.CHANNEL_SUB_PRODUCT ,   NT.CHANNEL_TRAN_CODE ,   NT.ISSUER_TYPE_CODE,   GN_SORT_ORDER  FROM   NPSS_TRANSACTIONS NT  INNER JOIN (   SELECT    T.NPSSTPL_ID,    T.UETR,    T.STATUS,    T.PROCESSING_SYSTEM,    T.PROCESS_STATUS,    G.GROUP_NAME,    G.PROCESS_TYPE,    G.PAYMENT_MODE,    G.RULE_GROUP,    T.DT_CODE,    T.DTT_CODE,    T.REQUEST_DATA_JSON,    T.RESPONSE_DATA_JSON,    T.MSG_ID,    T.PROCESS_NAME,    CD.SORT_ORDER AS GN_SORT_ORDER   FROM    (    SELECT     A.NPSSTPL_ID,     A.UETR,     A.STATUS,     A.PROCESSING_SYSTEM,     A.PROCESS_STATUS,     A.DT_CODE,     A.DTT_CODE,     A.REQUEST_DATA_JSON,     A.RESPONSE_DATA_JSON,     A.MSG_ID,     A.PROCESS_NAME,     ROW_NUMBER() OVER(PARTITION BY A.UETR    ORDER BY     A.NPSSTPL_ID DESC) AS ROW_NUM    FROM     NPSS_TRN_PROCESS_LOG A) T   INNER JOIN CORE_NC_STATUS_GROUP G ON    G.QUEUE_CODE = T.PROCESS_STATUS    AND G.PROCESS_QUEUE_STATUS = T.STATUS    INNER JOIN CORE_NC_CODE_DESCRIPTIONS CD ON CD.CD_CODE = G.GROUP_NAME    WHERE    T.ROW_NUM = 1 AND CD.CD_CATEGORY = 'STATUS_GROUP') NTPL ON   NT.UETR = NTPL.UETR  LEFT JOIN (   SELECT    B.NPSSTRRD_ID ,    B.MSG_ID AS RR_MSG_ID,    B.PARENT_NPSSTRRD_REFNO ,    B.MESSAGE_DATA ,    B.PROCESS_CODE ,    B.PROCESS_DETAIL ,    B.NPSSTRRD_REFNO,    B.UETR,    B.DT_CODE AS RR_DT_CODE,    B.DTT_CODE AS RR_DTT_CODE,    B.PROCESS_NAME AS RR_PROCESS_NAME,    B.MESSAGE_DESC AS RR_MESSAGE_DESC,    ROW_NUMBER() OVER(PARTITION BY B.UETR   ORDER BY    B.NPSSTRRD_ID DESC) AS ROW_NUM   FROM    NPSS_TRN_REQ_RESP_DTLS B ) RR ON   RR.UETR = NT.UETR   AND RR.ROW_NUM = 1) V $WHERE GROUP BY  GN_SORT_ORDER,GROUP_NAME  ORDER BY GN_SORT_ORDER"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Group Name LR  Chart CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"RULE_GROUP","binding_name":"RULE_GROUP","binding_value":"","source_name":"RCT_INWARD_GROUP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Group Name","target_column":"GROUP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Group Count","target_column":"GROUP_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.status_by_group.context_menu = []
		this.status_by_group.views = {}
		this.status_by_group.onChangecomponent = new EventEmitter<any>()
		this.status_by_group.show = true
		this.status_by_group.dynamic_param = {}
	
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
		
		// "View Log History" Button of "Navigation UI" component
		this.navigation_ui_view_log_history.label_name = "View Log History"
		this.navigation_ui_view_log_history.show = true
		this.navigation_ui_view_log_history.disabled = false
		this.navigation_ui_view_log_history.params = {"icon_only":false,"uicgcc_style":"fa fa-building"}
		this.navigation_ui_view_log_history.dynamic_param = {}
		this.navigation_ui_view_log_history.role = []
		this.navigation_ui_view_log_history.action = ""
		
		// "View Message History" Button of "Navigation UI" component
		this.navigation_ui_view_message_history.label_name = "View Message History"
		this.navigation_ui_view_message_history.show = true
		this.navigation_ui_view_message_history.disabled = false
		this.navigation_ui_view_message_history.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.navigation_ui_view_message_history.dynamic_param = {}
		this.navigation_ui_view_message_history.role = []
		this.navigation_ui_view_message_history.action = ""
		
		// "View Response" Button of "Navigation UI" component
		this.navigation_ui_view_response.label_name = "View Response"
		this.navigation_ui_view_response.show = true
		this.navigation_ui_view_response.disabled = true
		this.navigation_ui_view_response.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.navigation_ui_view_response.dynamic_param = {}
		this.navigation_ui_view_response.role = []
		this.navigation_ui_view_response.action = ""
		
		// "View Request" Button of "Navigation UI" component
		this.navigation_ui_view_request.label_name = "View Request"
		this.navigation_ui_view_request.show = true
		this.navigation_ui_view_request.disabled = true
		this.navigation_ui_view_request.params = {"icon_only":false,"uicgcc_style":"fa fa-expand"}
		this.navigation_ui_view_request.dynamic_param = {}
		this.navigation_ui_view_request.role = []
		this.navigation_ui_view_request.action = ""
		
		// "View Message" Button of "Navigation UI" component
		this.navigation_ui_view_message.label_name = "View Message"
		this.navigation_ui_view_message.show = true
		this.navigation_ui_view_message.disabled = true
		this.navigation_ui_view_message.params = {"icon_only":false,"uicgcc_style":"fa fa-css3"}
		this.navigation_ui_view_message.dynamic_param = {}
		this.navigation_ui_view_message.role = []
		this.navigation_ui_view_message.action = ""
		
		// "Reset" Button of "Navigation UI" component
		this.navigation_ui_reset.label_name = "Reset"
		this.navigation_ui_reset.show = true
		this.navigation_ui_reset.disabled = false
		this.navigation_ui_reset.params = {"icon_only":false,"uicgcc_style":"fa fa-recycle"}
		this.navigation_ui_reset.dynamic_param = {}
		this.navigation_ui_reset.role = []
		this.navigation_ui_reset.action = ""
		
		// "TRG Disable View Data UI" Button of "Navigation UI" component
		this.navigation_ui_trg_disable_view_data_ui.label_name = "TRG Disable View Data UI"
		this.navigation_ui_trg_disable_view_data_ui.show = true
		this.navigation_ui_trg_disable_view_data_ui.disabled = false
		this.navigation_ui_trg_disable_view_data_ui.params = {"icon_only":false,"uicgcc_style":""}
		this.navigation_ui_trg_disable_view_data_ui.dynamic_param = {}
		this.navigation_ui_trg_disable_view_data_ui.role = []
		this.navigation_ui_trg_disable_view_data_ui.action = ""
	
		// Component level properties - "Transaction list" 
		this.transaction_list.uictrl_code = "datatable"
		this.transaction_list.uicgc_desc = "Transaction list"
		this.transaction_list.uicgc_code = "uicgc_4"
		this.transaction_list.params = {"need_pag_datatable":"Y","advance_dynamic_search":"N","need_search":"N"}
		this.transaction_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669179986087","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Processlog LR MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"npsst_id","alias_name":"","mq_id":"MQ_1669178086386","date_format":false},{"column_name":"uetr","alias_name":"","mq_id":"MQ_1669178086562","date_format":false},{"column_name":"value_date","alias_name":"","mq_id":"MQ_1669178086753","date_format":true},{"column_name":"accp_date_time","alias_name":"","mq_id":"MQ_1669178086930","date_format":false},{"column_name":"created_date","alias_name":"","mq_id":"MQ_1669178147671","date_format":false},{"column_name":"exhf_id","alias_name":"","mq_id":"MQ_1669178153368","date_format":false},{"column_name":"cdtr_iban","alias_name":"","mq_id":"MQ_1669178153567","date_format":false},{"column_name":"tran_ref_id","alias_name":"","mq_id":"MQ_1669178153751","date_format":false},{"column_name":"payment_endtoend_id","alias_name":"","mq_id":"MQ_1669178153943","date_format":false},{"column_name":"clrsysref","alias_name":"","mq_id":"MQ_1669178154119","date_format":false},{"column_name":"cdtr_acct_no","alias_name":"","mq_id":"MQ_1669178191046","date_format":false},{"column_name":"dbtr_acct_no","alias_name":"","mq_id":"MQ_1669178191237","date_format":false},{"column_name":"intrbk_sttlm_amnt","alias_name":"","mq_id":"MQ_1669178191445","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1669178191661","date_format":false},{"column_name":"processing_system","alias_name":"","mq_id":"MQ_1669178227517","date_format":false},{"column_name":"process_status","alias_name":"","mq_id":"MQ_1669178227717","date_format":false},{"column_name":"Group_Name","alias_name":"","mq_id":"MQ_1669178227908","date_format":false},{"column_name":"Process_type","alias_name":"","mq_id":"MQ_1669178239274","date_format":false},{"column_name":"payment_mode","alias_name":"","mq_id":"MQ_1669178239466","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1669179866186","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1669179866480","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1669180239582","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1669714936628","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1669714936809","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669714937008","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1669714937193","date_format":false},{"column_name":"RR_MESSAGE_DESC","alias_name":"","mq_id":"MQ_1669714937383","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1669714937535","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028203","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028433","date_format":false},{"column_name":"ADDITIONAL_INFO","alias_name":"","mq_id":"MQ_1669715062065","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1669715075448","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716335899","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716336337","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716336495","date_format":false},{"column_name":"DBTR_CUST_TYPE","alias_name":"","mq_id":"MQ_1669716336659","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669716336826","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669716336982","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669716337154","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716337311","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716337475","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716337634","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337798","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337958","date_format":false},{"column_name":"CATEGORY_PURPOSE","alias_name":"","mq_id":"MQ_1669716338118","date_format":false},{"column_name":"CATEGORY_PURPOSE_PRTY","alias_name":"","mq_id":"MQ_1669716338271","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1669716460635","date_format":false},{"column_name":"BASE_CURRENCY","alias_name":"","mq_id":"MQ_1669716460839","date_format":false},{"column_name":"BASE_AMOUNT","alias_name":"","mq_id":"MQ_1669716461033","date_format":false},{"column_name":"HDR_TOTAL_RECORDS","alias_name":"","mq_id":"MQ_1669716461209","date_format":false},{"column_name":"HDR_TOTAL_AMOUNT","alias_name":"","mq_id":"MQ_1669716488348","date_format":false,"currency_format":true},{"column_name":"HDR_CLEARING_SYSTEM","alias_name":"","mq_id":"MQ_1669716488527","date_format":false},{"column_name":"CHARGE_BEARER","alias_name":"","mq_id":"MQ_1669716488729","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669716578903","date_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"","mq_id":"MQ_1669716579064","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1669716579241","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1669716579389","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1669716601499","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1669716601675","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1669716623271","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1669716623501","date_format":false},{"column_name":"ISSUER_TYPE_CODE","alias_name":"","mq_id":"MQ_1669716639834","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1669718495740","date_format":false},{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1669719333386","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1669719333580","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1669719333798","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1669719336508","date_format":false},{"column_name":"CBS_REF_NO","alias_name":"","mq_id":"MQ_1669721618850","date_format":false},{"column_name":"CBS_POSTING_FLAG","alias_name":"","mq_id":"MQ_1669721627964","date_format":false}],"joins":[]},"eq_text":"SELECT  NPSST_ID,  UETR,  VALUE_DATE,  ACCP_DATE_TIME,  CREATED_DATE,  DATEMI,  EXHF_ID,  CDTR_IBAN,  TENANT_ID,  TRAN_REF_ID,  DEPARTMENT_CODE,  PAYMENT_ENDTOEND_ID,  CLRSYSREF,  CDTR_ACCT_NO,  DBTR_ACCT_NO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  STATUS,  PROCESSING_SYSTEM,  PROCESS_STATUS,  GROUP_NAME,  PROCESS_TYPE,  PAYMENT_MODE,  RULE_GROUP,  NPSSTPL_ID,  DT_CODE,  DTT_CODE,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  MSG_ID,  PROCESS_NAME,  T24_RETURN_CODE ,  CBUAE_RETURN_CODE ,  REVERSAL_CODE,  ADDITIONAL_INFO ,  V_CODE ,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR ,  CHARGE_AMOUNT,  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTRRD_ID,  RR_DT_CODE,  RR_DTT_CODE,  MESSAGE_DATA,  PROCESS_CODE,  PROCESS_DETAIL,  RR_PROCESS_NAME,  RR_MESSAGE_DESC,  DBTR_ACCT_NAME ,  DBTR_PHONE_NO ,  DBTR_EMAIL_ID ,  DBTR_DOCUMENT_ID,  DBTR_IBAN ,  DBTR_CUST_TYPE ,  DBTR_PRVT_ID ,  DBTR_OTHER_ISSUER ,  CDTR_ACCT_NAME ,  CDTR_PHONE_NO ,  CDTR_EMAIL_ID ,  CDTR_DOCUMENT_ID ,  DR_SORT_CODE ,  CR_SORT_CODE ,  CATEGORY_PURPOSE ,  CATEGORY_PURPOSE_PRTY ,  CR_ACCT_IDENTIFICATION ,  BASE_CURRENCY ,  BASE_AMOUNT ,  HDR_TOTAL_RECORDS ,  HDR_TOTAL_AMOUNT,  HDR_CLEARING_SYSTEM ,  CHARGE_BEARER ,  REMITTANCE_INFO ,  ACCOUNT_CURRENCY,  CHANNEL_ID ,  CHANNEL_REFNO ,  CHANNEL_USERID ,  CHANNEL_PRODUCT ,  CHANNEL_SUB_PRODUCT ,  CHANNEL_TRAN_CODE ,  ISSUER_TYPE_CODE,  PROCESS_REF_NO,  RESPONSE_CODE,  CBS_REF_NO,  CBS_POSTING_FLAG FROM  (  SELECT   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,   NT.DEPARTMENT_CODE,   NT.TENANT_ID,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NTPL.STATUS,   NTPL.PROCESSING_SYSTEM,   NTPL.PROCESS_STATUS,   NTPL.GROUP_NAME,   NTPL.PROCESS_TYPE,   NTPL.PAYMENT_MODE,   NTPL.RULE_GROUP,   NTPL.NPSSTPL_ID,   NTPL.DT_CODE,   NTPL.DTT_CODE,   NTPL.REQUEST_DATA_JSON,   NTPL.RESPONSE_DATA_JSON,   NTPL.MSG_ID,   NTPL.PROCESS_NAME,   NTPL.T24_RETURN_CODE ,   NTPL.CBUAE_RETURN_CODE ,   NTPL.REVERSAL_CODE ,   NTPL.ADDITIONAL_INFO ,   NTPL.V_CODE ,   NTPL.AMOUNT_CREDITED,   NTPL.AMT_CR_LOC_CUR ,   NTPL.CHARGE_AMOUNT,   NTPL.PROCESS_REF_NO,   NTPL.RESPONSE_CODE,   CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION,   CONCAT(NTPL.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,   CONCAT(NTPL.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,   RR.NPSSTRRD_ID,   RR.RR_MSG_ID,   RR.PARENT_NPSSTRRD_REFNO,   RR.MESSAGE_DATA,   RR.PROCESS_CODE,   RR.PROCESS_DETAIL,   RR.NPSSTRRD_REFNO,   RR.RR_DT_CODE,   RR.RR_DTT_CODE,   RR.RR_PROCESS_NAME,   RR.RR_MESSAGE_DESC,   NT.DBTR_ACCT_NAME ,   NT.DBTR_PHONE_NO ,   NT.DBTR_EMAIL_ID ,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN ,   NT.DBTR_CUST_TYPE ,   NT.DBTR_PRVT_ID ,   NT.DBTR_OTHER_ISSUER ,   NT.CDTR_ACCT_NAME ,   NT.CDTR_PHONE_NO ,   NT.CDTR_EMAIL_ID ,   NT.CDTR_DOCUMENT_ID ,   NT.DR_SORT_CODE ,   NT.CR_SORT_CODE ,   NT.CATEGORY_PURPOSE ,   NT.CATEGORY_PURPOSE_PRTY ,   NT.CR_ACCT_IDENTIFICATION ,   NT.BASE_CURRENCY ,   NT.BASE_AMOUNT ,   NT.HDR_TOTAL_RECORDS ,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM ,   NT.CHARGE_BEARER ,   NT.REMITTANCE_INFO ,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID ,   NT.CHANNEL_REFNO ,   NT.CHANNEL_USERID ,   NT.CHANNEL_PRODUCT ,   NT.CHANNEL_SUB_PRODUCT ,   NT.CHANNEL_TRAN_CODE ,   NT.ISSUER_TYPE_CODE,   NT.CBS_REF_NO,   NT.CBS_POSTING_FLAG  FROM   NPSS_TRANSACTIONS NT  INNER JOIN (   SELECT    T.NPSSTPL_ID,    T.UETR,    T.STATUS,    T.PROCESSING_SYSTEM,    T.PROCESS_STATUS,    G.GROUP_NAME,    G.PROCESS_TYPE,    G.PAYMENT_MODE,    G.RULE_GROUP,    T.DT_CODE,    T.DTT_CODE,    T.REQUEST_DATA_JSON,    T.RESPONSE_DATA_JSON,    T.MSG_ID,    T.PROCESS_NAME,    T.T24_RETURN_CODE ,    T.CBUAE_RETURN_CODE ,    T.REVERSAL_CODE ,    T.ADDITIONAL_INFO ,    T.V_CODE,    T.AMOUNT_CREDITED,    T.AMT_CR_LOC_CUR,    T.CHARGE_AMOUNT,    T.PROCESS_REF_NO,    T.RESPONSE_CODE   FROM    (    SELECT     A.NPSSTPL_ID,     A.UETR,     A.STATUS,     A.PROCESSING_SYSTEM,     A.PROCESS_STATUS,     A.DT_CODE,     A.DTT_CODE,     A.REQUEST_DATA_JSON,     A.RESPONSE_DATA_JSON,     A.MSG_ID,     A.PROCESS_NAME,     A.T24_RETURN_CODE ,     A.CBUAE_RETURN_CODE ,     A.REVERSAL_CODE ,     A.ADDITIONAL_INFO ,     A.V_CODE ,     A.AMOUNT_CREDITED,     A.AMT_CR_LOC_CUR ,     A.CHARGE_AMOUNT,     A.PROCESS_REF_NO,     A.RESPONSE_CODE,     ROW_NUMBER() OVER(PARTITION BY A.UETR    ORDER BY     A.NPSSTPL_ID DESC) AS ROW_NUM    FROM     NPSS_TRN_PROCESS_LOG A ) T   INNER JOIN CORE_NC_STATUS_GROUP G ON    G.QUEUE_CODE = T.PROCESS_STATUS    AND G.PROCESS_QUEUE_STATUS = T.STATUS   WHERE    T.ROW_NUM = 1) NTPL ON   NT.UETR = NTPL.UETR  LEFT JOIN CORE_NC_CODE_DESCRIPTIONS CCD ON   CCD.CD_CODE = NTPL.REVERSAL_CODE   AND CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'  LEFT JOIN CORE_NC_RETURN_CODES T24RC ON   T24RC.RETURN_CODE = NTPL.T24_RETURN_CODE   AND T24RC.PROCESSING_SYSTEM = 'T24'  LEFT JOIN CORE_NC_RETURN_CODES CBUAERC ON   CBUAERC.RETURN_CODE = NTPL.CBUAE_RETURN_CODE   AND CBUAERC.PROCESSING_SYSTEM = 'CBUAE'  LEFT JOIN (   SELECT    B.NPSSTRRD_ID ,    B.MSG_ID AS RR_MSG_ID,    B.PARENT_NPSSTRRD_REFNO ,    B.MESSAGE_DATA ,    B.PROCESS_CODE ,    B.PROCESS_DETAIL ,    B.NPSSTRRD_REFNO,    B.UETR,    B.DT_CODE AS RR_DT_CODE,    B.DTT_CODE AS RR_DTT_CODE,    B.PROCESS_NAME AS RR_PROCESS_NAME,    B.MESSAGE_DESC AS RR_MESSAGE_DESC,    ROW_NUMBER() OVER(PARTITION BY B.UETR   ORDER BY    B.NPSSTRRD_ID DESC) AS ROW_NUM   FROM    NPSS_TRN_REQ_RESP_DTLS B ) RR ON   RR.UETR = NT.UETR   AND RR.ROW_NUM = 1 ) V $WHERE ORDER BY  NPSST_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Tran processLog LR CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"MI_LEVEL_GROUP_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"INTRBK_STTLM_CUR","binding_name":"INTRBK_STTLM_CUR","binding_value":"","source_name":"MI_LEVEL_INTRBK_STTLM_CUR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"RULE_GROUP","binding_name":"RULE_GROUP","binding_value":"","source_name":"RCT_INWARD_GROUP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"intrbk_sttlm_amnt","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"cdtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"payment_endtoend_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"uetr","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"clrsysref","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.transaction_list.context_menu = []
		this.transaction_list.views = {}
		this.transaction_list.onChangecomponent = new EventEmitter<any>()
		this.transaction_list.show = true
		this.transaction_list.dynamic_param = {}
	
		// Component level properties - "View Dr Cr Details" 
		this.view_dr_cr_details.uictrl_code = "datatable"
		this.view_dr_cr_details.uicgc_desc = "View Dr Cr Details"
		this.view_dr_cr_details.uicgc_code = "uicgc_5"
		this.view_dr_cr_details.params = {"need_search":"N","advance_dynamic_search":"N","need_vertical":"Y"}
		this.view_dr_cr_details.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669179871107","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Processlog LR MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"npsst_id","alias_name":"","mq_id":"MQ_1669178086386","date_format":false},{"column_name":"uetr","alias_name":"","mq_id":"MQ_1669178086562","date_format":false},{"column_name":"value_date","alias_name":"","mq_id":"MQ_1669178086753","date_format":true},{"column_name":"accp_date_time","alias_name":"","mq_id":"MQ_1669178086930","date_format":false},{"column_name":"created_date","alias_name":"","mq_id":"MQ_1669178147671","date_format":false},{"column_name":"exhf_id","alias_name":"","mq_id":"MQ_1669178153368","date_format":false},{"column_name":"cdtr_iban","alias_name":"","mq_id":"MQ_1669178153567","date_format":false},{"column_name":"tran_ref_id","alias_name":"","mq_id":"MQ_1669178153751","date_format":false},{"column_name":"payment_endtoend_id","alias_name":"","mq_id":"MQ_1669178153943","date_format":false},{"column_name":"clrsysref","alias_name":"","mq_id":"MQ_1669178154119","date_format":false},{"column_name":"cdtr_acct_no","alias_name":"","mq_id":"MQ_1669178191046","date_format":false},{"column_name":"dbtr_acct_no","alias_name":"","mq_id":"MQ_1669178191237","date_format":false},{"column_name":"intrbk_sttlm_amnt","alias_name":"","mq_id":"MQ_1669178191445","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1669178191661","date_format":false},{"column_name":"processing_system","alias_name":"","mq_id":"MQ_1669178227517","date_format":false},{"column_name":"process_status","alias_name":"","mq_id":"MQ_1669178227717","date_format":false},{"column_name":"Group_Name","alias_name":"","mq_id":"MQ_1669178227908","date_format":false},{"column_name":"Process_type","alias_name":"","mq_id":"MQ_1669178239274","date_format":false},{"column_name":"payment_mode","alias_name":"","mq_id":"MQ_1669178239466","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1669179866186","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1669179866480","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1669180239582","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1669714936628","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1669714936809","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669714937008","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1669714937193","date_format":false},{"column_name":"RR_MESSAGE_DESC","alias_name":"","mq_id":"MQ_1669714937383","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1669714937535","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028203","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028433","date_format":false},{"column_name":"ADDITIONAL_INFO","alias_name":"","mq_id":"MQ_1669715062065","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1669715075448","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716335899","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716336337","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716336495","date_format":false},{"column_name":"DBTR_CUST_TYPE","alias_name":"","mq_id":"MQ_1669716336659","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669716336826","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669716336982","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669716337154","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716337311","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716337475","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716337634","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337798","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337958","date_format":false},{"column_name":"CATEGORY_PURPOSE","alias_name":"","mq_id":"MQ_1669716338118","date_format":false},{"column_name":"CATEGORY_PURPOSE_PRTY","alias_name":"","mq_id":"MQ_1669716338271","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1669716460635","date_format":false},{"column_name":"BASE_CURRENCY","alias_name":"","mq_id":"MQ_1669716460839","date_format":false},{"column_name":"BASE_AMOUNT","alias_name":"","mq_id":"MQ_1669716461033","date_format":false},{"column_name":"HDR_TOTAL_RECORDS","alias_name":"","mq_id":"MQ_1669716461209","date_format":false},{"column_name":"HDR_TOTAL_AMOUNT","alias_name":"","mq_id":"MQ_1669716488348","date_format":false,"currency_format":true},{"column_name":"HDR_CLEARING_SYSTEM","alias_name":"","mq_id":"MQ_1669716488527","date_format":false},{"column_name":"CHARGE_BEARER","alias_name":"","mq_id":"MQ_1669716488729","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669716578903","date_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"","mq_id":"MQ_1669716579064","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1669716579241","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1669716579389","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1669716601499","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1669716601675","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1669716623271","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1669716623501","date_format":false},{"column_name":"ISSUER_TYPE_CODE","alias_name":"","mq_id":"MQ_1669716639834","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1669718495740","date_format":false},{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1669719333386","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1669719333580","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1669719333798","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1669719336508","date_format":false},{"column_name":"CBS_REF_NO","alias_name":"","mq_id":"MQ_1669721618850","date_format":false},{"column_name":"CBS_POSTING_FLAG","alias_name":"","mq_id":"MQ_1669721627964","date_format":false}],"joins":[]},"eq_text":"SELECT  NPSST_ID,  UETR,  VALUE_DATE,  ACCP_DATE_TIME,  CREATED_DATE,  DATEMI,  EXHF_ID,  CDTR_IBAN,  TENANT_ID,  TRAN_REF_ID,  DEPARTMENT_CODE,  PAYMENT_ENDTOEND_ID,  CLRSYSREF,  CDTR_ACCT_NO,  DBTR_ACCT_NO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  STATUS,  PROCESSING_SYSTEM,  PROCESS_STATUS,  GROUP_NAME,  PROCESS_TYPE,  PAYMENT_MODE,  RULE_GROUP,  NPSSTPL_ID,  DT_CODE,  DTT_CODE,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  MSG_ID,  PROCESS_NAME,  T24_RETURN_CODE ,  CBUAE_RETURN_CODE ,  REVERSAL_CODE,  ADDITIONAL_INFO ,  V_CODE ,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR ,  CHARGE_AMOUNT,  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTRRD_ID,  RR_DT_CODE,  RR_DTT_CODE,  MESSAGE_DATA,  PROCESS_CODE,  PROCESS_DETAIL,  RR_PROCESS_NAME,  RR_MESSAGE_DESC,  DBTR_ACCT_NAME ,  DBTR_PHONE_NO ,  DBTR_EMAIL_ID ,  DBTR_DOCUMENT_ID,  DBTR_IBAN ,  DBTR_CUST_TYPE ,  DBTR_PRVT_ID ,  DBTR_OTHER_ISSUER ,  CDTR_ACCT_NAME ,  CDTR_PHONE_NO ,  CDTR_EMAIL_ID ,  CDTR_DOCUMENT_ID ,  DR_SORT_CODE ,  CR_SORT_CODE ,  CATEGORY_PURPOSE ,  CATEGORY_PURPOSE_PRTY ,  CR_ACCT_IDENTIFICATION ,  BASE_CURRENCY ,  BASE_AMOUNT ,  HDR_TOTAL_RECORDS ,  HDR_TOTAL_AMOUNT,  HDR_CLEARING_SYSTEM ,  CHARGE_BEARER ,  REMITTANCE_INFO ,  ACCOUNT_CURRENCY,  CHANNEL_ID ,  CHANNEL_REFNO ,  CHANNEL_USERID ,  CHANNEL_PRODUCT ,  CHANNEL_SUB_PRODUCT ,  CHANNEL_TRAN_CODE ,  ISSUER_TYPE_CODE,  PROCESS_REF_NO,  RESPONSE_CODE,  CBS_REF_NO,  CBS_POSTING_FLAG FROM  (  SELECT   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,   NT.DEPARTMENT_CODE,   NT.TENANT_ID,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NTPL.STATUS,   NTPL.PROCESSING_SYSTEM,   NTPL.PROCESS_STATUS,   NTPL.GROUP_NAME,   NTPL.PROCESS_TYPE,   NTPL.PAYMENT_MODE,   NTPL.RULE_GROUP,   NTPL.NPSSTPL_ID,   NTPL.DT_CODE,   NTPL.DTT_CODE,   NTPL.REQUEST_DATA_JSON,   NTPL.RESPONSE_DATA_JSON,   NTPL.MSG_ID,   NTPL.PROCESS_NAME,   NTPL.T24_RETURN_CODE ,   NTPL.CBUAE_RETURN_CODE ,   NTPL.REVERSAL_CODE ,   NTPL.ADDITIONAL_INFO ,   NTPL.V_CODE ,   NTPL.AMOUNT_CREDITED,   NTPL.AMT_CR_LOC_CUR ,   NTPL.CHARGE_AMOUNT,   NTPL.PROCESS_REF_NO,   NTPL.RESPONSE_CODE,   CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION,   CONCAT(NTPL.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,   CONCAT(NTPL.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,   RR.NPSSTRRD_ID,   RR.RR_MSG_ID,   RR.PARENT_NPSSTRRD_REFNO,   RR.MESSAGE_DATA,   RR.PROCESS_CODE,   RR.PROCESS_DETAIL,   RR.NPSSTRRD_REFNO,   RR.RR_DT_CODE,   RR.RR_DTT_CODE,   RR.RR_PROCESS_NAME,   RR.RR_MESSAGE_DESC,   NT.DBTR_ACCT_NAME ,   NT.DBTR_PHONE_NO ,   NT.DBTR_EMAIL_ID ,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN ,   NT.DBTR_CUST_TYPE ,   NT.DBTR_PRVT_ID ,   NT.DBTR_OTHER_ISSUER ,   NT.CDTR_ACCT_NAME ,   NT.CDTR_PHONE_NO ,   NT.CDTR_EMAIL_ID ,   NT.CDTR_DOCUMENT_ID ,   NT.DR_SORT_CODE ,   NT.CR_SORT_CODE ,   NT.CATEGORY_PURPOSE ,   NT.CATEGORY_PURPOSE_PRTY ,   NT.CR_ACCT_IDENTIFICATION ,   NT.BASE_CURRENCY ,   NT.BASE_AMOUNT ,   NT.HDR_TOTAL_RECORDS ,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM ,   NT.CHARGE_BEARER ,   NT.REMITTANCE_INFO ,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID ,   NT.CHANNEL_REFNO ,   NT.CHANNEL_USERID ,   NT.CHANNEL_PRODUCT ,   NT.CHANNEL_SUB_PRODUCT ,   NT.CHANNEL_TRAN_CODE ,   NT.ISSUER_TYPE_CODE,   NT.CBS_REF_NO,   NT.CBS_POSTING_FLAG  FROM   NPSS_TRANSACTIONS NT  INNER JOIN (   SELECT    T.NPSSTPL_ID,    T.UETR,    T.STATUS,    T.PROCESSING_SYSTEM,    T.PROCESS_STATUS,    G.GROUP_NAME,    G.PROCESS_TYPE,    G.PAYMENT_MODE,    G.RULE_GROUP,    T.DT_CODE,    T.DTT_CODE,    T.REQUEST_DATA_JSON,    T.RESPONSE_DATA_JSON,    T.MSG_ID,    T.PROCESS_NAME,    T.T24_RETURN_CODE ,    T.CBUAE_RETURN_CODE ,    T.REVERSAL_CODE ,    T.ADDITIONAL_INFO ,    T.V_CODE,    T.AMOUNT_CREDITED,    T.AMT_CR_LOC_CUR,    T.CHARGE_AMOUNT,    T.PROCESS_REF_NO,    T.RESPONSE_CODE   FROM    (    SELECT     A.NPSSTPL_ID,     A.UETR,     A.STATUS,     A.PROCESSING_SYSTEM,     A.PROCESS_STATUS,     A.DT_CODE,     A.DTT_CODE,     A.REQUEST_DATA_JSON,     A.RESPONSE_DATA_JSON,     A.MSG_ID,     A.PROCESS_NAME,     A.T24_RETURN_CODE ,     A.CBUAE_RETURN_CODE ,     A.REVERSAL_CODE ,     A.ADDITIONAL_INFO ,     A.V_CODE ,     A.AMOUNT_CREDITED,     A.AMT_CR_LOC_CUR ,     A.CHARGE_AMOUNT,     A.PROCESS_REF_NO,     A.RESPONSE_CODE,     ROW_NUMBER() OVER(PARTITION BY A.UETR    ORDER BY     A.NPSSTPL_ID DESC) AS ROW_NUM    FROM     NPSS_TRN_PROCESS_LOG A ) T   INNER JOIN CORE_NC_STATUS_GROUP G ON    G.QUEUE_CODE = T.PROCESS_STATUS    AND G.PROCESS_QUEUE_STATUS = T.STATUS   WHERE    T.ROW_NUM = 1) NTPL ON   NT.UETR = NTPL.UETR  LEFT JOIN CORE_NC_CODE_DESCRIPTIONS CCD ON   CCD.CD_CODE = NTPL.REVERSAL_CODE   AND CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'  LEFT JOIN CORE_NC_RETURN_CODES T24RC ON   T24RC.RETURN_CODE = NTPL.T24_RETURN_CODE   AND T24RC.PROCESSING_SYSTEM = 'T24'  LEFT JOIN CORE_NC_RETURN_CODES CBUAERC ON   CBUAERC.RETURN_CODE = NTPL.CBUAE_RETURN_CODE   AND CBUAERC.PROCESSING_SYSTEM = 'CBUAE'  LEFT JOIN (   SELECT    B.NPSSTRRD_ID ,    B.MSG_ID AS RR_MSG_ID,    B.PARENT_NPSSTRRD_REFNO ,    B.MESSAGE_DATA ,    B.PROCESS_CODE ,    B.PROCESS_DETAIL ,    B.NPSSTRRD_REFNO,    B.UETR,    B.DT_CODE AS RR_DT_CODE,    B.DTT_CODE AS RR_DTT_CODE,    B.PROCESS_NAME AS RR_PROCESS_NAME,    B.MESSAGE_DESC AS RR_MESSAGE_DESC,    ROW_NUMBER() OVER(PARTITION BY B.UETR   ORDER BY    B.NPSSTRRD_ID DESC) AS ROW_NUM   FROM    NPSS_TRN_REQ_RESP_DTLS B ) RR ON   RR.UETR = NT.UETR   AND RR.ROW_NUM = 1 ) V $WHERE ORDER BY  NPSST_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS LR Vertical Dr Cr CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Tran Id","target_column":"npsst_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Txn Value Date","target_column":"value_date","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Tran Created Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Acceptance Date Time","target_column":"accp_date_time","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"uetr","target_column":"uetr","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Sort Code","target_column":"CR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"cdtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Number","target_column":"cdtr_acct_no","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Sort Code","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Number","target_column":"dbtr_acct_no","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Private Identification","target_column":"DBTR_PRVT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Other Issuer","target_column":"DBTR_OTHER_ISSUER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Category Purpose","target_column":"CATEGORY_PURPOSE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Issuer Type Code","target_column":"ISSUER_TYPE_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remittance Info","target_column":"REMITTANCE_INFO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.view_dr_cr_details.context_menu = []
		this.view_dr_cr_details.views = {}
		this.view_dr_cr_details.onChangecomponent = new EventEmitter<any>()
		this.view_dr_cr_details.show = true
		this.view_dr_cr_details.dynamic_param = {"column_header_name":"Field","value_header_name":"Value"}
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_7"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS RCT Post PLOG srch","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_rct_post_plog_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_rct_post_plog_srch"
		
		// "Search" Button of "Search" component
		this.search_search.label_name = "Search"
		this.search_search.show = true
		this.search_search.disabled = false
		this.search_search.params = {"icon_only":false,"uicgcc_style":"fa fa-eraser"}
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
	
		// Component level properties - "History Detail" 
		this.history_detail.uictrl_code = "datatable"
		this.history_detail.uicgc_desc = "History Detail"
		this.history_detail.uicgc_code = "uicgc_8"
		this.history_detail.params = {"need_search":"N"}
		this.history_detail.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_8","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669179487737","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"SELECT REVERSAL_DESCRIPTION,        T24_RETURN_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE,        REVERSAL_DESC,        T24_RETURN_DESC,        CBUAE_RETURN_DESC,        TENANT_ID,        DEPARTMENT_CODE,        DT_CODE,        DTT_CODE   FROM (SELECT A.NPSSTPL_ID,                A.MSG_ID,                A.UETR,                A.NPSSTRRD_REFNO,                A.PROCESS_NAME,                A.PROCESSING_SYSTEM,                A.RESPONSE_CODE,                A.PROCESS_REF_NO,                A.RESPONSE_DATA,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS CREATEDDATEMILISEC,                A.CREATED_DATE,                A.PROCESS_STATUS,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.TENANT_ID,                A.REQUEST_DATA_JSON,                A.RESPONSE_DATA_JSON,                A.T24_RETURN_CODE,                NT.DEPARTMENT_CODE,                A.ADDITIONAL_INFO,                T24RC.RETURN_DESCRIPTION AS T24_RETURN_DESC,                CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                A.CBUAE_RETURN_CODE,                CBUAERC.RETURN_DESCRIPTION AS CBUAE_RETURN_DESC,                CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,                A.REVERSAL_CODE,                CCD.CD_DESCRIPTION AS REVERSAL_DESC,                CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION           FROM NPSS_TRN_PROCESS_LOG A           LEFT JOIN <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD ON CCD.CD_CODE =                                                                   A.REVERSAL_CODE                                                               AND CCD.CD_CATEGORY =                                                                   'REVERSAL_REASON_IDENTIFIER_CODE'           LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES T24RC ON T24RC.RETURN_CODE =                                                                A.T24_RETURN_CODE                                                            AND T24RC.PROCESSING_SYSTEM =                                                                'T24'           LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES CBUAERC ON CBUAERC.RETURN_CODE =                                                                  A.CBUAE_RETURN_CODE                                                              AND CBUAERC.PROCESSING_SYSTEM =                                                                  'CBUAE'          INNER JOIN NPSS_TRANSACTIONS NT ON NT.UETR = A.UETR          ORDER BY A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.history_detail.context_menu = []
		this.history_detail.views = {}
		this.history_detail.onChangecomponent = new EventEmitter<any>()
		this.history_detail.show = true
		this.history_detail.dynamic_param = {}
	
		// Component level properties - "Process by System" 
		this.process_by_system.uictrl_code = "chart"
		this.process_by_system.uicgc_desc = "Process by System"
		this.process_by_system.uicgc_code = "uicgc_9"
		this.process_by_system.params = {}
		this.process_by_system.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_9","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669179711260","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Row Processing System MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1669177940929","date_format":false},{"column_name":"PS_COUNT","alias_name":"","mq_id":"MQ_1669177941144","date_format":false}],"joins":[]},"eq_text":"SELECT  PROCESSING_SYSTEM,  COUNT(PROCESSING_SYSTEM) AS PS_COUNT FROM  (  SELECT   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NT.TENANT_ID,   NT.DEPARTMENT_CODE,   NTPL.STATUS,   NTPL.PROCESSING_SYSTEM,   NTPL.PROCESS_STATUS,   NTPL.GROUP_NAME,   NTPL.PROCESS_TYPE,   NTPL.PAYMENT_MODE,   NTPL.RULE_GROUP,   NTPL.NPSSTPL_ID,   NTPL.DT_CODE,   NTPL.DTT_CODE,   NTPL.REQUEST_DATA_JSON,   NTPL.RESPONSE_DATA_JSON,   NTPL.MSG_ID,   NTPL.PROCESS_NAME,   RR.NPSSTRRD_ID,   RR.RR_MSG_ID,   RR.PARENT_NPSSTRRD_REFNO,   RR.MESSAGE_DATA,   RR.PROCESS_CODE,   RR.PROCESS_DETAIL,   RR.NPSSTRRD_REFNO,   RR.RR_DT_CODE,   RR.RR_DTT_CODE,   RR.RR_PROCESS_NAME,   RR.RR_MESSAGE_DESC,   NT.DBTR_ACCT_NAME ,   NT.DBTR_PHONE_NO ,   NT.DBTR_EMAIL_ID ,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN ,   NT.DBTR_CUST_TYPE ,   NT.DBTR_PRVT_ID ,   NT.DBTR_OTHER_ISSUER ,   NT.CDTR_ACCT_NAME ,   NT.CDTR_PHONE_NO ,   NT.CDTR_EMAIL_ID ,   NT.CDTR_DOCUMENT_ID ,   NT.DR_SORT_CODE ,   NT.CR_SORT_CODE ,   NT.CATEGORY_PURPOSE ,   NT.CATEGORY_PURPOSE_PRTY ,   NT.CR_ACCT_IDENTIFICATION ,   NT.BASE_CURRENCY ,   NT.BASE_AMOUNT ,   NT.HDR_TOTAL_RECORDS ,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM ,   NT.CHARGE_BEARER ,   NT.REMITTANCE_INFO ,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID ,   NT.CHANNEL_REFNO ,   NT.CHANNEL_USERID ,   NT.CHANNEL_PRODUCT ,   NT.CHANNEL_SUB_PRODUCT ,   NT.CHANNEL_TRAN_CODE ,   NT.ISSUER_TYPE_CODE  FROM   NPSS_TRANSACTIONS NT  INNER JOIN (   SELECT    T.NPSSTPL_ID,    T.UETR,    T.STATUS,    T.PROCESSING_SYSTEM,    T.PROCESS_STATUS,    G.GROUP_NAME,    G.PROCESS_TYPE,    G.PAYMENT_MODE,    G.RULE_GROUP,    T.DT_CODE,    T.DTT_CODE,    T.REQUEST_DATA_JSON,    T.RESPONSE_DATA_JSON,    T.MSG_ID,    T.PROCESS_NAME   FROM    (    SELECT     A.NPSSTPL_ID,     A.UETR,     A.STATUS,     A.PROCESSING_SYSTEM,     A.PROCESS_NAME,     A.PROCESS_STATUS,     A.DT_CODE,     A.DTT_CODE,     A.REQUEST_DATA_JSON,     A.RESPONSE_DATA_JSON,     A.MSG_ID,     ROW_NUMBER() OVER(PARTITION BY A.UETR    ORDER BY     A.NPSSTPL_ID DESC) AS ROW_NUM    FROM     NPSS_TRN_PROCESS_LOG A) T   INNER JOIN CORE_NC_STATUS_GROUP G ON    G.QUEUE_CODE = T.PROCESS_STATUS    AND G.PROCESS_QUEUE_STATUS = T.STATUS   WHERE    T.ROW_NUM = 1) NTPL ON   NT.UETR = NTPL.UETR  LEFT JOIN (   SELECT    B.NPSSTRRD_ID ,    B.MSG_ID AS RR_MSG_ID,    B.PARENT_NPSSTRRD_REFNO ,    B.MESSAGE_DATA ,    B.PROCESS_CODE ,    B.PROCESS_DETAIL ,    B.NPSSTRRD_REFNO,    B.UETR,    B.DT_CODE AS RR_DT_CODE,    B.DTT_CODE AS RR_DTT_CODE,    B.PROCESS_NAME AS RR_PROCESS_NAME,    B.MESSAGE_DESC AS RR_MESSAGE_DESC,    ROW_NUMBER() OVER(PARTITION BY B.UETR   ORDER BY    B.NPSSTRRD_ID DESC) AS ROW_NUM   FROM    NPSS_TRN_REQ_RESP_DTLS B ) RR ON   RR.UETR = NT.UETR   AND RR.ROW_NUM = 1) V $WHERE GROUP BY  PROCESSING_SYSTEM"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Processing System LR Chart CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"MI_LEVEL_GROUP_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"RULE_GROUP","binding_name":"RULE_GROUP","binding_value":"","source_name":"RCT_INWARD_GROUP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"PS Count","target_column":"PS_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.process_by_system.context_menu = []
		this.process_by_system.views = {}
		this.process_by_system.onChangecomponent = new EventEmitter<any>()
		this.process_by_system.show = true
		this.process_by_system.dynamic_param = {}
	
		// Component level properties - "Process Log UI" 
		this.process_log_ui.uictrl_code = "dynamic_ui"
		this.process_log_ui.uicgc_desc = "Process Log UI"
		this.process_log_ui.uicgc_code = "uicgc_10"
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
	
		// Component level properties - "Single Back UI" 
		this.single_back_ui.uictrl_code = "dynamic_ui"
		this.single_back_ui.uicgc_desc = "Single Back UI"
		this.single_back_ui.uicgc_code = "uicgc_13"
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
	
		// Component level properties - "Message Detail" 
		this.message_detail.uictrl_code = "datatable"
		this.message_detail.uicgc_desc = "Message Detail"
		this.message_detail.uicgc_code = "uicgc_15"
		this.message_detail.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.message_detail.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_15","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669178840143","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1668573850306","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1668573852117","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1668573852786","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1668573853731","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1668573854459","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1668573869044","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1668573871186","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573874178","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573876315","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668573884586","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1668573900766","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1668573911947","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1668573917043","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1668573918291","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1668573918796","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1668573919355","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1668573919955","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1668573925605","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1668587107858","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSTRRD_ID,        MSG_ID,        UETR,        PARENT_NPSSTRRD_REFNO,        NPSSTRRD_REFNO,        PROCESS_CODE,        PROCESS_DETAIL,        EXHF_ID,        PROCESS_NAME,        MESSAGE_DESC,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        STATUS,        PROCESS_STATUS,        MESSAGE_DATA,        CREATEDDATEMILISEC,        DT_CODE,        DTT_CODE   FROM (SELECT NPSSTRRD.NPSSTRRD_ID,                NPSSTRRD.MSG_ID,                NPSSTRRD.UETR,                NPSSTRRD.PARENT_NPSSTRRD_REFNO,                NPSSTRRD.NPSSTRRD_REFNO,                NPSSTRRD.MESSAGE_DATA,                NPSSTRRD.PROCESS_CODE,                NPSSTRRD.PROCESS_DETAIL,                NPSSTRRD.EXHF_ID,                NPSSTRRD.PROCESS_NAME,                NPSSTRRD.MESSAGE_DESC,                NPSSTRRD.CHANNEL_ID,                NPSSTRRD.CHANNEL_REFNO,                NPSSTRRD.CHANNEL_USERID,                NPSSTRRD.CHANNEL_PRODUCT,                NPSSTRRD.CHANNEL_SUB_PRODUCT,                NPSSTRRD.CHANNEL_TRAN_CODE,                NPSSTRRD.CREATED_BY,                NPSSTRRD.CREATED_BY_NAME,                NPSSTRRD.CREATED_DATE,                NPSSTRRD.DT_CODE,                NPSSTRRD.DT_DESCRIPTION,                NPSSTRRD.DTT_CODE,                NPSSTRRD.DTT_DESCRIPTION,                NPSSTRRD.MODIFIED_BY,                NPSSTRRD.MODIFIED_BY_NAME,                NPSSTRRD.MODIFIED_DATE,                NPSSTRRD.STATUS,                NPSSTRRD.PROCESS_STATUS,                NPSSTRRD.SYSTEM_ID,                NPSSTRRD.SYSTEM_NAME,                NPSSTRRD.TENANT_ID,                NPSSTRRD.APP_ID,                NPSSTRRD.VERSION_NO,                TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC           FROM NPSS_TRN_REQ_RESP_DTLS NPSSTRRD) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS REQ RES CCD","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.message_detail.context_menu = []
		this.message_detail.views = {}
		this.message_detail.onChangecomponent = new EventEmitter<any>()
		this.message_detail.show = true
		this.message_detail.dynamic_param = {}
	
		// Component level properties - "Message Back UI" 
		this.message_back_ui.uictrl_code = "dynamic_ui"
		this.message_back_ui.uicgc_desc = "Message Back UI"
		this.message_back_ui.uicgc_code = "uicgc_16"
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
		this.message_detail_action.uicgc_code = "uicgc_17"
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
	
		// Component level properties - "Summary List" 
		this.summary_list.uictrl_code = "datatable"
		this.summary_list.uicgc_desc = "Summary List"
		this.summary_list.uicgc_code = "uicgc_18"
		this.summary_list.params = {"need_search":"N"}
		this.summary_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_18","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669187492810","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Tran Summary LR MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"GROUP_NAME","alias_name":"","mq_id":"MQ_1669187361763","date_format":false},{"column_name":"TOTAL_AMOUNT","alias_name":"","mq_id":"MQ_1669187362209","date_format":false},{"column_name":"TOTAL_TRAN_COUNT","alias_name":"","mq_id":"MQ_1669187362417","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1669529663983","date_format":false}],"joins":[]},"eq_text":"select  GROUP_NAME,  INTRBK_STTLM_CUR,  SUM(INTRBK_STTLM_AMNT) as TOTAL_AMOUNT,  COUNT(NPSST_ID) as TOTAL_TRAN_COUNT from  (  select   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   NT.TENANT_ID,   NT.DEPARTMENT_CODE,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NTPL.STATUS,   NTPL.PROCESSING_SYSTEM,   NTPL.PROCESS_STATUS,   NTPL.GROUP_NAME,   NTPL.PROCESS_TYPE,   NTPL.PAYMENT_MODE,   NTPL.RULE_GROUP,   NTPL.NPSSTPL_ID,   NTPL.DT_CODE,   NTPL.DTT_CODE,   NTPL.REQUEST_DATA_JSON,   NTPL.RESPONSE_DATA_JSON,   NTPL.MSG_ID,   NTPL.PROCESS_NAME,   RR.NPSSTRRD_ID,   RR.RR_MSG_ID,   RR.PARENT_NPSSTRRD_REFNO,   RR.MESSAGE_DATA,   RR.PROCESS_CODE,   RR.PROCESS_DETAIL,   RR.NPSSTRRD_REFNO,   RR.RR_DT_CODE,   RR.RR_DTT_CODE,   RR.RR_PROCESS_NAME,   RR.RR_MESSAGE_DESC,   NT.DBTR_ACCT_NAME ,   NT.DBTR_PHONE_NO ,   NT.DBTR_EMAIL_ID ,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN ,   NT.DBTR_CUST_TYPE ,   NT.DBTR_PRVT_ID ,   NT.DBTR_OTHER_ISSUER ,   NT.CDTR_ACCT_NAME ,   NT.CDTR_PHONE_NO ,   NT.CDTR_EMAIL_ID ,   NT.CDTR_DOCUMENT_ID ,   NT.DR_SORT_CODE ,   NT.CR_SORT_CODE ,   NT.CATEGORY_PURPOSE ,   NT.CATEGORY_PURPOSE_PRTY ,   NT.CR_ACCT_IDENTIFICATION ,   NT.BASE_CURRENCY ,   NT.BASE_AMOUNT ,   NT.HDR_TOTAL_RECORDS ,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM ,   NT.CHARGE_BEARER ,   NT.REMITTANCE_INFO ,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID ,   NT.CHANNEL_REFNO ,   NT.CHANNEL_USERID ,   NT.CHANNEL_PRODUCT ,   NT.CHANNEL_SUB_PRODUCT ,   NT.CHANNEL_TRAN_CODE ,   NT.ISSUER_TYPE_CODE  from   NPSS_TRANSACTIONS NT  inner join (   select    T.NPSSTPL_ID,    T.UETR,    T.STATUS,    T.PROCESSING_SYSTEM,    T.PROCESS_STATUS,    G.GROUP_NAME,    G.PROCESS_TYPE,    G.PAYMENT_MODE,    G.RULE_GROUP,    T.DT_CODE,    T.DTT_CODE,    T.REQUEST_DATA_JSON,    T.RESPONSE_DATA_JSON,    T.MSG_ID,    T.PROCESS_NAME   from    (    select     A.NPSSTPL_ID,     A.UETR,     A.STATUS,     A.PROCESSING_SYSTEM,     A.PROCESS_STATUS,     A.DT_CODE,     A.DTT_CODE,     A.REQUEST_DATA_JSON,     A.RESPONSE_DATA_JSON,     A.MSG_ID,     A.PROCESS_NAME,     row_number() over(partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A) T   inner join CORE_NC_STATUS_GROUP G on    G.QUEUE_CODE = T.PROCESS_STATUS    and G.PROCESS_QUEUE_STATUS = T.STATUS   where    T.ROW_NUM = 1) NTPL on   NT.UETR = NTPL.UETR  left join (   select    B.NPSSTRRD_ID ,    B.MSG_ID as RR_MSG_ID,    B.PARENT_NPSSTRRD_REFNO ,    B.MESSAGE_DATA ,    B.PROCESS_CODE ,    B.PROCESS_DETAIL ,    B.NPSSTRRD_REFNO,    B.UETR,    B.DT_CODE as RR_DT_CODE,    B.DTT_CODE as RR_DTT_CODE,    B.PROCESS_NAME as RR_PROCESS_NAME,    B.MESSAGE_DESC as RR_MESSAGE_DESC,    row_number() over(partition by B.UETR   order by    B.NPSSTRRD_ID desc) as ROW_NUM   from    NPSS_TRN_REQ_RESP_DTLS B ) RR on   RR.UETR = NT.UETR   and RR.ROW_NUM = 1) V $WHERE group by  GROUP_NAME,  INTRBK_STTLM_CUR"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Tran Summary LR CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"MI_LEVEL_GROUP_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"RULE_GROUP","binding_name":"RULE_GROUP","binding_value":"","source_name":"RCT_INWARD_GROUP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Group Name","target_column":"GROUP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Total Amount","target_column":"TOTAL_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Total Tran Count","target_column":"TOTAL_TRAN_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.summary_list.context_menu = []
		this.summary_list.views = {}
		this.summary_list.onChangecomponent = new EventEmitter<any>()
		this.summary_list.show = true
		this.summary_list.dynamic_param = {}
	
		// Component level properties - "View Payment Details" 
		this.view_payment_details.uictrl_code = "datatable"
		this.view_payment_details.uicgc_desc = "View Payment Details"
		this.view_payment_details.uicgc_code = "uicgc_19"
		this.view_payment_details.params = {"need_search":"N","need_vertical":"Y"}
		this.view_payment_details.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_19","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669209378559","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Processlog LR MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"npsst_id","alias_name":"","mq_id":"MQ_1669178086386","date_format":false},{"column_name":"uetr","alias_name":"","mq_id":"MQ_1669178086562","date_format":false},{"column_name":"value_date","alias_name":"","mq_id":"MQ_1669178086753","date_format":true},{"column_name":"accp_date_time","alias_name":"","mq_id":"MQ_1669178086930","date_format":false},{"column_name":"created_date","alias_name":"","mq_id":"MQ_1669178147671","date_format":false},{"column_name":"exhf_id","alias_name":"","mq_id":"MQ_1669178153368","date_format":false},{"column_name":"cdtr_iban","alias_name":"","mq_id":"MQ_1669178153567","date_format":false},{"column_name":"tran_ref_id","alias_name":"","mq_id":"MQ_1669178153751","date_format":false},{"column_name":"payment_endtoend_id","alias_name":"","mq_id":"MQ_1669178153943","date_format":false},{"column_name":"clrsysref","alias_name":"","mq_id":"MQ_1669178154119","date_format":false},{"column_name":"cdtr_acct_no","alias_name":"","mq_id":"MQ_1669178191046","date_format":false},{"column_name":"dbtr_acct_no","alias_name":"","mq_id":"MQ_1669178191237","date_format":false},{"column_name":"intrbk_sttlm_amnt","alias_name":"","mq_id":"MQ_1669178191445","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1669178191661","date_format":false},{"column_name":"processing_system","alias_name":"","mq_id":"MQ_1669178227517","date_format":false},{"column_name":"process_status","alias_name":"","mq_id":"MQ_1669178227717","date_format":false},{"column_name":"Group_Name","alias_name":"","mq_id":"MQ_1669178227908","date_format":false},{"column_name":"Process_type","alias_name":"","mq_id":"MQ_1669178239274","date_format":false},{"column_name":"payment_mode","alias_name":"","mq_id":"MQ_1669178239466","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1669179866186","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1669179866480","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1669180239582","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1669714936628","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1669714936809","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669714937008","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1669714937193","date_format":false},{"column_name":"RR_MESSAGE_DESC","alias_name":"","mq_id":"MQ_1669714937383","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1669714937535","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028203","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028433","date_format":false},{"column_name":"ADDITIONAL_INFO","alias_name":"","mq_id":"MQ_1669715062065","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1669715075448","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716335899","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716336337","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716336495","date_format":false},{"column_name":"DBTR_CUST_TYPE","alias_name":"","mq_id":"MQ_1669716336659","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669716336826","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669716336982","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669716337154","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716337311","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716337475","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716337634","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337798","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337958","date_format":false},{"column_name":"CATEGORY_PURPOSE","alias_name":"","mq_id":"MQ_1669716338118","date_format":false},{"column_name":"CATEGORY_PURPOSE_PRTY","alias_name":"","mq_id":"MQ_1669716338271","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1669716460635","date_format":false},{"column_name":"BASE_CURRENCY","alias_name":"","mq_id":"MQ_1669716460839","date_format":false},{"column_name":"BASE_AMOUNT","alias_name":"","mq_id":"MQ_1669716461033","date_format":false},{"column_name":"HDR_TOTAL_RECORDS","alias_name":"","mq_id":"MQ_1669716461209","date_format":false},{"column_name":"HDR_TOTAL_AMOUNT","alias_name":"","mq_id":"MQ_1669716488348","date_format":false,"currency_format":true},{"column_name":"HDR_CLEARING_SYSTEM","alias_name":"","mq_id":"MQ_1669716488527","date_format":false},{"column_name":"CHARGE_BEARER","alias_name":"","mq_id":"MQ_1669716488729","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669716578903","date_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"","mq_id":"MQ_1669716579064","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1669716579241","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1669716579389","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1669716601499","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1669716601675","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1669716623271","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1669716623501","date_format":false},{"column_name":"ISSUER_TYPE_CODE","alias_name":"","mq_id":"MQ_1669716639834","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1669718495740","date_format":false},{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1669719333386","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1669719333580","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1669719333798","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1669719336508","date_format":false},{"column_name":"CBS_REF_NO","alias_name":"","mq_id":"MQ_1669721618850","date_format":false},{"column_name":"CBS_POSTING_FLAG","alias_name":"","mq_id":"MQ_1669721627964","date_format":false}],"joins":[]},"eq_text":"SELECT  NPSST_ID,  UETR,  VALUE_DATE,  ACCP_DATE_TIME,  CREATED_DATE,  DATEMI,  EXHF_ID,  CDTR_IBAN,  TENANT_ID,  TRAN_REF_ID,  DEPARTMENT_CODE,  PAYMENT_ENDTOEND_ID,  CLRSYSREF,  CDTR_ACCT_NO,  DBTR_ACCT_NO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  STATUS,  PROCESSING_SYSTEM,  PROCESS_STATUS,  GROUP_NAME,  PROCESS_TYPE,  PAYMENT_MODE,  RULE_GROUP,  NPSSTPL_ID,  DT_CODE,  DTT_CODE,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  MSG_ID,  PROCESS_NAME,  T24_RETURN_CODE ,  CBUAE_RETURN_CODE ,  REVERSAL_CODE,  ADDITIONAL_INFO ,  V_CODE ,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR ,  CHARGE_AMOUNT,  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTRRD_ID,  RR_DT_CODE,  RR_DTT_CODE,  MESSAGE_DATA,  PROCESS_CODE,  PROCESS_DETAIL,  RR_PROCESS_NAME,  RR_MESSAGE_DESC,  DBTR_ACCT_NAME ,  DBTR_PHONE_NO ,  DBTR_EMAIL_ID ,  DBTR_DOCUMENT_ID,  DBTR_IBAN ,  DBTR_CUST_TYPE ,  DBTR_PRVT_ID ,  DBTR_OTHER_ISSUER ,  CDTR_ACCT_NAME ,  CDTR_PHONE_NO ,  CDTR_EMAIL_ID ,  CDTR_DOCUMENT_ID ,  DR_SORT_CODE ,  CR_SORT_CODE ,  CATEGORY_PURPOSE ,  CATEGORY_PURPOSE_PRTY ,  CR_ACCT_IDENTIFICATION ,  BASE_CURRENCY ,  BASE_AMOUNT ,  HDR_TOTAL_RECORDS ,  HDR_TOTAL_AMOUNT,  HDR_CLEARING_SYSTEM ,  CHARGE_BEARER ,  REMITTANCE_INFO ,  ACCOUNT_CURRENCY,  CHANNEL_ID ,  CHANNEL_REFNO ,  CHANNEL_USERID ,  CHANNEL_PRODUCT ,  CHANNEL_SUB_PRODUCT ,  CHANNEL_TRAN_CODE ,  ISSUER_TYPE_CODE,  PROCESS_REF_NO,  RESPONSE_CODE,  CBS_REF_NO,  CBS_POSTING_FLAG FROM  (  SELECT   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,   NT.DEPARTMENT_CODE,   NT.TENANT_ID,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NTPL.STATUS,   NTPL.PROCESSING_SYSTEM,   NTPL.PROCESS_STATUS,   NTPL.GROUP_NAME,   NTPL.PROCESS_TYPE,   NTPL.PAYMENT_MODE,   NTPL.RULE_GROUP,   NTPL.NPSSTPL_ID,   NTPL.DT_CODE,   NTPL.DTT_CODE,   NTPL.REQUEST_DATA_JSON,   NTPL.RESPONSE_DATA_JSON,   NTPL.MSG_ID,   NTPL.PROCESS_NAME,   NTPL.T24_RETURN_CODE ,   NTPL.CBUAE_RETURN_CODE ,   NTPL.REVERSAL_CODE ,   NTPL.ADDITIONAL_INFO ,   NTPL.V_CODE ,   NTPL.AMOUNT_CREDITED,   NTPL.AMT_CR_LOC_CUR ,   NTPL.CHARGE_AMOUNT,   NTPL.PROCESS_REF_NO,   NTPL.RESPONSE_CODE,   CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION,   CONCAT(NTPL.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,   CONCAT(NTPL.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,   RR.NPSSTRRD_ID,   RR.RR_MSG_ID,   RR.PARENT_NPSSTRRD_REFNO,   RR.MESSAGE_DATA,   RR.PROCESS_CODE,   RR.PROCESS_DETAIL,   RR.NPSSTRRD_REFNO,   RR.RR_DT_CODE,   RR.RR_DTT_CODE,   RR.RR_PROCESS_NAME,   RR.RR_MESSAGE_DESC,   NT.DBTR_ACCT_NAME ,   NT.DBTR_PHONE_NO ,   NT.DBTR_EMAIL_ID ,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN ,   NT.DBTR_CUST_TYPE ,   NT.DBTR_PRVT_ID ,   NT.DBTR_OTHER_ISSUER ,   NT.CDTR_ACCT_NAME ,   NT.CDTR_PHONE_NO ,   NT.CDTR_EMAIL_ID ,   NT.CDTR_DOCUMENT_ID ,   NT.DR_SORT_CODE ,   NT.CR_SORT_CODE ,   NT.CATEGORY_PURPOSE ,   NT.CATEGORY_PURPOSE_PRTY ,   NT.CR_ACCT_IDENTIFICATION ,   NT.BASE_CURRENCY ,   NT.BASE_AMOUNT ,   NT.HDR_TOTAL_RECORDS ,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM ,   NT.CHARGE_BEARER ,   NT.REMITTANCE_INFO ,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID ,   NT.CHANNEL_REFNO ,   NT.CHANNEL_USERID ,   NT.CHANNEL_PRODUCT ,   NT.CHANNEL_SUB_PRODUCT ,   NT.CHANNEL_TRAN_CODE ,   NT.ISSUER_TYPE_CODE,   NT.CBS_REF_NO,   NT.CBS_POSTING_FLAG  FROM   NPSS_TRANSACTIONS NT  INNER JOIN (   SELECT    T.NPSSTPL_ID,    T.UETR,    T.STATUS,    T.PROCESSING_SYSTEM,    T.PROCESS_STATUS,    G.GROUP_NAME,    G.PROCESS_TYPE,    G.PAYMENT_MODE,    G.RULE_GROUP,    T.DT_CODE,    T.DTT_CODE,    T.REQUEST_DATA_JSON,    T.RESPONSE_DATA_JSON,    T.MSG_ID,    T.PROCESS_NAME,    T.T24_RETURN_CODE ,    T.CBUAE_RETURN_CODE ,    T.REVERSAL_CODE ,    T.ADDITIONAL_INFO ,    T.V_CODE,    T.AMOUNT_CREDITED,    T.AMT_CR_LOC_CUR,    T.CHARGE_AMOUNT,    T.PROCESS_REF_NO,    T.RESPONSE_CODE   FROM    (    SELECT     A.NPSSTPL_ID,     A.UETR,     A.STATUS,     A.PROCESSING_SYSTEM,     A.PROCESS_STATUS,     A.DT_CODE,     A.DTT_CODE,     A.REQUEST_DATA_JSON,     A.RESPONSE_DATA_JSON,     A.MSG_ID,     A.PROCESS_NAME,     A.T24_RETURN_CODE ,     A.CBUAE_RETURN_CODE ,     A.REVERSAL_CODE ,     A.ADDITIONAL_INFO ,     A.V_CODE ,     A.AMOUNT_CREDITED,     A.AMT_CR_LOC_CUR ,     A.CHARGE_AMOUNT,     A.PROCESS_REF_NO,     A.RESPONSE_CODE,     ROW_NUMBER() OVER(PARTITION BY A.UETR    ORDER BY     A.NPSSTPL_ID DESC) AS ROW_NUM    FROM     NPSS_TRN_PROCESS_LOG A ) T   INNER JOIN CORE_NC_STATUS_GROUP G ON    G.QUEUE_CODE = T.PROCESS_STATUS    AND G.PROCESS_QUEUE_STATUS = T.STATUS   WHERE    T.ROW_NUM = 1) NTPL ON   NT.UETR = NTPL.UETR  LEFT JOIN CORE_NC_CODE_DESCRIPTIONS CCD ON   CCD.CD_CODE = NTPL.REVERSAL_CODE   AND CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'  LEFT JOIN CORE_NC_RETURN_CODES T24RC ON   T24RC.RETURN_CODE = NTPL.T24_RETURN_CODE   AND T24RC.PROCESSING_SYSTEM = 'T24'  LEFT JOIN CORE_NC_RETURN_CODES CBUAERC ON   CBUAERC.RETURN_CODE = NTPL.CBUAE_RETURN_CODE   AND CBUAERC.PROCESSING_SYSTEM = 'CBUAE'  LEFT JOIN (   SELECT    B.NPSSTRRD_ID ,    B.MSG_ID AS RR_MSG_ID,    B.PARENT_NPSSTRRD_REFNO ,    B.MESSAGE_DATA ,    B.PROCESS_CODE ,    B.PROCESS_DETAIL ,    B.NPSSTRRD_REFNO,    B.UETR,    B.DT_CODE AS RR_DT_CODE,    B.DTT_CODE AS RR_DTT_CODE,    B.PROCESS_NAME AS RR_PROCESS_NAME,    B.MESSAGE_DESC AS RR_MESSAGE_DESC,    ROW_NUMBER() OVER(PARTITION BY B.UETR   ORDER BY    B.NPSSTRRD_ID DESC) AS ROW_NUM   FROM    NPSS_TRN_REQ_RESP_DTLS B ) RR ON   RR.UETR = NT.UETR   AND RR.ROW_NUM = 1 ) V $WHERE ORDER BY  NPSST_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS LR Vertical Payment CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"intrbk_sttlm_amnt","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Batch Id","target_column":"exhf_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"clrsysref","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E reference id","target_column":"payment_endtoend_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Ref ID","target_column":"tran_ref_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBS Reference Number","target_column":"CBS_REF_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message ID","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Description","target_column":"RR_MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Code","target_column":"PROCESS_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Reference Number","target_column":"PROCESS_REF_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"processing_system","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Additional Information","target_column":"ADDITIONAL_INFO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Code & Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Code & Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Code & Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"process_status","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.view_payment_details.context_menu = []
		this.view_payment_details.views = {}
		this.view_payment_details.onChangecomponent = new EventEmitter<any>()
		this.view_payment_details.show = true
		this.view_payment_details.dynamic_param = {}
	
		// Component level properties - "Main Message Detail UI" 
		this.main_message_detail_ui.uictrl_code = "dynamic_ui"
		this.main_message_detail_ui.uicgc_desc = "Main Message Detail UI"
		this.main_message_detail_ui.uicgc_code = "uicgc_20"
		this.main_message_detail_ui.params = {}
		this.main_message_detail_ui.datasource = {}
		this.main_message_detail_ui.context_menu = []
		this.main_message_detail_ui.views = {"first":"DTT_1304_1665903906193","is_tab_mode":"N","dtt_1304_1665903906193":{"0":[{"dttv_id":"NPSS Main Page Message Detail UI","tab_order":0,"tab_name":"","uicgc_description":"Main Message Detail UI","role_description":"default","dtt_description":"NPSS TRN REQ RESP DTLS"}]}}
		this.main_message_detail_ui.onChangecomponent = new EventEmitter<any>()
		this.main_message_detail_ui.show = true
		this.main_message_detail_ui.dynamic_param = {}
		this.main_message_detail_ui.f_npss_main_page_message_detail_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.main_message_detail_ui.form_name = "f_npss_main_page_message_detail_ui"
	
		// Component level properties - "Main Request UI" 
		this.main_request_ui.uictrl_code = "dynamic_ui"
		this.main_request_ui.uicgc_desc = "Main Request UI"
		this.main_request_ui.uicgc_code = "uicgc_21"
		this.main_request_ui.params = {}
		this.main_request_ui.datasource = {}
		this.main_request_ui.context_menu = []
		this.main_request_ui.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS Target Main Page Request UI","tab_order":0,"tab_name":"","uicgc_description":"Main Request UI","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.main_request_ui.onChangecomponent = new EventEmitter<any>()
		this.main_request_ui.show = true
		this.main_request_ui.dynamic_param = {}
		this.main_request_ui.f_npss_target_main_page_request_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.main_request_ui.form_name = "f_npss_target_main_page_request_ui"
	
		// Component level properties - "Main Response UI" 
		this.main_response_ui.uictrl_code = "dynamic_ui"
		this.main_response_ui.uicgc_desc = "Main Response UI"
		this.main_response_ui.uicgc_code = "uicgc_22"
		this.main_response_ui.params = {}
		this.main_response_ui.datasource = {}
		this.main_response_ui.context_menu = []
		this.main_response_ui.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS Target Main Page Response UI","tab_order":0,"tab_name":"","uicgc_description":"Main Response UI","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.main_response_ui.onChangecomponent = new EventEmitter<any>()
		this.main_response_ui.show = true
		this.main_response_ui.dynamic_param = {}
		this.main_response_ui.f_npss_target_main_page_response_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.main_response_ui.form_name = "f_npss_target_main_page_response_ui"
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__de_for_vlh_from_pl()
		this.page_load__he_for_pl_to_vm()
		this.page_load__de_for_pl_to_vm()
		this.page_load__routing_key()
		this.page_load__he_from_page_load_to_trg_disable_view_data_action()
	}

	//Handler for INTERNAL event of "routing key"
	routing_key__internal(parent_event_result){
		this.routing_key__cf_for_pl(parent_event_result)
	}

	//Handler for INTERNAL event of "cf for pl"
	cf_for_pl__internal(parent_event_result){
		this.cf_for_pl__show_hide_ide_process(parent_event_result)
	}

	//Handler for INTERNAL event of "show hide ide process"
	show_hide_ide_process__internal(parent_event_result){
		this.show_hide_ide_process__trigger_btn_click_to_search(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__ssp_for_chart()
		this.search_search__cu_for_tl()
		this.search_search__cp_for_search()
		this.search_search__de_from_search_to_view_detail()
		this.search_search__de_from_search_to_view_log_hst()
		this.search_search__de_from_search_to_view_message_details()
	}

	//Handler for INTERNAL event of "ssp for chart"
	ssp_for_chart__internal(parent_event_result){
		this.ssp_for_chart__brfq_for_chart(parent_event_result)
		this.ssp_for_chart__brfq_for_sl_chart(parent_event_result)
		this.ssp_for_chart__brfq_from_search_to_summary_list(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "status by group"
	status_by_group__selection_changed(){
		this.status_by_group__svm_for_chart()
	}

	//Handler for INTERNAL event of "ssp for tran table"
	ssp_for_tran_table__internal(parent_event_result){
		this.ssp_for_tran_table__brfq_for_sl_chart(parent_event_result)
		this.ssp_for_tran_table__brfq_from_group_chart_to_summary_list(parent_event_result)
	}

	//Handler for INTERNAL event of "svm for chart"
	svm_for_chart__internal(parent_event_result){
		this.svm_for_chart__cc_from_tran_level_chart(parent_event_result)
		this.svm_for_chart__tbc_to_status(parent_event_result)
	}

	//Handler for INTERNAL event of "cc from tran level chart"
	cc_from_tran_level_chart__internal(parent_event_result){
		this.cc_from_tran_level_chart__ssp_for_tran_table(parent_event_result)
		this.cc_from_tran_level_chart__cui_tran_from_group_chart()
	}

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__selection_changed(){
		this.transaction_list__ee_for_view_detail_btn()
		this.transaction_list__svm_for_tran_list()
		this.transaction_list__ee_for_vlh()
		this.transaction_list__ee_for_vm()
		this.transaction_list__ee_from_tran_to_main_view_msg()
		this.transaction_list__ssr_main_tran_to_main_response_ui()
		this.transaction_list__ee_from_tran_to_main_view_resp()
		this.transaction_list__ee_from_tran_to_main_view_req()
		this.transaction_list__bt_main_tran_to_main_message_ui()
	}

	//Handler for INTERNAL event of "svm for tran list"
	svm_for_tran_list__internal(parent_event_result){
		this.svm_for_tran_list__cc_from_transaction_list(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view tran"
	navigation_ui_view_tran__action_button_click(){
		this.navigation_ui_view_tran__sp_for_vl()
		this.navigation_ui_view_tran__brfq_for_view_tl_cr_dr()
		this.navigation_ui_view_tran__brfq_for_view_tl_payment()
	}

	//Handler for ACTION_BUTTON_CLICK event of "back ui back"
	back_ui_back__action_button_click(){
		this.back_ui_back__sp_for_back()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__cu_for_search()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__action_button_click(){
		this.navigation_ui_search__cu_for_navigation_search()
		this.navigation_ui_search__spap_for_search()
		this.navigation_ui_search__disable_by_click_on_nav_search()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view log history"
	navigation_ui_view_log_history__action_button_click(){
		this.navigation_ui_view_log_history__brfq_for_hdl()
		this.navigation_ui_view_log_history__sp_for_vlh()
	}

	//Handler for INTERNAL event of "brfq for hdl"
	brfq_for_hdl__internal(parent_event_result){
		this.brfq_for_hdl__sfr_for_history_detail(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui reset"
	navigation_ui_reset__action_button_click(){
		this.navigation_ui_reset__rs_for_reset_btn()
	}

	//Handler for SELECTION_CHANGED event of "process by system"
	process_by_system__selection_changed(){
		this.process_by_system__svm_for_ssl_chart()
	}

	//Handler for INTERNAL event of "svm for ssl chart"
	svm_for_ssl_chart__internal(parent_event_result){
		this.svm_for_ssl_chart__cc_from_summary_status_level(parent_event_result)
		this.svm_for_ssl_chart__e_1669647944011(parent_event_result)
	}

	//Handler for INTERNAL event of "cc from summary status level"
	cc_from_summary_status_level__internal(parent_event_result){
		this.cc_from_summary_status_level__ssp_for_ssl_chart_to_stl_chart(parent_event_result)
		this.cc_from_summary_status_level__cui_tran_from_ps_chart()
	}

	//Handler for INTERNAL event of "ssp for ssl chart to stl chart"
	ssp_for_ssl_chart_to_stl_chart__internal(parent_event_result){
		this.ssp_for_ssl_chart_to_stl_chart__brfq_from_ps_chart_to_summary_list(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view request"
	process_log_ui_view_request__action_button_click(){
		this.process_log_ui_view_request__sp_for_view_request_btn()
		this.process_log_ui_view_request__bt_from_view_req_to_req_ui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view response"
	process_log_ui_view_response__action_button_click(){
		this.process_log_ui_view_response__sp_for_response_btn()
		this.process_log_ui_view_response__bt_from_view_response_to_response_ui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "single back ui back"
	single_back_ui_back__action_button_click(){
		this.single_back_ui_back__sp_for_reqres()
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui back"
	process_log_ui_back__action_button_click(){
		this.process_log_ui_back__sp_to_main_layout()
	}

	//Handler for SELECTION_CHANGED event of "message detail"
	message_detail__selection_changed(){
		this.message_detail__ssr_for_mgsgs()
		this.message_detail__ee_from_message_detail_to_show_message()
	}

	//Handler for ACTION_BUTTON_CLICK event of "message back ui back"
	message_back_ui_back__action_button_click(){
		this.message_back_ui_back__sp_for_message_back()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view message history"
	navigation_ui_view_message_history__action_button_click(){
		this.navigation_ui_view_message_history__sp_for_vm()
		this.navigation_ui_view_message_history__brfq_for_vm()
	}

	//Handler for INTERNAL event of "brfq for vm"
	brfq_for_vm__internal(parent_event_result){
		this.brfq_for_vm__sfr_for_md(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "message detail action view message"
	message_detail_action_view_message__action_button_click(){
		this.message_detail_action_view_message__sp_for_view_message_data()
		this.message_detail_action_view_message__bt_for_mgsg()
	}

	//Handler for ACTION_BUTTON_CLICK event of "message detail action back"
	message_detail_action_back__action_button_click(){
		this.message_detail_action_back__mda_forsp()
	}

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__selection_changed(){
		this.history_detail__ee_from_history_detail_to_view_req()
		this.history_detail__ee_from_history_detail_to_view_reaponse()
		this.history_detail__ssr_from_hd_to_req()
		this.history_detail__ssr_from_hd_to_response()
	}

	//Handler for SELECTION_CHANGED event of "summary list"
	summary_list__selection_changed(){
		this.summary_list__svm_for_summary_list()
	}

	//Handler for INTERNAL event of "svm for summary list"
	svm_for_summary_list__internal(parent_event_result){
		this.svm_for_summary_list__cc_show_hide_from_summary_list(parent_event_result)
	}

	//Handler for INTERNAL event of "cc show hide from summary list"
	cc_show_hide_from_summary_list__internal(parent_event_result){
		this.cc_show_hide_from_summary_list__ssp_from_summary_list(parent_event_result)
	}

	//Handler for INTERNAL event of "ssp from summary list"
	ssp_from_summary_list__internal(parent_event_result){
		this.ssp_from_summary_list__brfq_from_summary_list_to_tran_list(parent_event_result)
		this.ssp_from_summary_list__brfq_from_summary_to_ps_chart(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq from summary list to tran list"
	brfq_from_summary_list_to_tran_list__internal(parent_event_result){
		this.brfq_from_summary_list_to_tran_list__sfr_from_summary_to_tran(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view message"
	navigation_ui_view_message__action_button_click(){
		this.navigation_ui_view_message__sp_for_show_message_main_layout()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trg disable view data ui"
	navigation_ui_trg_disable_view_data_ui__action_button_click(){
		this.navigation_ui_trg_disable_view_data_ui__de_from_trg_to_view_response_on_main_page()
		this.navigation_ui_trg_disable_view_data_ui__de_from_trg_to_view_req_on_main_page()
		this.navigation_ui_trg_disable_view_data_ui__de_from_trg_to_view_message_on_main_page()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view response"
	navigation_ui_view_response__action_button_click(){
		this.navigation_ui_view_response__bt_main_tran_to_main_response_ui()
	}

	//Handler for INTERNAL event of "bt main tran to main response ui"
	bt_main_tran_to_main_response_ui__internal(){
		this.bt_main_tran_to_main_response_ui__sp_to_main_response_ui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view request"
	navigation_ui_view_request__action_button_click(){
		this.navigation_ui_view_request__bt_main_tran_to_main_req_ui()
	}

	//Handler for INTERNAL event of "bt main tran to main req ui"
	bt_main_tran_to_main_req_ui__internal(){
		this.bt_main_tran_to_main_req_ui__sp_to_main_req_ui()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__de_for_vlh_from_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_log_history"
		let parent_source_id=""
		let event_code="e_1668506938875"
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
	page_load__he_for_pl_to_vm() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_message_history"
		let parent_source_id=""
		let event_code="e_1668664191705"
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
	page_load__de_for_pl_to_vm() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_message_history"
		let parent_source_id=""
		let event_code="e_1668664200948"
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
	page_load__routing_key() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669386806911"
		let event_params={"caller_name":"page_load__routing_key","event_desc":"ROUTING KEY","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="routing_key__cf_for_pl,"
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
	page_load__he_from_page_load_to_trg_disable_view_data_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_trg_disable_view_data_ui"
		let parent_source_id=""
		let event_code="e_1669638798603"
		let event_params={"caller_name":"page_load__he_from_page_load_to_trg_disable_view_data_action","event_desc":"HE from Page load to TRG DIsable View Data Action","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for INTERNAL event of "routing key"
	routing_key__cf_for_pl(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="routing_key"
		let destn_id=""
		let parent_source_id="page_load"
		let event_code="e_1669386839827"
		let event_params={"caller_name":"routing_key__cf_for_pl","event_desc":"CF for PL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""},"parent_event_result":"SUCCESS"}
		let handler_code="create_form"
		let internals="cf_for_pl__show_hide_ide_process,"
		let event_data={}
		let data_source={}
		try {
			this.handler.create_form(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cf for pl"
	cf_for_pl__show_hide_ide_process(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cf_for_pl"
		let destn_id=""
		let parent_source_id="routing_key"
		let event_code="e_1669386871143"
		let event_params={"caller_name":"cf_for_pl__show_hide_ide_process","event_desc":"SHOW HIDE ide process","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="show_hide_ide_process__trigger_btn_click_to_search,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "show hide ide process"
	show_hide_ide_process__trigger_btn_click_to_search(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="show_hide_ide_process"
		let destn_id="search_search"
		let parent_source_id="cf_for_pl"
		let event_code="e_1669386937654"
		let event_params={"caller_name":"show_hide_ide_process__trigger_btn_click_to_search","event_desc":"Trigger btn click to search","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
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
	search_search__ssp_for_chart() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1668499262579"
		let event_params={"caller_name":"search_search__ssp_for_chart","event_desc":"SSP for chart","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="ssp_for_chart__brfq_for_chart,ssp_for_chart__brfq_for_sl_chart,ssp_for_chart__brfq_from_search_to_summary_list,"
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
	search_search__cu_for_tl() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1668499677720"
		let event_params={"caller_name":"search_search__cu_for_tl","event_desc":"CU for TL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669179986087","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Processlog LR MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"npsst_id","alias_name":"","mq_id":"MQ_1669178086386","date_format":false},{"column_name":"uetr","alias_name":"","mq_id":"MQ_1669178086562","date_format":false},{"column_name":"value_date","alias_name":"","mq_id":"MQ_1669178086753","date_format":true},{"column_name":"accp_date_time","alias_name":"","mq_id":"MQ_1669178086930","date_format":false},{"column_name":"created_date","alias_name":"","mq_id":"MQ_1669178147671","date_format":false},{"column_name":"exhf_id","alias_name":"","mq_id":"MQ_1669178153368","date_format":false},{"column_name":"cdtr_iban","alias_name":"","mq_id":"MQ_1669178153567","date_format":false},{"column_name":"tran_ref_id","alias_name":"","mq_id":"MQ_1669178153751","date_format":false},{"column_name":"payment_endtoend_id","alias_name":"","mq_id":"MQ_1669178153943","date_format":false},{"column_name":"clrsysref","alias_name":"","mq_id":"MQ_1669178154119","date_format":false},{"column_name":"cdtr_acct_no","alias_name":"","mq_id":"MQ_1669178191046","date_format":false},{"column_name":"dbtr_acct_no","alias_name":"","mq_id":"MQ_1669178191237","date_format":false},{"column_name":"intrbk_sttlm_amnt","alias_name":"","mq_id":"MQ_1669178191445","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1669178191661","date_format":false},{"column_name":"processing_system","alias_name":"","mq_id":"MQ_1669178227517","date_format":false},{"column_name":"process_status","alias_name":"","mq_id":"MQ_1669178227717","date_format":false},{"column_name":"Group_Name","alias_name":"","mq_id":"MQ_1669178227908","date_format":false},{"column_name":"Process_type","alias_name":"","mq_id":"MQ_1669178239274","date_format":false},{"column_name":"payment_mode","alias_name":"","mq_id":"MQ_1669178239466","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1669179866186","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1669179866480","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1669180239582","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1669714936628","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1669714936809","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669714937008","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1669714937193","date_format":false},{"column_name":"RR_MESSAGE_DESC","alias_name":"","mq_id":"MQ_1669714937383","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1669714937535","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028203","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028433","date_format":false},{"column_name":"ADDITIONAL_INFO","alias_name":"","mq_id":"MQ_1669715062065","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1669715075448","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716335899","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716336337","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716336495","date_format":false},{"column_name":"DBTR_CUST_TYPE","alias_name":"","mq_id":"MQ_1669716336659","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669716336826","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669716336982","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669716337154","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716337311","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716337475","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716337634","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337798","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337958","date_format":false},{"column_name":"CATEGORY_PURPOSE","alias_name":"","mq_id":"MQ_1669716338118","date_format":false},{"column_name":"CATEGORY_PURPOSE_PRTY","alias_name":"","mq_id":"MQ_1669716338271","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1669716460635","date_format":false},{"column_name":"BASE_CURRENCY","alias_name":"","mq_id":"MQ_1669716460839","date_format":false},{"column_name":"BASE_AMOUNT","alias_name":"","mq_id":"MQ_1669716461033","date_format":false},{"column_name":"HDR_TOTAL_RECORDS","alias_name":"","mq_id":"MQ_1669716461209","date_format":false},{"column_name":"HDR_TOTAL_AMOUNT","alias_name":"","mq_id":"MQ_1669716488348","date_format":false,"currency_format":true},{"column_name":"HDR_CLEARING_SYSTEM","alias_name":"","mq_id":"MQ_1669716488527","date_format":false},{"column_name":"CHARGE_BEARER","alias_name":"","mq_id":"MQ_1669716488729","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669716578903","date_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"","mq_id":"MQ_1669716579064","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1669716579241","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1669716579389","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1669716601499","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1669716601675","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1669716623271","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1669716623501","date_format":false},{"column_name":"ISSUER_TYPE_CODE","alias_name":"","mq_id":"MQ_1669716639834","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1669718495740","date_format":false},{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1669719333386","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1669719333580","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1669719333798","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1669719336508","date_format":false},{"column_name":"CBS_REF_NO","alias_name":"","mq_id":"MQ_1669721618850","date_format":false},{"column_name":"CBS_POSTING_FLAG","alias_name":"","mq_id":"MQ_1669721627964","date_format":false}],"joins":[]},"eq_text":"SELECT  NPSST_ID,  UETR,  VALUE_DATE,  ACCP_DATE_TIME,  CREATED_DATE,  DATEMI,  EXHF_ID,  CDTR_IBAN,  TENANT_ID,  TRAN_REF_ID,  DEPARTMENT_CODE,  PAYMENT_ENDTOEND_ID,  CLRSYSREF,  CDTR_ACCT_NO,  DBTR_ACCT_NO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  STATUS,  PROCESSING_SYSTEM,  PROCESS_STATUS,  GROUP_NAME,  PROCESS_TYPE,  PAYMENT_MODE,  RULE_GROUP,  NPSSTPL_ID,  DT_CODE,  DTT_CODE,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  MSG_ID,  PROCESS_NAME,  T24_RETURN_CODE ,  CBUAE_RETURN_CODE ,  REVERSAL_CODE,  ADDITIONAL_INFO ,  V_CODE ,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR ,  CHARGE_AMOUNT,  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTRRD_ID,  RR_DT_CODE,  RR_DTT_CODE,  MESSAGE_DATA,  PROCESS_CODE,  PROCESS_DETAIL,  RR_PROCESS_NAME,  RR_MESSAGE_DESC,  DBTR_ACCT_NAME ,  DBTR_PHONE_NO ,  DBTR_EMAIL_ID ,  DBTR_DOCUMENT_ID,  DBTR_IBAN ,  DBTR_CUST_TYPE ,  DBTR_PRVT_ID ,  DBTR_OTHER_ISSUER ,  CDTR_ACCT_NAME ,  CDTR_PHONE_NO ,  CDTR_EMAIL_ID ,  CDTR_DOCUMENT_ID ,  DR_SORT_CODE ,  CR_SORT_CODE ,  CATEGORY_PURPOSE ,  CATEGORY_PURPOSE_PRTY ,  CR_ACCT_IDENTIFICATION ,  BASE_CURRENCY ,  BASE_AMOUNT ,  HDR_TOTAL_RECORDS ,  HDR_TOTAL_AMOUNT,  HDR_CLEARING_SYSTEM ,  CHARGE_BEARER ,  REMITTANCE_INFO ,  ACCOUNT_CURRENCY,  CHANNEL_ID ,  CHANNEL_REFNO ,  CHANNEL_USERID ,  CHANNEL_PRODUCT ,  CHANNEL_SUB_PRODUCT ,  CHANNEL_TRAN_CODE ,  ISSUER_TYPE_CODE,  PROCESS_REF_NO,  RESPONSE_CODE,  CBS_REF_NO,  CBS_POSTING_FLAG FROM  (  SELECT   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,   NT.DEPARTMENT_CODE,   NT.TENANT_ID,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NTPL.STATUS,   NTPL.PROCESSING_SYSTEM,   NTPL.PROCESS_STATUS,   NTPL.GROUP_NAME,   NTPL.PROCESS_TYPE,   NTPL.PAYMENT_MODE,   NTPL.RULE_GROUP,   NTPL.NPSSTPL_ID,   NTPL.DT_CODE,   NTPL.DTT_CODE,   NTPL.REQUEST_DATA_JSON,   NTPL.RESPONSE_DATA_JSON,   NTPL.MSG_ID,   NTPL.PROCESS_NAME,   NTPL.T24_RETURN_CODE ,   NTPL.CBUAE_RETURN_CODE ,   NTPL.REVERSAL_CODE ,   NTPL.ADDITIONAL_INFO ,   NTPL.V_CODE ,   NTPL.AMOUNT_CREDITED,   NTPL.AMT_CR_LOC_CUR ,   NTPL.CHARGE_AMOUNT,   NTPL.PROCESS_REF_NO,   NTPL.RESPONSE_CODE,   CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION,   CONCAT(NTPL.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,   CONCAT(NTPL.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,   RR.NPSSTRRD_ID,   RR.RR_MSG_ID,   RR.PARENT_NPSSTRRD_REFNO,   RR.MESSAGE_DATA,   RR.PROCESS_CODE,   RR.PROCESS_DETAIL,   RR.NPSSTRRD_REFNO,   RR.RR_DT_CODE,   RR.RR_DTT_CODE,   RR.RR_PROCESS_NAME,   RR.RR_MESSAGE_DESC,   NT.DBTR_ACCT_NAME ,   NT.DBTR_PHONE_NO ,   NT.DBTR_EMAIL_ID ,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN ,   NT.DBTR_CUST_TYPE ,   NT.DBTR_PRVT_ID ,   NT.DBTR_OTHER_ISSUER ,   NT.CDTR_ACCT_NAME ,   NT.CDTR_PHONE_NO ,   NT.CDTR_EMAIL_ID ,   NT.CDTR_DOCUMENT_ID ,   NT.DR_SORT_CODE ,   NT.CR_SORT_CODE ,   NT.CATEGORY_PURPOSE ,   NT.CATEGORY_PURPOSE_PRTY ,   NT.CR_ACCT_IDENTIFICATION ,   NT.BASE_CURRENCY ,   NT.BASE_AMOUNT ,   NT.HDR_TOTAL_RECORDS ,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM ,   NT.CHARGE_BEARER ,   NT.REMITTANCE_INFO ,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID ,   NT.CHANNEL_REFNO ,   NT.CHANNEL_USERID ,   NT.CHANNEL_PRODUCT ,   NT.CHANNEL_SUB_PRODUCT ,   NT.CHANNEL_TRAN_CODE ,   NT.ISSUER_TYPE_CODE,   NT.CBS_REF_NO,   NT.CBS_POSTING_FLAG  FROM   NPSS_TRANSACTIONS NT  INNER JOIN (   SELECT    T.NPSSTPL_ID,    T.UETR,    T.STATUS,    T.PROCESSING_SYSTEM,    T.PROCESS_STATUS,    G.GROUP_NAME,    G.PROCESS_TYPE,    G.PAYMENT_MODE,    G.RULE_GROUP,    T.DT_CODE,    T.DTT_CODE,    T.REQUEST_DATA_JSON,    T.RESPONSE_DATA_JSON,    T.MSG_ID,    T.PROCESS_NAME,    T.T24_RETURN_CODE ,    T.CBUAE_RETURN_CODE ,    T.REVERSAL_CODE ,    T.ADDITIONAL_INFO ,    T.V_CODE,    T.AMOUNT_CREDITED,    T.AMT_CR_LOC_CUR,    T.CHARGE_AMOUNT,    T.PROCESS_REF_NO,    T.RESPONSE_CODE   FROM    (    SELECT     A.NPSSTPL_ID,     A.UETR,     A.STATUS,     A.PROCESSING_SYSTEM,     A.PROCESS_STATUS,     A.DT_CODE,     A.DTT_CODE,     A.REQUEST_DATA_JSON,     A.RESPONSE_DATA_JSON,     A.MSG_ID,     A.PROCESS_NAME,     A.T24_RETURN_CODE ,     A.CBUAE_RETURN_CODE ,     A.REVERSAL_CODE ,     A.ADDITIONAL_INFO ,     A.V_CODE ,     A.AMOUNT_CREDITED,     A.AMT_CR_LOC_CUR ,     A.CHARGE_AMOUNT,     A.PROCESS_REF_NO,     A.RESPONSE_CODE,     ROW_NUMBER() OVER(PARTITION BY A.UETR    ORDER BY     A.NPSSTPL_ID DESC) AS ROW_NUM    FROM     NPSS_TRN_PROCESS_LOG A ) T   INNER JOIN CORE_NC_STATUS_GROUP G ON    G.QUEUE_CODE = T.PROCESS_STATUS    AND G.PROCESS_QUEUE_STATUS = T.STATUS   WHERE    T.ROW_NUM = 1) NTPL ON   NT.UETR = NTPL.UETR  LEFT JOIN CORE_NC_CODE_DESCRIPTIONS CCD ON   CCD.CD_CODE = NTPL.REVERSAL_CODE   AND CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'  LEFT JOIN CORE_NC_RETURN_CODES T24RC ON   T24RC.RETURN_CODE = NTPL.T24_RETURN_CODE   AND T24RC.PROCESSING_SYSTEM = 'T24'  LEFT JOIN CORE_NC_RETURN_CODES CBUAERC ON   CBUAERC.RETURN_CODE = NTPL.CBUAE_RETURN_CODE   AND CBUAERC.PROCESSING_SYSTEM = 'CBUAE'  LEFT JOIN (   SELECT    B.NPSSTRRD_ID ,    B.MSG_ID AS RR_MSG_ID,    B.PARENT_NPSSTRRD_REFNO ,    B.MESSAGE_DATA ,    B.PROCESS_CODE ,    B.PROCESS_DETAIL ,    B.NPSSTRRD_REFNO,    B.UETR,    B.DT_CODE AS RR_DT_CODE,    B.DTT_CODE AS RR_DTT_CODE,    B.PROCESS_NAME AS RR_PROCESS_NAME,    B.MESSAGE_DESC AS RR_MESSAGE_DESC,    ROW_NUMBER() OVER(PARTITION BY B.UETR   ORDER BY    B.NPSSTRRD_ID DESC) AS ROW_NUM   FROM    NPSS_TRN_REQ_RESP_DTLS B ) RR ON   RR.UETR = NT.UETR   AND RR.ROW_NUM = 1 ) V $WHERE ORDER BY  NPSST_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Tran processLog LR CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"MI_LEVEL_GROUP_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"INTRBK_STTLM_CUR","binding_name":"INTRBK_STTLM_CUR","binding_value":"","source_name":"MI_LEVEL_INTRBK_STTLM_CUR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"RULE_GROUP","binding_name":"RULE_GROUP","binding_value":"","source_name":"RCT_INWARD_GROUP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"intrbk_sttlm_amnt","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"cdtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"payment_endtoend_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"uetr","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"clrsysref","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__cp_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1668506496142"
		let event_params={"popup_info":{"context":""},"caller_name":"search_search__cp_for_search","event_desc":"CP for search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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
	search_search__de_from_search_to_view_detail() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="navigation_ui_view_tran"
		let parent_source_id=""
		let event_code="e_1668688551419"
		let event_params={"caller_name":"search_search__de_from_search_to_view_detail","event_desc":"DE from search to View Detail","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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
		let destn_id="navigation_ui_view_log_history"
		let parent_source_id=""
		let event_code="e_1668688651785"
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
		let destn_id="navigation_ui_view_message_history"
		let parent_source_id=""
		let event_code="e_1668688691244"
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

	//Handler for INTERNAL event of "ssp for chart"
	ssp_for_chart__brfq_for_chart(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_chart"
		let destn_id="status_by_group"
		let parent_source_id="search_search"
		let event_code="e_1668499306411"
		let event_params={"caller_name":"ssp_for_chart__brfq_for_chart","event_desc":"BRFQ for Chart","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"PIE","chart_label":"GROUP_NAME","chart_series":"","chart_data":"GROUP_COUNT","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669179567882","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Row Group Name MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"GROUP_NAME","alias_name":"","mq_id":"MQ_1669177856684","date_format":false},{"column_name":"GROUP_COUNT","alias_name":"","mq_id":"MQ_1669177856860","date_format":false}],"joins":[]},"eq_text":"SELECT  GROUP_NAME,  GN_SORT_ORDER,  COUNT(GROUP_NAME) AS GROUP_COUNT FROM  (  SELECT   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NT.TENANT_ID,   NT.DEPARTMENT_CODE,   NTPL.STATUS,   NTPL.PROCESSING_SYSTEM,   NTPL.PROCESS_STATUS,   NTPL.GROUP_NAME,   NTPL.PROCESS_TYPE,   NTPL.PAYMENT_MODE,   NTPL.RULE_GROUP,   NTPL.NPSSTPL_ID,   NTPL.DT_CODE,   NTPL.DTT_CODE,   NTPL.REQUEST_DATA_JSON,   NTPL.RESPONSE_DATA_JSON,   NTPL.MSG_ID,   NTPL.PROCESS_NAME,   RR.NPSSTRRD_ID,   RR.RR_MSG_ID,   RR.PARENT_NPSSTRRD_REFNO,   RR.MESSAGE_DATA,   RR.PROCESS_CODE,   RR.PROCESS_DETAIL,   RR.NPSSTRRD_REFNO,   RR.RR_DT_CODE,   RR.RR_DTT_CODE,   RR.RR_PROCESS_NAME,   RR.RR_MESSAGE_DESC,   NT.DBTR_ACCT_NAME ,   NT.DBTR_PHONE_NO ,   NT.DBTR_EMAIL_ID ,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN ,   NT.DBTR_CUST_TYPE ,   NT.DBTR_PRVT_ID ,   NT.DBTR_OTHER_ISSUER ,   NT.CDTR_ACCT_NAME ,   NT.CDTR_PHONE_NO ,   NT.CDTR_EMAIL_ID ,   NT.CDTR_DOCUMENT_ID ,   NT.DR_SORT_CODE ,   NT.CR_SORT_CODE ,   NT.CATEGORY_PURPOSE ,   NT.CATEGORY_PURPOSE_PRTY ,   NT.CR_ACCT_IDENTIFICATION ,   NT.BASE_CURRENCY ,   NT.BASE_AMOUNT ,   NT.HDR_TOTAL_RECORDS ,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM ,   NT.CHARGE_BEARER ,   NT.REMITTANCE_INFO ,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID ,   NT.CHANNEL_REFNO ,   NT.CHANNEL_USERID ,   NT.CHANNEL_PRODUCT ,   NT.CHANNEL_SUB_PRODUCT ,   NT.CHANNEL_TRAN_CODE ,   NT.ISSUER_TYPE_CODE,   GN_SORT_ORDER  FROM   NPSS_TRANSACTIONS NT  INNER JOIN (   SELECT    T.NPSSTPL_ID,    T.UETR,    T.STATUS,    T.PROCESSING_SYSTEM,    T.PROCESS_STATUS,    G.GROUP_NAME,    G.PROCESS_TYPE,    G.PAYMENT_MODE,    G.RULE_GROUP,    T.DT_CODE,    T.DTT_CODE,    T.REQUEST_DATA_JSON,    T.RESPONSE_DATA_JSON,    T.MSG_ID,    T.PROCESS_NAME,    CD.SORT_ORDER AS GN_SORT_ORDER   FROM    (    SELECT     A.NPSSTPL_ID,     A.UETR,     A.STATUS,     A.PROCESSING_SYSTEM,     A.PROCESS_STATUS,     A.DT_CODE,     A.DTT_CODE,     A.REQUEST_DATA_JSON,     A.RESPONSE_DATA_JSON,     A.MSG_ID,     A.PROCESS_NAME,     ROW_NUMBER() OVER(PARTITION BY A.UETR    ORDER BY     A.NPSSTPL_ID DESC) AS ROW_NUM    FROM     NPSS_TRN_PROCESS_LOG A) T   INNER JOIN CORE_NC_STATUS_GROUP G ON    G.QUEUE_CODE = T.PROCESS_STATUS    AND G.PROCESS_QUEUE_STATUS = T.STATUS    INNER JOIN CORE_NC_CODE_DESCRIPTIONS CD ON CD.CD_CODE = G.GROUP_NAME    WHERE    T.ROW_NUM = 1 AND CD.CD_CATEGORY = 'STATUS_GROUP') NTPL ON   NT.UETR = NTPL.UETR  LEFT JOIN (   SELECT    B.NPSSTRRD_ID ,    B.MSG_ID AS RR_MSG_ID,    B.PARENT_NPSSTRRD_REFNO ,    B.MESSAGE_DATA ,    B.PROCESS_CODE ,    B.PROCESS_DETAIL ,    B.NPSSTRRD_REFNO,    B.UETR,    B.DT_CODE AS RR_DT_CODE,    B.DTT_CODE AS RR_DTT_CODE,    B.PROCESS_NAME AS RR_PROCESS_NAME,    B.MESSAGE_DESC AS RR_MESSAGE_DESC,    ROW_NUMBER() OVER(PARTITION BY B.UETR   ORDER BY    B.NPSSTRRD_ID DESC) AS ROW_NUM   FROM    NPSS_TRN_REQ_RESP_DTLS B ) RR ON   RR.UETR = NT.UETR   AND RR.ROW_NUM = 1) V $WHERE GROUP BY  GN_SORT_ORDER,GROUP_NAME  ORDER BY GN_SORT_ORDER"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Group Name LR  Chart CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"RULE_GROUP","binding_name":"RULE_GROUP","binding_value":"","source_name":"RCT_INWARD_GROUP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Group Name","target_column":"GROUP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Group Count","target_column":"GROUP_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for chart"
	ssp_for_chart__brfq_for_sl_chart(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_chart"
		let destn_id="process_by_system"
		let parent_source_id="search_search"
		let event_code="e_1668577895713"
		let event_params={"caller_name":"ssp_for_chart__brfq_for_sl_chart","event_desc":"BRFQ for SL Chart","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"DOUGHNUT","chart_label":"PROCESSING_SYSTEM","chart_series":"","chart_data":"PS_COUNT","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_9","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669179711260","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Row Processing System MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1669177940929","date_format":false},{"column_name":"PS_COUNT","alias_name":"","mq_id":"MQ_1669177941144","date_format":false}],"joins":[]},"eq_text":"SELECT  PROCESSING_SYSTEM,  COUNT(PROCESSING_SYSTEM) AS PS_COUNT FROM  (  SELECT   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NT.TENANT_ID,   NT.DEPARTMENT_CODE,   NTPL.STATUS,   NTPL.PROCESSING_SYSTEM,   NTPL.PROCESS_STATUS,   NTPL.GROUP_NAME,   NTPL.PROCESS_TYPE,   NTPL.PAYMENT_MODE,   NTPL.RULE_GROUP,   NTPL.NPSSTPL_ID,   NTPL.DT_CODE,   NTPL.DTT_CODE,   NTPL.REQUEST_DATA_JSON,   NTPL.RESPONSE_DATA_JSON,   NTPL.MSG_ID,   NTPL.PROCESS_NAME,   RR.NPSSTRRD_ID,   RR.RR_MSG_ID,   RR.PARENT_NPSSTRRD_REFNO,   RR.MESSAGE_DATA,   RR.PROCESS_CODE,   RR.PROCESS_DETAIL,   RR.NPSSTRRD_REFNO,   RR.RR_DT_CODE,   RR.RR_DTT_CODE,   RR.RR_PROCESS_NAME,   RR.RR_MESSAGE_DESC,   NT.DBTR_ACCT_NAME ,   NT.DBTR_PHONE_NO ,   NT.DBTR_EMAIL_ID ,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN ,   NT.DBTR_CUST_TYPE ,   NT.DBTR_PRVT_ID ,   NT.DBTR_OTHER_ISSUER ,   NT.CDTR_ACCT_NAME ,   NT.CDTR_PHONE_NO ,   NT.CDTR_EMAIL_ID ,   NT.CDTR_DOCUMENT_ID ,   NT.DR_SORT_CODE ,   NT.CR_SORT_CODE ,   NT.CATEGORY_PURPOSE ,   NT.CATEGORY_PURPOSE_PRTY ,   NT.CR_ACCT_IDENTIFICATION ,   NT.BASE_CURRENCY ,   NT.BASE_AMOUNT ,   NT.HDR_TOTAL_RECORDS ,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM ,   NT.CHARGE_BEARER ,   NT.REMITTANCE_INFO ,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID ,   NT.CHANNEL_REFNO ,   NT.CHANNEL_USERID ,   NT.CHANNEL_PRODUCT ,   NT.CHANNEL_SUB_PRODUCT ,   NT.CHANNEL_TRAN_CODE ,   NT.ISSUER_TYPE_CODE  FROM   NPSS_TRANSACTIONS NT  INNER JOIN (   SELECT    T.NPSSTPL_ID,    T.UETR,    T.STATUS,    T.PROCESSING_SYSTEM,    T.PROCESS_STATUS,    G.GROUP_NAME,    G.PROCESS_TYPE,    G.PAYMENT_MODE,    G.RULE_GROUP,    T.DT_CODE,    T.DTT_CODE,    T.REQUEST_DATA_JSON,    T.RESPONSE_DATA_JSON,    T.MSG_ID,    T.PROCESS_NAME   FROM    (    SELECT     A.NPSSTPL_ID,     A.UETR,     A.STATUS,     A.PROCESSING_SYSTEM,     A.PROCESS_NAME,     A.PROCESS_STATUS,     A.DT_CODE,     A.DTT_CODE,     A.REQUEST_DATA_JSON,     A.RESPONSE_DATA_JSON,     A.MSG_ID,     ROW_NUMBER() OVER(PARTITION BY A.UETR    ORDER BY     A.NPSSTPL_ID DESC) AS ROW_NUM    FROM     NPSS_TRN_PROCESS_LOG A) T   INNER JOIN CORE_NC_STATUS_GROUP G ON    G.QUEUE_CODE = T.PROCESS_STATUS    AND G.PROCESS_QUEUE_STATUS = T.STATUS   WHERE    T.ROW_NUM = 1) NTPL ON   NT.UETR = NTPL.UETR  LEFT JOIN (   SELECT    B.NPSSTRRD_ID ,    B.MSG_ID AS RR_MSG_ID,    B.PARENT_NPSSTRRD_REFNO ,    B.MESSAGE_DATA ,    B.PROCESS_CODE ,    B.PROCESS_DETAIL ,    B.NPSSTRRD_REFNO,    B.UETR,    B.DT_CODE AS RR_DT_CODE,    B.DTT_CODE AS RR_DTT_CODE,    B.PROCESS_NAME AS RR_PROCESS_NAME,    B.MESSAGE_DESC AS RR_MESSAGE_DESC,    ROW_NUMBER() OVER(PARTITION BY B.UETR   ORDER BY    B.NPSSTRRD_ID DESC) AS ROW_NUM   FROM    NPSS_TRN_REQ_RESP_DTLS B ) RR ON   RR.UETR = NT.UETR   AND RR.ROW_NUM = 1) V $WHERE GROUP BY  PROCESSING_SYSTEM"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Processing System LR Chart CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"MI_LEVEL_GROUP_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"RULE_GROUP","binding_name":"RULE_GROUP","binding_value":"","source_name":"RCT_INWARD_GROUP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"PS Count","target_column":"PS_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for chart"
	ssp_for_chart__brfq_from_search_to_summary_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_chart"
		let destn_id="summary_list"
		let parent_source_id="search_search"
		let event_code="e_1669186083834"
		let event_params={"caller_name":"ssp_for_chart__brfq_from_search_to_summary_list","event_desc":"BRFQ from Search to Summary List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_18","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669187492810","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Tran Summary LR MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"GROUP_NAME","alias_name":"","mq_id":"MQ_1669187361763","date_format":false},{"column_name":"TOTAL_AMOUNT","alias_name":"","mq_id":"MQ_1669187362209","date_format":false},{"column_name":"TOTAL_TRAN_COUNT","alias_name":"","mq_id":"MQ_1669187362417","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1669529663983","date_format":false}],"joins":[]},"eq_text":"select  GROUP_NAME,  INTRBK_STTLM_CUR,  SUM(INTRBK_STTLM_AMNT) as TOTAL_AMOUNT,  COUNT(NPSST_ID) as TOTAL_TRAN_COUNT from  (  select   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   NT.TENANT_ID,   NT.DEPARTMENT_CODE,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NTPL.STATUS,   NTPL.PROCESSING_SYSTEM,   NTPL.PROCESS_STATUS,   NTPL.GROUP_NAME,   NTPL.PROCESS_TYPE,   NTPL.PAYMENT_MODE,   NTPL.RULE_GROUP,   NTPL.NPSSTPL_ID,   NTPL.DT_CODE,   NTPL.DTT_CODE,   NTPL.REQUEST_DATA_JSON,   NTPL.RESPONSE_DATA_JSON,   NTPL.MSG_ID,   NTPL.PROCESS_NAME,   RR.NPSSTRRD_ID,   RR.RR_MSG_ID,   RR.PARENT_NPSSTRRD_REFNO,   RR.MESSAGE_DATA,   RR.PROCESS_CODE,   RR.PROCESS_DETAIL,   RR.NPSSTRRD_REFNO,   RR.RR_DT_CODE,   RR.RR_DTT_CODE,   RR.RR_PROCESS_NAME,   RR.RR_MESSAGE_DESC,   NT.DBTR_ACCT_NAME ,   NT.DBTR_PHONE_NO ,   NT.DBTR_EMAIL_ID ,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN ,   NT.DBTR_CUST_TYPE ,   NT.DBTR_PRVT_ID ,   NT.DBTR_OTHER_ISSUER ,   NT.CDTR_ACCT_NAME ,   NT.CDTR_PHONE_NO ,   NT.CDTR_EMAIL_ID ,   NT.CDTR_DOCUMENT_ID ,   NT.DR_SORT_CODE ,   NT.CR_SORT_CODE ,   NT.CATEGORY_PURPOSE ,   NT.CATEGORY_PURPOSE_PRTY ,   NT.CR_ACCT_IDENTIFICATION ,   NT.BASE_CURRENCY ,   NT.BASE_AMOUNT ,   NT.HDR_TOTAL_RECORDS ,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM ,   NT.CHARGE_BEARER ,   NT.REMITTANCE_INFO ,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID ,   NT.CHANNEL_REFNO ,   NT.CHANNEL_USERID ,   NT.CHANNEL_PRODUCT ,   NT.CHANNEL_SUB_PRODUCT ,   NT.CHANNEL_TRAN_CODE ,   NT.ISSUER_TYPE_CODE  from   NPSS_TRANSACTIONS NT  inner join (   select    T.NPSSTPL_ID,    T.UETR,    T.STATUS,    T.PROCESSING_SYSTEM,    T.PROCESS_STATUS,    G.GROUP_NAME,    G.PROCESS_TYPE,    G.PAYMENT_MODE,    G.RULE_GROUP,    T.DT_CODE,    T.DTT_CODE,    T.REQUEST_DATA_JSON,    T.RESPONSE_DATA_JSON,    T.MSG_ID,    T.PROCESS_NAME   from    (    select     A.NPSSTPL_ID,     A.UETR,     A.STATUS,     A.PROCESSING_SYSTEM,     A.PROCESS_STATUS,     A.DT_CODE,     A.DTT_CODE,     A.REQUEST_DATA_JSON,     A.RESPONSE_DATA_JSON,     A.MSG_ID,     A.PROCESS_NAME,     row_number() over(partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A) T   inner join CORE_NC_STATUS_GROUP G on    G.QUEUE_CODE = T.PROCESS_STATUS    and G.PROCESS_QUEUE_STATUS = T.STATUS   where    T.ROW_NUM = 1) NTPL on   NT.UETR = NTPL.UETR  left join (   select    B.NPSSTRRD_ID ,    B.MSG_ID as RR_MSG_ID,    B.PARENT_NPSSTRRD_REFNO ,    B.MESSAGE_DATA ,    B.PROCESS_CODE ,    B.PROCESS_DETAIL ,    B.NPSSTRRD_REFNO,    B.UETR,    B.DT_CODE as RR_DT_CODE,    B.DTT_CODE as RR_DTT_CODE,    B.PROCESS_NAME as RR_PROCESS_NAME,    B.MESSAGE_DESC as RR_MESSAGE_DESC,    row_number() over(partition by B.UETR   order by    B.NPSSTRRD_ID desc) as ROW_NUM   from    NPSS_TRN_REQ_RESP_DTLS B ) RR on   RR.UETR = NT.UETR   and RR.ROW_NUM = 1) V $WHERE group by  GROUP_NAME,  INTRBK_STTLM_CUR"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Tran Summary LR CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"MI_LEVEL_GROUP_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"RULE_GROUP","binding_name":"RULE_GROUP","binding_value":"","source_name":"RCT_INWARD_GROUP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Group Name","target_column":"GROUP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Total Amount","target_column":"TOTAL_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Total Tran Count","target_column":"TOTAL_TRAN_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "status by group"
	status_by_group__svm_for_chart() { 
		let Dest_Is_ctrl=true
		
		let source_id="status_by_group"
		let destn_id="status_by_group"
		let parent_source_id=""
		let event_code="e_1668499437603"
		let event_params={"caller_name":"status_by_group__svm_for_chart","event_desc":"SVM for Chart","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"status_by_group","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_chart__cc_from_tran_level_chart,svm_for_chart__tbc_to_status,"
		let event_data={"status_by_group":{"e_1668499437603":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_2","event_code":"E_1668499437603","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS TRN REQ RESP DTLS","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"GROUP_NAME","level":"MI_LEVEL","name":"MI_LEVEL_GROUP_NAME","setd3name":"GROUP_NAME"},{"type":"HARDCODED","column_name":"","level":"MI_LEVEL","name":"MI_LEVEL_PROCESSING_SYSTEM","setd3name":"PROCESSING_SYSTEM"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669179567882","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Row Group Name MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"GROUP_NAME","alias_name":"","mq_id":"MQ_1669177856684","date_format":false},{"column_name":"GROUP_COUNT","alias_name":"","mq_id":"MQ_1669177856860","date_format":false}],"joins":[]},"eq_text":"SELECT  GROUP_NAME,  GN_SORT_ORDER,  COUNT(GROUP_NAME) AS GROUP_COUNT FROM  (  SELECT   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NT.TENANT_ID,   NT.DEPARTMENT_CODE,   NTPL.STATUS,   NTPL.PROCESSING_SYSTEM,   NTPL.PROCESS_STATUS,   NTPL.GROUP_NAME,   NTPL.PROCESS_TYPE,   NTPL.PAYMENT_MODE,   NTPL.RULE_GROUP,   NTPL.NPSSTPL_ID,   NTPL.DT_CODE,   NTPL.DTT_CODE,   NTPL.REQUEST_DATA_JSON,   NTPL.RESPONSE_DATA_JSON,   NTPL.MSG_ID,   NTPL.PROCESS_NAME,   RR.NPSSTRRD_ID,   RR.RR_MSG_ID,   RR.PARENT_NPSSTRRD_REFNO,   RR.MESSAGE_DATA,   RR.PROCESS_CODE,   RR.PROCESS_DETAIL,   RR.NPSSTRRD_REFNO,   RR.RR_DT_CODE,   RR.RR_DTT_CODE,   RR.RR_PROCESS_NAME,   RR.RR_MESSAGE_DESC,   NT.DBTR_ACCT_NAME ,   NT.DBTR_PHONE_NO ,   NT.DBTR_EMAIL_ID ,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN ,   NT.DBTR_CUST_TYPE ,   NT.DBTR_PRVT_ID ,   NT.DBTR_OTHER_ISSUER ,   NT.CDTR_ACCT_NAME ,   NT.CDTR_PHONE_NO ,   NT.CDTR_EMAIL_ID ,   NT.CDTR_DOCUMENT_ID ,   NT.DR_SORT_CODE ,   NT.CR_SORT_CODE ,   NT.CATEGORY_PURPOSE ,   NT.CATEGORY_PURPOSE_PRTY ,   NT.CR_ACCT_IDENTIFICATION ,   NT.BASE_CURRENCY ,   NT.BASE_AMOUNT ,   NT.HDR_TOTAL_RECORDS ,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM ,   NT.CHARGE_BEARER ,   NT.REMITTANCE_INFO ,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID ,   NT.CHANNEL_REFNO ,   NT.CHANNEL_USERID ,   NT.CHANNEL_PRODUCT ,   NT.CHANNEL_SUB_PRODUCT ,   NT.CHANNEL_TRAN_CODE ,   NT.ISSUER_TYPE_CODE,   GN_SORT_ORDER  FROM   NPSS_TRANSACTIONS NT  INNER JOIN (   SELECT    T.NPSSTPL_ID,    T.UETR,    T.STATUS,    T.PROCESSING_SYSTEM,    T.PROCESS_STATUS,    G.GROUP_NAME,    G.PROCESS_TYPE,    G.PAYMENT_MODE,    G.RULE_GROUP,    T.DT_CODE,    T.DTT_CODE,    T.REQUEST_DATA_JSON,    T.RESPONSE_DATA_JSON,    T.MSG_ID,    T.PROCESS_NAME,    CD.SORT_ORDER AS GN_SORT_ORDER   FROM    (    SELECT     A.NPSSTPL_ID,     A.UETR,     A.STATUS,     A.PROCESSING_SYSTEM,     A.PROCESS_STATUS,     A.DT_CODE,     A.DTT_CODE,     A.REQUEST_DATA_JSON,     A.RESPONSE_DATA_JSON,     A.MSG_ID,     A.PROCESS_NAME,     ROW_NUMBER() OVER(PARTITION BY A.UETR    ORDER BY     A.NPSSTPL_ID DESC) AS ROW_NUM    FROM     NPSS_TRN_PROCESS_LOG A) T   INNER JOIN CORE_NC_STATUS_GROUP G ON    G.QUEUE_CODE = T.PROCESS_STATUS    AND G.PROCESS_QUEUE_STATUS = T.STATUS    INNER JOIN CORE_NC_CODE_DESCRIPTIONS CD ON CD.CD_CODE = G.GROUP_NAME    WHERE    T.ROW_NUM = 1 AND CD.CD_CATEGORY = 'STATUS_GROUP') NTPL ON   NT.UETR = NTPL.UETR  LEFT JOIN (   SELECT    B.NPSSTRRD_ID ,    B.MSG_ID AS RR_MSG_ID,    B.PARENT_NPSSTRRD_REFNO ,    B.MESSAGE_DATA ,    B.PROCESS_CODE ,    B.PROCESS_DETAIL ,    B.NPSSTRRD_REFNO,    B.UETR,    B.DT_CODE AS RR_DT_CODE,    B.DTT_CODE AS RR_DTT_CODE,    B.PROCESS_NAME AS RR_PROCESS_NAME,    B.MESSAGE_DESC AS RR_MESSAGE_DESC,    ROW_NUMBER() OVER(PARTITION BY B.UETR   ORDER BY    B.NPSSTRRD_ID DESC) AS ROW_NUM   FROM    NPSS_TRN_REQ_RESP_DTLS B ) RR ON   RR.UETR = NT.UETR   AND RR.ROW_NUM = 1) V $WHERE GROUP BY  GN_SORT_ORDER,GROUP_NAME  ORDER BY GN_SORT_ORDER"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Group Name LR  Chart CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"RULE_GROUP","binding_name":"RULE_GROUP","binding_value":"","source_name":"RCT_INWARD_GROUP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Group Name","target_column":"GROUP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Group Count","target_column":"GROUP_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for tran table"
	ssp_for_tran_table__brfq_for_sl_chart(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_tran_table"
		let destn_id="process_by_system"
		let parent_source_id="cc_from_tran_level_chart"
		let event_code="e_1668578086592"
		let event_params={"caller_name":"ssp_for_tran_table__brfq_for_sl_chart","event_desc":"BRFQ for SL chart","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"status_by_group","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"DOUGHNUT","chart_label":"PROCESSING_SYSTEM","chart_series":"","chart_data":"PS_COUNT","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_9","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669179711260","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Row Processing System MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1669177940929","date_format":false},{"column_name":"PS_COUNT","alias_name":"","mq_id":"MQ_1669177941144","date_format":false}],"joins":[]},"eq_text":"SELECT  PROCESSING_SYSTEM,  COUNT(PROCESSING_SYSTEM) AS PS_COUNT FROM  (  SELECT   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NT.TENANT_ID,   NT.DEPARTMENT_CODE,   NTPL.STATUS,   NTPL.PROCESSING_SYSTEM,   NTPL.PROCESS_STATUS,   NTPL.GROUP_NAME,   NTPL.PROCESS_TYPE,   NTPL.PAYMENT_MODE,   NTPL.RULE_GROUP,   NTPL.NPSSTPL_ID,   NTPL.DT_CODE,   NTPL.DTT_CODE,   NTPL.REQUEST_DATA_JSON,   NTPL.RESPONSE_DATA_JSON,   NTPL.MSG_ID,   NTPL.PROCESS_NAME,   RR.NPSSTRRD_ID,   RR.RR_MSG_ID,   RR.PARENT_NPSSTRRD_REFNO,   RR.MESSAGE_DATA,   RR.PROCESS_CODE,   RR.PROCESS_DETAIL,   RR.NPSSTRRD_REFNO,   RR.RR_DT_CODE,   RR.RR_DTT_CODE,   RR.RR_PROCESS_NAME,   RR.RR_MESSAGE_DESC,   NT.DBTR_ACCT_NAME ,   NT.DBTR_PHONE_NO ,   NT.DBTR_EMAIL_ID ,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN ,   NT.DBTR_CUST_TYPE ,   NT.DBTR_PRVT_ID ,   NT.DBTR_OTHER_ISSUER ,   NT.CDTR_ACCT_NAME ,   NT.CDTR_PHONE_NO ,   NT.CDTR_EMAIL_ID ,   NT.CDTR_DOCUMENT_ID ,   NT.DR_SORT_CODE ,   NT.CR_SORT_CODE ,   NT.CATEGORY_PURPOSE ,   NT.CATEGORY_PURPOSE_PRTY ,   NT.CR_ACCT_IDENTIFICATION ,   NT.BASE_CURRENCY ,   NT.BASE_AMOUNT ,   NT.HDR_TOTAL_RECORDS ,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM ,   NT.CHARGE_BEARER ,   NT.REMITTANCE_INFO ,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID ,   NT.CHANNEL_REFNO ,   NT.CHANNEL_USERID ,   NT.CHANNEL_PRODUCT ,   NT.CHANNEL_SUB_PRODUCT ,   NT.CHANNEL_TRAN_CODE ,   NT.ISSUER_TYPE_CODE  FROM   NPSS_TRANSACTIONS NT  INNER JOIN (   SELECT    T.NPSSTPL_ID,    T.UETR,    T.STATUS,    T.PROCESSING_SYSTEM,    T.PROCESS_STATUS,    G.GROUP_NAME,    G.PROCESS_TYPE,    G.PAYMENT_MODE,    G.RULE_GROUP,    T.DT_CODE,    T.DTT_CODE,    T.REQUEST_DATA_JSON,    T.RESPONSE_DATA_JSON,    T.MSG_ID,    T.PROCESS_NAME   FROM    (    SELECT     A.NPSSTPL_ID,     A.UETR,     A.STATUS,     A.PROCESSING_SYSTEM,     A.PROCESS_NAME,     A.PROCESS_STATUS,     A.DT_CODE,     A.DTT_CODE,     A.REQUEST_DATA_JSON,     A.RESPONSE_DATA_JSON,     A.MSG_ID,     ROW_NUMBER() OVER(PARTITION BY A.UETR    ORDER BY     A.NPSSTPL_ID DESC) AS ROW_NUM    FROM     NPSS_TRN_PROCESS_LOG A) T   INNER JOIN CORE_NC_STATUS_GROUP G ON    G.QUEUE_CODE = T.PROCESS_STATUS    AND G.PROCESS_QUEUE_STATUS = T.STATUS   WHERE    T.ROW_NUM = 1) NTPL ON   NT.UETR = NTPL.UETR  LEFT JOIN (   SELECT    B.NPSSTRRD_ID ,    B.MSG_ID AS RR_MSG_ID,    B.PARENT_NPSSTRRD_REFNO ,    B.MESSAGE_DATA ,    B.PROCESS_CODE ,    B.PROCESS_DETAIL ,    B.NPSSTRRD_REFNO,    B.UETR,    B.DT_CODE AS RR_DT_CODE,    B.DTT_CODE AS RR_DTT_CODE,    B.PROCESS_NAME AS RR_PROCESS_NAME,    B.MESSAGE_DESC AS RR_MESSAGE_DESC,    ROW_NUMBER() OVER(PARTITION BY B.UETR   ORDER BY    B.NPSSTRRD_ID DESC) AS ROW_NUM   FROM    NPSS_TRN_REQ_RESP_DTLS B ) RR ON   RR.UETR = NT.UETR   AND RR.ROW_NUM = 1) V $WHERE GROUP BY  PROCESSING_SYSTEM"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Processing System LR Chart CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"MI_LEVEL_GROUP_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"RULE_GROUP","binding_name":"RULE_GROUP","binding_value":"","source_name":"RCT_INWARD_GROUP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"PS Count","target_column":"PS_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for tran table"
	ssp_for_tran_table__brfq_from_group_chart_to_summary_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_tran_table"
		let destn_id="summary_list"
		let parent_source_id="cc_from_tran_level_chart"
		let event_code="e_1669186328786"
		let event_params={"caller_name":"ssp_for_tran_table__brfq_from_group_chart_to_summary_list","event_desc":"BRFQ from Group Chart to Summary List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"status_by_group","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_18","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669187492810","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Tran Summary LR MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"GROUP_NAME","alias_name":"","mq_id":"MQ_1669187361763","date_format":false},{"column_name":"TOTAL_AMOUNT","alias_name":"","mq_id":"MQ_1669187362209","date_format":false},{"column_name":"TOTAL_TRAN_COUNT","alias_name":"","mq_id":"MQ_1669187362417","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1669529663983","date_format":false}],"joins":[]},"eq_text":"select  GROUP_NAME,  INTRBK_STTLM_CUR,  SUM(INTRBK_STTLM_AMNT) as TOTAL_AMOUNT,  COUNT(NPSST_ID) as TOTAL_TRAN_COUNT from  (  select   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   NT.TENANT_ID,   NT.DEPARTMENT_CODE,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NTPL.STATUS,   NTPL.PROCESSING_SYSTEM,   NTPL.PROCESS_STATUS,   NTPL.GROUP_NAME,   NTPL.PROCESS_TYPE,   NTPL.PAYMENT_MODE,   NTPL.RULE_GROUP,   NTPL.NPSSTPL_ID,   NTPL.DT_CODE,   NTPL.DTT_CODE,   NTPL.REQUEST_DATA_JSON,   NTPL.RESPONSE_DATA_JSON,   NTPL.MSG_ID,   NTPL.PROCESS_NAME,   RR.NPSSTRRD_ID,   RR.RR_MSG_ID,   RR.PARENT_NPSSTRRD_REFNO,   RR.MESSAGE_DATA,   RR.PROCESS_CODE,   RR.PROCESS_DETAIL,   RR.NPSSTRRD_REFNO,   RR.RR_DT_CODE,   RR.RR_DTT_CODE,   RR.RR_PROCESS_NAME,   RR.RR_MESSAGE_DESC,   NT.DBTR_ACCT_NAME ,   NT.DBTR_PHONE_NO ,   NT.DBTR_EMAIL_ID ,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN ,   NT.DBTR_CUST_TYPE ,   NT.DBTR_PRVT_ID ,   NT.DBTR_OTHER_ISSUER ,   NT.CDTR_ACCT_NAME ,   NT.CDTR_PHONE_NO ,   NT.CDTR_EMAIL_ID ,   NT.CDTR_DOCUMENT_ID ,   NT.DR_SORT_CODE ,   NT.CR_SORT_CODE ,   NT.CATEGORY_PURPOSE ,   NT.CATEGORY_PURPOSE_PRTY ,   NT.CR_ACCT_IDENTIFICATION ,   NT.BASE_CURRENCY ,   NT.BASE_AMOUNT ,   NT.HDR_TOTAL_RECORDS ,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM ,   NT.CHARGE_BEARER ,   NT.REMITTANCE_INFO ,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID ,   NT.CHANNEL_REFNO ,   NT.CHANNEL_USERID ,   NT.CHANNEL_PRODUCT ,   NT.CHANNEL_SUB_PRODUCT ,   NT.CHANNEL_TRAN_CODE ,   NT.ISSUER_TYPE_CODE  from   NPSS_TRANSACTIONS NT  inner join (   select    T.NPSSTPL_ID,    T.UETR,    T.STATUS,    T.PROCESSING_SYSTEM,    T.PROCESS_STATUS,    G.GROUP_NAME,    G.PROCESS_TYPE,    G.PAYMENT_MODE,    G.RULE_GROUP,    T.DT_CODE,    T.DTT_CODE,    T.REQUEST_DATA_JSON,    T.RESPONSE_DATA_JSON,    T.MSG_ID,    T.PROCESS_NAME   from    (    select     A.NPSSTPL_ID,     A.UETR,     A.STATUS,     A.PROCESSING_SYSTEM,     A.PROCESS_STATUS,     A.DT_CODE,     A.DTT_CODE,     A.REQUEST_DATA_JSON,     A.RESPONSE_DATA_JSON,     A.MSG_ID,     A.PROCESS_NAME,     row_number() over(partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A) T   inner join CORE_NC_STATUS_GROUP G on    G.QUEUE_CODE = T.PROCESS_STATUS    and G.PROCESS_QUEUE_STATUS = T.STATUS   where    T.ROW_NUM = 1) NTPL on   NT.UETR = NTPL.UETR  left join (   select    B.NPSSTRRD_ID ,    B.MSG_ID as RR_MSG_ID,    B.PARENT_NPSSTRRD_REFNO ,    B.MESSAGE_DATA ,    B.PROCESS_CODE ,    B.PROCESS_DETAIL ,    B.NPSSTRRD_REFNO,    B.UETR,    B.DT_CODE as RR_DT_CODE,    B.DTT_CODE as RR_DTT_CODE,    B.PROCESS_NAME as RR_PROCESS_NAME,    B.MESSAGE_DESC as RR_MESSAGE_DESC,    row_number() over(partition by B.UETR   order by    B.NPSSTRRD_ID desc) as ROW_NUM   from    NPSS_TRN_REQ_RESP_DTLS B ) RR on   RR.UETR = NT.UETR   and RR.ROW_NUM = 1) V $WHERE group by  GROUP_NAME,  INTRBK_STTLM_CUR"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Tran Summary LR CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"MI_LEVEL_GROUP_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"RULE_GROUP","binding_name":"RULE_GROUP","binding_value":"","source_name":"RCT_INWARD_GROUP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Group Name","target_column":"GROUP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Total Amount","target_column":"TOTAL_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Total Tran Count","target_column":"TOTAL_TRAN_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for chart"
	svm_for_chart__cc_from_tran_level_chart(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_chart"
		let destn_id=""
		let parent_source_id="status_by_group"
		let event_code="e_1668683213015"
		let event_params={"caller_name":"svm_for_chart__cc_from_tran_level_chart","event_desc":"CC from Tran level chart","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"status_by_group","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="cc_from_tran_level_chart__ssp_for_tran_table,cc_from_tran_level_chart__cui_tran_from_group_chart,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for chart"
	svm_for_chart__tbc_to_status(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_chart"
		let destn_id="navigation_ui_trg_disable_view_data_ui"
		let parent_source_id="status_by_group"
		let event_code="e_1669647859078"
		let event_params={"caller_name":"svm_for_chart__tbc_to_status","event_desc":"TBC to status","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"status_by_group","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for INTERNAL event of "cc from tran level chart"
	cc_from_tran_level_chart__ssp_for_tran_table(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_from_tran_level_chart"
		let destn_id="search"
		let parent_source_id="svm_for_chart"
		let event_code="e_1668499470426"
		let event_params={"caller_name":"cc_from_tran_level_chart__ssp_for_tran_table","event_desc":"SSP for tran table","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"status_by_group","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="ssp_for_tran_table__brfq_for_sl_chart,ssp_for_tran_table__brfq_from_group_chart_to_summary_list,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc from tran level chart"
	cc_from_tran_level_chart__cui_tran_from_group_chart() { 
		let Dest_Is_ctrl=true
		
		let source_id="cc_from_tran_level_chart"
		let destn_id="transaction_list"
		let parent_source_id="svm_for_chart"
		let event_code="e_1669186936217"
		let event_params={"caller_name":"cc_from_tran_level_chart__cui_tran_from_group_chart","event_desc":"CUI Tran from Group Chart","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"status_by_group","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669179986087","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Processlog LR MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"npsst_id","alias_name":"","mq_id":"MQ_1669178086386","date_format":false},{"column_name":"uetr","alias_name":"","mq_id":"MQ_1669178086562","date_format":false},{"column_name":"value_date","alias_name":"","mq_id":"MQ_1669178086753","date_format":true},{"column_name":"accp_date_time","alias_name":"","mq_id":"MQ_1669178086930","date_format":false},{"column_name":"created_date","alias_name":"","mq_id":"MQ_1669178147671","date_format":false},{"column_name":"exhf_id","alias_name":"","mq_id":"MQ_1669178153368","date_format":false},{"column_name":"cdtr_iban","alias_name":"","mq_id":"MQ_1669178153567","date_format":false},{"column_name":"tran_ref_id","alias_name":"","mq_id":"MQ_1669178153751","date_format":false},{"column_name":"payment_endtoend_id","alias_name":"","mq_id":"MQ_1669178153943","date_format":false},{"column_name":"clrsysref","alias_name":"","mq_id":"MQ_1669178154119","date_format":false},{"column_name":"cdtr_acct_no","alias_name":"","mq_id":"MQ_1669178191046","date_format":false},{"column_name":"dbtr_acct_no","alias_name":"","mq_id":"MQ_1669178191237","date_format":false},{"column_name":"intrbk_sttlm_amnt","alias_name":"","mq_id":"MQ_1669178191445","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1669178191661","date_format":false},{"column_name":"processing_system","alias_name":"","mq_id":"MQ_1669178227517","date_format":false},{"column_name":"process_status","alias_name":"","mq_id":"MQ_1669178227717","date_format":false},{"column_name":"Group_Name","alias_name":"","mq_id":"MQ_1669178227908","date_format":false},{"column_name":"Process_type","alias_name":"","mq_id":"MQ_1669178239274","date_format":false},{"column_name":"payment_mode","alias_name":"","mq_id":"MQ_1669178239466","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1669179866186","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1669179866480","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1669180239582","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1669714936628","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1669714936809","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669714937008","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1669714937193","date_format":false},{"column_name":"RR_MESSAGE_DESC","alias_name":"","mq_id":"MQ_1669714937383","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1669714937535","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028203","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028433","date_format":false},{"column_name":"ADDITIONAL_INFO","alias_name":"","mq_id":"MQ_1669715062065","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1669715075448","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716335899","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716336337","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716336495","date_format":false},{"column_name":"DBTR_CUST_TYPE","alias_name":"","mq_id":"MQ_1669716336659","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669716336826","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669716336982","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669716337154","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716337311","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716337475","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716337634","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337798","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337958","date_format":false},{"column_name":"CATEGORY_PURPOSE","alias_name":"","mq_id":"MQ_1669716338118","date_format":false},{"column_name":"CATEGORY_PURPOSE_PRTY","alias_name":"","mq_id":"MQ_1669716338271","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1669716460635","date_format":false},{"column_name":"BASE_CURRENCY","alias_name":"","mq_id":"MQ_1669716460839","date_format":false},{"column_name":"BASE_AMOUNT","alias_name":"","mq_id":"MQ_1669716461033","date_format":false},{"column_name":"HDR_TOTAL_RECORDS","alias_name":"","mq_id":"MQ_1669716461209","date_format":false},{"column_name":"HDR_TOTAL_AMOUNT","alias_name":"","mq_id":"MQ_1669716488348","date_format":false,"currency_format":true},{"column_name":"HDR_CLEARING_SYSTEM","alias_name":"","mq_id":"MQ_1669716488527","date_format":false},{"column_name":"CHARGE_BEARER","alias_name":"","mq_id":"MQ_1669716488729","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669716578903","date_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"","mq_id":"MQ_1669716579064","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1669716579241","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1669716579389","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1669716601499","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1669716601675","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1669716623271","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1669716623501","date_format":false},{"column_name":"ISSUER_TYPE_CODE","alias_name":"","mq_id":"MQ_1669716639834","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1669718495740","date_format":false},{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1669719333386","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1669719333580","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1669719333798","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1669719336508","date_format":false},{"column_name":"CBS_REF_NO","alias_name":"","mq_id":"MQ_1669721618850","date_format":false},{"column_name":"CBS_POSTING_FLAG","alias_name":"","mq_id":"MQ_1669721627964","date_format":false}],"joins":[]},"eq_text":"SELECT  NPSST_ID,  UETR,  VALUE_DATE,  ACCP_DATE_TIME,  CREATED_DATE,  DATEMI,  EXHF_ID,  CDTR_IBAN,  TENANT_ID,  TRAN_REF_ID,  DEPARTMENT_CODE,  PAYMENT_ENDTOEND_ID,  CLRSYSREF,  CDTR_ACCT_NO,  DBTR_ACCT_NO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  STATUS,  PROCESSING_SYSTEM,  PROCESS_STATUS,  GROUP_NAME,  PROCESS_TYPE,  PAYMENT_MODE,  RULE_GROUP,  NPSSTPL_ID,  DT_CODE,  DTT_CODE,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  MSG_ID,  PROCESS_NAME,  T24_RETURN_CODE ,  CBUAE_RETURN_CODE ,  REVERSAL_CODE,  ADDITIONAL_INFO ,  V_CODE ,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR ,  CHARGE_AMOUNT,  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTRRD_ID,  RR_DT_CODE,  RR_DTT_CODE,  MESSAGE_DATA,  PROCESS_CODE,  PROCESS_DETAIL,  RR_PROCESS_NAME,  RR_MESSAGE_DESC,  DBTR_ACCT_NAME ,  DBTR_PHONE_NO ,  DBTR_EMAIL_ID ,  DBTR_DOCUMENT_ID,  DBTR_IBAN ,  DBTR_CUST_TYPE ,  DBTR_PRVT_ID ,  DBTR_OTHER_ISSUER ,  CDTR_ACCT_NAME ,  CDTR_PHONE_NO ,  CDTR_EMAIL_ID ,  CDTR_DOCUMENT_ID ,  DR_SORT_CODE ,  CR_SORT_CODE ,  CATEGORY_PURPOSE ,  CATEGORY_PURPOSE_PRTY ,  CR_ACCT_IDENTIFICATION ,  BASE_CURRENCY ,  BASE_AMOUNT ,  HDR_TOTAL_RECORDS ,  HDR_TOTAL_AMOUNT,  HDR_CLEARING_SYSTEM ,  CHARGE_BEARER ,  REMITTANCE_INFO ,  ACCOUNT_CURRENCY,  CHANNEL_ID ,  CHANNEL_REFNO ,  CHANNEL_USERID ,  CHANNEL_PRODUCT ,  CHANNEL_SUB_PRODUCT ,  CHANNEL_TRAN_CODE ,  ISSUER_TYPE_CODE,  PROCESS_REF_NO,  RESPONSE_CODE,  CBS_REF_NO,  CBS_POSTING_FLAG FROM  (  SELECT   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,   NT.DEPARTMENT_CODE,   NT.TENANT_ID,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NTPL.STATUS,   NTPL.PROCESSING_SYSTEM,   NTPL.PROCESS_STATUS,   NTPL.GROUP_NAME,   NTPL.PROCESS_TYPE,   NTPL.PAYMENT_MODE,   NTPL.RULE_GROUP,   NTPL.NPSSTPL_ID,   NTPL.DT_CODE,   NTPL.DTT_CODE,   NTPL.REQUEST_DATA_JSON,   NTPL.RESPONSE_DATA_JSON,   NTPL.MSG_ID,   NTPL.PROCESS_NAME,   NTPL.T24_RETURN_CODE ,   NTPL.CBUAE_RETURN_CODE ,   NTPL.REVERSAL_CODE ,   NTPL.ADDITIONAL_INFO ,   NTPL.V_CODE ,   NTPL.AMOUNT_CREDITED,   NTPL.AMT_CR_LOC_CUR ,   NTPL.CHARGE_AMOUNT,   NTPL.PROCESS_REF_NO,   NTPL.RESPONSE_CODE,   CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION,   CONCAT(NTPL.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,   CONCAT(NTPL.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,   RR.NPSSTRRD_ID,   RR.RR_MSG_ID,   RR.PARENT_NPSSTRRD_REFNO,   RR.MESSAGE_DATA,   RR.PROCESS_CODE,   RR.PROCESS_DETAIL,   RR.NPSSTRRD_REFNO,   RR.RR_DT_CODE,   RR.RR_DTT_CODE,   RR.RR_PROCESS_NAME,   RR.RR_MESSAGE_DESC,   NT.DBTR_ACCT_NAME ,   NT.DBTR_PHONE_NO ,   NT.DBTR_EMAIL_ID ,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN ,   NT.DBTR_CUST_TYPE ,   NT.DBTR_PRVT_ID ,   NT.DBTR_OTHER_ISSUER ,   NT.CDTR_ACCT_NAME ,   NT.CDTR_PHONE_NO ,   NT.CDTR_EMAIL_ID ,   NT.CDTR_DOCUMENT_ID ,   NT.DR_SORT_CODE ,   NT.CR_SORT_CODE ,   NT.CATEGORY_PURPOSE ,   NT.CATEGORY_PURPOSE_PRTY ,   NT.CR_ACCT_IDENTIFICATION ,   NT.BASE_CURRENCY ,   NT.BASE_AMOUNT ,   NT.HDR_TOTAL_RECORDS ,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM ,   NT.CHARGE_BEARER ,   NT.REMITTANCE_INFO ,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID ,   NT.CHANNEL_REFNO ,   NT.CHANNEL_USERID ,   NT.CHANNEL_PRODUCT ,   NT.CHANNEL_SUB_PRODUCT ,   NT.CHANNEL_TRAN_CODE ,   NT.ISSUER_TYPE_CODE,   NT.CBS_REF_NO,   NT.CBS_POSTING_FLAG  FROM   NPSS_TRANSACTIONS NT  INNER JOIN (   SELECT    T.NPSSTPL_ID,    T.UETR,    T.STATUS,    T.PROCESSING_SYSTEM,    T.PROCESS_STATUS,    G.GROUP_NAME,    G.PROCESS_TYPE,    G.PAYMENT_MODE,    G.RULE_GROUP,    T.DT_CODE,    T.DTT_CODE,    T.REQUEST_DATA_JSON,    T.RESPONSE_DATA_JSON,    T.MSG_ID,    T.PROCESS_NAME,    T.T24_RETURN_CODE ,    T.CBUAE_RETURN_CODE ,    T.REVERSAL_CODE ,    T.ADDITIONAL_INFO ,    T.V_CODE,    T.AMOUNT_CREDITED,    T.AMT_CR_LOC_CUR,    T.CHARGE_AMOUNT,    T.PROCESS_REF_NO,    T.RESPONSE_CODE   FROM    (    SELECT     A.NPSSTPL_ID,     A.UETR,     A.STATUS,     A.PROCESSING_SYSTEM,     A.PROCESS_STATUS,     A.DT_CODE,     A.DTT_CODE,     A.REQUEST_DATA_JSON,     A.RESPONSE_DATA_JSON,     A.MSG_ID,     A.PROCESS_NAME,     A.T24_RETURN_CODE ,     A.CBUAE_RETURN_CODE ,     A.REVERSAL_CODE ,     A.ADDITIONAL_INFO ,     A.V_CODE ,     A.AMOUNT_CREDITED,     A.AMT_CR_LOC_CUR ,     A.CHARGE_AMOUNT,     A.PROCESS_REF_NO,     A.RESPONSE_CODE,     ROW_NUMBER() OVER(PARTITION BY A.UETR    ORDER BY     A.NPSSTPL_ID DESC) AS ROW_NUM    FROM     NPSS_TRN_PROCESS_LOG A ) T   INNER JOIN CORE_NC_STATUS_GROUP G ON    G.QUEUE_CODE = T.PROCESS_STATUS    AND G.PROCESS_QUEUE_STATUS = T.STATUS   WHERE    T.ROW_NUM = 1) NTPL ON   NT.UETR = NTPL.UETR  LEFT JOIN CORE_NC_CODE_DESCRIPTIONS CCD ON   CCD.CD_CODE = NTPL.REVERSAL_CODE   AND CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'  LEFT JOIN CORE_NC_RETURN_CODES T24RC ON   T24RC.RETURN_CODE = NTPL.T24_RETURN_CODE   AND T24RC.PROCESSING_SYSTEM = 'T24'  LEFT JOIN CORE_NC_RETURN_CODES CBUAERC ON   CBUAERC.RETURN_CODE = NTPL.CBUAE_RETURN_CODE   AND CBUAERC.PROCESSING_SYSTEM = 'CBUAE'  LEFT JOIN (   SELECT    B.NPSSTRRD_ID ,    B.MSG_ID AS RR_MSG_ID,    B.PARENT_NPSSTRRD_REFNO ,    B.MESSAGE_DATA ,    B.PROCESS_CODE ,    B.PROCESS_DETAIL ,    B.NPSSTRRD_REFNO,    B.UETR,    B.DT_CODE AS RR_DT_CODE,    B.DTT_CODE AS RR_DTT_CODE,    B.PROCESS_NAME AS RR_PROCESS_NAME,    B.MESSAGE_DESC AS RR_MESSAGE_DESC,    ROW_NUMBER() OVER(PARTITION BY B.UETR   ORDER BY    B.NPSSTRRD_ID DESC) AS ROW_NUM   FROM    NPSS_TRN_REQ_RESP_DTLS B ) RR ON   RR.UETR = NT.UETR   AND RR.ROW_NUM = 1 ) V $WHERE ORDER BY  NPSST_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Tran processLog LR CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"MI_LEVEL_GROUP_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"INTRBK_STTLM_CUR","binding_name":"INTRBK_STTLM_CUR","binding_value":"","source_name":"MI_LEVEL_INTRBK_STTLM_CUR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"RULE_GROUP","binding_name":"RULE_GROUP","binding_value":"","source_name":"RCT_INWARD_GROUP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"intrbk_sttlm_amnt","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"cdtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"payment_endtoend_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"uetr","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"clrsysref","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__ee_for_view_detail_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_ui_view_tran"
		let parent_source_id=""
		let event_code="e_1668499588653"
		let event_params={"caller_name":"transaction_list__ee_for_view_detail_btn","event_desc":"EE for view detail btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	transaction_list__svm_for_tran_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1668499614996"
		let event_params={"caller_name":"transaction_list__svm_for_tran_list","event_desc":"SVM for tran list","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_tran_list__cc_from_transaction_list,"
		let event_data={"transaction_list":{"e_1668499614996":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_4","event_code":"E_1668499614996","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS TRN REQ RESP DTLS","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"NPSST_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSST_ID","setd3name":"NPSST_ID"},{"type":"LOCAL","column_name":"UETR","level":"MI_LEVEL","name":"MI_LEVEL_UETR","setd3name":"UETR"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669179986087","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Processlog LR MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"npsst_id","alias_name":"","mq_id":"MQ_1669178086386","date_format":false},{"column_name":"uetr","alias_name":"","mq_id":"MQ_1669178086562","date_format":false},{"column_name":"value_date","alias_name":"","mq_id":"MQ_1669178086753","date_format":true},{"column_name":"accp_date_time","alias_name":"","mq_id":"MQ_1669178086930","date_format":false},{"column_name":"created_date","alias_name":"","mq_id":"MQ_1669178147671","date_format":false},{"column_name":"exhf_id","alias_name":"","mq_id":"MQ_1669178153368","date_format":false},{"column_name":"cdtr_iban","alias_name":"","mq_id":"MQ_1669178153567","date_format":false},{"column_name":"tran_ref_id","alias_name":"","mq_id":"MQ_1669178153751","date_format":false},{"column_name":"payment_endtoend_id","alias_name":"","mq_id":"MQ_1669178153943","date_format":false},{"column_name":"clrsysref","alias_name":"","mq_id":"MQ_1669178154119","date_format":false},{"column_name":"cdtr_acct_no","alias_name":"","mq_id":"MQ_1669178191046","date_format":false},{"column_name":"dbtr_acct_no","alias_name":"","mq_id":"MQ_1669178191237","date_format":false},{"column_name":"intrbk_sttlm_amnt","alias_name":"","mq_id":"MQ_1669178191445","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1669178191661","date_format":false},{"column_name":"processing_system","alias_name":"","mq_id":"MQ_1669178227517","date_format":false},{"column_name":"process_status","alias_name":"","mq_id":"MQ_1669178227717","date_format":false},{"column_name":"Group_Name","alias_name":"","mq_id":"MQ_1669178227908","date_format":false},{"column_name":"Process_type","alias_name":"","mq_id":"MQ_1669178239274","date_format":false},{"column_name":"payment_mode","alias_name":"","mq_id":"MQ_1669178239466","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1669179866186","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1669179866480","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1669180239582","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1669714936628","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1669714936809","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669714937008","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1669714937193","date_format":false},{"column_name":"RR_MESSAGE_DESC","alias_name":"","mq_id":"MQ_1669714937383","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1669714937535","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028203","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028433","date_format":false},{"column_name":"ADDITIONAL_INFO","alias_name":"","mq_id":"MQ_1669715062065","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1669715075448","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716335899","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716336337","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716336495","date_format":false},{"column_name":"DBTR_CUST_TYPE","alias_name":"","mq_id":"MQ_1669716336659","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669716336826","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669716336982","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669716337154","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716337311","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716337475","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716337634","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337798","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337958","date_format":false},{"column_name":"CATEGORY_PURPOSE","alias_name":"","mq_id":"MQ_1669716338118","date_format":false},{"column_name":"CATEGORY_PURPOSE_PRTY","alias_name":"","mq_id":"MQ_1669716338271","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1669716460635","date_format":false},{"column_name":"BASE_CURRENCY","alias_name":"","mq_id":"MQ_1669716460839","date_format":false},{"column_name":"BASE_AMOUNT","alias_name":"","mq_id":"MQ_1669716461033","date_format":false},{"column_name":"HDR_TOTAL_RECORDS","alias_name":"","mq_id":"MQ_1669716461209","date_format":false},{"column_name":"HDR_TOTAL_AMOUNT","alias_name":"","mq_id":"MQ_1669716488348","date_format":false,"currency_format":true},{"column_name":"HDR_CLEARING_SYSTEM","alias_name":"","mq_id":"MQ_1669716488527","date_format":false},{"column_name":"CHARGE_BEARER","alias_name":"","mq_id":"MQ_1669716488729","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669716578903","date_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"","mq_id":"MQ_1669716579064","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1669716579241","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1669716579389","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1669716601499","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1669716601675","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1669716623271","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1669716623501","date_format":false},{"column_name":"ISSUER_TYPE_CODE","alias_name":"","mq_id":"MQ_1669716639834","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1669718495740","date_format":false},{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1669719333386","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1669719333580","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1669719333798","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1669719336508","date_format":false},{"column_name":"CBS_REF_NO","alias_name":"","mq_id":"MQ_1669721618850","date_format":false},{"column_name":"CBS_POSTING_FLAG","alias_name":"","mq_id":"MQ_1669721627964","date_format":false}],"joins":[]},"eq_text":"SELECT  NPSST_ID,  UETR,  VALUE_DATE,  ACCP_DATE_TIME,  CREATED_DATE,  DATEMI,  EXHF_ID,  CDTR_IBAN,  TENANT_ID,  TRAN_REF_ID,  DEPARTMENT_CODE,  PAYMENT_ENDTOEND_ID,  CLRSYSREF,  CDTR_ACCT_NO,  DBTR_ACCT_NO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  STATUS,  PROCESSING_SYSTEM,  PROCESS_STATUS,  GROUP_NAME,  PROCESS_TYPE,  PAYMENT_MODE,  RULE_GROUP,  NPSSTPL_ID,  DT_CODE,  DTT_CODE,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  MSG_ID,  PROCESS_NAME,  T24_RETURN_CODE ,  CBUAE_RETURN_CODE ,  REVERSAL_CODE,  ADDITIONAL_INFO ,  V_CODE ,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR ,  CHARGE_AMOUNT,  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTRRD_ID,  RR_DT_CODE,  RR_DTT_CODE,  MESSAGE_DATA,  PROCESS_CODE,  PROCESS_DETAIL,  RR_PROCESS_NAME,  RR_MESSAGE_DESC,  DBTR_ACCT_NAME ,  DBTR_PHONE_NO ,  DBTR_EMAIL_ID ,  DBTR_DOCUMENT_ID,  DBTR_IBAN ,  DBTR_CUST_TYPE ,  DBTR_PRVT_ID ,  DBTR_OTHER_ISSUER ,  CDTR_ACCT_NAME ,  CDTR_PHONE_NO ,  CDTR_EMAIL_ID ,  CDTR_DOCUMENT_ID ,  DR_SORT_CODE ,  CR_SORT_CODE ,  CATEGORY_PURPOSE ,  CATEGORY_PURPOSE_PRTY ,  CR_ACCT_IDENTIFICATION ,  BASE_CURRENCY ,  BASE_AMOUNT ,  HDR_TOTAL_RECORDS ,  HDR_TOTAL_AMOUNT,  HDR_CLEARING_SYSTEM ,  CHARGE_BEARER ,  REMITTANCE_INFO ,  ACCOUNT_CURRENCY,  CHANNEL_ID ,  CHANNEL_REFNO ,  CHANNEL_USERID ,  CHANNEL_PRODUCT ,  CHANNEL_SUB_PRODUCT ,  CHANNEL_TRAN_CODE ,  ISSUER_TYPE_CODE,  PROCESS_REF_NO,  RESPONSE_CODE,  CBS_REF_NO,  CBS_POSTING_FLAG FROM  (  SELECT   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,   NT.DEPARTMENT_CODE,   NT.TENANT_ID,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NTPL.STATUS,   NTPL.PROCESSING_SYSTEM,   NTPL.PROCESS_STATUS,   NTPL.GROUP_NAME,   NTPL.PROCESS_TYPE,   NTPL.PAYMENT_MODE,   NTPL.RULE_GROUP,   NTPL.NPSSTPL_ID,   NTPL.DT_CODE,   NTPL.DTT_CODE,   NTPL.REQUEST_DATA_JSON,   NTPL.RESPONSE_DATA_JSON,   NTPL.MSG_ID,   NTPL.PROCESS_NAME,   NTPL.T24_RETURN_CODE ,   NTPL.CBUAE_RETURN_CODE ,   NTPL.REVERSAL_CODE ,   NTPL.ADDITIONAL_INFO ,   NTPL.V_CODE ,   NTPL.AMOUNT_CREDITED,   NTPL.AMT_CR_LOC_CUR ,   NTPL.CHARGE_AMOUNT,   NTPL.PROCESS_REF_NO,   NTPL.RESPONSE_CODE,   CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION,   CONCAT(NTPL.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,   CONCAT(NTPL.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,   RR.NPSSTRRD_ID,   RR.RR_MSG_ID,   RR.PARENT_NPSSTRRD_REFNO,   RR.MESSAGE_DATA,   RR.PROCESS_CODE,   RR.PROCESS_DETAIL,   RR.NPSSTRRD_REFNO,   RR.RR_DT_CODE,   RR.RR_DTT_CODE,   RR.RR_PROCESS_NAME,   RR.RR_MESSAGE_DESC,   NT.DBTR_ACCT_NAME ,   NT.DBTR_PHONE_NO ,   NT.DBTR_EMAIL_ID ,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN ,   NT.DBTR_CUST_TYPE ,   NT.DBTR_PRVT_ID ,   NT.DBTR_OTHER_ISSUER ,   NT.CDTR_ACCT_NAME ,   NT.CDTR_PHONE_NO ,   NT.CDTR_EMAIL_ID ,   NT.CDTR_DOCUMENT_ID ,   NT.DR_SORT_CODE ,   NT.CR_SORT_CODE ,   NT.CATEGORY_PURPOSE ,   NT.CATEGORY_PURPOSE_PRTY ,   NT.CR_ACCT_IDENTIFICATION ,   NT.BASE_CURRENCY ,   NT.BASE_AMOUNT ,   NT.HDR_TOTAL_RECORDS ,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM ,   NT.CHARGE_BEARER ,   NT.REMITTANCE_INFO ,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID ,   NT.CHANNEL_REFNO ,   NT.CHANNEL_USERID ,   NT.CHANNEL_PRODUCT ,   NT.CHANNEL_SUB_PRODUCT ,   NT.CHANNEL_TRAN_CODE ,   NT.ISSUER_TYPE_CODE,   NT.CBS_REF_NO,   NT.CBS_POSTING_FLAG  FROM   NPSS_TRANSACTIONS NT  INNER JOIN (   SELECT    T.NPSSTPL_ID,    T.UETR,    T.STATUS,    T.PROCESSING_SYSTEM,    T.PROCESS_STATUS,    G.GROUP_NAME,    G.PROCESS_TYPE,    G.PAYMENT_MODE,    G.RULE_GROUP,    T.DT_CODE,    T.DTT_CODE,    T.REQUEST_DATA_JSON,    T.RESPONSE_DATA_JSON,    T.MSG_ID,    T.PROCESS_NAME,    T.T24_RETURN_CODE ,    T.CBUAE_RETURN_CODE ,    T.REVERSAL_CODE ,    T.ADDITIONAL_INFO ,    T.V_CODE,    T.AMOUNT_CREDITED,    T.AMT_CR_LOC_CUR,    T.CHARGE_AMOUNT,    T.PROCESS_REF_NO,    T.RESPONSE_CODE   FROM    (    SELECT     A.NPSSTPL_ID,     A.UETR,     A.STATUS,     A.PROCESSING_SYSTEM,     A.PROCESS_STATUS,     A.DT_CODE,     A.DTT_CODE,     A.REQUEST_DATA_JSON,     A.RESPONSE_DATA_JSON,     A.MSG_ID,     A.PROCESS_NAME,     A.T24_RETURN_CODE ,     A.CBUAE_RETURN_CODE ,     A.REVERSAL_CODE ,     A.ADDITIONAL_INFO ,     A.V_CODE ,     A.AMOUNT_CREDITED,     A.AMT_CR_LOC_CUR ,     A.CHARGE_AMOUNT,     A.PROCESS_REF_NO,     A.RESPONSE_CODE,     ROW_NUMBER() OVER(PARTITION BY A.UETR    ORDER BY     A.NPSSTPL_ID DESC) AS ROW_NUM    FROM     NPSS_TRN_PROCESS_LOG A ) T   INNER JOIN CORE_NC_STATUS_GROUP G ON    G.QUEUE_CODE = T.PROCESS_STATUS    AND G.PROCESS_QUEUE_STATUS = T.STATUS   WHERE    T.ROW_NUM = 1) NTPL ON   NT.UETR = NTPL.UETR  LEFT JOIN CORE_NC_CODE_DESCRIPTIONS CCD ON   CCD.CD_CODE = NTPL.REVERSAL_CODE   AND CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'  LEFT JOIN CORE_NC_RETURN_CODES T24RC ON   T24RC.RETURN_CODE = NTPL.T24_RETURN_CODE   AND T24RC.PROCESSING_SYSTEM = 'T24'  LEFT JOIN CORE_NC_RETURN_CODES CBUAERC ON   CBUAERC.RETURN_CODE = NTPL.CBUAE_RETURN_CODE   AND CBUAERC.PROCESSING_SYSTEM = 'CBUAE'  LEFT JOIN (   SELECT    B.NPSSTRRD_ID ,    B.MSG_ID AS RR_MSG_ID,    B.PARENT_NPSSTRRD_REFNO ,    B.MESSAGE_DATA ,    B.PROCESS_CODE ,    B.PROCESS_DETAIL ,    B.NPSSTRRD_REFNO,    B.UETR,    B.DT_CODE AS RR_DT_CODE,    B.DTT_CODE AS RR_DTT_CODE,    B.PROCESS_NAME AS RR_PROCESS_NAME,    B.MESSAGE_DESC AS RR_MESSAGE_DESC,    ROW_NUMBER() OVER(PARTITION BY B.UETR   ORDER BY    B.NPSSTRRD_ID DESC) AS ROW_NUM   FROM    NPSS_TRN_REQ_RESP_DTLS B ) RR ON   RR.UETR = NT.UETR   AND RR.ROW_NUM = 1 ) V $WHERE ORDER BY  NPSST_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Tran processLog LR CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"MI_LEVEL_GROUP_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"INTRBK_STTLM_CUR","binding_name":"INTRBK_STTLM_CUR","binding_value":"","source_name":"MI_LEVEL_INTRBK_STTLM_CUR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"RULE_GROUP","binding_name":"RULE_GROUP","binding_value":"","source_name":"RCT_INWARD_GROUP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"intrbk_sttlm_amnt","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"cdtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"payment_endtoend_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"uetr","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"clrsysref","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__ee_for_vlh() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_ui_view_log_history"
		let parent_source_id=""
		let event_code="e_1668508613591"
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
		let destn_id="navigation_ui_view_message_history"
		let parent_source_id=""
		let event_code="e_1668664267643"
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
	transaction_list__ee_from_tran_to_main_view_msg() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_ui_view_message"
		let parent_source_id=""
		let event_code="e_1669633160686"
		let event_params={"caller_name":"transaction_list__ee_from_tran_to_main_view_msg","event_desc":"EE from Tran to Main View MSG","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	transaction_list__ssr_main_tran_to_main_response_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="main_response_ui"
		let parent_source_id=""
		let event_code="e_1669639754623"
		let event_params={"caller_name":"transaction_list__ssr_main_tran_to_main_response_ui","event_desc":"SSR Main Tran to Main Response UI","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{}}
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
	transaction_list__ee_from_tran_to_main_view_resp() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_ui_view_response"
		let parent_source_id=""
		let event_code="e_1669639829974"
		let event_params={"caller_name":"transaction_list__ee_from_tran_to_main_view_resp","event_desc":"EE from Tran to Main View RESP","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	transaction_list__ee_from_tran_to_main_view_req() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_ui_view_request"
		let parent_source_id=""
		let event_code="e_1669639905622"
		let event_params={"caller_name":"transaction_list__ee_from_tran_to_main_view_req","event_desc":"EE from Tran to Main View REQ","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	transaction_list__bt_main_tran_to_main_message_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="main_message_detail_ui"
		let parent_source_id=""
		let event_code="e_1669640822371"
		let event_params={"caller_name":"transaction_list__bt_main_tran_to_main_message_ui","event_desc":"BT Main Tran to Main MEssage UI","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
		let handler_code="bind_tran"
		let internals=""
		let event_data={"transaction_list":{"e_1669640822371":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_4","event_code":"E_1669640822371","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS TRN REQ RESP DTLS","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"Y","dtt_value":{"type":"HARDCODED","value":"DTT_1304_1665903906193"},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={}
		try {
			this.handler.bind_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for tran list"
	svm_for_tran_list__cc_from_transaction_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_tran_list"
		let destn_id=""
		let parent_source_id="transaction_list"
		let event_code="e_1668683461353"
		let event_params={"caller_name":"svm_for_tran_list__cc_from_transaction_list","event_desc":"cc from transaction list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view tran"
	navigation_ui_view_tran__sp_for_vl() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_tran"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1668506665505"
		let event_params={"caller_name":"navigation_ui_view_tran__sp_for_vl","event_desc":"SP for vl","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_tran","raiseparam":{"profile_code":"BTL_1304_1668497253326"}}
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
	navigation_ui_view_tran__brfq_for_view_tl_cr_dr() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_tran"
		let destn_id="view_dr_cr_details"
		let parent_source_id=""
		let event_code="e_1669205514500"
		let event_params={"caller_name":"navigation_ui_view_tran__brfq_for_view_tl_cr_dr","event_desc":"BRFQ for view TL cr dr","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_tran","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669179871107","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Processlog LR MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"npsst_id","alias_name":"","mq_id":"MQ_1669178086386","date_format":false},{"column_name":"uetr","alias_name":"","mq_id":"MQ_1669178086562","date_format":false},{"column_name":"value_date","alias_name":"","mq_id":"MQ_1669178086753","date_format":true},{"column_name":"accp_date_time","alias_name":"","mq_id":"MQ_1669178086930","date_format":false},{"column_name":"created_date","alias_name":"","mq_id":"MQ_1669178147671","date_format":false},{"column_name":"exhf_id","alias_name":"","mq_id":"MQ_1669178153368","date_format":false},{"column_name":"cdtr_iban","alias_name":"","mq_id":"MQ_1669178153567","date_format":false},{"column_name":"tran_ref_id","alias_name":"","mq_id":"MQ_1669178153751","date_format":false},{"column_name":"payment_endtoend_id","alias_name":"","mq_id":"MQ_1669178153943","date_format":false},{"column_name":"clrsysref","alias_name":"","mq_id":"MQ_1669178154119","date_format":false},{"column_name":"cdtr_acct_no","alias_name":"","mq_id":"MQ_1669178191046","date_format":false},{"column_name":"dbtr_acct_no","alias_name":"","mq_id":"MQ_1669178191237","date_format":false},{"column_name":"intrbk_sttlm_amnt","alias_name":"","mq_id":"MQ_1669178191445","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1669178191661","date_format":false},{"column_name":"processing_system","alias_name":"","mq_id":"MQ_1669178227517","date_format":false},{"column_name":"process_status","alias_name":"","mq_id":"MQ_1669178227717","date_format":false},{"column_name":"Group_Name","alias_name":"","mq_id":"MQ_1669178227908","date_format":false},{"column_name":"Process_type","alias_name":"","mq_id":"MQ_1669178239274","date_format":false},{"column_name":"payment_mode","alias_name":"","mq_id":"MQ_1669178239466","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1669179866186","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1669179866480","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1669180239582","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1669714936628","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1669714936809","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669714937008","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1669714937193","date_format":false},{"column_name":"RR_MESSAGE_DESC","alias_name":"","mq_id":"MQ_1669714937383","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1669714937535","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028203","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028433","date_format":false},{"column_name":"ADDITIONAL_INFO","alias_name":"","mq_id":"MQ_1669715062065","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1669715075448","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716335899","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716336337","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716336495","date_format":false},{"column_name":"DBTR_CUST_TYPE","alias_name":"","mq_id":"MQ_1669716336659","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669716336826","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669716336982","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669716337154","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716337311","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716337475","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716337634","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337798","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337958","date_format":false},{"column_name":"CATEGORY_PURPOSE","alias_name":"","mq_id":"MQ_1669716338118","date_format":false},{"column_name":"CATEGORY_PURPOSE_PRTY","alias_name":"","mq_id":"MQ_1669716338271","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1669716460635","date_format":false},{"column_name":"BASE_CURRENCY","alias_name":"","mq_id":"MQ_1669716460839","date_format":false},{"column_name":"BASE_AMOUNT","alias_name":"","mq_id":"MQ_1669716461033","date_format":false},{"column_name":"HDR_TOTAL_RECORDS","alias_name":"","mq_id":"MQ_1669716461209","date_format":false},{"column_name":"HDR_TOTAL_AMOUNT","alias_name":"","mq_id":"MQ_1669716488348","date_format":false,"currency_format":true},{"column_name":"HDR_CLEARING_SYSTEM","alias_name":"","mq_id":"MQ_1669716488527","date_format":false},{"column_name":"CHARGE_BEARER","alias_name":"","mq_id":"MQ_1669716488729","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669716578903","date_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"","mq_id":"MQ_1669716579064","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1669716579241","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1669716579389","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1669716601499","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1669716601675","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1669716623271","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1669716623501","date_format":false},{"column_name":"ISSUER_TYPE_CODE","alias_name":"","mq_id":"MQ_1669716639834","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1669718495740","date_format":false},{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1669719333386","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1669719333580","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1669719333798","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1669719336508","date_format":false},{"column_name":"CBS_REF_NO","alias_name":"","mq_id":"MQ_1669721618850","date_format":false},{"column_name":"CBS_POSTING_FLAG","alias_name":"","mq_id":"MQ_1669721627964","date_format":false}],"joins":[]},"eq_text":"SELECT  NPSST_ID,  UETR,  VALUE_DATE,  ACCP_DATE_TIME,  CREATED_DATE,  DATEMI,  EXHF_ID,  CDTR_IBAN,  TENANT_ID,  TRAN_REF_ID,  DEPARTMENT_CODE,  PAYMENT_ENDTOEND_ID,  CLRSYSREF,  CDTR_ACCT_NO,  DBTR_ACCT_NO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  STATUS,  PROCESSING_SYSTEM,  PROCESS_STATUS,  GROUP_NAME,  PROCESS_TYPE,  PAYMENT_MODE,  RULE_GROUP,  NPSSTPL_ID,  DT_CODE,  DTT_CODE,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  MSG_ID,  PROCESS_NAME,  T24_RETURN_CODE ,  CBUAE_RETURN_CODE ,  REVERSAL_CODE,  ADDITIONAL_INFO ,  V_CODE ,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR ,  CHARGE_AMOUNT,  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTRRD_ID,  RR_DT_CODE,  RR_DTT_CODE,  MESSAGE_DATA,  PROCESS_CODE,  PROCESS_DETAIL,  RR_PROCESS_NAME,  RR_MESSAGE_DESC,  DBTR_ACCT_NAME ,  DBTR_PHONE_NO ,  DBTR_EMAIL_ID ,  DBTR_DOCUMENT_ID,  DBTR_IBAN ,  DBTR_CUST_TYPE ,  DBTR_PRVT_ID ,  DBTR_OTHER_ISSUER ,  CDTR_ACCT_NAME ,  CDTR_PHONE_NO ,  CDTR_EMAIL_ID ,  CDTR_DOCUMENT_ID ,  DR_SORT_CODE ,  CR_SORT_CODE ,  CATEGORY_PURPOSE ,  CATEGORY_PURPOSE_PRTY ,  CR_ACCT_IDENTIFICATION ,  BASE_CURRENCY ,  BASE_AMOUNT ,  HDR_TOTAL_RECORDS ,  HDR_TOTAL_AMOUNT,  HDR_CLEARING_SYSTEM ,  CHARGE_BEARER ,  REMITTANCE_INFO ,  ACCOUNT_CURRENCY,  CHANNEL_ID ,  CHANNEL_REFNO ,  CHANNEL_USERID ,  CHANNEL_PRODUCT ,  CHANNEL_SUB_PRODUCT ,  CHANNEL_TRAN_CODE ,  ISSUER_TYPE_CODE,  PROCESS_REF_NO,  RESPONSE_CODE,  CBS_REF_NO,  CBS_POSTING_FLAG FROM  (  SELECT   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,   NT.DEPARTMENT_CODE,   NT.TENANT_ID,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NTPL.STATUS,   NTPL.PROCESSING_SYSTEM,   NTPL.PROCESS_STATUS,   NTPL.GROUP_NAME,   NTPL.PROCESS_TYPE,   NTPL.PAYMENT_MODE,   NTPL.RULE_GROUP,   NTPL.NPSSTPL_ID,   NTPL.DT_CODE,   NTPL.DTT_CODE,   NTPL.REQUEST_DATA_JSON,   NTPL.RESPONSE_DATA_JSON,   NTPL.MSG_ID,   NTPL.PROCESS_NAME,   NTPL.T24_RETURN_CODE ,   NTPL.CBUAE_RETURN_CODE ,   NTPL.REVERSAL_CODE ,   NTPL.ADDITIONAL_INFO ,   NTPL.V_CODE ,   NTPL.AMOUNT_CREDITED,   NTPL.AMT_CR_LOC_CUR ,   NTPL.CHARGE_AMOUNT,   NTPL.PROCESS_REF_NO,   NTPL.RESPONSE_CODE,   CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION,   CONCAT(NTPL.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,   CONCAT(NTPL.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,   RR.NPSSTRRD_ID,   RR.RR_MSG_ID,   RR.PARENT_NPSSTRRD_REFNO,   RR.MESSAGE_DATA,   RR.PROCESS_CODE,   RR.PROCESS_DETAIL,   RR.NPSSTRRD_REFNO,   RR.RR_DT_CODE,   RR.RR_DTT_CODE,   RR.RR_PROCESS_NAME,   RR.RR_MESSAGE_DESC,   NT.DBTR_ACCT_NAME ,   NT.DBTR_PHONE_NO ,   NT.DBTR_EMAIL_ID ,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN ,   NT.DBTR_CUST_TYPE ,   NT.DBTR_PRVT_ID ,   NT.DBTR_OTHER_ISSUER ,   NT.CDTR_ACCT_NAME ,   NT.CDTR_PHONE_NO ,   NT.CDTR_EMAIL_ID ,   NT.CDTR_DOCUMENT_ID ,   NT.DR_SORT_CODE ,   NT.CR_SORT_CODE ,   NT.CATEGORY_PURPOSE ,   NT.CATEGORY_PURPOSE_PRTY ,   NT.CR_ACCT_IDENTIFICATION ,   NT.BASE_CURRENCY ,   NT.BASE_AMOUNT ,   NT.HDR_TOTAL_RECORDS ,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM ,   NT.CHARGE_BEARER ,   NT.REMITTANCE_INFO ,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID ,   NT.CHANNEL_REFNO ,   NT.CHANNEL_USERID ,   NT.CHANNEL_PRODUCT ,   NT.CHANNEL_SUB_PRODUCT ,   NT.CHANNEL_TRAN_CODE ,   NT.ISSUER_TYPE_CODE,   NT.CBS_REF_NO,   NT.CBS_POSTING_FLAG  FROM   NPSS_TRANSACTIONS NT  INNER JOIN (   SELECT    T.NPSSTPL_ID,    T.UETR,    T.STATUS,    T.PROCESSING_SYSTEM,    T.PROCESS_STATUS,    G.GROUP_NAME,    G.PROCESS_TYPE,    G.PAYMENT_MODE,    G.RULE_GROUP,    T.DT_CODE,    T.DTT_CODE,    T.REQUEST_DATA_JSON,    T.RESPONSE_DATA_JSON,    T.MSG_ID,    T.PROCESS_NAME,    T.T24_RETURN_CODE ,    T.CBUAE_RETURN_CODE ,    T.REVERSAL_CODE ,    T.ADDITIONAL_INFO ,    T.V_CODE,    T.AMOUNT_CREDITED,    T.AMT_CR_LOC_CUR,    T.CHARGE_AMOUNT,    T.PROCESS_REF_NO,    T.RESPONSE_CODE   FROM    (    SELECT     A.NPSSTPL_ID,     A.UETR,     A.STATUS,     A.PROCESSING_SYSTEM,     A.PROCESS_STATUS,     A.DT_CODE,     A.DTT_CODE,     A.REQUEST_DATA_JSON,     A.RESPONSE_DATA_JSON,     A.MSG_ID,     A.PROCESS_NAME,     A.T24_RETURN_CODE ,     A.CBUAE_RETURN_CODE ,     A.REVERSAL_CODE ,     A.ADDITIONAL_INFO ,     A.V_CODE ,     A.AMOUNT_CREDITED,     A.AMT_CR_LOC_CUR ,     A.CHARGE_AMOUNT,     A.PROCESS_REF_NO,     A.RESPONSE_CODE,     ROW_NUMBER() OVER(PARTITION BY A.UETR    ORDER BY     A.NPSSTPL_ID DESC) AS ROW_NUM    FROM     NPSS_TRN_PROCESS_LOG A ) T   INNER JOIN CORE_NC_STATUS_GROUP G ON    G.QUEUE_CODE = T.PROCESS_STATUS    AND G.PROCESS_QUEUE_STATUS = T.STATUS   WHERE    T.ROW_NUM = 1) NTPL ON   NT.UETR = NTPL.UETR  LEFT JOIN CORE_NC_CODE_DESCRIPTIONS CCD ON   CCD.CD_CODE = NTPL.REVERSAL_CODE   AND CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'  LEFT JOIN CORE_NC_RETURN_CODES T24RC ON   T24RC.RETURN_CODE = NTPL.T24_RETURN_CODE   AND T24RC.PROCESSING_SYSTEM = 'T24'  LEFT JOIN CORE_NC_RETURN_CODES CBUAERC ON   CBUAERC.RETURN_CODE = NTPL.CBUAE_RETURN_CODE   AND CBUAERC.PROCESSING_SYSTEM = 'CBUAE'  LEFT JOIN (   SELECT    B.NPSSTRRD_ID ,    B.MSG_ID AS RR_MSG_ID,    B.PARENT_NPSSTRRD_REFNO ,    B.MESSAGE_DATA ,    B.PROCESS_CODE ,    B.PROCESS_DETAIL ,    B.NPSSTRRD_REFNO,    B.UETR,    B.DT_CODE AS RR_DT_CODE,    B.DTT_CODE AS RR_DTT_CODE,    B.PROCESS_NAME AS RR_PROCESS_NAME,    B.MESSAGE_DESC AS RR_MESSAGE_DESC,    ROW_NUMBER() OVER(PARTITION BY B.UETR   ORDER BY    B.NPSSTRRD_ID DESC) AS ROW_NUM   FROM    NPSS_TRN_REQ_RESP_DTLS B ) RR ON   RR.UETR = NT.UETR   AND RR.ROW_NUM = 1 ) V $WHERE ORDER BY  NPSST_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS LR Vertical Dr Cr CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Tran Id","target_column":"npsst_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Txn Value Date","target_column":"value_date","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Tran Created Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Acceptance Date Time","target_column":"accp_date_time","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"uetr","target_column":"uetr","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Sort Code","target_column":"CR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"cdtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Number","target_column":"cdtr_acct_no","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Sort Code","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Number","target_column":"dbtr_acct_no","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Private Identification","target_column":"DBTR_PRVT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Other Issuer","target_column":"DBTR_OTHER_ISSUER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Category Purpose","target_column":"CATEGORY_PURPOSE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Issuer Type Code","target_column":"ISSUER_TYPE_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remittance Info","target_column":"REMITTANCE_INFO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view tran"
	navigation_ui_view_tran__brfq_for_view_tl_payment() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_tran"
		let destn_id="view_payment_details"
		let parent_source_id=""
		let event_code="e_1669205566102"
		let event_params={"caller_name":"navigation_ui_view_tran__brfq_for_view_tl_payment","event_desc":"BRFQ for view TL payment","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_tran","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_19","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669209378559","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Processlog LR MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"npsst_id","alias_name":"","mq_id":"MQ_1669178086386","date_format":false},{"column_name":"uetr","alias_name":"","mq_id":"MQ_1669178086562","date_format":false},{"column_name":"value_date","alias_name":"","mq_id":"MQ_1669178086753","date_format":true},{"column_name":"accp_date_time","alias_name":"","mq_id":"MQ_1669178086930","date_format":false},{"column_name":"created_date","alias_name":"","mq_id":"MQ_1669178147671","date_format":false},{"column_name":"exhf_id","alias_name":"","mq_id":"MQ_1669178153368","date_format":false},{"column_name":"cdtr_iban","alias_name":"","mq_id":"MQ_1669178153567","date_format":false},{"column_name":"tran_ref_id","alias_name":"","mq_id":"MQ_1669178153751","date_format":false},{"column_name":"payment_endtoend_id","alias_name":"","mq_id":"MQ_1669178153943","date_format":false},{"column_name":"clrsysref","alias_name":"","mq_id":"MQ_1669178154119","date_format":false},{"column_name":"cdtr_acct_no","alias_name":"","mq_id":"MQ_1669178191046","date_format":false},{"column_name":"dbtr_acct_no","alias_name":"","mq_id":"MQ_1669178191237","date_format":false},{"column_name":"intrbk_sttlm_amnt","alias_name":"","mq_id":"MQ_1669178191445","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1669178191661","date_format":false},{"column_name":"processing_system","alias_name":"","mq_id":"MQ_1669178227517","date_format":false},{"column_name":"process_status","alias_name":"","mq_id":"MQ_1669178227717","date_format":false},{"column_name":"Group_Name","alias_name":"","mq_id":"MQ_1669178227908","date_format":false},{"column_name":"Process_type","alias_name":"","mq_id":"MQ_1669178239274","date_format":false},{"column_name":"payment_mode","alias_name":"","mq_id":"MQ_1669178239466","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1669179866186","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1669179866480","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1669180239582","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1669714936628","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1669714936809","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669714937008","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1669714937193","date_format":false},{"column_name":"RR_MESSAGE_DESC","alias_name":"","mq_id":"MQ_1669714937383","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1669714937535","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028203","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028433","date_format":false},{"column_name":"ADDITIONAL_INFO","alias_name":"","mq_id":"MQ_1669715062065","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1669715075448","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716335899","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716336337","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716336495","date_format":false},{"column_name":"DBTR_CUST_TYPE","alias_name":"","mq_id":"MQ_1669716336659","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669716336826","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669716336982","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669716337154","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716337311","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716337475","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716337634","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337798","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337958","date_format":false},{"column_name":"CATEGORY_PURPOSE","alias_name":"","mq_id":"MQ_1669716338118","date_format":false},{"column_name":"CATEGORY_PURPOSE_PRTY","alias_name":"","mq_id":"MQ_1669716338271","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1669716460635","date_format":false},{"column_name":"BASE_CURRENCY","alias_name":"","mq_id":"MQ_1669716460839","date_format":false},{"column_name":"BASE_AMOUNT","alias_name":"","mq_id":"MQ_1669716461033","date_format":false},{"column_name":"HDR_TOTAL_RECORDS","alias_name":"","mq_id":"MQ_1669716461209","date_format":false},{"column_name":"HDR_TOTAL_AMOUNT","alias_name":"","mq_id":"MQ_1669716488348","date_format":false,"currency_format":true},{"column_name":"HDR_CLEARING_SYSTEM","alias_name":"","mq_id":"MQ_1669716488527","date_format":false},{"column_name":"CHARGE_BEARER","alias_name":"","mq_id":"MQ_1669716488729","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669716578903","date_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"","mq_id":"MQ_1669716579064","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1669716579241","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1669716579389","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1669716601499","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1669716601675","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1669716623271","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1669716623501","date_format":false},{"column_name":"ISSUER_TYPE_CODE","alias_name":"","mq_id":"MQ_1669716639834","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1669718495740","date_format":false},{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1669719333386","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1669719333580","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1669719333798","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1669719336508","date_format":false},{"column_name":"CBS_REF_NO","alias_name":"","mq_id":"MQ_1669721618850","date_format":false},{"column_name":"CBS_POSTING_FLAG","alias_name":"","mq_id":"MQ_1669721627964","date_format":false}],"joins":[]},"eq_text":"SELECT  NPSST_ID,  UETR,  VALUE_DATE,  ACCP_DATE_TIME,  CREATED_DATE,  DATEMI,  EXHF_ID,  CDTR_IBAN,  TENANT_ID,  TRAN_REF_ID,  DEPARTMENT_CODE,  PAYMENT_ENDTOEND_ID,  CLRSYSREF,  CDTR_ACCT_NO,  DBTR_ACCT_NO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  STATUS,  PROCESSING_SYSTEM,  PROCESS_STATUS,  GROUP_NAME,  PROCESS_TYPE,  PAYMENT_MODE,  RULE_GROUP,  NPSSTPL_ID,  DT_CODE,  DTT_CODE,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  MSG_ID,  PROCESS_NAME,  T24_RETURN_CODE ,  CBUAE_RETURN_CODE ,  REVERSAL_CODE,  ADDITIONAL_INFO ,  V_CODE ,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR ,  CHARGE_AMOUNT,  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTRRD_ID,  RR_DT_CODE,  RR_DTT_CODE,  MESSAGE_DATA,  PROCESS_CODE,  PROCESS_DETAIL,  RR_PROCESS_NAME,  RR_MESSAGE_DESC,  DBTR_ACCT_NAME ,  DBTR_PHONE_NO ,  DBTR_EMAIL_ID ,  DBTR_DOCUMENT_ID,  DBTR_IBAN ,  DBTR_CUST_TYPE ,  DBTR_PRVT_ID ,  DBTR_OTHER_ISSUER ,  CDTR_ACCT_NAME ,  CDTR_PHONE_NO ,  CDTR_EMAIL_ID ,  CDTR_DOCUMENT_ID ,  DR_SORT_CODE ,  CR_SORT_CODE ,  CATEGORY_PURPOSE ,  CATEGORY_PURPOSE_PRTY ,  CR_ACCT_IDENTIFICATION ,  BASE_CURRENCY ,  BASE_AMOUNT ,  HDR_TOTAL_RECORDS ,  HDR_TOTAL_AMOUNT,  HDR_CLEARING_SYSTEM ,  CHARGE_BEARER ,  REMITTANCE_INFO ,  ACCOUNT_CURRENCY,  CHANNEL_ID ,  CHANNEL_REFNO ,  CHANNEL_USERID ,  CHANNEL_PRODUCT ,  CHANNEL_SUB_PRODUCT ,  CHANNEL_TRAN_CODE ,  ISSUER_TYPE_CODE,  PROCESS_REF_NO,  RESPONSE_CODE,  CBS_REF_NO,  CBS_POSTING_FLAG FROM  (  SELECT   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,   NT.DEPARTMENT_CODE,   NT.TENANT_ID,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NTPL.STATUS,   NTPL.PROCESSING_SYSTEM,   NTPL.PROCESS_STATUS,   NTPL.GROUP_NAME,   NTPL.PROCESS_TYPE,   NTPL.PAYMENT_MODE,   NTPL.RULE_GROUP,   NTPL.NPSSTPL_ID,   NTPL.DT_CODE,   NTPL.DTT_CODE,   NTPL.REQUEST_DATA_JSON,   NTPL.RESPONSE_DATA_JSON,   NTPL.MSG_ID,   NTPL.PROCESS_NAME,   NTPL.T24_RETURN_CODE ,   NTPL.CBUAE_RETURN_CODE ,   NTPL.REVERSAL_CODE ,   NTPL.ADDITIONAL_INFO ,   NTPL.V_CODE ,   NTPL.AMOUNT_CREDITED,   NTPL.AMT_CR_LOC_CUR ,   NTPL.CHARGE_AMOUNT,   NTPL.PROCESS_REF_NO,   NTPL.RESPONSE_CODE,   CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION,   CONCAT(NTPL.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,   CONCAT(NTPL.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,   RR.NPSSTRRD_ID,   RR.RR_MSG_ID,   RR.PARENT_NPSSTRRD_REFNO,   RR.MESSAGE_DATA,   RR.PROCESS_CODE,   RR.PROCESS_DETAIL,   RR.NPSSTRRD_REFNO,   RR.RR_DT_CODE,   RR.RR_DTT_CODE,   RR.RR_PROCESS_NAME,   RR.RR_MESSAGE_DESC,   NT.DBTR_ACCT_NAME ,   NT.DBTR_PHONE_NO ,   NT.DBTR_EMAIL_ID ,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN ,   NT.DBTR_CUST_TYPE ,   NT.DBTR_PRVT_ID ,   NT.DBTR_OTHER_ISSUER ,   NT.CDTR_ACCT_NAME ,   NT.CDTR_PHONE_NO ,   NT.CDTR_EMAIL_ID ,   NT.CDTR_DOCUMENT_ID ,   NT.DR_SORT_CODE ,   NT.CR_SORT_CODE ,   NT.CATEGORY_PURPOSE ,   NT.CATEGORY_PURPOSE_PRTY ,   NT.CR_ACCT_IDENTIFICATION ,   NT.BASE_CURRENCY ,   NT.BASE_AMOUNT ,   NT.HDR_TOTAL_RECORDS ,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM ,   NT.CHARGE_BEARER ,   NT.REMITTANCE_INFO ,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID ,   NT.CHANNEL_REFNO ,   NT.CHANNEL_USERID ,   NT.CHANNEL_PRODUCT ,   NT.CHANNEL_SUB_PRODUCT ,   NT.CHANNEL_TRAN_CODE ,   NT.ISSUER_TYPE_CODE,   NT.CBS_REF_NO,   NT.CBS_POSTING_FLAG  FROM   NPSS_TRANSACTIONS NT  INNER JOIN (   SELECT    T.NPSSTPL_ID,    T.UETR,    T.STATUS,    T.PROCESSING_SYSTEM,    T.PROCESS_STATUS,    G.GROUP_NAME,    G.PROCESS_TYPE,    G.PAYMENT_MODE,    G.RULE_GROUP,    T.DT_CODE,    T.DTT_CODE,    T.REQUEST_DATA_JSON,    T.RESPONSE_DATA_JSON,    T.MSG_ID,    T.PROCESS_NAME,    T.T24_RETURN_CODE ,    T.CBUAE_RETURN_CODE ,    T.REVERSAL_CODE ,    T.ADDITIONAL_INFO ,    T.V_CODE,    T.AMOUNT_CREDITED,    T.AMT_CR_LOC_CUR,    T.CHARGE_AMOUNT,    T.PROCESS_REF_NO,    T.RESPONSE_CODE   FROM    (    SELECT     A.NPSSTPL_ID,     A.UETR,     A.STATUS,     A.PROCESSING_SYSTEM,     A.PROCESS_STATUS,     A.DT_CODE,     A.DTT_CODE,     A.REQUEST_DATA_JSON,     A.RESPONSE_DATA_JSON,     A.MSG_ID,     A.PROCESS_NAME,     A.T24_RETURN_CODE ,     A.CBUAE_RETURN_CODE ,     A.REVERSAL_CODE ,     A.ADDITIONAL_INFO ,     A.V_CODE ,     A.AMOUNT_CREDITED,     A.AMT_CR_LOC_CUR ,     A.CHARGE_AMOUNT,     A.PROCESS_REF_NO,     A.RESPONSE_CODE,     ROW_NUMBER() OVER(PARTITION BY A.UETR    ORDER BY     A.NPSSTPL_ID DESC) AS ROW_NUM    FROM     NPSS_TRN_PROCESS_LOG A ) T   INNER JOIN CORE_NC_STATUS_GROUP G ON    G.QUEUE_CODE = T.PROCESS_STATUS    AND G.PROCESS_QUEUE_STATUS = T.STATUS   WHERE    T.ROW_NUM = 1) NTPL ON   NT.UETR = NTPL.UETR  LEFT JOIN CORE_NC_CODE_DESCRIPTIONS CCD ON   CCD.CD_CODE = NTPL.REVERSAL_CODE   AND CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'  LEFT JOIN CORE_NC_RETURN_CODES T24RC ON   T24RC.RETURN_CODE = NTPL.T24_RETURN_CODE   AND T24RC.PROCESSING_SYSTEM = 'T24'  LEFT JOIN CORE_NC_RETURN_CODES CBUAERC ON   CBUAERC.RETURN_CODE = NTPL.CBUAE_RETURN_CODE   AND CBUAERC.PROCESSING_SYSTEM = 'CBUAE'  LEFT JOIN (   SELECT    B.NPSSTRRD_ID ,    B.MSG_ID AS RR_MSG_ID,    B.PARENT_NPSSTRRD_REFNO ,    B.MESSAGE_DATA ,    B.PROCESS_CODE ,    B.PROCESS_DETAIL ,    B.NPSSTRRD_REFNO,    B.UETR,    B.DT_CODE AS RR_DT_CODE,    B.DTT_CODE AS RR_DTT_CODE,    B.PROCESS_NAME AS RR_PROCESS_NAME,    B.MESSAGE_DESC AS RR_MESSAGE_DESC,    ROW_NUMBER() OVER(PARTITION BY B.UETR   ORDER BY    B.NPSSTRRD_ID DESC) AS ROW_NUM   FROM    NPSS_TRN_REQ_RESP_DTLS B ) RR ON   RR.UETR = NT.UETR   AND RR.ROW_NUM = 1 ) V $WHERE ORDER BY  NPSST_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS LR Vertical Payment CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"intrbk_sttlm_amnt","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Batch Id","target_column":"exhf_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"clrsysref","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E reference id","target_column":"payment_endtoend_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Ref ID","target_column":"tran_ref_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBS Reference Number","target_column":"CBS_REF_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message ID","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Description","target_column":"RR_MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Code","target_column":"PROCESS_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Reference Number","target_column":"PROCESS_REF_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"processing_system","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Additional Information","target_column":"ADDITIONAL_INFO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Code & Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Code & Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Code & Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"process_status","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let event_code="e_1668499872975"
		let event_params={"caller_name":"back_ui_back__sp_for_back","event_desc":"SP for back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"back_ui_back","raiseparam":{"profile_code":"BTL_1304_1668497054916"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__cu_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_clear"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1668499967470"
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__cu_for_navigation_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1668500003129"
		let event_params={"caller_name":"navigation_ui_search__cu_for_navigation_search","event_desc":"CU for navigation search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_search","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__spap_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1668506366649"
		let event_params={"caller_name":"navigation_ui_search__spap_for_search","event_desc":"SPAP for search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_for_search","selector":"p_search_layout","profile_code":"BTL_1304_1668497202456","window_title":"Search","window_height":"","window_width":"auto","window_close_icon":"Y","eventdes":"spap_for_search","eventcode":"E_1668506366649"}}
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
	navigation_ui_search__disable_by_click_on_nav_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_search"
		let destn_id="navigation_ui_search"
		let parent_source_id=""
		let event_code="e_1669217284853"
		let event_params={"caller_name":"navigation_ui_search__disable_by_click_on_nav_search","event_desc":"Disable by click on Nav Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_search","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view log history"
	navigation_ui_view_log_history__brfq_for_hdl() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_log_history"
		let destn_id="history_detail"
		let parent_source_id=""
		let event_code="e_1668503714503"
		let event_params={"caller_name":"navigation_ui_view_log_history__brfq_for_hdl","event_desc":"BRFQ for HDL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_log_history","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_hdl__sfr_for_history_detail,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_8","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669179487737","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"SELECT REVERSAL_DESCRIPTION,        T24_RETURN_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE,        REVERSAL_DESC,        T24_RETURN_DESC,        CBUAE_RETURN_DESC,        TENANT_ID,        DEPARTMENT_CODE,        DT_CODE,        DTT_CODE   FROM (SELECT A.NPSSTPL_ID,                A.MSG_ID,                A.UETR,                A.NPSSTRRD_REFNO,                A.PROCESS_NAME,                A.PROCESSING_SYSTEM,                A.RESPONSE_CODE,                A.PROCESS_REF_NO,                A.RESPONSE_DATA,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS CREATEDDATEMILISEC,                A.CREATED_DATE,                A.PROCESS_STATUS,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.TENANT_ID,                A.REQUEST_DATA_JSON,                A.RESPONSE_DATA_JSON,                A.T24_RETURN_CODE,                NT.DEPARTMENT_CODE,                A.ADDITIONAL_INFO,                T24RC.RETURN_DESCRIPTION AS T24_RETURN_DESC,                CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                A.CBUAE_RETURN_CODE,                CBUAERC.RETURN_DESCRIPTION AS CBUAE_RETURN_DESC,                CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,                A.REVERSAL_CODE,                CCD.CD_DESCRIPTION AS REVERSAL_DESC,                CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION           FROM NPSS_TRN_PROCESS_LOG A           LEFT JOIN <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD ON CCD.CD_CODE =                                                                   A.REVERSAL_CODE                                                               AND CCD.CD_CATEGORY =                                                                   'REVERSAL_REASON_IDENTIFIER_CODE'           LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES T24RC ON T24RC.RETURN_CODE =                                                                A.T24_RETURN_CODE                                                            AND T24RC.PROCESSING_SYSTEM =                                                                'T24'           LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES CBUAERC ON CBUAERC.RETURN_CODE =                                                                  A.CBUAE_RETURN_CODE                                                              AND CBUAERC.PROCESSING_SYSTEM =                                                                  'CBUAE'          INNER JOIN NPSS_TRANSACTIONS NT ON NT.UETR = A.UETR          ORDER BY A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view log history"
	navigation_ui_view_log_history__sp_for_vlh() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_log_history"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1668506699271"
		let event_params={"caller_name":"navigation_ui_view_log_history__sp_for_vlh","event_desc":"SP for VLH","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_log_history","raiseparam":{"profile_code":"BTL_1304_1668497379186"}}
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

	//Handler for INTERNAL event of "brfq for hdl"
	brfq_for_hdl__sfr_for_history_detail(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_hdl"
		let destn_id="history_detail"
		let parent_source_id="navigation_ui_view_log_history"
		let event_code="e_1668687875879"
		let event_params={"caller_name":"brfq_for_hdl__sfr_for_history_detail","event_desc":"SFR for History Detail","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_log_history","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_8","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669179487737","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"SELECT REVERSAL_DESCRIPTION,        T24_RETURN_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE,        REVERSAL_DESC,        T24_RETURN_DESC,        CBUAE_RETURN_DESC,        TENANT_ID,        DEPARTMENT_CODE,        DT_CODE,        DTT_CODE   FROM (SELECT A.NPSSTPL_ID,                A.MSG_ID,                A.UETR,                A.NPSSTRRD_REFNO,                A.PROCESS_NAME,                A.PROCESSING_SYSTEM,                A.RESPONSE_CODE,                A.PROCESS_REF_NO,                A.RESPONSE_DATA,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS CREATEDDATEMILISEC,                A.CREATED_DATE,                A.PROCESS_STATUS,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.TENANT_ID,                A.REQUEST_DATA_JSON,                A.RESPONSE_DATA_JSON,                A.T24_RETURN_CODE,                NT.DEPARTMENT_CODE,                A.ADDITIONAL_INFO,                T24RC.RETURN_DESCRIPTION AS T24_RETURN_DESC,                CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                A.CBUAE_RETURN_CODE,                CBUAERC.RETURN_DESCRIPTION AS CBUAE_RETURN_DESC,                CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,                A.REVERSAL_CODE,                CCD.CD_DESCRIPTION AS REVERSAL_DESC,                CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION           FROM NPSS_TRN_PROCESS_LOG A           LEFT JOIN <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD ON CCD.CD_CODE =                                                                   A.REVERSAL_CODE                                                               AND CCD.CD_CATEGORY =                                                                   'REVERSAL_REASON_IDENTIFIER_CODE'           LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES T24RC ON T24RC.RETURN_CODE =                                                                A.T24_RETURN_CODE                                                            AND T24RC.PROCESSING_SYSTEM =                                                                'T24'           LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES CBUAERC ON CBUAERC.RETURN_CODE =                                                                  A.CBUAE_RETURN_CODE                                                              AND CBUAERC.PROCESSING_SYSTEM =                                                                  'CBUAE'          INNER JOIN NPSS_TRANSACTIONS NT ON NT.UETR = A.UETR          ORDER BY A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui reset"
	navigation_ui_reset__rs_for_reset_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_reset"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1668577560568"
		let event_params={"caller_name":"navigation_ui_reset__rs_for_reset_btn","event_desc":"RS for reset btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_reset","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "process by system"
	process_by_system__svm_for_ssl_chart() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_by_system"
		let destn_id="process_by_system"
		let parent_source_id=""
		let event_code="e_1668578619665"
		let event_params={"caller_name":"process_by_system__svm_for_ssl_chart","event_desc":"SVM for SSL Chart","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_by_system","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_ssl_chart__cc_from_summary_status_level,svm_for_ssl_chart__e_1669647944011,"
		let event_data={"process_by_system":{"e_1668578619665":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_9","event_code":"E_1668578619665","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS TRN REQ RESP DTLS","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"PROCESSING_SYSTEM","level":"MI_LEVEL","name":"MI_LEVEL_PROCESSING_SYSTEM","setd3name":"PROCESSING_SYSTEM"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_9","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669179711260","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Row Processing System MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1669177940929","date_format":false},{"column_name":"PS_COUNT","alias_name":"","mq_id":"MQ_1669177941144","date_format":false}],"joins":[]},"eq_text":"SELECT  PROCESSING_SYSTEM,  COUNT(PROCESSING_SYSTEM) AS PS_COUNT FROM  (  SELECT   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NT.TENANT_ID,   NT.DEPARTMENT_CODE,   NTPL.STATUS,   NTPL.PROCESSING_SYSTEM,   NTPL.PROCESS_STATUS,   NTPL.GROUP_NAME,   NTPL.PROCESS_TYPE,   NTPL.PAYMENT_MODE,   NTPL.RULE_GROUP,   NTPL.NPSSTPL_ID,   NTPL.DT_CODE,   NTPL.DTT_CODE,   NTPL.REQUEST_DATA_JSON,   NTPL.RESPONSE_DATA_JSON,   NTPL.MSG_ID,   NTPL.PROCESS_NAME,   RR.NPSSTRRD_ID,   RR.RR_MSG_ID,   RR.PARENT_NPSSTRRD_REFNO,   RR.MESSAGE_DATA,   RR.PROCESS_CODE,   RR.PROCESS_DETAIL,   RR.NPSSTRRD_REFNO,   RR.RR_DT_CODE,   RR.RR_DTT_CODE,   RR.RR_PROCESS_NAME,   RR.RR_MESSAGE_DESC,   NT.DBTR_ACCT_NAME ,   NT.DBTR_PHONE_NO ,   NT.DBTR_EMAIL_ID ,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN ,   NT.DBTR_CUST_TYPE ,   NT.DBTR_PRVT_ID ,   NT.DBTR_OTHER_ISSUER ,   NT.CDTR_ACCT_NAME ,   NT.CDTR_PHONE_NO ,   NT.CDTR_EMAIL_ID ,   NT.CDTR_DOCUMENT_ID ,   NT.DR_SORT_CODE ,   NT.CR_SORT_CODE ,   NT.CATEGORY_PURPOSE ,   NT.CATEGORY_PURPOSE_PRTY ,   NT.CR_ACCT_IDENTIFICATION ,   NT.BASE_CURRENCY ,   NT.BASE_AMOUNT ,   NT.HDR_TOTAL_RECORDS ,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM ,   NT.CHARGE_BEARER ,   NT.REMITTANCE_INFO ,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID ,   NT.CHANNEL_REFNO ,   NT.CHANNEL_USERID ,   NT.CHANNEL_PRODUCT ,   NT.CHANNEL_SUB_PRODUCT ,   NT.CHANNEL_TRAN_CODE ,   NT.ISSUER_TYPE_CODE  FROM   NPSS_TRANSACTIONS NT  INNER JOIN (   SELECT    T.NPSSTPL_ID,    T.UETR,    T.STATUS,    T.PROCESSING_SYSTEM,    T.PROCESS_STATUS,    G.GROUP_NAME,    G.PROCESS_TYPE,    G.PAYMENT_MODE,    G.RULE_GROUP,    T.DT_CODE,    T.DTT_CODE,    T.REQUEST_DATA_JSON,    T.RESPONSE_DATA_JSON,    T.MSG_ID,    T.PROCESS_NAME   FROM    (    SELECT     A.NPSSTPL_ID,     A.UETR,     A.STATUS,     A.PROCESSING_SYSTEM,     A.PROCESS_NAME,     A.PROCESS_STATUS,     A.DT_CODE,     A.DTT_CODE,     A.REQUEST_DATA_JSON,     A.RESPONSE_DATA_JSON,     A.MSG_ID,     ROW_NUMBER() OVER(PARTITION BY A.UETR    ORDER BY     A.NPSSTPL_ID DESC) AS ROW_NUM    FROM     NPSS_TRN_PROCESS_LOG A) T   INNER JOIN CORE_NC_STATUS_GROUP G ON    G.QUEUE_CODE = T.PROCESS_STATUS    AND G.PROCESS_QUEUE_STATUS = T.STATUS   WHERE    T.ROW_NUM = 1) NTPL ON   NT.UETR = NTPL.UETR  LEFT JOIN (   SELECT    B.NPSSTRRD_ID ,    B.MSG_ID AS RR_MSG_ID,    B.PARENT_NPSSTRRD_REFNO ,    B.MESSAGE_DATA ,    B.PROCESS_CODE ,    B.PROCESS_DETAIL ,    B.NPSSTRRD_REFNO,    B.UETR,    B.DT_CODE AS RR_DT_CODE,    B.DTT_CODE AS RR_DTT_CODE,    B.PROCESS_NAME AS RR_PROCESS_NAME,    B.MESSAGE_DESC AS RR_MESSAGE_DESC,    ROW_NUMBER() OVER(PARTITION BY B.UETR   ORDER BY    B.NPSSTRRD_ID DESC) AS ROW_NUM   FROM    NPSS_TRN_REQ_RESP_DTLS B ) RR ON   RR.UETR = NT.UETR   AND RR.ROW_NUM = 1) V $WHERE GROUP BY  PROCESSING_SYSTEM"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Processing System LR Chart CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"MI_LEVEL_GROUP_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"RULE_GROUP","binding_name":"RULE_GROUP","binding_value":"","source_name":"RCT_INWARD_GROUP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"PS Count","target_column":"PS_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for ssl chart"
	svm_for_ssl_chart__cc_from_summary_status_level(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_ssl_chart"
		let destn_id=""
		let parent_source_id="process_by_system"
		let event_code="e_1668683329676"
		let event_params={"caller_name":"svm_for_ssl_chart__cc_from_summary_status_level","event_desc":"CC from summary status level","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_by_system","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="cc_from_summary_status_level__ssp_for_ssl_chart_to_stl_chart,cc_from_summary_status_level__cui_tran_from_ps_chart,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for ssl chart"
	svm_for_ssl_chart__e_1669647944011(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_ssl_chart"
		let destn_id="navigation_ui_trg_disable_view_data_ui"
		let parent_source_id="process_by_system"
		let event_code="e_1669647944011"
		let event_params={"caller_name":"svm_for_ssl_chart__e_1669647944011","event_desc":"E_1669647944011","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_by_system","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for INTERNAL event of "cc from summary status level"
	cc_from_summary_status_level__ssp_for_ssl_chart_to_stl_chart(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_from_summary_status_level"
		let destn_id="search"
		let parent_source_id="svm_for_ssl_chart"
		let event_code="e_1668578676683"
		let event_params={"caller_name":"cc_from_summary_status_level__ssp_for_ssl_chart_to_stl_chart","event_desc":"SSP for SSL chart to STL chart","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_by_system","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="ssp_for_ssl_chart_to_stl_chart__brfq_from_ps_chart_to_summary_list,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc from summary status level"
	cc_from_summary_status_level__cui_tran_from_ps_chart() { 
		let Dest_Is_ctrl=true
		
		let source_id="cc_from_summary_status_level"
		let destn_id="transaction_list"
		let parent_source_id="svm_for_ssl_chart"
		let event_code="e_1669186988965"
		let event_params={"caller_name":"cc_from_summary_status_level__cui_tran_from_ps_chart","event_desc":"CUI Tran from PS Chart","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_by_system","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669179986087","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Processlog LR MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"npsst_id","alias_name":"","mq_id":"MQ_1669178086386","date_format":false},{"column_name":"uetr","alias_name":"","mq_id":"MQ_1669178086562","date_format":false},{"column_name":"value_date","alias_name":"","mq_id":"MQ_1669178086753","date_format":true},{"column_name":"accp_date_time","alias_name":"","mq_id":"MQ_1669178086930","date_format":false},{"column_name":"created_date","alias_name":"","mq_id":"MQ_1669178147671","date_format":false},{"column_name":"exhf_id","alias_name":"","mq_id":"MQ_1669178153368","date_format":false},{"column_name":"cdtr_iban","alias_name":"","mq_id":"MQ_1669178153567","date_format":false},{"column_name":"tran_ref_id","alias_name":"","mq_id":"MQ_1669178153751","date_format":false},{"column_name":"payment_endtoend_id","alias_name":"","mq_id":"MQ_1669178153943","date_format":false},{"column_name":"clrsysref","alias_name":"","mq_id":"MQ_1669178154119","date_format":false},{"column_name":"cdtr_acct_no","alias_name":"","mq_id":"MQ_1669178191046","date_format":false},{"column_name":"dbtr_acct_no","alias_name":"","mq_id":"MQ_1669178191237","date_format":false},{"column_name":"intrbk_sttlm_amnt","alias_name":"","mq_id":"MQ_1669178191445","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1669178191661","date_format":false},{"column_name":"processing_system","alias_name":"","mq_id":"MQ_1669178227517","date_format":false},{"column_name":"process_status","alias_name":"","mq_id":"MQ_1669178227717","date_format":false},{"column_name":"Group_Name","alias_name":"","mq_id":"MQ_1669178227908","date_format":false},{"column_name":"Process_type","alias_name":"","mq_id":"MQ_1669178239274","date_format":false},{"column_name":"payment_mode","alias_name":"","mq_id":"MQ_1669178239466","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1669179866186","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1669179866480","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1669180239582","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1669714936628","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1669714936809","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669714937008","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1669714937193","date_format":false},{"column_name":"RR_MESSAGE_DESC","alias_name":"","mq_id":"MQ_1669714937383","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1669714937535","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028203","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028433","date_format":false},{"column_name":"ADDITIONAL_INFO","alias_name":"","mq_id":"MQ_1669715062065","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1669715075448","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716335899","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716336337","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716336495","date_format":false},{"column_name":"DBTR_CUST_TYPE","alias_name":"","mq_id":"MQ_1669716336659","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669716336826","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669716336982","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669716337154","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716337311","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716337475","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716337634","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337798","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337958","date_format":false},{"column_name":"CATEGORY_PURPOSE","alias_name":"","mq_id":"MQ_1669716338118","date_format":false},{"column_name":"CATEGORY_PURPOSE_PRTY","alias_name":"","mq_id":"MQ_1669716338271","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1669716460635","date_format":false},{"column_name":"BASE_CURRENCY","alias_name":"","mq_id":"MQ_1669716460839","date_format":false},{"column_name":"BASE_AMOUNT","alias_name":"","mq_id":"MQ_1669716461033","date_format":false},{"column_name":"HDR_TOTAL_RECORDS","alias_name":"","mq_id":"MQ_1669716461209","date_format":false},{"column_name":"HDR_TOTAL_AMOUNT","alias_name":"","mq_id":"MQ_1669716488348","date_format":false,"currency_format":true},{"column_name":"HDR_CLEARING_SYSTEM","alias_name":"","mq_id":"MQ_1669716488527","date_format":false},{"column_name":"CHARGE_BEARER","alias_name":"","mq_id":"MQ_1669716488729","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669716578903","date_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"","mq_id":"MQ_1669716579064","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1669716579241","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1669716579389","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1669716601499","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1669716601675","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1669716623271","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1669716623501","date_format":false},{"column_name":"ISSUER_TYPE_CODE","alias_name":"","mq_id":"MQ_1669716639834","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1669718495740","date_format":false},{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1669719333386","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1669719333580","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1669719333798","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1669719336508","date_format":false},{"column_name":"CBS_REF_NO","alias_name":"","mq_id":"MQ_1669721618850","date_format":false},{"column_name":"CBS_POSTING_FLAG","alias_name":"","mq_id":"MQ_1669721627964","date_format":false}],"joins":[]},"eq_text":"SELECT  NPSST_ID,  UETR,  VALUE_DATE,  ACCP_DATE_TIME,  CREATED_DATE,  DATEMI,  EXHF_ID,  CDTR_IBAN,  TENANT_ID,  TRAN_REF_ID,  DEPARTMENT_CODE,  PAYMENT_ENDTOEND_ID,  CLRSYSREF,  CDTR_ACCT_NO,  DBTR_ACCT_NO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  STATUS,  PROCESSING_SYSTEM,  PROCESS_STATUS,  GROUP_NAME,  PROCESS_TYPE,  PAYMENT_MODE,  RULE_GROUP,  NPSSTPL_ID,  DT_CODE,  DTT_CODE,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  MSG_ID,  PROCESS_NAME,  T24_RETURN_CODE ,  CBUAE_RETURN_CODE ,  REVERSAL_CODE,  ADDITIONAL_INFO ,  V_CODE ,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR ,  CHARGE_AMOUNT,  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTRRD_ID,  RR_DT_CODE,  RR_DTT_CODE,  MESSAGE_DATA,  PROCESS_CODE,  PROCESS_DETAIL,  RR_PROCESS_NAME,  RR_MESSAGE_DESC,  DBTR_ACCT_NAME ,  DBTR_PHONE_NO ,  DBTR_EMAIL_ID ,  DBTR_DOCUMENT_ID,  DBTR_IBAN ,  DBTR_CUST_TYPE ,  DBTR_PRVT_ID ,  DBTR_OTHER_ISSUER ,  CDTR_ACCT_NAME ,  CDTR_PHONE_NO ,  CDTR_EMAIL_ID ,  CDTR_DOCUMENT_ID ,  DR_SORT_CODE ,  CR_SORT_CODE ,  CATEGORY_PURPOSE ,  CATEGORY_PURPOSE_PRTY ,  CR_ACCT_IDENTIFICATION ,  BASE_CURRENCY ,  BASE_AMOUNT ,  HDR_TOTAL_RECORDS ,  HDR_TOTAL_AMOUNT,  HDR_CLEARING_SYSTEM ,  CHARGE_BEARER ,  REMITTANCE_INFO ,  ACCOUNT_CURRENCY,  CHANNEL_ID ,  CHANNEL_REFNO ,  CHANNEL_USERID ,  CHANNEL_PRODUCT ,  CHANNEL_SUB_PRODUCT ,  CHANNEL_TRAN_CODE ,  ISSUER_TYPE_CODE,  PROCESS_REF_NO,  RESPONSE_CODE,  CBS_REF_NO,  CBS_POSTING_FLAG FROM  (  SELECT   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,   NT.DEPARTMENT_CODE,   NT.TENANT_ID,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NTPL.STATUS,   NTPL.PROCESSING_SYSTEM,   NTPL.PROCESS_STATUS,   NTPL.GROUP_NAME,   NTPL.PROCESS_TYPE,   NTPL.PAYMENT_MODE,   NTPL.RULE_GROUP,   NTPL.NPSSTPL_ID,   NTPL.DT_CODE,   NTPL.DTT_CODE,   NTPL.REQUEST_DATA_JSON,   NTPL.RESPONSE_DATA_JSON,   NTPL.MSG_ID,   NTPL.PROCESS_NAME,   NTPL.T24_RETURN_CODE ,   NTPL.CBUAE_RETURN_CODE ,   NTPL.REVERSAL_CODE ,   NTPL.ADDITIONAL_INFO ,   NTPL.V_CODE ,   NTPL.AMOUNT_CREDITED,   NTPL.AMT_CR_LOC_CUR ,   NTPL.CHARGE_AMOUNT,   NTPL.PROCESS_REF_NO,   NTPL.RESPONSE_CODE,   CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION,   CONCAT(NTPL.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,   CONCAT(NTPL.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,   RR.NPSSTRRD_ID,   RR.RR_MSG_ID,   RR.PARENT_NPSSTRRD_REFNO,   RR.MESSAGE_DATA,   RR.PROCESS_CODE,   RR.PROCESS_DETAIL,   RR.NPSSTRRD_REFNO,   RR.RR_DT_CODE,   RR.RR_DTT_CODE,   RR.RR_PROCESS_NAME,   RR.RR_MESSAGE_DESC,   NT.DBTR_ACCT_NAME ,   NT.DBTR_PHONE_NO ,   NT.DBTR_EMAIL_ID ,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN ,   NT.DBTR_CUST_TYPE ,   NT.DBTR_PRVT_ID ,   NT.DBTR_OTHER_ISSUER ,   NT.CDTR_ACCT_NAME ,   NT.CDTR_PHONE_NO ,   NT.CDTR_EMAIL_ID ,   NT.CDTR_DOCUMENT_ID ,   NT.DR_SORT_CODE ,   NT.CR_SORT_CODE ,   NT.CATEGORY_PURPOSE ,   NT.CATEGORY_PURPOSE_PRTY ,   NT.CR_ACCT_IDENTIFICATION ,   NT.BASE_CURRENCY ,   NT.BASE_AMOUNT ,   NT.HDR_TOTAL_RECORDS ,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM ,   NT.CHARGE_BEARER ,   NT.REMITTANCE_INFO ,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID ,   NT.CHANNEL_REFNO ,   NT.CHANNEL_USERID ,   NT.CHANNEL_PRODUCT ,   NT.CHANNEL_SUB_PRODUCT ,   NT.CHANNEL_TRAN_CODE ,   NT.ISSUER_TYPE_CODE,   NT.CBS_REF_NO,   NT.CBS_POSTING_FLAG  FROM   NPSS_TRANSACTIONS NT  INNER JOIN (   SELECT    T.NPSSTPL_ID,    T.UETR,    T.STATUS,    T.PROCESSING_SYSTEM,    T.PROCESS_STATUS,    G.GROUP_NAME,    G.PROCESS_TYPE,    G.PAYMENT_MODE,    G.RULE_GROUP,    T.DT_CODE,    T.DTT_CODE,    T.REQUEST_DATA_JSON,    T.RESPONSE_DATA_JSON,    T.MSG_ID,    T.PROCESS_NAME,    T.T24_RETURN_CODE ,    T.CBUAE_RETURN_CODE ,    T.REVERSAL_CODE ,    T.ADDITIONAL_INFO ,    T.V_CODE,    T.AMOUNT_CREDITED,    T.AMT_CR_LOC_CUR,    T.CHARGE_AMOUNT,    T.PROCESS_REF_NO,    T.RESPONSE_CODE   FROM    (    SELECT     A.NPSSTPL_ID,     A.UETR,     A.STATUS,     A.PROCESSING_SYSTEM,     A.PROCESS_STATUS,     A.DT_CODE,     A.DTT_CODE,     A.REQUEST_DATA_JSON,     A.RESPONSE_DATA_JSON,     A.MSG_ID,     A.PROCESS_NAME,     A.T24_RETURN_CODE ,     A.CBUAE_RETURN_CODE ,     A.REVERSAL_CODE ,     A.ADDITIONAL_INFO ,     A.V_CODE ,     A.AMOUNT_CREDITED,     A.AMT_CR_LOC_CUR ,     A.CHARGE_AMOUNT,     A.PROCESS_REF_NO,     A.RESPONSE_CODE,     ROW_NUMBER() OVER(PARTITION BY A.UETR    ORDER BY     A.NPSSTPL_ID DESC) AS ROW_NUM    FROM     NPSS_TRN_PROCESS_LOG A ) T   INNER JOIN CORE_NC_STATUS_GROUP G ON    G.QUEUE_CODE = T.PROCESS_STATUS    AND G.PROCESS_QUEUE_STATUS = T.STATUS   WHERE    T.ROW_NUM = 1) NTPL ON   NT.UETR = NTPL.UETR  LEFT JOIN CORE_NC_CODE_DESCRIPTIONS CCD ON   CCD.CD_CODE = NTPL.REVERSAL_CODE   AND CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'  LEFT JOIN CORE_NC_RETURN_CODES T24RC ON   T24RC.RETURN_CODE = NTPL.T24_RETURN_CODE   AND T24RC.PROCESSING_SYSTEM = 'T24'  LEFT JOIN CORE_NC_RETURN_CODES CBUAERC ON   CBUAERC.RETURN_CODE = NTPL.CBUAE_RETURN_CODE   AND CBUAERC.PROCESSING_SYSTEM = 'CBUAE'  LEFT JOIN (   SELECT    B.NPSSTRRD_ID ,    B.MSG_ID AS RR_MSG_ID,    B.PARENT_NPSSTRRD_REFNO ,    B.MESSAGE_DATA ,    B.PROCESS_CODE ,    B.PROCESS_DETAIL ,    B.NPSSTRRD_REFNO,    B.UETR,    B.DT_CODE AS RR_DT_CODE,    B.DTT_CODE AS RR_DTT_CODE,    B.PROCESS_NAME AS RR_PROCESS_NAME,    B.MESSAGE_DESC AS RR_MESSAGE_DESC,    ROW_NUMBER() OVER(PARTITION BY B.UETR   ORDER BY    B.NPSSTRRD_ID DESC) AS ROW_NUM   FROM    NPSS_TRN_REQ_RESP_DTLS B ) RR ON   RR.UETR = NT.UETR   AND RR.ROW_NUM = 1 ) V $WHERE ORDER BY  NPSST_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Tran processLog LR CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"MI_LEVEL_GROUP_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"INTRBK_STTLM_CUR","binding_name":"INTRBK_STTLM_CUR","binding_value":"","source_name":"MI_LEVEL_INTRBK_STTLM_CUR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"RULE_GROUP","binding_name":"RULE_GROUP","binding_value":"","source_name":"RCT_INWARD_GROUP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"intrbk_sttlm_amnt","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"cdtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"payment_endtoend_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"uetr","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"clrsysref","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for ssl chart to stl chart"
	ssp_for_ssl_chart_to_stl_chart__brfq_from_ps_chart_to_summary_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_ssl_chart_to_stl_chart"
		let destn_id="summary_list"
		let parent_source_id="cc_from_summary_status_level"
		let event_code="e_1669186185194"
		let event_params={"caller_name":"ssp_for_ssl_chart_to_stl_chart__brfq_from_ps_chart_to_summary_list","event_desc":"BRFQ from PS CHart to Summary List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_by_system","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_18","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669187492810","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Tran Summary LR MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"GROUP_NAME","alias_name":"","mq_id":"MQ_1669187361763","date_format":false},{"column_name":"TOTAL_AMOUNT","alias_name":"","mq_id":"MQ_1669187362209","date_format":false},{"column_name":"TOTAL_TRAN_COUNT","alias_name":"","mq_id":"MQ_1669187362417","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1669529663983","date_format":false}],"joins":[]},"eq_text":"select  GROUP_NAME,  INTRBK_STTLM_CUR,  SUM(INTRBK_STTLM_AMNT) as TOTAL_AMOUNT,  COUNT(NPSST_ID) as TOTAL_TRAN_COUNT from  (  select   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   NT.TENANT_ID,   NT.DEPARTMENT_CODE,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NTPL.STATUS,   NTPL.PROCESSING_SYSTEM,   NTPL.PROCESS_STATUS,   NTPL.GROUP_NAME,   NTPL.PROCESS_TYPE,   NTPL.PAYMENT_MODE,   NTPL.RULE_GROUP,   NTPL.NPSSTPL_ID,   NTPL.DT_CODE,   NTPL.DTT_CODE,   NTPL.REQUEST_DATA_JSON,   NTPL.RESPONSE_DATA_JSON,   NTPL.MSG_ID,   NTPL.PROCESS_NAME,   RR.NPSSTRRD_ID,   RR.RR_MSG_ID,   RR.PARENT_NPSSTRRD_REFNO,   RR.MESSAGE_DATA,   RR.PROCESS_CODE,   RR.PROCESS_DETAIL,   RR.NPSSTRRD_REFNO,   RR.RR_DT_CODE,   RR.RR_DTT_CODE,   RR.RR_PROCESS_NAME,   RR.RR_MESSAGE_DESC,   NT.DBTR_ACCT_NAME ,   NT.DBTR_PHONE_NO ,   NT.DBTR_EMAIL_ID ,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN ,   NT.DBTR_CUST_TYPE ,   NT.DBTR_PRVT_ID ,   NT.DBTR_OTHER_ISSUER ,   NT.CDTR_ACCT_NAME ,   NT.CDTR_PHONE_NO ,   NT.CDTR_EMAIL_ID ,   NT.CDTR_DOCUMENT_ID ,   NT.DR_SORT_CODE ,   NT.CR_SORT_CODE ,   NT.CATEGORY_PURPOSE ,   NT.CATEGORY_PURPOSE_PRTY ,   NT.CR_ACCT_IDENTIFICATION ,   NT.BASE_CURRENCY ,   NT.BASE_AMOUNT ,   NT.HDR_TOTAL_RECORDS ,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM ,   NT.CHARGE_BEARER ,   NT.REMITTANCE_INFO ,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID ,   NT.CHANNEL_REFNO ,   NT.CHANNEL_USERID ,   NT.CHANNEL_PRODUCT ,   NT.CHANNEL_SUB_PRODUCT ,   NT.CHANNEL_TRAN_CODE ,   NT.ISSUER_TYPE_CODE  from   NPSS_TRANSACTIONS NT  inner join (   select    T.NPSSTPL_ID,    T.UETR,    T.STATUS,    T.PROCESSING_SYSTEM,    T.PROCESS_STATUS,    G.GROUP_NAME,    G.PROCESS_TYPE,    G.PAYMENT_MODE,    G.RULE_GROUP,    T.DT_CODE,    T.DTT_CODE,    T.REQUEST_DATA_JSON,    T.RESPONSE_DATA_JSON,    T.MSG_ID,    T.PROCESS_NAME   from    (    select     A.NPSSTPL_ID,     A.UETR,     A.STATUS,     A.PROCESSING_SYSTEM,     A.PROCESS_STATUS,     A.DT_CODE,     A.DTT_CODE,     A.REQUEST_DATA_JSON,     A.RESPONSE_DATA_JSON,     A.MSG_ID,     A.PROCESS_NAME,     row_number() over(partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A) T   inner join CORE_NC_STATUS_GROUP G on    G.QUEUE_CODE = T.PROCESS_STATUS    and G.PROCESS_QUEUE_STATUS = T.STATUS   where    T.ROW_NUM = 1) NTPL on   NT.UETR = NTPL.UETR  left join (   select    B.NPSSTRRD_ID ,    B.MSG_ID as RR_MSG_ID,    B.PARENT_NPSSTRRD_REFNO ,    B.MESSAGE_DATA ,    B.PROCESS_CODE ,    B.PROCESS_DETAIL ,    B.NPSSTRRD_REFNO,    B.UETR,    B.DT_CODE as RR_DT_CODE,    B.DTT_CODE as RR_DTT_CODE,    B.PROCESS_NAME as RR_PROCESS_NAME,    B.MESSAGE_DESC as RR_MESSAGE_DESC,    row_number() over(partition by B.UETR   order by    B.NPSSTRRD_ID desc) as ROW_NUM   from    NPSS_TRN_REQ_RESP_DTLS B ) RR on   RR.UETR = NT.UETR   and RR.ROW_NUM = 1) V $WHERE group by  GROUP_NAME,  INTRBK_STTLM_CUR"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Tran Summary LR CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"MI_LEVEL_GROUP_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"RULE_GROUP","binding_name":"RULE_GROUP","binding_value":"","source_name":"RCT_INWARD_GROUP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Group Name","target_column":"GROUP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Total Amount","target_column":"TOTAL_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Total Tran Count","target_column":"TOTAL_TRAN_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let event_code="e_1668609027376"
		let event_params={"caller_name":"process_log_ui_view_request__sp_for_view_request_btn","event_desc":"SP for view Request btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_request","raiseparam":{"profile_code":"BTL_1304_1668606425707"}}
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
		let event_code="e_1669180606831"
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

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view response"
	process_log_ui_view_response__sp_for_response_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_response"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1668608928917"
		let event_params={"caller_name":"process_log_ui_view_response__sp_for_response_btn","event_desc":"SP for Response btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_response","raiseparam":{"profile_code":"BTL_1304_1668606353377"}}
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
		let event_code="e_1669180653197"
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

	//Handler for ACTION_BUTTON_CLICK event of "single back ui back"
	single_back_ui_back__sp_for_reqres() { 
		let Dest_Is_ctrl=true
		
		let source_id="single_back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1668605450266"
		let event_params={"caller_name":"single_back_ui_back__sp_for_reqres","event_desc":"SP for REQ,RES","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"single_back_ui_back","raiseparam":{"profile_code":"BTL_1304_1668497379186"}}
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
		let event_code="e_1668605490628"
		let event_params={"caller_name":"process_log_ui_back__sp_to_main_layout","event_desc":"SP to Main layout","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_back","raiseparam":{"profile_code":"BTL_1304_1668497054916"}}
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
		let event_code="e_1668664887431"
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
		let event_code="e_1668689068047"
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

	//Handler for ACTION_BUTTON_CLICK event of "message back ui back"
	message_back_ui_back__sp_for_message_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1668608707189"
		let event_params={"caller_name":"message_back_ui_back__sp_for_message_back","event_desc":"SP for message back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_back_ui_back","raiseparam":{"profile_code":"BTL_1304_1668607321233"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view message history"
	navigation_ui_view_message_history__sp_for_vm() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_message_history"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1668664313560"
		let event_params={"caller_name":"navigation_ui_view_message_history__sp_for_vm","event_desc":"SP for VM","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_message_history","raiseparam":{"profile_code":"BTL_1304_1668607321233"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view message history"
	navigation_ui_view_message_history__brfq_for_vm() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_message_history"
		let destn_id="message_detail"
		let parent_source_id=""
		let event_code="e_1668664760706"
		let event_params={"caller_name":"navigation_ui_view_message_history__brfq_for_vm","event_desc":"BRFQ for VM","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_message_history","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_vm__sfr_for_md,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_15","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669178840143","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1668573850306","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1668573852117","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1668573852786","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1668573853731","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1668573854459","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1668573869044","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1668573871186","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573874178","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573876315","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668573884586","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1668573900766","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1668573911947","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1668573917043","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1668573918291","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1668573918796","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1668573919355","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1668573919955","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1668573925605","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1668587107858","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSTRRD_ID,        MSG_ID,        UETR,        PARENT_NPSSTRRD_REFNO,        NPSSTRRD_REFNO,        PROCESS_CODE,        PROCESS_DETAIL,        EXHF_ID,        PROCESS_NAME,        MESSAGE_DESC,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        STATUS,        PROCESS_STATUS,        MESSAGE_DATA,        CREATEDDATEMILISEC,        DT_CODE,        DTT_CODE   FROM (SELECT NPSSTRRD.NPSSTRRD_ID,                NPSSTRRD.MSG_ID,                NPSSTRRD.UETR,                NPSSTRRD.PARENT_NPSSTRRD_REFNO,                NPSSTRRD.NPSSTRRD_REFNO,                NPSSTRRD.MESSAGE_DATA,                NPSSTRRD.PROCESS_CODE,                NPSSTRRD.PROCESS_DETAIL,                NPSSTRRD.EXHF_ID,                NPSSTRRD.PROCESS_NAME,                NPSSTRRD.MESSAGE_DESC,                NPSSTRRD.CHANNEL_ID,                NPSSTRRD.CHANNEL_REFNO,                NPSSTRRD.CHANNEL_USERID,                NPSSTRRD.CHANNEL_PRODUCT,                NPSSTRRD.CHANNEL_SUB_PRODUCT,                NPSSTRRD.CHANNEL_TRAN_CODE,                NPSSTRRD.CREATED_BY,                NPSSTRRD.CREATED_BY_NAME,                NPSSTRRD.CREATED_DATE,                NPSSTRRD.DT_CODE,                NPSSTRRD.DT_DESCRIPTION,                NPSSTRRD.DTT_CODE,                NPSSTRRD.DTT_DESCRIPTION,                NPSSTRRD.MODIFIED_BY,                NPSSTRRD.MODIFIED_BY_NAME,                NPSSTRRD.MODIFIED_DATE,                NPSSTRRD.STATUS,                NPSSTRRD.PROCESS_STATUS,                NPSSTRRD.SYSTEM_ID,                NPSSTRRD.SYSTEM_NAME,                NPSSTRRD.TENANT_ID,                NPSSTRRD.APP_ID,                NPSSTRRD.VERSION_NO,                TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC           FROM NPSS_TRN_REQ_RESP_DTLS NPSSTRRD) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS REQ RES CCD","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let parent_source_id="navigation_ui_view_message_history"
		let event_code="e_1668664772463"
		let event_params={"caller_name":"brfq_for_vm__sfr_for_md","event_desc":"SFR for MD","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_message_history","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_15","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669178840143","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1668573850306","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1668573852117","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1668573852786","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1668573853731","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1668573854459","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1668573869044","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1668573871186","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573874178","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573876315","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668573884586","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1668573900766","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1668573911947","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1668573917043","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1668573918291","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1668573918796","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1668573919355","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1668573919955","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1668573925605","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1668587107858","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSTRRD_ID,        MSG_ID,        UETR,        PARENT_NPSSTRRD_REFNO,        NPSSTRRD_REFNO,        PROCESS_CODE,        PROCESS_DETAIL,        EXHF_ID,        PROCESS_NAME,        MESSAGE_DESC,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        STATUS,        PROCESS_STATUS,        MESSAGE_DATA,        CREATEDDATEMILISEC,        DT_CODE,        DTT_CODE   FROM (SELECT NPSSTRRD.NPSSTRRD_ID,                NPSSTRRD.MSG_ID,                NPSSTRRD.UETR,                NPSSTRRD.PARENT_NPSSTRRD_REFNO,                NPSSTRRD.NPSSTRRD_REFNO,                NPSSTRRD.MESSAGE_DATA,                NPSSTRRD.PROCESS_CODE,                NPSSTRRD.PROCESS_DETAIL,                NPSSTRRD.EXHF_ID,                NPSSTRRD.PROCESS_NAME,                NPSSTRRD.MESSAGE_DESC,                NPSSTRRD.CHANNEL_ID,                NPSSTRRD.CHANNEL_REFNO,                NPSSTRRD.CHANNEL_USERID,                NPSSTRRD.CHANNEL_PRODUCT,                NPSSTRRD.CHANNEL_SUB_PRODUCT,                NPSSTRRD.CHANNEL_TRAN_CODE,                NPSSTRRD.CREATED_BY,                NPSSTRRD.CREATED_BY_NAME,                NPSSTRRD.CREATED_DATE,                NPSSTRRD.DT_CODE,                NPSSTRRD.DT_DESCRIPTION,                NPSSTRRD.DTT_CODE,                NPSSTRRD.DTT_DESCRIPTION,                NPSSTRRD.MODIFIED_BY,                NPSSTRRD.MODIFIED_BY_NAME,                NPSSTRRD.MODIFIED_DATE,                NPSSTRRD.STATUS,                NPSSTRRD.PROCESS_STATUS,                NPSSTRRD.SYSTEM_ID,                NPSSTRRD.SYSTEM_NAME,                NPSSTRRD.TENANT_ID,                NPSSTRRD.APP_ID,                NPSSTRRD.VERSION_NO,                TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC           FROM NPSS_TRN_REQ_RESP_DTLS NPSSTRRD) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS REQ RES CCD","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let event_code="e_1668664376442"
		let event_params={"caller_name":"message_detail_action_view_message__sp_for_view_message_data","event_desc":"SP for view message DATA","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_detail_action_view_message","raiseparam":{"profile_code":"BTL_1304_1668608225654"}}
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
		let event_code="e_1668664427773"
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

	//Handler for ACTION_BUTTON_CLICK event of "message detail action back"
	message_detail_action_back__mda_forsp() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail_action_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1668664710508"
		let event_params={"caller_name":"message_detail_action_back__mda_forsp","event_desc":"MDA forSP","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_detail_action_back","raiseparam":{"profile_code":"BTL_1304_1668497054916"}}
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
	history_detail__ee_from_history_detail_to_view_req() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="process_log_ui_view_request"
		let parent_source_id=""
		let event_code="e_1668689226821"
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
	history_detail__ee_from_history_detail_to_view_reaponse() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="process_log_ui_view_response"
		let parent_source_id=""
		let event_code="e_1668689249423"
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
	history_detail__ssr_from_hd_to_req() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1669180510990"
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
	history_detail__ssr_from_hd_to_response() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="response_ui"
		let parent_source_id=""
		let event_code="e_1669180529395"
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

	//Handler for SELECTION_CHANGED event of "summary list"
	summary_list__svm_for_summary_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="summary_list"
		let destn_id="summary_list"
		let parent_source_id=""
		let event_code="e_1669186390533"
		let event_params={"caller_name":"summary_list__svm_for_summary_list","event_desc":"SVM for Summary List","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"summary_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_summary_list__cc_show_hide_from_summary_list,"
		let event_data={"summary_list":{"e_1669186390533":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_18","event_code":"E_1669186390533","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS TRN REQ RESP DTLS","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"GROUP_NAME","level":"MI_LEVEL","name":"MI_LEVEL_GROUP_NAME","setd3name":"GROUP_NAME"},{"type":"LOCAL","column_name":"INTRBK_STTLM_CUR","level":"MI_LEVEL","name":"MI_LEVEL_INTRBK_STTLM_CUR","setd3name":"INTRBK_STTLM_CUR"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_18","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669187492810","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Tran Summary LR MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"GROUP_NAME","alias_name":"","mq_id":"MQ_1669187361763","date_format":false},{"column_name":"TOTAL_AMOUNT","alias_name":"","mq_id":"MQ_1669187362209","date_format":false},{"column_name":"TOTAL_TRAN_COUNT","alias_name":"","mq_id":"MQ_1669187362417","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1669529663983","date_format":false}],"joins":[]},"eq_text":"select  GROUP_NAME,  INTRBK_STTLM_CUR,  SUM(INTRBK_STTLM_AMNT) as TOTAL_AMOUNT,  COUNT(NPSST_ID) as TOTAL_TRAN_COUNT from  (  select   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   NT.TENANT_ID,   NT.DEPARTMENT_CODE,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NTPL.STATUS,   NTPL.PROCESSING_SYSTEM,   NTPL.PROCESS_STATUS,   NTPL.GROUP_NAME,   NTPL.PROCESS_TYPE,   NTPL.PAYMENT_MODE,   NTPL.RULE_GROUP,   NTPL.NPSSTPL_ID,   NTPL.DT_CODE,   NTPL.DTT_CODE,   NTPL.REQUEST_DATA_JSON,   NTPL.RESPONSE_DATA_JSON,   NTPL.MSG_ID,   NTPL.PROCESS_NAME,   RR.NPSSTRRD_ID,   RR.RR_MSG_ID,   RR.PARENT_NPSSTRRD_REFNO,   RR.MESSAGE_DATA,   RR.PROCESS_CODE,   RR.PROCESS_DETAIL,   RR.NPSSTRRD_REFNO,   RR.RR_DT_CODE,   RR.RR_DTT_CODE,   RR.RR_PROCESS_NAME,   RR.RR_MESSAGE_DESC,   NT.DBTR_ACCT_NAME ,   NT.DBTR_PHONE_NO ,   NT.DBTR_EMAIL_ID ,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN ,   NT.DBTR_CUST_TYPE ,   NT.DBTR_PRVT_ID ,   NT.DBTR_OTHER_ISSUER ,   NT.CDTR_ACCT_NAME ,   NT.CDTR_PHONE_NO ,   NT.CDTR_EMAIL_ID ,   NT.CDTR_DOCUMENT_ID ,   NT.DR_SORT_CODE ,   NT.CR_SORT_CODE ,   NT.CATEGORY_PURPOSE ,   NT.CATEGORY_PURPOSE_PRTY ,   NT.CR_ACCT_IDENTIFICATION ,   NT.BASE_CURRENCY ,   NT.BASE_AMOUNT ,   NT.HDR_TOTAL_RECORDS ,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM ,   NT.CHARGE_BEARER ,   NT.REMITTANCE_INFO ,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID ,   NT.CHANNEL_REFNO ,   NT.CHANNEL_USERID ,   NT.CHANNEL_PRODUCT ,   NT.CHANNEL_SUB_PRODUCT ,   NT.CHANNEL_TRAN_CODE ,   NT.ISSUER_TYPE_CODE  from   NPSS_TRANSACTIONS NT  inner join (   select    T.NPSSTPL_ID,    T.UETR,    T.STATUS,    T.PROCESSING_SYSTEM,    T.PROCESS_STATUS,    G.GROUP_NAME,    G.PROCESS_TYPE,    G.PAYMENT_MODE,    G.RULE_GROUP,    T.DT_CODE,    T.DTT_CODE,    T.REQUEST_DATA_JSON,    T.RESPONSE_DATA_JSON,    T.MSG_ID,    T.PROCESS_NAME   from    (    select     A.NPSSTPL_ID,     A.UETR,     A.STATUS,     A.PROCESSING_SYSTEM,     A.PROCESS_STATUS,     A.DT_CODE,     A.DTT_CODE,     A.REQUEST_DATA_JSON,     A.RESPONSE_DATA_JSON,     A.MSG_ID,     A.PROCESS_NAME,     row_number() over(partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A) T   inner join CORE_NC_STATUS_GROUP G on    G.QUEUE_CODE = T.PROCESS_STATUS    and G.PROCESS_QUEUE_STATUS = T.STATUS   where    T.ROW_NUM = 1) NTPL on   NT.UETR = NTPL.UETR  left join (   select    B.NPSSTRRD_ID ,    B.MSG_ID as RR_MSG_ID,    B.PARENT_NPSSTRRD_REFNO ,    B.MESSAGE_DATA ,    B.PROCESS_CODE ,    B.PROCESS_DETAIL ,    B.NPSSTRRD_REFNO,    B.UETR,    B.DT_CODE as RR_DT_CODE,    B.DTT_CODE as RR_DTT_CODE,    B.PROCESS_NAME as RR_PROCESS_NAME,    B.MESSAGE_DESC as RR_MESSAGE_DESC,    row_number() over(partition by B.UETR   order by    B.NPSSTRRD_ID desc) as ROW_NUM   from    NPSS_TRN_REQ_RESP_DTLS B ) RR on   RR.UETR = NT.UETR   and RR.ROW_NUM = 1) V $WHERE group by  GROUP_NAME,  INTRBK_STTLM_CUR"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Tran Summary LR CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"MI_LEVEL_GROUP_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"RULE_GROUP","binding_name":"RULE_GROUP","binding_value":"","source_name":"RCT_INWARD_GROUP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Group Name","target_column":"GROUP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Total Amount","target_column":"TOTAL_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Total Tran Count","target_column":"TOTAL_TRAN_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for summary list"
	svm_for_summary_list__cc_show_hide_from_summary_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_summary_list"
		let destn_id=""
		let parent_source_id="summary_list"
		let event_code="e_1669186429267"
		let event_params={"caller_name":"svm_for_summary_list__cc_show_hide_from_summary_list","event_desc":"CC Show hide from Summary List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"summary_list","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="cc_show_hide_from_summary_list__ssp_from_summary_list,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc show hide from summary list"
	cc_show_hide_from_summary_list__ssp_from_summary_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_show_hide_from_summary_list"
		let destn_id="search"
		let parent_source_id="svm_for_summary_list"
		let event_code="e_1669186597124"
		let event_params={"caller_name":"cc_show_hide_from_summary_list__ssp_from_summary_list","event_desc":"SSP from Summary List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"summary_list","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="ssp_from_summary_list__brfq_from_summary_list_to_tran_list,ssp_from_summary_list__brfq_from_summary_to_ps_chart,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp from summary list"
	ssp_from_summary_list__brfq_from_summary_list_to_tran_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_from_summary_list"
		let destn_id="transaction_list"
		let parent_source_id="cc_show_hide_from_summary_list"
		let event_code="e_1669186621538"
		let event_params={"caller_name":"ssp_from_summary_list__brfq_from_summary_list_to_tran_list","event_desc":"BRFQ from summary list to tran List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"summary_list","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_from_summary_list_to_tran_list__sfr_from_summary_to_tran,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669179986087","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Processlog LR MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"npsst_id","alias_name":"","mq_id":"MQ_1669178086386","date_format":false},{"column_name":"uetr","alias_name":"","mq_id":"MQ_1669178086562","date_format":false},{"column_name":"value_date","alias_name":"","mq_id":"MQ_1669178086753","date_format":true},{"column_name":"accp_date_time","alias_name":"","mq_id":"MQ_1669178086930","date_format":false},{"column_name":"created_date","alias_name":"","mq_id":"MQ_1669178147671","date_format":false},{"column_name":"exhf_id","alias_name":"","mq_id":"MQ_1669178153368","date_format":false},{"column_name":"cdtr_iban","alias_name":"","mq_id":"MQ_1669178153567","date_format":false},{"column_name":"tran_ref_id","alias_name":"","mq_id":"MQ_1669178153751","date_format":false},{"column_name":"payment_endtoend_id","alias_name":"","mq_id":"MQ_1669178153943","date_format":false},{"column_name":"clrsysref","alias_name":"","mq_id":"MQ_1669178154119","date_format":false},{"column_name":"cdtr_acct_no","alias_name":"","mq_id":"MQ_1669178191046","date_format":false},{"column_name":"dbtr_acct_no","alias_name":"","mq_id":"MQ_1669178191237","date_format":false},{"column_name":"intrbk_sttlm_amnt","alias_name":"","mq_id":"MQ_1669178191445","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1669178191661","date_format":false},{"column_name":"processing_system","alias_name":"","mq_id":"MQ_1669178227517","date_format":false},{"column_name":"process_status","alias_name":"","mq_id":"MQ_1669178227717","date_format":false},{"column_name":"Group_Name","alias_name":"","mq_id":"MQ_1669178227908","date_format":false},{"column_name":"Process_type","alias_name":"","mq_id":"MQ_1669178239274","date_format":false},{"column_name":"payment_mode","alias_name":"","mq_id":"MQ_1669178239466","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1669179866186","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1669179866480","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1669180239582","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1669714936628","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1669714936809","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669714937008","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1669714937193","date_format":false},{"column_name":"RR_MESSAGE_DESC","alias_name":"","mq_id":"MQ_1669714937383","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1669714937535","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028203","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028433","date_format":false},{"column_name":"ADDITIONAL_INFO","alias_name":"","mq_id":"MQ_1669715062065","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1669715075448","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716335899","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716336337","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716336495","date_format":false},{"column_name":"DBTR_CUST_TYPE","alias_name":"","mq_id":"MQ_1669716336659","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669716336826","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669716336982","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669716337154","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716337311","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716337475","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716337634","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337798","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337958","date_format":false},{"column_name":"CATEGORY_PURPOSE","alias_name":"","mq_id":"MQ_1669716338118","date_format":false},{"column_name":"CATEGORY_PURPOSE_PRTY","alias_name":"","mq_id":"MQ_1669716338271","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1669716460635","date_format":false},{"column_name":"BASE_CURRENCY","alias_name":"","mq_id":"MQ_1669716460839","date_format":false},{"column_name":"BASE_AMOUNT","alias_name":"","mq_id":"MQ_1669716461033","date_format":false},{"column_name":"HDR_TOTAL_RECORDS","alias_name":"","mq_id":"MQ_1669716461209","date_format":false},{"column_name":"HDR_TOTAL_AMOUNT","alias_name":"","mq_id":"MQ_1669716488348","date_format":false,"currency_format":true},{"column_name":"HDR_CLEARING_SYSTEM","alias_name":"","mq_id":"MQ_1669716488527","date_format":false},{"column_name":"CHARGE_BEARER","alias_name":"","mq_id":"MQ_1669716488729","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669716578903","date_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"","mq_id":"MQ_1669716579064","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1669716579241","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1669716579389","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1669716601499","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1669716601675","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1669716623271","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1669716623501","date_format":false},{"column_name":"ISSUER_TYPE_CODE","alias_name":"","mq_id":"MQ_1669716639834","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1669718495740","date_format":false},{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1669719333386","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1669719333580","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1669719333798","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1669719336508","date_format":false},{"column_name":"CBS_REF_NO","alias_name":"","mq_id":"MQ_1669721618850","date_format":false},{"column_name":"CBS_POSTING_FLAG","alias_name":"","mq_id":"MQ_1669721627964","date_format":false}],"joins":[]},"eq_text":"SELECT  NPSST_ID,  UETR,  VALUE_DATE,  ACCP_DATE_TIME,  CREATED_DATE,  DATEMI,  EXHF_ID,  CDTR_IBAN,  TENANT_ID,  TRAN_REF_ID,  DEPARTMENT_CODE,  PAYMENT_ENDTOEND_ID,  CLRSYSREF,  CDTR_ACCT_NO,  DBTR_ACCT_NO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  STATUS,  PROCESSING_SYSTEM,  PROCESS_STATUS,  GROUP_NAME,  PROCESS_TYPE,  PAYMENT_MODE,  RULE_GROUP,  NPSSTPL_ID,  DT_CODE,  DTT_CODE,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  MSG_ID,  PROCESS_NAME,  T24_RETURN_CODE ,  CBUAE_RETURN_CODE ,  REVERSAL_CODE,  ADDITIONAL_INFO ,  V_CODE ,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR ,  CHARGE_AMOUNT,  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTRRD_ID,  RR_DT_CODE,  RR_DTT_CODE,  MESSAGE_DATA,  PROCESS_CODE,  PROCESS_DETAIL,  RR_PROCESS_NAME,  RR_MESSAGE_DESC,  DBTR_ACCT_NAME ,  DBTR_PHONE_NO ,  DBTR_EMAIL_ID ,  DBTR_DOCUMENT_ID,  DBTR_IBAN ,  DBTR_CUST_TYPE ,  DBTR_PRVT_ID ,  DBTR_OTHER_ISSUER ,  CDTR_ACCT_NAME ,  CDTR_PHONE_NO ,  CDTR_EMAIL_ID ,  CDTR_DOCUMENT_ID ,  DR_SORT_CODE ,  CR_SORT_CODE ,  CATEGORY_PURPOSE ,  CATEGORY_PURPOSE_PRTY ,  CR_ACCT_IDENTIFICATION ,  BASE_CURRENCY ,  BASE_AMOUNT ,  HDR_TOTAL_RECORDS ,  HDR_TOTAL_AMOUNT,  HDR_CLEARING_SYSTEM ,  CHARGE_BEARER ,  REMITTANCE_INFO ,  ACCOUNT_CURRENCY,  CHANNEL_ID ,  CHANNEL_REFNO ,  CHANNEL_USERID ,  CHANNEL_PRODUCT ,  CHANNEL_SUB_PRODUCT ,  CHANNEL_TRAN_CODE ,  ISSUER_TYPE_CODE,  PROCESS_REF_NO,  RESPONSE_CODE,  CBS_REF_NO,  CBS_POSTING_FLAG FROM  (  SELECT   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,   NT.DEPARTMENT_CODE,   NT.TENANT_ID,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NTPL.STATUS,   NTPL.PROCESSING_SYSTEM,   NTPL.PROCESS_STATUS,   NTPL.GROUP_NAME,   NTPL.PROCESS_TYPE,   NTPL.PAYMENT_MODE,   NTPL.RULE_GROUP,   NTPL.NPSSTPL_ID,   NTPL.DT_CODE,   NTPL.DTT_CODE,   NTPL.REQUEST_DATA_JSON,   NTPL.RESPONSE_DATA_JSON,   NTPL.MSG_ID,   NTPL.PROCESS_NAME,   NTPL.T24_RETURN_CODE ,   NTPL.CBUAE_RETURN_CODE ,   NTPL.REVERSAL_CODE ,   NTPL.ADDITIONAL_INFO ,   NTPL.V_CODE ,   NTPL.AMOUNT_CREDITED,   NTPL.AMT_CR_LOC_CUR ,   NTPL.CHARGE_AMOUNT,   NTPL.PROCESS_REF_NO,   NTPL.RESPONSE_CODE,   CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION,   CONCAT(NTPL.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,   CONCAT(NTPL.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,   RR.NPSSTRRD_ID,   RR.RR_MSG_ID,   RR.PARENT_NPSSTRRD_REFNO,   RR.MESSAGE_DATA,   RR.PROCESS_CODE,   RR.PROCESS_DETAIL,   RR.NPSSTRRD_REFNO,   RR.RR_DT_CODE,   RR.RR_DTT_CODE,   RR.RR_PROCESS_NAME,   RR.RR_MESSAGE_DESC,   NT.DBTR_ACCT_NAME ,   NT.DBTR_PHONE_NO ,   NT.DBTR_EMAIL_ID ,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN ,   NT.DBTR_CUST_TYPE ,   NT.DBTR_PRVT_ID ,   NT.DBTR_OTHER_ISSUER ,   NT.CDTR_ACCT_NAME ,   NT.CDTR_PHONE_NO ,   NT.CDTR_EMAIL_ID ,   NT.CDTR_DOCUMENT_ID ,   NT.DR_SORT_CODE ,   NT.CR_SORT_CODE ,   NT.CATEGORY_PURPOSE ,   NT.CATEGORY_PURPOSE_PRTY ,   NT.CR_ACCT_IDENTIFICATION ,   NT.BASE_CURRENCY ,   NT.BASE_AMOUNT ,   NT.HDR_TOTAL_RECORDS ,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM ,   NT.CHARGE_BEARER ,   NT.REMITTANCE_INFO ,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID ,   NT.CHANNEL_REFNO ,   NT.CHANNEL_USERID ,   NT.CHANNEL_PRODUCT ,   NT.CHANNEL_SUB_PRODUCT ,   NT.CHANNEL_TRAN_CODE ,   NT.ISSUER_TYPE_CODE,   NT.CBS_REF_NO,   NT.CBS_POSTING_FLAG  FROM   NPSS_TRANSACTIONS NT  INNER JOIN (   SELECT    T.NPSSTPL_ID,    T.UETR,    T.STATUS,    T.PROCESSING_SYSTEM,    T.PROCESS_STATUS,    G.GROUP_NAME,    G.PROCESS_TYPE,    G.PAYMENT_MODE,    G.RULE_GROUP,    T.DT_CODE,    T.DTT_CODE,    T.REQUEST_DATA_JSON,    T.RESPONSE_DATA_JSON,    T.MSG_ID,    T.PROCESS_NAME,    T.T24_RETURN_CODE ,    T.CBUAE_RETURN_CODE ,    T.REVERSAL_CODE ,    T.ADDITIONAL_INFO ,    T.V_CODE,    T.AMOUNT_CREDITED,    T.AMT_CR_LOC_CUR,    T.CHARGE_AMOUNT,    T.PROCESS_REF_NO,    T.RESPONSE_CODE   FROM    (    SELECT     A.NPSSTPL_ID,     A.UETR,     A.STATUS,     A.PROCESSING_SYSTEM,     A.PROCESS_STATUS,     A.DT_CODE,     A.DTT_CODE,     A.REQUEST_DATA_JSON,     A.RESPONSE_DATA_JSON,     A.MSG_ID,     A.PROCESS_NAME,     A.T24_RETURN_CODE ,     A.CBUAE_RETURN_CODE ,     A.REVERSAL_CODE ,     A.ADDITIONAL_INFO ,     A.V_CODE ,     A.AMOUNT_CREDITED,     A.AMT_CR_LOC_CUR ,     A.CHARGE_AMOUNT,     A.PROCESS_REF_NO,     A.RESPONSE_CODE,     ROW_NUMBER() OVER(PARTITION BY A.UETR    ORDER BY     A.NPSSTPL_ID DESC) AS ROW_NUM    FROM     NPSS_TRN_PROCESS_LOG A ) T   INNER JOIN CORE_NC_STATUS_GROUP G ON    G.QUEUE_CODE = T.PROCESS_STATUS    AND G.PROCESS_QUEUE_STATUS = T.STATUS   WHERE    T.ROW_NUM = 1) NTPL ON   NT.UETR = NTPL.UETR  LEFT JOIN CORE_NC_CODE_DESCRIPTIONS CCD ON   CCD.CD_CODE = NTPL.REVERSAL_CODE   AND CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'  LEFT JOIN CORE_NC_RETURN_CODES T24RC ON   T24RC.RETURN_CODE = NTPL.T24_RETURN_CODE   AND T24RC.PROCESSING_SYSTEM = 'T24'  LEFT JOIN CORE_NC_RETURN_CODES CBUAERC ON   CBUAERC.RETURN_CODE = NTPL.CBUAE_RETURN_CODE   AND CBUAERC.PROCESSING_SYSTEM = 'CBUAE'  LEFT JOIN (   SELECT    B.NPSSTRRD_ID ,    B.MSG_ID AS RR_MSG_ID,    B.PARENT_NPSSTRRD_REFNO ,    B.MESSAGE_DATA ,    B.PROCESS_CODE ,    B.PROCESS_DETAIL ,    B.NPSSTRRD_REFNO,    B.UETR,    B.DT_CODE AS RR_DT_CODE,    B.DTT_CODE AS RR_DTT_CODE,    B.PROCESS_NAME AS RR_PROCESS_NAME,    B.MESSAGE_DESC AS RR_MESSAGE_DESC,    ROW_NUMBER() OVER(PARTITION BY B.UETR   ORDER BY    B.NPSSTRRD_ID DESC) AS ROW_NUM   FROM    NPSS_TRN_REQ_RESP_DTLS B ) RR ON   RR.UETR = NT.UETR   AND RR.ROW_NUM = 1 ) V $WHERE ORDER BY  NPSST_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Tran processLog LR CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"MI_LEVEL_GROUP_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"INTRBK_STTLM_CUR","binding_name":"INTRBK_STTLM_CUR","binding_value":"","source_name":"MI_LEVEL_INTRBK_STTLM_CUR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"RULE_GROUP","binding_name":"RULE_GROUP","binding_value":"","source_name":"RCT_INWARD_GROUP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"intrbk_sttlm_amnt","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"cdtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"payment_endtoend_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"uetr","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"clrsysref","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp from summary list"
	ssp_from_summary_list__brfq_from_summary_to_ps_chart(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_from_summary_list"
		let destn_id="process_by_system"
		let parent_source_id="cc_show_hide_from_summary_list"
		let event_code="e_1669187315109"
		let event_params={"caller_name":"ssp_from_summary_list__brfq_from_summary_to_ps_chart","event_desc":"BRFQ from Summary to PS CHart","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"summary_list","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"DOUGHNUT","chart_label":"PROCESSING_SYSTEM","chart_series":"","chart_data":"PS_COUNT","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_9","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669179711260","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Row Processing System MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1669177940929","date_format":false},{"column_name":"PS_COUNT","alias_name":"","mq_id":"MQ_1669177941144","date_format":false}],"joins":[]},"eq_text":"SELECT  PROCESSING_SYSTEM,  COUNT(PROCESSING_SYSTEM) AS PS_COUNT FROM  (  SELECT   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NT.TENANT_ID,   NT.DEPARTMENT_CODE,   NTPL.STATUS,   NTPL.PROCESSING_SYSTEM,   NTPL.PROCESS_STATUS,   NTPL.GROUP_NAME,   NTPL.PROCESS_TYPE,   NTPL.PAYMENT_MODE,   NTPL.RULE_GROUP,   NTPL.NPSSTPL_ID,   NTPL.DT_CODE,   NTPL.DTT_CODE,   NTPL.REQUEST_DATA_JSON,   NTPL.RESPONSE_DATA_JSON,   NTPL.MSG_ID,   NTPL.PROCESS_NAME,   RR.NPSSTRRD_ID,   RR.RR_MSG_ID,   RR.PARENT_NPSSTRRD_REFNO,   RR.MESSAGE_DATA,   RR.PROCESS_CODE,   RR.PROCESS_DETAIL,   RR.NPSSTRRD_REFNO,   RR.RR_DT_CODE,   RR.RR_DTT_CODE,   RR.RR_PROCESS_NAME,   RR.RR_MESSAGE_DESC,   NT.DBTR_ACCT_NAME ,   NT.DBTR_PHONE_NO ,   NT.DBTR_EMAIL_ID ,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN ,   NT.DBTR_CUST_TYPE ,   NT.DBTR_PRVT_ID ,   NT.DBTR_OTHER_ISSUER ,   NT.CDTR_ACCT_NAME ,   NT.CDTR_PHONE_NO ,   NT.CDTR_EMAIL_ID ,   NT.CDTR_DOCUMENT_ID ,   NT.DR_SORT_CODE ,   NT.CR_SORT_CODE ,   NT.CATEGORY_PURPOSE ,   NT.CATEGORY_PURPOSE_PRTY ,   NT.CR_ACCT_IDENTIFICATION ,   NT.BASE_CURRENCY ,   NT.BASE_AMOUNT ,   NT.HDR_TOTAL_RECORDS ,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM ,   NT.CHARGE_BEARER ,   NT.REMITTANCE_INFO ,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID ,   NT.CHANNEL_REFNO ,   NT.CHANNEL_USERID ,   NT.CHANNEL_PRODUCT ,   NT.CHANNEL_SUB_PRODUCT ,   NT.CHANNEL_TRAN_CODE ,   NT.ISSUER_TYPE_CODE  FROM   NPSS_TRANSACTIONS NT  INNER JOIN (   SELECT    T.NPSSTPL_ID,    T.UETR,    T.STATUS,    T.PROCESSING_SYSTEM,    T.PROCESS_STATUS,    G.GROUP_NAME,    G.PROCESS_TYPE,    G.PAYMENT_MODE,    G.RULE_GROUP,    T.DT_CODE,    T.DTT_CODE,    T.REQUEST_DATA_JSON,    T.RESPONSE_DATA_JSON,    T.MSG_ID,    T.PROCESS_NAME   FROM    (    SELECT     A.NPSSTPL_ID,     A.UETR,     A.STATUS,     A.PROCESSING_SYSTEM,     A.PROCESS_NAME,     A.PROCESS_STATUS,     A.DT_CODE,     A.DTT_CODE,     A.REQUEST_DATA_JSON,     A.RESPONSE_DATA_JSON,     A.MSG_ID,     ROW_NUMBER() OVER(PARTITION BY A.UETR    ORDER BY     A.NPSSTPL_ID DESC) AS ROW_NUM    FROM     NPSS_TRN_PROCESS_LOG A) T   INNER JOIN CORE_NC_STATUS_GROUP G ON    G.QUEUE_CODE = T.PROCESS_STATUS    AND G.PROCESS_QUEUE_STATUS = T.STATUS   WHERE    T.ROW_NUM = 1) NTPL ON   NT.UETR = NTPL.UETR  LEFT JOIN (   SELECT    B.NPSSTRRD_ID ,    B.MSG_ID AS RR_MSG_ID,    B.PARENT_NPSSTRRD_REFNO ,    B.MESSAGE_DATA ,    B.PROCESS_CODE ,    B.PROCESS_DETAIL ,    B.NPSSTRRD_REFNO,    B.UETR,    B.DT_CODE AS RR_DT_CODE,    B.DTT_CODE AS RR_DTT_CODE,    B.PROCESS_NAME AS RR_PROCESS_NAME,    B.MESSAGE_DESC AS RR_MESSAGE_DESC,    ROW_NUMBER() OVER(PARTITION BY B.UETR   ORDER BY    B.NPSSTRRD_ID DESC) AS ROW_NUM   FROM    NPSS_TRN_REQ_RESP_DTLS B ) RR ON   RR.UETR = NT.UETR   AND RR.ROW_NUM = 1) V $WHERE GROUP BY  PROCESSING_SYSTEM"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Processing System LR Chart CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"MI_LEVEL_GROUP_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"RULE_GROUP","binding_name":"RULE_GROUP","binding_value":"","source_name":"RCT_INWARD_GROUP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"PS Count","target_column":"PS_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq from summary list to tran list"
	brfq_from_summary_list_to_tran_list__sfr_from_summary_to_tran(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_from_summary_list_to_tran_list"
		let destn_id="transaction_list"
		let parent_source_id="ssp_from_summary_list"
		let event_code="e_1669186645434"
		let event_params={"caller_name":"brfq_from_summary_list_to_tran_list__sfr_from_summary_to_tran","event_desc":"SFR from Summary to tran","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"summary_list","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669179986087","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Processlog LR MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"npsst_id","alias_name":"","mq_id":"MQ_1669178086386","date_format":false},{"column_name":"uetr","alias_name":"","mq_id":"MQ_1669178086562","date_format":false},{"column_name":"value_date","alias_name":"","mq_id":"MQ_1669178086753","date_format":true},{"column_name":"accp_date_time","alias_name":"","mq_id":"MQ_1669178086930","date_format":false},{"column_name":"created_date","alias_name":"","mq_id":"MQ_1669178147671","date_format":false},{"column_name":"exhf_id","alias_name":"","mq_id":"MQ_1669178153368","date_format":false},{"column_name":"cdtr_iban","alias_name":"","mq_id":"MQ_1669178153567","date_format":false},{"column_name":"tran_ref_id","alias_name":"","mq_id":"MQ_1669178153751","date_format":false},{"column_name":"payment_endtoend_id","alias_name":"","mq_id":"MQ_1669178153943","date_format":false},{"column_name":"clrsysref","alias_name":"","mq_id":"MQ_1669178154119","date_format":false},{"column_name":"cdtr_acct_no","alias_name":"","mq_id":"MQ_1669178191046","date_format":false},{"column_name":"dbtr_acct_no","alias_name":"","mq_id":"MQ_1669178191237","date_format":false},{"column_name":"intrbk_sttlm_amnt","alias_name":"","mq_id":"MQ_1669178191445","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1669178191661","date_format":false},{"column_name":"processing_system","alias_name":"","mq_id":"MQ_1669178227517","date_format":false},{"column_name":"process_status","alias_name":"","mq_id":"MQ_1669178227717","date_format":false},{"column_name":"Group_Name","alias_name":"","mq_id":"MQ_1669178227908","date_format":false},{"column_name":"Process_type","alias_name":"","mq_id":"MQ_1669178239274","date_format":false},{"column_name":"payment_mode","alias_name":"","mq_id":"MQ_1669178239466","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1669179866186","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1669179866480","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1669180239582","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1669714936628","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1669714936809","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669714937008","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1669714937193","date_format":false},{"column_name":"RR_MESSAGE_DESC","alias_name":"","mq_id":"MQ_1669714937383","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1669714937535","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028203","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028433","date_format":false},{"column_name":"ADDITIONAL_INFO","alias_name":"","mq_id":"MQ_1669715062065","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1669715075448","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716335899","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716336337","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716336495","date_format":false},{"column_name":"DBTR_CUST_TYPE","alias_name":"","mq_id":"MQ_1669716336659","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669716336826","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669716336982","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669716337154","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716337311","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716337475","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716337634","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337798","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337958","date_format":false},{"column_name":"CATEGORY_PURPOSE","alias_name":"","mq_id":"MQ_1669716338118","date_format":false},{"column_name":"CATEGORY_PURPOSE_PRTY","alias_name":"","mq_id":"MQ_1669716338271","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1669716460635","date_format":false},{"column_name":"BASE_CURRENCY","alias_name":"","mq_id":"MQ_1669716460839","date_format":false},{"column_name":"BASE_AMOUNT","alias_name":"","mq_id":"MQ_1669716461033","date_format":false},{"column_name":"HDR_TOTAL_RECORDS","alias_name":"","mq_id":"MQ_1669716461209","date_format":false},{"column_name":"HDR_TOTAL_AMOUNT","alias_name":"","mq_id":"MQ_1669716488348","date_format":false,"currency_format":true},{"column_name":"HDR_CLEARING_SYSTEM","alias_name":"","mq_id":"MQ_1669716488527","date_format":false},{"column_name":"CHARGE_BEARER","alias_name":"","mq_id":"MQ_1669716488729","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669716578903","date_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"","mq_id":"MQ_1669716579064","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1669716579241","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1669716579389","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1669716601499","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1669716601675","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1669716623271","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1669716623501","date_format":false},{"column_name":"ISSUER_TYPE_CODE","alias_name":"","mq_id":"MQ_1669716639834","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1669718495740","date_format":false},{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1669719333386","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1669719333580","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1669719333798","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1669719336508","date_format":false},{"column_name":"CBS_REF_NO","alias_name":"","mq_id":"MQ_1669721618850","date_format":false},{"column_name":"CBS_POSTING_FLAG","alias_name":"","mq_id":"MQ_1669721627964","date_format":false}],"joins":[]},"eq_text":"SELECT  NPSST_ID,  UETR,  VALUE_DATE,  ACCP_DATE_TIME,  CREATED_DATE,  DATEMI,  EXHF_ID,  CDTR_IBAN,  TENANT_ID,  TRAN_REF_ID,  DEPARTMENT_CODE,  PAYMENT_ENDTOEND_ID,  CLRSYSREF,  CDTR_ACCT_NO,  DBTR_ACCT_NO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  STATUS,  PROCESSING_SYSTEM,  PROCESS_STATUS,  GROUP_NAME,  PROCESS_TYPE,  PAYMENT_MODE,  RULE_GROUP,  NPSSTPL_ID,  DT_CODE,  DTT_CODE,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  MSG_ID,  PROCESS_NAME,  T24_RETURN_CODE ,  CBUAE_RETURN_CODE ,  REVERSAL_CODE,  ADDITIONAL_INFO ,  V_CODE ,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR ,  CHARGE_AMOUNT,  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTRRD_ID,  RR_DT_CODE,  RR_DTT_CODE,  MESSAGE_DATA,  PROCESS_CODE,  PROCESS_DETAIL,  RR_PROCESS_NAME,  RR_MESSAGE_DESC,  DBTR_ACCT_NAME ,  DBTR_PHONE_NO ,  DBTR_EMAIL_ID ,  DBTR_DOCUMENT_ID,  DBTR_IBAN ,  DBTR_CUST_TYPE ,  DBTR_PRVT_ID ,  DBTR_OTHER_ISSUER ,  CDTR_ACCT_NAME ,  CDTR_PHONE_NO ,  CDTR_EMAIL_ID ,  CDTR_DOCUMENT_ID ,  DR_SORT_CODE ,  CR_SORT_CODE ,  CATEGORY_PURPOSE ,  CATEGORY_PURPOSE_PRTY ,  CR_ACCT_IDENTIFICATION ,  BASE_CURRENCY ,  BASE_AMOUNT ,  HDR_TOTAL_RECORDS ,  HDR_TOTAL_AMOUNT,  HDR_CLEARING_SYSTEM ,  CHARGE_BEARER ,  REMITTANCE_INFO ,  ACCOUNT_CURRENCY,  CHANNEL_ID ,  CHANNEL_REFNO ,  CHANNEL_USERID ,  CHANNEL_PRODUCT ,  CHANNEL_SUB_PRODUCT ,  CHANNEL_TRAN_CODE ,  ISSUER_TYPE_CODE,  PROCESS_REF_NO,  RESPONSE_CODE,  CBS_REF_NO,  CBS_POSTING_FLAG FROM  (  SELECT   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,   NT.DEPARTMENT_CODE,   NT.TENANT_ID,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NTPL.STATUS,   NTPL.PROCESSING_SYSTEM,   NTPL.PROCESS_STATUS,   NTPL.GROUP_NAME,   NTPL.PROCESS_TYPE,   NTPL.PAYMENT_MODE,   NTPL.RULE_GROUP,   NTPL.NPSSTPL_ID,   NTPL.DT_CODE,   NTPL.DTT_CODE,   NTPL.REQUEST_DATA_JSON,   NTPL.RESPONSE_DATA_JSON,   NTPL.MSG_ID,   NTPL.PROCESS_NAME,   NTPL.T24_RETURN_CODE ,   NTPL.CBUAE_RETURN_CODE ,   NTPL.REVERSAL_CODE ,   NTPL.ADDITIONAL_INFO ,   NTPL.V_CODE ,   NTPL.AMOUNT_CREDITED,   NTPL.AMT_CR_LOC_CUR ,   NTPL.CHARGE_AMOUNT,   NTPL.PROCESS_REF_NO,   NTPL.RESPONSE_CODE,   CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION,   CONCAT(NTPL.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,   CONCAT(NTPL.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,   RR.NPSSTRRD_ID,   RR.RR_MSG_ID,   RR.PARENT_NPSSTRRD_REFNO,   RR.MESSAGE_DATA,   RR.PROCESS_CODE,   RR.PROCESS_DETAIL,   RR.NPSSTRRD_REFNO,   RR.RR_DT_CODE,   RR.RR_DTT_CODE,   RR.RR_PROCESS_NAME,   RR.RR_MESSAGE_DESC,   NT.DBTR_ACCT_NAME ,   NT.DBTR_PHONE_NO ,   NT.DBTR_EMAIL_ID ,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN ,   NT.DBTR_CUST_TYPE ,   NT.DBTR_PRVT_ID ,   NT.DBTR_OTHER_ISSUER ,   NT.CDTR_ACCT_NAME ,   NT.CDTR_PHONE_NO ,   NT.CDTR_EMAIL_ID ,   NT.CDTR_DOCUMENT_ID ,   NT.DR_SORT_CODE ,   NT.CR_SORT_CODE ,   NT.CATEGORY_PURPOSE ,   NT.CATEGORY_PURPOSE_PRTY ,   NT.CR_ACCT_IDENTIFICATION ,   NT.BASE_CURRENCY ,   NT.BASE_AMOUNT ,   NT.HDR_TOTAL_RECORDS ,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM ,   NT.CHARGE_BEARER ,   NT.REMITTANCE_INFO ,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID ,   NT.CHANNEL_REFNO ,   NT.CHANNEL_USERID ,   NT.CHANNEL_PRODUCT ,   NT.CHANNEL_SUB_PRODUCT ,   NT.CHANNEL_TRAN_CODE ,   NT.ISSUER_TYPE_CODE,   NT.CBS_REF_NO,   NT.CBS_POSTING_FLAG  FROM   NPSS_TRANSACTIONS NT  INNER JOIN (   SELECT    T.NPSSTPL_ID,    T.UETR,    T.STATUS,    T.PROCESSING_SYSTEM,    T.PROCESS_STATUS,    G.GROUP_NAME,    G.PROCESS_TYPE,    G.PAYMENT_MODE,    G.RULE_GROUP,    T.DT_CODE,    T.DTT_CODE,    T.REQUEST_DATA_JSON,    T.RESPONSE_DATA_JSON,    T.MSG_ID,    T.PROCESS_NAME,    T.T24_RETURN_CODE ,    T.CBUAE_RETURN_CODE ,    T.REVERSAL_CODE ,    T.ADDITIONAL_INFO ,    T.V_CODE,    T.AMOUNT_CREDITED,    T.AMT_CR_LOC_CUR,    T.CHARGE_AMOUNT,    T.PROCESS_REF_NO,    T.RESPONSE_CODE   FROM    (    SELECT     A.NPSSTPL_ID,     A.UETR,     A.STATUS,     A.PROCESSING_SYSTEM,     A.PROCESS_STATUS,     A.DT_CODE,     A.DTT_CODE,     A.REQUEST_DATA_JSON,     A.RESPONSE_DATA_JSON,     A.MSG_ID,     A.PROCESS_NAME,     A.T24_RETURN_CODE ,     A.CBUAE_RETURN_CODE ,     A.REVERSAL_CODE ,     A.ADDITIONAL_INFO ,     A.V_CODE ,     A.AMOUNT_CREDITED,     A.AMT_CR_LOC_CUR ,     A.CHARGE_AMOUNT,     A.PROCESS_REF_NO,     A.RESPONSE_CODE,     ROW_NUMBER() OVER(PARTITION BY A.UETR    ORDER BY     A.NPSSTPL_ID DESC) AS ROW_NUM    FROM     NPSS_TRN_PROCESS_LOG A ) T   INNER JOIN CORE_NC_STATUS_GROUP G ON    G.QUEUE_CODE = T.PROCESS_STATUS    AND G.PROCESS_QUEUE_STATUS = T.STATUS   WHERE    T.ROW_NUM = 1) NTPL ON   NT.UETR = NTPL.UETR  LEFT JOIN CORE_NC_CODE_DESCRIPTIONS CCD ON   CCD.CD_CODE = NTPL.REVERSAL_CODE   AND CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'  LEFT JOIN CORE_NC_RETURN_CODES T24RC ON   T24RC.RETURN_CODE = NTPL.T24_RETURN_CODE   AND T24RC.PROCESSING_SYSTEM = 'T24'  LEFT JOIN CORE_NC_RETURN_CODES CBUAERC ON   CBUAERC.RETURN_CODE = NTPL.CBUAE_RETURN_CODE   AND CBUAERC.PROCESSING_SYSTEM = 'CBUAE'  LEFT JOIN (   SELECT    B.NPSSTRRD_ID ,    B.MSG_ID AS RR_MSG_ID,    B.PARENT_NPSSTRRD_REFNO ,    B.MESSAGE_DATA ,    B.PROCESS_CODE ,    B.PROCESS_DETAIL ,    B.NPSSTRRD_REFNO,    B.UETR,    B.DT_CODE AS RR_DT_CODE,    B.DTT_CODE AS RR_DTT_CODE,    B.PROCESS_NAME AS RR_PROCESS_NAME,    B.MESSAGE_DESC AS RR_MESSAGE_DESC,    ROW_NUMBER() OVER(PARTITION BY B.UETR   ORDER BY    B.NPSSTRRD_ID DESC) AS ROW_NUM   FROM    NPSS_TRN_REQ_RESP_DTLS B ) RR ON   RR.UETR = NT.UETR   AND RR.ROW_NUM = 1 ) V $WHERE ORDER BY  NPSST_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Tran processLog LR CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"MI_LEVEL_GROUP_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"INTRBK_STTLM_CUR","binding_name":"INTRBK_STTLM_CUR","binding_value":"","source_name":"MI_LEVEL_INTRBK_STTLM_CUR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"RULE_GROUP","binding_name":"RULE_GROUP","binding_value":"","source_name":"RCT_INWARD_GROUP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"intrbk_sttlm_amnt","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"cdtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"payment_endtoend_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"uetr","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"clrsysref","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view message"
	navigation_ui_view_message__sp_for_show_message_main_layout() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_message"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669633101130"
		let event_params={"caller_name":"navigation_ui_view_message__sp_for_show_message_main_layout","event_desc":"SP for Show Message Main Layout","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_message","raiseparam":{"profile_code":"BTL_1304_1669632768345"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trg disable view data ui"
	navigation_ui_trg_disable_view_data_ui__de_from_trg_to_view_response_on_main_page() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_trg_disable_view_data_ui"
		let destn_id="navigation_ui_view_response"
		let parent_source_id=""
		let event_code="e_1669639087141"
		let event_params={"caller_name":"navigation_ui_trg_disable_view_data_ui__de_from_trg_to_view_response_on_main_page","event_desc":"DE from TRG to View Response on Main Page","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_trg_disable_view_data_ui","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trg disable view data ui"
	navigation_ui_trg_disable_view_data_ui__de_from_trg_to_view_req_on_main_page() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_trg_disable_view_data_ui"
		let destn_id="navigation_ui_view_request"
		let parent_source_id=""
		let event_code="e_1669639197706"
		let event_params={"caller_name":"navigation_ui_trg_disable_view_data_ui__de_from_trg_to_view_req_on_main_page","event_desc":"DE from TRG to View Req on Main Page","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_trg_disable_view_data_ui","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trg disable view data ui"
	navigation_ui_trg_disable_view_data_ui__de_from_trg_to_view_message_on_main_page() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_trg_disable_view_data_ui"
		let destn_id="navigation_ui_view_message"
		let parent_source_id=""
		let event_code="e_1669724966100"
		let event_params={"caller_name":"navigation_ui_trg_disable_view_data_ui__de_from_trg_to_view_message_on_main_page","event_desc":"DE from TRG to View Message on Main Page","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_trg_disable_view_data_ui","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view response"
	navigation_ui_view_response__bt_main_tran_to_main_response_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_response"
		let destn_id="main_response_ui"
		let parent_source_id=""
		let event_code="e_1669639448201"
		let event_params={"caller_name":"navigation_ui_view_response__bt_main_tran_to_main_response_ui","event_desc":"BT Main Tran to Main Response UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_response","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
		let handler_code="bind_tran"
		let internals="bt_main_tran_to_main_response_ui__sp_to_main_response_ui,"
		let event_data={}
		let data_source={}
		try {
			this.handler.bind_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "bt main tran to main response ui"
	bt_main_tran_to_main_response_ui__sp_to_main_response_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="bt_main_tran_to_main_response_ui"
		let destn_id=""
		let parent_source_id="navigation_ui_view_response"
		let event_code="e_1669639496641"
		let event_params={"caller_name":"bt_main_tran_to_main_response_ui__sp_to_main_response_ui","event_desc":"SP to Main Response UI","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_response","raiseparam":{"profile_code":"BTL_1304_1669632008351"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view request"
	navigation_ui_view_request__bt_main_tran_to_main_req_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_request"
		let destn_id="main_request_ui"
		let parent_source_id=""
		let event_code="e_1669640407690"
		let event_params={"caller_name":"navigation_ui_view_request__bt_main_tran_to_main_req_ui","event_desc":"BT Main Tran to Main Req UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_request","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
		let handler_code="bind_tran"
		let internals="bt_main_tran_to_main_req_ui__sp_to_main_req_ui,"
		let event_data={}
		let data_source={}
		try {
			this.handler.bind_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "bt main tran to main req ui"
	bt_main_tran_to_main_req_ui__sp_to_main_req_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="bt_main_tran_to_main_req_ui"
		let destn_id=""
		let parent_source_id="navigation_ui_view_request"
		let event_code="e_1669640431565"
		let event_params={"caller_name":"bt_main_tran_to_main_req_ui__sp_to_main_req_ui","event_desc":"SP to Main Req UI","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_request","raiseparam":{"profile_code":"BTL_1304_1669632180521"}}
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
