/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26357 
Modified By     : Admin 
Modified Date   : 2022-Oct-10 14:1 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_customer_enrolment
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'

@Component({
	selector: 's_customer_enrolment',
	templateUrl: './s_customer_enrolment.component.html',
	styleUrls: ['./s_customer_enrolment.component.css'],
	providers:[]
})
    
// Start of class 
export class s_customer_enrolmentComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_customer_enrolment"
	wftpa_id : string = "WFT_NPSS_P_1304_1665385257751_0"
	cg_code : string = "CG_1408_1652102355647"
	key_column : any = {"dtt_1304_1665384533560":"NPSSCPA_ID","dtt_1304_1665385314469":"NPSSCPB_ID","dtt_1304_1665385772257":"NPSSCT_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_list_layout"
	uicgc_1 : string = "customer_details"
	uicgc_2 : string = "navigation"
	uicgc_3 : string = "data_entry"
	uicgc_4 : string = "search"
	uicgc_5 : string = "bank_account_details"
	uicgc_6 : string = "virtual_account_details"
	uicgc_7 : string = "corporate_accounts_ui"
	uicgc_8 : string = "corp_virtual_account_ui"
	uicgc_9 : string = "phone_no_edit"
	uicgc_10 : string = "customer_edit"
	key_events : any = {}
	btl_1408_1652339228972 : string = "p_customer_edit_layout"
	btl_1408_1652339181348 : string = "p_phone_no_edit_layout"
	btl_1408_1647347637688 : string = "p_corp_virtual_acct_layout"
	btl_1408_1647347503927 : string = "p_corp_account__layout"
	btl_1408_1584360407011 : string = "p_search_layout"
	btl_1408_1584360351180 : string = "p_data_entry_layout"
	btl_1408_1584359909096 : string = "p_list_layout"
	forms : any = ["uicgc_3","uicgc_9","uicgc_7","uicgc_10","uicgc_8","uicgc_4","uicgc_2"]
	p_search_layout__spap_by_click_on_list_search_showpopup : boolean = false
	p_customer_edit_layout__spap_for_modify_customer_data_showpopup : boolean = false
	p_phone_no_edit_layout__spap_for_modify_phone_no_showpopup : boolean = false
	customer_details : any = {}
	customer_details_modify_phone_no : any = {}
	customer_details_modify_personal_data : any = {}
	navigation : any = {}
	navigation_clear : any = {}
	navigation_link_add_add_bank : any = {}
	navigation_add_account : any = {}
	navigation_enroll_customer : any = {}
	navigation_unenroll_customer : any = {}
	navigation_trigger_btn : any = {}
	navigation_block : any = {}
	navigation_unblock : any = {}
	navigation_view : any = {}
	data_entry : any = {}
	data_entry_back : any = {}
	data_entry_clear : any = {}
	data_entry_save : any = {}
	data_entry_edit : any = {}
	data_entry_delete : any = {}
	search : any = {}
	search_search : any = {}
	search_clear : any = {}
	bank_account_details : any = {}
	bank_account_details_view : any = {}
	virtual_account_details : any = {}
	corporate_accounts_ui : any = {}
	corporate_accounts_ui_back : any = {}
	corporate_accounts_ui_clear : any = {}
	corporate_accounts_ui_save : any = {}
	corporate_accounts_ui_edit : any = {}
	corporate_accounts_ui_delete : any = {}
	corp_virtual_account_ui : any = {}
	corp_virtual_account_ui_back : any = {}
	corp_virtual_account_ui_clear : any = {}
	corp_virtual_account_ui_save : any = {}
	corp_virtual_account_ui_edit : any = {}
	corp_virtual_account_ui_delete : any = {}
	phone_no_edit : any = {}
	phone_no_edit_save : any = {}
	customer_edit : any = {}
	customer_edit_save : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Customer Details" 
		this.customer_details.uictrl_code = "datatable"
		this.customer_details.uicgc_desc = "Customer Details"
		this.customer_details.uicgc_code = "uicgc_1"
		this.customer_details.params = {"need_pag_datatable":"Y","view_all":"Y","need_search":"N","advance_dynamic_search":"Y","need_context_menu_actions":"Y"}
		this.customer_details.datasource = {"default":{"dt_1304_1665384453253":{"dtt_1304_1665384533560":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665384533560","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665396309337","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CUSTOMER","alias_name":"","mq_id":"MQ_1665395323191","date_format":false},{"column_name":"PHONE_NO","alias_name":"","mq_id":"MQ_1665395323493","date_format":false},{"column_name":"EMIRATES_ID","alias_name":"","mq_id":"MQ_1665395323662","date_format":false},{"column_name":"EMAIL_ID","alias_name":"","mq_id":"MQ_1665395323981","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1665395324141","date_format":false},{"column_name":"PARTICIPANT_CODE","alias_name":"","mq_id":"MQ_1665395324293","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665395324485","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665395324637","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSCPA_ID,        CUSTOMER,        PHONE_NO,        EMIRATES_ID,        EMAIL_ID,        IBAN,        PARTICIPANT_CODE,        STATUS,        PROCESS_STATUS,        DT_CODE,        DTT_CODE   FROM (SELECT NPSS.NPSSCPA_ID,                NPSS.CUSTOMER,                NPSS.PHONE_NO,                NPSS.EMIRATES_ID,                NPSS.EMAIL_ID,                NPSS.IBAN,                NPSS.PARTICIPANT_CODE,                NPSS.DT_CODE,                NPSS.DTT_CODE,                NPSS.STATUS,                NPSS.SYSTEM_ID,                NPSS.PROCESS_STATUS           FROM NPSS_CUST_PROXY_ADDRESS NPSS) V $WHERE  ORDER BY NPSSCPA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Cust Address CCD","filter":[],"databinding":[{"header":"Customer Name","target_column":"CUSTOMER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Phone No","target_column":"PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email ID","target_column":"EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Emirates ID","target_column":"EMIRATES_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Participant Code","target_column":"PARTICIPANT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}},"e_1652276906715":{"dt_1304_1665384453253":{"dtt_1304_1665384533560":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"E_1652276906715","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665384533560","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"","ds_final":"DS_1665396295798","final_state":{"ts":[{"binding_name":"STATUS","binding_value":"UNENROLED","data_type":"TEXT"},{"binding_name":"PROCESS_STATUS","binding_value":"UNENROLED","data_type":"TEXT"}],"trn":[]},"property_json":null,"system_type":"DEFAULT","eq_info":{},"listing_mode":"","locking_mode":"","locking_parameter":"","filter":[],"databinding":[]}}}}}}
		this.customer_details.context_menu = [{"label_name":"Modify Phone No","desc":"modify_phone_no","show":true,"disabled":false,"params":{"icon_only":true,"node_type":"","uicgcc_style":"fa fa-mobile-phone"},"dynamic_param":{}},{"label_name":"Modify Personal Data","desc":"modify_personal_data","show":true,"disabled":false,"params":{"icon_only":true,"node_type":"","uicgcc_style":"fa fa-user-circle-o"},"dynamic_param":{}}]
		this.customer_details.views = {}
		this.customer_details.onChangecomponent = new EventEmitter<any>()
		this.customer_details.show = true
		this.customer_details.dynamic_param = {}
		
// "Modify Phone No" Button of "Customer Details" component 
		this.customer_details_modify_phone_no.label_name = "Modify Phone No"
		this.customer_details_modify_phone_no.desc = "modify_phone_no"
		this.customer_details_modify_phone_no.show = true
		this.customer_details_modify_phone_no.disabled = false
		this.customer_details_modify_phone_no.params = {"icon_only":true,"node_type":"","uicgcc_style":"fa fa-mobile-phone"}
		this.customer_details_modify_phone_no.dynamic_param = {}
		
// "Modify Personal Data" Button of "Customer Details" component 
		this.customer_details_modify_personal_data.label_name = "Modify Personal Data"
		this.customer_details_modify_personal_data.desc = "modify_personal_data"
		this.customer_details_modify_personal_data.show = true
		this.customer_details_modify_personal_data.disabled = false
		this.customer_details_modify_personal_data.params = {"icon_only":true,"node_type":"","uicgcc_style":"fa fa-user-circle-o"}
		this.customer_details_modify_personal_data.dynamic_param = {}
	
		// Component level properties - "Navigation" 
		this.navigation.uictrl_code = "dynamic_ui"
		this.navigation.uicgc_desc = "Navigation"
		this.navigation.uicgc_code = "uicgc_2"
		this.navigation.params = {}
		this.navigation.datasource = {}
		this.navigation.context_menu = []
		this.navigation.views = {}
		this.navigation.onChangecomponent = new EventEmitter<any>()
		this.navigation.show = true
		this.navigation.dynamic_param = {}
		this.navigation.f_navigation = {"show":true}
		this.navigation.current_view = "f_navigation"
		
		// "Clear" Button of "Navigation" component
		this.navigation_clear.label_name = "Clear"
		this.navigation_clear.show = true
		this.navigation_clear.disabled = false
		this.navigation_clear.params = {"icon_only":false,"uicgcc_style":"fa fa-refresh"}
		this.navigation_clear.dynamic_param = {}
		this.navigation_clear.role = []
		this.navigation_clear.action = ""
		
		// "Link Add Add Bank" Button of "Navigation" component
		this.navigation_link_add_add_bank.label_name = "Link Add Add Bank"
		this.navigation_link_add_add_bank.show = true
		this.navigation_link_add_add_bank.disabled = false
		this.navigation_link_add_add_bank.params = {"icon_only":false,"uicgcc_style":"fa fa-plus-square-o"}
		this.navigation_link_add_add_bank.dynamic_param = {}
		this.navigation_link_add_add_bank.role = []
		this.navigation_link_add_add_bank.action = ""
		
		// "Add Account" Button of "Navigation" component
		this.navigation_add_account.label_name = "Add Account"
		this.navigation_add_account.show = true
		this.navigation_add_account.disabled = false
		this.navigation_add_account.params = {"icon_only":false,"uicgcc_style":"fa fa-bank"}
		this.navigation_add_account.dynamic_param = {}
		this.navigation_add_account.role = []
		this.navigation_add_account.action = ""
		
		// "Enroll Customer" Button of "Navigation" component
		this.navigation_enroll_customer.label_name = "Enroll Customer"
		this.navigation_enroll_customer.show = true
		this.navigation_enroll_customer.disabled = false
		this.navigation_enroll_customer.params = {"icon_only":false,"uicgcc_style":"fa fa-buysellads"}
		this.navigation_enroll_customer.dynamic_param = {}
		this.navigation_enroll_customer.role = []
		this.navigation_enroll_customer.action = ""
		
		// "Unenroll Customer" Button of "Navigation" component
		this.navigation_unenroll_customer.label_name = "Unenroll Customer"
		this.navigation_unenroll_customer.show = true
		this.navigation_unenroll_customer.disabled = false
		this.navigation_unenroll_customer.params = {"icon_only":false,"uicgcc_style":"fa fa-adn"}
		this.navigation_unenroll_customer.dynamic_param = {}
		this.navigation_unenroll_customer.role = []
		this.navigation_unenroll_customer.action = ""
		
		// "Trigger Btn" Button of "Navigation" component
		this.navigation_trigger_btn.label_name = "Trigger Btn"
		this.navigation_trigger_btn.show = true
		this.navigation_trigger_btn.disabled = false
		this.navigation_trigger_btn.params = {"icon_only":false,"uicgcc_style":""}
		this.navigation_trigger_btn.dynamic_param = {}
		this.navigation_trigger_btn.role = []
		this.navigation_trigger_btn.action = ""
		
		// "Block" Button of "Navigation" component
		this.navigation_block.label_name = "Block"
		this.navigation_block.show = true
		this.navigation_block.disabled = false
		this.navigation_block.params = {"icon_only":false,"uicgcc_style":"fa fa-lock"}
		this.navigation_block.dynamic_param = {}
		this.navigation_block.role = []
		this.navigation_block.action = ""
		
		// "Unblock" Button of "Navigation" component
		this.navigation_unblock.label_name = "Unblock"
		this.navigation_unblock.show = true
		this.navigation_unblock.disabled = false
		this.navigation_unblock.params = {"icon_only":false,"uicgcc_style":"fa fa-unlock"}
		this.navigation_unblock.dynamic_param = {}
		this.navigation_unblock.role = []
		this.navigation_unblock.action = ""
		
		// "View" Button of "Navigation" component
		this.navigation_view.label_name = "View"
		this.navigation_view.show = true
		this.navigation_view.disabled = false
		this.navigation_view.params = {"icon_only":false,"uicgcc_style":"fa fa-eye-slash"}
		this.navigation_view.dynamic_param = {}
		this.navigation_view.role = []
		this.navigation_view.action = ""
	
		// Component level properties - "Data Entry" 
		this.data_entry.uictrl_code = "dynamic_ui"
		this.data_entry.uicgc_desc = "Data Entry"
		this.data_entry.uicgc_code = "uicgc_3"
		this.data_entry.params = {}
		this.data_entry.datasource = {}
		this.data_entry.context_menu = []
		this.data_entry.views = {"first":"DTT_1304_1665384533560","is_tab_mode":"N","dtt_1304_1665384533560":{"0":[{"dttv_id":"NPSS Customer UICG","tab_order":0,"tab_name":"","uicgc_description":"Data Entry","role_description":"default","dtt_description":"NPSS Cust Proxy Address"}]}}
		this.data_entry.onChangecomponent = new EventEmitter<any>()
		this.data_entry.show = true
		this.data_entry.dynamic_param = {}
		this.data_entry.f_npss_customer_uicg = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.data_entry.form_name = "f_npss_customer_uicg"
		
		// "Back" Button of "Data Entry" component
		this.data_entry_back.label_name = "Back"
		this.data_entry_back.show = true
		this.data_entry_back.disabled = false
		this.data_entry_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.data_entry_back.dynamic_param = {}
		this.data_entry_back.role = []
		this.data_entry_back.action = ""
		
		// "Clear" Button of "Data Entry" component
		this.data_entry_clear.label_name = "Clear"
		this.data_entry_clear.show = true
		this.data_entry_clear.disabled = false
		this.data_entry_clear.params = {"icon_only":false,"uicgcc_style":"fa fa-eraser"}
		this.data_entry_clear.dynamic_param = {}
		this.data_entry_clear.role = []
		this.data_entry_clear.action = ""
		
		// "Save" Button of "Data Entry" component
		this.data_entry_save.label_name = "Save"
		this.data_entry_save.show = true
		this.data_entry_save.disabled = false
		this.data_entry_save.params = {"icon_only":false,"uicgcc_style":"fa fa-floppy-o"}
		this.data_entry_save.dynamic_param = {}
		this.data_entry_save.role = []
		this.data_entry_save.action = ""
		
		// "Edit" Button of "Data Entry" component
		this.data_entry_edit.label_name = "Edit"
		this.data_entry_edit.show = true
		this.data_entry_edit.disabled = false
		this.data_entry_edit.params = {"icon_only":false,"uicgcc_style":"fa fa-pencil-square-o"}
		this.data_entry_edit.dynamic_param = {}
		this.data_entry_edit.role = []
		this.data_entry_edit.action = ""
		
		// "Delete" Button of "Data Entry" component
		this.data_entry_delete.label_name = "Delete"
		this.data_entry_delete.show = true
		this.data_entry_delete.disabled = false
		this.data_entry_delete.params = {"icon_only":false,"uicgcc_style":"fa fa-trash"}
		this.data_entry_delete.dynamic_param = {}
		this.data_entry_delete.role = []
		this.data_entry_delete.action = ""
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_4"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_search = {"show":true}
		this.search.current_view = "f_search"
		
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
	
		// Component level properties - "Bank Account Details" 
		this.bank_account_details.uictrl_code = "datatable"
		this.bank_account_details.uicgc_desc = "Bank Account Details"
		this.bank_account_details.uicgc_code = "uicgc_5"
		this.bank_account_details.params = {"need_search":"N","view_all":"Y","need_pag_datatable":"Y","need_context_menu_actions":"Y"}
		this.bank_account_details.datasource = {"default":{"dt_1304_1665384453253":{"dtt_1304_1665385314469":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665385314469","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665387436513","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Bank MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSCPB_ID","alias_name":"","mq_id":"MQ_1665387234452","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1665387235082","date_format":false},{"column_name":"BANK_NAME","alias_name":"","mq_id":"MQ_1665387235258","date_format":false},{"column_name":"ACCOUNT_NO","alias_name":"","mq_id":"MQ_1665387251594","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665387251745","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665387264698","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSCPB_ID,        NPSSCPA_ID,        BANK_CODE,        BANK_NAME,        ACCOUNT_NO,        STATUS,        PROCESS_STATUS,        DT_CODE,        DTT_CODE   FROM (SELECT NPSSCPB.NPSSCPB_ID,                NPSSCPB.NPSSCPA_ID,                NPSSCPB.BANK_CODE,                NPSSCPB.BANK_NAME,                NPSSCPB.ACCOUNT_NO,                NPSSCPB.STATUS,                NPSSCPB.PROCESS_STATUS,                NPSSCPB.DTT_CODE,                NPSSCPB.DT_CODE           FROM NPSS_CUST_PROXY_BANKS NPSSCPB) V $WHERE  ORDER BY NPSSCPB_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Bank CCD","filter":[{"filter_name":"NPSSCPA_ID","binding_name":"NPSSCPA_ID","binding_value":"","source_name":"MI_LEVEL_NPSSCPA_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank Code","target_column":"BANK_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Bank Name","target_column":"BANK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account Number","target_column":"ACCOUNT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}},"e_1652104097942":{"dt_1304_1665384453253":{"dtt_1304_1665385314469":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"E_1652104097942","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665385314469","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"","ds_final":"DS_1665396270902","final_state":{"ts":[{"binding_name":"STATUS","binding_value":"CREATED","data_type":"TEXT"},{"binding_name":"PROCESS_STATUS","binding_value":"CREATED","data_type":"TEXT"}],"trn":[]},"property_json":null,"system_type":"DEFAULT","eq_info":{},"listing_mode":"","locking_mode":"","locking_parameter":"","filter":[],"databinding":[]}}}}},"e_1652158373478":{"dt_1304_1665384453253":{"dtt_1304_1665385314469":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"E_1652158373478","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665385314469","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"","ds_final":"DS_1665396264943","final_state":{"ts":[{"binding_name":"STATUS","binding_value":"BLOCKED","data_type":"TEXT"},{"binding_name":"PROCESS_STATUS","binding_value":"BLOCKED","data_type":"TEXT"}],"trn":[]},"property_json":null,"system_type":"DEFAULT","eq_info":{},"listing_mode":"","locking_mode":"","locking_parameter":"","filter":[],"databinding":[]}}}}}}
		this.bank_account_details.context_menu = [{"label_name":"View","desc":"view","show":true,"disabled":false,"params":{"icon_only":false,"node_type":"","uicgcc_style":""},"dynamic_param":{}}]
		this.bank_account_details.views = {}
		this.bank_account_details.onChangecomponent = new EventEmitter<any>()
		this.bank_account_details.show = true
		this.bank_account_details.dynamic_param = {}
		
// "View" Button of "Bank Account Details" component 
		this.bank_account_details_view.label_name = "View"
		this.bank_account_details_view.desc = "view"
		this.bank_account_details_view.show = true
		this.bank_account_details_view.disabled = false
		this.bank_account_details_view.params = {"icon_only":false,"node_type":"","uicgcc_style":""}
		this.bank_account_details_view.dynamic_param = {}
	
		// Component level properties - "Virtual Account Details" 
		this.virtual_account_details.uictrl_code = "datatable"
		this.virtual_account_details.uicgc_desc = "Virtual Account Details"
		this.virtual_account_details.uicgc_code = "uicgc_6"
		this.virtual_account_details.params = {"need_search":"N","view_all":"Y","need_pag_datatable":"Y","need_context_menu_actions":"Y"}
		this.virtual_account_details.datasource = {}
		this.virtual_account_details.context_menu = []
		this.virtual_account_details.views = {}
		this.virtual_account_details.onChangecomponent = new EventEmitter<any>()
		this.virtual_account_details.show = true
		this.virtual_account_details.dynamic_param = {}
	
		// Component level properties - "Corporate Accounts UI" 
		this.corporate_accounts_ui.uictrl_code = "dynamic_ui"
		this.corporate_accounts_ui.uicgc_desc = "Corporate Accounts UI"
		this.corporate_accounts_ui.uicgc_code = "uicgc_7"
		this.corporate_accounts_ui.params = {}
		this.corporate_accounts_ui.datasource = {}
		this.corporate_accounts_ui.context_menu = []
		this.corporate_accounts_ui.views = {"first":"DTT_1304_1665385314469","is_tab_mode":"N","dtt_1304_1665385314469":{"0":[{"dttv_id":"Bank Details UI","tab_order":0,"tab_name":"","uicgc_description":"Corporate Accounts UI","role_description":"default","dtt_description":"NPSS Cust Proxy Banks"}]}}
		this.corporate_accounts_ui.onChangecomponent = new EventEmitter<any>()
		this.corporate_accounts_ui.show = true
		this.corporate_accounts_ui.dynamic_param = {}
		this.corporate_accounts_ui.f_bank_details_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.corporate_accounts_ui.form_name = "f_bank_details_ui"
		
		// "Back" Button of "Corporate Accounts UI" component
		this.corporate_accounts_ui_back.label_name = "Back"
		this.corporate_accounts_ui_back.show = true
		this.corporate_accounts_ui_back.disabled = false
		this.corporate_accounts_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.corporate_accounts_ui_back.dynamic_param = {}
		this.corporate_accounts_ui_back.role = []
		this.corporate_accounts_ui_back.action = ""
		
		// "Clear" Button of "Corporate Accounts UI" component
		this.corporate_accounts_ui_clear.label_name = "Clear"
		this.corporate_accounts_ui_clear.show = true
		this.corporate_accounts_ui_clear.disabled = false
		this.corporate_accounts_ui_clear.params = {"icon_only":false,"uicgcc_style":"fa fa-eraser"}
		this.corporate_accounts_ui_clear.dynamic_param = {}
		this.corporate_accounts_ui_clear.role = []
		this.corporate_accounts_ui_clear.action = ""
		
		// "Save" Button of "Corporate Accounts UI" component
		this.corporate_accounts_ui_save.label_name = "Save"
		this.corporate_accounts_ui_save.show = true
		this.corporate_accounts_ui_save.disabled = false
		this.corporate_accounts_ui_save.params = {"icon_only":false,"uicgcc_style":"fa fa-floppy-o"}
		this.corporate_accounts_ui_save.dynamic_param = {}
		this.corporate_accounts_ui_save.role = []
		this.corporate_accounts_ui_save.action = ""
		
		// "Edit" Button of "Corporate Accounts UI" component
		this.corporate_accounts_ui_edit.label_name = "Edit"
		this.corporate_accounts_ui_edit.show = true
		this.corporate_accounts_ui_edit.disabled = false
		this.corporate_accounts_ui_edit.params = {"icon_only":false,"uicgcc_style":"fa fa-pencil-square-o"}
		this.corporate_accounts_ui_edit.dynamic_param = {}
		this.corporate_accounts_ui_edit.role = []
		this.corporate_accounts_ui_edit.action = ""
		
		// "Delete" Button of "Corporate Accounts UI" component
		this.corporate_accounts_ui_delete.label_name = "Delete"
		this.corporate_accounts_ui_delete.show = true
		this.corporate_accounts_ui_delete.disabled = false
		this.corporate_accounts_ui_delete.params = {"icon_only":false,"uicgcc_style":"fa fa-trash"}
		this.corporate_accounts_ui_delete.dynamic_param = {}
		this.corporate_accounts_ui_delete.role = []
		this.corporate_accounts_ui_delete.action = ""
	
		// Component level properties - "Corp Virtual Account UI" 
		this.corp_virtual_account_ui.uictrl_code = "dynamic_ui"
		this.corp_virtual_account_ui.uicgc_desc = "Corp Virtual Account UI"
		this.corp_virtual_account_ui.uicgc_code = "uicgc_8"
		this.corp_virtual_account_ui.params = {}
		this.corp_virtual_account_ui.datasource = {}
		this.corp_virtual_account_ui.context_menu = []
		this.corp_virtual_account_ui.views = {}
		this.corp_virtual_account_ui.onChangecomponent = new EventEmitter<any>()
		this.corp_virtual_account_ui.show = true
		this.corp_virtual_account_ui.dynamic_param = {}
		this.corp_virtual_account_ui.f_corp_virtual_account_ui = {"show":true}
		this.corp_virtual_account_ui.current_view = "f_corp_virtual_account_ui"
		
		// "Back" Button of "Corp Virtual Account UI" component
		this.corp_virtual_account_ui_back.label_name = "Back"
		this.corp_virtual_account_ui_back.show = true
		this.corp_virtual_account_ui_back.disabled = false
		this.corp_virtual_account_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.corp_virtual_account_ui_back.dynamic_param = {}
		this.corp_virtual_account_ui_back.role = []
		this.corp_virtual_account_ui_back.action = ""
		
		// "Clear" Button of "Corp Virtual Account UI" component
		this.corp_virtual_account_ui_clear.label_name = "Clear"
		this.corp_virtual_account_ui_clear.show = true
		this.corp_virtual_account_ui_clear.disabled = false
		this.corp_virtual_account_ui_clear.params = {"icon_only":false,"uicgcc_style":"fa fa-eraser"}
		this.corp_virtual_account_ui_clear.dynamic_param = {}
		this.corp_virtual_account_ui_clear.role = []
		this.corp_virtual_account_ui_clear.action = ""
		
		// "Save" Button of "Corp Virtual Account UI" component
		this.corp_virtual_account_ui_save.label_name = "Save"
		this.corp_virtual_account_ui_save.show = true
		this.corp_virtual_account_ui_save.disabled = false
		this.corp_virtual_account_ui_save.params = {"icon_only":false,"uicgcc_style":"fa fa-floppy-o"}
		this.corp_virtual_account_ui_save.dynamic_param = {}
		this.corp_virtual_account_ui_save.role = []
		this.corp_virtual_account_ui_save.action = ""
		
		// "Edit" Button of "Corp Virtual Account UI" component
		this.corp_virtual_account_ui_edit.label_name = "Edit"
		this.corp_virtual_account_ui_edit.show = true
		this.corp_virtual_account_ui_edit.disabled = false
		this.corp_virtual_account_ui_edit.params = {"icon_only":false,"uicgcc_style":"fa fa-pencil-square-o"}
		this.corp_virtual_account_ui_edit.dynamic_param = {}
		this.corp_virtual_account_ui_edit.role = []
		this.corp_virtual_account_ui_edit.action = ""
		
		// "Delete" Button of "Corp Virtual Account UI" component
		this.corp_virtual_account_ui_delete.label_name = "Delete"
		this.corp_virtual_account_ui_delete.show = true
		this.corp_virtual_account_ui_delete.disabled = false
		this.corp_virtual_account_ui_delete.params = {"icon_only":false,"uicgcc_style":"fa fa-trash"}
		this.corp_virtual_account_ui_delete.dynamic_param = {}
		this.corp_virtual_account_ui_delete.role = []
		this.corp_virtual_account_ui_delete.action = ""
	
		// Component level properties - "Phone No Edit" 
		this.phone_no_edit.uictrl_code = "dynamic_ui"
		this.phone_no_edit.uicgc_desc = "Phone No Edit"
		this.phone_no_edit.uicgc_code = "uicgc_9"
		this.phone_no_edit.params = {}
		this.phone_no_edit.datasource = {}
		this.phone_no_edit.context_menu = []
		this.phone_no_edit.views = {"first":"DTT_1304_1665384533560","is_tab_mode":"N","dtt_1304_1665384533560":{"0":[{"dttv_id":"NPSS Modify Phone No UI","tab_order":0,"tab_name":"","uicgc_description":"Phone No Edit","role_description":"default","dtt_description":"NPSS Cust Proxy Address"}]}}
		this.phone_no_edit.onChangecomponent = new EventEmitter<any>()
		this.phone_no_edit.show = true
		this.phone_no_edit.dynamic_param = {}
		this.phone_no_edit.f_npss_modify_phone_no_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.phone_no_edit.form_name = "f_npss_modify_phone_no_ui"
		
		// "Save" Button of "Phone No Edit" component
		this.phone_no_edit_save.label_name = "Save"
		this.phone_no_edit_save.show = true
		this.phone_no_edit_save.disabled = false
		this.phone_no_edit_save.params = {"icon_only":false,"uicgcc_style":""}
		this.phone_no_edit_save.dynamic_param = {}
		this.phone_no_edit_save.role = []
		this.phone_no_edit_save.action = ""
	
		// Component level properties - "Customer Edit" 
		this.customer_edit.uictrl_code = "dynamic_ui"
		this.customer_edit.uicgc_desc = "Customer Edit"
		this.customer_edit.uicgc_code = "uicgc_10"
		this.customer_edit.params = {}
		this.customer_edit.datasource = {}
		this.customer_edit.context_menu = []
		this.customer_edit.views = {"first":"DTT_1304_1665384533560","is_tab_mode":"N","dtt_1304_1665384533560":{"0":[{"dttv_id":"NPSS Modify Customer UI","tab_order":0,"tab_name":"","uicgc_description":"Customer Edit","role_description":"default","dtt_description":"NPSS Cust Proxy Address"}]}}
		this.customer_edit.onChangecomponent = new EventEmitter<any>()
		this.customer_edit.show = true
		this.customer_edit.dynamic_param = {}
		this.customer_edit.f_npss_modify_customer_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.customer_edit.form_name = "f_npss_modify_customer_ui"
		
		// "Save" Button of "Customer Edit" component
		this.customer_edit_save.label_name = "Save"
		this.customer_edit_save.show = true
		this.customer_edit_save.disabled = false
		this.customer_edit_save.params = {"icon_only":false,"uicgcc_style":""}
		this.customer_edit_save.dynamic_param = {}
		this.customer_edit_save.role = []
		this.customer_edit_save.action = ""
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		let peventcontext:any=undefined;
 			if(!peventcontext) { 
 			peventcontext = this.page_load__sec_by_click_on_pl()
		 }
		this.page_load__brfq_on_page_loads()
		this.page_load__cf_by_click_on_page_load()
		this.page_load__he_for_add_acct()
		this.page_load__he_for_add_virtual_acct()
		this.page_load__he_from_pageload()
		this.page_load__tbc_from_pageload()
		this.page_load__he_unenrol_on_pl()
		this.page_load__he_for_view_on_page_load()
		this.page_load__he_for_block_on_page_load()
		this.page_load__he_for_unblock_on_page_load()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation enroll customer"
	navigation_enroll_customer__action_button_click(){
		this.navigation_enroll_customer__sp_by_click_on_add_action()
		this.navigation_enroll_customer__he_by_click_on_nvg_edit_action()
		this.navigation_enroll_customer__cui_by_click_on_navigation_add()
		this.navigation_enroll_customer__se_by_click_on_nvg_add_to_save_action()
		this.navigation_enroll_customer__ee_by_click_on_nvg_add_to_data_entry()
		this.navigation_enroll_customer__he_by_click_on_add_actions_to_delete_actions()
		this.navigation_enroll_customer__ee_by_click_on_add_actions()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation view"
	navigation_view__action_button_click(){
		this.navigation_view__sp_by_click_on_nvg_view_action()
		this.navigation_view__de_by_click_on_nvg_view_to_data_entry()
		this.navigation_view__he_by_click_on_nvg_view_to_de_save()
		this.navigation_view__se_by_click_on_nvg_view_to_edit_action()
		this.navigation_view__bt_for_the_view_action()
		this.navigation_view__vw_to_delete_show()
		this.navigation_view__he_for_clear_on_view_clk()
		this.navigation_view__e_1647435131056()
	}

	//Handler for SELECTION_CHANGED event of "customer details"
	customer_details__selection_changed(){
		this.customer_details__ssr_for_the_list_to_data_entry()
		this.customer_details__e_1647350147891()
		this.customer_details__svm_from_list()
		this.customer_details__e_1647411103895()
		this.customer_details__e_1652274413284()
		this.customer_details__e_1652274446807()
		this.customer_details__se_during_customer_selection()
		this.customer_details__e_1652276870594()
		this.customer_details__he_for_enrole_on_customer_list_selction()
	}

	//Handler for FILTER_CLICK event of "customer details"
	customer_details__filter_click(){
		this.customer_details__spap_by_click_on_list_search()
	}

	//Handler for INTERNAL event of "svm from list"
	svm_from_list__internal(parent_event_result){
		this.svm_from_list__brfq_corporate_acct_list(parent_event_result)
		this.svm_from_list__brfq_from_corp_dtl_list(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "data entry back"
	data_entry_back__action_button_click(){
		this.data_entry_back__rs_by_click_on_back_actions()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__ssp_on_search()
		this.search_search__e_1587636808228()
	}

	//Handler for INTERNAL event of "ssp on search"
	ssp_on_search__internal(){
		this.ssp_on_search__brfq_on_search()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__cui_the_search()
	}

	//Handler for ACTION_BUTTON_CLICK event of "data entry edit"
	data_entry_edit__action_button_click(){
		this.data_entry_edit__ee_by_click_on_edit_action()
		this.data_entry_edit__he_by_click_on_edit_action()
		this.data_entry_edit__se_by_click_on_edit_to_save__action()
		this.data_entry_edit__e_1587461249949()
	}

	//Handler for ACTION_BUTTON_CLICK event of "data entry save"
	data_entry_save__action_button_click(){
		this.data_entry_save__ve_by_click_on_save_button()
	}

	//Handler for INTERNAL event of "ve by click on save button"
	ve_by_click_on_save_button__internal(parent_event_result){
		this.ve_by_click_on_save_button__st_by_click_on_save_action(parent_event_result)
	}

	//Handler for INTERNAL event of "st by click on save action"
	st_by_click_on_save_action__internal(parent_event_result){
		this.st_by_click_on_save_action__im_by_click_on_save_action(parent_event_result)
	}

	//Handler for INTERNAL event of "im by click on save action"
	im_by_click_on_save_action__internal(parent_event_result){
		this.im_by_click_on_save_action__rs_after_data_entry_save_success(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "data entry delete"
	data_entry_delete__action_button_click(){
		this.data_entry_delete__cnf_msg_for_data_entry_delete()
	}

	//Handler for INTERNAL event of "cnf msg for data entry delete"
	cnf_msg_for_data_entry_delete__internal(parent_event_result){
		this.cnf_msg_for_data_entry_delete__dt_by_click_on_confs_msg(parent_event_result)
	}

	//Handler for INTERNAL event of "dt by click on confs msg"
	dt_by_click_on_confs_msg__internal(parent_event_result){
		this.dt_by_click_on_confs_msg__rs_after_dt_success(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation clear"
	navigation_clear__action_button_click(){
		this.navigation_clear__re_by_click_on_click_to_list_action()
		this.navigation_clear__se_for_the_clear_after_the__add()
		this.navigation_clear__he_for_the_after_the_clear_button()
		this.navigation_clear__e_1647435052385()
		this.navigation_clear__e_1647435085051()
		this.navigation_clear__e_1647435109130()
		this.navigation_clear__e_1647435243405()
		this.navigation_clear__he_for_unenrole_on_clear_btn_clk()
		this.navigation_clear__he_for_block_btn_on_clear_btn_clk()
		this.navigation_clear__he_for_unblock_on_clear_btn_click()
	}

	//Handler for ACTION_BUTTON_CLICK event of "data entry clear"
	data_entry_clear__action_button_click(){
		this.data_entry_clear__cui_by_click_on_clear_action()
	}

	//Handler for SELECTION_CHANGED event of "bank account details"
	bank_account_details__selection_changed(){
		this.bank_account_details__e_1647351042233()
		this.bank_account_details__e_1647351101835()
		this.bank_account_details__e_1647351145486()
		this.bank_account_details__e_1647351185789()
		this.bank_account_details__e_1647406200839()
		this.bank_account_details__e_1647411146810()
		this.bank_account_details__e_1647413387023()
		this.bank_account_details__ee_for_unblock()
		this.bank_account_details__ee_for_block()
		this.bank_account_details__e_1652111049978()
		this.bank_account_details__e_1652274265534()
		this.bank_account_details__e_1652274280842()
		this.bank_account_details__he_during_bank_account_selection()
		this.bank_account_details__e_1652276936752()
		this.bank_account_details__se_for_unblock__corporate_accounts_ui()
		this.bank_account_details__se_for_block_actions__corporate_accounts_ui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "corporate accounts ui save"
	corporate_accounts_ui_save__action_button_click(){
		this.corporate_accounts_ui_save__ve_from_corp_acct_save_btn()
	}

	//Handler for INTERNAL event of "ve from corp acct save btn"
	ve_from_corp_acct_save_btn__internal(parent_event_result){
		this.ve_from_corp_acct_save_btn__st_from_vt_corp_acct(parent_event_result)
	}

	//Handler for INTERNAL event of "st from vt corp acct"
	st_from_vt_corp_acct__internal(parent_event_result){
		this.st_from_vt_corp_acct__info_from_corp_acct_save(parent_event_result)
	}

	//Handler for INTERNAL event of "info from corp acct save"
	info_from_corp_acct_save__internal(parent_event_result){
		this.info_from_corp_acct_save__e_1647351709329(parent_event_result)
		this.info_from_corp_acct_save__e_1647351743956()
	}

	//Handler for INTERNAL event of "e 1647351709329"
	e_1647351709329__internal(){
		this.e_1647351709329__e_1647404351736()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation add account"
	navigation_add_account__action_button_click(){
		this.navigation_add_account__e_1647348595624()
		this.navigation_add_account__e_1647348677906()
		this.navigation_add_account__e_1647348710033()
		this.navigation_add_account__e_1647348738034()
		this.navigation_add_account__e_1647348769817()
		this.navigation_add_account__e_1647348819291()
		this.navigation_add_account__e_1647348935452()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation link add add bank"
	navigation_link_add_add_bank__action_button_click(){
		this.navigation_link_add_add_bank__e_1647349052535()
		this.navigation_link_add_add_bank__e_1647349070417()
		this.navigation_link_add_add_bank__e_1647349098419()
		this.navigation_link_add_add_bank__e_1647349136690()
		this.navigation_link_add_add_bank__e_1647349161175()
		this.navigation_link_add_add_bank__e_1647349180891()
		this.navigation_link_add_add_bank__e_1647349213452()
	}

	//Handler for SELECTION_CHANGED event of "virtual account details"
	virtual_account_details__selection_changed(){
		this.virtual_account_details__e_1647351430786()
		this.virtual_account_details__e_1647351457748()
		this.virtual_account_details__e_1647351501515()
		this.virtual_account_details__e_1647351535150()
		this.virtual_account_details__e_1647406274732()
		this.virtual_account_details__e_1647413438551()
	}

	//Handler for MENU_ITEM_CLICK event of "bank account details view"
	bank_account_details_view__menu_item_click(){
		this.bank_account_details_view__sp_by_click_on_bank_account_view()
		this.bank_account_details_view__bt_by_click_on_bank_account_view()
		this.bank_account_details_view__de_to_ui_by_click_on_bank_account_view()
	}

	//Handler for MENU_ITEM_CLICK event of "ctx 21"
	ctx_21__menu_item_click(){
		this.ctx_21__e_1647351276363()
		this.ctx_21__e_1647351339933()
		this.ctx_21__e_1647351380357()
	}

	//Handler for ACTION_BUTTON_CLICK event of "corporate accounts ui edit"
	corporate_accounts_ui_edit__action_button_click(){
		this.corporate_accounts_ui_edit__e_1647351836876()
		this.corporate_accounts_ui_edit__e_1647351866792()
		this.corporate_accounts_ui_edit__e_1647351900812()
		this.corporate_accounts_ui_edit__e_1647351922334()
	}

	//Handler for ACTION_BUTTON_CLICK event of "corporate accounts ui delete"
	corporate_accounts_ui_delete__action_button_click(){
		this.corporate_accounts_ui_delete__e_1647352098496()
	}

	//Handler for INTERNAL event of "e 1647352098496"
	e_1647352098496__internal(parent_event_result){
		this.e_1647352098496__e_1647352128709(parent_event_result)
	}

	//Handler for INTERNAL event of "e 1647352128709"
	e_1647352128709__internal(parent_event_result){
		this.e_1647352128709__e_1652277651831(parent_event_result)
	}

	//Handler for INTERNAL event of "e 1652277651831"
	e_1652277651831__internal(parent_event_result){
		this.e_1652277651831__e_1652278025038(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "corporate accounts ui clear"
	corporate_accounts_ui_clear__action_button_click(){
		this.corporate_accounts_ui_clear__e_1647352325410()
	}

	//Handler for ACTION_BUTTON_CLICK event of "corporate accounts ui back"
	corporate_accounts_ui_back__action_button_click(){
		this.corporate_accounts_ui_back__e_1647352529442()
	}

	//Handler for ACTION_BUTTON_CLICK event of "corp virtual account ui back"
	corp_virtual_account_ui_back__action_button_click(){
		this.corp_virtual_account_ui_back__e_1647352552894()
	}

	//Handler for ACTION_BUTTON_CLICK event of "corp virtual account ui save"
	corp_virtual_account_ui_save__action_button_click(){
		this.corp_virtual_account_ui_save__ve_for_virtual_account()
	}

	//Handler for INTERNAL event of "ve for virtual account"
	ve_for_virtual_account__internal(parent_event_result){
		this.ve_for_virtual_account__st_for_virtual_account(parent_event_result)
	}

	//Handler for INTERNAL event of "st for virtual account"
	st_for_virtual_account__internal(parent_event_result){
		this.st_for_virtual_account__re_for_virtual_account(parent_event_result)
		this.st_for_virtual_account__inf_for_virtual_account(parent_event_result)
	}

	//Handler for INTERNAL event of "inf for virtual account"
	inf_for_virtual_account__internal(parent_event_result){
		this.inf_for_virtual_account__sp_for_virtual_account(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "corp virtual account ui edit"
	corp_virtual_account_ui_edit__action_button_click(){
		this.corp_virtual_account_ui_edit__e_1647404860785()
		this.corp_virtual_account_ui_edit__e_1647404884702()
		this.corp_virtual_account_ui_edit__e_1647404910235()
		this.corp_virtual_account_ui_edit__e_1647404938173()
	}

	//Handler for ACTION_BUTTON_CLICK event of "corp virtual account ui delete"
	corp_virtual_account_ui_delete__action_button_click(){
		this.corp_virtual_account_ui_delete__e_1647404974081()
	}

	//Handler for INTERNAL event of "e 1647404974081"
	e_1647404974081__internal(parent_event_result){
		this.e_1647404974081__e_1647404998216(parent_event_result)
	}

	//Handler for INTERNAL event of "e 1647404998216"
	e_1647404998216__internal(parent_event_result){
		this.e_1647404998216__e_1647405021511(parent_event_result)
		this.e_1647404998216__e_1647501655473(parent_event_result)
	}

	//Handler for INTERNAL event of "e 1647405021511"
	e_1647405021511__internal(parent_event_result){
		this.e_1647405021511__e_1647405033270(parent_event_result)
	}

	//Handler for INTERNAL event of "e 1647405033270"
	e_1647405033270__internal(parent_event_result){
		this.e_1647405033270__e_1647405068936(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "corp virtual account ui clear"
	corp_virtual_account_ui_clear__action_button_click(){
		this.corp_virtual_account_ui_clear__e_1647405104235()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation unblock"
	navigation_unblock__action_button_click(){
		this.navigation_unblock__ctwf_for_unblock()
	}

	//Handler for INTERNAL event of "ctwf for unblock"
	ctwf_for_unblock__internal(parent_event_result){
		this.ctwf_for_unblock__unblock_info(parent_event_result)
	}

	//Handler for INTERNAL event of "unblock info"
	unblock_info__internal(parent_event_result){
		this.unblock_info__rs_for_unblock(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation block"
	navigation_block__action_button_click(){
		this.navigation_block__conf_msg_for_block()
	}

	//Handler for INTERNAL event of "conf msg for block"
	conf_msg_for_block__internal(parent_event_result){
		this.conf_msg_for_block__block_ctwf(parent_event_result)
	}

	//Handler for INTERNAL event of "block ctwf"
	block_ctwf__internal(parent_event_result){
		this.block_ctwf__im_after_block(parent_event_result)
	}

	//Handler for INTERNAL event of "im after block"
	im_after_block__internal(parent_event_result){
		this.im_after_block__rs_after_block(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation unenroll customer"
	navigation_unenroll_customer__action_button_click(){
		this.navigation_unenroll_customer__change_tran_un_enrol_actions()
	}

	//Handler for INTERNAL event of "change tran un enrol actions"
	change_tran_un_enrol_actions__internal(parent_event_result){
		this.change_tran_un_enrol_actions__im_after_unerol_ct_success(parent_event_result)
	}

	//Handler for INTERNAL event of "im after unerol ct success"
	im_after_unerol_ct_success__internal(parent_event_result){
		this.im_after_unerol_ct_success__rs_after_unenrole_ct_success(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "customer edit save"
	customer_edit_save__action_button_click(){
		this.customer_edit_save__ve_for_customer_edit_on_btn_click()
	}

	//Handler for INTERNAL event of "ve for customer edit on btn click"
	ve_for_customer_edit_on_btn_click__internal(parent_event_result){
		this.ve_for_customer_edit_on_btn_click__st_after_custromer_ve_success(parent_event_result)
	}

	//Handler for INTERNAL event of "st after custromer ve success"
	st_after_custromer_ve_success__internal(parent_event_result){
		this.st_after_custromer_ve_success__im_after_custromer_st_success(parent_event_result)
	}

	//Handler for INTERNAL event of "im after custromer st success"
	im_after_custromer_st_success__internal(parent_event_result){
		this.im_after_custromer_st_success__rs_after_im_success(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "phone no edit save"
	phone_no_edit_save__action_button_click(){
		this.phone_no_edit_save__ve_for_modify_phone_no()
	}

	//Handler for INTERNAL event of "ve for modify phone no"
	ve_for_modify_phone_no__internal(parent_event_result){
		this.ve_for_modify_phone_no__st_after_modify_ph_no_ve_success(parent_event_result)
	}

	//Handler for INTERNAL event of "st after modify ph no ve success"
	st_after_modify_ph_no_ve_success__internal(parent_event_result){
		this.st_after_modify_ph_no_ve_success__im_after_modify_ph_no_save_success(parent_event_result)
	}

	//Handler for INTERNAL event of "im after modify ph no save success"
	im_after_modify_ph_no_save_success__internal(parent_event_result){
		this.im_after_modify_ph_no_save_success__rs_after_ph_no_modify_success(parent_event_result)
	}

	//Handler for MENU_ITEM_CLICK event of "customer details modify personal data"
	customer_details_modify_personal_data__menu_item_click(){
		this.customer_details_modify_personal_data__spap_for_modify_customer_data()
		this.customer_details_modify_personal_data__bt_for_modify_customer_ui()
	}

	//Handler for MENU_ITEM_CLICK event of "customer details modify phone no"
	customer_details_modify_phone_no__menu_item_click(){
		this.customer_details_modify_phone_no__spap_for_modify_phone_no()
		this.customer_details_modify_phone_no__bt_for_modify_phone_no()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__sec_by_click_on_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1587620779717"
		let event_params={"caller_name":"page_load__sec_by_click_on_pl","event_desc":"SEC by click on PL","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="set_event_context"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			return this.handler.set_event_context(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__brfq_on_page_loads() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="customer_details"
		let parent_source_id=""
		let event_code="e_1584360437446"
		let event_params={"caller_name":"page_load__brfq_on_page_loads","event_desc":"BRFQ on Page Loads","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":""}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665384453253":{"dtt_1304_1665384533560":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665384533560","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665396309337","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CUSTOMER","alias_name":"","mq_id":"MQ_1665395323191","date_format":false},{"column_name":"PHONE_NO","alias_name":"","mq_id":"MQ_1665395323493","date_format":false},{"column_name":"EMIRATES_ID","alias_name":"","mq_id":"MQ_1665395323662","date_format":false},{"column_name":"EMAIL_ID","alias_name":"","mq_id":"MQ_1665395323981","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1665395324141","date_format":false},{"column_name":"PARTICIPANT_CODE","alias_name":"","mq_id":"MQ_1665395324293","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665395324485","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665395324637","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSCPA_ID,        CUSTOMER,        PHONE_NO,        EMIRATES_ID,        EMAIL_ID,        IBAN,        PARTICIPANT_CODE,        STATUS,        PROCESS_STATUS,        DT_CODE,        DTT_CODE   FROM (SELECT NPSS.NPSSCPA_ID,                NPSS.CUSTOMER,                NPSS.PHONE_NO,                NPSS.EMIRATES_ID,                NPSS.EMAIL_ID,                NPSS.IBAN,                NPSS.PARTICIPANT_CODE,                NPSS.DT_CODE,                NPSS.DTT_CODE,                NPSS.STATUS,                NPSS.SYSTEM_ID,                NPSS.PROCESS_STATUS           FROM NPSS_CUST_PROXY_ADDRESS NPSS) V $WHERE  ORDER BY NPSSCPA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Cust Address CCD","filter":[],"databinding":[{"header":"Customer Name","target_column":"CUSTOMER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Phone No","target_column":"PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email ID","target_column":"EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Emirates ID","target_column":"EMIRATES_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Participant Code","target_column":"PARTICIPANT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__cf_by_click_on_page_load() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1584545012059"
		let event_params={"caller_name":"page_load__cf_by_click_on_page_load","event_desc":"CF by click on Page Load","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""}}
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
	page_load__he_for_add_acct() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_add_account"
		let parent_source_id=""
		let event_code="e_1647349314567"
		let event_params={"caller_name":"page_load__he_for_add_acct","event_desc":"HE for Add Acct","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_add_virtual_acct() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_link_add_add_bank"
		let parent_source_id=""
		let event_code="e_1647349336701"
		let event_params={"caller_name":"page_load__he_for_add_virtual_acct","event_desc":"HE for add Virtual Acct","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_from_pageload() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_trigger_btn"
		let parent_source_id=""
		let event_code="e_1647437803621"
		let event_params={"caller_name":"page_load__he_from_pageload","event_desc":"HE from pageload","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__tbc_from_pageload() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_trigger_btn"
		let parent_source_id=""
		let event_code="e_1647437821165"
		let event_params={"caller_name":"page_load__tbc_from_pageload","event_desc":"TBC from pageload","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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

	//Handler for DPSINIT event of "page_load"
	page_load__he_unenrol_on_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_unenroll_customer"
		let parent_source_id=""
		let event_code="e_1652277190916"
		let event_params={"caller_name":"page_load__he_unenrol_on_pl","event_desc":"HE unenrol on pl","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_view_on_page_load() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_view"
		let parent_source_id=""
		let event_code="e_1652341217435"
		let event_params={"caller_name":"page_load__he_for_view_on_page_load","event_desc":"HE for View on page load","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_block_on_page_load() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_block"
		let parent_source_id=""
		let event_code="e_1652341616007"
		let event_params={"caller_name":"page_load__he_for_block_on_page_load","event_desc":"HE for block on page load","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_unblock_on_page_load() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_unblock"
		let parent_source_id=""
		let event_code="e_1652341720902"
		let event_params={"caller_name":"page_load__he_for_unblock_on_page_load","event_desc":"HE for unblock on page load","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation enroll customer"
	navigation_enroll_customer__sp_by_click_on_add_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_enroll_customer"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1584360512002"
		let event_params={"caller_name":"navigation_enroll_customer__sp_by_click_on_add_action","event_desc":"SP by click on add Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_enroll_customer","raiseparam":{"profile_code":"BTL_1408_1584360351180"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation enroll customer"
	navigation_enroll_customer__he_by_click_on_nvg_edit_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_enroll_customer"
		let destn_id="data_entry_edit"
		let parent_source_id=""
		let event_code="e_1584360711848"
		let event_params={"caller_name":"navigation_enroll_customer__he_by_click_on_nvg_edit_action","event_desc":"HE by click on NVG Edit Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_enroll_customer","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation enroll customer"
	navigation_enroll_customer__cui_by_click_on_navigation_add() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_enroll_customer"
		let destn_id="data_entry"
		let parent_source_id=""
		let event_code="e_1584595505412"
		let event_params={"caller_name":"navigation_enroll_customer__cui_by_click_on_navigation_add","event_desc":"CUI by Click on Navigation Add","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_enroll_customer","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation enroll customer"
	navigation_enroll_customer__se_by_click_on_nvg_add_to_save_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_enroll_customer"
		let destn_id="data_entry_save"
		let parent_source_id=""
		let event_code="e_1584606156418"
		let event_params={"caller_name":"navigation_enroll_customer__se_by_click_on_nvg_add_to_save_action","event_desc":"SE by click on NVG Add to Save Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_enroll_customer","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation enroll customer"
	navigation_enroll_customer__ee_by_click_on_nvg_add_to_data_entry() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_enroll_customer"
		let destn_id="data_entry"
		let parent_source_id=""
		let event_code="e_1584682366105"
		let event_params={"caller_name":"navigation_enroll_customer__ee_by_click_on_nvg_add_to_data_entry","event_desc":"EE by click on NVG Add to Data Entry","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_enroll_customer","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation enroll customer"
	navigation_enroll_customer__he_by_click_on_add_actions_to_delete_actions() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_enroll_customer"
		let destn_id="data_entry_delete"
		let parent_source_id=""
		let event_code="e_1587451196032"
		let event_params={"caller_name":"navigation_enroll_customer__he_by_click_on_add_actions_to_delete_actions","event_desc":"HE by click on Add Actions to Delete actions","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_enroll_customer","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation enroll customer"
	navigation_enroll_customer__ee_by_click_on_add_actions() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_enroll_customer"
		let destn_id="data_entry_clear"
		let parent_source_id=""
		let event_code="e_1587451618190"
		let event_params={"caller_name":"navigation_enroll_customer__ee_by_click_on_add_actions","event_desc":"EE by click on Add actions","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_enroll_customer","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view"
	navigation_view__sp_by_click_on_nvg_view_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1584360802392"
		let event_params={"caller_name":"navigation_view__sp_by_click_on_nvg_view_action","event_desc":"SP by click on NVG view Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view","raiseparam":{"profile_code":"BTL_1408_1584360351180"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view"
	navigation_view__de_by_click_on_nvg_view_to_data_entry() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view"
		let destn_id="data_entry"
		let parent_source_id=""
		let event_code="e_1584360997119"
		let event_params={"caller_name":"navigation_view__de_by_click_on_nvg_view_to_data_entry","event_desc":"DE by click on NVG view to Data Entry","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view"
	navigation_view__he_by_click_on_nvg_view_to_de_save() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view"
		let destn_id="data_entry_save"
		let parent_source_id=""
		let event_code="e_1584361034102"
		let event_params={"caller_name":"navigation_view__he_by_click_on_nvg_view_to_de_save","event_desc":"HE by click on NVG view to DE Save","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view"
	navigation_view__se_by_click_on_nvg_view_to_edit_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view"
		let destn_id="data_entry_edit"
		let parent_source_id=""
		let event_code="e_1584361150512"
		let event_params={"caller_name":"navigation_view__se_by_click_on_nvg_view_to_edit_action","event_desc":"SE by click on NVG view to Edit Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view"
	navigation_view__bt_for_the_view_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view"
		let destn_id="data_entry"
		let parent_source_id=""
		let event_code="e_1584534940035"
		let event_params={"caller_name":"navigation_view__bt_for_the_view_action","event_desc":"BT for the view Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view"
	navigation_view__vw_to_delete_show() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view"
		let destn_id="data_entry_delete"
		let parent_source_id=""
		let event_code="e_1600694185463"
		let event_params={"caller_name":"navigation_view__vw_to_delete_show","event_desc":"VW To delete show","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view"
	navigation_view__he_for_clear_on_view_clk() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view"
		let destn_id="data_entry_clear"
		let parent_source_id=""
		let event_code="e_1602484782088"
		let event_params={"caller_name":"navigation_view__he_for_clear_on_view_clk","event_desc":"HE for Clear on view clk","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view"
	navigation_view__e_1647435131056() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view"
		let destn_id="navigation_link_add_add_bank"
		let parent_source_id=""
		let event_code="e_1647435131056"
		let event_params={"caller_name":"navigation_view__e_1647435131056","event_desc":"E_1647435131056","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "customer details"
	customer_details__ssr_for_the_list_to_data_entry() { 
		let Dest_Is_ctrl=true
		
		let source_id="customer_details"
		let destn_id="data_entry"
		let parent_source_id=""
		let event_code="e_1584538432432"
		let event_params={"caller_name":"customer_details__ssr_for_the_list_to_data_entry","event_desc":"SSR for the List to Data Entry","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"customer_details","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "customer details"
	customer_details__e_1647350147891() { 
		let Dest_Is_ctrl=true
		
		let source_id="customer_details"
		let destn_id="navigation_link_add_add_bank"
		let parent_source_id=""
		let event_code="e_1647350147891"
		let event_params={"caller_name":"customer_details__e_1647350147891","event_desc":"E_1647350147891","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"customer_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "customer details"
	customer_details__svm_from_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="customer_details"
		let destn_id="customer_details"
		let parent_source_id=""
		let event_code="e_1647408871024"
		let event_params={"caller_name":"customer_details__svm_from_list","event_desc":"SVM from List","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"customer_details","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_from_list__brfq_corporate_acct_list,svm_from_list__brfq_from_corp_dtl_list,"
		let event_data={"customer_details":{"e_1647408871024":{"dts":{"dt_1304_1665384453253":{"dtts":{"":{"uicgc_code":"UICGC_1","event_code":"E_1647408871024","dt_code":"DT_1304_1665384453253","dtt_code":"","dt_desc":"Customer DTG","dtt_desc":"NPSS Cust Proxy Address","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"NPSSCPA_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSSCPA_ID","setd3name":"NPSSCPA_ID"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665384453253":{"dtt_1304_1665384533560":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665384533560","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665396309337","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CUSTOMER","alias_name":"","mq_id":"MQ_1665395323191","date_format":false},{"column_name":"PHONE_NO","alias_name":"","mq_id":"MQ_1665395323493","date_format":false},{"column_name":"EMIRATES_ID","alias_name":"","mq_id":"MQ_1665395323662","date_format":false},{"column_name":"EMAIL_ID","alias_name":"","mq_id":"MQ_1665395323981","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1665395324141","date_format":false},{"column_name":"PARTICIPANT_CODE","alias_name":"","mq_id":"MQ_1665395324293","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665395324485","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665395324637","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSCPA_ID,        CUSTOMER,        PHONE_NO,        EMIRATES_ID,        EMAIL_ID,        IBAN,        PARTICIPANT_CODE,        STATUS,        PROCESS_STATUS,        DT_CODE,        DTT_CODE   FROM (SELECT NPSS.NPSSCPA_ID,                NPSS.CUSTOMER,                NPSS.PHONE_NO,                NPSS.EMIRATES_ID,                NPSS.EMAIL_ID,                NPSS.IBAN,                NPSS.PARTICIPANT_CODE,                NPSS.DT_CODE,                NPSS.DTT_CODE,                NPSS.STATUS,                NPSS.SYSTEM_ID,                NPSS.PROCESS_STATUS           FROM NPSS_CUST_PROXY_ADDRESS NPSS) V $WHERE  ORDER BY NPSSCPA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Cust Address CCD","filter":[],"databinding":[{"header":"Customer Name","target_column":"CUSTOMER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Phone No","target_column":"PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email ID","target_column":"EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Emirates ID","target_column":"EMIRATES_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Participant Code","target_column":"PARTICIPANT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "customer details"
	customer_details__e_1647411103895() { 
		let Dest_Is_ctrl=true
		
		let source_id="customer_details"
		let destn_id="navigation_add_account"
		let parent_source_id=""
		let event_code="e_1647411103895"
		let event_params={"caller_name":"customer_details__e_1647411103895","event_desc":"E_1647411103895","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"customer_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "customer details"
	customer_details__e_1652274413284() { 
		let Dest_Is_ctrl=true
		
		let source_id="customer_details"
		let destn_id="navigation_unblock"
		let parent_source_id=""
		let event_code="e_1652274413284"
		let event_params={"caller_name":"customer_details__e_1652274413284","event_desc":"E_1652274413284","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"customer_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "customer details"
	customer_details__e_1652274446807() { 
		let Dest_Is_ctrl=true
		
		let source_id="customer_details"
		let destn_id="navigation_block"
		let parent_source_id=""
		let event_code="e_1652274446807"
		let event_params={"caller_name":"customer_details__e_1652274446807","event_desc":"E_1652274446807","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"customer_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "customer details"
	customer_details__se_during_customer_selection() { 
		let Dest_Is_ctrl=true
		
		let source_id="customer_details"
		let destn_id="navigation_view"
		let parent_source_id=""
		let event_code="e_1652274497384"
		let event_params={"caller_name":"customer_details__se_during_customer_selection","event_desc":"SE during customer selection","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"customer_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "customer details"
	customer_details__e_1652276870594() { 
		let Dest_Is_ctrl=true
		
		let source_id="customer_details"
		let destn_id="navigation_unenroll_customer"
		let parent_source_id=""
		let event_code="e_1652276870594"
		let event_params={"caller_name":"customer_details__e_1652276870594","event_desc":"E_1652276870594","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"customer_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"CREATED","hide_column":"STATUS","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "customer details"
	customer_details__he_for_enrole_on_customer_list_selction() { 
		let Dest_Is_ctrl=true
		
		let source_id="customer_details"
		let destn_id="navigation_enroll_customer"
		let parent_source_id=""
		let event_code="e_1652341447453"
		let event_params={"caller_name":"customer_details__he_for_enrole_on_customer_list_selction","event_desc":"HE for enrole on customer list selction","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"customer_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for FILTER_CLICK event of "customer details"
	customer_details__spap_by_click_on_list_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="customer_details"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1584362555716"
		let event_params={"caller_name":"customer_details__spap_by_click_on_list_search","event_desc":"SPAP by click on List search","event_type":"FILTER_CLICK","caller_event_context":"SUCCESS","root_source_id":"customer_details","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_by_click_on_list_search","selector":"p_search_layout","profile_code":"BTL_1408_1584360407011","window_title":"Search","window_height":400,"window_width":"650px","window_close_icon":"Y","eventdes":"spap_by_click_on_list_search","eventcode":"E_1584362555716"}}
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

	//Handler for INTERNAL event of "svm from list"
	svm_from_list__brfq_corporate_acct_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_from_list"
		let destn_id="bank_account_details"
		let parent_source_id="customer_details"
		let event_code="e_1647345793418"
		let event_params={"caller_name":"svm_from_list__brfq_corporate_acct_list","event_desc":"BRFQ Corporate Acct list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"customer_details","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"Y"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665384453253":{"dtt_1304_1665385314469":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665385314469","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665387436513","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Bank MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSCPB_ID","alias_name":"","mq_id":"MQ_1665387234452","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1665387235082","date_format":false},{"column_name":"BANK_NAME","alias_name":"","mq_id":"MQ_1665387235258","date_format":false},{"column_name":"ACCOUNT_NO","alias_name":"","mq_id":"MQ_1665387251594","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665387251745","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665387264698","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSCPB_ID,        NPSSCPA_ID,        BANK_CODE,        BANK_NAME,        ACCOUNT_NO,        STATUS,        PROCESS_STATUS,        DT_CODE,        DTT_CODE   FROM (SELECT NPSSCPB.NPSSCPB_ID,                NPSSCPB.NPSSCPA_ID,                NPSSCPB.BANK_CODE,                NPSSCPB.BANK_NAME,                NPSSCPB.ACCOUNT_NO,                NPSSCPB.STATUS,                NPSSCPB.PROCESS_STATUS,                NPSSCPB.DTT_CODE,                NPSSCPB.DT_CODE           FROM NPSS_CUST_PROXY_BANKS NPSSCPB) V $WHERE  ORDER BY NPSSCPB_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Bank CCD","filter":[{"filter_name":"NPSSCPA_ID","binding_name":"NPSSCPA_ID","binding_value":"","source_name":"MI_LEVEL_NPSSCPA_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank Code","target_column":"BANK_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Bank Name","target_column":"BANK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account Number","target_column":"ACCOUNT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm from list"
	svm_from_list__brfq_from_corp_dtl_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_from_list"
		let destn_id="virtual_account_details"
		let parent_source_id="customer_details"
		let event_code="e_1647424016893"
		let event_params={"caller_name":"svm_from_list__brfq_from_corp_dtl_list","event_desc":"BRFQ from Corp Dtl list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"customer_details","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"Y"},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "data entry back"
	data_entry_back__rs_by_click_on_back_actions() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1587813016469"
		let event_params={"caller_name":"data_entry_back__rs_by_click_on_back_actions","event_desc":"RS by click on Back actions","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"data_entry_back","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__ssp_on_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1584361356638"
		let event_params={"caller_name":"search_search__ssp_on_search","event_desc":"SSP on Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="ssp_on_search__brfq_on_search,"
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
	search_search__e_1587636808228() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1587636808228"
		let event_params={"popup_info":{"context":""},"caller_name":"search_search__e_1587636808228","event_desc":"E_1587636808228","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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

	//Handler for INTERNAL event of "ssp on search"
	ssp_on_search__brfq_on_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="ssp_on_search"
		let destn_id="customer_details"
		let parent_source_id="search_search"
		let event_code="e_1584361409035"
		let event_params={"caller_name":"ssp_on_search__brfq_on_search","event_desc":"BRFQ on Search","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":""}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665384453253":{"dtt_1304_1665384533560":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665384533560","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665396309337","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CUSTOMER","alias_name":"","mq_id":"MQ_1665395323191","date_format":false},{"column_name":"PHONE_NO","alias_name":"","mq_id":"MQ_1665395323493","date_format":false},{"column_name":"EMIRATES_ID","alias_name":"","mq_id":"MQ_1665395323662","date_format":false},{"column_name":"EMAIL_ID","alias_name":"","mq_id":"MQ_1665395323981","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1665395324141","date_format":false},{"column_name":"PARTICIPANT_CODE","alias_name":"","mq_id":"MQ_1665395324293","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665395324485","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665395324637","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSCPA_ID,        CUSTOMER,        PHONE_NO,        EMIRATES_ID,        EMAIL_ID,        IBAN,        PARTICIPANT_CODE,        STATUS,        PROCESS_STATUS,        DT_CODE,        DTT_CODE   FROM (SELECT NPSS.NPSSCPA_ID,                NPSS.CUSTOMER,                NPSS.PHONE_NO,                NPSS.EMIRATES_ID,                NPSS.EMAIL_ID,                NPSS.IBAN,                NPSS.PARTICIPANT_CODE,                NPSS.DT_CODE,                NPSS.DTT_CODE,                NPSS.STATUS,                NPSS.SYSTEM_ID,                NPSS.PROCESS_STATUS           FROM NPSS_CUST_PROXY_ADDRESS NPSS) V $WHERE  ORDER BY NPSSCPA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Cust Address CCD","filter":[],"databinding":[{"header":"Customer Name","target_column":"CUSTOMER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Phone No","target_column":"PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email ID","target_column":"EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Emirates ID","target_column":"EMIRATES_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Participant Code","target_column":"PARTICIPANT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__cui_the_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_clear"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1584361382484"
		let event_params={"caller_name":"search_clear__cui_the_search","event_desc":"CUI the search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_clear","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "data entry edit"
	data_entry_edit__ee_by_click_on_edit_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_edit"
		let destn_id="data_entry"
		let parent_source_id=""
		let event_code="e_1584361563170"
		let event_params={"caller_name":"data_entry_edit__ee_by_click_on_edit_action","event_desc":"EE by click on edit Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"data_entry_edit","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "data entry edit"
	data_entry_edit__he_by_click_on_edit_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_edit"
		let destn_id="data_entry_edit"
		let parent_source_id=""
		let event_code="e_1584362027312"
		let event_params={"caller_name":"data_entry_edit__he_by_click_on_edit_action","event_desc":"HE by click on Edit Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"data_entry_edit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "data entry edit"
	data_entry_edit__se_by_click_on_edit_to_save__action() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_edit"
		let destn_id="data_entry_save"
		let parent_source_id=""
		let event_code="e_1584363483912"
		let event_params={"caller_name":"data_entry_edit__se_by_click_on_edit_to_save__action","event_desc":"SE by click on edit to save  Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"data_entry_edit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "data entry edit"
	data_entry_edit__e_1587461249949() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_edit"
		let destn_id="data_entry_clear"
		let parent_source_id=""
		let event_code="e_1587461249949"
		let event_params={"caller_name":"data_entry_edit__e_1587461249949","event_desc":"E_1587461249949","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"data_entry_edit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "data entry save"
	data_entry_save__ve_by_click_on_save_button() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_save"
		let destn_id="data_entry"
		let parent_source_id=""
		let event_code="e_1584362243699"
		let event_params={"caller_name":"data_entry_save__ve_by_click_on_save_button","event_desc":"VE by click on save button","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"data_entry_save","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="ve_by_click_on_save_button__st_by_click_on_save_action,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ve by click on save button"
	ve_by_click_on_save_button__st_by_click_on_save_action(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ve_by_click_on_save_button"
		let destn_id="data_entry"
		let parent_source_id="data_entry_save"
		let event_code="e_1584362295998"
		let event_params={"caller_name":"ve_by_click_on_save_button__st_by_click_on_save_action","event_desc":"ST by click on save Action","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"data_entry_save","raiseparam":{"reset_selection":"Y","need_clear_value":"Y","no_change_status_on_modify":"N","release_lock":"Y","clear_cache":"ALL"},"parent_event_result":"SUCCESS"}
		let handler_code="save_tran"
		let internals="st_by_click_on_save_action__im_by_click_on_save_action,"
		let event_data={"data_entry":{"e_1584362295998":{"dts":{"dt_1304_1665384453253":{"dtts":{"":{"uicgc_code":"UICGC_3","event_code":"E_1584362295998","dt_code":"DT_1304_1665384453253","dtt_code":"","dt_desc":"Customer DTG","dtt_desc":"NPSS Cust Proxy Address","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[],"get_from_memory":[{"level":"SESSION_LEVEL","value":"ROOT_SCODE","tb_data":"Y","column":"PRODUCT_CODE","d3name":"Product Code"}],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={}
		try {
			this.handler.save_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "st by click on save action"
	st_by_click_on_save_action__im_by_click_on_save_action(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="st_by_click_on_save_action"
		let destn_id=""
		let parent_source_id="ve_by_click_on_save_button"
		let event_code="e_1584362425726"
		let event_params={"caller_name":"st_by_click_on_save_action__im_by_click_on_save_action","event_desc":"IM by click on save Action","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Customer Enrolment IPP API (Enrolment) has been Initiated","root_source_id":"data_entry_save","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="im_by_click_on_save_action__rs_after_data_entry_save_success,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "im by click on save action"
	im_by_click_on_save_action__rs_after_data_entry_save_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="im_by_click_on_save_action"
		let destn_id=""
		let parent_source_id="st_by_click_on_save_action"
		let event_code="e_1652341950517"
		let event_params={"caller_name":"im_by_click_on_save_action__rs_after_data_entry_save_success","event_desc":"RS after data entry save success","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"data_entry_save","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "data entry delete"
	data_entry_delete__cnf_msg_for_data_entry_delete() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_delete"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1587814926985"
		let event_params={"caller_name":"data_entry_delete__cnf_msg_for_data_entry_delete","event_desc":"CNF Msg for data entry delete","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","message_text":"Are you sure that you want to permanently delete the selected record?","root_source_id":"data_entry_delete","raiseparam":{"conf_msg":"Are you sure that you want to permanently delete the selected record?"}}
		let handler_code="conf_msg"
		let internals="cnf_msg_for_data_entry_delete__dt_by_click_on_confs_msg,"
		let event_data={}
		let data_source={}
		try {
			this.handler.conf_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cnf msg for data entry delete"
	cnf_msg_for_data_entry_delete__dt_by_click_on_confs_msg(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="YES"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cnf_msg_for_data_entry_delete"
		let destn_id="customer_details"
		let parent_source_id="data_entry_delete"
		let event_code="e_1601982711067"
		let event_params={"caller_name":"cnf_msg_for_data_entry_delete__dt_by_click_on_confs_msg","event_desc":"DT by click on confs msg","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"data_entry_delete","raiseparam":{"conf_msg":"","info_msg":"The record has been deleted successfully","clear_cache":"ALL"},"parent_event_result":"YES"}
		let handler_code="delete_tran"
		let internals="dt_by_click_on_confs_msg__rs_after_dt_success,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665384453253":{"dtt_1304_1665384533560":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665384533560","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665396309337","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CUSTOMER","alias_name":"","mq_id":"MQ_1665395323191","date_format":false},{"column_name":"PHONE_NO","alias_name":"","mq_id":"MQ_1665395323493","date_format":false},{"column_name":"EMIRATES_ID","alias_name":"","mq_id":"MQ_1665395323662","date_format":false},{"column_name":"EMAIL_ID","alias_name":"","mq_id":"MQ_1665395323981","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1665395324141","date_format":false},{"column_name":"PARTICIPANT_CODE","alias_name":"","mq_id":"MQ_1665395324293","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665395324485","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665395324637","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSCPA_ID,        CUSTOMER,        PHONE_NO,        EMIRATES_ID,        EMAIL_ID,        IBAN,        PARTICIPANT_CODE,        STATUS,        PROCESS_STATUS,        DT_CODE,        DTT_CODE   FROM (SELECT NPSS.NPSSCPA_ID,                NPSS.CUSTOMER,                NPSS.PHONE_NO,                NPSS.EMIRATES_ID,                NPSS.EMAIL_ID,                NPSS.IBAN,                NPSS.PARTICIPANT_CODE,                NPSS.DT_CODE,                NPSS.DTT_CODE,                NPSS.STATUS,                NPSS.SYSTEM_ID,                NPSS.PROCESS_STATUS           FROM NPSS_CUST_PROXY_ADDRESS NPSS) V $WHERE  ORDER BY NPSSCPA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Cust Address CCD","filter":[],"databinding":[{"header":"Customer Name","target_column":"CUSTOMER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Phone No","target_column":"PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email ID","target_column":"EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Emirates ID","target_column":"EMIRATES_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Participant Code","target_column":"PARTICIPANT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.delete_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "dt by click on confs msg"
	dt_by_click_on_confs_msg__rs_after_dt_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="dt_by_click_on_confs_msg"
		let destn_id=""
		let parent_source_id="cnf_msg_for_data_entry_delete"
		let event_code="e_1652342167153"
		let event_params={"caller_name":"dt_by_click_on_confs_msg__rs_after_dt_success","event_desc":"RS after DT success","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"data_entry_delete","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation clear"
	navigation_clear__re_by_click_on_click_to_list_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_clear"
		let destn_id="customer_details"
		let parent_source_id=""
		let event_code="e_1584368292757"
		let event_params={"caller_name":"navigation_clear__re_by_click_on_click_to_list_action","event_desc":"RE by click on click to list Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_clear","raiseparam":{}}
		let handler_code="reset_selection"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665384453253":{"dtt_1304_1665384533560":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665384533560","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665396309337","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CUSTOMER","alias_name":"","mq_id":"MQ_1665395323191","date_format":false},{"column_name":"PHONE_NO","alias_name":"","mq_id":"MQ_1665395323493","date_format":false},{"column_name":"EMIRATES_ID","alias_name":"","mq_id":"MQ_1665395323662","date_format":false},{"column_name":"EMAIL_ID","alias_name":"","mq_id":"MQ_1665395323981","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1665395324141","date_format":false},{"column_name":"PARTICIPANT_CODE","alias_name":"","mq_id":"MQ_1665395324293","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665395324485","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665395324637","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSCPA_ID,        CUSTOMER,        PHONE_NO,        EMIRATES_ID,        EMAIL_ID,        IBAN,        PARTICIPANT_CODE,        STATUS,        PROCESS_STATUS,        DT_CODE,        DTT_CODE   FROM (SELECT NPSS.NPSSCPA_ID,                NPSS.CUSTOMER,                NPSS.PHONE_NO,                NPSS.EMIRATES_ID,                NPSS.EMAIL_ID,                NPSS.IBAN,                NPSS.PARTICIPANT_CODE,                NPSS.DT_CODE,                NPSS.DTT_CODE,                NPSS.STATUS,                NPSS.SYSTEM_ID,                NPSS.PROCESS_STATUS           FROM NPSS_CUST_PROXY_ADDRESS NPSS) V $WHERE  ORDER BY NPSSCPA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Cust Address CCD","filter":[],"databinding":[{"header":"Customer Name","target_column":"CUSTOMER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Phone No","target_column":"PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email ID","target_column":"EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Emirates ID","target_column":"EMIRATES_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Participant Code","target_column":"PARTICIPANT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.reset_selection(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation clear"
	navigation_clear__se_for_the_clear_after_the__add() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_clear"
		let destn_id="navigation_enroll_customer"
		let parent_source_id=""
		let event_code="e_1584530673501"
		let event_params={"caller_name":"navigation_clear__se_for_the_clear_after_the__add","event_desc":"SE for the Clear after the  add","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_clear","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation clear"
	navigation_clear__he_for_the_after_the_clear_button() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_clear"
		let destn_id="navigation_view"
		let parent_source_id=""
		let event_code="e_1584530697363"
		let event_params={"caller_name":"navigation_clear__he_for_the_after_the_clear_button","event_desc":"HE for the after the clear button","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_clear","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation clear"
	navigation_clear__e_1647435052385() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_clear"
		let destn_id="bank_account_details"
		let parent_source_id=""
		let event_code="e_1647435052385"
		let event_params={"caller_name":"navigation_clear__e_1647435052385","event_desc":"E_1647435052385","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_clear","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665384453253":{"dtt_1304_1665385314469":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665385314469","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665387436513","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Bank MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSCPB_ID","alias_name":"","mq_id":"MQ_1665387234452","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1665387235082","date_format":false},{"column_name":"BANK_NAME","alias_name":"","mq_id":"MQ_1665387235258","date_format":false},{"column_name":"ACCOUNT_NO","alias_name":"","mq_id":"MQ_1665387251594","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665387251745","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665387264698","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSCPB_ID,        NPSSCPA_ID,        BANK_CODE,        BANK_NAME,        ACCOUNT_NO,        STATUS,        PROCESS_STATUS,        DT_CODE,        DTT_CODE   FROM (SELECT NPSSCPB.NPSSCPB_ID,                NPSSCPB.NPSSCPA_ID,                NPSSCPB.BANK_CODE,                NPSSCPB.BANK_NAME,                NPSSCPB.ACCOUNT_NO,                NPSSCPB.STATUS,                NPSSCPB.PROCESS_STATUS,                NPSSCPB.DTT_CODE,                NPSSCPB.DT_CODE           FROM NPSS_CUST_PROXY_BANKS NPSSCPB) V $WHERE  ORDER BY NPSSCPB_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Bank CCD","filter":[{"filter_name":"NPSSCPA_ID","binding_name":"NPSSCPA_ID","binding_value":"","source_name":"MI_LEVEL_NPSSCPA_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank Code","target_column":"BANK_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Bank Name","target_column":"BANK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account Number","target_column":"ACCOUNT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation clear"
	navigation_clear__e_1647435085051() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_clear"
		let destn_id="virtual_account_details"
		let parent_source_id=""
		let event_code="e_1647435085051"
		let event_params={"caller_name":"navigation_clear__e_1647435085051","event_desc":"E_1647435085051","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_clear","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation clear"
	navigation_clear__e_1647435109130() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_clear"
		let destn_id="navigation_add_account"
		let parent_source_id=""
		let event_code="e_1647435109130"
		let event_params={"caller_name":"navigation_clear__e_1647435109130","event_desc":"E_1647435109130","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_clear","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation clear"
	navigation_clear__e_1647435243405() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_clear"
		let destn_id="navigation_link_add_add_bank"
		let parent_source_id=""
		let event_code="e_1647435243405"
		let event_params={"caller_name":"navigation_clear__e_1647435243405","event_desc":"E_1647435243405","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_clear","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation clear"
	navigation_clear__he_for_unenrole_on_clear_btn_clk() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_clear"
		let destn_id="navigation_unenroll_customer"
		let parent_source_id=""
		let event_code="e_1652335492408"
		let event_params={"caller_name":"navigation_clear__he_for_unenrole_on_clear_btn_clk","event_desc":"HE for unenrole on clear btn clk","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_clear","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation clear"
	navigation_clear__he_for_block_btn_on_clear_btn_clk() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_clear"
		let destn_id="navigation_block"
		let parent_source_id=""
		let event_code="e_1652335582407"
		let event_params={"caller_name":"navigation_clear__he_for_block_btn_on_clear_btn_clk","event_desc":"HE for Block btn on clear btn clk","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_clear","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation clear"
	navigation_clear__he_for_unblock_on_clear_btn_click() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_clear"
		let destn_id="navigation_unblock"
		let parent_source_id=""
		let event_code="e_1652335758516"
		let event_params={"caller_name":"navigation_clear__he_for_unblock_on_clear_btn_click","event_desc":"HE for unblock on clear btn click","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_clear","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "data entry clear"
	data_entry_clear__cui_by_click_on_clear_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_clear"
		let destn_id="data_entry"
		let parent_source_id=""
		let event_code="e_1584368860768"
		let event_params={"caller_name":"data_entry_clear__cui_by_click_on_clear_action","event_desc":"CUI by click on clear Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"data_entry_clear","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for SELECTION_CHANGED event of "bank account details"
	bank_account_details__e_1647351042233() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="corporate_accounts_ui_save"
		let parent_source_id=""
		let event_code="e_1647351042233"
		let event_params={"caller_name":"bank_account_details__e_1647351042233","event_desc":"E_1647351042233","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "bank account details"
	bank_account_details__e_1647351101835() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="corporate_accounts_ui_edit"
		let parent_source_id=""
		let event_code="e_1647351101835"
		let event_params={"caller_name":"bank_account_details__e_1647351101835","event_desc":"E_1647351101835","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "bank account details"
	bank_account_details__e_1647351145486() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="corporate_accounts_ui_clear"
		let parent_source_id=""
		let event_code="e_1647351145486"
		let event_params={"caller_name":"bank_account_details__e_1647351145486","event_desc":"E_1647351145486","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "bank account details"
	bank_account_details__e_1647351185789() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="corporate_accounts_ui_delete"
		let parent_source_id=""
		let event_code="e_1647351185789"
		let event_params={"caller_name":"bank_account_details__e_1647351185789","event_desc":"E_1647351185789","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "bank account details"
	bank_account_details__e_1647406200839() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="corporate_accounts_ui"
		let parent_source_id=""
		let event_code="e_1647406200839"
		let event_params={"caller_name":"bank_account_details__e_1647406200839","event_desc":"E_1647406200839","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "bank account details"
	bank_account_details__e_1647411146810() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="navigation_link_add_add_bank"
		let parent_source_id=""
		let event_code="e_1647411146810"
		let event_params={"caller_name":"bank_account_details__e_1647411146810","event_desc":"E_1647411146810","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "bank account details"
	bank_account_details__e_1647413387023() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="navigation_add_account"
		let parent_source_id=""
		let event_code="e_1647413387023"
		let event_params={"caller_name":"bank_account_details__e_1647413387023","event_desc":"E_1647413387023","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "bank account details"
	bank_account_details__ee_for_unblock() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="navigation_unblock"
		let parent_source_id=""
		let event_code="e_1652104238401"
		let event_params={"caller_name":"bank_account_details__ee_for_unblock","event_desc":"EE for unblock","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "bank account details"
	bank_account_details__ee_for_block() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="navigation_block"
		let parent_source_id=""
		let event_code="e_1652104263429"
		let event_params={"caller_name":"bank_account_details__ee_for_block","event_desc":"EE for block","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "bank account details"
	bank_account_details__e_1652111049978() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="navigation_link_add_add_bank"
		let parent_source_id=""
		let event_code="e_1652111049978"
		let event_params={"caller_name":"bank_account_details__e_1652111049978","event_desc":"E_1652111049978","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "bank account details"
	bank_account_details__e_1652274265534() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="navigation_block"
		let parent_source_id=""
		let event_code="e_1652274265534"
		let event_params={"caller_name":"bank_account_details__e_1652274265534","event_desc":"E_1652274265534","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "bank account details"
	bank_account_details__e_1652274280842() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="navigation_unblock"
		let parent_source_id=""
		let event_code="e_1652274280842"
		let event_params={"caller_name":"bank_account_details__e_1652274280842","event_desc":"E_1652274280842","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "bank account details"
	bank_account_details__he_during_bank_account_selection() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="navigation_view"
		let parent_source_id=""
		let event_code="e_1652274488685"
		let event_params={"caller_name":"bank_account_details__he_during_bank_account_selection","event_desc":"HE during bank account selection","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "bank account details"
	bank_account_details__e_1652276936752() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="navigation_unenroll_customer"
		let parent_source_id=""
		let event_code="e_1652276936752"
		let event_params={"caller_name":"bank_account_details__e_1652276936752","event_desc":"E_1652276936752","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "bank account details"
	bank_account_details__se_for_unblock__corporate_accounts_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="navigation_unblock"
		let parent_source_id=""
		let event_code="e_1665387771068"
		let event_params={"caller_name":"bank_account_details__se_for_unblock__corporate_accounts_ui","event_desc":"SE FOR UNBLOCK","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"BLOCKED","hide_column":"STATUS","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "bank account details"
	bank_account_details__se_for_block_actions__corporate_accounts_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="navigation_block"
		let parent_source_id=""
		let event_code="e_1665387796184"
		let event_params={"caller_name":"bank_account_details__se_for_block_actions__corporate_accounts_ui","event_desc":"SE for block actions","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"CREATED","hide_column":"STATUS","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "corporate accounts ui save"
	corporate_accounts_ui_save__ve_from_corp_acct_save_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="corporate_accounts_ui_save"
		let destn_id="corporate_accounts_ui"
		let parent_source_id=""
		let event_code="e_1647347966420"
		let event_params={"caller_name":"corporate_accounts_ui_save__ve_from_corp_acct_save_btn","event_desc":"VE from corp acct save btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"corporate_accounts_ui_save","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="ve_from_corp_acct_save_btn__st_from_vt_corp_acct,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ve from corp acct save btn"
	ve_from_corp_acct_save_btn__st_from_vt_corp_acct(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ve_from_corp_acct_save_btn"
		let destn_id="corporate_accounts_ui"
		let parent_source_id="corporate_accounts_ui_save"
		let event_code="e_1647348013620"
		let event_params={"caller_name":"ve_from_corp_acct_save_btn__st_from_vt_corp_acct","event_desc":"ST from VT Corp Acct","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"corporate_accounts_ui_save","raiseparam":{"reset_selection":"Y","need_clear_value":"Y","no_change_status_on_modify":"N","release_lock":"Y","clear_cache":"ALL"},"parent_event_result":"SUCCESS"}
		let handler_code="save_tran"
		let internals="st_from_vt_corp_acct__info_from_corp_acct_save,"
		let event_data={"corporate_accounts_ui":{"e_1647348013620":{"dts":{"dt_1304_1665384453253":{"dtts":{"":{"uicgc_code":"UICGC_7","event_code":"E_1647348013620","dt_code":"DT_1304_1665384453253","dtt_code":"","dt_desc":"Customer DTG","dtt_desc":"NPSS Cust Proxy Address","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[],"get_from_memory":[{"level":"MI_LEVEL","value":"MI_LEVEL_CR_BANK_NAME","tb_data":"Y","column":"BANK_NAME","d3name":"BANK_NAME"},{"level":"MI_LEVEL","value":"MI_LEVEL_NPSSCPA_ID","tb_data":"Y","column":"NPSSCPA_ID","d3name":"NPSSCPA_ID"},{"level":"SESSION_LEVEL","value":"ROOT_SCODE","tb_data":"Y","column":"PRODUCT_CODE","d3name":"Product Code"}],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={}
		try {
			this.handler.save_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "st from vt corp acct"
	st_from_vt_corp_acct__info_from_corp_acct_save(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="st_from_vt_corp_acct"
		let destn_id=""
		let parent_source_id="ve_from_corp_acct_save_btn"
		let event_code="e_1647348083477"
		let event_params={"caller_name":"st_from_vt_corp_acct__info_from_corp_acct_save","event_desc":"Info from corp acct save","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Customer Add Bank Account IPP API (Add bank accounts) has been Initiated.","root_source_id":"corporate_accounts_ui_save","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="info_from_corp_acct_save__e_1647351709329,info_from_corp_acct_save__e_1647351743956,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "info from corp acct save"
	info_from_corp_acct_save__e_1647351709329(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="info_from_corp_acct_save"
		let destn_id="bank_account_details"
		let parent_source_id="st_from_vt_corp_acct"
		let event_code="e_1647351709329"
		let event_params={"caller_name":"info_from_corp_acct_save__e_1647351709329","event_desc":"E_1647351709329","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"corporate_accounts_ui_save","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="refresh_element"
		let internals="e_1647351709329__e_1647404351736,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665384453253":{"dtt_1304_1665385314469":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665385314469","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665387436513","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Bank MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSCPB_ID","alias_name":"","mq_id":"MQ_1665387234452","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1665387235082","date_format":false},{"column_name":"BANK_NAME","alias_name":"","mq_id":"MQ_1665387235258","date_format":false},{"column_name":"ACCOUNT_NO","alias_name":"","mq_id":"MQ_1665387251594","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665387251745","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665387264698","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSCPB_ID,        NPSSCPA_ID,        BANK_CODE,        BANK_NAME,        ACCOUNT_NO,        STATUS,        PROCESS_STATUS,        DT_CODE,        DTT_CODE   FROM (SELECT NPSSCPB.NPSSCPB_ID,                NPSSCPB.NPSSCPA_ID,                NPSSCPB.BANK_CODE,                NPSSCPB.BANK_NAME,                NPSSCPB.ACCOUNT_NO,                NPSSCPB.STATUS,                NPSSCPB.PROCESS_STATUS,                NPSSCPB.DTT_CODE,                NPSSCPB.DT_CODE           FROM NPSS_CUST_PROXY_BANKS NPSSCPB) V $WHERE  ORDER BY NPSSCPB_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Bank CCD","filter":[{"filter_name":"NPSSCPA_ID","binding_name":"NPSSCPA_ID","binding_value":"","source_name":"MI_LEVEL_NPSSCPA_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank Code","target_column":"BANK_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Bank Name","target_column":"BANK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account Number","target_column":"ACCOUNT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.refresh_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "info from corp acct save"
	info_from_corp_acct_save__e_1647351743956() { 
		let Dest_Is_ctrl=true
		
		let source_id="info_from_corp_acct_save"
		let destn_id=""
		let parent_source_id="st_from_vt_corp_acct"
		let event_code="e_1647351743956"
		let event_params={"caller_name":"info_from_corp_acct_save__e_1647351743956","event_desc":"E_1647351743956","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"corporate_accounts_ui_save","raiseparam":{"profile_code":"BTL_1408_1584359909096"}}
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

	//Handler for INTERNAL event of "e 1647351709329"
	e_1647351709329__e_1647404351736() { 
		let Dest_Is_ctrl=true
		
		let source_id="e_1647351709329"
		let destn_id="virtual_account_details"
		let parent_source_id="info_from_corp_acct_save"
		let event_code="e_1647404351736"
		let event_params={"caller_name":"e_1647351709329__e_1647404351736","event_desc":"E_1647404351736","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"corporate_accounts_ui_save","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation add account"
	navigation_add_account__e_1647348595624() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add_account"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1647348595624"
		let event_params={"caller_name":"navigation_add_account__e_1647348595624","event_desc":"E_1647348595624","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add_account","raiseparam":{"profile_code":"BTL_1408_1647347503927"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation add account"
	navigation_add_account__e_1647348677906() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add_account"
		let destn_id="corporate_accounts_ui_edit"
		let parent_source_id=""
		let event_code="e_1647348677906"
		let event_params={"caller_name":"navigation_add_account__e_1647348677906","event_desc":"E_1647348677906","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add_account","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation add account"
	navigation_add_account__e_1647348710033() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add_account"
		let destn_id="corporate_accounts_ui_delete"
		let parent_source_id=""
		let event_code="e_1647348710033"
		let event_params={"caller_name":"navigation_add_account__e_1647348710033","event_desc":"E_1647348710033","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add_account","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation add account"
	navigation_add_account__e_1647348738034() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add_account"
		let destn_id="corporate_accounts_ui_clear"
		let parent_source_id=""
		let event_code="e_1647348738034"
		let event_params={"caller_name":"navigation_add_account__e_1647348738034","event_desc":"E_1647348738034","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add_account","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation add account"
	navigation_add_account__e_1647348769817() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add_account"
		let destn_id="corporate_accounts_ui_save"
		let parent_source_id=""
		let event_code="e_1647348769817"
		let event_params={"caller_name":"navigation_add_account__e_1647348769817","event_desc":"E_1647348769817","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add_account","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation add account"
	navigation_add_account__e_1647348819291() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add_account"
		let destn_id="corporate_accounts_ui"
		let parent_source_id=""
		let event_code="e_1647348819291"
		let event_params={"caller_name":"navigation_add_account__e_1647348819291","event_desc":"E_1647348819291","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add_account","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation add account"
	navigation_add_account__e_1647348935452() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add_account"
		let destn_id="corporate_accounts_ui"
		let parent_source_id=""
		let event_code="e_1647348935452"
		let event_params={"caller_name":"navigation_add_account__e_1647348935452","event_desc":"E_1647348935452","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add_account","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation link add add bank"
	navigation_link_add_add_bank__e_1647349052535() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_link_add_add_bank"
		let destn_id="corp_virtual_account_ui"
		let parent_source_id=""
		let event_code="e_1647349052535"
		let event_params={"caller_name":"navigation_link_add_add_bank__e_1647349052535","event_desc":"E_1647349052535","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_link_add_add_bank","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation link add add bank"
	navigation_link_add_add_bank__e_1647349070417() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_link_add_add_bank"
		let destn_id="corp_virtual_account_ui"
		let parent_source_id=""
		let event_code="e_1647349070417"
		let event_params={"caller_name":"navigation_link_add_add_bank__e_1647349070417","event_desc":"E_1647349070417","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_link_add_add_bank","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation link add add bank"
	navigation_link_add_add_bank__e_1647349098419() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_link_add_add_bank"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1647349098419"
		let event_params={"caller_name":"navigation_link_add_add_bank__e_1647349098419","event_desc":"E_1647349098419","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_link_add_add_bank","raiseparam":{"profile_code":"BTL_1408_1647347637688"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation link add add bank"
	navigation_link_add_add_bank__e_1647349136690() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_link_add_add_bank"
		let destn_id="corp_virtual_account_ui_save"
		let parent_source_id=""
		let event_code="e_1647349136690"
		let event_params={"caller_name":"navigation_link_add_add_bank__e_1647349136690","event_desc":"E_1647349136690","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_link_add_add_bank","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation link add add bank"
	navigation_link_add_add_bank__e_1647349161175() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_link_add_add_bank"
		let destn_id="corp_virtual_account_ui_edit"
		let parent_source_id=""
		let event_code="e_1647349161175"
		let event_params={"caller_name":"navigation_link_add_add_bank__e_1647349161175","event_desc":"E_1647349161175","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_link_add_add_bank","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation link add add bank"
	navigation_link_add_add_bank__e_1647349180891() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_link_add_add_bank"
		let destn_id="corp_virtual_account_ui_delete"
		let parent_source_id=""
		let event_code="e_1647349180891"
		let event_params={"caller_name":"navigation_link_add_add_bank__e_1647349180891","event_desc":"E_1647349180891","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_link_add_add_bank","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation link add add bank"
	navigation_link_add_add_bank__e_1647349213452() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_link_add_add_bank"
		let destn_id="corp_virtual_account_ui_clear"
		let parent_source_id=""
		let event_code="e_1647349213452"
		let event_params={"caller_name":"navigation_link_add_add_bank__e_1647349213452","event_desc":"E_1647349213452","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_link_add_add_bank","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "virtual account details"
	virtual_account_details__e_1647351430786() { 
		let Dest_Is_ctrl=true
		
		let source_id="virtual_account_details"
		let destn_id="corp_virtual_account_ui_save"
		let parent_source_id=""
		let event_code="e_1647351430786"
		let event_params={"caller_name":"virtual_account_details__e_1647351430786","event_desc":"E_1647351430786","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"virtual_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "virtual account details"
	virtual_account_details__e_1647351457748() { 
		let Dest_Is_ctrl=true
		
		let source_id="virtual_account_details"
		let destn_id="corp_virtual_account_ui_edit"
		let parent_source_id=""
		let event_code="e_1647351457748"
		let event_params={"caller_name":"virtual_account_details__e_1647351457748","event_desc":"E_1647351457748","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"virtual_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "virtual account details"
	virtual_account_details__e_1647351501515() { 
		let Dest_Is_ctrl=true
		
		let source_id="virtual_account_details"
		let destn_id="corp_virtual_account_ui_clear"
		let parent_source_id=""
		let event_code="e_1647351501515"
		let event_params={"caller_name":"virtual_account_details__e_1647351501515","event_desc":"E_1647351501515","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"virtual_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "virtual account details"
	virtual_account_details__e_1647351535150() { 
		let Dest_Is_ctrl=true
		
		let source_id="virtual_account_details"
		let destn_id="corp_virtual_account_ui_delete"
		let parent_source_id=""
		let event_code="e_1647351535150"
		let event_params={"caller_name":"virtual_account_details__e_1647351535150","event_desc":"E_1647351535150","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"virtual_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "virtual account details"
	virtual_account_details__e_1647406274732() { 
		let Dest_Is_ctrl=true
		
		let source_id="virtual_account_details"
		let destn_id="corp_virtual_account_ui"
		let parent_source_id=""
		let event_code="e_1647406274732"
		let event_params={"caller_name":"virtual_account_details__e_1647406274732","event_desc":"E_1647406274732","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"virtual_account_details","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "virtual account details"
	virtual_account_details__e_1647413438551() { 
		let Dest_Is_ctrl=true
		
		let source_id="virtual_account_details"
		let destn_id="navigation_link_add_add_bank"
		let parent_source_id=""
		let event_code="e_1647413438551"
		let event_params={"caller_name":"virtual_account_details__e_1647413438551","event_desc":"E_1647413438551","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"virtual_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for MENU_ITEM_CLICK event of "bank account details view"
	bank_account_details_view__sp_by_click_on_bank_account_view() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details_view"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1647350481975"
		let event_params={"source_comp_id":"bank_account_details","source_ctrl_id":"view","caller_name":"bank_account_details_view__sp_by_click_on_bank_account_view","event_desc":"SP by Click on Bank Account View","event_type":"MENU_ITEM_CLICK","caller_event_context":"SUCCESS","root_source_id":"bank_account_details_view","raiseparam":{"profile_code":"BTL_1408_1647347503927"}}
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

	//Handler for MENU_ITEM_CLICK event of "bank account details view"
	bank_account_details_view__bt_by_click_on_bank_account_view() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details_view"
		let destn_id="corporate_accounts_ui"
		let parent_source_id=""
		let event_code="e_1647350645565"
		let event_params={"source_comp_id":"bank_account_details","source_ctrl_id":"view","caller_name":"bank_account_details_view__bt_by_click_on_bank_account_view","event_desc":"BT by Click on Bank Account View","event_type":"MENU_ITEM_CLICK","caller_event_context":"SUCCESS","root_source_id":"bank_account_details_view","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":"","change_detection":""}}
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

	//Handler for MENU_ITEM_CLICK event of "bank account details view"
	bank_account_details_view__de_to_ui_by_click_on_bank_account_view() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details_view"
		let destn_id="corporate_accounts_ui"
		let parent_source_id=""
		let event_code="e_1647350692493"
		let event_params={"source_comp_id":"bank_account_details","source_ctrl_id":"view","caller_name":"bank_account_details_view__de_to_ui_by_click_on_bank_account_view","event_desc":"DE to UI by Click on Bank Account View","event_type":"MENU_ITEM_CLICK","caller_event_context":"SUCCESS","root_source_id":"bank_account_details_view","raiseparam":{}}
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

	//Handler for MENU_ITEM_CLICK event of "ctx 21"
	ctx_21__e_1647351276363() { 
		let Dest_Is_ctrl=true
		
		let source_id="ctx_21"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1647351276363"
		let event_params={"caller_name":"ctx_21__e_1647351276363","event_desc":"E_1647351276363","event_type":"MENU_ITEM_CLICK","caller_event_context":"SUCCESS","root_source_id":"ctx_21","raiseparam":{"profile_code":"BTL_1408_1647347637688"}}
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

	//Handler for MENU_ITEM_CLICK event of "ctx 21"
	ctx_21__e_1647351339933() { 
		let Dest_Is_ctrl=true
		
		let source_id="ctx_21"
		let destn_id="corp_virtual_account_ui"
		let parent_source_id=""
		let event_code="e_1647351339933"
		let event_params={"caller_name":"ctx_21__e_1647351339933","event_desc":"E_1647351339933","event_type":"MENU_ITEM_CLICK","caller_event_context":"SUCCESS","root_source_id":"ctx_21","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":"","change_detection":""}}
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

	//Handler for MENU_ITEM_CLICK event of "ctx 21"
	ctx_21__e_1647351380357() { 
		let Dest_Is_ctrl=true
		
		let source_id="ctx_21"
		let destn_id="corp_virtual_account_ui"
		let parent_source_id=""
		let event_code="e_1647351380357"
		let event_params={"caller_name":"ctx_21__e_1647351380357","event_desc":"E_1647351380357","event_type":"MENU_ITEM_CLICK","caller_event_context":"SUCCESS","root_source_id":"ctx_21","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "corporate accounts ui edit"
	corporate_accounts_ui_edit__e_1647351836876() { 
		let Dest_Is_ctrl=true
		
		let source_id="corporate_accounts_ui_edit"
		let destn_id="corporate_accounts_ui_edit"
		let parent_source_id=""
		let event_code="e_1647351836876"
		let event_params={"caller_name":"corporate_accounts_ui_edit__e_1647351836876","event_desc":"E_1647351836876","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"corporate_accounts_ui_edit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "corporate accounts ui edit"
	corporate_accounts_ui_edit__e_1647351866792() { 
		let Dest_Is_ctrl=true
		
		let source_id="corporate_accounts_ui_edit"
		let destn_id="corporate_accounts_ui_save"
		let parent_source_id=""
		let event_code="e_1647351866792"
		let event_params={"caller_name":"corporate_accounts_ui_edit__e_1647351866792","event_desc":"E_1647351866792","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"corporate_accounts_ui_edit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "corporate accounts ui edit"
	corporate_accounts_ui_edit__e_1647351900812() { 
		let Dest_Is_ctrl=true
		
		let source_id="corporate_accounts_ui_edit"
		let destn_id="corporate_accounts_ui_clear"
		let parent_source_id=""
		let event_code="e_1647351900812"
		let event_params={"caller_name":"corporate_accounts_ui_edit__e_1647351900812","event_desc":"E_1647351900812","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"corporate_accounts_ui_edit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "corporate accounts ui edit"
	corporate_accounts_ui_edit__e_1647351922334() { 
		let Dest_Is_ctrl=true
		
		let source_id="corporate_accounts_ui_edit"
		let destn_id="corporate_accounts_ui"
		let parent_source_id=""
		let event_code="e_1647351922334"
		let event_params={"caller_name":"corporate_accounts_ui_edit__e_1647351922334","event_desc":"E_1647351922334","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"corporate_accounts_ui_edit","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "corporate accounts ui delete"
	corporate_accounts_ui_delete__e_1647352098496() { 
		let Dest_Is_ctrl=true
		
		let source_id="corporate_accounts_ui_delete"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1647352098496"
		let event_params={"caller_name":"corporate_accounts_ui_delete__e_1647352098496","event_desc":"E_1647352098496","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","message_text":"Are you sure that you want to permanently delete the selected record?","root_source_id":"corporate_accounts_ui_delete","raiseparam":{"conf_msg":""}}
		let handler_code="conf_msg"
		let internals="e_1647352098496__e_1647352128709,"
		let event_data={}
		let data_source={}
		try {
			this.handler.conf_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "e 1647352098496"
	e_1647352098496__e_1647352128709(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="YES"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="e_1647352098496"
		let destn_id="bank_account_details"
		let parent_source_id="corporate_accounts_ui_delete"
		let event_code="e_1647352128709"
		let event_params={"caller_name":"e_1647352098496__e_1647352128709","event_desc":"E_1647352128709","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"corporate_accounts_ui_delete","raiseparam":{"conf_msg":"","info_msg":"The record has been deleted successfully","clear_cache":"ALL"},"parent_event_result":"YES"}
		let handler_code="delete_tran"
		let internals="e_1647352128709__e_1652277651831,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665384453253":{"dtt_1304_1665385314469":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665385314469","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665387436513","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Bank MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSCPB_ID","alias_name":"","mq_id":"MQ_1665387234452","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1665387235082","date_format":false},{"column_name":"BANK_NAME","alias_name":"","mq_id":"MQ_1665387235258","date_format":false},{"column_name":"ACCOUNT_NO","alias_name":"","mq_id":"MQ_1665387251594","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665387251745","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665387264698","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSCPB_ID,        NPSSCPA_ID,        BANK_CODE,        BANK_NAME,        ACCOUNT_NO,        STATUS,        PROCESS_STATUS,        DT_CODE,        DTT_CODE   FROM (SELECT NPSSCPB.NPSSCPB_ID,                NPSSCPB.NPSSCPA_ID,                NPSSCPB.BANK_CODE,                NPSSCPB.BANK_NAME,                NPSSCPB.ACCOUNT_NO,                NPSSCPB.STATUS,                NPSSCPB.PROCESS_STATUS,                NPSSCPB.DTT_CODE,                NPSSCPB.DT_CODE           FROM NPSS_CUST_PROXY_BANKS NPSSCPB) V $WHERE  ORDER BY NPSSCPB_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Bank CCD","filter":[{"filter_name":"NPSSCPA_ID","binding_name":"NPSSCPA_ID","binding_value":"","source_name":"MI_LEVEL_NPSSCPA_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank Code","target_column":"BANK_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Bank Name","target_column":"BANK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account Number","target_column":"ACCOUNT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.delete_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "e 1647352128709"
	e_1647352128709__e_1652277651831(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="e_1647352128709"
		let destn_id=""
		let parent_source_id="e_1647352098496"
		let event_code="e_1652277651831"
		let event_params={"caller_name":"e_1647352128709__e_1652277651831","event_desc":"E_1652277651831","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Customer Remove Bank Account IPP API (Remove bank accounts) has been Initiated.","root_source_id":"corporate_accounts_ui_delete","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="e_1652277651831__e_1652278025038,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "e 1652277651831"
	e_1652277651831__e_1652278025038(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="e_1652277651831"
		let destn_id=""
		let parent_source_id="e_1647352128709"
		let event_code="e_1652278025038"
		let event_params={"caller_name":"e_1652277651831__e_1652278025038","event_desc":"E_1652278025038","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"corporate_accounts_ui_delete","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "corporate accounts ui clear"
	corporate_accounts_ui_clear__e_1647352325410() { 
		let Dest_Is_ctrl=true
		
		let source_id="corporate_accounts_ui_clear"
		let destn_id="corporate_accounts_ui"
		let parent_source_id=""
		let event_code="e_1647352325410"
		let event_params={"caller_name":"corporate_accounts_ui_clear__e_1647352325410","event_desc":"E_1647352325410","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"corporate_accounts_ui_clear","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "corporate accounts ui back"
	corporate_accounts_ui_back__e_1647352529442() { 
		let Dest_Is_ctrl=true
		
		let source_id="corporate_accounts_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1647352529442"
		let event_params={"caller_name":"corporate_accounts_ui_back__e_1647352529442","event_desc":"E_1647352529442","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"corporate_accounts_ui_back","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "corp virtual account ui back"
	corp_virtual_account_ui_back__e_1647352552894() { 
		let Dest_Is_ctrl=true
		
		let source_id="corp_virtual_account_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1647352552894"
		let event_params={"caller_name":"corp_virtual_account_ui_back__e_1647352552894","event_desc":"E_1647352552894","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"corp_virtual_account_ui_back","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "corp virtual account ui save"
	corp_virtual_account_ui_save__ve_for_virtual_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="corp_virtual_account_ui_save"
		let destn_id="corp_virtual_account_ui"
		let parent_source_id=""
		let event_code="e_1647404548058"
		let event_params={"caller_name":"corp_virtual_account_ui_save__ve_for_virtual_account","event_desc":"VE for Virtual Account","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"corp_virtual_account_ui_save","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="ve_for_virtual_account__st_for_virtual_account,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ve for virtual account"
	ve_for_virtual_account__st_for_virtual_account(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ve_for_virtual_account"
		let destn_id="corp_virtual_account_ui"
		let parent_source_id="corp_virtual_account_ui_save"
		let event_code="e_1647404555957"
		let event_params={"caller_name":"ve_for_virtual_account__st_for_virtual_account","event_desc":"ST for virtual Account","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"corp_virtual_account_ui_save","raiseparam":{"reset_selection":"Y","need_clear_value":"Y","no_change_status_on_modify":"N","release_lock":"Y","clear_cache":"ALL"},"parent_event_result":"SUCCESS"}
		let handler_code="save_tran"
		let internals="st_for_virtual_account__re_for_virtual_account,st_for_virtual_account__inf_for_virtual_account,"
		let event_data={}
		let data_source={}
		try {
			this.handler.save_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "st for virtual account"
	st_for_virtual_account__re_for_virtual_account(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="st_for_virtual_account"
		let destn_id="virtual_account_details"
		let parent_source_id="ve_for_virtual_account"
		let event_code="e_1647404594377"
		let event_params={"caller_name":"st_for_virtual_account__re_for_virtual_account","event_desc":"RE for Virtual Account","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"corp_virtual_account_ui_save","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="refresh_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.refresh_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "st for virtual account"
	st_for_virtual_account__inf_for_virtual_account(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="st_for_virtual_account"
		let destn_id=""
		let parent_source_id="ve_for_virtual_account"
		let event_code="e_1647404642971"
		let event_params={"caller_name":"st_for_virtual_account__inf_for_virtual_account","event_desc":"INF for Virtual Account","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Data has been saved successfully!","root_source_id":"corp_virtual_account_ui_save","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="inf_for_virtual_account__sp_for_virtual_account,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "inf for virtual account"
	inf_for_virtual_account__sp_for_virtual_account(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="inf_for_virtual_account"
		let destn_id=""
		let parent_source_id="st_for_virtual_account"
		let event_code="e_1647404667122"
		let event_params={"caller_name":"inf_for_virtual_account__sp_for_virtual_account","event_desc":"SP for Virtual Account","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"corp_virtual_account_ui_save","raiseparam":{"profile_code":"BTL_1408_1584359909096"},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "corp virtual account ui edit"
	corp_virtual_account_ui_edit__e_1647404860785() { 
		let Dest_Is_ctrl=true
		
		let source_id="corp_virtual_account_ui_edit"
		let destn_id="corp_virtual_account_ui_edit"
		let parent_source_id=""
		let event_code="e_1647404860785"
		let event_params={"caller_name":"corp_virtual_account_ui_edit__e_1647404860785","event_desc":"E_1647404860785","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"corp_virtual_account_ui_edit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "corp virtual account ui edit"
	corp_virtual_account_ui_edit__e_1647404884702() { 
		let Dest_Is_ctrl=true
		
		let source_id="corp_virtual_account_ui_edit"
		let destn_id="corp_virtual_account_ui"
		let parent_source_id=""
		let event_code="e_1647404884702"
		let event_params={"caller_name":"corp_virtual_account_ui_edit__e_1647404884702","event_desc":"E_1647404884702","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"corp_virtual_account_ui_edit","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "corp virtual account ui edit"
	corp_virtual_account_ui_edit__e_1647404910235() { 
		let Dest_Is_ctrl=true
		
		let source_id="corp_virtual_account_ui_edit"
		let destn_id="corp_virtual_account_ui_clear"
		let parent_source_id=""
		let event_code="e_1647404910235"
		let event_params={"caller_name":"corp_virtual_account_ui_edit__e_1647404910235","event_desc":"E_1647404910235","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"corp_virtual_account_ui_edit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "corp virtual account ui edit"
	corp_virtual_account_ui_edit__e_1647404938173() { 
		let Dest_Is_ctrl=true
		
		let source_id="corp_virtual_account_ui_edit"
		let destn_id="corp_virtual_account_ui_save"
		let parent_source_id=""
		let event_code="e_1647404938173"
		let event_params={"caller_name":"corp_virtual_account_ui_edit__e_1647404938173","event_desc":"E_1647404938173","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"corp_virtual_account_ui_edit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "corp virtual account ui delete"
	corp_virtual_account_ui_delete__e_1647404974081() { 
		let Dest_Is_ctrl=true
		
		let source_id="corp_virtual_account_ui_delete"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1647404974081"
		let event_params={"caller_name":"corp_virtual_account_ui_delete__e_1647404974081","event_desc":"E_1647404974081","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","message_text":"Are you sure that you want to permanently delete the selected record?","root_source_id":"corp_virtual_account_ui_delete","raiseparam":{"conf_msg":""}}
		let handler_code="conf_msg"
		let internals="e_1647404974081__e_1647404998216,"
		let event_data={}
		let data_source={}
		try {
			this.handler.conf_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "e 1647404974081"
	e_1647404974081__e_1647404998216(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="YES"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="e_1647404974081"
		let destn_id="virtual_account_details"
		let parent_source_id="corp_virtual_account_ui_delete"
		let event_code="e_1647404998216"
		let event_params={"caller_name":"e_1647404974081__e_1647404998216","event_desc":"E_1647404998216","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"corp_virtual_account_ui_delete","raiseparam":{"conf_msg":"","info_msg":"","clear_cache":"Y"},"parent_event_result":"YES"}
		let handler_code="delete_tran"
		let internals="e_1647404998216__e_1647405021511,e_1647404998216__e_1647501655473,"
		let event_data={}
		let data_source={}
		try {
			this.handler.delete_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "e 1647404998216"
	e_1647404998216__e_1647405021511(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="e_1647404998216"
		let destn_id="virtual_account_details"
		let parent_source_id="e_1647404974081"
		let event_code="e_1647405021511"
		let event_params={"caller_name":"e_1647404998216__e_1647405021511","event_desc":"E_1647405021511","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"corp_virtual_account_ui_delete","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="refresh_element"
		let internals="e_1647405021511__e_1647405033270,"
		let event_data={}
		let data_source={}
		try {
			this.handler.refresh_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "e 1647404998216"
	e_1647404998216__e_1647501655473(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="e_1647404998216"
		let destn_id=""
		let parent_source_id="e_1647404974081"
		let event_code="e_1647501655473"
		let event_params={"caller_name":"e_1647404998216__e_1647501655473","event_desc":"E_1647501655473","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"corp_virtual_account_ui_delete","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for INTERNAL event of "e 1647405021511"
	e_1647405021511__e_1647405033270(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="e_1647405021511"
		let destn_id=""
		let parent_source_id="e_1647404998216"
		let event_code="e_1647405033270"
		let event_params={"caller_name":"e_1647405021511__e_1647405033270","event_desc":"E_1647405033270","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"corp_virtual_account_ui_delete","raiseparam":{"profile_code":"BTL_1408_1584359909096"},"parent_event_result":"SUCCESS"}
		let handler_code="show_profile"
		let internals="e_1647405033270__e_1647405068936,"
		let event_data={}
		let data_source={}
		try {
			this.handler.show_profile(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "e 1647405033270"
	e_1647405033270__e_1647405068936(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="e_1647405033270"
		let destn_id="corp_virtual_account_ui"
		let parent_source_id="e_1647405021511"
		let event_code="e_1647405068936"
		let event_params={"caller_name":"e_1647405033270__e_1647405068936","event_desc":"E_1647405068936","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"corp_virtual_account_ui_delete","raiseparam":{"need_reset_key_column":"N"},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "corp virtual account ui clear"
	corp_virtual_account_ui_clear__e_1647405104235() { 
		let Dest_Is_ctrl=true
		
		let source_id="corp_virtual_account_ui_clear"
		let destn_id="corp_virtual_account_ui"
		let parent_source_id=""
		let event_code="e_1647405104235"
		let event_params={"caller_name":"corp_virtual_account_ui_clear__e_1647405104235","event_desc":"E_1647405104235","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"corp_virtual_account_ui_clear","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation unblock"
	navigation_unblock__ctwf_for_unblock() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_unblock"
		let destn_id="bank_account_details"
		let parent_source_id=""
		let event_code="e_1652104097942"
		let event_params={"caller_name":"navigation_unblock__ctwf_for_unblock","event_desc":"CTWF for unblock","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_unblock","raiseparam":{"need_comment":"N","need_scheduler":"N","release_lock":"N"}}
		let handler_code="change_tran_using_wf"
		let internals="ctwf_for_unblock__unblock_info,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665384453253":{"dtt_1304_1665385314469":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665385314469","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665387436513","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Bank MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSCPB_ID","alias_name":"","mq_id":"MQ_1665387234452","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1665387235082","date_format":false},{"column_name":"BANK_NAME","alias_name":"","mq_id":"MQ_1665387235258","date_format":false},{"column_name":"ACCOUNT_NO","alias_name":"","mq_id":"MQ_1665387251594","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665387251745","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665387264698","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSCPB_ID,        NPSSCPA_ID,        BANK_CODE,        BANK_NAME,        ACCOUNT_NO,        STATUS,        PROCESS_STATUS,        DT_CODE,        DTT_CODE   FROM (SELECT NPSSCPB.NPSSCPB_ID,                NPSSCPB.NPSSCPA_ID,                NPSSCPB.BANK_CODE,                NPSSCPB.BANK_NAME,                NPSSCPB.ACCOUNT_NO,                NPSSCPB.STATUS,                NPSSCPB.PROCESS_STATUS,                NPSSCPB.DTT_CODE,                NPSSCPB.DT_CODE           FROM NPSS_CUST_PROXY_BANKS NPSSCPB) V $WHERE  ORDER BY NPSSCPB_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Bank CCD","filter":[{"filter_name":"NPSSCPA_ID","binding_name":"NPSSCPA_ID","binding_value":"","source_name":"MI_LEVEL_NPSSCPA_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank Code","target_column":"BANK_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Bank Name","target_column":"BANK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account Number","target_column":"ACCOUNT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}},"e_1652104097942":{"dt_1304_1665384453253":{"dtt_1304_1665385314469":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"E_1652104097942","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665385314469","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"","ds_final":"DS_1665396270902","final_state":{"ts":[{"binding_name":"STATUS","binding_value":"CREATED","data_type":"TEXT"},{"binding_name":"PROCESS_STATUS","binding_value":"CREATED","data_type":"TEXT"}],"trn":[]},"property_json":null,"system_type":"DEFAULT","eq_info":{},"listing_mode":"","locking_mode":"","locking_parameter":"","filter":[],"databinding":[]}}}}}}
		try {
			this.handler.change_tran_using_wf(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ctwf for unblock"
	ctwf_for_unblock__unblock_info(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ctwf_for_unblock"
		let destn_id=""
		let parent_source_id="navigation_unblock"
		let event_code="e_1652104122084"
		let event_params={"caller_name":"ctwf_for_unblock__unblock_info","event_desc":"unblock info","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Customer Unblock Bank Account IPP API (Block/unblock bank accounts) has been Initiated","root_source_id":"navigation_unblock","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="unblock_info__rs_for_unblock,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "unblock info"
	unblock_info__rs_for_unblock(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="unblock_info"
		let destn_id=""
		let parent_source_id="ctwf_for_unblock"
		let event_code="e_1652104156147"
		let event_params={"caller_name":"unblock_info__rs_for_unblock","event_desc":"RS for unblock","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_unblock","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation block"
	navigation_block__conf_msg_for_block() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_block"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1652158329341"
		let event_params={"caller_name":"navigation_block__conf_msg_for_block","event_desc":"Conf msg for block","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","message_text":"Are you sure that you want to block this account?","root_source_id":"navigation_block","raiseparam":{"conf_msg":""}}
		let handler_code="conf_msg"
		let internals="conf_msg_for_block__block_ctwf,"
		let event_data={}
		let data_source={}
		try {
			this.handler.conf_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "conf msg for block"
	conf_msg_for_block__block_ctwf(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="YES"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="conf_msg_for_block"
		let destn_id="bank_account_details"
		let parent_source_id="navigation_block"
		let event_code="e_1652158373478"
		let event_params={"caller_name":"conf_msg_for_block__block_ctwf","event_desc":"Block CTWF","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_block","raiseparam":{"need_comment":"N","need_scheduler":"N","release_lock":"N"},"parent_event_result":"YES"}
		let handler_code="change_tran_using_wf"
		let internals="block_ctwf__im_after_block,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665384453253":{"dtt_1304_1665385314469":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665385314469","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665387436513","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Bank MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSCPB_ID","alias_name":"","mq_id":"MQ_1665387234452","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1665387235082","date_format":false},{"column_name":"BANK_NAME","alias_name":"","mq_id":"MQ_1665387235258","date_format":false},{"column_name":"ACCOUNT_NO","alias_name":"","mq_id":"MQ_1665387251594","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665387251745","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665387264698","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSCPB_ID,        NPSSCPA_ID,        BANK_CODE,        BANK_NAME,        ACCOUNT_NO,        STATUS,        PROCESS_STATUS,        DT_CODE,        DTT_CODE   FROM (SELECT NPSSCPB.NPSSCPB_ID,                NPSSCPB.NPSSCPA_ID,                NPSSCPB.BANK_CODE,                NPSSCPB.BANK_NAME,                NPSSCPB.ACCOUNT_NO,                NPSSCPB.STATUS,                NPSSCPB.PROCESS_STATUS,                NPSSCPB.DTT_CODE,                NPSSCPB.DT_CODE           FROM NPSS_CUST_PROXY_BANKS NPSSCPB) V $WHERE  ORDER BY NPSSCPB_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Bank CCD","filter":[{"filter_name":"NPSSCPA_ID","binding_name":"NPSSCPA_ID","binding_value":"","source_name":"MI_LEVEL_NPSSCPA_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank Code","target_column":"BANK_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Bank Name","target_column":"BANK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account Number","target_column":"ACCOUNT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}},"e_1652158373478":{"dt_1304_1665384453253":{"dtt_1304_1665385314469":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"E_1652158373478","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665385314469","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"","ds_final":"DS_1665396264943","final_state":{"ts":[{"binding_name":"STATUS","binding_value":"BLOCKED","data_type":"TEXT"},{"binding_name":"PROCESS_STATUS","binding_value":"BLOCKED","data_type":"TEXT"}],"trn":[]},"property_json":null,"system_type":"DEFAULT","eq_info":{},"listing_mode":"","locking_mode":"","locking_parameter":"","filter":[],"databinding":[]}}}}}}
		try {
			this.handler.change_tran_using_wf(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "block ctwf"
	block_ctwf__im_after_block(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="block_ctwf"
		let destn_id=""
		let parent_source_id="conf_msg_for_block"
		let event_code="e_1652158396649"
		let event_params={"caller_name":"block_ctwf__im_after_block","event_desc":"IM after block","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Customer Block Bank Account IPP API (Block/unblock bank accounts) has been Initiated","root_source_id":"navigation_block","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="im_after_block__rs_after_block,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "im after block"
	im_after_block__rs_after_block(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="im_after_block"
		let destn_id=""
		let parent_source_id="block_ctwf"
		let event_code="e_1652158428488"
		let event_params={"caller_name":"im_after_block__rs_after_block","event_desc":"RS after block","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_block","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation unenroll customer"
	navigation_unenroll_customer__change_tran_un_enrol_actions() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_unenroll_customer"
		let destn_id="customer_details"
		let parent_source_id=""
		let event_code="e_1652276906715"
		let event_params={"caller_name":"navigation_unenroll_customer__change_tran_un_enrol_actions","event_desc":"Change Tran Un enrol actions","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_unenroll_customer","raiseparam":{"need_comment":"N","need_scheduler":"N","release_lock":"N"}}
		let handler_code="change_tran_using_wf"
		let internals="change_tran_un_enrol_actions__im_after_unerol_ct_success,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665384453253":{"dtt_1304_1665384533560":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665384533560","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665396309337","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CUSTOMER","alias_name":"","mq_id":"MQ_1665395323191","date_format":false},{"column_name":"PHONE_NO","alias_name":"","mq_id":"MQ_1665395323493","date_format":false},{"column_name":"EMIRATES_ID","alias_name":"","mq_id":"MQ_1665395323662","date_format":false},{"column_name":"EMAIL_ID","alias_name":"","mq_id":"MQ_1665395323981","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1665395324141","date_format":false},{"column_name":"PARTICIPANT_CODE","alias_name":"","mq_id":"MQ_1665395324293","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665395324485","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665395324637","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSCPA_ID,        CUSTOMER,        PHONE_NO,        EMIRATES_ID,        EMAIL_ID,        IBAN,        PARTICIPANT_CODE,        STATUS,        PROCESS_STATUS,        DT_CODE,        DTT_CODE   FROM (SELECT NPSS.NPSSCPA_ID,                NPSS.CUSTOMER,                NPSS.PHONE_NO,                NPSS.EMIRATES_ID,                NPSS.EMAIL_ID,                NPSS.IBAN,                NPSS.PARTICIPANT_CODE,                NPSS.DT_CODE,                NPSS.DTT_CODE,                NPSS.STATUS,                NPSS.SYSTEM_ID,                NPSS.PROCESS_STATUS           FROM NPSS_CUST_PROXY_ADDRESS NPSS) V $WHERE  ORDER BY NPSSCPA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Cust Address CCD","filter":[],"databinding":[{"header":"Customer Name","target_column":"CUSTOMER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Phone No","target_column":"PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email ID","target_column":"EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Emirates ID","target_column":"EMIRATES_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Participant Code","target_column":"PARTICIPANT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}},"e_1652276906715":{"dt_1304_1665384453253":{"dtt_1304_1665384533560":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"E_1652276906715","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665384533560","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"","ds_final":"DS_1665396295798","final_state":{"ts":[{"binding_name":"STATUS","binding_value":"UNENROLED","data_type":"TEXT"},{"binding_name":"PROCESS_STATUS","binding_value":"UNENROLED","data_type":"TEXT"}],"trn":[]},"property_json":null,"system_type":"DEFAULT","eq_info":{},"listing_mode":"","locking_mode":"","locking_parameter":"","filter":[],"databinding":[]}}}}}}
		try {
			this.handler.change_tran_using_wf(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "change tran un enrol actions"
	change_tran_un_enrol_actions__im_after_unerol_ct_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="change_tran_un_enrol_actions"
		let destn_id=""
		let parent_source_id="navigation_unenroll_customer"
		let event_code="e_1652276987253"
		let event_params={"caller_name":"change_tran_un_enrol_actions__im_after_unerol_ct_success","event_desc":"IM after unerol ct success","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Customer Unenrolment IPP API (Unenrolment) has been Initiated","root_source_id":"navigation_unenroll_customer","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="im_after_unerol_ct_success__rs_after_unenrole_ct_success,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "im after unerol ct success"
	im_after_unerol_ct_success__rs_after_unenrole_ct_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="im_after_unerol_ct_success"
		let destn_id=""
		let parent_source_id="change_tran_un_enrol_actions"
		let event_code="e_1652331121569"
		let event_params={"caller_name":"im_after_unerol_ct_success__rs_after_unenrole_ct_success","event_desc":"RS after unEnrole CT success","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_unenroll_customer","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "customer edit save"
	customer_edit_save__ve_for_customer_edit_on_btn_click() { 
		let Dest_Is_ctrl=true
		
		let source_id="customer_edit_save"
		let destn_id="customer_edit"
		let parent_source_id=""
		let event_code="e_1652339544664"
		let event_params={"caller_name":"customer_edit_save__ve_for_customer_edit_on_btn_click","event_desc":"VE for Customer Edit on btn click","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"customer_edit_save","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="ve_for_customer_edit_on_btn_click__st_after_custromer_ve_success,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ve for customer edit on btn click"
	ve_for_customer_edit_on_btn_click__st_after_custromer_ve_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ve_for_customer_edit_on_btn_click"
		let destn_id="customer_edit"
		let parent_source_id="customer_edit_save"
		let event_code="e_1652339557853"
		let event_params={"caller_name":"ve_for_customer_edit_on_btn_click__st_after_custromer_ve_success","event_desc":"ST after custromer VE success","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"customer_edit_save","raiseparam":{"reset_selection":"Y","need_clear_value":"Y","no_change_status_on_modify":"N","release_lock":"Y","clear_cache":"Y"},"parent_event_result":"SUCCESS"}
		let handler_code="save_tran"
		let internals="st_after_custromer_ve_success__im_after_custromer_st_success,"
		let event_data={}
		let data_source={}
		try {
			this.handler.save_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "st after custromer ve success"
	st_after_custromer_ve_success__im_after_custromer_st_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="st_after_custromer_ve_success"
		let destn_id=""
		let parent_source_id="ve_for_customer_edit_on_btn_click"
		let event_code="e_1652339635795"
		let event_params={"caller_name":"st_after_custromer_ve_success__im_after_custromer_st_success","event_desc":"IM after custromer ST success","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Customer Modify Personal Data IPP API (Modify personal data) has been Initiated.","root_source_id":"customer_edit_save","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="im_after_custromer_st_success__rs_after_im_success,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "im after custromer st success"
	im_after_custromer_st_success__rs_after_im_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="im_after_custromer_st_success"
		let destn_id=""
		let parent_source_id="st_after_custromer_ve_success"
		let event_code="e_1652339666215"
		let event_params={"caller_name":"im_after_custromer_st_success__rs_after_im_success","event_desc":"RS after IM success","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"customer_edit_save","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "phone no edit save"
	phone_no_edit_save__ve_for_modify_phone_no() { 
		let Dest_Is_ctrl=true
		
		let source_id="phone_no_edit_save"
		let destn_id="phone_no_edit"
		let parent_source_id=""
		let event_code="e_1652339844850"
		let event_params={"caller_name":"phone_no_edit_save__ve_for_modify_phone_no","event_desc":"VE for modify phone no","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"phone_no_edit_save","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="ve_for_modify_phone_no__st_after_modify_ph_no_ve_success,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ve for modify phone no"
	ve_for_modify_phone_no__st_after_modify_ph_no_ve_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ve_for_modify_phone_no"
		let destn_id="phone_no_edit"
		let parent_source_id="phone_no_edit_save"
		let event_code="e_1652339857508"
		let event_params={"caller_name":"ve_for_modify_phone_no__st_after_modify_ph_no_ve_success","event_desc":"ST after modify Ph no VE success","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"phone_no_edit_save","raiseparam":{"reset_selection":"Y","need_clear_value":"Y","no_change_status_on_modify":"N","release_lock":"Y","clear_cache":"Y"},"parent_event_result":"SUCCESS"}
		let handler_code="save_tran"
		let internals="st_after_modify_ph_no_ve_success__im_after_modify_ph_no_save_success,"
		let event_data={}
		let data_source={}
		try {
			this.handler.save_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "st after modify ph no ve success"
	st_after_modify_ph_no_ve_success__im_after_modify_ph_no_save_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="st_after_modify_ph_no_ve_success"
		let destn_id=""
		let parent_source_id="ve_for_modify_phone_no"
		let event_code="e_1652339915470"
		let event_params={"caller_name":"st_after_modify_ph_no_ve_success__im_after_modify_ph_no_save_success","event_desc":"IM after modify Ph no Save success","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Customer Modify Phone No IPP API (Modify Phone No) has been Initiated.","root_source_id":"phone_no_edit_save","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="im_after_modify_ph_no_save_success__rs_after_ph_no_modify_success,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "im after modify ph no save success"
	im_after_modify_ph_no_save_success__rs_after_ph_no_modify_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="im_after_modify_ph_no_save_success"
		let destn_id=""
		let parent_source_id="st_after_modify_ph_no_ve_success"
		let event_code="e_1652339925685"
		let event_params={"caller_name":"im_after_modify_ph_no_save_success__rs_after_ph_no_modify_success","event_desc":"RS after ph no modify success","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"phone_no_edit_save","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for MENU_ITEM_CLICK event of "customer details modify personal data"
	customer_details_modify_personal_data__spap_for_modify_customer_data() { 
		let Dest_Is_ctrl=true
		
		let source_id="customer_details_modify_personal_data"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1652340042998"
		let event_params={"source_comp_id":"customer_details","source_ctrl_id":"modify_personal_data","caller_name":"customer_details_modify_personal_data__spap_for_modify_customer_data","event_desc":"SPAP for Modify Customer Data","event_type":"MENU_ITEM_CLICK","caller_event_context":"SUCCESS","root_source_id":"customer_details_modify_personal_data","raiseparam":{"popup_category":"profile","variable":"p_customer_edit_layout__spap_for_modify_customer_data","selector":"p_customer_edit_layout","profile_code":"BTL_1408_1652339228972","window_title":"Modify Personal Data","window_height":200,"window_width":"500px","window_close_icon":"Y","eventdes":"spap_for_modify_customer_data","eventcode":"E_1652340042998"}}
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

	//Handler for MENU_ITEM_CLICK event of "customer details modify personal data"
	customer_details_modify_personal_data__bt_for_modify_customer_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="customer_details_modify_personal_data"
		let destn_id="customer_edit"
		let parent_source_id=""
		let event_code="e_1652342386968"
		let event_params={"source_comp_id":"customer_details","source_ctrl_id":"modify_personal_data","caller_name":"customer_details_modify_personal_data__bt_for_modify_customer_ui","event_desc":"BT for Modify Customer UI","event_type":"MENU_ITEM_CLICK","caller_event_context":"SUCCESS","root_source_id":"customer_details_modify_personal_data","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":"","change_detection":""}}
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

	//Handler for MENU_ITEM_CLICK event of "customer details modify phone no"
	customer_details_modify_phone_no__spap_for_modify_phone_no() { 
		let Dest_Is_ctrl=true
		
		let source_id="customer_details_modify_phone_no"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1652340532926"
		let event_params={"source_comp_id":"customer_details","source_ctrl_id":"modify_phone_no","caller_name":"customer_details_modify_phone_no__spap_for_modify_phone_no","event_desc":"SPAP for Modify phone no","event_type":"MENU_ITEM_CLICK","caller_event_context":"SUCCESS","root_source_id":"customer_details_modify_phone_no","raiseparam":{"popup_category":"profile","variable":"p_phone_no_edit_layout__spap_for_modify_phone_no","selector":"p_phone_no_edit_layout","profile_code":"BTL_1408_1652339181348","window_title":"Modify Phone No","window_height":200,"window_width":"500px","window_close_icon":"Y","eventdes":"spap_for_modify_phone_no","eventcode":"E_1652340532926"}}
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

	//Handler for MENU_ITEM_CLICK event of "customer details modify phone no"
	customer_details_modify_phone_no__bt_for_modify_phone_no() { 
		let Dest_Is_ctrl=true
		
		let source_id="customer_details_modify_phone_no"
		let destn_id="phone_no_edit"
		let parent_source_id=""
		let event_code="e_1652342456504"
		let event_params={"source_comp_id":"customer_details","source_ctrl_id":"modify_phone_no","caller_name":"customer_details_modify_phone_no__bt_for_modify_phone_no","event_desc":"BT for Modify phone no","event_type":"MENU_ITEM_CLICK","caller_event_context":"SUCCESS","root_source_id":"customer_details_modify_phone_no","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":"","change_detection":""}}
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
