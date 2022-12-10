/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27284 
Modified By     : Admin 
Modified Date   : 2022-Dec-10 7:6 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_all_summary
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {torus_cs_change_routingkeyService} from '../../../custom_widget/torus_cs_change_routingkey/torus_cs_change_routingkey.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'

@Component({
	selector: 's_view_all_summary',
	templateUrl: './s_view_all_summary.component.html',
	styleUrls: ['./s_view_all_summary.component.css'],
	providers:[torus_cs_change_routingkeyService,torus_cs_show_hideService]
})
    
// Start of class 
export class s_view_all_summaryComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_view_all_summary"
	wftpa_id : string = "WFT_NPSS_P_1304_1668503862323_0"
	cg_code : string = "CG_1304_1668495726741"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID","dtt_1304_1670492310194":"NPSSASP_ID","dtt_1304_1670589169341":"NPSSCAPL_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "back_ui"
	uicgc_2 : string = "summary_tran_level_chart"
	uicgc_3 : string = "navigation_ui"
	uicgc_4 : string = "transaction_list"
	uicgc_5 : string = "view_transaction_detail"
	uicgc_7 : string = "search"
	uicgc_8 : string = "history_detail"
	uicgc_9 : string = "summary_status_level_chart"
	uicgc_10 : string = "process_log_ui"
	uicgc_11 : string = "response_ui"
	uicgc_12 : string = "request_ui"
	uicgc_13 : string = "single_back_ui"
	uicgc_14 : string = "message_detail_ui"
	uicgc_15 : string = "message_detail"
	uicgc_16 : string = "message_back_ui"
	uicgc_17 : string = "message_detail_action"
	key_events : any = {}
	btl_1304_1668608225654 : string = "p_view_message_ui_layout"
	btl_1304_1668607321233 : string = "p_view_message_list_layout"
	btl_1304_1668606425707 : string = "p_view_request_layout"
	btl_1304_1668606353377 : string = "p_view_response_layout"
	btl_1304_1668497379186 : string = "p_view_history_layout"
	btl_1304_1668497253326 : string = "p_vertical_layout"
	btl_1304_1668497202456 : string = "p_search_layout"
	btl_1304_1668497054916 : string = "p_main_layout"
	forms : any = ["uicgc_7","uicgc_14","uicgc_11","uicgc_12","uicgc_16","uicgc_17","uicgc_13","uicgc_10","uicgc_1","uicgc_3"]
	p_search_layout__spap_for_search_showpopup : boolean = false
	back_ui : any = {}
	back_ui_back : any = {}
	summary_tran_level_chart : any = {}
	navigation_ui : any = {}
	navigation_ui_search : any = {}
	navigation_ui_view_tran : any = {}
	navigation_ui_view_log_history : any = {}
	navigation_ui_view_message_history : any = {}
	navigation_ui_reset : any = {}
	transaction_list : any = {}
	view_transaction_detail : any = {}
	search : any = {}
	search_search : any = {}
	search_clear : any = {}
	history_detail : any = {}
	summary_status_level_chart : any = {}
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
	
		// Component level properties - "Summary Tran level Chart" 
		this.summary_tran_level_chart.uictrl_code = "chart"
		this.summary_tran_level_chart.uicgc_desc = "Summary Tran level Chart"
		this.summary_tran_level_chart.uicgc_code = "uicgc_2"
		this.summary_tran_level_chart.params = {}
		this.summary_tran_level_chart.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1668504004768","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Summary Chart MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"KEY_COLUMN","alias_name":"","mq_id":"MQ_1668495396199","date_format":false},{"column_name":"KEY_VALUE","alias_name":"","mq_id":"MQ_1668495396703","date_format":false}],"joins":[]},"eq_text":"SELECT KEY_COLUMN, SORT_ORDER, TRAN_LEVEL, SUM(KEY_VALUE) AS KEY_VALUE   FROM (SELECT KEY_COLUMN,                '' AS TRAN_LEVEL,                MEM_PAYMENT_METHOD,                UETR,                CREATED_DATE,                ACCP_DATE_TIME,                VALUE_DATE,                DBTR_ACCT_NO,                CDTR_ACCT_NO,                CDTR_IBAN,                DBTR_IBAN,                INTRBK_STTLM_AMNT,                PAYMENT_ENDTOEND_ID,                PROCESS_TYPE,                SORT_ORDER,                CLRSYSREF,                DEPARTMENT_CODE,                COUNT(UETR) AS KEY_VALUE           FROM (SELECT 'TOTAL' AS KEY_COLUMN,                        1 AS SORT_ORDER,                        STATUS,                        CASE                          WHEN EXHF_ID IS NULL THEN                           'RCT'                          ELSE                           'BCT'                        END AS MEM_PAYMENT_METHOD,                        UETR,                        CREATED_DATE,                        ACCP_DATE_TIME,                        VALUE_DATE,                        DBTR_ACCT_NO,                        CDTR_ACCT_NO,                        CDTR_IBAN,                        DBTR_IBAN,                        INTRBK_STTLM_AMNT,                        PAYMENT_ENDTOEND_ID,                        PROCESS_TYPE,                        CLRSYSREF,DEPARTMENT_CODE                   FROM NPSS_TRANSACTIONS NT) A          GROUP BY SORT_ORDER,                   KEY_COLUMN,                   MEM_PAYMENT_METHOD,                   UETR,                   CREATED_DATE,                   ACCP_DATE_TIME,                   VALUE_DATE,                   DBTR_ACCT_NO,                   CDTR_ACCT_NO,                   CDTR_IBAN,                   DBTR_IBAN,                   INTRBK_STTLM_AMNT,                   PAYMENT_ENDTOEND_ID,                   PROCESS_TYPE,                   CLRSYSREF,DEPARTMENT_CODE         UNION ALL         SELECT KEY_COLUMN,                'COMPLETED' AS TRAN_LEVEL,                MEM_PAYMENT_METHOD,                UETR,                CREATED_DATE,                ACCP_DATE_TIME,                VALUE_DATE,                DBTR_ACCT_NO,                CDTR_ACCT_NO,                CDTR_IBAN,                DBTR_IBAN,                INTRBK_STTLM_AMNT,                PAYMENT_ENDTOEND_ID,                PROCESS_TYPE,                SORT_ORDER,                CLRSYSREF,DEPARTMENT_CODE,                COUNT(UETR) AS KEY_VALUE           FROM (SELECT 'COMPLETED' AS KEY_COLUMN,                        2 AS SORT_ORDER,                        STATUS,                        PROCESS_STATUS,                        CASE                          WHEN EXHF_ID IS NULL THEN                           'RCT'                          ELSE                           'BCT'                        END AS MEM_PAYMENT_METHOD,                        UETR,                        CREATED_DATE,                        ACCP_DATE_TIME,                        VALUE_DATE,                        DBTR_ACCT_NO,                        CDTR_ACCT_NO,                        CDTR_IBAN,                        DBTR_IBAN,                        INTRBK_STTLM_AMNT,                        PAYMENT_ENDTOEND_ID,                        PROCESS_TYPE,                        CLRSYSREF,DEPARTMENT_CODE                   FROM NPSS_TRANSACTIONS NT) A          WHERE (UPPER(PROCESS_STATUS)) LIKE (UPPER('%COMPLETED'))          GROUP BY SORT_ORDER,                   KEY_COLUMN,                   MEM_PAYMENT_METHOD,                   UETR,                   CREATED_DATE,                   ACCP_DATE_TIME,                   VALUE_DATE,                   DBTR_ACCT_NO,                   CDTR_ACCT_NO,                   CDTR_IBAN,                   DBTR_IBAN,                   INTRBK_STTLM_AMNT,                   PAYMENT_ENDTOEND_ID,                   PROCESS_TYPE,                   CLRSYSREF,DEPARTMENT_CODE         UNION ALL         SELECT KEY_COLUMN,                'INPROGRESS' AS TRAN_LEVEL,                MEM_PAYMENT_METHOD,                UETR,                CREATED_DATE,                ACCP_DATE_TIME,                VALUE_DATE,                DBTR_ACCT_NO,                CDTR_ACCT_NO,                CDTR_IBAN,                DBTR_IBAN,                INTRBK_STTLM_AMNT,                PAYMENT_ENDTOEND_ID,                PROCESS_TYPE,                SORT_ORDER,                CLRSYSREF,DEPARTMENT_CODE,                COUNT(UETR) AS KEY_VALUE           FROM (SELECT 'INPROGRESS' AS KEY_COLUMN,                        3 AS SORT_ORDER,                        STATUS,                        PROCESS_STATUS,                        CASE                          WHEN EXHF_ID IS NULL THEN                           'RCT'                          ELSE                           'BCT'                        END AS MEM_PAYMENT_METHOD,                        UETR,                        CREATED_DATE,                        ACCP_DATE_TIME,                        VALUE_DATE,                        DBTR_ACCT_NO,                        CDTR_ACCT_NO,                        CDTR_IBAN,                        DBTR_IBAN,                        INTRBK_STTLM_AMNT,                        PAYMENT_ENDTOEND_ID,                        PROCESS_TYPE,                        CLRSYSREF,DEPARTMENT_CODE                   FROM NPSS_TRANSACTIONS NT) A          WHERE (UPPER(PROCESS_STATUS)) NOT LIKE (UPPER('%COMPLETED'))          GROUP BY SORT_ORDER,                   KEY_COLUMN,                   TRAN_LEVEL,                   MEM_PAYMENT_METHOD,                   UETR,                   CREATED_DATE,                   ACCP_DATE_TIME,                   VALUE_DATE,                   DBTR_ACCT_NO,                   CDTR_ACCT_NO,                   CDTR_IBAN,                   DBTR_IBAN,                   INTRBK_STTLM_AMNT,                   PAYMENT_ENDTOEND_ID,                   PROCESS_TYPE,                   CLRSYSREF,DEPARTMENT_CODE) V $WHERE  GROUP BY KEY_COLUMN, SORT_ORDER, TRAN_LEVEL  ORDER BY SORT_ORDER"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Summary Chart CCD","filter":[],"databinding":[{"header":"KEY_VALUE","target_column":"KEY_VALUE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"KEY_COLUMN","target_column":"KEY_COLUMN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.summary_tran_level_chart.context_menu = []
		this.summary_tran_level_chart.views = {}
		this.summary_tran_level_chart.onChangecomponent = new EventEmitter<any>()
		this.summary_tran_level_chart.show = true
		this.summary_tran_level_chart.dynamic_param = {}
	
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
		
		// "Reset" Button of "Navigation UI" component
		this.navigation_ui_reset.label_name = "Reset"
		this.navigation_ui_reset.show = true
		this.navigation_ui_reset.disabled = false
		this.navigation_ui_reset.params = {"icon_only":false,"uicgcc_style":"fa fa-recycle"}
		this.navigation_ui_reset.dynamic_param = {}
		this.navigation_ui_reset.role = []
		this.navigation_ui_reset.action = ""
	
		// Component level properties - "Transaction list" 
		this.transaction_list.uictrl_code = "datatable"
		this.transaction_list.uicgc_desc = "Transaction list"
		this.transaction_list.uicgc_code = "uicgc_4"
		this.transaction_list.params = {"need_pag_datatable":"Y","advance_dynamic_search":"N","need_search":"N"}
		this.transaction_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1668504033744","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"MEM_PAYMENT_METHOD","alias_name":"","mq_id":"MQ_1668415265731","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691797994","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1668772110535","date_format":false},{"column_name":"TRAN_LEVEL","alias_name":"","mq_id":"MQ_1669006969775","date_format":false},{"column_name":"ACCEPTED_DATE","alias_name":"","mq_id":"MQ_1669198452328","date_format":true},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669209185067","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1669209185410","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1669209185641","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669209840985","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669209847802","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669209934807","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  TRAN_LEVEL,  MODIFIED_DATE_UTC,  ACCEPTED_DATE,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  MEM_PAYMENT_METHOD,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   TO_CHAR(A.ACCP_DATE_TIME, 'YYYY-MM-DD HH:MI:SS:MS AM') as ACCEPTED_DATE,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   case    when (UPPER(A.PROCESS_STATUS)) like (UPPER('%COMPLETED')) then 'COMPLETED'    else 'INPROGRESS'   end as TRAN_LEVEL,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   case    when A.EXHF_ID is null then 'RCT'    else 'BCT'   end as MEM_PAYMENT_METHOD  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Summary Tran CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TRAN_LEVEL","binding_name":"TRAN_LEVEL","binding_value":"","source_name":"MI_LEVEL_TRAN_LEVEL","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.transaction_list.context_menu = []
		this.transaction_list.views = {}
		this.transaction_list.onChangecomponent = new EventEmitter<any>()
		this.transaction_list.show = true
		this.transaction_list.dynamic_param = {}
	
		// Component level properties - "View Transaction Detail" 
		this.view_transaction_detail.uictrl_code = "datatable"
		this.view_transaction_detail.uicgc_desc = "View Transaction Detail"
		this.view_transaction_detail.uicgc_code = "uicgc_5"
		this.view_transaction_detail.params = {"need_search":"N","advance_dynamic_search":"N","need_vertical":"Y"}
		this.view_transaction_detail.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1668504107493","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"MEM_PAYMENT_METHOD","alias_name":"","mq_id":"MQ_1668415265731","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691797994","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1668772110535","date_format":false},{"column_name":"TRAN_LEVEL","alias_name":"","mq_id":"MQ_1669006969775","date_format":false},{"column_name":"ACCEPTED_DATE","alias_name":"","mq_id":"MQ_1669198452328","date_format":true},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669209185067","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1669209185410","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1669209185641","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669209840985","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669209847802","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669209934807","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  TRAN_LEVEL,  MODIFIED_DATE_UTC,  ACCEPTED_DATE,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  MEM_PAYMENT_METHOD,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   TO_CHAR(A.ACCP_DATE_TIME, 'YYYY-MM-DD HH:MI:SS:MS AM') as ACCEPTED_DATE,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   case    when (UPPER(A.PROCESS_STATUS)) like (UPPER('%COMPLETED')) then 'COMPLETED'    else 'INPROGRESS'   end as TRAN_LEVEL,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   case    when A.EXHF_ID is null then 'RCT'    else 'BCT'   end as MEM_PAYMENT_METHOD  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Ver HST View Transaction CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Id","target_column":"NPSST_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Txn Value Date","target_column":"VALUE_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Number","target_column":"CDTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Number","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Amount Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Type","target_column":"PROCESS_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message ID","target_column":"HDR_MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer  Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Batch Id","target_column":"EXHF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Accepted Date & Time","target_column":"ACCEPTED_DATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Sort Code","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E reference id","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payment Method","target_column":"MEM_PAYMENT_METHOD","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.view_transaction_detail.context_menu = []
		this.view_transaction_detail.views = {}
		this.view_transaction_detail.onChangecomponent = new EventEmitter<any>()
		this.view_transaction_detail.show = true
		this.view_transaction_detail.dynamic_param = {"column_header_name":"Field","value_header_name":"Value"}
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_7"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1665901217208","is_tab_mode":"N","dtt_1304_1665901217208":{"0":[{"dttv_id":"NPSS Investigation srch","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Transactions"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_investigation_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_investigation_srch"
		
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
		this.history_detail.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_8","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1668506085361","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"SELECT REVERSAL_DESCRIPTION,        T24_RETURN_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE,        REVERSAL_DESC,        T24_RETURN_DESC,        CBUAE_RETURN_DESC,        TENANT_ID,        DEPARTMENT_CODE,        DT_CODE,        DTT_CODE   FROM (SELECT A.NPSSTPL_ID,                A.MSG_ID,                A.UETR,                A.NPSSTRRD_REFNO,                A.PROCESS_NAME,                A.PROCESSING_SYSTEM,                A.RESPONSE_CODE,                A.PROCESS_REF_NO,                A.RESPONSE_DATA,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS CREATEDDATEMILISEC,                A.CREATED_DATE,                A.PROCESS_STATUS,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.TENANT_ID,                A.REQUEST_DATA_JSON,                A.RESPONSE_DATA_JSON,                A.T24_RETURN_CODE,                NT.DEPARTMENT_CODE,                A.ADDITIONAL_INFO,                T24RC.RETURN_DESCRIPTION AS T24_RETURN_DESC,                CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                A.CBUAE_RETURN_CODE,                CBUAERC.RETURN_DESCRIPTION AS CBUAE_RETURN_DESC,                CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,                A.REVERSAL_CODE,                CCD.CD_DESCRIPTION AS REVERSAL_DESC,                CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION           FROM NPSS_TRN_PROCESS_LOG A           LEFT JOIN <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD ON CCD.CD_CODE =                                                                   A.REVERSAL_CODE                                                               AND CCD.CD_CATEGORY =                                                                   'REVERSAL_REASON_IDENTIFIER_CODE' AND CCD.STATUS = 'APPROVED'           LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES T24RC ON T24RC.RETURN_CODE =                                                                A.T24_RETURN_CODE                                                            AND T24RC.PROCESSING_SYSTEM =                                                                'T24' AND T24RC.STATUS = 'APPROVED'           LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES CBUAERC ON CBUAERC.RETURN_CODE =                                                                  A.CBUAE_RETURN_CODE                                                              AND CBUAERC.PROCESSING_SYSTEM =                                                                  'CBUAE' AND CBUAERC.STATUS = 'APPROVED'          INNER JOIN NPSS_TRANSACTIONS NT ON NT.UETR = A.UETR          ORDER BY A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.history_detail.context_menu = []
		this.history_detail.views = {}
		this.history_detail.onChangecomponent = new EventEmitter<any>()
		this.history_detail.show = true
		this.history_detail.dynamic_param = {}
	
		// Component level properties - "Summary Status level Chart" 
		this.summary_status_level_chart.uictrl_code = "chart"
		this.summary_status_level_chart.uicgc_desc = "Summary Status level Chart"
		this.summary_status_level_chart.uicgc_code = "uicgc_9"
		this.summary_status_level_chart.params = {}
		this.summary_status_level_chart.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_9","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1668579186742","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Summary Status Chart MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"KEY_COLUMN","alias_name":"","mq_id":"MQ_1668579722829","date_format":false},{"column_name":"KEY_VALUE","alias_name":"","mq_id":"MQ_1668579723012","date_format":false}],"joins":[]},"eq_text":"SELECT KEY_COLUMN, SUM(KEY_VALUE) AS KEY_VALUE   FROM (SELECT NPSST_ID,                KEY_COLUMN,                COUNT(STATUS) AS KEY_VALUE,                STATUS,                TRAN_LEVEL,                PROCESS_STATUS,                VALUE_DATE,                CREATED_DATE,                UETR,                ACCP_DATE_TIME,                TRAN_REF_ID,                INTRBK_STTLM_AMNT,                DBTR_ACCT_NO,                MEM_PAYMENT_METHOD,                CDTR_ACCT_NO,                DBTR_ACCT_NO,                PAYMENT_ENDTOEND_ID,                CDTR_IBAN,                DBTR_IBAN,                CLRSYSREF,                DEPARTMENT_CODE                         FROM (SELECT NT.NPSST_ID,                        NT.EXHF_ID,                        NT.CDTR_IBAN,                        NT.DBTR_IBAN,                        NT.DBTR_PHONE_NO,                        NT.CDTR_PHONE_NO,                        NT.INTRBK_STTLM_AMNT,                        NT.TRAN_REF_ID,                        NT.ACCP_DATE_TIME,                        NT.CREATED_DATE,                        NT.STATUS AS KEY_COLUMN,                        NT.STATUS,                        NT.PROCESS_STATUS,                        NT.DEPARTMENT_CODE,                        CASE                          WHEN (UPPER(NT.PROCESS_STATUS)) LIKE                               (UPPER('%COMPLETED')) THEN                           'COMPLETED'                          ELSE                           'INPROGRESS'                        END AS TRAN_LEVEL,                        NT.VALUE_DATE,                        NT.DBTR_ACCT_NO,                        NT.CDTR_ACCT_NO,                        NT.PAYMENT_ENDTOEND_ID,                        CASE                          WHEN NT.EXHF_ID IS NULL THEN                           'REAL_TIME'                          ELSE                           'BULK'                        END AS MEM_PAYMENT_METHOD,                        NT.UETR,                        NT.CLRSYSREF                   FROM NPSS_TRANSACTIONS NT) VW          GROUP BY NPSST_ID,                   STATUS,                   KEY_COLUMN,                   PROCESS_STATUS,                   TRAN_LEVEL,                   VALUE_DATE,                   CREATED_DATE,                   UETR,                   TRAN_REF_ID,                   ACCP_DATE_TIME,                   INTRBK_STTLM_AMNT,                   DBTR_ACCT_NO,                   MEM_PAYMENT_METHOD,                   CDTR_ACCT_NO,                   DBTR_ACCT_NO,                   PAYMENT_ENDTOEND_ID,                   CDTR_IBAN,                   DBTR_IBAN,                   PROCESS_STATUS,                   CLRSYSREF,DEPARTMENT_CODE) V $WHERE  GROUP BY KEY_COLUMN"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Summary Status Chart CCD","filter":[{"filter_name":"TRAN_LEVEL","binding_name":"TRAN_LEVEL","binding_value":"","source_name":"MI_LEVEL_TRAN_LEVEL","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"KEY_COLUMN","target_column":"KEY_COLUMN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"KEY_VALUE","target_column":"KEY_VALUE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.summary_status_level_chart.context_menu = []
		this.summary_status_level_chart.views = {}
		this.summary_status_level_chart.onChangecomponent = new EventEmitter<any>()
		this.summary_status_level_chart.show = true
		this.summary_status_level_chart.dynamic_param = {}
	
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
		this.response_ui.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS Summary Response UI","tab_order":0,"tab_name":"","uicgc_description":"Response UI","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.response_ui.onChangecomponent = new EventEmitter<any>()
		this.response_ui.show = true
		this.response_ui.dynamic_param = {}
		this.response_ui.f_npss_summary_response_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.response_ui.form_name = "f_npss_summary_response_ui"
	
		// Component level properties - "Request UI" 
		this.request_ui.uictrl_code = "dynamic_ui"
		this.request_ui.uicgc_desc = "Request UI"
		this.request_ui.uicgc_code = "uicgc_12"
		this.request_ui.params = {}
		this.request_ui.datasource = {}
		this.request_ui.context_menu = []
		this.request_ui.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS Summary Request UI","tab_order":0,"tab_name":"","uicgc_description":"Request UI","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.request_ui.onChangecomponent = new EventEmitter<any>()
		this.request_ui.show = true
		this.request_ui.dynamic_param = {}
		this.request_ui.f_npss_summary_request_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.request_ui.form_name = "f_npss_summary_request_ui"
	
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
		this.message_detail.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_15","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1668609360493","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1668573850306","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1668573852117","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1668573852786","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1668573853731","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1668573854459","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1668573869044","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1668573871186","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573874178","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573876315","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668573884586","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1668573900766","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1668573911947","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1668573917043","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1668573918291","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1668573918796","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1668573919355","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1668573919955","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1668573925605","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1668587107858","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSTRRD_ID,        MSG_ID,        UETR,        PARENT_NPSSTRRD_REFNO,        NPSSTRRD_REFNO,        PROCESS_CODE,        PROCESS_DETAIL,        EXHF_ID,        PROCESS_NAME,        MESSAGE_DESC,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        STATUS,        PROCESS_STATUS,        MESSAGE_DATA,        CREATEDDATEMILISEC,        DT_CODE,        DTT_CODE   FROM (SELECT NPSSTRRD.NPSSTRRD_ID,                NPSSTRRD.MSG_ID,                NPSSTRRD.UETR,                NPSSTRRD.PARENT_NPSSTRRD_REFNO,                NPSSTRRD.NPSSTRRD_REFNO,                NPSSTRRD.MESSAGE_DATA,                NPSSTRRD.PROCESS_CODE,                NPSSTRRD.PROCESS_DETAIL,                NPSSTRRD.EXHF_ID,                NPSSTRRD.PROCESS_NAME,                NPSSTRRD.MESSAGE_DESC,                NPSSTRRD.CHANNEL_ID,                NPSSTRRD.CHANNEL_REFNO,                NPSSTRRD.CHANNEL_USERID,                NPSSTRRD.CHANNEL_PRODUCT,                NPSSTRRD.CHANNEL_SUB_PRODUCT,                NPSSTRRD.CHANNEL_TRAN_CODE,                NPSSTRRD.CREATED_BY,                NPSSTRRD.CREATED_BY_NAME,                NPSSTRRD.CREATED_DATE,                NPSSTRRD.DT_CODE,                NPSSTRRD.DT_DESCRIPTION,                NPSSTRRD.DTT_CODE,                NPSSTRRD.DTT_DESCRIPTION,                NPSSTRRD.MODIFIED_BY,                NPSSTRRD.MODIFIED_BY_NAME,                NPSSTRRD.MODIFIED_DATE,                NPSSTRRD.STATUS,                NPSSTRRD.PROCESS_STATUS,                NPSSTRRD.SYSTEM_ID,                NPSSTRRD.SYSTEM_NAME,                NPSSTRRD.TENANT_ID,                NPSSTRRD.APP_ID,                NPSSTRRD.VERSION_NO,                TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC           FROM NPSS_TRN_REQ_RESP_DTLS NPSSTRRD) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS REQ RES CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		this.page_load__pl_to_cc_for_routing_key()
	}

	//Handler for INTERNAL event of "pl to cc for routing key"
	pl_to_cc_for_routing_key__internal(parent_event_result){
		this.pl_to_cc_for_routing_key__cf_for_pl(parent_event_result)
	}

	//Handler for INTERNAL event of "cf for pl"
	cf_for_pl__internal(parent_event_result){
		this.cf_for_pl__sh_ide_for_cf(parent_event_result)
	}

	//Handler for INTERNAL event of "sh ide for cf"
	sh_ide_for_cf__internal(parent_event_result){
		this.sh_ide_for_cf__trigger_btn_click_to_search(parent_event_result)
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
	}

	//Handler for SELECTION_CHANGED event of "summary tran level chart"
	summary_tran_level_chart__selection_changed(){
		this.summary_tran_level_chart__svm_for_chart()
	}

	//Handler for INTERNAL event of "ssp for tran table"
	ssp_for_tran_table__internal(parent_event_result){
		this.ssp_for_tran_table__brfq_for_tran_list(parent_event_result)
		this.ssp_for_tran_table__brfq_for_sl_chart(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for tran list"
	brfq_for_tran_list__internal(parent_event_result){
		this.brfq_for_tran_list__sfr_in_tran_list(parent_event_result)
	}

	//Handler for INTERNAL event of "svm for chart"
	svm_for_chart__internal(parent_event_result){
		this.svm_for_chart__cc_from_tran_level_chart(parent_event_result)
	}

	//Handler for INTERNAL event of "cc from tran level chart"
	cc_from_tran_level_chart__internal(parent_event_result){
		this.cc_from_tran_level_chart__ssp_for_tran_table(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__selection_changed(){
		this.transaction_list__ee_for_view_detail_btn()
		this.transaction_list__svm_for_tran_list()
		this.transaction_list__ee_for_vlh()
		this.transaction_list__ee_for_vm()
	}

	//Handler for INTERNAL event of "svm for tran list"
	svm_for_tran_list__internal(parent_event_result){
		this.svm_for_tran_list__cc_from_transaction_list(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view tran"
	navigation_ui_view_tran__action_button_click(){
		this.navigation_ui_view_tran__sp_for_vl()
		this.navigation_ui_view_tran__cc_from_view_dtl_btn()
	}

	//Handler for INTERNAL event of "cc from view dtl btn"
	cc_from_view_dtl_btn__internal(parent_event_result){
		this.cc_from_view_dtl_btn__brfq_for_view_tl(parent_event_result)
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

	//Handler for SELECTION_CHANGED event of "summary status level chart"
	summary_status_level_chart__selection_changed(){
		this.summary_status_level_chart__svm_for_ssl_chart()
	}

	//Handler for INTERNAL event of "ssp for ssl chart to stl chart"
	ssp_for_ssl_chart_to_stl_chart__internal(parent_event_result){
		this.ssp_for_ssl_chart_to_stl_chart__brfq_for_tl_from_ssl_chart(parent_event_result)
	}

	//Handler for INTERNAL event of "svm for ssl chart"
	svm_for_ssl_chart__internal(parent_event_result){
		this.svm_for_ssl_chart__cc_from_summary_status_level(parent_event_result)
	}

	//Handler for INTERNAL event of "cc from summary status level"
	cc_from_summary_status_level__internal(parent_event_result){
		this.cc_from_summary_status_level__ssp_for_ssl_chart_to_stl_chart(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for tl from ssl chart"
	brfq_for_tl_from_ssl_chart__internal(parent_event_result){
		this.brfq_for_tl_from_ssl_chart__sfr_from_summary_status_chart_to_transaction_l_ist(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view request"
	process_log_ui_view_request__action_button_click(){
		this.process_log_ui_view_request__sp_for_view_request_btn()
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view response"
	process_log_ui_view_response__action_button_click(){
		this.process_log_ui_view_response__sp_for_response_btn()
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
		this.history_detail__smv_for_res__json__response_ui()
		this.history_detail__smv_for_req_json__request_ui()
	}

	//Handler for INTERNAL event of "smv for res  json"
	smv_for_res__json__internal(parent_event_result){
		this.smv_for_res__json__bvm_for_res_json__response_ui(parent_event_result)
	}

	//Handler for INTERNAL event of "smv for req json"
	smv_for_req_json__internal(parent_event_result){
		this.smv_for_req_json__bvm_for_req_json__request_ui(parent_event_result)
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
	page_load__pl_to_cc_for_routing_key() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669186528334"
		let event_params={"caller_name":"page_load__pl_to_cc_for_routing_key","event_desc":"PL to CC for routing key","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="pl_to_cc_for_routing_key__cf_for_pl,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_change_routingkeyService.fn_torus_cs_change_routingkey(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "pl to cc for routing key"
	pl_to_cc_for_routing_key__cf_for_pl(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="pl_to_cc_for_routing_key"
		let destn_id=""
		let parent_source_id="page_load"
		let event_code="e_1669186609403"
		let event_params={"caller_name":"pl_to_cc_for_routing_key__cf_for_pl","event_desc":"CF for PL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""},"parent_event_result":"SUCCESS"}
		let handler_code="create_form"
		let internals="cf_for_pl__sh_ide_for_cf,"
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
	cf_for_pl__sh_ide_for_cf(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cf_for_pl"
		let destn_id=""
		let parent_source_id="pl_to_cc_for_routing_key"
		let event_code="e_1669186627006"
		let event_params={"caller_name":"cf_for_pl__sh_ide_for_cf","event_desc":"SH ide for CF","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="sh_ide_for_cf__trigger_btn_click_to_search,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "sh ide for cf"
	sh_ide_for_cf__trigger_btn_click_to_search(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="sh_ide_for_cf"
		let destn_id="search_search"
		let parent_source_id="cf_for_pl"
		let event_code="e_1669186671868"
		let event_params={"caller_name":"sh_ide_for_cf__trigger_btn_click_to_search","event_desc":"Trigger btn click to search","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
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
		let internals="ssp_for_chart__brfq_for_chart,ssp_for_chart__brfq_for_sl_chart,"
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
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1668504033744","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"MEM_PAYMENT_METHOD","alias_name":"","mq_id":"MQ_1668415265731","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691797994","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1668772110535","date_format":false},{"column_name":"TRAN_LEVEL","alias_name":"","mq_id":"MQ_1669006969775","date_format":false},{"column_name":"ACCEPTED_DATE","alias_name":"","mq_id":"MQ_1669198452328","date_format":true},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669209185067","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1669209185410","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1669209185641","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669209840985","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669209847802","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669209934807","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  TRAN_LEVEL,  MODIFIED_DATE_UTC,  ACCEPTED_DATE,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  MEM_PAYMENT_METHOD,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   TO_CHAR(A.ACCP_DATE_TIME, 'YYYY-MM-DD HH:MI:SS:MS AM') as ACCEPTED_DATE,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   case    when (UPPER(A.PROCESS_STATUS)) like (UPPER('%COMPLETED')) then 'COMPLETED'    else 'INPROGRESS'   end as TRAN_LEVEL,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   case    when A.EXHF_ID is null then 'RCT'    else 'BCT'   end as MEM_PAYMENT_METHOD  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Summary Tran CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TRAN_LEVEL","binding_name":"TRAN_LEVEL","binding_value":"","source_name":"MI_LEVEL_TRAN_LEVEL","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let destn_id="summary_tran_level_chart"
		let parent_source_id="search_search"
		let event_code="e_1668499306411"
		let event_params={"caller_name":"ssp_for_chart__brfq_for_chart","event_desc":"BRFQ for Chart","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"BAR","chart_label":"KEY_COLUMN","chart_series":"","chart_data":"KEY_VALUE","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1668504004768","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Summary Chart MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"KEY_COLUMN","alias_name":"","mq_id":"MQ_1668495396199","date_format":false},{"column_name":"KEY_VALUE","alias_name":"","mq_id":"MQ_1668495396703","date_format":false}],"joins":[]},"eq_text":"SELECT KEY_COLUMN, SORT_ORDER, TRAN_LEVEL, SUM(KEY_VALUE) AS KEY_VALUE   FROM (SELECT KEY_COLUMN,                '' AS TRAN_LEVEL,                MEM_PAYMENT_METHOD,                UETR,                CREATED_DATE,                ACCP_DATE_TIME,                VALUE_DATE,                DBTR_ACCT_NO,                CDTR_ACCT_NO,                CDTR_IBAN,                DBTR_IBAN,                INTRBK_STTLM_AMNT,                PAYMENT_ENDTOEND_ID,                PROCESS_TYPE,                SORT_ORDER,                CLRSYSREF,                DEPARTMENT_CODE,                COUNT(UETR) AS KEY_VALUE           FROM (SELECT 'TOTAL' AS KEY_COLUMN,                        1 AS SORT_ORDER,                        STATUS,                        CASE                          WHEN EXHF_ID IS NULL THEN                           'RCT'                          ELSE                           'BCT'                        END AS MEM_PAYMENT_METHOD,                        UETR,                        CREATED_DATE,                        ACCP_DATE_TIME,                        VALUE_DATE,                        DBTR_ACCT_NO,                        CDTR_ACCT_NO,                        CDTR_IBAN,                        DBTR_IBAN,                        INTRBK_STTLM_AMNT,                        PAYMENT_ENDTOEND_ID,                        PROCESS_TYPE,                        CLRSYSREF,DEPARTMENT_CODE                   FROM NPSS_TRANSACTIONS NT) A          GROUP BY SORT_ORDER,                   KEY_COLUMN,                   MEM_PAYMENT_METHOD,                   UETR,                   CREATED_DATE,                   ACCP_DATE_TIME,                   VALUE_DATE,                   DBTR_ACCT_NO,                   CDTR_ACCT_NO,                   CDTR_IBAN,                   DBTR_IBAN,                   INTRBK_STTLM_AMNT,                   PAYMENT_ENDTOEND_ID,                   PROCESS_TYPE,                   CLRSYSREF,DEPARTMENT_CODE         UNION ALL         SELECT KEY_COLUMN,                'COMPLETED' AS TRAN_LEVEL,                MEM_PAYMENT_METHOD,                UETR,                CREATED_DATE,                ACCP_DATE_TIME,                VALUE_DATE,                DBTR_ACCT_NO,                CDTR_ACCT_NO,                CDTR_IBAN,                DBTR_IBAN,                INTRBK_STTLM_AMNT,                PAYMENT_ENDTOEND_ID,                PROCESS_TYPE,                SORT_ORDER,                CLRSYSREF,DEPARTMENT_CODE,                COUNT(UETR) AS KEY_VALUE           FROM (SELECT 'COMPLETED' AS KEY_COLUMN,                        2 AS SORT_ORDER,                        STATUS,                        PROCESS_STATUS,                        CASE                          WHEN EXHF_ID IS NULL THEN                           'RCT'                          ELSE                           'BCT'                        END AS MEM_PAYMENT_METHOD,                        UETR,                        CREATED_DATE,                        ACCP_DATE_TIME,                        VALUE_DATE,                        DBTR_ACCT_NO,                        CDTR_ACCT_NO,                        CDTR_IBAN,                        DBTR_IBAN,                        INTRBK_STTLM_AMNT,                        PAYMENT_ENDTOEND_ID,                        PROCESS_TYPE,                        CLRSYSREF,DEPARTMENT_CODE                   FROM NPSS_TRANSACTIONS NT) A          WHERE (UPPER(PROCESS_STATUS)) LIKE (UPPER('%COMPLETED'))          GROUP BY SORT_ORDER,                   KEY_COLUMN,                   MEM_PAYMENT_METHOD,                   UETR,                   CREATED_DATE,                   ACCP_DATE_TIME,                   VALUE_DATE,                   DBTR_ACCT_NO,                   CDTR_ACCT_NO,                   CDTR_IBAN,                   DBTR_IBAN,                   INTRBK_STTLM_AMNT,                   PAYMENT_ENDTOEND_ID,                   PROCESS_TYPE,                   CLRSYSREF,DEPARTMENT_CODE         UNION ALL         SELECT KEY_COLUMN,                'INPROGRESS' AS TRAN_LEVEL,                MEM_PAYMENT_METHOD,                UETR,                CREATED_DATE,                ACCP_DATE_TIME,                VALUE_DATE,                DBTR_ACCT_NO,                CDTR_ACCT_NO,                CDTR_IBAN,                DBTR_IBAN,                INTRBK_STTLM_AMNT,                PAYMENT_ENDTOEND_ID,                PROCESS_TYPE,                SORT_ORDER,                CLRSYSREF,DEPARTMENT_CODE,                COUNT(UETR) AS KEY_VALUE           FROM (SELECT 'INPROGRESS' AS KEY_COLUMN,                        3 AS SORT_ORDER,                        STATUS,                        PROCESS_STATUS,                        CASE                          WHEN EXHF_ID IS NULL THEN                           'RCT'                          ELSE                           'BCT'                        END AS MEM_PAYMENT_METHOD,                        UETR,                        CREATED_DATE,                        ACCP_DATE_TIME,                        VALUE_DATE,                        DBTR_ACCT_NO,                        CDTR_ACCT_NO,                        CDTR_IBAN,                        DBTR_IBAN,                        INTRBK_STTLM_AMNT,                        PAYMENT_ENDTOEND_ID,                        PROCESS_TYPE,                        CLRSYSREF,DEPARTMENT_CODE                   FROM NPSS_TRANSACTIONS NT) A          WHERE (UPPER(PROCESS_STATUS)) NOT LIKE (UPPER('%COMPLETED'))          GROUP BY SORT_ORDER,                   KEY_COLUMN,                   TRAN_LEVEL,                   MEM_PAYMENT_METHOD,                   UETR,                   CREATED_DATE,                   ACCP_DATE_TIME,                   VALUE_DATE,                   DBTR_ACCT_NO,                   CDTR_ACCT_NO,                   CDTR_IBAN,                   DBTR_IBAN,                   INTRBK_STTLM_AMNT,                   PAYMENT_ENDTOEND_ID,                   PROCESS_TYPE,                   CLRSYSREF,DEPARTMENT_CODE) V $WHERE  GROUP BY KEY_COLUMN, SORT_ORDER, TRAN_LEVEL  ORDER BY SORT_ORDER"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Summary Chart CCD","filter":[],"databinding":[{"header":"KEY_VALUE","target_column":"KEY_VALUE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"KEY_COLUMN","target_column":"KEY_COLUMN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let destn_id="summary_status_level_chart"
		let parent_source_id="search_search"
		let event_code="e_1668577895713"
		let event_params={"caller_name":"ssp_for_chart__brfq_for_sl_chart","event_desc":"BRFQ for SL Chart","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"DOUGHNUT","chart_label":"KEY_COLUMN","chart_series":"","chart_data":"KEY_VALUE","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_9","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1668579186742","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Summary Status Chart MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"KEY_COLUMN","alias_name":"","mq_id":"MQ_1668579722829","date_format":false},{"column_name":"KEY_VALUE","alias_name":"","mq_id":"MQ_1668579723012","date_format":false}],"joins":[]},"eq_text":"SELECT KEY_COLUMN, SUM(KEY_VALUE) AS KEY_VALUE   FROM (SELECT NPSST_ID,                KEY_COLUMN,                COUNT(STATUS) AS KEY_VALUE,                STATUS,                TRAN_LEVEL,                PROCESS_STATUS,                VALUE_DATE,                CREATED_DATE,                UETR,                ACCP_DATE_TIME,                TRAN_REF_ID,                INTRBK_STTLM_AMNT,                DBTR_ACCT_NO,                MEM_PAYMENT_METHOD,                CDTR_ACCT_NO,                DBTR_ACCT_NO,                PAYMENT_ENDTOEND_ID,                CDTR_IBAN,                DBTR_IBAN,                CLRSYSREF,                DEPARTMENT_CODE                         FROM (SELECT NT.NPSST_ID,                        NT.EXHF_ID,                        NT.CDTR_IBAN,                        NT.DBTR_IBAN,                        NT.DBTR_PHONE_NO,                        NT.CDTR_PHONE_NO,                        NT.INTRBK_STTLM_AMNT,                        NT.TRAN_REF_ID,                        NT.ACCP_DATE_TIME,                        NT.CREATED_DATE,                        NT.STATUS AS KEY_COLUMN,                        NT.STATUS,                        NT.PROCESS_STATUS,                        NT.DEPARTMENT_CODE,                        CASE                          WHEN (UPPER(NT.PROCESS_STATUS)) LIKE                               (UPPER('%COMPLETED')) THEN                           'COMPLETED'                          ELSE                           'INPROGRESS'                        END AS TRAN_LEVEL,                        NT.VALUE_DATE,                        NT.DBTR_ACCT_NO,                        NT.CDTR_ACCT_NO,                        NT.PAYMENT_ENDTOEND_ID,                        CASE                          WHEN NT.EXHF_ID IS NULL THEN                           'REAL_TIME'                          ELSE                           'BULK'                        END AS MEM_PAYMENT_METHOD,                        NT.UETR,                        NT.CLRSYSREF                   FROM NPSS_TRANSACTIONS NT) VW          GROUP BY NPSST_ID,                   STATUS,                   KEY_COLUMN,                   PROCESS_STATUS,                   TRAN_LEVEL,                   VALUE_DATE,                   CREATED_DATE,                   UETR,                   TRAN_REF_ID,                   ACCP_DATE_TIME,                   INTRBK_STTLM_AMNT,                   DBTR_ACCT_NO,                   MEM_PAYMENT_METHOD,                   CDTR_ACCT_NO,                   DBTR_ACCT_NO,                   PAYMENT_ENDTOEND_ID,                   CDTR_IBAN,                   DBTR_IBAN,                   PROCESS_STATUS,                   CLRSYSREF,DEPARTMENT_CODE) V $WHERE  GROUP BY KEY_COLUMN"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Summary Status Chart CCD","filter":[{"filter_name":"TRAN_LEVEL","binding_name":"TRAN_LEVEL","binding_value":"","source_name":"MI_LEVEL_TRAN_LEVEL","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"KEY_COLUMN","target_column":"KEY_COLUMN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"KEY_VALUE","target_column":"KEY_VALUE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "summary tran level chart"
	summary_tran_level_chart__svm_for_chart() { 
		let Dest_Is_ctrl=true
		
		let source_id="summary_tran_level_chart"
		let destn_id="summary_tran_level_chart"
		let parent_source_id=""
		let event_code="e_1668499437603"
		let event_params={"caller_name":"summary_tran_level_chart__svm_for_chart","event_desc":"SVM for Chart","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"summary_tran_level_chart","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_chart__cc_from_tran_level_chart,"
		let event_data={"summary_tran_level_chart":{"e_1668499437603":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_2","event_code":"E_1668499437603","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"TRAN_LEVEL","level":"MI_LEVEL","name":"MI_LEVEL_TRAN_LEVEL","setd3name":"TRAN_LEVEL"},{"type":"HARDCODED","column_name":"BULK","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"},{"type":"HARDCODED","column_name":"","level":"MI_LEVEL","name":"MI_LEVEL_STATUS","setd3name":"STATUS"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1668504004768","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Summary Chart MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"KEY_COLUMN","alias_name":"","mq_id":"MQ_1668495396199","date_format":false},{"column_name":"KEY_VALUE","alias_name":"","mq_id":"MQ_1668495396703","date_format":false}],"joins":[]},"eq_text":"SELECT KEY_COLUMN, SORT_ORDER, TRAN_LEVEL, SUM(KEY_VALUE) AS KEY_VALUE   FROM (SELECT KEY_COLUMN,                '' AS TRAN_LEVEL,                MEM_PAYMENT_METHOD,                UETR,                CREATED_DATE,                ACCP_DATE_TIME,                VALUE_DATE,                DBTR_ACCT_NO,                CDTR_ACCT_NO,                CDTR_IBAN,                DBTR_IBAN,                INTRBK_STTLM_AMNT,                PAYMENT_ENDTOEND_ID,                PROCESS_TYPE,                SORT_ORDER,                CLRSYSREF,                DEPARTMENT_CODE,                COUNT(UETR) AS KEY_VALUE           FROM (SELECT 'TOTAL' AS KEY_COLUMN,                        1 AS SORT_ORDER,                        STATUS,                        CASE                          WHEN EXHF_ID IS NULL THEN                           'RCT'                          ELSE                           'BCT'                        END AS MEM_PAYMENT_METHOD,                        UETR,                        CREATED_DATE,                        ACCP_DATE_TIME,                        VALUE_DATE,                        DBTR_ACCT_NO,                        CDTR_ACCT_NO,                        CDTR_IBAN,                        DBTR_IBAN,                        INTRBK_STTLM_AMNT,                        PAYMENT_ENDTOEND_ID,                        PROCESS_TYPE,                        CLRSYSREF,DEPARTMENT_CODE                   FROM NPSS_TRANSACTIONS NT) A          GROUP BY SORT_ORDER,                   KEY_COLUMN,                   MEM_PAYMENT_METHOD,                   UETR,                   CREATED_DATE,                   ACCP_DATE_TIME,                   VALUE_DATE,                   DBTR_ACCT_NO,                   CDTR_ACCT_NO,                   CDTR_IBAN,                   DBTR_IBAN,                   INTRBK_STTLM_AMNT,                   PAYMENT_ENDTOEND_ID,                   PROCESS_TYPE,                   CLRSYSREF,DEPARTMENT_CODE         UNION ALL         SELECT KEY_COLUMN,                'COMPLETED' AS TRAN_LEVEL,                MEM_PAYMENT_METHOD,                UETR,                CREATED_DATE,                ACCP_DATE_TIME,                VALUE_DATE,                DBTR_ACCT_NO,                CDTR_ACCT_NO,                CDTR_IBAN,                DBTR_IBAN,                INTRBK_STTLM_AMNT,                PAYMENT_ENDTOEND_ID,                PROCESS_TYPE,                SORT_ORDER,                CLRSYSREF,DEPARTMENT_CODE,                COUNT(UETR) AS KEY_VALUE           FROM (SELECT 'COMPLETED' AS KEY_COLUMN,                        2 AS SORT_ORDER,                        STATUS,                        PROCESS_STATUS,                        CASE                          WHEN EXHF_ID IS NULL THEN                           'RCT'                          ELSE                           'BCT'                        END AS MEM_PAYMENT_METHOD,                        UETR,                        CREATED_DATE,                        ACCP_DATE_TIME,                        VALUE_DATE,                        DBTR_ACCT_NO,                        CDTR_ACCT_NO,                        CDTR_IBAN,                        DBTR_IBAN,                        INTRBK_STTLM_AMNT,                        PAYMENT_ENDTOEND_ID,                        PROCESS_TYPE,                        CLRSYSREF,DEPARTMENT_CODE                   FROM NPSS_TRANSACTIONS NT) A          WHERE (UPPER(PROCESS_STATUS)) LIKE (UPPER('%COMPLETED'))          GROUP BY SORT_ORDER,                   KEY_COLUMN,                   MEM_PAYMENT_METHOD,                   UETR,                   CREATED_DATE,                   ACCP_DATE_TIME,                   VALUE_DATE,                   DBTR_ACCT_NO,                   CDTR_ACCT_NO,                   CDTR_IBAN,                   DBTR_IBAN,                   INTRBK_STTLM_AMNT,                   PAYMENT_ENDTOEND_ID,                   PROCESS_TYPE,                   CLRSYSREF,DEPARTMENT_CODE         UNION ALL         SELECT KEY_COLUMN,                'INPROGRESS' AS TRAN_LEVEL,                MEM_PAYMENT_METHOD,                UETR,                CREATED_DATE,                ACCP_DATE_TIME,                VALUE_DATE,                DBTR_ACCT_NO,                CDTR_ACCT_NO,                CDTR_IBAN,                DBTR_IBAN,                INTRBK_STTLM_AMNT,                PAYMENT_ENDTOEND_ID,                PROCESS_TYPE,                SORT_ORDER,                CLRSYSREF,DEPARTMENT_CODE,                COUNT(UETR) AS KEY_VALUE           FROM (SELECT 'INPROGRESS' AS KEY_COLUMN,                        3 AS SORT_ORDER,                        STATUS,                        PROCESS_STATUS,                        CASE                          WHEN EXHF_ID IS NULL THEN                           'RCT'                          ELSE                           'BCT'                        END AS MEM_PAYMENT_METHOD,                        UETR,                        CREATED_DATE,                        ACCP_DATE_TIME,                        VALUE_DATE,                        DBTR_ACCT_NO,                        CDTR_ACCT_NO,                        CDTR_IBAN,                        DBTR_IBAN,                        INTRBK_STTLM_AMNT,                        PAYMENT_ENDTOEND_ID,                        PROCESS_TYPE,                        CLRSYSREF,DEPARTMENT_CODE                   FROM NPSS_TRANSACTIONS NT) A          WHERE (UPPER(PROCESS_STATUS)) NOT LIKE (UPPER('%COMPLETED'))          GROUP BY SORT_ORDER,                   KEY_COLUMN,                   TRAN_LEVEL,                   MEM_PAYMENT_METHOD,                   UETR,                   CREATED_DATE,                   ACCP_DATE_TIME,                   VALUE_DATE,                   DBTR_ACCT_NO,                   CDTR_ACCT_NO,                   CDTR_IBAN,                   DBTR_IBAN,                   INTRBK_STTLM_AMNT,                   PAYMENT_ENDTOEND_ID,                   PROCESS_TYPE,                   CLRSYSREF,DEPARTMENT_CODE) V $WHERE  GROUP BY KEY_COLUMN, SORT_ORDER, TRAN_LEVEL  ORDER BY SORT_ORDER"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Summary Chart CCD","filter":[],"databinding":[{"header":"KEY_VALUE","target_column":"KEY_VALUE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"KEY_COLUMN","target_column":"KEY_COLUMN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for tran table"
	ssp_for_tran_table__brfq_for_tran_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_tran_table"
		let destn_id="transaction_list"
		let parent_source_id="cc_from_tran_level_chart"
		let event_code="e_1668499510201"
		let event_params={"caller_name":"ssp_for_tran_table__brfq_for_tran_list","event_desc":"BRFQ for tran list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"summary_tran_level_chart","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_tran_list__sfr_in_tran_list,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1668504033744","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"MEM_PAYMENT_METHOD","alias_name":"","mq_id":"MQ_1668415265731","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691797994","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1668772110535","date_format":false},{"column_name":"TRAN_LEVEL","alias_name":"","mq_id":"MQ_1669006969775","date_format":false},{"column_name":"ACCEPTED_DATE","alias_name":"","mq_id":"MQ_1669198452328","date_format":true},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669209185067","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1669209185410","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1669209185641","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669209840985","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669209847802","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669209934807","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  TRAN_LEVEL,  MODIFIED_DATE_UTC,  ACCEPTED_DATE,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  MEM_PAYMENT_METHOD,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   TO_CHAR(A.ACCP_DATE_TIME, 'YYYY-MM-DD HH:MI:SS:MS AM') as ACCEPTED_DATE,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   case    when (UPPER(A.PROCESS_STATUS)) like (UPPER('%COMPLETED')) then 'COMPLETED'    else 'INPROGRESS'   end as TRAN_LEVEL,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   case    when A.EXHF_ID is null then 'RCT'    else 'BCT'   end as MEM_PAYMENT_METHOD  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Summary Tran CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TRAN_LEVEL","binding_name":"TRAN_LEVEL","binding_value":"","source_name":"MI_LEVEL_TRAN_LEVEL","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let destn_id="summary_status_level_chart"
		let parent_source_id="cc_from_tran_level_chart"
		let event_code="e_1668578086592"
		let event_params={"caller_name":"ssp_for_tran_table__brfq_for_sl_chart","event_desc":"BRFQ for SL chart","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"summary_tran_level_chart","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"DOUGHNUT","chart_label":"KEY_COLUMN","chart_series":"","chart_data":"KEY_VALUE","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_9","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1668579186742","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Summary Status Chart MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"KEY_COLUMN","alias_name":"","mq_id":"MQ_1668579722829","date_format":false},{"column_name":"KEY_VALUE","alias_name":"","mq_id":"MQ_1668579723012","date_format":false}],"joins":[]},"eq_text":"SELECT KEY_COLUMN, SUM(KEY_VALUE) AS KEY_VALUE   FROM (SELECT NPSST_ID,                KEY_COLUMN,                COUNT(STATUS) AS KEY_VALUE,                STATUS,                TRAN_LEVEL,                PROCESS_STATUS,                VALUE_DATE,                CREATED_DATE,                UETR,                ACCP_DATE_TIME,                TRAN_REF_ID,                INTRBK_STTLM_AMNT,                DBTR_ACCT_NO,                MEM_PAYMENT_METHOD,                CDTR_ACCT_NO,                DBTR_ACCT_NO,                PAYMENT_ENDTOEND_ID,                CDTR_IBAN,                DBTR_IBAN,                CLRSYSREF,                DEPARTMENT_CODE                         FROM (SELECT NT.NPSST_ID,                        NT.EXHF_ID,                        NT.CDTR_IBAN,                        NT.DBTR_IBAN,                        NT.DBTR_PHONE_NO,                        NT.CDTR_PHONE_NO,                        NT.INTRBK_STTLM_AMNT,                        NT.TRAN_REF_ID,                        NT.ACCP_DATE_TIME,                        NT.CREATED_DATE,                        NT.STATUS AS KEY_COLUMN,                        NT.STATUS,                        NT.PROCESS_STATUS,                        NT.DEPARTMENT_CODE,                        CASE                          WHEN (UPPER(NT.PROCESS_STATUS)) LIKE                               (UPPER('%COMPLETED')) THEN                           'COMPLETED'                          ELSE                           'INPROGRESS'                        END AS TRAN_LEVEL,                        NT.VALUE_DATE,                        NT.DBTR_ACCT_NO,                        NT.CDTR_ACCT_NO,                        NT.PAYMENT_ENDTOEND_ID,                        CASE                          WHEN NT.EXHF_ID IS NULL THEN                           'REAL_TIME'                          ELSE                           'BULK'                        END AS MEM_PAYMENT_METHOD,                        NT.UETR,                        NT.CLRSYSREF                   FROM NPSS_TRANSACTIONS NT) VW          GROUP BY NPSST_ID,                   STATUS,                   KEY_COLUMN,                   PROCESS_STATUS,                   TRAN_LEVEL,                   VALUE_DATE,                   CREATED_DATE,                   UETR,                   TRAN_REF_ID,                   ACCP_DATE_TIME,                   INTRBK_STTLM_AMNT,                   DBTR_ACCT_NO,                   MEM_PAYMENT_METHOD,                   CDTR_ACCT_NO,                   DBTR_ACCT_NO,                   PAYMENT_ENDTOEND_ID,                   CDTR_IBAN,                   DBTR_IBAN,                   PROCESS_STATUS,                   CLRSYSREF,DEPARTMENT_CODE) V $WHERE  GROUP BY KEY_COLUMN"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Summary Status Chart CCD","filter":[{"filter_name":"TRAN_LEVEL","binding_name":"TRAN_LEVEL","binding_value":"","source_name":"MI_LEVEL_TRAN_LEVEL","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"KEY_COLUMN","target_column":"KEY_COLUMN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"KEY_VALUE","target_column":"KEY_VALUE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for tran list"
	brfq_for_tran_list__sfr_in_tran_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_tran_list"
		let destn_id="transaction_list"
		let parent_source_id="ssp_for_tran_table"
		let event_code="e_1668510618167"
		let event_params={"caller_name":"brfq_for_tran_list__sfr_in_tran_list","event_desc":"SFR in tran list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"summary_tran_level_chart","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1668504033744","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"MEM_PAYMENT_METHOD","alias_name":"","mq_id":"MQ_1668415265731","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691797994","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1668772110535","date_format":false},{"column_name":"TRAN_LEVEL","alias_name":"","mq_id":"MQ_1669006969775","date_format":false},{"column_name":"ACCEPTED_DATE","alias_name":"","mq_id":"MQ_1669198452328","date_format":true},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669209185067","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1669209185410","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1669209185641","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669209840985","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669209847802","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669209934807","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  TRAN_LEVEL,  MODIFIED_DATE_UTC,  ACCEPTED_DATE,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  MEM_PAYMENT_METHOD,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   TO_CHAR(A.ACCP_DATE_TIME, 'YYYY-MM-DD HH:MI:SS:MS AM') as ACCEPTED_DATE,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   case    when (UPPER(A.PROCESS_STATUS)) like (UPPER('%COMPLETED')) then 'COMPLETED'    else 'INPROGRESS'   end as TRAN_LEVEL,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   case    when A.EXHF_ID is null then 'RCT'    else 'BCT'   end as MEM_PAYMENT_METHOD  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Summary Tran CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TRAN_LEVEL","binding_name":"TRAN_LEVEL","binding_value":"","source_name":"MI_LEVEL_TRAN_LEVEL","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let parent_source_id="summary_tran_level_chart"
		let event_code="e_1668683213015"
		let event_params={"caller_name":"svm_for_chart__cc_from_tran_level_chart","event_desc":"CC from Tran level chart","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"summary_tran_level_chart","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="cc_from_tran_level_chart__ssp_for_tran_table,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let event_params={"caller_name":"cc_from_tran_level_chart__ssp_for_tran_table","event_desc":"SSP for tran table","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"summary_tran_level_chart","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="ssp_for_tran_table__brfq_for_tran_list,ssp_for_tran_table__brfq_for_sl_chart,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let event_data={"transaction_list":{"e_1668499614996":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_4","event_code":"E_1668499614996","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"UETR","level":"MI_LEVEL","name":"MI_LEVEL_UETR","setd3name":"UETR"},{"type":"LOCAL","column_name":"NPSST_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSST_ID","setd3name":"NPSST_ID"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1668504033744","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"MEM_PAYMENT_METHOD","alias_name":"","mq_id":"MQ_1668415265731","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691797994","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1668772110535","date_format":false},{"column_name":"TRAN_LEVEL","alias_name":"","mq_id":"MQ_1669006969775","date_format":false},{"column_name":"ACCEPTED_DATE","alias_name":"","mq_id":"MQ_1669198452328","date_format":true},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669209185067","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1669209185410","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1669209185641","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669209840985","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669209847802","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669209934807","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  TRAN_LEVEL,  MODIFIED_DATE_UTC,  ACCEPTED_DATE,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  MEM_PAYMENT_METHOD,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   TO_CHAR(A.ACCP_DATE_TIME, 'YYYY-MM-DD HH:MI:SS:MS AM') as ACCEPTED_DATE,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   case    when (UPPER(A.PROCESS_STATUS)) like (UPPER('%COMPLETED')) then 'COMPLETED'    else 'INPROGRESS'   end as TRAN_LEVEL,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   case    when A.EXHF_ID is null then 'RCT'    else 'BCT'   end as MEM_PAYMENT_METHOD  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Summary Tran CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TRAN_LEVEL","binding_name":"TRAN_LEVEL","binding_value":"","source_name":"MI_LEVEL_TRAN_LEVEL","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
	navigation_ui_view_tran__cc_from_view_dtl_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_tran"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1668683507376"
		let event_params={"caller_name":"navigation_ui_view_tran__cc_from_view_dtl_btn","event_desc":"cc from view dtl btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_tran","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_from_view_dtl_btn__brfq_for_view_tl,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc from view dtl btn"
	cc_from_view_dtl_btn__brfq_for_view_tl(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_from_view_dtl_btn"
		let destn_id="view_transaction_detail"
		let parent_source_id="navigation_ui_view_tran"
		let event_code="e_1668499772275"
		let event_params={"caller_name":"cc_from_view_dtl_btn__brfq_for_view_tl","event_desc":"BRFQ for view TL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_tran","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1668504107493","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"MEM_PAYMENT_METHOD","alias_name":"","mq_id":"MQ_1668415265731","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691797994","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1668772110535","date_format":false},{"column_name":"TRAN_LEVEL","alias_name":"","mq_id":"MQ_1669006969775","date_format":false},{"column_name":"ACCEPTED_DATE","alias_name":"","mq_id":"MQ_1669198452328","date_format":true},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669209185067","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1669209185410","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1669209185641","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669209840985","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669209847802","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669209934807","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  TRAN_LEVEL,  MODIFIED_DATE_UTC,  ACCEPTED_DATE,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  MEM_PAYMENT_METHOD,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   TO_CHAR(A.ACCP_DATE_TIME, 'YYYY-MM-DD HH:MI:SS:MS AM') as ACCEPTED_DATE,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   case    when (UPPER(A.PROCESS_STATUS)) like (UPPER('%COMPLETED')) then 'COMPLETED'    else 'INPROGRESS'   end as TRAN_LEVEL,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   case    when A.EXHF_ID is null then 'RCT'    else 'BCT'   end as MEM_PAYMENT_METHOD  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Ver HST View Transaction CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Id","target_column":"NPSST_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Txn Value Date","target_column":"VALUE_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Number","target_column":"CDTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Number","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Amount Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Type","target_column":"PROCESS_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message ID","target_column":"HDR_MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer  Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Batch Id","target_column":"EXHF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Accepted Date & Time","target_column":"ACCEPTED_DATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Sort Code","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E reference id","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payment Method","target_column":"MEM_PAYMENT_METHOD","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_8","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1668506085361","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"SELECT REVERSAL_DESCRIPTION,        T24_RETURN_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE,        REVERSAL_DESC,        T24_RETURN_DESC,        CBUAE_RETURN_DESC,        TENANT_ID,        DEPARTMENT_CODE,        DT_CODE,        DTT_CODE   FROM (SELECT A.NPSSTPL_ID,                A.MSG_ID,                A.UETR,                A.NPSSTRRD_REFNO,                A.PROCESS_NAME,                A.PROCESSING_SYSTEM,                A.RESPONSE_CODE,                A.PROCESS_REF_NO,                A.RESPONSE_DATA,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS CREATEDDATEMILISEC,                A.CREATED_DATE,                A.PROCESS_STATUS,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.TENANT_ID,                A.REQUEST_DATA_JSON,                A.RESPONSE_DATA_JSON,                A.T24_RETURN_CODE,                NT.DEPARTMENT_CODE,                A.ADDITIONAL_INFO,                T24RC.RETURN_DESCRIPTION AS T24_RETURN_DESC,                CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                A.CBUAE_RETURN_CODE,                CBUAERC.RETURN_DESCRIPTION AS CBUAE_RETURN_DESC,                CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,                A.REVERSAL_CODE,                CCD.CD_DESCRIPTION AS REVERSAL_DESC,                CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION           FROM NPSS_TRN_PROCESS_LOG A           LEFT JOIN <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD ON CCD.CD_CODE =                                                                   A.REVERSAL_CODE                                                               AND CCD.CD_CATEGORY =                                                                   'REVERSAL_REASON_IDENTIFIER_CODE' AND CCD.STATUS = 'APPROVED'           LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES T24RC ON T24RC.RETURN_CODE =                                                                A.T24_RETURN_CODE                                                            AND T24RC.PROCESSING_SYSTEM =                                                                'T24' AND T24RC.STATUS = 'APPROVED'           LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES CBUAERC ON CBUAERC.RETURN_CODE =                                                                  A.CBUAE_RETURN_CODE                                                              AND CBUAERC.PROCESSING_SYSTEM =                                                                  'CBUAE' AND CBUAERC.STATUS = 'APPROVED'          INNER JOIN NPSS_TRANSACTIONS NT ON NT.UETR = A.UETR          ORDER BY A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_8","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1668506085361","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"SELECT REVERSAL_DESCRIPTION,        T24_RETURN_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE,        REVERSAL_DESC,        T24_RETURN_DESC,        CBUAE_RETURN_DESC,        TENANT_ID,        DEPARTMENT_CODE,        DT_CODE,        DTT_CODE   FROM (SELECT A.NPSSTPL_ID,                A.MSG_ID,                A.UETR,                A.NPSSTRRD_REFNO,                A.PROCESS_NAME,                A.PROCESSING_SYSTEM,                A.RESPONSE_CODE,                A.PROCESS_REF_NO,                A.RESPONSE_DATA,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS CREATEDDATEMILISEC,                A.CREATED_DATE,                A.PROCESS_STATUS,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.TENANT_ID,                A.REQUEST_DATA_JSON,                A.RESPONSE_DATA_JSON,                A.T24_RETURN_CODE,                NT.DEPARTMENT_CODE,                A.ADDITIONAL_INFO,                T24RC.RETURN_DESCRIPTION AS T24_RETURN_DESC,                CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                A.CBUAE_RETURN_CODE,                CBUAERC.RETURN_DESCRIPTION AS CBUAE_RETURN_DESC,                CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,                A.REVERSAL_CODE,                CCD.CD_DESCRIPTION AS REVERSAL_DESC,                CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION           FROM NPSS_TRN_PROCESS_LOG A           LEFT JOIN <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD ON CCD.CD_CODE =                                                                   A.REVERSAL_CODE                                                               AND CCD.CD_CATEGORY =                                                                   'REVERSAL_REASON_IDENTIFIER_CODE' AND CCD.STATUS = 'APPROVED'           LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES T24RC ON T24RC.RETURN_CODE =                                                                A.T24_RETURN_CODE                                                            AND T24RC.PROCESSING_SYSTEM =                                                                'T24' AND T24RC.STATUS = 'APPROVED'           LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES CBUAERC ON CBUAERC.RETURN_CODE =                                                                  A.CBUAE_RETURN_CODE                                                              AND CBUAERC.PROCESSING_SYSTEM =                                                                  'CBUAE' AND CBUAERC.STATUS = 'APPROVED'          INNER JOIN NPSS_TRANSACTIONS NT ON NT.UETR = A.UETR          ORDER BY A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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

	//Handler for SELECTION_CHANGED event of "summary status level chart"
	summary_status_level_chart__svm_for_ssl_chart() { 
		let Dest_Is_ctrl=true
		
		let source_id="summary_status_level_chart"
		let destn_id="summary_status_level_chart"
		let parent_source_id=""
		let event_code="e_1668578619665"
		let event_params={"caller_name":"summary_status_level_chart__svm_for_ssl_chart","event_desc":"SVM for SSL Chart","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"summary_status_level_chart","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_ssl_chart__cc_from_summary_status_level,"
		let event_data={"summary_status_level_chart":{"e_1668578619665":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_9","event_code":"E_1668578619665","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"KEY_COLUMN","level":"MI_LEVEL","name":"MI_LEVEL_STATUS","setd3name":"KEY_COLUMN"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_9","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1668579186742","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Summary Status Chart MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"KEY_COLUMN","alias_name":"","mq_id":"MQ_1668579722829","date_format":false},{"column_name":"KEY_VALUE","alias_name":"","mq_id":"MQ_1668579723012","date_format":false}],"joins":[]},"eq_text":"SELECT KEY_COLUMN, SUM(KEY_VALUE) AS KEY_VALUE   FROM (SELECT NPSST_ID,                KEY_COLUMN,                COUNT(STATUS) AS KEY_VALUE,                STATUS,                TRAN_LEVEL,                PROCESS_STATUS,                VALUE_DATE,                CREATED_DATE,                UETR,                ACCP_DATE_TIME,                TRAN_REF_ID,                INTRBK_STTLM_AMNT,                DBTR_ACCT_NO,                MEM_PAYMENT_METHOD,                CDTR_ACCT_NO,                DBTR_ACCT_NO,                PAYMENT_ENDTOEND_ID,                CDTR_IBAN,                DBTR_IBAN,                CLRSYSREF,                DEPARTMENT_CODE                         FROM (SELECT NT.NPSST_ID,                        NT.EXHF_ID,                        NT.CDTR_IBAN,                        NT.DBTR_IBAN,                        NT.DBTR_PHONE_NO,                        NT.CDTR_PHONE_NO,                        NT.INTRBK_STTLM_AMNT,                        NT.TRAN_REF_ID,                        NT.ACCP_DATE_TIME,                        NT.CREATED_DATE,                        NT.STATUS AS KEY_COLUMN,                        NT.STATUS,                        NT.PROCESS_STATUS,                        NT.DEPARTMENT_CODE,                        CASE                          WHEN (UPPER(NT.PROCESS_STATUS)) LIKE                               (UPPER('%COMPLETED')) THEN                           'COMPLETED'                          ELSE                           'INPROGRESS'                        END AS TRAN_LEVEL,                        NT.VALUE_DATE,                        NT.DBTR_ACCT_NO,                        NT.CDTR_ACCT_NO,                        NT.PAYMENT_ENDTOEND_ID,                        CASE                          WHEN NT.EXHF_ID IS NULL THEN                           'REAL_TIME'                          ELSE                           'BULK'                        END AS MEM_PAYMENT_METHOD,                        NT.UETR,                        NT.CLRSYSREF                   FROM NPSS_TRANSACTIONS NT) VW          GROUP BY NPSST_ID,                   STATUS,                   KEY_COLUMN,                   PROCESS_STATUS,                   TRAN_LEVEL,                   VALUE_DATE,                   CREATED_DATE,                   UETR,                   TRAN_REF_ID,                   ACCP_DATE_TIME,                   INTRBK_STTLM_AMNT,                   DBTR_ACCT_NO,                   MEM_PAYMENT_METHOD,                   CDTR_ACCT_NO,                   DBTR_ACCT_NO,                   PAYMENT_ENDTOEND_ID,                   CDTR_IBAN,                   DBTR_IBAN,                   PROCESS_STATUS,                   CLRSYSREF,DEPARTMENT_CODE) V $WHERE  GROUP BY KEY_COLUMN"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Summary Status Chart CCD","filter":[{"filter_name":"TRAN_LEVEL","binding_name":"TRAN_LEVEL","binding_value":"","source_name":"MI_LEVEL_TRAN_LEVEL","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"KEY_COLUMN","target_column":"KEY_COLUMN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"KEY_VALUE","target_column":"KEY_VALUE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for ssl chart to stl chart"
	ssp_for_ssl_chart_to_stl_chart__brfq_for_tl_from_ssl_chart(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_ssl_chart_to_stl_chart"
		let destn_id="transaction_list"
		let parent_source_id="cc_from_summary_status_level"
		let event_code="e_1668578825263"
		let event_params={"caller_name":"ssp_for_ssl_chart_to_stl_chart__brfq_for_tl_from_ssl_chart","event_desc":"BRFQ for TL from SSL chart","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"summary_status_level_chart","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_tl_from_ssl_chart__sfr_from_summary_status_chart_to_transaction_l_ist,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1668504033744","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"MEM_PAYMENT_METHOD","alias_name":"","mq_id":"MQ_1668415265731","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691797994","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1668772110535","date_format":false},{"column_name":"TRAN_LEVEL","alias_name":"","mq_id":"MQ_1669006969775","date_format":false},{"column_name":"ACCEPTED_DATE","alias_name":"","mq_id":"MQ_1669198452328","date_format":true},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669209185067","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1669209185410","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1669209185641","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669209840985","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669209847802","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669209934807","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  TRAN_LEVEL,  MODIFIED_DATE_UTC,  ACCEPTED_DATE,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  MEM_PAYMENT_METHOD,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   TO_CHAR(A.ACCP_DATE_TIME, 'YYYY-MM-DD HH:MI:SS:MS AM') as ACCEPTED_DATE,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   case    when (UPPER(A.PROCESS_STATUS)) like (UPPER('%COMPLETED')) then 'COMPLETED'    else 'INPROGRESS'   end as TRAN_LEVEL,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   case    when A.EXHF_ID is null then 'RCT'    else 'BCT'   end as MEM_PAYMENT_METHOD  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Summary Tran CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TRAN_LEVEL","binding_name":"TRAN_LEVEL","binding_value":"","source_name":"MI_LEVEL_TRAN_LEVEL","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let parent_source_id="summary_status_level_chart"
		let event_code="e_1668683329676"
		let event_params={"caller_name":"svm_for_ssl_chart__cc_from_summary_status_level","event_desc":"CC from summary status level","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"summary_status_level_chart","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="cc_from_summary_status_level__ssp_for_ssl_chart_to_stl_chart,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let event_params={"caller_name":"cc_from_summary_status_level__ssp_for_ssl_chart_to_stl_chart","event_desc":"SSP for SSL chart to STL chart","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"summary_status_level_chart","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="ssp_for_ssl_chart_to_stl_chart__brfq_for_tl_from_ssl_chart,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for tl from ssl chart"
	brfq_for_tl_from_ssl_chart__sfr_from_summary_status_chart_to_transaction_l_ist(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_tl_from_ssl_chart"
		let destn_id="transaction_list"
		let parent_source_id="ssp_for_ssl_chart_to_stl_chart"
		let event_code="e_1668688103524"
		let event_params={"caller_name":"brfq_for_tl_from_ssl_chart__sfr_from_summary_status_chart_to_transaction_l_ist","event_desc":"SFR from Summary Status Chart to Transaction L ist","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"summary_status_level_chart","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1668504033744","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"MEM_PAYMENT_METHOD","alias_name":"","mq_id":"MQ_1668415265731","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691797994","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1668772110535","date_format":false},{"column_name":"TRAN_LEVEL","alias_name":"","mq_id":"MQ_1669006969775","date_format":false},{"column_name":"ACCEPTED_DATE","alias_name":"","mq_id":"MQ_1669198452328","date_format":true},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669209185067","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1669209185410","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1669209185641","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669209840985","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669209847802","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669209934807","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  TRAN_LEVEL,  MODIFIED_DATE_UTC,  ACCEPTED_DATE,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  MEM_PAYMENT_METHOD,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   TO_CHAR(A.ACCP_DATE_TIME, 'YYYY-MM-DD HH:MI:SS:MS AM') as ACCEPTED_DATE,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   case    when (UPPER(A.PROCESS_STATUS)) like (UPPER('%COMPLETED')) then 'COMPLETED'    else 'INPROGRESS'   end as TRAN_LEVEL,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   case    when A.EXHF_ID is null then 'RCT'    else 'BCT'   end as MEM_PAYMENT_METHOD  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Summary Tran CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TRAN_LEVEL","binding_name":"TRAN_LEVEL","binding_value":"","source_name":"MI_LEVEL_TRAN_LEVEL","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_15","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1668609360493","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1668573850306","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1668573852117","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1668573852786","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1668573853731","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1668573854459","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1668573869044","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1668573871186","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573874178","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573876315","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668573884586","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1668573900766","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1668573911947","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1668573917043","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1668573918291","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1668573918796","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1668573919355","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1668573919955","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1668573925605","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1668587107858","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSTRRD_ID,        MSG_ID,        UETR,        PARENT_NPSSTRRD_REFNO,        NPSSTRRD_REFNO,        PROCESS_CODE,        PROCESS_DETAIL,        EXHF_ID,        PROCESS_NAME,        MESSAGE_DESC,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        STATUS,        PROCESS_STATUS,        MESSAGE_DATA,        CREATEDDATEMILISEC,        DT_CODE,        DTT_CODE   FROM (SELECT NPSSTRRD.NPSSTRRD_ID,                NPSSTRRD.MSG_ID,                NPSSTRRD.UETR,                NPSSTRRD.PARENT_NPSSTRRD_REFNO,                NPSSTRRD.NPSSTRRD_REFNO,                NPSSTRRD.MESSAGE_DATA,                NPSSTRRD.PROCESS_CODE,                NPSSTRRD.PROCESS_DETAIL,                NPSSTRRD.EXHF_ID,                NPSSTRRD.PROCESS_NAME,                NPSSTRRD.MESSAGE_DESC,                NPSSTRRD.CHANNEL_ID,                NPSSTRRD.CHANNEL_REFNO,                NPSSTRRD.CHANNEL_USERID,                NPSSTRRD.CHANNEL_PRODUCT,                NPSSTRRD.CHANNEL_SUB_PRODUCT,                NPSSTRRD.CHANNEL_TRAN_CODE,                NPSSTRRD.CREATED_BY,                NPSSTRRD.CREATED_BY_NAME,                NPSSTRRD.CREATED_DATE,                NPSSTRRD.DT_CODE,                NPSSTRRD.DT_DESCRIPTION,                NPSSTRRD.DTT_CODE,                NPSSTRRD.DTT_DESCRIPTION,                NPSSTRRD.MODIFIED_BY,                NPSSTRRD.MODIFIED_BY_NAME,                NPSSTRRD.MODIFIED_DATE,                NPSSTRRD.STATUS,                NPSSTRRD.PROCESS_STATUS,                NPSSTRRD.SYSTEM_ID,                NPSSTRRD.SYSTEM_NAME,                NPSSTRRD.TENANT_ID,                NPSSTRRD.APP_ID,                NPSSTRRD.VERSION_NO,                TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC           FROM NPSS_TRN_REQ_RESP_DTLS NPSSTRRD) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS REQ RES CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_15","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1668609360493","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1668573850306","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1668573852117","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1668573852786","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1668573853731","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1668573854459","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1668573869044","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1668573871186","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573874178","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573876315","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668573884586","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1668573900766","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1668573911947","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1668573917043","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1668573918291","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1668573918796","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1668573919355","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1668573919955","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1668573925605","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1668587107858","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSTRRD_ID,        MSG_ID,        UETR,        PARENT_NPSSTRRD_REFNO,        NPSSTRRD_REFNO,        PROCESS_CODE,        PROCESS_DETAIL,        EXHF_ID,        PROCESS_NAME,        MESSAGE_DESC,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        STATUS,        PROCESS_STATUS,        MESSAGE_DATA,        CREATEDDATEMILISEC,        DT_CODE,        DTT_CODE   FROM (SELECT NPSSTRRD.NPSSTRRD_ID,                NPSSTRRD.MSG_ID,                NPSSTRRD.UETR,                NPSSTRRD.PARENT_NPSSTRRD_REFNO,                NPSSTRRD.NPSSTRRD_REFNO,                NPSSTRRD.MESSAGE_DATA,                NPSSTRRD.PROCESS_CODE,                NPSSTRRD.PROCESS_DETAIL,                NPSSTRRD.EXHF_ID,                NPSSTRRD.PROCESS_NAME,                NPSSTRRD.MESSAGE_DESC,                NPSSTRRD.CHANNEL_ID,                NPSSTRRD.CHANNEL_REFNO,                NPSSTRRD.CHANNEL_USERID,                NPSSTRRD.CHANNEL_PRODUCT,                NPSSTRRD.CHANNEL_SUB_PRODUCT,                NPSSTRRD.CHANNEL_TRAN_CODE,                NPSSTRRD.CREATED_BY,                NPSSTRRD.CREATED_BY_NAME,                NPSSTRRD.CREATED_DATE,                NPSSTRRD.DT_CODE,                NPSSTRRD.DT_DESCRIPTION,                NPSSTRRD.DTT_CODE,                NPSSTRRD.DTT_DESCRIPTION,                NPSSTRRD.MODIFIED_BY,                NPSSTRRD.MODIFIED_BY_NAME,                NPSSTRRD.MODIFIED_DATE,                NPSSTRRD.STATUS,                NPSSTRRD.PROCESS_STATUS,                NPSSTRRD.SYSTEM_ID,                NPSSTRRD.SYSTEM_NAME,                NPSSTRRD.TENANT_ID,                NPSSTRRD.APP_ID,                NPSSTRRD.VERSION_NO,                TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC           FROM NPSS_TRN_REQ_RESP_DTLS NPSSTRRD) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS REQ RES CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
	history_detail__smv_for_res__json__response_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="history_detail"
		let parent_source_id=""
		let event_code="e_1668605969839"
		let event_params={"caller_name":"history_detail__smv_for_res__json__response_ui","event_desc":"SMV for Res  JSON","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="smv_for_res__json__bvm_for_res_json__response_ui,"
		let event_data={"control":{"e_1668605969839":{"dts":{"dt_1304_1665901130705":{"dtts":{"dtt_1304_1665905039255":{"uicgc_code":"CONTROL","event_code":"E_1668605969839","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"RESPONSE_DATA_JSON","level":"MI_LEVEL","name":"MI_LEVEL_RESPONSE_DATA_JSON","setd3name":""}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_8","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1668506085361","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"SELECT REVERSAL_DESCRIPTION,        T24_RETURN_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE,        REVERSAL_DESC,        T24_RETURN_DESC,        CBUAE_RETURN_DESC,        TENANT_ID,        DEPARTMENT_CODE,        DT_CODE,        DTT_CODE   FROM (SELECT A.NPSSTPL_ID,                A.MSG_ID,                A.UETR,                A.NPSSTRRD_REFNO,                A.PROCESS_NAME,                A.PROCESSING_SYSTEM,                A.RESPONSE_CODE,                A.PROCESS_REF_NO,                A.RESPONSE_DATA,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS CREATEDDATEMILISEC,                A.CREATED_DATE,                A.PROCESS_STATUS,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.TENANT_ID,                A.REQUEST_DATA_JSON,                A.RESPONSE_DATA_JSON,                A.T24_RETURN_CODE,                NT.DEPARTMENT_CODE,                A.ADDITIONAL_INFO,                T24RC.RETURN_DESCRIPTION AS T24_RETURN_DESC,                CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                A.CBUAE_RETURN_CODE,                CBUAERC.RETURN_DESCRIPTION AS CBUAE_RETURN_DESC,                CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,                A.REVERSAL_CODE,                CCD.CD_DESCRIPTION AS REVERSAL_DESC,                CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION           FROM NPSS_TRN_PROCESS_LOG A           LEFT JOIN <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD ON CCD.CD_CODE =                                                                   A.REVERSAL_CODE                                                               AND CCD.CD_CATEGORY =                                                                   'REVERSAL_REASON_IDENTIFIER_CODE' AND CCD.STATUS = 'APPROVED'           LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES T24RC ON T24RC.RETURN_CODE =                                                                A.T24_RETURN_CODE                                                            AND T24RC.PROCESSING_SYSTEM =                                                                'T24' AND T24RC.STATUS = 'APPROVED'           LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES CBUAERC ON CBUAERC.RETURN_CODE =                                                                  A.CBUAE_RETURN_CODE                                                              AND CBUAERC.PROCESSING_SYSTEM =                                                                  'CBUAE' AND CBUAERC.STATUS = 'APPROVED'          INNER JOIN NPSS_TRANSACTIONS NT ON NT.UETR = A.UETR          ORDER BY A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__smv_for_req_json__request_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="history_detail"
		let parent_source_id=""
		let event_code="e_1668605835083"
		let event_params={"caller_name":"history_detail__smv_for_req_json__request_ui","event_desc":"SMV for Req JSON","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="smv_for_req_json__bvm_for_req_json__request_ui,"
		let event_data={"control":{"e_1668605835083":{"dts":{"dt_1304_1665901130705":{"dtts":{"dtt_1304_1665905039255":{"uicgc_code":"CONTROL","event_code":"E_1668605835083","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"REQUEST_DATA_JSON","level":"MI_LEVEL","name":"MI_LEVEL_REQUEST_DATA_JSON","setd3name":""}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_8","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1668506085361","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"SELECT REVERSAL_DESCRIPTION,        T24_RETURN_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE,        REVERSAL_DESC,        T24_RETURN_DESC,        CBUAE_RETURN_DESC,        TENANT_ID,        DEPARTMENT_CODE,        DT_CODE,        DTT_CODE   FROM (SELECT A.NPSSTPL_ID,                A.MSG_ID,                A.UETR,                A.NPSSTRRD_REFNO,                A.PROCESS_NAME,                A.PROCESSING_SYSTEM,                A.RESPONSE_CODE,                A.PROCESS_REF_NO,                A.RESPONSE_DATA,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS CREATEDDATEMILISEC,                A.CREATED_DATE,                A.PROCESS_STATUS,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.TENANT_ID,                A.REQUEST_DATA_JSON,                A.RESPONSE_DATA_JSON,                A.T24_RETURN_CODE,                NT.DEPARTMENT_CODE,                A.ADDITIONAL_INFO,                T24RC.RETURN_DESCRIPTION AS T24_RETURN_DESC,                CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                A.CBUAE_RETURN_CODE,                CBUAERC.RETURN_DESCRIPTION AS CBUAE_RETURN_DESC,                CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,                A.REVERSAL_CODE,                CCD.CD_DESCRIPTION AS REVERSAL_DESC,                CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION           FROM NPSS_TRN_PROCESS_LOG A           LEFT JOIN <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD ON CCD.CD_CODE =                                                                   A.REVERSAL_CODE                                                               AND CCD.CD_CATEGORY =                                                                   'REVERSAL_REASON_IDENTIFIER_CODE' AND CCD.STATUS = 'APPROVED'           LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES T24RC ON T24RC.RETURN_CODE =                                                                A.T24_RETURN_CODE                                                            AND T24RC.PROCESSING_SYSTEM =                                                                'T24' AND T24RC.STATUS = 'APPROVED'           LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES CBUAERC ON CBUAERC.RETURN_CODE =                                                                  A.CBUAE_RETURN_CODE                                                              AND CBUAERC.PROCESSING_SYSTEM =                                                                  'CBUAE' AND CBUAERC.STATUS = 'APPROVED'          INNER JOIN NPSS_TRANSACTIONS NT ON NT.UETR = A.UETR          ORDER BY A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "smv for res  json"
	smv_for_res__json__bvm_for_res_json__response_ui(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="smv_for_res__json"
		let destn_id="npss_summary_response_ui_memory11"
		let parent_source_id=""
		let event_code="e_1668606046969"
		let event_params={"destn_comp_id":"response_ui","destn_ctrl_id":"memory11","caller_name":"smv_for_res__json__bvm_for_res_json__response_ui","event_desc":"BVM for Res JSON","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="bind_value_from_memory"
		let internals=""
		let event_data={"control":{"e_1668606046969":{"dts":{"dt_1304_1665901130705":{"dtts":{"dtt_1304_1665905039255":{"uicgc_code":"CONTROL","event_code":"E_1668606046969","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[],"get_from_memory":[{"level":"MI_LEVEL","value":"MI_LEVEL_RESPONSE_DATA_JSON","tb_data":"Y","column":"RESPONSE_DATA_JSON","d3name":""}],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={}
		try {
			this.handler.bind_value_from_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "smv for req json"
	smv_for_req_json__bvm_for_req_json__request_ui(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="smv_for_req_json"
		let destn_id="npss_summary_request_ui_memory10"
		let parent_source_id=""
		let event_code="e_1668605893198"
		let event_params={"destn_comp_id":"request_ui","destn_ctrl_id":"memory10","caller_name":"smv_for_req_json__bvm_for_req_json__request_ui","event_desc":"BVM for Req JSON","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="bind_value_from_memory"
		let internals=""
		let event_data={"control":{"e_1668605893198":{"dts":{"dt_1304_1665901130705":{"dtts":{"dtt_1304_1665905039255":{"uicgc_code":"CONTROL","event_code":"E_1668605893198","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[],"get_from_memory":[{"level":"MI_LEVEL","value":"MI_LEVEL_REQUEST_DATA_JSON","tb_data":"Y","column":"REQUEST_DATA_JSON","d3name":""}],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={}
		try {
			this.handler.bind_value_from_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
