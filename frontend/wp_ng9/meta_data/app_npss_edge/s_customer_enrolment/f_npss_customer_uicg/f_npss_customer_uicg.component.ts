/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26605 
Modified By     : Admin 
Modified Date   : 2022-Oct-21 14:27 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_customer_enrolment
Form Name       : NPSS Customer UICG--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_customer_uicg',
  templateUrl: './f_npss_customer_uicg.component.html',
  styleUrls: ['./f_npss_customer_uicg.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_customer_uicgComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_customer_uicg') form;
  @ViewChild('npss_customer_uicg_customer') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665384453253"
	dtt_code : string = "dtt_1304_1665384533560"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of customer
		this.ctrl.customer = {}
		this.ctrl.customer.id = "RN01CN1"
		this.ctrl.customer.desc = "Customer"
		this.ctrl.customer.visible = true
		this.ctrl.customer.label_name = "Customer"
		this.ctrl.customer.df_code = "DF_1304_1665384649010"
		this.ctrl.customer.df_description = "Column Group 1"
		this.ctrl.customer.uictrl_code = "TXT"
		this.ctrl.customer.target_column = "CUSTOMER"
		this.ctrl.customer.data_type = "TEXT"
		this.ctrl.customer.data_length = 64
		this.ctrl.customer.zone_df_code = "DF_1304_1665384649010"
		this.ctrl.customer.default_value = ""
		this.ctrl.customer.is_memory_ctrl = ""
		this.ctrl.customer.field_coordinates = ""
		this.ctrl.customer.sub_details = ""
		this.ctrl.customer.accept_char = ""
		this.ctrl.customer.currency_format = ""
		this.ctrl.customer.data_scale = ""
		this.ctrl.customer.hide_label = false
		this.ctrl.customer.depends_on = ""
		this.ctrl.customer.placeholder = ""
		this.ctrl.customer.dynamic_param = ""
		this.ctrl.customer.style_code = ""
		this.ctrl.customer.data_source = ""
		this.ctrl.customer.image_association = ""
		this.ctrl.customer.show = true
		this.ctrl.customer.sub_content = ""
		this.ctrl.customer.required = false
		this.ctrl.customer.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.customer.targetcolumn_lower = "customer"
		this.ctrl.customer.disabled = false
		this.ctrl.customer.view_name = "f_npss_customer_uicg"
		this.ctrl.customer.ctrl_id = "npss_customer_uicg_customer"
		this.ctrl.npss_customer_uicg_customer = {}
		this.ctrl.npss_customer_uicg_customer.onChangecomponent = new EventEmitter<any>()
	
		//Properties of emirates_id
		this.ctrl.emirates_id = {}
		this.ctrl.emirates_id.id = "RN01CN1001"
		this.ctrl.emirates_id.desc = "Emirates ID"
		this.ctrl.emirates_id.visible = true
		this.ctrl.emirates_id.label_name = "Emirates ID"
		this.ctrl.emirates_id.df_code = "DF_1304_1665384649010"
		this.ctrl.emirates_id.df_description = "Column Group 1"
		this.ctrl.emirates_id.uictrl_code = "TXT"
		this.ctrl.emirates_id.target_column = "EMIRATES_ID"
		this.ctrl.emirates_id.data_type = "TEXT"
		this.ctrl.emirates_id.data_length = 32
		this.ctrl.emirates_id.zone_df_code = "DF_1304_1665384649010"
		this.ctrl.emirates_id.default_value = ""
		this.ctrl.emirates_id.is_memory_ctrl = ""
		this.ctrl.emirates_id.field_coordinates = ""
		this.ctrl.emirates_id.sub_details = ""
		this.ctrl.emirates_id.accept_char = ""
		this.ctrl.emirates_id.currency_format = ""
		this.ctrl.emirates_id.data_scale = ""
		this.ctrl.emirates_id.hide_label = false
		this.ctrl.emirates_id.depends_on = ""
		this.ctrl.emirates_id.placeholder = ""
		this.ctrl.emirates_id.dynamic_param = ""
		this.ctrl.emirates_id.style_code = ""
		this.ctrl.emirates_id.data_source = ""
		this.ctrl.emirates_id.image_association = ""
		this.ctrl.emirates_id.show = true
		this.ctrl.emirates_id.sub_content = ""
		this.ctrl.emirates_id.required = false
		this.ctrl.emirates_id.vld_rules = []
		this.ctrl.emirates_id.targetcolumn_lower = "emirates_id"
		this.ctrl.emirates_id.disabled = false
		this.ctrl.emirates_id.view_name = "f_npss_customer_uicg"
		this.ctrl.emirates_id.ctrl_id = "npss_customer_uicg_emirates_id"
		this.ctrl.npss_customer_uicg_emirates_id = {}
		this.ctrl.npss_customer_uicg_emirates_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of phone_no
		this.ctrl.phone_no = {}
		this.ctrl.phone_no.id = "RN11CN2"
		this.ctrl.phone_no.desc = "Phone No"
		this.ctrl.phone_no.visible = true
		this.ctrl.phone_no.label_name = "Phone No"
		this.ctrl.phone_no.df_code = "DF_1304_1665384649010"
		this.ctrl.phone_no.df_description = "Column Group 1"
		this.ctrl.phone_no.uictrl_code = "TXT"
		this.ctrl.phone_no.target_column = "PHONE_NO"
		this.ctrl.phone_no.data_type = "TEXT"
		this.ctrl.phone_no.data_length = 24
		this.ctrl.phone_no.zone_df_code = "DF_1304_1665384649010"
		this.ctrl.phone_no.default_value = ""
		this.ctrl.phone_no.is_memory_ctrl = ""
		this.ctrl.phone_no.field_coordinates = ""
		this.ctrl.phone_no.sub_details = ""
		this.ctrl.phone_no.accept_char = ""
		this.ctrl.phone_no.currency_format = ""
		this.ctrl.phone_no.data_scale = ""
		this.ctrl.phone_no.hide_label = false
		this.ctrl.phone_no.depends_on = ""
		this.ctrl.phone_no.placeholder = ""
		this.ctrl.phone_no.dynamic_param = ""
		this.ctrl.phone_no.style_code = ""
		this.ctrl.phone_no.data_source = ""
		this.ctrl.phone_no.image_association = ""
		this.ctrl.phone_no.show = true
		this.ctrl.phone_no.sub_content = ""
		this.ctrl.phone_no.required = false
		this.ctrl.phone_no.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.phone_no.targetcolumn_lower = "phone_no"
		this.ctrl.phone_no.disabled = false
		this.ctrl.phone_no.view_name = "f_npss_customer_uicg"
		this.ctrl.phone_no.ctrl_id = "npss_customer_uicg_phone_no"
		this.ctrl.npss_customer_uicg_phone_no = {}
		this.ctrl.npss_customer_uicg_phone_no.onChangecomponent = new EventEmitter<any>()
	
		//Properties of email_id
		this.ctrl.email_id = {}
		this.ctrl.email_id.id = "RN11CN3"
		this.ctrl.email_id.desc = "Email ID"
		this.ctrl.email_id.visible = true
		this.ctrl.email_id.label_name = "Email ID"
		this.ctrl.email_id.df_code = "DF_1304_1665384649010"
		this.ctrl.email_id.df_description = "Column Group 1"
		this.ctrl.email_id.uictrl_code = "TXT"
		this.ctrl.email_id.target_column = "EMAIL_ID"
		this.ctrl.email_id.data_type = "TEXT"
		this.ctrl.email_id.data_length = 256
		this.ctrl.email_id.zone_df_code = "DF_1304_1665384649010"
		this.ctrl.email_id.default_value = ""
		this.ctrl.email_id.is_memory_ctrl = ""
		this.ctrl.email_id.field_coordinates = ""
		this.ctrl.email_id.sub_details = ""
		this.ctrl.email_id.accept_char = ""
		this.ctrl.email_id.currency_format = ""
		this.ctrl.email_id.data_scale = ""
		this.ctrl.email_id.hide_label = false
		this.ctrl.email_id.depends_on = ""
		this.ctrl.email_id.placeholder = ""
		this.ctrl.email_id.dynamic_param = ""
		this.ctrl.email_id.style_code = ""
		this.ctrl.email_id.data_source = ""
		this.ctrl.email_id.image_association = ""
		this.ctrl.email_id.show = true
		this.ctrl.email_id.sub_content = ""
		this.ctrl.email_id.required = false
		this.ctrl.email_id.vld_rules = []
		this.ctrl.email_id.targetcolumn_lower = "email_id"
		this.ctrl.email_id.disabled = false
		this.ctrl.email_id.view_name = "f_npss_customer_uicg"
		this.ctrl.email_id.ctrl_id = "npss_customer_uicg_email_id"
		this.ctrl.npss_customer_uicg_email_id = {}
		this.ctrl.npss_customer_uicg_email_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of iban
		this.ctrl.iban = {}
		this.ctrl.iban.id = "RN21CN4"
		this.ctrl.iban.desc = "IBAN"
		this.ctrl.iban.visible = true
		this.ctrl.iban.label_name = "IBAN"
		this.ctrl.iban.df_code = "DF_1304_1665384649010"
		this.ctrl.iban.df_description = "Column Group 1"
		this.ctrl.iban.uictrl_code = "TXT"
		this.ctrl.iban.target_column = "IBAN"
		this.ctrl.iban.data_type = "TEXT"
		this.ctrl.iban.data_length = 32
		this.ctrl.iban.zone_df_code = "DF_1304_1665384649010"
		this.ctrl.iban.default_value = ""
		this.ctrl.iban.is_memory_ctrl = ""
		this.ctrl.iban.field_coordinates = ""
		this.ctrl.iban.sub_details = ""
		this.ctrl.iban.accept_char = ""
		this.ctrl.iban.currency_format = ""
		this.ctrl.iban.data_scale = ""
		this.ctrl.iban.hide_label = false
		this.ctrl.iban.depends_on = ""
		this.ctrl.iban.placeholder = ""
		this.ctrl.iban.dynamic_param = ""
		this.ctrl.iban.style_code = ""
		this.ctrl.iban.data_source = ""
		this.ctrl.iban.image_association = ""
		this.ctrl.iban.show = true
		this.ctrl.iban.sub_content = ""
		this.ctrl.iban.required = false
		this.ctrl.iban.vld_rules = []
		this.ctrl.iban.targetcolumn_lower = "iban"
		this.ctrl.iban.disabled = false
		this.ctrl.iban.view_name = "f_npss_customer_uicg"
		this.ctrl.iban.ctrl_id = "npss_customer_uicg_iban"
		this.ctrl.npss_customer_uicg_iban = {}
		this.ctrl.npss_customer_uicg_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of participant_code
		this.ctrl.participant_code = {}
		this.ctrl.participant_code.id = "RN21CN5"
		this.ctrl.participant_code.desc = "Participant Code"
		this.ctrl.participant_code.visible = true
		this.ctrl.participant_code.label_name = "Participant Code"
		this.ctrl.participant_code.df_code = "DF_1304_1665384649010"
		this.ctrl.participant_code.df_description = "Column Group 1"
		this.ctrl.participant_code.uictrl_code = "CBO"
		this.ctrl.participant_code.target_column = "PARTICIPANT_CODE"
		this.ctrl.participant_code.data_type = "TEXT"
		this.ctrl.participant_code.data_length = 32
		this.ctrl.participant_code.zone_df_code = "DF_1304_1665384649010"
		this.ctrl.participant_code.default_value = ""
		this.ctrl.participant_code.is_memory_ctrl = ""
		this.ctrl.participant_code.field_coordinates = ""
		this.ctrl.participant_code.sub_details = ""
		this.ctrl.participant_code.accept_char = ""
		this.ctrl.participant_code.currency_format = ""
		this.ctrl.participant_code.data_scale = ""
		this.ctrl.participant_code.hide_label = false
		this.ctrl.participant_code.depends_on = ""
		this.ctrl.participant_code.placeholder = ""
		this.ctrl.participant_code.dynamic_param = ""
		this.ctrl.participant_code.style_code = ""
		this.ctrl.participant_code.data_source = {"ds_code":"UDS_1304_1665389079534","ds_description":"NPSS Participant code SQL","rows":[],"type":"DPS_TABLE","value_member":"SORT_CODE","display_member":"SYSTEM_NAME","first_record_display":"","column_list":"","order_by":"","target_table":"NPSS_VW_PARTICIPANT_CODE","context":"","filters":[{"filter_name":"Filter1","binding_name":"S_ID","id":"DF_1665389196469","binding_value":"SESSION_LEVEL.S_ID","source_name":"S_ID","source_value":"SESSION_LEVEL.S_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"},{"filter_name":"Filter2","binding_name":"TENANT_ID","id":"DF_1665389196469","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"S_ID","binding_value":"SESSION_LEVEL.S_ID","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"S_ID"},{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"}]},"query":"(S_ID = SESSION_LEVEL.S_ID AND TENANT_ID = SESSION_LEVEL.TENANT_ID)"},"need_auto_first_record":true,"sel_columns":[]}
		this.ctrl.participant_code.image_association = ""
		this.ctrl.participant_code.show = true
		this.ctrl.participant_code.sub_content = ""
		this.ctrl.participant_code.required = false
		this.ctrl.participant_code.vld_rules = []
		this.ctrl.participant_code.targetcolumn_lower = "participant_code"
		this.ctrl.participant_code.disabled = false
		this.ctrl.participant_code.view_name = "f_npss_customer_uicg"
		this.ctrl.participant_code.ctrl_id = "npss_customer_uicg_participant_code"
		this.ctrl.npss_customer_uicg_participant_code = {}
		this.ctrl.npss_customer_uicg_participant_code.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_customer_uicg.participant_code = {}
		this.screen_instance[this.comp_id].f_npss_customer_uicg.model = {"CUSTOMER":"","EMIRATES_ID":"","PHONE_NO":"","EMAIL_ID":"","IBAN":"","PARTICIPANT_CODE":""}
		this.screen_instance[this.comp_id].f_npss_customer_uicg.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CUSTOMER"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"EMIRATES_ID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"PHONE_NO"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"EMAIL_ID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"IBAN"},{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"PARTICIPANT_CODE"}]
		this.screen_instance[this.comp_id].f_npss_customer_uicg.dt_code = "dt_1304_1665384453253"
		this.screen_instance[this.comp_id].f_npss_customer_uicg.dtt_code = "dtt_1304_1665384533560"
		this.screen_instance[this.comp_id].f_npss_customer_uicg.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
    try {
      this.profile_name = this.element_profile.nativeElement.getAttribute("profile_name");
      if(this.profile_name!=null && this.profile_name!=undefined) {
      let need_header = this.screen_instance[this.profile_name]['checkHeader'](this.comp_id);
      this.hasHeader = need_header.hidden;
      if (this.hasHeader == false) {
        this.component_header = need_header.desc;
      }
      if (this.screen_instance[this.comp_id].onChangecomponent && !this.screen_instance[this.comp_id].subscription) {
        this.screen_instance[this.comp_id].subscription = this.screen_instance[this.comp_id].onChangecomponent.subscribe({
          next: (event: any) => {
            this.handlechangecomponentevent(event)
          }
        })
      }
      }
    } catch (error) {
      console.log("subscription error comp_id ---->" + this.comp_id)
    }
  }
  toggleSearch(searchButton) {
    if(searchButton.expand) {
      searchButton.expand = false;
    } else {
      searchButton.expand = true;
    }
  }
  
  onClickedOutside(e: Event,searchButton) {
		searchButton.expand = false;
  }

  isFormDisabled(){
    return this.screen_instance[this.comp_id].disabled;
  }

  isFormHidden(){
    return !this.screen_instance[this.comp_id].show;
  }
  
  isControlHidden(control){
    return !this.ctrl[control].show;
  }

  formControlHidden(control,property,value) {
    if(this.screen_instance[this.comp_id].f_npss_customer_uicg[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_customer_uicg[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_customer_uicg[control][property] = value;
  }

  handlechangecomponentevent(event) {
    if(typeof this.ComponenthelperService[event.eventId] == "function"){
      this.ComponenthelperService[event.eventId](event,this);
    }
  }

  ngOnDestroy() {
    try {
      if(this.screen_instance[this.comp_id] && this.screen_instance[this.comp_id].subscription!=undefined) {
        this.screen_instance[this.comp_id].subscription.unsubscribe();
      }
    } catch (error) {
      console.log("subscription error comp_id ---->" + this.comp_id)
    }
  }

}
// End of class 
    