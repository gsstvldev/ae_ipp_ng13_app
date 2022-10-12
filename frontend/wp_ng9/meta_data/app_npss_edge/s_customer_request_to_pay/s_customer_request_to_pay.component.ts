/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26389 
Modified By     : Admin 
Modified Date   : 2022-Oct-12 4:58 AM 
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
	cg_code : string = "CG_1304_1665471215822"
	key_column : any = {"dtt_1304_1665384533560":"NPSSCPA_ID","dtt_1304_1665385314469":"NPSSCPB_ID","dtt_1304_1665385772257":"NPSSCT_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "data_entry_ui"
	key_events : any = {}
	btl_1304_1665471459881 : string = "p_main_layout"
	forms : any = ["uicgc_1"]
	data_entry_ui : any = {}
	data_entry_ui_initiate_credit_transfer : any = {}
	data_entry_ui_show_payor_account_bal : any = {}
	data_entry_ui_value_date_trigger : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private torus_cs_show_hideService:torus_cs_show_hideService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Data Entry UI" 
		this.data_entry_ui.uictrl_code = "dynamic_ui"
		this.data_entry_ui.uicgc_desc = "Data Entry UI"
		this.data_entry_ui.uicgc_code = "uicgc_1"
		this.data_entry_ui.params = {}
		this.data_entry_ui.datasource = {"e_1665471786298":{"dt_1304_1665384453253":{"dtt_1304_1665385772257":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"E_1665471786298","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665385772257","dtt_desc":"NPSS Cust Transactions","ds_eligible":"","ds_final":"DS_1665474513932","final_state":{"ts":[{"binding_name":"STATUS","binding_value":"OP_P2P_PAYMENT_INITIATED","data_type":"TEXT"},{"binding_name":"PROCESS_STATUS","binding_value":"CREDITINITIATED","data_type":"TEXT"}],"trn":[]},"property_json":null,"system_type":"DEFAULT","eq_info":{},"listing_mode":"","locking_mode":"","locking_parameter":"","filter":[],"databinding":[]}}}}}}
		this.data_entry_ui.context_menu = []
		this.data_entry_ui.views = {"first":"DTT_1304_1665385772257","is_tab_mode":"N","dtt_1304_1665385772257":{"0":[{"dttv_id":"Cust Transaction UI","tab_order":0,"tab_name":"","uicgc_description":"Data Entry UI","role_description":"default","dtt_description":"NPSS Cust Transactions"}]}}
		this.data_entry_ui.onChangecomponent = new EventEmitter<any>()
		this.data_entry_ui.show = true
		this.data_entry_ui.dynamic_param = {}
		this.data_entry_ui.f_cust_transaction_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.data_entry_ui.form_name = "f_cust_transaction_ui"
		
		// "Initiate Credit Transfer" Button of "Data Entry UI" component
		this.data_entry_ui_initiate_credit_transfer.label_name = "Initiate Credit Transfer"
		this.data_entry_ui_initiate_credit_transfer.show = true
		this.data_entry_ui_initiate_credit_transfer.disabled = false
		this.data_entry_ui_initiate_credit_transfer.params = {"icon_only":false,"uicgcc_style":""}
		this.data_entry_ui_initiate_credit_transfer.dynamic_param = {}
		this.data_entry_ui_initiate_credit_transfer.role = []
		this.data_entry_ui_initiate_credit_transfer.action = ""
		
		// "Show Payor Account Bal" Button of "Data Entry UI" component
		this.data_entry_ui_show_payor_account_bal.label_name = "Show Payor Account Bal"
		this.data_entry_ui_show_payor_account_bal.show = true
		this.data_entry_ui_show_payor_account_bal.disabled = false
		this.data_entry_ui_show_payor_account_bal.params = {"icon_only":false,"uicgcc_style":""}
		this.data_entry_ui_show_payor_account_bal.dynamic_param = {}
		this.data_entry_ui_show_payor_account_bal.role = []
		this.data_entry_ui_show_payor_account_bal.action = ""
		
		// "Value Date Trigger" Button of "Data Entry UI" component
		this.data_entry_ui_value_date_trigger.label_name = "Value Date Trigger"
		this.data_entry_ui_value_date_trigger.show = true
		this.data_entry_ui_value_date_trigger.disabled = false
		this.data_entry_ui_value_date_trigger.params = {"icon_only":false,"uicgcc_style":""}
		this.data_entry_ui_value_date_trigger.dynamic_param = {}
		this.data_entry_ui_value_date_trigger.role = []
		this.data_entry_ui_value_date_trigger.action = ""
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__cf_on_page_load()
		this.page_load__he_value_date_trigger_on_page_load()
		this.page_load__tbc_for_value_date_on_page_load()
	}

	//Handler for ACTION_BUTTON_CLICK event of "data entry ui initiate credit transfer"
	data_entry_ui_initiate_credit_transfer__action_button_click(){
		this.data_entry_ui_initiate_credit_transfer__validate_ele()
	}

	//Handler for INTERNAL event of "validate ele"
	validate_ele__internal(parent_event_result){
		this.validate_ele__save_tran_for_transfer_pay(parent_event_result)
	}

	//Handler for INTERNAL event of "save tran for transfer pay"
	save_tran_for_transfer_pay__internal(parent_event_result){
		this.save_tran_for_transfer_pay__info_msg(parent_event_result)
	}

	//Handler for INTERNAL event of "info msg"
	info_msg__internal(parent_event_result){
		this.info_msg__rs_for_success(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "data entry ui show payor account bal"
	data_entry_ui_show_payor_account_bal__action_button_click(){
		this.data_entry_ui_show_payor_account_bal__cc_foe_bind_acct_balance_and_sanct_limit()
	}

	//Handler for INTERNAL event of "cc foe bind acct balance and sanct limit"
	cc_foe_bind_acct_balance_and_sanct_limit__internal(parent_event_result){
		this.cc_foe_bind_acct_balance_and_sanct_limit__info_msg_after_ide_success(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "cust transaction ui dbtr acct name"
	cust_transaction_ui_dbtr_acct_name__selection_changed(){
		this.cust_transaction_ui_dbtr_acct_name__fcb_for_account_name_to_phone__data_entry_ui()
		this.cust_transaction_ui_dbtr_acct_name__de_for_phone_number__data_entry_ui()
		this.cust_transaction_ui_dbtr_acct_name__svm_for_combo__data_entry_ui()
		this.cust_transaction_ui_dbtr_acct_name__de_for_sanction_limit__data_entry_ui()
		this.cust_transaction_ui_dbtr_acct_name__de_for_account_balance__data_entry_ui()
		this.cust_transaction_ui_dbtr_acct_name__shc_for_customer_name__data_entry_ui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "data entry ui value date trigger"
	data_entry_ui_value_date_trigger__action_button_click(){
		this.data_entry_ui_value_date_trigger__he_for_value_date_on_trigger__data_entry_ui()
		this.data_entry_ui_value_date_trigger__he_for_sanction_limit_on_trigger__data_entry_ui()
	}

	//Handler for SELECTION_CHANGED event of "cust transaction ui cdtr pmt type"
	cust_transaction_ui_cdtr_pmt_type__selection_changed(){
		this.cust_transaction_ui_cdtr_pmt_type__show_hide_controls__data_entry_ui()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__cf_on_page_load() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1665471594174"
		let event_params={"caller_name":"page_load__cf_on_page_load","event_desc":"CF on Page load","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""}}
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
	page_load__he_value_date_trigger_on_page_load() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="data_entry_ui_value_date_trigger"
		let parent_source_id=""
		let event_code="e_1665471640164"
		let event_params={"caller_name":"page_load__he_value_date_trigger_on_page_load","event_desc":"HE Value date trigger on page load","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__tbc_for_value_date_on_page_load() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="data_entry_ui_value_date_trigger"
		let parent_source_id=""
		let event_code="e_1665471672692"
		let event_params={"caller_name":"page_load__tbc_for_value_date_on_page_load","event_desc":"TBC for Value date on page load","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "data entry ui initiate credit transfer"
	data_entry_ui_initiate_credit_transfer__validate_ele() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_ui_initiate_credit_transfer"
		let destn_id="data_entry_ui"
		let parent_source_id=""
		let event_code="e_1665471732018"
		let event_params={"caller_name":"data_entry_ui_initiate_credit_transfer__validate_ele","event_desc":"validate ELE","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"data_entry_ui_initiate_credit_transfer","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="validate_ele__save_tran_for_transfer_pay,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "validate ele"
	validate_ele__save_tran_for_transfer_pay(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="validate_ele"
		let destn_id="data_entry_ui"
		let parent_source_id="data_entry_ui_initiate_credit_transfer"
		let event_code="e_1665471786298"
		let event_params={"caller_name":"validate_ele__save_tran_for_transfer_pay","event_desc":"Save Tran for Transfer Pay","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"data_entry_ui_initiate_credit_transfer","raiseparam":{"reset_selection":"Y","need_clear_value":"Y","no_change_status_on_modify":"N","release_lock":"Y","clear_cache":"Y"},"parent_event_result":"SUCCESS"}
		let handler_code="save_tran"
		let internals="save_tran_for_transfer_pay__info_msg,"
		let event_data={"data_entry_ui":{"e_1665471786298":{"dts":{"dt_1304_1665384453253":{"dtts":{"":{"uicgc_code":"UICGC_1","event_code":"E_1665471786298","dt_code":"DT_1304_1665384453253","dtt_code":"","dt_desc":"Customer DTG","dtt_desc":"NPSS Cust Transactions","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[],"get_from_memory":[{"level":"SESSION_LEVEL","value":"ROOT_SCODE","tb_data":"Y","column":"PRODUCT_CODE","d3name":"ROOT_SCODE"}],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"e_1665471786298":{"dt_1304_1665384453253":{"dtt_1304_1665385772257":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"E_1665471786298","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665385772257","dtt_desc":"NPSS Cust Transactions","ds_eligible":"","ds_final":"DS_1665474513932","final_state":{"ts":[{"binding_name":"STATUS","binding_value":"OP_P2P_PAYMENT_INITIATED","data_type":"TEXT"},{"binding_name":"PROCESS_STATUS","binding_value":"CREDITINITIATED","data_type":"TEXT"}],"trn":[]},"property_json":null,"system_type":"DEFAULT","eq_info":{},"listing_mode":"","locking_mode":"","locking_parameter":"","filter":[],"databinding":[]}}}}}}
		try {
			this.handler.save_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "save tran for transfer pay"
	save_tran_for_transfer_pay__info_msg(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="save_tran_for_transfer_pay"
		let destn_id=""
		let parent_source_id="validate_ele"
		let event_code="e_1665471817337"
		let event_params={"caller_name":"save_tran_for_transfer_pay__info_msg","event_desc":"info msg","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Customer Credit Transfer IPP API (P2P – Money Send) has been Initiated.","root_source_id":"data_entry_ui_initiate_credit_transfer","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="info_msg__rs_for_success,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "info msg"
	info_msg__rs_for_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="info_msg"
		let destn_id=""
		let parent_source_id="save_tran_for_transfer_pay"
		let event_code="e_1665471858409"
		let event_params={"caller_name":"info_msg__rs_for_success","event_desc":"RS for success","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"data_entry_ui_initiate_credit_transfer","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "data entry ui show payor account bal"
	data_entry_ui_show_payor_account_bal__cc_foe_bind_acct_balance_and_sanct_limit() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_ui_show_payor_account_bal"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1665471952895"
		let event_params={"caller_name":"data_entry_ui_show_payor_account_bal__cc_foe_bind_acct_balance_and_sanct_limit","event_desc":"CC foe bind acct balance and sanct limit","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"data_entry_ui_show_payor_account_bal","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_foe_bind_acct_balance_and_sanct_limit__info_msg_after_ide_success,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc foe bind acct balance and sanct limit"
	cc_foe_bind_acct_balance_and_sanct_limit__info_msg_after_ide_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_foe_bind_acct_balance_and_sanct_limit"
		let destn_id=""
		let parent_source_id="data_entry_ui_show_payor_account_bal"
		let event_code="e_1665471986567"
		let event_params={"caller_name":"cc_foe_bind_acct_balance_and_sanct_limit__info_msg_after_ide_success","event_desc":"INFO MSG after ide success","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Customer Balance Inquiry IPP API (Balanceinquiry) has been Initiated.","root_source_id":"data_entry_ui_show_payor_account_bal","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
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

	//Handler for SELECTION_CHANGED event of "cust transaction ui dbtr acct name"
	cust_transaction_ui_dbtr_acct_name__fcb_for_account_name_to_phone__data_entry_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="cust_transaction_ui_dbtr_acct_name"
		let destn_id="cust_transaction_ui_dbtr_phone_no"
		let parent_source_id=""
		let event_code="e_1665473844074"
		let event_params={"source_comp_id":"data_entry_ui","source_ctrl_id":"dbtr_acct_name","destn_comp_id":"data_entry_ui","destn_ctrl_id":"dbtr_phone_no","caller_name":"cust_transaction_ui_dbtr_acct_name__fcb_for_account_name_to_phone__data_entry_ui","event_desc":"FCB for Account Name to Phone","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"cust_transaction_ui~uicgc_1~ui~df_1304_1665385905734~1","raiseparam":{"parentcolumn":"CUSTOMER","need_selecteditem":"N"}}
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
	cust_transaction_ui_dbtr_acct_name__de_for_phone_number__data_entry_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="cust_transaction_ui_dbtr_acct_name"
		let destn_id="cust_transaction_ui_dbtr_phone_no"
		let parent_source_id=""
		let event_code="e_1665473881951"
		let event_params={"source_comp_id":"data_entry_ui","source_ctrl_id":"dbtr_acct_name","destn_comp_id":"data_entry_ui","destn_ctrl_id":"dbtr_phone_no","caller_name":"cust_transaction_ui_dbtr_acct_name__de_for_phone_number__data_entry_ui","event_desc":"DE for phone number","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"cust_transaction_ui~uicgc_1~ui~df_1304_1665385905734~1","raiseparam":{}}
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
	cust_transaction_ui_dbtr_acct_name__svm_for_combo__data_entry_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="cust_transaction_ui_dbtr_acct_name"
		let destn_id="cust_transaction_ui_dbtr_acct_name"
		let parent_source_id=""
		let event_code="e_1665473939055"
		let event_params={"source_comp_id":"data_entry_ui","source_ctrl_id":"dbtr_acct_name","destn_comp_id":"data_entry_ui","destn_ctrl_id":"dbtr_acct_name","caller_name":"cust_transaction_ui_dbtr_acct_name__svm_for_combo__data_entry_ui","event_desc":"SVM for combo","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"cust_transaction_ui~uicgc_1~ui~df_1304_1665385905734~1","raiseparam":{}}
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
	cust_transaction_ui_dbtr_acct_name__de_for_sanction_limit__data_entry_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="cust_transaction_ui_dbtr_acct_name"
		let destn_id="cust_transaction_ui_dbtr_sanction_limit"
		let parent_source_id=""
		let event_code="e_1665474010197"
		let event_params={"source_comp_id":"data_entry_ui","source_ctrl_id":"dbtr_acct_name","destn_comp_id":"data_entry_ui","destn_ctrl_id":"dbtr_sanction_limit","caller_name":"cust_transaction_ui_dbtr_acct_name__de_for_sanction_limit__data_entry_ui","event_desc":"DE for sanction limit","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"cust_transaction_ui~uicgc_1~ui~df_1304_1665385905734~1","raiseparam":{}}
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
	cust_transaction_ui_dbtr_acct_name__de_for_account_balance__data_entry_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="cust_transaction_ui_dbtr_acct_name"
		let destn_id="cust_transaction_ui_dbtr_acct_balance"
		let parent_source_id=""
		let event_code="e_1665474050491"
		let event_params={"source_comp_id":"data_entry_ui","source_ctrl_id":"dbtr_acct_name","destn_comp_id":"data_entry_ui","destn_ctrl_id":"dbtr_acct_balance","caller_name":"cust_transaction_ui_dbtr_acct_name__de_for_account_balance__data_entry_ui","event_desc":"DE for Account Balance","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"cust_transaction_ui~uicgc_1~ui~df_1304_1665385905734~1","raiseparam":{}}
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
	cust_transaction_ui_dbtr_acct_name__shc_for_customer_name__data_entry_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="cust_transaction_ui_dbtr_acct_name"
		let destn_id="data_entry_ui"
		let parent_source_id=""
		let event_code="e_1665474128153"
		let event_params={"source_comp_id":"data_entry_ui","source_ctrl_id":"dbtr_acct_name","caller_name":"cust_transaction_ui_dbtr_acct_name__shc_for_customer_name__data_entry_ui","event_desc":"SHC for customer name","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"cust_transaction_ui~uicgc_1~ui~df_1304_1665385905734~1","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "data entry ui value date trigger"
	data_entry_ui_value_date_trigger__he_for_value_date_on_trigger__data_entry_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_ui_value_date_trigger"
		let destn_id="cust_transaction_ui_value_date"
		let parent_source_id=""
		let event_code="e_1665474197158"
		let event_params={"destn_comp_id":"data_entry_ui","destn_ctrl_id":"value_date","caller_name":"data_entry_ui_value_date_trigger__he_for_value_date_on_trigger__data_entry_ui","event_desc":"HE for Value Date on Trigger","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"data_entry_ui_value_date_trigger","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "data entry ui value date trigger"
	data_entry_ui_value_date_trigger__he_for_sanction_limit_on_trigger__data_entry_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_ui_value_date_trigger"
		let destn_id="cust_transaction_ui_dbtr_sanction_limit"
		let parent_source_id=""
		let event_code="e_1665474242109"
		let event_params={"destn_comp_id":"data_entry_ui","destn_ctrl_id":"dbtr_sanction_limit","caller_name":"data_entry_ui_value_date_trigger__he_for_sanction_limit_on_trigger__data_entry_ui","event_desc":"HE for sanction limit on trigger","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"data_entry_ui_value_date_trigger","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "cust transaction ui cdtr pmt type"
	cust_transaction_ui_cdtr_pmt_type__show_hide_controls__data_entry_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="cust_transaction_ui_cdtr_pmt_type"
		let destn_id="data_entry_ui"
		let parent_source_id=""
		let event_code="e_1665474298325"
		let event_params={"source_comp_id":"data_entry_ui","source_ctrl_id":"cdtr_pmt_type","caller_name":"cust_transaction_ui_cdtr_pmt_type__show_hide_controls__data_entry_ui","event_desc":"Show hide controls","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"cust_transaction_ui~uicgc_1~ui~df_1304_1665385905734~2","raiseparam":{}}
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
