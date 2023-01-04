/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27683 
Modified By     : Admin 
Modified Date   : 2023-Jan-04 6:52 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_p2p_payments
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'

@Component({
	selector: 's_p2p_payments',
	templateUrl: './s_p2p_payments.component.html',
	styleUrls: ['./s_p2p_payments.component.css'],
	providers:[]
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
	key_events : any = {}
	btl_1304_1672806880021 : string = "p_payment_layout"
	forms : any = ["uicgc_1"]
	payment_type_ui : any = {}
	payment_type_ui_retrieve_contacts : any = {}
	payment_type_ui_retrieve_contact : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ) {
    
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
		
		// "Retrieve Contacts" Button of "Payment Type UI" component
		this.payment_type_ui_retrieve_contacts.label_name = "Retrieve Contacts"
		this.payment_type_ui_retrieve_contacts.show = true
		this.payment_type_ui_retrieve_contacts.disabled = false
		this.payment_type_ui_retrieve_contacts.params = {"icon_only":false,"uicgcc_style":"fa fa-check-square-o"}
		this.payment_type_ui_retrieve_contacts.dynamic_param = {}
		this.payment_type_ui_retrieve_contacts.role = []
		this.payment_type_ui_retrieve_contacts.action = ""
		
		// "Retrieve Contact" Button of "Payment Type UI" component
		this.payment_type_ui_retrieve_contact.label_name = "Retrieve Contact"
		this.payment_type_ui_retrieve_contact.show = true
		this.payment_type_ui_retrieve_contact.disabled = false
		this.payment_type_ui_retrieve_contact.params = {"icon_only":false,"uicgcc_style":"fa fa-check-square"}
		this.payment_type_ui_retrieve_contact.dynamic_param = {}
		this.payment_type_ui_retrieve_contact.role = []
		this.payment_type_ui_retrieve_contact.action = ""
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__cf_for_pl()
		this.page_load__de_for_rcs()
		this.page_load__de_for_rc()
	}

	//Handler for TEXT_CHANGED event of "npss p2p retrive contacct mobile"
	npss_p2p_retrive_contacct_mobile__text_changed(){
		this.npss_p2p_retrive_contacct_mobile__ee_for_rc__payment_type_ui()
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

	//Handler for DPSINIT event of "page_load"
	page_load__de_for_rcs() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="payment_type_ui_retrieve_contacts"
		let parent_source_id=""
		let event_code="e_1672807484341"
		let event_params={"caller_name":"page_load__de_for_rcs","event_desc":"DE for RCS","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__de_for_rc() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="payment_type_ui_retrieve_contact"
		let parent_source_id=""
		let event_code="e_1672807489900"
		let event_params={"caller_name":"page_load__de_for_rc","event_desc":"DE for RC","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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

	//Handler for TEXT_CHANGED event of "npss p2p retrive contacct mobile"
	npss_p2p_retrive_contacct_mobile__ee_for_rc__payment_type_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="npss_p2p_retrive_contacct_mobile"
		let destn_id="payment_type_ui_retrieve_contact"
		let parent_source_id=""
		let event_code="e_1672807564609"
		let event_params={"source_comp_id":"payment_type_ui","source_ctrl_id":"mobile","caller_name":"npss_p2p_retrive_contacct_mobile__ee_for_rc__payment_type_ui","event_desc":"EE for RC","event_type":"TEXT_CHANGED","caller_event_context":"SUCCESS","root_source_id":"npss_p2p_retrive_contacct~uicgc_1~ui~df_1304_1666846148448~7","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
		let destn_id="payment_type_ui_retrieve_contacts"
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
