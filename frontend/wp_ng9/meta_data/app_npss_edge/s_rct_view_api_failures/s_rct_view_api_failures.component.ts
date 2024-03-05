/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34628 
Modified By     : Admin 
Modified Date   : 2024-Mar-05 8:14 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_view_api_failures
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'

@Component({
	selector: 's_rct_view_api_failures',
	templateUrl: './s_rct_view_api_failures.component.html',
	styleUrls: ['./s_rct_view_api_failures.component.css'],
	providers:[torus_cs_show_hideService]
})
    
// Start of class 
export class s_rct_view_api_failuresComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_rct_view_api_failures"
	wftpa_id : string = "WFT_NPSS_P_1304_1670064833032_0"
	cg_code : string = "CG_1304_1670063078210"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID","dtt_1304_1670492310194":"NPSSASP_ID","dtt_1304_1670589169341":"NPSSCAPL_ID","dtt_1304_1672928670076":"NPSSNL_ID","dtt_1304_1674198360280":"NPSSE_ID","dtt_1304_1681973868376":"NPSSPSR_ID","dtt_1304_1681974712398":"NPSSSBR_ID","dtt_1304_1681974988885":"NPSSBFSR_ID","dtt_1304_1695130590062":"NPSSNPPL_ID","dtt_1304_1695214768145":"NAL_ID","dtt_1304_1700459090330":"NPSSPN_ID","dtt_1304_1701251364899":"NPSSPNB_ID","dtt_1304_1707202677013":"NPSSFE_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "navigation_ui"
	uicgc_2 : string = "process_log_list"
	uicgc_3 : string = "queue"
	uicgc_4 : string = "request_ui"
	uicgc_5 : string = "response_ui"
	uicgc_6 : string = "search"
	uicgc_7 : string = "single_back_ui"
	uicgc_8 : string = "view_failure_ui"
	key_events : any = {}
	btl_1304_1677935249021 : string = "p_view_failure_layout"
	btl_1304_1670245566284 : string = "p_view_main_req_and_res_layout"
	btl_1304_1670065663363 : string = "p_search_layout"
	btl_1304_1670065604508 : string = "p_view_response_layout"
	btl_1304_1670065285420 : string = "p_view_request_layout"
	btl_1304_1670064932934 : string = "p_main_layout"
	forms : any = ["uicgc_6","uicgc_4","uicgc_8","uicgc_5","uicgc_7","uicgc_1"]
	p_search_layout__spap_for_search_showpopup : boolean = false
	navigation_ui : any = {}
	navigation_ui_search : any = {}
	navigation_ui_view_response : any = {}
	navigation_ui_view_request : any = {}
	navigation_ui_view_req_and_res : any = {}
	navigation_ui_view_failure : any = {}
	process_log_list : any = {}
	queue : any = {}
	request_ui : any = {}
	response_ui : any = {}
	search : any = {}
	search_search : any = {}
	search_clear : any = {}
	single_back_ui : any = {}
	single_back_ui_back : any = {}
	view_failure_ui : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private torus_cs_show_hideService:torus_cs_show_hideService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Navigation UI" 
		this.navigation_ui.uictrl_code = "dynamic_ui"
		this.navigation_ui.uicgc_desc = "Navigation UI"
		this.navigation_ui.uicgc_code = "uicgc_1"
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
		
		// "View Req and Res" Button of "Navigation UI" component
		this.navigation_ui_view_req_and_res.label_name = "View Req and Res"
		this.navigation_ui_view_req_and_res.show = true
		this.navigation_ui_view_req_and_res.disabled = true
		this.navigation_ui_view_req_and_res.params = {"icon_only":false,"uicgcc_style":"fa fa-expand"}
		this.navigation_ui_view_req_and_res.dynamic_param = {}
		this.navigation_ui_view_req_and_res.role = []
		this.navigation_ui_view_req_and_res.action = ""
		
		// "View Failure" Button of "Navigation UI" component
		this.navigation_ui_view_failure.label_name = "View Failure"
		this.navigation_ui_view_failure.show = true
		this.navigation_ui_view_failure.disabled = false
		this.navigation_ui_view_failure.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.navigation_ui_view_failure.dynamic_param = {}
		this.navigation_ui_view_failure.role = []
		this.navigation_ui_view_failure.action = ""
	
		// Component level properties - "Process Log List" 
		this.process_log_list.uictrl_code = "datatable"
		this.process_log_list.uicgc_desc = "Process Log List"
		this.process_log_list.uicgc_code = "uicgc_2"
		this.process_log_list.params = {"need_pag_datatable":"Y","advance_dynamic_search":"N","need_search":"N"}
		this.process_log_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1670066691921","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS API Process Log Detail MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1670064116426","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1670064116672","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1670064116880","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1670064117056","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1670064149613","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1670064149805","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1670064149981","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1670064150149","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1670064177325","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1670064177533","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1670064177885","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1670064178117","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1670064218603","date_format":true},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1670064218787","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1670064218971","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1670064286961","date_format":false},{"column_name":"REQUEST_DATA_JSON","alias_name":"","mq_id":"MQ_1670064287161","date_format":false},{"column_name":"RESPONSE_DATA_JSON","alias_name":"","mq_id":"MQ_1670064287345","date_format":false},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1670064287537","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1670064287721","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1670064320760","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1670064320967","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1670064321183","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1670064344727","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1670064345223","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1670064359759","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1670064359975","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1677935697826","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1682507278805","date_format":false},{"column_name":"AMOUNT","alias_name":"","mq_id":"MQ_1682507279043","date_format":false,"currency_format":true},{"column_name":"TRAN_REF_ID","alias_name":"","mq_id":"MQ_1682507279243","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  API_PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  API_PROCESS_STATUS,  API_STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DT_CODE,  DTT_CODE,  V_CODE,  DBTR_IBAN,  AMOUNT,  TRAN_REF_ID,  row_num from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM as API_PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS as API_PROCESS_STATUS,   A.STATUS as API_STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   A.ADDITIONAL_INFO,   A.V_CODE,   A.DBTR_IBAN,   A.AMOUNT,   A.TRAN_REF_ID,   T24RC.RETURN_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,   row_number() over( partition by a.uetr  order by   a.npsstpl_id desc) as row_num  from   <TRAN_DB>.NPSS_TRN_PROCESS_LOG A  left join CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join CORE_NC_RETURN_CODES T24RC on   T24RC.RETURN_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y' union  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM as API_PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS as API_PROCESS_STATUS,   A.STATUS as API_STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   A.ADDITIONAL_INFO,   A.V_CODE,   A.DBTR_IBAN,   A.AMOUNT,   A.TRAN_REF_ID,   T24RC.RETURN_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,   case    when a.status = 'OP_AC_VAL_FAILED' then 1   end as row_num  from   <TRAN_DB>.NPSS_TRN_PROCESS_LOG A  left join CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join CORE_NC_RETURN_CODES T24RC on   T24RC.RETURN_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  where   a.status = 'OP_AC_VAL_FAILED') V where  row_num = 1 $AND order by  NPSSTPL_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS API Process Log Detail CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Validation Code","target_column":"V_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Error Code","target_column":"RESPONSE_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"AMOUNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Tran Ref ID","target_column":"TRAN_REF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Uetr","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.process_log_list.context_menu = []
		this.process_log_list.views = {}
		this.process_log_list.onChangecomponent = new EventEmitter<any>()
		this.process_log_list.show = true
		this.process_log_list.dynamic_param = {}
	
		// Component level properties - "Queue" 
		this.queue.uictrl_code = "datatable"
		this.queue.uicgc_desc = "Queue"
		this.queue.uicgc_code = "uicgc_3"
		this.queue.params = {"need_pag_datatable":"Y","need_search":"N","advance_dynamic_search":"N"}
		this.queue.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1670066678512","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS API Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1670063504284","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1670063504716","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1670063504948","date_format":false},{"column_name":"API_STATUS","alias_name":"","mq_id":"MQ_1681975635396","date_format":false},{"column_name":"API_PROCESS_STATUS","alias_name":"","mq_id":"MQ_1681975769773","date_format":false},{"column_name":"API_PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1682598244419","date_format":false}],"joins":[]},"eq_text":"select  distinct API_PROCESSING_SYSTEM,  API_PROCESS_STATUS,  API_STATUS,  row_num from  (  select   T.CREATED_DATE,   T.STATUS as API_STATUS,   T.PROCESS_STATUS as API_PROCESS_STATUS,   T.UETR,   T.PROCESS_NAME,   T.PROCESSING_SYSTEM as API_PROCESSING_SYSTEM,   T.ADDITIONAL_INFO,   T.TENANT_ID,   T.MODIFIED_DATE,   T.MODIFIED_DATE_UTC,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   T.CREATED_BY,   T.CREATED_BY_NAME,   T.SYSTEM_ID,   row_number() over( partition by t.uetr  order by   t.npsstpl_id desc) as row_num  from   NPSS_TRN_PROCESS_LOG T  left join TRANSACTION_SET TS on   T.NPSSTPL_ID = TS.TRN_ID   and T.DTT_CODE = TS.DTT_CODE union  select   T.CREATED_DATE,   T.STATUS as API_STATUS,   T.PROCESS_STATUS as API_PROCESS_STATUS,   T.UETR,   T.PROCESS_NAME,   T.PROCESSING_SYSTEM as API_PROCESSING_SYSTEM,   T.ADDITIONAL_INFO,   T.TENANT_ID,   T.MODIFIED_DATE,   T.MODIFIED_DATE_UTC,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   T.CREATED_BY,   T.CREATED_BY_NAME,   T.SYSTEM_ID,   case    when t.status = 'OP_AC_VAL_FAILED' then 1   end as row_num  from   <TRAN_DB>.NPSS_TRN_PROCESS_LOG T  left join TRANSACTION_SET TS on   T.NPSSTPL_ID = TS.TRN_ID   and T.DTT_CODE = TS.DTT_CODE  where   t.status = 'OP_AC_VAL_FAILED') VW where  row_num = 1 $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS API Process Log CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"API_PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"API_PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"API_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.queue.context_menu = []
		this.queue.views = {}
		this.queue.onChangecomponent = new EventEmitter<any>()
		this.queue.show = true
		this.queue.dynamic_param = {}
	
		// Component level properties - "Request UI" 
		this.request_ui.uictrl_code = "dynamic_ui"
		this.request_ui.uicgc_desc = "Request UI"
		this.request_ui.uicgc_code = "uicgc_4"
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
		this.response_ui.uicgc_code = "uicgc_5"
		this.response_ui.params = {}
		this.response_ui.datasource = {}
		this.response_ui.context_menu = []
		this.response_ui.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS Target Response UI","tab_order":0,"tab_name":"","uicgc_description":"Response UI","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.response_ui.onChangecomponent = new EventEmitter<any>()
		this.response_ui.show = true
		this.response_ui.dynamic_param = {}
		this.response_ui.f_npss_target_response_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.response_ui.form_name = "f_npss_target_response_ui"
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_6"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS API Process Log  SRCH","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_api_process_log__srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_api_process_log__srch"
		
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
	
		// Component level properties - "Single Back UI" 
		this.single_back_ui.uictrl_code = "dynamic_ui"
		this.single_back_ui.uicgc_desc = "Single Back UI"
		this.single_back_ui.uicgc_code = "uicgc_7"
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
	
		// Component level properties - "View Failure UI" 
		this.view_failure_ui.uictrl_code = "dynamic_ui"
		this.view_failure_ui.uicgc_desc = "View Failure UI"
		this.view_failure_ui.uicgc_code = "uicgc_8"
		this.view_failure_ui.params = {}
		this.view_failure_ui.datasource = {}
		this.view_failure_ui.context_menu = []
		this.view_failure_ui.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS Respose data UI","tab_order":0,"tab_name":"","uicgc_description":"View Failure UI","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.view_failure_ui.onChangecomponent = new EventEmitter<any>()
		this.view_failure_ui.show = true
		this.view_failure_ui.dynamic_param = {}
		this.view_failure_ui.f_npss_respose_data_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.view_failure_ui.form_name = "f_npss_respose_data_ui"
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__cc_for_sh_ide()
		this.page_load__de_for_view_req()
		this.page_load__de_for_view_response()
		this.page_load__e_1677936067268()
	}

	//Handler for SELECTION_CHANGED event of "queue"
	queue__selection_changed(){
		this.queue__svm_for_queue()
		this.queue__de_from_queue_for_view_res()
		this.queue__de_from_queue_for_req()
		this.queue__de_from_queue_to_view_req_and_res()
		this.queue__e_1677936103783()
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
		this.ssp_for_transaction_list__brfq_for_plog_list(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for plog list"
	brfq_for_plog_list__internal(parent_event_result){
		this.brfq_for_plog_list__ssf_for_plog_list(parent_event_result)
	}

	//Handler for INTERNAL event of "cc for sh ide"
	cc_for_sh_ide__internal(parent_event_result){
		this.cc_for_sh_ide__cf_for_cc(parent_event_result)
	}

	//Handler for INTERNAL event of "cf for cc"
	cf_for_cc__internal(parent_event_result){
		this.cf_for_cc__tbc_for_search(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view request"
	navigation_ui_view_request__action_button_click(){
		this.navigation_ui_view_request__bt_main_tran_to_main_req_ui()
		this.navigation_ui_view_request__sp_to_main_req_ui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view response"
	navigation_ui_view_response__action_button_click(){
		this.navigation_ui_view_response__bt_main_tran_to_main_response_ui()
		this.navigation_ui_view_response__sp_to_main_response_ui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__action_button_click(){
		this.navigation_ui_search__cu_for_seach()
		this.navigation_ui_search__spap_for_search()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__cu_for_pl()
		this.search_search__cp_after_search()
		this.search_search__ssp_for_pl_queue()
	}

	//Handler for INTERNAL event of "ssp for pl queue"
	ssp_for_pl_queue__internal(parent_event_result){
		this.ssp_for_pl_queue__brfq_for_queue(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__cu_for_searchs()
	}

	//Handler for ACTION_BUTTON_CLICK event of "single back ui back"
	single_back_ui_back__action_button_click(){
		this.single_back_ui_back__sp_for_reqres()
	}

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__selection_changed(){
		this.process_log_list__ee__for_v_res()
		this.process_log_list__ee_for_v_req()
		this.process_log_list__ssr_for_req_ui()
		this.process_log_list__ssr_for_res_ui()
		this.process_log_list__ee_for_req_and_res_button()
		this.process_log_list__e_1677936091194()
		this.process_log_list__e_1678078824536()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view req and res"
	navigation_ui_view_req_and_res__action_button_click(){
		this.navigation_ui_view_req_and_res__sp_for_view_main_req_and_res_layout()
		this.navigation_ui_view_req_and_res__bt_from_view_req_and_res_to_req()
		this.navigation_ui_view_req_and_res__bt_from_view_req_and_res_to_res()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view failure"
	navigation_ui_view_failure__action_button_click(){
		this.navigation_ui_view_failure__e_1677935415412()
		this.navigation_ui_view_failure__e_1677935451999()
	}

	//Handler for SELECTION_CHANGED event of "queue"
	queue__svm_for_queue() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="queue"
		let parent_source_id=""
		let event_code="e_1670063623717"
		let event_params={"caller_name":"queue__svm_for_queue","event_desc":"SVM for Queue","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_queue__cc_for_queue,"
		let event_data={"queue":{"e_1670063623717":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_3","event_code":"E_1670063623717","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"PROCESS_STATUS","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_STATUS","setd3name":"PROCESS_STATUS"},{"type":"LOCAL","column_name":"STATUS","level":"MI_LEVEL","name":"MI_LEVEL_STATUS","setd3name":"STATUS"},{"type":"LOCAL","column_name":"PROCESSING_SYSTEM","level":"MI_LEVEL","name":"MI_LEVEL_PROCESSING_SYSTEM","setd3name":"PROCESSING_SYSTEM"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1670066678512","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS API Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1670063504284","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1670063504716","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1670063504948","date_format":false},{"column_name":"API_STATUS","alias_name":"","mq_id":"MQ_1681975635396","date_format":false},{"column_name":"API_PROCESS_STATUS","alias_name":"","mq_id":"MQ_1681975769773","date_format":false},{"column_name":"API_PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1682598244419","date_format":false}],"joins":[]},"eq_text":"select  distinct API_PROCESSING_SYSTEM,  API_PROCESS_STATUS,  API_STATUS,  row_num from  (  select   T.CREATED_DATE,   T.STATUS as API_STATUS,   T.PROCESS_STATUS as API_PROCESS_STATUS,   T.UETR,   T.PROCESS_NAME,   T.PROCESSING_SYSTEM as API_PROCESSING_SYSTEM,   T.ADDITIONAL_INFO,   T.TENANT_ID,   T.MODIFIED_DATE,   T.MODIFIED_DATE_UTC,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   T.CREATED_BY,   T.CREATED_BY_NAME,   T.SYSTEM_ID,   row_number() over( partition by t.uetr  order by   t.npsstpl_id desc) as row_num  from   NPSS_TRN_PROCESS_LOG T  left join TRANSACTION_SET TS on   T.NPSSTPL_ID = TS.TRN_ID   and T.DTT_CODE = TS.DTT_CODE union  select   T.CREATED_DATE,   T.STATUS as API_STATUS,   T.PROCESS_STATUS as API_PROCESS_STATUS,   T.UETR,   T.PROCESS_NAME,   T.PROCESSING_SYSTEM as API_PROCESSING_SYSTEM,   T.ADDITIONAL_INFO,   T.TENANT_ID,   T.MODIFIED_DATE,   T.MODIFIED_DATE_UTC,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   T.CREATED_BY,   T.CREATED_BY_NAME,   T.SYSTEM_ID,   case    when t.status = 'OP_AC_VAL_FAILED' then 1   end as row_num  from   <TRAN_DB>.NPSS_TRN_PROCESS_LOG T  left join TRANSACTION_SET TS on   T.NPSSTPL_ID = TS.TRN_ID   and T.DTT_CODE = TS.DTT_CODE  where   t.status = 'OP_AC_VAL_FAILED') VW where  row_num = 1 $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS API Process Log CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"API_PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"API_PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"API_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "queue"
	queue__de_from_queue_for_view_res() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="navigation_ui_view_response"
		let parent_source_id=""
		let event_code="e_1670065945117"
		let event_params={"caller_name":"queue__de_from_queue_for_view_res","event_desc":"de from queue for view res","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{}}
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
	queue__de_from_queue_for_req() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="navigation_ui_view_request"
		let parent_source_id=""
		let event_code="e_1670066031587"
		let event_params={"caller_name":"queue__de_from_queue_for_req","event_desc":"de from queue for req","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{}}
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
	queue__de_from_queue_to_view_req_and_res() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="navigation_ui_view_req_and_res"
		let parent_source_id=""
		let event_code="e_1670245706474"
		let event_params={"caller_name":"queue__de_from_queue_to_view_req_and_res","event_desc":"DE from Queue to View Req and Res","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{}}
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
	queue__e_1677936103783() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="navigation_ui_view_failure"
		let parent_source_id=""
		let event_code="e_1677936103783"
		let event_params={"caller_name":"queue__e_1677936103783","event_desc":"E_1677936103783","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{}}
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

	//Handler for INTERNAL event of "svm for queue"
	svm_for_queue__cc_for_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_queue"
		let destn_id=""
		let parent_source_id="queue"
		let event_code="e_1670063638901"
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
		let event_code="e_1670063678328"
		let event_params={"caller_name":"cc_for_queue__ssp_for_transaction_list","event_desc":"SSP for Transaction list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="ssp_for_transaction_list__brfq_for_plog_list,"
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
	ssp_for_transaction_list__brfq_for_plog_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_transaction_list"
		let destn_id="process_log_list"
		let parent_source_id="cc_for_queue"
		let event_code="e_1670063712828"
		let event_params={"caller_name":"ssp_for_transaction_list__brfq_for_plog_list","event_desc":"BRFQ for PLOG List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_plog_list__ssf_for_plog_list,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1670066691921","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS API Process Log Detail MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1670064116426","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1670064116672","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1670064116880","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1670064117056","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1670064149613","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1670064149805","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1670064149981","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1670064150149","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1670064177325","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1670064177533","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1670064177885","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1670064178117","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1670064218603","date_format":true},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1670064218787","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1670064218971","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1670064286961","date_format":false},{"column_name":"REQUEST_DATA_JSON","alias_name":"","mq_id":"MQ_1670064287161","date_format":false},{"column_name":"RESPONSE_DATA_JSON","alias_name":"","mq_id":"MQ_1670064287345","date_format":false},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1670064287537","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1670064287721","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1670064320760","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1670064320967","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1670064321183","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1670064344727","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1670064345223","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1670064359759","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1670064359975","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1677935697826","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1682507278805","date_format":false},{"column_name":"AMOUNT","alias_name":"","mq_id":"MQ_1682507279043","date_format":false,"currency_format":true},{"column_name":"TRAN_REF_ID","alias_name":"","mq_id":"MQ_1682507279243","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  API_PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  API_PROCESS_STATUS,  API_STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DT_CODE,  DTT_CODE,  V_CODE,  DBTR_IBAN,  AMOUNT,  TRAN_REF_ID,  row_num from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM as API_PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS as API_PROCESS_STATUS,   A.STATUS as API_STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   A.ADDITIONAL_INFO,   A.V_CODE,   A.DBTR_IBAN,   A.AMOUNT,   A.TRAN_REF_ID,   T24RC.RETURN_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,   row_number() over( partition by a.uetr  order by   a.npsstpl_id desc) as row_num  from   <TRAN_DB>.NPSS_TRN_PROCESS_LOG A  left join CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join CORE_NC_RETURN_CODES T24RC on   T24RC.RETURN_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y' union  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM as API_PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS as API_PROCESS_STATUS,   A.STATUS as API_STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   A.ADDITIONAL_INFO,   A.V_CODE,   A.DBTR_IBAN,   A.AMOUNT,   A.TRAN_REF_ID,   T24RC.RETURN_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,   case    when a.status = 'OP_AC_VAL_FAILED' then 1   end as row_num  from   <TRAN_DB>.NPSS_TRN_PROCESS_LOG A  left join CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join CORE_NC_RETURN_CODES T24RC on   T24RC.RETURN_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  where   a.status = 'OP_AC_VAL_FAILED') V where  row_num = 1 $AND order by  NPSSTPL_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS API Process Log Detail CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Validation Code","target_column":"V_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Error Code","target_column":"RESPONSE_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"AMOUNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Tran Ref ID","target_column":"TRAN_REF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Uetr","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for plog list"
	brfq_for_plog_list__ssf_for_plog_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_plog_list"
		let destn_id="process_log_list"
		let parent_source_id="ssp_for_transaction_list"
		let event_code="e_1670063740019"
		let event_params={"caller_name":"brfq_for_plog_list__ssf_for_plog_list","event_desc":"SSF for PLOG List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1670066691921","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS API Process Log Detail MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1670064116426","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1670064116672","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1670064116880","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1670064117056","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1670064149613","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1670064149805","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1670064149981","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1670064150149","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1670064177325","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1670064177533","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1670064177885","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1670064178117","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1670064218603","date_format":true},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1670064218787","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1670064218971","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1670064286961","date_format":false},{"column_name":"REQUEST_DATA_JSON","alias_name":"","mq_id":"MQ_1670064287161","date_format":false},{"column_name":"RESPONSE_DATA_JSON","alias_name":"","mq_id":"MQ_1670064287345","date_format":false},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1670064287537","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1670064287721","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1670064320760","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1670064320967","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1670064321183","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1670064344727","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1670064345223","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1670064359759","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1670064359975","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1677935697826","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1682507278805","date_format":false},{"column_name":"AMOUNT","alias_name":"","mq_id":"MQ_1682507279043","date_format":false,"currency_format":true},{"column_name":"TRAN_REF_ID","alias_name":"","mq_id":"MQ_1682507279243","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  API_PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  API_PROCESS_STATUS,  API_STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DT_CODE,  DTT_CODE,  V_CODE,  DBTR_IBAN,  AMOUNT,  TRAN_REF_ID,  row_num from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM as API_PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS as API_PROCESS_STATUS,   A.STATUS as API_STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   A.ADDITIONAL_INFO,   A.V_CODE,   A.DBTR_IBAN,   A.AMOUNT,   A.TRAN_REF_ID,   T24RC.RETURN_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,   row_number() over( partition by a.uetr  order by   a.npsstpl_id desc) as row_num  from   <TRAN_DB>.NPSS_TRN_PROCESS_LOG A  left join CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join CORE_NC_RETURN_CODES T24RC on   T24RC.RETURN_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y' union  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM as API_PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS as API_PROCESS_STATUS,   A.STATUS as API_STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   A.ADDITIONAL_INFO,   A.V_CODE,   A.DBTR_IBAN,   A.AMOUNT,   A.TRAN_REF_ID,   T24RC.RETURN_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,   case    when a.status = 'OP_AC_VAL_FAILED' then 1   end as row_num  from   <TRAN_DB>.NPSS_TRN_PROCESS_LOG A  left join CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join CORE_NC_RETURN_CODES T24RC on   T24RC.RETURN_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  where   a.status = 'OP_AC_VAL_FAILED') V where  row_num = 1 $AND order by  NPSSTPL_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS API Process Log Detail CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Validation Code","target_column":"V_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Error Code","target_column":"RESPONSE_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"AMOUNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Tran Ref ID","target_column":"TRAN_REF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Uetr","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let event_code="e_1670063863836"
		let event_params={"caller_name":"page_load__cc_for_sh_ide","event_desc":"CC for SH ide","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_sh_ide__cf_for_cc,"
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
	page_load__de_for_view_req() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_request"
		let parent_source_id=""
		let event_code="e_1670063935168"
		let event_params={"caller_name":"page_load__de_for_view_req","event_desc":"de for view req","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__de_for_view_response() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_response"
		let parent_source_id=""
		let event_code="e_1670063960484"
		let event_params={"caller_name":"page_load__de_for_view_response","event_desc":"de for view response","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__e_1677936067268() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_failure"
		let parent_source_id=""
		let event_code="e_1677936067268"
		let event_params={"caller_name":"page_load__e_1677936067268","event_desc":"E_1677936067268","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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

	//Handler for INTERNAL event of "cc for sh ide"
	cc_for_sh_ide__cf_for_cc(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_sh_ide"
		let destn_id=""
		let parent_source_id="page_load"
		let event_code="e_1670063888699"
		let event_params={"caller_name":"cc_for_sh_ide__cf_for_cc","event_desc":"CF for CC","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""},"parent_event_result":"SUCCESS"}
		let handler_code="create_form"
		let internals="cf_for_cc__tbc_for_search,"
		let event_data={}
		let data_source={}
		try {
			this.handler.create_form(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cf for cc"
	cf_for_cc__tbc_for_search(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cf_for_cc"
		let destn_id="search_search"
		let parent_source_id="cc_for_sh_ide"
		let event_code="e_1670074376870"
		let event_params={"caller_name":"cf_for_cc__tbc_for_search","event_desc":"TBC for Search","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view request"
	navigation_ui_view_request__bt_main_tran_to_main_req_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_request"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1670064176026"
		let event_params={"caller_name":"navigation_ui_view_request__bt_main_tran_to_main_req_ui","event_desc":"BT Main Tran to Main Req UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_request","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view request"
	navigation_ui_view_request__sp_to_main_req_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_request"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1670076510095"
		let event_params={"caller_name":"navigation_ui_view_request__sp_to_main_req_ui","event_desc":"SP to Main Req UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_request","raiseparam":{"profile_code":"BTL_1304_1670065285420"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view response"
	navigation_ui_view_response__bt_main_tran_to_main_response_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_response"
		let destn_id="response_ui"
		let parent_source_id=""
		let event_code="e_1670064254647"
		let event_params={"caller_name":"navigation_ui_view_response__bt_main_tran_to_main_response_ui","event_desc":"BT Main Tran to Main Response UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_response","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view response"
	navigation_ui_view_response__sp_to_main_response_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_response"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1670076539084"
		let event_params={"caller_name":"navigation_ui_view_response__sp_to_main_response_ui","event_desc":"SP to Main Response UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_response","raiseparam":{"profile_code":"BTL_1304_1670065604508"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__cu_for_seach() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1670064395232"
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__spap_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1670064423807"
		let event_params={"caller_name":"navigation_ui_search__spap_for_search","event_desc":"SPAP for Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_for_search","selector":"p_search_layout","profile_code":"BTL_1304_1670065663363","window_title":"","window_height":"","window_width":"auto","window_close_icon":"Y","eventdes":"spap_for_search","eventcode":"E_1670064423807"}}
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
	search_search__cu_for_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="process_log_list"
		let parent_source_id=""
		let event_code="e_1670064908693"
		let event_params={"caller_name":"search_search__cu_for_pl","event_desc":"CU for PL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1670066691921","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS API Process Log Detail MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1670064116426","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1670064116672","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1670064116880","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1670064117056","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1670064149613","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1670064149805","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1670064149981","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1670064150149","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1670064177325","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1670064177533","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1670064177885","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1670064178117","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1670064218603","date_format":true},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1670064218787","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1670064218971","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1670064286961","date_format":false},{"column_name":"REQUEST_DATA_JSON","alias_name":"","mq_id":"MQ_1670064287161","date_format":false},{"column_name":"RESPONSE_DATA_JSON","alias_name":"","mq_id":"MQ_1670064287345","date_format":false},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1670064287537","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1670064287721","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1670064320760","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1670064320967","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1670064321183","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1670064344727","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1670064345223","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1670064359759","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1670064359975","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1677935697826","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1682507278805","date_format":false},{"column_name":"AMOUNT","alias_name":"","mq_id":"MQ_1682507279043","date_format":false,"currency_format":true},{"column_name":"TRAN_REF_ID","alias_name":"","mq_id":"MQ_1682507279243","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  API_PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  API_PROCESS_STATUS,  API_STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DT_CODE,  DTT_CODE,  V_CODE,  DBTR_IBAN,  AMOUNT,  TRAN_REF_ID,  row_num from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM as API_PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS as API_PROCESS_STATUS,   A.STATUS as API_STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   A.ADDITIONAL_INFO,   A.V_CODE,   A.DBTR_IBAN,   A.AMOUNT,   A.TRAN_REF_ID,   T24RC.RETURN_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,   row_number() over( partition by a.uetr  order by   a.npsstpl_id desc) as row_num  from   <TRAN_DB>.NPSS_TRN_PROCESS_LOG A  left join CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join CORE_NC_RETURN_CODES T24RC on   T24RC.RETURN_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y' union  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM as API_PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS as API_PROCESS_STATUS,   A.STATUS as API_STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   A.ADDITIONAL_INFO,   A.V_CODE,   A.DBTR_IBAN,   A.AMOUNT,   A.TRAN_REF_ID,   T24RC.RETURN_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,   case    when a.status = 'OP_AC_VAL_FAILED' then 1   end as row_num  from   <TRAN_DB>.NPSS_TRN_PROCESS_LOG A  left join CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join CORE_NC_RETURN_CODES T24RC on   T24RC.RETURN_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  where   a.status = 'OP_AC_VAL_FAILED') V where  row_num = 1 $AND order by  NPSSTPL_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS API Process Log Detail CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Validation Code","target_column":"V_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Error Code","target_column":"RESPONSE_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"AMOUNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Tran Ref ID","target_column":"TRAN_REF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Uetr","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let event_code="e_1670065026466"
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
	search_search__ssp_for_pl_queue() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1670065058440"
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

	//Handler for INTERNAL event of "ssp for pl queue"
	ssp_for_pl_queue__brfq_for_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_pl_queue"
		let destn_id="queue"
		let parent_source_id="search_search"
		let event_code="e_1670065097808"
		let event_params={"caller_name":"ssp_for_pl_queue__brfq_for_queue","event_desc":"BRFQ for Queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1670066678512","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS API Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1670063504284","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1670063504716","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1670063504948","date_format":false},{"column_name":"API_STATUS","alias_name":"","mq_id":"MQ_1681975635396","date_format":false},{"column_name":"API_PROCESS_STATUS","alias_name":"","mq_id":"MQ_1681975769773","date_format":false},{"column_name":"API_PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1682598244419","date_format":false}],"joins":[]},"eq_text":"select  distinct API_PROCESSING_SYSTEM,  API_PROCESS_STATUS,  API_STATUS,  row_num from  (  select   T.CREATED_DATE,   T.STATUS as API_STATUS,   T.PROCESS_STATUS as API_PROCESS_STATUS,   T.UETR,   T.PROCESS_NAME,   T.PROCESSING_SYSTEM as API_PROCESSING_SYSTEM,   T.ADDITIONAL_INFO,   T.TENANT_ID,   T.MODIFIED_DATE,   T.MODIFIED_DATE_UTC,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   T.CREATED_BY,   T.CREATED_BY_NAME,   T.SYSTEM_ID,   row_number() over( partition by t.uetr  order by   t.npsstpl_id desc) as row_num  from   NPSS_TRN_PROCESS_LOG T  left join TRANSACTION_SET TS on   T.NPSSTPL_ID = TS.TRN_ID   and T.DTT_CODE = TS.DTT_CODE union  select   T.CREATED_DATE,   T.STATUS as API_STATUS,   T.PROCESS_STATUS as API_PROCESS_STATUS,   T.UETR,   T.PROCESS_NAME,   T.PROCESSING_SYSTEM as API_PROCESSING_SYSTEM,   T.ADDITIONAL_INFO,   T.TENANT_ID,   T.MODIFIED_DATE,   T.MODIFIED_DATE_UTC,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   T.CREATED_BY,   T.CREATED_BY_NAME,   T.SYSTEM_ID,   case    when t.status = 'OP_AC_VAL_FAILED' then 1   end as row_num  from   <TRAN_DB>.NPSS_TRN_PROCESS_LOG T  left join TRANSACTION_SET TS on   T.NPSSTPL_ID = TS.TRN_ID   and T.DTT_CODE = TS.DTT_CODE  where   t.status = 'OP_AC_VAL_FAILED') VW where  row_num = 1 $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS API Process Log CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"API_PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"API_PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"API_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__cu_for_searchs() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_clear"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1670065137815"
		let event_params={"caller_name":"search_clear__cu_for_searchs","event_desc":"CU for searchs","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_clear","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "single back ui back"
	single_back_ui_back__sp_for_reqres() { 
		let Dest_Is_ctrl=true
		
		let source_id="single_back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1670065509630"
		let event_params={"caller_name":"single_back_ui_back__sp_for_reqres","event_desc":"SP for REQ,RES","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"single_back_ui_back","raiseparam":{"profile_code":"BTL_1304_1670064932934"}}
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

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__ee__for_v_res() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="navigation_ui_view_response"
		let parent_source_id=""
		let event_code="e_1670076236383"
		let event_params={"caller_name":"process_log_list__ee__for_v_res","event_desc":"EE  for V Res","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	process_log_list__ee_for_v_req() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="navigation_ui_view_request"
		let parent_source_id=""
		let event_code="e_1670076243751"
		let event_params={"caller_name":"process_log_list__ee_for_v_req","event_desc":"EE For V REQ","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	process_log_list__ssr_for_req_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1670216598809"
		let event_params={"caller_name":"process_log_list__ssr_for_req_ui","event_desc":"SSR for Req UI","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{}}
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
	process_log_list__ssr_for_res_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="response_ui"
		let parent_source_id=""
		let event_code="e_1670216628448"
		let event_params={"caller_name":"process_log_list__ssr_for_res_ui","event_desc":"SSR for Res UI","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{}}
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
	process_log_list__ee_for_req_and_res_button() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="navigation_ui_view_req_and_res"
		let parent_source_id=""
		let event_code="e_1670246342017"
		let event_params={"caller_name":"process_log_list__ee_for_req_and_res_button","event_desc":"EE for REQ and RES button","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	process_log_list__e_1677936091194() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="navigation_ui_view_failure"
		let parent_source_id=""
		let event_code="e_1677936091194"
		let event_params={"caller_name":"process_log_list__e_1677936091194","event_desc":"E_1677936091194","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	process_log_list__e_1678078824536() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="view_failure_ui"
		let parent_source_id=""
		let event_code="e_1678078824536"
		let event_params={"caller_name":"process_log_list__e_1678078824536","event_desc":"E_1678078824536","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view req and res"
	navigation_ui_view_req_and_res__sp_for_view_main_req_and_res_layout() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_req_and_res"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1670246135536"
		let event_params={"caller_name":"navigation_ui_view_req_and_res__sp_for_view_main_req_and_res_layout","event_desc":"SP for view main req and res layout","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_req_and_res","raiseparam":{"profile_code":"BTL_1304_1670245566284"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view req and res"
	navigation_ui_view_req_and_res__bt_from_view_req_and_res_to_req() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_req_and_res"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1670246259231"
		let event_params={"caller_name":"navigation_ui_view_req_and_res__bt_from_view_req_and_res_to_req","event_desc":"BT from View Req and Res to Req","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_req_and_res","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view req and res"
	navigation_ui_view_req_and_res__bt_from_view_req_and_res_to_res() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_req_and_res"
		let destn_id="response_ui"
		let parent_source_id=""
		let event_code="e_1670246314873"
		let event_params={"caller_name":"navigation_ui_view_req_and_res__bt_from_view_req_and_res_to_res","event_desc":"BT from View Req and Res to Res","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_req_and_res","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view failure"
	navigation_ui_view_failure__e_1677935415412() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_failure"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1677935415412"
		let event_params={"caller_name":"navigation_ui_view_failure__e_1677935415412","event_desc":"E_1677935415412","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_failure","raiseparam":{"profile_code":"BTL_1304_1677935249021"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view failure"
	navigation_ui_view_failure__e_1677935451999() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_failure"
		let destn_id="view_failure_ui"
		let parent_source_id=""
		let event_code="e_1677935451999"
		let event_params={"caller_name":"navigation_ui_view_failure__e_1677935451999","event_desc":"E_1677935451999","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_failure","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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
