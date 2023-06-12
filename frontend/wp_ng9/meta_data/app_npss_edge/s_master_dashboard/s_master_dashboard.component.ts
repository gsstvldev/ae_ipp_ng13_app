/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 30098 
Modified By     : Admin 
Modified Date   : 2023-Jun-12 4:44 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_master_dashboard
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {npss_cs_dashboard_titleService} from '../../../custom_widget/npss_cs_dashboard_title/npss_cs_dashboard_title.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'

@Component({
	selector: 's_master_dashboard',
	templateUrl: './s_master_dashboard.component.html',
	styleUrls: ['./s_master_dashboard.component.css'],
	providers:[npss_cs_dashboard_titleService,torus_cs_show_hideService]
})
    
// Start of class 
export class s_master_dashboardComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_master_dashboard"
	wftpa_id : string = "WFT_NPSS_P_1304_1679488521228_0"
	cg_code : string = "CG_1304_1679483647491"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID","dtt_1304_1670492310194":"NPSSASP_ID","dtt_1304_1670589169341":"NPSSCAPL_ID","dtt_1304_1672928670076":"NPSSNL_ID","dtt_1304_1674198360280":"NPSSE_ID","dtt_1304_1681973868376":"NPSSPSR_ID","dtt_1304_1681974712398":"NPSSSBR_ID","dtt_1304_1681974988885":"NPSSBFSR_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_default_profile"
	uicgc_1 : string = "search"
	uicgc_2 : string = "outward_list"
	uicgc_4 : string = "navigation"
	uicgc_12 : string = "inward_list"
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
	uicgc_34 : string = "nav_ui"
	uicgc_38 : string = "inward"
	uicgc_39 : string = "outward"
	key_events : any = {}
	btl_1304_1678973592738 : string = "p_transaction_list_layout"
	btl_1304_1678876184454 : string = "p_process_log_history_list_layout"
	btl_1304_1678876095161 : string = "p_view_tran_detail_layout"
	btl_1304_1678803372109 : string = "p_view_req_and_res_profile"
	btl_1304_1678803301898 : string = "p_view_message_data_layout"
	btl_1304_1678803243440 : string = "p_message_list_layout"
	btl_1408_1598521300065 : string = "p_search_layout"
	btl_1408_1598521214410 : string = "p_default_profile"
	forms : any = ["uicgc_22","uicgc_23","uicgc_1","uicgc_24","uicgc_4","uicgc_29","uicgc_28","uicgc_25","uicgc_19","uicgc_21","uicgc_34"]
	p_search_layout__spap_for_search_trg_showpopup : boolean = false
	p_search_layout__spap_for_search_btn_click_showpopup : boolean = false
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
	nav_ui : any = {}
	nav_ui_search : any = {}
	nav_ui_search_trg : any = {}
	nav_ui_trg_for_hide_tran_list : any = {}
	inward : any = {}
	outward : any = {}


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
		this.search.views = {"first":"DTT_1304_1665901217208","is_tab_mode":"N","dtt_1304_1665901217208":{"0":[{"dttv_id":"NPSS Master Dashboard SRCH","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Transactions"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_master_dashboard_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_master_dashboard_srch"
		
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
		this.outward_list.datasource = {}
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
		this.inward_list.datasource = {}
		this.inward_list.context_menu = []
		this.inward_list.views = {}
		this.inward_list.onChangecomponent = new EventEmitter<any>()
		this.inward_list.show = true
		this.inward_list.dynamic_param = {}
	
		// Component level properties - "Transaction List" 
		this.transaction_list.uictrl_code = "datatable"
		this.transaction_list.uicgc_desc = "Transaction List"
		this.transaction_list.uicgc_code = "uicgc_14"
		this.transaction_list.params = {"advance_dynamic_search":"N","need_search":"N","need_pag_datatable":"Y"}
		this.transaction_list.datasource = {"e_1679496674604":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_14","event_code":"E_1679496674604","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679507302462","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS IP Master Dashboard Tran","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"department_code","alias_name":"","mq_id":"MQ_1679507346074","date_format":false},{"column_name":"uetr","alias_name":"","mq_id":"MQ_1679507346501","date_format":false},{"column_name":"process_type","alias_name":"","mq_id":"MQ_1679507346684","date_format":false},{"column_name":"start_date","alias_name":"","mq_id":"MQ_1679507346843","date_format":false},{"column_name":"end_date","alias_name":"","mq_id":"MQ_1679507347021","date_format":false},{"column_name":"intrbk_sttlm_cur","alias_name":"","mq_id":"MQ_1679507347180","date_format":false},{"column_name":"intrbk_sttlm_amnt","alias_name":"","mq_id":"MQ_1679507347341","date_format":false,"currency_format":true},{"column_name":"cdtr_iban","alias_name":"","mq_id":"MQ_1679507395510","date_format":false},{"column_name":"cr_acct_identification","alias_name":"","mq_id":"MQ_1679507395684","date_format":false},{"column_name":"dbtr_iban","alias_name":"","mq_id":"MQ_1679507407452","date_format":false}],"joins":[]},"eq_text":"select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when nt.process_status in ('RCTInProcess', 'RCTReturned', 'RCTCompleted', 'RCTExceptionFailure', 'RCTExceptionSuspicious', 'BCTInProcess', 'BCTReturned', 'BCTCompleted', 'BCTExceptionFailure', 'BCTExceptionSuspicious') then 'Payment Status'    else 'OTHER'   end as RESPONSE_DETAIL  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr  inner join (   select    plr.npsstpl_id,    plr.uetr,    plr.created_date,    plr.row_num   from    (    select     a.npsstpl_id,     a.uetr,     a.created_date,     row_number() over( partition by a.uetr    order by     a.npsstpl_id desc) as row_num    from     npss_trn_process_log a ) plr   where    plr.row_num = 1) pl on   pl.uetr = nt.uetr  inner join (   select    plr1.npsstpl_id,    plr1.uetr,    plr1.created_date,    plr1.row_num   from    (    select     a1.npsstpl_id,     a1.uetr,     a1.created_date,     row_number() over( partition by a1.uetr    order by     a1.npsstpl_id asc) as row_num    from     npss_trn_process_log a1 ) plr1   where    plr1.row_num = 1) pl1 on   pl1.uetr = nt.uetr  where   NT.process_type = 'IP') v where  RESPONSE_DETAIL <> 'OTHER' $AND union select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when ntpl.process_name = 'Receive pacs002' then 'Final pacs002 status received'    else 'OTHER'   end as RESPONSE_DETAIL  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr  inner join (   select    plr.npsstpl_id,    plr.uetr,    plr.created_date,    plr.row_num   from    (    select     a.npsstpl_id,     a.uetr,     a.created_date,     row_number() over( partition by a.uetr    order by     a.npsstpl_id desc) as row_num    from     npss_trn_process_log a ) plr   where    plr.row_num = 1) pl on   pl.uetr = nt.uetr  inner join (   select    plr1.npsstpl_id,    plr1.uetr,    plr1.created_date,    plr1.row_num   from    (    select     a1.npsstpl_id,     a1.uetr,     a1.created_date,     row_number() over( partition by a1.uetr    order by     a1.npsstpl_id asc) as row_num    from     npss_trn_process_log a1 ) plr1   where    plr1.row_num = 1) pl1 on   pl1.uetr = nt.uetr  where   NT.process_type = 'IP') v where  RESPONSE_DETAIL <> 'OTHER' $AND union select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when ntpl.status in (UPPER('IP_RCT_POSTING_SUCCESS')) then 'Posting Completed to T24'    else 'OTHER'   end as RESPONSE_DETAIL  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr  inner join (   select    plr.npsstpl_id,    plr.uetr,    plr.created_date,    plr.row_num   from    (    select     a.npsstpl_id,     a.uetr,     a.created_date,     row_number() over( partition by a.uetr    order by     a.npsstpl_id desc) as row_num    from     npss_trn_process_log a ) plr   where    plr.row_num = 1) pl on   pl.uetr = nt.uetr  inner join (   select    plr1.npsstpl_id,    plr1.uetr,    plr1.created_date,    plr1.row_num   from    (    select     a1.npsstpl_id,     a1.uetr,     a1.created_date,     row_number() over( partition by a1.uetr    order by     a1.npsstpl_id asc) as row_num    from     npss_trn_process_log a1 ) plr1   where    plr1.row_num = 1) pl1 on   pl1.uetr = nt.uetr  where   NT.process_type = 'IP') v where  RESPONSE_DETAIL <> 'OTHER' $AND union select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when ntpl.status in (UPPER('IP_RCT_PC_POSTING_SUCCESS')) then 'Posting Completed to Elpaso'    else 'OTHER'   end as RESPONSE_DETAIL  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr  inner join (   select    plr.npsstpl_id,    plr.uetr,    plr.created_date,    plr.row_num   from    (    select     a.npsstpl_id,     a.uetr,     a.created_date,     row_number() over( partition by a.uetr    order by     a.npsstpl_id desc) as row_num    from     npss_trn_process_log a ) plr   where    plr.row_num = 1) pl on   pl.uetr = nt.uetr  inner join (   select    plr1.npsstpl_id,    plr1.uetr,    plr1.created_date,    plr1.row_num   from    (    select     a1.npsstpl_id,     a1.uetr,     a1.created_date,     row_number() over( partition by a1.uetr    order by     a1.npsstpl_id asc) as row_num    from     npss_trn_process_log a1 ) plr1   where    plr1.row_num = 1) pl1 on   pl1.uetr = nt.uetr  where   NT.process_type = 'IP') v where  RESPONSE_DETAIL <> 'OTHER' $AND union select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when ntpl.status in (UPPER('IP_RCT_CC_POSTING_SUCCESS')) then 'Posting Completed to FD'    else 'OTHER'   end as RESPONSE_DETAIL  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr  inner join (   select    plr.npsstpl_id,    plr.uetr,    plr.created_date,    plr.row_num   from    (    select     a.npsstpl_id,     a.uetr,     a.created_date,     row_number() over( partition by a.uetr    order by     a.npsstpl_id desc) as row_num    from     npss_trn_process_log a ) plr   where    plr.row_num = 1) pl on   pl.uetr = nt.uetr  inner join (   select    plr1.npsstpl_id,    plr1.uetr,    plr1.created_date,    plr1.row_num   from    (    select     a1.npsstpl_id,     a1.uetr,     a1.created_date,     row_number() over( partition by a1.uetr    order by     a1.npsstpl_id asc) as row_num    from     npss_trn_process_log a1 ) plr1   where    plr1.row_num = 1) pl1 on   pl1.uetr = nt.uetr  where   NT.process_type = 'IP') v where  RESPONSE_DETAIL <> 'OTHER' $AND union select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when NTPL.process_name = 'Place pacs002' then 'Response sent to CB'    else 'OTHER'   end as RESPONSE_DETAIL  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr  inner join (   select    plr.npsstpl_id,    plr.uetr,    plr.created_date,    plr.row_num   from    (    select     a.npsstpl_id,     a.uetr,     a.created_date,     row_number() over( partition by a.uetr    order by     a.npsstpl_id desc) as row_num    from     npss_trn_process_log a ) plr   where    plr.row_num = 1) pl on   pl.uetr = nt.uetr  inner join (   select    plr1.npsstpl_id,    plr1.uetr,    plr1.created_date,    plr1.row_num   from    (    select     a1.npsstpl_id,     a1.uetr,     a1.created_date,     row_number() over( partition by a1.uetr    order by     a1.npsstpl_id asc) as row_num    from     npss_trn_process_log a1 ) plr1   where    plr1.row_num = 1) pl1 on   pl1.uetr = nt.uetr  where   NT.process_type = 'IP') v where  RESPONSE_DETAIL <> 'OTHER' $AND union select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when ntpl.status in (UPPER('IP_RCT_PC_POSTING_FAILURE'), UPPER('IP_RCT_POSTING_SUSPICIOUS'), UPPER('IP_RCT_POSTING_FAILURE'),('IP_RCT_CC_POSTING_FAILURE'), UPPER('IP_RCT_PC_POSTING_SUSPICIOUS'), UPPER('IP_RCT_CC_POSTING_SUSPICIOUS')) then 'Repair Queue'    else 'OTHER'   end as RESPONSE_DETAIL  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr  inner join (   select    plr.npsstpl_id,    plr.uetr,    plr.created_date,    plr.row_num   from    (    select     a.npsstpl_id,     a.uetr,     a.created_date,     row_number() over( partition by a.uetr    order by     a.npsstpl_id desc) as row_num    from     npss_trn_process_log a ) plr   where    plr.row_num = 1) pl on   pl.uetr = nt.uetr  inner join (   select    plr1.npsstpl_id,    plr1.uetr,    plr1.created_date,    plr1.row_num   from    (    select     a1.npsstpl_id,     a1.uetr,     a1.created_date,     row_number() over( partition by a1.uetr    order by     a1.npsstpl_id asc) as row_num    from     npss_trn_process_log a1 ) plr1   where    plr1.row_num = 1) pl1 on   pl1.uetr = nt.uetr  where   NT.process_type = 'IP') v where  RESPONSE_DETAIL <> 'OTHER' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS IP Master Dashboard Tran CCD","filter":[{"filter_name":"CREATEDDATE","binding_name":"CREATEDDATE","binding_value":"","source_name":"CREATEDDATE","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"DATE","conj_operator":"","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"PROCESS_TYPE","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSGROUP","binding_name":"PROCESSGROUP","binding_value":"","source_name":"PROCESSGROUP","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"RESPONSE_DETAIL","binding_name":"RESPONSE_DETAIL","binding_value":"","source_name":"RESPONSE_DETAIL","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Creation Date & Time","target_column":"start_date","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Tran Completion Date & Time","target_column":"end_date","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"intrbk_sttlm_cur","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"intrbk_sttlm_amnt","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"cdtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Card Number","target_column":"cr_acct_identification","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"dbtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}},"e_1679496970198":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_14","event_code":"E_1679496970198","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679498847709","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Master Dashboard Tran","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"start_date","alias_name":"","mq_id":"MQ_1679498180562","date_format":false},{"column_name":"end_date","alias_name":"","mq_id":"MQ_1679498181122","date_format":false},{"column_name":"department_code","alias_name":"","mq_id":"MQ_1679498181282","date_format":false},{"column_name":"RESPONSE_DETAIL","alias_name":"","mq_id":"MQ_1679498181442","date_format":false},{"column_name":"uetr","alias_name":"","mq_id":"MQ_1679498181586","date_format":false},{"column_name":"process_group","alias_name":"","mq_id":"MQ_1679498181730","date_format":false},{"column_name":"processgroup","alias_name":"","mq_id":"MQ_1679498257674","date_format":false},{"column_name":"dbtr_iban","alias_name":"","mq_id":"MQ_1679498573340","date_format":false},{"column_name":"cr_acct_identification","alias_name":"","mq_id":"MQ_1679498573525","date_format":false},{"column_name":"cdtr_iban","alias_name":"","mq_id":"MQ_1679498573708","date_format":false},{"column_name":"intrbk_sttlm_amnt","alias_name":"","mq_id":"MQ_1679498573883","date_format":false,"currency_format":true},{"column_name":"intrbk_sttlm_cur","alias_name":"","mq_id":"MQ_1679498610989","date_format":false}],"joins":[]},"eq_text":"select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when NT.process_type in ('OP') then 'Total'    else 'OTHER'   end as RESPONSE_DETAIL  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr  inner join (   select    plr.npsstpl_id,    plr.uetr,    plr.created_date,    plr.row_num   from    (    select     a.npsstpl_id,     a.uetr,     a.created_date,     row_number() over( partition by a.uetr    order by     a.npsstpl_id desc) as row_num    from     npss_trn_process_log a ) plr   where    plr.row_num = 1) pl on   pl.uetr = nt.uetr  inner join (   select    plr1.npsstpl_id,    plr1.uetr,    plr1.created_date,    plr1.row_num   from    (    select     a1.npsstpl_id,     a1.uetr,     a1.created_date,     row_number() over( partition by a1.uetr    order by     a1.npsstpl_id asc) as row_num    from     npss_trn_process_log a1 ) plr1   where    plr1.row_num = 1) pl1 on   pl1.uetr = nt.uetr  where   NT.process_type = 'OP') v where  RESPONSE_DETAIL <> 'OTHER' $AND union select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when ntpl.response_code = UPPER('RJCT')     and ntpl.cbuae_return_code is null then 'NAK response received from CB'     else 'OTHER'    end as RESPONSE_DETAIL   from    npss_transactions nt   inner join npss_trn_process_log ntpl on    ntpl.uetr = nt.uetr   inner join (    select     plr.npsstpl_id,     plr.uetr,     plr.created_date,     plr.row_num    from     (     select      a.npsstpl_id,      a.uetr,      a.created_date,      row_number() over( partition by a.uetr     order by      a.npsstpl_id desc) as row_num     from      npss_trn_process_log a ) plr    where     plr.row_num = 1) pl on    pl.uetr = nt.uetr   inner join (    select     plr1.npsstpl_id,     plr1.uetr,     plr1.created_date,     plr1.row_num    from     (     select      a1.npsstpl_id,      a1.uetr,      a1.created_date,      row_number() over( partition by a1.uetr     order by      a1.npsstpl_id asc) as row_num     from      npss_trn_process_log a1 ) plr1    where     plr1.row_num = 1) pl1 on    pl1.uetr = nt.uetr   where    NT.process_type = 'OP') v where  RESPONSE_DETAIL <> 'OTHER' $AND union select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when ntpl.response_code = UPPER('ACCP')     and ntpl.cbuae_return_code is null then 'ACK response received from CB'     else 'OTHER'    end as RESPONSE_DETAIL   from    npss_transactions nt   inner join npss_trn_process_log ntpl on    ntpl.uetr = nt.uetr   inner join (    select     plr.npsstpl_id,     plr.uetr,     plr.created_date,     plr.row_num    from     (     select      a.npsstpl_id,      a.uetr,      a.created_date,      row_number() over( partition by a.uetr     order by      a.npsstpl_id desc) as row_num     from      npss_trn_process_log a ) plr    where     plr.row_num = 1) pl on    pl.uetr = nt.uetr   inner join (    select     plr1.npsstpl_id,     plr1.uetr,     plr1.created_date,     plr1.row_num    from     (     select      a1.npsstpl_id,      a1.uetr,      a1.created_date,      row_number() over( partition by a1.uetr     order by      a1.npsstpl_id asc) as row_num     from      npss_trn_process_log a1 ) plr1    where     plr1.row_num = 1) pl1 on    pl1.uetr = nt.uetr   where    NT.process_type = 'OP') v where  RESPONSE_DETAIL <> 'OTHER' $AND union select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when ntpl.response_code = UPPER('ACCP')     and ntpl.cbuae_return_code is not null     and ntpl.process_name not in ('Receive pacs004') then 'Accepted by Bene Bank'     else 'OTHER'    end as RESPONSE_DETAIL   from    npss_transactions nt   inner join npss_trn_process_log ntpl on    ntpl.uetr = nt.uetr   inner join (    select     plr.npsstpl_id,     plr.uetr,     plr.created_date,     plr.row_num    from     (     select      a.npsstpl_id,      a.uetr,      a.created_date,      row_number() over( partition by a.uetr     order by      a.npsstpl_id desc) as row_num     from      npss_trn_process_log a ) plr    where     plr.row_num = 1) pl on    pl.uetr = nt.uetr   inner join (    select     plr1.npsstpl_id,     plr1.uetr,     plr1.created_date,     plr1.row_num    from     (     select      a1.npsstpl_id,      a1.uetr,      a1.created_date,      row_number() over( partition by a1.uetr     order by      a1.npsstpl_id asc) as row_num     from      npss_trn_process_log a1 ) plr1    where     plr1.row_num = 1) pl1 on    pl1.uetr = nt.uetr   where    NT.process_type = 'OP') v where  RESPONSE_DETAIL <> 'OTHER' $AND union select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification ,   dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when ntpl.response_code = UPPER('RJCT')     and ntpl.cbuae_return_code is not null then 'Rejected by Bene'     else 'OTHER'    end as RESPONSE_DETAIL   from    npss_transactions nt   inner join npss_trn_process_log ntpl on    ntpl.uetr = nt.uetr   inner join (    select     plr.npsstpl_id,     plr.uetr,     plr.created_date,     plr.row_num    from     (     select      a.npsstpl_id,      a.uetr,      a.created_date,      row_number() over( partition by a.uetr     order by      a.npsstpl_id desc) as row_num     from      npss_trn_process_log a ) plr    where     plr.row_num = 1) pl on    pl.uetr = nt.uetr   inner join (    select     plr1.npsstpl_id,     plr1.uetr,     plr1.created_date,     plr1.row_num    from     (     select      a1.npsstpl_id,      a1.uetr,      a1.created_date,      row_number() over( partition by a1.uetr     order by      a1.npsstpl_id asc) as row_num     from      npss_trn_process_log a1 ) plr1    where     plr1.row_num = 1) pl1 on    pl1.uetr = nt.uetr   where    NT.process_type = 'OP') v where  RESPONSE_DETAIL <> 'OTHER' $AND union select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when NT.process_status in ('RCTCompleted', 'RCTReturned')     and NTPL.process_name = 'Place Pacs008' then 'Send to CB'     else 'OTHER'    end as RESPONSE_DETAIL   from    npss_transactions nt   inner join npss_trn_process_log ntpl on    ntpl.uetr = nt.uetr   inner join (    select     plr.npsstpl_id,     plr.uetr,     plr.created_date,     plr.row_num    from     (     select      a.npsstpl_id,      a.uetr,      a.created_date,      row_number() over( partition by a.uetr     order by      a.npsstpl_id desc) as row_num     from      npss_trn_process_log a ) plr    where     plr.row_num = 1) pl on    pl.uetr = nt.uetr   inner join (    select     plr1.npsstpl_id,     plr1.uetr,     plr1.created_date,     plr1.row_num    from     (     select      a1.npsstpl_id,      a1.uetr,      a1.created_date,      row_number() over( partition by a1.uetr     order by      a1.npsstpl_id asc) as row_num     from      npss_trn_process_log a1 ) plr1    where     plr1.row_num = 1) pl1 on    pl1.uetr = nt.uetr   where    NT.process_type = 'OP') v where  RESPONSE_DETAIL <> 'OTHER' $AND union select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when ntpl.status in (UPPER('OP_P2P_POSTING_SUCCESS'), UPPER('OP_P2B_FUND_AUTHORIZED')) then 'Posting Completed'    when ntpl.status in (UPPER('OP_AC_STATUS_ACCEPTED'), UPPER('OP_P2P_STATUS_ACCEPTED'), UPPER('OP_P2B_STATUS_ACCEPTED')) then 'CB ACK'    when ntpl.status in (UPPER('OP_AC_REV_POSTING_SUCCESS'), UPPER('OP_AC_STATUS_REJECTED'), UPPER('OP_P2B_STATUS_REJECTED'), UPPER('OP_P2B_REV_POSTING_SUCCESS'), UPPER('OP_P2P_STATUS_REJECTED'), UPPER('OP_P2P_REV_POSTING_SUCCESS')) then 'CB NACK'    else 'OTHER'   end as RESPONSE_DETAIL  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr  inner join (   select    plr.npsstpl_id,    plr.uetr,    plr.created_date,    plr.row_num   from    (    select     a.npsstpl_id,     a.uetr,     a.created_date,     row_number() over( partition by a.uetr    order by     a.npsstpl_id desc) as row_num    from     npss_trn_process_log a ) plr   where    plr.row_num = 1) pl on   pl.uetr = nt.uetr  inner join (   select    plr1.npsstpl_id,    plr1.uetr,    plr1.created_date,    plr1.row_num   from    (    select     a1.npsstpl_id,     a1.uetr,     a1.created_date,     row_number() over( partition by a1.uetr    order by     a1.npsstpl_id asc) as row_num    from     npss_trn_process_log a1 ) plr1   where    plr1.row_num = 1) pl1 on   pl1.uetr = nt.uetr  where   NT.process_type = 'OP') v where  RESPONSE_DETAIL <> 'OTHER' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Master Dashboard Tran CCD","filter":[{"filter_name":"CREATEDDATE","binding_name":"CREATEDDATE","binding_value":"","source_name":"CREATEDDATE","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"DATE","conj_operator":"AND","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"PROCESS_TYPE","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSGROUP","binding_name":"PROCESSGROUP","binding_value":"","source_name":"PROCESSGROUP","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"RESPONSE_DETAIL","binding_name":"RESPONSE_DETAIL","binding_value":"","source_name":"RESPONSE_DETAIL","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Creation Date & Time","target_column":"start_date","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Tran Completion Date & Time","target_column":"end_date","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"intrbk_sttlm_cur","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"intrbk_sttlm_amnt","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"cdtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Card Number","target_column":"cr_acct_identification","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"dbtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		this.history_detail.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_15","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679488758700","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		this.message_detail.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_20","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679492509321","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1668573850306","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1668573852117","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1668573852786","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1668573853731","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1668573854459","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1668573869044","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1668573871186","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573874178","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573876315","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668573884586","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1668573900766","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1668573911947","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1668573917043","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1668573918291","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1668573918796","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1668573919355","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1668573919955","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1668573925605","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1668587107858","date_format":false}],"joins":[]},"eq_text":"select  NPSSTRRD_ID,  MSG_ID,  UETR,  PARENT_NPSSTRRD_REFNO,  NPSSTRRD_REFNO,  PROCESS_CODE,  PROCESS_DETAIL,  EXHF_ID,  PROCESS_NAME,  MESSAGE_DESC,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  STATUS,  PROCESS_STATUS,PROCESS_TYPE,  MESSAGE_DATA,  CREATEDDATEMILISEC,  DT_CODE,  DTT_CODE from  (  select   NPSSTRRD.NPSSTRRD_ID,   NPSSTRRD.MSG_ID,   NPSSTRRD.UETR,   NPSSTRRD.PARENT_NPSSTRRD_REFNO,   NPSSTRRD.NPSSTRRD_REFNO,   NPSSTRRD.MESSAGE_DATA,   NPSSTRRD.PROCESS_CODE,   NPSSTRRD.PROCESS_DETAIL,   NPSSTRRD.EXHF_ID,   NPSSTRRD.PROCESS_NAME,   NPSSTRRD.MESSAGE_DESC,   NPSSTRRD.CHANNEL_ID,   NPSSTRRD.CHANNEL_REFNO,   NPSSTRRD.CHANNEL_USERID,   NPSSTRRD.CHANNEL_PRODUCT,   NPSSTRRD.CHANNEL_SUB_PRODUCT,   NPSSTRRD.CHANNEL_TRAN_CODE,   NPSSTRRD.CREATED_BY,   NPSSTRRD.CREATED_BY_NAME,   NPSSTRRD.CREATED_DATE,   NPSSTRRD.DT_CODE,   NPSSTRRD.DT_DESCRIPTION,   NPSSTRRD.DTT_CODE,   NPSSTRRD.DTT_DESCRIPTION,   NPSSTRRD.MODIFIED_BY,   NPSSTRRD.MODIFIED_BY_NAME,   NPSSTRRD.MODIFIED_DATE,   NPSSTRRD.STATUS,   NPSSTRRD.PROCESS_STATUS,NT.PROCESS_TYPE,   NPSSTRRD.SYSTEM_ID,   NPSSTRRD.SYSTEM_NAME,   NPSSTRRD.TENANT_ID,   NPSSTRRD.APP_ID,   NPSSTRRD.VERSION_NO,   TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC  from   NPSS_TRN_REQ_RESP_DTLS NPSSTRRD  inner join NPSS_TRANSACTIONS NT on   NPSSTRRD.UETR = NT.UETR) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS REQ RES CCD","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"MI_LEVEL_PROCESS_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		this.view_dr_cr_details.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_26","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679492808309","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691797994","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1668772110535","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1669198452328","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669209185067","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1669209185410","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1669209185641","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669209840985","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669209847802","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669209934807","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1670656485225","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1673072381673","date_format":false},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1675409311721","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_card_decrypt_and_mask(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  fn_card_decrypt_and_mask(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   A.CR_ACCT_IDENTIFICATION,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Vertical Dr Cr CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Created Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Acceptance Date Time","target_column":"ACCP_DATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Sort Code","target_column":"CR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Identification","target_column":"CR_ACCT_IDENTIFICATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Sort Code","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Identification","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Private Identification","target_column":"DBTR_PRVT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Other Issuer","target_column":"DBTR_OTHER_ISSUER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		this.view_payment_details.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_27","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679492913259","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691797994","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1668772110535","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1669198452328","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669209185067","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1669209185410","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1669209185641","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669209840985","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669209847802","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669209934807","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1670656485225","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1673072381673","date_format":false},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1675409311721","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_card_decrypt_and_mask(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  fn_card_decrypt_and_mask(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   A.CR_ACCT_IDENTIFICATION,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Vertical Payment CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Tran Id","target_column":"NPSST_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Txn Value Date","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Batch Id","target_column":"EXHF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E reference id","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Category Purpose","target_column":"category_purpose","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Issuer Type Code","target_column":"issuer_type_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remittance Info","target_column":"REMITTANCE_INFO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		
		// "Search" Button of "Nav UI" component
		this.nav_ui_search.label_name = "Search"
		this.nav_ui_search.show = true
		this.nav_ui_search.disabled = false
		this.nav_ui_search.params = {"icon_only":false,"uicgcc_style":"fa fa-search"}
		this.nav_ui_search.dynamic_param = {}
		this.nav_ui_search.role = []
		this.nav_ui_search.action = ""
		
		// "Search trg" Button of "Nav UI" component
		this.nav_ui_search_trg.label_name = "Search trg"
		this.nav_ui_search_trg.show = true
		this.nav_ui_search_trg.disabled = false
		this.nav_ui_search_trg.params = {"icon_only":false,"uicgcc_style":""}
		this.nav_ui_search_trg.dynamic_param = {}
		this.nav_ui_search_trg.role = []
		this.nav_ui_search_trg.action = ""
		
		// "TRG for Hide Tran List" Button of "Nav UI" component
		this.nav_ui_trg_for_hide_tran_list.label_name = "TRG for Hide Tran List"
		this.nav_ui_trg_for_hide_tran_list.show = true
		this.nav_ui_trg_for_hide_tran_list.disabled = false
		this.nav_ui_trg_for_hide_tran_list.params = {"icon_only":false,"uicgcc_style":""}
		this.nav_ui_trg_for_hide_tran_list.dynamic_param = {}
		this.nav_ui_trg_for_hide_tran_list.role = []
		this.nav_ui_trg_for_hide_tran_list.action = ""
	
		// Component level properties - "Inward" 
		this.inward.uictrl_code = "chart"
		this.inward.uicgc_desc = "Inward"
		this.inward.uicgc_code = "uicgc_38"
		this.inward.params = {}
		this.inward.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_38","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679505830432","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS IP Master Dashboard","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"RESPONSE_DETAIL","alias_name":"","mq_id":"MQ_1679505720928","date_format":false},{"column_name":"RESPONSE_DETAIL_COUNT","alias_name":"","mq_id":"MQ_1679505721344","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1679505721608","date_format":false},{"column_name":"processgroup","alias_name":"","mq_id":"MQ_1679576606267","date_format":false}],"joins":[]},"eq_text":"select  X.RESPONSE_DETAIL,  x.RESPONSE_DETAIL_COUNT,  X.PROCESS_TYPE,  x.createddate,  x.processgroup from  (  select   res.PROCESS_TYPE,   res.createddate,   res.processgroup,   coalesce(sum(res.Payment_Status), 0::numeric) as Payment_Status,   coalesce(sum(res.Final_pacs002_status_received), 0::numeric) as Final_pacs002_status_received,   coalesce(sum(res.Posting_Completed_to_T24), 0::numeric) as Posting_Completed_to_T24,   coalesce(sum(res.Posting_Completed_to_Elpaso), 0::numeric) as Posting_Completed_to_Elpaso,   coalesce(sum(res.Posting_Completed_to_FD), 0::numeric) as Posting_Completed_to_FD,   coalesce(sum(res.response_sent_to_CB_count), 0::numeric) as response_sent_to_CB_count,   coalesce(sum(res.repair_queue), 0::numeric) as repair_queue  from   (select     count(distinct case when res1.process_status in ('RCTInProcess', 'RCTReturned', 'RCTCompleted', 'RCTExceptionFailure', 'RCTExceptionSuspicious', 'BCTInProcess', 'BCTReturned', 'BCTCompleted', 'BCTExceptionFailure', 'BCTExceptionSuspicious') then res1.npsst_id end) as Payment_Status,    count(distinct case when res1.process_name = 'Receive pacs002' then res1.npsst_id end) as Final_pacs002_status_received,    count(distinct case when res1.status in (UPPER('IP_RCT_POSTING_SUCCESS')) then res1.npsst_id end) as Posting_Completed_to_T24,    count(distinct case when res1.status in (UPPER('IP_RCT_PC_POSTING_SUCCESS')) then res1.npsst_id end) as Posting_Completed_to_Elpaso,    count(distinct case when res1.status in (UPPER('IP_RCT_CC_POSTING_SUCCESS')) then res1.npsst_id end) as Posting_Completed_to_FD,    count(distinct case when res1.process_name = 'Place pacs002' then res1.npsst_id end) as response_sent_to_CB_count,    count(distinct case when res1.status in (UPPER('IP_RCT_PC_POSTING_FAILURE'), UPPER('IP_RCT_POSTING_SUSPICIOUS'), UPPER('IP_RCT_POSTING_FAILURE'),('IP_RCT_CC_POSTING_FAILURE'), UPPER('IP_RCT_PC_POSTING_SUSPICIOUS'), UPPER('IP_RCT_CC_POSTING_SUSPICIOUS')) then res1.npsst_id end) as repair_queue,    res1.CREATED_DATE,    res1.TENANT_ID,    res1.processgroup,    res1.department_code,    res1.process_type,    res1.createddate    from(   select    NT.CREATED_DATE,    NT.TENANT_ID,    case     when nt.process_status like UPPER('RCT%') then 'Online'     when nt.process_status like UPPER('BCT%') then 'Batch'    end as processgroup,    NT.department_code,    NT.process_type,    NT.uetr,    NT.npsst_id,    NTPL.process_name,    NTPL.process_status,    ntpl.status,    to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate   from    npss_trn_process_log ntpl   inner join npss_transactions nt on    NT.uetr = NTPL.uetr   where    NT.process_type = 'IP')res1   group by    res1.CREATED_DATE,    res1.TENANT_ID,    res1.processgroup,    res1.department_code,    res1.process_type,    res1.createddate) res $WHERE  group by   res.PROCESS_TYPE,   res.createddate,   res.processgroup) T cross join lateral( values ('Payment Status',T.PAYMENT_STATUS,T.PROCESS_TYPE,t.createddate,t.processgroup), ('Final pacs002 status received',T.Final_pacs002_status_received,T.PROCESS_TYPE,t.createddate,t.processgroup), ('Posting Completed to T24',T.Posting_Completed_to_T24,T.PROCESS_TYPE,t.createddate,t.processgroup), ('Posting Completed to Elpaso',T.Posting_Completed_to_Elpaso,T.PROCESS_TYPE,t.createddate,t.processgroup), ('Posting Completed to FD',T.Posting_Completed_to_FD,T.PROCESS_TYPE,t.createddate,t.processgroup), ('Response sent to CB',T.response_sent_to_CB_count,T.PROCESS_TYPE,t.createddate,t.processgroup), ('Repair Queue',T.repair_queue,T.PROCESS_TYPE,t.createddate,t.processgroup) ) X (RESPONSE_DETAIL,  RESPONSE_DETAIL_COUNT,  PROCESS_TYPE,  createddate,processgroup)"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS IP Master Dashboard","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"RESPONSE_DETAIL","target_column":"RESPONSE_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"RESPONSE_DETAIL_COUNT","target_column":"RESPONSE_DETAIL_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.inward.context_menu = []
		this.inward.views = {}
		this.inward.onChangecomponent = new EventEmitter<any>()
		this.inward.show = true
		this.inward.dynamic_param = {}
	
		// Component level properties - "Outward" 
		this.outward.uictrl_code = "chart"
		this.outward.uicgc_desc = "Outward"
		this.outward.uicgc_code = "uicgc_39"
		this.outward.params = {}
		this.outward.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_39","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679497533134","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Master Dashboard","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"RESPONSE_DETAIL","alias_name":"","mq_id":"MQ_1679492405454","date_format":false},{"column_name":"RESPONSE_DETAIL_COUNT","alias_name":"","mq_id":"MQ_1679492405596","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1679492785033","date_format":false}],"joins":[]},"eq_text":"select  X.RESPONSE_DETAIL,  x.RESPONSE_DETAIL_COUNT,  X.PROCESS_TYPE,  x.createddate,  X.processgroup from  (  select   res.PROCESS_TYPE,   res.createddate,   coalesce(sum(res.Total), 0::numeric) as Total,   coalesce(sum(res.ACK_response_received_from_CB), 0::numeric) as ACK_response_received_from_CB,   coalesce(sum(res.NAK_Response_received_from_CB), 0::numeric) as NAK_Response_received_from_CB,   coalesce(sum(res.Accepted_by_Bene_Bank), 0::numeric) as Accepted_by_Bene_Bank,   coalesce(sum(res.Rejected_by_Bene), 0::numeric) as Rejected_by_Bene,   coalesce(sum(res.Posting_Completed), 0::numeric) as Posting_Completed,   coalesce(sum(res.Send_to_CB), 0::numeric) as Send_to_CB,   coalesce(sum(res.CB_ACK), 0::numeric) as CB_ACK,   coalesce(sum(res.CB_NACK), 0::numeric) as CB_NACK,   res.processgroup  from   (select     count(distinct case when res1.process_type = 'OP' then res1.npsst_id end) as Total,     count(distinct case when res1.response_code = UPPER('ACCP') and res1.cbuae_return_code is null then res1.npsst_id end) as ACK_response_received_from_CB,     count(distinct case when res1.response_code = UPPER('RJCT') and res1.cbuae_return_code is null then res1.npsst_id end) as NAK_Response_received_from_CB,     count(distinct case when res1.response_code = UPPER('ACCP') and res1.cbuae_return_code is not null and res1.process_name not in ('Receive pacs004') then res1.npsst_id end) as Accepted_by_Bene_Bank,     count(distinct case when res1.response_code = UPPER('RJCT') and res1.cbuae_return_code is not null then res1.npsst_id end) as Rejected_by_Bene,     count(distinct case when res1.status in (UPPER('OP_P2P_POSTING_SUCCESS'), UPPER('OP_P2B_FUND_AUTHORIZED')) then res1.npsst_id end) as Posting_Completed,     count(distinct case when res1.process_status in ('RCTCompleted', 'RCTReturned') and res1.process_name = 'Place Pacs008' then res1.npsst_id end) as Send_to_CB,     count(distinct case when res1.status in (UPPER('OP_AC_STATUS_ACCEPTED'), UPPER('OP_P2P_STATUS_ACCEPTED'), UPPER('OP_P2B_STATUS_ACCEPTED')) then res1.npsst_id end) as CB_ACK,     count(distinct case when res1.status in (UPPER('OP_AC_REV_POSTING_SUCCESS'), UPPER('OP_AC_STATUS_REJECTED'), UPPER('OP_P2B_STATUS_REJECTED'), UPPER('OP_P2B_REV_POSTING_SUCCESS'), UPPER('OP_P2P_STATUS_REJECTED'), UPPER('OP_P2P_REV_POSTING_SUCCESS')) then res1.npsst_id end) as CB_NACK,    processgroup,    CREATED_DATE,    TENANT_ID,    DEPARTMENT_CODE,    PROCESS_TYPE,    createddate   from    (    select    nt.npsst_id,     NT.CREATED_DATE,     NT.TENANT_ID,     case      when nt.process_status like UPPER('RCT%') then 'Online'      when nt.process_status like UPPER('BCT%') then 'Batch'     end as processgroup,     NT.department_code,     NT.process_type,     NT.uetr,     ntpl.response_code,     ntpl.process_status,     ntpl.status,     ntpl.process_name,     ntpl.cbuae_return_code,     to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate    from     npss_trn_process_log ntpl    inner join npss_transactions nt on     NT.uetr = NTPL.uetr    where     NT.process_type = 'OP') res1    group by     res1.CREATED_DATE,     res1.TENANT_ID,     res1.processgroup,     res1.department_code,     res1.process_type,     res1.createddate     )res $WHERE group by   res.PROCESS_TYPE,   res.createddate,   res.processgroup) T cross join lateral( values ('Total', T.TOTAL, T.PROCESS_TYPE, t.createddate, T.processgroup), ('ACK response received from CB', T.ACK_response_received_from_CB, T.PROCESS_TYPE, t.createddate, T.processgroup), ('NAK response received from CB', T.NAK_Response_received_from_CB, T.PROCESS_TYPE, t.createddate, T.processgroup), ('Accepted by Bene Bank', T.Accepted_by_Bene_Bank, T.PROCESS_TYPE, t.createddate, T.processgroup), ('Rejected by Bene', T.Rejected_by_Bene, T.PROCESS_TYPE, t.createddate, T.processgroup), ('Posting Completed', T.Posting_Completed, T.PROCESS_TYPE, t.createddate, T.processgroup), ('Send to CB', T.Send_to_CB, T.PROCESS_TYPE, t.createddate, T.processgroup), ('CB ACK', T.CB_ACK, T.PROCESS_TYPE, t.createddate, T.processgroup), ('CB NACK', T.CB_NACK, T.PROCESS_TYPE, t.createddate, T.processgroup)) X (RESPONSE_DETAIL,  RESPONSE_DETAIL_COUNT,  PROCESS_TYPE,  createddate,processgroup)"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Master Dashboard","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"RESPONSE_DETAIL","target_column":"RESPONSE_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"RESPONSE_DETAIL_COUNT","target_column":"RESPONSE_DETAIL_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.outward.context_menu = []
		this.outward.views = {}
		this.outward.onChangecomponent = new EventEmitter<any>()
		this.outward.show = true
		this.outward.dynamic_param = {}
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
		this.page_load__he_for_nav_src_trg()
		this.page_load__cc_for_widget()
	}

	//Handler for INTERNAL event of "cf from pag load"
	cf_from_pag_load__internal(parent_event_result){
		this.cf_from_pag_load__cc_for_show_hide_after_cf(parent_event_result)
	}

	//Handler for INTERNAL event of "cc for show hide after cf"
	cc_for_show_hide_after_cf__internal(parent_event_result){
		this.cc_for_show_hide_after_cf__tbc_after_cf(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__de_for_vpl()
		this.search_search__ssp_for_op_list_from_srch_btn()
		this.search_search__cp_after_search()
	}

	//Handler for INTERNAL event of "ssp for op list from srch btn"
	ssp_for_op_list_from_srch_btn__internal(parent_event_result){
		this.ssp_for_op_list_from_srch_btn__brfq_for_ip_chart_from_srch_btn()
		this.ssp_for_op_list_from_srch_btn__e_1679496919112(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "outward list"
	outward_list__selection_changed(){
		this.outward_list__svm_by_click_on_tl()
		this.outward_list__sp_from_outward_list()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__cui_from_clear_btn_click()
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
	}

	//Handler for ACTION_BUTTON_CLICK event of "message back ui back"
	message_back_ui_back__action_button_click(){
		this.message_back_ui_back__sp_for_mb_back()
	}

	//Handler for ACTION_BUTTON_CLICK event of "message detail action back"
	message_detail_action_back__action_button_click(){
		this.message_detail_action_back__sp_for_mda_back()
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui back"
	process_log_ui_back__action_button_click(){
		this.process_log_ui_back__sp_for_pl_back()
	}

	//Handler for ACTION_BUTTON_CLICK event of "single back ui back"
	single_back_ui_back__action_button_click(){
		this.single_back_ui_back__sp_for_sb_back()
	}

	//Handler for ACTION_BUTTON_CLICK event of "nav ui search trg"
	nav_ui_search_trg__action_button_click(){
		this.nav_ui_search_trg__spap_for_search_trg()
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

	//Handler for ACTION_BUTTON_CLICK event of "nav ui search"
	nav_ui_search__action_button_click(){
		this.nav_ui_search__spap_for_search_btn_click()
		this.nav_ui_search__cu_from_nav_search_btn()
	}

	//Handler for SELECTION_CHANGED event of "inward"
	inward__selection_changed(){
		this.inward__se_for_tran_list_from_ip_chart()
		this.inward__brfq_for_tran_list_from_ip_chart()
		this.inward__sp_for_ip_chart()
	}

	//Handler for SELECTION_CHANGED event of "outward"
	outward__selection_changed(){
		this.outward__brfq_for_tran_list_from_op_chart()
		this.outward__se_for_tran_list_from_op_chart()
		this.outward__svm_for_op_chart()
		this.outward__sp_for_op_layout()
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
		let internals="cf_from_pag_load__cc_for_show_hide_after_cf,"
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
	page_load__he_for_nav_src_trg() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="nav_ui_search_trg"
		let parent_source_id=""
		let event_code="e_1679041766086"
		let event_params={"caller_name":"page_load__he_for_nav_src_trg","event_desc":"HE for Nav SRC TRG","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for INTERNAL event of "cf from pag load"
	cf_from_pag_load__cc_for_show_hide_after_cf(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cf_from_pag_load"
		let destn_id=""
		let parent_source_id="page_load"
		let event_code="e_1679038883191"
		let event_params={"caller_name":"cf_from_pag_load__cc_for_show_hide_after_cf","event_desc":"CC for Show Hide after CF","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="cc_for_show_hide_after_cf__tbc_after_cf,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for show hide after cf"
	cc_for_show_hide_after_cf__tbc_after_cf(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_show_hide_after_cf"
		let destn_id="search_search"
		let parent_source_id="cf_from_pag_load"
		let event_code="e_1679038975598"
		let event_params={"caller_name":"cc_for_show_hide_after_cf__tbc_after_cf","event_desc":"TBC after CF","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__ssp_for_op_list_from_srch_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1679494026066"
		let event_params={"caller_name":"search_search__ssp_for_op_list_from_srch_btn","event_desc":"SSP for OP list from SRCH btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="ssp_for_op_list_from_srch_btn__brfq_for_ip_chart_from_srch_btn,ssp_for_op_list_from_srch_btn__e_1679496919112,"
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
	search_search__cp_after_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1679495256604"
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

	//Handler for INTERNAL event of "ssp for op list from srch btn"
	ssp_for_op_list_from_srch_btn__brfq_for_ip_chart_from_srch_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="ssp_for_op_list_from_srch_btn"
		let destn_id="inward"
		let parent_source_id="search_search"
		let event_code="e_1679496701563"
		let event_params={"caller_name":"ssp_for_op_list_from_srch_btn__brfq_for_ip_chart_from_srch_btn","event_desc":"BRFQ for IP Chart from SRCH btn","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"BAR","chart_label":"RESPONSE_DETAIL","chart_series":"","chart_data":"RESPONSE_DETAIL_COUNT","avoid_parent_search_param":"N","avoid_key_column_filter":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_38","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679505830432","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS IP Master Dashboard","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"RESPONSE_DETAIL","alias_name":"","mq_id":"MQ_1679505720928","date_format":false},{"column_name":"RESPONSE_DETAIL_COUNT","alias_name":"","mq_id":"MQ_1679505721344","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1679505721608","date_format":false},{"column_name":"processgroup","alias_name":"","mq_id":"MQ_1679576606267","date_format":false}],"joins":[]},"eq_text":"select  X.RESPONSE_DETAIL,  x.RESPONSE_DETAIL_COUNT,  X.PROCESS_TYPE,  x.createddate,  x.processgroup from  (  select   res.PROCESS_TYPE,   res.createddate,   res.processgroup,   coalesce(sum(res.Payment_Status), 0::numeric) as Payment_Status,   coalesce(sum(res.Final_pacs002_status_received), 0::numeric) as Final_pacs002_status_received,   coalesce(sum(res.Posting_Completed_to_T24), 0::numeric) as Posting_Completed_to_T24,   coalesce(sum(res.Posting_Completed_to_Elpaso), 0::numeric) as Posting_Completed_to_Elpaso,   coalesce(sum(res.Posting_Completed_to_FD), 0::numeric) as Posting_Completed_to_FD,   coalesce(sum(res.response_sent_to_CB_count), 0::numeric) as response_sent_to_CB_count,   coalesce(sum(res.repair_queue), 0::numeric) as repair_queue  from   (select     count(distinct case when res1.process_status in ('RCTInProcess', 'RCTReturned', 'RCTCompleted', 'RCTExceptionFailure', 'RCTExceptionSuspicious', 'BCTInProcess', 'BCTReturned', 'BCTCompleted', 'BCTExceptionFailure', 'BCTExceptionSuspicious') then res1.npsst_id end) as Payment_Status,    count(distinct case when res1.process_name = 'Receive pacs002' then res1.npsst_id end) as Final_pacs002_status_received,    count(distinct case when res1.status in (UPPER('IP_RCT_POSTING_SUCCESS')) then res1.npsst_id end) as Posting_Completed_to_T24,    count(distinct case when res1.status in (UPPER('IP_RCT_PC_POSTING_SUCCESS')) then res1.npsst_id end) as Posting_Completed_to_Elpaso,    count(distinct case when res1.status in (UPPER('IP_RCT_CC_POSTING_SUCCESS')) then res1.npsst_id end) as Posting_Completed_to_FD,    count(distinct case when res1.process_name = 'Place pacs002' then res1.npsst_id end) as response_sent_to_CB_count,    count(distinct case when res1.status in (UPPER('IP_RCT_PC_POSTING_FAILURE'), UPPER('IP_RCT_POSTING_SUSPICIOUS'), UPPER('IP_RCT_POSTING_FAILURE'),('IP_RCT_CC_POSTING_FAILURE'), UPPER('IP_RCT_PC_POSTING_SUSPICIOUS'), UPPER('IP_RCT_CC_POSTING_SUSPICIOUS')) then res1.npsst_id end) as repair_queue,    res1.CREATED_DATE,    res1.TENANT_ID,    res1.processgroup,    res1.department_code,    res1.process_type,    res1.createddate    from(   select    NT.CREATED_DATE,    NT.TENANT_ID,    case     when nt.process_status like UPPER('RCT%') then 'Online'     when nt.process_status like UPPER('BCT%') then 'Batch'    end as processgroup,    NT.department_code,    NT.process_type,    NT.uetr,    NT.npsst_id,    NTPL.process_name,    NTPL.process_status,    ntpl.status,    to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate   from    npss_trn_process_log ntpl   inner join npss_transactions nt on    NT.uetr = NTPL.uetr   where    NT.process_type = 'IP')res1   group by    res1.CREATED_DATE,    res1.TENANT_ID,    res1.processgroup,    res1.department_code,    res1.process_type,    res1.createddate) res $WHERE  group by   res.PROCESS_TYPE,   res.createddate,   res.processgroup) T cross join lateral( values ('Payment Status',T.PAYMENT_STATUS,T.PROCESS_TYPE,t.createddate,t.processgroup), ('Final pacs002 status received',T.Final_pacs002_status_received,T.PROCESS_TYPE,t.createddate,t.processgroup), ('Posting Completed to T24',T.Posting_Completed_to_T24,T.PROCESS_TYPE,t.createddate,t.processgroup), ('Posting Completed to Elpaso',T.Posting_Completed_to_Elpaso,T.PROCESS_TYPE,t.createddate,t.processgroup), ('Posting Completed to FD',T.Posting_Completed_to_FD,T.PROCESS_TYPE,t.createddate,t.processgroup), ('Response sent to CB',T.response_sent_to_CB_count,T.PROCESS_TYPE,t.createddate,t.processgroup), ('Repair Queue',T.repair_queue,T.PROCESS_TYPE,t.createddate,t.processgroup) ) X (RESPONSE_DETAIL,  RESPONSE_DETAIL_COUNT,  PROCESS_TYPE,  createddate,processgroup)"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS IP Master Dashboard","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"RESPONSE_DETAIL","target_column":"RESPONSE_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"RESPONSE_DETAIL_COUNT","target_column":"RESPONSE_DETAIL_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for op list from srch btn"
	ssp_for_op_list_from_srch_btn__e_1679496919112(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_op_list_from_srch_btn"
		let destn_id="outward"
		let parent_source_id="search_search"
		let event_code="e_1679496919112"
		let event_params={"caller_name":"ssp_for_op_list_from_srch_btn__e_1679496919112","event_desc":"E_1679496919112","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"BAR","chart_label":"RESPONSE_DETAIL","chart_series":"","chart_data":"RESPONSE_DETAIL_COUNT","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_39","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679497533134","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Master Dashboard","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"RESPONSE_DETAIL","alias_name":"","mq_id":"MQ_1679492405454","date_format":false},{"column_name":"RESPONSE_DETAIL_COUNT","alias_name":"","mq_id":"MQ_1679492405596","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1679492785033","date_format":false}],"joins":[]},"eq_text":"select  X.RESPONSE_DETAIL,  x.RESPONSE_DETAIL_COUNT,  X.PROCESS_TYPE,  x.createddate,  X.processgroup from  (  select   res.PROCESS_TYPE,   res.createddate,   coalesce(sum(res.Total), 0::numeric) as Total,   coalesce(sum(res.ACK_response_received_from_CB), 0::numeric) as ACK_response_received_from_CB,   coalesce(sum(res.NAK_Response_received_from_CB), 0::numeric) as NAK_Response_received_from_CB,   coalesce(sum(res.Accepted_by_Bene_Bank), 0::numeric) as Accepted_by_Bene_Bank,   coalesce(sum(res.Rejected_by_Bene), 0::numeric) as Rejected_by_Bene,   coalesce(sum(res.Posting_Completed), 0::numeric) as Posting_Completed,   coalesce(sum(res.Send_to_CB), 0::numeric) as Send_to_CB,   coalesce(sum(res.CB_ACK), 0::numeric) as CB_ACK,   coalesce(sum(res.CB_NACK), 0::numeric) as CB_NACK,   res.processgroup  from   (select     count(distinct case when res1.process_type = 'OP' then res1.npsst_id end) as Total,     count(distinct case when res1.response_code = UPPER('ACCP') and res1.cbuae_return_code is null then res1.npsst_id end) as ACK_response_received_from_CB,     count(distinct case when res1.response_code = UPPER('RJCT') and res1.cbuae_return_code is null then res1.npsst_id end) as NAK_Response_received_from_CB,     count(distinct case when res1.response_code = UPPER('ACCP') and res1.cbuae_return_code is not null and res1.process_name not in ('Receive pacs004') then res1.npsst_id end) as Accepted_by_Bene_Bank,     count(distinct case when res1.response_code = UPPER('RJCT') and res1.cbuae_return_code is not null then res1.npsst_id end) as Rejected_by_Bene,     count(distinct case when res1.status in (UPPER('OP_P2P_POSTING_SUCCESS'), UPPER('OP_P2B_FUND_AUTHORIZED')) then res1.npsst_id end) as Posting_Completed,     count(distinct case when res1.process_status in ('RCTCompleted', 'RCTReturned') and res1.process_name = 'Place Pacs008' then res1.npsst_id end) as Send_to_CB,     count(distinct case when res1.status in (UPPER('OP_AC_STATUS_ACCEPTED'), UPPER('OP_P2P_STATUS_ACCEPTED'), UPPER('OP_P2B_STATUS_ACCEPTED')) then res1.npsst_id end) as CB_ACK,     count(distinct case when res1.status in (UPPER('OP_AC_REV_POSTING_SUCCESS'), UPPER('OP_AC_STATUS_REJECTED'), UPPER('OP_P2B_STATUS_REJECTED'), UPPER('OP_P2B_REV_POSTING_SUCCESS'), UPPER('OP_P2P_STATUS_REJECTED'), UPPER('OP_P2P_REV_POSTING_SUCCESS')) then res1.npsst_id end) as CB_NACK,    processgroup,    CREATED_DATE,    TENANT_ID,    DEPARTMENT_CODE,    PROCESS_TYPE,    createddate   from    (    select    nt.npsst_id,     NT.CREATED_DATE,     NT.TENANT_ID,     case      when nt.process_status like UPPER('RCT%') then 'Online'      when nt.process_status like UPPER('BCT%') then 'Batch'     end as processgroup,     NT.department_code,     NT.process_type,     NT.uetr,     ntpl.response_code,     ntpl.process_status,     ntpl.status,     ntpl.process_name,     ntpl.cbuae_return_code,     to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate    from     npss_trn_process_log ntpl    inner join npss_transactions nt on     NT.uetr = NTPL.uetr    where     NT.process_type = 'OP') res1    group by     res1.CREATED_DATE,     res1.TENANT_ID,     res1.processgroup,     res1.department_code,     res1.process_type,     res1.createddate     )res $WHERE group by   res.PROCESS_TYPE,   res.createddate,   res.processgroup) T cross join lateral( values ('Total', T.TOTAL, T.PROCESS_TYPE, t.createddate, T.processgroup), ('ACK response received from CB', T.ACK_response_received_from_CB, T.PROCESS_TYPE, t.createddate, T.processgroup), ('NAK response received from CB', T.NAK_Response_received_from_CB, T.PROCESS_TYPE, t.createddate, T.processgroup), ('Accepted by Bene Bank', T.Accepted_by_Bene_Bank, T.PROCESS_TYPE, t.createddate, T.processgroup), ('Rejected by Bene', T.Rejected_by_Bene, T.PROCESS_TYPE, t.createddate, T.processgroup), ('Posting Completed', T.Posting_Completed, T.PROCESS_TYPE, t.createddate, T.processgroup), ('Send to CB', T.Send_to_CB, T.PROCESS_TYPE, t.createddate, T.processgroup), ('CB ACK', T.CB_ACK, T.PROCESS_TYPE, t.createddate, T.processgroup), ('CB NACK', T.CB_NACK, T.PROCESS_TYPE, t.createddate, T.processgroup)) X (RESPONSE_DETAIL,  RESPONSE_DETAIL_COUNT,  PROCESS_TYPE,  createddate,processgroup)"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Master Dashboard","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"RESPONSE_DETAIL","target_column":"RESPONSE_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"RESPONSE_DETAIL_COUNT","target_column":"RESPONSE_DETAIL_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let data_source={}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_26","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679492808309","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691797994","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1668772110535","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1669198452328","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669209185067","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1669209185410","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1669209185641","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669209840985","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669209847802","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669209934807","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1670656485225","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1673072381673","date_format":false},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1675409311721","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_card_decrypt_and_mask(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  fn_card_decrypt_and_mask(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   A.CR_ACCT_IDENTIFICATION,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Vertical Dr Cr CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Created Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Acceptance Date Time","target_column":"ACCP_DATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Sort Code","target_column":"CR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Identification","target_column":"CR_ACCT_IDENTIFICATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Sort Code","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Identification","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Private Identification","target_column":"DBTR_PRVT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Other Issuer","target_column":"DBTR_OTHER_ISSUER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_27","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679492913259","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691797994","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1668772110535","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1669198452328","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669209185067","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1669209185410","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1669209185641","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669209840985","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669209847802","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669209934807","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1670656485225","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1673072381673","date_format":false},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1675409311721","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_card_decrypt_and_mask(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  fn_card_decrypt_and_mask(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   A.CR_ACCT_IDENTIFICATION,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Vertical Payment CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Tran Id","target_column":"NPSST_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Txn Value Date","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Batch Id","target_column":"EXHF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E reference id","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Category Purpose","target_column":"category_purpose","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Issuer Type Code","target_column":"issuer_type_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remittance Info","target_column":"REMITTANCE_INFO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_15","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679488758700","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_15","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679488758700","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let event_data={"transaction_list":{"e_1678873647556":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_14","event_code":"E_1678873647556","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"HARDCODED","column_name":"SELECT","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"},{"type":"LOCAL","column_name":"NPSST_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSST_ID","setd3name":"NPSST_ID"},{"type":"LOCAL","column_name":"PROCESS_TYPE","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_TYPE","setd3name":"PROCESS_TYPE"},{"type":"LOCAL","column_name":"UETR","level":"MI_LEVEL","name":"MI_LEVEL_UETR","setd3name":"UETR"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
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
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_20","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679492509321","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1668573850306","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1668573852117","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1668573852786","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1668573853731","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1668573854459","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1668573869044","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1668573871186","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573874178","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573876315","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668573884586","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1668573900766","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1668573911947","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1668573917043","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1668573918291","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1668573918796","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1668573919355","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1668573919955","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1668573925605","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1668587107858","date_format":false}],"joins":[]},"eq_text":"select  NPSSTRRD_ID,  MSG_ID,  UETR,  PARENT_NPSSTRRD_REFNO,  NPSSTRRD_REFNO,  PROCESS_CODE,  PROCESS_DETAIL,  EXHF_ID,  PROCESS_NAME,  MESSAGE_DESC,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  STATUS,  PROCESS_STATUS,PROCESS_TYPE,  MESSAGE_DATA,  CREATEDDATEMILISEC,  DT_CODE,  DTT_CODE from  (  select   NPSSTRRD.NPSSTRRD_ID,   NPSSTRRD.MSG_ID,   NPSSTRRD.UETR,   NPSSTRRD.PARENT_NPSSTRRD_REFNO,   NPSSTRRD.NPSSTRRD_REFNO,   NPSSTRRD.MESSAGE_DATA,   NPSSTRRD.PROCESS_CODE,   NPSSTRRD.PROCESS_DETAIL,   NPSSTRRD.EXHF_ID,   NPSSTRRD.PROCESS_NAME,   NPSSTRRD.MESSAGE_DESC,   NPSSTRRD.CHANNEL_ID,   NPSSTRRD.CHANNEL_REFNO,   NPSSTRRD.CHANNEL_USERID,   NPSSTRRD.CHANNEL_PRODUCT,   NPSSTRRD.CHANNEL_SUB_PRODUCT,   NPSSTRRD.CHANNEL_TRAN_CODE,   NPSSTRRD.CREATED_BY,   NPSSTRRD.CREATED_BY_NAME,   NPSSTRRD.CREATED_DATE,   NPSSTRRD.DT_CODE,   NPSSTRRD.DT_DESCRIPTION,   NPSSTRRD.DTT_CODE,   NPSSTRRD.DTT_DESCRIPTION,   NPSSTRRD.MODIFIED_BY,   NPSSTRRD.MODIFIED_BY_NAME,   NPSSTRRD.MODIFIED_DATE,   NPSSTRRD.STATUS,   NPSSTRRD.PROCESS_STATUS,NT.PROCESS_TYPE,   NPSSTRRD.SYSTEM_ID,   NPSSTRRD.SYSTEM_NAME,   NPSSTRRD.TENANT_ID,   NPSSTRRD.APP_ID,   NPSSTRRD.VERSION_NO,   TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC  from   NPSS_TRN_REQ_RESP_DTLS NPSSTRRD  inner join NPSS_TRANSACTIONS NT on   NPSSTRRD.UETR = NT.UETR) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS REQ RES CCD","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"MI_LEVEL_PROCESS_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_20","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679492509321","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1668573850306","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1668573852117","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1668573852786","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1668573853731","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1668573854459","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1668573869044","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1668573871186","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573874178","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573876315","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668573884586","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1668573900766","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1668573911947","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1668573917043","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1668573918291","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1668573918796","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1668573919355","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1668573919955","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1668573925605","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1668587107858","date_format":false}],"joins":[]},"eq_text":"select  NPSSTRRD_ID,  MSG_ID,  UETR,  PARENT_NPSSTRRD_REFNO,  NPSSTRRD_REFNO,  PROCESS_CODE,  PROCESS_DETAIL,  EXHF_ID,  PROCESS_NAME,  MESSAGE_DESC,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  STATUS,  PROCESS_STATUS,PROCESS_TYPE,  MESSAGE_DATA,  CREATEDDATEMILISEC,  DT_CODE,  DTT_CODE from  (  select   NPSSTRRD.NPSSTRRD_ID,   NPSSTRRD.MSG_ID,   NPSSTRRD.UETR,   NPSSTRRD.PARENT_NPSSTRRD_REFNO,   NPSSTRRD.NPSSTRRD_REFNO,   NPSSTRRD.MESSAGE_DATA,   NPSSTRRD.PROCESS_CODE,   NPSSTRRD.PROCESS_DETAIL,   NPSSTRRD.EXHF_ID,   NPSSTRRD.PROCESS_NAME,   NPSSTRRD.MESSAGE_DESC,   NPSSTRRD.CHANNEL_ID,   NPSSTRRD.CHANNEL_REFNO,   NPSSTRRD.CHANNEL_USERID,   NPSSTRRD.CHANNEL_PRODUCT,   NPSSTRRD.CHANNEL_SUB_PRODUCT,   NPSSTRRD.CHANNEL_TRAN_CODE,   NPSSTRRD.CREATED_BY,   NPSSTRRD.CREATED_BY_NAME,   NPSSTRRD.CREATED_DATE,   NPSSTRRD.DT_CODE,   NPSSTRRD.DT_DESCRIPTION,   NPSSTRRD.DTT_CODE,   NPSSTRRD.DTT_DESCRIPTION,   NPSSTRRD.MODIFIED_BY,   NPSSTRRD.MODIFIED_BY_NAME,   NPSSTRRD.MODIFIED_DATE,   NPSSTRRD.STATUS,   NPSSTRRD.PROCESS_STATUS,NT.PROCESS_TYPE,   NPSSTRRD.SYSTEM_ID,   NPSSTRRD.SYSTEM_NAME,   NPSSTRRD.TENANT_ID,   NPSSTRRD.APP_ID,   NPSSTRRD.VERSION_NO,   TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC  from   NPSS_TRN_REQ_RESP_DTLS NPSSTRRD  inner join NPSS_TRANSACTIONS NT on   NPSSTRRD.UETR = NT.UETR) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS REQ RES CCD","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"MI_LEVEL_PROCESS_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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

	//Handler for ACTION_BUTTON_CLICK event of "nav ui search trg"
	nav_ui_search_trg__spap_for_search_trg() { 
		let Dest_Is_ctrl=true
		
		let source_id="nav_ui_search_trg"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1679030820022"
		let event_params={"caller_name":"nav_ui_search_trg__spap_for_search_trg","event_desc":"SPAP for search trg","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"nav_ui_search_trg","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_for_search_trg","selector":"p_search_layout","profile_code":"BTL_1408_1598521300065","window_title":"Search","window_height":"","window_width":"auto","window_close_icon":"Y","eventdes":"spap_for_search_trg","eventcode":"E_1679030820022"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "nav ui search"
	nav_ui_search__spap_for_search_btn_click() { 
		let Dest_Is_ctrl=true
		
		let source_id="nav_ui_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1679488238209"
		let event_params={"caller_name":"nav_ui_search__spap_for_search_btn_click","event_desc":"SPAP for Search BTN Click","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"nav_ui_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_for_search_btn_click","selector":"p_search_layout","profile_code":"BTL_1408_1598521300065","window_title":"","window_height":"","window_width":"auto","window_close_icon":"Y","eventdes":"spap_for_search_btn_click","eventcode":"E_1679488238209"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "nav ui search"
	nav_ui_search__cu_from_nav_search_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="nav_ui_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1679488381178"
		let event_params={"caller_name":"nav_ui_search__cu_from_nav_search_btn","event_desc":"CU from nav search btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"nav_ui_search","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for SELECTION_CHANGED event of "inward"
	inward__se_for_tran_list_from_ip_chart() { 
		let Dest_Is_ctrl=true
		
		let source_id="inward"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1679496653860"
		let event_params={"caller_name":"inward__se_for_tran_list_from_ip_chart","event_desc":"SE for tran list from IP Chart","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"inward","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "inward"
	inward__brfq_for_tran_list_from_ip_chart() { 
		let Dest_Is_ctrl=true
		
		let source_id="inward"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1679496674604"
		let event_params={"caller_name":"inward__brfq_for_tran_list_from_ip_chart","event_desc":"BRFQ for tran list from IP Chart","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"inward","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"e_1679496674604":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_14","event_code":"E_1679496674604","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679507302462","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS IP Master Dashboard Tran","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"department_code","alias_name":"","mq_id":"MQ_1679507346074","date_format":false},{"column_name":"uetr","alias_name":"","mq_id":"MQ_1679507346501","date_format":false},{"column_name":"process_type","alias_name":"","mq_id":"MQ_1679507346684","date_format":false},{"column_name":"start_date","alias_name":"","mq_id":"MQ_1679507346843","date_format":false},{"column_name":"end_date","alias_name":"","mq_id":"MQ_1679507347021","date_format":false},{"column_name":"intrbk_sttlm_cur","alias_name":"","mq_id":"MQ_1679507347180","date_format":false},{"column_name":"intrbk_sttlm_amnt","alias_name":"","mq_id":"MQ_1679507347341","date_format":false,"currency_format":true},{"column_name":"cdtr_iban","alias_name":"","mq_id":"MQ_1679507395510","date_format":false},{"column_name":"cr_acct_identification","alias_name":"","mq_id":"MQ_1679507395684","date_format":false},{"column_name":"dbtr_iban","alias_name":"","mq_id":"MQ_1679507407452","date_format":false}],"joins":[]},"eq_text":"select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when nt.process_status in ('RCTInProcess', 'RCTReturned', 'RCTCompleted', 'RCTExceptionFailure', 'RCTExceptionSuspicious', 'BCTInProcess', 'BCTReturned', 'BCTCompleted', 'BCTExceptionFailure', 'BCTExceptionSuspicious') then 'Payment Status'    else 'OTHER'   end as RESPONSE_DETAIL  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr  inner join (   select    plr.npsstpl_id,    plr.uetr,    plr.created_date,    plr.row_num   from    (    select     a.npsstpl_id,     a.uetr,     a.created_date,     row_number() over( partition by a.uetr    order by     a.npsstpl_id desc) as row_num    from     npss_trn_process_log a ) plr   where    plr.row_num = 1) pl on   pl.uetr = nt.uetr  inner join (   select    plr1.npsstpl_id,    plr1.uetr,    plr1.created_date,    plr1.row_num   from    (    select     a1.npsstpl_id,     a1.uetr,     a1.created_date,     row_number() over( partition by a1.uetr    order by     a1.npsstpl_id asc) as row_num    from     npss_trn_process_log a1 ) plr1   where    plr1.row_num = 1) pl1 on   pl1.uetr = nt.uetr  where   NT.process_type = 'IP') v where  RESPONSE_DETAIL <> 'OTHER' $AND union select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when ntpl.process_name = 'Receive pacs002' then 'Final pacs002 status received'    else 'OTHER'   end as RESPONSE_DETAIL  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr  inner join (   select    plr.npsstpl_id,    plr.uetr,    plr.created_date,    plr.row_num   from    (    select     a.npsstpl_id,     a.uetr,     a.created_date,     row_number() over( partition by a.uetr    order by     a.npsstpl_id desc) as row_num    from     npss_trn_process_log a ) plr   where    plr.row_num = 1) pl on   pl.uetr = nt.uetr  inner join (   select    plr1.npsstpl_id,    plr1.uetr,    plr1.created_date,    plr1.row_num   from    (    select     a1.npsstpl_id,     a1.uetr,     a1.created_date,     row_number() over( partition by a1.uetr    order by     a1.npsstpl_id asc) as row_num    from     npss_trn_process_log a1 ) plr1   where    plr1.row_num = 1) pl1 on   pl1.uetr = nt.uetr  where   NT.process_type = 'IP') v where  RESPONSE_DETAIL <> 'OTHER' $AND union select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when ntpl.status in (UPPER('IP_RCT_POSTING_SUCCESS')) then 'Posting Completed to T24'    else 'OTHER'   end as RESPONSE_DETAIL  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr  inner join (   select    plr.npsstpl_id,    plr.uetr,    plr.created_date,    plr.row_num   from    (    select     a.npsstpl_id,     a.uetr,     a.created_date,     row_number() over( partition by a.uetr    order by     a.npsstpl_id desc) as row_num    from     npss_trn_process_log a ) plr   where    plr.row_num = 1) pl on   pl.uetr = nt.uetr  inner join (   select    plr1.npsstpl_id,    plr1.uetr,    plr1.created_date,    plr1.row_num   from    (    select     a1.npsstpl_id,     a1.uetr,     a1.created_date,     row_number() over( partition by a1.uetr    order by     a1.npsstpl_id asc) as row_num    from     npss_trn_process_log a1 ) plr1   where    plr1.row_num = 1) pl1 on   pl1.uetr = nt.uetr  where   NT.process_type = 'IP') v where  RESPONSE_DETAIL <> 'OTHER' $AND union select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when ntpl.status in (UPPER('IP_RCT_PC_POSTING_SUCCESS')) then 'Posting Completed to Elpaso'    else 'OTHER'   end as RESPONSE_DETAIL  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr  inner join (   select    plr.npsstpl_id,    plr.uetr,    plr.created_date,    plr.row_num   from    (    select     a.npsstpl_id,     a.uetr,     a.created_date,     row_number() over( partition by a.uetr    order by     a.npsstpl_id desc) as row_num    from     npss_trn_process_log a ) plr   where    plr.row_num = 1) pl on   pl.uetr = nt.uetr  inner join (   select    plr1.npsstpl_id,    plr1.uetr,    plr1.created_date,    plr1.row_num   from    (    select     a1.npsstpl_id,     a1.uetr,     a1.created_date,     row_number() over( partition by a1.uetr    order by     a1.npsstpl_id asc) as row_num    from     npss_trn_process_log a1 ) plr1   where    plr1.row_num = 1) pl1 on   pl1.uetr = nt.uetr  where   NT.process_type = 'IP') v where  RESPONSE_DETAIL <> 'OTHER' $AND union select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when ntpl.status in (UPPER('IP_RCT_CC_POSTING_SUCCESS')) then 'Posting Completed to FD'    else 'OTHER'   end as RESPONSE_DETAIL  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr  inner join (   select    plr.npsstpl_id,    plr.uetr,    plr.created_date,    plr.row_num   from    (    select     a.npsstpl_id,     a.uetr,     a.created_date,     row_number() over( partition by a.uetr    order by     a.npsstpl_id desc) as row_num    from     npss_trn_process_log a ) plr   where    plr.row_num = 1) pl on   pl.uetr = nt.uetr  inner join (   select    plr1.npsstpl_id,    plr1.uetr,    plr1.created_date,    plr1.row_num   from    (    select     a1.npsstpl_id,     a1.uetr,     a1.created_date,     row_number() over( partition by a1.uetr    order by     a1.npsstpl_id asc) as row_num    from     npss_trn_process_log a1 ) plr1   where    plr1.row_num = 1) pl1 on   pl1.uetr = nt.uetr  where   NT.process_type = 'IP') v where  RESPONSE_DETAIL <> 'OTHER' $AND union select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when NTPL.process_name = 'Place pacs002' then 'Response sent to CB'    else 'OTHER'   end as RESPONSE_DETAIL  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr  inner join (   select    plr.npsstpl_id,    plr.uetr,    plr.created_date,    plr.row_num   from    (    select     a.npsstpl_id,     a.uetr,     a.created_date,     row_number() over( partition by a.uetr    order by     a.npsstpl_id desc) as row_num    from     npss_trn_process_log a ) plr   where    plr.row_num = 1) pl on   pl.uetr = nt.uetr  inner join (   select    plr1.npsstpl_id,    plr1.uetr,    plr1.created_date,    plr1.row_num   from    (    select     a1.npsstpl_id,     a1.uetr,     a1.created_date,     row_number() over( partition by a1.uetr    order by     a1.npsstpl_id asc) as row_num    from     npss_trn_process_log a1 ) plr1   where    plr1.row_num = 1) pl1 on   pl1.uetr = nt.uetr  where   NT.process_type = 'IP') v where  RESPONSE_DETAIL <> 'OTHER' $AND union select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when ntpl.status in (UPPER('IP_RCT_PC_POSTING_FAILURE'), UPPER('IP_RCT_POSTING_SUSPICIOUS'), UPPER('IP_RCT_POSTING_FAILURE'),('IP_RCT_CC_POSTING_FAILURE'), UPPER('IP_RCT_PC_POSTING_SUSPICIOUS'), UPPER('IP_RCT_CC_POSTING_SUSPICIOUS')) then 'Repair Queue'    else 'OTHER'   end as RESPONSE_DETAIL  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr  inner join (   select    plr.npsstpl_id,    plr.uetr,    plr.created_date,    plr.row_num   from    (    select     a.npsstpl_id,     a.uetr,     a.created_date,     row_number() over( partition by a.uetr    order by     a.npsstpl_id desc) as row_num    from     npss_trn_process_log a ) plr   where    plr.row_num = 1) pl on   pl.uetr = nt.uetr  inner join (   select    plr1.npsstpl_id,    plr1.uetr,    plr1.created_date,    plr1.row_num   from    (    select     a1.npsstpl_id,     a1.uetr,     a1.created_date,     row_number() over( partition by a1.uetr    order by     a1.npsstpl_id asc) as row_num    from     npss_trn_process_log a1 ) plr1   where    plr1.row_num = 1) pl1 on   pl1.uetr = nt.uetr  where   NT.process_type = 'IP') v where  RESPONSE_DETAIL <> 'OTHER' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS IP Master Dashboard Tran CCD","filter":[{"filter_name":"CREATEDDATE","binding_name":"CREATEDDATE","binding_value":"","source_name":"CREATEDDATE","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"DATE","conj_operator":"","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"PROCESS_TYPE","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSGROUP","binding_name":"PROCESSGROUP","binding_value":"","source_name":"PROCESSGROUP","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"RESPONSE_DETAIL","binding_name":"RESPONSE_DETAIL","binding_value":"","source_name":"RESPONSE_DETAIL","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Creation Date & Time","target_column":"start_date","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Tran Completion Date & Time","target_column":"end_date","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"intrbk_sttlm_cur","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"intrbk_sttlm_amnt","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"cdtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Card Number","target_column":"cr_acct_identification","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"dbtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "inward"
	inward__sp_for_ip_chart() { 
		let Dest_Is_ctrl=true
		
		let source_id="inward"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1679497331214"
		let event_params={"caller_name":"inward__sp_for_ip_chart","event_desc":"SP for IP chart","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"inward","raiseparam":{"profile_code":"BTL_1304_1678973592738"}}
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

	//Handler for SELECTION_CHANGED event of "outward"
	outward__brfq_for_tran_list_from_op_chart() { 
		let Dest_Is_ctrl=true
		
		let source_id="outward"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1679496958893"
		let event_params={"caller_name":"outward__brfq_for_tran_list_from_op_chart","event_desc":"BRFQ for tran list from OP Chart","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"outward","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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
	outward__se_for_tran_list_from_op_chart() { 
		let Dest_Is_ctrl=true
		
		let source_id="outward"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1679496970198"
		let event_params={"caller_name":"outward__se_for_tran_list_from_op_chart","event_desc":"SE for tran list from OP Chart","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"outward","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"e_1679496970198":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_14","event_code":"E_1679496970198","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679498847709","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Master Dashboard Tran","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"start_date","alias_name":"","mq_id":"MQ_1679498180562","date_format":false},{"column_name":"end_date","alias_name":"","mq_id":"MQ_1679498181122","date_format":false},{"column_name":"department_code","alias_name":"","mq_id":"MQ_1679498181282","date_format":false},{"column_name":"RESPONSE_DETAIL","alias_name":"","mq_id":"MQ_1679498181442","date_format":false},{"column_name":"uetr","alias_name":"","mq_id":"MQ_1679498181586","date_format":false},{"column_name":"process_group","alias_name":"","mq_id":"MQ_1679498181730","date_format":false},{"column_name":"processgroup","alias_name":"","mq_id":"MQ_1679498257674","date_format":false},{"column_name":"dbtr_iban","alias_name":"","mq_id":"MQ_1679498573340","date_format":false},{"column_name":"cr_acct_identification","alias_name":"","mq_id":"MQ_1679498573525","date_format":false},{"column_name":"cdtr_iban","alias_name":"","mq_id":"MQ_1679498573708","date_format":false},{"column_name":"intrbk_sttlm_amnt","alias_name":"","mq_id":"MQ_1679498573883","date_format":false,"currency_format":true},{"column_name":"intrbk_sttlm_cur","alias_name":"","mq_id":"MQ_1679498610989","date_format":false}],"joins":[]},"eq_text":"select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when NT.process_type in ('OP') then 'Total'    else 'OTHER'   end as RESPONSE_DETAIL  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr  inner join (   select    plr.npsstpl_id,    plr.uetr,    plr.created_date,    plr.row_num   from    (    select     a.npsstpl_id,     a.uetr,     a.created_date,     row_number() over( partition by a.uetr    order by     a.npsstpl_id desc) as row_num    from     npss_trn_process_log a ) plr   where    plr.row_num = 1) pl on   pl.uetr = nt.uetr  inner join (   select    plr1.npsstpl_id,    plr1.uetr,    plr1.created_date,    plr1.row_num   from    (    select     a1.npsstpl_id,     a1.uetr,     a1.created_date,     row_number() over( partition by a1.uetr    order by     a1.npsstpl_id asc) as row_num    from     npss_trn_process_log a1 ) plr1   where    plr1.row_num = 1) pl1 on   pl1.uetr = nt.uetr  where   NT.process_type = 'OP') v where  RESPONSE_DETAIL <> 'OTHER' $AND union select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when ntpl.response_code = UPPER('RJCT')     and ntpl.cbuae_return_code is null then 'NAK response received from CB'     else 'OTHER'    end as RESPONSE_DETAIL   from    npss_transactions nt   inner join npss_trn_process_log ntpl on    ntpl.uetr = nt.uetr   inner join (    select     plr.npsstpl_id,     plr.uetr,     plr.created_date,     plr.row_num    from     (     select      a.npsstpl_id,      a.uetr,      a.created_date,      row_number() over( partition by a.uetr     order by      a.npsstpl_id desc) as row_num     from      npss_trn_process_log a ) plr    where     plr.row_num = 1) pl on    pl.uetr = nt.uetr   inner join (    select     plr1.npsstpl_id,     plr1.uetr,     plr1.created_date,     plr1.row_num    from     (     select      a1.npsstpl_id,      a1.uetr,      a1.created_date,      row_number() over( partition by a1.uetr     order by      a1.npsstpl_id asc) as row_num     from      npss_trn_process_log a1 ) plr1    where     plr1.row_num = 1) pl1 on    pl1.uetr = nt.uetr   where    NT.process_type = 'OP') v where  RESPONSE_DETAIL <> 'OTHER' $AND union select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when ntpl.response_code = UPPER('ACCP')     and ntpl.cbuae_return_code is null then 'ACK response received from CB'     else 'OTHER'    end as RESPONSE_DETAIL   from    npss_transactions nt   inner join npss_trn_process_log ntpl on    ntpl.uetr = nt.uetr   inner join (    select     plr.npsstpl_id,     plr.uetr,     plr.created_date,     plr.row_num    from     (     select      a.npsstpl_id,      a.uetr,      a.created_date,      row_number() over( partition by a.uetr     order by      a.npsstpl_id desc) as row_num     from      npss_trn_process_log a ) plr    where     plr.row_num = 1) pl on    pl.uetr = nt.uetr   inner join (    select     plr1.npsstpl_id,     plr1.uetr,     plr1.created_date,     plr1.row_num    from     (     select      a1.npsstpl_id,      a1.uetr,      a1.created_date,      row_number() over( partition by a1.uetr     order by      a1.npsstpl_id asc) as row_num     from      npss_trn_process_log a1 ) plr1    where     plr1.row_num = 1) pl1 on    pl1.uetr = nt.uetr   where    NT.process_type = 'OP') v where  RESPONSE_DETAIL <> 'OTHER' $AND union select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when ntpl.response_code = UPPER('ACCP')     and ntpl.cbuae_return_code is not null     and ntpl.process_name not in ('Receive pacs004') then 'Accepted by Bene Bank'     else 'OTHER'    end as RESPONSE_DETAIL   from    npss_transactions nt   inner join npss_trn_process_log ntpl on    ntpl.uetr = nt.uetr   inner join (    select     plr.npsstpl_id,     plr.uetr,     plr.created_date,     plr.row_num    from     (     select      a.npsstpl_id,      a.uetr,      a.created_date,      row_number() over( partition by a.uetr     order by      a.npsstpl_id desc) as row_num     from      npss_trn_process_log a ) plr    where     plr.row_num = 1) pl on    pl.uetr = nt.uetr   inner join (    select     plr1.npsstpl_id,     plr1.uetr,     plr1.created_date,     plr1.row_num    from     (     select      a1.npsstpl_id,      a1.uetr,      a1.created_date,      row_number() over( partition by a1.uetr     order by      a1.npsstpl_id asc) as row_num     from      npss_trn_process_log a1 ) plr1    where     plr1.row_num = 1) pl1 on    pl1.uetr = nt.uetr   where    NT.process_type = 'OP') v where  RESPONSE_DETAIL <> 'OTHER' $AND union select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification ,   dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when ntpl.response_code = UPPER('RJCT')     and ntpl.cbuae_return_code is not null then 'Rejected by Bene'     else 'OTHER'    end as RESPONSE_DETAIL   from    npss_transactions nt   inner join npss_trn_process_log ntpl on    ntpl.uetr = nt.uetr   inner join (    select     plr.npsstpl_id,     plr.uetr,     plr.created_date,     plr.row_num    from     (     select      a.npsstpl_id,      a.uetr,      a.created_date,      row_number() over( partition by a.uetr     order by      a.npsstpl_id desc) as row_num     from      npss_trn_process_log a ) plr    where     plr.row_num = 1) pl on    pl.uetr = nt.uetr   inner join (    select     plr1.npsstpl_id,     plr1.uetr,     plr1.created_date,     plr1.row_num    from     (     select      a1.npsstpl_id,      a1.uetr,      a1.created_date,      row_number() over( partition by a1.uetr     order by      a1.npsstpl_id asc) as row_num     from      npss_trn_process_log a1 ) plr1    where     plr1.row_num = 1) pl1 on    pl1.uetr = nt.uetr   where    NT.process_type = 'OP') v where  RESPONSE_DETAIL <> 'OTHER' $AND union select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when NT.process_status in ('RCTCompleted', 'RCTReturned')     and NTPL.process_name = 'Place Pacs008' then 'Send to CB'     else 'OTHER'    end as RESPONSE_DETAIL   from    npss_transactions nt   inner join npss_trn_process_log ntpl on    ntpl.uetr = nt.uetr   inner join (    select     plr.npsstpl_id,     plr.uetr,     plr.created_date,     plr.row_num    from     (     select      a.npsstpl_id,      a.uetr,      a.created_date,      row_number() over( partition by a.uetr     order by      a.npsstpl_id desc) as row_num     from      npss_trn_process_log a ) plr    where     plr.row_num = 1) pl on    pl.uetr = nt.uetr   inner join (    select     plr1.npsstpl_id,     plr1.uetr,     plr1.created_date,     plr1.row_num    from     (     select      a1.npsstpl_id,      a1.uetr,      a1.created_date,      row_number() over( partition by a1.uetr     order by      a1.npsstpl_id asc) as row_num     from      npss_trn_process_log a1 ) plr1    where     plr1.row_num = 1) pl1 on    pl1.uetr = nt.uetr   where    NT.process_type = 'OP') v where  RESPONSE_DETAIL <> 'OTHER' $AND union select  distinct npsst_id,  department_code ,  uetr,  created_date,  process_type,  createddate,  start_date,  end_date,  process_group,  processgroup,  RESPONSE_DETAIL,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  fn_card_decrypt_and_mask(cr_acct_identification, $PCIDSS_KEY) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate,   TO_CHAR(pl1.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as start_date,   TO_CHAR(pl.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as end_date,   NT.process_group,   case    when nt.process_status like UPPER('RCT%') then 'Online'    when nt.process_status like UPPER('BCT%') then 'Batch'   end as processgroup,   ntpl.process_name,   case    when ntpl.status in (UPPER('OP_P2P_POSTING_SUCCESS'), UPPER('OP_P2B_FUND_AUTHORIZED')) then 'Posting Completed'    when ntpl.status in (UPPER('OP_AC_STATUS_ACCEPTED'), UPPER('OP_P2P_STATUS_ACCEPTED'), UPPER('OP_P2B_STATUS_ACCEPTED')) then 'CB ACK'    when ntpl.status in (UPPER('OP_AC_REV_POSTING_SUCCESS'), UPPER('OP_AC_STATUS_REJECTED'), UPPER('OP_P2B_STATUS_REJECTED'), UPPER('OP_P2B_REV_POSTING_SUCCESS'), UPPER('OP_P2P_STATUS_REJECTED'), UPPER('OP_P2P_REV_POSTING_SUCCESS')) then 'CB NACK'    else 'OTHER'   end as RESPONSE_DETAIL  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr  inner join (   select    plr.npsstpl_id,    plr.uetr,    plr.created_date,    plr.row_num   from    (    select     a.npsstpl_id,     a.uetr,     a.created_date,     row_number() over( partition by a.uetr    order by     a.npsstpl_id desc) as row_num    from     npss_trn_process_log a ) plr   where    plr.row_num = 1) pl on   pl.uetr = nt.uetr  inner join (   select    plr1.npsstpl_id,    plr1.uetr,    plr1.created_date,    plr1.row_num   from    (    select     a1.npsstpl_id,     a1.uetr,     a1.created_date,     row_number() over( partition by a1.uetr    order by     a1.npsstpl_id asc) as row_num    from     npss_trn_process_log a1 ) plr1   where    plr1.row_num = 1) pl1 on   pl1.uetr = nt.uetr  where   NT.process_type = 'OP') v where  RESPONSE_DETAIL <> 'OTHER' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Master Dashboard Tran CCD","filter":[{"filter_name":"CREATEDDATE","binding_name":"CREATEDDATE","binding_value":"","source_name":"CREATEDDATE","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"DATE","conj_operator":"AND","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"PROCESS_TYPE","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSGROUP","binding_name":"PROCESSGROUP","binding_value":"","source_name":"PROCESSGROUP","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"RESPONSE_DETAIL","binding_name":"RESPONSE_DETAIL","binding_value":"","source_name":"RESPONSE_DETAIL","source_value":"","source_type":"LOCAL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Creation Date & Time","target_column":"start_date","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Tran Completion Date & Time","target_column":"end_date","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"intrbk_sttlm_cur","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"intrbk_sttlm_amnt","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"cdtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Card Number","target_column":"cr_acct_identification","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"dbtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "outward"
	outward__svm_for_op_chart() { 
		let Dest_Is_ctrl=true
		
		let source_id="outward"
		let destn_id="outward"
		let parent_source_id=""
		let event_code="e_1679497013317"
		let event_params={"caller_name":"outward__svm_for_op_chart","event_desc":"SVM for OP chart","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"outward","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_39","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1679497533134","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Master Dashboard","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"RESPONSE_DETAIL","alias_name":"","mq_id":"MQ_1679492405454","date_format":false},{"column_name":"RESPONSE_DETAIL_COUNT","alias_name":"","mq_id":"MQ_1679492405596","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1679492785033","date_format":false}],"joins":[]},"eq_text":"select  X.RESPONSE_DETAIL,  x.RESPONSE_DETAIL_COUNT,  X.PROCESS_TYPE,  x.createddate,  X.processgroup from  (  select   res.PROCESS_TYPE,   res.createddate,   coalesce(sum(res.Total), 0::numeric) as Total,   coalesce(sum(res.ACK_response_received_from_CB), 0::numeric) as ACK_response_received_from_CB,   coalesce(sum(res.NAK_Response_received_from_CB), 0::numeric) as NAK_Response_received_from_CB,   coalesce(sum(res.Accepted_by_Bene_Bank), 0::numeric) as Accepted_by_Bene_Bank,   coalesce(sum(res.Rejected_by_Bene), 0::numeric) as Rejected_by_Bene,   coalesce(sum(res.Posting_Completed), 0::numeric) as Posting_Completed,   coalesce(sum(res.Send_to_CB), 0::numeric) as Send_to_CB,   coalesce(sum(res.CB_ACK), 0::numeric) as CB_ACK,   coalesce(sum(res.CB_NACK), 0::numeric) as CB_NACK,   res.processgroup  from   (select     count(distinct case when res1.process_type = 'OP' then res1.npsst_id end) as Total,     count(distinct case when res1.response_code = UPPER('ACCP') and res1.cbuae_return_code is null then res1.npsst_id end) as ACK_response_received_from_CB,     count(distinct case when res1.response_code = UPPER('RJCT') and res1.cbuae_return_code is null then res1.npsst_id end) as NAK_Response_received_from_CB,     count(distinct case when res1.response_code = UPPER('ACCP') and res1.cbuae_return_code is not null and res1.process_name not in ('Receive pacs004') then res1.npsst_id end) as Accepted_by_Bene_Bank,     count(distinct case when res1.response_code = UPPER('RJCT') and res1.cbuae_return_code is not null then res1.npsst_id end) as Rejected_by_Bene,     count(distinct case when res1.status in (UPPER('OP_P2P_POSTING_SUCCESS'), UPPER('OP_P2B_FUND_AUTHORIZED')) then res1.npsst_id end) as Posting_Completed,     count(distinct case when res1.process_status in ('RCTCompleted', 'RCTReturned') and res1.process_name = 'Place Pacs008' then res1.npsst_id end) as Send_to_CB,     count(distinct case when res1.status in (UPPER('OP_AC_STATUS_ACCEPTED'), UPPER('OP_P2P_STATUS_ACCEPTED'), UPPER('OP_P2B_STATUS_ACCEPTED')) then res1.npsst_id end) as CB_ACK,     count(distinct case when res1.status in (UPPER('OP_AC_REV_POSTING_SUCCESS'), UPPER('OP_AC_STATUS_REJECTED'), UPPER('OP_P2B_STATUS_REJECTED'), UPPER('OP_P2B_REV_POSTING_SUCCESS'), UPPER('OP_P2P_STATUS_REJECTED'), UPPER('OP_P2P_REV_POSTING_SUCCESS')) then res1.npsst_id end) as CB_NACK,    processgroup,    CREATED_DATE,    TENANT_ID,    DEPARTMENT_CODE,    PROCESS_TYPE,    createddate   from    (    select    nt.npsst_id,     NT.CREATED_DATE,     NT.TENANT_ID,     case      when nt.process_status like UPPER('RCT%') then 'Online'      when nt.process_status like UPPER('BCT%') then 'Batch'     end as processgroup,     NT.department_code,     NT.process_type,     NT.uetr,     ntpl.response_code,     ntpl.process_status,     ntpl.status,     ntpl.process_name,     ntpl.cbuae_return_code,     to_char(nt.created_date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as createddate    from     npss_trn_process_log ntpl    inner join npss_transactions nt on     NT.uetr = NTPL.uetr    where     NT.process_type = 'OP') res1    group by     res1.CREATED_DATE,     res1.TENANT_ID,     res1.processgroup,     res1.department_code,     res1.process_type,     res1.createddate     )res $WHERE group by   res.PROCESS_TYPE,   res.createddate,   res.processgroup) T cross join lateral( values ('Total', T.TOTAL, T.PROCESS_TYPE, t.createddate, T.processgroup), ('ACK response received from CB', T.ACK_response_received_from_CB, T.PROCESS_TYPE, t.createddate, T.processgroup), ('NAK response received from CB', T.NAK_Response_received_from_CB, T.PROCESS_TYPE, t.createddate, T.processgroup), ('Accepted by Bene Bank', T.Accepted_by_Bene_Bank, T.PROCESS_TYPE, t.createddate, T.processgroup), ('Rejected by Bene', T.Rejected_by_Bene, T.PROCESS_TYPE, t.createddate, T.processgroup), ('Posting Completed', T.Posting_Completed, T.PROCESS_TYPE, t.createddate, T.processgroup), ('Send to CB', T.Send_to_CB, T.PROCESS_TYPE, t.createddate, T.processgroup), ('CB ACK', T.CB_ACK, T.PROCESS_TYPE, t.createddate, T.processgroup), ('CB NACK', T.CB_NACK, T.PROCESS_TYPE, t.createddate, T.processgroup)) X (RESPONSE_DETAIL,  RESPONSE_DETAIL_COUNT,  PROCESS_TYPE,  createddate,processgroup)"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Master Dashboard","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"RESPONSE_DETAIL","target_column":"RESPONSE_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"RESPONSE_DETAIL_COUNT","target_column":"RESPONSE_DETAIL_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "outward"
	outward__sp_for_op_layout() { 
		let Dest_Is_ctrl=true
		
		let source_id="outward"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1679497428988"
		let event_params={"caller_name":"outward__sp_for_op_layout","event_desc":"SP for OP layout","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"outward","raiseparam":{"profile_code":"BTL_1304_1678973592738"}}
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
