/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26732 
Modified By     : Admin 
Modified Date   : 2022-Oct-31 6:59 AM 
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
	key_column : any = {}
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
		this.data_entry_ui.datasource = {}
		this.data_entry_ui.context_menu = []
		this.data_entry_ui.views = {}
		this.data_entry_ui.onChangecomponent = new EventEmitter<any>()
		this.data_entry_ui.show = true
		this.data_entry_ui.dynamic_param = {}
		this.data_entry_ui.f_data_entry_ui = {"show":true}
		this.data_entry_ui.current_view = "f_data_entry_ui"
		
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
		let event_data={"data_entry_ui":{"e_1665471786298":{"dts":{"dt_1304_1665384453253":{"dtts":{"":{"uicgc_code":"UICGC_1","event_code":"E_1665471786298","dt_code":"DT_1304_1665384453253","dtt_code":"","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[],"get_from_memory":[{"level":"SESSION_LEVEL","value":"ROOT_SCODE","tb_data":"Y","column":"PRODUCT_CODE","d3name":"ROOT_SCODE"}],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={}
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
