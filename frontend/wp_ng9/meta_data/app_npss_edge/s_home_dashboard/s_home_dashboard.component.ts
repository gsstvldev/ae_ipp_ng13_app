/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 29008 
Modified By     : Admin 
Modified Date   : 2023-Apr-03 7:11 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_home_dashboard
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {npss_cs_dashboard_titleService} from '../../../custom_widget/npss_cs_dashboard_title/npss_cs_dashboard_title.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'

@Component({
	selector: 's_home_dashboard',
	templateUrl: './s_home_dashboard.component.html',
	styleUrls: ['./s_home_dashboard.component.css'],
	providers:[npss_cs_dashboard_titleService,torus_cs_show_hideService]
})
    
// Start of class 
export class s_home_dashboardComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_home_dashboard"
	wftpa_id : string = "WFT_NPSS_P_1304_1678779853154_0"
	cg_code : string = "CG_1304_1678778916539"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID","dtt_1304_1670492310194":"NPSSASP_ID","dtt_1304_1670589169341":"NPSSCAPL_ID","dtt_1304_1672928670076":"NPSSNL_ID","dtt_1304_1674198360280":"NPSSE_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_default_profile"
	uicgc_1 : string = "search"
	uicgc_2 : string = "outward_list"
	uicgc_4 : string = "navigation"
	uicgc_12 : string = "inward_list"
	uicgc_13 : string = "inward_queue"
	uicgc_14 : string = "transaction_list"
	uicgc_15 : string = "history_detail"
	uicgc_19 : string = "message_back_ui"
	uicgc_20 : string = "message_detail"
	uicgc_21 : string = "message_detail_action"
	uicgc_22 : string = "message_detail_ui"
	uicgc_23 : string = "request_ui"
	uicgc_24 : string = "response_ui"
	uicgc_25 : string = "single_back_ui"
	uicgc_26 : string = "view_dr_cr_details"
	uicgc_27 : string = "view_payment_details"
	uicgc_28 : string = "back_ui"
	uicgc_29 : string = "process_log_ui"
	uicgc_30 : string = "outward"
	uicgc_34 : string = "nav_ui"
	uicgc_37 : string = "home_dashboard_title"
	uicgc_38 : string = "inward"
	key_events : any = {}
	btl_1304_1678973592738 : string = "p_transaction_list_layout"
	btl_1304_1678876184454 : string = "p_process_log_list_history_layout"
	btl_1304_1678876095161 : string = "p_view_tran_detail_layout"
	btl_1304_1678803372109 : string = "p_view_req_and_res_ui_profile"
	btl_1304_1678803301898 : string = "p_view_message_ui_layout"
	btl_1304_1678803243440 : string = "p_message_list_layout"
	btl_1408_1598521300065 : string = "p_search_layout"
	btl_1408_1598521214410 : string = "p_default_profile"
	forms : any = ["uicgc_22","uicgc_1","uicgc_23","uicgc_24","uicgc_4","uicgc_29","uicgc_28","uicgc_25","uicgc_19","uicgc_21","uicgc_34"]
	search : any = {}
	search_search : any = {}
	search_clear : any = {}
	outward_list : any = {}
	navigation : any = {}
	navigation_back : any = {}
	navigation_view_tran : any = {}
	navigation_view_process_log : any = {}
	navigation_view_message_log : any = {}
	inward_list : any = {}
	inward_queue : any = {}
	transaction_list : any = {}
	history_detail : any = {}
	message_back_ui : any = {}
	message_back_ui_back : any = {}
	message_detail : any = {}
	message_detail_action : any = {}
	message_detail_action_back : any = {}
	message_detail_action_view_message : any = {}
	message_detail_ui : any = {}
	request_ui : any = {}
	response_ui : any = {}
	single_back_ui : any = {}
	single_back_ui_back : any = {}
	view_dr_cr_details : any = {}
	view_payment_details : any = {}
	back_ui : any = {}
	back_ui_back : any = {}
	process_log_ui : any = {}
	process_log_ui_back : any = {}
	process_log_ui_view_req_and_res : any = {}
	outward : any = {}
	nav_ui : any = {}
	nav_ui_view_ip_queue : any = {}
	nav_ui_trg_for_hide_tran_list : any = {}
	home_dashboard_title : any = {}
	inward : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private npss_cs_dashboard_titleService:npss_cs_dashboard_titleService,private torus_cs_show_hideService:torus_cs_show_hideService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_1"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1665901217208","is_tab_mode":"N","dtt_1304_1665901217208":{"0":[{"dttv_id":"NPSS Home Dashboard UI","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Transactions"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_home_dashboard_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_home_dashboard_ui"
		
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
	
		// Component level properties - "Outward List" 
		this.outward_list.uictrl_code = "datatable"
		this.outward_list.uicgc_desc = "Outward List"
		this.outward_list.uicgc_code = "uicgc_2"
		this.outward_list.params = {"need_pag_datatable":"Y","need_search":"N","advance_dynamic_search":"N"}
		this.outward_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678780847259","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Home Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"Type","alias_name":"","mq_id":"MQ_1677928433068","date_format":false},{"column_name":"Total","alias_name":"","mq_id":"MQ_1677928433241","date_format":false},{"column_name":"IBMB","alias_name":"","mq_id":"MQ_1677928433417","date_format":false},{"column_name":"RMB","alias_name":"","mq_id":"MQ_1677928433585","date_format":false},{"column_name":"RIB","alias_name":"","mq_id":"MQ_1677928433769","date_format":false},{"column_name":"CMB","alias_name":"","mq_id":"MQ_1677928433945","date_format":false},{"column_name":"CIB","alias_name":"","mq_id":"MQ_1677928434130","date_format":false},{"column_name":"CMS","alias_name":"","mq_id":"MQ_1677928467185","date_format":false},{"column_name":"Manual","alias_name":"","mq_id":"MQ_1677928467361","date_format":false},{"column_name":"Pending_Screening","alias_name":"","mq_id":"MQ_1677928467521","date_format":false},{"column_name":"Pending_Maker","alias_name":"","mq_id":"MQ_1677928484313","date_format":false},{"column_name":"Pending_Checker","alias_name":"","mq_id":"MQ_1677928484473","date_format":false},{"column_name":"Send_to_CB","alias_name":"","mq_id":"MQ_1677928484633","date_format":false},{"column_name":"CBACK","alias_name":"","mq_id":"MQ_1677928498570","date_format":false},{"column_name":"CBNACK","alias_name":"","mq_id":"MQ_1677928498753","date_format":false},{"column_name":"Pending_T_1","alias_name":"","mq_id":"MQ_1677928498969","date_format":false},{"column_name":"Created_Date","alias_name":"","mq_id":"MQ_1677928517681","date_format":true}],"joins":[]},"eq_text":"select A.type, case when A.type='pacs.008' and b.sno is null then 1 when A.type='pacs.004' and b.sno is null then 2  when A.type='pacs.007' and b.sno is null then 3 else b.sno end sno, COALESCE(b.total,0) as total, COALESCE(b.IBMB,0) as IBMB, COALESCE(b.RIB,0) as RIB, COALESCE(b.RMB,0) as RMB, COALESCE(b.CIB,0) as CIB, COALESCE(b.CMS,0) as CMS, COALESCE(b.CMB,0) as CMB, COALESCE(b.Manual,0) as Manual, COALESCE(b.Pending_Screening,0) as Pending_Screening, COALESCE(b.PENDING_MAKER,0) as PENDING_MAKER, COALESCE(b.PENDING_CHECKER,0) as PENDING_CHECKER, COALESCE(b.SEND_TO_CB,0) as SEND_TO_CB, COALESCE(b.CBACK,0) as CBACK, COALESCE(b.CBNACK,0) as CBNACK, COALESCE(b.Pending_T_1,0) as Pending_T_1, to_char(CURRENT_DATE::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date from (select  'pacs.008' as TYPE union  select  'pacs.004' as TYPE union  select  'pacs.007' as type) A  left join (select  SNO,  type,  SUM(TOTAL) as Total,  SUM(IBMB) as IBMB,  SUM(RIB) as RIB,  SUM(RMB) as RMB ,  SUM(CIB) as CIB,  SUM(CMS) as CMS,  SUM(CMB) as CMB,  SUM(MANUAL) as Manual,  SUM(PENDING_SCREENING) as Pending_Screening,  SUM(PENDING_MAKER) as Pending_Maker,  SUM(PENDING_CHECKER) as Pending_Checker,  SUM(SEND_TO_CB) as Send_to_CB,  SUM(CBACK) as CBACK,  SUM(CBNACK) as CBNACK,  CREATED_DATE,  SUM(PENDING_T_1) as Pending_T_1 from  (  select  SNO,  type,  Total,  IBMB,  RIB,  RMB ,  CIB,  CMS,  CMB,  MANUAL,  PENDING_SCREENING,  PENDING_MAKER,  PENDING_CHECKER,  SEND_TO_CB,  CBACK,  CBNACK,  CREATED_DATE,  PENDING_T_1,  DEPARTMENT_CODE  from   vw_dashboard_outward_data) as t $WHERE group by  SNO,  type,  CREATED_DATE) B on B.type = A.type  order by sno"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Home Dashboard MQ CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Type","target_column":"Type","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Total","target_column":"Total","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBMB","target_column":"IBMB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"RMB","target_column":"RMB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"RIB","target_column":"RIB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CMB","target_column":"CMB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CIB","target_column":"CIB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CMS","target_column":"CMS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Manual","target_column":"Manual","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending Screening","target_column":"Pending_Screening","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (Maker)","target_column":"Pending_Maker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (Checker)","target_column":"Pending_Checker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Send to CB","target_column":"Send_to_CB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CB ACK","target_column":"CBACK","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CB NAK","target_column":"CBNACK","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (T-1)","target_column":"Pending_T_1","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.outward_list.context_menu = []
		this.outward_list.views = {}
		this.outward_list.onChangecomponent = new EventEmitter<any>()
		this.outward_list.show = true
		this.outward_list.dynamic_param = {}
	
		// Component level properties - "Navigation" 
		this.navigation.uictrl_code = "dynamic_ui"
		this.navigation.uicgc_desc = "Navigation"
		this.navigation.uicgc_code = "uicgc_4"
		this.navigation.params = {}
		this.navigation.datasource = {}
		this.navigation.context_menu = []
		this.navigation.views = {}
		this.navigation.onChangecomponent = new EventEmitter<any>()
		this.navigation.show = true
		this.navigation.dynamic_param = {}
		this.navigation.f_navigation = {"show":true}
		this.navigation.current_view = "f_navigation"
		
		// "Back" Button of "Navigation" component
		this.navigation_back.label_name = "Back"
		this.navigation_back.show = true
		this.navigation_back.disabled = false
		this.navigation_back.params = {"icon_only":false,"uicgcc_style":"fa fa-fast-backward"}
		this.navigation_back.dynamic_param = {}
		this.navigation_back.role = []
		this.navigation_back.action = ""
		
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
		this.navigation_view_process_log.disabled = true
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
	
		// Component level properties - "Inward List" 
		this.inward_list.uictrl_code = "datatable"
		this.inward_list.uicgc_desc = "Inward List"
		this.inward_list.uicgc_code = "uicgc_12"
		this.inward_list.params = {"need_pag_datatable":"Y","need_search":"N","advance_dynamic_search":"N"}
		this.inward_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_12","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678780879597","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS IP Home Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"type","alias_name":"","mq_id":"MQ_1677933613596","date_format":false},{"column_name":"total","alias_name":"","mq_id":"MQ_1678169755516","date_format":false},{"column_name":"pending_maker","alias_name":"","mq_id":"MQ_1678169755682","date_format":false},{"column_name":"pending_checker","alias_name":"","mq_id":"MQ_1678169755850","date_format":false},{"column_name":"pending_screening","alias_name":"","mq_id":"MQ_1678169756042","date_format":false},{"column_name":"successfullyposted","alias_name":"","mq_id":"MQ_1678169756202","date_format":false},{"column_name":"pending_returns_maker","alias_name":"","mq_id":"MQ_1678169780171","date_format":false},{"column_name":"pending_returns_checker","alias_name":"","mq_id":"MQ_1678169780331","date_format":false},{"column_name":"returned","alias_name":"","mq_id":"MQ_1678169780499","date_format":false},{"column_name":"pending_t_1","alias_name":"","mq_id":"MQ_1678169862467","date_format":false},{"column_name":"created_date","alias_name":"","mq_id":"MQ_1678170105508","date_format":true}],"joins":[]},"eq_text":"select A.type, case when A.type='pacs.008' and b.sno is null then 1 when A.type='pacs.004' and b.sno is null then 2  when A.type='pacs.007' and b.sno is null then 3 else b.sno end sno, COALESCE(b.total,0) as total, COALESCE(b.Pending_Screening,0) as Pending_Screening, COALESCE(b.PENDING_MAKER,0) as PENDING_MAKER, COALESCE(b.PENDING_CHECKER,0) as PENDING_CHECKER, COALESCE(b.successfullyposted,0) as successfullyposted, COALESCE(b.pending_returns_maker,0) as pending_returns_maker, COALESCE(b.pending_returns_checker,0) as pending_returns_checker, COALESCE(b.returned,0) as returned, COALESCE(b.Pending_T_1,0) as Pending_T_1, to_char(CURRENT_DATE::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date from (select  'pacs.008' as TYPE union  select  'pacs.004' as TYPE union  select  'pacs.007' as type) A  left join (select  sno,  type,  sum(total) as TOTAL,  sum(pending_maker) as pending_maker,  sum(pending_checker) as pending_checker,  sum(pending_screening) as pending_screening,  sum(successfullyposted) as successfullyposted,  sum(pending_returns_maker) as pending_returns_maker,  sum(pending_returns_checker) as pending_returns_checker,  sum(returned) as returned,  sum(pending_t_1) as pending_t_1,  created_date from  (  select   sno,   type,   TOTAL,   pending_maker,   pending_checker,   pending_screening,   successfullyposted,   pending_returns_maker,   pending_returns_checker,   returned,   pending_t_1,   created_date,   DEPARTMENT_CODE  from   vw_dashboard_inward_data) T $WHERE group by  SNO,  type,  CREATED_DATE) B on B.type = A.type  order by sno"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS IP Home Dashboard MQ CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Type","target_column":"type","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Total","target_column":"total","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (Maker)","target_column":"pending_maker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (Checker)","target_column":"pending_checker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending Screening","target_column":"pending_screening","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Successfully Posted","target_column":"successfullyposted","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending Returns (Maker)","target_column":"pending_returns_maker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending Returns (Checker)","target_column":"pending_returns_checker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Returned","target_column":"returned","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (T-1)","target_column":"pending_t_1","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.inward_list.context_menu = []
		this.inward_list.views = {}
		this.inward_list.onChangecomponent = new EventEmitter<any>()
		this.inward_list.show = true
		this.inward_list.dynamic_param = {}
	
		// Component level properties - "Inward Queue" 
		this.inward_queue.uictrl_code = "chart"
		this.inward_queue.uicgc_desc = "Inward Queue"
		this.inward_queue.uicgc_code = "uicgc_13"
		this.inward_queue.params = {}
		this.inward_queue.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_13","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678787742404","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Queue Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS_COUNT","alias_name":"","mq_id":"MQ_1672833641472","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1672833641606","date_format":false}],"joins":[]},"eq_text":"select  COUNT(PROCESS_STATUS) as PROCESS_STATUS_COUNT,  PROCESS_TYPE,  PROCESS_STATUS,  createddate from  (  select   T.CREATED_DATE,   T.PROCESS_TYPE ,   T.TENANT_ID,   case    when T.channel_id is null then UPPER('UNKOWN')    else t.channel_id   end as channel_id,   case    when T.PROCESSING_SYSTEM is null then upper('unknown')    else T.PROCESSING_SYSTEM   end as PROCESSING_SYSTEM,   T.DEPARTMENT_CODE,   case    when T.PROCESS_GROUP is null then UPPER('UNKOWN')    else t.PROCESS_GROUP   end as PROCESS_GROUP,   case    when T.EXHF_ID is null then UPPER('RCT')    else UPPER('BCT')   end as PAYMENT_TYPE,   case    when T.PROCESS_STATUS is null then UPPER('UNKNOWN')    else T.PROCESS_STATUS   end as PROCESS_STATUS,   to_date(to_char(t.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) as createddate  from   NPSS_TRANSACTIONS T where to_date(to_char(T.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date) V $WHERE group by  PROCESS_STATUS,  PROCESS_TYPE,  createddate"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Queue Dashboard CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENENT_ID","binding_name":"TENENT_ID","binding_value":"","source_name":"TENENT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"PROCESS_STATUS_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.inward_queue.context_menu = []
		this.inward_queue.views = {}
		this.inward_queue.onChangecomponent = new EventEmitter<any>()
		this.inward_queue.show = true
		this.inward_queue.dynamic_param = {}
	
		// Component level properties - "Transaction List" 
		this.transaction_list.uictrl_code = "datatable"
		this.transaction_list.uicgc_desc = "Transaction List"
		this.transaction_list.uicgc_code = "uicgc_14"
		this.transaction_list.params = {"advance_dynamic_search":"N","need_search":"N","need_pag_datatable":"Y"}
		this.transaction_list.datasource = {"e_1679038709562":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_14","event_code":"E_1679038709562","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679039315939","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Home Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1678795579493","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1678795579892","date_format":false},{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1678795580083","date_format":true},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1678795580252","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1678795580443","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1678795580651","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1678795581011","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1678795648225","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1678795648809","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1678795649097","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1678795649417","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1678795649737","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1678795721503","date_format":false},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1678795721671","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1678795721847","date_format":false},{"column_name":"cr_acct_identification_mask","alias_name":"","mq_id":"MQ_1678795722007","date_format":false},{"column_name":"dr_acct_identification_mask","alias_name":"","mq_id":"MQ_1678800278062","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  Pending_Detais_OP,  Pending_Detais_IP,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification_mask,  Fn_card_decrypt_and_mask_rpt(DBTR_ACCT_NO) as dr_acct_identification_mask,  type,  CR_ACCT_IDENTIFICATION,  UETR,  VALUE_DATE,  ACCP_DATE_TIME,  CREATED_DATE,  DATEMI,  EXHF_ID,  CDTR_IBAN,  TENANT_ID,  TRAN_REF_ID,  DEPARTMENT_CODE,  PAYMENT_ENDTOEND_ID,  CLRSYSREF,  CDTR_ACCT_NO,  DBTR_ACCT_NO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  STATUS,  PROCESSING_SYSTEM,  PROCESS_STATUS,  DBTR_ACCT_NAME,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  DBTR_CUST_TYPE,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  CDTR_ACCT_NAME,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  DR_SORT_CODE,  CR_SORT_CODE,  CATEGORY_PURPOSE,  CATEGORY_PURPOSE_PRTY,  BASE_CURRENCY,  BASE_AMOUNT,  HDR_TOTAL_RECORDS,  HDR_TOTAL_AMOUNT,  HDR_CLEARING_SYSTEM,  CHARGE_BEARER,  REMITTANCE_INFO,  ACCOUNT_CURRENCY,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  ISSUER_TYPE_CODE,  CBS_REF_NO,  CBS_POSTING_FLAG,  PROCESS_TYPE,  PROCESS_GROUP from  (  select distinct (ntl.process_name),   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   case    when ntl.process_name::text in ('Place Pacs008', 'PACS.008','Receive Pacs008') then 'pacs.008'::text    when ntl.process_name::text in ('Place Pacs.007', 'PACS.007','Receive Pacs.007') then 'pacs.007'::text    when ntl.process_name::text in ('Receive Pacs004','Place Pacs004') then 'pacs.004'::text   end as type,   case    when ((ntl.process_name = 'Place Pacs008'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('OP_AC_REV_POSTING_FAILURE', 'OP_AC_RET_POSTING_FAILURE', 'OP_P2P_REV_POSTING_FAILURE' , 'OP_P2B_FUND_UNFR_FAILURE', 'OP_P2B_REV_POSTING_FAILURE')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)    or (ntl.process_name = 'Receive Pacs004'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('OR_P2P_POSTING_FAILURE', 'OR_P2B_POSTING_FAILURE')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)    or (ntl.process_name = 'Place Pacs.007'    and nt.status in ('OP_REVERSAL_REQ_REPAIR')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)) then 'Pending (Maker)'    when ((ntl.process_name = 'Place Pacs008'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('OP_AC_REV_POSTING_RETRY', 'OP_AC_RET_POSTING_RETRY', 'OP_P2P_REV_POSTING_RETRY', 'OP_P2B_FUND_UNFR_RETRY', 'OP_P2B_REV_POSTING_RETRY')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)    or (ntl.process_name = 'Receive Pacs004'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('OR_P2P_POSTING_RETRY', 'OR_P2B_POSTING_RETRY')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)    or (ntl.process_name = 'Place Pacs.007'    and nt.status in ('OP_REVERSAL_REQ_INITIATED')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)) then 'Pending (Checker)'    when ((ntl.process_name = 'Place Pacs008'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('OP_AC_REV_POSTING_FAILURE', 'OP_AC_RET_POSTING_FAILURE', 'OP_P2P_REV_POSTING_FAILURE' , 'OP_P2B_FUND_UNFR_FAILURE', 'OP_P2B_REV_POSTING_FAILURE', 'OP_AC_REV_POSTING_RETRY', 'OP_AC_RET_POSTING_RETRY', 'OP_P2P_REV_POSTING_RETRY', 'OP_P2B_FUND_UNFR_RETRY', 'OP_P2B_REV_POSTING_RETRY')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)    or (ntl.process_name = 'Receive Pacs004'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('OR_P2P_POSTING_FAILURE', 'OR_P2B_POSTING_FAILURE', 'OR_P2P_POSTING_RETRY', 'OR_P2B_POSTING_RETRY')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)    or (ntl.process_name = 'Place Pacs.007'    and nt.status in ('OP_REVERSAL_REQ_REPAIR', 'OP_REVERSAL_REQ_INITIATED')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)) then 'Pending (T-1)'    else 'Others'   end as Pending_Detais_OP,   case    when (ntl.process_name = 'Receive Pacs008'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('IP_RCT_RR_POSTING_FAILURE', 'IP_RCT_PC_T24_POSTING_FAILURE', 'IP_RCT_CC_T24_POSTING_FAILURE')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date) then 'Pending (Maker)'    when (ntl.process_name = 'Place Pacs004'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('IP_RCT_RETURN_POSTING_FAILURE')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date) then 'Pending (Maker)'    when (ntl.process_name = 'Receive Pacs.007'    and nt.status in ('IP_RCT_REVERSAL_REQ_RECEIVED', 'IP_RCT_REVERSAL_VLD_FAILED')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date) then 'Pending (Maker)'    when ((ntl.process_name = 'Receive Pacs008'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('IP_RCT_RR_POSTING_RETRY', 'IP_RCT_PC_T24_POSTING_RETRY', 'IP_RCT_CC_T24_POSTING_RETRY', 'IP_RCT_POSTING_SUSPICIOUS', 'IP_RCT_PC_POSTING_SUSPICIOUS')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)    or (ntl.process_name = 'Place Pacs004'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('IP_RCT_RETURN_POSTING_RETRY', 'IP_RCT_RR_POSTING_SUSPICIOUS')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)    or (ntl.process_name = 'Receive Pacs.007'    and nt.status in ('IP_RCT_REV_REQ_REJECTED', 'IP_RCT_RR_RETURN_READY')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)) then 'Pending (Checker)'    when ((ntl.process_name = 'Receive Pacs008'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('IP_RCT_RR_POSTING_FAILURE', 'IP_RCT_PC_T24_POSTING_FAILURE', 'IP_RCT_CC_T24_POSTING_FAILURE' , 'IP_RCT_RR_POSTING_RETRY', 'IP_RCT_PC_T24_POSTING_RETRY', 'IP_RCT_CC_T24_POSTING_RETRY', 'IP_RCT_POSTING_SUSPICIOUS', 'IP_RCT_PC_POSTING_SUSPICIOUS')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)    or (ntl.process_name = 'Place Pacs004'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('IP_RCT_RETURN_POSTING_FAILURE', 'IP_RCT_RETURN_POSTING_RETRY', 'IP_RCT_RR_POSTING_SUSPICIOUS')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)    or (ntl.process_name = 'Receive Pacs.007'    and nt.status in ('IP_RCT_REVERSAL_REQ_RECEIVED', 'IP_RCT_REVERSAL_VLD_FAILED', 'IP_RCT_REV_REQ_REJECTED', 'IP_RCT_RR_RETURN_READY')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)) then 'Pending (T-1)'    else 'Others'   end as Pending_Detais_IP,    CASE                     WHEN NT.department_code::text = ''::text OR NT.department_code IS NULL THEN 'DEFAULT'::character varying                     ELSE NT.department_code                 END AS department_code,   NT.TENANT_ID,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NT.STATUS,   NT.PROCESSING_SYSTEM,   NT.PROCESS_STATUS,   NT.DBTR_ACCT_NAME,   NT.DBTR_PHONE_NO,   NT.DBTR_EMAIL_ID,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN,   NT.DBTR_CUST_TYPE,   NT.DBTR_PRVT_ID,   NT.DBTR_OTHER_ISSUER,   NT.CDTR_ACCT_NAME,   NT.CDTR_PHONE_NO,   NT.CDTR_EMAIL_ID,   NT.CDTR_DOCUMENT_ID,   NT.DR_SORT_CODE,   NT.CR_SORT_CODE,   NT.CATEGORY_PURPOSE,   NT.CATEGORY_PURPOSE_PRTY,   NT.CR_ACCT_IDENTIFICATION,   NT.BASE_CURRENCY,   NT.BASE_AMOUNT,   NT.HDR_TOTAL_RECORDS,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM,   NT.CHARGE_BEARER,   NT.REMITTANCE_INFO,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID,   NT.CHANNEL_REFNO,   NT.CHANNEL_USERID,   NT.CHANNEL_PRODUCT,   NT.CHANNEL_SUB_PRODUCT,   NT.CHANNEL_TRAN_CODE,   NT.ISSUER_TYPE_CODE,   NT.CBS_REF_NO,   NT.CBS_POSTING_FLAG,   NT.PROCESS_TYPE,   NT.PROCESS_GROUP  from   NPSS_TRANSACTIONS NT  inner join npss_trn_process_log ntl on   ntl.uetr = nt.uetr) V $WHERE order by  NPSST_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Home Dashboard Tran MQ CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PENDING_DETAIS_OP","binding_name":"PENDING_DETAIS_OP","binding_value":"","source_name":"PENDING_DETAIS","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"PROCESS_TYPE","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TYPE","binding_name":"TYPE","binding_value":"","source_name":"TYPE","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Card Number","target_column":"cr_acct_identification_mask","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}},"e_1679038751136":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_14","event_code":"E_1679038751136","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679039201469","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Home Dashboard IP Queue Tran MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1679052791303","date_format":false},{"column_name":"intrbk_sttlm_cur","alias_name":"","mq_id":"MQ_1679052791509","date_format":false},{"column_name":"intrbk_sttlm_amnt","alias_name":"","mq_id":"MQ_1679052791670","date_format":false,"currency_format":true},{"column_name":"cdtr_iban","alias_name":"","mq_id":"MQ_1679052828020","date_format":false},{"column_name":"cr_acct_identification","alias_name":"","mq_id":"MQ_1679052828196","date_format":false},{"column_name":"dbtr_iban","alias_name":"","mq_id":"MQ_1679052839148","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1679052851516","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1679052851915","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1679053025779","date_format":false}],"joins":[]},"eq_text":"select  npsst_id,  uetr,  CREATED_DATE,  PROCESS_TYPE,  PROCESS_STATUS,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification ,  dbtr_iban,  DATEMI,  createddate from  (  select   t.npsst_id,   t.uetr,   T.CREATED_DATE,   TO_CHAR(T.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   T.PROCESS_TYPE ,   T.TENANT_ID,   t.intrbk_sttlm_cur ,   t.intrbk_sttlm_amnt ,   t.cdtr_iban ,   t.cr_acct_identification ,   t.dbtr_iban ,   case    when T.channel_id is null then UPPER('UNKOWN')    else t.channel_id   end as channel_id,   case    when T.PROCESSING_SYSTEM is null then upper('unknown')    else T.PROCESSING_SYSTEM   end as PROCESSING_SYSTEM,   T.DEPARTMENT_CODE,   case    when T.PROCESS_GROUP is null then UPPER('UNKOWN')    else t.PROCESS_GROUP   end as PROCESS_GROUP,   case    when T.EXHF_ID is null then UPPER('RCT')    else UPPER('BCT')   end as PAYMENT_TYPE,   case    when T.PROCESS_STATUS is null then UPPER('UNKNOWN')    else T.PROCESS_STATUS   end as PROCESS_STATUS,   to_date(to_char(t.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) as createddate  from   NPSS_TRANSACTIONS T where to_date(to_char(T.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Home Dashboard IP Queue Tran CCD","filter":[{"filter_name":"CREATEDDATE","binding_name":"CREATEDDATE","binding_value":"","source_name":"CREATEDDATE","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"DATE","conj_operator":"AND","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"PROCESS_STATUS","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"PROCESS_TYPE","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"intrbk_sttlm_cur","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"intrbk_sttlm_amnt","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"CR IBAN","target_column":"cdtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Card Number","target_column":"cr_acct_identification","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"DR IBAN","target_column":"dbtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}},"e_1679651226917":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_14","event_code":"E_1679651226917","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679651486228","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Home Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1678795579493","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1678795579892","date_format":false},{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1678795580083","date_format":true},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1678795580252","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1678795580443","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1678795580651","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1678795581011","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1678795648225","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1678795648809","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1678795649097","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1678795649417","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1678795649737","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1678795721503","date_format":false},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1678795721671","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1678795721847","date_format":false},{"column_name":"cr_acct_identification_mask","alias_name":"","mq_id":"MQ_1678795722007","date_format":false},{"column_name":"dr_acct_identification_mask","alias_name":"","mq_id":"MQ_1678800278062","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  Pending_Detais_OP,  Pending_Detais_IP,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification_mask,  Fn_card_decrypt_and_mask_rpt(DBTR_ACCT_NO) as dr_acct_identification_mask,  type,  CR_ACCT_IDENTIFICATION,  UETR,  VALUE_DATE,  ACCP_DATE_TIME,  CREATED_DATE,  DATEMI,  EXHF_ID,  CDTR_IBAN,  TENANT_ID,  TRAN_REF_ID,  DEPARTMENT_CODE,  PAYMENT_ENDTOEND_ID,  CLRSYSREF,  CDTR_ACCT_NO,  DBTR_ACCT_NO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  STATUS,  PROCESSING_SYSTEM,  PROCESS_STATUS,  DBTR_ACCT_NAME,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  DBTR_CUST_TYPE,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  CDTR_ACCT_NAME,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  DR_SORT_CODE,  CR_SORT_CODE,  CATEGORY_PURPOSE,  CATEGORY_PURPOSE_PRTY,  BASE_CURRENCY,  BASE_AMOUNT,  HDR_TOTAL_RECORDS,  HDR_TOTAL_AMOUNT,  HDR_CLEARING_SYSTEM,  CHARGE_BEARER,  REMITTANCE_INFO,  ACCOUNT_CURRENCY,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  ISSUER_TYPE_CODE,  CBS_REF_NO,  CBS_POSTING_FLAG,  PROCESS_TYPE,  PROCESS_GROUP from  (  select distinct (ntl.process_name),   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   case    when ntl.process_name::text in ('Place Pacs008', 'PACS.008','Receive Pacs008') then 'pacs.008'::text    when ntl.process_name::text in ('Place Pacs.007', 'PACS.007','Receive Pacs.007') then 'pacs.007'::text    when ntl.process_name::text in ('Receive Pacs004','Place Pacs004') then 'pacs.004'::text   end as type,   case    when ((ntl.process_name = 'Place Pacs008'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('OP_AC_REV_POSTING_FAILURE', 'OP_AC_RET_POSTING_FAILURE', 'OP_P2P_REV_POSTING_FAILURE' , 'OP_P2B_FUND_UNFR_FAILURE', 'OP_P2B_REV_POSTING_FAILURE')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)    or (ntl.process_name = 'Receive Pacs004'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('OR_P2P_POSTING_FAILURE', 'OR_P2B_POSTING_FAILURE')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)    or (ntl.process_name = 'Place Pacs.007'    and nt.status in ('OP_REVERSAL_REQ_REPAIR')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)) then 'Pending (Maker)'    when ((ntl.process_name = 'Place Pacs008'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('OP_AC_REV_POSTING_RETRY', 'OP_AC_RET_POSTING_RETRY', 'OP_P2P_REV_POSTING_RETRY', 'OP_P2B_FUND_UNFR_RETRY', 'OP_P2B_REV_POSTING_RETRY')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)    or (ntl.process_name = 'Receive Pacs004'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('OR_P2P_POSTING_RETRY', 'OR_P2B_POSTING_RETRY')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)    or (ntl.process_name = 'Place Pacs.007'    and nt.status in ('OP_REVERSAL_REQ_INITIATED')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)) then 'Pending (Checker)'    when ((ntl.process_name = 'Place Pacs008'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('OP_AC_REV_POSTING_FAILURE', 'OP_AC_RET_POSTING_FAILURE', 'OP_P2P_REV_POSTING_FAILURE' , 'OP_P2B_FUND_UNFR_FAILURE', 'OP_P2B_REV_POSTING_FAILURE', 'OP_AC_REV_POSTING_RETRY', 'OP_AC_RET_POSTING_RETRY', 'OP_P2P_REV_POSTING_RETRY', 'OP_P2B_FUND_UNFR_RETRY', 'OP_P2B_REV_POSTING_RETRY')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)    or (ntl.process_name = 'Receive Pacs004'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('OR_P2P_POSTING_FAILURE', 'OR_P2B_POSTING_FAILURE', 'OR_P2P_POSTING_RETRY', 'OR_P2B_POSTING_RETRY')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)    or (ntl.process_name = 'Place Pacs.007'    and nt.status in ('OP_REVERSAL_REQ_REPAIR', 'OP_REVERSAL_REQ_INITIATED')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)) then 'Pending (T-1)'    else 'Others'   end as Pending_Detais_OP,   case    when (ntl.process_name = 'Receive Pacs008'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('IP_RCT_RR_POSTING_FAILURE', 'IP_RCT_PC_T24_POSTING_FAILURE', 'IP_RCT_CC_T24_POSTING_FAILURE')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date) then 'Pending (Maker)'    when (ntl.process_name = 'Place Pacs004'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('IP_RCT_RETURN_POSTING_FAILURE')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date) then 'Pending (Maker)'    when (ntl.process_name = 'Receive Pacs.007'    and nt.status in ('IP_RCT_REVERSAL_REQ_RECEIVED', 'IP_RCT_REVERSAL_VLD_FAILED')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date) then 'Pending (Maker)'    when ((ntl.process_name = 'Receive Pacs008'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('IP_RCT_RR_POSTING_RETRY', 'IP_RCT_PC_T24_POSTING_RETRY', 'IP_RCT_CC_T24_POSTING_RETRY', 'IP_RCT_POSTING_SUSPICIOUS', 'IP_RCT_PC_POSTING_SUSPICIOUS')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)    or (ntl.process_name = 'Place Pacs004'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('IP_RCT_RETURN_POSTING_RETRY', 'IP_RCT_RR_POSTING_SUSPICIOUS')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)    or (ntl.process_name = 'Receive Pacs.007'    and nt.status in ('IP_RCT_REV_REQ_REJECTED', 'IP_RCT_RR_RETURN_READY')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)) then 'Pending (Checker)'    when ((ntl.process_name = 'Receive Pacs008'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('IP_RCT_RR_POSTING_FAILURE', 'IP_RCT_PC_T24_POSTING_FAILURE', 'IP_RCT_CC_T24_POSTING_FAILURE' , 'IP_RCT_RR_POSTING_RETRY', 'IP_RCT_PC_T24_POSTING_RETRY', 'IP_RCT_CC_T24_POSTING_RETRY', 'IP_RCT_POSTING_SUSPICIOUS', 'IP_RCT_PC_POSTING_SUSPICIOUS')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)    or (ntl.process_name = 'Place Pacs004'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('IP_RCT_RETURN_POSTING_FAILURE', 'IP_RCT_RETURN_POSTING_RETRY', 'IP_RCT_RR_POSTING_SUSPICIOUS')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)    or (ntl.process_name = 'Receive Pacs.007'    and nt.status in ('IP_RCT_REVERSAL_REQ_RECEIVED', 'IP_RCT_REVERSAL_VLD_FAILED', 'IP_RCT_REV_REQ_REJECTED', 'IP_RCT_RR_RETURN_READY')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)) then 'Pending (T-1)'    else 'Others'   end as Pending_Detais_IP,    CASE                     WHEN NT.department_code::text = ''::text OR NT.department_code IS NULL THEN 'DEFAULT'::character varying                     ELSE NT.department_code                 END AS department_code,   NT.TENANT_ID,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NT.STATUS,   NT.PROCESSING_SYSTEM,   NT.PROCESS_STATUS,   NT.DBTR_ACCT_NAME,   NT.DBTR_PHONE_NO,   NT.DBTR_EMAIL_ID,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN,   NT.DBTR_CUST_TYPE,   NT.DBTR_PRVT_ID,   NT.DBTR_OTHER_ISSUER,   NT.CDTR_ACCT_NAME,   NT.CDTR_PHONE_NO,   NT.CDTR_EMAIL_ID,   NT.CDTR_DOCUMENT_ID,   NT.DR_SORT_CODE,   NT.CR_SORT_CODE,   NT.CATEGORY_PURPOSE,   NT.CATEGORY_PURPOSE_PRTY,   NT.CR_ACCT_IDENTIFICATION,   NT.BASE_CURRENCY,   NT.BASE_AMOUNT,   NT.HDR_TOTAL_RECORDS,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM,   NT.CHARGE_BEARER,   NT.REMITTANCE_INFO,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID,   NT.CHANNEL_REFNO,   NT.CHANNEL_USERID,   NT.CHANNEL_PRODUCT,   NT.CHANNEL_SUB_PRODUCT,   NT.CHANNEL_TRAN_CODE,   NT.ISSUER_TYPE_CODE,   NT.CBS_REF_NO,   NT.CBS_POSTING_FLAG,   NT.PROCESS_TYPE,   NT.PROCESS_GROUP  from   NPSS_TRANSACTIONS NT  inner join npss_trn_process_log ntl on   ntl.uetr = nt.uetr) V $WHERE order by  NPSST_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Home Dashboard Tran MQ CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PENDING_DETAIS_IP","binding_name":"PENDING_DETAIS_IP","binding_value":"","source_name":"PENDING_DETAIS","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"PROCESS_TYPE","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TYPE","binding_name":"TYPE","binding_value":"","source_name":"TYPE","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Card Number","target_column":"cr_acct_identification_mask","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.transaction_list.context_menu = []
		this.transaction_list.views = {}
		this.transaction_list.onChangecomponent = new EventEmitter<any>()
		this.transaction_list.show = true
		this.transaction_list.dynamic_param = {}
	
		// Component level properties - "History Detail" 
		this.history_detail.uictrl_code = "datatable"
		this.history_detail.uicgc_desc = "History Detail"
		this.history_detail.uicgc_code = "uicgc_15"
		this.history_detail.params = {"need_search":"N"}
		this.history_detail.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_15","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678866570423","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"MI_LEVEL_PROCESS_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.history_detail.context_menu = []
		this.history_detail.views = {}
		this.history_detail.onChangecomponent = new EventEmitter<any>()
		this.history_detail.show = true
		this.history_detail.dynamic_param = {}
	
		// Component level properties - "Message Back UI" 
		this.message_back_ui.uictrl_code = "dynamic_ui"
		this.message_back_ui.uicgc_desc = "Message Back UI"
		this.message_back_ui.uicgc_code = "uicgc_19"
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
		this.message_back_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.message_back_ui_back.dynamic_param = {}
		this.message_back_ui_back.role = []
		this.message_back_ui_back.action = ""
	
		// Component level properties - "Message Detail" 
		this.message_detail.uictrl_code = "datatable"
		this.message_detail.uicgc_desc = "Message Detail"
		this.message_detail.uicgc_code = "uicgc_20"
		this.message_detail.params = {"need_pag_datatable":"Y","need_search":"N","advance_dynamic_search":"N","view_all":"N"}
		this.message_detail.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_20","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678866622478","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1668573850306","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1668573852117","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1668573852786","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1668573853731","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1668573854459","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1668573869044","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1668573871186","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573874178","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573876315","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668573884586","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1668573900766","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1668573911947","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1668573917043","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1668573918291","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1668573918796","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1668573919355","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1668573919955","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1668573925605","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1668587107858","date_format":false}],"joins":[]},"eq_text":"select  NPSSTRRD_ID,  MSG_ID,  UETR,  PARENT_NPSSTRRD_REFNO,  NPSSTRRD_REFNO,  PROCESS_CODE,  PROCESS_DETAIL,  EXHF_ID,  PROCESS_NAME,  MESSAGE_DESC,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  STATUS,  PROCESS_STATUS,PROCESS_TYPE,  MESSAGE_DATA,  CREATEDDATEMILISEC,  DT_CODE,  DTT_CODE from  (  select   NPSSTRRD.NPSSTRRD_ID,   NPSSTRRD.MSG_ID,   NPSSTRRD.UETR,   NPSSTRRD.PARENT_NPSSTRRD_REFNO,   NPSSTRRD.NPSSTRRD_REFNO,   NPSSTRRD.MESSAGE_DATA,   NPSSTRRD.PROCESS_CODE,   NPSSTRRD.PROCESS_DETAIL,   NPSSTRRD.EXHF_ID,   NPSSTRRD.PROCESS_NAME,   NPSSTRRD.MESSAGE_DESC,   NPSSTRRD.CHANNEL_ID,   NPSSTRRD.CHANNEL_REFNO,   NPSSTRRD.CHANNEL_USERID,   NPSSTRRD.CHANNEL_PRODUCT,   NPSSTRRD.CHANNEL_SUB_PRODUCT,   NPSSTRRD.CHANNEL_TRAN_CODE,   NPSSTRRD.CREATED_BY,   NPSSTRRD.CREATED_BY_NAME,   NPSSTRRD.CREATED_DATE,   NPSSTRRD.DT_CODE,   NPSSTRRD.DT_DESCRIPTION,   NPSSTRRD.DTT_CODE,   NPSSTRRD.DTT_DESCRIPTION,   NPSSTRRD.MODIFIED_BY,   NPSSTRRD.MODIFIED_BY_NAME,   NPSSTRRD.MODIFIED_DATE,   NPSSTRRD.STATUS,   NPSSTRRD.PROCESS_STATUS,NT.PROCESS_TYPE,   NPSSTRRD.SYSTEM_ID,   NPSSTRRD.SYSTEM_NAME,   NPSSTRRD.TENANT_ID,   NPSSTRRD.APP_ID,   NPSSTRRD.VERSION_NO,   TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC  from   NPSS_TRN_REQ_RESP_DTLS NPSSTRRD  inner join NPSS_TRANSACTIONS NT on   NPSSTRRD.UETR = NT.UETR) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS REQ RES CCD","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"MI_LEVEL_PROCESS_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.message_detail.context_menu = []
		this.message_detail.views = {}
		this.message_detail.onChangecomponent = new EventEmitter<any>()
		this.message_detail.show = true
		this.message_detail.dynamic_param = {}
	
		// Component level properties - "Message Detail Action" 
		this.message_detail_action.uictrl_code = "dynamic_ui"
		this.message_detail_action.uicgc_desc = "Message Detail Action"
		this.message_detail_action.uicgc_code = "uicgc_21"
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
		this.message_detail_ui.uicgc_code = "uicgc_22"
		this.message_detail_ui.params = {}
		this.message_detail_ui.datasource = {}
		this.message_detail_ui.context_menu = []
		this.message_detail_ui.views = {"first":"DTT_1304_1665903906193","is_tab_mode":"N","dtt_1304_1665903906193":{"0":[{"dttv_id":"NPSS Message Data UI","tab_order":0,"tab_name":"","uicgc_description":"Message Detail UI","role_description":"default","dtt_description":"NPSS TRN REQ RESP DTLS"}]}}
		this.message_detail_ui.onChangecomponent = new EventEmitter<any>()
		this.message_detail_ui.show = true
		this.message_detail_ui.dynamic_param = {}
		this.message_detail_ui.f_npss_message_data_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.message_detail_ui.form_name = "f_npss_message_data_ui"
	
		// Component level properties - "Request UI" 
		this.request_ui.uictrl_code = "dynamic_ui"
		this.request_ui.uicgc_desc = "Request UI"
		this.request_ui.uicgc_code = "uicgc_23"
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
		this.response_ui.uicgc_code = "uicgc_24"
		this.response_ui.params = {}
		this.response_ui.datasource = {}
		this.response_ui.context_menu = []
		this.response_ui.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS Target Response UI","tab_order":0,"tab_name":"","uicgc_description":"Response UI","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.response_ui.onChangecomponent = new EventEmitter<any>()
		this.response_ui.show = true
		this.response_ui.dynamic_param = {}
		this.response_ui.f_npss_target_response_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.response_ui.form_name = "f_npss_target_response_ui"
	
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
	
		// Component level properties - "View Dr Cr Details" 
		this.view_dr_cr_details.uictrl_code = "datatable"
		this.view_dr_cr_details.uicgc_desc = "View Dr Cr Details"
		this.view_dr_cr_details.uicgc_code = "uicgc_26"
		this.view_dr_cr_details.params = {"need_search":"N","need_vertical":"Y"}
		this.view_dr_cr_details.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_26","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678866701508","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Decr HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1673092056492","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092056684","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092056908","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1673092057076","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092057228","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092057420","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092057588","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1673092057748","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1673092057924","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1673092127114","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1673092127282","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1673092127458","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1673092127626","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1673092127778","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092127946","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092128266","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092128473","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1673092236606","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092236782","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092236942","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092237110","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1673092237270","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1673092237447","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1673092237623","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1673092290325","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1673092290485","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673092290653","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1673092290821","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1673092290981","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1673092291149","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1673092291341","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1673092291501","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1673092354435","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1673092354603","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1673092354779","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1673092354947","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1673092355115","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1673092355283","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1673092355467","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092402433","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1673092402801","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1673092403129","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(DBTR_ACCT_NO,$PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  fn_pcidss_decrypt(CR_ACCT_IDENTIFICATION,$PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  TRAN_REF_ID,  PROCESSING_SYSTEM from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   A.CR_ACCT_IDENTIFICATION,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Decr Vertical Dr Cr CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Created Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Acceptance Date Time","target_column":"ACCP_DATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Sort Code","target_column":"CR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Identification","target_column":"CR_ACCT_IDENTIFICATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Sort Code","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Identification","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Private Identification","target_column":"DBTR_PRVT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Other Issuer","target_column":"DBTR_OTHER_ISSUER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.view_dr_cr_details.context_menu = []
		this.view_dr_cr_details.views = {}
		this.view_dr_cr_details.onChangecomponent = new EventEmitter<any>()
		this.view_dr_cr_details.show = true
		this.view_dr_cr_details.dynamic_param = {"column_header_name":"Field","value_header_name":"Value"}
	
		// Component level properties - "View Payment Details" 
		this.view_payment_details.uictrl_code = "datatable"
		this.view_payment_details.uicgc_desc = "View Payment Details"
		this.view_payment_details.uicgc_code = "uicgc_27"
		this.view_payment_details.params = {"need_search":"N","need_vertical":"Y"}
		this.view_payment_details.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_27","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678866785078","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Decr HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1673092056492","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092056684","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092056908","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1673092057076","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092057228","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092057420","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092057588","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1673092057748","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1673092057924","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1673092127114","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1673092127282","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1673092127458","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1673092127626","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1673092127778","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092127946","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092128266","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092128473","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1673092236606","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092236782","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092236942","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092237110","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1673092237270","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1673092237447","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1673092237623","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1673092290325","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1673092290485","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673092290653","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1673092290821","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1673092290981","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1673092291149","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1673092291341","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1673092291501","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1673092354435","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1673092354603","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1673092354779","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1673092354947","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1673092355115","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1673092355283","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1673092355467","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092402433","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1673092402801","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1673092403129","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(DBTR_ACCT_NO,$PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  fn_pcidss_decrypt(CR_ACCT_IDENTIFICATION,$PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  TRAN_REF_ID,  PROCESSING_SYSTEM from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   A.CR_ACCT_IDENTIFICATION,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Decr Vertical Payment CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Id","target_column":"NPSST_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Txn Value Date","target_column":"VALUE_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd-MM-yyyy HH:mm:ss\"","date_format":true},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Batch Id","target_column":"EXHF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E reference id","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Category Purpose","target_column":"category_purpose","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Issuer Type Code","target_column":"issuer_type_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remittance Info","target_column":"REMITTANCE_INFO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.view_payment_details.context_menu = []
		this.view_payment_details.views = {}
		this.view_payment_details.onChangecomponent = new EventEmitter<any>()
		this.view_payment_details.show = true
		this.view_payment_details.dynamic_param = {"column_header_name":"Field","value_header_name":"Value"}
	
		// Component level properties - "Back UI" 
		this.back_ui.uictrl_code = "dynamic_ui"
		this.back_ui.uicgc_desc = "Back UI"
		this.back_ui.uicgc_code = "uicgc_28"
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
	
		// Component level properties - "Process Log UI" 
		this.process_log_ui.uictrl_code = "dynamic_ui"
		this.process_log_ui.uicgc_desc = "Process Log UI"
		this.process_log_ui.uicgc_code = "uicgc_29"
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
		
		// "View Req and Res" Button of "Process Log UI" component
		this.process_log_ui_view_req_and_res.label_name = "View Req and Res"
		this.process_log_ui_view_req_and_res.show = true
		this.process_log_ui_view_req_and_res.disabled = true
		this.process_log_ui_view_req_and_res.params = {"icon_only":false,"uicgcc_style":"fa fa-expand"}
		this.process_log_ui_view_req_and_res.dynamic_param = {}
		this.process_log_ui_view_req_and_res.role = []
		this.process_log_ui_view_req_and_res.action = ""
	
		// Component level properties - "Outward" 
		this.outward.uictrl_code = "chart"
		this.outward.uicgc_desc = "Outward"
		this.outward.uicgc_code = "uicgc_30"
		this.outward.params = {}
		this.outward.datasource = {"e_1678962046937":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_30","event_code":"E_1678962046937","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679569095202","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Home Dashboard OP CHART MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"Pending_Detais","alias_name":"","mq_id":"MQ_1678960123198","date_format":false},{"column_name":"p_count","alias_name":"","mq_id":"MQ_1678960123388","date_format":false}],"joins":[]},"eq_text":"select  Pending_Detais,  count (Pending_Detais) as p_count,  Process_Type,type from  (  select   Process_Name,   type,   Pending_Detais,   Process_Type,   tenant_id,   created_date,   createddate,   npsst_id,   department_code  from   (   select    distinct (npl.process_name),    case     when npl.process_name::text in ('Place Pacs008') then 'pacs.008'::text     when npl.process_name::text in ('Place Pacs.007') then 'pacs.007'::text     when npl.process_name::text = 'Receive Pacs004'::text then 'pacs.004'::text    end as type,    case     when ((npl.process_name = 'Place Pacs008'     and nppst.process_status = 'RCTExceptionFailure'     and nppst.status in ('OP_AC_REV_POSTING_FAILURE', 'OP_AC_RET_POSTING_FAILURE', 'OP_P2P_REV_POSTING_FAILURE' , 'OP_P2B_FUND_UNFR_FAILURE', 'OP_P2B_REV_POSTING_FAILURE')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)     or (npl.process_name = 'Receive Pacs004'     and nppst.process_status = 'RCTExceptionFailure'     and nppst.status in ('OR_P2P_POSTING_FAILURE', 'OR_P2B_POSTING_FAILURE')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)     or (npl.process_name = 'Place Pacs.007'     and nppst.status in ('OP_REVERSAL_REQ_REPAIR')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)) then 'Pending (Maker)'     when ((npl.process_name = 'Place Pacs008'     and nppst.process_status = 'RCTExceptionFailure'     and nppst.status in ('OP_AC_REV_POSTING_RETRY', 'OP_AC_RET_POSTING_RETRY', 'OP_P2P_REV_POSTING_RETRY', 'OP_P2B_FUND_UNFR_RETRY', 'OP_P2B_REV_POSTING_RETRY')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)     or (npl.process_name = 'Receive Pacs004'     and nppst.process_status = 'RCTExceptionFailure'     and nppst.status in ('OR_P2P_POSTING_RETRY', 'OR_P2B_POSTING_RETRY')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)     or (npl.process_name = 'Place Pacs.007'     and nppst.status in ('OP_REVERSAL_REQ_INITIATED')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)) then 'Pending (Checker)'     when ((npl.process_name = 'Place Pacs008'     and nppst.process_status = 'RCTExceptionFailure'     and nppst.status in ('OP_AC_REV_POSTING_FAILURE', 'OP_AC_RET_POSTING_FAILURE', 'OP_P2P_REV_POSTING_FAILURE' , 'OP_P2B_FUND_UNFR_FAILURE', 'OP_P2B_REV_POSTING_FAILURE', 'OP_AC_REV_POSTING_RETRY', 'OP_AC_RET_POSTING_RETRY', 'OP_P2P_REV_POSTING_RETRY', 'OP_P2B_FUND_UNFR_RETRY', 'OP_P2B_REV_POSTING_RETRY')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)     or (npl.process_name = 'Receive Pacs004'     and nppst.process_status = 'RCTExceptionFailure'     and nppst.status in ('OR_P2P_POSTING_FAILURE', 'OR_P2B_POSTING_FAILURE', 'OR_P2P_POSTING_RETRY', 'OR_P2B_POSTING_RETRY')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)     or (npl.process_name = 'Place Pacs.007'     and nppst.status in ('OP_REVERSAL_REQ_REPAIR', 'OP_REVERSAL_REQ_INITIATED')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)) then 'Pending (T-1)'     else 'Others'    end as Pending_Detais,    nppst.process_type,    nppst.created_date,    nppst.tenant_id,    nppst.npsst_id,    nppst.department_code,    to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) as createddate   from    npss_transactions nppst   join npss_trn_process_log npl on    npl.uetr = nppst.uetr   where    nppst.process_type = 'OP'    and (npl.process_name in ('Place Pacs008', 'Place Pacs.007', 'Receive Pacs004')) ) as Res  where   Res.Pending_Detais <> 'Others' ) a $WHERE group by  Pending_Detais,type,  Process_Type"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Home Dashboard OP Chart CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Type","binding_name":"Type","binding_value":"","source_name":"Type","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Pending_Detais","target_column":"Pending_Detais","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"p_count","target_column":"p_count","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.outward.context_menu = []
		this.outward.views = {}
		this.outward.onChangecomponent = new EventEmitter<any>()
		this.outward.show = true
		this.outward.dynamic_param = {}
	
		// Component level properties - "Nav UI" 
		this.nav_ui.uictrl_code = "dynamic_ui"
		this.nav_ui.uicgc_desc = "Nav UI"
		this.nav_ui.uicgc_code = "uicgc_34"
		this.nav_ui.params = {}
		this.nav_ui.datasource = {}
		this.nav_ui.context_menu = []
		this.nav_ui.views = {}
		this.nav_ui.onChangecomponent = new EventEmitter<any>()
		this.nav_ui.show = true
		this.nav_ui.dynamic_param = {}
		this.nav_ui.f_nav_ui = {"show":true}
		this.nav_ui.current_view = "f_nav_ui"
		
		// "View IP Queue" Button of "Nav UI" component
		this.nav_ui_view_ip_queue.label_name = "View IP Queue"
		this.nav_ui_view_ip_queue.show = true
		this.nav_ui_view_ip_queue.disabled = false
		this.nav_ui_view_ip_queue.params = {"icon_only":false,"uicgcc_style":"fa fa-street-view"}
		this.nav_ui_view_ip_queue.dynamic_param = {}
		this.nav_ui_view_ip_queue.role = []
		this.nav_ui_view_ip_queue.action = ""
		
		// "TRG for Hide Tran List" Button of "Nav UI" component
		this.nav_ui_trg_for_hide_tran_list.label_name = "TRG for Hide Tran List"
		this.nav_ui_trg_for_hide_tran_list.show = true
		this.nav_ui_trg_for_hide_tran_list.disabled = false
		this.nav_ui_trg_for_hide_tran_list.params = {"icon_only":false,"uicgcc_style":""}
		this.nav_ui_trg_for_hide_tran_list.dynamic_param = {}
		this.nav_ui_trg_for_hide_tran_list.role = []
		this.nav_ui_trg_for_hide_tran_list.action = ""
	
		// Component level properties - "Home Dashboard Title" 
		this.home_dashboard_title.uictrl_code = "custom_widget"
		this.home_dashboard_title.uicgc_desc = "Home Dashboard Title"
		this.home_dashboard_title.uicgc_code = "uicgc_37"
		this.home_dashboard_title.params = {}
		this.home_dashboard_title.datasource = {}
		this.home_dashboard_title.context_menu = []
		this.home_dashboard_title.views = {}
		this.home_dashboard_title.onChangecomponent = new EventEmitter<any>()
		this.home_dashboard_title.show = true
		this.home_dashboard_title.dynamic_param = {}
	
		// Component level properties - "Inward" 
		this.inward.uictrl_code = "chart"
		this.inward.uicgc_desc = "Inward"
		this.inward.uicgc_code = "uicgc_38"
		this.inward.params = {}
		this.inward.datasource = {"e_1679641884819":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_38","event_code":"E_1679641884819","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679642236090","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Home Dashboard IP CHART MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"Pending_Detais","alias_name":"","mq_id":"MQ_1679029833085","date_format":false},{"column_name":"p_count","alias_name":"","mq_id":"MQ_1679029833512","date_format":false}],"joins":[]},"eq_text":"select  Pending_Detais,  count (Pending_Detais) as p_count,  Process_Type,type from  (  select   Process_Name,   type,   Pending_Detais,   Process_Type,   tenant_id,   created_date,   npsst_id ,   department_code  from   (   select    distinct (npl.process_name),    case     when npl.process_name::text in ('Receive Pacs008') then 'pacs.008'::text     when npl.process_name::text in ('Receive Pacs.007') then 'pacs.007'::text     when npl.process_name::text = 'Place Pacs004'::text then 'pacs.004'::text    end as type,    case     when (npl.process_name = 'Receive Pacs008'     and nppst.process_status = 'RCTExceptionFailure'     and nppst.status in ('IP_RCT_RR_POSTING_FAILURE', 'IP_RCT_PC_T24_POSTING_FAILURE', 'IP_RCT_CC_T24_POSTING_FAILURE')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date) then 'Pending (Maker)'     when (npl.process_name = 'Place Pacs004'     and nppst.process_status = 'RCTExceptionFailure'     and nppst.status in ('IP_RCT_RETURN_POSTING_FAILURE')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date) then 'Pending (Maker)'     when (npl.process_name = 'Receive Pacs.007'     and nppst.status in ('IP_RCT_REVERSAL_REQ_RECEIVED', 'IP_RCT_REVERSAL_VLD_FAILED')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date) then 'Pending (Maker)'     when ((npl.process_name = 'Receive Pacs008'     and nppst.process_status = 'RCTExceptionFailure'     and nppst.status in ('IP_RCT_RR_POSTING_RETRY', 'IP_RCT_PC_T24_POSTING_RETRY', 'IP_RCT_CC_T24_POSTING_RETRY', 'IP_RCT_POSTING_SUSPICIOUS', 'IP_RCT_PC_POSTING_SUSPICIOUS')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)     or (npl.process_name = 'Place Pacs004'     and nppst.process_status = 'RCTExceptionFailure'     and nppst.status in ('IP_RCT_RETURN_POSTING_RETRY', 'IP_RCT_RR_POSTING_SUSPICIOUS')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)     or (npl.process_name = 'Receive Pacs.007'     and nppst.status in ('IP_RCT_REV_REQ_REJECTED', 'IP_RCT_RR_RETURN_READY')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)) then 'Pending (Checker)'     when ((npl.process_name = 'Receive Pacs008'     and nppst.process_status = 'RCTExceptionFailure'     and nppst.status in ('IP_RCT_RR_POSTING_FAILURE', 'IP_RCT_PC_T24_POSTING_FAILURE', 'IP_RCT_CC_T24_POSTING_FAILURE' , 'IP_RCT_RR_POSTING_RETRY', 'IP_RCT_PC_T24_POSTING_RETRY', 'IP_RCT_CC_T24_POSTING_RETRY', 'IP_RCT_POSTING_SUSPICIOUS', 'IP_RCT_PC_POSTING_SUSPICIOUS')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)     or (npl.process_name = 'Place Pacs004'     and nppst.process_status = 'RCTExceptionFailure'     and nppst.status in ('IP_RCT_RETURN_POSTING_FAILURE', 'IP_RCT_RETURN_POSTING_RETRY', 'IP_RCT_RR_POSTING_SUSPICIOUS')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)     or (npl.process_name = 'Receive Pacs.007'     and nppst.status in ('IP_RCT_REVERSAL_REQ_RECEIVED', 'IP_RCT_REVERSAL_VLD_FAILED', 'IP_RCT_REV_REQ_REJECTED', 'IP_RCT_RR_RETURN_READY')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)) then 'Pending (T-1)'     else 'Others'    end as Pending_Detais,    nppst.process_type,    nppst.created_date,    nppst.tenant_id,    nppst.npsst_id ,    nppst.department_code   from    npss_transactions nppst   join npss_trn_process_log npl on    npl.uetr = nppst.uetr   where    nppst.process_type = 'IP'    and (npl.process_name in ('Receive Pacs008', 'Receive Pacs.007', 'Place Pacs004')) ) as Res  where   Res.Pending_Detais <> 'Others') a $WHERE group by  Pending_Detais,type,  Process_Type"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Home Dashboard iP Chart CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Type","binding_name":"Type","binding_value":"","source_name":"Type","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Pending_Detais","target_column":"Pending_Detais","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"p_count","target_column":"p_count","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.inward.context_menu = []
		this.inward.views = {}
		this.inward.onChangecomponent = new EventEmitter<any>()
		this.inward.show = true
		this.inward.dynamic_param = {}
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__cf_from_pag_load()
		this.page_load__he_from_pg_to_view_details()
		this.page_load__he_for_vml()
		this.page_load__he_for_plog()
		this.page_load__he_for_trg_hide_tran_lkist()
		this.page_load__cc_for_widget()
		this.page_load__brfq_for_ip_list_from_pl()
		this.page_load__brfq_for_op_list_from_pl()
		this.page_load__brfq_for_ip_queue_from_pl()
	}

	//Handler for INTERNAL event of "cf from pag load"
	cf_from_pag_load__internal(parent_event_result){
		this.cf_from_pag_load__e_1679038883191(parent_event_result)
	}

	//Handler for INTERNAL event of "he for vml"
	he_for_vml__internal(){
		this.he_for_vml__se_ip_chart_to_tran_list()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__ve_from_search()
		this.search_search__de_for_vpl()
	}

	//Handler for INTERNAL event of "ve from search"
	ve_from_search__internal(parent_event_result){
		this.ve_from_search__ssp_from_search_ve(parent_event_result)
		this.ve_from_search__cp_from_search_ve(parent_event_result)
	}

	//Handler for INTERNAL event of "ssp from search ve"
	ssp_from_search_ve__internal(parent_event_result){
		this.ssp_from_search_ve__bfrq_to_tl_from_sss(parent_event_result)
		this.ssp_from_search_ve__brfq_for_ip_lis(parent_event_result)
		this.ssp_from_search_ve__brfq_for_pstatusq(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "outward list"
	outward_list__selection_changed(){
		this.outward_list__svm_by_click_on_tl()
		this.outward_list__brfq_for_op_chart()
		this.outward_list__sp_from_outward_list()
		this.outward_list__he_from_op_list_to_pending_chart()
		this.outward_list__se_from_pp_list_ti_pending_chart()
		this.outward_list__he_from_op_main_list_to_io_p_chart()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__cui_from_clear_btn_click()
	}

	//Handler for SELECTION_CHANGED event of "inward list"
	inward_list__selection_changed(){
		this.inward_list__svm_for_ip_list()
		this.inward_list__sp_fro_ip_list()
		this.inward_list__he_from_ip_list_to_pending_chart()
		this.inward_list__se_from_ip_main_list_to_ip_chart()
		this.inward_list__brfq_from_ip_main_list_to_ip_chart()
		this.inward_list__he_from_ip_main_list_to_op_chart()
	}

	//Handler for SELECTION_CHANGED event of "inward queue"
	inward_queue__selection_changed(){
		this.inward_queue__svm_for_pstatus()
		this.inward_queue__se_from_ip_queue_to_tran()
		this.inward_queue__brfq_from_inward_queue_chart_to_tran_list()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation view tran"
	navigation_view_tran__action_button_click(){
		this.navigation_view_tran__sp_for_view_detail_tran()
		this.navigation_view_tran__brfq_for_vertical_tran_detail()
		this.navigation_view_tran__brfq_vprdl()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation view process log"
	navigation_view_process_log__action_button_click(){
		this.navigation_view_process_log__sp_for_vlh()
		this.navigation_view_process_log__brfq_for_hd()
	}

	//Handler for INTERNAL event of "brfq for hd"
	brfq_for_hd__internal(parent_event_result){
		this.brfq_for_hd__sfr_for_hd(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__selection_changed(){
		this.transaction_list__svm_for_tran_list()
		this.transaction_list__ee_for_view_tran_btn()
		this.transaction_list__ee_for_vml()
		this.transaction_list__ee_for_plog()
	}

	//Handler for INTERNAL event of "svm for tran list"
	svm_for_tran_list__internal(){
		this.svm_for_tran_list__cc_for_sh_to_tran_list()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation view message log"
	navigation_view_message_log__action_button_click(){
		this.navigation_view_message_log__sp_for_vmd()
		this.navigation_view_message_log__brfq_for_vmd()
	}

	//Handler for INTERNAL event of "brfq for vmd"
	brfq_for_vmd__internal(parent_event_result){
		this.brfq_for_vmd__sfr__for_vmd(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view req and res"
	process_log_ui_view_req_and_res__action_button_click(){
		this.process_log_ui_view_req_and_res__bt_for_req_ui()
		this.process_log_ui_view_req_and_res__bt_for_res_ui()
		this.process_log_ui_view_req_and_res__sp_for_vreq_and_vres()
	}

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__selection_changed(){
		this.history_detail__ee_for_vrar()
		this.history_detail__ssr_for_req_ui()
		this.history_detail__ssr_for_res_ui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "message detail action view message"
	message_detail_action_view_message__action_button_click(){
		this.message_detail_action_view_message__sp_for_view_message_data()
		this.message_detail_action_view_message__bt_for_md_ui()
	}

	//Handler for SELECTION_CHANGED event of "message detail"
	message_detail__selection_changed(){
		this.message_detail__ssr_for_md_ui()
		this.message_detail__ee_for_vm()
	}

	//Handler for ACTION_BUTTON_CLICK event of "back ui back"
	back_ui_back__action_button_click(){
		this.back_ui_back__sp_for_back_from_main()
		this.back_ui_back__tbc_for_back_back_to_hist_list_trg()
	}

	//Handler for ACTION_BUTTON_CLICK event of "message back ui back"
	message_back_ui_back__action_button_click(){
		this.message_back_ui_back__sp_for_mb_back()
		this.message_back_ui_back__tbc_from_message__back_to_hist_list_trg()
	}

	//Handler for ACTION_BUTTON_CLICK event of "message detail action back"
	message_detail_action_back__action_button_click(){
		this.message_detail_action_back__sp_for_mda_back()
		this.message_detail_action_back__tbc_form_message_action_detaul_back_to_hist_list_trg()
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui back"
	process_log_ui_back__action_button_click(){
		this.process_log_ui_back__sp_for_pl_back()
		this.process_log_ui_back__tbc_for_process_log_back_to_hist_list_trg()
	}

	//Handler for ACTION_BUTTON_CLICK event of "single back ui back"
	single_back_ui_back__action_button_click(){
		this.single_back_ui_back__sp_for_sb_back()
		this.single_back_ui_back__tbc_for_m_single_back_to_hist_list_trg()
	}

	//Handler for ACTION_BUTTON_CLICK event of "nav ui view ip queue"
	nav_ui_view_ip_queue__action_button_click(){
		this.nav_ui_view_ip_queue__sp_for_viq()
		this.nav_ui_view_ip_queue__he_to_view_ip_queue_button_to_pending_chart()
		this.nav_ui_view_ip_queue__he_to_view_ip_queue_button_to_ip_chartd()
		this.nav_ui_view_ip_queue__se_to_view_ip_queue_button_to_ip_queue()
	}

	//Handler for SELECTION_CHANGED event of "outward"
	outward__selection_changed(){
		this.outward__svm_from_pending_chart()
		this.outward__se_from_chart_to_tran_list()
		this.outward__brfq_op_chart_to_tran_list()
	}

	//Handler for ACTION_BUTTON_CLICK event of "nav ui trg for hide tran list"
	nav_ui_trg_for_hide_tran_list__action_button_click(){
		this.nav_ui_trg_for_hide_tran_list__he_for_trn_list()
		this.nav_ui_trg_for_hide_tran_list__he_for_view_message_log_from_trg()
		this.nav_ui_trg_for_hide_tran_list__he_for_view_process_log_from_trg()
		this.nav_ui_trg_for_hide_tran_list__he_for_view_tran_from_trg()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation back"
	navigation_back__action_button_click(){
		this.navigation_back__tbc_for_back_to_hist_list_trg()
		this.navigation_back__sp_for_df_profile_on_back()
	}

	//Handler for SELECTION_CHANGED event of "inward"
	inward__selection_changed(){
		this.inward__brfq_ip_chart_to_tran_list()
		this.inward__se_for_tran_list_from_inward()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__cf_from_pag_load() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1598521589606"
		let event_params={"caller_name":"page_load__cf_from_pag_load","event_desc":"CF from pag load","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""}}
		let handler_code="create_form"
		let internals="cf_from_pag_load__e_1679038883191,"
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
	page_load__he_from_pg_to_view_details() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_view_tran"
		let parent_source_id=""
		let event_code="e_1678854744275"
		let event_params={"caller_name":"page_load__he_from_pg_to_view_details","event_desc":"HE from PG to View Details","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_vml() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_view_message_log"
		let parent_source_id=""
		let event_code="e_1678855503543"
		let event_params={"caller_name":"page_load__he_for_vml","event_desc":"HE for VML","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
		let handler_code="hide_element"
		let internals="he_for_vml__se_ip_chart_to_tran_list,"
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
	page_load__he_for_plog() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_view_process_log"
		let parent_source_id=""
		let event_code="e_1679031104766"
		let event_params={"caller_name":"page_load__he_for_plog","event_desc":"HE for PLOG","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_trg_hide_tran_lkist() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="nav_ui_trg_for_hide_tran_list"
		let parent_source_id=""
		let event_code="e_1679032130335"
		let event_params={"caller_name":"page_load__he_for_trg_hide_tran_lkist","event_desc":"HE for TRG Hide Tran Lkist","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__cc_for_widget() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1679058704562"
		let event_params={"caller_name":"page_load__cc_for_widget","event_desc":"CC for Widget","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_dashboard_titleService.fn_npss_cs_dashboard_title(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__brfq_for_ip_list_from_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="inward_list"
		let parent_source_id=""
		let event_code="e_1679645211292"
		let event_params={"caller_name":"page_load__brfq_for_ip_list_from_pl","event_desc":"BRFQ for IP list from PL","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_12","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678780879597","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS IP Home Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"type","alias_name":"","mq_id":"MQ_1677933613596","date_format":false},{"column_name":"total","alias_name":"","mq_id":"MQ_1678169755516","date_format":false},{"column_name":"pending_maker","alias_name":"","mq_id":"MQ_1678169755682","date_format":false},{"column_name":"pending_checker","alias_name":"","mq_id":"MQ_1678169755850","date_format":false},{"column_name":"pending_screening","alias_name":"","mq_id":"MQ_1678169756042","date_format":false},{"column_name":"successfullyposted","alias_name":"","mq_id":"MQ_1678169756202","date_format":false},{"column_name":"pending_returns_maker","alias_name":"","mq_id":"MQ_1678169780171","date_format":false},{"column_name":"pending_returns_checker","alias_name":"","mq_id":"MQ_1678169780331","date_format":false},{"column_name":"returned","alias_name":"","mq_id":"MQ_1678169780499","date_format":false},{"column_name":"pending_t_1","alias_name":"","mq_id":"MQ_1678169862467","date_format":false},{"column_name":"created_date","alias_name":"","mq_id":"MQ_1678170105508","date_format":true}],"joins":[]},"eq_text":"select A.type, case when A.type='pacs.008' and b.sno is null then 1 when A.type='pacs.004' and b.sno is null then 2  when A.type='pacs.007' and b.sno is null then 3 else b.sno end sno, COALESCE(b.total,0) as total, COALESCE(b.Pending_Screening,0) as Pending_Screening, COALESCE(b.PENDING_MAKER,0) as PENDING_MAKER, COALESCE(b.PENDING_CHECKER,0) as PENDING_CHECKER, COALESCE(b.successfullyposted,0) as successfullyposted, COALESCE(b.pending_returns_maker,0) as pending_returns_maker, COALESCE(b.pending_returns_checker,0) as pending_returns_checker, COALESCE(b.returned,0) as returned, COALESCE(b.Pending_T_1,0) as Pending_T_1, to_char(CURRENT_DATE::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date from (select  'pacs.008' as TYPE union  select  'pacs.004' as TYPE union  select  'pacs.007' as type) A  left join (select  sno,  type,  sum(total) as TOTAL,  sum(pending_maker) as pending_maker,  sum(pending_checker) as pending_checker,  sum(pending_screening) as pending_screening,  sum(successfullyposted) as successfullyposted,  sum(pending_returns_maker) as pending_returns_maker,  sum(pending_returns_checker) as pending_returns_checker,  sum(returned) as returned,  sum(pending_t_1) as pending_t_1,  created_date from  (  select   sno,   type,   TOTAL,   pending_maker,   pending_checker,   pending_screening,   successfullyposted,   pending_returns_maker,   pending_returns_checker,   returned,   pending_t_1,   created_date,   DEPARTMENT_CODE  from   vw_dashboard_inward_data) T $WHERE group by  SNO,  type,  CREATED_DATE) B on B.type = A.type  order by sno"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS IP Home Dashboard MQ CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Type","target_column":"type","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Total","target_column":"total","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (Maker)","target_column":"pending_maker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (Checker)","target_column":"pending_checker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending Screening","target_column":"pending_screening","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Successfully Posted","target_column":"successfullyposted","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending Returns (Maker)","target_column":"pending_returns_maker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending Returns (Checker)","target_column":"pending_returns_checker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Returned","target_column":"returned","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (T-1)","target_column":"pending_t_1","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__brfq_for_op_list_from_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="outward_list"
		let parent_source_id=""
		let event_code="e_1679645230131"
		let event_params={"caller_name":"page_load__brfq_for_op_list_from_pl","event_desc":"BRFQ for OP list from PL","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678780847259","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Home Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"Type","alias_name":"","mq_id":"MQ_1677928433068","date_format":false},{"column_name":"Total","alias_name":"","mq_id":"MQ_1677928433241","date_format":false},{"column_name":"IBMB","alias_name":"","mq_id":"MQ_1677928433417","date_format":false},{"column_name":"RMB","alias_name":"","mq_id":"MQ_1677928433585","date_format":false},{"column_name":"RIB","alias_name":"","mq_id":"MQ_1677928433769","date_format":false},{"column_name":"CMB","alias_name":"","mq_id":"MQ_1677928433945","date_format":false},{"column_name":"CIB","alias_name":"","mq_id":"MQ_1677928434130","date_format":false},{"column_name":"CMS","alias_name":"","mq_id":"MQ_1677928467185","date_format":false},{"column_name":"Manual","alias_name":"","mq_id":"MQ_1677928467361","date_format":false},{"column_name":"Pending_Screening","alias_name":"","mq_id":"MQ_1677928467521","date_format":false},{"column_name":"Pending_Maker","alias_name":"","mq_id":"MQ_1677928484313","date_format":false},{"column_name":"Pending_Checker","alias_name":"","mq_id":"MQ_1677928484473","date_format":false},{"column_name":"Send_to_CB","alias_name":"","mq_id":"MQ_1677928484633","date_format":false},{"column_name":"CBACK","alias_name":"","mq_id":"MQ_1677928498570","date_format":false},{"column_name":"CBNACK","alias_name":"","mq_id":"MQ_1677928498753","date_format":false},{"column_name":"Pending_T_1","alias_name":"","mq_id":"MQ_1677928498969","date_format":false},{"column_name":"Created_Date","alias_name":"","mq_id":"MQ_1677928517681","date_format":true}],"joins":[]},"eq_text":"select A.type, case when A.type='pacs.008' and b.sno is null then 1 when A.type='pacs.004' and b.sno is null then 2  when A.type='pacs.007' and b.sno is null then 3 else b.sno end sno, COALESCE(b.total,0) as total, COALESCE(b.IBMB,0) as IBMB, COALESCE(b.RIB,0) as RIB, COALESCE(b.RMB,0) as RMB, COALESCE(b.CIB,0) as CIB, COALESCE(b.CMS,0) as CMS, COALESCE(b.CMB,0) as CMB, COALESCE(b.Manual,0) as Manual, COALESCE(b.Pending_Screening,0) as Pending_Screening, COALESCE(b.PENDING_MAKER,0) as PENDING_MAKER, COALESCE(b.PENDING_CHECKER,0) as PENDING_CHECKER, COALESCE(b.SEND_TO_CB,0) as SEND_TO_CB, COALESCE(b.CBACK,0) as CBACK, COALESCE(b.CBNACK,0) as CBNACK, COALESCE(b.Pending_T_1,0) as Pending_T_1, to_char(CURRENT_DATE::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date from (select  'pacs.008' as TYPE union  select  'pacs.004' as TYPE union  select  'pacs.007' as type) A  left join (select  SNO,  type,  SUM(TOTAL) as Total,  SUM(IBMB) as IBMB,  SUM(RIB) as RIB,  SUM(RMB) as RMB ,  SUM(CIB) as CIB,  SUM(CMS) as CMS,  SUM(CMB) as CMB,  SUM(MANUAL) as Manual,  SUM(PENDING_SCREENING) as Pending_Screening,  SUM(PENDING_MAKER) as Pending_Maker,  SUM(PENDING_CHECKER) as Pending_Checker,  SUM(SEND_TO_CB) as Send_to_CB,  SUM(CBACK) as CBACK,  SUM(CBNACK) as CBNACK,  CREATED_DATE,  SUM(PENDING_T_1) as Pending_T_1 from  (  select  SNO,  type,  Total,  IBMB,  RIB,  RMB ,  CIB,  CMS,  CMB,  MANUAL,  PENDING_SCREENING,  PENDING_MAKER,  PENDING_CHECKER,  SEND_TO_CB,  CBACK,  CBNACK,  CREATED_DATE,  PENDING_T_1,  DEPARTMENT_CODE  from   vw_dashboard_outward_data) as t $WHERE group by  SNO,  type,  CREATED_DATE) B on B.type = A.type  order by sno"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Home Dashboard MQ CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Type","target_column":"Type","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Total","target_column":"Total","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBMB","target_column":"IBMB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"RMB","target_column":"RMB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"RIB","target_column":"RIB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CMB","target_column":"CMB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CIB","target_column":"CIB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CMS","target_column":"CMS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Manual","target_column":"Manual","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending Screening","target_column":"Pending_Screening","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (Maker)","target_column":"Pending_Maker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (Checker)","target_column":"Pending_Checker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Send to CB","target_column":"Send_to_CB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CB ACK","target_column":"CBACK","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CB NAK","target_column":"CBNACK","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (T-1)","target_column":"Pending_T_1","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__brfq_for_ip_queue_from_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="inward_queue"
		let parent_source_id=""
		let event_code="e_1679651409843"
		let event_params={"caller_name":"page_load__brfq_for_ip_queue_from_pl","event_desc":"BRFQ for IP Queue from PL","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_13","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678787742404","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Queue Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS_COUNT","alias_name":"","mq_id":"MQ_1672833641472","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1672833641606","date_format":false}],"joins":[]},"eq_text":"select  COUNT(PROCESS_STATUS) as PROCESS_STATUS_COUNT,  PROCESS_TYPE,  PROCESS_STATUS,  createddate from  (  select   T.CREATED_DATE,   T.PROCESS_TYPE ,   T.TENANT_ID,   case    when T.channel_id is null then UPPER('UNKOWN')    else t.channel_id   end as channel_id,   case    when T.PROCESSING_SYSTEM is null then upper('unknown')    else T.PROCESSING_SYSTEM   end as PROCESSING_SYSTEM,   T.DEPARTMENT_CODE,   case    when T.PROCESS_GROUP is null then UPPER('UNKOWN')    else t.PROCESS_GROUP   end as PROCESS_GROUP,   case    when T.EXHF_ID is null then UPPER('RCT')    else UPPER('BCT')   end as PAYMENT_TYPE,   case    when T.PROCESS_STATUS is null then UPPER('UNKNOWN')    else T.PROCESS_STATUS   end as PROCESS_STATUS,   to_date(to_char(t.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) as createddate  from   NPSS_TRANSACTIONS T where to_date(to_char(T.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date) V $WHERE group by  PROCESS_STATUS,  PROCESS_TYPE,  createddate"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Queue Dashboard CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENENT_ID","binding_name":"TENENT_ID","binding_value":"","source_name":"TENENT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"PROCESS_STATUS_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cf from pag load"
	cf_from_pag_load__e_1679038883191(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cf_from_pag_load"
		let destn_id=""
		let parent_source_id="page_load"
		let event_code="e_1679038883191"
		let event_params={"caller_name":"cf_from_pag_load__e_1679038883191","event_desc":"E_1679038883191","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for INTERNAL event of "he for vml"
	he_for_vml__se_ip_chart_to_tran_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="he_for_vml"
		let destn_id="transaction_list"
		let parent_source_id="page_load"
		let event_code="e_1679651263639"
		let event_params={"caller_name":"he_for_vml__se_ip_chart_to_tran_list","event_desc":"SE IP chart to Tran list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__ve_from_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1678167968788"
		let event_params={"caller_name":"search_search__ve_from_search","event_desc":"VE from Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="ve_from_search__ssp_from_search_ve,ve_from_search__cp_from_search_ve,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__de_for_vpl() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="navigation_view_process_log"
		let parent_source_id=""
		let event_code="e_1678855012838"
		let event_params={"caller_name":"search_search__de_for_vpl","event_desc":"DE for VPL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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

	//Handler for INTERNAL event of "ve from search"
	ve_from_search__ssp_from_search_ve(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ve_from_search"
		let destn_id="search"
		let parent_source_id="search_search"
		let event_code="e_1678168003324"
		let event_params={"caller_name":"ve_from_search__ssp_from_search_ve","event_desc":"SSP from Search VE","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="ssp_from_search_ve__bfrq_to_tl_from_sss,ssp_from_search_ve__brfq_for_ip_lis,ssp_from_search_ve__brfq_for_pstatusq,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ve from search"
	ve_from_search__cp_from_search_ve(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ve_from_search"
		let destn_id=""
		let parent_source_id="search_search"
		let event_code="e_1678169049841"
		let event_params={"popup_info":{"context":""},"caller_name":"ve_from_search__cp_from_search_ve","event_desc":"CP from Search VE","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for INTERNAL event of "ssp from search ve"
	ssp_from_search_ve__bfrq_to_tl_from_sss(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_from_search_ve"
		let destn_id="outward_list"
		let parent_source_id="ve_from_search"
		let event_code="e_1678168022581"
		let event_params={"caller_name":"ssp_from_search_ve__bfrq_to_tl_from_sss","event_desc":"BFRQ to TL from SSs","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678780847259","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Home Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"Type","alias_name":"","mq_id":"MQ_1677928433068","date_format":false},{"column_name":"Total","alias_name":"","mq_id":"MQ_1677928433241","date_format":false},{"column_name":"IBMB","alias_name":"","mq_id":"MQ_1677928433417","date_format":false},{"column_name":"RMB","alias_name":"","mq_id":"MQ_1677928433585","date_format":false},{"column_name":"RIB","alias_name":"","mq_id":"MQ_1677928433769","date_format":false},{"column_name":"CMB","alias_name":"","mq_id":"MQ_1677928433945","date_format":false},{"column_name":"CIB","alias_name":"","mq_id":"MQ_1677928434130","date_format":false},{"column_name":"CMS","alias_name":"","mq_id":"MQ_1677928467185","date_format":false},{"column_name":"Manual","alias_name":"","mq_id":"MQ_1677928467361","date_format":false},{"column_name":"Pending_Screening","alias_name":"","mq_id":"MQ_1677928467521","date_format":false},{"column_name":"Pending_Maker","alias_name":"","mq_id":"MQ_1677928484313","date_format":false},{"column_name":"Pending_Checker","alias_name":"","mq_id":"MQ_1677928484473","date_format":false},{"column_name":"Send_to_CB","alias_name":"","mq_id":"MQ_1677928484633","date_format":false},{"column_name":"CBACK","alias_name":"","mq_id":"MQ_1677928498570","date_format":false},{"column_name":"CBNACK","alias_name":"","mq_id":"MQ_1677928498753","date_format":false},{"column_name":"Pending_T_1","alias_name":"","mq_id":"MQ_1677928498969","date_format":false},{"column_name":"Created_Date","alias_name":"","mq_id":"MQ_1677928517681","date_format":true}],"joins":[]},"eq_text":"select A.type, case when A.type='pacs.008' and b.sno is null then 1 when A.type='pacs.004' and b.sno is null then 2  when A.type='pacs.007' and b.sno is null then 3 else b.sno end sno, COALESCE(b.total,0) as total, COALESCE(b.IBMB,0) as IBMB, COALESCE(b.RIB,0) as RIB, COALESCE(b.RMB,0) as RMB, COALESCE(b.CIB,0) as CIB, COALESCE(b.CMS,0) as CMS, COALESCE(b.CMB,0) as CMB, COALESCE(b.Manual,0) as Manual, COALESCE(b.Pending_Screening,0) as Pending_Screening, COALESCE(b.PENDING_MAKER,0) as PENDING_MAKER, COALESCE(b.PENDING_CHECKER,0) as PENDING_CHECKER, COALESCE(b.SEND_TO_CB,0) as SEND_TO_CB, COALESCE(b.CBACK,0) as CBACK, COALESCE(b.CBNACK,0) as CBNACK, COALESCE(b.Pending_T_1,0) as Pending_T_1, to_char(CURRENT_DATE::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date from (select  'pacs.008' as TYPE union  select  'pacs.004' as TYPE union  select  'pacs.007' as type) A  left join (select  SNO,  type,  SUM(TOTAL) as Total,  SUM(IBMB) as IBMB,  SUM(RIB) as RIB,  SUM(RMB) as RMB ,  SUM(CIB) as CIB,  SUM(CMS) as CMS,  SUM(CMB) as CMB,  SUM(MANUAL) as Manual,  SUM(PENDING_SCREENING) as Pending_Screening,  SUM(PENDING_MAKER) as Pending_Maker,  SUM(PENDING_CHECKER) as Pending_Checker,  SUM(SEND_TO_CB) as Send_to_CB,  SUM(CBACK) as CBACK,  SUM(CBNACK) as CBNACK,  CREATED_DATE,  SUM(PENDING_T_1) as Pending_T_1 from  (  select  SNO,  type,  Total,  IBMB,  RIB,  RMB ,  CIB,  CMS,  CMB,  MANUAL,  PENDING_SCREENING,  PENDING_MAKER,  PENDING_CHECKER,  SEND_TO_CB,  CBACK,  CBNACK,  CREATED_DATE,  PENDING_T_1,  DEPARTMENT_CODE  from   vw_dashboard_outward_data) as t $WHERE group by  SNO,  type,  CREATED_DATE) B on B.type = A.type  order by sno"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Home Dashboard MQ CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Type","target_column":"Type","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Total","target_column":"Total","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBMB","target_column":"IBMB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"RMB","target_column":"RMB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"RIB","target_column":"RIB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CMB","target_column":"CMB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CIB","target_column":"CIB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CMS","target_column":"CMS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Manual","target_column":"Manual","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending Screening","target_column":"Pending_Screening","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (Maker)","target_column":"Pending_Maker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (Checker)","target_column":"Pending_Checker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Send to CB","target_column":"Send_to_CB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CB ACK","target_column":"CBACK","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CB NAK","target_column":"CBNACK","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (T-1)","target_column":"Pending_T_1","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp from search ve"
	ssp_from_search_ve__brfq_for_ip_lis(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_from_search_ve"
		let destn_id="inward_list"
		let parent_source_id="ve_from_search"
		let event_code="e_1678779150168"
		let event_params={"caller_name":"ssp_from_search_ve__brfq_for_ip_lis","event_desc":"BRFQ for IP lis","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_12","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678780879597","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS IP Home Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"type","alias_name":"","mq_id":"MQ_1677933613596","date_format":false},{"column_name":"total","alias_name":"","mq_id":"MQ_1678169755516","date_format":false},{"column_name":"pending_maker","alias_name":"","mq_id":"MQ_1678169755682","date_format":false},{"column_name":"pending_checker","alias_name":"","mq_id":"MQ_1678169755850","date_format":false},{"column_name":"pending_screening","alias_name":"","mq_id":"MQ_1678169756042","date_format":false},{"column_name":"successfullyposted","alias_name":"","mq_id":"MQ_1678169756202","date_format":false},{"column_name":"pending_returns_maker","alias_name":"","mq_id":"MQ_1678169780171","date_format":false},{"column_name":"pending_returns_checker","alias_name":"","mq_id":"MQ_1678169780331","date_format":false},{"column_name":"returned","alias_name":"","mq_id":"MQ_1678169780499","date_format":false},{"column_name":"pending_t_1","alias_name":"","mq_id":"MQ_1678169862467","date_format":false},{"column_name":"created_date","alias_name":"","mq_id":"MQ_1678170105508","date_format":true}],"joins":[]},"eq_text":"select A.type, case when A.type='pacs.008' and b.sno is null then 1 when A.type='pacs.004' and b.sno is null then 2  when A.type='pacs.007' and b.sno is null then 3 else b.sno end sno, COALESCE(b.total,0) as total, COALESCE(b.Pending_Screening,0) as Pending_Screening, COALESCE(b.PENDING_MAKER,0) as PENDING_MAKER, COALESCE(b.PENDING_CHECKER,0) as PENDING_CHECKER, COALESCE(b.successfullyposted,0) as successfullyposted, COALESCE(b.pending_returns_maker,0) as pending_returns_maker, COALESCE(b.pending_returns_checker,0) as pending_returns_checker, COALESCE(b.returned,0) as returned, COALESCE(b.Pending_T_1,0) as Pending_T_1, to_char(CURRENT_DATE::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date from (select  'pacs.008' as TYPE union  select  'pacs.004' as TYPE union  select  'pacs.007' as type) A  left join (select  sno,  type,  sum(total) as TOTAL,  sum(pending_maker) as pending_maker,  sum(pending_checker) as pending_checker,  sum(pending_screening) as pending_screening,  sum(successfullyposted) as successfullyposted,  sum(pending_returns_maker) as pending_returns_maker,  sum(pending_returns_checker) as pending_returns_checker,  sum(returned) as returned,  sum(pending_t_1) as pending_t_1,  created_date from  (  select   sno,   type,   TOTAL,   pending_maker,   pending_checker,   pending_screening,   successfullyposted,   pending_returns_maker,   pending_returns_checker,   returned,   pending_t_1,   created_date,   DEPARTMENT_CODE  from   vw_dashboard_inward_data) T $WHERE group by  SNO,  type,  CREATED_DATE) B on B.type = A.type  order by sno"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS IP Home Dashboard MQ CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Type","target_column":"type","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Total","target_column":"total","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (Maker)","target_column":"pending_maker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (Checker)","target_column":"pending_checker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending Screening","target_column":"pending_screening","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Successfully Posted","target_column":"successfullyposted","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending Returns (Maker)","target_column":"pending_returns_maker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending Returns (Checker)","target_column":"pending_returns_checker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Returned","target_column":"returned","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (T-1)","target_column":"pending_t_1","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp from search ve"
	ssp_from_search_ve__brfq_for_pstatusq(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_from_search_ve"
		let destn_id="inward_queue"
		let parent_source_id="ve_from_search"
		let event_code="e_1678779473157"
		let event_params={"caller_name":"ssp_from_search_ve__brfq_for_pstatusq","event_desc":"BRFQ for PSTATUSq","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"BAR","chart_label":"PROCESS_STATUS","chart_series":"","chart_data":"PROCESS_STATUS_COUNT","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_13","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678787742404","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Queue Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS_COUNT","alias_name":"","mq_id":"MQ_1672833641472","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1672833641606","date_format":false}],"joins":[]},"eq_text":"select  COUNT(PROCESS_STATUS) as PROCESS_STATUS_COUNT,  PROCESS_TYPE,  PROCESS_STATUS,  createddate from  (  select   T.CREATED_DATE,   T.PROCESS_TYPE ,   T.TENANT_ID,   case    when T.channel_id is null then UPPER('UNKOWN')    else t.channel_id   end as channel_id,   case    when T.PROCESSING_SYSTEM is null then upper('unknown')    else T.PROCESSING_SYSTEM   end as PROCESSING_SYSTEM,   T.DEPARTMENT_CODE,   case    when T.PROCESS_GROUP is null then UPPER('UNKOWN')    else t.PROCESS_GROUP   end as PROCESS_GROUP,   case    when T.EXHF_ID is null then UPPER('RCT')    else UPPER('BCT')   end as PAYMENT_TYPE,   case    when T.PROCESS_STATUS is null then UPPER('UNKNOWN')    else T.PROCESS_STATUS   end as PROCESS_STATUS,   to_date(to_char(t.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) as createddate  from   NPSS_TRANSACTIONS T where to_date(to_char(T.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date) V $WHERE group by  PROCESS_STATUS,  PROCESS_TYPE,  createddate"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Queue Dashboard CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENENT_ID","binding_name":"TENENT_ID","binding_value":"","source_name":"TENENT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"PROCESS_STATUS_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "outward list"
	outward_list__svm_by_click_on_tl() { 
		let Dest_Is_ctrl=true
		
		let source_id="outward_list"
		let destn_id="outward_list"
		let parent_source_id=""
		let event_code="e_1598531297905"
		let event_params={"caller_name":"outward_list__svm_by_click_on_tl","event_desc":"SVM by click on TL","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"outward_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678780847259","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Home Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"Type","alias_name":"","mq_id":"MQ_1677928433068","date_format":false},{"column_name":"Total","alias_name":"","mq_id":"MQ_1677928433241","date_format":false},{"column_name":"IBMB","alias_name":"","mq_id":"MQ_1677928433417","date_format":false},{"column_name":"RMB","alias_name":"","mq_id":"MQ_1677928433585","date_format":false},{"column_name":"RIB","alias_name":"","mq_id":"MQ_1677928433769","date_format":false},{"column_name":"CMB","alias_name":"","mq_id":"MQ_1677928433945","date_format":false},{"column_name":"CIB","alias_name":"","mq_id":"MQ_1677928434130","date_format":false},{"column_name":"CMS","alias_name":"","mq_id":"MQ_1677928467185","date_format":false},{"column_name":"Manual","alias_name":"","mq_id":"MQ_1677928467361","date_format":false},{"column_name":"Pending_Screening","alias_name":"","mq_id":"MQ_1677928467521","date_format":false},{"column_name":"Pending_Maker","alias_name":"","mq_id":"MQ_1677928484313","date_format":false},{"column_name":"Pending_Checker","alias_name":"","mq_id":"MQ_1677928484473","date_format":false},{"column_name":"Send_to_CB","alias_name":"","mq_id":"MQ_1677928484633","date_format":false},{"column_name":"CBACK","alias_name":"","mq_id":"MQ_1677928498570","date_format":false},{"column_name":"CBNACK","alias_name":"","mq_id":"MQ_1677928498753","date_format":false},{"column_name":"Pending_T_1","alias_name":"","mq_id":"MQ_1677928498969","date_format":false},{"column_name":"Created_Date","alias_name":"","mq_id":"MQ_1677928517681","date_format":true}],"joins":[]},"eq_text":"select A.type, case when A.type='pacs.008' and b.sno is null then 1 when A.type='pacs.004' and b.sno is null then 2  when A.type='pacs.007' and b.sno is null then 3 else b.sno end sno, COALESCE(b.total,0) as total, COALESCE(b.IBMB,0) as IBMB, COALESCE(b.RIB,0) as RIB, COALESCE(b.RMB,0) as RMB, COALESCE(b.CIB,0) as CIB, COALESCE(b.CMS,0) as CMS, COALESCE(b.CMB,0) as CMB, COALESCE(b.Manual,0) as Manual, COALESCE(b.Pending_Screening,0) as Pending_Screening, COALESCE(b.PENDING_MAKER,0) as PENDING_MAKER, COALESCE(b.PENDING_CHECKER,0) as PENDING_CHECKER, COALESCE(b.SEND_TO_CB,0) as SEND_TO_CB, COALESCE(b.CBACK,0) as CBACK, COALESCE(b.CBNACK,0) as CBNACK, COALESCE(b.Pending_T_1,0) as Pending_T_1, to_char(CURRENT_DATE::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date from (select  'pacs.008' as TYPE union  select  'pacs.004' as TYPE union  select  'pacs.007' as type) A  left join (select  SNO,  type,  SUM(TOTAL) as Total,  SUM(IBMB) as IBMB,  SUM(RIB) as RIB,  SUM(RMB) as RMB ,  SUM(CIB) as CIB,  SUM(CMS) as CMS,  SUM(CMB) as CMB,  SUM(MANUAL) as Manual,  SUM(PENDING_SCREENING) as Pending_Screening,  SUM(PENDING_MAKER) as Pending_Maker,  SUM(PENDING_CHECKER) as Pending_Checker,  SUM(SEND_TO_CB) as Send_to_CB,  SUM(CBACK) as CBACK,  SUM(CBNACK) as CBNACK,  CREATED_DATE,  SUM(PENDING_T_1) as Pending_T_1 from  (  select  SNO,  type,  Total,  IBMB,  RIB,  RMB ,  CIB,  CMS,  CMB,  MANUAL,  PENDING_SCREENING,  PENDING_MAKER,  PENDING_CHECKER,  SEND_TO_CB,  CBACK,  CBNACK,  CREATED_DATE,  PENDING_T_1,  DEPARTMENT_CODE  from   vw_dashboard_outward_data) as t $WHERE group by  SNO,  type,  CREATED_DATE) B on B.type = A.type  order by sno"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Home Dashboard MQ CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Type","target_column":"Type","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Total","target_column":"Total","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBMB","target_column":"IBMB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"RMB","target_column":"RMB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"RIB","target_column":"RIB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CMB","target_column":"CMB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CIB","target_column":"CIB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CMS","target_column":"CMS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Manual","target_column":"Manual","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending Screening","target_column":"Pending_Screening","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (Maker)","target_column":"Pending_Maker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (Checker)","target_column":"Pending_Checker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Send to CB","target_column":"Send_to_CB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CB ACK","target_column":"CBACK","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CB NAK","target_column":"CBNACK","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (T-1)","target_column":"Pending_T_1","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "outward list"
	outward_list__brfq_for_op_chart() { 
		let Dest_Is_ctrl=true
		
		let source_id="outward_list"
		let destn_id="outward"
		let parent_source_id=""
		let event_code="e_1678962046937"
		let event_params={"caller_name":"outward_list__brfq_for_op_chart","event_desc":"BRFQ for op chart","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"outward_list","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"PIE","chart_label":"Pending_Detais","chart_series":"","chart_data":"p_count","avoid_parent_search_param":"N","avoid_key_column_filter":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"e_1678962046937":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_30","event_code":"E_1678962046937","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679569095202","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Home Dashboard OP CHART MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"Pending_Detais","alias_name":"","mq_id":"MQ_1678960123198","date_format":false},{"column_name":"p_count","alias_name":"","mq_id":"MQ_1678960123388","date_format":false}],"joins":[]},"eq_text":"select  Pending_Detais,  count (Pending_Detais) as p_count,  Process_Type,type from  (  select   Process_Name,   type,   Pending_Detais,   Process_Type,   tenant_id,   created_date,   createddate,   npsst_id,   department_code  from   (   select    distinct (npl.process_name),    case     when npl.process_name::text in ('Place Pacs008') then 'pacs.008'::text     when npl.process_name::text in ('Place Pacs.007') then 'pacs.007'::text     when npl.process_name::text = 'Receive Pacs004'::text then 'pacs.004'::text    end as type,    case     when ((npl.process_name = 'Place Pacs008'     and nppst.process_status = 'RCTExceptionFailure'     and nppst.status in ('OP_AC_REV_POSTING_FAILURE', 'OP_AC_RET_POSTING_FAILURE', 'OP_P2P_REV_POSTING_FAILURE' , 'OP_P2B_FUND_UNFR_FAILURE', 'OP_P2B_REV_POSTING_FAILURE')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)     or (npl.process_name = 'Receive Pacs004'     and nppst.process_status = 'RCTExceptionFailure'     and nppst.status in ('OR_P2P_POSTING_FAILURE', 'OR_P2B_POSTING_FAILURE')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)     or (npl.process_name = 'Place Pacs.007'     and nppst.status in ('OP_REVERSAL_REQ_REPAIR')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)) then 'Pending (Maker)'     when ((npl.process_name = 'Place Pacs008'     and nppst.process_status = 'RCTExceptionFailure'     and nppst.status in ('OP_AC_REV_POSTING_RETRY', 'OP_AC_RET_POSTING_RETRY', 'OP_P2P_REV_POSTING_RETRY', 'OP_P2B_FUND_UNFR_RETRY', 'OP_P2B_REV_POSTING_RETRY')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)     or (npl.process_name = 'Receive Pacs004'     and nppst.process_status = 'RCTExceptionFailure'     and nppst.status in ('OR_P2P_POSTING_RETRY', 'OR_P2B_POSTING_RETRY')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)     or (npl.process_name = 'Place Pacs.007'     and nppst.status in ('OP_REVERSAL_REQ_INITIATED')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)) then 'Pending (Checker)'     when ((npl.process_name = 'Place Pacs008'     and nppst.process_status = 'RCTExceptionFailure'     and nppst.status in ('OP_AC_REV_POSTING_FAILURE', 'OP_AC_RET_POSTING_FAILURE', 'OP_P2P_REV_POSTING_FAILURE' , 'OP_P2B_FUND_UNFR_FAILURE', 'OP_P2B_REV_POSTING_FAILURE', 'OP_AC_REV_POSTING_RETRY', 'OP_AC_RET_POSTING_RETRY', 'OP_P2P_REV_POSTING_RETRY', 'OP_P2B_FUND_UNFR_RETRY', 'OP_P2B_REV_POSTING_RETRY')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)     or (npl.process_name = 'Receive Pacs004'     and nppst.process_status = 'RCTExceptionFailure'     and nppst.status in ('OR_P2P_POSTING_FAILURE', 'OR_P2B_POSTING_FAILURE', 'OR_P2P_POSTING_RETRY', 'OR_P2B_POSTING_RETRY')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)     or (npl.process_name = 'Place Pacs.007'     and nppst.status in ('OP_REVERSAL_REQ_REPAIR', 'OP_REVERSAL_REQ_INITIATED')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)) then 'Pending (T-1)'     else 'Others'    end as Pending_Detais,    nppst.process_type,    nppst.created_date,    nppst.tenant_id,    nppst.npsst_id,    nppst.department_code,    to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) as createddate   from    npss_transactions nppst   join npss_trn_process_log npl on    npl.uetr = nppst.uetr   where    nppst.process_type = 'OP'    and (npl.process_name in ('Place Pacs008', 'Place Pacs.007', 'Receive Pacs004')) ) as Res  where   Res.Pending_Detais <> 'Others' ) a $WHERE group by  Pending_Detais,type,  Process_Type"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Home Dashboard OP Chart CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Type","binding_name":"Type","binding_value":"","source_name":"Type","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Pending_Detais","target_column":"Pending_Detais","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"p_count","target_column":"p_count","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "outward list"
	outward_list__sp_from_outward_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="outward_list"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1678974921545"
		let event_params={"caller_name":"outward_list__sp_from_outward_list","event_desc":"SP from Outward list","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"outward_list","raiseparam":{"profile_code":"BTL_1304_1678973592738"}}
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

	//Handler for SELECTION_CHANGED event of "outward list"
	outward_list__he_from_op_list_to_pending_chart() { 
		let Dest_Is_ctrl=true
		
		let source_id="outward_list"
		let destn_id="inward_queue"
		let parent_source_id=""
		let event_code="e_1679641342341"
		let event_params={"caller_name":"outward_list__he_from_op_list_to_pending_chart","event_desc":"HE from OP List to Pending Chart","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"outward_list","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
		let handler_code="hide_element"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_13","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678787742404","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Queue Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS_COUNT","alias_name":"","mq_id":"MQ_1672833641472","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1672833641606","date_format":false}],"joins":[]},"eq_text":"select  COUNT(PROCESS_STATUS) as PROCESS_STATUS_COUNT,  PROCESS_TYPE,  PROCESS_STATUS,  createddate from  (  select   T.CREATED_DATE,   T.PROCESS_TYPE ,   T.TENANT_ID,   case    when T.channel_id is null then UPPER('UNKOWN')    else t.channel_id   end as channel_id,   case    when T.PROCESSING_SYSTEM is null then upper('unknown')    else T.PROCESSING_SYSTEM   end as PROCESSING_SYSTEM,   T.DEPARTMENT_CODE,   case    when T.PROCESS_GROUP is null then UPPER('UNKOWN')    else t.PROCESS_GROUP   end as PROCESS_GROUP,   case    when T.EXHF_ID is null then UPPER('RCT')    else UPPER('BCT')   end as PAYMENT_TYPE,   case    when T.PROCESS_STATUS is null then UPPER('UNKNOWN')    else T.PROCESS_STATUS   end as PROCESS_STATUS,   to_date(to_char(t.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) as createddate  from   NPSS_TRANSACTIONS T where to_date(to_char(T.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date) V $WHERE group by  PROCESS_STATUS,  PROCESS_TYPE,  createddate"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Queue Dashboard CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENENT_ID","binding_name":"TENENT_ID","binding_value":"","source_name":"TENENT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"PROCESS_STATUS_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.hide_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "outward list"
	outward_list__se_from_pp_list_ti_pending_chart() { 
		let Dest_Is_ctrl=true
		
		let source_id="outward_list"
		let destn_id="outward"
		let parent_source_id=""
		let event_code="e_1679641536316"
		let event_params={"caller_name":"outward_list__se_from_pp_list_ti_pending_chart","event_desc":"SE from PP List ti Pending Chart","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"outward_list","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "outward list"
	outward_list__he_from_op_main_list_to_io_p_chart() { 
		let Dest_Is_ctrl=true
		
		let source_id="outward_list"
		let destn_id="inward"
		let parent_source_id=""
		let event_code="e_1679642384447"
		let event_params={"caller_name":"outward_list__he_from_op_main_list_to_io_p_chart","event_desc":"HE from OP Main List to IO P Chart","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"outward_list","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__cui_from_clear_btn_click() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_clear"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1598521932422"
		let event_params={"caller_name":"search_clear__cui_from_clear_btn_click","event_desc":"CUi from clear btn click","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_clear","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for SELECTION_CHANGED event of "inward list"
	inward_list__svm_for_ip_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="inward_list"
		let destn_id="inward_list"
		let parent_source_id=""
		let event_code="e_1678779197624"
		let event_params={"caller_name":"inward_list__svm_for_ip_list","event_desc":"SVM for IP list","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"inward_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_12","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678780879597","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS IP Home Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"type","alias_name":"","mq_id":"MQ_1677933613596","date_format":false},{"column_name":"total","alias_name":"","mq_id":"MQ_1678169755516","date_format":false},{"column_name":"pending_maker","alias_name":"","mq_id":"MQ_1678169755682","date_format":false},{"column_name":"pending_checker","alias_name":"","mq_id":"MQ_1678169755850","date_format":false},{"column_name":"pending_screening","alias_name":"","mq_id":"MQ_1678169756042","date_format":false},{"column_name":"successfullyposted","alias_name":"","mq_id":"MQ_1678169756202","date_format":false},{"column_name":"pending_returns_maker","alias_name":"","mq_id":"MQ_1678169780171","date_format":false},{"column_name":"pending_returns_checker","alias_name":"","mq_id":"MQ_1678169780331","date_format":false},{"column_name":"returned","alias_name":"","mq_id":"MQ_1678169780499","date_format":false},{"column_name":"pending_t_1","alias_name":"","mq_id":"MQ_1678169862467","date_format":false},{"column_name":"created_date","alias_name":"","mq_id":"MQ_1678170105508","date_format":true}],"joins":[]},"eq_text":"select A.type, case when A.type='pacs.008' and b.sno is null then 1 when A.type='pacs.004' and b.sno is null then 2  when A.type='pacs.007' and b.sno is null then 3 else b.sno end sno, COALESCE(b.total,0) as total, COALESCE(b.Pending_Screening,0) as Pending_Screening, COALESCE(b.PENDING_MAKER,0) as PENDING_MAKER, COALESCE(b.PENDING_CHECKER,0) as PENDING_CHECKER, COALESCE(b.successfullyposted,0) as successfullyposted, COALESCE(b.pending_returns_maker,0) as pending_returns_maker, COALESCE(b.pending_returns_checker,0) as pending_returns_checker, COALESCE(b.returned,0) as returned, COALESCE(b.Pending_T_1,0) as Pending_T_1, to_char(CURRENT_DATE::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date from (select  'pacs.008' as TYPE union  select  'pacs.004' as TYPE union  select  'pacs.007' as type) A  left join (select  sno,  type,  sum(total) as TOTAL,  sum(pending_maker) as pending_maker,  sum(pending_checker) as pending_checker,  sum(pending_screening) as pending_screening,  sum(successfullyposted) as successfullyposted,  sum(pending_returns_maker) as pending_returns_maker,  sum(pending_returns_checker) as pending_returns_checker,  sum(returned) as returned,  sum(pending_t_1) as pending_t_1,  created_date from  (  select   sno,   type,   TOTAL,   pending_maker,   pending_checker,   pending_screening,   successfullyposted,   pending_returns_maker,   pending_returns_checker,   returned,   pending_t_1,   created_date,   DEPARTMENT_CODE  from   vw_dashboard_inward_data) T $WHERE group by  SNO,  type,  CREATED_DATE) B on B.type = A.type  order by sno"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS IP Home Dashboard MQ CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Type","target_column":"type","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Total","target_column":"total","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (Maker)","target_column":"pending_maker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (Checker)","target_column":"pending_checker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending Screening","target_column":"pending_screening","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Successfully Posted","target_column":"successfullyposted","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending Returns (Maker)","target_column":"pending_returns_maker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending Returns (Checker)","target_column":"pending_returns_checker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Returned","target_column":"returned","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (T-1)","target_column":"pending_t_1","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "inward list"
	inward_list__sp_fro_ip_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="inward_list"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1679039887060"
		let event_params={"caller_name":"inward_list__sp_fro_ip_list","event_desc":"SP fro IP list","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"inward_list","raiseparam":{"profile_code":"BTL_1304_1678973592738"}}
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

	//Handler for SELECTION_CHANGED event of "inward list"
	inward_list__he_from_ip_list_to_pending_chart() { 
		let Dest_Is_ctrl=true
		
		let source_id="inward_list"
		let destn_id="inward_queue"
		let parent_source_id=""
		let event_code="e_1679641318913"
		let event_params={"caller_name":"inward_list__he_from_ip_list_to_pending_chart","event_desc":"HE from IP List to Pending Chart","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"inward_list","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
		let handler_code="hide_element"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_13","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678787742404","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Queue Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS_COUNT","alias_name":"","mq_id":"MQ_1672833641472","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1672833641606","date_format":false}],"joins":[]},"eq_text":"select  COUNT(PROCESS_STATUS) as PROCESS_STATUS_COUNT,  PROCESS_TYPE,  PROCESS_STATUS,  createddate from  (  select   T.CREATED_DATE,   T.PROCESS_TYPE ,   T.TENANT_ID,   case    when T.channel_id is null then UPPER('UNKOWN')    else t.channel_id   end as channel_id,   case    when T.PROCESSING_SYSTEM is null then upper('unknown')    else T.PROCESSING_SYSTEM   end as PROCESSING_SYSTEM,   T.DEPARTMENT_CODE,   case    when T.PROCESS_GROUP is null then UPPER('UNKOWN')    else t.PROCESS_GROUP   end as PROCESS_GROUP,   case    when T.EXHF_ID is null then UPPER('RCT')    else UPPER('BCT')   end as PAYMENT_TYPE,   case    when T.PROCESS_STATUS is null then UPPER('UNKNOWN')    else T.PROCESS_STATUS   end as PROCESS_STATUS,   to_date(to_char(t.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) as createddate  from   NPSS_TRANSACTIONS T where to_date(to_char(T.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date) V $WHERE group by  PROCESS_STATUS,  PROCESS_TYPE,  createddate"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Queue Dashboard CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENENT_ID","binding_name":"TENENT_ID","binding_value":"","source_name":"TENENT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"PROCESS_STATUS_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.hide_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "inward list"
	inward_list__se_from_ip_main_list_to_ip_chart() { 
		let Dest_Is_ctrl=true
		
		let source_id="inward_list"
		let destn_id="inward"
		let parent_source_id=""
		let event_code="e_1679641861610"
		let event_params={"caller_name":"inward_list__se_from_ip_main_list_to_ip_chart","event_desc":"SE from IP Main List to IP Chart","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"inward_list","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "inward list"
	inward_list__brfq_from_ip_main_list_to_ip_chart() { 
		let Dest_Is_ctrl=true
		
		let source_id="inward_list"
		let destn_id="inward"
		let parent_source_id=""
		let event_code="e_1679641884819"
		let event_params={"caller_name":"inward_list__brfq_from_ip_main_list_to_ip_chart","event_desc":"BRFQ from IP main List to IP CHart","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"inward_list","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"PIE","chart_label":"Pending_Detais","chart_series":"","chart_data":"P_count","avoid_parent_search_param":"N","avoid_key_column_filter":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"e_1679641884819":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_38","event_code":"E_1679641884819","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679642236090","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Home Dashboard IP CHART MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"Pending_Detais","alias_name":"","mq_id":"MQ_1679029833085","date_format":false},{"column_name":"p_count","alias_name":"","mq_id":"MQ_1679029833512","date_format":false}],"joins":[]},"eq_text":"select  Pending_Detais,  count (Pending_Detais) as p_count,  Process_Type,type from  (  select   Process_Name,   type,   Pending_Detais,   Process_Type,   tenant_id,   created_date,   npsst_id ,   department_code  from   (   select    distinct (npl.process_name),    case     when npl.process_name::text in ('Receive Pacs008') then 'pacs.008'::text     when npl.process_name::text in ('Receive Pacs.007') then 'pacs.007'::text     when npl.process_name::text = 'Place Pacs004'::text then 'pacs.004'::text    end as type,    case     when (npl.process_name = 'Receive Pacs008'     and nppst.process_status = 'RCTExceptionFailure'     and nppst.status in ('IP_RCT_RR_POSTING_FAILURE', 'IP_RCT_PC_T24_POSTING_FAILURE', 'IP_RCT_CC_T24_POSTING_FAILURE')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date) then 'Pending (Maker)'     when (npl.process_name = 'Place Pacs004'     and nppst.process_status = 'RCTExceptionFailure'     and nppst.status in ('IP_RCT_RETURN_POSTING_FAILURE')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date) then 'Pending (Maker)'     when (npl.process_name = 'Receive Pacs.007'     and nppst.status in ('IP_RCT_REVERSAL_REQ_RECEIVED', 'IP_RCT_REVERSAL_VLD_FAILED')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date) then 'Pending (Maker)'     when ((npl.process_name = 'Receive Pacs008'     and nppst.process_status = 'RCTExceptionFailure'     and nppst.status in ('IP_RCT_RR_POSTING_RETRY', 'IP_RCT_PC_T24_POSTING_RETRY', 'IP_RCT_CC_T24_POSTING_RETRY', 'IP_RCT_POSTING_SUSPICIOUS', 'IP_RCT_PC_POSTING_SUSPICIOUS')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)     or (npl.process_name = 'Place Pacs004'     and nppst.process_status = 'RCTExceptionFailure'     and nppst.status in ('IP_RCT_RETURN_POSTING_RETRY', 'IP_RCT_RR_POSTING_SUSPICIOUS')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)     or (npl.process_name = 'Receive Pacs.007'     and nppst.status in ('IP_RCT_REV_REQ_REJECTED', 'IP_RCT_RR_RETURN_READY')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)) then 'Pending (Checker)'     when ((npl.process_name = 'Receive Pacs008'     and nppst.process_status = 'RCTExceptionFailure'     and nppst.status in ('IP_RCT_RR_POSTING_FAILURE', 'IP_RCT_PC_T24_POSTING_FAILURE', 'IP_RCT_CC_T24_POSTING_FAILURE' , 'IP_RCT_RR_POSTING_RETRY', 'IP_RCT_PC_T24_POSTING_RETRY', 'IP_RCT_CC_T24_POSTING_RETRY', 'IP_RCT_POSTING_SUSPICIOUS', 'IP_RCT_PC_POSTING_SUSPICIOUS')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)     or (npl.process_name = 'Place Pacs004'     and nppst.process_status = 'RCTExceptionFailure'     and nppst.status in ('IP_RCT_RETURN_POSTING_FAILURE', 'IP_RCT_RETURN_POSTING_RETRY', 'IP_RCT_RR_POSTING_SUSPICIOUS')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)     or (npl.process_name = 'Receive Pacs.007'     and nppst.status in ('IP_RCT_REVERSAL_REQ_RECEIVED', 'IP_RCT_REVERSAL_VLD_FAILED', 'IP_RCT_REV_REQ_REJECTED', 'IP_RCT_RR_RETURN_READY')     and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)) then 'Pending (T-1)'     else 'Others'    end as Pending_Detais,    nppst.process_type,    nppst.created_date,    nppst.tenant_id,    nppst.npsst_id ,    nppst.department_code   from    npss_transactions nppst   join npss_trn_process_log npl on    npl.uetr = nppst.uetr   where    nppst.process_type = 'IP'    and (npl.process_name in ('Receive Pacs008', 'Receive Pacs.007', 'Place Pacs004')) ) as Res  where   Res.Pending_Detais <> 'Others') a $WHERE group by  Pending_Detais,type,  Process_Type"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Home Dashboard iP Chart CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Type","binding_name":"Type","binding_value":"","source_name":"Type","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Pending_Detais","target_column":"Pending_Detais","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"p_count","target_column":"p_count","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "inward list"
	inward_list__he_from_ip_main_list_to_op_chart() { 
		let Dest_Is_ctrl=true
		
		let source_id="inward_list"
		let destn_id="outward"
		let parent_source_id=""
		let event_code="e_1679642013208"
		let event_params={"caller_name":"inward_list__he_from_ip_main_list_to_op_chart","event_desc":"HE from IP Main List to OP Chart","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"inward_list","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "inward queue"
	inward_queue__svm_for_pstatus() { 
		let Dest_Is_ctrl=true
		
		let source_id="inward_queue"
		let destn_id="inward_queue"
		let parent_source_id=""
		let event_code="e_1678779544515"
		let event_params={"caller_name":"inward_queue__svm_for_pstatus","event_desc":"SVM for Pstatus","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"inward_queue","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={"inward_queue":{"e_1678779544515":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_13","event_code":"E_1678779544515","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"PROCESS_STATUS","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_STATUS","setd3name":"PROCESS_STATUS"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_13","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678787742404","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Queue Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS_COUNT","alias_name":"","mq_id":"MQ_1672833641472","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1672833641606","date_format":false}],"joins":[]},"eq_text":"select  COUNT(PROCESS_STATUS) as PROCESS_STATUS_COUNT,  PROCESS_TYPE,  PROCESS_STATUS,  createddate from  (  select   T.CREATED_DATE,   T.PROCESS_TYPE ,   T.TENANT_ID,   case    when T.channel_id is null then UPPER('UNKOWN')    else t.channel_id   end as channel_id,   case    when T.PROCESSING_SYSTEM is null then upper('unknown')    else T.PROCESSING_SYSTEM   end as PROCESSING_SYSTEM,   T.DEPARTMENT_CODE,   case    when T.PROCESS_GROUP is null then UPPER('UNKOWN')    else t.PROCESS_GROUP   end as PROCESS_GROUP,   case    when T.EXHF_ID is null then UPPER('RCT')    else UPPER('BCT')   end as PAYMENT_TYPE,   case    when T.PROCESS_STATUS is null then UPPER('UNKNOWN')    else T.PROCESS_STATUS   end as PROCESS_STATUS,   to_date(to_char(t.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) as createddate  from   NPSS_TRANSACTIONS T where to_date(to_char(T.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date) V $WHERE group by  PROCESS_STATUS,  PROCESS_TYPE,  createddate"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Queue Dashboard CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENENT_ID","binding_name":"TENENT_ID","binding_value":"","source_name":"TENENT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"PROCESS_STATUS_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "inward queue"
	inward_queue__se_from_ip_queue_to_tran() { 
		let Dest_Is_ctrl=true
		
		let source_id="inward_queue"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1679033038476"
		let event_params={"caller_name":"inward_queue__se_from_ip_queue_to_tran","event_desc":"SE from IP Queue to Tran","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"inward_queue","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "inward queue"
	inward_queue__brfq_from_inward_queue_chart_to_tran_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="inward_queue"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1679038751136"
		let event_params={"caller_name":"inward_queue__brfq_from_inward_queue_chart_to_tran_list","event_desc":"BRFQ from Inward Queue Chart to tran list","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"inward_queue","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"e_1679038751136":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_14","event_code":"E_1679038751136","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679039201469","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Home Dashboard IP Queue Tran MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1679052791303","date_format":false},{"column_name":"intrbk_sttlm_cur","alias_name":"","mq_id":"MQ_1679052791509","date_format":false},{"column_name":"intrbk_sttlm_amnt","alias_name":"","mq_id":"MQ_1679052791670","date_format":false,"currency_format":true},{"column_name":"cdtr_iban","alias_name":"","mq_id":"MQ_1679052828020","date_format":false},{"column_name":"cr_acct_identification","alias_name":"","mq_id":"MQ_1679052828196","date_format":false},{"column_name":"dbtr_iban","alias_name":"","mq_id":"MQ_1679052839148","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1679052851516","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1679052851915","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1679053025779","date_format":false}],"joins":[]},"eq_text":"select  npsst_id,  uetr,  CREATED_DATE,  PROCESS_TYPE,  PROCESS_STATUS,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification ,  dbtr_iban,  DATEMI,  createddate from  (  select   t.npsst_id,   t.uetr,   T.CREATED_DATE,   TO_CHAR(T.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   T.PROCESS_TYPE ,   T.TENANT_ID,   t.intrbk_sttlm_cur ,   t.intrbk_sttlm_amnt ,   t.cdtr_iban ,   t.cr_acct_identification ,   t.dbtr_iban ,   case    when T.channel_id is null then UPPER('UNKOWN')    else t.channel_id   end as channel_id,   case    when T.PROCESSING_SYSTEM is null then upper('unknown')    else T.PROCESSING_SYSTEM   end as PROCESSING_SYSTEM,   T.DEPARTMENT_CODE,   case    when T.PROCESS_GROUP is null then UPPER('UNKOWN')    else t.PROCESS_GROUP   end as PROCESS_GROUP,   case    when T.EXHF_ID is null then UPPER('RCT')    else UPPER('BCT')   end as PAYMENT_TYPE,   case    when T.PROCESS_STATUS is null then UPPER('UNKNOWN')    else T.PROCESS_STATUS   end as PROCESS_STATUS,   to_date(to_char(t.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) as createddate  from   NPSS_TRANSACTIONS T where to_date(to_char(T.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Home Dashboard IP Queue Tran CCD","filter":[{"filter_name":"CREATEDDATE","binding_name":"CREATEDDATE","binding_value":"","source_name":"CREATEDDATE","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"DATE","conj_operator":"AND","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"PROCESS_STATUS","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"PROCESS_TYPE","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"intrbk_sttlm_cur","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"intrbk_sttlm_amnt","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"CR IBAN","target_column":"cdtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Card Number","target_column":"cr_acct_identification","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"DR IBAN","target_column":"dbtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation view tran"
	navigation_view_tran__sp_for_view_detail_tran() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_tran"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1678803572113"
		let event_params={"caller_name":"navigation_view_tran__sp_for_view_detail_tran","event_desc":"SP for View Detail Tran","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_tran","raiseparam":{"profile_code":"BTL_1304_1678876095161"}}
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
	navigation_view_tran__brfq_for_vertical_tran_detail() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_tran"
		let destn_id="view_dr_cr_details"
		let parent_source_id=""
		let event_code="e_1678803628046"
		let event_params={"caller_name":"navigation_view_tran__brfq_for_vertical_tran_detail","event_desc":"BRFQ for Vertical Tran Detail","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_tran","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_26","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678866701508","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Decr HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1673092056492","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092056684","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092056908","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1673092057076","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092057228","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092057420","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092057588","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1673092057748","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1673092057924","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1673092127114","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1673092127282","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1673092127458","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1673092127626","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1673092127778","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092127946","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092128266","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092128473","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1673092236606","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092236782","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092236942","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092237110","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1673092237270","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1673092237447","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1673092237623","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1673092290325","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1673092290485","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673092290653","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1673092290821","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1673092290981","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1673092291149","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1673092291341","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1673092291501","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1673092354435","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1673092354603","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1673092354779","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1673092354947","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1673092355115","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1673092355283","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1673092355467","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092402433","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1673092402801","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1673092403129","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(DBTR_ACCT_NO,$PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  fn_pcidss_decrypt(CR_ACCT_IDENTIFICATION,$PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  TRAN_REF_ID,  PROCESSING_SYSTEM from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   A.CR_ACCT_IDENTIFICATION,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Decr Vertical Dr Cr CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Created Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Acceptance Date Time","target_column":"ACCP_DATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Sort Code","target_column":"CR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Identification","target_column":"CR_ACCT_IDENTIFICATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Sort Code","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Identification","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Private Identification","target_column":"DBTR_PRVT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Other Issuer","target_column":"DBTR_OTHER_ISSUER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation view tran"
	navigation_view_tran__brfq_vprdl() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_tran"
		let destn_id="view_payment_details"
		let parent_source_id=""
		let event_code="e_1678803673030"
		let event_params={"caller_name":"navigation_view_tran__brfq_vprdl","event_desc":"BRFQ VPRDL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_tran","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_27","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678866785078","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Decr HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1673092056492","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092056684","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092056908","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1673092057076","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092057228","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092057420","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092057588","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1673092057748","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1673092057924","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1673092127114","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1673092127282","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1673092127458","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1673092127626","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1673092127778","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092127946","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092128266","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092128473","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1673092236606","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092236782","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092236942","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092237110","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1673092237270","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1673092237447","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1673092237623","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1673092290325","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1673092290485","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673092290653","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1673092290821","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1673092290981","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1673092291149","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1673092291341","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1673092291501","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1673092354435","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1673092354603","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1673092354779","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1673092354947","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1673092355115","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1673092355283","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1673092355467","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092402433","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1673092402801","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1673092403129","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(DBTR_ACCT_NO,$PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  fn_pcidss_decrypt(CR_ACCT_IDENTIFICATION,$PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  TRAN_REF_ID,  PROCESSING_SYSTEM from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   A.CR_ACCT_IDENTIFICATION,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Decr Vertical Payment CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Id","target_column":"NPSST_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Txn Value Date","target_column":"VALUE_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd-MM-yyyy HH:mm:ss\"","date_format":true},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Batch Id","target_column":"EXHF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E reference id","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Category Purpose","target_column":"category_purpose","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Issuer Type Code","target_column":"issuer_type_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remittance Info","target_column":"REMITTANCE_INFO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let event_code="e_1678854802450"
		let event_params={"caller_name":"navigation_view_process_log__sp_for_vlh","event_desc":"SP for VLH","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_process_log","raiseparam":{"profile_code":"BTL_1304_1678876184454"}}
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
	navigation_view_process_log__brfq_for_hd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_process_log"
		let destn_id="history_detail"
		let parent_source_id=""
		let event_code="e_1678854852122"
		let event_params={"caller_name":"navigation_view_process_log__brfq_for_hd","event_desc":"BRFQ for HD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_process_log","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_hd__sfr_for_hd,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_15","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678866570423","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"MI_LEVEL_PROCESS_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for hd"
	brfq_for_hd__sfr_for_hd(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_hd"
		let destn_id="history_detail"
		let parent_source_id="navigation_view_process_log"
		let event_code="e_1678854868312"
		let event_params={"caller_name":"brfq_for_hd__sfr_for_hd","event_desc":"SFR for HD","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_view_process_log","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_15","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678866570423","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"MI_LEVEL_PROCESS_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let event_code="e_1678873647556"
		let event_params={"caller_name":"transaction_list__svm_for_tran_list","event_desc":"SVM for Tran list","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_tran_list__cc_for_sh_to_tran_list,"
		let event_data={"transaction_list":{"e_1678873647556":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_14","event_code":"E_1678873647556","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"HARDCODED","column_name":"SELECT","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"},{"type":"LOCAL","column_name":"NPSST_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSST_ID","setd3name":"NPSST_ID"},{"type":"LOCAL","column_name":"UETR","level":"MI_LEVEL","name":"MI_LEVEL_UETR","setd3name":"UETR"},{"type":"LOCAL","column_name":"PROCESS_TYPE","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_TYPE","setd3name":"PROCESS_TYPE"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__ee_for_view_tran_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_view_tran"
		let parent_source_id=""
		let event_code="e_1678975786616"
		let event_params={"caller_name":"transaction_list__ee_for_view_tran_btn","event_desc":"EE for view tran btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	transaction_list__ee_for_vml() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_view_message_log"
		let parent_source_id=""
		let event_code="e_1678975854986"
		let event_params={"caller_name":"transaction_list__ee_for_vml","event_desc":"EE for VML","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	transaction_list__ee_for_plog() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_view_process_log"
		let parent_source_id=""
		let event_code="e_1679031156281"
		let event_params={"caller_name":"transaction_list__ee_for_plog","event_desc":"EE for PLOG","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	svm_for_tran_list__cc_for_sh_to_tran_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="svm_for_tran_list"
		let destn_id=""
		let parent_source_id="transaction_list"
		let event_code="e_1679462567144"
		let event_params={"caller_name":"svm_for_tran_list__cc_for_sh_to_tran_list","event_desc":"CC for SH to tran list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view message log"
	navigation_view_message_log__sp_for_vmd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_message_log"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1678855275946"
		let event_params={"caller_name":"navigation_view_message_log__sp_for_vmd","event_desc":"SP for VMD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_message_log","raiseparam":{"profile_code":"BTL_1304_1678803243440"}}
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
	navigation_view_message_log__brfq_for_vmd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_message_log"
		let destn_id="message_detail"
		let parent_source_id=""
		let event_code="e_1678855310922"
		let event_params={"caller_name":"navigation_view_message_log__brfq_for_vmd","event_desc":"BRFQ for VMD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_message_log","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_vmd__sfr__for_vmd,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_20","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678866622478","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1668573850306","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1668573852117","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1668573852786","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1668573853731","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1668573854459","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1668573869044","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1668573871186","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573874178","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573876315","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668573884586","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1668573900766","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1668573911947","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1668573917043","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1668573918291","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1668573918796","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1668573919355","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1668573919955","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1668573925605","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1668587107858","date_format":false}],"joins":[]},"eq_text":"select  NPSSTRRD_ID,  MSG_ID,  UETR,  PARENT_NPSSTRRD_REFNO,  NPSSTRRD_REFNO,  PROCESS_CODE,  PROCESS_DETAIL,  EXHF_ID,  PROCESS_NAME,  MESSAGE_DESC,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  STATUS,  PROCESS_STATUS,PROCESS_TYPE,  MESSAGE_DATA,  CREATEDDATEMILISEC,  DT_CODE,  DTT_CODE from  (  select   NPSSTRRD.NPSSTRRD_ID,   NPSSTRRD.MSG_ID,   NPSSTRRD.UETR,   NPSSTRRD.PARENT_NPSSTRRD_REFNO,   NPSSTRRD.NPSSTRRD_REFNO,   NPSSTRRD.MESSAGE_DATA,   NPSSTRRD.PROCESS_CODE,   NPSSTRRD.PROCESS_DETAIL,   NPSSTRRD.EXHF_ID,   NPSSTRRD.PROCESS_NAME,   NPSSTRRD.MESSAGE_DESC,   NPSSTRRD.CHANNEL_ID,   NPSSTRRD.CHANNEL_REFNO,   NPSSTRRD.CHANNEL_USERID,   NPSSTRRD.CHANNEL_PRODUCT,   NPSSTRRD.CHANNEL_SUB_PRODUCT,   NPSSTRRD.CHANNEL_TRAN_CODE,   NPSSTRRD.CREATED_BY,   NPSSTRRD.CREATED_BY_NAME,   NPSSTRRD.CREATED_DATE,   NPSSTRRD.DT_CODE,   NPSSTRRD.DT_DESCRIPTION,   NPSSTRRD.DTT_CODE,   NPSSTRRD.DTT_DESCRIPTION,   NPSSTRRD.MODIFIED_BY,   NPSSTRRD.MODIFIED_BY_NAME,   NPSSTRRD.MODIFIED_DATE,   NPSSTRRD.STATUS,   NPSSTRRD.PROCESS_STATUS,NT.PROCESS_TYPE,   NPSSTRRD.SYSTEM_ID,   NPSSTRRD.SYSTEM_NAME,   NPSSTRRD.TENANT_ID,   NPSSTRRD.APP_ID,   NPSSTRRD.VERSION_NO,   TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC  from   NPSS_TRN_REQ_RESP_DTLS NPSSTRRD  inner join NPSS_TRANSACTIONS NT on   NPSSTRRD.UETR = NT.UETR) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS REQ RES CCD","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"MI_LEVEL_PROCESS_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for vmd"
	brfq_for_vmd__sfr__for_vmd(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_vmd"
		let destn_id="message_detail"
		let parent_source_id="navigation_view_message_log"
		let event_code="e_1678855389929"
		let event_params={"caller_name":"brfq_for_vmd__sfr__for_vmd","event_desc":"SFR  for VMD","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_view_message_log","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_20","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678866622478","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1668573850306","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1668573852117","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1668573852786","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1668573853731","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1668573854459","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1668573869044","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1668573871186","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573874178","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573876315","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668573884586","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1668573900766","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1668573911947","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1668573917043","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1668573918291","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1668573918796","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1668573919355","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1668573919955","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1668573925605","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1668587107858","date_format":false}],"joins":[]},"eq_text":"select  NPSSTRRD_ID,  MSG_ID,  UETR,  PARENT_NPSSTRRD_REFNO,  NPSSTRRD_REFNO,  PROCESS_CODE,  PROCESS_DETAIL,  EXHF_ID,  PROCESS_NAME,  MESSAGE_DESC,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  STATUS,  PROCESS_STATUS,PROCESS_TYPE,  MESSAGE_DATA,  CREATEDDATEMILISEC,  DT_CODE,  DTT_CODE from  (  select   NPSSTRRD.NPSSTRRD_ID,   NPSSTRRD.MSG_ID,   NPSSTRRD.UETR,   NPSSTRRD.PARENT_NPSSTRRD_REFNO,   NPSSTRRD.NPSSTRRD_REFNO,   NPSSTRRD.MESSAGE_DATA,   NPSSTRRD.PROCESS_CODE,   NPSSTRRD.PROCESS_DETAIL,   NPSSTRRD.EXHF_ID,   NPSSTRRD.PROCESS_NAME,   NPSSTRRD.MESSAGE_DESC,   NPSSTRRD.CHANNEL_ID,   NPSSTRRD.CHANNEL_REFNO,   NPSSTRRD.CHANNEL_USERID,   NPSSTRRD.CHANNEL_PRODUCT,   NPSSTRRD.CHANNEL_SUB_PRODUCT,   NPSSTRRD.CHANNEL_TRAN_CODE,   NPSSTRRD.CREATED_BY,   NPSSTRRD.CREATED_BY_NAME,   NPSSTRRD.CREATED_DATE,   NPSSTRRD.DT_CODE,   NPSSTRRD.DT_DESCRIPTION,   NPSSTRRD.DTT_CODE,   NPSSTRRD.DTT_DESCRIPTION,   NPSSTRRD.MODIFIED_BY,   NPSSTRRD.MODIFIED_BY_NAME,   NPSSTRRD.MODIFIED_DATE,   NPSSTRRD.STATUS,   NPSSTRRD.PROCESS_STATUS,NT.PROCESS_TYPE,   NPSSTRRD.SYSTEM_ID,   NPSSTRRD.SYSTEM_NAME,   NPSSTRRD.TENANT_ID,   NPSSTRRD.APP_ID,   NPSSTRRD.VERSION_NO,   TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC  from   NPSS_TRN_REQ_RESP_DTLS NPSSTRRD  inner join NPSS_TRANSACTIONS NT on   NPSSTRRD.UETR = NT.UETR) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS REQ RES CCD","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"MI_LEVEL_PROCESS_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view req and res"
	process_log_ui_view_req_and_res__bt_for_req_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_req_and_res"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1678855608805"
		let event_params={"caller_name":"process_log_ui_view_req_and_res__bt_for_req_ui","event_desc":"BT for Req UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_req_and_res","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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
	process_log_ui_view_req_and_res__bt_for_res_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_req_and_res"
		let destn_id="response_ui"
		let parent_source_id=""
		let event_code="e_1678855617033"
		let event_params={"caller_name":"process_log_ui_view_req_and_res__bt_for_res_ui","event_desc":"BT for Res UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_req_and_res","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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
	process_log_ui_view_req_and_res__sp_for_vreq_and_vres() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_req_and_res"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1678855656564"
		let event_params={"caller_name":"process_log_ui_view_req_and_res__sp_for_vreq_and_vres","event_desc":"SP for VREQ and VRES","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_req_and_res","raiseparam":{"profile_code":"BTL_1304_1678803372109"}}
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
	history_detail__ee_for_vrar() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="process_log_ui_view_req_and_res"
		let parent_source_id=""
		let event_code="e_1678855751403"
		let event_params={"caller_name":"history_detail__ee_for_vrar","event_desc":"EE for VRAR","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	history_detail__ssr_for_req_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1678855785906"
		let event_params={"caller_name":"history_detail__ssr_for_req_ui","event_desc":"SSR for req ui","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{}}
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
	history_detail__ssr_for_res_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="response_ui"
		let parent_source_id=""
		let event_code="e_1678855798156"
		let event_params={"caller_name":"history_detail__ssr_for_res_ui","event_desc":"SSR for res ui","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{}}
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
	message_detail_action_view_message__sp_for_view_message_data() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail_action_view_message"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1678855887404"
		let event_params={"caller_name":"message_detail_action_view_message__sp_for_view_message_data","event_desc":"SP for view message DATA","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_detail_action_view_message","raiseparam":{"profile_code":"BTL_1304_1678803301898"}}
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
	message_detail_action_view_message__bt_for_md_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail_action_view_message"
		let destn_id="message_detail_ui"
		let parent_source_id=""
		let event_code="e_1678855946032"
		let event_params={"caller_name":"message_detail_action_view_message__bt_for_md_ui","event_desc":"BT for MD UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_detail_action_view_message","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for SELECTION_CHANGED event of "message detail"
	message_detail__ssr_for_md_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail"
		let destn_id="message_detail_ui"
		let parent_source_id=""
		let event_code="e_1678855963255"
		let event_params={"caller_name":"message_detail__ssr_for_md_ui","event_desc":"SSR for MD UI","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"message_detail","raiseparam":{}}
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
	message_detail__ee_for_vm() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail"
		let destn_id="message_detail_action_view_message"
		let parent_source_id=""
		let event_code="e_1678857841614"
		let event_params={"caller_name":"message_detail__ee_for_vm","event_desc":"EE for VM","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"message_detail","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "back ui back"
	back_ui_back__sp_for_back_from_main() { 
		let Dest_Is_ctrl=true
		
		let source_id="back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1678856012575"
		let event_params={"caller_name":"back_ui_back__sp_for_back_from_main","event_desc":"SP for back from Main","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"back_ui_back","raiseparam":{"profile_code":"BTL_1304_1678973592738"}}
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
	back_ui_back__tbc_for_back_back_to_hist_list_trg() { 
		let Dest_Is_ctrl=true
		
		let source_id="back_ui_back"
		let destn_id="nav_ui_trg_for_hide_tran_list"
		let parent_source_id=""
		let event_code="e_1679395115173"
		let event_params={"caller_name":"back_ui_back__tbc_for_back_back_to_hist_list_trg","event_desc":"TBC for Back Back to Hist List TRG","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"back_ui_back","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "message back ui back"
	message_back_ui_back__sp_for_mb_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1678856070249"
		let event_params={"caller_name":"message_back_ui_back__sp_for_mb_back","event_desc":"SP for MB Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_back_ui_back","raiseparam":{"profile_code":"BTL_1304_1678803243440"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "message back ui back"
	message_back_ui_back__tbc_from_message__back_to_hist_list_trg() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_back_ui_back"
		let destn_id="nav_ui_trg_for_hide_tran_list"
		let parent_source_id=""
		let event_code="e_1679394986428"
		let event_params={"caller_name":"message_back_ui_back__tbc_from_message__back_to_hist_list_trg","event_desc":"TBC from message  Back to Hist List TRG","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_back_ui_back","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "message detail action back"
	message_detail_action_back__sp_for_mda_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail_action_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1678856129298"
		let event_params={"caller_name":"message_detail_action_back__sp_for_mda_back","event_desc":"SP for MDA Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_detail_action_back","raiseparam":{"profile_code":"BTL_1304_1678973592738"}}
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
	message_detail_action_back__tbc_form_message_action_detaul_back_to_hist_list_trg() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail_action_back"
		let destn_id="nav_ui_trg_for_hide_tran_list"
		let parent_source_id=""
		let event_code="e_1679395169791"
		let event_params={"caller_name":"message_detail_action_back__tbc_form_message_action_detaul_back_to_hist_list_trg","event_desc":"TBC form message action detaul Back to Hist List TRG","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_detail_action_back","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "process log ui back"
	process_log_ui_back__sp_for_pl_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1678856190577"
		let event_params={"caller_name":"process_log_ui_back__sp_for_pl_back","event_desc":"SP for PL Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_back","raiseparam":{"profile_code":"BTL_1304_1678973592738"}}
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
	process_log_ui_back__tbc_for_process_log_back_to_hist_list_trg() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_back"
		let destn_id="nav_ui_trg_for_hide_tran_list"
		let parent_source_id=""
		let event_code="e_1679395472621"
		let event_params={"caller_name":"process_log_ui_back__tbc_for_process_log_back_to_hist_list_trg","event_desc":"TBC for Process Log Back to Hist List TRG","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_back","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "single back ui back"
	single_back_ui_back__sp_for_sb_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="single_back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1678856356412"
		let event_params={"caller_name":"single_back_ui_back__sp_for_sb_back","event_desc":"SP for SB Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"single_back_ui_back","raiseparam":{"profile_code":"BTL_1304_1678876184454"}}
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
	single_back_ui_back__tbc_for_m_single_back_to_hist_list_trg() { 
		let Dest_Is_ctrl=true
		
		let source_id="single_back_ui_back"
		let destn_id="nav_ui_trg_for_hide_tran_list"
		let parent_source_id=""
		let event_code="e_1679395227866"
		let event_params={"caller_name":"single_back_ui_back__tbc_for_m_single_back_to_hist_list_trg","event_desc":"TBC for m single Back to Hist List TRG","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"single_back_ui_back","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "nav ui view ip queue"
	nav_ui_view_ip_queue__sp_for_viq() { 
		let Dest_Is_ctrl=true
		
		let source_id="nav_ui_view_ip_queue"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1678974531808"
		let event_params={"caller_name":"nav_ui_view_ip_queue__sp_for_viq","event_desc":"SP for VIQ","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"nav_ui_view_ip_queue","raiseparam":{"profile_code":"BTL_1304_1678973592738"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "nav ui view ip queue"
	nav_ui_view_ip_queue__he_to_view_ip_queue_button_to_pending_chart() { 
		let Dest_Is_ctrl=true
		
		let source_id="nav_ui_view_ip_queue"
		let destn_id="outward"
		let parent_source_id=""
		let event_code="e_1679641296269"
		let event_params={"caller_name":"nav_ui_view_ip_queue__he_to_view_ip_queue_button_to_pending_chart","event_desc":"HE to View IP Queue Button to Pending Chart","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"nav_ui_view_ip_queue","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "nav ui view ip queue"
	nav_ui_view_ip_queue__he_to_view_ip_queue_button_to_ip_chartd() { 
		let Dest_Is_ctrl=true
		
		let source_id="nav_ui_view_ip_queue"
		let destn_id="inward"
		let parent_source_id=""
		let event_code="e_1679642439115"
		let event_params={"caller_name":"nav_ui_view_ip_queue__he_to_view_ip_queue_button_to_ip_chartd","event_desc":"HE to View IP Queue Button to IP Chartd","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"nav_ui_view_ip_queue","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "nav ui view ip queue"
	nav_ui_view_ip_queue__se_to_view_ip_queue_button_to_ip_queue() { 
		let Dest_Is_ctrl=true
		
		let source_id="nav_ui_view_ip_queue"
		let destn_id="inward_queue"
		let parent_source_id=""
		let event_code="e_1679642460479"
		let event_params={"caller_name":"nav_ui_view_ip_queue__se_to_view_ip_queue_button_to_ip_queue","event_desc":"SE to View IP Queue Button to IP Queue","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"nav_ui_view_ip_queue","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
		let handler_code="show_element"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_13","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1678787742404","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Queue Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS_COUNT","alias_name":"","mq_id":"MQ_1672833641472","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1672833641606","date_format":false}],"joins":[]},"eq_text":"select  COUNT(PROCESS_STATUS) as PROCESS_STATUS_COUNT,  PROCESS_TYPE,  PROCESS_STATUS,  createddate from  (  select   T.CREATED_DATE,   T.PROCESS_TYPE ,   T.TENANT_ID,   case    when T.channel_id is null then UPPER('UNKOWN')    else t.channel_id   end as channel_id,   case    when T.PROCESSING_SYSTEM is null then upper('unknown')    else T.PROCESSING_SYSTEM   end as PROCESSING_SYSTEM,   T.DEPARTMENT_CODE,   case    when T.PROCESS_GROUP is null then UPPER('UNKOWN')    else t.PROCESS_GROUP   end as PROCESS_GROUP,   case    when T.EXHF_ID is null then UPPER('RCT')    else UPPER('BCT')   end as PAYMENT_TYPE,   case    when T.PROCESS_STATUS is null then UPPER('UNKNOWN')    else T.PROCESS_STATUS   end as PROCESS_STATUS,   to_date(to_char(t.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) as createddate  from   NPSS_TRANSACTIONS T where to_date(to_char(T.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date) V $WHERE group by  PROCESS_STATUS,  PROCESS_TYPE,  createddate"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Queue Dashboard CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENENT_ID","binding_name":"TENENT_ID","binding_value":"","source_name":"TENENT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"PROCESS_STATUS_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.show_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "outward"
	outward__svm_from_pending_chart() { 
		let Dest_Is_ctrl=true
		
		let source_id="outward"
		let destn_id="outward"
		let parent_source_id=""
		let event_code="e_1678975150289"
		let event_params={"caller_name":"outward__svm_from_pending_chart","event_desc":"SVM from Pending chart","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"outward","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "outward"
	outward__se_from_chart_to_tran_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="outward"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1679032964521"
		let event_params={"caller_name":"outward__se_from_chart_to_tran_list","event_desc":"SE from CHart to Tran List","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"outward","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "outward"
	outward__brfq_op_chart_to_tran_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="outward"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1679038709562"
		let event_params={"caller_name":"outward__brfq_op_chart_to_tran_list","event_desc":"BRFQ OP chart to Tran list","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"outward","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"e_1679038709562":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_14","event_code":"E_1679038709562","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679039315939","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Home Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1678795579493","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1678795579892","date_format":false},{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1678795580083","date_format":true},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1678795580252","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1678795580443","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1678795580651","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1678795581011","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1678795648225","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1678795648809","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1678795649097","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1678795649417","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1678795649737","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1678795721503","date_format":false},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1678795721671","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1678795721847","date_format":false},{"column_name":"cr_acct_identification_mask","alias_name":"","mq_id":"MQ_1678795722007","date_format":false},{"column_name":"dr_acct_identification_mask","alias_name":"","mq_id":"MQ_1678800278062","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  Pending_Detais_OP,  Pending_Detais_IP,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification_mask,  Fn_card_decrypt_and_mask_rpt(DBTR_ACCT_NO) as dr_acct_identification_mask,  type,  CR_ACCT_IDENTIFICATION,  UETR,  VALUE_DATE,  ACCP_DATE_TIME,  CREATED_DATE,  DATEMI,  EXHF_ID,  CDTR_IBAN,  TENANT_ID,  TRAN_REF_ID,  DEPARTMENT_CODE,  PAYMENT_ENDTOEND_ID,  CLRSYSREF,  CDTR_ACCT_NO,  DBTR_ACCT_NO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  STATUS,  PROCESSING_SYSTEM,  PROCESS_STATUS,  DBTR_ACCT_NAME,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  DBTR_CUST_TYPE,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  CDTR_ACCT_NAME,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  DR_SORT_CODE,  CR_SORT_CODE,  CATEGORY_PURPOSE,  CATEGORY_PURPOSE_PRTY,  BASE_CURRENCY,  BASE_AMOUNT,  HDR_TOTAL_RECORDS,  HDR_TOTAL_AMOUNT,  HDR_CLEARING_SYSTEM,  CHARGE_BEARER,  REMITTANCE_INFO,  ACCOUNT_CURRENCY,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  ISSUER_TYPE_CODE,  CBS_REF_NO,  CBS_POSTING_FLAG,  PROCESS_TYPE,  PROCESS_GROUP from  (  select distinct (ntl.process_name),   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   case    when ntl.process_name::text in ('Place Pacs008', 'PACS.008','Receive Pacs008') then 'pacs.008'::text    when ntl.process_name::text in ('Place Pacs.007', 'PACS.007','Receive Pacs.007') then 'pacs.007'::text    when ntl.process_name::text in ('Receive Pacs004','Place Pacs004') then 'pacs.004'::text   end as type,   case    when ((ntl.process_name = 'Place Pacs008'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('OP_AC_REV_POSTING_FAILURE', 'OP_AC_RET_POSTING_FAILURE', 'OP_P2P_REV_POSTING_FAILURE' , 'OP_P2B_FUND_UNFR_FAILURE', 'OP_P2B_REV_POSTING_FAILURE')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)    or (ntl.process_name = 'Receive Pacs004'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('OR_P2P_POSTING_FAILURE', 'OR_P2B_POSTING_FAILURE')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)    or (ntl.process_name = 'Place Pacs.007'    and nt.status in ('OP_REVERSAL_REQ_REPAIR')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)) then 'Pending (Maker)'    when ((ntl.process_name = 'Place Pacs008'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('OP_AC_REV_POSTING_RETRY', 'OP_AC_RET_POSTING_RETRY', 'OP_P2P_REV_POSTING_RETRY', 'OP_P2B_FUND_UNFR_RETRY', 'OP_P2B_REV_POSTING_RETRY')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)    or (ntl.process_name = 'Receive Pacs004'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('OR_P2P_POSTING_RETRY', 'OR_P2B_POSTING_RETRY')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)    or (ntl.process_name = 'Place Pacs.007'    and nt.status in ('OP_REVERSAL_REQ_INITIATED')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)) then 'Pending (Checker)'    when ((ntl.process_name = 'Place Pacs008'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('OP_AC_REV_POSTING_FAILURE', 'OP_AC_RET_POSTING_FAILURE', 'OP_P2P_REV_POSTING_FAILURE' , 'OP_P2B_FUND_UNFR_FAILURE', 'OP_P2B_REV_POSTING_FAILURE', 'OP_AC_REV_POSTING_RETRY', 'OP_AC_RET_POSTING_RETRY', 'OP_P2P_REV_POSTING_RETRY', 'OP_P2B_FUND_UNFR_RETRY', 'OP_P2B_REV_POSTING_RETRY')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)    or (ntl.process_name = 'Receive Pacs004'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('OR_P2P_POSTING_FAILURE', 'OR_P2B_POSTING_FAILURE', 'OR_P2P_POSTING_RETRY', 'OR_P2B_POSTING_RETRY')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)    or (ntl.process_name = 'Place Pacs.007'    and nt.status in ('OP_REVERSAL_REQ_REPAIR', 'OP_REVERSAL_REQ_INITIATED')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)) then 'Pending (T-1)'    else 'Others'   end as Pending_Detais_OP,   case    when (ntl.process_name = 'Receive Pacs008'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('IP_RCT_RR_POSTING_FAILURE', 'IP_RCT_PC_T24_POSTING_FAILURE', 'IP_RCT_CC_T24_POSTING_FAILURE')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date) then 'Pending (Maker)'    when (ntl.process_name = 'Place Pacs004'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('IP_RCT_RETURN_POSTING_FAILURE')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date) then 'Pending (Maker)'    when (ntl.process_name = 'Receive Pacs.007'    and nt.status in ('IP_RCT_REVERSAL_REQ_RECEIVED', 'IP_RCT_REVERSAL_VLD_FAILED')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date) then 'Pending (Maker)'    when ((ntl.process_name = 'Receive Pacs008'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('IP_RCT_RR_POSTING_RETRY', 'IP_RCT_PC_T24_POSTING_RETRY', 'IP_RCT_CC_T24_POSTING_RETRY', 'IP_RCT_POSTING_SUSPICIOUS', 'IP_RCT_PC_POSTING_SUSPICIOUS')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)    or (ntl.process_name = 'Place Pacs004'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('IP_RCT_RETURN_POSTING_RETRY', 'IP_RCT_RR_POSTING_SUSPICIOUS')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)    or (ntl.process_name = 'Receive Pacs.007'    and nt.status in ('IP_RCT_REV_REQ_REJECTED', 'IP_RCT_RR_RETURN_READY')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)) then 'Pending (Checker)'    when ((ntl.process_name = 'Receive Pacs008'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('IP_RCT_RR_POSTING_FAILURE', 'IP_RCT_PC_T24_POSTING_FAILURE', 'IP_RCT_CC_T24_POSTING_FAILURE' , 'IP_RCT_RR_POSTING_RETRY', 'IP_RCT_PC_T24_POSTING_RETRY', 'IP_RCT_CC_T24_POSTING_RETRY', 'IP_RCT_POSTING_SUSPICIOUS', 'IP_RCT_PC_POSTING_SUSPICIOUS')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)    or (ntl.process_name = 'Place Pacs004'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('IP_RCT_RETURN_POSTING_FAILURE', 'IP_RCT_RETURN_POSTING_RETRY', 'IP_RCT_RR_POSTING_SUSPICIOUS')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)    or (ntl.process_name = 'Receive Pacs.007'    and nt.status in ('IP_RCT_REVERSAL_REQ_RECEIVED', 'IP_RCT_REVERSAL_VLD_FAILED', 'IP_RCT_REV_REQ_REJECTED', 'IP_RCT_RR_RETURN_READY')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)) then 'Pending (T-1)'    else 'Others'   end as Pending_Detais_IP,    CASE                     WHEN NT.department_code::text = ''::text OR NT.department_code IS NULL THEN 'DEFAULT'::character varying                     ELSE NT.department_code                 END AS department_code,   NT.TENANT_ID,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NT.STATUS,   NT.PROCESSING_SYSTEM,   NT.PROCESS_STATUS,   NT.DBTR_ACCT_NAME,   NT.DBTR_PHONE_NO,   NT.DBTR_EMAIL_ID,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN,   NT.DBTR_CUST_TYPE,   NT.DBTR_PRVT_ID,   NT.DBTR_OTHER_ISSUER,   NT.CDTR_ACCT_NAME,   NT.CDTR_PHONE_NO,   NT.CDTR_EMAIL_ID,   NT.CDTR_DOCUMENT_ID,   NT.DR_SORT_CODE,   NT.CR_SORT_CODE,   NT.CATEGORY_PURPOSE,   NT.CATEGORY_PURPOSE_PRTY,   NT.CR_ACCT_IDENTIFICATION,   NT.BASE_CURRENCY,   NT.BASE_AMOUNT,   NT.HDR_TOTAL_RECORDS,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM,   NT.CHARGE_BEARER,   NT.REMITTANCE_INFO,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID,   NT.CHANNEL_REFNO,   NT.CHANNEL_USERID,   NT.CHANNEL_PRODUCT,   NT.CHANNEL_SUB_PRODUCT,   NT.CHANNEL_TRAN_CODE,   NT.ISSUER_TYPE_CODE,   NT.CBS_REF_NO,   NT.CBS_POSTING_FLAG,   NT.PROCESS_TYPE,   NT.PROCESS_GROUP  from   NPSS_TRANSACTIONS NT  inner join npss_trn_process_log ntl on   ntl.uetr = nt.uetr) V $WHERE order by  NPSST_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Home Dashboard Tran MQ CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PENDING_DETAIS_OP","binding_name":"PENDING_DETAIS_OP","binding_value":"","source_name":"PENDING_DETAIS","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"PROCESS_TYPE","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TYPE","binding_name":"TYPE","binding_value":"","source_name":"TYPE","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Card Number","target_column":"cr_acct_identification_mask","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "nav ui trg for hide tran list"
	nav_ui_trg_for_hide_tran_list__he_for_trn_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="nav_ui_trg_for_hide_tran_list"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1679032159999"
		let event_params={"caller_name":"nav_ui_trg_for_hide_tran_list__he_for_trn_list","event_desc":"HE For TRN List","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"nav_ui_trg_for_hide_tran_list","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "nav ui trg for hide tran list"
	nav_ui_trg_for_hide_tran_list__he_for_view_message_log_from_trg() { 
		let Dest_Is_ctrl=true
		
		let source_id="nav_ui_trg_for_hide_tran_list"
		let destn_id="navigation_view_message_log"
		let parent_source_id=""
		let event_code="e_1679032197647"
		let event_params={"caller_name":"nav_ui_trg_for_hide_tran_list__he_for_view_message_log_from_trg","event_desc":"HE for View Message Log from TRG","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"nav_ui_trg_for_hide_tran_list","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "nav ui trg for hide tran list"
	nav_ui_trg_for_hide_tran_list__he_for_view_process_log_from_trg() { 
		let Dest_Is_ctrl=true
		
		let source_id="nav_ui_trg_for_hide_tran_list"
		let destn_id="navigation_view_process_log"
		let parent_source_id=""
		let event_code="e_1679032212502"
		let event_params={"caller_name":"nav_ui_trg_for_hide_tran_list__he_for_view_process_log_from_trg","event_desc":"HE for View Process Log from TRG","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"nav_ui_trg_for_hide_tran_list","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "nav ui trg for hide tran list"
	nav_ui_trg_for_hide_tran_list__he_for_view_tran_from_trg() { 
		let Dest_Is_ctrl=true
		
		let source_id="nav_ui_trg_for_hide_tran_list"
		let destn_id="navigation_view_tran"
		let parent_source_id=""
		let event_code="e_1679032232885"
		let event_params={"caller_name":"nav_ui_trg_for_hide_tran_list__he_for_view_tran_from_trg","event_desc":"HE for View Tran from TRG","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"nav_ui_trg_for_hide_tran_list","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation back"
	navigation_back__tbc_for_back_to_hist_list_trg() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_back"
		let destn_id="nav_ui_trg_for_hide_tran_list"
		let parent_source_id=""
		let event_code="e_1679032545435"
		let event_params={"caller_name":"navigation_back__tbc_for_back_to_hist_list_trg","event_desc":"TBC for Back to Hist List TRG","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_back","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation back"
	navigation_back__sp_for_df_profile_on_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1679032563370"
		let event_params={"caller_name":"navigation_back__sp_for_df_profile_on_back","event_desc":"SP for DF Profile on Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_back","raiseparam":{"profile_code":"BTL_1408_1598521214410"}}
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

	//Handler for SELECTION_CHANGED event of "inward"
	inward__brfq_ip_chart_to_tran_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="inward"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1679651226917"
		let event_params={"caller_name":"inward__brfq_ip_chart_to_tran_list","event_desc":"BRFQ IP chart to Tran list","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"inward","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"e_1679651226917":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_14","event_code":"E_1679651226917","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679651486228","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Home Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1678795579493","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1678795579892","date_format":false},{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1678795580083","date_format":true},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1678795580252","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1678795580443","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1678795580651","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1678795581011","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1678795648225","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1678795648809","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1678795649097","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1678795649417","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1678795649737","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1678795721503","date_format":false},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1678795721671","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1678795721847","date_format":false},{"column_name":"cr_acct_identification_mask","alias_name":"","mq_id":"MQ_1678795722007","date_format":false},{"column_name":"dr_acct_identification_mask","alias_name":"","mq_id":"MQ_1678800278062","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  Pending_Detais_OP,  Pending_Detais_IP,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification_mask,  Fn_card_decrypt_and_mask_rpt(DBTR_ACCT_NO) as dr_acct_identification_mask,  type,  CR_ACCT_IDENTIFICATION,  UETR,  VALUE_DATE,  ACCP_DATE_TIME,  CREATED_DATE,  DATEMI,  EXHF_ID,  CDTR_IBAN,  TENANT_ID,  TRAN_REF_ID,  DEPARTMENT_CODE,  PAYMENT_ENDTOEND_ID,  CLRSYSREF,  CDTR_ACCT_NO,  DBTR_ACCT_NO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  STATUS,  PROCESSING_SYSTEM,  PROCESS_STATUS,  DBTR_ACCT_NAME,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  DBTR_CUST_TYPE,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  CDTR_ACCT_NAME,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  DR_SORT_CODE,  CR_SORT_CODE,  CATEGORY_PURPOSE,  CATEGORY_PURPOSE_PRTY,  BASE_CURRENCY,  BASE_AMOUNT,  HDR_TOTAL_RECORDS,  HDR_TOTAL_AMOUNT,  HDR_CLEARING_SYSTEM,  CHARGE_BEARER,  REMITTANCE_INFO,  ACCOUNT_CURRENCY,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  ISSUER_TYPE_CODE,  CBS_REF_NO,  CBS_POSTING_FLAG,  PROCESS_TYPE,  PROCESS_GROUP from  (  select distinct (ntl.process_name),   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   case    when ntl.process_name::text in ('Place Pacs008', 'PACS.008','Receive Pacs008') then 'pacs.008'::text    when ntl.process_name::text in ('Place Pacs.007', 'PACS.007','Receive Pacs.007') then 'pacs.007'::text    when ntl.process_name::text in ('Receive Pacs004','Place Pacs004') then 'pacs.004'::text   end as type,   case    when ((ntl.process_name = 'Place Pacs008'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('OP_AC_REV_POSTING_FAILURE', 'OP_AC_RET_POSTING_FAILURE', 'OP_P2P_REV_POSTING_FAILURE' , 'OP_P2B_FUND_UNFR_FAILURE', 'OP_P2B_REV_POSTING_FAILURE')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)    or (ntl.process_name = 'Receive Pacs004'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('OR_P2P_POSTING_FAILURE', 'OR_P2B_POSTING_FAILURE')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)    or (ntl.process_name = 'Place Pacs.007'    and nt.status in ('OP_REVERSAL_REQ_REPAIR')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)) then 'Pending (Maker)'    when ((ntl.process_name = 'Place Pacs008'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('OP_AC_REV_POSTING_RETRY', 'OP_AC_RET_POSTING_RETRY', 'OP_P2P_REV_POSTING_RETRY', 'OP_P2B_FUND_UNFR_RETRY', 'OP_P2B_REV_POSTING_RETRY')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)    or (ntl.process_name = 'Receive Pacs004'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('OR_P2P_POSTING_RETRY', 'OR_P2B_POSTING_RETRY')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)    or (ntl.process_name = 'Place Pacs.007'    and nt.status in ('OP_REVERSAL_REQ_INITIATED')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)) then 'Pending (Checker)'    when ((ntl.process_name = 'Place Pacs008'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('OP_AC_REV_POSTING_FAILURE', 'OP_AC_RET_POSTING_FAILURE', 'OP_P2P_REV_POSTING_FAILURE' , 'OP_P2B_FUND_UNFR_FAILURE', 'OP_P2B_REV_POSTING_FAILURE', 'OP_AC_REV_POSTING_RETRY', 'OP_AC_RET_POSTING_RETRY', 'OP_P2P_REV_POSTING_RETRY', 'OP_P2B_FUND_UNFR_RETRY', 'OP_P2B_REV_POSTING_RETRY')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)    or (ntl.process_name = 'Receive Pacs004'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('OR_P2P_POSTING_FAILURE', 'OR_P2B_POSTING_FAILURE', 'OR_P2P_POSTING_RETRY', 'OR_P2B_POSTING_RETRY')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)    or (ntl.process_name = 'Place Pacs.007'    and nt.status in ('OP_REVERSAL_REQ_REPAIR', 'OP_REVERSAL_REQ_INITIATED')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)) then 'Pending (T-1)'    else 'Others'   end as Pending_Detais_OP,   case    when (ntl.process_name = 'Receive Pacs008'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('IP_RCT_RR_POSTING_FAILURE', 'IP_RCT_PC_T24_POSTING_FAILURE', 'IP_RCT_CC_T24_POSTING_FAILURE')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date) then 'Pending (Maker)'    when (ntl.process_name = 'Place Pacs004'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('IP_RCT_RETURN_POSTING_FAILURE')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date) then 'Pending (Maker)'    when (ntl.process_name = 'Receive Pacs.007'    and nt.status in ('IP_RCT_REVERSAL_REQ_RECEIVED', 'IP_RCT_REVERSAL_VLD_FAILED')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date) then 'Pending (Maker)'    when ((ntl.process_name = 'Receive Pacs008'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('IP_RCT_RR_POSTING_RETRY', 'IP_RCT_PC_T24_POSTING_RETRY', 'IP_RCT_CC_T24_POSTING_RETRY', 'IP_RCT_POSTING_SUSPICIOUS', 'IP_RCT_PC_POSTING_SUSPICIOUS')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)    or (ntl.process_name = 'Place Pacs004'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('IP_RCT_RETURN_POSTING_RETRY', 'IP_RCT_RR_POSTING_SUSPICIOUS')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)    or (ntl.process_name = 'Receive Pacs.007'    and nt.status in ('IP_RCT_REV_REQ_REJECTED', 'IP_RCT_RR_RETURN_READY')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = current_date)) then 'Pending (Checker)'    when ((ntl.process_name = 'Receive Pacs008'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('IP_RCT_RR_POSTING_FAILURE', 'IP_RCT_PC_T24_POSTING_FAILURE', 'IP_RCT_CC_T24_POSTING_FAILURE' , 'IP_RCT_RR_POSTING_RETRY', 'IP_RCT_PC_T24_POSTING_RETRY', 'IP_RCT_CC_T24_POSTING_RETRY', 'IP_RCT_POSTING_SUSPICIOUS', 'IP_RCT_PC_POSTING_SUSPICIOUS')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)    or (ntl.process_name = 'Place Pacs004'    and nt.process_status = 'RCTExceptionFailure'    and nt.status in ('IP_RCT_RETURN_POSTING_FAILURE', 'IP_RCT_RETURN_POSTING_RETRY', 'IP_RCT_RR_POSTING_SUSPICIOUS')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)    or (ntl.process_name = 'Receive Pacs.007'    and nt.status in ('IP_RCT_REVERSAL_REQ_RECEIVED', 'IP_RCT_REVERSAL_VLD_FAILED', 'IP_RCT_REV_REQ_REJECTED', 'IP_RCT_RR_RETURN_READY')    and to_date(to_char(nt.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < current_date)) then 'Pending (T-1)'    else 'Others'   end as Pending_Detais_IP,    CASE                     WHEN NT.department_code::text = ''::text OR NT.department_code IS NULL THEN 'DEFAULT'::character varying                     ELSE NT.department_code                 END AS department_code,   NT.TENANT_ID,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NT.STATUS,   NT.PROCESSING_SYSTEM,   NT.PROCESS_STATUS,   NT.DBTR_ACCT_NAME,   NT.DBTR_PHONE_NO,   NT.DBTR_EMAIL_ID,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN,   NT.DBTR_CUST_TYPE,   NT.DBTR_PRVT_ID,   NT.DBTR_OTHER_ISSUER,   NT.CDTR_ACCT_NAME,   NT.CDTR_PHONE_NO,   NT.CDTR_EMAIL_ID,   NT.CDTR_DOCUMENT_ID,   NT.DR_SORT_CODE,   NT.CR_SORT_CODE,   NT.CATEGORY_PURPOSE,   NT.CATEGORY_PURPOSE_PRTY,   NT.CR_ACCT_IDENTIFICATION,   NT.BASE_CURRENCY,   NT.BASE_AMOUNT,   NT.HDR_TOTAL_RECORDS,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM,   NT.CHARGE_BEARER,   NT.REMITTANCE_INFO,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID,   NT.CHANNEL_REFNO,   NT.CHANNEL_USERID,   NT.CHANNEL_PRODUCT,   NT.CHANNEL_SUB_PRODUCT,   NT.CHANNEL_TRAN_CODE,   NT.ISSUER_TYPE_CODE,   NT.CBS_REF_NO,   NT.CBS_POSTING_FLAG,   NT.PROCESS_TYPE,   NT.PROCESS_GROUP  from   NPSS_TRANSACTIONS NT  inner join npss_trn_process_log ntl on   ntl.uetr = nt.uetr) V $WHERE order by  NPSST_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Home Dashboard Tran MQ CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PENDING_DETAIS_IP","binding_name":"PENDING_DETAIS_IP","binding_value":"","source_name":"PENDING_DETAIS","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"PROCESS_TYPE","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TYPE","binding_name":"TYPE","binding_value":"","source_name":"TYPE","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Card Number","target_column":"cr_acct_identification_mask","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "inward"
	inward__se_for_tran_list_from_inward() { 
		let Dest_Is_ctrl=true
		
		let source_id="inward"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1679652187324"
		let event_params={"caller_name":"inward__se_for_tran_list_from_inward","event_desc":"SE for Tran list from Inward","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"inward","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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
