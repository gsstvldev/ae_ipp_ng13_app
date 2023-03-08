/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28542 
Modified By     : Admin 
Modified Date   : 2023-Mar-08 6:23 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_p2p_payments
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {npss_cs_verify_paymentService} from '../../../custom_widget/npss_cs_verify_payment/npss_cs_verify_payment.service'
import {npss_cs_confirm_paymentService} from '../../../custom_widget/npss_cs_confirm_payment/npss_cs_confirm_payment.service'
import {npss_cs_retrieve_contactService} from '../../../custom_widget/npss_cs_retrieve_contact/npss_cs_retrieve_contact.service'

@Component({
	selector: 's_p2p_payments',
	templateUrl: './s_p2p_payments.component.html',
	styleUrls: ['./s_p2p_payments.component.css'],
	providers:[npss_cs_verify_paymentService,npss_cs_confirm_paymentService,npss_cs_retrieve_contactService]
})
    
// Start of class 
export class s_p2p_paymentsComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_p2p_payments"
	wftpa_id : string = "WFT_NPSS_P_1304_1672807232393_0"
	cg_code : string = "CG_1304_1672806585846"
	key_column : any = {"dtt_1304_1666846082411":"NPSSCP_ID","dtt_1304_1666846862798":"NPSSCA_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_payment_layout"
	uicgc_1 : string = "payment_type_ui"
	uicgc_2 : string = "retrieve_contact_cw"
	key_events : any = {}
	btl_1304_1672806880021 : string = "p_payment_layout"
	forms : any = ["uicgc_1"]
	payment_type_ui : any = {}
	payment_type_ui_confirm_payment : any = {}
	payment_type_ui_verify_payment : any = {}
	payment_type_ui_retrieve_contact : any = {}
	retrieve_contact_cw : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private npss_cs_verify_paymentService:npss_cs_verify_paymentService,private npss_cs_confirm_paymentService:npss_cs_confirm_paymentService,private npss_cs_retrieve_contactService:npss_cs_retrieve_contactService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Payment Type UI" 
		this.payment_type_ui.uictrl_code = "dynamic_ui"
		this.payment_type_ui.uicgc_desc = "Payment Type UI"
		this.payment_type_ui.uicgc_code = "uicgc_1"
		this.payment_type_ui.params = {}
		this.payment_type_ui.datasource = {}
		this.payment_type_ui.context_menu = []
		this.payment_type_ui.views = {"first":"DTT_1304_1666846082411","is_tab_mode":"N","dtt_1304_1666846082411":{"0":[{"dttv_id":"NPSS P2P Retrive contacct","tab_order":0,"tab_name":"","uicgc_description":"Payment Type UI","role_description":"default","dtt_description":"NPSS Customer Proxy"}]}}
		this.payment_type_ui.onChangecomponent = new EventEmitter<any>()
		this.payment_type_ui.show = true
		this.payment_type_ui.dynamic_param = {}
		this.payment_type_ui.f_npss_p2p_retrive_contacct = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.payment_type_ui.form_name = "f_npss_p2p_retrive_contacct"
		
		// "Confirm Payment" Button of "Payment Type UI" component
		this.payment_type_ui_confirm_payment.label_name = "Confirm Payment"
		this.payment_type_ui_confirm_payment.show = true
		this.payment_type_ui_confirm_payment.disabled = false
		this.payment_type_ui_confirm_payment.params = {"icon_only":false,"uicgcc_style":"fa fa-paypal"}
		this.payment_type_ui_confirm_payment.dynamic_param = {}
		this.payment_type_ui_confirm_payment.role = []
		this.payment_type_ui_confirm_payment.action = ""
		
		// "Verify Payment" Button of "Payment Type UI" component
		this.payment_type_ui_verify_payment.label_name = "Verify Payment"
		this.payment_type_ui_verify_payment.show = true
		this.payment_type_ui_verify_payment.disabled = false
		this.payment_type_ui_verify_payment.params = {"icon_only":false,"uicgcc_style":"fa fa-check-square-o"}
		this.payment_type_ui_verify_payment.dynamic_param = {}
		this.payment_type_ui_verify_payment.role = []
		this.payment_type_ui_verify_payment.action = ""
		
		// "Retrieve Contact" Button of "Payment Type UI" component
		this.payment_type_ui_retrieve_contact.label_name = "Retrieve Contact"
		this.payment_type_ui_retrieve_contact.show = true
		this.payment_type_ui_retrieve_contact.disabled = false
		this.payment_type_ui_retrieve_contact.params = {"icon_only":false,"uicgcc_style":"fa fa-check-square"}
		this.payment_type_ui_retrieve_contact.dynamic_param = {}
		this.payment_type_ui_retrieve_contact.role = []
		this.payment_type_ui_retrieve_contact.action = ""
	
		// Component level properties - "Retrieve Contact CW" 
		this.retrieve_contact_cw.uictrl_code = "custom_widget"
		this.retrieve_contact_cw.uicgc_desc = "Retrieve Contact CW"
		this.retrieve_contact_cw.uicgc_code = "uicgc_2"
		this.retrieve_contact_cw.params = {}
		this.retrieve_contact_cw.datasource = {}
		this.retrieve_contact_cw.context_menu = []
		this.retrieve_contact_cw.views = {}
		this.retrieve_contact_cw.onChangecomponent = new EventEmitter<any>()
		this.retrieve_contact_cw.show = true
		this.retrieve_contact_cw.dynamic_param = {}
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__cf_for_pl()
	}

	//Handler for ACTION_BUTTON_CLICK event of "payment type ui verify payment"
	payment_type_ui_verify_payment__action_button_click(){
		this.payment_type_ui_verify_payment__verify_payment_ide()
	}

	//Handler for ACTION_BUTTON_CLICK event of "payment type ui confirm payment"
	payment_type_ui_confirm_payment__action_button_click(){
		this.payment_type_ui_confirm_payment__confirm_payment_ide()
	}

	//Handler for ACTION_BUTTON_CLICK event of "payment type ui retrieve contact"
	payment_type_ui_retrieve_contact__action_button_click(){
		this.payment_type_ui_retrieve_contact__retrieve_contact_ide()
	}

	//Handler for TEXT_CHANGED event of "npss p2p retrive contacct mobile"
	npss_p2p_retrive_contacct_mobile__text_changed(){
		this.npss_p2p_retrive_contacct_mobile__ee_for_rc_mb__payment_type_ui()
		this.npss_p2p_retrive_contacct_mobile__ee_for_rcs__payment_type_ui()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__cf_for_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1672806943067"
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

	//Handler for ACTION_BUTTON_CLICK event of "payment type ui verify payment"
	payment_type_ui_verify_payment__verify_payment_ide() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_type_ui_verify_payment"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1672816280337"
		let event_params={"caller_name":"payment_type_ui_verify_payment__verify_payment_ide","event_desc":"Verify Payment IDE","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_type_ui_verify_payment","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_verify_paymentService.fn_npss_cs_verify_payment(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "payment type ui confirm payment"
	payment_type_ui_confirm_payment__confirm_payment_ide() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_type_ui_confirm_payment"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1672816294952"
		let event_params={"caller_name":"payment_type_ui_confirm_payment__confirm_payment_ide","event_desc":"Confirm Payment IDE","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_type_ui_confirm_payment","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_confirm_paymentService.fn_npss_cs_confirm_payment(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "payment type ui retrieve contact"
	payment_type_ui_retrieve_contact__retrieve_contact_ide() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_type_ui_retrieve_contact"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1672816309960"
		let event_params={"caller_name":"payment_type_ui_retrieve_contact__retrieve_contact_ide","event_desc":"Retrieve Contact IDE","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_type_ui_retrieve_contact","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_retrieve_contactService.fn_npss_cs_retrieve_contact(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for TEXT_CHANGED event of "npss p2p retrive contacct mobile"
	npss_p2p_retrive_contacct_mobile__ee_for_rc_mb__payment_type_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="npss_p2p_retrive_contacct_mobile"
		let destn_id="payment_type_ui_retrieve_contact"
		let parent_source_id=""
		let event_code="e_1672807564609"
		let event_params={"source_comp_id":"payment_type_ui","source_ctrl_id":"mobile","caller_name":"npss_p2p_retrive_contacct_mobile__ee_for_rc_mb__payment_type_ui","event_desc":"EE for RC mb","event_type":"TEXT_CHANGED","caller_event_context":"SUCCESS","root_source_id":"npss_p2p_retrive_contacct~uicgc_1~ui~df_1304_1666846148448~7","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for TEXT_CHANGED event of "npss p2p retrive contacct mobile"
	npss_p2p_retrive_contacct_mobile__ee_for_rcs__payment_type_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="npss_p2p_retrive_contacct_mobile"
		let destn_id="payment_type_ui_verify_payment"
		let parent_source_id=""
		let event_code="e_1672807573252"
		let event_params={"source_comp_id":"payment_type_ui","source_ctrl_id":"mobile","caller_name":"npss_p2p_retrive_contacct_mobile__ee_for_rcs__payment_type_ui","event_desc":"EE for RCS","event_type":"TEXT_CHANGED","caller_event_context":"SUCCESS","root_source_id":"npss_p2p_retrive_contacct~uicgc_1~ui~df_1304_1666846148448~7","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
