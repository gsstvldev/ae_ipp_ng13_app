/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26351 
Modified By     : Admin 
Modified Date   : 2022-Oct-10 14:3 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_enrolment
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'

@Component({
	selector: 's_merchant_enrolment',
	templateUrl: './s_merchant_enrolment.component.html',
	styleUrls: ['./s_merchant_enrolment.component.css'],
	providers:[]
})
    
// Start of class 
export class s_merchant_enrolmentComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_merchant_enrolment"
	wftpa_id : string = "WFT_NPSS_P_1304_1665385476999_0"
	cg_code : string = "CG_1408_1652104702376"
	key_column : any = {"dtt_1304_1665384653050":"NPSSMPA_ID","dtt_1304_1665385495265":"NPSSMPB_ID","dtt_1304_1665385894443":"NPSSMPS_ID","dtt_1304_1665386514812":"NPSSMPCD_ID","dtt_1304_1665386727379":"NPSSMT_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_list_layout"
	uicgc_1 : string = "merchant_details"
	uicgc_2 : string = "navigation"
	uicgc_3 : string = "merchant_ui"
	uicgc_4 : string = "search"
	uicgc_5 : string = "bank_account_details"
	uicgc_6 : string = "shop_details"
	uicgc_7 : string = "bank_ui"
	uicgc_8 : string = "shop_ui"
	uicgc_9 : string = "phone_no_ui"
	uicgc_10 : string = "personal_data_ui"
	uicgc_11 : string = "add_desk_ui"
	uicgc_12 : string = "cash_desk_list"
	key_events : any = {}
	btl_1408_1654769306534 : string = "p_add_cash_list_layout"
	btl_1408_1654769264526 : string = "p_add_cash_layout"
	btl_1408_1652339615994 : string = "p_personal_date_layout"
	btl_1408_1652339595819 : string = "p_phone_no_layout"
	btl_1408_1647347637688 : string = "p_shop_layout"
	btl_1408_1647347503927 : string = "p_bank_layout"
	btl_1408_1584360407011 : string = "p_search_layout"
	btl_1408_1584360351180 : string = "p_data_entry_layout"
	btl_1408_1584359909096 : string = "p_list_layout"
	forms : any = ["uicgc_8","uicgc_4","uicgc_10","uicgc_11","uicgc_7","uicgc_3","uicgc_9","uicgc_2"]
	p_search_layout__spap_from_list_search_showpopup : boolean = false
	p_phone_no_layout__spap_from_phno_ui_bt_showpopup : boolean = false
	p_personal_date_layout__spap_from_psnldata_bt_showpopup : boolean = false
	merchant_details : any = {}
	merchant_details_modify_phone_no : any = {}
	merchant_details_modify_personal_data : any = {}
	navigation : any = {}
	navigation_clear : any = {}
	navigation_enroll_merchant : any = {}
	navigation_unenroll_merchant : any = {}
	navigation_add_account : any = {}
	navigation_add_shop : any = {}
	navigation_block : any = {}
	navigation_unblock : any = {}
	navigation_enable_shop : any = {}
	navigation_disable_shop : any = {}
	navigation_view : any = {}
	navigation_trigger_btn : any = {}
	navigation_add_cash_desk : any = {}
	navigation_view_cash_desk : any = {}
	merchant_ui : any = {}
	merchant_ui_back : any = {}
	merchant_ui_clear : any = {}
	merchant_ui_save : any = {}
	merchant_ui_edit : any = {}
	merchant_ui_delete : any = {}
	search : any = {}
	search_search : any = {}
	search_clear : any = {}
	bank_account_details : any = {}
	bank_account_details_view : any = {}
	shop_details : any = {}
	shop_details_view : any = {}
	bank_ui : any = {}
	bank_ui_back : any = {}
	bank_ui_clear : any = {}
	bank_ui_save : any = {}
	bank_ui_edit : any = {}
	bank_ui_delete : any = {}
	shop_ui : any = {}
	shop_ui_back : any = {}
	shop_ui_clear : any = {}
	shop_ui_save : any = {}
	shop_ui_edit : any = {}
	shop_ui_delete : any = {}
	phone_no_ui : any = {}
	phone_no_ui_save : any = {}
	personal_data_ui : any = {}
	personal_data_ui_save : any = {}
	add_desk_ui : any = {}
	add_desk_ui_back : any = {}
	add_desk_ui_clear : any = {}
	add_desk_ui_save : any = {}
	add_desk_ui_delete : any = {}
	cash_desk_list : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Merchant Details" 
		this.merchant_details.uictrl_code = "datatable"
		this.merchant_details.uicgc_desc = "Merchant Details"
		this.merchant_details.uicgc_code = "uicgc_1"
		this.merchant_details.params = {"need_pag_datatable":"Y","view_all":"Y","need_search":"N","advance_dynamic_search":"Y","need_context_menu_actions":"Y"}
		this.merchant_details.datasource = {"default":{"dt_1304_1665384579126":{"dtt_1304_1665384653050":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665384653050","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665396893087","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Address MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMPA_ID","alias_name":"","mq_id":"MQ_1665396162148","date_format":false},{"column_name":"CATEGORY","alias_name":"","mq_id":"MQ_1665396162292","date_format":false},{"column_name":"MERC_CATEGORY_CODE","alias_name":"","mq_id":"MQ_1665396162427","date_format":false},{"column_name":"MERCHANT","alias_name":"","mq_id":"MQ_1665396162556","date_format":false},{"column_name":"DENOMINATION","alias_name":"","mq_id":"MQ_1665396162692","date_format":false},{"column_name":"PROFESSIONAL","alias_name":"","mq_id":"MQ_1665396190510","date_format":false},{"column_name":"MERCHANT_TAG","alias_name":"","mq_id":"MQ_1665396190644","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1665396205318","date_format":false},{"column_name":"USER_ID","alias_name":"","mq_id":"MQ_1665396205468","date_format":false},{"column_name":"PARTICIPANT_CODE","alias_name":"","mq_id":"MQ_1665396205620","date_format":false},{"column_name":"POI","alias_name":"","mq_id":"MQ_1665396226181","date_format":false},{"column_name":"VAT_ID","alias_name":"","mq_id":"MQ_1665396226315","date_format":false},{"column_name":"IPP_ID","alias_name":"","mq_id":"MQ_1665396226459","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1665396245421","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1665396245563","date_format":false},{"column_name":"PHONE_NO","alias_name":"","mq_id":"MQ_1665396264405","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665396264555","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665396264715","date_format":false},{"column_name":"EMAIL_ID","alias_name":"","mq_id":"MQ_1665396282655","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMPA_ID,  CATEGORY,  MERC_CATEGORY_CODE,  MERCHANT,  DENOMINATION,  PROFESSIONAL,  MERCHANT_TAG,  IBAN,  USER_ID,  PARTICIPANT_CODE,  POI,  VAT_ID,  IPP_ID,  PHONE_NO,  DTT_CODE,  DT_CODE,  SYSTEM_ID,  STATUS,  PROCESS_STATUS,  EMAIL_ID FROM NPSS_MERC_PROXY_ADDRESS $WHERE ORDER BY NPSSMPA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Address MQ CCD","filter":[],"databinding":[{"header":"Type","target_column":"CATEGORY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant","target_column":"MERCHANT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Professional","target_column":"PROFESSIONAL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Tag","target_column":"MERCHANT_TAG","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email ID","target_column":"EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Participant Code","target_column":"PARTICIPANT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Phone No","target_column":"PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}},"e_1652277070462":{"dt_1304_1665384579126":{"dtt_1304_1665384653050":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"E_1652277070462","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665384653050","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"","ds_final":"DS_1665386593133","final_state":{"ts":[{"binding_name":"STATUS","binding_value":"UNENROLED","data_type":"TEXT"},{"binding_name":"PROCESS_STATUS","binding_value":"UNENROLED","data_type":"TEXT"}],"trn":[]},"property_json":null,"system_type":"DEFAULT","eq_info":{},"listing_mode":"","locking_mode":"","locking_parameter":"","filter":[],"databinding":[]}}}}}}
		this.merchant_details.context_menu = [{"label_name":"Modify Phone No","desc":"modify_phone_no","show":true,"disabled":false,"params":{"icon_only":true,"node_type":"","uicgcc_style":"fa fa-mobile-phone"},"dynamic_param":{}},{"label_name":"Modify Personal Data","desc":"modify_personal_data","show":true,"disabled":false,"params":{"icon_only":true,"node_type":"","uicgcc_style":"fa fa-user-circle-o"},"dynamic_param":{}}]
		this.merchant_details.views = {}
		this.merchant_details.onChangecomponent = new EventEmitter<any>()
		this.merchant_details.show = true
		this.merchant_details.dynamic_param = {}
		
// "Modify Phone No" Button of "Merchant Details" component 
		this.merchant_details_modify_phone_no.label_name = "Modify Phone No"
		this.merchant_details_modify_phone_no.desc = "modify_phone_no"
		this.merchant_details_modify_phone_no.show = true
		this.merchant_details_modify_phone_no.disabled = false
		this.merchant_details_modify_phone_no.params = {"icon_only":true,"node_type":"","uicgcc_style":"fa fa-mobile-phone"}
		this.merchant_details_modify_phone_no.dynamic_param = {}
		
// "Modify Personal Data" Button of "Merchant Details" component 
		this.merchant_details_modify_personal_data.label_name = "Modify Personal Data"
		this.merchant_details_modify_personal_data.desc = "modify_personal_data"
		this.merchant_details_modify_personal_data.show = true
		this.merchant_details_modify_personal_data.disabled = false
		this.merchant_details_modify_personal_data.params = {"icon_only":true,"node_type":"","uicgcc_style":"fa fa-user-circle-o"}
		this.merchant_details_modify_personal_data.dynamic_param = {}
	
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
		
		// "Enroll Merchant" Button of "Navigation" component
		this.navigation_enroll_merchant.label_name = "Enroll Merchant"
		this.navigation_enroll_merchant.show = true
		this.navigation_enroll_merchant.disabled = false
		this.navigation_enroll_merchant.params = {"icon_only":false,"uicgcc_style":"fa fa-buysellads"}
		this.navigation_enroll_merchant.dynamic_param = {}
		this.navigation_enroll_merchant.role = []
		this.navigation_enroll_merchant.action = ""
		
		// "Unenroll Merchant" Button of "Navigation" component
		this.navigation_unenroll_merchant.label_name = "Unenroll Merchant"
		this.navigation_unenroll_merchant.show = true
		this.navigation_unenroll_merchant.disabled = false
		this.navigation_unenroll_merchant.params = {"icon_only":false,"uicgcc_style":"fa fa-adn"}
		this.navigation_unenroll_merchant.dynamic_param = {}
		this.navigation_unenroll_merchant.role = []
		this.navigation_unenroll_merchant.action = ""
		
		// "Add Account" Button of "Navigation" component
		this.navigation_add_account.label_name = "Add Account"
		this.navigation_add_account.show = true
		this.navigation_add_account.disabled = false
		this.navigation_add_account.params = {"icon_only":false,"uicgcc_style":"fa fa-bank"}
		this.navigation_add_account.dynamic_param = {}
		this.navigation_add_account.role = []
		this.navigation_add_account.action = ""
		
		// "Add Shop" Button of "Navigation" component
		this.navigation_add_shop.label_name = "Add Shop"
		this.navigation_add_shop.show = true
		this.navigation_add_shop.disabled = false
		this.navigation_add_shop.params = {"icon_only":false,"uicgcc_style":"fa fa-shopping-bag"}
		this.navigation_add_shop.dynamic_param = {}
		this.navigation_add_shop.role = []
		this.navigation_add_shop.action = ""
		
		// "Block" Button of "Navigation" component
		this.navigation_block.label_name = "Block"
		this.navigation_block.show = true
		this.navigation_block.disabled = false
		this.navigation_block.params = {"icon_only":false,"uicgcc_style":"fa fa-link"}
		this.navigation_block.dynamic_param = {}
		this.navigation_block.role = []
		this.navigation_block.action = ""
		
		// "Unblock" Button of "Navigation" component
		this.navigation_unblock.label_name = "Unblock"
		this.navigation_unblock.show = true
		this.navigation_unblock.disabled = false
		this.navigation_unblock.params = {"icon_only":false,"uicgcc_style":"fa fa-unlink"}
		this.navigation_unblock.dynamic_param = {}
		this.navigation_unblock.role = []
		this.navigation_unblock.action = ""
		
		// "Enable Shop" Button of "Navigation" component
		this.navigation_enable_shop.label_name = "Enable Shop"
		this.navigation_enable_shop.show = true
		this.navigation_enable_shop.disabled = false
		this.navigation_enable_shop.params = {"icon_only":false,"uicgcc_style":"fa fa-toggle-on"}
		this.navigation_enable_shop.dynamic_param = {}
		this.navigation_enable_shop.role = []
		this.navigation_enable_shop.action = ""
		
		// "Disable Shop" Button of "Navigation" component
		this.navigation_disable_shop.label_name = "Disable Shop"
		this.navigation_disable_shop.show = true
		this.navigation_disable_shop.disabled = false
		this.navigation_disable_shop.params = {"icon_only":false,"uicgcc_style":"fa fa-toggle-off"}
		this.navigation_disable_shop.dynamic_param = {}
		this.navigation_disable_shop.role = []
		this.navigation_disable_shop.action = ""
		
		// "View" Button of "Navigation" component
		this.navigation_view.label_name = "View"
		this.navigation_view.show = true
		this.navigation_view.disabled = false
		this.navigation_view.params = {"icon_only":false,"uicgcc_style":"fa fa-eye-slash"}
		this.navigation_view.dynamic_param = {}
		this.navigation_view.role = []
		this.navigation_view.action = ""
		
		// "Trigger Btn" Button of "Navigation" component
		this.navigation_trigger_btn.label_name = "Trigger Btn"
		this.navigation_trigger_btn.show = true
		this.navigation_trigger_btn.disabled = false
		this.navigation_trigger_btn.params = {"icon_only":false,"uicgcc_style":""}
		this.navigation_trigger_btn.dynamic_param = {}
		this.navigation_trigger_btn.role = []
		this.navigation_trigger_btn.action = ""
		
		// "Add Cash Desk" Button of "Navigation" component
		this.navigation_add_cash_desk.label_name = "Add Cash Desk"
		this.navigation_add_cash_desk.show = true
		this.navigation_add_cash_desk.disabled = false
		this.navigation_add_cash_desk.params = {"icon_only":false,"uicgcc_style":"fa fa-plus-square-o"}
		this.navigation_add_cash_desk.dynamic_param = {}
		this.navigation_add_cash_desk.role = []
		this.navigation_add_cash_desk.action = ""
		
		// "View Cash Desk" Button of "Navigation" component
		this.navigation_view_cash_desk.label_name = "View Cash Desk"
		this.navigation_view_cash_desk.show = true
		this.navigation_view_cash_desk.disabled = false
		this.navigation_view_cash_desk.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.navigation_view_cash_desk.dynamic_param = {}
		this.navigation_view_cash_desk.role = []
		this.navigation_view_cash_desk.action = ""
	
		// Component level properties - "Merchant UI" 
		this.merchant_ui.uictrl_code = "dynamic_ui"
		this.merchant_ui.uicgc_desc = "Merchant UI"
		this.merchant_ui.uicgc_code = "uicgc_3"
		this.merchant_ui.params = {}
		this.merchant_ui.datasource = {}
		this.merchant_ui.context_menu = []
		this.merchant_ui.views = {"first":"DTT_1304_1665384653050","is_tab_mode":"N","dtt_1304_1665384653050":{"0":[{"dttv_id":"NPSS Merc Proxy Address UI","tab_order":0,"tab_name":"","uicgc_description":"Merchant UI","role_description":"default","dtt_description":"NPSS Merc Proxy Address"}]}}
		this.merchant_ui.onChangecomponent = new EventEmitter<any>()
		this.merchant_ui.show = true
		this.merchant_ui.dynamic_param = {}
		this.merchant_ui.f_npss_merc_proxy_address_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.merchant_ui.form_name = "f_npss_merc_proxy_address_ui"
		
		// "Back" Button of "Merchant UI" component
		this.merchant_ui_back.label_name = "Back"
		this.merchant_ui_back.show = true
		this.merchant_ui_back.disabled = false
		this.merchant_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.merchant_ui_back.dynamic_param = {}
		this.merchant_ui_back.role = []
		this.merchant_ui_back.action = ""
		
		// "Clear" Button of "Merchant UI" component
		this.merchant_ui_clear.label_name = "Clear"
		this.merchant_ui_clear.show = true
		this.merchant_ui_clear.disabled = false
		this.merchant_ui_clear.params = {"icon_only":false,"uicgcc_style":"fa fa-eraser"}
		this.merchant_ui_clear.dynamic_param = {}
		this.merchant_ui_clear.role = []
		this.merchant_ui_clear.action = ""
		
		// "Save" Button of "Merchant UI" component
		this.merchant_ui_save.label_name = "Save"
		this.merchant_ui_save.show = true
		this.merchant_ui_save.disabled = false
		this.merchant_ui_save.params = {"icon_only":false,"uicgcc_style":"fa fa-floppy-o"}
		this.merchant_ui_save.dynamic_param = {}
		this.merchant_ui_save.role = []
		this.merchant_ui_save.action = ""
		
		// "Edit" Button of "Merchant UI" component
		this.merchant_ui_edit.label_name = "Edit"
		this.merchant_ui_edit.show = true
		this.merchant_ui_edit.disabled = false
		this.merchant_ui_edit.params = {"icon_only":false,"uicgcc_style":"fa fa-pencil-square-o"}
		this.merchant_ui_edit.dynamic_param = {}
		this.merchant_ui_edit.role = []
		this.merchant_ui_edit.action = ""
		
		// "Delete" Button of "Merchant UI" component
		this.merchant_ui_delete.label_name = "Delete"
		this.merchant_ui_delete.show = true
		this.merchant_ui_delete.disabled = false
		this.merchant_ui_delete.params = {"icon_only":false,"uicgcc_style":"fa fa-trash"}
		this.merchant_ui_delete.dynamic_param = {}
		this.merchant_ui_delete.role = []
		this.merchant_ui_delete.action = ""
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_4"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1665384653050","is_tab_mode":"N","dtt_1304_1665384653050":{"0":[{"dttv_id":"NPSS Address Srch UI","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Merc Proxy Address"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_address_srch_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_address_srch_ui"
		
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
		this.bank_account_details.datasource = {"e_1652188460502":{"dt_1304_1665384579126":{"dtt_1304_1665385495265":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"E_1652188460502","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665385495265","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"","ds_final":"DS_1665386535662","final_state":{"ts":[{"binding_name":"STATUS","binding_value":"BLOCKED","data_type":"TEXT"},{"binding_name":"PROCESS_STATUS","binding_value":"BLOCKED","data_type":"TEXT"}],"trn":[]},"property_json":null,"system_type":"DEFAULT","eq_info":{},"listing_mode":"","locking_mode":"","locking_parameter":"","filter":[],"databinding":[]}}}}},"e_1652188577713":{"dt_1304_1665384579126":{"dtt_1304_1665385495265":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"E_1652188577713","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665385495265","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"","ds_final":"DS_1665386555661","final_state":{"ts":[{"binding_name":"STATUS","binding_value":"CREATED","data_type":"TEXT"},{"binding_name":"PROCESS_STATUS","binding_value":"CREATED","data_type":"TEXT"}],"trn":[]},"property_json":null,"system_type":"DEFAULT","eq_info":{},"listing_mode":"","locking_mode":"","locking_parameter":"","filter":[],"databinding":[]}}}}},"default":{"dt_1304_1665384579126":{"dtt_1304_1665385495265":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665385495265","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665396790432","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Bank MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMPB_ID","alias_name":"","mq_id":"MQ_1665395413660","date_format":false},{"column_name":"NPSSMPA_ID","alias_name":"","mq_id":"MQ_1665395413796","date_format":false},{"column_name":"BANK_NAME","alias_name":"","mq_id":"MQ_1665395413932","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1665395414068","date_format":false},{"column_name":"ACCOUNT_NO","alias_name":"","mq_id":"MQ_1665395414212","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1665395441822","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1665395441972","date_format":false},{"column_name":"IS_DEFAULT","alias_name":"","mq_id":"MQ_1665395442124","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665395468486","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665395468636","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMPB_ID,  NPSSMPA_ID,  BANK_NAME,  BANK_CODE,  ACCOUNT_NO,  IS_DEFAULT,  DT_CODE,  DTT_CODE,  SYSTEM_ID,  STATUS,  PROCESS_STATUS FROM NPSS_MERC_PROXY_BANKS $WHERE ORDER BY NPSSMPB_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Bank MQ CCD","filter":[{"filter_name":"NPSSMPA_ID","binding_name":"NPSSMPA_ID","binding_value":"","source_name":"MI_LEVEL_NPSSMPA_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank Code","target_column":"BANK_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Bank Name","target_column":"BANK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account No","target_column":"ACCOUNT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
	
		// Component level properties - "Shop Details" 
		this.shop_details.uictrl_code = "datatable"
		this.shop_details.uicgc_desc = "Shop Details"
		this.shop_details.uicgc_code = "uicgc_6"
		this.shop_details.params = {"need_search":"N","view_all":"Y","need_pag_datatable":"Y","need_context_menu_actions":"Y"}
		this.shop_details.datasource = {"e_1652188816153":{"dt_1304_1665384579126":{"dtt_1304_1665385894443":{"st_ds":{"default":{"uicgc_code":"UICGC_6","event_code":"E_1652188816153","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665385894443","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"","ds_final":"DS_1665386624005","final_state":{"ts":[{"binding_name":"STATUS","binding_value":"DISABLED","data_type":"TEXT"},{"binding_name":"PROCESS_STATUS","binding_value":"DISABLED","data_type":"TEXT"}],"trn":[]},"property_json":null,"system_type":"DEFAULT","eq_info":{},"listing_mode":"","locking_mode":"","locking_parameter":"","filter":[],"databinding":[]}}}}},"e_1652188665176":{"dt_1304_1665384579126":{"dtt_1304_1665385894443":{"st_ds":{"default":{"uicgc_code":"UICGC_6","event_code":"E_1652188665176","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665385894443","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"","ds_final":"DS_1665386639957","final_state":{"ts":[{"binding_name":"STATUS","binding_value":"CREATED","data_type":"TEXT"},{"binding_name":"PROCESS_STATUS","binding_value":"CREATED","data_type":"TEXT"}],"trn":[]},"property_json":null,"system_type":"DEFAULT","eq_info":{},"listing_mode":"","locking_mode":"","locking_parameter":"","filter":[],"databinding":[]}}}}},"e_1647345839367":{"dt_1304_1665384579126":{"dtt_1304_1665385894443":{"st_ds":{"default":{"uicgc_code":"UICGC_6","event_code":"E_1647345839367","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665385894443","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665396916544","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Shop MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMPS_ID","alias_name":"","mq_id":"MQ_1665396504731","date_format":false},{"column_name":"NPSSMPA_ID","alias_name":"","mq_id":"MQ_1665396504883","date_format":false},{"column_name":"NPSSMPB_ID","alias_name":"","mq_id":"MQ_1665396505027","date_format":false},{"column_name":"SHOP_TYPE","alias_name":"","mq_id":"MQ_1665396505163","date_format":false},{"column_name":"SHOP_NAME","alias_name":"","mq_id":"MQ_1665396505299","date_format":false},{"column_name":"DOOR_NO","alias_name":"","mq_id":"MQ_1665396536661","date_format":false},{"column_name":"STREET","alias_name":"","mq_id":"MQ_1665396536811","date_format":false},{"column_name":"POSTAL_CODE","alias_name":"","mq_id":"MQ_1665396543694","date_format":false},{"column_name":"CITY","alias_name":"","mq_id":"MQ_1665396543843","date_format":false},{"column_name":"COUNTRY","alias_name":"","mq_id":"MQ_1665396543971","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1665396556133","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1665396556267","date_format":false},{"column_name":"SYSTEM_ID","alias_name":"","mq_id":"MQ_1665396556403","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665396556523","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665396556667","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMPS_ID,  NPSSMPA_ID,  NPSSMPB_ID,  SHOP_TYPE,  SHOP_NAME,  DOOR_NO,  STREET,  POSTAL_CODE,  CITY,  COUNTRY,  DTT_CODE,  DT_CODE,  SYSTEM_ID,  STATUS,  PROCESS_STATUS FROM NPSS_MERC_PROXY_SHOPS $WHERE ORDER BY NPSSMPS_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Shop MQ CCD","filter":[{"filter_name":"NPSSMPA_ID","binding_name":"NPSSMPA_ID","binding_value":"","source_name":"MI_LEVEL_NPSSMPA_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""},{"filter_name":"NPSSMPB_ID","binding_name":"NPSSMPB_ID","binding_value":"","source_name":"MI_LEVEL_NPSSMPB_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Shop Type","target_column":"SHOP_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop Name","target_column":"SHOP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.shop_details.context_menu = [{"label_name":"View","desc":"view","show":true,"disabled":false,"params":{"icon_only":false,"node_type":"","uicgcc_style":""},"dynamic_param":{}}]
		this.shop_details.views = {}
		this.shop_details.onChangecomponent = new EventEmitter<any>()
		this.shop_details.show = true
		this.shop_details.dynamic_param = {}
		
// "View" Button of "Shop Details" component 
		this.shop_details_view.label_name = "View"
		this.shop_details_view.desc = "view"
		this.shop_details_view.show = true
		this.shop_details_view.disabled = false
		this.shop_details_view.params = {"icon_only":false,"node_type":"","uicgcc_style":""}
		this.shop_details_view.dynamic_param = {}
	
		// Component level properties - "Bank UI" 
		this.bank_ui.uictrl_code = "dynamic_ui"
		this.bank_ui.uicgc_desc = "Bank UI"
		this.bank_ui.uicgc_code = "uicgc_7"
		this.bank_ui.params = {}
		this.bank_ui.datasource = {}
		this.bank_ui.context_menu = []
		this.bank_ui.views = {"first":"DTT_1304_1665385495265","is_tab_mode":"N","dtt_1304_1665385495265":{"0":[{"dttv_id":"NPSS Merc Proxy Banks","tab_order":0,"tab_name":"","uicgc_description":"Bank UI","role_description":"default","dtt_description":"NPSS Merc Proxy Banks"}]}}
		this.bank_ui.onChangecomponent = new EventEmitter<any>()
		this.bank_ui.show = true
		this.bank_ui.dynamic_param = {}
		this.bank_ui.f_npss_merc_proxy_banks = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.bank_ui.form_name = "f_npss_merc_proxy_banks"
		
		// "Back" Button of "Bank UI" component
		this.bank_ui_back.label_name = "Back"
		this.bank_ui_back.show = true
		this.bank_ui_back.disabled = false
		this.bank_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.bank_ui_back.dynamic_param = {}
		this.bank_ui_back.role = []
		this.bank_ui_back.action = ""
		
		// "Clear" Button of "Bank UI" component
		this.bank_ui_clear.label_name = "Clear"
		this.bank_ui_clear.show = true
		this.bank_ui_clear.disabled = false
		this.bank_ui_clear.params = {"icon_only":false,"uicgcc_style":"fa fa-eraser"}
		this.bank_ui_clear.dynamic_param = {}
		this.bank_ui_clear.role = []
		this.bank_ui_clear.action = ""
		
		// "Save" Button of "Bank UI" component
		this.bank_ui_save.label_name = "Save"
		this.bank_ui_save.show = true
		this.bank_ui_save.disabled = false
		this.bank_ui_save.params = {"icon_only":false,"uicgcc_style":"fa fa-floppy-o"}
		this.bank_ui_save.dynamic_param = {}
		this.bank_ui_save.role = []
		this.bank_ui_save.action = ""
		
		// "Edit" Button of "Bank UI" component
		this.bank_ui_edit.label_name = "Edit"
		this.bank_ui_edit.show = true
		this.bank_ui_edit.disabled = false
		this.bank_ui_edit.params = {"icon_only":false,"uicgcc_style":"fa fa-pencil-square-o"}
		this.bank_ui_edit.dynamic_param = {}
		this.bank_ui_edit.role = []
		this.bank_ui_edit.action = ""
		
		// "Delete" Button of "Bank UI" component
		this.bank_ui_delete.label_name = "Delete"
		this.bank_ui_delete.show = true
		this.bank_ui_delete.disabled = false
		this.bank_ui_delete.params = {"icon_only":false,"uicgcc_style":"fa fa-trash"}
		this.bank_ui_delete.dynamic_param = {}
		this.bank_ui_delete.role = []
		this.bank_ui_delete.action = ""
	
		// Component level properties - "Shop UI" 
		this.shop_ui.uictrl_code = "dynamic_ui"
		this.shop_ui.uicgc_desc = "Shop UI"
		this.shop_ui.uicgc_code = "uicgc_8"
		this.shop_ui.params = {}
		this.shop_ui.datasource = {}
		this.shop_ui.context_menu = []
		this.shop_ui.views = {"first":"DTT_1304_1665385894443","is_tab_mode":"N","dtt_1304_1665385894443":{"0":[{"dttv_id":"NPSS Merc Proxy Shop UI","tab_order":0,"tab_name":"","uicgc_description":"Shop UI","role_description":"default","dtt_description":"NPSS Merc Proxy Shops"}]}}
		this.shop_ui.onChangecomponent = new EventEmitter<any>()
		this.shop_ui.show = true
		this.shop_ui.dynamic_param = {}
		this.shop_ui.f_npss_merc_proxy_shop_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.shop_ui.form_name = "f_npss_merc_proxy_shop_ui"
		
		// "Back" Button of "Shop UI" component
		this.shop_ui_back.label_name = "Back"
		this.shop_ui_back.show = true
		this.shop_ui_back.disabled = false
		this.shop_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.shop_ui_back.dynamic_param = {}
		this.shop_ui_back.role = []
		this.shop_ui_back.action = ""
		
		// "Clear" Button of "Shop UI" component
		this.shop_ui_clear.label_name = "Clear"
		this.shop_ui_clear.show = true
		this.shop_ui_clear.disabled = false
		this.shop_ui_clear.params = {"icon_only":false,"uicgcc_style":"fa fa-eraser"}
		this.shop_ui_clear.dynamic_param = {}
		this.shop_ui_clear.role = []
		this.shop_ui_clear.action = ""
		
		// "Save" Button of "Shop UI" component
		this.shop_ui_save.label_name = "Save"
		this.shop_ui_save.show = true
		this.shop_ui_save.disabled = false
		this.shop_ui_save.params = {"icon_only":false,"uicgcc_style":"fa fa-floppy-o"}
		this.shop_ui_save.dynamic_param = {}
		this.shop_ui_save.role = []
		this.shop_ui_save.action = ""
		
		// "Edit" Button of "Shop UI" component
		this.shop_ui_edit.label_name = "Edit"
		this.shop_ui_edit.show = true
		this.shop_ui_edit.disabled = false
		this.shop_ui_edit.params = {"icon_only":false,"uicgcc_style":"fa fa-pencil-square-o"}
		this.shop_ui_edit.dynamic_param = {}
		this.shop_ui_edit.role = []
		this.shop_ui_edit.action = ""
		
		// "Delete" Button of "Shop UI" component
		this.shop_ui_delete.label_name = "Delete"
		this.shop_ui_delete.show = true
		this.shop_ui_delete.disabled = false
		this.shop_ui_delete.params = {"icon_only":false,"uicgcc_style":"fa fa-trash"}
		this.shop_ui_delete.dynamic_param = {}
		this.shop_ui_delete.role = []
		this.shop_ui_delete.action = ""
	
		// Component level properties - "Phone No UI" 
		this.phone_no_ui.uictrl_code = "dynamic_ui"
		this.phone_no_ui.uicgc_desc = "Phone No UI"
		this.phone_no_ui.uicgc_code = "uicgc_9"
		this.phone_no_ui.params = {}
		this.phone_no_ui.datasource = {}
		this.phone_no_ui.context_menu = []
		this.phone_no_ui.views = {"first":"DTT_1304_1665384653050","is_tab_mode":"N","dtt_1304_1665384653050":{"0":[{"dttv_id":"NPSS Phone No UI","tab_order":0,"tab_name":"","uicgc_description":"Phone No UI","role_description":"default","dtt_description":"NPSS Merc Proxy Address"}]}}
		this.phone_no_ui.onChangecomponent = new EventEmitter<any>()
		this.phone_no_ui.show = true
		this.phone_no_ui.dynamic_param = {}
		this.phone_no_ui.f_npss_phone_no_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.phone_no_ui.form_name = "f_npss_phone_no_ui"
		
		// "Save" Button of "Phone No UI" component
		this.phone_no_ui_save.label_name = "Save"
		this.phone_no_ui_save.show = true
		this.phone_no_ui_save.disabled = false
		this.phone_no_ui_save.params = {"icon_only":false,"uicgcc_style":""}
		this.phone_no_ui_save.dynamic_param = {}
		this.phone_no_ui_save.role = []
		this.phone_no_ui_save.action = ""
	
		// Component level properties - "Personal Data UI" 
		this.personal_data_ui.uictrl_code = "dynamic_ui"
		this.personal_data_ui.uicgc_desc = "Personal Data UI"
		this.personal_data_ui.uicgc_code = "uicgc_10"
		this.personal_data_ui.params = {}
		this.personal_data_ui.datasource = {}
		this.personal_data_ui.context_menu = []
		this.personal_data_ui.views = {"first":"DTT_1304_1665384653050","is_tab_mode":"N","dtt_1304_1665384653050":{"0":[{"dttv_id":"NPSS Merchant Name UI","tab_order":0,"tab_name":"","uicgc_description":"Personal Data UI","role_description":"default","dtt_description":"NPSS Merc Proxy Address"}]}}
		this.personal_data_ui.onChangecomponent = new EventEmitter<any>()
		this.personal_data_ui.show = true
		this.personal_data_ui.dynamic_param = {}
		this.personal_data_ui.f_npss_merchant_name_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.personal_data_ui.form_name = "f_npss_merchant_name_ui"
		
		// "Save" Button of "Personal Data UI" component
		this.personal_data_ui_save.label_name = "Save"
		this.personal_data_ui_save.show = true
		this.personal_data_ui_save.disabled = false
		this.personal_data_ui_save.params = {"icon_only":false,"uicgcc_style":""}
		this.personal_data_ui_save.dynamic_param = {}
		this.personal_data_ui_save.role = []
		this.personal_data_ui_save.action = ""
	
		// Component level properties - "Add Desk UI" 
		this.add_desk_ui.uictrl_code = "dynamic_ui"
		this.add_desk_ui.uicgc_desc = "Add Desk UI"
		this.add_desk_ui.uicgc_code = "uicgc_11"
		this.add_desk_ui.params = {}
		this.add_desk_ui.datasource = {}
		this.add_desk_ui.context_menu = []
		this.add_desk_ui.views = {"first":"DTT_1304_1665386514812","is_tab_mode":"N","dtt_1304_1665386514812":{"0":[{"dttv_id":"NPSS Cash Desk UI","tab_order":0,"tab_name":"","uicgc_description":"Add Desk UI","role_description":"default","dtt_description":"NPSS Add Cash Desk"}]}}
		this.add_desk_ui.onChangecomponent = new EventEmitter<any>()
		this.add_desk_ui.show = true
		this.add_desk_ui.dynamic_param = {}
		this.add_desk_ui.f_npss_cash_desk_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.add_desk_ui.form_name = "f_npss_cash_desk_ui"
		
		// "Back" Button of "Add Desk UI" component
		this.add_desk_ui_back.label_name = "Back"
		this.add_desk_ui_back.show = true
		this.add_desk_ui_back.disabled = false
		this.add_desk_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.add_desk_ui_back.dynamic_param = {}
		this.add_desk_ui_back.role = []
		this.add_desk_ui_back.action = ""
		
		// "Clear" Button of "Add Desk UI" component
		this.add_desk_ui_clear.label_name = "Clear"
		this.add_desk_ui_clear.show = true
		this.add_desk_ui_clear.disabled = false
		this.add_desk_ui_clear.params = {"icon_only":false,"uicgcc_style":"fa fa-eraser"}
		this.add_desk_ui_clear.dynamic_param = {}
		this.add_desk_ui_clear.role = []
		this.add_desk_ui_clear.action = ""
		
		// "Save" Button of "Add Desk UI" component
		this.add_desk_ui_save.label_name = "Save"
		this.add_desk_ui_save.show = true
		this.add_desk_ui_save.disabled = false
		this.add_desk_ui_save.params = {"icon_only":false,"uicgcc_style":"fa fa-floppy-o"}
		this.add_desk_ui_save.dynamic_param = {}
		this.add_desk_ui_save.role = []
		this.add_desk_ui_save.action = ""
		
		// "Delete" Button of "Add Desk UI" component
		this.add_desk_ui_delete.label_name = "Delete"
		this.add_desk_ui_delete.show = true
		this.add_desk_ui_delete.disabled = false
		this.add_desk_ui_delete.params = {"icon_only":false,"uicgcc_style":"fa fa-trash"}
		this.add_desk_ui_delete.dynamic_param = {}
		this.add_desk_ui_delete.role = []
		this.add_desk_ui_delete.action = ""
	
		// Component level properties - "Cash Desk List" 
		this.cash_desk_list.uictrl_code = "datatable"
		this.cash_desk_list.uicgc_desc = "Cash Desk List"
		this.cash_desk_list.uicgc_code = "uicgc_12"
		this.cash_desk_list.params = {"need_search":"N","advance_dynamic_search":"N","need_pag_datatable":"Y"}
		this.cash_desk_list.datasource = {"default":{"dt_1304_1665384579126":{"dtt_1304_1665386514812":{"st_ds":{"default":{"uicgc_code":"UICGC_12","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665386514812","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665396875897","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Add Cash Desk MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CASH_DESK_ID","alias_name":"","mq_id":"MQ_1665395925508","date_format":false},{"column_name":"CASH_DESK_NAME","alias_name":"","mq_id":"MQ_1665395925660","date_format":false},{"column_name":"NPSSMPS_ID","alias_name":"","mq_id":"MQ_1665395925788","date_format":false},{"column_name":"SHOP_NAME","alias_name":"","mq_id":"MQ_1665395925932","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMPCD_ID,  NPSSMPS_ID,  CASH_DESK_ID,  CASH_DESK_NAME,  DT_CODE,  DTT_CODE,  TENANT_ID,  SHOP_NAME FROM  (SELECT NPSSMPC.NPSSMPCD_ID,    NPSSMPC.NPSSMPS_ID,    NPSSMPC.CASH_DESK_ID,    NPSSMPC.CASH_DESK_NAME,    NPSSMPC.DT_CODE,    NPSSMPC.DTT_CODE,    NPSSMPC.TENANT_ID,    NPSSMPS.SHOP_NAME   FROM NPSS_MERC_PROXY_CASHDESK NPSSMPC   INNER JOIN NPSS_MERC_PROXY_SHOPS NPSSMPS ON NPSSMPC.NPSSMPS_ID = NPSSMPS.NPSSMPS_ID)V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Add Cash Desk MQ CCD","filter":[],"databinding":[{"header":"Shop Name","target_column":"SHOP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cash Desk ID","target_column":"CASH_DESK_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cash Desk Name","target_column":"CASH_DESK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.cash_desk_list.context_menu = []
		this.cash_desk_list.views = {}
		this.cash_desk_list.onChangecomponent = new EventEmitter<any>()
		this.cash_desk_list.show = true
		this.cash_desk_list.dynamic_param = {}
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		let peventcontext:any=undefined;
 			if(!peventcontext) { 
 			peventcontext = this.page_load__sec_from_pl()
		 }
		this.page_load__brfq_from_page_load()
		this.page_load__cf_from_page_load()
		this.page_load__he_for_add_acct()
		this.page_load__he_for_add_virtual_acct()
		this.page_load__he_from_pageload()
		this.page_load__tbc_from_pageload()
		this.page_load__he_from_add_bank()
		this.page_load__he_from_pgld_to_unblock_btn()
		this.page_load__he_from_disable_btn()
		this.page_load__he_from_enable_btn()
		this.page_load__he_from_pgld_to_view_btn()
		this.page_load__he_from_pgld_to_unenroll_btn()
		this.page_load__he_for_pl()
		this.page_load__he_from_pgld_to_delete_btn()
		this.page_load__he_for_pl_to_acd()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation enroll merchant"
	navigation_enroll_merchant__action_button_click(){
		this.navigation_enroll_merchant__sp_by_click_on_add_action()
		this.navigation_enroll_merchant__he_by_click_on_nvg_edit_action()
		this.navigation_enroll_merchant__cui_by_click_on_navigation_add()
		this.navigation_enroll_merchant__se_from_nvg_add_to_save_action()
		this.navigation_enroll_merchant__ee_from_nvg_add_to_data_entry()
		this.navigation_enroll_merchant__he_from_mui_add_btn_to_mui_delete_btn()
		this.navigation_enroll_merchant__ee_from_add_btn_to_mdl()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation view"
	navigation_view__action_button_click(){
		this.navigation_view__sp_from_nvg_view_action()
		this.navigation_view__de_from_nvg_view_to_data_entry()
		this.navigation_view__he_by_click_on_nvg_view_to_de_save()
		this.navigation_view__se_from_nvg_view_to_edit_action()
		this.navigation_view__bt_from_view_action()
		this.navigation_view__vw_to_delete_show()
		this.navigation_view__he_for_clear_actions()
		this.navigation_view__he_from_view_btn_to_add_shop_btn()
	}

	//Handler for SELECTION_CHANGED event of "merchant details"
	merchant_details__selection_changed(){
		this.merchant_details__ee_from_list_to_view_btn()
		this.merchant_details__ssr_for_the_list_to_data_entry()
		this.merchant_details__svm_from_list()
		this.merchant_details__se_from_md_list_to_add_acct_btn()
		this.merchant_details__he_from_md_list_to_block_btn()
		this.merchant_details__he_from_md_list_to_unblock_btn()
		this.merchant_details__he_from_md_list_to_enableshop_btn()
		this.merchant_details__he_from_md_list_to_ds_btn()
		this.merchant_details__he_from_add_shop()
		this.merchant_details__ee_from_md_list_to_add_acct_btn()
		this.merchant_details__se_from_md_list_to_unenroll_btn()
		this.merchant_details__ssr_from_merchant_list()
		this.merchant_details__ssr_from_merchant_listt()
		this.merchant_details__he_for_enrol_merchant()
		this.merchant_details__cui_from_merchant_detail()
		this.merchant_details__he_for_md()
		this.merchant_details__he_for_md()
	}

	//Handler for FILTER_CLICK event of "merchant details"
	merchant_details__filter_click(){
		this.merchant_details__spap_from_list_search()
	}

	//Handler for INTERNAL event of "svm from list"
	svm_from_list__internal(parent_event_result){
		this.svm_from_list__brfq_corporate_acct_list(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "merchant ui back"
	merchant_ui_back__action_button_click(){
		this.merchant_ui_back__rs_from_mui_back_btn()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__ssp_on_search()
		this.search_search__cp_from_search_btn()
	}

	//Handler for INTERNAL event of "ssp on search"
	ssp_on_search__internal(){
		this.ssp_on_search__brfq_on_search()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__cui_the_search()
	}

	//Handler for ACTION_BUTTON_CLICK event of "merchant ui edit"
	merchant_ui_edit__action_button_click(){
		this.merchant_ui_edit__ee_from_mui_edit_to_mdl()
		this.merchant_ui_edit__he_by_click_on_edit_action()
		this.merchant_ui_edit__se_from_edit_to_save__action()
		this.merchant_ui_edit__he_from_mui_edit_to_mui_clear()
	}

	//Handler for ACTION_BUTTON_CLICK event of "merchant ui save"
	merchant_ui_save__action_button_click(){
		this.merchant_ui_save__ve_from_mui_save_to_mui()
	}

	//Handler for INTERNAL event of "ve from mui save to mui"
	ve_from_mui_save_to_mui__internal(parent_event_result){
		this.ve_from_mui_save_to_mui__st_from_mui_save_btn(parent_event_result)
	}

	//Handler for INTERNAL event of "st from mui save btn"
	st_from_mui_save_btn__internal(parent_event_result){
		this.st_from_mui_save_btn__re_from_mui_save_to_list()
		this.st_from_mui_save_btn__im_by_click_on_save_action(parent_event_result)
		this.st_from_mui_save_btn__ee_from_st_to_view_btn(parent_event_result)
	}

	//Handler for INTERNAL event of "im by click on save action"
	im_by_click_on_save_action__internal(parent_event_result){
		this.im_by_click_on_save_action__rs_from_mui_save_im_success(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "merchant ui delete"
	merchant_ui_delete__action_button_click(){
		this.merchant_ui_delete__cm_from_merchant_delete_btn()
	}

	//Handler for INTERNAL event of "cm from merchant delete btn"
	cm_from_merchant_delete_btn__internal(parent_event_result){
		this.cm_from_merchant_delete_btn__dt_from_confs_msg_to_mdl(parent_event_result)
	}

	//Handler for INTERNAL event of "dt from confs msg to mdl"
	dt_from_confs_msg_to_mdl__internal(parent_event_result){
		this.dt_from_confs_msg_to_mdl__im_from_merchant_dt(parent_event_result)
	}

	//Handler for INTERNAL event of "im from merchant dt"
	im_from_merchant_dt__internal(parent_event_result){
		this.im_from_merchant_dt__rs_from_delete_info(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation clear"
	navigation_clear__action_button_click(){
		this.navigation_clear__re_from_nvg_clear_to_list()
		this.navigation_clear__ee_for_the_clear_after_the__add()
		this.navigation_clear__he_for_the_after_the_clear_button()
		this.navigation_clear__cu_from_clear_btn_to_bad_list()
		this.navigation_clear__cu_from_clear_btn_to_shop_dtl()
		this.navigation_clear__he_from_clear_btn_to_add_acc_btn()
		this.navigation_clear__he_from_clear_btn_to_add_shop_btn()
		this.navigation_clear__he_from_clear_btn_to_block_btn()
		this.navigation_clear__he_from_clear_btn_to_unblock_btn()
		this.navigation_clear__he_from_clear_btn_to_enable_sop_btn()
		this.navigation_clear__he_from_clear_btn_to_disable_shop()
		this.navigation_clear__he_from_clear_btn_to_unenroll_btn()
	}

	//Handler for ACTION_BUTTON_CLICK event of "merchant ui clear"
	merchant_ui_clear__action_button_click(){
		this.merchant_ui_clear__cui_from_mui_clear_btn()
	}

	//Handler for SELECTION_CHANGED event of "bank account details"
	bank_account_details__selection_changed(){
		this.bank_account_details__he_from_bad_to_bui_save()
		this.bank_account_details__se_from_bad_to_bui_edit()
		this.bank_account_details__he_from_bad_to_bui_clear()
		this.bank_account_details__se_from_bad_to_bui_delete()
		this.bank_account_details__ssr_from_bad_to_bui()
		this.bank_account_details__svm_from_bank_dtl_list()
		this.bank_account_details__se_from_bad_to_nvg_as_btn()
		this.bank_account_details__he_from_bad_to_nvg_view_btn()
		this.bank_account_details__he_from_bad_to_nvg_aa_btn()
		this.bank_account_details__se_from_bad_to_nvg_block()
		this.bank_account_details__se_from_bad_to_nvg_unblock()
		this.bank_account_details__he_from_bad_to_nvg_es_btn()
		this.bank_account_details__he_from_bad_to_ds_btn()
		this.bank_account_details__he_from_bad_to_nvg_em_btn()
		this.bank_account_details__ee_from_bad_to_as_btn()
		this.bank_account_details__he_from_bad_to_nvg_unm_btn()
		this.bank_account_details__he_for_bad()
		this.bank_account_details__he_for_bad_to_acd()
	}

	//Handler for INTERNAL event of "svm from bank dtl list"
	svm_from_bank_dtl_list__internal(parent_event_result){
		this.svm_from_bank_dtl_list__bfrq_bank_list(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "bank ui save"
	bank_ui_save__action_button_click(){
		this.bank_ui_save__ve_for_save_actions()
	}

	//Handler for INTERNAL event of "ve for save actions"
	ve_for_save_actions__internal(parent_event_result){
		this.ve_for_save_actions__st_actions_for_bad(parent_event_result)
	}

	//Handler for INTERNAL event of "st actions for bad"
	st_actions_for_bad__internal(parent_event_result){
		this.st_actions_for_bad__info_for_save_actions(parent_event_result)
	}

	//Handler for INTERNAL event of "info for save actions"
	info_for_save_actions__internal(parent_event_result){
		this.info_for_save_actions__re_for_bad_actions()
		this.info_for_save_actions__sp_for_info_actons(parent_event_result)
	}

	//Handler for INTERNAL event of "re for bad actions"
	re_for_bad_actions__internal(){
		this.re_for_bad_actions__cui_actions_for_sd()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation add account"
	navigation_add_account__action_button_click(){
		this.navigation_add_account__sp_from_add_account_btn()
		this.navigation_add_account__he_from_add_acct_btn_to_edit_btn()
		this.navigation_add_account__he_from_add_acct_btn_to_delete_btn()
		this.navigation_add_account__se_from_add_acct_btn_to_clear_btn()
		this.navigation_add_account__se_from_add_acct_btn_to_save_btn()
		this.navigation_add_account__cu_from_add_acct_btn_to__bank_ui()
		this.navigation_add_account__ee_from_add_acct_btn_to_bank_ui()
		this.navigation_add_account__bvfm_for_id__bank_ui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation add shop"
	navigation_add_shop__action_button_click(){
		this.navigation_add_shop__cu_from_add_shop_btn_to_shop_ui()
		this.navigation_add_shop__ee_from_add_shop_btn_to_shop_ui()
		this.navigation_add_shop__sp_from_add_shop_btn()
		this.navigation_add_shop__se_from_add_shop_btn_to_save_btn()
		this.navigation_add_shop__he_from_add_shop_btn_to_edit_btn()
		this.navigation_add_shop__he_from_add_shop_btn_to_delete_btn()
		this.navigation_add_shop__se_from_add_shop_btn_to_clear_btn()
	}

	//Handler for SELECTION_CHANGED event of "shop details"
	shop_details__selection_changed(){
		this.shop_details__he_from_shop_dtl_to_save()
		this.shop_details__se_from_shop_dtl()
		this.shop_details__he_from_shop_dtl_to_clear_btn()
		this.shop_details__se_from_shop_dtl_to_delete_btn()
		this.shop_details__ssr_from_shop_dtl_to_shop_ui()
		this.shop_details__he_from_shop_dtl_to_view_btn()
		this.shop_details__he_from_shop_dtl_to_add_shop_btn()
		this.shop_details__se_from_shop_dtl_to_enable_shop_btn()
		this.shop_details__se_from_shop_dtl_to_disable_shop_btn()
		this.shop_details__he_from_shop_dtl_to_add_acct_btn()
		this.shop_details__he_from_shop_dtl_to_unblock_btn()
		this.shop_details__he_from_shop_dtl_to_block_btn()
		this.shop_details__he_from_shop_dtl_to_unenroll_btn()
		this.shop_details__he_from_shop_dtl_to_enroll_btn()
		this.shop_details__brfq_by_select_on_cdl()
		this.shop_details__svm_for_shop()
		this.shop_details__se_for_sd()
	}

	//Handler for INTERNAL event of "brfq by select on cdl"
	brfq_by_select_on_cdl__internal(){
		this.brfq_by_select_on_cdl__sfr_for_cdl()
	}

	//Handler for INTERNAL event of "sfr for cdl"
	sfr_for_cdl__internal(){
		this.sfr_for_cdl__se_for_cdl()
	}

	//Handler for MENU_ITEM_CLICK event of "bank account details view"
	bank_account_details_view__menu_item_click(){
		this.bank_account_details_view__sp_for_bank_details()
		this.bank_account_details_view__bt_from_bad_view_to_bui()
		this.bank_account_details_view__de_from_bad_view_to_bui()
	}

	//Handler for MENU_ITEM_CLICK event of "shop details view"
	shop_details_view__menu_item_click(){
		this.shop_details_view__sp_from_view_context_menu()
		this.shop_details_view__bt_from_view_icon_to_shop_ui()
		this.shop_details_view__de_from_view_icon_to_shop_ui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "bank ui edit"
	bank_ui_edit__action_button_click(){
		this.bank_ui_edit__he_from_bui_edit()
		this.bank_ui_edit__se_from_bui_edit_to_bui_save()
		this.bank_ui_edit__he_from_bui_edit_to_bui_clear()
		this.bank_ui_edit__ee_from_bui_edit_to_bui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "bank ui delete"
	bank_ui_delete__action_button_click(){
		this.bank_ui_delete__cm_from_bui_delete()
	}

	//Handler for INTERNAL event of "cm from bui delete"
	cm_from_bui_delete__internal(parent_event_result){
		this.cm_from_bui_delete__dt_from_bui_delete_cm_to_bad(parent_event_result)
	}

	//Handler for INTERNAL event of "dt from bui delete cm to bad"
	dt_from_bui_delete_cm_to_bad__internal(parent_event_result){
		this.dt_from_bui_delete_cm_to_bad__im_from_bad_dt(parent_event_result)
	}

	//Handler for INTERNAL event of "im from bad dt"
	im_from_bad_dt__internal(parent_event_result){
		this.im_from_bad_dt__rs_from_bad_im_success(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "bank ui clear"
	bank_ui_clear__action_button_click(){
		this.bank_ui_clear__cui_from_bui_clear_to_bui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "bank ui back"
	bank_ui_back__action_button_click(){
		this.bank_ui_back__rs_from_bui_back_btn()
	}

	//Handler for ACTION_BUTTON_CLICK event of "shop ui back"
	shop_ui_back__action_button_click(){
		this.shop_ui_back__rs_from_back_btn()
	}

	//Handler for ACTION_BUTTON_CLICK event of "shop ui save"
	shop_ui_save__action_button_click(){
		this.shop_ui_save__ve_from_save_btn_to_shop_ui()
	}

	//Handler for INTERNAL event of "ve from save btn to shop ui"
	ve_from_save_btn_to_shop_ui__internal(parent_event_result){
		this.ve_from_save_btn_to_shop_ui__st_for_shop_ui(parent_event_result)
	}

	//Handler for INTERNAL event of "st for shop ui"
	st_for_shop_ui__internal(parent_event_result){
		this.st_for_shop_ui__re_from_st_success(parent_event_result)
		this.st_for_shop_ui__im_from_save_btn_success(parent_event_result)
	}

	//Handler for INTERNAL event of "im from save btn success"
	im_from_save_btn_success__internal(parent_event_result){
		this.im_from_save_btn_success__sp_from_im_success(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "shop ui edit"
	shop_ui_edit__action_button_click(){
		this.shop_ui_edit__he_from_edit_btn_self()
		this.shop_ui_edit__ee_from_edit_btn_to_shop_ui()
		this.shop_ui_edit__he_from_edit_btn_to_clear_btn()
		this.shop_ui_edit__se_from_edit_btn_to_save_btn()
	}

	//Handler for ACTION_BUTTON_CLICK event of "shop ui delete"
	shop_ui_delete__action_button_click(){
		this.shop_ui_delete__cm_from_delete_btn()
	}

	//Handler for INTERNAL event of "cm from delete btn"
	cm_from_delete_btn__internal(parent_event_result){
		this.cm_from_delete_btn__dt_from_shop_dtl(parent_event_result)
	}

	//Handler for INTERNAL event of "dt from shop dtl"
	dt_from_shop_dtl__internal(parent_event_result){
		this.dt_from_shop_dtl__im_from_dt(parent_event_result)
	}

	//Handler for INTERNAL event of "im from dt"
	im_from_dt__internal(parent_event_result){
		this.im_from_dt__rs_from_im_success(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "shop ui clear"
	shop_ui_clear__action_button_click(){
		this.shop_ui_clear__cu_from_clear_btn_to_shop_ui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation unblock"
	navigation_unblock__action_button_click(){
		this.navigation_unblock__ctuwf_from_unblock_btn()
	}

	//Handler for INTERNAL event of "ctuwf from unblock btn"
	ctuwf_from_unblock_btn__internal(parent_event_result){
		this.ctuwf_from_unblock_btn__im_from_unblock_ctuwf(parent_event_result)
	}

	//Handler for INTERNAL event of "im from unblock ctuwf"
	im_from_unblock_ctuwf__internal(parent_event_result){
		this.im_from_unblock_ctuwf__rs_from_unblock_im_success(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation block"
	navigation_block__action_button_click(){
		this.navigation_block__ctuwf_from_block_btn()
	}

	//Handler for INTERNAL event of "ctuwf from block btn"
	ctuwf_from_block_btn__internal(parent_event_result){
		this.ctuwf_from_block_btn__im_from_block_btn_to_bad_list_ctuwf_success(parent_event_result)
	}

	//Handler for INTERNAL event of "im from block btn to bad list ctuwf success"
	im_from_block_btn_to_bad_list_ctuwf_success__internal(parent_event_result){
		this.im_from_block_btn_to_bad_list_ctuwf_success__rs_from_block_im_success(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation enable shop"
	navigation_enable_shop__action_button_click(){
		this.navigation_enable_shop__ctuwf_from_enable_btn()
	}

	//Handler for INTERNAL event of "ctuwf from enable btn"
	ctuwf_from_enable_btn__internal(parent_event_result){
		this.ctuwf_from_enable_btn__im_from_enable_shop_ctuwf_success(parent_event_result)
	}

	//Handler for INTERNAL event of "im from enable shop ctuwf success"
	im_from_enable_shop_ctuwf_success__internal(parent_event_result){
		this.im_from_enable_shop_ctuwf_success__rs_from_enable_shop_im_success(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation disable shop"
	navigation_disable_shop__action_button_click(){
		this.navigation_disable_shop__ctuwf_from_disable_btn()
	}

	//Handler for INTERNAL event of "ctuwf from disable btn"
	ctuwf_from_disable_btn__internal(parent_event_result){
		this.ctuwf_from_disable_btn__im_from_disable_shop_ctuwf_success(parent_event_result)
	}

	//Handler for INTERNAL event of "im from disable shop ctuwf success"
	im_from_disable_shop_ctuwf_success__internal(parent_event_result){
		this.im_from_disable_shop_ctuwf_success__rs_from_disable_shop_im_success(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation unenroll merchant"
	navigation_unenroll_merchant__action_button_click(){
		this.navigation_unenroll_merchant__ctuwf_from_merchant_dtl()
	}

	//Handler for INTERNAL event of "ctuwf from merchant dtl"
	ctuwf_from_merchant_dtl__internal(parent_event_result){
		this.ctuwf_from_merchant_dtl__im_from_ctuwf_unenroll_btn(parent_event_result)
	}

	//Handler for INTERNAL event of "im from ctuwf unenroll btn"
	im_from_ctuwf_unenroll_btn__internal(parent_event_result){
		this.im_from_ctuwf_unenroll_btn__rs_from_im_unenroll_btn(parent_event_result)
	}

	//Handler for MENU_ITEM_CLICK event of "merchant details modify phone no"
	merchant_details_modify_phone_no__menu_item_click(){
		this.merchant_details_modify_phone_no__bt_from_phone_no_icon()
	}

	//Handler for INTERNAL event of "bt from phone no icon"
	bt_from_phone_no_icon__internal(parent_event_result){
		this.bt_from_phone_no_icon__spap_from_phno_ui_bt(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "phone no ui save"
	phone_no_ui_save__action_button_click(){
		this.phone_no_ui_save__ve_for_mobile_no_ui()
	}

	//Handler for INTERNAL event of "ve for mobile no ui"
	ve_for_mobile_no_ui__internal(parent_event_result){
		this.ve_for_mobile_no_ui__st_for_mobile_no(parent_event_result)
	}

	//Handler for INTERNAL event of "st for mobile no"
	st_for_mobile_no__internal(parent_event_result){
		this.st_for_mobile_no__info_msg_for_mobile_no(parent_event_result)
	}

	//Handler for INTERNAL event of "info msg for mobile no"
	info_msg_for_mobile_no__internal(parent_event_result){
		this.info_msg_for_mobile_no__rs_for_mobile_no(parent_event_result)
	}

	//Handler for MENU_ITEM_CLICK event of "merchant details modify personal data"
	merchant_details_modify_personal_data__menu_item_click(){
		this.merchant_details_modify_personal_data__bt_from_menu()
	}

	//Handler for INTERNAL event of "bt from menu"
	bt_from_menu__internal(parent_event_result){
		this.bt_from_menu__spap_from_psnldata_bt(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "personal data ui save"
	personal_data_ui_save__action_button_click(){
		this.personal_data_ui_save__ve_from_data_save()
	}

	//Handler for INTERNAL event of "ve from data save"
	ve_from_data_save__internal(parent_event_result){
		this.ve_from_data_save__st_from_data_ui(parent_event_result)
	}

	//Handler for INTERNAL event of "st from data ui"
	st_from_data_ui__internal(parent_event_result){
		this.st_from_data_ui__im_from_st_success(parent_event_result)
	}

	//Handler for INTERNAL event of "im from st success"
	im_from_st_success__internal(parent_event_result){
		this.im_from_st_success__rs_from_save_im_success(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation add cash desk"
	navigation_add_cash_desk__action_button_click(){
		this.navigation_add_cash_desk__sp_for_acd_actions()
		this.navigation_add_cash_desk__he_for_delete()
		this.navigation_add_cash_desk__cu_from_add_cash_desk_btn_to_add_desk_ui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "add desk ui save"
	add_desk_ui_save__action_button_click(){
		this.add_desk_ui_save__ve_for_acd_actions()
	}

	//Handler for INTERNAL event of "ve for acd actions"
	ve_for_acd_actions__internal(parent_event_result){
		this.ve_for_acd_actions__st_from_adui(parent_event_result)
	}

	//Handler for INTERNAL event of "st from adui"
	st_from_adui__internal(parent_event_result){
		this.st_from_adui__info_for_ad(parent_event_result)
	}

	//Handler for INTERNAL event of "info for ad"
	info_for_ad__internal(parent_event_result){
		this.info_for_ad__re_for_ad(parent_event_result)
		this.info_for_ad__sp_from_ad_im(parent_event_result)
	}

	//Handler for INTERNAL event of "re for ad"
	re_for_ad__internal(parent_event_result){
		this.re_for_ad__sfr_from_sdl_brfq(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation view cash desk"
	navigation_view_cash_desk__action_button_click(){
		this.navigation_view_cash_desk__se_from_vcd_btn_to_delete_btn()
		this.navigation_view_cash_desk__de_from_vcd_btn_to_add_desk_ui()
		this.navigation_view_cash_desk__sp_from_view_cash_desk_btn()
	}

	//Handler for ACTION_BUTTON_CLICK event of "add desk ui clear"
	add_desk_ui_clear__action_button_click(){
		this.add_desk_ui_clear__cui_fromm_adui_clear_to_ad_ui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "add desk ui back"
	add_desk_ui_back__action_button_click(){
		this.add_desk_ui_back__rs_for_back_actions()
	}

	//Handler for ACTION_BUTTON_CLICK event of "add desk ui delete"
	add_desk_ui_delete__action_button_click(){
		this.add_desk_ui_delete__cm_from_adui_delete_btn()
		this.add_desk_ui_delete__cui_feom_adui_delete_btn_to_adui()
	}

	//Handler for INTERNAL event of "cm from adui delete btn"
	cm_from_adui_delete_btn__internal(parent_event_result){
		this.cm_from_adui_delete_btn__dt_from_adui_cm_to_cdl(parent_event_result)
	}

	//Handler for INTERNAL event of "dt from adui cm to cdl"
	dt_from_adui_cm_to_cdl__internal(parent_event_result){
		this.dt_from_adui_cm_to_cdl__im_from_cdl_dt(parent_event_result)
	}

	//Handler for INTERNAL event of "im from cdl dt"
	im_from_cdl_dt__internal(parent_event_result){
		this.im_from_cdl_dt__re_for_cdl(parent_event_result)
		this.im_from_cdl_dt__sp_from_cdl_im()
	}

	//Handler for SELECTION_CHANGED event of "cash desk list"
	cash_desk_list__selection_changed(){
		this.cash_desk_list__ee_from_cdl_to_adui()
		this.cash_desk_list__bt_adl_to_adui()
	}

	//Handler for SELECTION_CHANGED event of "npss merc proxy banks bank code"
	npss_merc_proxy_banks_bank_code__selection_changed(){
		this.npss_merc_proxy_banks_bank_code__svtm_for_bank_code__bank_ui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation trigger btn"
	navigation_trigger_btn__action_button_click(){
		this.navigation_trigger_btn__he_for_id__bank_ui()
	}

	//Handler for SELECTION_CHANGED event of "npss merc proxy address ui category"
	npss_merc_proxy_address_ui_category__selection_changed(){
		this.npss_merc_proxy_address_ui_category__shc_for_type__merchant_ui()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__sec_from_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1587620779717"
		let event_params={"caller_name":"page_load__sec_from_pl","event_desc":"SEC from PL","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__brfq_from_page_load() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="merchant_details"
		let parent_source_id=""
		let event_code="e_1584360437446"
		let event_params={"caller_name":"page_load__brfq_from_page_load","event_desc":"BRFQ from Page Load","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":""}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665384579126":{"dtt_1304_1665384653050":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665384653050","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665396893087","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Address MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMPA_ID","alias_name":"","mq_id":"MQ_1665396162148","date_format":false},{"column_name":"CATEGORY","alias_name":"","mq_id":"MQ_1665396162292","date_format":false},{"column_name":"MERC_CATEGORY_CODE","alias_name":"","mq_id":"MQ_1665396162427","date_format":false},{"column_name":"MERCHANT","alias_name":"","mq_id":"MQ_1665396162556","date_format":false},{"column_name":"DENOMINATION","alias_name":"","mq_id":"MQ_1665396162692","date_format":false},{"column_name":"PROFESSIONAL","alias_name":"","mq_id":"MQ_1665396190510","date_format":false},{"column_name":"MERCHANT_TAG","alias_name":"","mq_id":"MQ_1665396190644","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1665396205318","date_format":false},{"column_name":"USER_ID","alias_name":"","mq_id":"MQ_1665396205468","date_format":false},{"column_name":"PARTICIPANT_CODE","alias_name":"","mq_id":"MQ_1665396205620","date_format":false},{"column_name":"POI","alias_name":"","mq_id":"MQ_1665396226181","date_format":false},{"column_name":"VAT_ID","alias_name":"","mq_id":"MQ_1665396226315","date_format":false},{"column_name":"IPP_ID","alias_name":"","mq_id":"MQ_1665396226459","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1665396245421","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1665396245563","date_format":false},{"column_name":"PHONE_NO","alias_name":"","mq_id":"MQ_1665396264405","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665396264555","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665396264715","date_format":false},{"column_name":"EMAIL_ID","alias_name":"","mq_id":"MQ_1665396282655","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMPA_ID,  CATEGORY,  MERC_CATEGORY_CODE,  MERCHANT,  DENOMINATION,  PROFESSIONAL,  MERCHANT_TAG,  IBAN,  USER_ID,  PARTICIPANT_CODE,  POI,  VAT_ID,  IPP_ID,  PHONE_NO,  DTT_CODE,  DT_CODE,  SYSTEM_ID,  STATUS,  PROCESS_STATUS,  EMAIL_ID FROM NPSS_MERC_PROXY_ADDRESS $WHERE ORDER BY NPSSMPA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Address MQ CCD","filter":[],"databinding":[{"header":"Type","target_column":"CATEGORY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant","target_column":"MERCHANT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Professional","target_column":"PROFESSIONAL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Tag","target_column":"MERCHANT_TAG","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email ID","target_column":"EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Participant Code","target_column":"PARTICIPANT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Phone No","target_column":"PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__cf_from_page_load() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1584545012059"
		let event_params={"caller_name":"page_load__cf_from_page_load","event_desc":"CF from Page Load","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""}}
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
		let destn_id="navigation_add_shop"
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
	page_load__he_from_add_bank() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_block"
		let parent_source_id=""
		let event_code="e_1652158249896"
		let event_params={"caller_name":"page_load__he_from_add_bank","event_desc":"HE from Add bank","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_from_pgld_to_unblock_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_unblock"
		let parent_source_id=""
		let event_code="e_1652158304980"
		let event_params={"caller_name":"page_load__he_from_pgld_to_unblock_btn","event_desc":"HE from Pgld to Unblock btn","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_from_disable_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_disable_shop"
		let parent_source_id=""
		let event_code="e_1652158324560"
		let event_params={"caller_name":"page_load__he_from_disable_btn","event_desc":"HE from Disable btn","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_from_enable_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_enable_shop"
		let parent_source_id=""
		let event_code="e_1652158340203"
		let event_params={"caller_name":"page_load__he_from_enable_btn","event_desc":"HE from Enable btn","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_from_pgld_to_view_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_view"
		let parent_source_id=""
		let event_code="e_1652276309651"
		let event_params={"caller_name":"page_load__he_from_pgld_to_view_btn","event_desc":"HE from Pgld to View btn","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_from_pgld_to_unenroll_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_unenroll_merchant"
		let parent_source_id=""
		let event_code="e_1652276999513"
		let event_params={"caller_name":"page_load__he_from_pgld_to_unenroll_btn","event_desc":"HE from pgld to unenroll btn","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_view_cash_desk"
		let parent_source_id=""
		let event_code="e_1652783961633"
		let event_params={"caller_name":"page_load__he_for_pl","event_desc":"HE for PL","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_from_pgld_to_delete_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="add_desk_ui_delete"
		let parent_source_id=""
		let event_code="e_1654777508678"
		let event_params={"caller_name":"page_load__he_from_pgld_to_delete_btn","event_desc":"HE from Pgld to Delete btn","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_pl_to_acd() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_add_cash_desk"
		let parent_source_id=""
		let event_code="e_1654785110099"
		let event_params={"caller_name":"page_load__he_for_pl_to_acd","event_desc":"HE for PL to ACD","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation enroll merchant"
	navigation_enroll_merchant__sp_by_click_on_add_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_enroll_merchant"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1584360512002"
		let event_params={"caller_name":"navigation_enroll_merchant__sp_by_click_on_add_action","event_desc":"SP by click on add Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_enroll_merchant","raiseparam":{"profile_code":"BTL_1408_1584360351180"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation enroll merchant"
	navigation_enroll_merchant__he_by_click_on_nvg_edit_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_enroll_merchant"
		let destn_id="merchant_ui_edit"
		let parent_source_id=""
		let event_code="e_1584360711848"
		let event_params={"caller_name":"navigation_enroll_merchant__he_by_click_on_nvg_edit_action","event_desc":"HE by click on NVG Edit Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_enroll_merchant","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation enroll merchant"
	navigation_enroll_merchant__cui_by_click_on_navigation_add() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_enroll_merchant"
		let destn_id="merchant_ui"
		let parent_source_id=""
		let event_code="e_1584595505412"
		let event_params={"caller_name":"navigation_enroll_merchant__cui_by_click_on_navigation_add","event_desc":"CUI by Click on Navigation Add","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_enroll_merchant","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation enroll merchant"
	navigation_enroll_merchant__se_from_nvg_add_to_save_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_enroll_merchant"
		let destn_id="merchant_ui_save"
		let parent_source_id=""
		let event_code="e_1584606156418"
		let event_params={"caller_name":"navigation_enroll_merchant__se_from_nvg_add_to_save_action","event_desc":"SE from NVG Add to Save Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_enroll_merchant","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation enroll merchant"
	navigation_enroll_merchant__ee_from_nvg_add_to_data_entry() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_enroll_merchant"
		let destn_id="merchant_ui"
		let parent_source_id=""
		let event_code="e_1584682366105"
		let event_params={"caller_name":"navigation_enroll_merchant__ee_from_nvg_add_to_data_entry","event_desc":"EE from NVG Add to Data Entry","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_enroll_merchant","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation enroll merchant"
	navigation_enroll_merchant__he_from_mui_add_btn_to_mui_delete_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_enroll_merchant"
		let destn_id="merchant_ui_delete"
		let parent_source_id=""
		let event_code="e_1587451196032"
		let event_params={"caller_name":"navigation_enroll_merchant__he_from_mui_add_btn_to_mui_delete_btn","event_desc":"HE from MUI Add btn to MUI Delete btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_enroll_merchant","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation enroll merchant"
	navigation_enroll_merchant__ee_from_add_btn_to_mdl() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_enroll_merchant"
		let destn_id="merchant_ui_clear"
		let parent_source_id=""
		let event_code="e_1587451618190"
		let event_params={"caller_name":"navigation_enroll_merchant__ee_from_add_btn_to_mdl","event_desc":"EE from Add btn to MDL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_enroll_merchant","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":""}}
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
	navigation_view__sp_from_nvg_view_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1584360802392"
		let event_params={"caller_name":"navigation_view__sp_from_nvg_view_action","event_desc":"SP from NVG view Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view","raiseparam":{"profile_code":"BTL_1408_1584360351180"}}
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
	navigation_view__de_from_nvg_view_to_data_entry() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view"
		let destn_id="merchant_ui"
		let parent_source_id=""
		let event_code="e_1584360997119"
		let event_params={"caller_name":"navigation_view__de_from_nvg_view_to_data_entry","event_desc":"DE from NVG view to Data Entry","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view","raiseparam":{}}
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
		let destn_id="merchant_ui_save"
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
	navigation_view__se_from_nvg_view_to_edit_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view"
		let destn_id="merchant_ui_edit"
		let parent_source_id=""
		let event_code="e_1584361150512"
		let event_params={"caller_name":"navigation_view__se_from_nvg_view_to_edit_action","event_desc":"SE from NVG view to Edit Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":""}}
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
	navigation_view__bt_from_view_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view"
		let destn_id="merchant_ui"
		let parent_source_id=""
		let event_code="e_1584534940035"
		let event_params={"caller_name":"navigation_view__bt_from_view_action","event_desc":"BT from view action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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
		let destn_id="merchant_ui_delete"
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
	navigation_view__he_for_clear_actions() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view"
		let destn_id="merchant_ui_clear"
		let parent_source_id=""
		let event_code="e_1602484782088"
		let event_params={"caller_name":"navigation_view__he_for_clear_actions","event_desc":"HE for clear actions","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	navigation_view__he_from_view_btn_to_add_shop_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view"
		let destn_id="navigation_add_shop"
		let parent_source_id=""
		let event_code="e_1647435131056"
		let event_params={"caller_name":"navigation_view__he_from_view_btn_to_add_shop_btn","event_desc":"HE from View btn to Add Shop btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "merchant details"
	merchant_details__ee_from_list_to_view_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_details"
		let destn_id="navigation_view"
		let parent_source_id=""
		let event_code="e_1584362206920"
		let event_params={"caller_name":"merchant_details__ee_from_list_to_view_btn","event_desc":"EE from list to view btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "merchant details"
	merchant_details__ssr_for_the_list_to_data_entry() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_details"
		let destn_id="merchant_ui"
		let parent_source_id=""
		let event_code="e_1584538432432"
		let event_params={"caller_name":"merchant_details__ssr_for_the_list_to_data_entry","event_desc":"SSR for the List to Data Entry","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant_details","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "merchant details"
	merchant_details__svm_from_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_details"
		let destn_id="merchant_details"
		let parent_source_id=""
		let event_code="e_1647408871024"
		let event_params={"caller_name":"merchant_details__svm_from_list","event_desc":"SVM from List","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant_details","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_from_list__brfq_corporate_acct_list,"
		let event_data={"merchant_details":{"e_1647408871024":{"dts":{"dt_1304_1665384579126":{"dtts":{"":{"uicgc_code":"UICGC_1","event_code":"E_1647408871024","dt_code":"DT_1304_1665384579126","dtt_code":"","dt_desc":"Merchant DTG","dtt_desc":"NPSS Merc Proxy Address","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"NPSSMPA_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSSMPA_ID","setd3name":"NPSSMPA_ID"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665384579126":{"dtt_1304_1665384653050":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665384653050","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665396893087","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Address MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMPA_ID","alias_name":"","mq_id":"MQ_1665396162148","date_format":false},{"column_name":"CATEGORY","alias_name":"","mq_id":"MQ_1665396162292","date_format":false},{"column_name":"MERC_CATEGORY_CODE","alias_name":"","mq_id":"MQ_1665396162427","date_format":false},{"column_name":"MERCHANT","alias_name":"","mq_id":"MQ_1665396162556","date_format":false},{"column_name":"DENOMINATION","alias_name":"","mq_id":"MQ_1665396162692","date_format":false},{"column_name":"PROFESSIONAL","alias_name":"","mq_id":"MQ_1665396190510","date_format":false},{"column_name":"MERCHANT_TAG","alias_name":"","mq_id":"MQ_1665396190644","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1665396205318","date_format":false},{"column_name":"USER_ID","alias_name":"","mq_id":"MQ_1665396205468","date_format":false},{"column_name":"PARTICIPANT_CODE","alias_name":"","mq_id":"MQ_1665396205620","date_format":false},{"column_name":"POI","alias_name":"","mq_id":"MQ_1665396226181","date_format":false},{"column_name":"VAT_ID","alias_name":"","mq_id":"MQ_1665396226315","date_format":false},{"column_name":"IPP_ID","alias_name":"","mq_id":"MQ_1665396226459","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1665396245421","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1665396245563","date_format":false},{"column_name":"PHONE_NO","alias_name":"","mq_id":"MQ_1665396264405","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665396264555","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665396264715","date_format":false},{"column_name":"EMAIL_ID","alias_name":"","mq_id":"MQ_1665396282655","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMPA_ID,  CATEGORY,  MERC_CATEGORY_CODE,  MERCHANT,  DENOMINATION,  PROFESSIONAL,  MERCHANT_TAG,  IBAN,  USER_ID,  PARTICIPANT_CODE,  POI,  VAT_ID,  IPP_ID,  PHONE_NO,  DTT_CODE,  DT_CODE,  SYSTEM_ID,  STATUS,  PROCESS_STATUS,  EMAIL_ID FROM NPSS_MERC_PROXY_ADDRESS $WHERE ORDER BY NPSSMPA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Address MQ CCD","filter":[],"databinding":[{"header":"Type","target_column":"CATEGORY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant","target_column":"MERCHANT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Professional","target_column":"PROFESSIONAL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Tag","target_column":"MERCHANT_TAG","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email ID","target_column":"EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Participant Code","target_column":"PARTICIPANT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Phone No","target_column":"PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "merchant details"
	merchant_details__se_from_md_list_to_add_acct_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_details"
		let destn_id="navigation_add_account"
		let parent_source_id=""
		let event_code="e_1647411103895"
		let event_params={"caller_name":"merchant_details__se_from_md_list_to_add_acct_btn","event_desc":"SE from MD list to Add Acct btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "merchant details"
	merchant_details__he_from_md_list_to_block_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_details"
		let destn_id="navigation_block"
		let parent_source_id=""
		let event_code="e_1652182262970"
		let event_params={"caller_name":"merchant_details__he_from_md_list_to_block_btn","event_desc":"HE from MD list to Block btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "merchant details"
	merchant_details__he_from_md_list_to_unblock_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_details"
		let destn_id="navigation_unblock"
		let parent_source_id=""
		let event_code="e_1652182280498"
		let event_params={"caller_name":"merchant_details__he_from_md_list_to_unblock_btn","event_desc":"HE from MD list to Unblock btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "merchant details"
	merchant_details__he_from_md_list_to_enableshop_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_details"
		let destn_id="navigation_enable_shop"
		let parent_source_id=""
		let event_code="e_1652182307314"
		let event_params={"caller_name":"merchant_details__he_from_md_list_to_enableshop_btn","event_desc":"HE from MD list to EnableShop btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "merchant details"
	merchant_details__he_from_md_list_to_ds_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_details"
		let destn_id="navigation_disable_shop"
		let parent_source_id=""
		let event_code="e_1652182331521"
		let event_params={"caller_name":"merchant_details__he_from_md_list_to_ds_btn","event_desc":"HE from MD list to DS btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "merchant details"
	merchant_details__he_from_add_shop() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_details"
		let destn_id="navigation_add_shop"
		let parent_source_id=""
		let event_code="e_1652182396438"
		let event_params={"caller_name":"merchant_details__he_from_add_shop","event_desc":"HE from Add shop","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "merchant details"
	merchant_details__ee_from_md_list_to_add_acct_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_details"
		let destn_id="navigation_add_account"
		let parent_source_id=""
		let event_code="e_1652183716986"
		let event_params={"caller_name":"merchant_details__ee_from_md_list_to_add_acct_btn","event_desc":"EE from MD list to Add Acct btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant_details","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "merchant details"
	merchant_details__se_from_md_list_to_unenroll_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_details"
		let destn_id="navigation_unenroll_merchant"
		let parent_source_id=""
		let event_code="e_1652277037399"
		let event_params={"caller_name":"merchant_details__se_from_md_list_to_unenroll_btn","event_desc":"SE from MD list to Unenroll btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"CREATED","hide_column":"STATUS","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "merchant details"
	merchant_details__ssr_from_merchant_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_details"
		let destn_id="phone_no_ui"
		let parent_source_id=""
		let event_code="e_1652339968561"
		let event_params={"caller_name":"merchant_details__ssr_from_merchant_list","event_desc":"SSR from merchant list","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant_details","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "merchant details"
	merchant_details__ssr_from_merchant_listt() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_details"
		let destn_id="personal_data_ui"
		let parent_source_id=""
		let event_code="e_1652340731984"
		let event_params={"caller_name":"merchant_details__ssr_from_merchant_listt","event_desc":"SSR from merchant listt","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant_details","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "merchant details"
	merchant_details__he_for_enrol_merchant() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_details"
		let destn_id="navigation_enroll_merchant"
		let parent_source_id=""
		let event_code="e_1652341476721"
		let event_params={"caller_name":"merchant_details__he_for_enrol_merchant","event_desc":"HE for enrol merchant","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "merchant details"
	merchant_details__cui_from_merchant_detail() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_details"
		let destn_id="shop_details"
		let parent_source_id=""
		let event_code="e_1652352286487"
		let event_params={"caller_name":"merchant_details__cui_from_merchant_detail","event_desc":"CUI from merchant detail","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant_details","raiseparam":{"need_reset_key_column":"N"}}
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
	merchant_details__he_for_md() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_details"
		let destn_id="navigation_add_cash_desk"
		let parent_source_id=""
		let event_code="e_1654785141255"
		let event_params={"caller_name":"merchant_details__he_for_md","event_desc":"HE for MD","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for FILTER_CLICK event of "merchant details"
	merchant_details__spap_from_list_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_details"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1584362555716"
		let event_params={"caller_name":"merchant_details__spap_from_list_search","event_desc":"SPAP from List search","event_type":"FILTER_CLICK","caller_event_context":"SUCCESS","root_source_id":"merchant_details","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_from_list_search","selector":"p_search_layout","profile_code":"BTL_1408_1584360407011","window_title":"Search","window_height":400,"window_width":"650px","window_close_icon":"Y","eventdes":"spap_from_list_search","eventcode":"E_1584362555716"}}
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
		let parent_source_id="merchant_details"
		let event_code="e_1647345793418"
		let event_params={"caller_name":"svm_from_list__brfq_corporate_acct_list","event_desc":"BRFQ Corporate Acct list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"merchant_details","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"Y"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665384579126":{"dtt_1304_1665385495265":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665385495265","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665396790432","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Bank MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMPB_ID","alias_name":"","mq_id":"MQ_1665395413660","date_format":false},{"column_name":"NPSSMPA_ID","alias_name":"","mq_id":"MQ_1665395413796","date_format":false},{"column_name":"BANK_NAME","alias_name":"","mq_id":"MQ_1665395413932","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1665395414068","date_format":false},{"column_name":"ACCOUNT_NO","alias_name":"","mq_id":"MQ_1665395414212","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1665395441822","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1665395441972","date_format":false},{"column_name":"IS_DEFAULT","alias_name":"","mq_id":"MQ_1665395442124","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665395468486","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665395468636","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMPB_ID,  NPSSMPA_ID,  BANK_NAME,  BANK_CODE,  ACCOUNT_NO,  IS_DEFAULT,  DT_CODE,  DTT_CODE,  SYSTEM_ID,  STATUS,  PROCESS_STATUS FROM NPSS_MERC_PROXY_BANKS $WHERE ORDER BY NPSSMPB_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Bank MQ CCD","filter":[{"filter_name":"NPSSMPA_ID","binding_name":"NPSSMPA_ID","binding_value":"","source_name":"MI_LEVEL_NPSSMPA_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank Code","target_column":"BANK_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Bank Name","target_column":"BANK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account No","target_column":"ACCOUNT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "merchant ui back"
	merchant_ui_back__rs_from_mui_back_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1587813016469"
		let event_params={"caller_name":"merchant_ui_back__rs_from_mui_back_btn","event_desc":"RS from MUI Back btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"merchant_ui_back","raiseparam":{}}
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
	search_search__cp_from_search_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1587636808228"
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

	//Handler for INTERNAL event of "ssp on search"
	ssp_on_search__brfq_on_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="ssp_on_search"
		let destn_id="merchant_details"
		let parent_source_id="search_search"
		let event_code="e_1584361409035"
		let event_params={"caller_name":"ssp_on_search__brfq_on_search","event_desc":"BRFQ on Search","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":""}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665384579126":{"dtt_1304_1665384653050":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665384653050","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665396893087","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Address MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMPA_ID","alias_name":"","mq_id":"MQ_1665396162148","date_format":false},{"column_name":"CATEGORY","alias_name":"","mq_id":"MQ_1665396162292","date_format":false},{"column_name":"MERC_CATEGORY_CODE","alias_name":"","mq_id":"MQ_1665396162427","date_format":false},{"column_name":"MERCHANT","alias_name":"","mq_id":"MQ_1665396162556","date_format":false},{"column_name":"DENOMINATION","alias_name":"","mq_id":"MQ_1665396162692","date_format":false},{"column_name":"PROFESSIONAL","alias_name":"","mq_id":"MQ_1665396190510","date_format":false},{"column_name":"MERCHANT_TAG","alias_name":"","mq_id":"MQ_1665396190644","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1665396205318","date_format":false},{"column_name":"USER_ID","alias_name":"","mq_id":"MQ_1665396205468","date_format":false},{"column_name":"PARTICIPANT_CODE","alias_name":"","mq_id":"MQ_1665396205620","date_format":false},{"column_name":"POI","alias_name":"","mq_id":"MQ_1665396226181","date_format":false},{"column_name":"VAT_ID","alias_name":"","mq_id":"MQ_1665396226315","date_format":false},{"column_name":"IPP_ID","alias_name":"","mq_id":"MQ_1665396226459","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1665396245421","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1665396245563","date_format":false},{"column_name":"PHONE_NO","alias_name":"","mq_id":"MQ_1665396264405","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665396264555","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665396264715","date_format":false},{"column_name":"EMAIL_ID","alias_name":"","mq_id":"MQ_1665396282655","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMPA_ID,  CATEGORY,  MERC_CATEGORY_CODE,  MERCHANT,  DENOMINATION,  PROFESSIONAL,  MERCHANT_TAG,  IBAN,  USER_ID,  PARTICIPANT_CODE,  POI,  VAT_ID,  IPP_ID,  PHONE_NO,  DTT_CODE,  DT_CODE,  SYSTEM_ID,  STATUS,  PROCESS_STATUS,  EMAIL_ID FROM NPSS_MERC_PROXY_ADDRESS $WHERE ORDER BY NPSSMPA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Address MQ CCD","filter":[],"databinding":[{"header":"Type","target_column":"CATEGORY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant","target_column":"MERCHANT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Professional","target_column":"PROFESSIONAL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Tag","target_column":"MERCHANT_TAG","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email ID","target_column":"EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Participant Code","target_column":"PARTICIPANT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Phone No","target_column":"PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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

	//Handler for ACTION_BUTTON_CLICK event of "merchant ui edit"
	merchant_ui_edit__ee_from_mui_edit_to_mdl() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_ui_edit"
		let destn_id="merchant_ui"
		let parent_source_id=""
		let event_code="e_1584361563170"
		let event_params={"caller_name":"merchant_ui_edit__ee_from_mui_edit_to_mdl","event_desc":"EE from MUI Edit to MDL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"merchant_ui_edit","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "merchant ui edit"
	merchant_ui_edit__he_by_click_on_edit_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_ui_edit"
		let destn_id="merchant_ui_edit"
		let parent_source_id=""
		let event_code="e_1584362027312"
		let event_params={"caller_name":"merchant_ui_edit__he_by_click_on_edit_action","event_desc":"HE by click on Edit Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"merchant_ui_edit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "merchant ui edit"
	merchant_ui_edit__se_from_edit_to_save__action() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_ui_edit"
		let destn_id="merchant_ui_save"
		let parent_source_id=""
		let event_code="e_1584363483912"
		let event_params={"caller_name":"merchant_ui_edit__se_from_edit_to_save__action","event_desc":"SE from edit to save  Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"merchant_ui_edit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "merchant ui edit"
	merchant_ui_edit__he_from_mui_edit_to_mui_clear() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_ui_edit"
		let destn_id="merchant_ui_clear"
		let parent_source_id=""
		let event_code="e_1587461249949"
		let event_params={"caller_name":"merchant_ui_edit__he_from_mui_edit_to_mui_clear","event_desc":"HE from MUI Edit to MUI Clear","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"merchant_ui_edit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "merchant ui save"
	merchant_ui_save__ve_from_mui_save_to_mui() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_ui_save"
		let destn_id="merchant_ui"
		let parent_source_id=""
		let event_code="e_1584362243699"
		let event_params={"caller_name":"merchant_ui_save__ve_from_mui_save_to_mui","event_desc":"VE from MUI Save to MUI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"merchant_ui_save","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="ve_from_mui_save_to_mui__st_from_mui_save_btn,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ve from mui save to mui"
	ve_from_mui_save_to_mui__st_from_mui_save_btn(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ve_from_mui_save_to_mui"
		let destn_id="merchant_ui"
		let parent_source_id="merchant_ui_save"
		let event_code="e_1584362295998"
		let event_params={"caller_name":"ve_from_mui_save_to_mui__st_from_mui_save_btn","event_desc":"ST from MUI save btn","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"merchant_ui_save","raiseparam":{"reset_selection":"Y","need_clear_value":"Y","no_change_status_on_modify":"N","release_lock":"Y","clear_cache":"ALL"},"parent_event_result":"SUCCESS"}
		let handler_code="save_tran"
		let internals="st_from_mui_save_btn__re_from_mui_save_to_list,st_from_mui_save_btn__im_by_click_on_save_action,st_from_mui_save_btn__ee_from_st_to_view_btn,"
		let event_data={}
		let data_source={}
		try {
			this.handler.save_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "st from mui save btn"
	st_from_mui_save_btn__re_from_mui_save_to_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="st_from_mui_save_btn"
		let destn_id="merchant_details"
		let parent_source_id="ve_from_mui_save_to_mui"
		let event_code="e_1584362374877"
		let event_params={"caller_name":"st_from_mui_save_btn__re_from_mui_save_to_list","event_desc":"RE from MUI Save to list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"merchant_ui_save","raiseparam":{}}
		let handler_code="refresh_element"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665384579126":{"dtt_1304_1665384653050":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665384653050","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665396893087","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Address MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMPA_ID","alias_name":"","mq_id":"MQ_1665396162148","date_format":false},{"column_name":"CATEGORY","alias_name":"","mq_id":"MQ_1665396162292","date_format":false},{"column_name":"MERC_CATEGORY_CODE","alias_name":"","mq_id":"MQ_1665396162427","date_format":false},{"column_name":"MERCHANT","alias_name":"","mq_id":"MQ_1665396162556","date_format":false},{"column_name":"DENOMINATION","alias_name":"","mq_id":"MQ_1665396162692","date_format":false},{"column_name":"PROFESSIONAL","alias_name":"","mq_id":"MQ_1665396190510","date_format":false},{"column_name":"MERCHANT_TAG","alias_name":"","mq_id":"MQ_1665396190644","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1665396205318","date_format":false},{"column_name":"USER_ID","alias_name":"","mq_id":"MQ_1665396205468","date_format":false},{"column_name":"PARTICIPANT_CODE","alias_name":"","mq_id":"MQ_1665396205620","date_format":false},{"column_name":"POI","alias_name":"","mq_id":"MQ_1665396226181","date_format":false},{"column_name":"VAT_ID","alias_name":"","mq_id":"MQ_1665396226315","date_format":false},{"column_name":"IPP_ID","alias_name":"","mq_id":"MQ_1665396226459","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1665396245421","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1665396245563","date_format":false},{"column_name":"PHONE_NO","alias_name":"","mq_id":"MQ_1665396264405","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665396264555","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665396264715","date_format":false},{"column_name":"EMAIL_ID","alias_name":"","mq_id":"MQ_1665396282655","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMPA_ID,  CATEGORY,  MERC_CATEGORY_CODE,  MERCHANT,  DENOMINATION,  PROFESSIONAL,  MERCHANT_TAG,  IBAN,  USER_ID,  PARTICIPANT_CODE,  POI,  VAT_ID,  IPP_ID,  PHONE_NO,  DTT_CODE,  DT_CODE,  SYSTEM_ID,  STATUS,  PROCESS_STATUS,  EMAIL_ID FROM NPSS_MERC_PROXY_ADDRESS $WHERE ORDER BY NPSSMPA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Address MQ CCD","filter":[],"databinding":[{"header":"Type","target_column":"CATEGORY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant","target_column":"MERCHANT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Professional","target_column":"PROFESSIONAL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Tag","target_column":"MERCHANT_TAG","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email ID","target_column":"EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Participant Code","target_column":"PARTICIPANT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Phone No","target_column":"PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.refresh_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "st from mui save btn"
	st_from_mui_save_btn__im_by_click_on_save_action(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="st_from_mui_save_btn"
		let destn_id=""
		let parent_source_id="ve_from_mui_save_to_mui"
		let event_code="e_1584362425726"
		let event_params={"caller_name":"st_from_mui_save_btn__im_by_click_on_save_action","event_desc":"IM by click on save Action","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Merchant Enrolment IPP API (Enrolment) has been Initiated.","root_source_id":"merchant_ui_save","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="im_by_click_on_save_action__rs_from_mui_save_im_success,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "st from mui save btn"
	st_from_mui_save_btn__ee_from_st_to_view_btn(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="st_from_mui_save_btn"
		let destn_id="navigation_view"
		let parent_source_id="ve_from_mui_save_to_mui"
		let event_code="e_1652254696625"
		let event_params={"caller_name":"st_from_mui_save_btn__ee_from_st_to_view_btn","event_desc":"EE from ST to View btn","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"merchant_ui_save","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""},"parent_event_result":"SUCCESS"}
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

	//Handler for INTERNAL event of "im by click on save action"
	im_by_click_on_save_action__rs_from_mui_save_im_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="im_by_click_on_save_action"
		let destn_id=""
		let parent_source_id="st_from_mui_save_btn"
		let event_code="e_1652341956170"
		let event_params={"caller_name":"im_by_click_on_save_action__rs_from_mui_save_im_success","event_desc":"RS from MUI Save IM Success","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"merchant_ui_save","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "merchant ui delete"
	merchant_ui_delete__cm_from_merchant_delete_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_ui_delete"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1587814926985"
		let event_params={"caller_name":"merchant_ui_delete__cm_from_merchant_delete_btn","event_desc":"CM from Merchant Delete btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","message_text":"Are you sure that you want to permanently delete the selected record?","root_source_id":"merchant_ui_delete","raiseparam":{"conf_msg":"Are you sure that you want to permanently delete the selected record?"}}
		let handler_code="conf_msg"
		let internals="cm_from_merchant_delete_btn__dt_from_confs_msg_to_mdl,"
		let event_data={}
		let data_source={}
		try {
			this.handler.conf_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cm from merchant delete btn"
	cm_from_merchant_delete_btn__dt_from_confs_msg_to_mdl(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="YES"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cm_from_merchant_delete_btn"
		let destn_id="merchant_details"
		let parent_source_id="merchant_ui_delete"
		let event_code="e_1601982711067"
		let event_params={"caller_name":"cm_from_merchant_delete_btn__dt_from_confs_msg_to_mdl","event_desc":"DT from confs msg to MDL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"merchant_ui_delete","raiseparam":{"conf_msg":"","info_msg":"","clear_cache":"ALL"},"parent_event_result":"YES"}
		let handler_code="delete_tran"
		let internals="dt_from_confs_msg_to_mdl__im_from_merchant_dt,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665384579126":{"dtt_1304_1665384653050":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665384653050","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665396893087","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Address MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMPA_ID","alias_name":"","mq_id":"MQ_1665396162148","date_format":false},{"column_name":"CATEGORY","alias_name":"","mq_id":"MQ_1665396162292","date_format":false},{"column_name":"MERC_CATEGORY_CODE","alias_name":"","mq_id":"MQ_1665396162427","date_format":false},{"column_name":"MERCHANT","alias_name":"","mq_id":"MQ_1665396162556","date_format":false},{"column_name":"DENOMINATION","alias_name":"","mq_id":"MQ_1665396162692","date_format":false},{"column_name":"PROFESSIONAL","alias_name":"","mq_id":"MQ_1665396190510","date_format":false},{"column_name":"MERCHANT_TAG","alias_name":"","mq_id":"MQ_1665396190644","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1665396205318","date_format":false},{"column_name":"USER_ID","alias_name":"","mq_id":"MQ_1665396205468","date_format":false},{"column_name":"PARTICIPANT_CODE","alias_name":"","mq_id":"MQ_1665396205620","date_format":false},{"column_name":"POI","alias_name":"","mq_id":"MQ_1665396226181","date_format":false},{"column_name":"VAT_ID","alias_name":"","mq_id":"MQ_1665396226315","date_format":false},{"column_name":"IPP_ID","alias_name":"","mq_id":"MQ_1665396226459","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1665396245421","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1665396245563","date_format":false},{"column_name":"PHONE_NO","alias_name":"","mq_id":"MQ_1665396264405","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665396264555","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665396264715","date_format":false},{"column_name":"EMAIL_ID","alias_name":"","mq_id":"MQ_1665396282655","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMPA_ID,  CATEGORY,  MERC_CATEGORY_CODE,  MERCHANT,  DENOMINATION,  PROFESSIONAL,  MERCHANT_TAG,  IBAN,  USER_ID,  PARTICIPANT_CODE,  POI,  VAT_ID,  IPP_ID,  PHONE_NO,  DTT_CODE,  DT_CODE,  SYSTEM_ID,  STATUS,  PROCESS_STATUS,  EMAIL_ID FROM NPSS_MERC_PROXY_ADDRESS $WHERE ORDER BY NPSSMPA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Address MQ CCD","filter":[],"databinding":[{"header":"Type","target_column":"CATEGORY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant","target_column":"MERCHANT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Professional","target_column":"PROFESSIONAL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Tag","target_column":"MERCHANT_TAG","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email ID","target_column":"EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Participant Code","target_column":"PARTICIPANT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Phone No","target_column":"PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.delete_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "dt from confs msg to mdl"
	dt_from_confs_msg_to_mdl__im_from_merchant_dt(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="dt_from_confs_msg_to_mdl"
		let destn_id=""
		let parent_source_id="cm_from_merchant_delete_btn"
		let event_code="e_1652330633081"
		let event_params={"caller_name":"dt_from_confs_msg_to_mdl__im_from_merchant_dt","event_desc":"IM from Merchant DT","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"The record has been deleted successfully","root_source_id":"merchant_ui_delete","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="im_from_merchant_dt__rs_from_delete_info,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "im from merchant dt"
	im_from_merchant_dt__rs_from_delete_info(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="im_from_merchant_dt"
		let destn_id=""
		let parent_source_id="dt_from_confs_msg_to_mdl"
		let event_code="e_1652330648743"
		let event_params={"caller_name":"im_from_merchant_dt__rs_from_delete_info","event_desc":"RS from Delete Info","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"merchant_ui_delete","raiseparam":{},"parent_event_result":"SUCCESS"}
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
	navigation_clear__re_from_nvg_clear_to_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_clear"
		let destn_id="merchant_details"
		let parent_source_id=""
		let event_code="e_1584368292757"
		let event_params={"caller_name":"navigation_clear__re_from_nvg_clear_to_list","event_desc":"RE from Nvg Clear to List","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_clear","raiseparam":{}}
		let handler_code="reset_selection"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665384579126":{"dtt_1304_1665384653050":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665384653050","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665396893087","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Address MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMPA_ID","alias_name":"","mq_id":"MQ_1665396162148","date_format":false},{"column_name":"CATEGORY","alias_name":"","mq_id":"MQ_1665396162292","date_format":false},{"column_name":"MERC_CATEGORY_CODE","alias_name":"","mq_id":"MQ_1665396162427","date_format":false},{"column_name":"MERCHANT","alias_name":"","mq_id":"MQ_1665396162556","date_format":false},{"column_name":"DENOMINATION","alias_name":"","mq_id":"MQ_1665396162692","date_format":false},{"column_name":"PROFESSIONAL","alias_name":"","mq_id":"MQ_1665396190510","date_format":false},{"column_name":"MERCHANT_TAG","alias_name":"","mq_id":"MQ_1665396190644","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1665396205318","date_format":false},{"column_name":"USER_ID","alias_name":"","mq_id":"MQ_1665396205468","date_format":false},{"column_name":"PARTICIPANT_CODE","alias_name":"","mq_id":"MQ_1665396205620","date_format":false},{"column_name":"POI","alias_name":"","mq_id":"MQ_1665396226181","date_format":false},{"column_name":"VAT_ID","alias_name":"","mq_id":"MQ_1665396226315","date_format":false},{"column_name":"IPP_ID","alias_name":"","mq_id":"MQ_1665396226459","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1665396245421","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1665396245563","date_format":false},{"column_name":"PHONE_NO","alias_name":"","mq_id":"MQ_1665396264405","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665396264555","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665396264715","date_format":false},{"column_name":"EMAIL_ID","alias_name":"","mq_id":"MQ_1665396282655","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMPA_ID,  CATEGORY,  MERC_CATEGORY_CODE,  MERCHANT,  DENOMINATION,  PROFESSIONAL,  MERCHANT_TAG,  IBAN,  USER_ID,  PARTICIPANT_CODE,  POI,  VAT_ID,  IPP_ID,  PHONE_NO,  DTT_CODE,  DT_CODE,  SYSTEM_ID,  STATUS,  PROCESS_STATUS,  EMAIL_ID FROM NPSS_MERC_PROXY_ADDRESS $WHERE ORDER BY NPSSMPA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Address MQ CCD","filter":[],"databinding":[{"header":"Type","target_column":"CATEGORY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant","target_column":"MERCHANT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Professional","target_column":"PROFESSIONAL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Tag","target_column":"MERCHANT_TAG","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email ID","target_column":"EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Participant Code","target_column":"PARTICIPANT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Phone No","target_column":"PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.reset_selection(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation clear"
	navigation_clear__ee_for_the_clear_after_the__add() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_clear"
		let destn_id="navigation_enroll_merchant"
		let parent_source_id=""
		let event_code="e_1584530673501"
		let event_params={"caller_name":"navigation_clear__ee_for_the_clear_after_the__add","event_desc":"EE for the Clear after the  add","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_clear","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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
	navigation_clear__cu_from_clear_btn_to_bad_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_clear"
		let destn_id="bank_account_details"
		let parent_source_id=""
		let event_code="e_1647435052385"
		let event_params={"caller_name":"navigation_clear__cu_from_clear_btn_to_bad_list","event_desc":"CU from Clear btn to BAD List","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_clear","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665384579126":{"dtt_1304_1665385495265":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665385495265","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665396790432","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Bank MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMPB_ID","alias_name":"","mq_id":"MQ_1665395413660","date_format":false},{"column_name":"NPSSMPA_ID","alias_name":"","mq_id":"MQ_1665395413796","date_format":false},{"column_name":"BANK_NAME","alias_name":"","mq_id":"MQ_1665395413932","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1665395414068","date_format":false},{"column_name":"ACCOUNT_NO","alias_name":"","mq_id":"MQ_1665395414212","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1665395441822","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1665395441972","date_format":false},{"column_name":"IS_DEFAULT","alias_name":"","mq_id":"MQ_1665395442124","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665395468486","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665395468636","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMPB_ID,  NPSSMPA_ID,  BANK_NAME,  BANK_CODE,  ACCOUNT_NO,  IS_DEFAULT,  DT_CODE,  DTT_CODE,  SYSTEM_ID,  STATUS,  PROCESS_STATUS FROM NPSS_MERC_PROXY_BANKS $WHERE ORDER BY NPSSMPB_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Bank MQ CCD","filter":[{"filter_name":"NPSSMPA_ID","binding_name":"NPSSMPA_ID","binding_value":"","source_name":"MI_LEVEL_NPSSMPA_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank Code","target_column":"BANK_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Bank Name","target_column":"BANK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account No","target_column":"ACCOUNT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation clear"
	navigation_clear__cu_from_clear_btn_to_shop_dtl() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_clear"
		let destn_id="shop_details"
		let parent_source_id=""
		let event_code="e_1647435085051"
		let event_params={"caller_name":"navigation_clear__cu_from_clear_btn_to_shop_dtl","event_desc":"CU from Clear btn to Shop Dtl","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_clear","raiseparam":{"need_reset_key_column":"N"}}
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
	navigation_clear__he_from_clear_btn_to_add_acc_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_clear"
		let destn_id="navigation_add_account"
		let parent_source_id=""
		let event_code="e_1647435109130"
		let event_params={"caller_name":"navigation_clear__he_from_clear_btn_to_add_acc_btn","event_desc":"He from Clear btn to Add Acc btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_clear","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	navigation_clear__he_from_clear_btn_to_add_shop_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_clear"
		let destn_id="navigation_add_shop"
		let parent_source_id=""
		let event_code="e_1647435243405"
		let event_params={"caller_name":"navigation_clear__he_from_clear_btn_to_add_shop_btn","event_desc":"HE from Clear btn to Add Shop btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_clear","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	navigation_clear__he_from_clear_btn_to_block_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_clear"
		let destn_id="navigation_block"
		let parent_source_id=""
		let event_code="e_1652160395467"
		let event_params={"caller_name":"navigation_clear__he_from_clear_btn_to_block_btn","event_desc":"HE from Clear btn to Block btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_clear","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	navigation_clear__he_from_clear_btn_to_unblock_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_clear"
		let destn_id="navigation_unblock"
		let parent_source_id=""
		let event_code="e_1652181974499"
		let event_params={"caller_name":"navigation_clear__he_from_clear_btn_to_unblock_btn","event_desc":"HE from Clear btn to Unblock btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_clear","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	navigation_clear__he_from_clear_btn_to_enable_sop_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_clear"
		let destn_id="navigation_enable_shop"
		let parent_source_id=""
		let event_code="e_1652182019372"
		let event_params={"caller_name":"navigation_clear__he_from_clear_btn_to_enable_sop_btn","event_desc":"HE from Clear btn to Enable Sop btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_clear","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	navigation_clear__he_from_clear_btn_to_disable_shop() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_clear"
		let destn_id="navigation_disable_shop"
		let parent_source_id=""
		let event_code="e_1652182039578"
		let event_params={"caller_name":"navigation_clear__he_from_clear_btn_to_disable_shop","event_desc":"HE from Clear btn to Disable Shop","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_clear","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	navigation_clear__he_from_clear_btn_to_unenroll_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_clear"
		let destn_id="navigation_unenroll_merchant"
		let parent_source_id=""
		let event_code="e_1652341583305"
		let event_params={"caller_name":"navigation_clear__he_from_clear_btn_to_unenroll_btn","event_desc":"HE from Clear btn to Unenroll Btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_clear","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "merchant ui clear"
	merchant_ui_clear__cui_from_mui_clear_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_ui_clear"
		let destn_id="merchant_ui"
		let parent_source_id=""
		let event_code="e_1584368860768"
		let event_params={"caller_name":"merchant_ui_clear__cui_from_mui_clear_btn","event_desc":"CUI from MUI clear btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"merchant_ui_clear","raiseparam":{"need_reset_key_column":"N"}}
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
	bank_account_details__he_from_bad_to_bui_save() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="bank_ui_save"
		let parent_source_id=""
		let event_code="e_1647351042233"
		let event_params={"caller_name":"bank_account_details__he_from_bad_to_bui_save","event_desc":"HE from BAD to BUI Save","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	bank_account_details__se_from_bad_to_bui_edit() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="bank_ui_edit"
		let parent_source_id=""
		let event_code="e_1647351101835"
		let event_params={"caller_name":"bank_account_details__se_from_bad_to_bui_edit","event_desc":"SE from BAD to BUI Edit","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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
	bank_account_details__he_from_bad_to_bui_clear() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="bank_ui_clear"
		let parent_source_id=""
		let event_code="e_1647351145486"
		let event_params={"caller_name":"bank_account_details__he_from_bad_to_bui_clear","event_desc":"HE from BAD to BUI Clear","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	bank_account_details__se_from_bad_to_bui_delete() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="bank_ui_delete"
		let parent_source_id=""
		let event_code="e_1647351185789"
		let event_params={"caller_name":"bank_account_details__se_from_bad_to_bui_delete","event_desc":"SE from BAd to BUI Delete","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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
	bank_account_details__ssr_from_bad_to_bui() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="bank_ui"
		let parent_source_id=""
		let event_code="e_1647406200839"
		let event_params={"caller_name":"bank_account_details__ssr_from_bad_to_bui","event_desc":"SSR from BAD to BUI","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{}}
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
	bank_account_details__svm_from_bank_dtl_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="bank_account_details"
		let parent_source_id=""
		let event_code="e_1647409019692"
		let event_params={"caller_name":"bank_account_details__svm_from_bank_dtl_list","event_desc":"SVM from Bank Dtl list","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_from_bank_dtl_list__bfrq_bank_list,"
		let event_data={"bank_account_details":{"e_1647409019692":{"dts":{"dt_1304_1665384579126":{"dtts":{"":{"uicgc_code":"UICGC_5","event_code":"E_1647409019692","dt_code":"DT_1304_1665384579126","dtt_code":"","dt_desc":"Merchant DTG","dtt_desc":"NPSS Merc Proxy Address","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"NPSSMPB_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSSMPB_ID","setd3name":"NPSSMPB_ID"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665384579126":{"dtt_1304_1665385495265":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665385495265","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665396790432","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Bank MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMPB_ID","alias_name":"","mq_id":"MQ_1665395413660","date_format":false},{"column_name":"NPSSMPA_ID","alias_name":"","mq_id":"MQ_1665395413796","date_format":false},{"column_name":"BANK_NAME","alias_name":"","mq_id":"MQ_1665395413932","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1665395414068","date_format":false},{"column_name":"ACCOUNT_NO","alias_name":"","mq_id":"MQ_1665395414212","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1665395441822","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1665395441972","date_format":false},{"column_name":"IS_DEFAULT","alias_name":"","mq_id":"MQ_1665395442124","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665395468486","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665395468636","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMPB_ID,  NPSSMPA_ID,  BANK_NAME,  BANK_CODE,  ACCOUNT_NO,  IS_DEFAULT,  DT_CODE,  DTT_CODE,  SYSTEM_ID,  STATUS,  PROCESS_STATUS FROM NPSS_MERC_PROXY_BANKS $WHERE ORDER BY NPSSMPB_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Bank MQ CCD","filter":[{"filter_name":"NPSSMPA_ID","binding_name":"NPSSMPA_ID","binding_value":"","source_name":"MI_LEVEL_NPSSMPA_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank Code","target_column":"BANK_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Bank Name","target_column":"BANK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account No","target_column":"ACCOUNT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "bank account details"
	bank_account_details__se_from_bad_to_nvg_as_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="navigation_add_shop"
		let parent_source_id=""
		let event_code="e_1647411146810"
		let event_params={"caller_name":"bank_account_details__se_from_bad_to_nvg_as_btn","event_desc":"SE from BAD to Nvg AS btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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
	bank_account_details__he_from_bad_to_nvg_view_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="navigation_view"
		let parent_source_id=""
		let event_code="e_1647412141020"
		let event_params={"caller_name":"bank_account_details__he_from_bad_to_nvg_view_btn","event_desc":"HE from BAD to Nvg View Btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	bank_account_details__he_from_bad_to_nvg_aa_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="navigation_add_account"
		let parent_source_id=""
		let event_code="e_1647413387023"
		let event_params={"caller_name":"bank_account_details__he_from_bad_to_nvg_aa_btn","event_desc":"HE from BAD to Nvg AA btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	bank_account_details__se_from_bad_to_nvg_block() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="navigation_block"
		let parent_source_id=""
		let event_code="e_1652159998472"
		let event_params={"caller_name":"bank_account_details__se_from_bad_to_nvg_block","event_desc":"SE from BAD to Nvg Block","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"CREATED","hide_column":"STATUS","expression":""}}
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
	bank_account_details__se_from_bad_to_nvg_unblock() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="navigation_unblock"
		let parent_source_id=""
		let event_code="e_1652160120259"
		let event_params={"caller_name":"bank_account_details__se_from_bad_to_nvg_unblock","event_desc":"SE from BAD to Nvg UnBlock","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"BLOCKED","hide_column":"STATUS","expression":""}}
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
	bank_account_details__he_from_bad_to_nvg_es_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="navigation_enable_shop"
		let parent_source_id=""
		let event_code="e_1652160182722"
		let event_params={"caller_name":"bank_account_details__he_from_bad_to_nvg_es_btn","event_desc":"HE from BAD to Nvg ES btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	bank_account_details__he_from_bad_to_ds_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="navigation_disable_shop"
		let parent_source_id=""
		let event_code="e_1652160203836"
		let event_params={"caller_name":"bank_account_details__he_from_bad_to_ds_btn","event_desc":"HE from BAD to DS btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	bank_account_details__he_from_bad_to_nvg_em_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="navigation_enroll_merchant"
		let parent_source_id=""
		let event_code="e_1652160561213"
		let event_params={"caller_name":"bank_account_details__he_from_bad_to_nvg_em_btn","event_desc":"HE from BAD to Nvg EM btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	bank_account_details__ee_from_bad_to_as_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="navigation_add_shop"
		let parent_source_id=""
		let event_code="e_1652183765190"
		let event_params={"caller_name":"bank_account_details__ee_from_bad_to_as_btn","event_desc":"EE from BAD to AS btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	bank_account_details__he_from_bad_to_nvg_unm_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="navigation_unenroll_merchant"
		let parent_source_id=""
		let event_code="e_1652277622026"
		let event_params={"caller_name":"bank_account_details__he_from_bad_to_nvg_unm_btn","event_desc":"HE from BAD to Nvg UNM btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	bank_account_details__he_for_bad() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="navigation_view_cash_desk"
		let parent_source_id=""
		let event_code="e_1652784092530"
		let event_params={"caller_name":"bank_account_details__he_for_bad","event_desc":"HE for BAD","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	bank_account_details__he_for_bad_to_acd() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details"
		let destn_id="navigation_add_cash_desk"
		let parent_source_id=""
		let event_code="e_1654785183274"
		let event_params={"caller_name":"bank_account_details__he_for_bad_to_acd","event_desc":"HE for BAD to ACD","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for INTERNAL event of "svm from bank dtl list"
	svm_from_bank_dtl_list__bfrq_bank_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_from_bank_dtl_list"
		let destn_id="shop_details"
		let parent_source_id="bank_account_details"
		let event_code="e_1647345839367"
		let event_params={"caller_name":"svm_from_bank_dtl_list__bfrq_bank_list","event_desc":"BFRQ Bank List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"bank_account_details","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"Y"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"e_1647345839367":{"dt_1304_1665384579126":{"dtt_1304_1665385894443":{"st_ds":{"default":{"uicgc_code":"UICGC_6","event_code":"E_1647345839367","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665385894443","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665396916544","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Shop MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMPS_ID","alias_name":"","mq_id":"MQ_1665396504731","date_format":false},{"column_name":"NPSSMPA_ID","alias_name":"","mq_id":"MQ_1665396504883","date_format":false},{"column_name":"NPSSMPB_ID","alias_name":"","mq_id":"MQ_1665396505027","date_format":false},{"column_name":"SHOP_TYPE","alias_name":"","mq_id":"MQ_1665396505163","date_format":false},{"column_name":"SHOP_NAME","alias_name":"","mq_id":"MQ_1665396505299","date_format":false},{"column_name":"DOOR_NO","alias_name":"","mq_id":"MQ_1665396536661","date_format":false},{"column_name":"STREET","alias_name":"","mq_id":"MQ_1665396536811","date_format":false},{"column_name":"POSTAL_CODE","alias_name":"","mq_id":"MQ_1665396543694","date_format":false},{"column_name":"CITY","alias_name":"","mq_id":"MQ_1665396543843","date_format":false},{"column_name":"COUNTRY","alias_name":"","mq_id":"MQ_1665396543971","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1665396556133","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1665396556267","date_format":false},{"column_name":"SYSTEM_ID","alias_name":"","mq_id":"MQ_1665396556403","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665396556523","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665396556667","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMPS_ID,  NPSSMPA_ID,  NPSSMPB_ID,  SHOP_TYPE,  SHOP_NAME,  DOOR_NO,  STREET,  POSTAL_CODE,  CITY,  COUNTRY,  DTT_CODE,  DT_CODE,  SYSTEM_ID,  STATUS,  PROCESS_STATUS FROM NPSS_MERC_PROXY_SHOPS $WHERE ORDER BY NPSSMPS_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Shop MQ CCD","filter":[{"filter_name":"NPSSMPA_ID","binding_name":"NPSSMPA_ID","binding_value":"","source_name":"MI_LEVEL_NPSSMPA_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""},{"filter_name":"NPSSMPB_ID","binding_name":"NPSSMPB_ID","binding_value":"","source_name":"MI_LEVEL_NPSSMPB_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Shop Type","target_column":"SHOP_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop Name","target_column":"SHOP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "bank ui save"
	bank_ui_save__ve_for_save_actions() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_ui_save"
		let destn_id="bank_ui"
		let parent_source_id=""
		let event_code="e_1654583025382"
		let event_params={"caller_name":"bank_ui_save__ve_for_save_actions","event_desc":"VE for save actions","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"bank_ui_save","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="ve_for_save_actions__st_actions_for_bad,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ve for save actions"
	ve_for_save_actions__st_actions_for_bad(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ve_for_save_actions"
		let destn_id="bank_ui"
		let parent_source_id="bank_ui_save"
		let event_code="e_1654583053068"
		let event_params={"caller_name":"ve_for_save_actions__st_actions_for_bad","event_desc":"ST actions for BAD","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"bank_ui_save","raiseparam":{"reset_selection":"Y","need_clear_value":"Y","no_change_status_on_modify":"N","release_lock":"Y","clear_cache":"ALL"},"parent_event_result":"SUCCESS"}
		let handler_code="save_tran"
		let internals="st_actions_for_bad__info_for_save_actions,"
		let event_data={"bank_ui":{"e_1654583053068":{"dts":{"dt_1304_1665384579126":{"dtts":{"":{"uicgc_code":"UICGC_7","event_code":"E_1654583053068","dt_code":"DT_1304_1665384579126","dtt_code":"","dt_desc":"Merchant DTG","dtt_desc":"NPSS Merc Proxy Address","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[],"get_from_memory":[{"level":"MI_LEVEL","value":"MI_LEVEL_CR_BANK_NAME","tb_data":"Y","column":"BANK_NAME","d3name":"BANK NAME SAVE ACTIONS"},{"level":"SESSION_LEVEL","value":"ROOT_SCODE","tb_data":"Y","column":"PRODUCT_CODE","d3name":"Product Code"}],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={}
		try {
			this.handler.save_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "st actions for bad"
	st_actions_for_bad__info_for_save_actions(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="st_actions_for_bad"
		let destn_id=""
		let parent_source_id="ve_for_save_actions"
		let event_code="e_1654583117508"
		let event_params={"caller_name":"st_actions_for_bad__info_for_save_actions","event_desc":"INFO for save actions","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Merchant Add Bank Account IPP API (Add bank accounts) has been Initiated.","root_source_id":"bank_ui_save","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="info_for_save_actions__re_for_bad_actions,info_for_save_actions__sp_for_info_actons,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "info for save actions"
	info_for_save_actions__re_for_bad_actions() { 
		let Dest_Is_ctrl=true
		
		let source_id="info_for_save_actions"
		let destn_id="bank_account_details"
		let parent_source_id="st_actions_for_bad"
		let event_code="e_1654583336481"
		let event_params={"caller_name":"info_for_save_actions__re_for_bad_actions","event_desc":"RE for BAD actions","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"bank_ui_save","raiseparam":{}}
		let handler_code="refresh_element"
		let internals="re_for_bad_actions__cui_actions_for_sd,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665384579126":{"dtt_1304_1665385495265":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665385495265","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665396790432","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Bank MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMPB_ID","alias_name":"","mq_id":"MQ_1665395413660","date_format":false},{"column_name":"NPSSMPA_ID","alias_name":"","mq_id":"MQ_1665395413796","date_format":false},{"column_name":"BANK_NAME","alias_name":"","mq_id":"MQ_1665395413932","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1665395414068","date_format":false},{"column_name":"ACCOUNT_NO","alias_name":"","mq_id":"MQ_1665395414212","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1665395441822","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1665395441972","date_format":false},{"column_name":"IS_DEFAULT","alias_name":"","mq_id":"MQ_1665395442124","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665395468486","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665395468636","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMPB_ID,  NPSSMPA_ID,  BANK_NAME,  BANK_CODE,  ACCOUNT_NO,  IS_DEFAULT,  DT_CODE,  DTT_CODE,  SYSTEM_ID,  STATUS,  PROCESS_STATUS FROM NPSS_MERC_PROXY_BANKS $WHERE ORDER BY NPSSMPB_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Bank MQ CCD","filter":[{"filter_name":"NPSSMPA_ID","binding_name":"NPSSMPA_ID","binding_value":"","source_name":"MI_LEVEL_NPSSMPA_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank Code","target_column":"BANK_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Bank Name","target_column":"BANK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account No","target_column":"ACCOUNT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.refresh_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "info for save actions"
	info_for_save_actions__sp_for_info_actons(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="info_for_save_actions"
		let destn_id=""
		let parent_source_id="st_actions_for_bad"
		let event_code="e_1654583451931"
		let event_params={"caller_name":"info_for_save_actions__sp_for_info_actons","event_desc":"SP for info actons","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"bank_ui_save","raiseparam":{"profile_code":"BTL_1408_1584359909096"},"parent_event_result":"SUCCESS"}
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

	//Handler for INTERNAL event of "re for bad actions"
	re_for_bad_actions__cui_actions_for_sd() { 
		let Dest_Is_ctrl=true
		
		let source_id="re_for_bad_actions"
		let destn_id="shop_details"
		let parent_source_id="info_for_save_actions"
		let event_code="e_1654583362735"
		let event_params={"caller_name":"re_for_bad_actions__cui_actions_for_sd","event_desc":"CUI actions for SD","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"bank_ui_save","raiseparam":{"need_reset_key_column":"N"}}
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
	navigation_add_account__sp_from_add_account_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add_account"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1647348595624"
		let event_params={"caller_name":"navigation_add_account__sp_from_add_account_btn","event_desc":"SP from Add Account btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add_account","raiseparam":{"profile_code":"BTL_1408_1647347503927"}}
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
	navigation_add_account__he_from_add_acct_btn_to_edit_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add_account"
		let destn_id="bank_ui_edit"
		let parent_source_id=""
		let event_code="e_1647348677906"
		let event_params={"caller_name":"navigation_add_account__he_from_add_acct_btn_to_edit_btn","event_desc":"HE from Add Acct btn to Edit btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add_account","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	navigation_add_account__he_from_add_acct_btn_to_delete_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add_account"
		let destn_id="bank_ui_delete"
		let parent_source_id=""
		let event_code="e_1647348710033"
		let event_params={"caller_name":"navigation_add_account__he_from_add_acct_btn_to_delete_btn","event_desc":"HE from Add Acct btn to Delete btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add_account","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	navigation_add_account__se_from_add_acct_btn_to_clear_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add_account"
		let destn_id="bank_ui_clear"
		let parent_source_id=""
		let event_code="e_1647348738034"
		let event_params={"caller_name":"navigation_add_account__se_from_add_acct_btn_to_clear_btn","event_desc":"SE from Add Acct btn to Clear btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add_account","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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
	navigation_add_account__se_from_add_acct_btn_to_save_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add_account"
		let destn_id="bank_ui_save"
		let parent_source_id=""
		let event_code="e_1647348769817"
		let event_params={"caller_name":"navigation_add_account__se_from_add_acct_btn_to_save_btn","event_desc":"SE from Add Acct btn to Save btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add_account","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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
	navigation_add_account__cu_from_add_acct_btn_to__bank_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add_account"
		let destn_id="bank_ui"
		let parent_source_id=""
		let event_code="e_1647348819291"
		let event_params={"caller_name":"navigation_add_account__cu_from_add_acct_btn_to__bank_ui","event_desc":"CU from Add Acct btn to  Bank UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add_account","raiseparam":{"need_reset_key_column":"N"}}
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
	navigation_add_account__ee_from_add_acct_btn_to_bank_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add_account"
		let destn_id="bank_ui"
		let parent_source_id=""
		let event_code="e_1647348935452"
		let event_params={"caller_name":"navigation_add_account__ee_from_add_acct_btn_to_bank_ui","event_desc":"EE from Add Acct btn to Bank UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add_account","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation add account"
	navigation_add_account__bvfm_for_id__bank_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add_account"
		let destn_id="npss_merc_proxy_banks_npssmpa_id"
		let parent_source_id=""
		let event_code="e_1665394321279"
		let event_params={"destn_comp_id":"bank_ui","destn_ctrl_id":"npssmpa_id","caller_name":"navigation_add_account__bvfm_for_id__bank_ui","event_desc":"BVFM for ID","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add_account","raiseparam":{}}
		let handler_code="bind_value_from_memory"
		let internals=""
		let event_data={"control":{"e_1665394321279":{"dts":{"dt_1304_1665384579126":{"dtts":{"dtt_1304_1665385495265":{"uicgc_code":"CONTROL","event_code":"E_1665394321279","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665385495265","dtt_desc":"NPSS Merc Proxy Banks","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[],"get_from_memory":[{"level":"MI_LEVEL","value":"MI_LEVEL_NPSSMPA_ID","tb_data":"Y","column":"NPSSMPA_ID","d3name":""}],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={}
		try {
			this.handler.bind_value_from_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation add shop"
	navigation_add_shop__cu_from_add_shop_btn_to_shop_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add_shop"
		let destn_id="shop_ui"
		let parent_source_id=""
		let event_code="e_1647349052535"
		let event_params={"caller_name":"navigation_add_shop__cu_from_add_shop_btn_to_shop_ui","event_desc":"CU from Add Shop btn to Shop ui","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add_shop","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation add shop"
	navigation_add_shop__ee_from_add_shop_btn_to_shop_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add_shop"
		let destn_id="shop_ui"
		let parent_source_id=""
		let event_code="e_1647349070417"
		let event_params={"caller_name":"navigation_add_shop__ee_from_add_shop_btn_to_shop_ui","event_desc":"EE from Add Shop btn to Shop ui","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add_shop","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation add shop"
	navigation_add_shop__sp_from_add_shop_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add_shop"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1647349098419"
		let event_params={"caller_name":"navigation_add_shop__sp_from_add_shop_btn","event_desc":"SP from Add Shop btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add_shop","raiseparam":{"profile_code":"BTL_1408_1647347637688"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation add shop"
	navigation_add_shop__se_from_add_shop_btn_to_save_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add_shop"
		let destn_id="shop_ui_save"
		let parent_source_id=""
		let event_code="e_1647349136690"
		let event_params={"caller_name":"navigation_add_shop__se_from_add_shop_btn_to_save_btn","event_desc":"SE from Add Shop btn to Save btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add_shop","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation add shop"
	navigation_add_shop__he_from_add_shop_btn_to_edit_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add_shop"
		let destn_id="shop_ui_edit"
		let parent_source_id=""
		let event_code="e_1647349161175"
		let event_params={"caller_name":"navigation_add_shop__he_from_add_shop_btn_to_edit_btn","event_desc":"HE from Add Shop btn to Edit btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add_shop","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation add shop"
	navigation_add_shop__he_from_add_shop_btn_to_delete_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add_shop"
		let destn_id="shop_ui_delete"
		let parent_source_id=""
		let event_code="e_1647349180891"
		let event_params={"caller_name":"navigation_add_shop__he_from_add_shop_btn_to_delete_btn","event_desc":"HE from Add Shop btn to Delete btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add_shop","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation add shop"
	navigation_add_shop__se_from_add_shop_btn_to_clear_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add_shop"
		let destn_id="shop_ui_clear"
		let parent_source_id=""
		let event_code="e_1647349213452"
		let event_params={"caller_name":"navigation_add_shop__se_from_add_shop_btn_to_clear_btn","event_desc":"SE from Add Shop btn to Clear btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add_shop","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "shop details"
	shop_details__he_from_shop_dtl_to_save() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_details"
		let destn_id="shop_ui_save"
		let parent_source_id=""
		let event_code="e_1647351430786"
		let event_params={"caller_name":"shop_details__he_from_shop_dtl_to_save","event_desc":"HE from Shop Dtl to Save","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "shop details"
	shop_details__se_from_shop_dtl() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_details"
		let destn_id="shop_ui_edit"
		let parent_source_id=""
		let event_code="e_1647351457748"
		let event_params={"caller_name":"shop_details__se_from_shop_dtl","event_desc":"SE from Shop Dtl","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "shop details"
	shop_details__he_from_shop_dtl_to_clear_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_details"
		let destn_id="shop_ui_clear"
		let parent_source_id=""
		let event_code="e_1647351501515"
		let event_params={"caller_name":"shop_details__he_from_shop_dtl_to_clear_btn","event_desc":"HE from shop Dtl to Clear btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "shop details"
	shop_details__se_from_shop_dtl_to_delete_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_details"
		let destn_id="shop_ui_delete"
		let parent_source_id=""
		let event_code="e_1647351535150"
		let event_params={"caller_name":"shop_details__se_from_shop_dtl_to_delete_btn","event_desc":"SE from shop dtl to Delete btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "shop details"
	shop_details__ssr_from_shop_dtl_to_shop_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_details"
		let destn_id="shop_ui"
		let parent_source_id=""
		let event_code="e_1647406274732"
		let event_params={"caller_name":"shop_details__ssr_from_shop_dtl_to_shop_ui","event_desc":"SSR from Shop Dtl to Shop UI","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop_details","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "shop details"
	shop_details__he_from_shop_dtl_to_view_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_details"
		let destn_id="navigation_view"
		let parent_source_id=""
		let event_code="e_1647412212401"
		let event_params={"caller_name":"shop_details__he_from_shop_dtl_to_view_btn","event_desc":"HE from Shop Dtl to View btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "shop details"
	shop_details__he_from_shop_dtl_to_add_shop_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_details"
		let destn_id="navigation_add_shop"
		let parent_source_id=""
		let event_code="e_1647413438551"
		let event_params={"caller_name":"shop_details__he_from_shop_dtl_to_add_shop_btn","event_desc":"HE from Shop Dtl to Add Shop btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "shop details"
	shop_details__se_from_shop_dtl_to_enable_shop_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_details"
		let destn_id="navigation_enable_shop"
		let parent_source_id=""
		let event_code="e_1652160232327"
		let event_params={"caller_name":"shop_details__se_from_shop_dtl_to_enable_shop_btn","event_desc":"SE from Shop Dtl to Enable Shop Btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"DISABLED","hide_column":"STATUS","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "shop details"
	shop_details__se_from_shop_dtl_to_disable_shop_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_details"
		let destn_id="navigation_disable_shop"
		let parent_source_id=""
		let event_code="e_1652160259092"
		let event_params={"caller_name":"shop_details__se_from_shop_dtl_to_disable_shop_btn","event_desc":"SE from Shop dtl to Disable shop btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"CREATED","hide_column":"STATUS","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "shop details"
	shop_details__he_from_shop_dtl_to_add_acct_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_details"
		let destn_id="navigation_add_account"
		let parent_source_id=""
		let event_code="e_1652160655259"
		let event_params={"caller_name":"shop_details__he_from_shop_dtl_to_add_acct_btn","event_desc":"HE from Shop Dtl to Add Acct btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "shop details"
	shop_details__he_from_shop_dtl_to_unblock_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_details"
		let destn_id="navigation_unblock"
		let parent_source_id=""
		let event_code="e_1652160678039"
		let event_params={"caller_name":"shop_details__he_from_shop_dtl_to_unblock_btn","event_desc":"HE from Shop Dtl to Unblock btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "shop details"
	shop_details__he_from_shop_dtl_to_block_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_details"
		let destn_id="navigation_block"
		let parent_source_id=""
		let event_code="e_1652181869406"
		let event_params={"caller_name":"shop_details__he_from_shop_dtl_to_block_btn","event_desc":"HE from Shop dtl to Block btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "shop details"
	shop_details__he_from_shop_dtl_to_unenroll_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_details"
		let destn_id="navigation_unenroll_merchant"
		let parent_source_id=""
		let event_code="e_1652277645209"
		let event_params={"caller_name":"shop_details__he_from_shop_dtl_to_unenroll_btn","event_desc":"HE from Shop Dtl to Unenroll Btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "shop details"
	shop_details__he_from_shop_dtl_to_enroll_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_details"
		let destn_id="navigation_enroll_merchant"
		let parent_source_id=""
		let event_code="e_1652341641515"
		let event_params={"caller_name":"shop_details__he_from_shop_dtl_to_enroll_btn","event_desc":"HE from Shop Dtl to Enroll Btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "shop details"
	shop_details__brfq_by_select_on_cdl() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_details"
		let destn_id="cash_desk_list"
		let parent_source_id=""
		let event_code="e_1654770726071"
		let event_params={"caller_name":"shop_details__brfq_by_select_on_cdl","event_desc":"BRFQ by select on CDL","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop_details","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_by_select_on_cdl__sfr_for_cdl,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665384579126":{"dtt_1304_1665386514812":{"st_ds":{"default":{"uicgc_code":"UICGC_12","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665386514812","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665396875897","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Add Cash Desk MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CASH_DESK_ID","alias_name":"","mq_id":"MQ_1665395925508","date_format":false},{"column_name":"CASH_DESK_NAME","alias_name":"","mq_id":"MQ_1665395925660","date_format":false},{"column_name":"NPSSMPS_ID","alias_name":"","mq_id":"MQ_1665395925788","date_format":false},{"column_name":"SHOP_NAME","alias_name":"","mq_id":"MQ_1665395925932","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMPCD_ID,  NPSSMPS_ID,  CASH_DESK_ID,  CASH_DESK_NAME,  DT_CODE,  DTT_CODE,  TENANT_ID,  SHOP_NAME FROM  (SELECT NPSSMPC.NPSSMPCD_ID,    NPSSMPC.NPSSMPS_ID,    NPSSMPC.CASH_DESK_ID,    NPSSMPC.CASH_DESK_NAME,    NPSSMPC.DT_CODE,    NPSSMPC.DTT_CODE,    NPSSMPC.TENANT_ID,    NPSSMPS.SHOP_NAME   FROM NPSS_MERC_PROXY_CASHDESK NPSSMPC   INNER JOIN NPSS_MERC_PROXY_SHOPS NPSSMPS ON NPSSMPC.NPSSMPS_ID = NPSSMPS.NPSSMPS_ID)V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Add Cash Desk MQ CCD","filter":[],"databinding":[{"header":"Shop Name","target_column":"SHOP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cash Desk ID","target_column":"CASH_DESK_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cash Desk Name","target_column":"CASH_DESK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "shop details"
	shop_details__svm_for_shop() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_details"
		let destn_id="shop_details"
		let parent_source_id=""
		let event_code="e_1654774758744"
		let event_params={"caller_name":"shop_details__svm_for_shop","event_desc":"SVM for shop","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop_details","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={"shop_details":{"e_1654774758744":{"dts":{"dt_1304_1665384579126":{"dtts":{"":{"uicgc_code":"UICGC_6","event_code":"E_1654774758744","dt_code":"DT_1304_1665384579126","dtt_code":"","dt_desc":"Merchant DTG","dtt_desc":"NPSS Merc Proxy Address","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"NPSSMPS_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSSMPS_ID","setd3name":"NPSSMPS_ID"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "shop details"
	shop_details__se_for_sd() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_details"
		let destn_id="navigation_add_cash_desk"
		let parent_source_id=""
		let event_code="e_1654785288564"
		let event_params={"caller_name":"shop_details__se_for_sd","event_desc":"SE for SD","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for INTERNAL event of "brfq by select on cdl"
	brfq_by_select_on_cdl__sfr_for_cdl() { 
		let Dest_Is_ctrl=true
		
		let source_id="brfq_by_select_on_cdl"
		let destn_id="cash_desk_list"
		let parent_source_id="shop_details"
		let event_code="e_1654770751792"
		let event_params={"caller_name":"brfq_by_select_on_cdl__sfr_for_cdl","event_desc":"SFR for CDL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"shop_details","raiseparam":{}}
		let handler_code="select_first_record"
		let internals="sfr_for_cdl__se_for_cdl,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665384579126":{"dtt_1304_1665386514812":{"st_ds":{"default":{"uicgc_code":"UICGC_12","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665386514812","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665396875897","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Add Cash Desk MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CASH_DESK_ID","alias_name":"","mq_id":"MQ_1665395925508","date_format":false},{"column_name":"CASH_DESK_NAME","alias_name":"","mq_id":"MQ_1665395925660","date_format":false},{"column_name":"NPSSMPS_ID","alias_name":"","mq_id":"MQ_1665395925788","date_format":false},{"column_name":"SHOP_NAME","alias_name":"","mq_id":"MQ_1665395925932","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMPCD_ID,  NPSSMPS_ID,  CASH_DESK_ID,  CASH_DESK_NAME,  DT_CODE,  DTT_CODE,  TENANT_ID,  SHOP_NAME FROM  (SELECT NPSSMPC.NPSSMPCD_ID,    NPSSMPC.NPSSMPS_ID,    NPSSMPC.CASH_DESK_ID,    NPSSMPC.CASH_DESK_NAME,    NPSSMPC.DT_CODE,    NPSSMPC.DTT_CODE,    NPSSMPC.TENANT_ID,    NPSSMPS.SHOP_NAME   FROM NPSS_MERC_PROXY_CASHDESK NPSSMPC   INNER JOIN NPSS_MERC_PROXY_SHOPS NPSSMPS ON NPSSMPC.NPSSMPS_ID = NPSSMPS.NPSSMPS_ID)V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Add Cash Desk MQ CCD","filter":[],"databinding":[{"header":"Shop Name","target_column":"SHOP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cash Desk ID","target_column":"CASH_DESK_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cash Desk Name","target_column":"CASH_DESK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "sfr for cdl"
	sfr_for_cdl__se_for_cdl() { 
		let Dest_Is_ctrl=true
		
		let source_id="sfr_for_cdl"
		let destn_id="navigation_view_cash_desk"
		let parent_source_id="brfq_by_select_on_cdl"
		let event_code="e_1654770787862"
		let event_params={"caller_name":"sfr_for_cdl__se_for_cdl","event_desc":"SE for CDL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"shop_details","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for MENU_ITEM_CLICK event of "bank account details view"
	bank_account_details_view__sp_for_bank_details() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details_view"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1647350481975"
		let event_params={"source_comp_id":"bank_account_details","source_ctrl_id":"view","caller_name":"bank_account_details_view__sp_for_bank_details","event_desc":"SP for bank details","event_type":"MENU_ITEM_CLICK","caller_event_context":"SUCCESS","root_source_id":"bank_account_details_view","raiseparam":{"profile_code":"BTL_1408_1647347503927"}}
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
	bank_account_details_view__bt_from_bad_view_to_bui() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details_view"
		let destn_id="bank_ui"
		let parent_source_id=""
		let event_code="e_1647350645565"
		let event_params={"source_comp_id":"bank_account_details","source_ctrl_id":"view","caller_name":"bank_account_details_view__bt_from_bad_view_to_bui","event_desc":"BT from BAD View to BUI","event_type":"MENU_ITEM_CLICK","caller_event_context":"SUCCESS","root_source_id":"bank_account_details_view","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":"","change_detection":""}}
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
	bank_account_details_view__de_from_bad_view_to_bui() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_account_details_view"
		let destn_id="bank_ui"
		let parent_source_id=""
		let event_code="e_1647350692493"
		let event_params={"source_comp_id":"bank_account_details","source_ctrl_id":"view","caller_name":"bank_account_details_view__de_from_bad_view_to_bui","event_desc":"DE from BAD View to BUI","event_type":"MENU_ITEM_CLICK","caller_event_context":"SUCCESS","root_source_id":"bank_account_details_view","raiseparam":{}}
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

	//Handler for MENU_ITEM_CLICK event of "shop details view"
	shop_details_view__sp_from_view_context_menu() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_details_view"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1647351276363"
		let event_params={"source_comp_id":"shop_details","source_ctrl_id":"view","caller_name":"shop_details_view__sp_from_view_context_menu","event_desc":"SP from View Context Menu","event_type":"MENU_ITEM_CLICK","caller_event_context":"SUCCESS","root_source_id":"shop_details_view","raiseparam":{"profile_code":"BTL_1408_1647347637688"}}
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

	//Handler for MENU_ITEM_CLICK event of "shop details view"
	shop_details_view__bt_from_view_icon_to_shop_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_details_view"
		let destn_id="shop_ui"
		let parent_source_id=""
		let event_code="e_1647351339933"
		let event_params={"source_comp_id":"shop_details","source_ctrl_id":"view","caller_name":"shop_details_view__bt_from_view_icon_to_shop_ui","event_desc":"BT from View icon to Shop UI","event_type":"MENU_ITEM_CLICK","caller_event_context":"SUCCESS","root_source_id":"shop_details_view","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":"","change_detection":""}}
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

	//Handler for MENU_ITEM_CLICK event of "shop details view"
	shop_details_view__de_from_view_icon_to_shop_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_details_view"
		let destn_id="shop_ui"
		let parent_source_id=""
		let event_code="e_1647351380357"
		let event_params={"source_comp_id":"shop_details","source_ctrl_id":"view","caller_name":"shop_details_view__de_from_view_icon_to_shop_ui","event_desc":"DE from View icon to Shop UI","event_type":"MENU_ITEM_CLICK","caller_event_context":"SUCCESS","root_source_id":"shop_details_view","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "bank ui edit"
	bank_ui_edit__he_from_bui_edit() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_ui_edit"
		let destn_id="bank_ui_edit"
		let parent_source_id=""
		let event_code="e_1647351836876"
		let event_params={"caller_name":"bank_ui_edit__he_from_bui_edit","event_desc":"HE from BUI Edit","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"bank_ui_edit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "bank ui edit"
	bank_ui_edit__se_from_bui_edit_to_bui_save() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_ui_edit"
		let destn_id="bank_ui_save"
		let parent_source_id=""
		let event_code="e_1647351866792"
		let event_params={"caller_name":"bank_ui_edit__se_from_bui_edit_to_bui_save","event_desc":"SE from BUI Edit to BUI Save","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"bank_ui_edit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "bank ui edit"
	bank_ui_edit__he_from_bui_edit_to_bui_clear() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_ui_edit"
		let destn_id="bank_ui_clear"
		let parent_source_id=""
		let event_code="e_1647351900812"
		let event_params={"caller_name":"bank_ui_edit__he_from_bui_edit_to_bui_clear","event_desc":"HE from BUI Edit to BUI Clear","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"bank_ui_edit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "bank ui edit"
	bank_ui_edit__ee_from_bui_edit_to_bui() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_ui_edit"
		let destn_id="bank_ui"
		let parent_source_id=""
		let event_code="e_1647351922334"
		let event_params={"caller_name":"bank_ui_edit__ee_from_bui_edit_to_bui","event_desc":"EE from BUI Edit to BUI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"bank_ui_edit","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "bank ui delete"
	bank_ui_delete__cm_from_bui_delete() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_ui_delete"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1647352098496"
		let event_params={"caller_name":"bank_ui_delete__cm_from_bui_delete","event_desc":"CM from BUI Delete","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","message_text":"Are you sure that you want to permanently delete the selected record?","root_source_id":"bank_ui_delete","raiseparam":{"conf_msg":""}}
		let handler_code="conf_msg"
		let internals="cm_from_bui_delete__dt_from_bui_delete_cm_to_bad,"
		let event_data={}
		let data_source={}
		try {
			this.handler.conf_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cm from bui delete"
	cm_from_bui_delete__dt_from_bui_delete_cm_to_bad(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="YES"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cm_from_bui_delete"
		let destn_id="bank_account_details"
		let parent_source_id="bank_ui_delete"
		let event_code="e_1647352128709"
		let event_params={"caller_name":"cm_from_bui_delete__dt_from_bui_delete_cm_to_bad","event_desc":"DT from BUI Delete CM to BAD","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"bank_ui_delete","raiseparam":{"conf_msg":"","info_msg":"","clear_cache":"ALL"},"parent_event_result":"YES"}
		let handler_code="delete_tran"
		let internals="dt_from_bui_delete_cm_to_bad__im_from_bad_dt,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665384579126":{"dtt_1304_1665385495265":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665385495265","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665396790432","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Bank MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMPB_ID","alias_name":"","mq_id":"MQ_1665395413660","date_format":false},{"column_name":"NPSSMPA_ID","alias_name":"","mq_id":"MQ_1665395413796","date_format":false},{"column_name":"BANK_NAME","alias_name":"","mq_id":"MQ_1665395413932","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1665395414068","date_format":false},{"column_name":"ACCOUNT_NO","alias_name":"","mq_id":"MQ_1665395414212","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1665395441822","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1665395441972","date_format":false},{"column_name":"IS_DEFAULT","alias_name":"","mq_id":"MQ_1665395442124","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665395468486","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665395468636","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMPB_ID,  NPSSMPA_ID,  BANK_NAME,  BANK_CODE,  ACCOUNT_NO,  IS_DEFAULT,  DT_CODE,  DTT_CODE,  SYSTEM_ID,  STATUS,  PROCESS_STATUS FROM NPSS_MERC_PROXY_BANKS $WHERE ORDER BY NPSSMPB_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Bank MQ CCD","filter":[{"filter_name":"NPSSMPA_ID","binding_name":"NPSSMPA_ID","binding_value":"","source_name":"MI_LEVEL_NPSSMPA_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank Code","target_column":"BANK_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Bank Name","target_column":"BANK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account No","target_column":"ACCOUNT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.delete_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "dt from bui delete cm to bad"
	dt_from_bui_delete_cm_to_bad__im_from_bad_dt(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="dt_from_bui_delete_cm_to_bad"
		let destn_id=""
		let parent_source_id="cm_from_bui_delete"
		let event_code="e_1652330374064"
		let event_params={"caller_name":"dt_from_bui_delete_cm_to_bad__im_from_bad_dt","event_desc":"IM from BAD DT","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Merchant Remove Bank Account IPP API (Remove bank accounts) has been Initiated.","root_source_id":"bank_ui_delete","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="im_from_bad_dt__rs_from_bad_im_success,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "im from bad dt"
	im_from_bad_dt__rs_from_bad_im_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="im_from_bad_dt"
		let destn_id=""
		let parent_source_id="dt_from_bui_delete_cm_to_bad"
		let event_code="e_1652330397368"
		let event_params={"caller_name":"im_from_bad_dt__rs_from_bad_im_success","event_desc":"RS from BAD IM Success","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"bank_ui_delete","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "bank ui clear"
	bank_ui_clear__cui_from_bui_clear_to_bui() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_ui_clear"
		let destn_id="bank_ui"
		let parent_source_id=""
		let event_code="e_1647352325410"
		let event_params={"caller_name":"bank_ui_clear__cui_from_bui_clear_to_bui","event_desc":"CUI from BUI Clear to BUI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"bank_ui_clear","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "bank ui back"
	bank_ui_back__rs_from_bui_back_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="bank_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1647352529442"
		let event_params={"caller_name":"bank_ui_back__rs_from_bui_back_btn","event_desc":"RS from BUI Back Btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"bank_ui_back","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "shop ui back"
	shop_ui_back__rs_from_back_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1647352552894"
		let event_params={"caller_name":"shop_ui_back__rs_from_back_btn","event_desc":"RS from Back btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"shop_ui_back","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "shop ui save"
	shop_ui_save__ve_from_save_btn_to_shop_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_ui_save"
		let destn_id="shop_ui"
		let parent_source_id=""
		let event_code="e_1647404548058"
		let event_params={"caller_name":"shop_ui_save__ve_from_save_btn_to_shop_ui","event_desc":"VE from Save btn to Shop UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"shop_ui_save","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="ve_from_save_btn_to_shop_ui__st_for_shop_ui,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ve from save btn to shop ui"
	ve_from_save_btn_to_shop_ui__st_for_shop_ui(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ve_from_save_btn_to_shop_ui"
		let destn_id="shop_ui"
		let parent_source_id="shop_ui_save"
		let event_code="e_1647404555957"
		let event_params={"caller_name":"ve_from_save_btn_to_shop_ui__st_for_shop_ui","event_desc":"ST for shop UI","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"shop_ui_save","raiseparam":{"reset_selection":"Y","need_clear_value":"Y","no_change_status_on_modify":"N","release_lock":"Y","clear_cache":"ALL"},"parent_event_result":"SUCCESS"}
		let handler_code="save_tran"
		let internals="st_for_shop_ui__re_from_st_success,st_for_shop_ui__im_from_save_btn_success,"
		let event_data={"shop_ui":{"e_1647404555957":{"dts":{"dt_1304_1665384579126":{"dtts":{"":{"uicgc_code":"UICGC_8","event_code":"E_1647404555957","dt_code":"DT_1304_1665384579126","dtt_code":"","dt_desc":"Merchant DTG","dtt_desc":"NPSS Merc Proxy Address","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[],"get_from_memory":[{"level":"MI_LEVEL","value":"MI_LEVEL_NPSSMPA_ID","tb_data":"Y","column":"NPSSMPA_ID","d3name":"NPSSMPA_ID"},{"level":"MI_LEVEL","value":"MI_LEVEL_NPSSMPB_ID","tb_data":"Y","column":"NPSSMPB_ID","d3name":"NPSSMPB_ID"}],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={}
		try {
			this.handler.save_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "st for shop ui"
	st_for_shop_ui__re_from_st_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="st_for_shop_ui"
		let destn_id="shop_details"
		let parent_source_id="ve_from_save_btn_to_shop_ui"
		let event_code="e_1647404594377"
		let event_params={"caller_name":"st_for_shop_ui__re_from_st_success","event_desc":"RE from ST Success","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"shop_ui_save","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for INTERNAL event of "st for shop ui"
	st_for_shop_ui__im_from_save_btn_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="st_for_shop_ui"
		let destn_id=""
		let parent_source_id="ve_from_save_btn_to_shop_ui"
		let event_code="e_1647404642971"
		let event_params={"caller_name":"st_for_shop_ui__im_from_save_btn_success","event_desc":"IM from Save btn success","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Merchant Add New Shop IPP API (Add new Shops) has been Initiated.","root_source_id":"shop_ui_save","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="im_from_save_btn_success__sp_from_im_success,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "im from save btn success"
	im_from_save_btn_success__sp_from_im_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="im_from_save_btn_success"
		let destn_id=""
		let parent_source_id="st_for_shop_ui"
		let event_code="e_1647404667122"
		let event_params={"caller_name":"im_from_save_btn_success__sp_from_im_success","event_desc":"SP from IM Success","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"shop_ui_save","raiseparam":{"profile_code":"BTL_1408_1584359909096"},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "shop ui edit"
	shop_ui_edit__he_from_edit_btn_self() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_ui_edit"
		let destn_id="shop_ui_edit"
		let parent_source_id=""
		let event_code="e_1647404860785"
		let event_params={"caller_name":"shop_ui_edit__he_from_edit_btn_self","event_desc":"HE from Edit btn self","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"shop_ui_edit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "shop ui edit"
	shop_ui_edit__ee_from_edit_btn_to_shop_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_ui_edit"
		let destn_id="shop_ui"
		let parent_source_id=""
		let event_code="e_1647404884702"
		let event_params={"caller_name":"shop_ui_edit__ee_from_edit_btn_to_shop_ui","event_desc":"EE from Edit btn to Shop UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"shop_ui_edit","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "shop ui edit"
	shop_ui_edit__he_from_edit_btn_to_clear_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_ui_edit"
		let destn_id="shop_ui_clear"
		let parent_source_id=""
		let event_code="e_1647404910235"
		let event_params={"caller_name":"shop_ui_edit__he_from_edit_btn_to_clear_btn","event_desc":"HE from Edit btn to Clear btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"shop_ui_edit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "shop ui edit"
	shop_ui_edit__se_from_edit_btn_to_save_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_ui_edit"
		let destn_id="shop_ui_save"
		let parent_source_id=""
		let event_code="e_1647404938173"
		let event_params={"caller_name":"shop_ui_edit__se_from_edit_btn_to_save_btn","event_desc":"SE from Edit btn to Save Btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"shop_ui_edit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "shop ui delete"
	shop_ui_delete__cm_from_delete_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_ui_delete"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1647404974081"
		let event_params={"caller_name":"shop_ui_delete__cm_from_delete_btn","event_desc":"CM from Delete btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","message_text":"Are you sure that you want to permanently delete the selected record?","root_source_id":"shop_ui_delete","raiseparam":{"conf_msg":""}}
		let handler_code="conf_msg"
		let internals="cm_from_delete_btn__dt_from_shop_dtl,"
		let event_data={}
		let data_source={}
		try {
			this.handler.conf_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cm from delete btn"
	cm_from_delete_btn__dt_from_shop_dtl(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="YES"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cm_from_delete_btn"
		let destn_id="shop_details"
		let parent_source_id="shop_ui_delete"
		let event_code="e_1647404998216"
		let event_params={"caller_name":"cm_from_delete_btn__dt_from_shop_dtl","event_desc":"DT from shop dtl","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"shop_ui_delete","raiseparam":{"conf_msg":"","info_msg":"","clear_cache":"Y"},"parent_event_result":"YES"}
		let handler_code="delete_tran"
		let internals="dt_from_shop_dtl__im_from_dt,"
		let event_data={}
		let data_source={}
		try {
			this.handler.delete_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "dt from shop dtl"
	dt_from_shop_dtl__im_from_dt(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="dt_from_shop_dtl"
		let destn_id=""
		let parent_source_id="cm_from_delete_btn"
		let event_code="e_1652330515102"
		let event_params={"caller_name":"dt_from_shop_dtl__im_from_dt","event_desc":"IM from DT","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Merchant Delete Shop IPP API (Delete Shop) has been Initiated.","root_source_id":"shop_ui_delete","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="im_from_dt__rs_from_im_success,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "im from dt"
	im_from_dt__rs_from_im_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="im_from_dt"
		let destn_id=""
		let parent_source_id="dt_from_shop_dtl"
		let event_code="e_1652330531742"
		let event_params={"caller_name":"im_from_dt__rs_from_im_success","event_desc":"RS from IM Success","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"shop_ui_delete","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "shop ui clear"
	shop_ui_clear__cu_from_clear_btn_to_shop_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_ui_clear"
		let destn_id="shop_ui"
		let parent_source_id=""
		let event_code="e_1647405104235"
		let event_params={"caller_name":"shop_ui_clear__cu_from_clear_btn_to_shop_ui","event_desc":"CU from Clear btn to Shop UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"shop_ui_clear","raiseparam":{"need_reset_key_column":"N"}}
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
	navigation_unblock__ctuwf_from_unblock_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_unblock"
		let destn_id="bank_account_details"
		let parent_source_id=""
		let event_code="e_1652188577713"
		let event_params={"caller_name":"navigation_unblock__ctuwf_from_unblock_btn","event_desc":"CTUWF from Unblock btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_unblock","raiseparam":{"need_comment":"N","need_scheduler":"N","release_lock":"N"}}
		let handler_code="change_tran_using_wf"
		let internals="ctuwf_from_unblock_btn__im_from_unblock_ctuwf,"
		let event_data={}
		let data_source={"e_1652188577713":{"dt_1304_1665384579126":{"dtt_1304_1665385495265":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"E_1652188577713","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665385495265","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"","ds_final":"DS_1665386555661","final_state":{"ts":[{"binding_name":"STATUS","binding_value":"CREATED","data_type":"TEXT"},{"binding_name":"PROCESS_STATUS","binding_value":"CREATED","data_type":"TEXT"}],"trn":[]},"property_json":null,"system_type":"DEFAULT","eq_info":{},"listing_mode":"","locking_mode":"","locking_parameter":"","filter":[],"databinding":[]}}}}},"default":{"dt_1304_1665384579126":{"dtt_1304_1665385495265":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665385495265","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665396790432","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Bank MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMPB_ID","alias_name":"","mq_id":"MQ_1665395413660","date_format":false},{"column_name":"NPSSMPA_ID","alias_name":"","mq_id":"MQ_1665395413796","date_format":false},{"column_name":"BANK_NAME","alias_name":"","mq_id":"MQ_1665395413932","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1665395414068","date_format":false},{"column_name":"ACCOUNT_NO","alias_name":"","mq_id":"MQ_1665395414212","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1665395441822","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1665395441972","date_format":false},{"column_name":"IS_DEFAULT","alias_name":"","mq_id":"MQ_1665395442124","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665395468486","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665395468636","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMPB_ID,  NPSSMPA_ID,  BANK_NAME,  BANK_CODE,  ACCOUNT_NO,  IS_DEFAULT,  DT_CODE,  DTT_CODE,  SYSTEM_ID,  STATUS,  PROCESS_STATUS FROM NPSS_MERC_PROXY_BANKS $WHERE ORDER BY NPSSMPB_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Bank MQ CCD","filter":[{"filter_name":"NPSSMPA_ID","binding_name":"NPSSMPA_ID","binding_value":"","source_name":"MI_LEVEL_NPSSMPA_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank Code","target_column":"BANK_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Bank Name","target_column":"BANK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account No","target_column":"ACCOUNT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.change_tran_using_wf(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ctuwf from unblock btn"
	ctuwf_from_unblock_btn__im_from_unblock_ctuwf(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ctuwf_from_unblock_btn"
		let destn_id=""
		let parent_source_id="navigation_unblock"
		let event_code="e_1652188599594"
		let event_params={"caller_name":"ctuwf_from_unblock_btn__im_from_unblock_ctuwf","event_desc":"IM from Unblock CTUWF","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Merchant Unblock Bank Account IPP API (Block/unblock bank accounts) has been Initiated.","root_source_id":"navigation_unblock","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="im_from_unblock_ctuwf__rs_from_unblock_im_success,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "im from unblock ctuwf"
	im_from_unblock_ctuwf__rs_from_unblock_im_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="im_from_unblock_ctuwf"
		let destn_id=""
		let parent_source_id="ctuwf_from_unblock_btn"
		let event_code="e_1652188622912"
		let event_params={"caller_name":"im_from_unblock_ctuwf__rs_from_unblock_im_success","event_desc":"RS from Unblock IM Success","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_unblock","raiseparam":{},"parent_event_result":"SUCCESS"}
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
	navigation_block__ctuwf_from_block_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_block"
		let destn_id="bank_account_details"
		let parent_source_id=""
		let event_code="e_1652188460502"
		let event_params={"caller_name":"navigation_block__ctuwf_from_block_btn","event_desc":"CTUWF From Block btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_block","raiseparam":{"need_comment":"N","need_scheduler":"N","release_lock":"N"}}
		let handler_code="change_tran_using_wf"
		let internals="ctuwf_from_block_btn__im_from_block_btn_to_bad_list_ctuwf_success,"
		let event_data={}
		let data_source={"e_1652188460502":{"dt_1304_1665384579126":{"dtt_1304_1665385495265":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"E_1652188460502","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665385495265","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"","ds_final":"DS_1665386535662","final_state":{"ts":[{"binding_name":"STATUS","binding_value":"BLOCKED","data_type":"TEXT"},{"binding_name":"PROCESS_STATUS","binding_value":"BLOCKED","data_type":"TEXT"}],"trn":[]},"property_json":null,"system_type":"DEFAULT","eq_info":{},"listing_mode":"","locking_mode":"","locking_parameter":"","filter":[],"databinding":[]}}}}},"default":{"dt_1304_1665384579126":{"dtt_1304_1665385495265":{"st_ds":{"default":{"uicgc_code":"UICGC_5","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665385495265","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665396790432","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Bank MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMPB_ID","alias_name":"","mq_id":"MQ_1665395413660","date_format":false},{"column_name":"NPSSMPA_ID","alias_name":"","mq_id":"MQ_1665395413796","date_format":false},{"column_name":"BANK_NAME","alias_name":"","mq_id":"MQ_1665395413932","date_format":false},{"column_name":"BANK_CODE","alias_name":"","mq_id":"MQ_1665395414068","date_format":false},{"column_name":"ACCOUNT_NO","alias_name":"","mq_id":"MQ_1665395414212","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1665395441822","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1665395441972","date_format":false},{"column_name":"IS_DEFAULT","alias_name":"","mq_id":"MQ_1665395442124","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665395468486","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665395468636","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMPB_ID,  NPSSMPA_ID,  BANK_NAME,  BANK_CODE,  ACCOUNT_NO,  IS_DEFAULT,  DT_CODE,  DTT_CODE,  SYSTEM_ID,  STATUS,  PROCESS_STATUS FROM NPSS_MERC_PROXY_BANKS $WHERE ORDER BY NPSSMPB_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Bank MQ CCD","filter":[{"filter_name":"NPSSMPA_ID","binding_name":"NPSSMPA_ID","binding_value":"","source_name":"MI_LEVEL_NPSSMPA_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank Code","target_column":"BANK_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Bank Name","target_column":"BANK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account No","target_column":"ACCOUNT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.change_tran_using_wf(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ctuwf from block btn"
	ctuwf_from_block_btn__im_from_block_btn_to_bad_list_ctuwf_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ctuwf_from_block_btn"
		let destn_id=""
		let parent_source_id="navigation_block"
		let event_code="e_1652188492484"
		let event_params={"caller_name":"ctuwf_from_block_btn__im_from_block_btn_to_bad_list_ctuwf_success","event_desc":"IM from Block btn to BAD list CTUWF Success","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Merchant Block Bank Account IPP API (Block/unblock bank accounts) has been Initiated.","root_source_id":"navigation_block","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="im_from_block_btn_to_bad_list_ctuwf_success__rs_from_block_im_success,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "im from block btn to bad list ctuwf success"
	im_from_block_btn_to_bad_list_ctuwf_success__rs_from_block_im_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="im_from_block_btn_to_bad_list_ctuwf_success"
		let destn_id=""
		let parent_source_id="ctuwf_from_block_btn"
		let event_code="e_1652188541021"
		let event_params={"caller_name":"im_from_block_btn_to_bad_list_ctuwf_success__rs_from_block_im_success","event_desc":"RS from Block IM Success","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_block","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation enable shop"
	navigation_enable_shop__ctuwf_from_enable_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_enable_shop"
		let destn_id="shop_details"
		let parent_source_id=""
		let event_code="e_1652188665176"
		let event_params={"caller_name":"navigation_enable_shop__ctuwf_from_enable_btn","event_desc":"CTUWF from Enable Btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_enable_shop","raiseparam":{"need_comment":"N","need_scheduler":"N","release_lock":"N"}}
		let handler_code="change_tran_using_wf"
		let internals="ctuwf_from_enable_btn__im_from_enable_shop_ctuwf_success,"
		let event_data={}
		let data_source={"e_1652188665176":{"dt_1304_1665384579126":{"dtt_1304_1665385894443":{"st_ds":{"default":{"uicgc_code":"UICGC_6","event_code":"E_1652188665176","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665385894443","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"","ds_final":"DS_1665386639957","final_state":{"ts":[{"binding_name":"STATUS","binding_value":"CREATED","data_type":"TEXT"},{"binding_name":"PROCESS_STATUS","binding_value":"CREATED","data_type":"TEXT"}],"trn":[]},"property_json":null,"system_type":"DEFAULT","eq_info":{},"listing_mode":"","locking_mode":"","locking_parameter":"","filter":[],"databinding":[]}}}}}}
		try {
			this.handler.change_tran_using_wf(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ctuwf from enable btn"
	ctuwf_from_enable_btn__im_from_enable_shop_ctuwf_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ctuwf_from_enable_btn"
		let destn_id=""
		let parent_source_id="navigation_enable_shop"
		let event_code="e_1652188694110"
		let event_params={"caller_name":"ctuwf_from_enable_btn__im_from_enable_shop_ctuwf_success","event_desc":"IM from Enable shop CTUWF Success","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Merchant Enable Shop IPP API (Disable Shop) has been Initiated.","root_source_id":"navigation_enable_shop","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="im_from_enable_shop_ctuwf_success__rs_from_enable_shop_im_success,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "im from enable shop ctuwf success"
	im_from_enable_shop_ctuwf_success__rs_from_enable_shop_im_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="im_from_enable_shop_ctuwf_success"
		let destn_id=""
		let parent_source_id="ctuwf_from_enable_btn"
		let event_code="e_1652188783171"
		let event_params={"caller_name":"im_from_enable_shop_ctuwf_success__rs_from_enable_shop_im_success","event_desc":"RS from Enable Shop IM Success","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_enable_shop","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation disable shop"
	navigation_disable_shop__ctuwf_from_disable_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_disable_shop"
		let destn_id="shop_details"
		let parent_source_id=""
		let event_code="e_1652188816153"
		let event_params={"caller_name":"navigation_disable_shop__ctuwf_from_disable_btn","event_desc":"CTUWF from Disable Btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_disable_shop","raiseparam":{"need_comment":"N","need_scheduler":"N","release_lock":"N"}}
		let handler_code="change_tran_using_wf"
		let internals="ctuwf_from_disable_btn__im_from_disable_shop_ctuwf_success,"
		let event_data={}
		let data_source={"e_1652188816153":{"dt_1304_1665384579126":{"dtt_1304_1665385894443":{"st_ds":{"default":{"uicgc_code":"UICGC_6","event_code":"E_1652188816153","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665385894443","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"","ds_final":"DS_1665386624005","final_state":{"ts":[{"binding_name":"STATUS","binding_value":"DISABLED","data_type":"TEXT"},{"binding_name":"PROCESS_STATUS","binding_value":"DISABLED","data_type":"TEXT"}],"trn":[]},"property_json":null,"system_type":"DEFAULT","eq_info":{},"listing_mode":"","locking_mode":"","locking_parameter":"","filter":[],"databinding":[]}}}}}}
		try {
			this.handler.change_tran_using_wf(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ctuwf from disable btn"
	ctuwf_from_disable_btn__im_from_disable_shop_ctuwf_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ctuwf_from_disable_btn"
		let destn_id=""
		let parent_source_id="navigation_disable_shop"
		let event_code="e_1652188836520"
		let event_params={"caller_name":"ctuwf_from_disable_btn__im_from_disable_shop_ctuwf_success","event_desc":"IM from Disable Shop CTUWF Success","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Merchant Disable Shop IPP API (Disable Shop) has been Initiated.","root_source_id":"navigation_disable_shop","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="im_from_disable_shop_ctuwf_success__rs_from_disable_shop_im_success,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "im from disable shop ctuwf success"
	im_from_disable_shop_ctuwf_success__rs_from_disable_shop_im_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="im_from_disable_shop_ctuwf_success"
		let destn_id=""
		let parent_source_id="ctuwf_from_disable_btn"
		let event_code="e_1652188868138"
		let event_params={"caller_name":"im_from_disable_shop_ctuwf_success__rs_from_disable_shop_im_success","event_desc":"RS from Disable Shop IM Success","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_disable_shop","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation unenroll merchant"
	navigation_unenroll_merchant__ctuwf_from_merchant_dtl() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_unenroll_merchant"
		let destn_id="merchant_details"
		let parent_source_id=""
		let event_code="e_1652277070462"
		let event_params={"caller_name":"navigation_unenroll_merchant__ctuwf_from_merchant_dtl","event_desc":"CTUWF from Merchant Dtl","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_unenroll_merchant","raiseparam":{"need_comment":"N","need_scheduler":"N","release_lock":"N"}}
		let handler_code="change_tran_using_wf"
		let internals="ctuwf_from_merchant_dtl__im_from_ctuwf_unenroll_btn,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665384579126":{"dtt_1304_1665384653050":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665384653050","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665396893087","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Address MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMPA_ID","alias_name":"","mq_id":"MQ_1665396162148","date_format":false},{"column_name":"CATEGORY","alias_name":"","mq_id":"MQ_1665396162292","date_format":false},{"column_name":"MERC_CATEGORY_CODE","alias_name":"","mq_id":"MQ_1665396162427","date_format":false},{"column_name":"MERCHANT","alias_name":"","mq_id":"MQ_1665396162556","date_format":false},{"column_name":"DENOMINATION","alias_name":"","mq_id":"MQ_1665396162692","date_format":false},{"column_name":"PROFESSIONAL","alias_name":"","mq_id":"MQ_1665396190510","date_format":false},{"column_name":"MERCHANT_TAG","alias_name":"","mq_id":"MQ_1665396190644","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1665396205318","date_format":false},{"column_name":"USER_ID","alias_name":"","mq_id":"MQ_1665396205468","date_format":false},{"column_name":"PARTICIPANT_CODE","alias_name":"","mq_id":"MQ_1665396205620","date_format":false},{"column_name":"POI","alias_name":"","mq_id":"MQ_1665396226181","date_format":false},{"column_name":"VAT_ID","alias_name":"","mq_id":"MQ_1665396226315","date_format":false},{"column_name":"IPP_ID","alias_name":"","mq_id":"MQ_1665396226459","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1665396245421","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1665396245563","date_format":false},{"column_name":"PHONE_NO","alias_name":"","mq_id":"MQ_1665396264405","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665396264555","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665396264715","date_format":false},{"column_name":"EMAIL_ID","alias_name":"","mq_id":"MQ_1665396282655","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMPA_ID,  CATEGORY,  MERC_CATEGORY_CODE,  MERCHANT,  DENOMINATION,  PROFESSIONAL,  MERCHANT_TAG,  IBAN,  USER_ID,  PARTICIPANT_CODE,  POI,  VAT_ID,  IPP_ID,  PHONE_NO,  DTT_CODE,  DT_CODE,  SYSTEM_ID,  STATUS,  PROCESS_STATUS,  EMAIL_ID FROM NPSS_MERC_PROXY_ADDRESS $WHERE ORDER BY NPSSMPA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Address MQ CCD","filter":[],"databinding":[{"header":"Type","target_column":"CATEGORY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant","target_column":"MERCHANT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Professional","target_column":"PROFESSIONAL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Tag","target_column":"MERCHANT_TAG","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email ID","target_column":"EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Participant Code","target_column":"PARTICIPANT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Phone No","target_column":"PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}},"e_1652277070462":{"dt_1304_1665384579126":{"dtt_1304_1665384653050":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"E_1652277070462","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665384653050","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"","ds_final":"DS_1665386593133","final_state":{"ts":[{"binding_name":"STATUS","binding_value":"UNENROLED","data_type":"TEXT"},{"binding_name":"PROCESS_STATUS","binding_value":"UNENROLED","data_type":"TEXT"}],"trn":[]},"property_json":null,"system_type":"DEFAULT","eq_info":{},"listing_mode":"","locking_mode":"","locking_parameter":"","filter":[],"databinding":[]}}}}}}
		try {
			this.handler.change_tran_using_wf(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ctuwf from merchant dtl"
	ctuwf_from_merchant_dtl__im_from_ctuwf_unenroll_btn(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ctuwf_from_merchant_dtl"
		let destn_id=""
		let parent_source_id="navigation_unenroll_merchant"
		let event_code="e_1652277102003"
		let event_params={"caller_name":"ctuwf_from_merchant_dtl__im_from_ctuwf_unenroll_btn","event_desc":"IM from CTUWF Unenroll btn","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Merchant Unenrolment IPP API (Unenrolment) has been Initiated.","root_source_id":"navigation_unenroll_merchant","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="im_from_ctuwf_unenroll_btn__rs_from_im_unenroll_btn,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "im from ctuwf unenroll btn"
	im_from_ctuwf_unenroll_btn__rs_from_im_unenroll_btn(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="im_from_ctuwf_unenroll_btn"
		let destn_id=""
		let parent_source_id="ctuwf_from_merchant_dtl"
		let event_code="e_1652277158021"
		let event_params={"caller_name":"im_from_ctuwf_unenroll_btn__rs_from_im_unenroll_btn","event_desc":"RS from IM Unenroll btn","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_unenroll_merchant","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for MENU_ITEM_CLICK event of "merchant details modify phone no"
	merchant_details_modify_phone_no__bt_from_phone_no_icon() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_details_modify_phone_no"
		let destn_id="phone_no_ui"
		let parent_source_id=""
		let event_code="e_1652340001850"
		let event_params={"source_comp_id":"merchant_details","source_ctrl_id":"modify_phone_no","caller_name":"merchant_details_modify_phone_no__bt_from_phone_no_icon","event_desc":"BT from phone no icon","event_type":"MENU_ITEM_CLICK","caller_event_context":"SUCCESS","root_source_id":"merchant_details_modify_phone_no","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":"","change_detection":""}}
		let handler_code="bind_tran"
		let internals="bt_from_phone_no_icon__spap_from_phno_ui_bt,"
		let event_data={}
		let data_source={}
		try {
			this.handler.bind_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "bt from phone no icon"
	bt_from_phone_no_icon__spap_from_phno_ui_bt(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="bt_from_phone_no_icon"
		let destn_id=""
		let parent_source_id="merchant_details_modify_phone_no"
		let event_code="e_1652340085697"
		let event_params={"source_comp_id":"merchant_details","source_ctrl_id":"modify_phone_no","caller_name":"bt_from_phone_no_icon__spap_from_phno_ui_bt","event_desc":"SPAP from Phno UI BT","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"merchant_details_modify_phone_no","raiseparam":{"popup_category":"profile","variable":"p_phone_no_layout__spap_from_phno_ui_bt","selector":"p_phone_no_layout","profile_code":"BTL_1408_1652339595819","window_title":"Modify Phone No","window_height":200,"window_width":"500px","window_close_icon":"Y","eventdes":"spap_from_phno_ui_bt","eventcode":"E_1652340085697"},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "phone no ui save"
	phone_no_ui_save__ve_for_mobile_no_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="phone_no_ui_save"
		let destn_id="phone_no_ui"
		let parent_source_id=""
		let event_code="e_1652340355524"
		let event_params={"caller_name":"phone_no_ui_save__ve_for_mobile_no_ui","event_desc":"VE for mobile no UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"phone_no_ui_save","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="ve_for_mobile_no_ui__st_for_mobile_no,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ve for mobile no ui"
	ve_for_mobile_no_ui__st_for_mobile_no(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ve_for_mobile_no_ui"
		let destn_id="phone_no_ui"
		let parent_source_id="phone_no_ui_save"
		let event_code="e_1652340368945"
		let event_params={"caller_name":"ve_for_mobile_no_ui__st_for_mobile_no","event_desc":"ST for mobile no","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"phone_no_ui_save","raiseparam":{"reset_selection":"Y","need_clear_value":"Y","no_change_status_on_modify":"N","release_lock":"Y","clear_cache":"Y"},"parent_event_result":"SUCCESS"}
		let handler_code="save_tran"
		let internals="st_for_mobile_no__info_msg_for_mobile_no,"
		let event_data={}
		let data_source={}
		try {
			this.handler.save_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "st for mobile no"
	st_for_mobile_no__info_msg_for_mobile_no(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="st_for_mobile_no"
		let destn_id=""
		let parent_source_id="ve_for_mobile_no_ui"
		let event_code="e_1652340409277"
		let event_params={"caller_name":"st_for_mobile_no__info_msg_for_mobile_no","event_desc":"Info msg for mobile no","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Merchant Modify Phone No IPP API (Modify Phone No) has been Initiated.","root_source_id":"phone_no_ui_save","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="info_msg_for_mobile_no__rs_for_mobile_no,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "info msg for mobile no"
	info_msg_for_mobile_no__rs_for_mobile_no(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="info_msg_for_mobile_no"
		let destn_id=""
		let parent_source_id="st_for_mobile_no"
		let event_code="e_1652340529379"
		let event_params={"caller_name":"info_msg_for_mobile_no__rs_for_mobile_no","event_desc":"RS for mobile no","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"phone_no_ui_save","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for MENU_ITEM_CLICK event of "merchant details modify personal data"
	merchant_details_modify_personal_data__bt_from_menu() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant_details_modify_personal_data"
		let destn_id="personal_data_ui"
		let parent_source_id=""
		let event_code="e_1652340776261"
		let event_params={"source_comp_id":"merchant_details","source_ctrl_id":"modify_personal_data","caller_name":"merchant_details_modify_personal_data__bt_from_menu","event_desc":"BT from menu","event_type":"MENU_ITEM_CLICK","caller_event_context":"SUCCESS","root_source_id":"merchant_details_modify_personal_data","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":"","change_detection":""}}
		let handler_code="bind_tran"
		let internals="bt_from_menu__spap_from_psnldata_bt,"
		let event_data={}
		let data_source={}
		try {
			this.handler.bind_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "bt from menu"
	bt_from_menu__spap_from_psnldata_bt(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="bt_from_menu"
		let destn_id=""
		let parent_source_id="merchant_details_modify_personal_data"
		let event_code="e_1652340837167"
		let event_params={"source_comp_id":"merchant_details","source_ctrl_id":"modify_personal_data","caller_name":"bt_from_menu__spap_from_psnldata_bt","event_desc":"SPAP from PsnlData BT","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"merchant_details_modify_personal_data","raiseparam":{"popup_category":"profile","variable":"p_personal_date_layout__spap_from_psnldata_bt","selector":"p_personal_date_layout","profile_code":"BTL_1408_1652339615994","window_title":"Modify Personal Data","window_height":200,"window_width":"500px","window_close_icon":"Y","eventdes":"spap_from_psnldata_bt","eventcode":"E_1652340837167"},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "personal data ui save"
	personal_data_ui_save__ve_from_data_save() { 
		let Dest_Is_ctrl=true
		
		let source_id="personal_data_ui_save"
		let destn_id="personal_data_ui"
		let parent_source_id=""
		let event_code="e_1652340940299"
		let event_params={"caller_name":"personal_data_ui_save__ve_from_data_save","event_desc":"VE from data save","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"personal_data_ui_save","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="ve_from_data_save__st_from_data_ui,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ve from data save"
	ve_from_data_save__st_from_data_ui(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ve_from_data_save"
		let destn_id="personal_data_ui"
		let parent_source_id="personal_data_ui_save"
		let event_code="e_1652340971654"
		let event_params={"caller_name":"ve_from_data_save__st_from_data_ui","event_desc":"ST from data UI","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"personal_data_ui_save","raiseparam":{"reset_selection":"Y","need_clear_value":"Y","no_change_status_on_modify":"N","release_lock":"Y","clear_cache":"Y"},"parent_event_result":"SUCCESS"}
		let handler_code="save_tran"
		let internals="st_from_data_ui__im_from_st_success,"
		let event_data={}
		let data_source={}
		try {
			this.handler.save_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "st from data ui"
	st_from_data_ui__im_from_st_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="st_from_data_ui"
		let destn_id=""
		let parent_source_id="ve_from_data_save"
		let event_code="e_1652341005375"
		let event_params={"caller_name":"st_from_data_ui__im_from_st_success","event_desc":"IM from ST Success","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Merchant Modify Personal Data IPP API (Modify personal data) has been Initiated.","root_source_id":"personal_data_ui_save","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="im_from_st_success__rs_from_save_im_success,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "im from st success"
	im_from_st_success__rs_from_save_im_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="im_from_st_success"
		let destn_id=""
		let parent_source_id="st_from_data_ui"
		let event_code="e_1652341047497"
		let event_params={"caller_name":"im_from_st_success__rs_from_save_im_success","event_desc":"RS from Save IM Success","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"personal_data_ui_save","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation add cash desk"
	navigation_add_cash_desk__sp_for_acd_actions() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add_cash_desk"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1654770231986"
		let event_params={"caller_name":"navigation_add_cash_desk__sp_for_acd_actions","event_desc":"SP for ACD actions","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add_cash_desk","raiseparam":{"profile_code":"BTL_1408_1654769264526"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation add cash desk"
	navigation_add_cash_desk__he_for_delete() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add_cash_desk"
		let destn_id="add_desk_ui_delete"
		let parent_source_id=""
		let event_code="e_1654778297946"
		let event_params={"caller_name":"navigation_add_cash_desk__he_for_delete","event_desc":"HE for delete","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add_cash_desk","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation add cash desk"
	navigation_add_cash_desk__cu_from_add_cash_desk_btn_to_add_desk_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add_cash_desk"
		let destn_id="add_desk_ui"
		let parent_source_id=""
		let event_code="e_1654836258878"
		let event_params={"caller_name":"navigation_add_cash_desk__cu_from_add_cash_desk_btn_to_add_desk_ui","event_desc":"CU from Add Cash Desk btn to Add Desk UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add_cash_desk","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "add desk ui save"
	add_desk_ui_save__ve_for_acd_actions() { 
		let Dest_Is_ctrl=true
		
		let source_id="add_desk_ui_save"
		let destn_id="add_desk_ui"
		let parent_source_id=""
		let event_code="e_1654770365963"
		let event_params={"caller_name":"add_desk_ui_save__ve_for_acd_actions","event_desc":"VE for ACD actions","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"add_desk_ui_save","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="ve_for_acd_actions__st_from_adui,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ve for acd actions"
	ve_for_acd_actions__st_from_adui(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ve_for_acd_actions"
		let destn_id="add_desk_ui"
		let parent_source_id="add_desk_ui_save"
		let event_code="e_1654770458417"
		let event_params={"caller_name":"ve_for_acd_actions__st_from_adui","event_desc":"ST from ADUI","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"add_desk_ui_save","raiseparam":{"reset_selection":"Y","need_clear_value":"Y","no_change_status_on_modify":"N","release_lock":"Y","clear_cache":"Y"},"parent_event_result":"SUCCESS"}
		let handler_code="save_tran"
		let internals="st_from_adui__info_for_ad,"
		let event_data={"add_desk_ui":{"e_1654770458417":{"dts":{"dt_1304_1665384579126":{"dtts":{"":{"uicgc_code":"UICGC_11","event_code":"E_1654770458417","dt_code":"DT_1304_1665384579126","dtt_code":"","dt_desc":"Merchant DTG","dtt_desc":"NPSS Merc Proxy Address","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[],"get_from_memory":[{"level":"MI_LEVEL","value":"MI_LEVEL_NPSSMPS_ID","tb_data":"Y","column":"NPSSMPS_ID","d3name":"NPSSMPS_ID"}],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={}
		try {
			this.handler.save_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "st from adui"
	st_from_adui__info_for_ad(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="st_from_adui"
		let destn_id=""
		let parent_source_id="ve_for_acd_actions"
		let event_code="e_1654770517558"
		let event_params={"caller_name":"st_from_adui__info_for_ad","event_desc":"INFO for AD","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Cash desk has been added successfully","root_source_id":"add_desk_ui_save","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="info_for_ad__re_for_ad,info_for_ad__sp_from_ad_im,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "info for ad"
	info_for_ad__re_for_ad(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="info_for_ad"
		let destn_id="shop_details"
		let parent_source_id="st_from_adui"
		let event_code="e_1654770554556"
		let event_params={"caller_name":"info_for_ad__re_for_ad","event_desc":"RE FOR AD","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"add_desk_ui_save","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="refresh_element"
		let internals="re_for_ad__sfr_from_sdl_brfq,"
		let event_data={}
		let data_source={}
		try {
			this.handler.refresh_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "info for ad"
	info_for_ad__sp_from_ad_im(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="info_for_ad"
		let destn_id=""
		let parent_source_id="st_from_adui"
		let event_code="e_1654786053748"
		let event_params={"caller_name":"info_for_ad__sp_from_ad_im","event_desc":"SP from AD IM","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"add_desk_ui_save","raiseparam":{"profile_code":"BTL_1408_1584359909096"},"parent_event_result":"SUCCESS"}
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

	//Handler for INTERNAL event of "re for ad"
	re_for_ad__sfr_from_sdl_brfq(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="re_for_ad"
		let destn_id="shop_details"
		let parent_source_id="info_for_ad"
		let event_code="e_1655097399984"
		let event_params={"caller_name":"re_for_ad__sfr_from_sdl_brfq","event_desc":"SFR from SDL BRFQ","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"add_desk_ui_save","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation view cash desk"
	navigation_view_cash_desk__se_from_vcd_btn_to_delete_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_cash_desk"
		let destn_id="add_desk_ui_delete"
		let parent_source_id=""
		let event_code="e_1654777557107"
		let event_params={"caller_name":"navigation_view_cash_desk__se_from_vcd_btn_to_delete_btn","event_desc":"SE from VCD btn to Delete btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_cash_desk","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view cash desk"
	navigation_view_cash_desk__de_from_vcd_btn_to_add_desk_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_cash_desk"
		let destn_id="add_desk_ui"
		let parent_source_id=""
		let event_code="e_1654777634881"
		let event_params={"caller_name":"navigation_view_cash_desk__de_from_vcd_btn_to_add_desk_ui","event_desc":"DE from VCD btn to Add Desk UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_cash_desk","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view cash desk"
	navigation_view_cash_desk__sp_from_view_cash_desk_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view_cash_desk"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1654779146971"
		let event_params={"caller_name":"navigation_view_cash_desk__sp_from_view_cash_desk_btn","event_desc":"SP from View Cash Desk Btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view_cash_desk","raiseparam":{"profile_code":"BTL_1408_1654769306534"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "add desk ui clear"
	add_desk_ui_clear__cui_fromm_adui_clear_to_ad_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="add_desk_ui_clear"
		let destn_id="add_desk_ui"
		let parent_source_id=""
		let event_code="e_1654771016114"
		let event_params={"caller_name":"add_desk_ui_clear__cui_fromm_adui_clear_to_ad_ui","event_desc":"CUI fromm ADUI Clear to AD UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"add_desk_ui_clear","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "add desk ui back"
	add_desk_ui_back__rs_for_back_actions() { 
		let Dest_Is_ctrl=true
		
		let source_id="add_desk_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1654771060929"
		let event_params={"caller_name":"add_desk_ui_back__rs_for_back_actions","event_desc":"RS for Back actions","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"add_desk_ui_back","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "add desk ui delete"
	add_desk_ui_delete__cm_from_adui_delete_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="add_desk_ui_delete"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1654777364698"
		let event_params={"caller_name":"add_desk_ui_delete__cm_from_adui_delete_btn","event_desc":"CM from ADUI Delete Btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","message_text":"Are you sure that you want to permanently delete the selected record?","root_source_id":"add_desk_ui_delete","raiseparam":{"conf_msg":""}}
		let handler_code="conf_msg"
		let internals="cm_from_adui_delete_btn__dt_from_adui_cm_to_cdl,"
		let event_data={}
		let data_source={}
		try {
			this.handler.conf_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "add desk ui delete"
	add_desk_ui_delete__cui_feom_adui_delete_btn_to_adui() { 
		let Dest_Is_ctrl=true
		
		let source_id="add_desk_ui_delete"
		let destn_id="add_desk_ui"
		let parent_source_id=""
		let event_code="e_1654785574319"
		let event_params={"caller_name":"add_desk_ui_delete__cui_feom_adui_delete_btn_to_adui","event_desc":"CUI feom ADUI Delete btn to ADUI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"add_desk_ui_delete","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for INTERNAL event of "cm from adui delete btn"
	cm_from_adui_delete_btn__dt_from_adui_cm_to_cdl(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="YES"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cm_from_adui_delete_btn"
		let destn_id="cash_desk_list"
		let parent_source_id="add_desk_ui_delete"
		let event_code="e_1654777387072"
		let event_params={"caller_name":"cm_from_adui_delete_btn__dt_from_adui_cm_to_cdl","event_desc":"DT from ADUI CM to CDL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"add_desk_ui_delete","raiseparam":{"conf_msg":"","info_msg":"","clear_cache":"Y"},"parent_event_result":"YES"}
		let handler_code="delete_tran"
		let internals="dt_from_adui_cm_to_cdl__im_from_cdl_dt,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665384579126":{"dtt_1304_1665386514812":{"st_ds":{"default":{"uicgc_code":"UICGC_12","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665386514812","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665396875897","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Add Cash Desk MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CASH_DESK_ID","alias_name":"","mq_id":"MQ_1665395925508","date_format":false},{"column_name":"CASH_DESK_NAME","alias_name":"","mq_id":"MQ_1665395925660","date_format":false},{"column_name":"NPSSMPS_ID","alias_name":"","mq_id":"MQ_1665395925788","date_format":false},{"column_name":"SHOP_NAME","alias_name":"","mq_id":"MQ_1665395925932","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMPCD_ID,  NPSSMPS_ID,  CASH_DESK_ID,  CASH_DESK_NAME,  DT_CODE,  DTT_CODE,  TENANT_ID,  SHOP_NAME FROM  (SELECT NPSSMPC.NPSSMPCD_ID,    NPSSMPC.NPSSMPS_ID,    NPSSMPC.CASH_DESK_ID,    NPSSMPC.CASH_DESK_NAME,    NPSSMPC.DT_CODE,    NPSSMPC.DTT_CODE,    NPSSMPC.TENANT_ID,    NPSSMPS.SHOP_NAME   FROM NPSS_MERC_PROXY_CASHDESK NPSSMPC   INNER JOIN NPSS_MERC_PROXY_SHOPS NPSSMPS ON NPSSMPC.NPSSMPS_ID = NPSSMPS.NPSSMPS_ID)V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Add Cash Desk MQ CCD","filter":[],"databinding":[{"header":"Shop Name","target_column":"SHOP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cash Desk ID","target_column":"CASH_DESK_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cash Desk Name","target_column":"CASH_DESK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.delete_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "dt from adui cm to cdl"
	dt_from_adui_cm_to_cdl__im_from_cdl_dt(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="dt_from_adui_cm_to_cdl"
		let destn_id=""
		let parent_source_id="cm_from_adui_delete_btn"
		let event_code="e_1654777402390"
		let event_params={"caller_name":"dt_from_adui_cm_to_cdl__im_from_cdl_dt","event_desc":"IM from CDL DT","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Data has been deleted successfully.","root_source_id":"add_desk_ui_delete","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="im_from_cdl_dt__re_for_cdl,im_from_cdl_dt__sp_from_cdl_im,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "im from cdl dt"
	im_from_cdl_dt__re_for_cdl(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="im_from_cdl_dt"
		let destn_id="cash_desk_list"
		let parent_source_id="dt_from_adui_cm_to_cdl"
		let event_code="e_1654777428475"
		let event_params={"caller_name":"im_from_cdl_dt__re_for_cdl","event_desc":"RE for CDL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"add_desk_ui_delete","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="refresh_element"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665384579126":{"dtt_1304_1665386514812":{"st_ds":{"default":{"uicgc_code":"UICGC_12","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665386514812","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665396875897","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Add Cash Desk MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CASH_DESK_ID","alias_name":"","mq_id":"MQ_1665395925508","date_format":false},{"column_name":"CASH_DESK_NAME","alias_name":"","mq_id":"MQ_1665395925660","date_format":false},{"column_name":"NPSSMPS_ID","alias_name":"","mq_id":"MQ_1665395925788","date_format":false},{"column_name":"SHOP_NAME","alias_name":"","mq_id":"MQ_1665395925932","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMPCD_ID,  NPSSMPS_ID,  CASH_DESK_ID,  CASH_DESK_NAME,  DT_CODE,  DTT_CODE,  TENANT_ID,  SHOP_NAME FROM  (SELECT NPSSMPC.NPSSMPCD_ID,    NPSSMPC.NPSSMPS_ID,    NPSSMPC.CASH_DESK_ID,    NPSSMPC.CASH_DESK_NAME,    NPSSMPC.DT_CODE,    NPSSMPC.DTT_CODE,    NPSSMPC.TENANT_ID,    NPSSMPS.SHOP_NAME   FROM NPSS_MERC_PROXY_CASHDESK NPSSMPC   INNER JOIN NPSS_MERC_PROXY_SHOPS NPSSMPS ON NPSSMPC.NPSSMPS_ID = NPSSMPS.NPSSMPS_ID)V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Add Cash Desk MQ CCD","filter":[],"databinding":[{"header":"Shop Name","target_column":"SHOP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cash Desk ID","target_column":"CASH_DESK_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cash Desk Name","target_column":"CASH_DESK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.refresh_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "im from cdl dt"
	im_from_cdl_dt__sp_from_cdl_im() { 
		let Dest_Is_ctrl=true
		
		let source_id="im_from_cdl_dt"
		let destn_id=""
		let parent_source_id="dt_from_adui_cm_to_cdl"
		let event_code="e_1654836210595"
		let event_params={"caller_name":"im_from_cdl_dt__sp_from_cdl_im","event_desc":"SP from CDL IM","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"add_desk_ui_delete","raiseparam":{"profile_code":"BTL_1408_1584359909096"}}
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

	//Handler for SELECTION_CHANGED event of "cash desk list"
	cash_desk_list__ee_from_cdl_to_adui() { 
		let Dest_Is_ctrl=true
		
		let source_id="cash_desk_list"
		let destn_id="add_desk_ui"
		let parent_source_id=""
		let event_code="e_1654777816156"
		let event_params={"caller_name":"cash_desk_list__ee_from_cdl_to_adui","event_desc":"EE from CDL to ADUI","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"cash_desk_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "cash desk list"
	cash_desk_list__bt_adl_to_adui() { 
		let Dest_Is_ctrl=true
		
		let source_id="cash_desk_list"
		let destn_id="add_desk_ui"
		let parent_source_id=""
		let event_code="e_1654782625608"
		let event_params={"caller_name":"cash_desk_list__bt_adl_to_adui","event_desc":"BT ADL to ADUI","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"cash_desk_list","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":"","change_detection":""}}
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

	//Handler for SELECTION_CHANGED event of "npss merc proxy banks bank code"
	npss_merc_proxy_banks_bank_code__svtm_for_bank_code__bank_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="npss_merc_proxy_banks_bank_code"
		let destn_id="npss_merc_proxy_banks_bank_code"
		let parent_source_id=""
		let event_code="e_1665394175696"
		let event_params={"source_comp_id":"bank_ui","source_ctrl_id":"bank_code","destn_comp_id":"bank_ui","destn_ctrl_id":"bank_code","caller_name":"npss_merc_proxy_banks_bank_code__svtm_for_bank_code__bank_ui","event_desc":"SVTM for Bank code","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"npss_merc_proxy_banks~uicgc_7~ui~df_1304_1665385550758~3","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={"control":{"e_1665394175696":{"dts":{"dt_1304_1665384579126":{"dtts":{"dtt_1304_1665385495265":{"uicgc_code":"CONTROL","event_code":"E_1665394175696","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665385495265","dtt_desc":"NPSS Merc Proxy Banks","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"S_DESCRIPTION","level":"MI_LEVEL","name":"MI_LEVEL_CR_BANK_NAME","setd3name":""}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation trigger btn"
	navigation_trigger_btn__he_for_id__bank_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_trigger_btn"
		let destn_id="npss_merc_proxy_banks_npssmpa_id"
		let parent_source_id=""
		let event_code="e_1665394269491"
		let event_params={"destn_comp_id":"bank_ui","destn_ctrl_id":"npssmpa_id","caller_name":"navigation_trigger_btn__he_for_id__bank_ui","event_desc":"HE for ID","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_trigger_btn","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "npss merc proxy address ui category"
	npss_merc_proxy_address_ui_category__shc_for_type__merchant_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="npss_merc_proxy_address_ui_category"
		let destn_id="merchant_ui"
		let parent_source_id=""
		let event_code="e_1665394546153"
		let event_params={"source_comp_id":"merchant_ui","source_ctrl_id":"category","caller_name":"npss_merc_proxy_address_ui_category__shc_for_type__merchant_ui","event_desc":"SHC for Type","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"npss_merc_proxy_address_ui~uicgc_3~ui~df_1304_1665384730214~1","raiseparam":{}}
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
