/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35950 
Modified By     : Admin 
Modified Date   : 2024-Jul-04 10:19 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_liquidity_management_camt054
Form Name       : NPSS Liquidity Management camt054 SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_liquidity_management_camt054_srch',
  templateUrl: './f_npss_liquidity_management_camt054_srch.component.html',
  styleUrls: ['./f_npss_liquidity_management_camt054_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_liquidity_management_camt054_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_liquidity_management_camt054_srch') form;
  @ViewChild('npss_liquidity_management_camt054_srch_memory12') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1672471156312"
	dtt_code : string = "dtt_1304_1672471952205"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of memory12
		this.ctrl.memory12 = {}
		this.ctrl.memory12.id = "RN01CN1"
		this.ctrl.memory12.desc = "Created Date"
		this.ctrl.memory12.visible = true
		this.ctrl.memory12.label_name = "Created Date"
		this.ctrl.memory12.df_code = "DF_1304_1672472068656"
		this.ctrl.memory12.df_description = "Column Group 1"
		this.ctrl.memory12.uictrl_code = "CDN_DATE"
		this.ctrl.memory12.target_column = "memory12"
		this.ctrl.memory12.data_type = "DATETIME"
		this.ctrl.memory12.data_length = 0
		this.ctrl.memory12.zone_df_code = "DF_1304_1672472068656"
		this.ctrl.memory12.default_value = "setcurrentdate(),{}"
		this.ctrl.memory12.is_memory_ctrl = "Y"
		this.ctrl.memory12.field_coordinates = ""
		this.ctrl.memory12.sub_details = ""
		this.ctrl.memory12.accept_char = ""
		this.ctrl.memory12.currency_format = ""
		this.ctrl.memory12.data_scale = ""
		this.ctrl.memory12.binding_name = "CREATED_DATE"
		this.ctrl.memory12.hide_label = false
		this.ctrl.memory12.depends_on = ""
		this.ctrl.memory12.placeholder = ""
		this.ctrl.memory12.dynamic_param = ""
		this.ctrl.memory12.style_code = ""
		this.ctrl.memory12.data_source = ""
		this.ctrl.memory12.image_association = ""
		this.ctrl.memory12.show = true
		this.ctrl.memory12.sub_content = ""
		this.ctrl.memory12.required = false
		this.ctrl.memory12.vld_rules = []
		this.ctrl.memory12.targetcolumn_lower = "memory12"
		this.ctrl.memory12.disabled = false
		this.ctrl.memory12.view_name = "f_npss_liquidity_management_camt054_srch"
		this.ctrl.memory12.ctrl_id = "npss_liquidity_management_camt054_srch_memory12"
		this.ctrl.npss_liquidity_management_camt054_srch_memory12 = {}
		this.ctrl.npss_liquidity_management_camt054_srch_memory12.onChangecomponent = new EventEmitter<any>()
	
		//Properties of notification_id
		this.ctrl.notification_id = {}
		this.ctrl.notification_id.id = "RN01CN2"
		this.ctrl.notification_id.desc = "Notification Id"
		this.ctrl.notification_id.visible = true
		this.ctrl.notification_id.label_name = "Notification Id"
		this.ctrl.notification_id.df_code = "DF_1304_1672472068656"
		this.ctrl.notification_id.df_description = "Column Group 1"
		this.ctrl.notification_id.uictrl_code = "CDN_CTRL"
		this.ctrl.notification_id.target_column = "NOTIFICATION_ID"
		this.ctrl.notification_id.data_type = "TEXT"
		this.ctrl.notification_id.data_length = 35
		this.ctrl.notification_id.zone_df_code = "DF_1304_1672472068656"
		this.ctrl.notification_id.default_value = ""
		this.ctrl.notification_id.is_memory_ctrl = ""
		this.ctrl.notification_id.field_coordinates = ""
		this.ctrl.notification_id.sub_details = ""
		this.ctrl.notification_id.accept_char = ""
		this.ctrl.notification_id.currency_format = ""
		this.ctrl.notification_id.data_scale = ""
		this.ctrl.notification_id.binding_name = "NOTIFICATION_ID"
		this.ctrl.notification_id.hide_label = false
		this.ctrl.notification_id.depends_on = ""
		this.ctrl.notification_id.placeholder = ""
		this.ctrl.notification_id.dynamic_param = ""
		this.ctrl.notification_id.style_code = ""
		this.ctrl.notification_id.data_source = ""
		this.ctrl.notification_id.image_association = ""
		this.ctrl.notification_id.show = true
		this.ctrl.notification_id.sub_content = ""
		this.ctrl.notification_id.required = false
		this.ctrl.notification_id.vld_rules = []
		this.ctrl.notification_id.targetcolumn_lower = "notification_id"
		this.ctrl.notification_id.disabled = false
		this.ctrl.notification_id.view_name = "f_npss_liquidity_management_camt054_srch"
		this.ctrl.notification_id.ctrl_id = "npss_liquidity_management_camt054_srch_notification_id"
		this.ctrl.npss_liquidity_management_camt054_srch_notification_id = {}
		this.ctrl.npss_liquidity_management_camt054_srch_notification_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of iban
		this.ctrl.iban = {}
		this.ctrl.iban.id = "RN11CN3"
		this.ctrl.iban.desc = "IBAN"
		this.ctrl.iban.visible = true
		this.ctrl.iban.label_name = "IBAN"
		this.ctrl.iban.df_code = "DF_1304_1672472068656"
		this.ctrl.iban.df_description = "Column Group 1"
		this.ctrl.iban.uictrl_code = "CDN_CTRL"
		this.ctrl.iban.target_column = "IBAN"
		this.ctrl.iban.data_type = "TEXT"
		this.ctrl.iban.data_length = 35
		this.ctrl.iban.zone_df_code = "DF_1304_1672472068656"
		this.ctrl.iban.default_value = ""
		this.ctrl.iban.is_memory_ctrl = ""
		this.ctrl.iban.field_coordinates = ""
		this.ctrl.iban.sub_details = ""
		this.ctrl.iban.accept_char = ""
		this.ctrl.iban.currency_format = ""
		this.ctrl.iban.data_scale = ""
		this.ctrl.iban.binding_name = "IBAN"
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
		this.ctrl.iban.view_name = "f_npss_liquidity_management_camt054_srch"
		this.ctrl.iban.ctrl_id = "npss_liquidity_management_camt054_srch_iban"
		this.ctrl.npss_liquidity_management_camt054_srch_iban = {}
		this.ctrl.npss_liquidity_management_camt054_srch_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of currency
		this.ctrl.currency = {}
		this.ctrl.currency.id = "RN11CN4"
		this.ctrl.currency.desc = "Currency"
		this.ctrl.currency.visible = true
		this.ctrl.currency.label_name = "Currency"
		this.ctrl.currency.df_code = "DF_1304_1672472068656"
		this.ctrl.currency.df_description = "Column Group 1"
		this.ctrl.currency.uictrl_code = "CBO"
		this.ctrl.currency.target_column = "CURRENCY"
		this.ctrl.currency.data_type = "TEXT"
		this.ctrl.currency.data_length = 3
		this.ctrl.currency.zone_df_code = "DF_1304_1672472068656"
		this.ctrl.currency.default_value = ""
		this.ctrl.currency.is_memory_ctrl = ""
		this.ctrl.currency.field_coordinates = ""
		this.ctrl.currency.sub_details = ""
		this.ctrl.currency.accept_char = ""
		this.ctrl.currency.currency_format = ""
		this.ctrl.currency.data_scale = ""
		this.ctrl.currency.binding_name = "CURRENCY"
		this.ctrl.currency.hide_label = false
		this.ctrl.currency.depends_on = ""
		this.ctrl.currency.placeholder = ""
		this.ctrl.currency.dynamic_param = ""
		this.ctrl.currency.style_code = ""
		this.ctrl.currency.data_source = {"ds_code":"UDS_1304_1672474946222","ds_description":"NPSS Currency CDB","rows":[],"type":"DPS_TABLE","value_member":"CD_CODE","display_member":"CD_DESCRIPTION","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_NC_CODE_DESCRIPTIONS","context":"","filters":[{"filter_name":"Filter1","binding_name":"CD_CATEGORY","id":"DF_1678253218367","binding_value":"ACCOUNT_CURRENCY","source_name":"CD_CATEGORY","source_value":"ACCOUNT_CURRENCY","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter2","binding_name":"NEED_SYNC","id":"DF_1678253218367","binding_value":"Y","source_name":"NEED_SYNC","source_value":"Y","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter3","binding_name":"TENANT_ID","id":"DF_1678253218367","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"CD_CATEGORY","binding_value":"ACCOUNT_CURRENCY","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","temp_value":"ACCOUNT_CURRENCY","filter_values":"HARDCODED"},{"operators":"=","data_type":"TEXT","binding_name":"NEED_SYNC","binding_value":"Y","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"Y"},{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":3,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"}]},"query":"(CD_CATEGORY = ACCOUNT_CURRENCY AND NEED_SYNC = Y AND TENANT_ID = SESSION_LEVEL.TENANT_ID)"},"sel_columns":[],"need_first_item_selection":false,"has_parent":false}
		this.ctrl.currency.image_association = ""
		this.ctrl.currency.show = true
		this.ctrl.currency.sub_content = ""
		this.ctrl.currency.required = false
		this.ctrl.currency.vld_rules = []
		this.ctrl.currency.targetcolumn_lower = "currency"
		this.ctrl.currency.disabled = false
		this.ctrl.currency.view_name = "f_npss_liquidity_management_camt054_srch"
		this.ctrl.currency.ctrl_id = "npss_liquidity_management_camt054_srch_currency"
		this.ctrl.npss_liquidity_management_camt054_srch_currency = {}
		this.ctrl.npss_liquidity_management_camt054_srch_currency.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_liquidity_management_camt054_srch.currency = {}
	
		//Properties of cr_dr_indicator
		this.ctrl.cr_dr_indicator = {}
		this.ctrl.cr_dr_indicator.id = "RN21CN5"
		this.ctrl.cr_dr_indicator.desc = "Cr Dr Indicator"
		this.ctrl.cr_dr_indicator.visible = false
		this.ctrl.cr_dr_indicator.label_name = "Cr Dr Indicator"
		this.ctrl.cr_dr_indicator.df_code = "DF_1304_1672472068656"
		this.ctrl.cr_dr_indicator.df_description = "Column Group 1"
		this.ctrl.cr_dr_indicator.uictrl_code = "CBO"
		this.ctrl.cr_dr_indicator.target_column = "CR_DR_INDICATOR"
		this.ctrl.cr_dr_indicator.data_type = "TEXT"
		this.ctrl.cr_dr_indicator.data_length = 35
		this.ctrl.cr_dr_indicator.zone_df_code = "DF_1304_1672472068656"
		this.ctrl.cr_dr_indicator.default_value = ""
		this.ctrl.cr_dr_indicator.is_memory_ctrl = ""
		this.ctrl.cr_dr_indicator.field_coordinates = ""
		this.ctrl.cr_dr_indicator.sub_details = ""
		this.ctrl.cr_dr_indicator.accept_char = ""
		this.ctrl.cr_dr_indicator.currency_format = ""
		this.ctrl.cr_dr_indicator.data_scale = ""
		this.ctrl.cr_dr_indicator.binding_name = "CR_DR_INDICATOR"
		this.ctrl.cr_dr_indicator.hide_label = false
		this.ctrl.cr_dr_indicator.depends_on = ""
		this.ctrl.cr_dr_indicator.placeholder = ""
		this.ctrl.cr_dr_indicator.dynamic_param = ""
		this.ctrl.cr_dr_indicator.style_code = ""
		this.ctrl.cr_dr_indicator.data_source = {"ds_code":"UDS_1304_1672476096924","ds_description":"NPSS CR DR Indicator CDB","rows":[],"type":"DPS_TABLE","value_member":"CD_CODE","display_member":"CD_DESCRIPTION","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_NC_CODE_DESCRIPTIONS","context":"","filters":[{"filter_name":"Filter1","binding_name":"CD_CATEGORY","id":"DF_1678253299158","binding_value":"CR_DR_INDICATOR","source_name":"CD_CATEGORY","source_value":"CR_DR_INDICATOR","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter2","binding_name":"NEED_SYNC","id":"DF_1678253299158","binding_value":"Y","source_name":"NEED_SYNC","source_value":"Y","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter3","binding_name":"TENANT_ID","id":"DF_1678253299158","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"CD_CATEGORY","binding_value":"CR_DR_INDICATOR","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","temp_value":"CR_DR_INDICATOR","filter_values":"HARDCODED"},{"operators":"=","data_type":"TEXT","binding_name":"NEED_SYNC","binding_value":"Y","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"Y"},{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":3,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"}]},"query":"(CD_CATEGORY = CR_DR_INDICATOR AND NEED_SYNC = Y AND TENANT_ID = SESSION_LEVEL.TENANT_ID)"},"sel_columns":[],"need_first_item_selection":false,"has_parent":false}
		this.ctrl.cr_dr_indicator.image_association = ""
		this.ctrl.cr_dr_indicator.show = true
		this.ctrl.cr_dr_indicator.sub_content = ""
		this.ctrl.cr_dr_indicator.required = false
		this.ctrl.cr_dr_indicator.vld_rules = []
		this.ctrl.cr_dr_indicator.targetcolumn_lower = "cr_dr_indicator"
		this.ctrl.cr_dr_indicator.disabled = false
		this.ctrl.cr_dr_indicator.view_name = "f_npss_liquidity_management_camt054_srch"
		this.ctrl.cr_dr_indicator.ctrl_id = "npss_liquidity_management_camt054_srch_cr_dr_indicator"
		this.ctrl.npss_liquidity_management_camt054_srch_cr_dr_indicator = {}
		this.ctrl.npss_liquidity_management_camt054_srch_cr_dr_indicator.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_liquidity_management_camt054_srch.cr_dr_indicator = {}
		this.screen_instance[this.comp_id].f_npss_liquidity_management_camt054_srch.model = {"MEMORY12":"setcurrentdate(),{}","NOTIFICATION_ID":"","IBAN":"","CURRENCY":"","CR_DR_INDICATOR":""}
		this.screen_instance[this.comp_id].f_npss_liquidity_management_camt054_srch.Meta = [{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"NOTIFICATION_ID"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"IBAN"},{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"CURRENCY"},{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"CR_DR_INDICATOR"}]
		this.screen_instance[this.comp_id].f_npss_liquidity_management_camt054_srch.dt_code = "dt_1304_1672471156312"
		this.screen_instance[this.comp_id].f_npss_liquidity_management_camt054_srch.dtt_code = "dtt_1304_1672471952205"
		this.screen_instance[this.comp_id].f_npss_liquidity_management_camt054_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_liquidity_management_camt054_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_liquidity_management_camt054_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_liquidity_management_camt054_srch[control][property] = value;
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
    