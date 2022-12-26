/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27541 
Modified By     : Admin 
Modified Date   : 2022-Dec-26 13:54 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_customer_details
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'

@Component({
	selector: 's_view_customer_details',
	templateUrl: './s_view_customer_details.component.html',
	styleUrls: ['./s_view_customer_details.component.css'],
	providers:[torus_cs_show_hideService]
})
    
// Start of class 
export class s_view_customer_detailsComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_view_customer_details"
	wftpa_id : string = "WFT_NPSS_P_1304_1666931557660_0"
	cg_code : string = "CG_1304_1666881008898"
	key_column : any = {"dtt_1304_1666846082411":"NPSSCP_ID","dtt_1304_1666846862798":"NPSSCA_ID","dtt_1304_1666847230281":"NPSSSMTPL_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "queue"
	uicgc_2 : string = "customer_list"
	uicgc_3 : string = "process_log_list"
	uicgc_4 : string = "customer_details"
	uicgc_5 : string = "account_list"
	uicgc_6 : string = "account_details"
	uicgc_7 : string = "search"
	uicgc_8 : string = "navigation"
	uicgc_9 : string = "back_ui"
	key_events : any = {}
	btl_1304_1666887407266 : string = "p_search_layout"
	btl_1304_1666886156572 : string = "p_view_account_layout"
	btl_1304_1666886091955 : string = "p_main_layout"
	forms : any = ["uicgc_7","uicgc_9","uicgc_8"]
	p_search_layout__sfap_for_search_showpopup : boolean = false
	queue : any = {}
	customer_list : any = {}
	process_log_list : any = {}
	customer_details : any = {}
	account_list : any = {}
	account_details : any = {}
	search : any = {}
	search_clear : any = {}
	search_search : any = {}
	navigation : any = {}
	navigation_search : any = {}
	navigation_view_account_detail : any = {}
	navigation_process_log_trg : any = {}
	back_ui : any = {}
	back_ui_back : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private torus_cs_show_hideService:torus_cs_show_hideService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Queue" 
		this.queue.uictrl_code = "datatable"
		this.queue.uicgc_desc = "Queue"
		this.queue.uicgc_code = "uicgc_1"
		this.queue.params = {"need_pag_datatable":"Y","need_search":"N"}
		this.queue.datasource = {"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1666931663574","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Customer Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666877204635","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666877204809","date_format":false},{"column_name":"TRAN_COUNT","alias_name":"","mq_id":"MQ_1666965101681","date_format":false}],"joins":[]},"eq_text":"SELECT PROCESS_STATUS,        STATUS,        COUNT(STATUS) TRAN_COUNT,        QUEUE_DESC,        Q_SORT_ORDER,        QS_SORT_ORDER   FROM (SELECT T.NPSSCP_ID,                T.PROXY_TYPE,                T.MOBILE,                T.SURNAME,                T.CUSTOMER_NAME,                T.BANK_CODE,                T.GROUP_CODE,                T.BANKUSERID,                T.PRODUCT_CODE,                T.PROXY_VALUE,                T.EMAIL,                T.DOCUMENT_ID,                T.EXHF_ID,                T.CHANNEL_ID,                T.CHANNEL_REFNO,                T.CHANNEL_USERID,                T.CHANNEL_PRODUCT,                T.CHANNEL_SUB_PRODUCT,                T.CHANNEL_TRAN_CODE,                T.PROCESS_STATUS,                T.TENANT_ID,                T.STATUS,                T.CREATED_DATE,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME,                T.CREATED_BY,                T.CREATED_BY_NAME,                T.SYSTEM_ID,                QR.ROLE_ID,                QR.VPH_APP_ID AS QR_APP_ID,                QR.VPH_APP_CODE,                QR.QUEUE_CODE,                QR.SCREEN_NAME AS QR_SCREEN_NAME,                QR.SCREEN_MENU_GROUP AS QR_MENU_GROUP,                QR.SCREEN_MODULE AS QR_MODULE,                PQ.QUEUE_DESC,                PQ.QUEUE_CODE,                PQ.VPH_APP_ID AS Q_APP_ID,                QR.SORT_ORDER AS QS_SORT_ORDER,                PQ.SORT_ORDER AS Q_SORT_ORDER          FROM NPSS_CUSTOMER_PROXY T           LEFT JOIN TRANSACTION_SET TS ON T.NPSSCP_ID = TS.TRN_ID                                       AND T.DTT_CODE = TS.DTT_CODE          INNER JOIN CORE_Q_STATUS_ROLES QR ON T.STATUS =                                               QR.PROCESS_QUEUE_STATUS                                           AND T.PROCESS_STATUS =                                               QR.QUEUE_CODE          INNER JOIN CORE_APP_Q_SETUP PQ ON T.PROCESS_STATUS = PQ.QUEUE_CODE) VM $WHERE  GROUP BY PROCESS_STATUS,           STATUS,           QUEUE_DESC,           Q_SORT_ORDER,           QS_SORT_ORDER"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Customer Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"TRAN_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.queue.context_menu = []
		this.queue.views = {}
		this.queue.onChangecomponent = new EventEmitter<any>()
		this.queue.show = true
		this.queue.dynamic_param = {}
	
		// Component level properties - "Customer List" 
		this.customer_list.uictrl_code = "datatable"
		this.customer_list.uicgc_desc = "Customer List"
		this.customer_list.uicgc_code = "uicgc_2"
		this.customer_list.params = {"need_pag_datatable":"Y","need_search":"N"}
		this.customer_list.datasource = {"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1666931817713","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Customer Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666878433323","date_format":false},{"column_name":"CUSTOMER_NAME","alias_name":"","mq_id":"MQ_1666878433491","date_format":false},{"column_name":"SURNAME","alias_name":"","mq_id":"MQ_1666878433667","date_format":false},{"column_name":"MOBILE","alias_name":"","mq_id":"MQ_1666878433827","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666878469369","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666878469553","date_format":false},{"column_name":"GROUP_CODE","alias_name":"","mq_id":"MQ_1666878765095","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1666878765271","date_format":false},{"column_name":"PROXY_TYPE","alias_name":"","mq_id":"MQ_1666878809814","date_format":false},{"column_name":"PROXY_VALUE","alias_name":"","mq_id":"MQ_1666878809982","date_format":false},{"column_name":"EMAIL","alias_name":"","mq_id":"MQ_1666878810195","date_format":false},{"column_name":"DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666878839781","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666878840140","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1666878840284","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1666878883828","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1666878898035","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667540623887","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSCP_ID,        PRODUCT_CODE,        BANKUSERID,        GROUP_CODE,        BANK_CODE,        CUSTOMER_NAME,        SURNAME,        MOBILE,        PROXY_TYPE,        PROXY_VALUE,        EMAIL,        DOCUMENT_ID,        EXHF_ID,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        TENANT_ID,        CHANNEL_TRAN_CODE,CREATED_DATE   FROM (SELECT T.NPSSCP_ID,                T.PROXY_TYPE,                T.MOBILE,                T.SURNAME,                T.CUSTOMER_NAME,                T.BANK_CODE,                T.GROUP_CODE,                T.BANKUSERID,                T.PRODUCT_CODE,                T.PROXY_VALUE,                T.EMAIL,                T.DOCUMENT_ID,                T.EXHF_ID,                T.CHANNEL_ID,                T.CHANNEL_REFNO,                T.CHANNEL_USERID,                T.CHANNEL_PRODUCT,                T.CHANNEL_SUB_PRODUCT,                T.CHANNEL_TRAN_CODE,                T.PROCESS_STATUS,                T.TENANT_ID,                T.STATUS,                T.CREATED_DATE,                T.CREATED_BY,                T.CREATED_BY_NAME,                T.SYSTEM_ID           FROM NPSS_CUSTOMER_PROXY T) VM $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Customer Details CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Name","target_column":"CUSTOMER_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Surname","target_column":"SURNAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Mobile","target_column":"MOBILE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.customer_list.context_menu = []
		this.customer_list.views = {}
		this.customer_list.onChangecomponent = new EventEmitter<any>()
		this.customer_list.show = true
		this.customer_list.dynamic_param = {}
	
		// Component level properties - "Process Log List" 
		this.process_log_list.uictrl_code = "datatable"
		this.process_log_list.uicgc_desc = "Process Log List"
		this.process_log_list.uicgc_code = "uicgc_3"
		this.process_log_list.params = {"need_pag_datatable":"Y","need_search":"N"}
		this.process_log_list.datasource = {"default":{"dt_1304_1666847145490":{"dtt_1304_1666847230281":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1666847145490","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666847230281","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1666932290816","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Customer Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666877412054","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666877412326","date_format":false},{"column_name":"RESULT_CODE","alias_name":"","mq_id":"MQ_1666877412534","date_format":false},{"column_name":"RESULT_MESSAGE","alias_name":"","mq_id":"MQ_1666877412758","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666877413238","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666877451780","date_format":false},{"column_name":"NPSSSMTPL_ID","alias_name":"","mq_id":"MQ_1672059614979","date_format":false}],"joins":[]},"eq_text":"select NPSSSMTPL_ID,  BANKUSERID,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESULT_CODE,  result,  RESULT_MESSAGE,  RESULT_X_REQUEST_ID,  PROCESS_REF_NO,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  TENANT_ID,  DTT_CODE,  DT_CODE,  STATUS,  PROCESS_STATUS,  CHANNEL_TRAN_CODE from  (  select        SM.NPSSSMTPL_ID,   SM.BANKUSERID,   SM.PROCESS_NAME,   SM.PROCESSING_SYSTEM,   SM.RESULT_CODE,   SM.RESULT,   SM.RESULT_MESSAGE,   SM.RESULT_X_REQUEST_ID,   SM.PROCESS_REF_NO,   SM.REQUEST_DATA_JSON,   SM.RESPONSE_DATA_JSON,   SM.CHANNEL_ID,   SM.CHANNEL_REFNO,   SM.CHANNEL_USERID,   SM.CHANNEL_PRODUCT,   SM.CHANNEL_SUB_PRODUCT,   SM.CHANNEL_TRAN_CODE,   SM.PROCESS_STATUS,   SM.TENANT_ID,   SM.CREATED_DATE,   SM.DTT_CODE,   SM.DT_CODE,   SM.STATUS  from   NPSS_SM_TRN_PROCESS_LOG SM) VM $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Customer Process Log CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Result Code","target_column":"RESULT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Result Message","target_column":"RESULT_MESSAGE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.process_log_list.context_menu = []
		this.process_log_list.views = {}
		this.process_log_list.onChangecomponent = new EventEmitter<any>()
		this.process_log_list.show = true
		this.process_log_list.dynamic_param = {}
	
		// Component level properties - "Customer Details" 
		this.customer_details.uictrl_code = "datatable"
		this.customer_details.uicgc_desc = "Customer Details"
		this.customer_details.uicgc_code = "uicgc_4"
		this.customer_details.params = {"need_search":"N","need_vertical":"Y"}
		this.customer_details.datasource = {"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1666931758988","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Customer Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666878433323","date_format":false},{"column_name":"CUSTOMER_NAME","alias_name":"","mq_id":"MQ_1666878433491","date_format":false},{"column_name":"SURNAME","alias_name":"","mq_id":"MQ_1666878433667","date_format":false},{"column_name":"MOBILE","alias_name":"","mq_id":"MQ_1666878433827","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666878469369","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666878469553","date_format":false},{"column_name":"GROUP_CODE","alias_name":"","mq_id":"MQ_1666878765095","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1666878765271","date_format":false},{"column_name":"PROXY_TYPE","alias_name":"","mq_id":"MQ_1666878809814","date_format":false},{"column_name":"PROXY_VALUE","alias_name":"","mq_id":"MQ_1666878809982","date_format":false},{"column_name":"EMAIL","alias_name":"","mq_id":"MQ_1666878810195","date_format":false},{"column_name":"DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666878839781","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666878840140","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1666878840284","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1666878883828","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1666878898035","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667540623887","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSCP_ID,        PRODUCT_CODE,        BANKUSERID,        GROUP_CODE,        BANK_CODE,        CUSTOMER_NAME,        SURNAME,        MOBILE,        PROXY_TYPE,        PROXY_VALUE,        EMAIL,        DOCUMENT_ID,        EXHF_ID,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        TENANT_ID,        CHANNEL_TRAN_CODE,CREATED_DATE   FROM (SELECT T.NPSSCP_ID,                T.PROXY_TYPE,                T.MOBILE,                T.SURNAME,                T.CUSTOMER_NAME,                T.BANK_CODE,                T.GROUP_CODE,                T.BANKUSERID,                T.PRODUCT_CODE,                T.PROXY_VALUE,                T.EMAIL,                T.DOCUMENT_ID,                T.EXHF_ID,                T.CHANNEL_ID,                T.CHANNEL_REFNO,                T.CHANNEL_USERID,                T.CHANNEL_PRODUCT,                T.CHANNEL_SUB_PRODUCT,                T.CHANNEL_TRAN_CODE,                T.PROCESS_STATUS,                T.TENANT_ID,                T.STATUS,                T.CREATED_DATE,                T.CREATED_BY,                T.CREATED_BY_NAME,                T.SYSTEM_ID           FROM NPSS_CUSTOMER_PROXY T) VM $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Cust Details Vertical List CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Group Code","target_column":"GROUP_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Bank Code","target_column":"BANK_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Name","target_column":"CUSTOMER_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Surname","target_column":"SURNAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Mobile","target_column":"MOBILE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Proxy Type","target_column":"PROXY_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Proxy Value","target_column":"PROXY_VALUE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email","target_column":"EMAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Document ID","target_column":"DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Ref No","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel UserID","target_column":"CHANNEL_USERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Sub Product","target_column":"CHANNEL_SUB_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Tran Code","target_column":"CHANNEL_TRAN_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.customer_details.context_menu = []
		this.customer_details.views = {}
		this.customer_details.onChangecomponent = new EventEmitter<any>()
		this.customer_details.show = true
		this.customer_details.dynamic_param = {"column_header_name":"Field","value_header_name":"Value"}
	
		// Component level properties - "Account List" 
		this.account_list.uictrl_code = "datatable"
		this.account_list.uicgc_desc = "Account List"
		this.account_list.uicgc_code = "uicgc_5"
		this.account_list.params = {"need_pag_datatable":"Y","need_search":"N"}
		this.account_list.datasource = {"default":{"dt_1304_1666846042955":{"dtt_1304_1666846862798":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846862798","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1666931879352","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer Account MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PRODUCT_CODE","alias_name":"","mq_id":"MQ_1666853119720","date_format":false},{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666853119888","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1666853120023","date_format":false},{"column_name":"CURRENCY","alias_name":"","mq_id":"MQ_1666853120191","date_format":false},{"column_name":"INSTANT_PAYMENT","alias_name":"","mq_id":"MQ_1666853120359","date_format":false},{"column_name":"DEFAULT_ACCOUNT","alias_name":"","mq_id":"MQ_1666853121200","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666853121375","date_format":true},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666853162583","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666853162727","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666853162871","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667540553577","date_format":false}],"joins":[]},"eq_text":"select NPSSCA_ID,        PRODUCT_CODE,        BANKUSERID,        IBAN,        CURRENCY,        INSTANT_PAYMENT,        DEFAULT_ACCOUNT,        EXHF_ID,        CREATED_DATE,        DT_CODE,        DTT_CODE,        STATUS,        TENANT_ID,        PROCESS_STATUS   from (select NPSSCA.NPSSCA_ID,                NPSSCA.PRODUCT_CODE,                NPSSCA.BANKUSERID,                NPSSCA.IBAN,                NPSSCA.CURRENCY,                NPSSCA.INSTANT_PAYMENT,                NPSSCA.DEFAULT_ACCOUNT,                NPSSCA.EXHF_ID,                NPSSCA.CREATED_BY,                NPSSCA.CREATED_BY_NAME,                NPSSCA.CREATED_DATE,                NPSSCA.DT_CODE,                NPSSCA.DTT_CODE,                NPSSCA.MODIFIED_BY,                NPSSCA.MODIFIED_DATE,                NPSSCA.STATUS,                NPSSCA.PROCESS_STATUS,                NPSSCA.SYSTEM_ID,                NPSSCA.SYSTEM_NAME,                NPSSCA.TENANT_ID,                NPSSCA.VERSION_NO           from NPSS_CUSTOMER_ACCOUNTS NPSSCA) A $WHERE  order by DEFAULT_ACCOUNT"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Customer Account CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.account_list.context_menu = []
		this.account_list.views = {}
		this.account_list.onChangecomponent = new EventEmitter<any>()
		this.account_list.show = true
		this.account_list.dynamic_param = {}
	
		// Component level properties - "Account Details" 
		this.account_details.uictrl_code = "datatable"
		this.account_details.uicgc_desc = "Account Details"
		this.account_details.uicgc_code = "uicgc_6"
		this.account_details.params = {"need_search":"N","need_vertical":"Y"}
		this.account_details.datasource = {"default":{"dt_1304_1666846042955":{"dtt_1304_1666846862798":{"st_ds":{"default":{"uicgc_code":"UICGC_6","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846862798","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1666931865112","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer Account MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PRODUCT_CODE","alias_name":"","mq_id":"MQ_1666853119720","date_format":false},{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666853119888","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1666853120023","date_format":false},{"column_name":"CURRENCY","alias_name":"","mq_id":"MQ_1666853120191","date_format":false},{"column_name":"INSTANT_PAYMENT","alias_name":"","mq_id":"MQ_1666853120359","date_format":false},{"column_name":"DEFAULT_ACCOUNT","alias_name":"","mq_id":"MQ_1666853121200","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666853121375","date_format":true},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666853162583","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666853162727","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666853162871","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667540553577","date_format":false}],"joins":[]},"eq_text":"select NPSSCA_ID,        PRODUCT_CODE,        BANKUSERID,        IBAN,        CURRENCY,        INSTANT_PAYMENT,        DEFAULT_ACCOUNT,        EXHF_ID,        CREATED_DATE,        DT_CODE,        DTT_CODE,        STATUS,        TENANT_ID,        PROCESS_STATUS   from (select NPSSCA.NPSSCA_ID,                NPSSCA.PRODUCT_CODE,                NPSSCA.BANKUSERID,                NPSSCA.IBAN,                NPSSCA.CURRENCY,                NPSSCA.INSTANT_PAYMENT,                NPSSCA.DEFAULT_ACCOUNT,                NPSSCA.EXHF_ID,                NPSSCA.CREATED_BY,                NPSSCA.CREATED_BY_NAME,                NPSSCA.CREATED_DATE,                NPSSCA.DT_CODE,                NPSSCA.DTT_CODE,                NPSSCA.MODIFIED_BY,                NPSSCA.MODIFIED_DATE,                NPSSCA.STATUS,                NPSSCA.PROCESS_STATUS,                NPSSCA.SYSTEM_ID,                NPSSCA.SYSTEM_NAME,                NPSSCA.TENANT_ID,                NPSSCA.VERSION_NO           from NPSS_CUSTOMER_ACCOUNTS NPSSCA) A $WHERE  order by DEFAULT_ACCOUNT"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Account Detail Vertical CCD","filter":[{"filter_name":"NPSSCA_ID","binding_name":"NPSSCA_ID","binding_value":"","source_name":"MI_LEVEL_NPSSCA_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"CURRENCY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Instant Payment","target_column":"INSTANT_PAYMENT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Default Account","target_column":"DEFAULT_ACCOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.account_details.context_menu = []
		this.account_details.views = {}
		this.account_details.onChangecomponent = new EventEmitter<any>()
		this.account_details.show = true
		this.account_details.dynamic_param = {"column_header_name":"Field","value_header_name":"Value"}
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_7"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1666846082411","is_tab_mode":"N","dtt_1304_1666846082411":{"0":[{"dttv_id":"NPSS SM Cust Details SRCH","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Customer Proxy"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_sm_cust_details_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_sm_cust_details_srch"
		
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
	
		// Component level properties - "Navigation" 
		this.navigation.uictrl_code = "dynamic_ui"
		this.navigation.uicgc_desc = "Navigation"
		this.navigation.uicgc_code = "uicgc_8"
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
		
		// "View Account Detail" Button of "Navigation" component
		this.navigation_view_account_detail.label_name = "View Account Detail"
		this.navigation_view_account_detail.show = true
		this.navigation_view_account_detail.disabled = true
		this.navigation_view_account_detail.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.navigation_view_account_detail.dynamic_param = {}
		this.navigation_view_account_detail.role = []
		this.navigation_view_account_detail.action = ""
		
		// "Process Log trg" Button of "Navigation" component
		this.navigation_process_log_trg.label_name = "Process Log trg"
		this.navigation_process_log_trg.show = true
		this.navigation_process_log_trg.disabled = false
		this.navigation_process_log_trg.params = {"icon_only":false,"uicgcc_style":""}
		this.navigation_process_log_trg.dynamic_param = {}
		this.navigation_process_log_trg.role = []
		this.navigation_process_log_trg.action = ""
	
		// Component level properties - "Back UI" 
		this.back_ui.uictrl_code = "dynamic_ui"
		this.back_ui.uicgc_desc = "Back UI"
		this.back_ui.uicgc_code = "uicgc_9"
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
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__cf_on_page_load()
		this.page_load__he_for_pl_trg()
		this.page_load__cc_for_sh_ide()
		this.page_load__he_for_pl_to_vad()
		this.page_load__he_for_back()
	}

	//Handler for INTERNAL event of "cc for sh ide"
	cc_for_sh_ide__internal(parent_event_result){
		this.cc_for_sh_ide__tbc_for_brfq(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "queue"
	queue__selection_changed(){
		this.queue__svm_from_queue()
		this.queue__de_from_queue_to_view_detau()
	}

	//Handler for INTERNAL event of "svm from queue"
	svm_from_queue__internal(){
		this.svm_from_queue__cc_for_sh_ide_for_queue()
	}

	//Handler for INTERNAL event of "cc for sh ide for queue"
	cc_for_sh_ide_for_queue__internal(parent_event_result){
		this.cc_for_sh_ide_for_queue__ssp_from_queue(parent_event_result)
	}

	//Handler for INTERNAL event of "ssp from queue"
	ssp_from_queue__internal(parent_event_result){
		this.ssp_from_queue__brfq_for_customer_list(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for customer list"
	brfq_for_customer_list__internal(parent_event_result){
		this.brfq_for_customer_list__sfr_for_customer_list(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "customer list"
	customer_list__selection_changed(){
		this.customer_list__svm_from_customer_list()
		this.customer_list__ee_for_view_detail_from_customer_list()
	}

	//Handler for INTERNAL event of "svm from customer list"
	svm_from_customer_list__internal(parent_event_result){
		this.svm_from_customer_list__sh_for_svm_in_cl(parent_event_result)
	}

	//Handler for INTERNAL event of "sh for svm in cl"
	sh_for_svm_in_cl__internal(parent_event_result){
		this.sh_for_svm_in_cl__trigger_btn_clicks(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__ssp_by_search_button()
		this.search_search__cui_for_customer_list()
		this.search_search__cui_for_process_list()
		this.search_search__cp_for_search()
	}

	//Handler for INTERNAL event of "ssp by search button"
	ssp_by_search_button__internal(parent_event_result){
		this.ssp_by_search_button__brfq_by_search_to_queue(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq by search to queue"
	brfq_by_search_to_queue__internal(parent_event_result){
		this.brfq_by_search_to_queue__sfr_for_queue(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation process log trg"
	navigation_process_log_trg__action_button_click(){
		this.navigation_process_log_trg__brfq_for_process_log_list()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation view account detail"
	navigation_view_account_detail__action_button_click(){
		this.navigation_view_account_detail__brfq_for_account_list()
		this.navigation_view_account_detail__sp_for_vad()
		this.navigation_view_account_detail__brfq_for_customer_detail()
	}

	//Handler for INTERNAL event of "brfq for account list"
	brfq_for_account_list__internal(parent_event_result){
		this.brfq_for_account_list__sfr_for_account_list(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "account list"
	account_list__selection_changed(){
		this.account_list__svm_for_account_list()
	}

	//Handler for INTERNAL event of "svm for account list"
	svm_for_account_list__internal(parent_event_result){
		this.svm_for_account_list__sh_ide_for_svm_in_al(parent_event_result)
	}

	//Handler for INTERNAL event of "sh ide for svm in al"
	sh_ide_for_svm_in_al__internal(parent_event_result){
		this.sh_ide_for_svm_in_al__brfq_for_account_details(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation search"
	navigation_search__action_button_click(){
		this.navigation_search__sfap_for_search()
		this.navigation_search__cui_for_search()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__cui_search()
	}

	//Handler for ACTION_BUTTON_CLICK event of "back ui back"
	back_ui_back__action_button_click(){
		this.back_ui_back__rs_for_back()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__cf_on_page_load() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666886301314"
		let event_params={"caller_name":"page_load__cf_on_page_load","event_desc":"CF on Page Load","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""}}
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
	page_load__he_for_pl_trg() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_process_log_trg"
		let parent_source_id=""
		let event_code="e_1666886974998"
		let event_params={"caller_name":"page_load__he_for_pl_trg","event_desc":"HE for PL TRG","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__cc_for_sh_ide() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669092431346"
		let event_params={"caller_name":"page_load__cc_for_sh_ide","event_desc":"CC for SH ide","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_sh_ide__tbc_for_brfq,"
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
	page_load__he_for_pl_to_vad() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_view_account_detail"
		let parent_source_id=""
		let event_code="e_1669094535929"
		let event_params={"caller_name":"page_load__he_for_pl_to_vad","event_desc":"HE for PL to VAD","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="back_ui_back"
		let parent_source_id=""
		let event_code="e_1669095007984"
		let event_params={"caller_name":"page_load__he_for_back","event_desc":"HE for back","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for INTERNAL event of "cc for sh ide"
	cc_for_sh_ide__tbc_for_brfq(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_sh_ide"
		let destn_id="search_search"
		let parent_source_id="page_load"
		let event_code="e_1669092477763"
		let event_params={"caller_name":"cc_for_sh_ide__tbc_for_brfq","event_desc":"TBC for BRFQ","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
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
	queue__svm_from_queue() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="queue"
		let parent_source_id=""
		let event_code="e_1666886414804"
		let event_params={"caller_name":"queue__svm_from_queue","event_desc":"SVM from Queue","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_from_queue__cc_for_sh_ide_for_queue,"
		let event_data={"queue":{"e_1666886414804":{"dts":{"dt_1304_1666846042955":{"dtts":{"":{"uicgc_code":"UICGC_1","event_code":"E_1666886414804","dt_code":"DT_1304_1666846042955","dtt_code":"","dt_desc":"NPSS Customer Proxy DTG","dtt_desc":"NPSS Customer Proxy","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"PROCESS_STATUS","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_STATUS","setd3name":"PROCESS_STATUS"},{"type":"LOCAL","column_name":"STATUS","level":"MI_LEVEL","name":"MI_LEVEL_STATUS","setd3name":"STATUS"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1666931663574","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Customer Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666877204635","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666877204809","date_format":false},{"column_name":"TRAN_COUNT","alias_name":"","mq_id":"MQ_1666965101681","date_format":false}],"joins":[]},"eq_text":"SELECT PROCESS_STATUS,        STATUS,        COUNT(STATUS) TRAN_COUNT,        QUEUE_DESC,        Q_SORT_ORDER,        QS_SORT_ORDER   FROM (SELECT T.NPSSCP_ID,                T.PROXY_TYPE,                T.MOBILE,                T.SURNAME,                T.CUSTOMER_NAME,                T.BANK_CODE,                T.GROUP_CODE,                T.BANKUSERID,                T.PRODUCT_CODE,                T.PROXY_VALUE,                T.EMAIL,                T.DOCUMENT_ID,                T.EXHF_ID,                T.CHANNEL_ID,                T.CHANNEL_REFNO,                T.CHANNEL_USERID,                T.CHANNEL_PRODUCT,                T.CHANNEL_SUB_PRODUCT,                T.CHANNEL_TRAN_CODE,                T.PROCESS_STATUS,                T.TENANT_ID,                T.STATUS,                T.CREATED_DATE,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME,                T.CREATED_BY,                T.CREATED_BY_NAME,                T.SYSTEM_ID,                QR.ROLE_ID,                QR.VPH_APP_ID AS QR_APP_ID,                QR.VPH_APP_CODE,                QR.QUEUE_CODE,                QR.SCREEN_NAME AS QR_SCREEN_NAME,                QR.SCREEN_MENU_GROUP AS QR_MENU_GROUP,                QR.SCREEN_MODULE AS QR_MODULE,                PQ.QUEUE_DESC,                PQ.QUEUE_CODE,                PQ.VPH_APP_ID AS Q_APP_ID,                QR.SORT_ORDER AS QS_SORT_ORDER,                PQ.SORT_ORDER AS Q_SORT_ORDER          FROM NPSS_CUSTOMER_PROXY T           LEFT JOIN TRANSACTION_SET TS ON T.NPSSCP_ID = TS.TRN_ID                                       AND T.DTT_CODE = TS.DTT_CODE          INNER JOIN CORE_Q_STATUS_ROLES QR ON T.STATUS =                                               QR.PROCESS_QUEUE_STATUS                                           AND T.PROCESS_STATUS =                                               QR.QUEUE_CODE          INNER JOIN CORE_APP_Q_SETUP PQ ON T.PROCESS_STATUS = PQ.QUEUE_CODE) VM $WHERE  GROUP BY PROCESS_STATUS,           STATUS,           QUEUE_DESC,           Q_SORT_ORDER,           QS_SORT_ORDER"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Customer Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"TRAN_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "queue"
	queue__de_from_queue_to_view_detau() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="navigation_view_account_detail"
		let parent_source_id=""
		let event_code="e_1666887155885"
		let event_params={"caller_name":"queue__de_from_queue_to_view_detau","event_desc":"DE from queue to view detau","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{}}
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

	//Handler for INTERNAL event of "svm from queue"
	svm_from_queue__cc_for_sh_ide_for_queue() { 
		let Dest_Is_ctrl=true
		
		let source_id="svm_from_queue"
		let destn_id=""
		let parent_source_id="queue"
		let event_code="e_1669092545810"
		let event_params={"caller_name":"svm_from_queue__cc_for_sh_ide_for_queue","event_desc":"CC for SH IDE for queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_sh_ide_for_queue__ssp_from_queue,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for sh ide for queue"
	cc_for_sh_ide_for_queue__ssp_from_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_sh_ide_for_queue"
		let destn_id="search"
		let parent_source_id="svm_from_queue"
		let event_code="e_1669092587976"
		let event_params={"caller_name":"cc_for_sh_ide_for_queue__ssp_from_queue","event_desc":"SSP from Queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="ssp_from_queue__brfq_for_customer_list,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp from queue"
	ssp_from_queue__brfq_for_customer_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_from_queue"
		let destn_id="customer_list"
		let parent_source_id="cc_for_sh_ide_for_queue"
		let event_code="e_1669092607592"
		let event_params={"caller_name":"ssp_from_queue__brfq_for_customer_list","event_desc":"BRFQ for Customer List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_customer_list__sfr_for_customer_list,"
		let event_data={}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1666931817713","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Customer Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666878433323","date_format":false},{"column_name":"CUSTOMER_NAME","alias_name":"","mq_id":"MQ_1666878433491","date_format":false},{"column_name":"SURNAME","alias_name":"","mq_id":"MQ_1666878433667","date_format":false},{"column_name":"MOBILE","alias_name":"","mq_id":"MQ_1666878433827","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666878469369","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666878469553","date_format":false},{"column_name":"GROUP_CODE","alias_name":"","mq_id":"MQ_1666878765095","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1666878765271","date_format":false},{"column_name":"PROXY_TYPE","alias_name":"","mq_id":"MQ_1666878809814","date_format":false},{"column_name":"PROXY_VALUE","alias_name":"","mq_id":"MQ_1666878809982","date_format":false},{"column_name":"EMAIL","alias_name":"","mq_id":"MQ_1666878810195","date_format":false},{"column_name":"DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666878839781","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666878840140","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1666878840284","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1666878883828","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1666878898035","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667540623887","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSCP_ID,        PRODUCT_CODE,        BANKUSERID,        GROUP_CODE,        BANK_CODE,        CUSTOMER_NAME,        SURNAME,        MOBILE,        PROXY_TYPE,        PROXY_VALUE,        EMAIL,        DOCUMENT_ID,        EXHF_ID,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        TENANT_ID,        CHANNEL_TRAN_CODE,CREATED_DATE   FROM (SELECT T.NPSSCP_ID,                T.PROXY_TYPE,                T.MOBILE,                T.SURNAME,                T.CUSTOMER_NAME,                T.BANK_CODE,                T.GROUP_CODE,                T.BANKUSERID,                T.PRODUCT_CODE,                T.PROXY_VALUE,                T.EMAIL,                T.DOCUMENT_ID,                T.EXHF_ID,                T.CHANNEL_ID,                T.CHANNEL_REFNO,                T.CHANNEL_USERID,                T.CHANNEL_PRODUCT,                T.CHANNEL_SUB_PRODUCT,                T.CHANNEL_TRAN_CODE,                T.PROCESS_STATUS,                T.TENANT_ID,                T.STATUS,                T.CREATED_DATE,                T.CREATED_BY,                T.CREATED_BY_NAME,                T.SYSTEM_ID           FROM NPSS_CUSTOMER_PROXY T) VM $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Customer Details CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Name","target_column":"CUSTOMER_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Surname","target_column":"SURNAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Mobile","target_column":"MOBILE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for customer list"
	brfq_for_customer_list__sfr_for_customer_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_customer_list"
		let destn_id="customer_list"
		let parent_source_id="ssp_from_queue"
		let event_code="e_1669092622385"
		let event_params={"caller_name":"brfq_for_customer_list__sfr_for_customer_list","event_desc":"SFR for customer list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1666931817713","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Customer Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666878433323","date_format":false},{"column_name":"CUSTOMER_NAME","alias_name":"","mq_id":"MQ_1666878433491","date_format":false},{"column_name":"SURNAME","alias_name":"","mq_id":"MQ_1666878433667","date_format":false},{"column_name":"MOBILE","alias_name":"","mq_id":"MQ_1666878433827","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666878469369","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666878469553","date_format":false},{"column_name":"GROUP_CODE","alias_name":"","mq_id":"MQ_1666878765095","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1666878765271","date_format":false},{"column_name":"PROXY_TYPE","alias_name":"","mq_id":"MQ_1666878809814","date_format":false},{"column_name":"PROXY_VALUE","alias_name":"","mq_id":"MQ_1666878809982","date_format":false},{"column_name":"EMAIL","alias_name":"","mq_id":"MQ_1666878810195","date_format":false},{"column_name":"DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666878839781","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666878840140","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1666878840284","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1666878883828","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1666878898035","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667540623887","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSCP_ID,        PRODUCT_CODE,        BANKUSERID,        GROUP_CODE,        BANK_CODE,        CUSTOMER_NAME,        SURNAME,        MOBILE,        PROXY_TYPE,        PROXY_VALUE,        EMAIL,        DOCUMENT_ID,        EXHF_ID,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        TENANT_ID,        CHANNEL_TRAN_CODE,CREATED_DATE   FROM (SELECT T.NPSSCP_ID,                T.PROXY_TYPE,                T.MOBILE,                T.SURNAME,                T.CUSTOMER_NAME,                T.BANK_CODE,                T.GROUP_CODE,                T.BANKUSERID,                T.PRODUCT_CODE,                T.PROXY_VALUE,                T.EMAIL,                T.DOCUMENT_ID,                T.EXHF_ID,                T.CHANNEL_ID,                T.CHANNEL_REFNO,                T.CHANNEL_USERID,                T.CHANNEL_PRODUCT,                T.CHANNEL_SUB_PRODUCT,                T.CHANNEL_TRAN_CODE,                T.PROCESS_STATUS,                T.TENANT_ID,                T.STATUS,                T.CREATED_DATE,                T.CREATED_BY,                T.CREATED_BY_NAME,                T.SYSTEM_ID           FROM NPSS_CUSTOMER_PROXY T) VM $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Customer Details CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Name","target_column":"CUSTOMER_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Surname","target_column":"SURNAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Mobile","target_column":"MOBILE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "customer list"
	customer_list__svm_from_customer_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="customer_list"
		let destn_id="customer_list"
		let parent_source_id=""
		let event_code="e_1666886672782"
		let event_params={"caller_name":"customer_list__svm_from_customer_list","event_desc":"SVM from Customer List","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"customer_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_from_customer_list__sh_for_svm_in_cl,"
		let event_data={"customer_list":{"e_1666886672782":{"dts":{"dt_1304_1666846042955":{"dtts":{"":{"uicgc_code":"UICGC_2","event_code":"E_1666886672782","dt_code":"DT_1304_1666846042955","dtt_code":"","dt_desc":"NPSS Customer Proxy DTG","dtt_desc":"NPSS Customer Proxy","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"BANKUSERID","level":"MI_LEVEL","name":"MI_LEVEL_BANKUSERID","setd3name":"BANKUSERID"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1666931817713","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Customer Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666878433323","date_format":false},{"column_name":"CUSTOMER_NAME","alias_name":"","mq_id":"MQ_1666878433491","date_format":false},{"column_name":"SURNAME","alias_name":"","mq_id":"MQ_1666878433667","date_format":false},{"column_name":"MOBILE","alias_name":"","mq_id":"MQ_1666878433827","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666878469369","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666878469553","date_format":false},{"column_name":"GROUP_CODE","alias_name":"","mq_id":"MQ_1666878765095","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1666878765271","date_format":false},{"column_name":"PROXY_TYPE","alias_name":"","mq_id":"MQ_1666878809814","date_format":false},{"column_name":"PROXY_VALUE","alias_name":"","mq_id":"MQ_1666878809982","date_format":false},{"column_name":"EMAIL","alias_name":"","mq_id":"MQ_1666878810195","date_format":false},{"column_name":"DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666878839781","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666878840140","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1666878840284","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1666878883828","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1666878898035","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667540623887","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSCP_ID,        PRODUCT_CODE,        BANKUSERID,        GROUP_CODE,        BANK_CODE,        CUSTOMER_NAME,        SURNAME,        MOBILE,        PROXY_TYPE,        PROXY_VALUE,        EMAIL,        DOCUMENT_ID,        EXHF_ID,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        TENANT_ID,        CHANNEL_TRAN_CODE,CREATED_DATE   FROM (SELECT T.NPSSCP_ID,                T.PROXY_TYPE,                T.MOBILE,                T.SURNAME,                T.CUSTOMER_NAME,                T.BANK_CODE,                T.GROUP_CODE,                T.BANKUSERID,                T.PRODUCT_CODE,                T.PROXY_VALUE,                T.EMAIL,                T.DOCUMENT_ID,                T.EXHF_ID,                T.CHANNEL_ID,                T.CHANNEL_REFNO,                T.CHANNEL_USERID,                T.CHANNEL_PRODUCT,                T.CHANNEL_SUB_PRODUCT,                T.CHANNEL_TRAN_CODE,                T.PROCESS_STATUS,                T.TENANT_ID,                T.STATUS,                T.CREATED_DATE,                T.CREATED_BY,                T.CREATED_BY_NAME,                T.SYSTEM_ID           FROM NPSS_CUSTOMER_PROXY T) VM $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Customer Details CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Name","target_column":"CUSTOMER_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Surname","target_column":"SURNAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Mobile","target_column":"MOBILE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "customer list"
	customer_list__ee_for_view_detail_from_customer_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="customer_list"
		let destn_id="navigation_view_account_detail"
		let parent_source_id=""
		let event_code="e_1666887045885"
		let event_params={"caller_name":"customer_list__ee_for_view_detail_from_customer_list","event_desc":"EE for View Detail from Customer List","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"customer_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for INTERNAL event of "svm from customer list"
	svm_from_customer_list__sh_for_svm_in_cl(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_from_customer_list"
		let destn_id=""
		let parent_source_id="customer_list"
		let event_code="e_1669092706790"
		let event_params={"caller_name":"svm_from_customer_list__sh_for_svm_in_cl","event_desc":"SH for SVM in CL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"customer_list","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="sh_for_svm_in_cl__trigger_btn_clicks,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "sh for svm in cl"
	sh_for_svm_in_cl__trigger_btn_clicks(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="sh_for_svm_in_cl"
		let destn_id="navigation_process_log_trg"
		let parent_source_id="svm_from_customer_list"
		let event_code="e_1669092768917"
		let event_params={"caller_name":"sh_for_svm_in_cl__trigger_btn_clicks","event_desc":"Trigger btn clicks","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"customer_list","raiseparam":{},"parent_event_result":"SUCCESS"}
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
	search_search__ssp_by_search_button() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1666886773432"
		let event_params={"caller_name":"search_search__ssp_by_search_button","event_desc":"SSP by Search Button","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="ssp_by_search_button__brfq_by_search_to_queue,"
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
	search_search__cui_for_customer_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="customer_list"
		let parent_source_id=""
		let event_code="e_1666887774342"
		let event_params={"caller_name":"search_search__cui_for_customer_list","event_desc":"CUI for customer list","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1666931817713","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Customer Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666878433323","date_format":false},{"column_name":"CUSTOMER_NAME","alias_name":"","mq_id":"MQ_1666878433491","date_format":false},{"column_name":"SURNAME","alias_name":"","mq_id":"MQ_1666878433667","date_format":false},{"column_name":"MOBILE","alias_name":"","mq_id":"MQ_1666878433827","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666878469369","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666878469553","date_format":false},{"column_name":"GROUP_CODE","alias_name":"","mq_id":"MQ_1666878765095","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1666878765271","date_format":false},{"column_name":"PROXY_TYPE","alias_name":"","mq_id":"MQ_1666878809814","date_format":false},{"column_name":"PROXY_VALUE","alias_name":"","mq_id":"MQ_1666878809982","date_format":false},{"column_name":"EMAIL","alias_name":"","mq_id":"MQ_1666878810195","date_format":false},{"column_name":"DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666878839781","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666878840140","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1666878840284","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1666878883828","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1666878898035","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667540623887","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSCP_ID,        PRODUCT_CODE,        BANKUSERID,        GROUP_CODE,        BANK_CODE,        CUSTOMER_NAME,        SURNAME,        MOBILE,        PROXY_TYPE,        PROXY_VALUE,        EMAIL,        DOCUMENT_ID,        EXHF_ID,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        TENANT_ID,        CHANNEL_TRAN_CODE,CREATED_DATE   FROM (SELECT T.NPSSCP_ID,                T.PROXY_TYPE,                T.MOBILE,                T.SURNAME,                T.CUSTOMER_NAME,                T.BANK_CODE,                T.GROUP_CODE,                T.BANKUSERID,                T.PRODUCT_CODE,                T.PROXY_VALUE,                T.EMAIL,                T.DOCUMENT_ID,                T.EXHF_ID,                T.CHANNEL_ID,                T.CHANNEL_REFNO,                T.CHANNEL_USERID,                T.CHANNEL_PRODUCT,                T.CHANNEL_SUB_PRODUCT,                T.CHANNEL_TRAN_CODE,                T.PROCESS_STATUS,                T.TENANT_ID,                T.STATUS,                T.CREATED_DATE,                T.CREATED_BY,                T.CREATED_BY_NAME,                T.SYSTEM_ID           FROM NPSS_CUSTOMER_PROXY T) VM $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Customer Details CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Name","target_column":"CUSTOMER_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Surname","target_column":"SURNAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Mobile","target_column":"MOBILE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__cui_for_process_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="process_log_list"
		let parent_source_id=""
		let event_code="e_1666887816794"
		let event_params={"caller_name":"search_search__cui_for_process_list","event_desc":"CUI for process list","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666847145490":{"dtt_1304_1666847230281":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1666847145490","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666847230281","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1666932290816","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Customer Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666877412054","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666877412326","date_format":false},{"column_name":"RESULT_CODE","alias_name":"","mq_id":"MQ_1666877412534","date_format":false},{"column_name":"RESULT_MESSAGE","alias_name":"","mq_id":"MQ_1666877412758","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666877413238","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666877451780","date_format":false},{"column_name":"NPSSSMTPL_ID","alias_name":"","mq_id":"MQ_1672059614979","date_format":false}],"joins":[]},"eq_text":"select NPSSSMTPL_ID,  BANKUSERID,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESULT_CODE,  result,  RESULT_MESSAGE,  RESULT_X_REQUEST_ID,  PROCESS_REF_NO,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  TENANT_ID,  DTT_CODE,  DT_CODE,  STATUS,  PROCESS_STATUS,  CHANNEL_TRAN_CODE from  (  select        SM.NPSSSMTPL_ID,   SM.BANKUSERID,   SM.PROCESS_NAME,   SM.PROCESSING_SYSTEM,   SM.RESULT_CODE,   SM.RESULT,   SM.RESULT_MESSAGE,   SM.RESULT_X_REQUEST_ID,   SM.PROCESS_REF_NO,   SM.REQUEST_DATA_JSON,   SM.RESPONSE_DATA_JSON,   SM.CHANNEL_ID,   SM.CHANNEL_REFNO,   SM.CHANNEL_USERID,   SM.CHANNEL_PRODUCT,   SM.CHANNEL_SUB_PRODUCT,   SM.CHANNEL_TRAN_CODE,   SM.PROCESS_STATUS,   SM.TENANT_ID,   SM.CREATED_DATE,   SM.DTT_CODE,   SM.DT_CODE,   SM.STATUS  from   NPSS_SM_TRN_PROCESS_LOG SM) VM $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Customer Process Log CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Result Code","target_column":"RESULT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Result Message","target_column":"RESULT_MESSAGE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let event_code="e_1666931362448"
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

	//Handler for INTERNAL event of "ssp by search button"
	ssp_by_search_button__brfq_by_search_to_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_by_search_button"
		let destn_id="queue"
		let parent_source_id="search_search"
		let event_code="e_1666886797238"
		let event_params={"caller_name":"ssp_by_search_button__brfq_by_search_to_queue","event_desc":"BRFQ by Search to Queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_by_search_to_queue__sfr_for_queue,"
		let event_data={}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1666931663574","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Customer Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666877204635","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666877204809","date_format":false},{"column_name":"TRAN_COUNT","alias_name":"","mq_id":"MQ_1666965101681","date_format":false}],"joins":[]},"eq_text":"SELECT PROCESS_STATUS,        STATUS,        COUNT(STATUS) TRAN_COUNT,        QUEUE_DESC,        Q_SORT_ORDER,        QS_SORT_ORDER   FROM (SELECT T.NPSSCP_ID,                T.PROXY_TYPE,                T.MOBILE,                T.SURNAME,                T.CUSTOMER_NAME,                T.BANK_CODE,                T.GROUP_CODE,                T.BANKUSERID,                T.PRODUCT_CODE,                T.PROXY_VALUE,                T.EMAIL,                T.DOCUMENT_ID,                T.EXHF_ID,                T.CHANNEL_ID,                T.CHANNEL_REFNO,                T.CHANNEL_USERID,                T.CHANNEL_PRODUCT,                T.CHANNEL_SUB_PRODUCT,                T.CHANNEL_TRAN_CODE,                T.PROCESS_STATUS,                T.TENANT_ID,                T.STATUS,                T.CREATED_DATE,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME,                T.CREATED_BY,                T.CREATED_BY_NAME,                T.SYSTEM_ID,                QR.ROLE_ID,                QR.VPH_APP_ID AS QR_APP_ID,                QR.VPH_APP_CODE,                QR.QUEUE_CODE,                QR.SCREEN_NAME AS QR_SCREEN_NAME,                QR.SCREEN_MENU_GROUP AS QR_MENU_GROUP,                QR.SCREEN_MODULE AS QR_MODULE,                PQ.QUEUE_DESC,                PQ.QUEUE_CODE,                PQ.VPH_APP_ID AS Q_APP_ID,                QR.SORT_ORDER AS QS_SORT_ORDER,                PQ.SORT_ORDER AS Q_SORT_ORDER          FROM NPSS_CUSTOMER_PROXY T           LEFT JOIN TRANSACTION_SET TS ON T.NPSSCP_ID = TS.TRN_ID                                       AND T.DTT_CODE = TS.DTT_CODE          INNER JOIN CORE_Q_STATUS_ROLES QR ON T.STATUS =                                               QR.PROCESS_QUEUE_STATUS                                           AND T.PROCESS_STATUS =                                               QR.QUEUE_CODE          INNER JOIN CORE_APP_Q_SETUP PQ ON T.PROCESS_STATUS = PQ.QUEUE_CODE) VM $WHERE  GROUP BY PROCESS_STATUS,           STATUS,           QUEUE_DESC,           Q_SORT_ORDER,           QS_SORT_ORDER"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Customer Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"TRAN_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq by search to queue"
	brfq_by_search_to_queue__sfr_for_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_by_search_to_queue"
		let destn_id="queue"
		let parent_source_id="ssp_by_search_button"
		let event_code="e_1667572271989"
		let event_params={"caller_name":"brfq_by_search_to_queue__sfr_for_queue","event_desc":"SFR for queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1666931663574","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Customer Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666877204635","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666877204809","date_format":false},{"column_name":"TRAN_COUNT","alias_name":"","mq_id":"MQ_1666965101681","date_format":false}],"joins":[]},"eq_text":"SELECT PROCESS_STATUS,        STATUS,        COUNT(STATUS) TRAN_COUNT,        QUEUE_DESC,        Q_SORT_ORDER,        QS_SORT_ORDER   FROM (SELECT T.NPSSCP_ID,                T.PROXY_TYPE,                T.MOBILE,                T.SURNAME,                T.CUSTOMER_NAME,                T.BANK_CODE,                T.GROUP_CODE,                T.BANKUSERID,                T.PRODUCT_CODE,                T.PROXY_VALUE,                T.EMAIL,                T.DOCUMENT_ID,                T.EXHF_ID,                T.CHANNEL_ID,                T.CHANNEL_REFNO,                T.CHANNEL_USERID,                T.CHANNEL_PRODUCT,                T.CHANNEL_SUB_PRODUCT,                T.CHANNEL_TRAN_CODE,                T.PROCESS_STATUS,                T.TENANT_ID,                T.STATUS,                T.CREATED_DATE,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME,                T.CREATED_BY,                T.CREATED_BY_NAME,                T.SYSTEM_ID,                QR.ROLE_ID,                QR.VPH_APP_ID AS QR_APP_ID,                QR.VPH_APP_CODE,                QR.QUEUE_CODE,                QR.SCREEN_NAME AS QR_SCREEN_NAME,                QR.SCREEN_MENU_GROUP AS QR_MENU_GROUP,                QR.SCREEN_MODULE AS QR_MODULE,                PQ.QUEUE_DESC,                PQ.QUEUE_CODE,                PQ.VPH_APP_ID AS Q_APP_ID,                QR.SORT_ORDER AS QS_SORT_ORDER,                PQ.SORT_ORDER AS Q_SORT_ORDER          FROM NPSS_CUSTOMER_PROXY T           LEFT JOIN TRANSACTION_SET TS ON T.NPSSCP_ID = TS.TRN_ID                                       AND T.DTT_CODE = TS.DTT_CODE          INNER JOIN CORE_Q_STATUS_ROLES QR ON T.STATUS =                                               QR.PROCESS_QUEUE_STATUS                                           AND T.PROCESS_STATUS =                                               QR.QUEUE_CODE          INNER JOIN CORE_APP_Q_SETUP PQ ON T.PROCESS_STATUS = PQ.QUEUE_CODE) VM $WHERE  GROUP BY PROCESS_STATUS,           STATUS,           QUEUE_DESC,           Q_SORT_ORDER,           QS_SORT_ORDER"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Customer Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"TRAN_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation process log trg"
	navigation_process_log_trg__brfq_for_process_log_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_process_log_trg"
		let destn_id="process_log_list"
		let parent_source_id=""
		let event_code="e_1666887006351"
		let event_params={"caller_name":"navigation_process_log_trg__brfq_for_process_log_list","event_desc":"BRFQ for Process log list","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_process_log_trg","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666847145490":{"dtt_1304_1666847230281":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1666847145490","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666847230281","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1666932290816","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Customer Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666877412054","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666877412326","date_format":false},{"column_name":"RESULT_CODE","alias_name":"","mq_id":"MQ_1666877412534","date_format":false},{"column_name":"RESULT_MESSAGE","alias_name":"","mq_id":"MQ_1666877412758","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666877413238","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666877451780","date_format":false},{"column_name":"NPSSSMTPL_ID","alias_name":"","mq_id":"MQ_1672059614979","date_format":false}],"joins":[]},"eq_text":"select NPSSSMTPL_ID,  BANKUSERID,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESULT_CODE,  result,  RESULT_MESSAGE,  RESULT_X_REQUEST_ID,  PROCESS_REF_NO,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  TENANT_ID,  DTT_CODE,  DT_CODE,  STATUS,  PROCESS_STATUS,  CHANNEL_TRAN_CODE from  (  select        SM.NPSSSMTPL_ID,   SM.BANKUSERID,   SM.PROCESS_NAME,   SM.PROCESSING_SYSTEM,   SM.RESULT_CODE,   SM.RESULT,   SM.RESULT_MESSAGE,   SM.RESULT_X_REQUEST_ID,   SM.PROCESS_REF_NO,   SM.REQUEST_DATA_JSON,   SM.RESPONSE_DATA_JSON,   SM.CHANNEL_ID,   SM.CHANNEL_REFNO,   SM.CHANNEL_USERID,   SM.CHANNEL_PRODUCT,   SM.CHANNEL_SUB_PRODUCT,   SM.CHANNEL_TRAN_CODE,   SM.PROCESS_STATUS,   SM.TENANT_ID,   SM.CREATED_DATE,   SM.DTT_CODE,   SM.DT_CODE,   SM.STATUS  from   NPSS_SM_TRN_PROCESS_LOG SM) VM $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Customer Process Log CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Result Code","target_column":"RESULT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Result Message","target_column":"RESULT_MESSAGE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation view account detail"
	navigation_view_account_detail__brfq_for_account_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_account_detail"
		let destn_id="account_list"
		let parent_source_id=""
		let event_code="e_1666887258633"
		let event_params={"caller_name":"navigation_view_account_detail__brfq_for_account_list","event_desc":"BRFQ for Account List","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_account_detail","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_account_list__sfr_for_account_list,"
		let event_data={}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846862798":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846862798","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1666931879352","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer Account MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PRODUCT_CODE","alias_name":"","mq_id":"MQ_1666853119720","date_format":false},{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666853119888","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1666853120023","date_format":false},{"column_name":"CURRENCY","alias_name":"","mq_id":"MQ_1666853120191","date_format":false},{"column_name":"INSTANT_PAYMENT","alias_name":"","mq_id":"MQ_1666853120359","date_format":false},{"column_name":"DEFAULT_ACCOUNT","alias_name":"","mq_id":"MQ_1666853121200","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666853121375","date_format":true},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666853162583","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666853162727","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666853162871","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667540553577","date_format":false}],"joins":[]},"eq_text":"select NPSSCA_ID,        PRODUCT_CODE,        BANKUSERID,        IBAN,        CURRENCY,        INSTANT_PAYMENT,        DEFAULT_ACCOUNT,        EXHF_ID,        CREATED_DATE,        DT_CODE,        DTT_CODE,        STATUS,        TENANT_ID,        PROCESS_STATUS   from (select NPSSCA.NPSSCA_ID,                NPSSCA.PRODUCT_CODE,                NPSSCA.BANKUSERID,                NPSSCA.IBAN,                NPSSCA.CURRENCY,                NPSSCA.INSTANT_PAYMENT,                NPSSCA.DEFAULT_ACCOUNT,                NPSSCA.EXHF_ID,                NPSSCA.CREATED_BY,                NPSSCA.CREATED_BY_NAME,                NPSSCA.CREATED_DATE,                NPSSCA.DT_CODE,                NPSSCA.DTT_CODE,                NPSSCA.MODIFIED_BY,                NPSSCA.MODIFIED_DATE,                NPSSCA.STATUS,                NPSSCA.PROCESS_STATUS,                NPSSCA.SYSTEM_ID,                NPSSCA.SYSTEM_NAME,                NPSSCA.TENANT_ID,                NPSSCA.VERSION_NO           from NPSS_CUSTOMER_ACCOUNTS NPSSCA) A $WHERE  order by DEFAULT_ACCOUNT"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Customer Account CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation view account detail"
	navigation_view_account_detail__sp_for_vad() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_account_detail"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666931418797"
		let event_params={"caller_name":"navigation_view_account_detail__sp_for_vad","event_desc":"SP for VAD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_account_detail","raiseparam":{"profile_code":"BTL_1304_1666886156572"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view account detail"
	navigation_view_account_detail__brfq_for_customer_detail() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_account_detail"
		let destn_id="customer_details"
		let parent_source_id=""
		let event_code="e_1669094500602"
		let event_params={"caller_name":"navigation_view_account_detail__brfq_for_customer_detail","event_desc":"BRFQ for Customer Detail","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_account_detail","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1666931758988","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Customer Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666878433323","date_format":false},{"column_name":"CUSTOMER_NAME","alias_name":"","mq_id":"MQ_1666878433491","date_format":false},{"column_name":"SURNAME","alias_name":"","mq_id":"MQ_1666878433667","date_format":false},{"column_name":"MOBILE","alias_name":"","mq_id":"MQ_1666878433827","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666878469369","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666878469553","date_format":false},{"column_name":"GROUP_CODE","alias_name":"","mq_id":"MQ_1666878765095","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1666878765271","date_format":false},{"column_name":"PROXY_TYPE","alias_name":"","mq_id":"MQ_1666878809814","date_format":false},{"column_name":"PROXY_VALUE","alias_name":"","mq_id":"MQ_1666878809982","date_format":false},{"column_name":"EMAIL","alias_name":"","mq_id":"MQ_1666878810195","date_format":false},{"column_name":"DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666878839781","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666878840140","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1666878840284","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1666878883828","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1666878898035","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667540623887","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSCP_ID,        PRODUCT_CODE,        BANKUSERID,        GROUP_CODE,        BANK_CODE,        CUSTOMER_NAME,        SURNAME,        MOBILE,        PROXY_TYPE,        PROXY_VALUE,        EMAIL,        DOCUMENT_ID,        EXHF_ID,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        TENANT_ID,        CHANNEL_TRAN_CODE,CREATED_DATE   FROM (SELECT T.NPSSCP_ID,                T.PROXY_TYPE,                T.MOBILE,                T.SURNAME,                T.CUSTOMER_NAME,                T.BANK_CODE,                T.GROUP_CODE,                T.BANKUSERID,                T.PRODUCT_CODE,                T.PROXY_VALUE,                T.EMAIL,                T.DOCUMENT_ID,                T.EXHF_ID,                T.CHANNEL_ID,                T.CHANNEL_REFNO,                T.CHANNEL_USERID,                T.CHANNEL_PRODUCT,                T.CHANNEL_SUB_PRODUCT,                T.CHANNEL_TRAN_CODE,                T.PROCESS_STATUS,                T.TENANT_ID,                T.STATUS,                T.CREATED_DATE,                T.CREATED_BY,                T.CREATED_BY_NAME,                T.SYSTEM_ID           FROM NPSS_CUSTOMER_PROXY T) VM $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Cust Details Vertical List CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Group Code","target_column":"GROUP_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Bank Code","target_column":"BANK_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Name","target_column":"CUSTOMER_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Surname","target_column":"SURNAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Mobile","target_column":"MOBILE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Proxy Type","target_column":"PROXY_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Proxy Value","target_column":"PROXY_VALUE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email","target_column":"EMAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Document ID","target_column":"DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Ref No","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel UserID","target_column":"CHANNEL_USERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Sub Product","target_column":"CHANNEL_SUB_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Tran Code","target_column":"CHANNEL_TRAN_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for account list"
	brfq_for_account_list__sfr_for_account_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_account_list"
		let destn_id="account_list"
		let parent_source_id="navigation_view_account_detail"
		let event_code="e_1666887289355"
		let event_params={"caller_name":"brfq_for_account_list__sfr_for_account_list","event_desc":"SFR for Account List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_view_account_detail","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846862798":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846862798","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1666931879352","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer Account MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PRODUCT_CODE","alias_name":"","mq_id":"MQ_1666853119720","date_format":false},{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666853119888","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1666853120023","date_format":false},{"column_name":"CURRENCY","alias_name":"","mq_id":"MQ_1666853120191","date_format":false},{"column_name":"INSTANT_PAYMENT","alias_name":"","mq_id":"MQ_1666853120359","date_format":false},{"column_name":"DEFAULT_ACCOUNT","alias_name":"","mq_id":"MQ_1666853121200","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666853121375","date_format":true},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666853162583","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666853162727","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666853162871","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667540553577","date_format":false}],"joins":[]},"eq_text":"select NPSSCA_ID,        PRODUCT_CODE,        BANKUSERID,        IBAN,        CURRENCY,        INSTANT_PAYMENT,        DEFAULT_ACCOUNT,        EXHF_ID,        CREATED_DATE,        DT_CODE,        DTT_CODE,        STATUS,        TENANT_ID,        PROCESS_STATUS   from (select NPSSCA.NPSSCA_ID,                NPSSCA.PRODUCT_CODE,                NPSSCA.BANKUSERID,                NPSSCA.IBAN,                NPSSCA.CURRENCY,                NPSSCA.INSTANT_PAYMENT,                NPSSCA.DEFAULT_ACCOUNT,                NPSSCA.EXHF_ID,                NPSSCA.CREATED_BY,                NPSSCA.CREATED_BY_NAME,                NPSSCA.CREATED_DATE,                NPSSCA.DT_CODE,                NPSSCA.DTT_CODE,                NPSSCA.MODIFIED_BY,                NPSSCA.MODIFIED_DATE,                NPSSCA.STATUS,                NPSSCA.PROCESS_STATUS,                NPSSCA.SYSTEM_ID,                NPSSCA.SYSTEM_NAME,                NPSSCA.TENANT_ID,                NPSSCA.VERSION_NO           from NPSS_CUSTOMER_ACCOUNTS NPSSCA) A $WHERE  order by DEFAULT_ACCOUNT"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Customer Account CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "account list"
	account_list__svm_for_account_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="account_list"
		let destn_id="account_list"
		let parent_source_id=""
		let event_code="e_1666887345528"
		let event_params={"caller_name":"account_list__svm_for_account_list","event_desc":"SVM for Account List","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"account_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_account_list__sh_ide_for_svm_in_al,"
		let event_data={"account_list":{"e_1666887345528":{"dts":{"dt_1304_1666846042955":{"dtts":{"":{"uicgc_code":"UICGC_5","event_code":"E_1666887345528","dt_code":"DT_1304_1666846042955","dtt_code":"","dt_desc":"NPSS Customer Proxy DTG","dtt_desc":"NPSS Customer Proxy","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"NPSSCA_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSSCA_ID","setd3name":"NPSSCA_ID"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846862798":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846862798","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1666931879352","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer Account MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PRODUCT_CODE","alias_name":"","mq_id":"MQ_1666853119720","date_format":false},{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666853119888","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1666853120023","date_format":false},{"column_name":"CURRENCY","alias_name":"","mq_id":"MQ_1666853120191","date_format":false},{"column_name":"INSTANT_PAYMENT","alias_name":"","mq_id":"MQ_1666853120359","date_format":false},{"column_name":"DEFAULT_ACCOUNT","alias_name":"","mq_id":"MQ_1666853121200","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666853121375","date_format":true},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666853162583","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666853162727","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666853162871","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667540553577","date_format":false}],"joins":[]},"eq_text":"select NPSSCA_ID,        PRODUCT_CODE,        BANKUSERID,        IBAN,        CURRENCY,        INSTANT_PAYMENT,        DEFAULT_ACCOUNT,        EXHF_ID,        CREATED_DATE,        DT_CODE,        DTT_CODE,        STATUS,        TENANT_ID,        PROCESS_STATUS   from (select NPSSCA.NPSSCA_ID,                NPSSCA.PRODUCT_CODE,                NPSSCA.BANKUSERID,                NPSSCA.IBAN,                NPSSCA.CURRENCY,                NPSSCA.INSTANT_PAYMENT,                NPSSCA.DEFAULT_ACCOUNT,                NPSSCA.EXHF_ID,                NPSSCA.CREATED_BY,                NPSSCA.CREATED_BY_NAME,                NPSSCA.CREATED_DATE,                NPSSCA.DT_CODE,                NPSSCA.DTT_CODE,                NPSSCA.MODIFIED_BY,                NPSSCA.MODIFIED_DATE,                NPSSCA.STATUS,                NPSSCA.PROCESS_STATUS,                NPSSCA.SYSTEM_ID,                NPSSCA.SYSTEM_NAME,                NPSSCA.TENANT_ID,                NPSSCA.VERSION_NO           from NPSS_CUSTOMER_ACCOUNTS NPSSCA) A $WHERE  order by DEFAULT_ACCOUNT"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Customer Account CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for account list"
	svm_for_account_list__sh_ide_for_svm_in_al(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_account_list"
		let destn_id=""
		let parent_source_id="account_list"
		let event_code="e_1669092817267"
		let event_params={"caller_name":"svm_for_account_list__sh_ide_for_svm_in_al","event_desc":"SH ide for SVM in AL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"account_list","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="sh_ide_for_svm_in_al__brfq_for_account_details,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "sh ide for svm in al"
	sh_ide_for_svm_in_al__brfq_for_account_details(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="sh_ide_for_svm_in_al"
		let destn_id="account_details"
		let parent_source_id="svm_for_account_list"
		let event_code="e_1669092864435"
		let event_params={"caller_name":"sh_ide_for_svm_in_al__brfq_for_account_details","event_desc":"BRFQ for Account Details","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"account_list","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846862798":{"st_ds":{"default":{"uicgc_code":"UICGC_6","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846862798","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1666931865112","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer Account MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PRODUCT_CODE","alias_name":"","mq_id":"MQ_1666853119720","date_format":false},{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666853119888","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1666853120023","date_format":false},{"column_name":"CURRENCY","alias_name":"","mq_id":"MQ_1666853120191","date_format":false},{"column_name":"INSTANT_PAYMENT","alias_name":"","mq_id":"MQ_1666853120359","date_format":false},{"column_name":"DEFAULT_ACCOUNT","alias_name":"","mq_id":"MQ_1666853121200","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666853121375","date_format":true},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666853162583","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666853162727","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666853162871","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667540553577","date_format":false}],"joins":[]},"eq_text":"select NPSSCA_ID,        PRODUCT_CODE,        BANKUSERID,        IBAN,        CURRENCY,        INSTANT_PAYMENT,        DEFAULT_ACCOUNT,        EXHF_ID,        CREATED_DATE,        DT_CODE,        DTT_CODE,        STATUS,        TENANT_ID,        PROCESS_STATUS   from (select NPSSCA.NPSSCA_ID,                NPSSCA.PRODUCT_CODE,                NPSSCA.BANKUSERID,                NPSSCA.IBAN,                NPSSCA.CURRENCY,                NPSSCA.INSTANT_PAYMENT,                NPSSCA.DEFAULT_ACCOUNT,                NPSSCA.EXHF_ID,                NPSSCA.CREATED_BY,                NPSSCA.CREATED_BY_NAME,                NPSSCA.CREATED_DATE,                NPSSCA.DT_CODE,                NPSSCA.DTT_CODE,                NPSSCA.MODIFIED_BY,                NPSSCA.MODIFIED_DATE,                NPSSCA.STATUS,                NPSSCA.PROCESS_STATUS,                NPSSCA.SYSTEM_ID,                NPSSCA.SYSTEM_NAME,                NPSSCA.TENANT_ID,                NPSSCA.VERSION_NO           from NPSS_CUSTOMER_ACCOUNTS NPSSCA) A $WHERE  order by DEFAULT_ACCOUNT"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Account Detail Vertical CCD","filter":[{"filter_name":"NPSSCA_ID","binding_name":"NPSSCA_ID","binding_value":"","source_name":"MI_LEVEL_NPSSCA_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"CURRENCY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Instant Payment","target_column":"INSTANT_PAYMENT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Default Account","target_column":"DEFAULT_ACCOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation search"
	navigation_search__sfap_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666887491770"
		let event_params={"caller_name":"navigation_search__sfap_for_search","event_desc":"SFAP for Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__sfap_for_search","selector":"p_search_layout","profile_code":"BTL_1304_1666887407266","window_title":"Search","window_height":"","window_width":"auto","window_close_icon":"Y","eventdes":"sfap_for_search","eventcode":"E_1666887491770"}}
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
	navigation_search__cui_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1666931389559"
		let event_params={"caller_name":"navigation_search__cui_for_search","event_desc":"CUI for search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_search","raiseparam":{"need_reset_key_column":"N"}}
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
	search_clear__cui_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_clear"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1666887542206"
		let event_params={"caller_name":"search_clear__cui_search","event_desc":"CUI Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_clear","raiseparam":{"need_reset_key_column":"N"}}
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
	back_ui_back__rs_for_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1667021280239"
		let event_params={"caller_name":"back_ui_back__rs_for_back","event_desc":"RS for Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"back_ui_back","raiseparam":{}}
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
