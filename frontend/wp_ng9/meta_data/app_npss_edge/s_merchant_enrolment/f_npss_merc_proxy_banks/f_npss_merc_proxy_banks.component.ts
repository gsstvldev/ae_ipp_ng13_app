/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26375 
Modified By     : Admin 
Modified Date   : 2022-Oct-11 7:10 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_enrolment
Form Name       : NPSS Merc Proxy Banks--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_merc_proxy_banks',
  templateUrl: './f_npss_merc_proxy_banks.component.html',
  styleUrls: ['./f_npss_merc_proxy_banks.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_merc_proxy_banksComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_merc_proxy_banks') form;
  @ViewChild('npss_merc_proxy_banks_bank_code') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665384579126"
	dtt_code : string = "dtt_1304_1665385495265"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of bank_code
		this.ctrl.bank_code = {}
		this.ctrl.bank_code.id = "RN01CN1"
		this.ctrl.bank_code.desc = "Bank Code"
		this.ctrl.bank_code.visible = false
		this.ctrl.bank_code.label_name = "Bank Code"
		this.ctrl.bank_code.df_code = "DF_1304_1665385550758"
		this.ctrl.bank_code.df_description = "Column Group 1"
		this.ctrl.bank_code.uictrl_code = "CBO"
		this.ctrl.bank_code.target_column = "BANK_CODE"
		this.ctrl.bank_code.data_type = "TEXT"
		this.ctrl.bank_code.data_length = 32
		this.ctrl.bank_code.zone_df_code = "DF_1304_1665385550758"
		this.ctrl.bank_code.default_value = ""
		this.ctrl.bank_code.is_memory_ctrl = ""
		this.ctrl.bank_code.field_coordinates = ""
		this.ctrl.bank_code.sub_details = ""
		this.ctrl.bank_code.accept_char = ""
		this.ctrl.bank_code.currency_format = ""
		this.ctrl.bank_code.data_scale = ""
		this.ctrl.bank_code.hide_label = false
		this.ctrl.bank_code.depends_on = ""
		this.ctrl.bank_code.placeholder = ""
		this.ctrl.bank_code.dynamic_param = ""
		this.ctrl.bank_code.style_code = ""
		this.ctrl.bank_code.data_source = {"ds_code":"UDS_1304_1665389079534","ds_description":"NPSS Participant code SQL","rows":[],"type":"DPS_TABLE","value_member":"SORT_CODE","display_member":"SYSTEM_NAME","first_record_display":"","column_list":"","order_by":"","target_table":"NPSS_VW_PARTICIPANT_CODE","context":"","filters":[{"filter_name":"Filter1","binding_name":"S_ID","id":"DF_1665389196469","binding_value":"SESSION_LEVEL.S_ID","source_name":"S_ID","source_value":"SESSION_LEVEL.S_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"},{"filter_name":"Filter2","binding_name":"TENANT_ID","id":"DF_1665389196469","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"S_ID","binding_value":"SESSION_LEVEL.S_ID","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"S_ID"},{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"}]},"query":"(S_ID = SESSION_LEVEL.S_ID AND TENANT_ID = SESSION_LEVEL.TENANT_ID)"},"need_auto_first_record":true,"sel_columns":[]}
		this.ctrl.bank_code.image_association = ""
		this.ctrl.bank_code.show = true
		this.ctrl.bank_code.sub_content = ""
		this.ctrl.bank_code.required = false
		this.ctrl.bank_code.vld_rules = []
		this.ctrl.bank_code.targetcolumn_lower = "bank_code"
		this.ctrl.bank_code.disabled = false
		this.ctrl.bank_code.view_name = "f_npss_merc_proxy_banks"
		this.ctrl.bank_code.ctrl_id = "npss_merc_proxy_banks_bank_code"
		this.ctrl.npss_merc_proxy_banks_bank_code = {}
		this.ctrl.npss_merc_proxy_banks_bank_code.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_merc_proxy_banks.bank_code = {}
	
		//Properties of account_no
		this.ctrl.account_no = {}
		this.ctrl.account_no.id = "RN11CN2"
		this.ctrl.account_no.desc = "Account No"
		this.ctrl.account_no.visible = false
		this.ctrl.account_no.label_name = "Account No"
		this.ctrl.account_no.df_code = "DF_1304_1665385550758"
		this.ctrl.account_no.df_description = "Column Group 1"
		this.ctrl.account_no.uictrl_code = "TXT"
		this.ctrl.account_no.target_column = "ACCOUNT_NO"
		this.ctrl.account_no.data_type = "TEXT"
		this.ctrl.account_no.data_length = 32
		this.ctrl.account_no.zone_df_code = "DF_1304_1665385550758"
		this.ctrl.account_no.default_value = ""
		this.ctrl.account_no.is_memory_ctrl = ""
		this.ctrl.account_no.field_coordinates = ""
		this.ctrl.account_no.sub_details = ""
		this.ctrl.account_no.accept_char = ""
		this.ctrl.account_no.currency_format = ""
		this.ctrl.account_no.data_scale = ""
		this.ctrl.account_no.hide_label = false
		this.ctrl.account_no.depends_on = ""
		this.ctrl.account_no.placeholder = ""
		this.ctrl.account_no.dynamic_param = ""
		this.ctrl.account_no.style_code = ""
		this.ctrl.account_no.data_source = ""
		this.ctrl.account_no.image_association = ""
		this.ctrl.account_no.show = true
		this.ctrl.account_no.sub_content = ""
		this.ctrl.account_no.required = false
		this.ctrl.account_no.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.account_no.targetcolumn_lower = "account_no"
		this.ctrl.account_no.disabled = false
		this.ctrl.account_no.view_name = "f_npss_merc_proxy_banks"
		this.ctrl.account_no.ctrl_id = "npss_merc_proxy_banks_account_no"
		this.ctrl.npss_merc_proxy_banks_account_no = {}
		this.ctrl.npss_merc_proxy_banks_account_no.onChangecomponent = new EventEmitter<any>()
	
		//Properties of is_default
		this.ctrl.is_default = {}
		this.ctrl.is_default.id = "RN21CN3"
		this.ctrl.is_default.desc = "Is Default"
		this.ctrl.is_default.visible = false
		this.ctrl.is_default.label_name = "Is Default"
		this.ctrl.is_default.df_code = "DF_1304_1665385550758"
		this.ctrl.is_default.df_description = "Column Group 1"
		this.ctrl.is_default.uictrl_code = "CHK"
		this.ctrl.is_default.target_column = "IS_DEFAULT"
		this.ctrl.is_default.data_type = "TEXT"
		this.ctrl.is_default.data_length = 8
		this.ctrl.is_default.zone_df_code = "DF_1304_1665385550758"
		this.ctrl.is_default.default_value = "false"
		this.ctrl.is_default.is_memory_ctrl = ""
		this.ctrl.is_default.field_coordinates = ""
		this.ctrl.is_default.sub_details = ""
		this.ctrl.is_default.accept_char = ""
		this.ctrl.is_default.currency_format = ""
		this.ctrl.is_default.data_scale = ""
		this.ctrl.is_default.hide_label = false
		this.ctrl.is_default.depends_on = ""
		this.ctrl.is_default.placeholder = ""
		this.ctrl.is_default.dynamic_param = ""
		this.ctrl.is_default.style_code = ""
		this.ctrl.is_default.data_source = ""
		this.ctrl.is_default.image_association = ""
		this.ctrl.is_default.show = true
		this.ctrl.is_default.sub_content = ""
		this.ctrl.is_default.required = false
		this.ctrl.is_default.vld_rules = []
		this.ctrl.is_default.targetcolumn_lower = "is_default"
		this.ctrl.is_default.disabled = false
		this.ctrl.is_default.view_name = "f_npss_merc_proxy_banks"
		this.ctrl.is_default.ctrl_id = "npss_merc_proxy_banks_is_default"
		this.ctrl.npss_merc_proxy_banks_is_default = {}
		this.ctrl.npss_merc_proxy_banks_is_default.onChangecomponent = new EventEmitter<any>()
	
		//Properties of npssmpa_id
		this.ctrl.npssmpa_id = {}
		this.ctrl.npssmpa_id.id = "RN31CN4"
		this.ctrl.npssmpa_id.desc = "NPSSMPA_ID"
		this.ctrl.npssmpa_id.visible = false
		this.ctrl.npssmpa_id.label_name = "NPSSMPA_ID"
		this.ctrl.npssmpa_id.df_code = "DF_1304_1665385550758"
		this.ctrl.npssmpa_id.df_description = "Column Group 1"
		this.ctrl.npssmpa_id.uictrl_code = "TXT"
		this.ctrl.npssmpa_id.target_column = "NPSSMPA_ID"
		this.ctrl.npssmpa_id.data_type = "NUMBER"
		this.ctrl.npssmpa_id.data_length = 9
		this.ctrl.npssmpa_id.zone_df_code = "DF_1304_1665385550758"
		this.ctrl.npssmpa_id.default_value = ""
		this.ctrl.npssmpa_id.is_memory_ctrl = ""
		this.ctrl.npssmpa_id.field_coordinates = ""
		this.ctrl.npssmpa_id.sub_details = ""
		this.ctrl.npssmpa_id.accept_char = ""
		this.ctrl.npssmpa_id.currency_format = ""
		this.ctrl.npssmpa_id.data_scale = "0"
		this.ctrl.npssmpa_id.hide_label = false
		this.ctrl.npssmpa_id.depends_on = ""
		this.ctrl.npssmpa_id.placeholder = ""
		this.ctrl.npssmpa_id.dynamic_param = ""
		this.ctrl.npssmpa_id.style_code = ""
		this.ctrl.npssmpa_id.data_source = ""
		this.ctrl.npssmpa_id.image_association = ""
		this.ctrl.npssmpa_id.show = true
		this.ctrl.npssmpa_id.sub_content = "*"
		this.ctrl.npssmpa_id.required = true
		this.ctrl.npssmpa_id.vld_rules = []
		this.ctrl.npssmpa_id.targetcolumn_lower = "npssmpa_id"
		this.ctrl.npssmpa_id.disabled = false
		this.ctrl.npssmpa_id.view_name = "f_npss_merc_proxy_banks"
		this.ctrl.npssmpa_id.ctrl_id = "npss_merc_proxy_banks_npssmpa_id"
		this.ctrl.npss_merc_proxy_banks_npssmpa_id = {}
		this.ctrl.npss_merc_proxy_banks_npssmpa_id.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_merc_proxy_banks.model = {"BANK_CODE":"","ACCOUNT_NO":"","IS_DEFAULT":"false","NPSSMPA_ID":""}
		this.screen_instance[this.comp_id].f_npss_merc_proxy_banks.Meta = [{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"BANK_CODE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"ACCOUNT_NO"},{"CTLR_CODE":"CHK","DATA_TYPE":"TEXT","TARGET_COLUMN":"IS_DEFAULT"},{"CTLR_CODE":"TXT","DATA_TYPE":"NUMBER","TARGET_COLUMN":"NPSSMPA_ID"}]
		this.screen_instance[this.comp_id].f_npss_merc_proxy_banks.dt_code = "dt_1304_1665384579126"
		this.screen_instance[this.comp_id].f_npss_merc_proxy_banks.dtt_code = "dtt_1304_1665385495265"
		this.screen_instance[this.comp_id].f_npss_merc_proxy_banks.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_merc_proxy_banks[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_merc_proxy_banks[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_merc_proxy_banks[control][property] = value;
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
    