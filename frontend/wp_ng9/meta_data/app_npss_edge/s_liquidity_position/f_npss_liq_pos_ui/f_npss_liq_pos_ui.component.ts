/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34501 
Modified By     : Admin 
Modified Date   : 2024-Feb-22 7:28 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_liquidity_position
Form Name       : NPSS Liq Pos UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_liq_pos_ui',
  templateUrl: './f_npss_liq_pos_ui.component.html',
  styleUrls: ['./f_npss_liq_pos_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_liq_pos_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_liq_pos_ui') form;
  @ViewChild('npss_liq_pos_ui_process_name') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665901130705"
	dtt_code : string = "dtt_1304_1670589169341"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of process_name
		this.ctrl.process_name = {}
		this.ctrl.process_name.id = "RN01CN1"
		this.ctrl.process_name.desc = "Process Name"
		this.ctrl.process_name.visible = true
		this.ctrl.process_name.label_name = "Process Name"
		this.ctrl.process_name.df_code = "DF_1304_1670589236195"
		this.ctrl.process_name.df_description = "Column Group 1"
		this.ctrl.process_name.uictrl_code = "TXT"
		this.ctrl.process_name.target_column = "PROCESS_NAME"
		this.ctrl.process_name.data_type = "TEXT"
		this.ctrl.process_name.data_length = 64
		this.ctrl.process_name.zone_df_code = "DF_1304_1670589236195"
		this.ctrl.process_name.default_value = "liquidityPosition"
		this.ctrl.process_name.is_memory_ctrl = ""
		this.ctrl.process_name.field_coordinates = ""
		this.ctrl.process_name.sub_details = ""
		this.ctrl.process_name.accept_char = ""
		this.ctrl.process_name.currency_format = ""
		this.ctrl.process_name.data_scale = ""
		this.ctrl.process_name.hide_label = false
		this.ctrl.process_name.depends_on = ""
		this.ctrl.process_name.placeholder = ""
		this.ctrl.process_name.dynamic_param = ""
		this.ctrl.process_name.style_code = ""
		this.ctrl.process_name.data_source = ""
		this.ctrl.process_name.image_association = ""
		this.ctrl.process_name.show = true
		this.ctrl.process_name.sub_content = ""
		this.ctrl.process_name.required = false
		this.ctrl.process_name.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.process_name.targetcolumn_lower = "process_name"
		this.ctrl.process_name.disabled = false
		this.ctrl.process_name.view_name = "f_npss_liq_pos_ui"
		this.ctrl.process_name.ctrl_id = "npss_liq_pos_ui_process_name"
		this.ctrl.npss_liq_pos_ui_process_name = {}
		this.ctrl.npss_liq_pos_ui_process_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of currency
		this.ctrl.currency = {}
		this.ctrl.currency.id = "RN01CN2"
		this.ctrl.currency.desc = "Currency"
		this.ctrl.currency.visible = true
		this.ctrl.currency.label_name = "Currency"
		this.ctrl.currency.df_code = "DF_1304_1670589236195"
		this.ctrl.currency.df_description = "Column Group 1"
		this.ctrl.currency.uictrl_code = "CBO"
		this.ctrl.currency.target_column = "CURRENCY"
		this.ctrl.currency.data_type = "TEXT"
		this.ctrl.currency.data_length = 3
		this.ctrl.currency.zone_df_code = "DF_1304_1670589236195"
		this.ctrl.currency.default_value = ""
		this.ctrl.currency.is_memory_ctrl = ""
		this.ctrl.currency.field_coordinates = ""
		this.ctrl.currency.sub_details = ""
		this.ctrl.currency.accept_char = ""
		this.ctrl.currency.currency_format = ""
		this.ctrl.currency.data_scale = ""
		this.ctrl.currency.hide_label = false
		this.ctrl.currency.depends_on = ""
		this.ctrl.currency.placeholder = ""
		this.ctrl.currency.dynamic_param = ""
		this.ctrl.currency.style_code = ""
		this.ctrl.currency.data_source = {"ds_code":"UDS_1304_1677304181522","ds_description":"NPSS Core Currency CDB","rows":[],"type":"DPS_TABLE","value_member":"CURRENCY_CODE","display_member":"CURRENCY_CODE","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_CURRENCIES","context":"","filters":[{"filter_name":"Filter1","binding_name":"TENANT_ID","id":"DF_1677304329929","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"}]},"query":"(TENANT_ID = SESSION_LEVEL.TENANT_ID)"},"sel_columns":[]}
		this.ctrl.currency.image_association = ""
		this.ctrl.currency.show = true
		this.ctrl.currency.sub_content = ""
		this.ctrl.currency.required = false
		this.ctrl.currency.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Select the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.currency.targetcolumn_lower = "currency"
		this.ctrl.currency.disabled = false
		this.ctrl.currency.view_name = "f_npss_liq_pos_ui"
		this.ctrl.currency.ctrl_id = "npss_liq_pos_ui_currency"
		this.ctrl.npss_liq_pos_ui_currency = {}
		this.ctrl.npss_liq_pos_ui_currency.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_liq_pos_ui.currency = {}
	
		//Properties of accountholderbic
		this.ctrl.accountholderbic = {}
		this.ctrl.accountholderbic.id = "RN11CN3"
		this.ctrl.accountholderbic.desc = "Account Holder BIC"
		this.ctrl.accountholderbic.visible = true
		this.ctrl.accountholderbic.label_name = "Account Holder BIC"
		this.ctrl.accountholderbic.df_code = "DF_1304_1670589236195"
		this.ctrl.accountholderbic.df_description = "Column Group 1"
		this.ctrl.accountholderbic.uictrl_code = "TXT"
		this.ctrl.accountholderbic.target_column = "ACCOUNTHOLDERBIC"
		this.ctrl.accountholderbic.data_type = "TEXT"
		this.ctrl.accountholderbic.data_length = 32
		this.ctrl.accountholderbic.zone_df_code = "DF_1304_1670589236195"
		this.ctrl.accountholderbic.default_value = ""
		this.ctrl.accountholderbic.is_memory_ctrl = ""
		this.ctrl.accountholderbic.field_coordinates = ""
		this.ctrl.accountholderbic.sub_details = ""
		this.ctrl.accountholderbic.accept_char = ""
		this.ctrl.accountholderbic.currency_format = ""
		this.ctrl.accountholderbic.data_scale = ""
		this.ctrl.accountholderbic.hide_label = false
		this.ctrl.accountholderbic.depends_on = ""
		this.ctrl.accountholderbic.placeholder = ""
		this.ctrl.accountholderbic.dynamic_param = ""
		this.ctrl.accountholderbic.style_code = ""
		this.ctrl.accountholderbic.data_source = ""
		this.ctrl.accountholderbic.image_association = ""
		this.ctrl.accountholderbic.show = true
		this.ctrl.accountholderbic.sub_content = ""
		this.ctrl.accountholderbic.required = false
		this.ctrl.accountholderbic.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.accountholderbic.targetcolumn_lower = "accountholderbic"
		this.ctrl.accountholderbic.disabled = false
		this.ctrl.accountholderbic.view_name = "f_npss_liq_pos_ui"
		this.ctrl.accountholderbic.ctrl_id = "npss_liq_pos_ui_accountholderbic"
		this.ctrl.npss_liq_pos_ui_accountholderbic = {}
		this.ctrl.npss_liq_pos_ui_accountholderbic.onChangecomponent = new EventEmitter<any>()
	
		//Properties of accountnumber
		this.ctrl.accountnumber = {}
		this.ctrl.accountnumber.id = "RN11CN5"
		this.ctrl.accountnumber.desc = "Account Number"
		this.ctrl.accountnumber.visible = true
		this.ctrl.accountnumber.label_name = "Account Number"
		this.ctrl.accountnumber.df_code = "DF_1304_1670589236195"
		this.ctrl.accountnumber.df_description = "Column Group 1"
		this.ctrl.accountnumber.uictrl_code = "TXT"
		this.ctrl.accountnumber.target_column = "ACCOUNTNUMBER"
		this.ctrl.accountnumber.data_type = "TEXT"
		this.ctrl.accountnumber.data_length = 32
		this.ctrl.accountnumber.zone_df_code = "DF_1304_1670589236195"
		this.ctrl.accountnumber.default_value = ""
		this.ctrl.accountnumber.is_memory_ctrl = ""
		this.ctrl.accountnumber.field_coordinates = ""
		this.ctrl.accountnumber.sub_details = ""
		this.ctrl.accountnumber.accept_char = ""
		this.ctrl.accountnumber.currency_format = ""
		this.ctrl.accountnumber.data_scale = ""
		this.ctrl.accountnumber.hide_label = false
		this.ctrl.accountnumber.depends_on = ""
		this.ctrl.accountnumber.placeholder = ""
		this.ctrl.accountnumber.dynamic_param = ""
		this.ctrl.accountnumber.style_code = ""
		this.ctrl.accountnumber.data_source = ""
		this.ctrl.accountnumber.image_association = ""
		this.ctrl.accountnumber.show = true
		this.ctrl.accountnumber.sub_content = ""
		this.ctrl.accountnumber.required = false
		this.ctrl.accountnumber.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.accountnumber.targetcolumn_lower = "accountnumber"
		this.ctrl.accountnumber.disabled = false
		this.ctrl.accountnumber.view_name = "f_npss_liq_pos_ui"
		this.ctrl.accountnumber.ctrl_id = "npss_liq_pos_ui_accountnumber"
		this.ctrl.npss_liq_pos_ui_accountnumber = {}
		this.ctrl.npss_liq_pos_ui_accountnumber.onChangecomponent = new EventEmitter<any>()
	
		//Properties of datetime
		this.ctrl.datetime = {}
		this.ctrl.datetime.id = "RN21CN4"
		this.ctrl.datetime.desc = "Date Time"
		this.ctrl.datetime.visible = true
		this.ctrl.datetime.label_name = "Date Time"
		this.ctrl.datetime.df_code = "DF_1304_1670589236195"
		this.ctrl.datetime.df_description = "Column Group 1"
		this.ctrl.datetime.uictrl_code = "DTP"
		this.ctrl.datetime.target_column = "DATETIME"
		this.ctrl.datetime.data_type = "DATETIME"
		this.ctrl.datetime.data_length = 0
		this.ctrl.datetime.zone_df_code = "DF_1304_1670589236195"
		this.ctrl.datetime.default_value = "setcurrentdate(),{}"
		this.ctrl.datetime.is_memory_ctrl = ""
		this.ctrl.datetime.field_coordinates = ""
		this.ctrl.datetime.sub_details = ""
		this.ctrl.datetime.accept_char = ""
		this.ctrl.datetime.currency_format = ""
		this.ctrl.datetime.data_scale = ""
		this.ctrl.datetime.hide_label = false
		this.ctrl.datetime.depends_on = ""
		this.ctrl.datetime.placeholder = ""
		this.ctrl.datetime.dynamic_param = ""
		this.ctrl.datetime.style_code = ""
		this.ctrl.datetime.data_source = ""
		this.ctrl.datetime.image_association = ""
		this.ctrl.datetime.show = true
		this.ctrl.datetime.sub_content = ""
		this.ctrl.datetime.required = false
		this.ctrl.datetime.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Select the date","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.datetime.targetcolumn_lower = "datetime"
		this.ctrl.datetime.disabled = false
		this.ctrl.datetime.view_name = "f_npss_liq_pos_ui"
		this.ctrl.datetime.ctrl_id = "npss_liq_pos_ui_datetime"
		this.ctrl.npss_liq_pos_ui_datetime = {}
		this.ctrl.npss_liq_pos_ui_datetime.onChangecomponent = new EventEmitter<any>()
	
		//Properties of datasource
		this.ctrl.datasource = {}
		this.ctrl.datasource.id = "RN21CN6"
		this.ctrl.datasource.desc = "Data Source"
		this.ctrl.datasource.visible = true
		this.ctrl.datasource.label_name = "Data Source"
		this.ctrl.datasource.df_code = "DF_1304_1670589236195"
		this.ctrl.datasource.df_description = "Column Group 1"
		this.ctrl.datasource.uictrl_code = "TXT"
		this.ctrl.datasource.target_column = "DATASOURCE"
		this.ctrl.datasource.data_type = "TEXT"
		this.ctrl.datasource.data_length = 64
		this.ctrl.datasource.zone_df_code = "DF_1304_1670589236195"
		this.ctrl.datasource.default_value = "PRODUCTION"
		this.ctrl.datasource.is_memory_ctrl = ""
		this.ctrl.datasource.field_coordinates = ""
		this.ctrl.datasource.sub_details = ""
		this.ctrl.datasource.accept_char = ""
		this.ctrl.datasource.currency_format = ""
		this.ctrl.datasource.data_scale = ""
		this.ctrl.datasource.hide_label = false
		this.ctrl.datasource.depends_on = ""
		this.ctrl.datasource.placeholder = ""
		this.ctrl.datasource.dynamic_param = ""
		this.ctrl.datasource.style_code = ""
		this.ctrl.datasource.data_source = ""
		this.ctrl.datasource.image_association = ""
		this.ctrl.datasource.show = true
		this.ctrl.datasource.sub_content = ""
		this.ctrl.datasource.required = false
		this.ctrl.datasource.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.datasource.targetcolumn_lower = "datasource"
		this.ctrl.datasource.disabled = false
		this.ctrl.datasource.view_name = "f_npss_liq_pos_ui"
		this.ctrl.datasource.ctrl_id = "npss_liq_pos_ui_datasource"
		this.ctrl.npss_liq_pos_ui_datasource = {}
		this.ctrl.npss_liq_pos_ui_datasource.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_liq_pos_ui.model = {"PROCESS_NAME":"liquidityPosition","CURRENCY":"","ACCOUNTHOLDERBIC":"","ACCOUNTNUMBER":"","DATETIME":"setcurrentdate(),{}","DATASOURCE":"PRODUCTION"}
		this.screen_instance[this.comp_id].f_npss_liq_pos_ui.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROCESS_NAME"},{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"CURRENCY"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"ACCOUNTHOLDERBIC"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"ACCOUNTNUMBER"},{"CTLR_CODE":"DTP","DATA_TYPE":"DATETIME","TARGET_COLUMN":"DATETIME"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DATASOURCE"}]
		this.screen_instance[this.comp_id].f_npss_liq_pos_ui.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_liq_pos_ui.dtt_code = "dtt_1304_1670589169341"
		this.screen_instance[this.comp_id].f_npss_liq_pos_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_liq_pos_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_liq_pos_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_liq_pos_ui[control][property] = value;
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
    