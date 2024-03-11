/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34701 
Modified By     : Admin 
Modified Date   : 2024-Mar-11 6:28 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_merchant_details
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {npss_cs_update_mch_tagService} from '../../../custom_widget/npss_cs_update_mch_tag/npss_cs_update_mch_tag.service'
import {npss_c_qr_code_generatorService} from '../../../custom_widget/npss_c_qr_code_generator/npss_c_qr_code_generator.service'

@Component({
	selector: 's_view_merchant_details',
	templateUrl: './s_view_merchant_details.component.html',
	styleUrls: ['./s_view_merchant_details.component.css'],
	providers:[npss_cs_update_mch_tagService,npss_c_qr_code_generatorService]
})
    
// Start of class 
export class s_view_merchant_detailsComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_view_merchant_details"
	wftpa_id : string = "WFT_NPSS_P_1304_1666941961881_0"
	cg_code : string = "CG_1304_1666936639305"
	key_column : any = {"dtt_1304_1666846129395":"NPSSMP_ID","dtt_1304_1666847369565":"NPSSMA_ID","dtt_1304_1666847660575":"NPSSMS_ID","dtt_1304_1666848298941":"NPSSMC_ID","dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID","dtt_1304_1670492310194":"NPSSASP_ID","dtt_1304_1670589169341":"NPSSCAPL_ID","dtt_1304_1672928670076":"NPSSNL_ID","dtt_1304_1674198360280":"NPSSE_ID","dtt_1304_1681973868376":"NPSSPSR_ID","dtt_1304_1681974712398":"NPSSSBR_ID","dtt_1304_1681974988885":"NPSSBFSR_ID","dtt_1304_1695130590062":"NPSSNPPL_ID","dtt_1304_1695214768145":"NAL_ID","dtt_1304_1700459090330":"NPSSPN_ID","dtt_1304_1701251364899":"NPSSPNB_ID","dtt_1304_1707202677013":"NPSSFE_ID","dtt_1304_1666847230281":"NPSSSMTPL_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "queue"
	uicgc_2 : string = "merchant_list"
	uicgc_3 : string = "process_log_list"
	uicgc_4 : string = "merchant_details"
	uicgc_5 : string = "account_list"
	uicgc_6 : string = "account_details"
	uicgc_7 : string = "search"
	uicgc_8 : string = "navigation"
	uicgc_9 : string = "back_ui"
	uicgc_10 : string = "shop_list"
	uicgc_11 : string = "shop_detail"
	uicgc_12 : string = "cash_desk_list"
	uicgc_13 : string = "cash_desk_detail"
	uicgc_14 : string = "payor_information"
	uicgc_15 : string = "payee_information"
	uicgc_16 : string = "qr_ui"
	uicgc_17 : string = "npss_qr_widget"
	key_events : any = {}
	btl_1304_1680249522621 : string = "p_qr_layout"
	btl_1304_1666940042844 : string = "p_cash_desk_layout"
	btl_1304_1666939457517 : string = "p_view_shop_layout"
	btl_1304_1666887407266 : string = "p_search_layout"
	btl_1304_1666886156572 : string = "p_view_account_layout"
	btl_1304_1666886091955 : string = "p_main_layout"
	forms : any = ["uicgc_14","uicgc_15","uicgc_7","uicgc_16","uicgc_8"]
	p_search_layout__sfap_for_search_showpopup : boolean = false
	queue : any = {}
	merchant_list : any = {}
	process_log_list : any = {}
	merchant_details : any = {}
	account_list : any = {}
	account_details : any = {}
	search : any = {}
	search_clear : any = {}
	search_search : any = {}
	navigation : any = {}
	navigation_search : any = {}
	navigation_back_to_main : any = {}
	navigation_view_account_detail : any = {}
	navigation_view_shop_detail : any = {}
	navigation_view_cash_desk_detail : any = {}
	navigation_process_log_trg : any = {}
	navigation_generate_merchant_tag : any = {}
	navigation_generate_qr : any = {}
	back_ui : any = {}
	back_ui_back : any = {}
	shop_list : any = {}
	shop_detail : any = {}
	cash_desk_list : any = {}
	cash_desk_detail : any = {}
	payor_information : any = {}
	payee_information : any = {}
	qr_ui : any = {}
	qr_ui_generate_qr_code : any = {}
	qr_ui_close : any = {}
	npss_qr_widget : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private npss_cs_update_mch_tagService:npss_cs_update_mch_tagService,private npss_c_qr_code_generatorService:npss_c_qr_code_generatorService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Queue" 
		this.queue.uictrl_code = "datatable"
		this.queue.uicgc_desc = "Queue"
		this.queue.uicgc_code = "uicgc_1"
		this.queue.params = {"need_pag_datatable":"Y","need_search":"N"}
		this.queue.datasource = {"default":{"dt_1304_1666846074129":{"dtt_1304_1666846129395":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666846129395","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666942113596","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"process_status","alias_name":"","mq_id":"MQ_1666876780612","date_format":false},{"column_name":"status","alias_name":"","mq_id":"MQ_1666876781002","date_format":false},{"column_name":"TRAN_COUNT","alias_name":"","mq_id":"MQ_1666964625441","date_format":false}],"joins":[]},"eq_text":"SELECT PROCESS_STATUS,        STATUS,        COUNT(STATUS) TRAN_COUNT,        QUEUE_DESC,        Q_SORT_ORDER,        QS_SORT_ORDER   FROM (SELECT T.NPSSMP_ID,                T.PRODUCT_CODE,                T.BANKUSERID,                T.GROUP_CODE,                T.BANK_CODE,                T.MERCHANT_TAG,                T.MERCHANT_NAME,                T.SURNAME,                T.DENOMINATION,                T.VAT_NUMBER,                T.MCC,                T.MOBILE,                T.PROXY_TYPE,                T.PROXY_VALUE,                T.EMAIL,                T.DOCUMENT_ID,                T.CHANNEL_NAME,                T.LOGO,                T.EXHF_ID,                T.CHANNEL_ID,                T.CHANNEL_USERID,                T.CHANNEL_PRODUCT,                T.CHANNEL_SUB_PRODUCT,                T.CHANNEL_TRAN_CODE,                T.CHANNEL_REFNO,                T.PROCESS_STATUS,                T.TENANT_ID,                T.STATUS,                T.CREATED_DATE,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME,                T.CREATED_BY,                T.CREATED_BY_NAME,                T.SYSTEM_ID,                QR.ROLE_ID,                QR.VPH_APP_ID AS QR_APP_ID,                QR.VPH_APP_CODE,                QR.QUEUE_CODE,                QR.SCREEN_NAME AS QR_SCREEN_NAME,                QR.SCREEN_MENU_GROUP AS QR_MENU_GROUP,                QR.SCREEN_MODULE AS QR_MODULE,                PQ.QUEUE_DESC,                PQ.QUEUE_CODE,                PQ.VPH_APP_ID AS Q_APP_ID,                QR.SORT_ORDER AS QS_SORT_ORDER,                PQ.SORT_ORDER AS Q_SORT_ORDER           FROM NPSS_MERCHANT_PROXY T          LEFT JOIN TRANSACTION_SET TS ON T.NPSSMP_ID = TS.TRN_ID                                       AND T.DTT_CODE = TS.DTT_CODE          INNER JOIN <tran_db>.CORE_Q_STATUS_ROLES QR ON T.STATUS =                                               QR.PROCESS_QUEUE_STATUS                                           AND T.PROCESS_STATUS =                                               QR.QUEUE_CODE          INNER JOIN <tran_db>.CORE_APP_Q_SETUP PQ ON T.PROCESS_STATUS = PQ.QUEUE_CODE) VM $WHERE  GROUP BY PROCESS_STATUS, STATUS, QUEUE_DESC, Q_SORT_ORDER, QS_SORT_ORDER"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"process_status","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"status","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"TRAN_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.queue.context_menu = []
		this.queue.views = {}
		this.queue.onChangecomponent = new EventEmitter<any>()
		this.queue.show = true
		this.queue.dynamic_param = {}
	
		// Component level properties - "Merchant List" 
		this.merchant_list.uictrl_code = "datatable"
		this.merchant_list.uicgc_desc = "Merchant List"
		this.merchant_list.uicgc_code = "uicgc_2"
		this.merchant_list.params = {"need_pag_datatable":"Y","need_search":"N"}
		this.merchant_list.datasource = {"default":{"dt_1304_1666846074129":{"dtt_1304_1666846129395":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666846129395","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666942281475","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666878546556","date_format":false},{"column_name":"MERCHANT_NAME","alias_name":"","mq_id":"MQ_1666878546755","date_format":false},{"column_name":"MERCHANT_TAG","alias_name":"","mq_id":"MQ_1666878547035","date_format":false},{"column_name":"MCC","alias_name":"","mq_id":"MQ_1666878547491","date_format":false},{"column_name":"MOBILE","alias_name":"","mq_id":"MQ_1666878578991","date_format":false},{"column_name":"DENOMINATION","alias_name":"","mq_id":"MQ_1666878579343","date_format":false},{"column_name":"VAT_NUMBER","alias_name":"","mq_id":"MQ_1666878595391","date_format":false},{"column_name":"SURNAME","alias_name":"","mq_id":"MQ_1666879178543","date_format":false},{"column_name":"GROUP_CODE","alias_name":"","mq_id":"MQ_1666879178805","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1666879179269","date_format":false},{"column_name":"PROXY_TYPE","alias_name":"","mq_id":"MQ_1666879214612","date_format":false},{"column_name":"PROXY_VALUE","alias_name":"","mq_id":"MQ_1666879214956","date_format":false},{"column_name":"EMAIL","alias_name":"","mq_id":"MQ_1666879215132","date_format":false},{"column_name":"DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666879215308","date_format":false},{"column_name":"CHANNEL_NAME","alias_name":"","mq_id":"MQ_1666879258954","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666879259178","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666879259474","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1666879260146","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666879260394","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1666879260634","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1666879353178","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666881334242","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666881334807","date_format":false},{"column_name":"NPSSMP_ID","alias_name":"","mq_id":"MQ_1667366107578","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMP_ID,BANKUSERID,        MERCHANT_NAME,        MERCHANT_TAG,        MCC,        MOBILE,        DENOMINATION,        VAT_NUMBER,        SURNAME,        GROUP_CODE,        BANK_CODE,        PROXY_TYPE,        PROXY_VALUE,        EMAIL,        DOCUMENT_ID,        CHANNEL_NAME,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        CREATED_DATE,        STATUS,        PROCESS_STATUS,        TENANT_ID,        DTT_CODE,        DT_CODE   FROM (SELECT T.NPSSMP_ID,                T.BANKUSERID,                T.MERCHANT_NAME,                T.MERCHANT_TAG,                T.MCC,                T.MOBILE,                T.DENOMINATION,                T.VAT_NUMBER,                T.PRODUCT_CODE,                T.GROUP_CODE,                T.BANK_CODE,                T.SURNAME,                T.PROXY_TYPE,                T.PROXY_VALUE,                T.EMAIL,                T.DOCUMENT_ID,                T.CHANNEL_NAME,                T.LOGO,                T.EXHF_ID,                T.CHANNEL_ID,                T.CHANNEL_USERID,                T.CHANNEL_PRODUCT,                T.CHANNEL_SUB_PRODUCT,                T.CHANNEL_TRAN_CODE,                T.CHANNEL_REFNO,                T.CREATED_DATE,                T.STATUS,                T.PROCESS_STATUS,                T.TENANT_ID,                T.DTT_CODE,                T.DT_CODE           FROM NPSS_MERCHANT_PROXY T) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Details CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Name","target_column":"MERCHANT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Tag","target_column":"MERCHANT_TAG","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"MCC","target_column":"MCC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Mobile","target_column":"MOBILE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Denomination","target_column":"DENOMINATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"VAT Number","target_column":"VAT_NUMBER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.merchant_list.context_menu = []
		this.merchant_list.views = {}
		this.merchant_list.onChangecomponent = new EventEmitter<any>()
		this.merchant_list.show = true
		this.merchant_list.dynamic_param = {}
	
		// Component level properties - "Process Log List" 
		this.process_log_list.uictrl_code = "datatable"
		this.process_log_list.uicgc_desc = "Process Log List"
		this.process_log_list.uicgc_code = "uicgc_3"
		this.process_log_list.params = {"need_pag_datatable":"Y","need_search":"N"}
		this.process_log_list.datasource = {"default":{"dt_1304_1666847145490":{"dtt_1304_1666847230281":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1666847145490","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847230281","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666944577464","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Customer Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666877412054","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666877412326","date_format":false},{"column_name":"RESULT_CODE","alias_name":"","mq_id":"MQ_1666877412534","date_format":false},{"column_name":"RESULT_MESSAGE","alias_name":"","mq_id":"MQ_1666877412758","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666877413238","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666877451780","date_format":false},{"column_name":"NPSSSMTPL_ID","alias_name":"","mq_id":"MQ_1672059614979","date_format":false}],"joins":[]},"eq_text":"select NPSSSMTPL_ID,  BANKUSERID,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESULT_CODE,  result,  RESULT_MESSAGE,  RESULT_X_REQUEST_ID,  PROCESS_REF_NO,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  TENANT_ID,  DTT_CODE,  DT_CODE,  STATUS,  PROCESS_STATUS,  CHANNEL_TRAN_CODE from  (  select        SM.NPSSSMTPL_ID,   SM.BANKUSERID,   SM.PROCESS_NAME,   SM.PROCESSING_SYSTEM,   SM.RESULT_CODE,   SM.RESULT,   SM.RESULT_MESSAGE,   SM.RESULT_X_REQUEST_ID,   SM.PROCESS_REF_NO,   SM.REQUEST_DATA_JSON,   SM.RESPONSE_DATA_JSON,   SM.CHANNEL_ID,   SM.CHANNEL_REFNO,   SM.CHANNEL_USERID,   SM.CHANNEL_PRODUCT,   SM.CHANNEL_SUB_PRODUCT,   SM.CHANNEL_TRAN_CODE,   SM.PROCESS_STATUS,   SM.TENANT_ID,   SM.CREATED_DATE,   SM.DTT_CODE,   SM.DT_CODE,   SM.STATUS  from   NPSS_SM_TRN_PROCESS_LOG SM) VM $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Customer Process Log CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Result Code","target_column":"RESULT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Result Message","target_column":"RESULT_MESSAGE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.process_log_list.context_menu = []
		this.process_log_list.views = {}
		this.process_log_list.onChangecomponent = new EventEmitter<any>()
		this.process_log_list.show = true
		this.process_log_list.dynamic_param = {}
	
		// Component level properties - "Merchant Details" 
		this.merchant_details.uictrl_code = "datatable"
		this.merchant_details.uicgc_desc = "Merchant Details"
		this.merchant_details.uicgc_code = "uicgc_4"
		this.merchant_details.params = {"need_search":"N","need_vertical":"Y"}
		this.merchant_details.datasource = {"default":{"dt_1304_1666846074129":{"dtt_1304_1666846129395":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666846129395","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666942341120","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666878546556","date_format":false},{"column_name":"MERCHANT_NAME","alias_name":"","mq_id":"MQ_1666878546755","date_format":false},{"column_name":"MERCHANT_TAG","alias_name":"","mq_id":"MQ_1666878547035","date_format":false},{"column_name":"MCC","alias_name":"","mq_id":"MQ_1666878547491","date_format":false},{"column_name":"MOBILE","alias_name":"","mq_id":"MQ_1666878578991","date_format":false},{"column_name":"DENOMINATION","alias_name":"","mq_id":"MQ_1666878579343","date_format":false},{"column_name":"VAT_NUMBER","alias_name":"","mq_id":"MQ_1666878595391","date_format":false},{"column_name":"SURNAME","alias_name":"","mq_id":"MQ_1666879178543","date_format":false},{"column_name":"GROUP_CODE","alias_name":"","mq_id":"MQ_1666879178805","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1666879179269","date_format":false},{"column_name":"PROXY_TYPE","alias_name":"","mq_id":"MQ_1666879214612","date_format":false},{"column_name":"PROXY_VALUE","alias_name":"","mq_id":"MQ_1666879214956","date_format":false},{"column_name":"EMAIL","alias_name":"","mq_id":"MQ_1666879215132","date_format":false},{"column_name":"DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666879215308","date_format":false},{"column_name":"CHANNEL_NAME","alias_name":"","mq_id":"MQ_1666879258954","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666879259178","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666879259474","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1666879260146","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666879260394","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1666879260634","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1666879353178","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666881334242","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666881334807","date_format":false},{"column_name":"NPSSMP_ID","alias_name":"","mq_id":"MQ_1667366107578","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMP_ID,BANKUSERID,        MERCHANT_NAME,        MERCHANT_TAG,        MCC,        MOBILE,        DENOMINATION,        VAT_NUMBER,        SURNAME,        GROUP_CODE,        BANK_CODE,        PROXY_TYPE,        PROXY_VALUE,        EMAIL,        DOCUMENT_ID,        CHANNEL_NAME,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        CREATED_DATE,        STATUS,        PROCESS_STATUS,        TENANT_ID,        DTT_CODE,        DT_CODE   FROM (SELECT T.NPSSMP_ID,                T.BANKUSERID,                T.MERCHANT_NAME,                T.MERCHANT_TAG,                T.MCC,                T.MOBILE,                T.DENOMINATION,                T.VAT_NUMBER,                T.PRODUCT_CODE,                T.GROUP_CODE,                T.BANK_CODE,                T.SURNAME,                T.PROXY_TYPE,                T.PROXY_VALUE,                T.EMAIL,                T.DOCUMENT_ID,                T.CHANNEL_NAME,                T.LOGO,                T.EXHF_ID,                T.CHANNEL_ID,                T.CHANNEL_USERID,                T.CHANNEL_PRODUCT,                T.CHANNEL_SUB_PRODUCT,                T.CHANNEL_TRAN_CODE,                T.CHANNEL_REFNO,                T.CREATED_DATE,                T.STATUS,                T.PROCESS_STATUS,                T.TENANT_ID,                T.DTT_CODE,                T.DT_CODE           FROM NPSS_MERCHANT_PROXY T) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Details Vertical List CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Name","target_column":"MERCHANT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Surname","target_column":"SURNAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Tag","target_column":"MERCHANT_TAG","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"MCC","target_column":"MCC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Mobile","target_column":"MOBILE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Denomination","target_column":"DENOMINATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"VAT Number","target_column":"VAT_NUMBER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Group Code","target_column":"GROUP_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Bank Code","target_column":"BANK_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Proxy Type","target_column":"PROXY_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Proxy Value","target_column":"PROXY_VALUE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email","target_column":"EMAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Document ID","target_column":"DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Name","target_column":"CHANNEL_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Ref No","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel UserID","target_column":"CHANNEL_USERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Sub Product","target_column":"CHANNEL_SUB_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Tran Code","target_column":"CHANNEL_TRAN_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.merchant_details.context_menu = []
		this.merchant_details.views = {}
		this.merchant_details.onChangecomponent = new EventEmitter<any>()
		this.merchant_details.show = true
		this.merchant_details.dynamic_param = {"column_header_name":"Field","value_header_name":"Value"}
	
		// Component level properties - "Account List" 
		this.account_list.uictrl_code = "datatable"
		this.account_list.uicgc_desc = "Account List"
		this.account_list.uicgc_code = "uicgc_5"
		this.account_list.params = {"need_pag_datatable":"Y","need_search":"N"}
		this.account_list.datasource = {"default":{"dt_1304_1666846074129":{"dtt_1304_1666847369565":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847369565","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666943062148","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Merchant Accounts","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMA_ID","alias_name":"","mq_id":"MQ_1666855785825","date_format":false},{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666942645589","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1666942646115","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666942646371","date_format":false},{"column_name":"CURRENCY","alias_name":"","mq_id":"MQ_1666942702794","date_format":false},{"column_name":"DEFAULT_ACCOUNT","alias_name":"","mq_id":"MQ_1666942702970","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1699879865034","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1699879871032","date_format":false}],"joins":[]},"eq_text":"select  NPSSMA_ID,  NPSSMP_ID,  PRODUCT_CODE,  BANKUSERID,  IBAN,  CURRENCY,  DEFAULT_ACCOUNT,  EXHF_ID,  CREATED_DATE,  DT_CODE,  DTT_CODE,  TENANT_ID,  STATUS,  PROCESS_STATUS from  (  select   MA.NPSSMA_ID,   MA.NPSSMP_ID,   MA.PRODUCT_CODE,   MA.BANKUSERID,   MA.IBAN,   MA.CURRENCY,   MA.DEFAULT_ACCOUNT,   MA.EXHF_ID,   MA.CREATED_BY,   MA.CREATED_BY_NAME,   MA.CREATED_DATE,   MA.DT_CODE,   MA.DTT_CODE,   MA.MODIFIED_BY,   MA.MODIFIED_DATE,   MA.STATUS,   MA.PROCESS_STATUS,   MA.SYSTEM_ID,   MA.SYSTEM_NAME,   MA.TENANT_ID,   MA.VERSION_NO  from   NPSS_MERCHANT_ACCOUNTS MA) A $WHERE order by  NPSSMA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS merchant accounts CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"BANKUSERID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		this.account_details.datasource = {"default":{"dt_1304_1666846074129":{"dtt_1304_1666847369565":{"st_ds":{"default":{"uicgc_code":"UICGC_6","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847369565","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666943032609","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Merchant Accounts","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMA_ID","alias_name":"","mq_id":"MQ_1666855785825","date_format":false},{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666942645589","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1666942646115","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666942646371","date_format":false},{"column_name":"CURRENCY","alias_name":"","mq_id":"MQ_1666942702794","date_format":false},{"column_name":"DEFAULT_ACCOUNT","alias_name":"","mq_id":"MQ_1666942702970","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1699879865034","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1699879871032","date_format":false}],"joins":[]},"eq_text":"select  NPSSMA_ID,  NPSSMP_ID,  PRODUCT_CODE,  BANKUSERID,  IBAN,  CURRENCY,  DEFAULT_ACCOUNT,  EXHF_ID,  CREATED_DATE,  DT_CODE,  DTT_CODE,  TENANT_ID,  STATUS,  PROCESS_STATUS from  (  select   MA.NPSSMA_ID,   MA.NPSSMP_ID,   MA.PRODUCT_CODE,   MA.BANKUSERID,   MA.IBAN,   MA.CURRENCY,   MA.DEFAULT_ACCOUNT,   MA.EXHF_ID,   MA.CREATED_BY,   MA.CREATED_BY_NAME,   MA.CREATED_DATE,   MA.DT_CODE,   MA.DTT_CODE,   MA.MODIFIED_BY,   MA.MODIFIED_DATE,   MA.STATUS,   MA.PROCESS_STATUS,   MA.SYSTEM_ID,   MA.SYSTEM_NAME,   MA.TENANT_ID,   MA.VERSION_NO  from   NPSS_MERCHANT_ACCOUNTS MA) A $WHERE order by  NPSSMA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS merchant accounts ver CCD","filter":[{"filter_name":"NPSSMA_ID","binding_name":"NPSSMA_ID","binding_value":"","source_name":"MI_LEVEL_NPSSMA_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"CURRENCY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Default Account","target_column":"DEFAULT_ACCOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		this.search.views = {"first":"DTT_1304_1666846129395","is_tab_mode":"N","dtt_1304_1666846129395":{"0":[{"dttv_id":"NPSS SM Merchant Details SRCH","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Merchant Proxy"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_sm_merchant_details_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_sm_merchant_details_srch"
		
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
		
		// "Back to Main" Button of "Navigation" component
		this.navigation_back_to_main.label_name = "Back to Main"
		this.navigation_back_to_main.show = true
		this.navigation_back_to_main.disabled = false
		this.navigation_back_to_main.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.navigation_back_to_main.dynamic_param = {}
		this.navigation_back_to_main.role = []
		this.navigation_back_to_main.action = ""
		
		// "View Account Detail" Button of "Navigation" component
		this.navigation_view_account_detail.label_name = "View Account Detail"
		this.navigation_view_account_detail.show = true
		this.navigation_view_account_detail.disabled = true
		this.navigation_view_account_detail.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.navigation_view_account_detail.dynamic_param = {}
		this.navigation_view_account_detail.role = []
		this.navigation_view_account_detail.action = ""
		
		// "View Shop Detail" Button of "Navigation" component
		this.navigation_view_shop_detail.label_name = "View Shop Detail"
		this.navigation_view_shop_detail.show = true
		this.navigation_view_shop_detail.disabled = true
		this.navigation_view_shop_detail.params = {"icon_only":false,"uicgcc_style":"fa fa-shopping-cart"}
		this.navigation_view_shop_detail.dynamic_param = {}
		this.navigation_view_shop_detail.role = []
		this.navigation_view_shop_detail.action = ""
		
		// "View Cash Desk Detail" Button of "Navigation" component
		this.navigation_view_cash_desk_detail.label_name = "View Cash Desk Detail"
		this.navigation_view_cash_desk_detail.show = true
		this.navigation_view_cash_desk_detail.disabled = true
		this.navigation_view_cash_desk_detail.params = {"icon_only":false,"uicgcc_style":"fa fa-money"}
		this.navigation_view_cash_desk_detail.dynamic_param = {}
		this.navigation_view_cash_desk_detail.role = []
		this.navigation_view_cash_desk_detail.action = ""
		
		// "Process Log trg" Button of "Navigation" component
		this.navigation_process_log_trg.label_name = "Process Log trg"
		this.navigation_process_log_trg.show = true
		this.navigation_process_log_trg.disabled = false
		this.navigation_process_log_trg.params = {"icon_only":false,"uicgcc_style":""}
		this.navigation_process_log_trg.dynamic_param = {}
		this.navigation_process_log_trg.role = []
		this.navigation_process_log_trg.action = ""
		
		// "Generate Merchant Tag" Button of "Navigation" component
		this.navigation_generate_merchant_tag.label_name = "Generate Merchant Tag"
		this.navigation_generate_merchant_tag.show = true
		this.navigation_generate_merchant_tag.disabled = false
		this.navigation_generate_merchant_tag.params = {"icon_only":false,"uicgcc_style":"fa fa-creative-commons"}
		this.navigation_generate_merchant_tag.dynamic_param = {}
		this.navigation_generate_merchant_tag.role = ["699","705","708","709","730","737","738","741","742"]
		this.navigation_generate_merchant_tag.action = "hide"
		
		// "Generate QR" Button of "Navigation" component
		this.navigation_generate_qr.label_name = "Generate QR"
		this.navigation_generate_qr.show = true
		this.navigation_generate_qr.disabled = false
		this.navigation_generate_qr.params = {"icon_only":false,"uicgcc_style":"fa fa-qrcode"}
		this.navigation_generate_qr.dynamic_param = {}
		this.navigation_generate_qr.role = ["699","705","708","709","730","737","738","741","742"]
		this.navigation_generate_qr.action = "hide"
	
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
		
		// "Back" Button of "Back UI" component
		this.back_ui_back.label_name = "Back"
		this.back_ui_back.show = true
		this.back_ui_back.disabled = false
		this.back_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.back_ui_back.dynamic_param = {}
		this.back_ui_back.role = []
		this.back_ui_back.action = ""
	
		// Component level properties - "Shop List" 
		this.shop_list.uictrl_code = "datatable"
		this.shop_list.uicgc_desc = "Shop List"
		this.shop_list.uicgc_code = "uicgc_10"
		this.shop_list.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.shop_list.datasource = {"default":{"dt_1304_1666846074129":{"dtt_1304_1666847660575":{"st_ds":{"default":{"uicgc_code":"UICGC_10","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847660575","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666942896186","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Shop Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666932220178","date_format":false},{"column_name":"SHOP_MID","alias_name":"","mq_id":"MQ_1666932220593","date_format":false},{"column_name":"SHOP_NAME","alias_name":"","mq_id":"MQ_1666932220745","date_format":false},{"column_name":"SHOP_ID","alias_name":"","mq_id":"MQ_1666932220913","date_format":false},{"column_name":"SHOP_TYPE","alias_name":"","mq_id":"MQ_1666932221257","date_format":false},{"column_name":"SHOP_MCC","alias_name":"","mq_id":"MQ_1666932221417","date_format":false},{"column_name":"SHOP_IBAN","alias_name":"","mq_id":"MQ_1666932221577","date_format":false},{"column_name":"BUILDING","alias_name":"","mq_id":"MQ_1666932222401","date_format":false},{"column_name":"STREET","alias_name":"","mq_id":"MQ_1666932222561","date_format":false},{"column_name":"CITY","alias_name":"","mq_id":"MQ_1666932288472","date_format":false},{"column_name":"POSTAL_CODE","alias_name":"","mq_id":"MQ_1666932288632","date_format":false},{"column_name":"COUNTY","alias_name":"","mq_id":"MQ_1666932289064","date_format":false},{"column_name":"COUNTRY","alias_name":"","mq_id":"MQ_1666932350992","date_format":false},{"column_name":"NPSSMS_ID","alias_name":"","mq_id":"MQ_1667366133634","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1699879751949","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1699879761283","date_format":false}],"joins":[]},"eq_text":"select  NPSSMS_ID,  NPSSMP_ID,  BANKUSERID,  SHOP_MID,  SHOP_NAME,  SHOP_ID,  SHOP_TYPE,  SHOP_MCC,  SHOP_IBAN,  BUILDING,  STREET,  CITY,  POSTAL_CODE,  COUNTY,  COUNTRY,  STATUS,  PROCESS_STATUS,  TENANT_ID,  CREATED_DATE,  DT_CODE,  DTT_CODE from  (  select   S.NPSSMS_ID,   s.NPSSMP_ID,   S.PRODUCT_CODE,   S.BANKUSERID,   S.SHOP_NAME,   S.SHOP_MID,   S.SHOP_ID,   S.SHOP_TYPE,   S.SHOP_MCC,   S.SHOP_IBAN,   S.BUILDING,   S.STREET,   S.CITY,   S.POSTAL_CODE,   S.COUNTY,   S.COUNTRY,   S.EXHF_ID,   S.STATUS,   S.PROCESS_STATUS,   S.TENANT_ID,   S.CREATED_DATE,   S.DTT_CODE,   S.DT_CODE  from   NPSS_MERCHANT_SHOPS S) VW $WHERE order by  NPSSMS_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Shop Details Horizontal CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop MID","target_column":"SHOP_MID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop Name","target_column":"SHOP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.shop_list.context_menu = []
		this.shop_list.views = {}
		this.shop_list.onChangecomponent = new EventEmitter<any>()
		this.shop_list.show = true
		this.shop_list.dynamic_param = {}
	
		// Component level properties - "Shop Detail" 
		this.shop_detail.uictrl_code = "datatable"
		this.shop_detail.uicgc_desc = "Shop Detail"
		this.shop_detail.uicgc_code = "uicgc_11"
		this.shop_detail.params = {"need_search":"N","need_vertical":"Y"}
		this.shop_detail.datasource = {"default":{"dt_1304_1666846074129":{"dtt_1304_1666847660575":{"st_ds":{"default":{"uicgc_code":"UICGC_11","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847660575","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666942883845","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Shop Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666932220178","date_format":false},{"column_name":"SHOP_MID","alias_name":"","mq_id":"MQ_1666932220593","date_format":false},{"column_name":"SHOP_NAME","alias_name":"","mq_id":"MQ_1666932220745","date_format":false},{"column_name":"SHOP_ID","alias_name":"","mq_id":"MQ_1666932220913","date_format":false},{"column_name":"SHOP_TYPE","alias_name":"","mq_id":"MQ_1666932221257","date_format":false},{"column_name":"SHOP_MCC","alias_name":"","mq_id":"MQ_1666932221417","date_format":false},{"column_name":"SHOP_IBAN","alias_name":"","mq_id":"MQ_1666932221577","date_format":false},{"column_name":"BUILDING","alias_name":"","mq_id":"MQ_1666932222401","date_format":false},{"column_name":"STREET","alias_name":"","mq_id":"MQ_1666932222561","date_format":false},{"column_name":"CITY","alias_name":"","mq_id":"MQ_1666932288472","date_format":false},{"column_name":"POSTAL_CODE","alias_name":"","mq_id":"MQ_1666932288632","date_format":false},{"column_name":"COUNTY","alias_name":"","mq_id":"MQ_1666932289064","date_format":false},{"column_name":"COUNTRY","alias_name":"","mq_id":"MQ_1666932350992","date_format":false},{"column_name":"NPSSMS_ID","alias_name":"","mq_id":"MQ_1667366133634","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1699879751949","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1699879761283","date_format":false}],"joins":[]},"eq_text":"select  NPSSMS_ID,  NPSSMP_ID,  BANKUSERID,  SHOP_MID,  SHOP_NAME,  SHOP_ID,  SHOP_TYPE,  SHOP_MCC,  SHOP_IBAN,  BUILDING,  STREET,  CITY,  POSTAL_CODE,  COUNTY,  COUNTRY,  STATUS,  PROCESS_STATUS,  TENANT_ID,  CREATED_DATE,  DT_CODE,  DTT_CODE from  (  select   S.NPSSMS_ID,   s.NPSSMP_ID,   S.PRODUCT_CODE,   S.BANKUSERID,   S.SHOP_NAME,   S.SHOP_MID,   S.SHOP_ID,   S.SHOP_TYPE,   S.SHOP_MCC,   S.SHOP_IBAN,   S.BUILDING,   S.STREET,   S.CITY,   S.POSTAL_CODE,   S.COUNTY,   S.COUNTRY,   S.EXHF_ID,   S.STATUS,   S.PROCESS_STATUS,   S.TENANT_ID,   S.CREATED_DATE,   S.DTT_CODE,   S.DT_CODE  from   NPSS_MERCHANT_SHOPS S) VW $WHERE order by  NPSSMS_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Shop Details Vertical CCD","filter":[{"filter_name":"NPSSMS_ID","binding_name":"NPSSMS_ID","binding_value":"","source_name":"MI_LEVEL_NPSSMS_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop MID","target_column":"SHOP_MID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop Name","target_column":"SHOP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop ID","target_column":"SHOP_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop Type","target_column":"SHOP_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop MCC","target_column":"SHOP_MCC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop IBAN","target_column":"SHOP_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Building","target_column":"BUILDING","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Street","target_column":"STREET","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"City","target_column":"CITY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Postal Code","target_column":"POSTAL_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"County","target_column":"COUNTY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Country","target_column":"COUNTRY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.shop_detail.context_menu = []
		this.shop_detail.views = {}
		this.shop_detail.onChangecomponent = new EventEmitter<any>()
		this.shop_detail.show = true
		this.shop_detail.dynamic_param = {"column_header_name":"Field","value_header_name":"Value"}
	
		// Component level properties - "Cash Desk List" 
		this.cash_desk_list.uictrl_code = "datatable"
		this.cash_desk_list.uicgc_desc = "Cash Desk List"
		this.cash_desk_list.uicgc_code = "uicgc_12"
		this.cash_desk_list.params = {"need_pag_datatable":"Y","need_search":"N"}
		this.cash_desk_list.datasource = {"default":{"dt_1304_1666846074129":{"dtt_1304_1666848298941":{"st_ds":{"default":{"uicgc_code":"UICGC_12","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666848298941","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666942596756","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Cash Desk Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666882336815","date_format":false},{"column_name":"CASHDESK_ID","alias_name":"","mq_id":"MQ_1666882337070","date_format":false},{"column_name":"CASHDESK_OVERLAY_ID","alias_name":"","mq_id":"MQ_1666882337573","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666882360517","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666882360725","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666882360901","date_format":true},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1666882395708","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1667365781652","date_format":false},{"column_name":"NPSSMC_ID","alias_name":"","mq_id":"MQ_1667365937621","date_format":false}],"joins":[]},"eq_text":"select  NPSSMC_ID,  NPSSMS_ID,  BANKUSERID,  CASHDESK_ID,  CASHDESK_OVERLAY_ID,  CREATED_DATE,  STATUS,  PROCESS_STATUS,  TENANT_ID,  DTT_CODE,  DT_CODE from  (  select   C.NPSSMC_ID,   C.NPSSMS_ID,   C.BANKUSERID,   C.CASHDESK_ID,   C.CASHDESK_OVERLAY_ID,   C.CREATED_DATE,   C.STATUS,   C.PROCESS_STATUS,   C.TENANT_ID,   C.DTT_CODE,   C.DT_CODE  from   NPSS_MERCHANT_CASHDESK C) VW $WHERE order by  NPSSMC_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Cash Desk Details CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cash Desk ID","target_column":"CASHDESK_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.cash_desk_list.context_menu = []
		this.cash_desk_list.views = {}
		this.cash_desk_list.onChangecomponent = new EventEmitter<any>()
		this.cash_desk_list.show = true
		this.cash_desk_list.dynamic_param = {}
	
		// Component level properties - "Cash Desk Detail" 
		this.cash_desk_detail.uictrl_code = "datatable"
		this.cash_desk_detail.uicgc_desc = "Cash Desk Detail"
		this.cash_desk_detail.uicgc_code = "uicgc_13"
		this.cash_desk_detail.params = {"need_search":"N","need_vertical":"Y"}
		this.cash_desk_detail.datasource = {"default":{"dt_1304_1666846074129":{"dtt_1304_1666848298941":{"st_ds":{"default":{"uicgc_code":"UICGC_13","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666848298941","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666942565570","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Cash Desk Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666882336815","date_format":false},{"column_name":"CASHDESK_ID","alias_name":"","mq_id":"MQ_1666882337070","date_format":false},{"column_name":"CASHDESK_OVERLAY_ID","alias_name":"","mq_id":"MQ_1666882337573","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666882360517","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666882360725","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666882360901","date_format":true},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1666882395708","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1667365781652","date_format":false},{"column_name":"NPSSMC_ID","alias_name":"","mq_id":"MQ_1667365937621","date_format":false}],"joins":[]},"eq_text":"select  NPSSMC_ID,  NPSSMS_ID,  BANKUSERID,  CASHDESK_ID,  CASHDESK_OVERLAY_ID,  CREATED_DATE,  STATUS,  PROCESS_STATUS,  TENANT_ID,  DTT_CODE,  DT_CODE from  (  select   C.NPSSMC_ID,   C.NPSSMS_ID,   C.BANKUSERID,   C.CASHDESK_ID,   C.CASHDESK_OVERLAY_ID,   C.CREATED_DATE,   C.STATUS,   C.PROCESS_STATUS,   C.TENANT_ID,   C.DTT_CODE,   C.DT_CODE  from   NPSS_MERCHANT_CASHDESK C) VW $WHERE order by  NPSSMC_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Cash Desk Details VER CCD","filter":[{"filter_name":"NPSSMC_ID","binding_name":"NPSSMC_ID","binding_value":"","source_name":"MI_LEVEL_NPSSMC_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cash Desk ID","target_column":"CASHDESK_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cash Desk Overlay ID","target_column":"CASHDESK_OVERLAY_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.cash_desk_detail.context_menu = []
		this.cash_desk_detail.views = {}
		this.cash_desk_detail.onChangecomponent = new EventEmitter<any>()
		this.cash_desk_detail.show = true
		this.cash_desk_detail.dynamic_param = {"column_header_name":"Field","value_header_name":"Value"}
	
		// Component level properties - "Payor Information" 
		this.payor_information.uictrl_code = "dynamic_ui"
		this.payor_information.uicgc_desc = "Payor Information"
		this.payor_information.uicgc_code = "uicgc_14"
		this.payor_information.params = {}
		this.payor_information.datasource = {}
		this.payor_information.context_menu = []
		this.payor_information.views = {"first":"DTT_1304_1666846129395","is_tab_mode":"N","dtt_1304_1666846129395":{"0":[{"dttv_id":"NPSS Merchant QR UI","tab_order":0,"tab_name":"","uicgc_description":"Payor Information","role_description":"default","dtt_description":"NPSS Merchant Proxy"}]}}
		this.payor_information.onChangecomponent = new EventEmitter<any>()
		this.payor_information.show = true
		this.payor_information.dynamic_param = {}
		this.payor_information.f_npss_merchant_qr_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.payor_information.form_name = "f_npss_merchant_qr_ui"
	
		// Component level properties - "Payee Information" 
		this.payee_information.uictrl_code = "dynamic_ui"
		this.payee_information.uicgc_desc = "Payee Information"
		this.payee_information.uicgc_code = "uicgc_15"
		this.payee_information.params = {}
		this.payee_information.datasource = {}
		this.payee_information.context_menu = []
		this.payee_information.views = {"first":"DTT_1304_1665901217208","is_tab_mode":"N","dtt_1304_1665901217208":{"0":[{"dttv_id":"NPSS Merchant Payment type QR UI","tab_order":0,"tab_name":"","uicgc_description":"Payee Information","role_description":"default","dtt_description":"NPSS Transactions"}]}}
		this.payee_information.onChangecomponent = new EventEmitter<any>()
		this.payee_information.show = true
		this.payee_information.dynamic_param = {}
		this.payee_information.f_npss_merchant_payment_type_qr_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.payee_information.form_name = "f_npss_merchant_payment_type_qr_ui"
	
		// Component level properties - "QR UI" 
		this.qr_ui.uictrl_code = "dynamic_ui"
		this.qr_ui.uicgc_desc = "QR UI"
		this.qr_ui.uicgc_code = "uicgc_16"
		this.qr_ui.params = {}
		this.qr_ui.datasource = {}
		this.qr_ui.context_menu = []
		this.qr_ui.views = {}
		this.qr_ui.onChangecomponent = new EventEmitter<any>()
		this.qr_ui.show = true
		this.qr_ui.dynamic_param = {}
		this.qr_ui.f_qr_ui = {"show":true}
		this.qr_ui.current_view = "f_qr_ui"
		
		// "Generate QR Code" Button of "QR UI" component
		this.qr_ui_generate_qr_code.label_name = "Generate QR Code"
		this.qr_ui_generate_qr_code.show = true
		this.qr_ui_generate_qr_code.disabled = false
		this.qr_ui_generate_qr_code.params = {"icon_only":false,"uicgcc_style":"fa fa-qrcode"}
		this.qr_ui_generate_qr_code.dynamic_param = {}
		this.qr_ui_generate_qr_code.role = []
		this.qr_ui_generate_qr_code.action = ""
		
		// "Close" Button of "QR UI" component
		this.qr_ui_close.label_name = "Close"
		this.qr_ui_close.show = true
		this.qr_ui_close.disabled = false
		this.qr_ui_close.params = {"icon_only":false,"uicgcc_style":"fa fa-close"}
		this.qr_ui_close.dynamic_param = {}
		this.qr_ui_close.role = []
		this.qr_ui_close.action = ""
	
		// Component level properties - "NPSS QR Widget" 
		this.npss_qr_widget.uictrl_code = "custom_widget"
		this.npss_qr_widget.uicgc_desc = "NPSS QR Widget"
		this.npss_qr_widget.uicgc_code = "uicgc_17"
		this.npss_qr_widget.params = {}
		this.npss_qr_widget.datasource = {}
		this.npss_qr_widget.context_menu = []
		this.npss_qr_widget.views = {}
		this.npss_qr_widget.onChangecomponent = new EventEmitter<any>()
		this.npss_qr_widget.show = true
		this.npss_qr_widget.dynamic_param = {}
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__cf_on_page_load()
		this.page_load__he_for_pl_trg()
		this.page_load__pl_to_back_hide()
		this.page_load__he_for_btm()
		this.page_load__he_for_generate_qr()
		this.page_load__he_for_generate_merchant_tag()
	}

	//Handler for INTERNAL event of "cf on page load"
	cf_on_page_load__internal(parent_event_result){
		this.cf_on_page_load__tbc_for_search_btn(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "queue"
	queue__selection_changed(){
		this.queue__svm_from_queue()
		this.queue__de_from_queue_to_view_detau()
		this.queue__de_from_queue_to_cashdesk()
		this.queue__de_from_queue_to_shop_dtl()
		this.queue__he_for_gm_tag()
		this.queue__he_for_queue_list_to_generate_qr()
	}

	//Handler for INTERNAL event of "svm from queue"
	svm_from_queue__internal(parent_event_result){
		this.svm_from_queue__ssp_from_queue(parent_event_result)
	}

	//Handler for INTERNAL event of "ssp from queue"
	ssp_from_queue__internal(parent_event_result){
		this.ssp_from_queue__brfq_for_customer_list(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for customer list"
	brfq_for_customer_list__internal(parent_event_result){
		this.brfq_for_customer_list__sfr_for_customer_list(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "merchant list"
	merchant_list__selection_changed(){
		this.merchant_list__svm_from_customer_list()
		this.merchant_list__ee_for_view_detail_from_customer_list()
		this.merchant_list__ee_for_view_shop_dtl()
		this.merchant_list__ee_for_view_cash_desk_dtl()
		this.merchant_list__se_for_gm_tag()
		this.merchant_list__e_1680255240615()
	}

	//Handler for INTERNAL event of "svm from customer list"
	svm_from_customer_list__internal(parent_event_result){
		this.svm_from_customer_list__trg_for_md(parent_event_result)
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
		this.navigation_view_account_detail__brfq_for_customer_detail()
		this.navigation_view_account_detail__brfq_for_account_list()
		this.navigation_view_account_detail__sp_for_vad()
		this.navigation_view_account_detail__he_for_vad()
		this.navigation_view_account_detail__se_for_vsd()
		this.navigation_view_account_detail__se_for_vad_to_vcdd()
		this.navigation_view_account_detail__se_for_back_btn()
		this.navigation_view_account_detail__he_for_search()
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
		this.svm_for_account_list__brfq_for_account_details(parent_event_result)
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

	//Handler for SELECTION_CHANGED event of "merchant details"
	merchant_details__selection_changed(){
		this.merchant_details__svm_for_md()
	}

	//Handler for SELECTION_CHANGED event of "shop list"
	shop_list__selection_changed(){
		this.shop_list__svm_for_sl()
	}

	//Handler for INTERNAL event of "svm for sl"
	svm_for_sl__internal(parent_event_result){
		this.svm_for_sl__brfq_for_sd(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation view shop detail"
	navigation_view_shop_detail__action_button_click(){
		this.navigation_view_shop_detail__sp_for_vsd()
		this.navigation_view_shop_detail__sh_for_vsd()
		this.navigation_view_shop_detail__se_for_vcdd()
		this.navigation_view_shop_detail__se_view_shop_to_back()
		this.navigation_view_shop_detail__se_view_shop_to_view_account()
		this.navigation_view_shop_detail__he_view_shop_to_search()
		this.navigation_view_shop_detail__brfq_for_merchant_dtl()
		this.navigation_view_shop_detail__brfq_for_shop_list_from_shop_dtl_btn()
	}

	//Handler for INTERNAL event of "brfq for shop list from shop dtl btn"
	brfq_for_shop_list_from_shop_dtl_btn__internal(parent_event_result){
		this.brfq_for_shop_list_from_shop_dtl_btn__sfr_for_shop_list_from_shop_dtl_btn(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation view cash desk detail"
	navigation_view_cash_desk_detail__action_button_click(){
		this.navigation_view_cash_desk_detail__sp_for_vsd()
		this.navigation_view_cash_desk_detail__sh__for_vcddetail()
		this.navigation_view_cash_desk_detail__brfq_for_cash_detail()
		this.navigation_view_cash_desk_detail__se_for_case_desk_to_view_shop()
		this.navigation_view_cash_desk_detail__se_for_case_desk_to_back()
		this.navigation_view_cash_desk_detail__se_for_case_desk_to_view_account()
		this.navigation_view_cash_desk_detail__he_view_cash_to_search()
		this.navigation_view_cash_desk_detail__brfq_for_view_cash_btn_to_list()
	}

	//Handler for INTERNAL event of "brfq for view cash btn to list"
	brfq_for_view_cash_btn_to_list__internal(parent_event_result){
		this.brfq_for_view_cash_btn_to_list__sfr_for_cdlist(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "cash desk list"
	cash_desk_list__selection_changed(){
		this.cash_desk_list__svm_for_cdl()
	}

	//Handler for INTERNAL event of "svm for cdl"
	svm_for_cdl__internal(parent_event_result){
		this.svm_for_cdl__brfq_for_cdd(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation back to main"
	navigation_back_to_main__action_button_click(){
		this.navigation_back_to_main__rs_for_bck()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation generate merchant tag"
	navigation_generate_merchant_tag__action_button_click(){
		this.navigation_generate_merchant_tag__cc_for_generate_merchant_tag()
	}

	//Handler for INTERNAL event of "cc for generate merchant tag"
	cc_for_generate_merchant_tag__internal(parent_event_result){
		this.cc_for_generate_merchant_tag__im_for_generate_merchant_tag(parent_event_result)
	}

	//Handler for INTERNAL event of "im for generate merchant tag"
	im_for_generate_merchant_tag__internal(parent_event_result){
		this.im_for_generate_merchant_tag__rs_for_generate_merchant_tag(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation generate qr"
	navigation_generate_qr__action_button_click(){
		this.navigation_generate_qr__sp_for_generate_qr()
		this.navigation_generate_qr__de_for_payer_info()
		this.navigation_generate_qr__bvm_for_merchant_name__payor_information()
		this.navigation_generate_qr__bvm_for_mer_tag__payor_information()
	}

	//Handler for ACTION_BUTTON_CLICK event of "qr ui close"
	qr_ui_close__action_button_click(){
		this.qr_ui_close__sp_for_qr_close()
	}

	//Handler for ACTION_BUTTON_CLICK event of "qr ui generate qr code"
	qr_ui_generate_qr_code__action_button_click(){
		this.qr_ui_generate_qr_code__cc_for_qr_code()
	}

	//Handler for SELECTION_CHANGED event of "npss merchant payment type qr ui dbtr cust type"
	npss_merchant_payment_type_qr_ui_dbtr_cust_type__selection_changed(){
		this.npss_merchant_payment_type_qr_ui_dbtr_cust_type__e_1680255639877__payee_information()
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
		let internals="cf_on_page_load__tbc_for_search_btn,"
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
	page_load__pl_to_back_hide() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_back_to_main"
		let parent_source_id=""
		let event_code="e_1666951391658"
		let event_params={"caller_name":"page_load__pl_to_back_hide","event_desc":"PL to Back hide","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_btm() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_back_to_main"
		let parent_source_id=""
		let event_code="e_1669094840990"
		let event_params={"caller_name":"page_load__he_for_btm","event_desc":"HE for BTM","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_generate_qr() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_generate_qr"
		let parent_source_id=""
		let event_code="e_1680249193005"
		let event_params={"caller_name":"page_load__he_for_generate_qr","event_desc":"HE for Generate QR","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_generate_merchant_tag() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_generate_merchant_tag"
		let parent_source_id=""
		let event_code="e_1680249224338"
		let event_params={"caller_name":"page_load__he_for_generate_merchant_tag","event_desc":"HE for generate merchant tag","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for INTERNAL event of "cf on page load"
	cf_on_page_load__tbc_for_search_btn(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cf_on_page_load"
		let destn_id="search_search"
		let parent_source_id="page_load"
		let event_code="e_1667572347854"
		let event_params={"caller_name":"cf_on_page_load__tbc_for_search_btn","event_desc":"TBC for search btn","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
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
		let internals="svm_from_queue__ssp_from_queue,"
		let event_data={"queue":{"e_1666886414804":{"dts":{"dt_1304_1666846074129":{"dtts":{"":{"uicgc_code":"UICGC_1","event_code":"E_1666886414804","dt_code":"DT_1304_1666846074129","dtt_code":"","dt_desc":"NPSS Merchant Proxy DTG","dtt_desc":"NPSS Merchant Proxy","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"STATUS","level":"MI_LEVEL","name":"MI_LEVEL_STATUS","setd3name":"STATUS"},{"type":"LOCAL","column_name":"PROCESS_STATUS","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_STATUS","setd3name":"PROCESS_STATUS"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666846129395":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666846129395","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666942113596","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"process_status","alias_name":"","mq_id":"MQ_1666876780612","date_format":false},{"column_name":"status","alias_name":"","mq_id":"MQ_1666876781002","date_format":false},{"column_name":"TRAN_COUNT","alias_name":"","mq_id":"MQ_1666964625441","date_format":false}],"joins":[]},"eq_text":"SELECT PROCESS_STATUS,        STATUS,        COUNT(STATUS) TRAN_COUNT,        QUEUE_DESC,        Q_SORT_ORDER,        QS_SORT_ORDER   FROM (SELECT T.NPSSMP_ID,                T.PRODUCT_CODE,                T.BANKUSERID,                T.GROUP_CODE,                T.BANK_CODE,                T.MERCHANT_TAG,                T.MERCHANT_NAME,                T.SURNAME,                T.DENOMINATION,                T.VAT_NUMBER,                T.MCC,                T.MOBILE,                T.PROXY_TYPE,                T.PROXY_VALUE,                T.EMAIL,                T.DOCUMENT_ID,                T.CHANNEL_NAME,                T.LOGO,                T.EXHF_ID,                T.CHANNEL_ID,                T.CHANNEL_USERID,                T.CHANNEL_PRODUCT,                T.CHANNEL_SUB_PRODUCT,                T.CHANNEL_TRAN_CODE,                T.CHANNEL_REFNO,                T.PROCESS_STATUS,                T.TENANT_ID,                T.STATUS,                T.CREATED_DATE,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME,                T.CREATED_BY,                T.CREATED_BY_NAME,                T.SYSTEM_ID,                QR.ROLE_ID,                QR.VPH_APP_ID AS QR_APP_ID,                QR.VPH_APP_CODE,                QR.QUEUE_CODE,                QR.SCREEN_NAME AS QR_SCREEN_NAME,                QR.SCREEN_MENU_GROUP AS QR_MENU_GROUP,                QR.SCREEN_MODULE AS QR_MODULE,                PQ.QUEUE_DESC,                PQ.QUEUE_CODE,                PQ.VPH_APP_ID AS Q_APP_ID,                QR.SORT_ORDER AS QS_SORT_ORDER,                PQ.SORT_ORDER AS Q_SORT_ORDER           FROM NPSS_MERCHANT_PROXY T          LEFT JOIN TRANSACTION_SET TS ON T.NPSSMP_ID = TS.TRN_ID                                       AND T.DTT_CODE = TS.DTT_CODE          INNER JOIN <tran_db>.CORE_Q_STATUS_ROLES QR ON T.STATUS =                                               QR.PROCESS_QUEUE_STATUS                                           AND T.PROCESS_STATUS =                                               QR.QUEUE_CODE          INNER JOIN <tran_db>.CORE_APP_Q_SETUP PQ ON T.PROCESS_STATUS = PQ.QUEUE_CODE) VM $WHERE  GROUP BY PROCESS_STATUS, STATUS, QUEUE_DESC, Q_SORT_ORDER, QS_SORT_ORDER"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"process_status","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"status","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"TRAN_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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

	//Handler for SELECTION_CHANGED event of "queue"
	queue__de_from_queue_to_cashdesk() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="navigation_view_cash_desk_detail"
		let parent_source_id=""
		let event_code="e_1667200799702"
		let event_params={"caller_name":"queue__de_from_queue_to_cashdesk","event_desc":"DE from queue to cashdesk","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "queue"
	queue__de_from_queue_to_shop_dtl() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="navigation_view_shop_detail"
		let parent_source_id=""
		let event_code="e_1667200844645"
		let event_params={"caller_name":"queue__de_from_queue_to_shop_dtl","event_desc":"DE from queue to shop dtl","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "queue"
	queue__he_for_gm_tag() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="navigation_generate_merchant_tag"
		let parent_source_id=""
		let event_code="e_1680256408766"
		let event_params={"caller_name":"queue__he_for_gm_tag","event_desc":"HE for GM Tag","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "queue"
	queue__he_for_queue_list_to_generate_qr() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="navigation_generate_qr"
		let parent_source_id=""
		let event_code="e_1680256423639"
		let event_params={"caller_name":"queue__he_for_queue_list_to_generate_qr","event_desc":"HE for Queue list to Generate QR","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for INTERNAL event of "svm from queue"
	svm_from_queue__ssp_from_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_from_queue"
		let destn_id="search"
		let parent_source_id="queue"
		let event_code="e_1666886452091"
		let event_params={"caller_name":"svm_from_queue__ssp_from_queue","event_desc":"SSP from Queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
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
		let destn_id="merchant_list"
		let parent_source_id="svm_from_queue"
		let event_code="e_1666886493307"
		let event_params={"caller_name":"ssp_from_queue__brfq_for_customer_list","event_desc":"BRFQ for Customer List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_customer_list__sfr_for_customer_list,"
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666846129395":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666846129395","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666942281475","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666878546556","date_format":false},{"column_name":"MERCHANT_NAME","alias_name":"","mq_id":"MQ_1666878546755","date_format":false},{"column_name":"MERCHANT_TAG","alias_name":"","mq_id":"MQ_1666878547035","date_format":false},{"column_name":"MCC","alias_name":"","mq_id":"MQ_1666878547491","date_format":false},{"column_name":"MOBILE","alias_name":"","mq_id":"MQ_1666878578991","date_format":false},{"column_name":"DENOMINATION","alias_name":"","mq_id":"MQ_1666878579343","date_format":false},{"column_name":"VAT_NUMBER","alias_name":"","mq_id":"MQ_1666878595391","date_format":false},{"column_name":"SURNAME","alias_name":"","mq_id":"MQ_1666879178543","date_format":false},{"column_name":"GROUP_CODE","alias_name":"","mq_id":"MQ_1666879178805","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1666879179269","date_format":false},{"column_name":"PROXY_TYPE","alias_name":"","mq_id":"MQ_1666879214612","date_format":false},{"column_name":"PROXY_VALUE","alias_name":"","mq_id":"MQ_1666879214956","date_format":false},{"column_name":"EMAIL","alias_name":"","mq_id":"MQ_1666879215132","date_format":false},{"column_name":"DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666879215308","date_format":false},{"column_name":"CHANNEL_NAME","alias_name":"","mq_id":"MQ_1666879258954","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666879259178","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666879259474","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1666879260146","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666879260394","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1666879260634","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1666879353178","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666881334242","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666881334807","date_format":false},{"column_name":"NPSSMP_ID","alias_name":"","mq_id":"MQ_1667366107578","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMP_ID,BANKUSERID,        MERCHANT_NAME,        MERCHANT_TAG,        MCC,        MOBILE,        DENOMINATION,        VAT_NUMBER,        SURNAME,        GROUP_CODE,        BANK_CODE,        PROXY_TYPE,        PROXY_VALUE,        EMAIL,        DOCUMENT_ID,        CHANNEL_NAME,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        CREATED_DATE,        STATUS,        PROCESS_STATUS,        TENANT_ID,        DTT_CODE,        DT_CODE   FROM (SELECT T.NPSSMP_ID,                T.BANKUSERID,                T.MERCHANT_NAME,                T.MERCHANT_TAG,                T.MCC,                T.MOBILE,                T.DENOMINATION,                T.VAT_NUMBER,                T.PRODUCT_CODE,                T.GROUP_CODE,                T.BANK_CODE,                T.SURNAME,                T.PROXY_TYPE,                T.PROXY_VALUE,                T.EMAIL,                T.DOCUMENT_ID,                T.CHANNEL_NAME,                T.LOGO,                T.EXHF_ID,                T.CHANNEL_ID,                T.CHANNEL_USERID,                T.CHANNEL_PRODUCT,                T.CHANNEL_SUB_PRODUCT,                T.CHANNEL_TRAN_CODE,                T.CHANNEL_REFNO,                T.CREATED_DATE,                T.STATUS,                T.PROCESS_STATUS,                T.TENANT_ID,                T.DTT_CODE,                T.DT_CODE           FROM NPSS_MERCHANT_PROXY T) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Details CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Name","target_column":"MERCHANT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Tag","target_column":"MERCHANT_TAG","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"MCC","target_column":"MCC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Mobile","target_column":"MOBILE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Denomination","target_column":"DENOMINATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"VAT Number","target_column":"VAT_NUMBER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let destn_id="merchant_list"
		let parent_source_id="ssp_from_queue"
		let event_code="e_1666886644558"
		let event_params={"caller_name":"brfq_for_customer_list__sfr_for_customer_list","event_desc":"SFR for customer list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666846129395":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666846129395","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666942281475","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666878546556","date_format":false},{"column_name":"MERCHANT_NAME","alias_name":"","mq_id":"MQ_1666878546755","date_format":false},{"column_name":"MERCHANT_TAG","alias_name":"","mq_id":"MQ_1666878547035","date_format":false},{"column_name":"MCC","alias_name":"","mq_id":"MQ_1666878547491","date_format":false},{"column_name":"MOBILE","alias_name":"","mq_id":"MQ_1666878578991","date_format":false},{"column_name":"DENOMINATION","alias_name":"","mq_id":"MQ_1666878579343","date_format":false},{"column_name":"VAT_NUMBER","alias_name":"","mq_id":"MQ_1666878595391","date_format":false},{"column_name":"SURNAME","alias_name":"","mq_id":"MQ_1666879178543","date_format":false},{"column_name":"GROUP_CODE","alias_name":"","mq_id":"MQ_1666879178805","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1666879179269","date_format":false},{"column_name":"PROXY_TYPE","alias_name":"","mq_id":"MQ_1666879214612","date_format":false},{"column_name":"PROXY_VALUE","alias_name":"","mq_id":"MQ_1666879214956","date_format":false},{"column_name":"EMAIL","alias_name":"","mq_id":"MQ_1666879215132","date_format":false},{"column_name":"DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666879215308","date_format":false},{"column_name":"CHANNEL_NAME","alias_name":"","mq_id":"MQ_1666879258954","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666879259178","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666879259474","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1666879260146","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666879260394","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1666879260634","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1666879353178","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666881334242","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666881334807","date_format":false},{"column_name":"NPSSMP_ID","alias_name":"","mq_id":"MQ_1667366107578","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMP_ID,BANKUSERID,        MERCHANT_NAME,        MERCHANT_TAG,        MCC,        MOBILE,        DENOMINATION,        VAT_NUMBER,        SURNAME,        GROUP_CODE,        BANK_CODE,        PROXY_TYPE,        PROXY_VALUE,        EMAIL,        DOCUMENT_ID,        CHANNEL_NAME,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        CREATED_DATE,        STATUS,        PROCESS_STATUS,        TENANT_ID,        DTT_CODE,        DT_CODE   FROM (SELECT T.NPSSMP_ID,                T.BANKUSERID,                T.MERCHANT_NAME,                T.MERCHANT_TAG,                T.MCC,                T.MOBILE,                T.DENOMINATION,                T.VAT_NUMBER,                T.PRODUCT_CODE,                T.GROUP_CODE,                T.BANK_CODE,                T.SURNAME,                T.PROXY_TYPE,                T.PROXY_VALUE,                T.EMAIL,                T.DOCUMENT_ID,                T.CHANNEL_NAME,                T.LOGO,                T.EXHF_ID,                T.CHANNEL_ID,                T.CHANNEL_USERID,                T.CHANNEL_PRODUCT,                T.CHANNEL_SUB_PRODUCT,                T.CHANNEL_TRAN_CODE,                T.CHANNEL_REFNO,                T.CREATED_DATE,                T.STATUS,                T.PROCESS_STATUS,                T.TENANT_ID,                T.DTT_CODE,                T.DT_CODE           FROM NPSS_MERCHANT_PROXY T) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Details CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Name","target_column":"MERCHANT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Tag","target_column":"MERCHANT_TAG","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"MCC","target_column":"MCC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Mobile","target_column":"MOBILE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Denomination","target_column":"DENOMINATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"VAT Number","target_column":"VAT_NUMBER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "merchant list"
	merchant_list__svm_from_customer_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_list"
		let destn_id="merchant_list"
		let parent_source_id=""
		let event_code="e_1666886672782"
		let event_params={"caller_name":"merchant_list__svm_from_customer_list","event_desc":"SVM from Customer List","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_from_customer_list__trg_for_md,"
		let event_data={"merchant_list":{"e_1666886672782":{"dts":{"dt_1304_1666846074129":{"dtts":{"":{"uicgc_code":"UICGC_2","event_code":"E_1666886672782","dt_code":"DT_1304_1666846074129","dtt_code":"","dt_desc":"NPSS Merchant Proxy DTG","dtt_desc":"NPSS Merchant Proxy","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"BANKUSERID","level":"MI_LEVEL","name":"MI_LEVEL_BANKUSERID","setd3name":"BANKUSERID"},{"type":"LOCAL","column_name":"NPSSMP_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSSMP_ID","setd3name":"NPSSMP_ID"},{"type":"LOCAL","column_name":"MERCHANT_NAME","level":"MI_LEVEL","name":"MI_LEVEL_MERCHANT_NAME","setd3name":"MERCHANT_NAME"},{"type":"LOCAL","column_name":"MERCHANT_TAG","level":"MI_LEVEL","name":"MI_LEVEL_MERCHANT_TAG","setd3name":"MERCHANT_TAG"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666846129395":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666846129395","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666942281475","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666878546556","date_format":false},{"column_name":"MERCHANT_NAME","alias_name":"","mq_id":"MQ_1666878546755","date_format":false},{"column_name":"MERCHANT_TAG","alias_name":"","mq_id":"MQ_1666878547035","date_format":false},{"column_name":"MCC","alias_name":"","mq_id":"MQ_1666878547491","date_format":false},{"column_name":"MOBILE","alias_name":"","mq_id":"MQ_1666878578991","date_format":false},{"column_name":"DENOMINATION","alias_name":"","mq_id":"MQ_1666878579343","date_format":false},{"column_name":"VAT_NUMBER","alias_name":"","mq_id":"MQ_1666878595391","date_format":false},{"column_name":"SURNAME","alias_name":"","mq_id":"MQ_1666879178543","date_format":false},{"column_name":"GROUP_CODE","alias_name":"","mq_id":"MQ_1666879178805","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1666879179269","date_format":false},{"column_name":"PROXY_TYPE","alias_name":"","mq_id":"MQ_1666879214612","date_format":false},{"column_name":"PROXY_VALUE","alias_name":"","mq_id":"MQ_1666879214956","date_format":false},{"column_name":"EMAIL","alias_name":"","mq_id":"MQ_1666879215132","date_format":false},{"column_name":"DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666879215308","date_format":false},{"column_name":"CHANNEL_NAME","alias_name":"","mq_id":"MQ_1666879258954","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666879259178","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666879259474","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1666879260146","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666879260394","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1666879260634","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1666879353178","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666881334242","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666881334807","date_format":false},{"column_name":"NPSSMP_ID","alias_name":"","mq_id":"MQ_1667366107578","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMP_ID,BANKUSERID,        MERCHANT_NAME,        MERCHANT_TAG,        MCC,        MOBILE,        DENOMINATION,        VAT_NUMBER,        SURNAME,        GROUP_CODE,        BANK_CODE,        PROXY_TYPE,        PROXY_VALUE,        EMAIL,        DOCUMENT_ID,        CHANNEL_NAME,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        CREATED_DATE,        STATUS,        PROCESS_STATUS,        TENANT_ID,        DTT_CODE,        DT_CODE   FROM (SELECT T.NPSSMP_ID,                T.BANKUSERID,                T.MERCHANT_NAME,                T.MERCHANT_TAG,                T.MCC,                T.MOBILE,                T.DENOMINATION,                T.VAT_NUMBER,                T.PRODUCT_CODE,                T.GROUP_CODE,                T.BANK_CODE,                T.SURNAME,                T.PROXY_TYPE,                T.PROXY_VALUE,                T.EMAIL,                T.DOCUMENT_ID,                T.CHANNEL_NAME,                T.LOGO,                T.EXHF_ID,                T.CHANNEL_ID,                T.CHANNEL_USERID,                T.CHANNEL_PRODUCT,                T.CHANNEL_SUB_PRODUCT,                T.CHANNEL_TRAN_CODE,                T.CHANNEL_REFNO,                T.CREATED_DATE,                T.STATUS,                T.PROCESS_STATUS,                T.TENANT_ID,                T.DTT_CODE,                T.DT_CODE           FROM NPSS_MERCHANT_PROXY T) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Details CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Name","target_column":"MERCHANT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Tag","target_column":"MERCHANT_TAG","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"MCC","target_column":"MCC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Mobile","target_column":"MOBILE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Denomination","target_column":"DENOMINATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"VAT Number","target_column":"VAT_NUMBER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "merchant list"
	merchant_list__ee_for_view_detail_from_customer_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_list"
		let destn_id="navigation_view_account_detail"
		let parent_source_id=""
		let event_code="e_1666887045885"
		let event_params={"caller_name":"merchant_list__ee_for_view_detail_from_customer_list","event_desc":"EE for View Detail from Customer List","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "merchant list"
	merchant_list__ee_for_view_shop_dtl() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_list"
		let destn_id="navigation_view_shop_detail"
		let parent_source_id=""
		let event_code="e_1667200927683"
		let event_params={"caller_name":"merchant_list__ee_for_view_shop_dtl","event_desc":"EE for view shop dtl","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "merchant list"
	merchant_list__ee_for_view_cash_desk_dtl() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_list"
		let destn_id="navigation_view_cash_desk_detail"
		let parent_source_id=""
		let event_code="e_1667200979466"
		let event_params={"caller_name":"merchant_list__ee_for_view_cash_desk_dtl","event_desc":"EE for view cash desk dtl","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "merchant list"
	merchant_list__se_for_gm_tag() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_list"
		let destn_id="navigation_generate_merchant_tag"
		let parent_source_id=""
		let event_code="e_1680255222779"
		let event_params={"caller_name":"merchant_list__se_for_gm_tag","event_desc":"SE for GM Tag","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant_list","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
		let handler_code="show_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "merchant list"
	merchant_list__e_1680255240615() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_list"
		let destn_id="navigation_generate_qr"
		let parent_source_id=""
		let event_code="e_1680255240615"
		let event_params={"caller_name":"merchant_list__e_1680255240615","event_desc":"E_1680255240615","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant_list","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
		let handler_code="show_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm from customer list"
	svm_from_customer_list__trg_for_md(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_from_customer_list"
		let destn_id="navigation_process_log_trg"
		let parent_source_id="merchant_list"
		let event_code="e_1666949914797"
		let event_params={"caller_name":"svm_from_customer_list__trg_for_md","event_desc":"TRG for MD","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"merchant_list","raiseparam":{},"parent_event_result":"SUCCESS"}
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
		let destn_id="merchant_list"
		let parent_source_id=""
		let event_code="e_1666887774342"
		let event_params={"caller_name":"search_search__cui_for_customer_list","event_desc":"CUI for customer list","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666846129395":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666846129395","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666942281475","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666878546556","date_format":false},{"column_name":"MERCHANT_NAME","alias_name":"","mq_id":"MQ_1666878546755","date_format":false},{"column_name":"MERCHANT_TAG","alias_name":"","mq_id":"MQ_1666878547035","date_format":false},{"column_name":"MCC","alias_name":"","mq_id":"MQ_1666878547491","date_format":false},{"column_name":"MOBILE","alias_name":"","mq_id":"MQ_1666878578991","date_format":false},{"column_name":"DENOMINATION","alias_name":"","mq_id":"MQ_1666878579343","date_format":false},{"column_name":"VAT_NUMBER","alias_name":"","mq_id":"MQ_1666878595391","date_format":false},{"column_name":"SURNAME","alias_name":"","mq_id":"MQ_1666879178543","date_format":false},{"column_name":"GROUP_CODE","alias_name":"","mq_id":"MQ_1666879178805","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1666879179269","date_format":false},{"column_name":"PROXY_TYPE","alias_name":"","mq_id":"MQ_1666879214612","date_format":false},{"column_name":"PROXY_VALUE","alias_name":"","mq_id":"MQ_1666879214956","date_format":false},{"column_name":"EMAIL","alias_name":"","mq_id":"MQ_1666879215132","date_format":false},{"column_name":"DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666879215308","date_format":false},{"column_name":"CHANNEL_NAME","alias_name":"","mq_id":"MQ_1666879258954","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666879259178","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666879259474","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1666879260146","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666879260394","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1666879260634","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1666879353178","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666881334242","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666881334807","date_format":false},{"column_name":"NPSSMP_ID","alias_name":"","mq_id":"MQ_1667366107578","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMP_ID,BANKUSERID,        MERCHANT_NAME,        MERCHANT_TAG,        MCC,        MOBILE,        DENOMINATION,        VAT_NUMBER,        SURNAME,        GROUP_CODE,        BANK_CODE,        PROXY_TYPE,        PROXY_VALUE,        EMAIL,        DOCUMENT_ID,        CHANNEL_NAME,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        CREATED_DATE,        STATUS,        PROCESS_STATUS,        TENANT_ID,        DTT_CODE,        DT_CODE   FROM (SELECT T.NPSSMP_ID,                T.BANKUSERID,                T.MERCHANT_NAME,                T.MERCHANT_TAG,                T.MCC,                T.MOBILE,                T.DENOMINATION,                T.VAT_NUMBER,                T.PRODUCT_CODE,                T.GROUP_CODE,                T.BANK_CODE,                T.SURNAME,                T.PROXY_TYPE,                T.PROXY_VALUE,                T.EMAIL,                T.DOCUMENT_ID,                T.CHANNEL_NAME,                T.LOGO,                T.EXHF_ID,                T.CHANNEL_ID,                T.CHANNEL_USERID,                T.CHANNEL_PRODUCT,                T.CHANNEL_SUB_PRODUCT,                T.CHANNEL_TRAN_CODE,                T.CHANNEL_REFNO,                T.CREATED_DATE,                T.STATUS,                T.PROCESS_STATUS,                T.TENANT_ID,                T.DTT_CODE,                T.DT_CODE           FROM NPSS_MERCHANT_PROXY T) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Details CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Name","target_column":"MERCHANT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Tag","target_column":"MERCHANT_TAG","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"MCC","target_column":"MCC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Mobile","target_column":"MOBILE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Denomination","target_column":"DENOMINATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"VAT Number","target_column":"VAT_NUMBER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let data_source={"default":{"dt_1304_1666847145490":{"dtt_1304_1666847230281":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1666847145490","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847230281","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666944577464","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Customer Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666877412054","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666877412326","date_format":false},{"column_name":"RESULT_CODE","alias_name":"","mq_id":"MQ_1666877412534","date_format":false},{"column_name":"RESULT_MESSAGE","alias_name":"","mq_id":"MQ_1666877412758","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666877413238","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666877451780","date_format":false},{"column_name":"NPSSSMTPL_ID","alias_name":"","mq_id":"MQ_1672059614979","date_format":false}],"joins":[]},"eq_text":"select NPSSSMTPL_ID,  BANKUSERID,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESULT_CODE,  result,  RESULT_MESSAGE,  RESULT_X_REQUEST_ID,  PROCESS_REF_NO,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  TENANT_ID,  DTT_CODE,  DT_CODE,  STATUS,  PROCESS_STATUS,  CHANNEL_TRAN_CODE from  (  select        SM.NPSSSMTPL_ID,   SM.BANKUSERID,   SM.PROCESS_NAME,   SM.PROCESSING_SYSTEM,   SM.RESULT_CODE,   SM.RESULT,   SM.RESULT_MESSAGE,   SM.RESULT_X_REQUEST_ID,   SM.PROCESS_REF_NO,   SM.REQUEST_DATA_JSON,   SM.RESPONSE_DATA_JSON,   SM.CHANNEL_ID,   SM.CHANNEL_REFNO,   SM.CHANNEL_USERID,   SM.CHANNEL_PRODUCT,   SM.CHANNEL_SUB_PRODUCT,   SM.CHANNEL_TRAN_CODE,   SM.PROCESS_STATUS,   SM.TENANT_ID,   SM.CREATED_DATE,   SM.DTT_CODE,   SM.DT_CODE,   SM.STATUS  from   NPSS_SM_TRN_PROCESS_LOG SM) VM $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Customer Process Log CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Result Code","target_column":"RESULT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Result Message","target_column":"RESULT_MESSAGE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666846129395":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666846129395","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666942113596","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"process_status","alias_name":"","mq_id":"MQ_1666876780612","date_format":false},{"column_name":"status","alias_name":"","mq_id":"MQ_1666876781002","date_format":false},{"column_name":"TRAN_COUNT","alias_name":"","mq_id":"MQ_1666964625441","date_format":false}],"joins":[]},"eq_text":"SELECT PROCESS_STATUS,        STATUS,        COUNT(STATUS) TRAN_COUNT,        QUEUE_DESC,        Q_SORT_ORDER,        QS_SORT_ORDER   FROM (SELECT T.NPSSMP_ID,                T.PRODUCT_CODE,                T.BANKUSERID,                T.GROUP_CODE,                T.BANK_CODE,                T.MERCHANT_TAG,                T.MERCHANT_NAME,                T.SURNAME,                T.DENOMINATION,                T.VAT_NUMBER,                T.MCC,                T.MOBILE,                T.PROXY_TYPE,                T.PROXY_VALUE,                T.EMAIL,                T.DOCUMENT_ID,                T.CHANNEL_NAME,                T.LOGO,                T.EXHF_ID,                T.CHANNEL_ID,                T.CHANNEL_USERID,                T.CHANNEL_PRODUCT,                T.CHANNEL_SUB_PRODUCT,                T.CHANNEL_TRAN_CODE,                T.CHANNEL_REFNO,                T.PROCESS_STATUS,                T.TENANT_ID,                T.STATUS,                T.CREATED_DATE,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME,                T.CREATED_BY,                T.CREATED_BY_NAME,                T.SYSTEM_ID,                QR.ROLE_ID,                QR.VPH_APP_ID AS QR_APP_ID,                QR.VPH_APP_CODE,                QR.QUEUE_CODE,                QR.SCREEN_NAME AS QR_SCREEN_NAME,                QR.SCREEN_MENU_GROUP AS QR_MENU_GROUP,                QR.SCREEN_MODULE AS QR_MODULE,                PQ.QUEUE_DESC,                PQ.QUEUE_CODE,                PQ.VPH_APP_ID AS Q_APP_ID,                QR.SORT_ORDER AS QS_SORT_ORDER,                PQ.SORT_ORDER AS Q_SORT_ORDER           FROM NPSS_MERCHANT_PROXY T          LEFT JOIN TRANSACTION_SET TS ON T.NPSSMP_ID = TS.TRN_ID                                       AND T.DTT_CODE = TS.DTT_CODE          INNER JOIN <tran_db>.CORE_Q_STATUS_ROLES QR ON T.STATUS =                                               QR.PROCESS_QUEUE_STATUS                                           AND T.PROCESS_STATUS =                                               QR.QUEUE_CODE          INNER JOIN <tran_db>.CORE_APP_Q_SETUP PQ ON T.PROCESS_STATUS = PQ.QUEUE_CODE) VM $WHERE  GROUP BY PROCESS_STATUS, STATUS, QUEUE_DESC, Q_SORT_ORDER, QS_SORT_ORDER"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"process_status","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"status","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"TRAN_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let event_code="e_1667572375816"
		let event_params={"caller_name":"brfq_by_search_to_queue__sfr_for_queue","event_desc":"SFR for queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666846129395":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666846129395","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666942113596","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"process_status","alias_name":"","mq_id":"MQ_1666876780612","date_format":false},{"column_name":"status","alias_name":"","mq_id":"MQ_1666876781002","date_format":false},{"column_name":"TRAN_COUNT","alias_name":"","mq_id":"MQ_1666964625441","date_format":false}],"joins":[]},"eq_text":"SELECT PROCESS_STATUS,        STATUS,        COUNT(STATUS) TRAN_COUNT,        QUEUE_DESC,        Q_SORT_ORDER,        QS_SORT_ORDER   FROM (SELECT T.NPSSMP_ID,                T.PRODUCT_CODE,                T.BANKUSERID,                T.GROUP_CODE,                T.BANK_CODE,                T.MERCHANT_TAG,                T.MERCHANT_NAME,                T.SURNAME,                T.DENOMINATION,                T.VAT_NUMBER,                T.MCC,                T.MOBILE,                T.PROXY_TYPE,                T.PROXY_VALUE,                T.EMAIL,                T.DOCUMENT_ID,                T.CHANNEL_NAME,                T.LOGO,                T.EXHF_ID,                T.CHANNEL_ID,                T.CHANNEL_USERID,                T.CHANNEL_PRODUCT,                T.CHANNEL_SUB_PRODUCT,                T.CHANNEL_TRAN_CODE,                T.CHANNEL_REFNO,                T.PROCESS_STATUS,                T.TENANT_ID,                T.STATUS,                T.CREATED_DATE,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME,                T.CREATED_BY,                T.CREATED_BY_NAME,                T.SYSTEM_ID,                QR.ROLE_ID,                QR.VPH_APP_ID AS QR_APP_ID,                QR.VPH_APP_CODE,                QR.QUEUE_CODE,                QR.SCREEN_NAME AS QR_SCREEN_NAME,                QR.SCREEN_MENU_GROUP AS QR_MENU_GROUP,                QR.SCREEN_MODULE AS QR_MODULE,                PQ.QUEUE_DESC,                PQ.QUEUE_CODE,                PQ.VPH_APP_ID AS Q_APP_ID,                QR.SORT_ORDER AS QS_SORT_ORDER,                PQ.SORT_ORDER AS Q_SORT_ORDER           FROM NPSS_MERCHANT_PROXY T          LEFT JOIN TRANSACTION_SET TS ON T.NPSSMP_ID = TS.TRN_ID                                       AND T.DTT_CODE = TS.DTT_CODE          INNER JOIN <tran_db>.CORE_Q_STATUS_ROLES QR ON T.STATUS =                                               QR.PROCESS_QUEUE_STATUS                                           AND T.PROCESS_STATUS =                                               QR.QUEUE_CODE          INNER JOIN <tran_db>.CORE_APP_Q_SETUP PQ ON T.PROCESS_STATUS = PQ.QUEUE_CODE) VM $WHERE  GROUP BY PROCESS_STATUS, STATUS, QUEUE_DESC, Q_SORT_ORDER, QS_SORT_ORDER"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"process_status","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"status","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"TRAN_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let data_source={"default":{"dt_1304_1666847145490":{"dtt_1304_1666847230281":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1666847145490","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847230281","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666944577464","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Customer Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666877412054","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666877412326","date_format":false},{"column_name":"RESULT_CODE","alias_name":"","mq_id":"MQ_1666877412534","date_format":false},{"column_name":"RESULT_MESSAGE","alias_name":"","mq_id":"MQ_1666877412758","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666877413238","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666877451780","date_format":false},{"column_name":"NPSSSMTPL_ID","alias_name":"","mq_id":"MQ_1672059614979","date_format":false}],"joins":[]},"eq_text":"select NPSSSMTPL_ID,  BANKUSERID,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESULT_CODE,  result,  RESULT_MESSAGE,  RESULT_X_REQUEST_ID,  PROCESS_REF_NO,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  TENANT_ID,  DTT_CODE,  DT_CODE,  STATUS,  PROCESS_STATUS,  CHANNEL_TRAN_CODE from  (  select        SM.NPSSSMTPL_ID,   SM.BANKUSERID,   SM.PROCESS_NAME,   SM.PROCESSING_SYSTEM,   SM.RESULT_CODE,   SM.RESULT,   SM.RESULT_MESSAGE,   SM.RESULT_X_REQUEST_ID,   SM.PROCESS_REF_NO,   SM.REQUEST_DATA_JSON,   SM.RESPONSE_DATA_JSON,   SM.CHANNEL_ID,   SM.CHANNEL_REFNO,   SM.CHANNEL_USERID,   SM.CHANNEL_PRODUCT,   SM.CHANNEL_SUB_PRODUCT,   SM.CHANNEL_TRAN_CODE,   SM.PROCESS_STATUS,   SM.TENANT_ID,   SM.CREATED_DATE,   SM.DTT_CODE,   SM.DT_CODE,   SM.STATUS  from   NPSS_SM_TRN_PROCESS_LOG SM) VM $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Customer Process Log CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Result Code","target_column":"RESULT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Result Message","target_column":"RESULT_MESSAGE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation view account detail"
	navigation_view_account_detail__brfq_for_customer_detail() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_account_detail"
		let destn_id="merchant_details"
		let parent_source_id=""
		let event_code="e_1666887203533"
		let event_params={"caller_name":"navigation_view_account_detail__brfq_for_customer_detail","event_desc":"BRFQ for Customer Detail","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_account_detail","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666846129395":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666846129395","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666942341120","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666878546556","date_format":false},{"column_name":"MERCHANT_NAME","alias_name":"","mq_id":"MQ_1666878546755","date_format":false},{"column_name":"MERCHANT_TAG","alias_name":"","mq_id":"MQ_1666878547035","date_format":false},{"column_name":"MCC","alias_name":"","mq_id":"MQ_1666878547491","date_format":false},{"column_name":"MOBILE","alias_name":"","mq_id":"MQ_1666878578991","date_format":false},{"column_name":"DENOMINATION","alias_name":"","mq_id":"MQ_1666878579343","date_format":false},{"column_name":"VAT_NUMBER","alias_name":"","mq_id":"MQ_1666878595391","date_format":false},{"column_name":"SURNAME","alias_name":"","mq_id":"MQ_1666879178543","date_format":false},{"column_name":"GROUP_CODE","alias_name":"","mq_id":"MQ_1666879178805","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1666879179269","date_format":false},{"column_name":"PROXY_TYPE","alias_name":"","mq_id":"MQ_1666879214612","date_format":false},{"column_name":"PROXY_VALUE","alias_name":"","mq_id":"MQ_1666879214956","date_format":false},{"column_name":"EMAIL","alias_name":"","mq_id":"MQ_1666879215132","date_format":false},{"column_name":"DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666879215308","date_format":false},{"column_name":"CHANNEL_NAME","alias_name":"","mq_id":"MQ_1666879258954","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666879259178","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666879259474","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1666879260146","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666879260394","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1666879260634","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1666879353178","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666881334242","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666881334807","date_format":false},{"column_name":"NPSSMP_ID","alias_name":"","mq_id":"MQ_1667366107578","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMP_ID,BANKUSERID,        MERCHANT_NAME,        MERCHANT_TAG,        MCC,        MOBILE,        DENOMINATION,        VAT_NUMBER,        SURNAME,        GROUP_CODE,        BANK_CODE,        PROXY_TYPE,        PROXY_VALUE,        EMAIL,        DOCUMENT_ID,        CHANNEL_NAME,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        CREATED_DATE,        STATUS,        PROCESS_STATUS,        TENANT_ID,        DTT_CODE,        DT_CODE   FROM (SELECT T.NPSSMP_ID,                T.BANKUSERID,                T.MERCHANT_NAME,                T.MERCHANT_TAG,                T.MCC,                T.MOBILE,                T.DENOMINATION,                T.VAT_NUMBER,                T.PRODUCT_CODE,                T.GROUP_CODE,                T.BANK_CODE,                T.SURNAME,                T.PROXY_TYPE,                T.PROXY_VALUE,                T.EMAIL,                T.DOCUMENT_ID,                T.CHANNEL_NAME,                T.LOGO,                T.EXHF_ID,                T.CHANNEL_ID,                T.CHANNEL_USERID,                T.CHANNEL_PRODUCT,                T.CHANNEL_SUB_PRODUCT,                T.CHANNEL_TRAN_CODE,                T.CHANNEL_REFNO,                T.CREATED_DATE,                T.STATUS,                T.PROCESS_STATUS,                T.TENANT_ID,                T.DTT_CODE,                T.DT_CODE           FROM NPSS_MERCHANT_PROXY T) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Details Vertical List CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Name","target_column":"MERCHANT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Surname","target_column":"SURNAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Tag","target_column":"MERCHANT_TAG","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"MCC","target_column":"MCC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Mobile","target_column":"MOBILE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Denomination","target_column":"DENOMINATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"VAT Number","target_column":"VAT_NUMBER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Group Code","target_column":"GROUP_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Bank Code","target_column":"BANK_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Proxy Type","target_column":"PROXY_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Proxy Value","target_column":"PROXY_VALUE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email","target_column":"EMAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Document ID","target_column":"DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Name","target_column":"CHANNEL_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Ref No","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel UserID","target_column":"CHANNEL_USERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Sub Product","target_column":"CHANNEL_SUB_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Tran Code","target_column":"CHANNEL_TRAN_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666847369565":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847369565","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666943062148","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Merchant Accounts","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMA_ID","alias_name":"","mq_id":"MQ_1666855785825","date_format":false},{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666942645589","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1666942646115","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666942646371","date_format":false},{"column_name":"CURRENCY","alias_name":"","mq_id":"MQ_1666942702794","date_format":false},{"column_name":"DEFAULT_ACCOUNT","alias_name":"","mq_id":"MQ_1666942702970","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1699879865034","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1699879871032","date_format":false}],"joins":[]},"eq_text":"select  NPSSMA_ID,  NPSSMP_ID,  PRODUCT_CODE,  BANKUSERID,  IBAN,  CURRENCY,  DEFAULT_ACCOUNT,  EXHF_ID,  CREATED_DATE,  DT_CODE,  DTT_CODE,  TENANT_ID,  STATUS,  PROCESS_STATUS from  (  select   MA.NPSSMA_ID,   MA.NPSSMP_ID,   MA.PRODUCT_CODE,   MA.BANKUSERID,   MA.IBAN,   MA.CURRENCY,   MA.DEFAULT_ACCOUNT,   MA.EXHF_ID,   MA.CREATED_BY,   MA.CREATED_BY_NAME,   MA.CREATED_DATE,   MA.DT_CODE,   MA.DTT_CODE,   MA.MODIFIED_BY,   MA.MODIFIED_DATE,   MA.STATUS,   MA.PROCESS_STATUS,   MA.SYSTEM_ID,   MA.SYSTEM_NAME,   MA.TENANT_ID,   MA.VERSION_NO  from   NPSS_MERCHANT_ACCOUNTS MA) A $WHERE order by  NPSSMA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS merchant accounts CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"BANKUSERID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
	navigation_view_account_detail__he_for_vad() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_account_detail"
		let destn_id="navigation_view_account_detail"
		let parent_source_id=""
		let event_code="e_1666941655825"
		let event_params={"caller_name":"navigation_view_account_detail__he_for_vad","event_desc":"HE for VAD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_account_detail","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view account detail"
	navigation_view_account_detail__se_for_vsd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_account_detail"
		let destn_id="navigation_view_shop_detail"
		let parent_source_id=""
		let event_code="e_1666941739494"
		let event_params={"caller_name":"navigation_view_account_detail__se_for_vsd","event_desc":"SE for VSD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_account_detail","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
		let handler_code="show_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation view account detail"
	navigation_view_account_detail__se_for_vad_to_vcdd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_account_detail"
		let destn_id="navigation_view_cash_desk_detail"
		let parent_source_id=""
		let event_code="e_1666943644891"
		let event_params={"caller_name":"navigation_view_account_detail__se_for_vad_to_vcdd","event_desc":"SE for VAD to VCDD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_account_detail","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
		let handler_code="show_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation view account detail"
	navigation_view_account_detail__se_for_back_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_account_detail"
		let destn_id="navigation_back_to_main"
		let parent_source_id=""
		let event_code="e_1666951445498"
		let event_params={"caller_name":"navigation_view_account_detail__se_for_back_btn","event_desc":"SE for Back btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_account_detail","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
		let handler_code="show_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation view account detail"
	navigation_view_account_detail__he_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_account_detail"
		let destn_id="navigation_search"
		let parent_source_id=""
		let event_code="e_1666951592248"
		let event_params={"caller_name":"navigation_view_account_detail__he_for_search","event_desc":"HE for Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_account_detail","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666847369565":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847369565","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666943062148","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Merchant Accounts","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMA_ID","alias_name":"","mq_id":"MQ_1666855785825","date_format":false},{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666942645589","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1666942646115","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666942646371","date_format":false},{"column_name":"CURRENCY","alias_name":"","mq_id":"MQ_1666942702794","date_format":false},{"column_name":"DEFAULT_ACCOUNT","alias_name":"","mq_id":"MQ_1666942702970","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1699879865034","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1699879871032","date_format":false}],"joins":[]},"eq_text":"select  NPSSMA_ID,  NPSSMP_ID,  PRODUCT_CODE,  BANKUSERID,  IBAN,  CURRENCY,  DEFAULT_ACCOUNT,  EXHF_ID,  CREATED_DATE,  DT_CODE,  DTT_CODE,  TENANT_ID,  STATUS,  PROCESS_STATUS from  (  select   MA.NPSSMA_ID,   MA.NPSSMP_ID,   MA.PRODUCT_CODE,   MA.BANKUSERID,   MA.IBAN,   MA.CURRENCY,   MA.DEFAULT_ACCOUNT,   MA.EXHF_ID,   MA.CREATED_BY,   MA.CREATED_BY_NAME,   MA.CREATED_DATE,   MA.DT_CODE,   MA.DTT_CODE,   MA.MODIFIED_BY,   MA.MODIFIED_DATE,   MA.STATUS,   MA.PROCESS_STATUS,   MA.SYSTEM_ID,   MA.SYSTEM_NAME,   MA.TENANT_ID,   MA.VERSION_NO  from   NPSS_MERCHANT_ACCOUNTS MA) A $WHERE order by  NPSSMA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS merchant accounts CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"BANKUSERID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let internals="svm_for_account_list__brfq_for_account_details,"
		let event_data={"account_list":{"e_1666887345528":{"dts":{"dt_1304_1666846074129":{"dtts":{"":{"uicgc_code":"UICGC_5","event_code":"E_1666887345528","dt_code":"DT_1304_1666846074129","dtt_code":"","dt_desc":"NPSS Merchant Proxy DTG","dtt_desc":"NPSS Merchant Proxy","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"NPSSMA_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSSMA_ID","setd3name":"NPSSMA_ID"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666847369565":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847369565","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666943062148","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Merchant Accounts","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMA_ID","alias_name":"","mq_id":"MQ_1666855785825","date_format":false},{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666942645589","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1666942646115","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666942646371","date_format":false},{"column_name":"CURRENCY","alias_name":"","mq_id":"MQ_1666942702794","date_format":false},{"column_name":"DEFAULT_ACCOUNT","alias_name":"","mq_id":"MQ_1666942702970","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1699879865034","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1699879871032","date_format":false}],"joins":[]},"eq_text":"select  NPSSMA_ID,  NPSSMP_ID,  PRODUCT_CODE,  BANKUSERID,  IBAN,  CURRENCY,  DEFAULT_ACCOUNT,  EXHF_ID,  CREATED_DATE,  DT_CODE,  DTT_CODE,  TENANT_ID,  STATUS,  PROCESS_STATUS from  (  select   MA.NPSSMA_ID,   MA.NPSSMP_ID,   MA.PRODUCT_CODE,   MA.BANKUSERID,   MA.IBAN,   MA.CURRENCY,   MA.DEFAULT_ACCOUNT,   MA.EXHF_ID,   MA.CREATED_BY,   MA.CREATED_BY_NAME,   MA.CREATED_DATE,   MA.DT_CODE,   MA.DTT_CODE,   MA.MODIFIED_BY,   MA.MODIFIED_DATE,   MA.STATUS,   MA.PROCESS_STATUS,   MA.SYSTEM_ID,   MA.SYSTEM_NAME,   MA.TENANT_ID,   MA.VERSION_NO  from   NPSS_MERCHANT_ACCOUNTS MA) A $WHERE order by  NPSSMA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS merchant accounts CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"BANKUSERID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for account list"
	svm_for_account_list__brfq_for_account_details(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_account_list"
		let destn_id="account_details"
		let parent_source_id="account_list"
		let event_code="e_1666887374396"
		let event_params={"caller_name":"svm_for_account_list__brfq_for_account_details","event_desc":"BRFQ for Account Details","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"account_list","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666847369565":{"st_ds":{"default":{"uicgc_code":"UICGC_6","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847369565","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666943032609","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Merchant Accounts","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMA_ID","alias_name":"","mq_id":"MQ_1666855785825","date_format":false},{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666942645589","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1666942646115","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666942646371","date_format":false},{"column_name":"CURRENCY","alias_name":"","mq_id":"MQ_1666942702794","date_format":false},{"column_name":"DEFAULT_ACCOUNT","alias_name":"","mq_id":"MQ_1666942702970","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1699879865034","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1699879871032","date_format":false}],"joins":[]},"eq_text":"select  NPSSMA_ID,  NPSSMP_ID,  PRODUCT_CODE,  BANKUSERID,  IBAN,  CURRENCY,  DEFAULT_ACCOUNT,  EXHF_ID,  CREATED_DATE,  DT_CODE,  DTT_CODE,  TENANT_ID,  STATUS,  PROCESS_STATUS from  (  select   MA.NPSSMA_ID,   MA.NPSSMP_ID,   MA.PRODUCT_CODE,   MA.BANKUSERID,   MA.IBAN,   MA.CURRENCY,   MA.DEFAULT_ACCOUNT,   MA.EXHF_ID,   MA.CREATED_BY,   MA.CREATED_BY_NAME,   MA.CREATED_DATE,   MA.DT_CODE,   MA.DTT_CODE,   MA.MODIFIED_BY,   MA.MODIFIED_DATE,   MA.STATUS,   MA.PROCESS_STATUS,   MA.SYSTEM_ID,   MA.SYSTEM_NAME,   MA.TENANT_ID,   MA.VERSION_NO  from   NPSS_MERCHANT_ACCOUNTS MA) A $WHERE order by  NPSSMA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS merchant accounts ver CCD","filter":[{"filter_name":"NPSSMA_ID","binding_name":"NPSSMA_ID","binding_value":"","source_name":"MI_LEVEL_NPSSMA_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"CURRENCY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Default Account","target_column":"DEFAULT_ACCOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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

	//Handler for SELECTION_CHANGED event of "merchant details"
	merchant_details__svm_for_md() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_details"
		let destn_id="merchant_details"
		let parent_source_id=""
		let event_code="e_1666940302610"
		let event_params={"caller_name":"merchant_details__svm_for_md","event_desc":"SVM for MD","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant_details","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666846129395":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666846129395","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666942341120","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666878546556","date_format":false},{"column_name":"MERCHANT_NAME","alias_name":"","mq_id":"MQ_1666878546755","date_format":false},{"column_name":"MERCHANT_TAG","alias_name":"","mq_id":"MQ_1666878547035","date_format":false},{"column_name":"MCC","alias_name":"","mq_id":"MQ_1666878547491","date_format":false},{"column_name":"MOBILE","alias_name":"","mq_id":"MQ_1666878578991","date_format":false},{"column_name":"DENOMINATION","alias_name":"","mq_id":"MQ_1666878579343","date_format":false},{"column_name":"VAT_NUMBER","alias_name":"","mq_id":"MQ_1666878595391","date_format":false},{"column_name":"SURNAME","alias_name":"","mq_id":"MQ_1666879178543","date_format":false},{"column_name":"GROUP_CODE","alias_name":"","mq_id":"MQ_1666879178805","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1666879179269","date_format":false},{"column_name":"PROXY_TYPE","alias_name":"","mq_id":"MQ_1666879214612","date_format":false},{"column_name":"PROXY_VALUE","alias_name":"","mq_id":"MQ_1666879214956","date_format":false},{"column_name":"EMAIL","alias_name":"","mq_id":"MQ_1666879215132","date_format":false},{"column_name":"DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666879215308","date_format":false},{"column_name":"CHANNEL_NAME","alias_name":"","mq_id":"MQ_1666879258954","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666879259178","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666879259474","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1666879260146","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666879260394","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1666879260634","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1666879353178","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666881334242","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666881334807","date_format":false},{"column_name":"NPSSMP_ID","alias_name":"","mq_id":"MQ_1667366107578","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMP_ID,BANKUSERID,        MERCHANT_NAME,        MERCHANT_TAG,        MCC,        MOBILE,        DENOMINATION,        VAT_NUMBER,        SURNAME,        GROUP_CODE,        BANK_CODE,        PROXY_TYPE,        PROXY_VALUE,        EMAIL,        DOCUMENT_ID,        CHANNEL_NAME,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        CREATED_DATE,        STATUS,        PROCESS_STATUS,        TENANT_ID,        DTT_CODE,        DT_CODE   FROM (SELECT T.NPSSMP_ID,                T.BANKUSERID,                T.MERCHANT_NAME,                T.MERCHANT_TAG,                T.MCC,                T.MOBILE,                T.DENOMINATION,                T.VAT_NUMBER,                T.PRODUCT_CODE,                T.GROUP_CODE,                T.BANK_CODE,                T.SURNAME,                T.PROXY_TYPE,                T.PROXY_VALUE,                T.EMAIL,                T.DOCUMENT_ID,                T.CHANNEL_NAME,                T.LOGO,                T.EXHF_ID,                T.CHANNEL_ID,                T.CHANNEL_USERID,                T.CHANNEL_PRODUCT,                T.CHANNEL_SUB_PRODUCT,                T.CHANNEL_TRAN_CODE,                T.CHANNEL_REFNO,                T.CREATED_DATE,                T.STATUS,                T.PROCESS_STATUS,                T.TENANT_ID,                T.DTT_CODE,                T.DT_CODE           FROM NPSS_MERCHANT_PROXY T) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Details Vertical List CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Name","target_column":"MERCHANT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Surname","target_column":"SURNAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Tag","target_column":"MERCHANT_TAG","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"MCC","target_column":"MCC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Mobile","target_column":"MOBILE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Denomination","target_column":"DENOMINATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"VAT Number","target_column":"VAT_NUMBER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Group Code","target_column":"GROUP_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Bank Code","target_column":"BANK_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Proxy Type","target_column":"PROXY_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Proxy Value","target_column":"PROXY_VALUE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email","target_column":"EMAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Document ID","target_column":"DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Name","target_column":"CHANNEL_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Ref No","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel UserID","target_column":"CHANNEL_USERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Sub Product","target_column":"CHANNEL_SUB_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Tran Code","target_column":"CHANNEL_TRAN_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "shop list"
	shop_list__svm_for_sl() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_list"
		let destn_id="shop_list"
		let parent_source_id=""
		let event_code="e_1666940377133"
		let event_params={"caller_name":"shop_list__svm_for_sl","event_desc":"SVM for SL","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_sl__brfq_for_sd,"
		let event_data={"shop_list":{"e_1666940377133":{"dts":{"dt_1304_1666846074129":{"dtts":{"":{"uicgc_code":"UICGC_10","event_code":"E_1666940377133","dt_code":"DT_1304_1666846074129","dtt_code":"","dt_desc":"NPSS Merchant Proxy DTG","dtt_desc":"NPSS Merchant Proxy","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"NPSSMS_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSSMS_ID","setd3name":"NPSSMS_ID"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666847660575":{"st_ds":{"default":{"uicgc_code":"UICGC_10","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847660575","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666942896186","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Shop Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666932220178","date_format":false},{"column_name":"SHOP_MID","alias_name":"","mq_id":"MQ_1666932220593","date_format":false},{"column_name":"SHOP_NAME","alias_name":"","mq_id":"MQ_1666932220745","date_format":false},{"column_name":"SHOP_ID","alias_name":"","mq_id":"MQ_1666932220913","date_format":false},{"column_name":"SHOP_TYPE","alias_name":"","mq_id":"MQ_1666932221257","date_format":false},{"column_name":"SHOP_MCC","alias_name":"","mq_id":"MQ_1666932221417","date_format":false},{"column_name":"SHOP_IBAN","alias_name":"","mq_id":"MQ_1666932221577","date_format":false},{"column_name":"BUILDING","alias_name":"","mq_id":"MQ_1666932222401","date_format":false},{"column_name":"STREET","alias_name":"","mq_id":"MQ_1666932222561","date_format":false},{"column_name":"CITY","alias_name":"","mq_id":"MQ_1666932288472","date_format":false},{"column_name":"POSTAL_CODE","alias_name":"","mq_id":"MQ_1666932288632","date_format":false},{"column_name":"COUNTY","alias_name":"","mq_id":"MQ_1666932289064","date_format":false},{"column_name":"COUNTRY","alias_name":"","mq_id":"MQ_1666932350992","date_format":false},{"column_name":"NPSSMS_ID","alias_name":"","mq_id":"MQ_1667366133634","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1699879751949","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1699879761283","date_format":false}],"joins":[]},"eq_text":"select  NPSSMS_ID,  NPSSMP_ID,  BANKUSERID,  SHOP_MID,  SHOP_NAME,  SHOP_ID,  SHOP_TYPE,  SHOP_MCC,  SHOP_IBAN,  BUILDING,  STREET,  CITY,  POSTAL_CODE,  COUNTY,  COUNTRY,  STATUS,  PROCESS_STATUS,  TENANT_ID,  CREATED_DATE,  DT_CODE,  DTT_CODE from  (  select   S.NPSSMS_ID,   s.NPSSMP_ID,   S.PRODUCT_CODE,   S.BANKUSERID,   S.SHOP_NAME,   S.SHOP_MID,   S.SHOP_ID,   S.SHOP_TYPE,   S.SHOP_MCC,   S.SHOP_IBAN,   S.BUILDING,   S.STREET,   S.CITY,   S.POSTAL_CODE,   S.COUNTY,   S.COUNTRY,   S.EXHF_ID,   S.STATUS,   S.PROCESS_STATUS,   S.TENANT_ID,   S.CREATED_DATE,   S.DTT_CODE,   S.DT_CODE  from   NPSS_MERCHANT_SHOPS S) VW $WHERE order by  NPSSMS_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Shop Details Horizontal CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop MID","target_column":"SHOP_MID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop Name","target_column":"SHOP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for sl"
	svm_for_sl__brfq_for_sd(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_sl"
		let destn_id="shop_detail"
		let parent_source_id="shop_list"
		let event_code="e_1667364468075"
		let event_params={"caller_name":"svm_for_sl__brfq_for_sd","event_desc":"BRFQ for SD","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"shop_list","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666847660575":{"st_ds":{"default":{"uicgc_code":"UICGC_11","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847660575","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666942883845","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Shop Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666932220178","date_format":false},{"column_name":"SHOP_MID","alias_name":"","mq_id":"MQ_1666932220593","date_format":false},{"column_name":"SHOP_NAME","alias_name":"","mq_id":"MQ_1666932220745","date_format":false},{"column_name":"SHOP_ID","alias_name":"","mq_id":"MQ_1666932220913","date_format":false},{"column_name":"SHOP_TYPE","alias_name":"","mq_id":"MQ_1666932221257","date_format":false},{"column_name":"SHOP_MCC","alias_name":"","mq_id":"MQ_1666932221417","date_format":false},{"column_name":"SHOP_IBAN","alias_name":"","mq_id":"MQ_1666932221577","date_format":false},{"column_name":"BUILDING","alias_name":"","mq_id":"MQ_1666932222401","date_format":false},{"column_name":"STREET","alias_name":"","mq_id":"MQ_1666932222561","date_format":false},{"column_name":"CITY","alias_name":"","mq_id":"MQ_1666932288472","date_format":false},{"column_name":"POSTAL_CODE","alias_name":"","mq_id":"MQ_1666932288632","date_format":false},{"column_name":"COUNTY","alias_name":"","mq_id":"MQ_1666932289064","date_format":false},{"column_name":"COUNTRY","alias_name":"","mq_id":"MQ_1666932350992","date_format":false},{"column_name":"NPSSMS_ID","alias_name":"","mq_id":"MQ_1667366133634","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1699879751949","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1699879761283","date_format":false}],"joins":[]},"eq_text":"select  NPSSMS_ID,  NPSSMP_ID,  BANKUSERID,  SHOP_MID,  SHOP_NAME,  SHOP_ID,  SHOP_TYPE,  SHOP_MCC,  SHOP_IBAN,  BUILDING,  STREET,  CITY,  POSTAL_CODE,  COUNTY,  COUNTRY,  STATUS,  PROCESS_STATUS,  TENANT_ID,  CREATED_DATE,  DT_CODE,  DTT_CODE from  (  select   S.NPSSMS_ID,   s.NPSSMP_ID,   S.PRODUCT_CODE,   S.BANKUSERID,   S.SHOP_NAME,   S.SHOP_MID,   S.SHOP_ID,   S.SHOP_TYPE,   S.SHOP_MCC,   S.SHOP_IBAN,   S.BUILDING,   S.STREET,   S.CITY,   S.POSTAL_CODE,   S.COUNTY,   S.COUNTRY,   S.EXHF_ID,   S.STATUS,   S.PROCESS_STATUS,   S.TENANT_ID,   S.CREATED_DATE,   S.DTT_CODE,   S.DT_CODE  from   NPSS_MERCHANT_SHOPS S) VW $WHERE order by  NPSSMS_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Shop Details Vertical CCD","filter":[{"filter_name":"NPSSMS_ID","binding_name":"NPSSMS_ID","binding_value":"","source_name":"MI_LEVEL_NPSSMS_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop MID","target_column":"SHOP_MID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop Name","target_column":"SHOP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop ID","target_column":"SHOP_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop Type","target_column":"SHOP_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop MCC","target_column":"SHOP_MCC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop IBAN","target_column":"SHOP_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Building","target_column":"BUILDING","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Street","target_column":"STREET","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"City","target_column":"CITY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Postal Code","target_column":"POSTAL_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"County","target_column":"COUNTY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Country","target_column":"COUNTRY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation view shop detail"
	navigation_view_shop_detail__sp_for_vsd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_shop_detail"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666940479260"
		let event_params={"caller_name":"navigation_view_shop_detail__sp_for_vsd","event_desc":"SP for VSD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_shop_detail","raiseparam":{"profile_code":"BTL_1304_1666939457517"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view shop detail"
	navigation_view_shop_detail__sh_for_vsd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_shop_detail"
		let destn_id="navigation_view_shop_detail"
		let parent_source_id=""
		let event_code="e_1666940894592"
		let event_params={"caller_name":"navigation_view_shop_detail__sh_for_vsd","event_desc":"SH for VSD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_shop_detail","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view shop detail"
	navigation_view_shop_detail__se_for_vcdd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_shop_detail"
		let destn_id="navigation_view_cash_desk_detail"
		let parent_source_id=""
		let event_code="e_1666941770012"
		let event_params={"caller_name":"navigation_view_shop_detail__se_for_vcdd","event_desc":"SE for VCDD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_shop_detail","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
		let handler_code="show_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation view shop detail"
	navigation_view_shop_detail__se_view_shop_to_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_shop_detail"
		let destn_id="navigation_back_to_main"
		let parent_source_id=""
		let event_code="e_1666951850283"
		let event_params={"caller_name":"navigation_view_shop_detail__se_view_shop_to_back","event_desc":"SE View Shop to Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_shop_detail","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
		let handler_code="show_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation view shop detail"
	navigation_view_shop_detail__se_view_shop_to_view_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_shop_detail"
		let destn_id="navigation_view_account_detail"
		let parent_source_id=""
		let event_code="e_1667038918755"
		let event_params={"caller_name":"navigation_view_shop_detail__se_view_shop_to_view_account","event_desc":"SE View Shop to View Account","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_shop_detail","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
		let handler_code="show_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation view shop detail"
	navigation_view_shop_detail__he_view_shop_to_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_shop_detail"
		let destn_id="navigation_search"
		let parent_source_id=""
		let event_code="e_1667202813697"
		let event_params={"caller_name":"navigation_view_shop_detail__he_view_shop_to_search","event_desc":"HE View Shop to Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_shop_detail","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view shop detail"
	navigation_view_shop_detail__brfq_for_merchant_dtl() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_shop_detail"
		let destn_id="merchant_details"
		let parent_source_id=""
		let event_code="e_1667203251283"
		let event_params={"caller_name":"navigation_view_shop_detail__brfq_for_merchant_dtl","event_desc":"BRFQ for merchant dtl","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_shop_detail","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666846129395":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666846129395","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666942341120","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666878546556","date_format":false},{"column_name":"MERCHANT_NAME","alias_name":"","mq_id":"MQ_1666878546755","date_format":false},{"column_name":"MERCHANT_TAG","alias_name":"","mq_id":"MQ_1666878547035","date_format":false},{"column_name":"MCC","alias_name":"","mq_id":"MQ_1666878547491","date_format":false},{"column_name":"MOBILE","alias_name":"","mq_id":"MQ_1666878578991","date_format":false},{"column_name":"DENOMINATION","alias_name":"","mq_id":"MQ_1666878579343","date_format":false},{"column_name":"VAT_NUMBER","alias_name":"","mq_id":"MQ_1666878595391","date_format":false},{"column_name":"SURNAME","alias_name":"","mq_id":"MQ_1666879178543","date_format":false},{"column_name":"GROUP_CODE","alias_name":"","mq_id":"MQ_1666879178805","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1666879179269","date_format":false},{"column_name":"PROXY_TYPE","alias_name":"","mq_id":"MQ_1666879214612","date_format":false},{"column_name":"PROXY_VALUE","alias_name":"","mq_id":"MQ_1666879214956","date_format":false},{"column_name":"EMAIL","alias_name":"","mq_id":"MQ_1666879215132","date_format":false},{"column_name":"DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666879215308","date_format":false},{"column_name":"CHANNEL_NAME","alias_name":"","mq_id":"MQ_1666879258954","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666879259178","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666879259474","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1666879260146","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666879260394","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1666879260634","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1666879353178","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666881334242","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666881334807","date_format":false},{"column_name":"NPSSMP_ID","alias_name":"","mq_id":"MQ_1667366107578","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMP_ID,BANKUSERID,        MERCHANT_NAME,        MERCHANT_TAG,        MCC,        MOBILE,        DENOMINATION,        VAT_NUMBER,        SURNAME,        GROUP_CODE,        BANK_CODE,        PROXY_TYPE,        PROXY_VALUE,        EMAIL,        DOCUMENT_ID,        CHANNEL_NAME,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        CREATED_DATE,        STATUS,        PROCESS_STATUS,        TENANT_ID,        DTT_CODE,        DT_CODE   FROM (SELECT T.NPSSMP_ID,                T.BANKUSERID,                T.MERCHANT_NAME,                T.MERCHANT_TAG,                T.MCC,                T.MOBILE,                T.DENOMINATION,                T.VAT_NUMBER,                T.PRODUCT_CODE,                T.GROUP_CODE,                T.BANK_CODE,                T.SURNAME,                T.PROXY_TYPE,                T.PROXY_VALUE,                T.EMAIL,                T.DOCUMENT_ID,                T.CHANNEL_NAME,                T.LOGO,                T.EXHF_ID,                T.CHANNEL_ID,                T.CHANNEL_USERID,                T.CHANNEL_PRODUCT,                T.CHANNEL_SUB_PRODUCT,                T.CHANNEL_TRAN_CODE,                T.CHANNEL_REFNO,                T.CREATED_DATE,                T.STATUS,                T.PROCESS_STATUS,                T.TENANT_ID,                T.DTT_CODE,                T.DT_CODE           FROM NPSS_MERCHANT_PROXY T) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Details Vertical List CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Name","target_column":"MERCHANT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Surname","target_column":"SURNAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Tag","target_column":"MERCHANT_TAG","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"MCC","target_column":"MCC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Mobile","target_column":"MOBILE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Denomination","target_column":"DENOMINATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"VAT Number","target_column":"VAT_NUMBER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Group Code","target_column":"GROUP_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Bank Code","target_column":"BANK_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Proxy Type","target_column":"PROXY_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Proxy Value","target_column":"PROXY_VALUE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email","target_column":"EMAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Document ID","target_column":"DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Name","target_column":"CHANNEL_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Ref No","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel UserID","target_column":"CHANNEL_USERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Sub Product","target_column":"CHANNEL_SUB_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Tran Code","target_column":"CHANNEL_TRAN_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation view shop detail"
	navigation_view_shop_detail__brfq_for_shop_list_from_shop_dtl_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_shop_detail"
		let destn_id="shop_list"
		let parent_source_id=""
		let event_code="e_1667203314161"
		let event_params={"caller_name":"navigation_view_shop_detail__brfq_for_shop_list_from_shop_dtl_btn","event_desc":"BRFQ for shop list from shop dtl btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_shop_detail","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_shop_list_from_shop_dtl_btn__sfr_for_shop_list_from_shop_dtl_btn,"
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666847660575":{"st_ds":{"default":{"uicgc_code":"UICGC_10","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847660575","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666942896186","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Shop Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666932220178","date_format":false},{"column_name":"SHOP_MID","alias_name":"","mq_id":"MQ_1666932220593","date_format":false},{"column_name":"SHOP_NAME","alias_name":"","mq_id":"MQ_1666932220745","date_format":false},{"column_name":"SHOP_ID","alias_name":"","mq_id":"MQ_1666932220913","date_format":false},{"column_name":"SHOP_TYPE","alias_name":"","mq_id":"MQ_1666932221257","date_format":false},{"column_name":"SHOP_MCC","alias_name":"","mq_id":"MQ_1666932221417","date_format":false},{"column_name":"SHOP_IBAN","alias_name":"","mq_id":"MQ_1666932221577","date_format":false},{"column_name":"BUILDING","alias_name":"","mq_id":"MQ_1666932222401","date_format":false},{"column_name":"STREET","alias_name":"","mq_id":"MQ_1666932222561","date_format":false},{"column_name":"CITY","alias_name":"","mq_id":"MQ_1666932288472","date_format":false},{"column_name":"POSTAL_CODE","alias_name":"","mq_id":"MQ_1666932288632","date_format":false},{"column_name":"COUNTY","alias_name":"","mq_id":"MQ_1666932289064","date_format":false},{"column_name":"COUNTRY","alias_name":"","mq_id":"MQ_1666932350992","date_format":false},{"column_name":"NPSSMS_ID","alias_name":"","mq_id":"MQ_1667366133634","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1699879751949","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1699879761283","date_format":false}],"joins":[]},"eq_text":"select  NPSSMS_ID,  NPSSMP_ID,  BANKUSERID,  SHOP_MID,  SHOP_NAME,  SHOP_ID,  SHOP_TYPE,  SHOP_MCC,  SHOP_IBAN,  BUILDING,  STREET,  CITY,  POSTAL_CODE,  COUNTY,  COUNTRY,  STATUS,  PROCESS_STATUS,  TENANT_ID,  CREATED_DATE,  DT_CODE,  DTT_CODE from  (  select   S.NPSSMS_ID,   s.NPSSMP_ID,   S.PRODUCT_CODE,   S.BANKUSERID,   S.SHOP_NAME,   S.SHOP_MID,   S.SHOP_ID,   S.SHOP_TYPE,   S.SHOP_MCC,   S.SHOP_IBAN,   S.BUILDING,   S.STREET,   S.CITY,   S.POSTAL_CODE,   S.COUNTY,   S.COUNTRY,   S.EXHF_ID,   S.STATUS,   S.PROCESS_STATUS,   S.TENANT_ID,   S.CREATED_DATE,   S.DTT_CODE,   S.DT_CODE  from   NPSS_MERCHANT_SHOPS S) VW $WHERE order by  NPSSMS_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Shop Details Horizontal CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop MID","target_column":"SHOP_MID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop Name","target_column":"SHOP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for shop list from shop dtl btn"
	brfq_for_shop_list_from_shop_dtl_btn__sfr_for_shop_list_from_shop_dtl_btn(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_shop_list_from_shop_dtl_btn"
		let destn_id="shop_list"
		let parent_source_id="navigation_view_shop_detail"
		let event_code="e_1667203363472"
		let event_params={"caller_name":"brfq_for_shop_list_from_shop_dtl_btn__sfr_for_shop_list_from_shop_dtl_btn","event_desc":"SFR for shop list from shop dtl btn","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_view_shop_detail","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666847660575":{"st_ds":{"default":{"uicgc_code":"UICGC_10","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847660575","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666942896186","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Shop Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666932220178","date_format":false},{"column_name":"SHOP_MID","alias_name":"","mq_id":"MQ_1666932220593","date_format":false},{"column_name":"SHOP_NAME","alias_name":"","mq_id":"MQ_1666932220745","date_format":false},{"column_name":"SHOP_ID","alias_name":"","mq_id":"MQ_1666932220913","date_format":false},{"column_name":"SHOP_TYPE","alias_name":"","mq_id":"MQ_1666932221257","date_format":false},{"column_name":"SHOP_MCC","alias_name":"","mq_id":"MQ_1666932221417","date_format":false},{"column_name":"SHOP_IBAN","alias_name":"","mq_id":"MQ_1666932221577","date_format":false},{"column_name":"BUILDING","alias_name":"","mq_id":"MQ_1666932222401","date_format":false},{"column_name":"STREET","alias_name":"","mq_id":"MQ_1666932222561","date_format":false},{"column_name":"CITY","alias_name":"","mq_id":"MQ_1666932288472","date_format":false},{"column_name":"POSTAL_CODE","alias_name":"","mq_id":"MQ_1666932288632","date_format":false},{"column_name":"COUNTY","alias_name":"","mq_id":"MQ_1666932289064","date_format":false},{"column_name":"COUNTRY","alias_name":"","mq_id":"MQ_1666932350992","date_format":false},{"column_name":"NPSSMS_ID","alias_name":"","mq_id":"MQ_1667366133634","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1699879751949","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1699879761283","date_format":false}],"joins":[]},"eq_text":"select  NPSSMS_ID,  NPSSMP_ID,  BANKUSERID,  SHOP_MID,  SHOP_NAME,  SHOP_ID,  SHOP_TYPE,  SHOP_MCC,  SHOP_IBAN,  BUILDING,  STREET,  CITY,  POSTAL_CODE,  COUNTY,  COUNTRY,  STATUS,  PROCESS_STATUS,  TENANT_ID,  CREATED_DATE,  DT_CODE,  DTT_CODE from  (  select   S.NPSSMS_ID,   s.NPSSMP_ID,   S.PRODUCT_CODE,   S.BANKUSERID,   S.SHOP_NAME,   S.SHOP_MID,   S.SHOP_ID,   S.SHOP_TYPE,   S.SHOP_MCC,   S.SHOP_IBAN,   S.BUILDING,   S.STREET,   S.CITY,   S.POSTAL_CODE,   S.COUNTY,   S.COUNTRY,   S.EXHF_ID,   S.STATUS,   S.PROCESS_STATUS,   S.TENANT_ID,   S.CREATED_DATE,   S.DTT_CODE,   S.DT_CODE  from   NPSS_MERCHANT_SHOPS S) VW $WHERE order by  NPSSMS_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Shop Details Horizontal CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop MID","target_column":"SHOP_MID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop Name","target_column":"SHOP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation view cash desk detail"
	navigation_view_cash_desk_detail__sp_for_vsd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_cash_desk_detail"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666940691219"
		let event_params={"caller_name":"navigation_view_cash_desk_detail__sp_for_vsd","event_desc":"SP for vsd","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_cash_desk_detail","raiseparam":{"profile_code":"BTL_1304_1666940042844"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view cash desk detail"
	navigation_view_cash_desk_detail__sh__for_vcddetail() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_cash_desk_detail"
		let destn_id="navigation_view_cash_desk_detail"
		let parent_source_id=""
		let event_code="e_1666941852703"
		let event_params={"caller_name":"navigation_view_cash_desk_detail__sh__for_vcddetail","event_desc":"SH  for VCDDetail","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_cash_desk_detail","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view cash desk detail"
	navigation_view_cash_desk_detail__brfq_for_cash_detail() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_cash_desk_detail"
		let destn_id="shop_detail"
		let parent_source_id=""
		let event_code="e_1666943957498"
		let event_params={"caller_name":"navigation_view_cash_desk_detail__brfq_for_cash_detail","event_desc":"BRFQ for cash detail","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_cash_desk_detail","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666847660575":{"st_ds":{"default":{"uicgc_code":"UICGC_11","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847660575","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666942883845","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Shop Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666932220178","date_format":false},{"column_name":"SHOP_MID","alias_name":"","mq_id":"MQ_1666932220593","date_format":false},{"column_name":"SHOP_NAME","alias_name":"","mq_id":"MQ_1666932220745","date_format":false},{"column_name":"SHOP_ID","alias_name":"","mq_id":"MQ_1666932220913","date_format":false},{"column_name":"SHOP_TYPE","alias_name":"","mq_id":"MQ_1666932221257","date_format":false},{"column_name":"SHOP_MCC","alias_name":"","mq_id":"MQ_1666932221417","date_format":false},{"column_name":"SHOP_IBAN","alias_name":"","mq_id":"MQ_1666932221577","date_format":false},{"column_name":"BUILDING","alias_name":"","mq_id":"MQ_1666932222401","date_format":false},{"column_name":"STREET","alias_name":"","mq_id":"MQ_1666932222561","date_format":false},{"column_name":"CITY","alias_name":"","mq_id":"MQ_1666932288472","date_format":false},{"column_name":"POSTAL_CODE","alias_name":"","mq_id":"MQ_1666932288632","date_format":false},{"column_name":"COUNTY","alias_name":"","mq_id":"MQ_1666932289064","date_format":false},{"column_name":"COUNTRY","alias_name":"","mq_id":"MQ_1666932350992","date_format":false},{"column_name":"NPSSMS_ID","alias_name":"","mq_id":"MQ_1667366133634","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1699879751949","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1699879761283","date_format":false}],"joins":[]},"eq_text":"select  NPSSMS_ID,  NPSSMP_ID,  BANKUSERID,  SHOP_MID,  SHOP_NAME,  SHOP_ID,  SHOP_TYPE,  SHOP_MCC,  SHOP_IBAN,  BUILDING,  STREET,  CITY,  POSTAL_CODE,  COUNTY,  COUNTRY,  STATUS,  PROCESS_STATUS,  TENANT_ID,  CREATED_DATE,  DT_CODE,  DTT_CODE from  (  select   S.NPSSMS_ID,   s.NPSSMP_ID,   S.PRODUCT_CODE,   S.BANKUSERID,   S.SHOP_NAME,   S.SHOP_MID,   S.SHOP_ID,   S.SHOP_TYPE,   S.SHOP_MCC,   S.SHOP_IBAN,   S.BUILDING,   S.STREET,   S.CITY,   S.POSTAL_CODE,   S.COUNTY,   S.COUNTRY,   S.EXHF_ID,   S.STATUS,   S.PROCESS_STATUS,   S.TENANT_ID,   S.CREATED_DATE,   S.DTT_CODE,   S.DT_CODE  from   NPSS_MERCHANT_SHOPS S) VW $WHERE order by  NPSSMS_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Shop Details Vertical CCD","filter":[{"filter_name":"NPSSMS_ID","binding_name":"NPSSMS_ID","binding_value":"","source_name":"MI_LEVEL_NPSSMS_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop MID","target_column":"SHOP_MID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop Name","target_column":"SHOP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop ID","target_column":"SHOP_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop Type","target_column":"SHOP_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop MCC","target_column":"SHOP_MCC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop IBAN","target_column":"SHOP_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Building","target_column":"BUILDING","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Street","target_column":"STREET","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"City","target_column":"CITY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Postal Code","target_column":"POSTAL_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"County","target_column":"COUNTY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Country","target_column":"COUNTRY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation view cash desk detail"
	navigation_view_cash_desk_detail__se_for_case_desk_to_view_shop() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_cash_desk_detail"
		let destn_id="navigation_view_shop_detail"
		let parent_source_id=""
		let event_code="e_1666944430832"
		let event_params={"caller_name":"navigation_view_cash_desk_detail__se_for_case_desk_to_view_shop","event_desc":"SE for Case Desk to View Shop","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_cash_desk_detail","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
		let handler_code="show_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation view cash desk detail"
	navigation_view_cash_desk_detail__se_for_case_desk_to_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_cash_desk_detail"
		let destn_id="navigation_back_to_main"
		let parent_source_id=""
		let event_code="e_1666951863242"
		let event_params={"caller_name":"navigation_view_cash_desk_detail__se_for_case_desk_to_back","event_desc":"SE for Case Desk to Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_cash_desk_detail","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
		let handler_code="show_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation view cash desk detail"
	navigation_view_cash_desk_detail__se_for_case_desk_to_view_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_cash_desk_detail"
		let destn_id="navigation_view_account_detail"
		let parent_source_id=""
		let event_code="e_1667038835040"
		let event_params={"caller_name":"navigation_view_cash_desk_detail__se_for_case_desk_to_view_account","event_desc":"SE for Case Desk to View Account","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_cash_desk_detail","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
		let handler_code="show_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation view cash desk detail"
	navigation_view_cash_desk_detail__he_view_cash_to_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_cash_desk_detail"
		let destn_id="navigation_search"
		let parent_source_id=""
		let event_code="e_1667039025983"
		let event_params={"caller_name":"navigation_view_cash_desk_detail__he_view_cash_to_search","event_desc":"HE View Cash to Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_cash_desk_detail","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view cash desk detail"
	navigation_view_cash_desk_detail__brfq_for_view_cash_btn_to_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_cash_desk_detail"
		let destn_id="cash_desk_list"
		let parent_source_id=""
		let event_code="e_1667202480839"
		let event_params={"caller_name":"navigation_view_cash_desk_detail__brfq_for_view_cash_btn_to_list","event_desc":"BRFQ for View Cash btn to List","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_cash_desk_detail","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_view_cash_btn_to_list__sfr_for_cdlist,"
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666848298941":{"st_ds":{"default":{"uicgc_code":"UICGC_12","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666848298941","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666942596756","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Cash Desk Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666882336815","date_format":false},{"column_name":"CASHDESK_ID","alias_name":"","mq_id":"MQ_1666882337070","date_format":false},{"column_name":"CASHDESK_OVERLAY_ID","alias_name":"","mq_id":"MQ_1666882337573","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666882360517","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666882360725","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666882360901","date_format":true},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1666882395708","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1667365781652","date_format":false},{"column_name":"NPSSMC_ID","alias_name":"","mq_id":"MQ_1667365937621","date_format":false}],"joins":[]},"eq_text":"select  NPSSMC_ID,  NPSSMS_ID,  BANKUSERID,  CASHDESK_ID,  CASHDESK_OVERLAY_ID,  CREATED_DATE,  STATUS,  PROCESS_STATUS,  TENANT_ID,  DTT_CODE,  DT_CODE from  (  select   C.NPSSMC_ID,   C.NPSSMS_ID,   C.BANKUSERID,   C.CASHDESK_ID,   C.CASHDESK_OVERLAY_ID,   C.CREATED_DATE,   C.STATUS,   C.PROCESS_STATUS,   C.TENANT_ID,   C.DTT_CODE,   C.DT_CODE  from   NPSS_MERCHANT_CASHDESK C) VW $WHERE order by  NPSSMC_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Cash Desk Details CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cash Desk ID","target_column":"CASHDESK_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for view cash btn to list"
	brfq_for_view_cash_btn_to_list__sfr_for_cdlist(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_view_cash_btn_to_list"
		let destn_id="cash_desk_list"
		let parent_source_id="navigation_view_cash_desk_detail"
		let event_code="e_1667202535569"
		let event_params={"caller_name":"brfq_for_view_cash_btn_to_list__sfr_for_cdlist","event_desc":"SFR for CDList","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_view_cash_desk_detail","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666848298941":{"st_ds":{"default":{"uicgc_code":"UICGC_12","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666848298941","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666942596756","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Cash Desk Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666882336815","date_format":false},{"column_name":"CASHDESK_ID","alias_name":"","mq_id":"MQ_1666882337070","date_format":false},{"column_name":"CASHDESK_OVERLAY_ID","alias_name":"","mq_id":"MQ_1666882337573","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666882360517","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666882360725","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666882360901","date_format":true},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1666882395708","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1667365781652","date_format":false},{"column_name":"NPSSMC_ID","alias_name":"","mq_id":"MQ_1667365937621","date_format":false}],"joins":[]},"eq_text":"select  NPSSMC_ID,  NPSSMS_ID,  BANKUSERID,  CASHDESK_ID,  CASHDESK_OVERLAY_ID,  CREATED_DATE,  STATUS,  PROCESS_STATUS,  TENANT_ID,  DTT_CODE,  DT_CODE from  (  select   C.NPSSMC_ID,   C.NPSSMS_ID,   C.BANKUSERID,   C.CASHDESK_ID,   C.CASHDESK_OVERLAY_ID,   C.CREATED_DATE,   C.STATUS,   C.PROCESS_STATUS,   C.TENANT_ID,   C.DTT_CODE,   C.DT_CODE  from   NPSS_MERCHANT_CASHDESK C) VW $WHERE order by  NPSSMC_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Cash Desk Details CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cash Desk ID","target_column":"CASHDESK_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "cash desk list"
	cash_desk_list__svm_for_cdl() { 
		let Dest_Is_ctrl=true
		
		let source_id="cash_desk_list"
		let destn_id="cash_desk_list"
		let parent_source_id=""
		let event_code="e_1666940620267"
		let event_params={"caller_name":"cash_desk_list__svm_for_cdl","event_desc":"SVM for CDL","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"cash_desk_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_cdl__brfq_for_cdd,"
		let event_data={"cash_desk_list":{"e_1666940620267":{"dts":{"dt_1304_1666846074129":{"dtts":{"":{"uicgc_code":"UICGC_12","event_code":"E_1666940620267","dt_code":"DT_1304_1666846074129","dtt_code":"","dt_desc":"NPSS Merchant Proxy DTG","dtt_desc":"NPSS Merchant Proxy","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"NPSSMC_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSSMC_ID","setd3name":"NPSSMC_ID"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666848298941":{"st_ds":{"default":{"uicgc_code":"UICGC_12","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666848298941","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666942596756","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Cash Desk Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666882336815","date_format":false},{"column_name":"CASHDESK_ID","alias_name":"","mq_id":"MQ_1666882337070","date_format":false},{"column_name":"CASHDESK_OVERLAY_ID","alias_name":"","mq_id":"MQ_1666882337573","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666882360517","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666882360725","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666882360901","date_format":true},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1666882395708","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1667365781652","date_format":false},{"column_name":"NPSSMC_ID","alias_name":"","mq_id":"MQ_1667365937621","date_format":false}],"joins":[]},"eq_text":"select  NPSSMC_ID,  NPSSMS_ID,  BANKUSERID,  CASHDESK_ID,  CASHDESK_OVERLAY_ID,  CREATED_DATE,  STATUS,  PROCESS_STATUS,  TENANT_ID,  DTT_CODE,  DT_CODE from  (  select   C.NPSSMC_ID,   C.NPSSMS_ID,   C.BANKUSERID,   C.CASHDESK_ID,   C.CASHDESK_OVERLAY_ID,   C.CREATED_DATE,   C.STATUS,   C.PROCESS_STATUS,   C.TENANT_ID,   C.DTT_CODE,   C.DT_CODE  from   NPSS_MERCHANT_CASHDESK C) VW $WHERE order by  NPSSMC_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Cash Desk Details CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cash Desk ID","target_column":"CASHDESK_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for cdl"
	svm_for_cdl__brfq_for_cdd(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_cdl"
		let destn_id="cash_desk_detail"
		let parent_source_id="cash_desk_list"
		let event_code="e_1666940669680"
		let event_params={"caller_name":"svm_for_cdl__brfq_for_cdd","event_desc":"BRFQ for CDD","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"cash_desk_list","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666848298941":{"st_ds":{"default":{"uicgc_code":"UICGC_13","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666848298941","dtt_desc":"NPSS Merchant Proxy","ds_eligible":"DS_1666942565570","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Cash Desk Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666882336815","date_format":false},{"column_name":"CASHDESK_ID","alias_name":"","mq_id":"MQ_1666882337070","date_format":false},{"column_name":"CASHDESK_OVERLAY_ID","alias_name":"","mq_id":"MQ_1666882337573","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666882360517","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666882360725","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666882360901","date_format":true},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1666882395708","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1667365781652","date_format":false},{"column_name":"NPSSMC_ID","alias_name":"","mq_id":"MQ_1667365937621","date_format":false}],"joins":[]},"eq_text":"select  NPSSMC_ID,  NPSSMS_ID,  BANKUSERID,  CASHDESK_ID,  CASHDESK_OVERLAY_ID,  CREATED_DATE,  STATUS,  PROCESS_STATUS,  TENANT_ID,  DTT_CODE,  DT_CODE from  (  select   C.NPSSMC_ID,   C.NPSSMS_ID,   C.BANKUSERID,   C.CASHDESK_ID,   C.CASHDESK_OVERLAY_ID,   C.CREATED_DATE,   C.STATUS,   C.PROCESS_STATUS,   C.TENANT_ID,   C.DTT_CODE,   C.DT_CODE  from   NPSS_MERCHANT_CASHDESK C) VW $WHERE order by  NPSSMC_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Cash Desk Details VER CCD","filter":[{"filter_name":"NPSSMC_ID","binding_name":"NPSSMC_ID","binding_value":"","source_name":"MI_LEVEL_NPSSMC_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cash Desk ID","target_column":"CASHDESK_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cash Desk Overlay ID","target_column":"CASHDESK_OVERLAY_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation back to main"
	navigation_back_to_main__rs_for_bck() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_back_to_main"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666951518353"
		let event_params={"caller_name":"navigation_back_to_main__rs_for_bck","event_desc":"RS for Bck","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_back_to_main","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation generate merchant tag"
	navigation_generate_merchant_tag__cc_for_generate_merchant_tag() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_generate_merchant_tag"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1680249273546"
		let event_params={"caller_name":"navigation_generate_merchant_tag__cc_for_generate_merchant_tag","event_desc":"CC for generate merchant tag","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_generate_merchant_tag","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_generate_merchant_tag__im_for_generate_merchant_tag,"
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_update_mch_tagService.fn_npss_cs_update_mch_tag(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for generate merchant tag"
	cc_for_generate_merchant_tag__im_for_generate_merchant_tag(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_generate_merchant_tag"
		let destn_id=""
		let parent_source_id="navigation_generate_merchant_tag"
		let event_code="e_1680249282641"
		let event_params={"caller_name":"cc_for_generate_merchant_tag__im_for_generate_merchant_tag","event_desc":"IM for generate merchant tag","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Merchant Tag has been generated successfully","root_source_id":"navigation_generate_merchant_tag","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="im_for_generate_merchant_tag__rs_for_generate_merchant_tag,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "im for generate merchant tag"
	im_for_generate_merchant_tag__rs_for_generate_merchant_tag(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="im_for_generate_merchant_tag"
		let destn_id=""
		let parent_source_id="cc_for_generate_merchant_tag"
		let event_code="e_1680249299343"
		let event_params={"caller_name":"im_for_generate_merchant_tag__rs_for_generate_merchant_tag","event_desc":"RS for generate merchant tag","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_generate_merchant_tag","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation generate qr"
	navigation_generate_qr__sp_for_generate_qr() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_generate_qr"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1680249326116"
		let event_params={"caller_name":"navigation_generate_qr__sp_for_generate_qr","event_desc":"SP for generate QR","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_generate_qr","raiseparam":{"profile_code":"BTL_1304_1680249522621"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation generate qr"
	navigation_generate_qr__de_for_payer_info() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_generate_qr"
		let destn_id="payor_information"
		let parent_source_id=""
		let event_code="e_1680250013673"
		let event_params={"caller_name":"navigation_generate_qr__de_for_payer_info","event_desc":"DE for payer info","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_generate_qr","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation generate qr"
	navigation_generate_qr__bvm_for_merchant_name__payor_information() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_generate_qr"
		let destn_id="npss_merchant_qr_ui_merchant_name"
		let parent_source_id=""
		let event_code="e_1680250363053"
		let event_params={"destn_comp_id":"payor_information","destn_ctrl_id":"merchant_name","caller_name":"navigation_generate_qr__bvm_for_merchant_name__payor_information","event_desc":"BVM for merchant name","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_generate_qr","raiseparam":{}}
		let handler_code="bind_value_from_memory"
		let internals=""
		let event_data={"control":{"e_1680250363053":{"dts":{"dt_1304_1666846074129":{"dtts":{"dtt_1304_1666846129395":{"uicgc_code":"CONTROL","event_code":"E_1680250363053","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666846129395","dtt_desc":"NPSS Merchant Proxy","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[],"get_from_memory":[{"level":"MI_LEVEL","value":"MI_LEVEL_MERCHANT_NAME","tb_data":"","column":"","d3name":""}],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={}
		try {
			this.handler.bind_value_from_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation generate qr"
	navigation_generate_qr__bvm_for_mer_tag__payor_information() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_generate_qr"
		let destn_id="npss_merchant_qr_ui_merchant_tag"
		let parent_source_id=""
		let event_code="e_1680250409658"
		let event_params={"destn_comp_id":"payor_information","destn_ctrl_id":"merchant_tag","caller_name":"navigation_generate_qr__bvm_for_mer_tag__payor_information","event_desc":"BVM for Mer tag","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_generate_qr","raiseparam":{}}
		let handler_code="bind_value_from_memory"
		let internals=""
		let event_data={"control":{"e_1680250409658":{"dts":{"dt_1304_1666846074129":{"dtts":{"dtt_1304_1666846129395":{"uicgc_code":"CONTROL","event_code":"E_1680250409658","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666846129395","dtt_desc":"NPSS Merchant Proxy","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[],"get_from_memory":[{"level":"MI_LEVEL","value":"MI_LEVEL_MERCHANT_TAG","tb_data":"","column":"","d3name":""}],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={}
		try {
			this.handler.bind_value_from_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "qr ui close"
	qr_ui_close__sp_for_qr_close() { 
		let Dest_Is_ctrl=true
		
		let source_id="qr_ui_close"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1680249776187"
		let event_params={"caller_name":"qr_ui_close__sp_for_qr_close","event_desc":"SP for qr close","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"qr_ui_close","raiseparam":{"profile_code":"BTL_1304_1666886091955"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "qr ui generate qr code"
	qr_ui_generate_qr_code__cc_for_qr_code() { 
		let Dest_Is_ctrl=true
		
		let source_id="qr_ui_generate_qr_code"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1680256211944"
		let event_params={"caller_name":"qr_ui_generate_qr_code__cc_for_qr_code","event_desc":"CC for qr Code","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"qr_ui_generate_qr_code","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_c_qr_code_generatorService.fn_npss_c_qr_code_generator(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "npss merchant payment type qr ui dbtr cust type"
	npss_merchant_payment_type_qr_ui_dbtr_cust_type__e_1680255639877__payee_information() { 
		let Dest_Is_ctrl=true
		
		let source_id="npss_merchant_payment_type_qr_ui_dbtr_cust_type"
		let destn_id="payee_information"
		let parent_source_id=""
		let event_code="e_1680255639877"
		let event_params={"source_comp_id":"payee_information","source_ctrl_id":"dbtr_cust_type","caller_name":"npss_merchant_payment_type_qr_ui_dbtr_cust_type__e_1680255639877__payee_information","event_desc":"E_1680255639877","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"npss_merchant_payment_type_qr_ui~uicgc_15~ui~df_1304_1665901396659~39","raiseparam":{}}
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
