/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27043 
Modified By     : Admin 
Modified Date   : 2022-Nov-23 13:29 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_investigation
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'
import {npss_cs_investigation_pac_028Service} from '../../../custom_widget/npss_cs_investigation_pac_028/npss_cs_investigation_pac_028.service'

@Component({
	selector: 's_rct_investigation',
	templateUrl: './s_rct_investigation.component.html',
	styleUrls: ['./s_rct_investigation.component.css'],
	providers:[torus_cs_show_hideService,npss_cs_investigation_pac_028Service]
})
    
// Start of class 
export class s_rct_investigationComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_rct_investigation"
	wftpa_id : string = "WFT_NPSS_P_1304_1666862798769_0"
	cg_code : string = "CG_1304_1666855849832"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "queue"
	uicgc_2 : string = "transaction_list"
	uicgc_3 : string = "navigation_ui"
	uicgc_4 : string = "search"
	uicgc_5 : string = "process_log_list"
	uicgc_6 : string = "view_dr_cr_tran_details"
	uicgc_7 : string = "back_ui"
	uicgc_8 : string = "view_payment_tran_details"
	key_events : any = {}
	btl_1304_1669200873578 : string = "p_vertical_layout"
	btl_1304_1666856790983 : string = "p_search_layout"
	btl_1304_1666856599156 : string = "p_main_layout"
	forms : any = ["uicgc_4","uicgc_7","uicgc_3"]
	p_search_layout__spap_for_search_showpopup : boolean = false
	queue : any = {}
	transaction_list : any = {}
	navigation_ui : any = {}
	navigation_ui_search : any = {}
	navigation_ui_view_detail : any = {}
	navigation_ui_initiate : any = {}
	search : any = {}
	search_search : any = {}
	search_clear : any = {}
	process_log_list : any = {}
	view_dr_cr_tran_details : any = {}
	back_ui : any = {}
	back_ui_back : any = {}
	view_payment_tran_details : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private torus_cs_show_hideService:torus_cs_show_hideService,private npss_cs_investigation_pac_028Service:npss_cs_investigation_pac_028Service) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Queue" 
		this.queue.uictrl_code = "datatable"
		this.queue.uicgc_desc = "Queue"
		this.queue.uicgc_code = "uicgc_1"
		this.queue.params = {"need_pag_datatable":"Y","need_search":"N","advance_dynamic_search":"N"}
		this.queue.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1669101193334","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS RCT Investigation Queue","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"COUNT","alias_name":"","mq_id":"MQ_1669097490421","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1669097490659","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1669097490867","date_format":false}],"joins":[]},"eq_text":"select COUNT(STATUS) as COUNT, PROCESS_STATUS, STATUS   from (select T.CREATED_DATE,                T.STATUS,                T.PROCESS_STATUS,                T.UETR,                T.PROCESS_NAME,                T.PROCESSING_SYSTEM,                T.ADDITIONAL_INFO,                T.TENANT_ID,                T.CREATED_DATE,          T.CREATED_DATE_UTC,                T.MODIFIED_DATE,                T.MODIFIED_DATE_UTC,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME,                T.CREATED_BY,                T.CREATED_BY_NAME,                T.SYSTEM_ID,                QR.ROLE_ID,                QR.VPH_APP_ID AS QR_APP_ID,                QR.VPH_APP_CODE,                QR.QUEUE_CODE,                QR.SCREEN_NAME AS QR_SCREEN_NAME,                QR.SCREEN_MENU_GROUP AS QR_MENU_GROUP,                QR.SCREEN_MODULE AS QR_MODULE,                PQ.QUEUE_DESC,                PQ.QUEUE_CODE,                PQ.VPH_APP_ID AS Q_APP_ID,                QR.SORT_ORDER AS QS_SORT_ORDER,                PQ.SORT_ORDER AS Q_SORT_ORDER           from NPSS_TRN_PROCESS_LOG T           LEFT JOIN TRANSACTION_SET TS ON T.NPSSTPL_ID = TS.TRN_ID                                       AND T.DTT_CODE = TS.DTT_CODE          INNER JOIN CORE_Q_STATUS_ROLES QR ON T.STATUS =                                               QR.PROCESS_QUEUE_STATUS                                           AND T.PROCESS_STATUS =                                               QR.QUEUE_CODE          INNER JOIN CORE_APP_Q_SETUP PQ ON T.PROCESS_STATUS = PQ.QUEUE_CODE) VW  WHERE CREATED_DATE_UTC <= CURRENT_TIMESTAMP - INTERVAL '10 MINUTES' $AND  group by PROCESS_STATUS, STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS RCT Investigation Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		this.transaction_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666866107770","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Investigation Tran MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667297593171","date_format":true},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1667297593387","date_format":true},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1667297593779","date_format":false,"currency_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1667297593987","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1667297659458","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1667297659657","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1667297696809","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1667297696969","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1667297729985","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1667297730193","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667638278857","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166800050","date_format":false},{"column_name":"MEM_PAYMENT_METHOD","alias_name":"","mq_id":"MQ_1668415277293","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691911532","date_format":false},{"column_name":"CBS_REF_NO","alias_name":"","mq_id":"MQ_1668775396690","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID,        MODIFIED_DATE_UTC,        DATEMI,        VALUE_DATE,        CBS_REF_NO,        CREATED_DATE,        MODIFIED_DATE_UTC,        CDTR_ACCT_NO,        CDTR_ACCT_NAME,        INTRBK_STTLM_AMNT,        INTRBK_STTLM_CUR,        DBTR_ACCT_NO,        DBTR_ACCT_NAME,        DR_SORT_CODE,        CR_SORT_CODE,        UETR,        HDR_MSG_ID,        PRODUCT_CODE,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        PROCESS_TYPE,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,        CDTR_IBAN,        CLRSYSREF,        PAYMENT_ENDTOEND_ID,        TRAN_REF_ID,        EXHF_ID,        PROCESS_STATUS,        STATUS,        TENANT_ID,        DT_CODE,        DTT_CODE,        TS_ID,        LOCKED_BY,        LOCKED_BY_NAME,        VERSION_NO,        MEM_PAYMENT_METHOD,        DEPARTMENT_CODE,        DBTR_PRVT_ID,        DBTR_OTHER_ISSUER,        ACCP_DATE_TIME   FROM (SELECT A.NPSST_ID,                A.VALUE_DATE,                A.CBS_REF_NO,                A.MODIFIED_DATE_UTC,                A.CREATED_DATE,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,                A.CDTR_ACCT_NO,                A.CDTR_ACCT_NAME,                A.INTRBK_STTLM_AMNT,                A.INTRBK_STTLM_CUR,                A.DBTR_ACCT_NO,                A.DBTR_ACCT_NAME,                A.DR_SORT_CODE,                A.CR_SORT_CODE,                A.DEPARTMENT_CODE,                A.UETR,                A.HDR_MSG_ID,                A.PRODUCT_CODE,                A.CHANNEL_ID,                A.CHANNEL_REFNO,                A.CHANNEL_PRODUCT,                A.CHANNEL_SUB_PRODUCT,                A.CHANNEL_TRAN_CODE,                A.PROCESS_TYPE,                A.DBTR_PHONE_NO,                A.DBTR_EMAIL_ID,                A.DBTR_DOCUMENT_ID,                A.DBTR_IBAN,                A.CDTR_PHONE_NO,                A.CDTR_EMAIL_ID,                A.CDTR_DOCUMENT_ID,                A.CDTR_IBAN,                A.CLRSYSREF,                A.PAYMENT_ENDTOEND_ID,                A.ACCP_DATE_TIME,                A.TRAN_REF_ID,                A.EXHF_ID,                A.REMITTANCE_INFO,                A.INWARD_FILE_NAME,                A.PROCESS_STATUS,                A.STATUS,                A.TENANT_ID,                A.DT_CODE,                A.DTT_CODE,                A.VERSION_NO,                A.DBTR_PRVT_ID,                A.DBTR_OTHER_ISSUER,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME,                CASE                  WHEN A.EXHF_ID IS NULL THEN                   'RCT'                  ELSE                   'BCT'                END AS MEM_PAYMENT_METHOD           FROM NPSS_TRANSACTIONS A           LEFT JOIN TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID                                       AND TS.DTT_CODE = A.DTT_CODE          ORDER BY A.NPSST_ID DESC) VW  WHERE MODIFIED_DATE_UTC <= CURRENT_TIMESTAMP - INTERVAL '10 MINUTES' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Investigation Tran CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		
		// "View Detail" Button of "Navigation UI" component
		this.navigation_ui_view_detail.label_name = "View Detail"
		this.navigation_ui_view_detail.show = true
		this.navigation_ui_view_detail.disabled = true
		this.navigation_ui_view_detail.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.navigation_ui_view_detail.dynamic_param = {}
		this.navigation_ui_view_detail.role = []
		this.navigation_ui_view_detail.action = ""
		
		// "Initiate" Button of "Navigation UI" component
		this.navigation_ui_initiate.label_name = "Initiate"
		this.navigation_ui_initiate.show = true
		this.navigation_ui_initiate.disabled = false
		this.navigation_ui_initiate.params = {"icon_only":false,"uicgcc_style":"fa fa-ellipsis-h"}
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
		this.process_log_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666866038858","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS RCT Processlog MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1669099993823","date_format":true},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1669100005870","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669100006325","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669100051018","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1669100051202","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1669100051402","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1669100081226","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1669100081658","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1669100096177","date_format":false}],"joins":[]},"eq_text":"select REVERSAL_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        T24_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATED_DATE_UTC,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        DTT_CODE,        DT_CODE,        TENANT_ID,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE   from (select A.NPSSTPL_ID,                A.MSG_ID,                A.UETR,                A.NPSSTRRD_REFNO,                A.PROCESS_NAME,                A.PROCESSING_SYSTEM,                A.RESPONSE_CODE,                A.PROCESS_REF_NO,                A.RESPONSE_DATA,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,                A.CREATED_DATE,                A.CREATED_DATE_UTC,                A.PROCESS_STATUS,                A.STATUS,                A.DTT_CODE,                A.DT_CODE,                A.TENANT_ID,                A.REQUEST_DATA_JSON,                A.RESPONSE_DATA_JSON,                A.T24_RETURN_CODE,                A.ADDITIONAL_INFO,                T24RC.RETURN_DESCRIPTION as T24_RETURN_DESC,                CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) as T24_RETURN_DESCRIPTION,                A.CBUAE_RETURN_CODE,                CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,                CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,                A.REVERSAL_CODE,                CCD.CD_DESCRIPTION as REVERSAL_DESC,                CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,                NT.VALUE_DATE,                NT.DBTR_ACCT_NO,                NT.CDTR_ACCT_NO,                NT.PAYMENT_ENDTOEND_ID,                case                  when NT.EXHF_ID is null then                   'RCT'                  else                   'BCT'                end as MEM_PAYMENT_METHOD,                NT.EXHF_ID,                NT.CDTR_IBAN,                NT.DBTR_IBAN,                NT.DBTR_PHONE_NO,                NT.CDTR_PHONE_NO,                NT.INTRBK_STTLM_AMNT,                NT.TRAN_REF_ID           from NPSS_TRN_PROCESS_LOG A          inner join NPSS_TRANSACTIONS NT on NT.UETR = A.UETR           left join CORE_NC_CODE_DESCRIPTIONS CCD on CCD.CD_CODE =                                                      A.REVERSAL_CODE                                                  and CCD.CD_CATEGORY =                                                      'REVERSAL_REASON_IDENTIFIER_CODE'           left join CORE_NC_RETURN_CODES T24RC on T24RC.RETURN_CODE =                                                   A.T24_RETURN_CODE                                               and T24RC.PROCESSING_SYSTEM =                                                   'T24'           left join CORE_NC_RETURN_CODES CBUAERC on CBUAERC.RETURN_CODE =                                                     A.CBUAE_RETURN_CODE                                                 and CBUAERC.PROCESSING_SYSTEM =                                                     'CBUAE'          order by A.NPSSTPL_ID desc) V  WHERE CREATED_DATE_UTC <= CURRENT_TIMESTAMP - INTERVAL '10 MINUTES' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS RCT Investigation Processlog CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24  Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.process_log_list.context_menu = []
		this.process_log_list.views = {}
		this.process_log_list.onChangecomponent = new EventEmitter<any>()
		this.process_log_list.show = true
		this.process_log_list.dynamic_param = {}
	
		// Component level properties - "View Dr Cr Tran Details" 
		this.view_dr_cr_tran_details.uictrl_code = "datatable"
		this.view_dr_cr_tran_details.uicgc_desc = "View Dr Cr Tran Details"
		this.view_dr_cr_tran_details.uicgc_code = "uicgc_6"
		this.view_dr_cr_tran_details.params = {"need_search":"N","need_vertical":"Y","advance_dynamic_search":"N"}
		this.view_dr_cr_tran_details.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_6","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1669203662794","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"MEM_PAYMENT_METHOD","alias_name":"","mq_id":"MQ_1668415265731","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691797994","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1668772110535","date_format":false},{"column_name":"TRAN_LEVEL","alias_name":"","mq_id":"MQ_1669006969775","date_format":false},{"column_name":"ACCEPTED_DATE","alias_name":"","mq_id":"MQ_1669198452328","date_format":true},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669209185067","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1669209185410","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1669209185641","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669209840985","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669209847802","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669209934807","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  TRAN_LEVEL,  MODIFIED_DATE_UTC,  ACCEPTED_DATE,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  MEM_PAYMENT_METHOD,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   TO_CHAR(A.ACCP_DATE_TIME, 'YYYY-MM-DD HH:MI:SS:MS AM') as ACCEPTED_DATE,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   case    when (UPPER(A.PROCESS_STATUS)) like (UPPER('%COMPLETED')) then 'COMPLETED'    else 'INPROGRESS'   end as TRAN_LEVEL,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   case    when A.EXHF_ID is null then 'RCT'    else 'BCT'   end as MEM_PAYMENT_METHOD  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Ver HST View Transaction CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Id","target_column":"NPSST_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Txn Value Date","target_column":"VALUE_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Number","target_column":"CDTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Number","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Amount Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Type","target_column":"PROCESS_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message ID","target_column":"HDR_MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer  Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Batch Id","target_column":"EXHF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Accepted Date & Time","target_column":"ACCEPTED_DATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Sort Code","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E reference id","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payment Method","target_column":"MEM_PAYMENT_METHOD","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.view_dr_cr_tran_details.context_menu = []
		this.view_dr_cr_tran_details.views = {}
		this.view_dr_cr_tran_details.onChangecomponent = new EventEmitter<any>()
		this.view_dr_cr_tran_details.show = true
		this.view_dr_cr_tran_details.dynamic_param = {"column_header_name":"Field","value_header_name":"Value"}
	
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
	
		// Component level properties - "View Payment Tran Details" 
		this.view_payment_tran_details.uictrl_code = "datatable"
		this.view_payment_tran_details.uicgc_desc = "View Payment Tran Details"
		this.view_payment_tran_details.uicgc_code = "uicgc_8"
		this.view_payment_tran_details.params = {"need_search":"N","need_vertical":"Y"}
		this.view_payment_tran_details.datasource = {}
		this.view_payment_tran_details.context_menu = []
		this.view_payment_tran_details.views = {}
		this.view_payment_tran_details.onChangecomponent = new EventEmitter<any>()
		this.view_payment_tran_details.show = true
		this.view_payment_tran_details.dynamic_param = {}
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__cf_for_pageload()
		this.page_load__cc_for_show_hide_btn()
		this.page_load__he_for_initiate()
		this.page_load__he_for_vd()
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
	}

	//Handler for INTERNAL event of "ssp for pl queue"
	ssp_for_pl_queue__internal(parent_event_result){
		this.ssp_for_pl_queue__brfq_for_queue(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "queue"
	queue__selection_changed(){
		this.queue__svm_for_queue()
		this.queue__cu_for_tl_from_q()
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
		this.ssp_for_transaction_list__brfq_for_pll(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for pll"
	brfq_for_pll__internal(parent_event_result){
		this.brfq_for_pll__sfr_for_pll(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__selection_changed(){
		this.transaction_list__svm_for_tl()
		this.transaction_list__ee_for_vtd()
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
	navigation_ui_initiate__action_button_click(){
		this.navigation_ui_initiate__cc_for_initiate()
	}

	//Handler for INTERNAL event of "cc for initiate"
	cc_for_initiate__internal(parent_event_result){
		this.cc_for_initiate__info_for_initiate(parent_event_result)
	}

	//Handler for INTERNAL event of "info for initiate"
	info_for_initiate__internal(parent_event_result){
		this.info_for_initiate__rs_for_initiate(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "back ui back"
	back_ui_back__action_button_click(){
		this.back_ui_back__sp_for_main()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view detail"
	navigation_ui_view_detail__action_button_click(){
		this.navigation_ui_view_detail__sp_for_view_detail()
		this.navigation_ui_view_detail__brfq_for_vtd()
		this.navigation_ui_view_detail__brfq_for_vptdl()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__cf_for_pageload() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666856880892"
		let event_params={"caller_name":"page_load__cf_for_pageload","event_desc":"CF for Pageload","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""}}
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
	page_load__cc_for_show_hide_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666857005233"
		let event_params={"caller_name":"page_load__cc_for_show_hide_btn","event_desc":"CC for Show hide btn","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__he_for_vd() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_detail"
		let parent_source_id=""
		let event_code="e_1669203335696"
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

	//Handler for INTERNAL event of "cc for show hide btn"
	cc_for_show_hide_btn__tbc_from_page_load_to_search(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_show_hide_btn"
		let destn_id="search_search"
		let parent_source_id="page_load"
		let event_code="e_1668692590307"
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
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666866038858","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS RCT Processlog MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1669099993823","date_format":true},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1669100005870","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669100006325","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669100051018","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1669100051202","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1669100051402","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1669100081226","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1669100081658","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1669100096177","date_format":false}],"joins":[]},"eq_text":"select REVERSAL_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        T24_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATED_DATE_UTC,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        DTT_CODE,        DT_CODE,        TENANT_ID,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE   from (select A.NPSSTPL_ID,                A.MSG_ID,                A.UETR,                A.NPSSTRRD_REFNO,                A.PROCESS_NAME,                A.PROCESSING_SYSTEM,                A.RESPONSE_CODE,                A.PROCESS_REF_NO,                A.RESPONSE_DATA,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,                A.CREATED_DATE,                A.CREATED_DATE_UTC,                A.PROCESS_STATUS,                A.STATUS,                A.DTT_CODE,                A.DT_CODE,                A.TENANT_ID,                A.REQUEST_DATA_JSON,                A.RESPONSE_DATA_JSON,                A.T24_RETURN_CODE,                A.ADDITIONAL_INFO,                T24RC.RETURN_DESCRIPTION as T24_RETURN_DESC,                CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) as T24_RETURN_DESCRIPTION,                A.CBUAE_RETURN_CODE,                CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,                CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,                A.REVERSAL_CODE,                CCD.CD_DESCRIPTION as REVERSAL_DESC,                CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,                NT.VALUE_DATE,                NT.DBTR_ACCT_NO,                NT.CDTR_ACCT_NO,                NT.PAYMENT_ENDTOEND_ID,                case                  when NT.EXHF_ID is null then                   'RCT'                  else                   'BCT'                end as MEM_PAYMENT_METHOD,                NT.EXHF_ID,                NT.CDTR_IBAN,                NT.DBTR_IBAN,                NT.DBTR_PHONE_NO,                NT.CDTR_PHONE_NO,                NT.INTRBK_STTLM_AMNT,                NT.TRAN_REF_ID           from NPSS_TRN_PROCESS_LOG A          inner join NPSS_TRANSACTIONS NT on NT.UETR = A.UETR           left join CORE_NC_CODE_DESCRIPTIONS CCD on CCD.CD_CODE =                                                      A.REVERSAL_CODE                                                  and CCD.CD_CATEGORY =                                                      'REVERSAL_REASON_IDENTIFIER_CODE'           left join CORE_NC_RETURN_CODES T24RC on T24RC.RETURN_CODE =                                                   A.T24_RETURN_CODE                                               and T24RC.PROCESSING_SYSTEM =                                                   'T24'           left join CORE_NC_RETURN_CODES CBUAERC on CBUAERC.RETURN_CODE =                                                     A.CBUAE_RETURN_CODE                                                 and CBUAERC.PROCESSING_SYSTEM =                                                     'CBUAE'          order by A.NPSSTPL_ID desc) V  WHERE CREATED_DATE_UTC <= CURRENT_TIMESTAMP - INTERVAL '10 MINUTES' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS RCT Investigation Processlog CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24  Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666866107770","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Investigation Tran MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667297593171","date_format":true},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1667297593387","date_format":true},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1667297593779","date_format":false,"currency_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1667297593987","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1667297659458","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1667297659657","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1667297696809","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1667297696969","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1667297729985","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1667297730193","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667638278857","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166800050","date_format":false},{"column_name":"MEM_PAYMENT_METHOD","alias_name":"","mq_id":"MQ_1668415277293","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691911532","date_format":false},{"column_name":"CBS_REF_NO","alias_name":"","mq_id":"MQ_1668775396690","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID,        MODIFIED_DATE_UTC,        DATEMI,        VALUE_DATE,        CBS_REF_NO,        CREATED_DATE,        MODIFIED_DATE_UTC,        CDTR_ACCT_NO,        CDTR_ACCT_NAME,        INTRBK_STTLM_AMNT,        INTRBK_STTLM_CUR,        DBTR_ACCT_NO,        DBTR_ACCT_NAME,        DR_SORT_CODE,        CR_SORT_CODE,        UETR,        HDR_MSG_ID,        PRODUCT_CODE,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        PROCESS_TYPE,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,        CDTR_IBAN,        CLRSYSREF,        PAYMENT_ENDTOEND_ID,        TRAN_REF_ID,        EXHF_ID,        PROCESS_STATUS,        STATUS,        TENANT_ID,        DT_CODE,        DTT_CODE,        TS_ID,        LOCKED_BY,        LOCKED_BY_NAME,        VERSION_NO,        MEM_PAYMENT_METHOD,        DEPARTMENT_CODE,        DBTR_PRVT_ID,        DBTR_OTHER_ISSUER,        ACCP_DATE_TIME   FROM (SELECT A.NPSST_ID,                A.VALUE_DATE,                A.CBS_REF_NO,                A.MODIFIED_DATE_UTC,                A.CREATED_DATE,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,                A.CDTR_ACCT_NO,                A.CDTR_ACCT_NAME,                A.INTRBK_STTLM_AMNT,                A.INTRBK_STTLM_CUR,                A.DBTR_ACCT_NO,                A.DBTR_ACCT_NAME,                A.DR_SORT_CODE,                A.CR_SORT_CODE,                A.DEPARTMENT_CODE,                A.UETR,                A.HDR_MSG_ID,                A.PRODUCT_CODE,                A.CHANNEL_ID,                A.CHANNEL_REFNO,                A.CHANNEL_PRODUCT,                A.CHANNEL_SUB_PRODUCT,                A.CHANNEL_TRAN_CODE,                A.PROCESS_TYPE,                A.DBTR_PHONE_NO,                A.DBTR_EMAIL_ID,                A.DBTR_DOCUMENT_ID,                A.DBTR_IBAN,                A.CDTR_PHONE_NO,                A.CDTR_EMAIL_ID,                A.CDTR_DOCUMENT_ID,                A.CDTR_IBAN,                A.CLRSYSREF,                A.PAYMENT_ENDTOEND_ID,                A.ACCP_DATE_TIME,                A.TRAN_REF_ID,                A.EXHF_ID,                A.REMITTANCE_INFO,                A.INWARD_FILE_NAME,                A.PROCESS_STATUS,                A.STATUS,                A.TENANT_ID,                A.DT_CODE,                A.DTT_CODE,                A.VERSION_NO,                A.DBTR_PRVT_ID,                A.DBTR_OTHER_ISSUER,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME,                CASE                  WHEN A.EXHF_ID IS NULL THEN                   'RCT'                  ELSE                   'BCT'                END AS MEM_PAYMENT_METHOD           FROM NPSS_TRANSACTIONS A           LEFT JOIN TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID                                       AND TS.DTT_CODE = A.DTT_CODE          ORDER BY A.NPSST_ID DESC) VW  WHERE MODIFIED_DATE_UTC <= CURRENT_TIMESTAMP - INTERVAL '10 MINUTES' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Investigation Tran CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1669101193334","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS RCT Investigation Queue","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"COUNT","alias_name":"","mq_id":"MQ_1669097490421","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1669097490659","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1669097490867","date_format":false}],"joins":[]},"eq_text":"select COUNT(STATUS) as COUNT, PROCESS_STATUS, STATUS   from (select T.CREATED_DATE,                T.STATUS,                T.PROCESS_STATUS,                T.UETR,                T.PROCESS_NAME,                T.PROCESSING_SYSTEM,                T.ADDITIONAL_INFO,                T.TENANT_ID,                T.CREATED_DATE,          T.CREATED_DATE_UTC,                T.MODIFIED_DATE,                T.MODIFIED_DATE_UTC,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME,                T.CREATED_BY,                T.CREATED_BY_NAME,                T.SYSTEM_ID,                QR.ROLE_ID,                QR.VPH_APP_ID AS QR_APP_ID,                QR.VPH_APP_CODE,                QR.QUEUE_CODE,                QR.SCREEN_NAME AS QR_SCREEN_NAME,                QR.SCREEN_MENU_GROUP AS QR_MENU_GROUP,                QR.SCREEN_MODULE AS QR_MODULE,                PQ.QUEUE_DESC,                PQ.QUEUE_CODE,                PQ.VPH_APP_ID AS Q_APP_ID,                QR.SORT_ORDER AS QS_SORT_ORDER,                PQ.SORT_ORDER AS Q_SORT_ORDER           from NPSS_TRN_PROCESS_LOG T           LEFT JOIN TRANSACTION_SET TS ON T.NPSSTPL_ID = TS.TRN_ID                                       AND T.DTT_CODE = TS.DTT_CODE          INNER JOIN CORE_Q_STATUS_ROLES QR ON T.STATUS =                                               QR.PROCESS_QUEUE_STATUS                                           AND T.PROCESS_STATUS =                                               QR.QUEUE_CODE          INNER JOIN CORE_APP_Q_SETUP PQ ON T.PROCESS_STATUS = PQ.QUEUE_CODE) VW  WHERE CREATED_DATE_UTC <= CURRENT_TIMESTAMP - INTERVAL '10 MINUTES' $AND  group by PROCESS_STATUS, STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS RCT Investigation Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let event_data={"queue":{"e_1666857327033":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_1","event_code":"E_1666857327033","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"HARDCODED","column_name":"BULK","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"},{"type":"LOCAL","column_name":"PROCESS_STATUS","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_STATUS","setd3name":"PROCESS_STATUS"},{"type":"LOCAL","column_name":"STATUS","level":"MI_LEVEL","name":"MI_LEVEL_STATUS","setd3name":"STATUS"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1669101193334","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS RCT Investigation Queue","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"COUNT","alias_name":"","mq_id":"MQ_1669097490421","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1669097490659","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1669097490867","date_format":false}],"joins":[]},"eq_text":"select COUNT(STATUS) as COUNT, PROCESS_STATUS, STATUS   from (select T.CREATED_DATE,                T.STATUS,                T.PROCESS_STATUS,                T.UETR,                T.PROCESS_NAME,                T.PROCESSING_SYSTEM,                T.ADDITIONAL_INFO,                T.TENANT_ID,                T.CREATED_DATE,          T.CREATED_DATE_UTC,                T.MODIFIED_DATE,                T.MODIFIED_DATE_UTC,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME,                T.CREATED_BY,                T.CREATED_BY_NAME,                T.SYSTEM_ID,                QR.ROLE_ID,                QR.VPH_APP_ID AS QR_APP_ID,                QR.VPH_APP_CODE,                QR.QUEUE_CODE,                QR.SCREEN_NAME AS QR_SCREEN_NAME,                QR.SCREEN_MENU_GROUP AS QR_MENU_GROUP,                QR.SCREEN_MODULE AS QR_MODULE,                PQ.QUEUE_DESC,                PQ.QUEUE_CODE,                PQ.VPH_APP_ID AS Q_APP_ID,                QR.SORT_ORDER AS QS_SORT_ORDER,                PQ.SORT_ORDER AS Q_SORT_ORDER           from NPSS_TRN_PROCESS_LOG T           LEFT JOIN TRANSACTION_SET TS ON T.NPSSTPL_ID = TS.TRN_ID                                       AND T.DTT_CODE = TS.DTT_CODE          INNER JOIN CORE_Q_STATUS_ROLES QR ON T.STATUS =                                               QR.PROCESS_QUEUE_STATUS                                           AND T.PROCESS_STATUS =                                               QR.QUEUE_CODE          INNER JOIN CORE_APP_Q_SETUP PQ ON T.PROCESS_STATUS = PQ.QUEUE_CODE) VW  WHERE CREATED_DATE_UTC <= CURRENT_TIMESTAMP - INTERVAL '10 MINUTES' $AND  group by PROCESS_STATUS, STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS RCT Investigation Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "queue"
	queue__cu_for_tl_from_q() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1669102448764"
		let event_params={"caller_name":"queue__cu_for_tl_from_q","event_desc":"CU for TL from Q","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666866107770","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Investigation Tran MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667297593171","date_format":true},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1667297593387","date_format":true},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1667297593779","date_format":false,"currency_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1667297593987","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1667297659458","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1667297659657","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1667297696809","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1667297696969","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1667297729985","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1667297730193","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667638278857","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166800050","date_format":false},{"column_name":"MEM_PAYMENT_METHOD","alias_name":"","mq_id":"MQ_1668415277293","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691911532","date_format":false},{"column_name":"CBS_REF_NO","alias_name":"","mq_id":"MQ_1668775396690","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID,        MODIFIED_DATE_UTC,        DATEMI,        VALUE_DATE,        CBS_REF_NO,        CREATED_DATE,        MODIFIED_DATE_UTC,        CDTR_ACCT_NO,        CDTR_ACCT_NAME,        INTRBK_STTLM_AMNT,        INTRBK_STTLM_CUR,        DBTR_ACCT_NO,        DBTR_ACCT_NAME,        DR_SORT_CODE,        CR_SORT_CODE,        UETR,        HDR_MSG_ID,        PRODUCT_CODE,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        PROCESS_TYPE,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,        CDTR_IBAN,        CLRSYSREF,        PAYMENT_ENDTOEND_ID,        TRAN_REF_ID,        EXHF_ID,        PROCESS_STATUS,        STATUS,        TENANT_ID,        DT_CODE,        DTT_CODE,        TS_ID,        LOCKED_BY,        LOCKED_BY_NAME,        VERSION_NO,        MEM_PAYMENT_METHOD,        DEPARTMENT_CODE,        DBTR_PRVT_ID,        DBTR_OTHER_ISSUER,        ACCP_DATE_TIME   FROM (SELECT A.NPSST_ID,                A.VALUE_DATE,                A.CBS_REF_NO,                A.MODIFIED_DATE_UTC,                A.CREATED_DATE,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,                A.CDTR_ACCT_NO,                A.CDTR_ACCT_NAME,                A.INTRBK_STTLM_AMNT,                A.INTRBK_STTLM_CUR,                A.DBTR_ACCT_NO,                A.DBTR_ACCT_NAME,                A.DR_SORT_CODE,                A.CR_SORT_CODE,                A.DEPARTMENT_CODE,                A.UETR,                A.HDR_MSG_ID,                A.PRODUCT_CODE,                A.CHANNEL_ID,                A.CHANNEL_REFNO,                A.CHANNEL_PRODUCT,                A.CHANNEL_SUB_PRODUCT,                A.CHANNEL_TRAN_CODE,                A.PROCESS_TYPE,                A.DBTR_PHONE_NO,                A.DBTR_EMAIL_ID,                A.DBTR_DOCUMENT_ID,                A.DBTR_IBAN,                A.CDTR_PHONE_NO,                A.CDTR_EMAIL_ID,                A.CDTR_DOCUMENT_ID,                A.CDTR_IBAN,                A.CLRSYSREF,                A.PAYMENT_ENDTOEND_ID,                A.ACCP_DATE_TIME,                A.TRAN_REF_ID,                A.EXHF_ID,                A.REMITTANCE_INFO,                A.INWARD_FILE_NAME,                A.PROCESS_STATUS,                A.STATUS,                A.TENANT_ID,                A.DT_CODE,                A.DTT_CODE,                A.VERSION_NO,                A.DBTR_PRVT_ID,                A.DBTR_OTHER_ISSUER,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME,                CASE                  WHEN A.EXHF_ID IS NULL THEN                   'RCT'                  ELSE                   'BCT'                END AS MEM_PAYMENT_METHOD           FROM NPSS_TRANSACTIONS A           LEFT JOIN TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID                                       AND TS.DTT_CODE = A.DTT_CODE          ORDER BY A.NPSST_ID DESC) VW  WHERE MODIFIED_DATE_UTC <= CURRENT_TIMESTAMP - INTERVAL '10 MINUTES' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Investigation Tran CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let internals="ssp_for_transaction_list__brfq_for_pll,"
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
	ssp_for_transaction_list__brfq_for_pll(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_transaction_list"
		let destn_id="process_log_list"
		let parent_source_id="cc_for_queue"
		let event_code="e_1669102087998"
		let event_params={"caller_name":"ssp_for_transaction_list__brfq_for_pll","event_desc":"BRFQ for PLL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_pll__sfr_for_pll,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666866038858","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS RCT Processlog MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1669099993823","date_format":true},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1669100005870","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669100006325","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669100051018","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1669100051202","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1669100051402","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1669100081226","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1669100081658","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1669100096177","date_format":false}],"joins":[]},"eq_text":"select REVERSAL_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        T24_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATED_DATE_UTC,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        DTT_CODE,        DT_CODE,        TENANT_ID,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE   from (select A.NPSSTPL_ID,                A.MSG_ID,                A.UETR,                A.NPSSTRRD_REFNO,                A.PROCESS_NAME,                A.PROCESSING_SYSTEM,                A.RESPONSE_CODE,                A.PROCESS_REF_NO,                A.RESPONSE_DATA,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,                A.CREATED_DATE,                A.CREATED_DATE_UTC,                A.PROCESS_STATUS,                A.STATUS,                A.DTT_CODE,                A.DT_CODE,                A.TENANT_ID,                A.REQUEST_DATA_JSON,                A.RESPONSE_DATA_JSON,                A.T24_RETURN_CODE,                A.ADDITIONAL_INFO,                T24RC.RETURN_DESCRIPTION as T24_RETURN_DESC,                CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) as T24_RETURN_DESCRIPTION,                A.CBUAE_RETURN_CODE,                CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,                CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,                A.REVERSAL_CODE,                CCD.CD_DESCRIPTION as REVERSAL_DESC,                CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,                NT.VALUE_DATE,                NT.DBTR_ACCT_NO,                NT.CDTR_ACCT_NO,                NT.PAYMENT_ENDTOEND_ID,                case                  when NT.EXHF_ID is null then                   'RCT'                  else                   'BCT'                end as MEM_PAYMENT_METHOD,                NT.EXHF_ID,                NT.CDTR_IBAN,                NT.DBTR_IBAN,                NT.DBTR_PHONE_NO,                NT.CDTR_PHONE_NO,                NT.INTRBK_STTLM_AMNT,                NT.TRAN_REF_ID           from NPSS_TRN_PROCESS_LOG A          inner join NPSS_TRANSACTIONS NT on NT.UETR = A.UETR           left join CORE_NC_CODE_DESCRIPTIONS CCD on CCD.CD_CODE =                                                      A.REVERSAL_CODE                                                  and CCD.CD_CATEGORY =                                                      'REVERSAL_REASON_IDENTIFIER_CODE'           left join CORE_NC_RETURN_CODES T24RC on T24RC.RETURN_CODE =                                                   A.T24_RETURN_CODE                                               and T24RC.PROCESSING_SYSTEM =                                                   'T24'           left join CORE_NC_RETURN_CODES CBUAERC on CBUAERC.RETURN_CODE =                                                     A.CBUAE_RETURN_CODE                                                 and CBUAERC.PROCESSING_SYSTEM =                                                     'CBUAE'          order by A.NPSSTPL_ID desc) V  WHERE CREATED_DATE_UTC <= CURRENT_TIMESTAMP - INTERVAL '10 MINUTES' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS RCT Investigation Processlog CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24  Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for pll"
	brfq_for_pll__sfr_for_pll(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_pll"
		let destn_id="process_log_list"
		let parent_source_id="ssp_for_transaction_list"
		let event_code="e_1669102117130"
		let event_params={"caller_name":"brfq_for_pll__sfr_for_pll","event_desc":"SFR for PLL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666866038858","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS RCT Processlog MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1669099993823","date_format":true},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1669100005870","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669100006325","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669100051018","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1669100051202","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1669100051402","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1669100081226","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1669100081658","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1669100096177","date_format":false}],"joins":[]},"eq_text":"select REVERSAL_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        T24_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATED_DATE_UTC,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        DTT_CODE,        DT_CODE,        TENANT_ID,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE   from (select A.NPSSTPL_ID,                A.MSG_ID,                A.UETR,                A.NPSSTRRD_REFNO,                A.PROCESS_NAME,                A.PROCESSING_SYSTEM,                A.RESPONSE_CODE,                A.PROCESS_REF_NO,                A.RESPONSE_DATA,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,                A.CREATED_DATE,                A.CREATED_DATE_UTC,                A.PROCESS_STATUS,                A.STATUS,                A.DTT_CODE,                A.DT_CODE,                A.TENANT_ID,                A.REQUEST_DATA_JSON,                A.RESPONSE_DATA_JSON,                A.T24_RETURN_CODE,                A.ADDITIONAL_INFO,                T24RC.RETURN_DESCRIPTION as T24_RETURN_DESC,                CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) as T24_RETURN_DESCRIPTION,                A.CBUAE_RETURN_CODE,                CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,                CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,                A.REVERSAL_CODE,                CCD.CD_DESCRIPTION as REVERSAL_DESC,                CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,                NT.VALUE_DATE,                NT.DBTR_ACCT_NO,                NT.CDTR_ACCT_NO,                NT.PAYMENT_ENDTOEND_ID,                case                  when NT.EXHF_ID is null then                   'RCT'                  else                   'BCT'                end as MEM_PAYMENT_METHOD,                NT.EXHF_ID,                NT.CDTR_IBAN,                NT.DBTR_IBAN,                NT.DBTR_PHONE_NO,                NT.CDTR_PHONE_NO,                NT.INTRBK_STTLM_AMNT,                NT.TRAN_REF_ID           from NPSS_TRN_PROCESS_LOG A          inner join NPSS_TRANSACTIONS NT on NT.UETR = A.UETR           left join CORE_NC_CODE_DESCRIPTIONS CCD on CCD.CD_CODE =                                                      A.REVERSAL_CODE                                                  and CCD.CD_CATEGORY =                                                      'REVERSAL_REASON_IDENTIFIER_CODE'           left join CORE_NC_RETURN_CODES T24RC on T24RC.RETURN_CODE =                                                   A.T24_RETURN_CODE                                               and T24RC.PROCESSING_SYSTEM =                                                   'T24'           left join CORE_NC_RETURN_CODES CBUAERC on CBUAERC.RETURN_CODE =                                                     A.CBUAE_RETURN_CODE                                                 and CBUAERC.PROCESSING_SYSTEM =                                                     'CBUAE'          order by A.NPSSTPL_ID desc) V  WHERE CREATED_DATE_UTC <= CURRENT_TIMESTAMP - INTERVAL '10 MINUTES' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS RCT Investigation Processlog CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24  Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let internals=""
		let event_data={"transaction_list":{"e_1666857595507":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_2","event_code":"E_1666857595507","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"HARDCODED","column_name":"SELECT","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"},{"type":"LOCAL","column_name":"NPSST_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSST_ID","setd3name":"NPSST_ID"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666866107770","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Investigation Tran MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667297593171","date_format":true},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1667297593387","date_format":true},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1667297593779","date_format":false,"currency_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1667297593987","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1667297659458","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1667297659657","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1667297696809","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1667297696969","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1667297729985","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1667297730193","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667638278857","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166800050","date_format":false},{"column_name":"MEM_PAYMENT_METHOD","alias_name":"","mq_id":"MQ_1668415277293","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691911532","date_format":false},{"column_name":"CBS_REF_NO","alias_name":"","mq_id":"MQ_1668775396690","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID,        MODIFIED_DATE_UTC,        DATEMI,        VALUE_DATE,        CBS_REF_NO,        CREATED_DATE,        MODIFIED_DATE_UTC,        CDTR_ACCT_NO,        CDTR_ACCT_NAME,        INTRBK_STTLM_AMNT,        INTRBK_STTLM_CUR,        DBTR_ACCT_NO,        DBTR_ACCT_NAME,        DR_SORT_CODE,        CR_SORT_CODE,        UETR,        HDR_MSG_ID,        PRODUCT_CODE,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        PROCESS_TYPE,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,        CDTR_IBAN,        CLRSYSREF,        PAYMENT_ENDTOEND_ID,        TRAN_REF_ID,        EXHF_ID,        PROCESS_STATUS,        STATUS,        TENANT_ID,        DT_CODE,        DTT_CODE,        TS_ID,        LOCKED_BY,        LOCKED_BY_NAME,        VERSION_NO,        MEM_PAYMENT_METHOD,        DEPARTMENT_CODE,        DBTR_PRVT_ID,        DBTR_OTHER_ISSUER,        ACCP_DATE_TIME   FROM (SELECT A.NPSST_ID,                A.VALUE_DATE,                A.CBS_REF_NO,                A.MODIFIED_DATE_UTC,                A.CREATED_DATE,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,                A.CDTR_ACCT_NO,                A.CDTR_ACCT_NAME,                A.INTRBK_STTLM_AMNT,                A.INTRBK_STTLM_CUR,                A.DBTR_ACCT_NO,                A.DBTR_ACCT_NAME,                A.DR_SORT_CODE,                A.CR_SORT_CODE,                A.DEPARTMENT_CODE,                A.UETR,                A.HDR_MSG_ID,                A.PRODUCT_CODE,                A.CHANNEL_ID,                A.CHANNEL_REFNO,                A.CHANNEL_PRODUCT,                A.CHANNEL_SUB_PRODUCT,                A.CHANNEL_TRAN_CODE,                A.PROCESS_TYPE,                A.DBTR_PHONE_NO,                A.DBTR_EMAIL_ID,                A.DBTR_DOCUMENT_ID,                A.DBTR_IBAN,                A.CDTR_PHONE_NO,                A.CDTR_EMAIL_ID,                A.CDTR_DOCUMENT_ID,                A.CDTR_IBAN,                A.CLRSYSREF,                A.PAYMENT_ENDTOEND_ID,                A.ACCP_DATE_TIME,                A.TRAN_REF_ID,                A.EXHF_ID,                A.REMITTANCE_INFO,                A.INWARD_FILE_NAME,                A.PROCESS_STATUS,                A.STATUS,                A.TENANT_ID,                A.DT_CODE,                A.DTT_CODE,                A.VERSION_NO,                A.DBTR_PRVT_ID,                A.DBTR_OTHER_ISSUER,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME,                CASE                  WHEN A.EXHF_ID IS NULL THEN                   'RCT'                  ELSE                   'BCT'                END AS MEM_PAYMENT_METHOD           FROM NPSS_TRANSACTIONS A           LEFT JOIN TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID                                       AND TS.DTT_CODE = A.DTT_CODE          ORDER BY A.NPSST_ID DESC) VW  WHERE MODIFIED_DATE_UTC <= CURRENT_TIMESTAMP - INTERVAL '10 MINUTES' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Investigation Tran CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let destn_id="navigation_ui_view_detail"
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__spap_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666857782776"
		let event_params={"caller_name":"navigation_ui_search__spap_for_search","event_desc":"SPAP for Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_for_search","selector":"p_search_layout","profile_code":"BTL_1304_1666856790983","window_title":"Search","window_height":"","window_width":"auto","window_close_icon":"Y","eventdes":"spap_for_search","eventcode":"E_1666857782776"}}
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
		let event_data={"process_log_list":{"e_1666862672351":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_5","event_code":"E_1666862672351","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"HARDCODED","column_name":"SELECT","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"},{"type":"LOCAL","column_name":"UETR","level":"MI_LEVEL","name":"MI_LEVEL_UETR","setd3name":"UETR"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666866038858","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS RCT Processlog MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1669099993823","date_format":true},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1669100005870","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669100006325","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669100051018","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1669100051202","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1669100051402","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1669100081226","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1669100081658","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1669100096177","date_format":false}],"joins":[]},"eq_text":"select REVERSAL_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        T24_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATED_DATE_UTC,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        DTT_CODE,        DT_CODE,        TENANT_ID,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE   from (select A.NPSSTPL_ID,                A.MSG_ID,                A.UETR,                A.NPSSTRRD_REFNO,                A.PROCESS_NAME,                A.PROCESSING_SYSTEM,                A.RESPONSE_CODE,                A.PROCESS_REF_NO,                A.RESPONSE_DATA,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,                A.CREATED_DATE,                A.CREATED_DATE_UTC,                A.PROCESS_STATUS,                A.STATUS,                A.DTT_CODE,                A.DT_CODE,                A.TENANT_ID,                A.REQUEST_DATA_JSON,                A.RESPONSE_DATA_JSON,                A.T24_RETURN_CODE,                A.ADDITIONAL_INFO,                T24RC.RETURN_DESCRIPTION as T24_RETURN_DESC,                CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) as T24_RETURN_DESCRIPTION,                A.CBUAE_RETURN_CODE,                CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,                CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,                A.REVERSAL_CODE,                CCD.CD_DESCRIPTION as REVERSAL_DESC,                CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,                NT.VALUE_DATE,                NT.DBTR_ACCT_NO,                NT.CDTR_ACCT_NO,                NT.PAYMENT_ENDTOEND_ID,                case                  when NT.EXHF_ID is null then                   'RCT'                  else                   'BCT'                end as MEM_PAYMENT_METHOD,                NT.EXHF_ID,                NT.CDTR_IBAN,                NT.DBTR_IBAN,                NT.DBTR_PHONE_NO,                NT.CDTR_PHONE_NO,                NT.INTRBK_STTLM_AMNT,                NT.TRAN_REF_ID           from NPSS_TRN_PROCESS_LOG A          inner join NPSS_TRANSACTIONS NT on NT.UETR = A.UETR           left join CORE_NC_CODE_DESCRIPTIONS CCD on CCD.CD_CODE =                                                      A.REVERSAL_CODE                                                  and CCD.CD_CATEGORY =                                                      'REVERSAL_REASON_IDENTIFIER_CODE'           left join CORE_NC_RETURN_CODES T24RC on T24RC.RETURN_CODE =                                                   A.T24_RETURN_CODE                                               and T24RC.PROCESSING_SYSTEM =                                                   'T24'           left join CORE_NC_RETURN_CODES CBUAERC on CBUAERC.RETURN_CODE =                                                     A.CBUAE_RETURN_CODE                                                 and CBUAERC.PROCESSING_SYSTEM =                                                     'CBUAE'          order by A.NPSSTPL_ID desc) V  WHERE CREATED_DATE_UTC <= CURRENT_TIMESTAMP - INTERVAL '10 MINUTES' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS RCT Investigation Processlog CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24  Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let event_code="e_1669102187502"
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
		let event_code="e_1669102231627"
		let event_params={"caller_name":"cc_for_tl__brfq_for_tl","event_desc":"BRFQ for TL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_tl__sfr_for_tl,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666866107770","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Investigation Tran MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667297593171","date_format":true},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1667297593387","date_format":true},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1667297593779","date_format":false,"currency_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1667297593987","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1667297659458","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1667297659657","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1667297696809","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1667297696969","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1667297729985","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1667297730193","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667638278857","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166800050","date_format":false},{"column_name":"MEM_PAYMENT_METHOD","alias_name":"","mq_id":"MQ_1668415277293","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691911532","date_format":false},{"column_name":"CBS_REF_NO","alias_name":"","mq_id":"MQ_1668775396690","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID,        MODIFIED_DATE_UTC,        DATEMI,        VALUE_DATE,        CBS_REF_NO,        CREATED_DATE,        MODIFIED_DATE_UTC,        CDTR_ACCT_NO,        CDTR_ACCT_NAME,        INTRBK_STTLM_AMNT,        INTRBK_STTLM_CUR,        DBTR_ACCT_NO,        DBTR_ACCT_NAME,        DR_SORT_CODE,        CR_SORT_CODE,        UETR,        HDR_MSG_ID,        PRODUCT_CODE,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        PROCESS_TYPE,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,        CDTR_IBAN,        CLRSYSREF,        PAYMENT_ENDTOEND_ID,        TRAN_REF_ID,        EXHF_ID,        PROCESS_STATUS,        STATUS,        TENANT_ID,        DT_CODE,        DTT_CODE,        TS_ID,        LOCKED_BY,        LOCKED_BY_NAME,        VERSION_NO,        MEM_PAYMENT_METHOD,        DEPARTMENT_CODE,        DBTR_PRVT_ID,        DBTR_OTHER_ISSUER,        ACCP_DATE_TIME   FROM (SELECT A.NPSST_ID,                A.VALUE_DATE,                A.CBS_REF_NO,                A.MODIFIED_DATE_UTC,                A.CREATED_DATE,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,                A.CDTR_ACCT_NO,                A.CDTR_ACCT_NAME,                A.INTRBK_STTLM_AMNT,                A.INTRBK_STTLM_CUR,                A.DBTR_ACCT_NO,                A.DBTR_ACCT_NAME,                A.DR_SORT_CODE,                A.CR_SORT_CODE,                A.DEPARTMENT_CODE,                A.UETR,                A.HDR_MSG_ID,                A.PRODUCT_CODE,                A.CHANNEL_ID,                A.CHANNEL_REFNO,                A.CHANNEL_PRODUCT,                A.CHANNEL_SUB_PRODUCT,                A.CHANNEL_TRAN_CODE,                A.PROCESS_TYPE,                A.DBTR_PHONE_NO,                A.DBTR_EMAIL_ID,                A.DBTR_DOCUMENT_ID,                A.DBTR_IBAN,                A.CDTR_PHONE_NO,                A.CDTR_EMAIL_ID,                A.CDTR_DOCUMENT_ID,                A.CDTR_IBAN,                A.CLRSYSREF,                A.PAYMENT_ENDTOEND_ID,                A.ACCP_DATE_TIME,                A.TRAN_REF_ID,                A.EXHF_ID,                A.REMITTANCE_INFO,                A.INWARD_FILE_NAME,                A.PROCESS_STATUS,                A.STATUS,                A.TENANT_ID,                A.DT_CODE,                A.DTT_CODE,                A.VERSION_NO,                A.DBTR_PRVT_ID,                A.DBTR_OTHER_ISSUER,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME,                CASE                  WHEN A.EXHF_ID IS NULL THEN                   'RCT'                  ELSE                   'BCT'                END AS MEM_PAYMENT_METHOD           FROM NPSS_TRANSACTIONS A           LEFT JOIN TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID                                       AND TS.DTT_CODE = A.DTT_CODE          ORDER BY A.NPSST_ID DESC) VW  WHERE MODIFIED_DATE_UTC <= CURRENT_TIMESTAMP - INTERVAL '10 MINUTES' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Investigation Tran CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let event_code="e_1669102279914"
		let event_params={"caller_name":"brfq_for_tl__sfr_for_tl","event_desc":"SFR for TL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666866107770","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Investigation Tran MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667297593171","date_format":true},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1667297593387","date_format":true},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1667297593779","date_format":false,"currency_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1667297593987","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1667297659458","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1667297659657","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1667297696809","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1667297696969","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1667297729985","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1667297730193","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667638278857","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166800050","date_format":false},{"column_name":"MEM_PAYMENT_METHOD","alias_name":"","mq_id":"MQ_1668415277293","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691911532","date_format":false},{"column_name":"CBS_REF_NO","alias_name":"","mq_id":"MQ_1668775396690","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID,        MODIFIED_DATE_UTC,        DATEMI,        VALUE_DATE,        CBS_REF_NO,        CREATED_DATE,        MODIFIED_DATE_UTC,        CDTR_ACCT_NO,        CDTR_ACCT_NAME,        INTRBK_STTLM_AMNT,        INTRBK_STTLM_CUR,        DBTR_ACCT_NO,        DBTR_ACCT_NAME,        DR_SORT_CODE,        CR_SORT_CODE,        UETR,        HDR_MSG_ID,        PRODUCT_CODE,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        PROCESS_TYPE,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,        CDTR_IBAN,        CLRSYSREF,        PAYMENT_ENDTOEND_ID,        TRAN_REF_ID,        EXHF_ID,        PROCESS_STATUS,        STATUS,        TENANT_ID,        DT_CODE,        DTT_CODE,        TS_ID,        LOCKED_BY,        LOCKED_BY_NAME,        VERSION_NO,        MEM_PAYMENT_METHOD,        DEPARTMENT_CODE,        DBTR_PRVT_ID,        DBTR_OTHER_ISSUER,        ACCP_DATE_TIME   FROM (SELECT A.NPSST_ID,                A.VALUE_DATE,                A.CBS_REF_NO,                A.MODIFIED_DATE_UTC,                A.CREATED_DATE,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,                A.CDTR_ACCT_NO,                A.CDTR_ACCT_NAME,                A.INTRBK_STTLM_AMNT,                A.INTRBK_STTLM_CUR,                A.DBTR_ACCT_NO,                A.DBTR_ACCT_NAME,                A.DR_SORT_CODE,                A.CR_SORT_CODE,                A.DEPARTMENT_CODE,                A.UETR,                A.HDR_MSG_ID,                A.PRODUCT_CODE,                A.CHANNEL_ID,                A.CHANNEL_REFNO,                A.CHANNEL_PRODUCT,                A.CHANNEL_SUB_PRODUCT,                A.CHANNEL_TRAN_CODE,                A.PROCESS_TYPE,                A.DBTR_PHONE_NO,                A.DBTR_EMAIL_ID,                A.DBTR_DOCUMENT_ID,                A.DBTR_IBAN,                A.CDTR_PHONE_NO,                A.CDTR_EMAIL_ID,                A.CDTR_DOCUMENT_ID,                A.CDTR_IBAN,                A.CLRSYSREF,                A.PAYMENT_ENDTOEND_ID,                A.ACCP_DATE_TIME,                A.TRAN_REF_ID,                A.EXHF_ID,                A.REMITTANCE_INFO,                A.INWARD_FILE_NAME,                A.PROCESS_STATUS,                A.STATUS,                A.TENANT_ID,                A.DT_CODE,                A.DTT_CODE,                A.VERSION_NO,                A.DBTR_PRVT_ID,                A.DBTR_OTHER_ISSUER,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME,                CASE                  WHEN A.EXHF_ID IS NULL THEN                   'RCT'                  ELSE                   'BCT'                END AS MEM_PAYMENT_METHOD           FROM NPSS_TRANSACTIONS A           LEFT JOIN TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID                                       AND TS.DTT_CODE = A.DTT_CODE          ORDER BY A.NPSST_ID DESC) VW  WHERE MODIFIED_DATE_UTC <= CURRENT_TIMESTAMP - INTERVAL '10 MINUTES' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Investigation Tran CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui initiate"
	navigation_ui_initiate__cc_for_initiate() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_initiate"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666943031009"
		let event_params={"caller_name":"navigation_ui_initiate__cc_for_initiate","event_desc":"CC for initiate","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_initiate","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_initiate__info_for_initiate,"
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_investigation_pac_028Service.fn_npss_cs_investigation_pac_028(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for initiate"
	cc_for_initiate__info_for_initiate(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_initiate"
		let destn_id=""
		let parent_source_id="navigation_ui_initiate"
		let event_code="e_1666943220349"
		let event_params={"caller_name":"cc_for_initiate__info_for_initiate","event_desc":"INFO for Initiate","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Data has been initiated successfully","root_source_id":"navigation_ui_initiate","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="info_for_initiate__rs_for_initiate,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "info for initiate"
	info_for_initiate__rs_for_initiate(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="info_for_initiate"
		let destn_id=""
		let parent_source_id="cc_for_initiate"
		let event_code="e_1666943300723"
		let event_params={"caller_name":"info_for_initiate__rs_for_initiate","event_desc":"RS for initiate","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_initiate","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view detail"
	navigation_ui_view_detail__sp_for_view_detail() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_detail"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669201196854"
		let event_params={"caller_name":"navigation_ui_view_detail__sp_for_view_detail","event_desc":"SP for View detail","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_detail","raiseparam":{"profile_code":"BTL_1304_1669200873578"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view detail"
	navigation_ui_view_detail__brfq_for_vtd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_detail"
		let destn_id="view_dr_cr_tran_details"
		let parent_source_id=""
		let event_code="e_1669201266351"
		let event_params={"caller_name":"navigation_ui_view_detail__brfq_for_vtd","event_desc":"BRFQ for VTD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_detail","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_6","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1669203662794","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"MEM_PAYMENT_METHOD","alias_name":"","mq_id":"MQ_1668415265731","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691797994","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1668772110535","date_format":false},{"column_name":"TRAN_LEVEL","alias_name":"","mq_id":"MQ_1669006969775","date_format":false},{"column_name":"ACCEPTED_DATE","alias_name":"","mq_id":"MQ_1669198452328","date_format":true},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669209185067","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1669209185410","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1669209185641","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669209840985","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669209847802","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669209934807","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  TRAN_LEVEL,  MODIFIED_DATE_UTC,  ACCEPTED_DATE,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  MEM_PAYMENT_METHOD,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   TO_CHAR(A.ACCP_DATE_TIME, 'YYYY-MM-DD HH:MI:SS:MS AM') as ACCEPTED_DATE,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   case    when (UPPER(A.PROCESS_STATUS)) like (UPPER('%COMPLETED')) then 'COMPLETED'    else 'INPROGRESS'   end as TRAN_LEVEL,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   case    when A.EXHF_ID is null then 'RCT'    else 'BCT'   end as MEM_PAYMENT_METHOD  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Ver HST View Transaction CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Id","target_column":"NPSST_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Txn Value Date","target_column":"VALUE_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Number","target_column":"CDTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Number","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Amount Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Type","target_column":"PROCESS_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message ID","target_column":"HDR_MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer  Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Batch Id","target_column":"EXHF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Accepted Date & Time","target_column":"ACCEPTED_DATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Sort Code","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E reference id","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payment Method","target_column":"MEM_PAYMENT_METHOD","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view detail"
	navigation_ui_view_detail__brfq_for_vptdl() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_detail"
		let destn_id="view_payment_tran_details"
		let parent_source_id=""
		let event_code="e_1669207084182"
		let event_params={"caller_name":"navigation_ui_view_detail__brfq_for_vptdl","event_desc":"BRFQ for VPTDL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_detail","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
