/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34628 
Modified By     : Admin 
Modified Date   : 2024-Mar-05 8:14 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_manual_unfreeze_dashboard
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'
import {npss_cs_manual_unfreeze_send_to_makerService} from '../../../custom_widget/npss_cs_manual_unfreeze_send_to_maker/npss_cs_manual_unfreeze_send_to_maker.service'
import {npss_cs_manual_unfreeze_send_to_checkerService} from '../../../custom_widget/npss_cs_manual_unfreeze_send_to_checker/npss_cs_manual_unfreeze_send_to_checker.service'
import {npss_cs_call_p2b_unfreeze_apiService} from '../../../custom_widget/npss_cs_call_p2b_unfreeze_api/npss_cs_call_p2b_unfreeze_api.service'

@Component({
	selector: 's_manual_unfreeze_dashboard',
	templateUrl: './s_manual_unfreeze_dashboard.component.html',
	styleUrls: ['./s_manual_unfreeze_dashboard.component.css'],
	providers:[torus_cs_show_hideService,npss_cs_manual_unfreeze_send_to_makerService,npss_cs_manual_unfreeze_send_to_checkerService,npss_cs_call_p2b_unfreeze_apiService]
})
    
// Start of class 
export class s_manual_unfreeze_dashboardComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_manual_unfreeze_dashboard"
	wftpa_id : string = "WFT_NPSS_P_1304_1683785371123_0"
	cg_code : string = "CG_1304_1683781369958"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID","dtt_1304_1670492310194":"NPSSASP_ID","dtt_1304_1670589169341":"NPSSCAPL_ID","dtt_1304_1672928670076":"NPSSNL_ID","dtt_1304_1674198360280":"NPSSE_ID","dtt_1304_1681973868376":"NPSSPSR_ID","dtt_1304_1681974712398":"NPSSSBR_ID","dtt_1304_1681974988885":"NPSSBFSR_ID","dtt_1304_1695130590062":"NPSSNPPL_ID","dtt_1304_1695214768145":"NAL_ID","dtt_1304_1700459090330":"NPSSPN_ID","dtt_1304_1701251364899":"NPSSPNB_ID","dtt_1304_1707202677013":"NPSSFE_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "queue_list"
	uicgc_2 : string = "process_log_list"
	uicgc_3 : string = "navigation"
	uicgc_4 : string = "search"
	uicgc_5 : string = "history_detail"
	uicgc_6 : string = "request_ui"
	uicgc_7 : string = "response_ui"
	uicgc_8 : string = "process_log_ui"
	uicgc_9 : string = "view_req_back_ui"
	key_events : any = {}
	btl_1304_1683790043469 : string = "p_view_history_layout"
	btl_1304_1683789810721 : string = "p_view_api_req_and_res_layout"
	btl_1304_1683782343745 : string = "p_search_layout"
	btl_1304_1683782266165 : string = "p_main_layout"
	forms : any = ["uicgc_7","uicgc_4","uicgc_6","uicgc_8","uicgc_9","uicgc_3"]
	p_search_layout__spap_for_search_showpopup : boolean = false
	queue_list : any = {}
	process_log_list : any = {}
	navigation : any = {}
	navigation_search : any = {}
	navigation_send_to_maker : any = {}
	navigation_send_to_checker : any = {}
	navigation_view_process_log : any = {}
	navigation_call_unfreeze_api : any = {}
	search : any = {}
	search_search : any = {}
	search_clear : any = {}
	history_detail : any = {}
	request_ui : any = {}
	response_ui : any = {}
	process_log_ui : any = {}
	process_log_ui_back : any = {}
	process_log_ui_view_req_and_res : any = {}
	view_req_back_ui : any = {}
	view_req_back_ui_back : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private torus_cs_show_hideService:torus_cs_show_hideService,private npss_cs_manual_unfreeze_send_to_makerService:npss_cs_manual_unfreeze_send_to_makerService,private npss_cs_manual_unfreeze_send_to_checkerService:npss_cs_manual_unfreeze_send_to_checkerService,private npss_cs_call_p2b_unfreeze_apiService:npss_cs_call_p2b_unfreeze_apiService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Queue List" 
		this.queue_list.uictrl_code = "datatable"
		this.queue_list.uicgc_desc = "Queue List"
		this.queue_list.uicgc_code = "uicgc_1"
		this.queue_list.params = {"need_search":"N","need_pag_datatable":"Y","advance_dynamic_search":"N"}
		this.queue_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1683790822879","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Manual Unfreeze Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1683788515226","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1683788540238","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1683788549078","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  STATUS,  PROCESS_STATUS from  (  select   T.NPSSTPL_ID,   T.UETR,   T.PROCESSING_SYSTEM,   T.PROCESS_NAME,   T.STATUS,   T.PROCESS_STATUS,   T.ADDITIONAL_INFO,   T.PROCESS_TYPE,   T.MSG_ID,   T.DBTR_IBAN,   T.AMOUNT,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   T.TENANT_ID,   T.created_date,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   T.row_num  from   (   select    a.npsstpl_id,    a.uetr,    a.created_date,    a.STATUS,    a.PROCESS_STATUS,    a.DTT_CODE,    a.PROCESSING_SYSTEM,    a.PROCESS_NAME,    a.ADDITIONAL_INFO,    a.PROCESS_TYPE,    a.TENANT_ID,    a.MSG_ID,    a.DBTR_IBAN,    a.AMOUNT,      row_number() over( partition by a.uetr   order by    a.npsstpl_id desc) as row_num   from    npss_trn_process_log a ) T  inner join TRANSACTION_SET TS on   T.NPSSTPL_ID = TS.TRN_ID   and T.DTT_CODE = TS.DTT_CODE  inner join <tran_db>.CORE_Q_STATUS_ROLES QR on   T.STATUS = QR.PROCESS_QUEUE_STATUS   and T.PROCESS_STATUS = QR.QUEUE_CODE  inner join <tran_db>.CORE_APP_Q_SETUP PQ on   T.PROCESS_STATUS = PQ.QUEUE_CODE) VW where  row_num = 1 $AND order by  PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Manual Unfreeze Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_ITEM","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.queue_list.context_menu = []
		this.queue_list.views = {}
		this.queue_list.onChangecomponent = new EventEmitter<any>()
		this.queue_list.show = true
		this.queue_list.dynamic_param = {}
	
		// Component level properties - "Process Log List" 
		this.process_log_list.uictrl_code = "datatable"
		this.process_log_list.uicgc_desc = "Process Log List"
		this.process_log_list.uicgc_code = "uicgc_2"
		this.process_log_list.params = {"need_search":"N","need_pag_datatable":"Y","advance_dynamic_search":"N"}
		this.process_log_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1683790858958","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Manual Unfreeze Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1683788878583","date_format":false},{"column_name":"AMOUNT","alias_name":"","mq_id":"MQ_1683788923092","date_format":false,"currency_format":true},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1683788961907","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1683788972739","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1683789017610","date_format":false},{"column_name":"TRAN_REF_ID","alias_name":"","mq_id":"MQ_1683789046489","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1683789070209","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1683789099744","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1683809696115","date_format":false}],"joins":[]},"eq_text":"select  NPSSTPL_ID,  MSG_ID,  UETR,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  CREATED_BY,  CREATED_BY_NAME,  CREATED_DATE,  MODIFIED_BY,  MODIFIED_BY_NAME,  STATUS,  PROCESS_STATUS,  DT_CODE,  DTT_CODE,  APP_ID,  TENANT_ID,  AMOUNT,  DBTR_IBAN,  TRAN_REF_ID,  PROCESS_TYPE,  DATEMI from  (  select   T.NPSSTPL_ID,   T.MSG_ID,   T.UETR,   T.PROCESS_NAME,   T.PROCESSING_SYSTEM,   T.RESPONSE_CODE,   T.PROCESS_REF_NO,   T.CREATED_BY,   T.CREATED_BY_NAME,   T.CREATED_DATE,   TO_CHAR(T.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   T.MODIFIED_BY,   T.MODIFIED_BY_NAME,   T.STATUS,   T.PROCESS_STATUS,   T.DT_CODE,   T.DTT_CODE,   T.APP_ID,   T.TENANT_ID,   T.AMOUNT,   T.DBTR_IBAN,   T.TRAN_REF_ID,   T.PROCESS_TYPE,   T.row_num  from   (   select    A.NPSSTPL_ID,    A.MSG_ID,    A.UETR,    A.PROCESS_NAME,    A.PROCESSING_SYSTEM,    A.RESPONSE_CODE,    A.PROCESS_REF_NO,    A.CREATED_BY,    A.CREATED_BY_NAME,    A.CREATED_DATE,    TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,    A.MODIFIED_BY,    A.MODIFIED_BY_NAME,    A.STATUS,    A.PROCESS_STATUS,    A.DT_CODE,    A.DTT_CODE,    A.APP_ID,    A.TENANT_ID,    A.AMOUNT,    A.DBTR_IBAN,    A.PROCESS_TYPE,    A.TRAN_REF_ID,    row_number() over( partition by a.uetr   order by    a.npsstpl_id desc) as row_num   from    npss_trn_process_log a ) T ) V where  row_num = 1 $AND order by npsstpl_id desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Manual Unfreeze Process Log CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"AMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message ID","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Tran Ref ID","target_column":"TRAN_REF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.process_log_list.context_menu = []
		this.process_log_list.views = {}
		this.process_log_list.onChangecomponent = new EventEmitter<any>()
		this.process_log_list.show = true
		this.process_log_list.dynamic_param = {}
	
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
		
		// "Send to Maker" Button of "Navigation" component
		this.navigation_send_to_maker.label_name = "Send to Maker"
		this.navigation_send_to_maker.show = true
		this.navigation_send_to_maker.disabled = false
		this.navigation_send_to_maker.params = {"icon_only":false,"uicgcc_style":"fa fa-step-backward"}
		this.navigation_send_to_maker.dynamic_param = {}
		this.navigation_send_to_maker.role = []
		this.navigation_send_to_maker.action = ""
		
		// "Send to Checker" Button of "Navigation" component
		this.navigation_send_to_checker.label_name = "Send to Checker"
		this.navigation_send_to_checker.show = true
		this.navigation_send_to_checker.disabled = false
		this.navigation_send_to_checker.params = {"icon_only":false,"uicgcc_style":"fa fa-step-forward"}
		this.navigation_send_to_checker.dynamic_param = {}
		this.navigation_send_to_checker.role = []
		this.navigation_send_to_checker.action = ""
		
		// "View Process Log" Button of "Navigation" component
		this.navigation_view_process_log.label_name = "View Process Log"
		this.navigation_view_process_log.show = true
		this.navigation_view_process_log.disabled = false
		this.navigation_view_process_log.params = {"icon_only":false,"uicgcc_style":"fa fa-eye-slash"}
		this.navigation_view_process_log.dynamic_param = {}
		this.navigation_view_process_log.role = []
		this.navigation_view_process_log.action = ""
		
		// "Call Unfreeze API" Button of "Navigation" component
		this.navigation_call_unfreeze_api.label_name = "Call Unfreeze API"
		this.navigation_call_unfreeze_api.show = true
		this.navigation_call_unfreeze_api.disabled = false
		this.navigation_call_unfreeze_api.params = {"icon_only":false,"uicgcc_style":"fa fa-creative-commons"}
		this.navigation_call_unfreeze_api.dynamic_param = {}
		this.navigation_call_unfreeze_api.role = []
		this.navigation_call_unfreeze_api.action = ""
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_4"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS Manual Unfreeze Dashboard SRCH","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_manual_unfreeze_dashboard_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_manual_unfreeze_dashboard_srch"
		
		// "Search" Button of "Search" component
		this.search_search.label_name = "Search"
		this.search_search.show = true
		this.search_search.disabled = false
		this.search_search.params = {"icon_only":false,"uicgcc_style":""}
		this.search_search.dynamic_param = {}
		this.search_search.role = []
		this.search_search.action = ""
		
		// "Clear" Button of "Search" component
		this.search_clear.label_name = "Clear"
		this.search_clear.show = true
		this.search_clear.disabled = false
		this.search_clear.params = {"icon_only":false,"uicgcc_style":""}
		this.search_clear.dynamic_param = {}
		this.search_clear.role = []
		this.search_clear.action = ""
	
		// Component level properties - "History Detail" 
		this.history_detail.uictrl_code = "datatable"
		this.history_detail.uicgc_desc = "History Detail"
		this.history_detail.uicgc_code = "uicgc_5"
		this.history_detail.params = {"need_search":"N"}
		this.history_detail.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1683876665826","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Manual Unfreeze History MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1684217482915","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1684217483097","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1684217483274","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1684217483449","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1684217483625","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1684217512346","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1684217512521","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1684217512705","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1684217512897","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1684217543942","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1684217544117","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1684217544293","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1684217544477","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1684217575333","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1684217575517","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1684217575693","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1684217575869","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1684217576053","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1684217624010","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1684217624201","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1684217624401","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1684217624593","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1684217667583","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1684217668030","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   A.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   NPSS_TRN_PROCESS_LOG A  left join \"ad_gss_tran\".CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join \"ad_gss_tran\".CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join \"ad_gss_tran\".CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Manual Unfreeze History CCD","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBS Return Code","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.history_detail.context_menu = []
		this.history_detail.views = {}
		this.history_detail.onChangecomponent = new EventEmitter<any>()
		this.history_detail.show = true
		this.history_detail.dynamic_param = {}
	
		// Component level properties - "Request UI" 
		this.request_ui.uictrl_code = "dynamic_ui"
		this.request_ui.uicgc_desc = "Request UI"
		this.request_ui.uicgc_code = "uicgc_6"
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
		this.response_ui.uicgc_code = "uicgc_7"
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
		this.process_log_ui.uicgc_code = "uicgc_8"
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
		this.process_log_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.process_log_ui_back.dynamic_param = {}
		this.process_log_ui_back.role = []
		this.process_log_ui_back.action = ""
		
		// "View Req and Res" Button of "Process Log UI" component
		this.process_log_ui_view_req_and_res.label_name = "View Req and Res"
		this.process_log_ui_view_req_and_res.show = true
		this.process_log_ui_view_req_and_res.disabled = false
		this.process_log_ui_view_req_and_res.params = {"icon_only":false,"uicgcc_style":"fa fa-eye-slash"}
		this.process_log_ui_view_req_and_res.dynamic_param = {}
		this.process_log_ui_view_req_and_res.role = []
		this.process_log_ui_view_req_and_res.action = ""
	
		// Component level properties - "View Req Back UI" 
		this.view_req_back_ui.uictrl_code = "dynamic_ui"
		this.view_req_back_ui.uicgc_desc = "View Req Back UI"
		this.view_req_back_ui.uicgc_code = "uicgc_9"
		this.view_req_back_ui.params = {}
		this.view_req_back_ui.datasource = {}
		this.view_req_back_ui.context_menu = []
		this.view_req_back_ui.views = {}
		this.view_req_back_ui.onChangecomponent = new EventEmitter<any>()
		this.view_req_back_ui.show = true
		this.view_req_back_ui.dynamic_param = {}
		this.view_req_back_ui.f_view_req_back_ui = {"show":true}
		this.view_req_back_ui.current_view = "f_view_req_back_ui"
		
		// "Back" Button of "View Req Back UI" component
		this.view_req_back_ui_back.label_name = "Back"
		this.view_req_back_ui_back.show = true
		this.view_req_back_ui_back.disabled = false
		this.view_req_back_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.view_req_back_ui_back.dynamic_param = {}
		this.view_req_back_ui_back.role = []
		this.view_req_back_ui_back.action = ""
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__cf_from_page_load()
		this.page_load__de_from_page_load_to_cua()
		this.page_load__de_from_pl_to_stm()
		this.page_load__de_from_pl_to_stc()
		this.page_load__de_from_pl_to_vpl()
		this.page_load__de_from_pl_to_vrar_btn()
	}

	//Handler for INTERNAL event of "cf from page load"
	cf_from_page_load__internal(parent_event_result){
		this.cf_from_page_load__cc_for_show_hide_ide(parent_event_result)
	}

	//Handler for INTERNAL event of "cc for show hide ide"
	cc_for_show_hide_ide__internal(parent_event_result){
		this.cc_for_show_hide_ide__tbc_from_cc_to_search_btn(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__cui_from_clear_btn_to_search()
	}

	//Handler for SELECTION_CHANGED event of "queue list"
	queue_list__selection_changed(){
		this.queue_list__svtm_from_queue_list()
		this.queue_list__de_from_queue_list_to_stm()
		this.queue_list__de_from_queue_list_to_stc()
		this.queue_list__de_from_queue_to_cuapi()
		this.queue_list__de_from_queue_to_vpl_btn()
	}

	//Handler for INTERNAL event of "svtm from queue list"
	svtm_from_queue_list__internal(parent_event_result){
		this.svtm_from_queue_list__cc_from_svtm_queue(parent_event_result)
	}

	//Handler for INTERNAL event of "cc from svtm queue"
	cc_from_svtm_queue__internal(parent_event_result){
		this.cc_from_svtm_queue__ssp_from_cc_to_search_ui(parent_event_result)
	}

	//Handler for INTERNAL event of "ssp from cc to search ui"
	ssp_from_cc_to_search_ui__internal(parent_event_result){
		this.ssp_from_cc_to_search_ui__brfq_from_ssp_to_pll(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq from ssp to pll"
	brfq_from_ssp_to_pll__internal(parent_event_result){
		this.brfq_from_ssp_to_pll__sfr_from_brfq_to_pll(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation search"
	navigation_search__action_button_click(){
		this.navigation_search__spap_for_search()
		this.navigation_search__cui_from_search_btn_to_search_ui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__ssp_from_search_btn_to_search()
		this.search_search__cp_from_search_btn()
		this.search_search__cui_from_search_btn_to_queue_list()
		this.search_search__cui_from_search_btn_to_pll()
		this.search_search__de_from_search_btn_to_stm_btn()
		this.search_search__de_from_search_btn_to_stc_btn()
		this.search_search__de_from_search_to_view_pl_btn()
		this.search_search__de_from_search_to_cuapi_btn()
	}

	//Handler for INTERNAL event of "ssp from search btn to search"
	ssp_from_search_btn_to_search__internal(parent_event_result){
		this.ssp_from_search_btn_to_search__brfq_from_ssp_to_queue_list(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq from ssp to queue list"
	brfq_from_ssp_to_queue_list__internal(parent_event_result){
		this.brfq_from_ssp_to_queue_list__sfr_from_brfq_to_queue_list(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation view process log"
	navigation_view_process_log__action_button_click(){
		this.navigation_view_process_log__sp_from_view_process_log_btn()
		this.navigation_view_process_log__brfq_from_vpl_btn_to_history_detail()
	}

	//Handler for INTERNAL event of "brfq from vpl btn to history detail"
	brfq_from_vpl_btn_to_history_detail__internal(parent_event_result){
		this.brfq_from_vpl_btn_to_history_detail__sfr_from_brfq_to_history_detail(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__selection_changed(){
		this.process_log_list__ee_from_pll_to_cua_btn()
		this.process_log_list__ee_from_pll_to_stm_btn()
		this.process_log_list__ee_from_pll_to_stc_btn()
		this.process_log_list__ee_from_pll_to_vpl_btn()
		this.process_log_list__svtm_from_process_log_list()
	}

	//Handler for INTERNAL event of "svtm from process log list"
	svtm_from_process_log_list__internal(parent_event_result){
		this.svtm_from_process_log_list__cc_from_svtm_pll(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__selection_changed(){
		this.history_detail__ee_from_history_detail_to_view_req_btn()
		this.history_detail__ssr_from_history_detail_to_response_ui()
		this.history_detail__ssr_from_history_detail_to_request_ui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "view req back ui back"
	view_req_back_ui_back__action_button_click(){
		this.view_req_back_ui_back__sp_from_view_req_back_ui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui back"
	process_log_ui_back__action_button_click(){
		this.process_log_ui_back__sp_from_plui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view req and res"
	process_log_ui_view_req_and_res__action_button_click(){
		this.process_log_ui_view_req_and_res__sp_from_vrr_btn()
		this.process_log_ui_view_req_and_res__e_1683809192243()
		this.process_log_ui_view_req_and_res__e_1683809199541()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation send to maker"
	navigation_send_to_maker__action_button_click(){
		this.navigation_send_to_maker__e_1683795902121()
	}

	//Handler for INTERNAL event of "e 1683795902121"
	e_1683795902121__internal(parent_event_result){
		this.e_1683795902121__info_msg_from_stm_btn(parent_event_result)
	}

	//Handler for INTERNAL event of "info msg from stm btn"
	info_msg_from_stm_btn__internal(parent_event_result){
		this.info_msg_from_stm_btn__rs_from_info_msg_for_stm(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation send to checker"
	navigation_send_to_checker__action_button_click(){
		this.navigation_send_to_checker__e_1683796037034()
	}

	//Handler for INTERNAL event of "e 1683796037034"
	e_1683796037034__internal(parent_event_result){
		this.e_1683796037034__info_msg_from_cc_stc(parent_event_result)
	}

	//Handler for INTERNAL event of "info msg from cc stc"
	info_msg_from_cc_stc__internal(parent_event_result){
		this.info_msg_from_cc_stc__rs_from_im_stc_btn(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation call unfreeze api"
	navigation_call_unfreeze_api__action_button_click(){
		this.navigation_call_unfreeze_api__e_1683796216396()
	}

	//Handler for INTERNAL event of "e 1683796216396"
	e_1683796216396__internal(parent_event_result){
		this.e_1683796216396__e_1683805098955(parent_event_result)
	}

	//Handler for INTERNAL event of "e 1683805098955"
	e_1683805098955__internal(parent_event_result){
		this.e_1683805098955__e_1683805151576(parent_event_result)
	}

	//Handler for DPSINIT event of "page_load"
	page_load__cf_from_page_load() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1683782594693"
		let event_params={"caller_name":"page_load__cf_from_page_load","event_desc":"CF from Page Load","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""}}
		let handler_code="create_form"
		let internals="cf_from_page_load__cc_for_show_hide_ide,"
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
	page_load__de_from_page_load_to_cua() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_call_unfreeze_api"
		let parent_source_id=""
		let event_code="e_1683783150337"
		let event_params={"caller_name":"page_load__de_from_page_load_to_cua","event_desc":"DE from Page Load to CUA","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__de_from_pl_to_stm() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_send_to_maker"
		let parent_source_id=""
		let event_code="e_1683783184413"
		let event_params={"caller_name":"page_load__de_from_pl_to_stm","event_desc":"DE from PL to STM","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__de_from_pl_to_stc() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_send_to_checker"
		let parent_source_id=""
		let event_code="e_1683783228028"
		let event_params={"caller_name":"page_load__de_from_pl_to_stc","event_desc":"DE from PL to STC","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__de_from_pl_to_vpl() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_view_process_log"
		let parent_source_id=""
		let event_code="e_1683790673875"
		let event_params={"caller_name":"page_load__de_from_pl_to_vpl","event_desc":"DE from PL to VPL","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__de_from_pl_to_vrar_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="process_log_ui_view_req_and_res"
		let parent_source_id=""
		let event_code="e_1683790725537"
		let event_params={"caller_name":"page_load__de_from_pl_to_vrar_btn","event_desc":"DE from PL to VRAR Btn","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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

	//Handler for INTERNAL event of "cf from page load"
	cf_from_page_load__cc_for_show_hide_ide(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cf_from_page_load"
		let destn_id=""
		let parent_source_id="page_load"
		let event_code="e_1683782954311"
		let event_params={"caller_name":"cf_from_page_load__cc_for_show_hide_ide","event_desc":"CC for Show Hide IDE","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="cc_for_show_hide_ide__tbc_from_cc_to_search_btn,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for show hide ide"
	cc_for_show_hide_ide__tbc_from_cc_to_search_btn(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_show_hide_ide"
		let destn_id="search_search"
		let parent_source_id="cf_from_page_load"
		let event_code="e_1683790228700"
		let event_params={"caller_name":"cc_for_show_hide_ide__tbc_from_cc_to_search_btn","event_desc":"TBC from CC to Search btn","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__cui_from_clear_btn_to_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_clear"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1683782827624"
		let event_params={"caller_name":"search_clear__cui_from_clear_btn_to_search","event_desc":"CUI from Clear btn to Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_clear","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for SELECTION_CHANGED event of "queue list"
	queue_list__svtm_from_queue_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue_list"
		let destn_id="queue_list"
		let parent_source_id=""
		let event_code="e_1683784237809"
		let event_params={"caller_name":"queue_list__svtm_from_queue_list","event_desc":"SVTM from Queue List","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svtm_from_queue_list__cc_from_svtm_queue,"
		let event_data={"queue_list":{"e_1683784237809":{"dts":{"dt_1304_1665901130705":{"dtts":{"dtt_1304_1665905039255":{"uicgc_code":"UICGC_1","event_code":"E_1683784237809","dt_code":"DT_1304_1665901130705","dtt_code":"DTT_1304_1665905039255","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"PROCESSING_SYSTEM","level":"MI_LEVEL","name":"MI_LEVEL_PROCESSING_SYSTEM","setd3name":"PROCESSING_SYSTEM"},{"type":"LOCAL","column_name":"PROCESS_STATUS","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_STATUS","setd3name":"PROCESS_STATUS"},{"type":"LOCAL","column_name":"STATUS","level":"MI_LEVEL","name":"MI_LEVEL_STATUS","setd3name":"STATUS"},{"type":"HARDCODED","column_name":"BULK","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1683790822879","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Manual Unfreeze Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1683788515226","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1683788540238","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1683788549078","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  STATUS,  PROCESS_STATUS from  (  select   T.NPSSTPL_ID,   T.UETR,   T.PROCESSING_SYSTEM,   T.PROCESS_NAME,   T.STATUS,   T.PROCESS_STATUS,   T.ADDITIONAL_INFO,   T.PROCESS_TYPE,   T.MSG_ID,   T.DBTR_IBAN,   T.AMOUNT,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   T.TENANT_ID,   T.created_date,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   T.row_num  from   (   select    a.npsstpl_id,    a.uetr,    a.created_date,    a.STATUS,    a.PROCESS_STATUS,    a.DTT_CODE,    a.PROCESSING_SYSTEM,    a.PROCESS_NAME,    a.ADDITIONAL_INFO,    a.PROCESS_TYPE,    a.TENANT_ID,    a.MSG_ID,    a.DBTR_IBAN,    a.AMOUNT,      row_number() over( partition by a.uetr   order by    a.npsstpl_id desc) as row_num   from    npss_trn_process_log a ) T  inner join TRANSACTION_SET TS on   T.NPSSTPL_ID = TS.TRN_ID   and T.DTT_CODE = TS.DTT_CODE  inner join <tran_db>.CORE_Q_STATUS_ROLES QR on   T.STATUS = QR.PROCESS_QUEUE_STATUS   and T.PROCESS_STATUS = QR.QUEUE_CODE  inner join <tran_db>.CORE_APP_Q_SETUP PQ on   T.PROCESS_STATUS = PQ.QUEUE_CODE) VW where  row_num = 1 $AND order by  PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Manual Unfreeze Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_ITEM","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "queue list"
	queue_list__de_from_queue_list_to_stm() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue_list"
		let destn_id="navigation_send_to_maker"
		let parent_source_id=""
		let event_code="e_1683797993955"
		let event_params={"caller_name":"queue_list__de_from_queue_list_to_stm","event_desc":"DE from Queue List to STM","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue_list","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "queue list"
	queue_list__de_from_queue_list_to_stc() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue_list"
		let destn_id="navigation_send_to_checker"
		let parent_source_id=""
		let event_code="e_1683798030712"
		let event_params={"caller_name":"queue_list__de_from_queue_list_to_stc","event_desc":"DE from Queue List to STC","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue_list","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "queue list"
	queue_list__de_from_queue_to_cuapi() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue_list"
		let destn_id="navigation_call_unfreeze_api"
		let parent_source_id=""
		let event_code="e_1683798082181"
		let event_params={"caller_name":"queue_list__de_from_queue_to_cuapi","event_desc":"DE from Queue to CUAPI","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue_list","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "queue list"
	queue_list__de_from_queue_to_vpl_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue_list"
		let destn_id="navigation_view_process_log"
		let parent_source_id=""
		let event_code="e_1683798121171"
		let event_params={"caller_name":"queue_list__de_from_queue_to_vpl_btn","event_desc":"DE from Queue to VPL Btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue_list","raiseparam":{}}
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

	//Handler for INTERNAL event of "svtm from queue list"
	svtm_from_queue_list__cc_from_svtm_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svtm_from_queue_list"
		let destn_id=""
		let parent_source_id="queue_list"
		let event_code="e_1683791318766"
		let event_params={"caller_name":"svtm_from_queue_list__cc_from_svtm_queue","event_desc":"CC from SVTM Queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue_list","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="cc_from_svtm_queue__ssp_from_cc_to_search_ui,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc from svtm queue"
	cc_from_svtm_queue__ssp_from_cc_to_search_ui(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_from_svtm_queue"
		let destn_id="search"
		let parent_source_id="svtm_from_queue_list"
		let event_code="e_1683791366300"
		let event_params={"caller_name":"cc_from_svtm_queue__ssp_from_cc_to_search_ui","event_desc":"SSP from CC to Search UI","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue_list","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="ssp_from_cc_to_search_ui__brfq_from_ssp_to_pll,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp from cc to search ui"
	ssp_from_cc_to_search_ui__brfq_from_ssp_to_pll(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_from_cc_to_search_ui"
		let destn_id="process_log_list"
		let parent_source_id="cc_from_svtm_queue"
		let event_code="e_1683791406873"
		let event_params={"caller_name":"ssp_from_cc_to_search_ui__brfq_from_ssp_to_pll","event_desc":"BRFQ from SSP to PLL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue_list","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_from_ssp_to_pll__sfr_from_brfq_to_pll,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1683790858958","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Manual Unfreeze Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1683788878583","date_format":false},{"column_name":"AMOUNT","alias_name":"","mq_id":"MQ_1683788923092","date_format":false,"currency_format":true},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1683788961907","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1683788972739","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1683789017610","date_format":false},{"column_name":"TRAN_REF_ID","alias_name":"","mq_id":"MQ_1683789046489","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1683789070209","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1683789099744","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1683809696115","date_format":false}],"joins":[]},"eq_text":"select  NPSSTPL_ID,  MSG_ID,  UETR,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  CREATED_BY,  CREATED_BY_NAME,  CREATED_DATE,  MODIFIED_BY,  MODIFIED_BY_NAME,  STATUS,  PROCESS_STATUS,  DT_CODE,  DTT_CODE,  APP_ID,  TENANT_ID,  AMOUNT,  DBTR_IBAN,  TRAN_REF_ID,  PROCESS_TYPE,  DATEMI from  (  select   T.NPSSTPL_ID,   T.MSG_ID,   T.UETR,   T.PROCESS_NAME,   T.PROCESSING_SYSTEM,   T.RESPONSE_CODE,   T.PROCESS_REF_NO,   T.CREATED_BY,   T.CREATED_BY_NAME,   T.CREATED_DATE,   TO_CHAR(T.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   T.MODIFIED_BY,   T.MODIFIED_BY_NAME,   T.STATUS,   T.PROCESS_STATUS,   T.DT_CODE,   T.DTT_CODE,   T.APP_ID,   T.TENANT_ID,   T.AMOUNT,   T.DBTR_IBAN,   T.TRAN_REF_ID,   T.PROCESS_TYPE,   T.row_num  from   (   select    A.NPSSTPL_ID,    A.MSG_ID,    A.UETR,    A.PROCESS_NAME,    A.PROCESSING_SYSTEM,    A.RESPONSE_CODE,    A.PROCESS_REF_NO,    A.CREATED_BY,    A.CREATED_BY_NAME,    A.CREATED_DATE,    TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,    A.MODIFIED_BY,    A.MODIFIED_BY_NAME,    A.STATUS,    A.PROCESS_STATUS,    A.DT_CODE,    A.DTT_CODE,    A.APP_ID,    A.TENANT_ID,    A.AMOUNT,    A.DBTR_IBAN,    A.PROCESS_TYPE,    A.TRAN_REF_ID,    row_number() over( partition by a.uetr   order by    a.npsstpl_id desc) as row_num   from    npss_trn_process_log a ) T ) V where  row_num = 1 $AND order by npsstpl_id desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Manual Unfreeze Process Log CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"AMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message ID","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Tran Ref ID","target_column":"TRAN_REF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq from ssp to pll"
	brfq_from_ssp_to_pll__sfr_from_brfq_to_pll(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_from_ssp_to_pll"
		let destn_id="process_log_list"
		let parent_source_id="ssp_from_cc_to_search_ui"
		let event_code="e_1683791440254"
		let event_params={"caller_name":"brfq_from_ssp_to_pll__sfr_from_brfq_to_pll","event_desc":"SFR from BRFQ to PLL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue_list","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1683790858958","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Manual Unfreeze Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1683788878583","date_format":false},{"column_name":"AMOUNT","alias_name":"","mq_id":"MQ_1683788923092","date_format":false,"currency_format":true},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1683788961907","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1683788972739","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1683789017610","date_format":false},{"column_name":"TRAN_REF_ID","alias_name":"","mq_id":"MQ_1683789046489","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1683789070209","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1683789099744","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1683809696115","date_format":false}],"joins":[]},"eq_text":"select  NPSSTPL_ID,  MSG_ID,  UETR,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  CREATED_BY,  CREATED_BY_NAME,  CREATED_DATE,  MODIFIED_BY,  MODIFIED_BY_NAME,  STATUS,  PROCESS_STATUS,  DT_CODE,  DTT_CODE,  APP_ID,  TENANT_ID,  AMOUNT,  DBTR_IBAN,  TRAN_REF_ID,  PROCESS_TYPE,  DATEMI from  (  select   T.NPSSTPL_ID,   T.MSG_ID,   T.UETR,   T.PROCESS_NAME,   T.PROCESSING_SYSTEM,   T.RESPONSE_CODE,   T.PROCESS_REF_NO,   T.CREATED_BY,   T.CREATED_BY_NAME,   T.CREATED_DATE,   TO_CHAR(T.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   T.MODIFIED_BY,   T.MODIFIED_BY_NAME,   T.STATUS,   T.PROCESS_STATUS,   T.DT_CODE,   T.DTT_CODE,   T.APP_ID,   T.TENANT_ID,   T.AMOUNT,   T.DBTR_IBAN,   T.TRAN_REF_ID,   T.PROCESS_TYPE,   T.row_num  from   (   select    A.NPSSTPL_ID,    A.MSG_ID,    A.UETR,    A.PROCESS_NAME,    A.PROCESSING_SYSTEM,    A.RESPONSE_CODE,    A.PROCESS_REF_NO,    A.CREATED_BY,    A.CREATED_BY_NAME,    A.CREATED_DATE,    TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,    A.MODIFIED_BY,    A.MODIFIED_BY_NAME,    A.STATUS,    A.PROCESS_STATUS,    A.DT_CODE,    A.DTT_CODE,    A.APP_ID,    A.TENANT_ID,    A.AMOUNT,    A.DBTR_IBAN,    A.PROCESS_TYPE,    A.TRAN_REF_ID,    row_number() over( partition by a.uetr   order by    a.npsstpl_id desc) as row_num   from    npss_trn_process_log a ) T ) V where  row_num = 1 $AND order by npsstpl_id desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Manual Unfreeze Process Log CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"AMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message ID","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Tran Ref ID","target_column":"TRAN_REF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let event_code="e_1683783822544"
		let event_params={"caller_name":"navigation_search__spap_for_search","event_desc":"SPAP for Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_for_search","selector":"p_search_layout","profile_code":"BTL_1304_1683782343745","window_title":"Search","window_height":400,"window_width":"900px","window_close_icon":"Y","eventdes":"spap_for_search","eventcode":"E_1683783822544"}}
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
	navigation_search__cui_from_search_btn_to_search_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1683790375284"
		let event_params={"caller_name":"navigation_search__cui_from_search_btn_to_search_ui","event_desc":"CUI from Search btn to Search UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_search","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__ssp_from_search_btn_to_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1683783888044"
		let event_params={"caller_name":"search_search__ssp_from_search_btn_to_search","event_desc":"SSP from Search Btn to Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="ssp_from_search_btn_to_search__brfq_from_ssp_to_queue_list,"
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
	search_search__cp_from_search_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1683783932572"
		let event_params={"popup_info":{"context":""},"caller_name":"search_search__cp_from_search_btn","event_desc":"CP from Search btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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
	search_search__cui_from_search_btn_to_queue_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="queue_list"
		let parent_source_id=""
		let event_code="e_1683790543083"
		let event_params={"caller_name":"search_search__cui_from_search_btn_to_queue_list","event_desc":"CUI from Search btn to Queue List","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1683790822879","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Manual Unfreeze Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1683788515226","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1683788540238","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1683788549078","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  STATUS,  PROCESS_STATUS from  (  select   T.NPSSTPL_ID,   T.UETR,   T.PROCESSING_SYSTEM,   T.PROCESS_NAME,   T.STATUS,   T.PROCESS_STATUS,   T.ADDITIONAL_INFO,   T.PROCESS_TYPE,   T.MSG_ID,   T.DBTR_IBAN,   T.AMOUNT,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   T.TENANT_ID,   T.created_date,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   T.row_num  from   (   select    a.npsstpl_id,    a.uetr,    a.created_date,    a.STATUS,    a.PROCESS_STATUS,    a.DTT_CODE,    a.PROCESSING_SYSTEM,    a.PROCESS_NAME,    a.ADDITIONAL_INFO,    a.PROCESS_TYPE,    a.TENANT_ID,    a.MSG_ID,    a.DBTR_IBAN,    a.AMOUNT,      row_number() over( partition by a.uetr   order by    a.npsstpl_id desc) as row_num   from    npss_trn_process_log a ) T  inner join TRANSACTION_SET TS on   T.NPSSTPL_ID = TS.TRN_ID   and T.DTT_CODE = TS.DTT_CODE  inner join <tran_db>.CORE_Q_STATUS_ROLES QR on   T.STATUS = QR.PROCESS_QUEUE_STATUS   and T.PROCESS_STATUS = QR.QUEUE_CODE  inner join <tran_db>.CORE_APP_Q_SETUP PQ on   T.PROCESS_STATUS = PQ.QUEUE_CODE) VW where  row_num = 1 $AND order by  PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Manual Unfreeze Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_ITEM","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__cui_from_search_btn_to_pll() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="process_log_list"
		let parent_source_id=""
		let event_code="e_1683790596999"
		let event_params={"caller_name":"search_search__cui_from_search_btn_to_pll","event_desc":"CUI from Search btn to PLL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1683790858958","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Manual Unfreeze Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1683788878583","date_format":false},{"column_name":"AMOUNT","alias_name":"","mq_id":"MQ_1683788923092","date_format":false,"currency_format":true},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1683788961907","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1683788972739","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1683789017610","date_format":false},{"column_name":"TRAN_REF_ID","alias_name":"","mq_id":"MQ_1683789046489","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1683789070209","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1683789099744","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1683809696115","date_format":false}],"joins":[]},"eq_text":"select  NPSSTPL_ID,  MSG_ID,  UETR,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  CREATED_BY,  CREATED_BY_NAME,  CREATED_DATE,  MODIFIED_BY,  MODIFIED_BY_NAME,  STATUS,  PROCESS_STATUS,  DT_CODE,  DTT_CODE,  APP_ID,  TENANT_ID,  AMOUNT,  DBTR_IBAN,  TRAN_REF_ID,  PROCESS_TYPE,  DATEMI from  (  select   T.NPSSTPL_ID,   T.MSG_ID,   T.UETR,   T.PROCESS_NAME,   T.PROCESSING_SYSTEM,   T.RESPONSE_CODE,   T.PROCESS_REF_NO,   T.CREATED_BY,   T.CREATED_BY_NAME,   T.CREATED_DATE,   TO_CHAR(T.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   T.MODIFIED_BY,   T.MODIFIED_BY_NAME,   T.STATUS,   T.PROCESS_STATUS,   T.DT_CODE,   T.DTT_CODE,   T.APP_ID,   T.TENANT_ID,   T.AMOUNT,   T.DBTR_IBAN,   T.TRAN_REF_ID,   T.PROCESS_TYPE,   T.row_num  from   (   select    A.NPSSTPL_ID,    A.MSG_ID,    A.UETR,    A.PROCESS_NAME,    A.PROCESSING_SYSTEM,    A.RESPONSE_CODE,    A.PROCESS_REF_NO,    A.CREATED_BY,    A.CREATED_BY_NAME,    A.CREATED_DATE,    TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,    A.MODIFIED_BY,    A.MODIFIED_BY_NAME,    A.STATUS,    A.PROCESS_STATUS,    A.DT_CODE,    A.DTT_CODE,    A.APP_ID,    A.TENANT_ID,    A.AMOUNT,    A.DBTR_IBAN,    A.PROCESS_TYPE,    A.TRAN_REF_ID,    row_number() over( partition by a.uetr   order by    a.npsstpl_id desc) as row_num   from    npss_trn_process_log a ) T ) V where  row_num = 1 $AND order by npsstpl_id desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Manual Unfreeze Process Log CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"AMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message ID","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Tran Ref ID","target_column":"TRAN_REF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__de_from_search_btn_to_stm_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="navigation_send_to_maker"
		let parent_source_id=""
		let event_code="e_1683790785606"
		let event_params={"caller_name":"search_search__de_from_search_btn_to_stm_btn","event_desc":"DE from Search btn to STM btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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
	search_search__de_from_search_btn_to_stc_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="navigation_send_to_checker"
		let parent_source_id=""
		let event_code="e_1683790816372"
		let event_params={"caller_name":"search_search__de_from_search_btn_to_stc_btn","event_desc":"DE from Search btn to STC btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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
	search_search__de_from_search_to_view_pl_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="navigation_view_process_log"
		let parent_source_id=""
		let event_code="e_1683790849698"
		let event_params={"caller_name":"search_search__de_from_search_to_view_pl_btn","event_desc":"DE from Search to View PL Btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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
	search_search__de_from_search_to_cuapi_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="navigation_call_unfreeze_api"
		let parent_source_id=""
		let event_code="e_1683790905081"
		let event_params={"caller_name":"search_search__de_from_search_to_cuapi_btn","event_desc":"DE from Search to CUAPI Btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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

	//Handler for INTERNAL event of "ssp from search btn to search"
	ssp_from_search_btn_to_search__brfq_from_ssp_to_queue_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_from_search_btn_to_search"
		let destn_id="queue_list"
		let parent_source_id="search_search"
		let event_code="e_1683784004965"
		let event_params={"caller_name":"ssp_from_search_btn_to_search__brfq_from_ssp_to_queue_list","event_desc":"BRFQ from SSP to Queue List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_from_ssp_to_queue_list__sfr_from_brfq_to_queue_list,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1683790822879","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Manual Unfreeze Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1683788515226","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1683788540238","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1683788549078","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  STATUS,  PROCESS_STATUS from  (  select   T.NPSSTPL_ID,   T.UETR,   T.PROCESSING_SYSTEM,   T.PROCESS_NAME,   T.STATUS,   T.PROCESS_STATUS,   T.ADDITIONAL_INFO,   T.PROCESS_TYPE,   T.MSG_ID,   T.DBTR_IBAN,   T.AMOUNT,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   T.TENANT_ID,   T.created_date,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   T.row_num  from   (   select    a.npsstpl_id,    a.uetr,    a.created_date,    a.STATUS,    a.PROCESS_STATUS,    a.DTT_CODE,    a.PROCESSING_SYSTEM,    a.PROCESS_NAME,    a.ADDITIONAL_INFO,    a.PROCESS_TYPE,    a.TENANT_ID,    a.MSG_ID,    a.DBTR_IBAN,    a.AMOUNT,      row_number() over( partition by a.uetr   order by    a.npsstpl_id desc) as row_num   from    npss_trn_process_log a ) T  inner join TRANSACTION_SET TS on   T.NPSSTPL_ID = TS.TRN_ID   and T.DTT_CODE = TS.DTT_CODE  inner join <tran_db>.CORE_Q_STATUS_ROLES QR on   T.STATUS = QR.PROCESS_QUEUE_STATUS   and T.PROCESS_STATUS = QR.QUEUE_CODE  inner join <tran_db>.CORE_APP_Q_SETUP PQ on   T.PROCESS_STATUS = PQ.QUEUE_CODE) VW where  row_num = 1 $AND order by  PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Manual Unfreeze Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_ITEM","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq from ssp to queue list"
	brfq_from_ssp_to_queue_list__sfr_from_brfq_to_queue_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_from_ssp_to_queue_list"
		let destn_id="queue_list"
		let parent_source_id="ssp_from_search_btn_to_search"
		let event_code="e_1683784032987"
		let event_params={"caller_name":"brfq_from_ssp_to_queue_list__sfr_from_brfq_to_queue_list","event_desc":"SFR from BRFQ to Queue List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1683790822879","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Manual Unfreeze Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1683788515226","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1683788540238","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1683788549078","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  STATUS,  PROCESS_STATUS from  (  select   T.NPSSTPL_ID,   T.UETR,   T.PROCESSING_SYSTEM,   T.PROCESS_NAME,   T.STATUS,   T.PROCESS_STATUS,   T.ADDITIONAL_INFO,   T.PROCESS_TYPE,   T.MSG_ID,   T.DBTR_IBAN,   T.AMOUNT,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   T.TENANT_ID,   T.created_date,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   T.row_num  from   (   select    a.npsstpl_id,    a.uetr,    a.created_date,    a.STATUS,    a.PROCESS_STATUS,    a.DTT_CODE,    a.PROCESSING_SYSTEM,    a.PROCESS_NAME,    a.ADDITIONAL_INFO,    a.PROCESS_TYPE,    a.TENANT_ID,    a.MSG_ID,    a.DBTR_IBAN,    a.AMOUNT,      row_number() over( partition by a.uetr   order by    a.npsstpl_id desc) as row_num   from    npss_trn_process_log a ) T  inner join TRANSACTION_SET TS on   T.NPSSTPL_ID = TS.TRN_ID   and T.DTT_CODE = TS.DTT_CODE  inner join <tran_db>.CORE_Q_STATUS_ROLES QR on   T.STATUS = QR.PROCESS_QUEUE_STATUS   and T.PROCESS_STATUS = QR.QUEUE_CODE  inner join <tran_db>.CORE_APP_Q_SETUP PQ on   T.PROCESS_STATUS = PQ.QUEUE_CODE) VW where  row_num = 1 $AND order by  PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Manual Unfreeze Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_ITEM","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation view process log"
	navigation_view_process_log__sp_from_view_process_log_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_process_log"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1683791542337"
		let event_params={"caller_name":"navigation_view_process_log__sp_from_view_process_log_btn","event_desc":"SP from View Process Log Btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_process_log","raiseparam":{"profile_code":"BTL_1304_1683790043469"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view process log"
	navigation_view_process_log__brfq_from_vpl_btn_to_history_detail() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_process_log"
		let destn_id="history_detail"
		let parent_source_id=""
		let event_code="e_1683792291573"
		let event_params={"caller_name":"navigation_view_process_log__brfq_from_vpl_btn_to_history_detail","event_desc":"BRFQ from VPL Btn to History Detail","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_process_log","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_from_vpl_btn_to_history_detail__sfr_from_brfq_to_history_detail,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1683876665826","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Manual Unfreeze History MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1684217482915","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1684217483097","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1684217483274","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1684217483449","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1684217483625","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1684217512346","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1684217512521","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1684217512705","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1684217512897","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1684217543942","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1684217544117","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1684217544293","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1684217544477","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1684217575333","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1684217575517","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1684217575693","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1684217575869","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1684217576053","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1684217624010","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1684217624201","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1684217624401","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1684217624593","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1684217667583","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1684217668030","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   A.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   NPSS_TRN_PROCESS_LOG A  left join \"ad_gss_tran\".CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join \"ad_gss_tran\".CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join \"ad_gss_tran\".CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Manual Unfreeze History CCD","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBS Return Code","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq from vpl btn to history detail"
	brfq_from_vpl_btn_to_history_detail__sfr_from_brfq_to_history_detail(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_from_vpl_btn_to_history_detail"
		let destn_id="history_detail"
		let parent_source_id="navigation_view_process_log"
		let event_code="e_1683792328044"
		let event_params={"caller_name":"brfq_from_vpl_btn_to_history_detail__sfr_from_brfq_to_history_detail","event_desc":"SFR from BRFQ to History Detail","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_view_process_log","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1683876665826","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Manual Unfreeze History MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1684217482915","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1684217483097","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1684217483274","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1684217483449","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1684217483625","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1684217512346","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1684217512521","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1684217512705","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1684217512897","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1684217543942","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1684217544117","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1684217544293","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1684217544477","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1684217575333","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1684217575517","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1684217575693","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1684217575869","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1684217576053","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1684217624010","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1684217624201","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1684217624401","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1684217624593","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1684217667583","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1684217668030","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   A.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   NPSS_TRN_PROCESS_LOG A  left join \"ad_gss_tran\".CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join \"ad_gss_tran\".CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join \"ad_gss_tran\".CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Manual Unfreeze History CCD","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBS Return Code","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__ee_from_pll_to_cua_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="navigation_call_unfreeze_api"
		let parent_source_id=""
		let event_code="e_1683792073706"
		let event_params={"caller_name":"process_log_list__ee_from_pll_to_cua_btn","event_desc":"EE from PLL to CUA Btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	process_log_list__ee_from_pll_to_stm_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="navigation_send_to_maker"
		let parent_source_id=""
		let event_code="e_1683792135680"
		let event_params={"caller_name":"process_log_list__ee_from_pll_to_stm_btn","event_desc":"EE from PLL to STM btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	process_log_list__ee_from_pll_to_stc_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="navigation_send_to_checker"
		let parent_source_id=""
		let event_code="e_1683792192635"
		let event_params={"caller_name":"process_log_list__ee_from_pll_to_stc_btn","event_desc":"EE from PLL to STC Btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	process_log_list__ee_from_pll_to_vpl_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="navigation_view_process_log"
		let parent_source_id=""
		let event_code="e_1683792235296"
		let event_params={"caller_name":"process_log_list__ee_from_pll_to_vpl_btn","event_desc":"EE from PLL to VPL Btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	process_log_list__svtm_from_process_log_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="process_log_list"
		let parent_source_id=""
		let event_code="e_1683795667337"
		let event_params={"caller_name":"process_log_list__svtm_from_process_log_list","event_desc":"SVTM from Process Log List","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svtm_from_process_log_list__cc_from_svtm_pll,"
		let event_data={"process_log_list":{"e_1683795667337":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_2","event_code":"E_1683795667337","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"NPSSTPL_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSSTPL_ID","setd3name":"NPSSTPL_ID"},{"type":"LOCAL","column_name":"UETR","level":"MI_LEVEL","name":"MI_LEVEL_UETR","setd3name":"UETR"},{"type":"HARDCODED","column_name":"SELECT","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1683790858958","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Manual Unfreeze Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1683788878583","date_format":false},{"column_name":"AMOUNT","alias_name":"","mq_id":"MQ_1683788923092","date_format":false,"currency_format":true},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1683788961907","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1683788972739","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1683789017610","date_format":false},{"column_name":"TRAN_REF_ID","alias_name":"","mq_id":"MQ_1683789046489","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1683789070209","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1683789099744","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1683809696115","date_format":false}],"joins":[]},"eq_text":"select  NPSSTPL_ID,  MSG_ID,  UETR,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  CREATED_BY,  CREATED_BY_NAME,  CREATED_DATE,  MODIFIED_BY,  MODIFIED_BY_NAME,  STATUS,  PROCESS_STATUS,  DT_CODE,  DTT_CODE,  APP_ID,  TENANT_ID,  AMOUNT,  DBTR_IBAN,  TRAN_REF_ID,  PROCESS_TYPE,  DATEMI from  (  select   T.NPSSTPL_ID,   T.MSG_ID,   T.UETR,   T.PROCESS_NAME,   T.PROCESSING_SYSTEM,   T.RESPONSE_CODE,   T.PROCESS_REF_NO,   T.CREATED_BY,   T.CREATED_BY_NAME,   T.CREATED_DATE,   TO_CHAR(T.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   T.MODIFIED_BY,   T.MODIFIED_BY_NAME,   T.STATUS,   T.PROCESS_STATUS,   T.DT_CODE,   T.DTT_CODE,   T.APP_ID,   T.TENANT_ID,   T.AMOUNT,   T.DBTR_IBAN,   T.TRAN_REF_ID,   T.PROCESS_TYPE,   T.row_num  from   (   select    A.NPSSTPL_ID,    A.MSG_ID,    A.UETR,    A.PROCESS_NAME,    A.PROCESSING_SYSTEM,    A.RESPONSE_CODE,    A.PROCESS_REF_NO,    A.CREATED_BY,    A.CREATED_BY_NAME,    A.CREATED_DATE,    TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,    A.MODIFIED_BY,    A.MODIFIED_BY_NAME,    A.STATUS,    A.PROCESS_STATUS,    A.DT_CODE,    A.DTT_CODE,    A.APP_ID,    A.TENANT_ID,    A.AMOUNT,    A.DBTR_IBAN,    A.PROCESS_TYPE,    A.TRAN_REF_ID,    row_number() over( partition by a.uetr   order by    a.npsstpl_id desc) as row_num   from    npss_trn_process_log a ) T ) V where  row_num = 1 $AND order by npsstpl_id desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Manual Unfreeze Process Log CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"AMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message ID","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Tran Ref ID","target_column":"TRAN_REF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svtm from process log list"
	svtm_from_process_log_list__cc_from_svtm_pll(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svtm_from_process_log_list"
		let destn_id=""
		let parent_source_id="process_log_list"
		let event_code="e_1683795701198"
		let event_params={"caller_name":"svtm_from_process_log_list__cc_from_svtm_pll","event_desc":"CC from SVTM PLL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__ee_from_history_detail_to_view_req_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="process_log_ui_view_req_and_res"
		let parent_source_id=""
		let event_code="e_1683792380968"
		let event_params={"caller_name":"history_detail__ee_from_history_detail_to_view_req_btn","event_desc":"EE from History Detail to View Req Btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	history_detail__ssr_from_history_detail_to_response_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="response_ui"
		let parent_source_id=""
		let event_code="e_1683792443988"
		let event_params={"caller_name":"history_detail__ssr_from_history_detail_to_response_ui","event_desc":"SSR from History Detail to Response UI","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{}}
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
	history_detail__ssr_from_history_detail_to_request_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1683792478874"
		let event_params={"caller_name":"history_detail__ssr_from_history_detail_to_request_ui","event_desc":"SSR from History Detail to Request UI","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "view req back ui back"
	view_req_back_ui_back__sp_from_view_req_back_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="view_req_back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1683792556351"
		let event_params={"caller_name":"view_req_back_ui_back__sp_from_view_req_back_ui","event_desc":"SP from View Req Back UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"view_req_back_ui_back","raiseparam":{"profile_code":"BTL_1304_1683790043469"}}
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
	process_log_ui_back__sp_from_plui() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1683792694959"
		let event_params={"caller_name":"process_log_ui_back__sp_from_plui","event_desc":"SP from PLUI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_back","raiseparam":{"profile_code":"BTL_1304_1683782266165"}}
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
	process_log_ui_view_req_and_res__sp_from_vrr_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_req_and_res"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1683795783011"
		let event_params={"caller_name":"process_log_ui_view_req_and_res__sp_from_vrr_btn","event_desc":"SP from VRR Btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_req_and_res","raiseparam":{"profile_code":"BTL_1304_1683789810721"}}
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
	process_log_ui_view_req_and_res__e_1683809192243() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_req_and_res"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1683809192243"
		let event_params={"caller_name":"process_log_ui_view_req_and_res__e_1683809192243","event_desc":"E_1683809192243","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_req_and_res","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":"","change_detection":""}}
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
	process_log_ui_view_req_and_res__e_1683809199541() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_req_and_res"
		let destn_id="response_ui"
		let parent_source_id=""
		let event_code="e_1683809199541"
		let event_params={"caller_name":"process_log_ui_view_req_and_res__e_1683809199541","event_desc":"E_1683809199541","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_req_and_res","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":"","change_detection":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation send to maker"
	navigation_send_to_maker__e_1683795902121() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_send_to_maker"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1683795902121"
		let event_params={"caller_name":"navigation_send_to_maker__e_1683795902121","event_desc":"E_1683795902121","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_send_to_maker","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="e_1683795902121__info_msg_from_stm_btn,"
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_manual_unfreeze_send_to_makerService.fn_npss_cs_manual_unfreeze_send_to_maker(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "e 1683795902121"
	e_1683795902121__info_msg_from_stm_btn(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="e_1683795902121"
		let destn_id=""
		let parent_source_id="navigation_send_to_maker"
		let event_code="e_1683795922071"
		let event_params={"caller_name":"e_1683795902121__info_msg_from_stm_btn","event_desc":"Info Msg from STM Btn","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Transaction has been send to maker successfully","root_source_id":"navigation_send_to_maker","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="info_msg_from_stm_btn__rs_from_info_msg_for_stm,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "info msg from stm btn"
	info_msg_from_stm_btn__rs_from_info_msg_for_stm(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="info_msg_from_stm_btn"
		let destn_id=""
		let parent_source_id="e_1683795902121"
		let event_code="e_1683796002161"
		let event_params={"caller_name":"info_msg_from_stm_btn__rs_from_info_msg_for_stm","event_desc":"RS from Info Msg for STM","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_send_to_maker","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation send to checker"
	navigation_send_to_checker__e_1683796037034() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_send_to_checker"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1683796037034"
		let event_params={"caller_name":"navigation_send_to_checker__e_1683796037034","event_desc":"E_1683796037034","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_send_to_checker","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="e_1683796037034__info_msg_from_cc_stc,"
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_manual_unfreeze_send_to_checkerService.fn_npss_cs_manual_unfreeze_send_to_checker(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "e 1683796037034"
	e_1683796037034__info_msg_from_cc_stc(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="e_1683796037034"
		let destn_id=""
		let parent_source_id="navigation_send_to_checker"
		let event_code="e_1683796048470"
		let event_params={"caller_name":"e_1683796037034__info_msg_from_cc_stc","event_desc":"Info Msg from CC STC","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Transaction has been send to checker successfully","root_source_id":"navigation_send_to_checker","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="info_msg_from_cc_stc__rs_from_im_stc_btn,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "info msg from cc stc"
	info_msg_from_cc_stc__rs_from_im_stc_btn(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="info_msg_from_cc_stc"
		let destn_id=""
		let parent_source_id="e_1683796037034"
		let event_code="e_1683796105194"
		let event_params={"caller_name":"info_msg_from_cc_stc__rs_from_im_stc_btn","event_desc":"RS from IM STC Btn","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_send_to_checker","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation call unfreeze api"
	navigation_call_unfreeze_api__e_1683796216396() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_call_unfreeze_api"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1683796216396"
		let event_params={"caller_name":"navigation_call_unfreeze_api__e_1683796216396","event_desc":"E_1683796216396","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_call_unfreeze_api","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="e_1683796216396__e_1683805098955,"
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_call_p2b_unfreeze_apiService.fn_npss_cs_call_p2b_unfreeze_api(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "e 1683796216396"
	e_1683796216396__e_1683805098955(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="e_1683796216396"
		let destn_id=""
		let parent_source_id="navigation_call_unfreeze_api"
		let event_code="e_1683805098955"
		let event_params={"caller_name":"e_1683796216396__e_1683805098955","event_desc":"E_1683805098955","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Transaction has been unfreeze successfully","root_source_id":"navigation_call_unfreeze_api","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="e_1683805098955__e_1683805151576,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "e 1683805098955"
	e_1683805098955__e_1683805151576(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="e_1683805098955"
		let destn_id=""
		let parent_source_id="e_1683796216396"
		let event_code="e_1683805151576"
		let event_params={"caller_name":"e_1683805098955__e_1683805151576","event_desc":"E_1683805151576","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_call_unfreeze_api","raiseparam":{},"parent_event_result":"SUCCESS"}
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
