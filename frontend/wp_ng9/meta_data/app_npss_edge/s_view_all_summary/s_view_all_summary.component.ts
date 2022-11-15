/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26885 
Modified By     : Admin 
Modified Date   : 2022-Nov-15 11:15 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_all_summary
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'

@Component({
	selector: 's_view_all_summary',
	templateUrl: './s_view_all_summary.component.html',
	styleUrls: ['./s_view_all_summary.component.css'],
	providers:[torus_cs_show_hideService]
})
    
// Start of class 
export class s_view_all_summaryComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_view_all_summary"
	wftpa_id : string = "WFT_NPSS_P_1304_1668503862323_0"
	cg_code : string = "CG_1304_1668495726741"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "back_ui"
	uicgc_2 : string = "summary_chart"
	uicgc_3 : string = "navigation_ui"
	uicgc_4 : string = "transaction_list"
	uicgc_5 : string = "view_transaction_detail"
	uicgc_7 : string = "search"
	uicgc_8 : string = "history_detail"
	key_events : any = {}
	btl_1304_1668497379186 : string = "p_view_history_layout"
	btl_1304_1668497253326 : string = "p_vertical_layout"
	btl_1304_1668497202456 : string = "p_search_layout"
	btl_1304_1668497054916 : string = "p_main_layout"
	forms : any = ["uicgc_7","uicgc_1","uicgc_3"]
	p_search_layout__spap_for_search_showpopup : boolean = false
	back_ui : any = {}
	back_ui_back : any = {}
	summary_chart : any = {}
	navigation_ui : any = {}
	navigation_ui_search : any = {}
	navigation_ui_view_detail : any = {}
	navigation_ui_view_log_history : any = {}
	transaction_list : any = {}
	view_transaction_detail : any = {}
	search : any = {}
	search_search : any = {}
	search_clear : any = {}
	history_detail : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private torus_cs_show_hideService:torus_cs_show_hideService) {
    
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
	
		// Component level properties - "Summary Chart" 
		this.summary_chart.uictrl_code = "chart"
		this.summary_chart.uicgc_desc = "Summary Chart"
		this.summary_chart.uicgc_code = "uicgc_2"
		this.summary_chart.params = {}
		this.summary_chart.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1668504004768","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Summary Chart MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"KEY_COLUMN","alias_name":"","mq_id":"MQ_1668495396199","date_format":false},{"column_name":"KEY_VALUE","alias_name":"","mq_id":"MQ_1668495396703","date_format":false}],"joins":[]},"eq_text":"SELECT  KEY_COLUMN,SORT_ORDER,TRAN_LEVEL,  SUM(KEY_VALUE) AS KEY_VALUE FROM  (  SELECT   KEY_COLUMN,   '' AS TRAN_LEVEL,   MEM_PAYMENT_METHOD,   UETR,   CREATED_DATE,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   DBTR_IBAN,   INTRBK_STTLM_AMNT,   PAYMENT_ENDTOEND_ID,   PROCESS_TYPE,   SORT_ORDER,   COUNT(UETR) AS KEY_VALUE  FROM   (   SELECT    'TOTAL' AS KEY_COLUMN,    1 AS SORT_ORDER,    STATUS,    CASE     WHEN EXHF_ID IS NULL THEN 'REAL TIME'     ELSE 'BULK PAYMENTS'    END AS MEM_PAYMENT_METHOD,    UETR,    CREATED_DATE,    VALUE_DATE,    DBTR_ACCT_NO,    CDTR_ACCT_NO,    CDTR_IBAN,    DBTR_IBAN,    INTRBK_STTLM_AMNT,    PAYMENT_ENDTOEND_ID,    PROCESS_TYPE   FROM    NPSS_TRANSACTIONS NT) A  GROUP BY   SORT_ORDER,KEY_COLUMN,   MEM_PAYMENT_METHOD,   UETR,   CREATED_DATE,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   DBTR_IBAN,   INTRBK_STTLM_AMNT,   PAYMENT_ENDTOEND_ID,   PROCESS_TYPE UNION ALL  SELECT   KEY_COLUMN,   'COMPLETED' AS TRAN_LEVEL,   MEM_PAYMENT_METHOD,   UETR,   CREATED_DATE,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   DBTR_IBAN,   INTRBK_STTLM_AMNT,   PAYMENT_ENDTOEND_ID,   PROCESS_TYPE,   SORT_ORDER,   COUNT(UETR) AS KEY_VALUE  FROM   (   SELECT    'COMPLETED' AS KEY_COLUMN,    2 AS SORT_ORDER,    STATUS,    CASE     WHEN EXHF_ID IS NULL THEN 'REAL TIME'     ELSE 'BULK PAYMENTS'    END AS MEM_PAYMENT_METHOD,    UETR,    CREATED_DATE,    VALUE_DATE,    DBTR_ACCT_NO,    CDTR_ACCT_NO,    CDTR_IBAN,    DBTR_IBAN,    INTRBK_STTLM_AMNT,    PAYMENT_ENDTOEND_ID,    PROCESS_TYPE   FROM    NPSS_TRANSACTIONS NT) A  WHERE   STATUS LIKE '%SUCCESS'  GROUP BY   SORT_ORDER,KEY_COLUMN,   MEM_PAYMENT_METHOD,   UETR,   CREATED_DATE,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   DBTR_IBAN,   INTRBK_STTLM_AMNT,   PAYMENT_ENDTOEND_ID,   PROCESS_TYPE UNION ALL  SELECT   KEY_COLUMN,   'INPROGRESS' AS TRAN_LEVEL,   MEM_PAYMENT_METHOD,   UETR,   CREATED_DATE,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   DBTR_IBAN,   INTRBK_STTLM_AMNT,   PAYMENT_ENDTOEND_ID,   PROCESS_TYPE,   SORT_ORDER,   COUNT(UETR) AS KEY_VALUE  FROM   (   SELECT    'INPROGRESS' AS KEY_COLUMN,    3 AS SORT_ORDER,    STATUS,    CASE     WHEN EXHF_ID IS NULL THEN 'REAL TIME'     ELSE 'BULK PAYMENTS'    END AS MEM_PAYMENT_METHOD,    UETR,    CREATED_DATE,    VALUE_DATE,    DBTR_ACCT_NO,    CDTR_ACCT_NO,    CDTR_IBAN,    DBTR_IBAN,    INTRBK_STTLM_AMNT,    PAYMENT_ENDTOEND_ID,    PROCESS_TYPE   FROM    NPSS_TRANSACTIONS NT ) A  WHERE   STATUS NOT LIKE '%SUCCESS'  GROUP BY   SORT_ORDER,KEY_COLUMN,TRAN_LEVEL,   MEM_PAYMENT_METHOD,   UETR,   CREATED_DATE,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   DBTR_IBAN,   INTRBK_STTLM_AMNT,   PAYMENT_ENDTOEND_ID,   PROCESS_TYPE )V $WHERE GROUP BY  KEY_COLUMN,SORT_ORDER,TRAN_LEVEL  ORDER BY SORT_ORDER"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Summary Chart CCD","filter":[],"databinding":[{"header":"KEY_VALUE","target_column":"KEY_VALUE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"KEY_COLUMN","target_column":"KEY_COLUMN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.summary_chart.context_menu = []
		this.summary_chart.views = {}
		this.summary_chart.onChangecomponent = new EventEmitter<any>()
		this.summary_chart.show = true
		this.summary_chart.dynamic_param = {}
	
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
		
		// "View Detail" Button of "Navigation UI" component
		this.navigation_ui_view_detail.label_name = "View Detail"
		this.navigation_ui_view_detail.show = true
		this.navigation_ui_view_detail.disabled = true
		this.navigation_ui_view_detail.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.navigation_ui_view_detail.dynamic_param = {}
		this.navigation_ui_view_detail.role = []
		this.navigation_ui_view_detail.action = ""
		
		// "View Log History" Button of "Navigation UI" component
		this.navigation_ui_view_log_history.label_name = "View Log History"
		this.navigation_ui_view_log_history.show = true
		this.navigation_ui_view_log_history.disabled = false
		this.navigation_ui_view_log_history.params = {"icon_only":false,"uicgcc_style":"fa fa-building"}
		this.navigation_ui_view_log_history.dynamic_param = {}
		this.navigation_ui_view_log_history.role = []
		this.navigation_ui_view_log_history.action = ""
	
		// Component level properties - "Transaction list" 
		this.transaction_list.uictrl_code = "datatable"
		this.transaction_list.uicgc_desc = "Transaction list"
		this.transaction_list.uicgc_code = "uicgc_4"
		this.transaction_list.params = {"need_pag_datatable":"Y","advance_dynamic_search":"N","need_search":"N"}
		this.transaction_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1668504033744","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Summary Tran MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1668494778964","date_format":true},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1668494779204","date_format":false,"currency_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1668494779444","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1668494779924","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668494894018","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668494938279","date_format":false}],"joins":[]},"eq_text":"select NPSST_ID, TRAN_LEVEL,        MODIFIED_DATE_UTC,        DATEMI,        VALUE_DATE,        CREATED_DATE,        MODIFIED_DATE_UTC,        CDTR_ACCT_NO,        CDTR_ACCT_NAME,        INTRBK_STTLM_AMNT,        INTRBK_STTLM_CUR,        DBTR_ACCT_NO,        DBTR_ACCT_NAME,        DR_SORT_CODE,        CR_SORT_CODE,        UETR,        HDR_MSG_ID,        PRODUCT_CODE,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        PROCESS_TYPE,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,        CDTR_IBAN,        CLRSYSREF,        PAYMENT_ENDTOEND_ID,        EXHF_ID,        PROCESS_STATUS,        STATUS,        DT_CODE,        DTT_CODE,        TENANT_ID,        TS_ID,        LOCKED_BY,        LOCKED_BY_NAME,        VERSION_NO,        MEM_PAYMENT_METHOD,        TRAN_REF_ID   from (select A.NPSST_ID,                A.VALUE_DATE,                A.MODIFIED_DATE_UTC,                A.CREATED_DATE,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') as DATEMI,                A.CDTR_ACCT_NO,                A.CDTR_ACCT_NAME,                A.INTRBK_STTLM_AMNT,                A.INTRBK_STTLM_CUR,                A.DBTR_ACCT_NO,                A.DBTR_ACCT_NAME,                A.DR_SORT_CODE,                A.CR_SORT_CODE,                A.UETR,                A.HDR_MSG_ID,                A.PRODUCT_CODE,                A.CHANNEL_ID,                A.CHANNEL_REFNO,                A.CHANNEL_PRODUCT,                A.CHANNEL_SUB_PRODUCT,                A.CHANNEL_TRAN_CODE,                A.PROCESS_TYPE,                A.DBTR_PHONE_NO,                A.DBTR_EMAIL_ID,                A.DBTR_DOCUMENT_ID,                A.DBTR_IBAN,                A.CDTR_PHONE_NO,                A.CDTR_EMAIL_ID,                A.CDTR_DOCUMENT_ID,                A.CDTR_IBAN,                A.CLRSYSREF,                A.PAYMENT_ENDTOEND_ID,                A.TRAN_REF_ID,                A.EXHF_ID,                A.REMITTANCE_INFO,                A.INWARD_FILE_NAME,                A.PROCESS_STATUS,   CASE    WHEN A.STATUS LIKE '%SUCCESS' THEN 'COMPLETED'   ELSE 'INPROGRESS'   END AS TRAN_LEVEL,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.TENANT_ID,                A.VERSION_NO,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME,                case                  when A.EXHF_ID is null then                   'REAL_TIME'                  else                   'BULK'                end as MEM_PAYMENT_METHOD           from NPSS_TRANSACTIONS A           left join TRANSACTION_SET TS on TS.TRN_ID = A.NPSST_ID                                       and TS.DTT_CODE = A.DTT_CODE          order by A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Summary Tran CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TRAN_LEVEL","binding_name":"TRAN_LEVEL","binding_value":"","source_name":"MI_LEVEL_TRAN_LEVEL","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref No","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		this.view_transaction_detail.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1668504107493","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"MEM_PAYMENT_METHOD","alias_name":"","mq_id":"MQ_1668415265731","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  MODIFIED_DATE_UTC,  DATEMI,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  INTRBK_STTLM_AMNT,  INTRBK_STTLM_CUR,  DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  EXHF_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  MEM_PAYMENT_METHOD,  TRAN_REF_ID from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.UETR,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   case    when A.EXHF_ID is null then 'REAL_TIME'    else 'BULK'   end as MEM_PAYMENT_METHOD  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Ver HST View Transaction CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Id","target_column":"NPSST_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"VALUE_DATE","target_column":"VALUE_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account No","target_column":"CDTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account No","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing sys ref number","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Type","target_column":"PROCESS_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message ID","target_column":"HDR_MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer  Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Batch Id","target_column":"EXHF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Clearing Sys Ref","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Sort Code","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payment Method","target_column":"MEM_PAYMENT_METHOD","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		this.history_detail.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_8","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1668506085361","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"SELECT REVERSAL_DESCRIPTION,        T24_RETURN_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE,        REVERSAL_DESC,        T24_RETURN_DESC,        CBUAE_RETURN_DESC,        TENANT_ID,        DT_CODE,        DTT_CODE   FROM (SELECT A.NPSSTPL_ID,                A.MSG_ID,                A.UETR,                A.NPSSTRRD_REFNO,                A.PROCESS_NAME,                A.PROCESSING_SYSTEM,                A.RESPONSE_CODE,                A.PROCESS_REF_NO,                A.RESPONSE_DATA,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') AS CREATEDDATEMILISEC,                A.CREATED_DATE,                A.PROCESS_STATUS,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.TENANT_ID,                A.REQUEST_DATA_JSON,                A.RESPONSE_DATA_JSON,                A.T24_RETURN_CODE,                A.ADDITIONAL_INFO,                T24RC.RETURN_DESCRIPTION AS T24_RETURN_DESC,                CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                A.CBUAE_RETURN_CODE,                CBUAERC.RETURN_DESCRIPTION AS CBUAE_RETURN_DESC,                CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,                A.REVERSAL_CODE,                CCD.CD_DESCRIPTION AS REVERSAL_DESC,                CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION           FROM NPSS_TRN_PROCESS_LOG A           LEFT JOIN CORE_NC_CODE_DESCRIPTIONS CCD ON CCD.CD_CODE =                                                      A.REVERSAL_CODE                                                  AND CCD.CD_CATEGORY =                                                      'REVERSAL_REASON_IDENTIFIER_CODE'           LEFT JOIN CORE_NC_RETURN_CODES T24RC ON T24RC.RETURN_CODE =                                                   A.T24_RETURN_CODE                                               AND T24RC.PROCESSING_SYSTEM =                                                   'T24'           LEFT JOIN CORE_NC_RETURN_CODES CBUAERC ON CBUAERC.RETURN_CODE =                                                     A.CBUAE_RETURN_CODE                                                 AND CBUAERC.PROCESSING_SYSTEM =                                                     'CBUAE'          ORDER BY A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.history_detail.context_menu = []
		this.history_detail.views = {}
		this.history_detail.onChangecomponent = new EventEmitter<any>()
		this.history_detail.show = true
		this.history_detail.dynamic_param = {}
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__cf_for_pl()
		this.page_load__cc_for_showhide_in_pl()
		this.page_load__de_for_vlh_from_pl()
	}

	//Handler for INTERNAL event of "cc for showhide in pl"
	cc_for_showhide_in_pl__internal(parent_event_result){
		this.cc_for_showhide_in_pl__trigger_btn_click_to_search(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__ssp_for_chart()
		this.search_search__cu_for_tl()
		this.search_search__cp_for_search()
	}

	//Handler for INTERNAL event of "ssp for chart"
	ssp_for_chart__internal(parent_event_result){
		this.ssp_for_chart__brfq_for_chart(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "summary chart"
	summary_chart__selection_changed(){
		this.summary_chart__svm_for_chart()
	}

	//Handler for INTERNAL event of "svm for chart"
	svm_for_chart__internal(parent_event_result){
		this.svm_for_chart__ssp_for_tran_table(parent_event_result)
	}

	//Handler for INTERNAL event of "ssp for tran table"
	ssp_for_tran_table__internal(parent_event_result){
		this.ssp_for_tran_table__brfq_for_tran_list(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for tran list"
	brfq_for_tran_list__internal(parent_event_result){
		this.brfq_for_tran_list__sfr_in_tran_list(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__selection_changed(){
		this.transaction_list__ee_for_view_detail_btn()
		this.transaction_list__svm_for_tran_list()
		this.transaction_list__ee_for_vd_from_tl()
		this.transaction_list__ee_for_vlh()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view detail"
	navigation_ui_view_detail__action_button_click(){
		this.navigation_ui_view_detail__brfq_for_view_tl()
		this.navigation_ui_view_detail__sp_for_vl()
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

	//Handler for DPSINIT event of "page_load"
	page_load__cf_for_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1668499053472"
		let event_params={"caller_name":"page_load__cf_for_pl","event_desc":"CF for PL","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""}}
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

	//Handler for DPSINIT event of "page_load"
	page_load__cc_for_showhide_in_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1668499132242"
		let event_params={"caller_name":"page_load__cc_for_showhide_in_pl","event_desc":"CC for showhide in PL","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_showhide_in_pl__trigger_btn_click_to_search,"
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

	//Handler for INTERNAL event of "cc for showhide in pl"
	cc_for_showhide_in_pl__trigger_btn_click_to_search(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_showhide_in_pl"
		let destn_id="search_search"
		let parent_source_id="page_load"
		let event_code="e_1668499189463"
		let event_params={"caller_name":"cc_for_showhide_in_pl__trigger_btn_click_to_search","event_desc":"Trigger btn click to search","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
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
		let internals="ssp_for_chart__brfq_for_chart,"
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
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1668504033744","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Summary Tran MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1668494778964","date_format":true},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1668494779204","date_format":false,"currency_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1668494779444","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1668494779924","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668494894018","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668494938279","date_format":false}],"joins":[]},"eq_text":"select NPSST_ID, TRAN_LEVEL,        MODIFIED_DATE_UTC,        DATEMI,        VALUE_DATE,        CREATED_DATE,        MODIFIED_DATE_UTC,        CDTR_ACCT_NO,        CDTR_ACCT_NAME,        INTRBK_STTLM_AMNT,        INTRBK_STTLM_CUR,        DBTR_ACCT_NO,        DBTR_ACCT_NAME,        DR_SORT_CODE,        CR_SORT_CODE,        UETR,        HDR_MSG_ID,        PRODUCT_CODE,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        PROCESS_TYPE,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,        CDTR_IBAN,        CLRSYSREF,        PAYMENT_ENDTOEND_ID,        EXHF_ID,        PROCESS_STATUS,        STATUS,        DT_CODE,        DTT_CODE,        TENANT_ID,        TS_ID,        LOCKED_BY,        LOCKED_BY_NAME,        VERSION_NO,        MEM_PAYMENT_METHOD,        TRAN_REF_ID   from (select A.NPSST_ID,                A.VALUE_DATE,                A.MODIFIED_DATE_UTC,                A.CREATED_DATE,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') as DATEMI,                A.CDTR_ACCT_NO,                A.CDTR_ACCT_NAME,                A.INTRBK_STTLM_AMNT,                A.INTRBK_STTLM_CUR,                A.DBTR_ACCT_NO,                A.DBTR_ACCT_NAME,                A.DR_SORT_CODE,                A.CR_SORT_CODE,                A.UETR,                A.HDR_MSG_ID,                A.PRODUCT_CODE,                A.CHANNEL_ID,                A.CHANNEL_REFNO,                A.CHANNEL_PRODUCT,                A.CHANNEL_SUB_PRODUCT,                A.CHANNEL_TRAN_CODE,                A.PROCESS_TYPE,                A.DBTR_PHONE_NO,                A.DBTR_EMAIL_ID,                A.DBTR_DOCUMENT_ID,                A.DBTR_IBAN,                A.CDTR_PHONE_NO,                A.CDTR_EMAIL_ID,                A.CDTR_DOCUMENT_ID,                A.CDTR_IBAN,                A.CLRSYSREF,                A.PAYMENT_ENDTOEND_ID,                A.TRAN_REF_ID,                A.EXHF_ID,                A.REMITTANCE_INFO,                A.INWARD_FILE_NAME,                A.PROCESS_STATUS,   CASE    WHEN A.STATUS LIKE '%SUCCESS' THEN 'COMPLETED'   ELSE 'INPROGRESS'   END AS TRAN_LEVEL,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.TENANT_ID,                A.VERSION_NO,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME,                case                  when A.EXHF_ID is null then                   'REAL_TIME'                  else                   'BULK'                end as MEM_PAYMENT_METHOD           from NPSS_TRANSACTIONS A           left join TRANSACTION_SET TS on TS.TRN_ID = A.NPSST_ID                                       and TS.DTT_CODE = A.DTT_CODE          order by A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Summary Tran CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TRAN_LEVEL","binding_name":"TRAN_LEVEL","binding_value":"","source_name":"MI_LEVEL_TRAN_LEVEL","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref No","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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

	//Handler for INTERNAL event of "ssp for chart"
	ssp_for_chart__brfq_for_chart(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_chart"
		let destn_id="summary_chart"
		let parent_source_id="search_search"
		let event_code="e_1668499306411"
		let event_params={"caller_name":"ssp_for_chart__brfq_for_chart","event_desc":"BRFQ for Chart","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"BAR","chart_label":"KEY_COLUMN","chart_series":"","chart_data":"KEY_VALUE","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1668504004768","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Summary Chart MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"KEY_COLUMN","alias_name":"","mq_id":"MQ_1668495396199","date_format":false},{"column_name":"KEY_VALUE","alias_name":"","mq_id":"MQ_1668495396703","date_format":false}],"joins":[]},"eq_text":"SELECT  KEY_COLUMN,SORT_ORDER,TRAN_LEVEL,  SUM(KEY_VALUE) AS KEY_VALUE FROM  (  SELECT   KEY_COLUMN,   '' AS TRAN_LEVEL,   MEM_PAYMENT_METHOD,   UETR,   CREATED_DATE,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   DBTR_IBAN,   INTRBK_STTLM_AMNT,   PAYMENT_ENDTOEND_ID,   PROCESS_TYPE,   SORT_ORDER,   COUNT(UETR) AS KEY_VALUE  FROM   (   SELECT    'TOTAL' AS KEY_COLUMN,    1 AS SORT_ORDER,    STATUS,    CASE     WHEN EXHF_ID IS NULL THEN 'REAL TIME'     ELSE 'BULK PAYMENTS'    END AS MEM_PAYMENT_METHOD,    UETR,    CREATED_DATE,    VALUE_DATE,    DBTR_ACCT_NO,    CDTR_ACCT_NO,    CDTR_IBAN,    DBTR_IBAN,    INTRBK_STTLM_AMNT,    PAYMENT_ENDTOEND_ID,    PROCESS_TYPE   FROM    NPSS_TRANSACTIONS NT) A  GROUP BY   SORT_ORDER,KEY_COLUMN,   MEM_PAYMENT_METHOD,   UETR,   CREATED_DATE,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   DBTR_IBAN,   INTRBK_STTLM_AMNT,   PAYMENT_ENDTOEND_ID,   PROCESS_TYPE UNION ALL  SELECT   KEY_COLUMN,   'COMPLETED' AS TRAN_LEVEL,   MEM_PAYMENT_METHOD,   UETR,   CREATED_DATE,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   DBTR_IBAN,   INTRBK_STTLM_AMNT,   PAYMENT_ENDTOEND_ID,   PROCESS_TYPE,   SORT_ORDER,   COUNT(UETR) AS KEY_VALUE  FROM   (   SELECT    'COMPLETED' AS KEY_COLUMN,    2 AS SORT_ORDER,    STATUS,    CASE     WHEN EXHF_ID IS NULL THEN 'REAL TIME'     ELSE 'BULK PAYMENTS'    END AS MEM_PAYMENT_METHOD,    UETR,    CREATED_DATE,    VALUE_DATE,    DBTR_ACCT_NO,    CDTR_ACCT_NO,    CDTR_IBAN,    DBTR_IBAN,    INTRBK_STTLM_AMNT,    PAYMENT_ENDTOEND_ID,    PROCESS_TYPE   FROM    NPSS_TRANSACTIONS NT) A  WHERE   STATUS LIKE '%SUCCESS'  GROUP BY   SORT_ORDER,KEY_COLUMN,   MEM_PAYMENT_METHOD,   UETR,   CREATED_DATE,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   DBTR_IBAN,   INTRBK_STTLM_AMNT,   PAYMENT_ENDTOEND_ID,   PROCESS_TYPE UNION ALL  SELECT   KEY_COLUMN,   'INPROGRESS' AS TRAN_LEVEL,   MEM_PAYMENT_METHOD,   UETR,   CREATED_DATE,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   DBTR_IBAN,   INTRBK_STTLM_AMNT,   PAYMENT_ENDTOEND_ID,   PROCESS_TYPE,   SORT_ORDER,   COUNT(UETR) AS KEY_VALUE  FROM   (   SELECT    'INPROGRESS' AS KEY_COLUMN,    3 AS SORT_ORDER,    STATUS,    CASE     WHEN EXHF_ID IS NULL THEN 'REAL TIME'     ELSE 'BULK PAYMENTS'    END AS MEM_PAYMENT_METHOD,    UETR,    CREATED_DATE,    VALUE_DATE,    DBTR_ACCT_NO,    CDTR_ACCT_NO,    CDTR_IBAN,    DBTR_IBAN,    INTRBK_STTLM_AMNT,    PAYMENT_ENDTOEND_ID,    PROCESS_TYPE   FROM    NPSS_TRANSACTIONS NT ) A  WHERE   STATUS NOT LIKE '%SUCCESS'  GROUP BY   SORT_ORDER,KEY_COLUMN,TRAN_LEVEL,   MEM_PAYMENT_METHOD,   UETR,   CREATED_DATE,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   DBTR_IBAN,   INTRBK_STTLM_AMNT,   PAYMENT_ENDTOEND_ID,   PROCESS_TYPE )V $WHERE GROUP BY  KEY_COLUMN,SORT_ORDER,TRAN_LEVEL  ORDER BY SORT_ORDER"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Summary Chart CCD","filter":[],"databinding":[{"header":"KEY_VALUE","target_column":"KEY_VALUE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"KEY_COLUMN","target_column":"KEY_COLUMN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "summary chart"
	summary_chart__svm_for_chart() { 
		let Dest_Is_ctrl=true
		
		let source_id="summary_chart"
		let destn_id="summary_chart"
		let parent_source_id=""
		let event_code="e_1668499437603"
		let event_params={"caller_name":"summary_chart__svm_for_chart","event_desc":"SVM for Chart","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"summary_chart","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_chart__ssp_for_tran_table,"
		let event_data={"summary_chart":{"e_1668499437603":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_2","event_code":"E_1668499437603","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Transactions","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"TRAN_LEVEL","level":"MI_LEVEL","name":"MI_LEVEL_TRAN_LEVEL","setd3name":"TRAN_LEVEL"},{"type":"HARDCODED","column_name":"BULK","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1668504004768","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Summary Chart MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"KEY_COLUMN","alias_name":"","mq_id":"MQ_1668495396199","date_format":false},{"column_name":"KEY_VALUE","alias_name":"","mq_id":"MQ_1668495396703","date_format":false}],"joins":[]},"eq_text":"SELECT  KEY_COLUMN,SORT_ORDER,TRAN_LEVEL,  SUM(KEY_VALUE) AS KEY_VALUE FROM  (  SELECT   KEY_COLUMN,   '' AS TRAN_LEVEL,   MEM_PAYMENT_METHOD,   UETR,   CREATED_DATE,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   DBTR_IBAN,   INTRBK_STTLM_AMNT,   PAYMENT_ENDTOEND_ID,   PROCESS_TYPE,   SORT_ORDER,   COUNT(UETR) AS KEY_VALUE  FROM   (   SELECT    'TOTAL' AS KEY_COLUMN,    1 AS SORT_ORDER,    STATUS,    CASE     WHEN EXHF_ID IS NULL THEN 'REAL TIME'     ELSE 'BULK PAYMENTS'    END AS MEM_PAYMENT_METHOD,    UETR,    CREATED_DATE,    VALUE_DATE,    DBTR_ACCT_NO,    CDTR_ACCT_NO,    CDTR_IBAN,    DBTR_IBAN,    INTRBK_STTLM_AMNT,    PAYMENT_ENDTOEND_ID,    PROCESS_TYPE   FROM    NPSS_TRANSACTIONS NT) A  GROUP BY   SORT_ORDER,KEY_COLUMN,   MEM_PAYMENT_METHOD,   UETR,   CREATED_DATE,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   DBTR_IBAN,   INTRBK_STTLM_AMNT,   PAYMENT_ENDTOEND_ID,   PROCESS_TYPE UNION ALL  SELECT   KEY_COLUMN,   'COMPLETED' AS TRAN_LEVEL,   MEM_PAYMENT_METHOD,   UETR,   CREATED_DATE,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   DBTR_IBAN,   INTRBK_STTLM_AMNT,   PAYMENT_ENDTOEND_ID,   PROCESS_TYPE,   SORT_ORDER,   COUNT(UETR) AS KEY_VALUE  FROM   (   SELECT    'COMPLETED' AS KEY_COLUMN,    2 AS SORT_ORDER,    STATUS,    CASE     WHEN EXHF_ID IS NULL THEN 'REAL TIME'     ELSE 'BULK PAYMENTS'    END AS MEM_PAYMENT_METHOD,    UETR,    CREATED_DATE,    VALUE_DATE,    DBTR_ACCT_NO,    CDTR_ACCT_NO,    CDTR_IBAN,    DBTR_IBAN,    INTRBK_STTLM_AMNT,    PAYMENT_ENDTOEND_ID,    PROCESS_TYPE   FROM    NPSS_TRANSACTIONS NT) A  WHERE   STATUS LIKE '%SUCCESS'  GROUP BY   SORT_ORDER,KEY_COLUMN,   MEM_PAYMENT_METHOD,   UETR,   CREATED_DATE,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   DBTR_IBAN,   INTRBK_STTLM_AMNT,   PAYMENT_ENDTOEND_ID,   PROCESS_TYPE UNION ALL  SELECT   KEY_COLUMN,   'INPROGRESS' AS TRAN_LEVEL,   MEM_PAYMENT_METHOD,   UETR,   CREATED_DATE,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   DBTR_IBAN,   INTRBK_STTLM_AMNT,   PAYMENT_ENDTOEND_ID,   PROCESS_TYPE,   SORT_ORDER,   COUNT(UETR) AS KEY_VALUE  FROM   (   SELECT    'INPROGRESS' AS KEY_COLUMN,    3 AS SORT_ORDER,    STATUS,    CASE     WHEN EXHF_ID IS NULL THEN 'REAL TIME'     ELSE 'BULK PAYMENTS'    END AS MEM_PAYMENT_METHOD,    UETR,    CREATED_DATE,    VALUE_DATE,    DBTR_ACCT_NO,    CDTR_ACCT_NO,    CDTR_IBAN,    DBTR_IBAN,    INTRBK_STTLM_AMNT,    PAYMENT_ENDTOEND_ID,    PROCESS_TYPE   FROM    NPSS_TRANSACTIONS NT ) A  WHERE   STATUS NOT LIKE '%SUCCESS'  GROUP BY   SORT_ORDER,KEY_COLUMN,TRAN_LEVEL,   MEM_PAYMENT_METHOD,   UETR,   CREATED_DATE,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   DBTR_IBAN,   INTRBK_STTLM_AMNT,   PAYMENT_ENDTOEND_ID,   PROCESS_TYPE )V $WHERE GROUP BY  KEY_COLUMN,SORT_ORDER,TRAN_LEVEL  ORDER BY SORT_ORDER"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Summary Chart CCD","filter":[],"databinding":[{"header":"KEY_VALUE","target_column":"KEY_VALUE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"KEY_COLUMN","target_column":"KEY_COLUMN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for chart"
	svm_for_chart__ssp_for_tran_table(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_chart"
		let destn_id="search"
		let parent_source_id="summary_chart"
		let event_code="e_1668499470426"
		let event_params={"caller_name":"svm_for_chart__ssp_for_tran_table","event_desc":"SSP for tran table","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"summary_chart","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="ssp_for_tran_table__brfq_for_tran_list,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let parent_source_id="svm_for_chart"
		let event_code="e_1668499510201"
		let event_params={"caller_name":"ssp_for_tran_table__brfq_for_tran_list","event_desc":"BRFQ for tran list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"summary_chart","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_tran_list__sfr_in_tran_list,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1668504033744","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Summary Tran MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1668494778964","date_format":true},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1668494779204","date_format":false,"currency_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1668494779444","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1668494779924","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668494894018","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668494938279","date_format":false}],"joins":[]},"eq_text":"select NPSST_ID, TRAN_LEVEL,        MODIFIED_DATE_UTC,        DATEMI,        VALUE_DATE,        CREATED_DATE,        MODIFIED_DATE_UTC,        CDTR_ACCT_NO,        CDTR_ACCT_NAME,        INTRBK_STTLM_AMNT,        INTRBK_STTLM_CUR,        DBTR_ACCT_NO,        DBTR_ACCT_NAME,        DR_SORT_CODE,        CR_SORT_CODE,        UETR,        HDR_MSG_ID,        PRODUCT_CODE,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        PROCESS_TYPE,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,        CDTR_IBAN,        CLRSYSREF,        PAYMENT_ENDTOEND_ID,        EXHF_ID,        PROCESS_STATUS,        STATUS,        DT_CODE,        DTT_CODE,        TENANT_ID,        TS_ID,        LOCKED_BY,        LOCKED_BY_NAME,        VERSION_NO,        MEM_PAYMENT_METHOD,        TRAN_REF_ID   from (select A.NPSST_ID,                A.VALUE_DATE,                A.MODIFIED_DATE_UTC,                A.CREATED_DATE,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') as DATEMI,                A.CDTR_ACCT_NO,                A.CDTR_ACCT_NAME,                A.INTRBK_STTLM_AMNT,                A.INTRBK_STTLM_CUR,                A.DBTR_ACCT_NO,                A.DBTR_ACCT_NAME,                A.DR_SORT_CODE,                A.CR_SORT_CODE,                A.UETR,                A.HDR_MSG_ID,                A.PRODUCT_CODE,                A.CHANNEL_ID,                A.CHANNEL_REFNO,                A.CHANNEL_PRODUCT,                A.CHANNEL_SUB_PRODUCT,                A.CHANNEL_TRAN_CODE,                A.PROCESS_TYPE,                A.DBTR_PHONE_NO,                A.DBTR_EMAIL_ID,                A.DBTR_DOCUMENT_ID,                A.DBTR_IBAN,                A.CDTR_PHONE_NO,                A.CDTR_EMAIL_ID,                A.CDTR_DOCUMENT_ID,                A.CDTR_IBAN,                A.CLRSYSREF,                A.PAYMENT_ENDTOEND_ID,                A.TRAN_REF_ID,                A.EXHF_ID,                A.REMITTANCE_INFO,                A.INWARD_FILE_NAME,                A.PROCESS_STATUS,   CASE    WHEN A.STATUS LIKE '%SUCCESS' THEN 'COMPLETED'   ELSE 'INPROGRESS'   END AS TRAN_LEVEL,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.TENANT_ID,                A.VERSION_NO,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME,                case                  when A.EXHF_ID is null then                   'REAL_TIME'                  else                   'BULK'                end as MEM_PAYMENT_METHOD           from NPSS_TRANSACTIONS A           left join TRANSACTION_SET TS on TS.TRN_ID = A.NPSST_ID                                       and TS.DTT_CODE = A.DTT_CODE          order by A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Summary Tran CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TRAN_LEVEL","binding_name":"TRAN_LEVEL","binding_value":"","source_name":"MI_LEVEL_TRAN_LEVEL","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref No","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let event_params={"caller_name":"brfq_for_tran_list__sfr_in_tran_list","event_desc":"SFR in tran list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"summary_chart","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1668504033744","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Summary Tran MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1668494778964","date_format":true},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1668494779204","date_format":false,"currency_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1668494779444","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1668494779924","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668494894018","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668494938279","date_format":false}],"joins":[]},"eq_text":"select NPSST_ID, TRAN_LEVEL,        MODIFIED_DATE_UTC,        DATEMI,        VALUE_DATE,        CREATED_DATE,        MODIFIED_DATE_UTC,        CDTR_ACCT_NO,        CDTR_ACCT_NAME,        INTRBK_STTLM_AMNT,        INTRBK_STTLM_CUR,        DBTR_ACCT_NO,        DBTR_ACCT_NAME,        DR_SORT_CODE,        CR_SORT_CODE,        UETR,        HDR_MSG_ID,        PRODUCT_CODE,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        PROCESS_TYPE,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,        CDTR_IBAN,        CLRSYSREF,        PAYMENT_ENDTOEND_ID,        EXHF_ID,        PROCESS_STATUS,        STATUS,        DT_CODE,        DTT_CODE,        TENANT_ID,        TS_ID,        LOCKED_BY,        LOCKED_BY_NAME,        VERSION_NO,        MEM_PAYMENT_METHOD,        TRAN_REF_ID   from (select A.NPSST_ID,                A.VALUE_DATE,                A.MODIFIED_DATE_UTC,                A.CREATED_DATE,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') as DATEMI,                A.CDTR_ACCT_NO,                A.CDTR_ACCT_NAME,                A.INTRBK_STTLM_AMNT,                A.INTRBK_STTLM_CUR,                A.DBTR_ACCT_NO,                A.DBTR_ACCT_NAME,                A.DR_SORT_CODE,                A.CR_SORT_CODE,                A.UETR,                A.HDR_MSG_ID,                A.PRODUCT_CODE,                A.CHANNEL_ID,                A.CHANNEL_REFNO,                A.CHANNEL_PRODUCT,                A.CHANNEL_SUB_PRODUCT,                A.CHANNEL_TRAN_CODE,                A.PROCESS_TYPE,                A.DBTR_PHONE_NO,                A.DBTR_EMAIL_ID,                A.DBTR_DOCUMENT_ID,                A.DBTR_IBAN,                A.CDTR_PHONE_NO,                A.CDTR_EMAIL_ID,                A.CDTR_DOCUMENT_ID,                A.CDTR_IBAN,                A.CLRSYSREF,                A.PAYMENT_ENDTOEND_ID,                A.TRAN_REF_ID,                A.EXHF_ID,                A.REMITTANCE_INFO,                A.INWARD_FILE_NAME,                A.PROCESS_STATUS,   CASE    WHEN A.STATUS LIKE '%SUCCESS' THEN 'COMPLETED'   ELSE 'INPROGRESS'   END AS TRAN_LEVEL,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.TENANT_ID,                A.VERSION_NO,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME,                case                  when A.EXHF_ID is null then                   'REAL_TIME'                  else                   'BULK'                end as MEM_PAYMENT_METHOD           from NPSS_TRANSACTIONS A           left join TRANSACTION_SET TS on TS.TRN_ID = A.NPSST_ID                                       and TS.DTT_CODE = A.DTT_CODE          order by A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Summary Tran CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TRAN_LEVEL","binding_name":"TRAN_LEVEL","binding_value":"","source_name":"MI_LEVEL_TRAN_LEVEL","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref No","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__ee_for_view_detail_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_ui_view_detail"
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
		let internals=""
		let event_data={"transaction_list":{"e_1668499614996":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_4","event_code":"E_1668499614996","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Transactions","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"UETR","level":"MI_LEVEL","name":"MI_LEVEL_UETR","setd3name":"UETR"},{"type":"LOCAL","column_name":"NPSST_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSST_ID","setd3name":"NPSST_ID"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1668504033744","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Summary Tran MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1668494778964","date_format":true},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1668494779204","date_format":false,"currency_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1668494779444","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1668494779924","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668494894018","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668494938279","date_format":false}],"joins":[]},"eq_text":"select NPSST_ID, TRAN_LEVEL,        MODIFIED_DATE_UTC,        DATEMI,        VALUE_DATE,        CREATED_DATE,        MODIFIED_DATE_UTC,        CDTR_ACCT_NO,        CDTR_ACCT_NAME,        INTRBK_STTLM_AMNT,        INTRBK_STTLM_CUR,        DBTR_ACCT_NO,        DBTR_ACCT_NAME,        DR_SORT_CODE,        CR_SORT_CODE,        UETR,        HDR_MSG_ID,        PRODUCT_CODE,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        PROCESS_TYPE,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,        CDTR_IBAN,        CLRSYSREF,        PAYMENT_ENDTOEND_ID,        EXHF_ID,        PROCESS_STATUS,        STATUS,        DT_CODE,        DTT_CODE,        TENANT_ID,        TS_ID,        LOCKED_BY,        LOCKED_BY_NAME,        VERSION_NO,        MEM_PAYMENT_METHOD,        TRAN_REF_ID   from (select A.NPSST_ID,                A.VALUE_DATE,                A.MODIFIED_DATE_UTC,                A.CREATED_DATE,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') as DATEMI,                A.CDTR_ACCT_NO,                A.CDTR_ACCT_NAME,                A.INTRBK_STTLM_AMNT,                A.INTRBK_STTLM_CUR,                A.DBTR_ACCT_NO,                A.DBTR_ACCT_NAME,                A.DR_SORT_CODE,                A.CR_SORT_CODE,                A.UETR,                A.HDR_MSG_ID,                A.PRODUCT_CODE,                A.CHANNEL_ID,                A.CHANNEL_REFNO,                A.CHANNEL_PRODUCT,                A.CHANNEL_SUB_PRODUCT,                A.CHANNEL_TRAN_CODE,                A.PROCESS_TYPE,                A.DBTR_PHONE_NO,                A.DBTR_EMAIL_ID,                A.DBTR_DOCUMENT_ID,                A.DBTR_IBAN,                A.CDTR_PHONE_NO,                A.CDTR_EMAIL_ID,                A.CDTR_DOCUMENT_ID,                A.CDTR_IBAN,                A.CLRSYSREF,                A.PAYMENT_ENDTOEND_ID,                A.TRAN_REF_ID,                A.EXHF_ID,                A.REMITTANCE_INFO,                A.INWARD_FILE_NAME,                A.PROCESS_STATUS,   CASE    WHEN A.STATUS LIKE '%SUCCESS' THEN 'COMPLETED'   ELSE 'INPROGRESS'   END AS TRAN_LEVEL,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.TENANT_ID,                A.VERSION_NO,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME,                case                  when A.EXHF_ID is null then                   'REAL_TIME'                  else                   'BULK'                end as MEM_PAYMENT_METHOD           from NPSS_TRANSACTIONS A           left join TRANSACTION_SET TS on TS.TRN_ID = A.NPSST_ID                                       and TS.DTT_CODE = A.DTT_CODE          order by A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Summary Tran CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TRAN_LEVEL","binding_name":"TRAN_LEVEL","binding_value":"","source_name":"MI_LEVEL_TRAN_LEVEL","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref No","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__ee_for_vd_from_tl() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_ui_view_detail"
		let parent_source_id=""
		let event_code="e_1668506824941"
		let event_params={"caller_name":"transaction_list__ee_for_vd_from_tl","event_desc":"EE for VD from TL","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view detail"
	navigation_ui_view_detail__brfq_for_view_tl() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_detail"
		let destn_id="view_transaction_detail"
		let parent_source_id=""
		let event_code="e_1668499772275"
		let event_params={"caller_name":"navigation_ui_view_detail__brfq_for_view_tl","event_desc":"BRFQ for view TL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_detail","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1668504107493","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"MEM_PAYMENT_METHOD","alias_name":"","mq_id":"MQ_1668415265731","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  MODIFIED_DATE_UTC,  DATEMI,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  INTRBK_STTLM_AMNT,  INTRBK_STTLM_CUR,  DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  EXHF_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  MEM_PAYMENT_METHOD,  TRAN_REF_ID from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.UETR,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   case    when A.EXHF_ID is null then 'REAL_TIME'    else 'BULK'   end as MEM_PAYMENT_METHOD  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Ver HST View Transaction CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Id","target_column":"NPSST_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"VALUE_DATE","target_column":"VALUE_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account No","target_column":"CDTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account No","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing sys ref number","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Type","target_column":"PROCESS_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message ID","target_column":"HDR_MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer  Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Batch Id","target_column":"EXHF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Clearing Sys Ref","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Sort Code","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payment Method","target_column":"MEM_PAYMENT_METHOD","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view detail"
	navigation_ui_view_detail__sp_for_vl() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_detail"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1668506665505"
		let event_params={"caller_name":"navigation_ui_view_detail__sp_for_vl","event_desc":"SP for vl","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_detail","raiseparam":{"profile_code":"BTL_1304_1668497253326"}}
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
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_8","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1668506085361","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"SELECT REVERSAL_DESCRIPTION,        T24_RETURN_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE,        REVERSAL_DESC,        T24_RETURN_DESC,        CBUAE_RETURN_DESC,        TENANT_ID,        DT_CODE,        DTT_CODE   FROM (SELECT A.NPSSTPL_ID,                A.MSG_ID,                A.UETR,                A.NPSSTRRD_REFNO,                A.PROCESS_NAME,                A.PROCESSING_SYSTEM,                A.RESPONSE_CODE,                A.PROCESS_REF_NO,                A.RESPONSE_DATA,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') AS CREATEDDATEMILISEC,                A.CREATED_DATE,                A.PROCESS_STATUS,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.TENANT_ID,                A.REQUEST_DATA_JSON,                A.RESPONSE_DATA_JSON,                A.T24_RETURN_CODE,                A.ADDITIONAL_INFO,                T24RC.RETURN_DESCRIPTION AS T24_RETURN_DESC,                CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                A.CBUAE_RETURN_CODE,                CBUAERC.RETURN_DESCRIPTION AS CBUAE_RETURN_DESC,                CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,                A.REVERSAL_CODE,                CCD.CD_DESCRIPTION AS REVERSAL_DESC,                CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION           FROM NPSS_TRN_PROCESS_LOG A           LEFT JOIN CORE_NC_CODE_DESCRIPTIONS CCD ON CCD.CD_CODE =                                                      A.REVERSAL_CODE                                                  AND CCD.CD_CATEGORY =                                                      'REVERSAL_REASON_IDENTIFIER_CODE'           LEFT JOIN CORE_NC_RETURN_CODES T24RC ON T24RC.RETURN_CODE =                                                   A.T24_RETURN_CODE                                               AND T24RC.PROCESSING_SYSTEM =                                                   'T24'           LEFT JOIN CORE_NC_RETURN_CODES CBUAERC ON CBUAERC.RETURN_CODE =                                                     A.CBUAE_RETURN_CODE                                                 AND CBUAERC.PROCESSING_SYSTEM =                                                     'CBUAE'          ORDER BY A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
