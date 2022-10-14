/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26440 
Modified By     : Admin 
Modified Date   : 2022-Oct-14 11:16 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_customer_request_to_pay
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'

@Component({
	selector: 's_customer_request_to_pay',
	templateUrl: './s_customer_request_to_pay.component.html',
	styleUrls: ['./s_customer_request_to_pay.component.css'],
	providers:[torus_cs_show_hideService]
})
    
// Start of class 
export class s_customer_request_to_payComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_customer_request_to_pay"
	wftpa_id : string = "WFT_NPSS_P_1304_1665472185586_0"
	cg_code : string = "CG_1408_1652366314635"
	key_column : any = {"dtt_1304_1665384533560":"NPSSCPA_ID","dtt_1304_1665385314469":"NPSSCPB_ID","dtt_1304_1665385772257":"NPSSCT_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_pacs008_layout"
	uicgc_1 : string = "payment_form"
	uicgc_2 : string = "payment_form_action"
	uicgc_3 : string = "transactions"
	uicgc_4 : string = "payment_tabview"
	uicgc_5 : string = "dynamic_search"
	uicgc_6 : string = "history_search"
	uicgc_7 : string = "cw_eftc_main_profile"
	uicgc_8 : string = "transaction_pivot"
	uicgc_9 : string = "upload_action"
	uicgc_10 : string = "payment_edit_form"
	uicgc_11 : string = "failure_transactions"
	uicgc_13 : string = "dashboard_search"
	uicgc_15 : string = "failure_reason"
	uicgc_17 : string = "transaction_pivot_header"
	uicgc_18 : string = "approval_pending_list"
	uicgc_19 : string = "navigation_ui"
	uicgc_20 : string = "transaction_details_view"
	uicgc_21 : string = "ipsp_error_widget"
	uicgc_22 : string = "tree"
	uicgc_23 : string = "transaction_detail"
	uicgc_24 : string = "pacs008_ui"
	uicgc_25 : string = "pacs002_ui"
	key_events : any = {}
	btl_1408_1665482241931 : string = "p_pacs008_layout"
	btl_1408_1665482093814 : string = "p_pacs002_layout_"
	btl_1408_1664944837564 : string = "p_history_layout"
	btl_1408_1647259814376 : string = "p_vertical_details_layout"
	btl_1408_1646928037828 : string = "p_approval_pending_layout"
	btl_1408_1635240499383 : string = "p_edit_layout"
	btl_1408_1635227610229 : string = "p_pivot_layout"
	btl_1408_1634880929213 : string = "p_main_layout"
	btl_1408_1634880047100 : string = "p_failure_list_layout"
	btl_1408_1634824504003 : string = "p_form_layout"
	forms : any = ["uicgc_1","uicgc_24","uicgc_25","uicgc_6","uicgc_19","uicgc_10","uicgc_17","uicgc_9","uicgc_13","uicgc_2"]
	p_edit_layout__spap_for_view_failure_details_showpopup : boolean = false
	p_vertical_details_layout__spap_for_view_tran_details_showpopup : boolean = false
	p_pacs008_layout__spap_for_pacs008_showpopup : boolean = false
	p_pacs002_layout___spap_for_view_pacs002_showpopup : boolean = false
	payment_form : any = {}
	payment_form_tbc1 : any = {}
	payment_form_tbc_controls : any = {}
	payment_form_tbc_hide : any = {}
	payment_form_action : any = {}
	payment_form_action_back : any = {}
	payment_form_action_confirm : any = {}
	payment_form_action_reject : any = {}
	payment_form_action_response : any = {}
	payment_form_action_verify_recipient_iban : any = {}
	payment_form_action_confirm_payment : any = {}
	payment_form_action_verify_sender_balance : any = {}
	payment_form_action_verify_sender_iban : any = {}
	transactions : any = {}
	transactions_view : any = {}
	payment_tabview : any = {}
	dynamic_search : any = {}
	history_search : any = {}
	history_search_clear : any = {}
	history_search_search : any = {}
	history_search_view_pacs008 : any = {}
	history_search_view_pacs002 : any = {}
	cw_eftc_main_profile : any = {}
	transaction_pivot : any = {}
	upload_action : any = {}
	upload_action_back : any = {}
	upload_action_confirm : any = {}
	upload_action_submit : any = {}
	upload_action_tbc_pivot : any = {}
	upload_action_load_pivot : any = {}
	payment_edit_form : any = {}
	payment_edit_form_back : any = {}
	payment_edit_form_confirm : any = {}
	payment_edit_form_submit : any = {}
	payment_edit_form_tbcedit : any = {}
	failure_transactions : any = {}
	failure_transactions_edit : any = {}
	dashboard_search : any = {}
	dashboard_search_search : any = {}
	failure_reason : any = {}
	transaction_pivot_header : any = {}
	approval_pending_list : any = {}
	navigation_ui : any = {}
	navigation_ui_approve : any = {}
	transaction_details_view : any = {}
	ipsp_error_widget : any = {}
	tree : any = {}
	transaction_detail : any = {}
	pacs008_ui : any = {}
	pacs008_ui_close : any = {}
	pacs002_ui : any = {}
	pacs002_ui_close : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private torus_cs_show_hideService:torus_cs_show_hideService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Payment Form" 
		this.payment_form.uictrl_code = "dynamic_ui"
		this.payment_form.uicgc_desc = "Payment Form"
		this.payment_form.uicgc_code = "uicgc_1"
		this.payment_form.params = {}
		this.payment_form.datasource = {"e_1665471786298":{"dt_1304_1665384453253":{"dtt_1304_1665385772257":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"E_1665471786298","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665385772257","dtt_desc":"NPSS Cust Transactions","ds_eligible":"","ds_final":"DS_1665474513932","final_state":{"ts":[{"binding_name":"STATUS","binding_value":"OP_P2P_PAYMENT_INITIATED","data_type":"TEXT"},{"binding_name":"PROCESS_STATUS","binding_value":"CREDITINITIATED","data_type":"TEXT"}],"trn":[]},"property_json":null,"system_type":"DEFAULT","eq_info":{},"listing_mode":"","locking_mode":"","locking_parameter":"","filter":[],"databinding":[]}}}}}}
		this.payment_form.context_menu = []
		this.payment_form.views = {"first":"DTT_1304_1665385772257","is_tab_mode":"N","dtt_1304_1665385772257":{"0":[{"dttv_id":"Cust Transaction UI","tab_order":0,"tab_name":"","uicgc_description":"Payment Form","role_description":"default","dtt_description":"NPSS Cust Transactions"}]}}
		this.payment_form.onChangecomponent = new EventEmitter<any>()
		this.payment_form.show = true
		this.payment_form.dynamic_param = {}
		this.payment_form.f_cust_transaction_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.payment_form.form_name = "f_cust_transaction_ui"
		
		// "TBC1" Button of "Payment Form" component
		this.payment_form_tbc1.label_name = "TBC1"
		this.payment_form_tbc1.show = true
		this.payment_form_tbc1.disabled = false
		this.payment_form_tbc1.params = {"icon_only":false,"uicgcc_style":""}
		this.payment_form_tbc1.dynamic_param = {}
		this.payment_form_tbc1.role = []
		this.payment_form_tbc1.action = ""
		
		// "TBC Controls" Button of "Payment Form" component
		this.payment_form_tbc_controls.label_name = "TBC Controls"
		this.payment_form_tbc_controls.show = true
		this.payment_form_tbc_controls.disabled = false
		this.payment_form_tbc_controls.params = {"icon_only":false,"uicgcc_style":""}
		this.payment_form_tbc_controls.dynamic_param = {}
		this.payment_form_tbc_controls.role = []
		this.payment_form_tbc_controls.action = ""
		
		// "TBC HIDE" Button of "Payment Form" component
		this.payment_form_tbc_hide.label_name = "TBC HIDE"
		this.payment_form_tbc_hide.show = true
		this.payment_form_tbc_hide.disabled = false
		this.payment_form_tbc_hide.params = {"icon_only":false,"uicgcc_style":""}
		this.payment_form_tbc_hide.dynamic_param = {}
		this.payment_form_tbc_hide.role = []
		this.payment_form_tbc_hide.action = ""
	
		// Component level properties - "Payment Form Action" 
		this.payment_form_action.uictrl_code = "dynamic_ui"
		this.payment_form_action.uicgc_desc = "Payment Form Action"
		this.payment_form_action.uicgc_code = "uicgc_2"
		this.payment_form_action.params = {}
		this.payment_form_action.datasource = {}
		this.payment_form_action.context_menu = []
		this.payment_form_action.views = {}
		this.payment_form_action.onChangecomponent = new EventEmitter<any>()
		this.payment_form_action.show = true
		this.payment_form_action.dynamic_param = {}
		this.payment_form_action.f_payment_form_action = {"show":true}
		this.payment_form_action.current_view = "f_payment_form_action"
		
		// "Back" Button of "Payment Form Action" component
		this.payment_form_action_back.label_name = "Back"
		this.payment_form_action_back.show = true
		this.payment_form_action_back.disabled = false
		this.payment_form_action_back.params = {"icon_only":false,"uicgcc_style":""}
		this.payment_form_action_back.dynamic_param = {}
		this.payment_form_action_back.role = []
		this.payment_form_action_back.action = ""
		
		// "Confirm" Button of "Payment Form Action" component
		this.payment_form_action_confirm.label_name = "Confirm"
		this.payment_form_action_confirm.show = true
		this.payment_form_action_confirm.disabled = false
		this.payment_form_action_confirm.params = {"icon_only":false,"uicgcc_style":""}
		this.payment_form_action_confirm.dynamic_param = {}
		this.payment_form_action_confirm.role = []
		this.payment_form_action_confirm.action = ""
		
		// "Reject" Button of "Payment Form Action" component
		this.payment_form_action_reject.label_name = "Reject"
		this.payment_form_action_reject.show = true
		this.payment_form_action_reject.disabled = false
		this.payment_form_action_reject.params = {"icon_only":false,"uicgcc_style":""}
		this.payment_form_action_reject.dynamic_param = {}
		this.payment_form_action_reject.role = []
		this.payment_form_action_reject.action = ""
		
		// "Response" Button of "Payment Form Action" component
		this.payment_form_action_response.label_name = "Response"
		this.payment_form_action_response.show = true
		this.payment_form_action_response.disabled = false
		this.payment_form_action_response.params = {"icon_only":false,"uicgcc_style":""}
		this.payment_form_action_response.dynamic_param = {}
		this.payment_form_action_response.role = []
		this.payment_form_action_response.action = ""
		
		// "Verify Recipient IBAN" Button of "Payment Form Action" component
		this.payment_form_action_verify_recipient_iban.label_name = "Verify Recipient IBAN"
		this.payment_form_action_verify_recipient_iban.show = true
		this.payment_form_action_verify_recipient_iban.disabled = false
		this.payment_form_action_verify_recipient_iban.params = {"icon_only":false,"uicgcc_style":""}
		this.payment_form_action_verify_recipient_iban.dynamic_param = {}
		this.payment_form_action_verify_recipient_iban.role = []
		this.payment_form_action_verify_recipient_iban.action = ""
		
		// "Confirm Payment" Button of "Payment Form Action" component
		this.payment_form_action_confirm_payment.label_name = "Confirm Payment"
		this.payment_form_action_confirm_payment.show = true
		this.payment_form_action_confirm_payment.disabled = false
		this.payment_form_action_confirm_payment.params = {"icon_only":false,"uicgcc_style":""}
		this.payment_form_action_confirm_payment.dynamic_param = {}
		this.payment_form_action_confirm_payment.role = []
		this.payment_form_action_confirm_payment.action = ""
		
		// "Verify Sender Balance" Button of "Payment Form Action" component
		this.payment_form_action_verify_sender_balance.label_name = "Verify Sender Balance"
		this.payment_form_action_verify_sender_balance.show = true
		this.payment_form_action_verify_sender_balance.disabled = false
		this.payment_form_action_verify_sender_balance.params = {"icon_only":false,"uicgcc_style":""}
		this.payment_form_action_verify_sender_balance.dynamic_param = {}
		this.payment_form_action_verify_sender_balance.role = []
		this.payment_form_action_verify_sender_balance.action = ""
		
		// "Verify Sender IBAN" Button of "Payment Form Action" component
		this.payment_form_action_verify_sender_iban.label_name = "Verify Sender IBAN"
		this.payment_form_action_verify_sender_iban.show = true
		this.payment_form_action_verify_sender_iban.disabled = false
		this.payment_form_action_verify_sender_iban.params = {"icon_only":false,"uicgcc_style":""}
		this.payment_form_action_verify_sender_iban.dynamic_param = {}
		this.payment_form_action_verify_sender_iban.role = []
		this.payment_form_action_verify_sender_iban.action = ""
	
		// Component level properties - "Transactions" 
		this.transactions.uictrl_code = "datatable"
		this.transactions.uicgc_desc = "Transactions"
		this.transactions.uicgc_code = "uicgc_3"
		this.transactions.params = {"need_pag_datatable":"Y","need_search":"N","need_context_menu_actions":"N"}
		this.transactions.datasource = {}
		this.transactions.context_menu = [{"label_name":"View","desc":"view","show":true,"disabled":false,"params":{"icon_only":true,"node_type":"","uicgcc_style":"fa fa-eye"},"dynamic_param":{}}]
		this.transactions.views = {}
		this.transactions.onChangecomponent = new EventEmitter<any>()
		this.transactions.show = true
		this.transactions.dynamic_param = {}
		
// "View" Button of "Transactions" component 
		this.transactions_view.label_name = "View"
		this.transactions_view.desc = "view"
		this.transactions_view.show = true
		this.transactions_view.disabled = false
		this.transactions_view.params = {"icon_only":true,"node_type":"","uicgcc_style":"fa fa-eye"}
		this.transactions_view.dynamic_param = {}
	
		// Component level properties - "Payment TabView" 
		this.payment_tabview.uictrl_code = "tabview"
		this.payment_tabview.uicgc_desc = "Payment TabView"
		this.payment_tabview.uicgc_code = "uicgc_4"
		this.payment_tabview.params = [{"desc":"Payment","profile_code":"BTL_1408_1634824504003","id":1647332447829,"role_code":""},{"desc":"Outward","profile_code":"BTL_1408_1664944837564","id":1634879677420}]
		this.payment_tabview.datasource = {}
		this.payment_tabview.context_menu = []
		this.payment_tabview.views = {}
		this.payment_tabview.onChangecomponent = new EventEmitter<any>()
		this.payment_tabview.show = true
		this.payment_tabview.dynamic_param = {}
		this.payment_tabview.mode = "tab"
		this.payment_tabview.tab_profiles = {"p_form_layout":{"header":"Payment","profile_code":"BTL_1408_1634824504003","index":0,"selected":false,"disabled":false,"show":true,"invalid":false,"dynamic_class":"","app_user_role":[],"component":["payment_form","payment_form_action"],"showclass":"show"},"p_history_layout":{"header":"Outward","profile_code":"BTL_1408_1664944837564","index":1,"selected":false,"disabled":false,"show":true,"invalid":false,"dynamic_class":"","app_user_role":[],"component":["uicgc_6"],"showclass":"show"}}
		this.payment_tabview.activeindex = 0
	
		// Component level properties - "Dynamic Search" 
		this.dynamic_search.uictrl_code = "dynamic_search"
		this.dynamic_search.uicgc_desc = "Dynamic Search"
		this.dynamic_search.uicgc_code = "uicgc_5"
		this.dynamic_search.params = {}
		this.dynamic_search.datasource = {}
		this.dynamic_search.context_menu = []
		this.dynamic_search.views = {}
		this.dynamic_search.onChangecomponent = new EventEmitter<any>()
		this.dynamic_search.show = true
		this.dynamic_search.dynamic_param = {}
	
		// Component level properties - "History Search" 
		this.history_search.uictrl_code = "dynamic_form_search"
		this.history_search.uicgc_desc = "History Search"
		this.history_search.uicgc_code = "uicgc_6"
		this.history_search.params = {}
		this.history_search.datasource = {}
		this.history_search.context_menu = []
		this.history_search.views = {}
		this.history_search.onChangecomponent = new EventEmitter<any>()
		this.history_search.show = true
		this.history_search.dynamic_param = {}
		this.history_search.f_history_search = {"show":true}
		this.history_search.current_view = "f_history_search"
		
		// "Clear" Button of "History Search" component
		this.history_search_clear.label_name = "Clear"
		this.history_search_clear.show = true
		this.history_search_clear.disabled = false
		this.history_search_clear.params = {"icon_only":false,"uicgcc_style":""}
		this.history_search_clear.dynamic_param = {}
		this.history_search_clear.role = []
		this.history_search_clear.action = ""
		
		// "Search" Button of "History Search" component
		this.history_search_search.label_name = "Search"
		this.history_search_search.show = true
		this.history_search_search.disabled = false
		this.history_search_search.params = {"icon_only":false,"uicgcc_style":""}
		this.history_search_search.dynamic_param = {}
		this.history_search_search.role = []
		this.history_search_search.action = ""
		
		// "View Pacs008" Button of "History Search" component
		this.history_search_view_pacs008.label_name = "View Pacs008"
		this.history_search_view_pacs008.show = true
		this.history_search_view_pacs008.disabled = false
		this.history_search_view_pacs008.params = {"icon_only":false,"uicgcc_style":""}
		this.history_search_view_pacs008.dynamic_param = {}
		this.history_search_view_pacs008.role = []
		this.history_search_view_pacs008.action = ""
		
		// "View Pacs002" Button of "History Search" component
		this.history_search_view_pacs002.label_name = "View Pacs002"
		this.history_search_view_pacs002.show = true
		this.history_search_view_pacs002.disabled = false
		this.history_search_view_pacs002.params = {"icon_only":false,"uicgcc_style":""}
		this.history_search_view_pacs002.dynamic_param = {}
		this.history_search_view_pacs002.role = []
		this.history_search_view_pacs002.action = ""
	
		// Component level properties - "cw_eftc_main_profile" 
		this.cw_eftc_main_profile.uictrl_code = "custom_widget"
		this.cw_eftc_main_profile.uicgc_desc = "cw_eftc_main_profile"
		this.cw_eftc_main_profile.uicgc_code = "uicgc_7"
		this.cw_eftc_main_profile.params = {}
		this.cw_eftc_main_profile.datasource = {}
		this.cw_eftc_main_profile.context_menu = []
		this.cw_eftc_main_profile.views = {}
		this.cw_eftc_main_profile.onChangecomponent = new EventEmitter<any>()
		this.cw_eftc_main_profile.show = true
		this.cw_eftc_main_profile.dynamic_param = {}
	
		// Component level properties - "Transaction Pivot" 
		this.transaction_pivot.uictrl_code = "pivot datatable"
		this.transaction_pivot.uicgc_desc = "Transaction Pivot"
		this.transaction_pivot.uicgc_code = "uicgc_8"
		this.transaction_pivot.params = {"need_add_action":"Y","need_add_action_btn":"Y","need_page_pivot_datatable":"Y","create_new_row_bottom":"Y"}
		this.transaction_pivot.datasource = {}
		this.transaction_pivot.context_menu = []
		this.transaction_pivot.views = {}
		this.transaction_pivot.onChangecomponent = new EventEmitter<any>()
		this.transaction_pivot.show = true
		this.transaction_pivot.dynamic_param = {"need_pivot_save_btn":"N"}
	
		// Component level properties - "Upload Action" 
		this.upload_action.uictrl_code = "dynamic_ui"
		this.upload_action.uicgc_desc = "Upload Action"
		this.upload_action.uicgc_code = "uicgc_9"
		this.upload_action.params = {}
		this.upload_action.datasource = {}
		this.upload_action.context_menu = []
		this.upload_action.views = {}
		this.upload_action.onChangecomponent = new EventEmitter<any>()
		this.upload_action.show = true
		this.upload_action.dynamic_param = {}
		this.upload_action.f_upload_action = {"show":true}
		this.upload_action.current_view = "f_upload_action"
		
		// "Back" Button of "Upload Action" component
		this.upload_action_back.label_name = "Back"
		this.upload_action_back.show = true
		this.upload_action_back.disabled = false
		this.upload_action_back.params = {"icon_only":false,"uicgcc_style":""}
		this.upload_action_back.dynamic_param = {}
		this.upload_action_back.role = []
		this.upload_action_back.action = ""
		
		// "Confirm" Button of "Upload Action" component
		this.upload_action_confirm.label_name = "Confirm"
		this.upload_action_confirm.show = true
		this.upload_action_confirm.disabled = false
		this.upload_action_confirm.params = {"icon_only":false,"uicgcc_style":""}
		this.upload_action_confirm.dynamic_param = {}
		this.upload_action_confirm.role = []
		this.upload_action_confirm.action = ""
		
		// "Submit" Button of "Upload Action" component
		this.upload_action_submit.label_name = "Submit"
		this.upload_action_submit.show = true
		this.upload_action_submit.disabled = false
		this.upload_action_submit.params = {"icon_only":false,"uicgcc_style":""}
		this.upload_action_submit.dynamic_param = {}
		this.upload_action_submit.role = []
		this.upload_action_submit.action = ""
		
		// "TBC Pivot" Button of "Upload Action" component
		this.upload_action_tbc_pivot.label_name = "TBC Pivot"
		this.upload_action_tbc_pivot.show = true
		this.upload_action_tbc_pivot.disabled = false
		this.upload_action_tbc_pivot.params = {"icon_only":false,"uicgcc_style":""}
		this.upload_action_tbc_pivot.dynamic_param = {}
		this.upload_action_tbc_pivot.role = []
		this.upload_action_tbc_pivot.action = ""
		
		// "Load Pivot" Button of "Upload Action" component
		this.upload_action_load_pivot.label_name = "Load Pivot"
		this.upload_action_load_pivot.show = true
		this.upload_action_load_pivot.disabled = false
		this.upload_action_load_pivot.params = {"icon_only":false,"uicgcc_style":""}
		this.upload_action_load_pivot.dynamic_param = {}
		this.upload_action_load_pivot.role = []
		this.upload_action_load_pivot.action = ""
	
		// Component level properties - "Payment Edit Form" 
		this.payment_edit_form.uictrl_code = "dynamic_ui"
		this.payment_edit_form.uicgc_desc = "Payment Edit Form"
		this.payment_edit_form.uicgc_code = "uicgc_10"
		this.payment_edit_form.params = {}
		this.payment_edit_form.datasource = {}
		this.payment_edit_form.context_menu = []
		this.payment_edit_form.views = {}
		this.payment_edit_form.onChangecomponent = new EventEmitter<any>()
		this.payment_edit_form.show = true
		this.payment_edit_form.dynamic_param = {}
		this.payment_edit_form.f_payment_edit_form = {"show":true}
		this.payment_edit_form.current_view = "f_payment_edit_form"
		
		// "Back" Button of "Payment Edit Form" component
		this.payment_edit_form_back.label_name = "Back"
		this.payment_edit_form_back.show = true
		this.payment_edit_form_back.disabled = false
		this.payment_edit_form_back.params = {"icon_only":false,"uicgcc_style":""}
		this.payment_edit_form_back.dynamic_param = {}
		this.payment_edit_form_back.role = []
		this.payment_edit_form_back.action = ""
		
		// "Confirm" Button of "Payment Edit Form" component
		this.payment_edit_form_confirm.label_name = "Confirm"
		this.payment_edit_form_confirm.show = true
		this.payment_edit_form_confirm.disabled = false
		this.payment_edit_form_confirm.params = {"icon_only":false,"uicgcc_style":""}
		this.payment_edit_form_confirm.dynamic_param = {}
		this.payment_edit_form_confirm.role = []
		this.payment_edit_form_confirm.action = ""
		
		// "Submit" Button of "Payment Edit Form" component
		this.payment_edit_form_submit.label_name = "Submit"
		this.payment_edit_form_submit.show = true
		this.payment_edit_form_submit.disabled = false
		this.payment_edit_form_submit.params = {"icon_only":false,"uicgcc_style":""}
		this.payment_edit_form_submit.dynamic_param = {}
		this.payment_edit_form_submit.role = []
		this.payment_edit_form_submit.action = ""
		
		// "TBCEdit" Button of "Payment Edit Form" component
		this.payment_edit_form_tbcedit.label_name = "TBCEdit"
		this.payment_edit_form_tbcedit.show = true
		this.payment_edit_form_tbcedit.disabled = false
		this.payment_edit_form_tbcedit.params = {"icon_only":false,"uicgcc_style":""}
		this.payment_edit_form_tbcedit.dynamic_param = {}
		this.payment_edit_form_tbcedit.role = []
		this.payment_edit_form_tbcedit.action = ""
	
		// Component level properties - "Failure Transactions" 
		this.failure_transactions.uictrl_code = "datatable"
		this.failure_transactions.uicgc_desc = "Failure Transactions"
		this.failure_transactions.uicgc_code = "uicgc_11"
		this.failure_transactions.params = {"need_pag_datatable":"Y","need_search":"N","need_context_menu_actions":"Y"}
		this.failure_transactions.datasource = {}
		this.failure_transactions.context_menu = [{"label_name":"Edit","desc":"edit","show":true,"disabled":false,"params":{"icon_only":false,"node_type":"","uicgcc_style":""},"dynamic_param":{}}]
		this.failure_transactions.views = {}
		this.failure_transactions.onChangecomponent = new EventEmitter<any>()
		this.failure_transactions.show = true
		this.failure_transactions.dynamic_param = {}
		
// "Edit" Button of "Failure Transactions" component 
		this.failure_transactions_edit.label_name = "Edit"
		this.failure_transactions_edit.desc = "edit"
		this.failure_transactions_edit.show = true
		this.failure_transactions_edit.disabled = false
		this.failure_transactions_edit.params = {"icon_only":false,"node_type":"","uicgcc_style":""}
		this.failure_transactions_edit.dynamic_param = {}
	
		// Component level properties - "Dashboard Search" 
		this.dashboard_search.uictrl_code = "dynamic_form_search"
		this.dashboard_search.uicgc_desc = "Dashboard Search"
		this.dashboard_search.uicgc_code = "uicgc_13"
		this.dashboard_search.params = {}
		this.dashboard_search.datasource = {}
		this.dashboard_search.context_menu = []
		this.dashboard_search.views = {}
		this.dashboard_search.onChangecomponent = new EventEmitter<any>()
		this.dashboard_search.show = true
		this.dashboard_search.dynamic_param = {}
		this.dashboard_search.f_dashboard_search = {"show":true}
		this.dashboard_search.current_view = "f_dashboard_search"
		
		// "Search" Button of "Dashboard Search" component
		this.dashboard_search_search.label_name = "Search"
		this.dashboard_search_search.show = true
		this.dashboard_search_search.disabled = false
		this.dashboard_search_search.params = {"icon_only":false,"uicgcc_style":""}
		this.dashboard_search_search.dynamic_param = {}
		this.dashboard_search_search.role = []
		this.dashboard_search_search.action = ""
	
		// Component level properties - "Failure Reason" 
		this.failure_reason.uictrl_code = "datatable"
		this.failure_reason.uicgc_desc = "Failure Reason"
		this.failure_reason.uicgc_code = "uicgc_15"
		this.failure_reason.params = {"need_search":"N","need_result_count":"N","need_pag_datatable":"N"}
		this.failure_reason.datasource = {}
		this.failure_reason.context_menu = []
		this.failure_reason.views = {}
		this.failure_reason.onChangecomponent = new EventEmitter<any>()
		this.failure_reason.show = true
		this.failure_reason.dynamic_param = {}
	
		// Component level properties - "Transaction Pivot Header" 
		this.transaction_pivot_header.uictrl_code = "dynamic_ui"
		this.transaction_pivot_header.uicgc_desc = "Transaction Pivot Header"
		this.transaction_pivot_header.uicgc_code = "uicgc_17"
		this.transaction_pivot_header.params = {}
		this.transaction_pivot_header.datasource = {}
		this.transaction_pivot_header.context_menu = []
		this.transaction_pivot_header.views = {}
		this.transaction_pivot_header.onChangecomponent = new EventEmitter<any>()
		this.transaction_pivot_header.show = true
		this.transaction_pivot_header.dynamic_param = {}
		this.transaction_pivot_header.f_transaction_pivot_header = {"show":true}
		this.transaction_pivot_header.current_view = "f_transaction_pivot_header"
	
		// Component level properties - "Approval Pending List" 
		this.approval_pending_list.uictrl_code = "datatable"
		this.approval_pending_list.uicgc_desc = "Approval Pending List"
		this.approval_pending_list.uicgc_code = "uicgc_18"
		this.approval_pending_list.params = {"need_search":"N","view_all":"N","need_pag_datatable":"Y"}
		this.approval_pending_list.datasource = {}
		this.approval_pending_list.context_menu = []
		this.approval_pending_list.views = {}
		this.approval_pending_list.onChangecomponent = new EventEmitter<any>()
		this.approval_pending_list.show = true
		this.approval_pending_list.dynamic_param = {}
	
		// Component level properties - "Navigation UI" 
		this.navigation_ui.uictrl_code = "dynamic_ui"
		this.navigation_ui.uicgc_desc = "Navigation UI"
		this.navigation_ui.uicgc_code = "uicgc_19"
		this.navigation_ui.params = {}
		this.navigation_ui.datasource = {}
		this.navigation_ui.context_menu = []
		this.navigation_ui.views = {}
		this.navigation_ui.onChangecomponent = new EventEmitter<any>()
		this.navigation_ui.show = true
		this.navigation_ui.dynamic_param = {}
		this.navigation_ui.f_navigation_ui = {"show":true}
		this.navigation_ui.current_view = "f_navigation_ui"
		
		// "Approve" Button of "Navigation UI" component
		this.navigation_ui_approve.label_name = "Approve"
		this.navigation_ui_approve.show = true
		this.navigation_ui_approve.disabled = false
		this.navigation_ui_approve.params = {"icon_only":false,"uicgcc_style":""}
		this.navigation_ui_approve.dynamic_param = {}
		this.navigation_ui_approve.role = []
		this.navigation_ui_approve.action = ""
	
		// Component level properties - "Transaction Details View" 
		this.transaction_details_view.uictrl_code = "datatable"
		this.transaction_details_view.uicgc_desc = "Transaction Details View"
		this.transaction_details_view.uicgc_code = "uicgc_20"
		this.transaction_details_view.params = {"need_vertical":"Y","need_search":"N"}
		this.transaction_details_view.datasource = {}
		this.transaction_details_view.context_menu = []
		this.transaction_details_view.views = {}
		this.transaction_details_view.onChangecomponent = new EventEmitter<any>()
		this.transaction_details_view.show = true
		this.transaction_details_view.dynamic_param = {}
	
		// Component level properties - "ipsp_error_widget" 
		this.ipsp_error_widget.uictrl_code = "custom_widget"
		this.ipsp_error_widget.uicgc_desc = "ipsp_error_widget"
		this.ipsp_error_widget.uicgc_code = "uicgc_21"
		this.ipsp_error_widget.params = {}
		this.ipsp_error_widget.datasource = {}
		this.ipsp_error_widget.context_menu = []
		this.ipsp_error_widget.views = {}
		this.ipsp_error_widget.onChangecomponent = new EventEmitter<any>()
		this.ipsp_error_widget.show = true
		this.ipsp_error_widget.dynamic_param = {}
	
		// Component level properties - "Tree" 
		this.tree.uictrl_code = "data_tree"
		this.tree.uicgc_desc = "Tree"
		this.tree.uicgc_code = "uicgc_22"
		this.tree.params = {}
		this.tree.datasource = {}
		this.tree.context_menu = []
		this.tree.views = {}
		this.tree.onChangecomponent = new EventEmitter<any>()
		this.tree.show = true
		this.tree.dynamic_param = {}
	
		// Component level properties - "Transaction Detail" 
		this.transaction_detail.uictrl_code = "datatable"
		this.transaction_detail.uicgc_desc = "Transaction Detail"
		this.transaction_detail.uicgc_code = "uicgc_23"
		this.transaction_detail.params = {}
		this.transaction_detail.datasource = {}
		this.transaction_detail.context_menu = []
		this.transaction_detail.views = {}
		this.transaction_detail.onChangecomponent = new EventEmitter<any>()
		this.transaction_detail.show = true
		this.transaction_detail.dynamic_param = {}
	
		// Component level properties - "Pacs008 UI" 
		this.pacs008_ui.uictrl_code = "dynamic_ui"
		this.pacs008_ui.uicgc_desc = "Pacs008 UI"
		this.pacs008_ui.uicgc_code = "uicgc_24"
		this.pacs008_ui.params = {}
		this.pacs008_ui.datasource = {}
		this.pacs008_ui.context_menu = []
		this.pacs008_ui.views = {}
		this.pacs008_ui.onChangecomponent = new EventEmitter<any>()
		this.pacs008_ui.show = true
		this.pacs008_ui.dynamic_param = {}
		this.pacs008_ui.f_pacs008_ui = {"show":true}
		this.pacs008_ui.current_view = "f_pacs008_ui"
		
		// "Close" Button of "Pacs008 UI" component
		this.pacs008_ui_close.label_name = "Close"
		this.pacs008_ui_close.show = true
		this.pacs008_ui_close.disabled = false
		this.pacs008_ui_close.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.pacs008_ui_close.dynamic_param = {}
		this.pacs008_ui_close.role = []
		this.pacs008_ui_close.action = ""
	
		// Component level properties - "Pacs002 UI" 
		this.pacs002_ui.uictrl_code = "dynamic_ui"
		this.pacs002_ui.uicgc_desc = "Pacs002 UI"
		this.pacs002_ui.uicgc_code = "uicgc_25"
		this.pacs002_ui.params = {}
		this.pacs002_ui.datasource = {}
		this.pacs002_ui.context_menu = []
		this.pacs002_ui.views = {}
		this.pacs002_ui.onChangecomponent = new EventEmitter<any>()
		this.pacs002_ui.show = true
		this.pacs002_ui.dynamic_param = {}
		this.pacs002_ui.f_pacs002_ui = {"show":true}
		this.pacs002_ui.current_view = "f_pacs002_ui"
		
		// "Close" Button of "Pacs002 UI" component
		this.pacs002_ui_close.label_name = "Close"
		this.pacs002_ui_close.show = true
		this.pacs002_ui_close.disabled = false
		this.pacs002_ui_close.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.pacs002_ui_close.dynamic_param = {}
		this.pacs002_ui_close.role = []
		this.pacs002_ui_close.action = ""
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__he_on_page_load_for_confirm()
		this.page_load__he_on_page_load_for_back()
		this.page_load__cf_on_page_load()
		this.page_load__he_to_payment_form_tbc1()
		this.page_load__he_to_upload_back()
		this.page_load__he_to_upload_confirm()
		this.page_load__brfq_for_failures()
		this.page_load__he_to_edit_confirm()
		this.page_load__he_to_edit_back()
		this.page_load__he_to_upload_tbc()
		this.page_load__he_to_edit_tbc()
		this.page_load__he_to_upload_pivot()
		this.page_load__he_for_tbc_controls()
		this.page_load__tbc_for_tbc_controls()
		this.page_load__he_for_tbc_sab_hide()
		this.page_load__he_for_vri()
		this.page_load__he_for_accept()
		this.page_load__he_for_reject()
		this.page_load__he_for_vsb()
		this.page_load__he_for_cp()
		this.page_load__he_for_reject()
		this.page_load__he_for_pacs002()
		this.page_load__he_for_pacs008()
	}

	//Handler for INTERNAL event of "brfq for failures"
	brfq_for_failures__internal(parent_event_result){
		this.brfq_for_failures__tbc_for_search(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "payment form action confirm payment"
	payment_form_action_confirm_payment__action_button_click(){
		this.payment_form_action_confirm_payment__ve_to_form()
		this.payment_form_action_confirm_payment__clear_custom_widget()
	}

	//Handler for INTERNAL event of "ve to form"
	ve_to_form__internal(parent_event_result){
		this.ve_to_form__tbc_to_tbc1(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "payment form action back"
	payment_form_action_back__action_button_click(){
		this.payment_form_action_back__he_on_click_on_back_btn_click()
		this.payment_form_action_back__he_on_back_btn_click()
		this.payment_form_action_back__se_on_back_click()
		this.payment_form_action_back__ee_on_back_btn_click()
		this.payment_form_action_back__he_for_value_date_on_trigger__payment_form()
		this.payment_form_action_back__he_for_sanction_limit_on_trigger__payment_form()
	}

	//Handler for ACTION_BUTTON_CLICK event of "history search clear"
	history_search_clear__action_button_click(){
		this.history_search_clear__clear_search()
	}

	//Handler for ACTION_BUTTON_CLICK event of "history search search"
	history_search_search__action_button_click(){
		this.history_search_search__ssp_for_history_search()
		this.history_search_search__cui_for_search()
	}

	//Handler for INTERNAL event of "ssp for history search"
	ssp_for_history_search__internal(parent_event_result){
		this.ssp_for_history_search__brfq_from_search(parent_event_result)
		this.ssp_for_history_search__brfq_for_tree(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for tree"
	brfq_for_tree__internal(parent_event_result){
		this.brfq_for_tree__sfr_for_tree(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "payment form tbc1"
	payment_form_tbc1__action_button_click(){
		this.payment_form_tbc1__de_to_form()
		this.payment_form_tbc1__he_to_form()
		this.payment_form_tbc1__se_for_payment_form_action_back()
		this.payment_form_tbc1__se_for_payment_form_action_confirm()
	}

	//Handler for ACTION_BUTTON_CLICK event of "payment form action confirm"
	payment_form_action_confirm__action_button_click(){
		this.payment_form_action_confirm__e_1664970022848()
		this.payment_form_action_confirm__cc_for_tran_insert()
	}

	//Handler for INTERNAL event of "cc for tran insert"
	cc_for_tran_insert__internal(){
		this.cc_for_tran_insert__cc_for_call_save_api()
	}

	//Handler for INTERNAL event of "cc for call save api"
	cc_for_call_save_api__internal(parent_event_result){
		this.cc_for_call_save_api__im_after_save_success(parent_event_result)
	}

	//Handler for INTERNAL event of "im after save success"
	im_after_save_success__internal(parent_event_result){
		this.im_after_save_success__rs_for_ide_success(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "upload action submit"
	upload_action_submit__action_button_click(peventcontext){
		this.upload_action_submit__se_for_upload_backs(peventcontext)
		this.upload_action_submit__se_upload_actions_confirms(peventcontext)
		this.upload_action_submit__he_for_uploa_daction_submit(peventcontext)
		this.upload_action_submit__save_confirmation()
	}

	//Handler for INTERNAL event of "save confirmation"
	save_confirmation__internal(parent_event_result){
		this.save_confirmation__ve_for_pivot_header(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "upload action back"
	upload_action_back__action_button_click(){
		this.upload_action_back__ee_for_tds_pivot()
		this.upload_action_back__se_for_upload_submit_actions()
		this.upload_action_back__he_for_uploadf_action_confirm()
		this.upload_action_back__he_upload_actions_back_button()
	}

	//Handler for MENU_ITEM_CLICK event of "failure transactions edit"
	failure_transactions_edit__menu_item_click(){
		this.failure_transactions_edit__spap_for_view_failure_details()
	}

	//Handler for ACTION_BUTTON_CLICK event of "payment edit form submit"
	payment_edit_form_submit__action_button_click(){
		this.payment_edit_form_submit__ve_for_edit_for_ui()
	}

	//Handler for INTERNAL event of "ve for edit for ui"
	ve_for_edit_for_ui__internal(parent_event_result){
		this.ve_for_edit_for_ui__tbc_for_edit_tbc_action(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "payment edit form tbcedit"
	payment_edit_form_tbcedit__action_button_click(){
		this.payment_edit_form_tbcedit__se_for_pefback()
		this.payment_edit_form_tbcedit__se_for_pef()
		this.payment_edit_form_tbcedit__de_for_pay_edut_form()
		this.payment_edit_form_tbcedit__e_1635492880800()
	}

	//Handler for ACTION_BUTTON_CLICK event of "payment edit form back"
	payment_edit_form_back__action_button_click(){
		this.payment_edit_form_back__se_for_payment_edit_submit_action()
		this.payment_edit_form_back__ee_fpr_edit_form()
		this.payment_edit_form_back__he_edit_form_detail_back()
		this.payment_edit_form_back__he_from_edit_back_to_edit_confirm()
	}

	//Handler for SELECTION_CHANGED event of "failure transactions"
	failure_transactions__selection_changed(){
		this.failure_transactions__svm_for_vld_list()
	}

	//Handler for INTERNAL event of "svm for vld list"
	svm_for_vld_list__internal(parent_event_result){
		this.svm_for_vld_list__brfq_for_vld_list(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "payment edit form confirm"
	payment_edit_form_confirm__action_button_click(){
		this.payment_edit_form_confirm__custom_connectors()
		this.payment_edit_form_confirm__e_1664966687373()
	}

	//Handler for INTERNAL event of "custom connectors"
	custom_connectors__internal(parent_event_result){
		this.custom_connectors__im(parent_event_result)
	}

	//Handler for INTERNAL event of "im"
	im__internal(parent_event_result){
		this.im__refresh_screen(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "dashboard search search"
	dashboard_search_search__action_button_click(){
		this.dashboard_search_search__ssp_for_failure()
	}

	//Handler for INTERNAL event of "ssp for failure"
	ssp_for_failure__internal(parent_event_result){
		this.ssp_for_failure__brfq_from_dashboard(parent_event_result)
		this.ssp_for_failure__approval_brfq_from_search()
	}

	//Handler for SELECTION_CHANGED event of "transaction pivot"
	transaction_pivot__selection_changed(){
		this.transaction_pivot__bt_for_ts_pivot()
	}

	//Handler for ACTION_BUTTON_CLICK event of "upload action load pivot"
	upload_action_load_pivot__action_button_click(){
		this.upload_action_load_pivot__brfq_for_tp()
	}

	//Handler for SELECTION_CHANGED event of "payment tabview"
	payment_tabview__selection_changed(peventcontext){
		this.payment_tabview__brfq_for_ts_pivot(peventcontext)
	}

	//Handler for SELECTION_CHANGED event of "approval pending list"
	approval_pending_list__selection_changed(){
		this.approval_pending_list__svm_for_approval_pending_list()
	}

	//Handler for SELECTION_CHANGED event of "transactions"
	transactions__selection_changed(){
		this.transactions__svm_for_view_transactionlist()
		this.transactions__se_for_pacs008()
	}

	//Handler for INTERNAL event of "svm for view transactionlist"
	svm_for_view_transactionlist__internal(parent_event_result){
		this.svm_for_view_transactionlist__brfq_from_hst_to_vertical(parent_event_result)
		this.svm_for_view_transactionlist__brfq_for_tran_detail(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for tran detail"
	brfq_for_tran_detail__internal(parent_event_result){
		this.brfq_for_tran_detail__sfr_for_tdl(parent_event_result)
	}

	//Handler for MENU_ITEM_CLICK event of "transactions view"
	transactions_view__menu_item_click(){
		this.transactions_view__spap_for_view_tran_details()
	}

	//Handler for ACTION_BUTTON_CLICK event of "payment form action verify sender balance"
	payment_form_action_verify_sender_balance__action_button_click(){
		this.payment_form_action_verify_sender_balance__cc_for_bind_payor_acct_balance_and_sanction_limit()
	}

	//Handler for INTERNAL event of "cc for bind payor acct balance and sanction limit"
	cc_for_bind_payor_acct_balance_and_sanction_limit__internal(parent_event_result){
		this.cc_for_bind_payor_acct_balance_and_sanction_limit__info_msg_after_show_balance_ide_success(parent_event_result)
	}

	//Handler for INTERNAL event of "info msg after show balance ide success"
	info_msg_after_show_balance_ide_success__internal(parent_event_result){
		this.info_msg_after_show_balance_ide_success__tbc_for_trigger_sba_hide_btn(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "payment form tbc hide"
	payment_form_tbc_hide__action_button_click(){
		this.payment_form_tbc_hide__he_for_show_payor_acc_balance_btn()
	}

	//Handler for ACTION_BUTTON_CLICK event of "payment form action reject"
	payment_form_action_reject__action_button_click(){
		this.payment_form_action_reject__cc_for_reject()
	}

	//Handler for INTERNAL event of "cc for reject"
	cc_for_reject__internal(parent_event_result){
		this.cc_for_reject__im_for_reject(parent_event_result)
	}

	//Handler for INTERNAL event of "im for reject"
	im_for_reject__internal(){
		this.im_for_reject__rs_for_reject()
	}

	//Handler for ACTION_BUTTON_CLICK event of "payment form action verify recipient iban"
	payment_form_action_verify_recipient_iban__action_button_click(){
		this.payment_form_action_verify_recipient_iban__cc_for_vri()
	}

	//Handler for INTERNAL event of "cc for vri"
	cc_for_vri__internal(parent_event_result){
		this.cc_for_vri__im_for_vri(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "payment form action response"
	payment_form_action_response__action_button_click(){
		this.payment_form_action_response__ccw__for_responce()
	}

	//Handler for INTERNAL event of "ccw  for responce"
	ccw__for_responce__internal(parent_event_result){
		this.ccw__for_responce__cc_for_responce(parent_event_result)
	}

	//Handler for INTERNAL event of "cc for responce"
	cc_for_responce__internal(parent_event_result){
		this.cc_for_responce__im_for_responce(parent_event_result)
	}

	//Handler for INTERNAL event of "im for responce"
	im_for_responce__internal(parent_event_result){
		this.im_for_responce__rs_for_responce(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "payment form action verify sender iban"
	payment_form_action_verify_sender_iban__action_button_click(){
		this.payment_form_action_verify_sender_iban__cc_for_vsi()
	}

	//Handler for INTERNAL event of "cc for vsi"
	cc_for_vsi__internal(parent_event_result){
		this.cc_for_vsi__im_for_vsi(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "tree"
	tree__selection_changed(){
		this.tree__svm_for_tree_cpssss()
	}

	//Handler for ACTION_BUTTON_CLICK event of "history search view pacs008"
	history_search_view_pacs008__action_button_click(){
		this.history_search_view_pacs008__spap_for_pacs008()
	}

	//Handler for SELECTION_CHANGED event of "transaction detail"
	transaction_detail__selection_changed(){
		this.transaction_detail__svm_for_view_transaction_dtl()
		this.transaction_detail__se_for_pacs002()
	}

	//Handler for ACTION_BUTTON_CLICK event of "pacs002 ui close"
	pacs002_ui_close__action_button_click(){
		this.pacs002_ui_close__cp_for_pacs002()
	}

	//Handler for ACTION_BUTTON_CLICK event of "pacs008 ui close"
	pacs008_ui_close__action_button_click(){
		this.pacs008_ui_close__cp_for_pasc008()
	}

	//Handler for ACTION_BUTTON_CLICK event of "history search view pacs002"
	history_search_view_pacs002__action_button_click(){
		this.history_search_view_pacs002__spap_for_view_pacs002()
	}

	//Handler for SELECTION_CHANGED event of "cust transaction ui dbtr acct name"
	cust_transaction_ui_dbtr_acct_name__selection_changed(){
		this.cust_transaction_ui_dbtr_acct_name__fcb_for_account_name_to_phone__payment_form()
		this.cust_transaction_ui_dbtr_acct_name__de_for_phone_number__payment_form()
		this.cust_transaction_ui_dbtr_acct_name__svm_for_combo__payment_form()
		this.cust_transaction_ui_dbtr_acct_name__de_for_sanction_limit__payment_form()
		this.cust_transaction_ui_dbtr_acct_name__de_for_account_balance__payment_form()
		this.cust_transaction_ui_dbtr_acct_name__shc_for_customer_name__payment_form()
	}

	//Handler for SELECTION_CHANGED event of "cust transaction ui cdtr pmt type"
	cust_transaction_ui_cdtr_pmt_type__selection_changed(){
		this.cust_transaction_ui_cdtr_pmt_type__show_hide_controls__payment_form()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__he_on_page_load_for_confirm() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="payment_form_action_confirm"
		let parent_source_id=""
		let event_code="e_1634823607548"
		let event_params={"caller_name":"page_load__he_on_page_load_for_confirm","event_desc":"HE on page load for confirm","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_on_page_load_for_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="payment_form_action_back"
		let parent_source_id=""
		let event_code="e_1634823617533"
		let event_params={"caller_name":"page_load__he_on_page_load_for_back","event_desc":"HE on page load for back","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__cf_on_page_load() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1634890153699"
		let event_params={"caller_name":"page_load__cf_on_page_load","event_desc":"CF on page load","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""}}
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
	page_load__he_to_payment_form_tbc1() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="payment_form_tbc1"
		let parent_source_id=""
		let event_code="e_1634912113259"
		let event_params={"caller_name":"page_load__he_to_payment_form_tbc1","event_desc":"HE to Payment Form TBC1","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_to_upload_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="upload_action_back"
		let parent_source_id=""
		let event_code="e_1635233273195"
		let event_params={"caller_name":"page_load__he_to_upload_back","event_desc":"HE to Upload Back","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_to_upload_confirm() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="upload_action_confirm"
		let parent_source_id=""
		let event_code="e_1635233289066"
		let event_params={"caller_name":"page_load__he_to_upload_confirm","event_desc":"HE to Upload Confirm","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__brfq_for_failures() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="failure_transactions"
		let parent_source_id=""
		let event_code="e_1635233778874"
		let event_params={"caller_name":"page_load__brfq_for_failures","event_desc":"BRFQ for Failures","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_failures__tbc_for_search,"
		let event_data={}
		let data_source={}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__he_to_edit_confirm() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="payment_edit_form_confirm"
		let parent_source_id=""
		let event_code="e_1635242433941"
		let event_params={"caller_name":"page_load__he_to_edit_confirm","event_desc":"HE to Edit Confirm","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_to_edit_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="payment_edit_form_back"
		let parent_source_id=""
		let event_code="e_1635243508864"
		let event_params={"caller_name":"page_load__he_to_edit_back","event_desc":"HE to Edit Back","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_to_upload_tbc() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="upload_action_tbc_pivot"
		let parent_source_id=""
		let event_code="e_1635243537283"
		let event_params={"caller_name":"page_load__he_to_upload_tbc","event_desc":"HE to Upload TBC","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_to_edit_tbc() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="payment_edit_form_tbcedit"
		let parent_source_id=""
		let event_code="e_1635243554393"
		let event_params={"caller_name":"page_load__he_to_edit_tbc","event_desc":"HE to Edit TBC","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_to_upload_pivot() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="upload_action_load_pivot"
		let parent_source_id=""
		let event_code="e_1635329739509"
		let event_params={"caller_name":"page_load__he_to_upload_pivot","event_desc":"HE to Upload Pivot","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_tbc_controls() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="payment_form_tbc_controls"
		let parent_source_id=""
		let event_code="e_1652368418059"
		let event_params={"caller_name":"page_load__he_for_tbc_controls","event_desc":"HE for TBC controls","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__tbc_for_tbc_controls() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="payment_form_tbc_controls"
		let parent_source_id=""
		let event_code="e_1652368445859"
		let event_params={"caller_name":"page_load__tbc_for_tbc_controls","event_desc":"TBC for TBC CONTROLS","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__he_for_tbc_sab_hide() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="payment_form_tbc_hide"
		let parent_source_id=""
		let event_code="e_1652428256421"
		let event_params={"caller_name":"page_load__he_for_tbc_sab_hide","event_desc":"HE for TBC sab Hide","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_vri() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="payment_form_action_verify_recipient_iban"
		let parent_source_id=""
		let event_code="e_1664882310625"
		let event_params={"caller_name":"page_load__he_for_vri","event_desc":"HE for VRI","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_accept() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="payment_form_action_response"
		let parent_source_id=""
		let event_code="e_1664882356381"
		let event_params={"caller_name":"page_load__he_for_accept","event_desc":"HE for Accept","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_reject() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="payment_form_action_reject"
		let parent_source_id=""
		let event_code="e_1664950560154"
		let event_params={"caller_name":"page_load__he_for_reject","event_desc":"HE for reject","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_vsb() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="payment_form_action_verify_sender_balance"
		let parent_source_id=""
		let event_code="e_1664882584110"
		let event_params={"caller_name":"page_load__he_for_vsb","event_desc":"HE for VSB","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_cp() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="payment_form_action_confirm_payment"
		let parent_source_id=""
		let event_code="e_1664882600030"
		let event_params={"caller_name":"page_load__he_for_cp","event_desc":"HE for CP","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_pacs002() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="history_search_view_pacs002"
		let parent_source_id=""
		let event_code="e_1665485567532"
		let event_params={"caller_name":"page_load__he_for_pacs002","event_desc":"HE for Pacs002","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_pacs008() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="history_search_view_pacs008"
		let parent_source_id=""
		let event_code="e_1665485638871"
		let event_params={"caller_name":"page_load__he_for_pacs008","event_desc":"HE for Pacs008","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for INTERNAL event of "brfq for failures"
	brfq_for_failures__tbc_for_search(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_failures"
		let destn_id="dashboard_search_search"
		let parent_source_id="page_load"
		let event_code="e_1635482850216"
		let event_params={"caller_name":"brfq_for_failures__tbc_for_search","event_desc":"tbc for search","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment form action confirm payment"
	payment_form_action_confirm_payment__ve_to_form() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_form_action_confirm_payment"
		let destn_id="payment_form"
		let parent_source_id=""
		let event_code="e_1634910155812"
		let event_params={"caller_name":"payment_form_action_confirm_payment__ve_to_form","event_desc":"VE to Form","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_form_action_confirm_payment","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="ve_to_form__tbc_to_tbc1,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "payment form action confirm payment"
	payment_form_action_confirm_payment__clear_custom_widget() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_form_action_confirm_payment"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1665121600439"
		let event_params={"caller_name":"payment_form_action_confirm_payment__clear_custom_widget","event_desc":"Clear Custom Widget","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_form_action_confirm_payment","raiseparam":{}}
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

	//Handler for INTERNAL event of "ve to form"
	ve_to_form__tbc_to_tbc1(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ve_to_form"
		let destn_id="payment_form_tbc1"
		let parent_source_id="payment_form_action_confirm_payment"
		let event_code="e_1634910182827"
		let event_params={"caller_name":"ve_to_form__tbc_to_tbc1","event_desc":"TBC to TBC1","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"payment_form_action_confirm_payment","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment form action back"
	payment_form_action_back__he_on_click_on_back_btn_click() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_form_action_back"
		let destn_id="payment_form_action_back"
		let parent_source_id=""
		let event_code="e_1634824039649"
		let event_params={"caller_name":"payment_form_action_back__he_on_click_on_back_btn_click","event_desc":"HE on click on back btn click","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_form_action_back","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment form action back"
	payment_form_action_back__he_on_back_btn_click() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_form_action_back"
		let destn_id="payment_form_action_confirm"
		let parent_source_id=""
		let event_code="e_1634824053121"
		let event_params={"caller_name":"payment_form_action_back__he_on_back_btn_click","event_desc":"HE on back btn click","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_form_action_back","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment form action back"
	payment_form_action_back__se_on_back_click() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_form_action_back"
		let destn_id="payment_form_action_confirm_payment"
		let parent_source_id=""
		let event_code="e_1634824073562"
		let event_params={"caller_name":"payment_form_action_back__se_on_back_click","event_desc":"SE on back click","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_form_action_back","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment form action back"
	payment_form_action_back__ee_on_back_btn_click() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_form_action_back"
		let destn_id="payment_form"
		let parent_source_id=""
		let event_code="e_1634824083707"
		let event_params={"caller_name":"payment_form_action_back__ee_on_back_btn_click","event_desc":"EE on Back btn click","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_form_action_back","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment form action back"
	payment_form_action_back__he_for_value_date_on_trigger__payment_form() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_form_action_back"
		let destn_id="cust_transaction_ui_value_date"
		let parent_source_id=""
		let event_code="e_1665474197158"
		let event_params={"destn_comp_id":"payment_form","destn_ctrl_id":"value_date","caller_name":"payment_form_action_back__he_for_value_date_on_trigger__payment_form","event_desc":"HE for Value Date on Trigger","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_form_action_back","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment form action back"
	payment_form_action_back__he_for_sanction_limit_on_trigger__payment_form() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_form_action_back"
		let destn_id="cust_transaction_ui_dbtr_sanction_limit"
		let parent_source_id=""
		let event_code="e_1665474242109"
		let event_params={"destn_comp_id":"payment_form","destn_ctrl_id":"dbtr_sanction_limit","caller_name":"payment_form_action_back__he_for_sanction_limit_on_trigger__payment_form","event_desc":"HE for sanction limit on trigger","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_form_action_back","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "history search clear"
	history_search_clear__clear_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_search_clear"
		let destn_id="history_search"
		let parent_source_id=""
		let event_code="e_1634882589564"
		let event_params={"caller_name":"history_search_clear__clear_search","event_desc":"Clear search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"history_search_clear","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "history search search"
	history_search_search__ssp_for_history_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_search_search"
		let destn_id="history_search"
		let parent_source_id=""
		let event_code="e_1634882670178"
		let event_params={"caller_name":"history_search_search__ssp_for_history_search","event_desc":"SSP for History Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"history_search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="ssp_for_history_search__brfq_from_search,ssp_for_history_search__brfq_for_tree,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "history search search"
	history_search_search__cui_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_search_search"
		let destn_id="transaction_detail"
		let parent_source_id=""
		let event_code="e_1664976828062"
		let event_params={"caller_name":"history_search_search__cui_for_search","event_desc":"CUI for search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"history_search_search","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for INTERNAL event of "ssp for history search"
	ssp_for_history_search__brfq_from_search(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_history_search"
		let destn_id="transactions"
		let parent_source_id="history_search_search"
		let event_code="e_1634882682186"
		let event_params={"caller_name":"ssp_for_history_search__brfq_from_search","event_desc":"BRFQ from search","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"history_search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
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

	//Handler for INTERNAL event of "ssp for history search"
	ssp_for_history_search__brfq_for_tree(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_history_search"
		let destn_id="tree"
		let parent_source_id="history_search_search"
		let event_code="e_1664884929214"
		let event_params={"caller_name":"ssp_for_history_search__brfq_for_tree","event_desc":"BRFQ for Tree","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"history_search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":""},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_tree__sfr_for_tree,"
		let event_data={}
		let data_source={}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for tree"
	brfq_for_tree__sfr_for_tree(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_tree"
		let destn_id="tree"
		let parent_source_id="ssp_for_history_search"
		let event_code="e_1664954705580"
		let event_params={"caller_name":"brfq_for_tree__sfr_for_tree","event_desc":"sfr for tree","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"history_search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment form tbc1"
	payment_form_tbc1__de_to_form() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_form_tbc1"
		let destn_id="payment_form"
		let parent_source_id=""
		let event_code="e_1634910226699"
		let event_params={"caller_name":"payment_form_tbc1__de_to_form","event_desc":"DE to Form","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_form_tbc1","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment form tbc1"
	payment_form_tbc1__he_to_form() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_form_tbc1"
		let destn_id="payment_form_action_confirm_payment"
		let parent_source_id=""
		let event_code="e_1634910255722"
		let event_params={"caller_name":"payment_form_tbc1__he_to_form","event_desc":"HE to Form","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_form_tbc1","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment form tbc1"
	payment_form_tbc1__se_for_payment_form_action_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_form_tbc1"
		let destn_id="payment_form_action_back"
		let parent_source_id=""
		let event_code="e_1634911371486"
		let event_params={"caller_name":"payment_form_tbc1__se_for_payment_form_action_back","event_desc":"SE for Payment Form Action Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_form_tbc1","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment form tbc1"
	payment_form_tbc1__se_for_payment_form_action_confirm() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_form_tbc1"
		let destn_id="payment_form_action_confirm"
		let parent_source_id=""
		let event_code="e_1634911387606"
		let event_params={"caller_name":"payment_form_tbc1__se_for_payment_form_action_confirm","event_desc":"SE for Payment Form Action Confirm","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_form_tbc1","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment form action confirm"
	payment_form_action_confirm__e_1664970022848() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_form_action_confirm"
		let destn_id="payment_form_action_back"
		let parent_source_id=""
		let event_code="e_1664970022848"
		let event_params={"caller_name":"payment_form_action_confirm__e_1664970022848","event_desc":"E_1664970022848","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_form_action_confirm","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment form action confirm"
	payment_form_action_confirm__cc_for_tran_insert() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_form_action_confirm"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1665669376996"
		let event_params={"caller_name":"payment_form_action_confirm__cc_for_tran_insert","event_desc":"CC for tran insert","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_form_action_confirm","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_tran_insert__cc_for_call_save_api,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for tran insert"
	cc_for_tran_insert__cc_for_call_save_api() { 
		let Dest_Is_ctrl=true
		
		let source_id="cc_for_tran_insert"
		let destn_id=""
		let parent_source_id="payment_form_action_confirm"
		let event_code="e_1665669424213"
		let event_params={"caller_name":"cc_for_tran_insert__cc_for_call_save_api","event_desc":"CC for Call Save API","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"payment_form_action_confirm","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_call_save_api__im_after_save_success,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for call save api"
	cc_for_call_save_api__im_after_save_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_call_save_api"
		let destn_id=""
		let parent_source_id="cc_for_tran_insert"
		let event_code="e_1665669456401"
		let event_params={"caller_name":"cc_for_call_save_api__im_after_save_success","event_desc":"IM after save success","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Customer Credit Transfer IPP API (P2P – Money Send) has been Initiated.","root_source_id":"payment_form_action_confirm","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="im_after_save_success__rs_for_ide_success,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "im after save success"
	im_after_save_success__rs_for_ide_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="im_after_save_success"
		let destn_id=""
		let parent_source_id="cc_for_call_save_api"
		let event_code="e_1665669557358"
		let event_params={"caller_name":"im_after_save_success__rs_for_ide_success","event_desc":"RS for ide success","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"payment_form_action_confirm","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "upload action submit"
	upload_action_submit__se_for_upload_backs(peventcontext) { 
		let Dest_Is_ctrl=true
		let eventcontext =["DontCall"]
		if(eventcontext.indexOf(peventcontext)==-1) return true;
		let source_id="upload_action_submit"
		let destn_id="upload_action_back"
		let parent_source_id=""
		let event_code="e_1635233109301"
		let event_params={"caller_name":"upload_action_submit__se_for_upload_backs","event_desc":"SE for Upload Backs","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"DontCall","root_source_id":"upload_action_submit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""},"eventcontext":["DontCall"]}
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

	//Handler for ACTION_BUTTON_CLICK event of "upload action submit"
	upload_action_submit__se_upload_actions_confirms(peventcontext) { 
		let Dest_Is_ctrl=true
		let eventcontext =["DontCall"]
		if(eventcontext.indexOf(peventcontext)==-1) return true;
		let source_id="upload_action_submit"
		let destn_id="upload_action_confirm"
		let parent_source_id=""
		let event_code="e_1635233126185"
		let event_params={"caller_name":"upload_action_submit__se_upload_actions_confirms","event_desc":"SE Upload Actions Confirms","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"DontCall","root_source_id":"upload_action_submit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""},"eventcontext":["DontCall"]}
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

	//Handler for ACTION_BUTTON_CLICK event of "upload action submit"
	upload_action_submit__he_for_uploa_daction_submit(peventcontext) { 
		let Dest_Is_ctrl=true
		let eventcontext =["DontCall"]
		if(eventcontext.indexOf(peventcontext)==-1) return true;
		let source_id="upload_action_submit"
		let destn_id="upload_action_submit"
		let parent_source_id=""
		let event_code="e_1635233198931"
		let event_params={"caller_name":"upload_action_submit__he_for_uploa_daction_submit","event_desc":"HE for Uploa dAction Submit","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"DontCall","root_source_id":"upload_action_submit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""},"eventcontext":["DontCall"]}
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

	//Handler for ACTION_BUTTON_CLICK event of "upload action submit"
	upload_action_submit__save_confirmation() { 
		let Dest_Is_ctrl=true
		
		let source_id="upload_action_submit"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1635329599575"
		let event_params={"caller_name":"upload_action_submit__save_confirmation","event_desc":"Save Confirmation","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","message_text":"Please Confirm to Proceed","root_source_id":"upload_action_submit","raiseparam":{"conf_msg":""}}
		let handler_code="conf_msg"
		let internals="save_confirmation__ve_for_pivot_header,"
		let event_data={}
		let data_source={}
		try {
			this.handler.conf_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "save confirmation"
	save_confirmation__ve_for_pivot_header(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="YES"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="save_confirmation"
		let destn_id="transaction_pivot_header"
		let parent_source_id="upload_action_submit"
		let event_code="e_1643096196931"
		let event_params={"caller_name":"save_confirmation__ve_for_pivot_header","event_desc":"VE for pivot header","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"upload_action_submit","raiseparam":{},"parent_event_result":"YES"}
		let handler_code="validate_elements"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "upload action back"
	upload_action_back__ee_for_tds_pivot() { 
		let Dest_Is_ctrl=true
		
		let source_id="upload_action_back"
		let destn_id="transaction_pivot"
		let parent_source_id=""
		let event_code="e_1635228726593"
		let event_params={"caller_name":"upload_action_back__ee_for_tds_pivot","event_desc":"EE for TDS Pivot","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"upload_action_back","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "upload action back"
	upload_action_back__se_for_upload_submit_actions() { 
		let Dest_Is_ctrl=true
		
		let source_id="upload_action_back"
		let destn_id="upload_action_submit"
		let parent_source_id=""
		let event_code="e_1635233207984"
		let event_params={"caller_name":"upload_action_back__se_for_upload_submit_actions","event_desc":"SE for Upload Submit Actions","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"upload_action_back","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "upload action back"
	upload_action_back__he_for_uploadf_action_confirm() { 
		let Dest_Is_ctrl=true
		
		let source_id="upload_action_back"
		let destn_id="upload_action_confirm"
		let parent_source_id=""
		let event_code="e_1635233221859"
		let event_params={"caller_name":"upload_action_back__he_for_uploadf_action_confirm","event_desc":"HE for Uploadf Action Confirm","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"upload_action_back","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "upload action back"
	upload_action_back__he_upload_actions_back_button() { 
		let Dest_Is_ctrl=true
		
		let source_id="upload_action_back"
		let destn_id="upload_action_back"
		let parent_source_id=""
		let event_code="e_1635233240955"
		let event_params={"caller_name":"upload_action_back__he_upload_actions_back_button","event_desc":"HE UPLOAD Actions Back Button","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"upload_action_back","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for MENU_ITEM_CLICK event of "failure transactions edit"
	failure_transactions_edit__spap_for_view_failure_details() { 
		let Dest_Is_ctrl=true
		
		let source_id="failure_transactions_edit"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1635240701091"
		let event_params={"source_comp_id":"failure_transactions","source_ctrl_id":"edit","caller_name":"failure_transactions_edit__spap_for_view_failure_details","event_desc":"SPAP for View Failure Details","event_type":"MENU_ITEM_CLICK","caller_event_context":"SUCCESS","root_source_id":"failure_transactions_edit","raiseparam":{"popup_category":"profile","variable":"p_edit_layout__spap_for_view_failure_details","selector":"p_edit_layout","profile_code":"BTL_1408_1635240499383","window_title":"Modify Transaction","window_height":"","window_width":"auto","window_close_icon":"Y","eventdes":"spap_for_view_failure_details","eventcode":"E_1635240701091"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment edit form submit"
	payment_edit_form_submit__ve_for_edit_for_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_edit_form_submit"
		let destn_id="payment_edit_form"
		let parent_source_id=""
		let event_code="e_1635242031892"
		let event_params={"caller_name":"payment_edit_form_submit__ve_for_edit_for_ui","event_desc":"VE for Edit For UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_edit_form_submit","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="ve_for_edit_for_ui__tbc_for_edit_tbc_action,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ve for edit for ui"
	ve_for_edit_for_ui__tbc_for_edit_tbc_action(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ve_for_edit_for_ui"
		let destn_id="payment_edit_form_tbcedit"
		let parent_source_id="payment_edit_form_submit"
		let event_code="e_1635242063733"
		let event_params={"caller_name":"ve_for_edit_for_ui__tbc_for_edit_tbc_action","event_desc":"TBC for Edit TBC Action","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"payment_edit_form_submit","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment edit form tbcedit"
	payment_edit_form_tbcedit__se_for_pefback() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_edit_form_tbcedit"
		let destn_id="payment_edit_form_back"
		let parent_source_id=""
		let event_code="e_1635242109547"
		let event_params={"caller_name":"payment_edit_form_tbcedit__se_for_pefback","event_desc":"SE for PEF-BACK","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_edit_form_tbcedit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment edit form tbcedit"
	payment_edit_form_tbcedit__se_for_pef() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_edit_form_tbcedit"
		let destn_id="payment_edit_form_confirm"
		let parent_source_id=""
		let event_code="e_1635242154735"
		let event_params={"caller_name":"payment_edit_form_tbcedit__se_for_pef","event_desc":"SE for PEF","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_edit_form_tbcedit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment edit form tbcedit"
	payment_edit_form_tbcedit__de_for_pay_edut_form() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_edit_form_tbcedit"
		let destn_id="payment_edit_form"
		let parent_source_id=""
		let event_code="e_1635242209183"
		let event_params={"caller_name":"payment_edit_form_tbcedit__de_for_pay_edut_form","event_desc":"DE For Pay Edut Form","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_edit_form_tbcedit","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment edit form tbcedit"
	payment_edit_form_tbcedit__e_1635492880800() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_edit_form_tbcedit"
		let destn_id="payment_edit_form_submit"
		let parent_source_id=""
		let event_code="e_1635492880800"
		let event_params={"caller_name":"payment_edit_form_tbcedit__e_1635492880800","event_desc":"E_1635492880800","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_edit_form_tbcedit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment edit form back"
	payment_edit_form_back__se_for_payment_edit_submit_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_edit_form_back"
		let destn_id="payment_edit_form_submit"
		let parent_source_id=""
		let event_code="e_1635242128464"
		let event_params={"caller_name":"payment_edit_form_back__se_for_payment_edit_submit_action","event_desc":"SE for Payment Edit Submit Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_edit_form_back","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment edit form back"
	payment_edit_form_back__ee_fpr_edit_form() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_edit_form_back"
		let destn_id="payment_edit_form"
		let parent_source_id=""
		let event_code="e_1635242189391"
		let event_params={"caller_name":"payment_edit_form_back__ee_fpr_edit_form","event_desc":"EE fpr Edit Form","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_edit_form_back","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment edit form back"
	payment_edit_form_back__he_edit_form_detail_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_edit_form_back"
		let destn_id="payment_edit_form_back"
		let parent_source_id=""
		let event_code="e_1635493462628"
		let event_params={"caller_name":"payment_edit_form_back__he_edit_form_detail_back","event_desc":"HE Edit Form Detail Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_edit_form_back","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment edit form back"
	payment_edit_form_back__he_from_edit_back_to_edit_confirm() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_edit_form_back"
		let destn_id="payment_edit_form_confirm"
		let parent_source_id=""
		let event_code="e_1635493485884"
		let event_params={"caller_name":"payment_edit_form_back__he_from_edit_back_to_edit_confirm","event_desc":"HE from Edit Back to Edit Confirm","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_edit_form_back","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "failure transactions"
	failure_transactions__svm_for_vld_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="failure_transactions"
		let destn_id="failure_transactions"
		let parent_source_id=""
		let event_code="e_1636624636745"
		let event_params={"caller_name":"failure_transactions__svm_for_vld_list","event_desc":"SVM for VLD list","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"failure_transactions","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_vld_list__brfq_for_vld_list,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for vld list"
	svm_for_vld_list__brfq_for_vld_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_vld_list"
		let destn_id="failure_reason"
		let parent_source_id="failure_transactions"
		let event_code="e_1636624761442"
		let event_params={"caller_name":"svm_for_vld_list__brfq_for_vld_list","event_desc":"BRFQ for VLD list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"failure_transactions","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"Y","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment edit form confirm"
	payment_edit_form_confirm__custom_connectors() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_edit_form_confirm"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1635247200419"
		let event_params={"caller_name":"payment_edit_form_confirm__custom_connectors","event_desc":"custom connectors","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_edit_form_confirm","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="custom_connectors__im,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "payment edit form confirm"
	payment_edit_form_confirm__e_1664966687373() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_edit_form_confirm"
		let destn_id="payment_edit_form_back"
		let parent_source_id=""
		let event_code="e_1664966687373"
		let event_params={"caller_name":"payment_edit_form_confirm__e_1664966687373","event_desc":"E_1664966687373","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_edit_form_confirm","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for INTERNAL event of "custom connectors"
	custom_connectors__im(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="custom_connectors"
		let destn_id=""
		let parent_source_id="payment_edit_form_confirm"
		let event_code="e_1635403525738"
		let event_params={"caller_name":"custom_connectors__im","event_desc":"im","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Customer Credit Transfer IPP API (P2P – Money Send) has been Initiated.","root_source_id":"payment_edit_form_confirm","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="im__refresh_screen,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "im"
	im__refresh_screen(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="im"
		let destn_id=""
		let parent_source_id="custom_connectors"
		let event_code="e_1635403674562"
		let event_params={"caller_name":"im__refresh_screen","event_desc":"Refresh Screen","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"payment_edit_form_confirm","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "dashboard search search"
	dashboard_search_search__ssp_for_failure() { 
		let Dest_Is_ctrl=true
		
		let source_id="dashboard_search_search"
		let destn_id="dashboard_search"
		let parent_source_id=""
		let event_code="e_1638511461032"
		let event_params={"caller_name":"dashboard_search_search__ssp_for_failure","event_desc":"SSP for Failure","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"dashboard_search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="ssp_for_failure__brfq_from_dashboard,ssp_for_failure__approval_brfq_from_search,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for failure"
	ssp_for_failure__brfq_from_dashboard(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_failure"
		let destn_id="failure_transactions"
		let parent_source_id="dashboard_search_search"
		let event_code="e_1638511475313"
		let event_params={"caller_name":"ssp_for_failure__brfq_from_dashboard","event_desc":"BRFQ from Dashboard","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dashboard_search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
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

	//Handler for INTERNAL event of "ssp for failure"
	ssp_for_failure__approval_brfq_from_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="ssp_for_failure"
		let destn_id="approval_pending_list"
		let parent_source_id="dashboard_search_search"
		let event_code="e_1646928590829"
		let event_params={"caller_name":"ssp_for_failure__approval_brfq_from_search","event_desc":"Approval BRFQ from search","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dashboard_search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"}}
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

	//Handler for SELECTION_CHANGED event of "transaction pivot"
	transaction_pivot__bt_for_ts_pivot() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_pivot"
		let destn_id="transaction_pivot"
		let parent_source_id=""
		let event_code="e_1635253739564"
		let event_params={"caller_name":"transaction_pivot__bt_for_ts_pivot","event_desc":"BT for TS Pivot","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_pivot","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "upload action load pivot"
	upload_action_load_pivot__brfq_for_tp() { 
		let Dest_Is_ctrl=true
		
		let source_id="upload_action_load_pivot"
		let destn_id="transaction_pivot"
		let parent_source_id=""
		let event_code="e_1635254229924"
		let event_params={"caller_name":"upload_action_load_pivot__brfq_for_tp","event_desc":"BRFQ for TP","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"upload_action_load_pivot","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":""}}
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

	//Handler for SELECTION_CHANGED event of "payment tabview"
	payment_tabview__brfq_for_ts_pivot(peventcontext) { 
		let Dest_Is_ctrl=true
		let eventcontext =["Multi Tran"]
		if(eventcontext.indexOf(peventcontext)==-1) return true;
		let source_id="payment_tabview"
		let destn_id="transaction_pivot"
		let parent_source_id=""
		let event_code="e_1635307945468"
		let event_params={"caller_name":"payment_tabview__brfq_for_ts_pivot","event_desc":"BRFQ for TS Pivot","event_type":"SELECTION_CHANGED","caller_event_context":"Multi Tran","root_source_id":"payment_tabview","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":""},"eventcontext":["Multi Tran"]}
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

	//Handler for SELECTION_CHANGED event of "approval pending list"
	approval_pending_list__svm_for_approval_pending_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="approval_pending_list"
		let destn_id="approval_pending_list"
		let parent_source_id=""
		let event_code="e_1646928402751"
		let event_params={"caller_name":"approval_pending_list__svm_for_approval_pending_list","event_desc":"SVM for Approval pending list","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"approval_pending_list","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "transactions"
	transactions__svm_for_view_transactionlist() { 
		let Dest_Is_ctrl=true
		
		let source_id="transactions"
		let destn_id="transactions"
		let parent_source_id=""
		let event_code="e_1647260212080"
		let event_params={"caller_name":"transactions__svm_for_view_transactionlist","event_desc":"SVM for view transactionlist","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transactions","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_view_transactionlist__brfq_from_hst_to_vertical,svm_for_view_transactionlist__brfq_for_tran_detail,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "transactions"
	transactions__se_for_pacs008() { 
		let Dest_Is_ctrl=true
		
		let source_id="transactions"
		let destn_id="history_search_view_pacs008"
		let parent_source_id=""
		let event_code="e_1665485713141"
		let event_params={"caller_name":"transactions__se_for_pacs008","event_desc":"SE for Pacs008","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transactions","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for INTERNAL event of "svm for view transactionlist"
	svm_for_view_transactionlist__brfq_from_hst_to_vertical(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_view_transactionlist"
		let destn_id="transaction_details_view"
		let parent_source_id="transactions"
		let event_code="e_1647260270318"
		let event_params={"caller_name":"svm_for_view_transactionlist__brfq_from_hst_to_vertical","event_desc":"BRFQ from Hst to Vertical","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"transactions","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"Y","avoid_key_column_filter":"Y"},"parent_event_result":"SUCCESS"}
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

	//Handler for INTERNAL event of "svm for view transactionlist"
	svm_for_view_transactionlist__brfq_for_tran_detail(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_view_transactionlist"
		let destn_id="transaction_detail"
		let parent_source_id="transactions"
		let event_code="e_1664969332419"
		let event_params={"caller_name":"svm_for_view_transactionlist__brfq_for_tran_detail","event_desc":"BRFQ for Tran Detail","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"transactions","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_tran_detail__sfr_for_tdl,"
		let event_data={}
		let data_source={}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for tran detail"
	brfq_for_tran_detail__sfr_for_tdl(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_tran_detail"
		let destn_id="transaction_detail"
		let parent_source_id="svm_for_view_transactionlist"
		let event_code="e_1664969366933"
		let event_params={"caller_name":"brfq_for_tran_detail__sfr_for_tdl","event_desc":"sfr for TDL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"transactions","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for MENU_ITEM_CLICK event of "transactions view"
	transactions_view__spap_for_view_tran_details() { 
		let Dest_Is_ctrl=true
		
		let source_id="transactions_view"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1647261749978"
		let event_params={"source_comp_id":"transactions","source_ctrl_id":"view","caller_name":"transactions_view__spap_for_view_tran_details","event_desc":"SPAP for View Tran Details","event_type":"MENU_ITEM_CLICK","caller_event_context":"SUCCESS","root_source_id":"transactions_view","raiseparam":{"popup_category":"profile","variable":"p_vertical_details_layout__spap_for_view_tran_details","selector":"p_vertical_details_layout","profile_code":"BTL_1408_1647259814376","window_title":"View Transaction Details","window_height":900,"window_width":"1000px","window_close_icon":"Y","eventdes":"spap_for_view_tran_details","eventcode":"E_1647261749978"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment form action verify sender balance"
	payment_form_action_verify_sender_balance__cc_for_bind_payor_acct_balance_and_sanction_limit() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_form_action_verify_sender_balance"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1652418838680"
		let event_params={"caller_name":"payment_form_action_verify_sender_balance__cc_for_bind_payor_acct_balance_and_sanction_limit","event_desc":"CC for bind payor acct balance and sanction limit","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_form_action_verify_sender_balance","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_bind_payor_acct_balance_and_sanction_limit__info_msg_after_show_balance_ide_success,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for bind payor acct balance and sanction limit"
	cc_for_bind_payor_acct_balance_and_sanction_limit__info_msg_after_show_balance_ide_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_bind_payor_acct_balance_and_sanction_limit"
		let destn_id=""
		let parent_source_id="payment_form_action_verify_sender_balance"
		let event_code="e_1652418883303"
		let event_params={"caller_name":"cc_for_bind_payor_acct_balance_and_sanction_limit__info_msg_after_show_balance_ide_success","event_desc":"INFO MSG after show balance ide success","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Customer Balance Inquiry IPP API (Balanceinquiry) has been Initiated.","root_source_id":"payment_form_action_verify_sender_balance","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="info_msg_after_show_balance_ide_success__tbc_for_trigger_sba_hide_btn,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "info msg after show balance ide success"
	info_msg_after_show_balance_ide_success__tbc_for_trigger_sba_hide_btn(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="info_msg_after_show_balance_ide_success"
		let destn_id="payment_form_tbc_hide"
		let parent_source_id="cc_for_bind_payor_acct_balance_and_sanction_limit"
		let event_code="e_1652428450289"
		let event_params={"caller_name":"info_msg_after_show_balance_ide_success__tbc_for_trigger_sba_hide_btn","event_desc":"TBC for trigger sba hide btn","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"payment_form_action_verify_sender_balance","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment form tbc hide"
	payment_form_tbc_hide__he_for_show_payor_acc_balance_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_form_tbc_hide"
		let destn_id="payment_form_action_verify_sender_balance"
		let parent_source_id=""
		let event_code="e_1652428336288"
		let event_params={"caller_name":"payment_form_tbc_hide__he_for_show_payor_acc_balance_btn","event_desc":"HE for Show payor Acc balance btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_form_tbc_hide","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment form action reject"
	payment_form_action_reject__cc_for_reject() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_form_action_reject"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1664883225427"
		let event_params={"caller_name":"payment_form_action_reject__cc_for_reject","event_desc":"CC for Reject","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_form_action_reject","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_reject__im_for_reject,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for reject"
	cc_for_reject__im_for_reject(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_reject"
		let destn_id=""
		let parent_source_id="payment_form_action_reject"
		let event_code="e_1664883263235"
		let event_params={"caller_name":"cc_for_reject__im_for_reject","event_desc":"IM for Reject","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Transaction has been rejected successfully","root_source_id":"payment_form_action_reject","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="im_for_reject__rs_for_reject,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "im for reject"
	im_for_reject__rs_for_reject() { 
		let Dest_Is_ctrl=true
		
		let source_id="im_for_reject"
		let destn_id=""
		let parent_source_id="cc_for_reject"
		let event_code="e_1664883768285"
		let event_params={"caller_name":"im_for_reject__rs_for_reject","event_desc":"RS for Reject","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"payment_form_action_reject","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment form action verify recipient iban"
	payment_form_action_verify_recipient_iban__cc_for_vri() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_form_action_verify_recipient_iban"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1664883625430"
		let event_params={"caller_name":"payment_form_action_verify_recipient_iban__cc_for_vri","event_desc":"CC for VRI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_form_action_verify_recipient_iban","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_vri__im_for_vri,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for vri"
	cc_for_vri__im_for_vri(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_vri"
		let destn_id=""
		let parent_source_id="payment_form_action_verify_recipient_iban"
		let event_code="e_1664883650233"
		let event_params={"caller_name":"cc_for_vri__im_for_vri","event_desc":"IM for VRI","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"payment_form_action_verify_recipient_iban","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "payment form action response"
	payment_form_action_response__ccw__for_responce() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_form_action_response"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1665121783587"
		let event_params={"caller_name":"payment_form_action_response__ccw__for_responce","event_desc":"CCW  for Responce","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_form_action_response","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="ccw__for_responce__cc_for_responce,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ccw  for responce"
	ccw__for_responce__cc_for_responce(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ccw__for_responce"
		let destn_id=""
		let parent_source_id="payment_form_action_response"
		let event_code="e_1665121818871"
		let event_params={"caller_name":"ccw__for_responce__cc_for_responce","event_desc":"CC for Responce","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"payment_form_action_response","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="cc_for_responce__im_for_responce,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for responce"
	cc_for_responce__im_for_responce(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_responce"
		let destn_id=""
		let parent_source_id="ccw__for_responce"
		let event_code="e_1665121854775"
		let event_params={"caller_name":"cc_for_responce__im_for_responce","event_desc":"IM for Responce","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Payment status report has been generated successfully","root_source_id":"payment_form_action_response","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="im_for_responce__rs_for_responce,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "im for responce"
	im_for_responce__rs_for_responce(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="im_for_responce"
		let destn_id=""
		let parent_source_id="cc_for_responce"
		let event_code="e_1665121874520"
		let event_params={"caller_name":"im_for_responce__rs_for_responce","event_desc":"RS for Responce","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"payment_form_action_response","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment form action verify sender iban"
	payment_form_action_verify_sender_iban__cc_for_vsi() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_form_action_verify_sender_iban"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1664883831440"
		let event_params={"caller_name":"payment_form_action_verify_sender_iban__cc_for_vsi","event_desc":"CC for VSI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_form_action_verify_sender_iban","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_vsi__im_for_vsi,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for vsi"
	cc_for_vsi__im_for_vsi(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_vsi"
		let destn_id=""
		let parent_source_id="payment_form_action_verify_sender_iban"
		let event_code="e_1664883851952"
		let event_params={"caller_name":"cc_for_vsi__im_for_vsi","event_desc":"IM for VSI","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"payment_form_action_verify_sender_iban","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "tree"
	tree__svm_for_tree_cpssss() { 
		let Dest_Is_ctrl=true
		
		let source_id="tree"
		let destn_id="tree"
		let parent_source_id=""
		let event_code="e_1664956051047"
		let event_params={"caller_name":"tree__svm_for_tree_cpssss","event_desc":"SVM for tree cpssss","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"tree","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "history search view pacs008"
	history_search_view_pacs008__spap_for_pacs008() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_search_view_pacs008"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1665550482359"
		let event_params={"caller_name":"history_search_view_pacs008__spap_for_pacs008","event_desc":"SPAP for pacs008","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"history_search_view_pacs008","raiseparam":{"popup_category":"profile","variable":"p_pacs008_layout__spap_for_pacs008","selector":"p_pacs008_layout","profile_code":"BTL_1408_1665482241931","window_title":"","window_height":550,"window_width":"800px","window_close_icon":"Y","eventdes":"spap_for_pacs008","eventcode":"E_1665550482359"}}
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

	//Handler for SELECTION_CHANGED event of "transaction detail"
	transaction_detail__svm_for_view_transaction_dtl() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_detail"
		let destn_id="transaction_detail"
		let parent_source_id=""
		let event_code="e_1665483233272"
		let event_params={"caller_name":"transaction_detail__svm_for_view_transaction_dtl","event_desc":"SVM for view transaction dtl","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_detail","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "transaction detail"
	transaction_detail__se_for_pacs002() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_detail"
		let destn_id="history_search_view_pacs002"
		let parent_source_id=""
		let event_code="e_1665485754555"
		let event_params={"caller_name":"transaction_detail__se_for_pacs002","event_desc":"SE for Pacs002","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_detail","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "pacs002 ui close"
	pacs002_ui_close__cp_for_pacs002() { 
		let Dest_Is_ctrl=true
		
		let source_id="pacs002_ui_close"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1665550084402"
		let event_params={"popup_info":{"context":""},"caller_name":"pacs002_ui_close__cp_for_pacs002","event_desc":"CP for pacs002","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"pacs002_ui_close","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "pacs008 ui close"
	pacs008_ui_close__cp_for_pasc008() { 
		let Dest_Is_ctrl=true
		
		let source_id="pacs008_ui_close"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1665550558478"
		let event_params={"popup_info":{"context":""},"caller_name":"pacs008_ui_close__cp_for_pasc008","event_desc":"CP for pasc008","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"pacs008_ui_close","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "history search view pacs002"
	history_search_view_pacs002__spap_for_view_pacs002() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_search_view_pacs002"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1665549901147"
		let event_params={"caller_name":"history_search_view_pacs002__spap_for_view_pacs002","event_desc":"SPAP for view pacs002","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"history_search_view_pacs002","raiseparam":{"popup_category":"profile","variable":"p_pacs002_layout___spap_for_view_pacs002","selector":"p_pacs002_layout_","profile_code":"BTL_1408_1665482093814","window_title":"","window_height":550,"window_width":"800px","window_close_icon":"Y","eventdes":"spap_for_view_pacs002","eventcode":"E_1665549901147"}}
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

	//Handler for SELECTION_CHANGED event of "cust transaction ui dbtr acct name"
	cust_transaction_ui_dbtr_acct_name__fcb_for_account_name_to_phone__payment_form() { 
		let Dest_Is_ctrl=true
		
		let source_id="cust_transaction_ui_dbtr_acct_name"
		let destn_id="cust_transaction_ui_dbtr_phone_no"
		let parent_source_id=""
		let event_code="e_1665473844074"
		let event_params={"source_comp_id":"payment_form","source_ctrl_id":"dbtr_acct_name","destn_comp_id":"payment_form","destn_ctrl_id":"dbtr_phone_no","caller_name":"cust_transaction_ui_dbtr_acct_name__fcb_for_account_name_to_phone__payment_form","event_desc":"FCB for Account Name to Phone","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"cust_transaction_ui~uicgc_1~ui~df_1304_1665385905734~1","raiseparam":{"parentcolumn":"CUSTOMER","need_selecteditem":"N"}}
		let handler_code="filter_combo_binding"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.filter_combo_binding(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "cust transaction ui dbtr acct name"
	cust_transaction_ui_dbtr_acct_name__de_for_phone_number__payment_form() { 
		let Dest_Is_ctrl=true
		
		let source_id="cust_transaction_ui_dbtr_acct_name"
		let destn_id="cust_transaction_ui_dbtr_phone_no"
		let parent_source_id=""
		let event_code="e_1665473881951"
		let event_params={"source_comp_id":"payment_form","source_ctrl_id":"dbtr_acct_name","destn_comp_id":"payment_form","destn_ctrl_id":"dbtr_phone_no","caller_name":"cust_transaction_ui_dbtr_acct_name__de_for_phone_number__payment_form","event_desc":"DE for phone number","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"cust_transaction_ui~uicgc_1~ui~df_1304_1665385905734~1","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "cust transaction ui dbtr acct name"
	cust_transaction_ui_dbtr_acct_name__svm_for_combo__payment_form() { 
		let Dest_Is_ctrl=true
		
		let source_id="cust_transaction_ui_dbtr_acct_name"
		let destn_id="cust_transaction_ui_dbtr_acct_name"
		let parent_source_id=""
		let event_code="e_1665473939055"
		let event_params={"source_comp_id":"payment_form","source_ctrl_id":"dbtr_acct_name","destn_comp_id":"payment_form","destn_ctrl_id":"dbtr_acct_name","caller_name":"cust_transaction_ui_dbtr_acct_name__svm_for_combo__payment_form","event_desc":"SVM for combo","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"cust_transaction_ui~uicgc_1~ui~df_1304_1665385905734~1","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={"control":{"e_1665473939055":{"dts":{"dt_1304_1665384453253":{"dtts":{"dtt_1304_1665385772257":{"uicgc_code":"CONTROL","event_code":"E_1665473939055","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665385772257","dtt_desc":"NPSS Cust Transactions","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"CUSTOMER","level":"MI_LEVEL","name":"MI_LEVEL_CUSTOMER","setd3name":""}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "cust transaction ui dbtr acct name"
	cust_transaction_ui_dbtr_acct_name__de_for_sanction_limit__payment_form() { 
		let Dest_Is_ctrl=true
		
		let source_id="cust_transaction_ui_dbtr_acct_name"
		let destn_id="cust_transaction_ui_dbtr_sanction_limit"
		let parent_source_id=""
		let event_code="e_1665474010197"
		let event_params={"source_comp_id":"payment_form","source_ctrl_id":"dbtr_acct_name","destn_comp_id":"payment_form","destn_ctrl_id":"dbtr_sanction_limit","caller_name":"cust_transaction_ui_dbtr_acct_name__de_for_sanction_limit__payment_form","event_desc":"DE for sanction limit","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"cust_transaction_ui~uicgc_1~ui~df_1304_1665385905734~1","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "cust transaction ui dbtr acct name"
	cust_transaction_ui_dbtr_acct_name__de_for_account_balance__payment_form() { 
		let Dest_Is_ctrl=true
		
		let source_id="cust_transaction_ui_dbtr_acct_name"
		let destn_id="cust_transaction_ui_dbtr_acct_balance"
		let parent_source_id=""
		let event_code="e_1665474050491"
		let event_params={"source_comp_id":"payment_form","source_ctrl_id":"dbtr_acct_name","destn_comp_id":"payment_form","destn_ctrl_id":"dbtr_acct_balance","caller_name":"cust_transaction_ui_dbtr_acct_name__de_for_account_balance__payment_form","event_desc":"DE for Account Balance","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"cust_transaction_ui~uicgc_1~ui~df_1304_1665385905734~1","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "cust transaction ui dbtr acct name"
	cust_transaction_ui_dbtr_acct_name__shc_for_customer_name__payment_form() { 
		let Dest_Is_ctrl=true
		
		let source_id="cust_transaction_ui_dbtr_acct_name"
		let destn_id="payment_form"
		let parent_source_id=""
		let event_code="e_1665474128153"
		let event_params={"source_comp_id":"payment_form","source_ctrl_id":"dbtr_acct_name","caller_name":"cust_transaction_ui_dbtr_acct_name__shc_for_customer_name__payment_form","event_desc":"SHC for customer name","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"cust_transaction_ui~uicgc_1~ui~df_1304_1665385905734~1","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "cust transaction ui cdtr pmt type"
	cust_transaction_ui_cdtr_pmt_type__show_hide_controls__payment_form() { 
		let Dest_Is_ctrl=true
		
		let source_id="cust_transaction_ui_cdtr_pmt_type"
		let destn_id="payment_form"
		let parent_source_id=""
		let event_code="e_1665474298325"
		let event_params={"source_comp_id":"payment_form","source_ctrl_id":"cdtr_pmt_type","caller_name":"cust_transaction_ui_cdtr_pmt_type__show_hide_controls__payment_form","event_desc":"Show hide controls","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"cust_transaction_ui~uicgc_1~ui~df_1304_1665385905734~2","raiseparam":{}}
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
