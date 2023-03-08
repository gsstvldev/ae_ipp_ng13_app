/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28562 
Modified By     : Admin 
Modified Date   : 2023-Mar-08 10:52 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_user_activities
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'

@Component({
	selector: 's_user_activities',
	templateUrl: './s_user_activities.component.html',
	styleUrls: ['./s_user_activities.component.css'],
	providers:[]
})
    
// Start of class 
export class s_user_activitiesComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_user_activities"
	wftpa_id : string = "WFT_NPSS_P_1304_1673616282309_0"
	cg_code : string = "CG_1304_1673614044959"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID","dtt_1304_1670492310194":"NPSSASP_ID","dtt_1304_1670589169341":"NPSSCAPL_ID","dtt_1304_1672928670076":"NPSSNL_ID","dtt_1304_1674198360280":"NPSSE_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "search"
	uicgc_2 : string = "users"
	uicgc_3 : string = "tabview"
	uicgc_4 : string = "user_sessions"
	uicgc_5 : string = "menu_access"
	uicgc_6 : string = "password_history"
	uicgc_7 : string = "activities"
	uicgc_8 : string = "navigation"
	uicgc_9 : string = "authentication_history"
	key_events : any = {}
	btl_1304_1676608963080 : string = "p_authentication_history"
	btl_1304_1673614734718 : string = "p_activities"
	btl_1304_1673614707921 : string = "p_password_history_layout"
	btl_1304_1673614684841 : string = "p_menu_access_layout"
	btl_1304_1673614486990 : string = "p_user_sessions_layout"
	btl_1304_1673614365723 : string = "p_main_layout"
	btl_1304_1673614342707 : string = "p_search_layout"
	forms : any = ["uicgc_1","uicgc_8"]
	p_search_layout__spap_for_search_showpopup : boolean = false
	search : any = {}
	search_clear : any = {}
	search_search : any = {}
	users : any = {}
	tabview : any = {}
	user_sessions : any = {}
	menu_access : any = {}
	password_history : any = {}
	activities : any = {}
	navigation : any = {}
	navigation_search : any = {}
	authentication_history : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_1"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1665903906193","is_tab_mode":"N","dtt_1304_1665903906193":{"0":[{"dttv_id":"NPSS User Log SRCh","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS TRN REQ RESP DTLS"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_user_log_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_user_log_srch"
		
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
	
		// Component level properties - "Users" 
		this.users.uictrl_code = "datatable"
		this.users.uicgc_desc = "Users"
		this.users.uicgc_code = "uicgc_2"
		this.users.params = {"need_pag_datatable":"Y","need_search":"N"}
		this.users.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1673616483307","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS User MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"LOGIN_NAME","alias_name":"","mq_id":"MQ_1673616369095","date_format":false},{"column_name":"FIRST_NAME","alias_name":"","mq_id":"MQ_1673616369285","date_format":false},{"column_name":"LAST_NAME","alias_name":"","mq_id":"MQ_1673616369629","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673616369845","date_format":true},{"column_name":"LAST_SUCCESSFUL_LOGIN","alias_name":"","mq_id":"MQ_1673616370037","date_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1673616370229","date_format":false},{"column_name":"tenant_id","alias_name":"","mq_id":"MQ_1673616420761","date_format":false},{"column_name":"STAFF_ID","alias_name":"","mq_id":"MQ_1674564374458","date_format":false},{"column_name":"STAFF_NO","alias_name":"","mq_id":"MQ_1674565442233","date_format":false}],"joins":[]},"eq_text":"select  LOGIN_NAME,  FIRST_NAME,  LAST_NAME,  CREATED_DATE,  LAST_SUCCESSFUL_LOGIN,  u_id,  tenant_id,  STATUS,  STAFF_ID,  STAFF_NO from  (  select   U.LOGIN_NAME,   U.FIRST_NAME,   U.LAST_NAME,   U.CREATED_DATE,   U.LAST_SUCCESSFUL_LOGIN,   U.STATUS,   u.u_id,   u.tenant_id,   U.STAFF_ID,   cue.STAFF_NO  from   <CLT_CAS>.USERS U  inner join <TRAN_DB>.core_user_extn cue on cue.U_ID = U.U_ID) V $WHERE   order by LOGIN_NAME"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS User CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Login Name","target_column":"LOGIN_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"First Name","target_column":"FIRST_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Last Name","target_column":"LAST_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Staff No","target_column":"STAFF_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy hh:mm a\"","date_format":true},{"header":"Last Successful Login","target_column":"LAST_SUCCESSFUL_LOGIN","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy hh:mm a\"","date_format":true},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.users.context_menu = []
		this.users.views = {}
		this.users.onChangecomponent = new EventEmitter<any>()
		this.users.show = true
		this.users.dynamic_param = {}
	
		// Component level properties - "TabView" 
		this.tabview.uictrl_code = "tabview"
		this.tabview.uicgc_desc = "TabView"
		this.tabview.uicgc_code = "uicgc_3"
		this.tabview.params = [{"desc":"User Sessions","profile_code":"BTL_1304_1673614486990","id":1673614596012},{"desc":"Authentication History","profile_code":"BTL_1304_1676608963080","id":1676608746180},{"desc":"Password History","profile_code":"BTL_1304_1673614707921","id":1673614639076},{"desc":"Menu Access","profile_code":"BTL_1304_1673614684841","id":1673614631612},{"desc":"Activities","profile_code":"BTL_1304_1673614734718","id":1673614643467}]
		this.tabview.datasource = {}
		this.tabview.context_menu = []
		this.tabview.views = {}
		this.tabview.onChangecomponent = new EventEmitter<any>()
		this.tabview.show = true
		this.tabview.dynamic_param = {}
		this.tabview.mode = "tab"
		this.tabview.tab_profiles = {"p_user_sessions_layout":{"header":"User Sessions","profile_code":"BTL_1304_1673614486990","index":0,"selected":false,"disabled":false,"show":true,"invalid":false,"dynamic_class":"","app_user_role":[],"component":[],"showclass":"show"},"p_authentication_history":{"header":"Authentication History","profile_code":"BTL_1304_1676608963080","index":1,"selected":false,"disabled":false,"show":true,"invalid":false,"dynamic_class":"","app_user_role":[],"component":[],"showclass":"show"},"p_password_history_layout":{"header":"Password History","profile_code":"BTL_1304_1673614707921","index":2,"selected":false,"disabled":false,"show":true,"invalid":false,"dynamic_class":"","app_user_role":[],"component":[],"showclass":"show"},"p_menu_access_layout":{"header":"Menu Access","profile_code":"BTL_1304_1673614684841","index":3,"selected":false,"disabled":false,"show":true,"invalid":false,"dynamic_class":"","app_user_role":[],"component":[],"showclass":"show"},"p_activities":{"header":"Activities","profile_code":"BTL_1304_1673614734718","index":4,"selected":false,"disabled":false,"show":true,"invalid":false,"dynamic_class":"","app_user_role":[],"component":[],"showclass":"show"}}
		this.tabview.activeindex = 0
	
		// Component level properties - "User Sessions" 
		this.user_sessions.uictrl_code = "datatable"
		this.user_sessions.uicgc_desc = "User Sessions"
		this.user_sessions.uicgc_code = "uicgc_4"
		this.user_sessions.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.user_sessions.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1673616509928","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS User Session MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"LOGIN_NAME","alias_name":"","mq_id":"MQ_1673616953211","date_format":false},{"column_name":"U_ID","alias_name":"","mq_id":"MQ_1673616954329","date_format":false},{"column_name":"LOGIN_IP","alias_name":"","mq_id":"MQ_1673616954545","date_format":false},{"column_name":"LOGON_TIME","alias_name":"","mq_id":"MQ_1673616954745","date_format":true},{"column_name":"LOGOUT_TIME","alias_name":"","mq_id":"MQ_1673617219314","date_format":true}],"joins":[]},"eq_text":"select  LOGIN_NAME,  U_ID,  LOGIN_IP,  LOGON_TIME,  LOGOUT_TIME from  (  select   HUS.LOGIN_NAME,   HUS.U_ID,   HUS.LOGIN_IP,   HUS.LOGON_TIME,   HUS.LOGOUT_TIME  from   <CLT_CAS>.HST_USER_SESSIONS HUS)V $WHERE   ORDER BY LOGON_TIME DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS User Session CCD","filter":[{"filter_name":"U_ID","binding_name":"U_ID","binding_value":"","source_name":"MI_LEVEL_U_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Login Name","target_column":"LOGIN_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"User Id","target_column":"U_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Login Time","target_column":"LOGON_TIME","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy hh:mm a\"","date_format":true},{"header":"Logout Time","target_column":"LOGOUT_TIME","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy hh:mm a\"","date_format":true}]}}}}}}
		this.user_sessions.context_menu = []
		this.user_sessions.views = {}
		this.user_sessions.onChangecomponent = new EventEmitter<any>()
		this.user_sessions.show = true
		this.user_sessions.dynamic_param = {}
	
		// Component level properties - "Menu Access" 
		this.menu_access.uictrl_code = "datatable"
		this.menu_access.uicgc_desc = "Menu Access"
		this.menu_access.uicgc_code = "uicgc_5"
		this.menu_access.params = {"need_pag_datatable":"Y","need_search":"N"}
		this.menu_access.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1673616538425","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS User Menu Acess MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"LOGIN_NAME","alias_name":"","mq_id":"MQ_1673617360451","date_format":false},{"column_name":"U_ID","alias_name":"","mq_id":"MQ_1673617360634","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673617360810","date_format":true},{"column_name":"MODULE_NAME","alias_name":"","mq_id":"MQ_1673617361442","date_format":false},{"column_name":"MENU_GROUP","alias_name":"","mq_id":"MQ_1673617385968","date_format":false},{"column_name":"MENU_DESC","alias_name":"","mq_id":"MQ_1673617386180","date_format":false},{"column_name":"APP_CODE","alias_name":"","mq_id":"MQ_1676617740678","date_format":false},{"column_name":"APP_DESCRIPTION","alias_name":"","mq_id":"MQ_1676643550452","date_format":false}],"joins":[]},"eq_text":"select  LOGIN_NAME,  U_ID,  CREATED_DATE,  APP_CODE,  APP_DESCRIPTION,  MODULE_NAME,  MENU_GROUP,  MENU_DESC from  (  select   L.LOGIN_NAME,   L.U_ID,   L.CREATED_DATE,   A.APP_CODE ,   A.APP_DESCRIPTION,   L.MODULE_NAME,   L.MENU_GROUP,   L.MENU_DESC  from   <CLT_CAS>.USER_MENU_ACCESS_LOG L   inner join <CLT_CAS>.APPLICATIONS A on   A.APP_ID = L.APP_ID )V $WHERE order by  CREATED_DATE desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS User Menu Access CCD","filter":[{"filter_name":"U_ID","binding_name":"U_ID","binding_value":"","source_name":"MI_LEVEL_U_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Login Name","target_column":"LOGIN_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"User ID","target_column":"U_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Accessed Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy hh:mm a\"","date_format":true},{"header":"App Name","target_column":"APP_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Module","target_column":"MODULE_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Menu Group","target_column":"MENU_GROUP","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Screen Name","target_column":"MENU_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.menu_access.context_menu = []
		this.menu_access.views = {}
		this.menu_access.onChangecomponent = new EventEmitter<any>()
		this.menu_access.show = true
		this.menu_access.dynamic_param = {}
	
		// Component level properties - "Password History" 
		this.password_history.uictrl_code = "datatable"
		this.password_history.uicgc_desc = "Password History"
		this.password_history.uicgc_code = "uicgc_6"
		this.password_history.params = {"need_pag_datatable":"Y","need_search":"N"}
		this.password_history.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_6","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1673616527690","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS User Password Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"U_ID","alias_name":"","mq_id":"MQ_1673617606381","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673617606580","date_format":true},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1673617606765","date_format":false},{"column_name":"LOGIN_NAME","alias_name":"","mq_id":"MQ_1673617607189","date_format":false}],"joins":[]},"eq_text":"SELECT  U_ID,  CREATED_DATE ,  TENANT_ID,  LOGIN_NAME FROM  (  SELECT   P.U_ID,   P.CREATED_DATE,   U.TENANT_ID,   U.LOGIN_NAME  FROM   <CLT_CAS>.USER_PASSWORD_LOG P  INNER JOIN <CLT_CAS>.USERS U ON   P.U_ID = U.U_ID)V $WHERE ORDER BY  CREATED_DATE DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS User Password Log CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"U_ID","binding_name":"U_ID","binding_value":"","source_name":"MI_LEVEL_U_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Login Name","target_column":"LOGIN_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"User ID","target_column":"U_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Password Changed Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy hh:mm a\"","date_format":true}]}}}}}}
		this.password_history.context_menu = []
		this.password_history.views = {}
		this.password_history.onChangecomponent = new EventEmitter<any>()
		this.password_history.show = true
		this.password_history.dynamic_param = {}
	
		// Component level properties - "Activities" 
		this.activities.uictrl_code = "datatable"
		this.activities.uicgc_desc = "Activities"
		this.activities.uicgc_code = "uicgc_7"
		this.activities.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.activities.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_7","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1673616546921","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS PRC Token MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"U_ID","alias_name":"","mq_id":"MQ_1673618534549","date_format":false},{"column_name":"MODULE","alias_name":"","mq_id":"MQ_1673618534813","date_format":false},{"column_name":"MENU_GROUP","alias_name":"","mq_id":"MQ_1673618535037","date_format":false},{"column_name":"MENU_ITEM","alias_name":"","mq_id":"MQ_1673618535221","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1673618535405","date_format":false},{"column_name":"LOGIN_NAME","alias_name":"","mq_id":"MQ_1673618571074","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673619004932","date_format":true},{"column_name":"APP_CODE","alias_name":"","mq_id":"MQ_1676639779774","date_format":false},{"column_name":"APP_DESCRIPTION","alias_name":"","mq_id":"MQ_1676643998203","date_format":false}],"joins":[]},"eq_text":"select  U_ID,  APP_CODE,  APP_DESCRIPTION,  module,  MENU_GROUP ,  MENU_ITEM ,  PROCESS_NAME,  TENANT_ID,  CREATED_DATE,  LOGIN_NAME from  (  select   U.U_ID,   A.APP_CODE,   A.APP_DESCRIPTION,   T.MODULE,   T.MENU_GROUP ,   T.MENU_ITEM ,   T.PROCESS_NAME,   T.TENANT_ID,   T.CREATED_DATE,   U.LOGIN_NAME  from   PRC_TOKENS T  inner join <CLT_CAS>.USERS U on   T.CREATED_BY = U.U_ID  inner join <CLT_CAS>.APPLICATIONS A on   A.APP_ID = T.APP_ID)V $WHERE order by  CREATED_DATE desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS User PRC Token MQ","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"U_ID","binding_name":"U_ID","binding_value":"","source_name":"MI_LEVEL_U_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Login Name","target_column":"LOGIN_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Activity Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy hh:mm a\"","date_format":true},{"header":"App Name","target_column":"APP_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Module","target_column":"MODULE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Menu Group","target_column":"MENU_GROUP","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Screen Name","target_column":"MENU_ITEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Activity Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.activities.context_menu = []
		this.activities.views = {}
		this.activities.onChangecomponent = new EventEmitter<any>()
		this.activities.show = true
		this.activities.dynamic_param = {}
	
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
	
		// Component level properties - "Authentication History" 
		this.authentication_history.uictrl_code = "datatable"
		this.authentication_history.uicgc_desc = "Authentication History"
		this.authentication_history.uicgc_code = "uicgc_9"
		this.authentication_history.params = {"need_pag_datatable":"Y","need_search":"N"}
		this.authentication_history.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_9","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1676609482672","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Authentication History MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"LOGIN_STATUS","alias_name":"","mq_id":"MQ_1676609342442","date_format":false},{"column_name":"REMARKS","alias_name":"","mq_id":"MQ_1676609342808","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1676644551497","date_format":true}],"joins":[]},"eq_text":"select  LOGIN_STATUS,  REMARKS,  U_ID,  TENANT_ID,  CREATED_DATE from  (  select   U.U_ID,   UAL.LOGIN_NAME,   UAL.REMARKS ,   UAL.TENANT_ID ,   UAL.LOGIN_STATUS,  UAL.CREATED_DATE  from   <CLT_CAS>.USER_AUTHENTICATION_LOG UAL  inner join <CLT_CAS>.USERS U on   UAL.LOGIN_NAME = U.LOGIN_NAME) V $WHERE order by CREATED_DATE DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Authentication History CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"U_ID","binding_name":"U_ID","binding_value":"","source_name":"MI_LEVEL_U_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Login Status","target_column":"LOGIN_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remarks","target_column":"REMARKS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true}]}}}}}}
		this.authentication_history.context_menu = []
		this.authentication_history.views = {}
		this.authentication_history.onChangecomponent = new EventEmitter<any>()
		this.authentication_history.show = true
		this.authentication_history.dynamic_param = {}
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__cf_for_pl()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__clear_ui()
	}

	//Handler for SELECTION_CHANGED event of "users"
	users__selection_changed(){
		this.users__svm_for_search_users()
	}

	//Handler for INTERNAL event of "svm for search users"
	svm_for_search_users__internal(parent_event_result){
		this.svm_for_search_users__brfq_for_user_sessions(parent_event_result)
		this.svm_for_search_users__brfq_for_menu_access(parent_event_result)
		this.svm_for_search_users__brfq_for_activities()
		this.svm_for_search_users__brfq_for_password_histroy(parent_event_result)
		this.svm_for_search_users__brfq_for_authentication_his(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__ssp_for_search()
		this.search_search__close_popup()
		this.search_search__clear_ui_for_ma()
		this.search_search__clear_ui_for_ac()
		this.search_search__clear_ui_for__us()
		this.search_search__clear_ui_for_ph()
		this.search_search__cu_for_auth_his()
	}

	//Handler for INTERNAL event of "ssp for search"
	ssp_for_search__internal(parent_event_result){
		this.ssp_for_search__brfq_for_search_to_uers(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for search to uers"
	brfq_for_search_to_uers__internal(parent_event_result){
		this.brfq_for_search_to_uers__sfr_for_users(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation search"
	navigation_search__action_button_click(){
		this.navigation_search__clear_ui_for_navigation()
		this.navigation_search__spap_for_search()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__cf_for_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1673614799499"
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

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__clear_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_clear"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1673614816840"
		let event_params={"caller_name":"search_clear__clear_ui","event_desc":"CLEAR UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_clear","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for SELECTION_CHANGED event of "users"
	users__svm_for_search_users() { 
		let Dest_Is_ctrl=true
		
		let source_id="users"
		let destn_id="users"
		let parent_source_id=""
		let event_code="e_1673614937502"
		let event_params={"caller_name":"users__svm_for_search_users","event_desc":"SVM for search users","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"users","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_search_users__brfq_for_user_sessions,svm_for_search_users__brfq_for_menu_access,svm_for_search_users__brfq_for_activities,svm_for_search_users__brfq_for_password_histroy,svm_for_search_users__brfq_for_authentication_his,"
		let event_data={"users":{"e_1673614937502":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_2","event_code":"E_1673614937502","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS TRN REQ RESP DTLS","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"U_ID","level":"MI_LEVEL","name":"MI_LEVEL_U_ID","setd3name":"U_ID"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1673616483307","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS User MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"LOGIN_NAME","alias_name":"","mq_id":"MQ_1673616369095","date_format":false},{"column_name":"FIRST_NAME","alias_name":"","mq_id":"MQ_1673616369285","date_format":false},{"column_name":"LAST_NAME","alias_name":"","mq_id":"MQ_1673616369629","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673616369845","date_format":true},{"column_name":"LAST_SUCCESSFUL_LOGIN","alias_name":"","mq_id":"MQ_1673616370037","date_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1673616370229","date_format":false},{"column_name":"tenant_id","alias_name":"","mq_id":"MQ_1673616420761","date_format":false},{"column_name":"STAFF_ID","alias_name":"","mq_id":"MQ_1674564374458","date_format":false},{"column_name":"STAFF_NO","alias_name":"","mq_id":"MQ_1674565442233","date_format":false}],"joins":[]},"eq_text":"select  LOGIN_NAME,  FIRST_NAME,  LAST_NAME,  CREATED_DATE,  LAST_SUCCESSFUL_LOGIN,  u_id,  tenant_id,  STATUS,  STAFF_ID,  STAFF_NO from  (  select   U.LOGIN_NAME,   U.FIRST_NAME,   U.LAST_NAME,   U.CREATED_DATE,   U.LAST_SUCCESSFUL_LOGIN,   U.STATUS,   u.u_id,   u.tenant_id,   U.STAFF_ID,   cue.STAFF_NO  from   <CLT_CAS>.USERS U  inner join <TRAN_DB>.core_user_extn cue on cue.U_ID = U.U_ID) V $WHERE   order by LOGIN_NAME"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS User CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Login Name","target_column":"LOGIN_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"First Name","target_column":"FIRST_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Last Name","target_column":"LAST_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Staff No","target_column":"STAFF_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy hh:mm a\"","date_format":true},{"header":"Last Successful Login","target_column":"LAST_SUCCESSFUL_LOGIN","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy hh:mm a\"","date_format":true},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for search users"
	svm_for_search_users__brfq_for_user_sessions(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_search_users"
		let destn_id="user_sessions"
		let parent_source_id="users"
		let event_code="e_1673614980980"
		let event_params={"caller_name":"svm_for_search_users__brfq_for_user_sessions","event_desc":"BRFQ for user sessions","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"users","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1673616509928","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS User Session MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"LOGIN_NAME","alias_name":"","mq_id":"MQ_1673616953211","date_format":false},{"column_name":"U_ID","alias_name":"","mq_id":"MQ_1673616954329","date_format":false},{"column_name":"LOGIN_IP","alias_name":"","mq_id":"MQ_1673616954545","date_format":false},{"column_name":"LOGON_TIME","alias_name":"","mq_id":"MQ_1673616954745","date_format":true},{"column_name":"LOGOUT_TIME","alias_name":"","mq_id":"MQ_1673617219314","date_format":true}],"joins":[]},"eq_text":"select  LOGIN_NAME,  U_ID,  LOGIN_IP,  LOGON_TIME,  LOGOUT_TIME from  (  select   HUS.LOGIN_NAME,   HUS.U_ID,   HUS.LOGIN_IP,   HUS.LOGON_TIME,   HUS.LOGOUT_TIME  from   <CLT_CAS>.HST_USER_SESSIONS HUS)V $WHERE   ORDER BY LOGON_TIME DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS User Session CCD","filter":[{"filter_name":"U_ID","binding_name":"U_ID","binding_value":"","source_name":"MI_LEVEL_U_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Login Name","target_column":"LOGIN_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"User Id","target_column":"U_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Login Time","target_column":"LOGON_TIME","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy hh:mm a\"","date_format":true},{"header":"Logout Time","target_column":"LOGOUT_TIME","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy hh:mm a\"","date_format":true}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for search users"
	svm_for_search_users__brfq_for_menu_access(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_search_users"
		let destn_id="menu_access"
		let parent_source_id="users"
		let event_code="e_1673615000972"
		let event_params={"caller_name":"svm_for_search_users__brfq_for_menu_access","event_desc":"BRFQ for Menu Access","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"users","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1673616538425","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS User Menu Acess MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"LOGIN_NAME","alias_name":"","mq_id":"MQ_1673617360451","date_format":false},{"column_name":"U_ID","alias_name":"","mq_id":"MQ_1673617360634","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673617360810","date_format":true},{"column_name":"MODULE_NAME","alias_name":"","mq_id":"MQ_1673617361442","date_format":false},{"column_name":"MENU_GROUP","alias_name":"","mq_id":"MQ_1673617385968","date_format":false},{"column_name":"MENU_DESC","alias_name":"","mq_id":"MQ_1673617386180","date_format":false},{"column_name":"APP_CODE","alias_name":"","mq_id":"MQ_1676617740678","date_format":false},{"column_name":"APP_DESCRIPTION","alias_name":"","mq_id":"MQ_1676643550452","date_format":false}],"joins":[]},"eq_text":"select  LOGIN_NAME,  U_ID,  CREATED_DATE,  APP_CODE,  APP_DESCRIPTION,  MODULE_NAME,  MENU_GROUP,  MENU_DESC from  (  select   L.LOGIN_NAME,   L.U_ID,   L.CREATED_DATE,   A.APP_CODE ,   A.APP_DESCRIPTION,   L.MODULE_NAME,   L.MENU_GROUP,   L.MENU_DESC  from   <CLT_CAS>.USER_MENU_ACCESS_LOG L   inner join <CLT_CAS>.APPLICATIONS A on   A.APP_ID = L.APP_ID )V $WHERE order by  CREATED_DATE desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS User Menu Access CCD","filter":[{"filter_name":"U_ID","binding_name":"U_ID","binding_value":"","source_name":"MI_LEVEL_U_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Login Name","target_column":"LOGIN_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"User ID","target_column":"U_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Accessed Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy hh:mm a\"","date_format":true},{"header":"App Name","target_column":"APP_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Module","target_column":"MODULE_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Menu Group","target_column":"MENU_GROUP","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Screen Name","target_column":"MENU_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for search users"
	svm_for_search_users__brfq_for_activities() { 
		let Dest_Is_ctrl=true
		
		let source_id="svm_for_search_users"
		let destn_id="activities"
		let parent_source_id="users"
		let event_code="e_1673615040277"
		let event_params={"caller_name":"svm_for_search_users__brfq_for_activities","event_desc":"BRFQ for Activities","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"users","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_7","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1673616546921","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS PRC Token MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"U_ID","alias_name":"","mq_id":"MQ_1673618534549","date_format":false},{"column_name":"MODULE","alias_name":"","mq_id":"MQ_1673618534813","date_format":false},{"column_name":"MENU_GROUP","alias_name":"","mq_id":"MQ_1673618535037","date_format":false},{"column_name":"MENU_ITEM","alias_name":"","mq_id":"MQ_1673618535221","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1673618535405","date_format":false},{"column_name":"LOGIN_NAME","alias_name":"","mq_id":"MQ_1673618571074","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673619004932","date_format":true},{"column_name":"APP_CODE","alias_name":"","mq_id":"MQ_1676639779774","date_format":false},{"column_name":"APP_DESCRIPTION","alias_name":"","mq_id":"MQ_1676643998203","date_format":false}],"joins":[]},"eq_text":"select  U_ID,  APP_CODE,  APP_DESCRIPTION,  module,  MENU_GROUP ,  MENU_ITEM ,  PROCESS_NAME,  TENANT_ID,  CREATED_DATE,  LOGIN_NAME from  (  select   U.U_ID,   A.APP_CODE,   A.APP_DESCRIPTION,   T.MODULE,   T.MENU_GROUP ,   T.MENU_ITEM ,   T.PROCESS_NAME,   T.TENANT_ID,   T.CREATED_DATE,   U.LOGIN_NAME  from   PRC_TOKENS T  inner join <CLT_CAS>.USERS U on   T.CREATED_BY = U.U_ID  inner join <CLT_CAS>.APPLICATIONS A on   A.APP_ID = T.APP_ID)V $WHERE order by  CREATED_DATE desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS User PRC Token MQ","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"U_ID","binding_name":"U_ID","binding_value":"","source_name":"MI_LEVEL_U_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Login Name","target_column":"LOGIN_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Activity Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy hh:mm a\"","date_format":true},{"header":"App Name","target_column":"APP_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Module","target_column":"MODULE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Menu Group","target_column":"MENU_GROUP","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Screen Name","target_column":"MENU_ITEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Activity Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for search users"
	svm_for_search_users__brfq_for_password_histroy(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_search_users"
		let destn_id="password_history"
		let parent_source_id="users"
		let event_code="e_1673615070770"
		let event_params={"caller_name":"svm_for_search_users__brfq_for_password_histroy","event_desc":"BRFQ for Password Histroy","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"users","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_6","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1673616527690","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS User Password Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"U_ID","alias_name":"","mq_id":"MQ_1673617606381","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673617606580","date_format":true},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1673617606765","date_format":false},{"column_name":"LOGIN_NAME","alias_name":"","mq_id":"MQ_1673617607189","date_format":false}],"joins":[]},"eq_text":"SELECT  U_ID,  CREATED_DATE ,  TENANT_ID,  LOGIN_NAME FROM  (  SELECT   P.U_ID,   P.CREATED_DATE,   U.TENANT_ID,   U.LOGIN_NAME  FROM   <CLT_CAS>.USER_PASSWORD_LOG P  INNER JOIN <CLT_CAS>.USERS U ON   P.U_ID = U.U_ID)V $WHERE ORDER BY  CREATED_DATE DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS User Password Log CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"U_ID","binding_name":"U_ID","binding_value":"","source_name":"MI_LEVEL_U_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Login Name","target_column":"LOGIN_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"User ID","target_column":"U_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Password Changed Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy hh:mm a\"","date_format":true}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for search users"
	svm_for_search_users__brfq_for_authentication_his(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_search_users"
		let destn_id="authentication_history"
		let parent_source_id="users"
		let event_code="e_1676614269632"
		let event_params={"caller_name":"svm_for_search_users__brfq_for_authentication_his","event_desc":"BRFQ for Authentication his","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"users","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_9","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1676609482672","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Authentication History MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"LOGIN_STATUS","alias_name":"","mq_id":"MQ_1676609342442","date_format":false},{"column_name":"REMARKS","alias_name":"","mq_id":"MQ_1676609342808","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1676644551497","date_format":true}],"joins":[]},"eq_text":"select  LOGIN_STATUS,  REMARKS,  U_ID,  TENANT_ID,  CREATED_DATE from  (  select   U.U_ID,   UAL.LOGIN_NAME,   UAL.REMARKS ,   UAL.TENANT_ID ,   UAL.LOGIN_STATUS,  UAL.CREATED_DATE  from   <CLT_CAS>.USER_AUTHENTICATION_LOG UAL  inner join <CLT_CAS>.USERS U on   UAL.LOGIN_NAME = U.LOGIN_NAME) V $WHERE order by CREATED_DATE DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Authentication History CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"U_ID","binding_name":"U_ID","binding_value":"","source_name":"MI_LEVEL_U_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Login Status","target_column":"LOGIN_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remarks","target_column":"REMARKS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__ssp_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1673615212182"
		let event_params={"caller_name":"search_search__ssp_for_search","event_desc":"SSP for Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="ssp_for_search__brfq_for_search_to_uers,"
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
	search_search__close_popup() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1673615344259"
		let event_params={"popup_info":{"context":""},"caller_name":"search_search__close_popup","event_desc":"Close Popup","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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
	search_search__clear_ui_for_ma() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="menu_access"
		let parent_source_id=""
		let event_code="e_1673616183310"
		let event_params={"caller_name":"search_search__clear_ui_for_ma","event_desc":"CLEAR UI for MA","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1673616538425","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS User Menu Acess MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"LOGIN_NAME","alias_name":"","mq_id":"MQ_1673617360451","date_format":false},{"column_name":"U_ID","alias_name":"","mq_id":"MQ_1673617360634","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673617360810","date_format":true},{"column_name":"MODULE_NAME","alias_name":"","mq_id":"MQ_1673617361442","date_format":false},{"column_name":"MENU_GROUP","alias_name":"","mq_id":"MQ_1673617385968","date_format":false},{"column_name":"MENU_DESC","alias_name":"","mq_id":"MQ_1673617386180","date_format":false},{"column_name":"APP_CODE","alias_name":"","mq_id":"MQ_1676617740678","date_format":false},{"column_name":"APP_DESCRIPTION","alias_name":"","mq_id":"MQ_1676643550452","date_format":false}],"joins":[]},"eq_text":"select  LOGIN_NAME,  U_ID,  CREATED_DATE,  APP_CODE,  APP_DESCRIPTION,  MODULE_NAME,  MENU_GROUP,  MENU_DESC from  (  select   L.LOGIN_NAME,   L.U_ID,   L.CREATED_DATE,   A.APP_CODE ,   A.APP_DESCRIPTION,   L.MODULE_NAME,   L.MENU_GROUP,   L.MENU_DESC  from   <CLT_CAS>.USER_MENU_ACCESS_LOG L   inner join <CLT_CAS>.APPLICATIONS A on   A.APP_ID = L.APP_ID )V $WHERE order by  CREATED_DATE desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS User Menu Access CCD","filter":[{"filter_name":"U_ID","binding_name":"U_ID","binding_value":"","source_name":"MI_LEVEL_U_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Login Name","target_column":"LOGIN_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"User ID","target_column":"U_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Accessed Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy hh:mm a\"","date_format":true},{"header":"App Name","target_column":"APP_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Module","target_column":"MODULE_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Menu Group","target_column":"MENU_GROUP","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Screen Name","target_column":"MENU_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__clear_ui_for_ac() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="activities"
		let parent_source_id=""
		let event_code="e_1673616215157"
		let event_params={"caller_name":"search_search__clear_ui_for_ac","event_desc":"CLEAR UI for AC","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_7","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1673616546921","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS PRC Token MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"U_ID","alias_name":"","mq_id":"MQ_1673618534549","date_format":false},{"column_name":"MODULE","alias_name":"","mq_id":"MQ_1673618534813","date_format":false},{"column_name":"MENU_GROUP","alias_name":"","mq_id":"MQ_1673618535037","date_format":false},{"column_name":"MENU_ITEM","alias_name":"","mq_id":"MQ_1673618535221","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1673618535405","date_format":false},{"column_name":"LOGIN_NAME","alias_name":"","mq_id":"MQ_1673618571074","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673619004932","date_format":true},{"column_name":"APP_CODE","alias_name":"","mq_id":"MQ_1676639779774","date_format":false},{"column_name":"APP_DESCRIPTION","alias_name":"","mq_id":"MQ_1676643998203","date_format":false}],"joins":[]},"eq_text":"select  U_ID,  APP_CODE,  APP_DESCRIPTION,  module,  MENU_GROUP ,  MENU_ITEM ,  PROCESS_NAME,  TENANT_ID,  CREATED_DATE,  LOGIN_NAME from  (  select   U.U_ID,   A.APP_CODE,   A.APP_DESCRIPTION,   T.MODULE,   T.MENU_GROUP ,   T.MENU_ITEM ,   T.PROCESS_NAME,   T.TENANT_ID,   T.CREATED_DATE,   U.LOGIN_NAME  from   PRC_TOKENS T  inner join <CLT_CAS>.USERS U on   T.CREATED_BY = U.U_ID  inner join <CLT_CAS>.APPLICATIONS A on   A.APP_ID = T.APP_ID)V $WHERE order by  CREATED_DATE desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS User PRC Token MQ","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"U_ID","binding_name":"U_ID","binding_value":"","source_name":"MI_LEVEL_U_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Login Name","target_column":"LOGIN_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Activity Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy hh:mm a\"","date_format":true},{"header":"App Name","target_column":"APP_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Module","target_column":"MODULE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Menu Group","target_column":"MENU_GROUP","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Screen Name","target_column":"MENU_ITEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Activity Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__clear_ui_for__us() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="user_sessions"
		let parent_source_id=""
		let event_code="e_1673616228669"
		let event_params={"caller_name":"search_search__clear_ui_for__us","event_desc":"CLEAR UI for  US","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_4","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1673616509928","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS User Session MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"LOGIN_NAME","alias_name":"","mq_id":"MQ_1673616953211","date_format":false},{"column_name":"U_ID","alias_name":"","mq_id":"MQ_1673616954329","date_format":false},{"column_name":"LOGIN_IP","alias_name":"","mq_id":"MQ_1673616954545","date_format":false},{"column_name":"LOGON_TIME","alias_name":"","mq_id":"MQ_1673616954745","date_format":true},{"column_name":"LOGOUT_TIME","alias_name":"","mq_id":"MQ_1673617219314","date_format":true}],"joins":[]},"eq_text":"select  LOGIN_NAME,  U_ID,  LOGIN_IP,  LOGON_TIME,  LOGOUT_TIME from  (  select   HUS.LOGIN_NAME,   HUS.U_ID,   HUS.LOGIN_IP,   HUS.LOGON_TIME,   HUS.LOGOUT_TIME  from   <CLT_CAS>.HST_USER_SESSIONS HUS)V $WHERE   ORDER BY LOGON_TIME DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS User Session CCD","filter":[{"filter_name":"U_ID","binding_name":"U_ID","binding_value":"","source_name":"MI_LEVEL_U_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Login Name","target_column":"LOGIN_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"User Id","target_column":"U_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Login Time","target_column":"LOGON_TIME","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy hh:mm a\"","date_format":true},{"header":"Logout Time","target_column":"LOGOUT_TIME","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy hh:mm a\"","date_format":true}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__clear_ui_for_ph() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="password_history"
		let parent_source_id=""
		let event_code="e_1673616243445"
		let event_params={"caller_name":"search_search__clear_ui_for_ph","event_desc":"CLEAR UI for PH","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_6","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1673616527690","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS User Password Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"U_ID","alias_name":"","mq_id":"MQ_1673617606381","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673617606580","date_format":true},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1673617606765","date_format":false},{"column_name":"LOGIN_NAME","alias_name":"","mq_id":"MQ_1673617607189","date_format":false}],"joins":[]},"eq_text":"SELECT  U_ID,  CREATED_DATE ,  TENANT_ID,  LOGIN_NAME FROM  (  SELECT   P.U_ID,   P.CREATED_DATE,   U.TENANT_ID,   U.LOGIN_NAME  FROM   <CLT_CAS>.USER_PASSWORD_LOG P  INNER JOIN <CLT_CAS>.USERS U ON   P.U_ID = U.U_ID)V $WHERE ORDER BY  CREATED_DATE DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS User Password Log CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"U_ID","binding_name":"U_ID","binding_value":"","source_name":"MI_LEVEL_U_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Login Name","target_column":"LOGIN_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"User ID","target_column":"U_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Password Changed Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy hh:mm a\"","date_format":true}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__cu_for_auth_his() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="authentication_history"
		let parent_source_id=""
		let event_code="e_1676614309984"
		let event_params={"caller_name":"search_search__cu_for_auth_his","event_desc":"CU for auth his","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_9","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1676609482672","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Authentication History MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"LOGIN_STATUS","alias_name":"","mq_id":"MQ_1676609342442","date_format":false},{"column_name":"REMARKS","alias_name":"","mq_id":"MQ_1676609342808","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1676644551497","date_format":true}],"joins":[]},"eq_text":"select  LOGIN_STATUS,  REMARKS,  U_ID,  TENANT_ID,  CREATED_DATE from  (  select   U.U_ID,   UAL.LOGIN_NAME,   UAL.REMARKS ,   UAL.TENANT_ID ,   UAL.LOGIN_STATUS,  UAL.CREATED_DATE  from   <CLT_CAS>.USER_AUTHENTICATION_LOG UAL  inner join <CLT_CAS>.USERS U on   UAL.LOGIN_NAME = U.LOGIN_NAME) V $WHERE order by CREATED_DATE DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Authentication History CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"U_ID","binding_name":"U_ID","binding_value":"","source_name":"MI_LEVEL_U_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Login Status","target_column":"LOGIN_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remarks","target_column":"REMARKS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for search"
	ssp_for_search__brfq_for_search_to_uers(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_search"
		let destn_id="users"
		let parent_source_id="search_search"
		let event_code="e_1673615226520"
		let event_params={"caller_name":"ssp_for_search__brfq_for_search_to_uers","event_desc":"BRFQ for Search to UERS","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_search_to_uers__sfr_for_users,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1673616483307","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS User MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"LOGIN_NAME","alias_name":"","mq_id":"MQ_1673616369095","date_format":false},{"column_name":"FIRST_NAME","alias_name":"","mq_id":"MQ_1673616369285","date_format":false},{"column_name":"LAST_NAME","alias_name":"","mq_id":"MQ_1673616369629","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673616369845","date_format":true},{"column_name":"LAST_SUCCESSFUL_LOGIN","alias_name":"","mq_id":"MQ_1673616370037","date_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1673616370229","date_format":false},{"column_name":"tenant_id","alias_name":"","mq_id":"MQ_1673616420761","date_format":false},{"column_name":"STAFF_ID","alias_name":"","mq_id":"MQ_1674564374458","date_format":false},{"column_name":"STAFF_NO","alias_name":"","mq_id":"MQ_1674565442233","date_format":false}],"joins":[]},"eq_text":"select  LOGIN_NAME,  FIRST_NAME,  LAST_NAME,  CREATED_DATE,  LAST_SUCCESSFUL_LOGIN,  u_id,  tenant_id,  STATUS,  STAFF_ID,  STAFF_NO from  (  select   U.LOGIN_NAME,   U.FIRST_NAME,   U.LAST_NAME,   U.CREATED_DATE,   U.LAST_SUCCESSFUL_LOGIN,   U.STATUS,   u.u_id,   u.tenant_id,   U.STAFF_ID,   cue.STAFF_NO  from   <CLT_CAS>.USERS U  inner join <TRAN_DB>.core_user_extn cue on cue.U_ID = U.U_ID) V $WHERE   order by LOGIN_NAME"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS User CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Login Name","target_column":"LOGIN_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"First Name","target_column":"FIRST_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Last Name","target_column":"LAST_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Staff No","target_column":"STAFF_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy hh:mm a\"","date_format":true},{"header":"Last Successful Login","target_column":"LAST_SUCCESSFUL_LOGIN","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy hh:mm a\"","date_format":true},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for search to uers"
	brfq_for_search_to_uers__sfr_for_users(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_search_to_uers"
		let destn_id="users"
		let parent_source_id="ssp_for_search"
		let event_code="e_1673615235187"
		let event_params={"caller_name":"brfq_for_search_to_uers__sfr_for_users","event_desc":"SFR for users","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1673616483307","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS User MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"LOGIN_NAME","alias_name":"","mq_id":"MQ_1673616369095","date_format":false},{"column_name":"FIRST_NAME","alias_name":"","mq_id":"MQ_1673616369285","date_format":false},{"column_name":"LAST_NAME","alias_name":"","mq_id":"MQ_1673616369629","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673616369845","date_format":true},{"column_name":"LAST_SUCCESSFUL_LOGIN","alias_name":"","mq_id":"MQ_1673616370037","date_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1673616370229","date_format":false},{"column_name":"tenant_id","alias_name":"","mq_id":"MQ_1673616420761","date_format":false},{"column_name":"STAFF_ID","alias_name":"","mq_id":"MQ_1674564374458","date_format":false},{"column_name":"STAFF_NO","alias_name":"","mq_id":"MQ_1674565442233","date_format":false}],"joins":[]},"eq_text":"select  LOGIN_NAME,  FIRST_NAME,  LAST_NAME,  CREATED_DATE,  LAST_SUCCESSFUL_LOGIN,  u_id,  tenant_id,  STATUS,  STAFF_ID,  STAFF_NO from  (  select   U.LOGIN_NAME,   U.FIRST_NAME,   U.LAST_NAME,   U.CREATED_DATE,   U.LAST_SUCCESSFUL_LOGIN,   U.STATUS,   u.u_id,   u.tenant_id,   U.STAFF_ID,   cue.STAFF_NO  from   <CLT_CAS>.USERS U  inner join <TRAN_DB>.core_user_extn cue on cue.U_ID = U.U_ID) V $WHERE   order by LOGIN_NAME"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS User CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Login Name","target_column":"LOGIN_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"First Name","target_column":"FIRST_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Last Name","target_column":"LAST_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Staff No","target_column":"STAFF_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy hh:mm a\"","date_format":true},{"header":"Last Successful Login","target_column":"LAST_SUCCESSFUL_LOGIN","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy hh:mm a\"","date_format":true},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation search"
	navigation_search__clear_ui_for_navigation() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1673615303228"
		let event_params={"caller_name":"navigation_search__clear_ui_for_navigation","event_desc":"Clear UI for Navigation","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_search","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation search"
	navigation_search__spap_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1673615368498"
		let event_params={"caller_name":"navigation_search__spap_for_search","event_desc":"SPAP for Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_for_search","selector":"p_search_layout","profile_code":"BTL_1304_1673614342707","window_title":"Search","window_height":300,"window_width":"700px","window_close_icon":"Y","eventdes":"spap_for_search","eventcode":"E_1673615368498"}}
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
