/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 29109 
Modified By     : Admin 
Modified Date   : 2023-Apr-19 8:19 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_liquidity_cycle
Form Name       : NPSS Liq Cycle SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_liq_cycle_srch',
  templateUrl: './f_npss_liq_cycle_srch.component.html',
  styleUrls: ['./f_npss_liq_cycle_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_liq_cycle_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_liq_cycle_srch') form;
  @ViewChild('npss_liq_cycle_srch_currency') element: ElementRef;
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

  
		//Properties of currency
		this.ctrl.currency = {}
		this.ctrl.currency.id = "9136a513-5b71-4c65-873e-234269250ed4_1677310305084"
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
		this.ctrl.currency.binding_name = "CURRENCY"
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
		this.ctrl.currency.vld_rules = []
		this.ctrl.currency.targetcolumn_lower = "currency"
		this.ctrl.currency.disabled = false
		this.ctrl.currency.view_name = "f_npss_liq_cycle_srch"
		this.ctrl.currency.ctrl_id = "npss_liq_cycle_srch_currency"
		this.ctrl.npss_liq_cycle_srch_currency = {}
		this.ctrl.npss_liq_cycle_srch_currency.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_liq_cycle_srch.currency = {}
	
		//Properties of accountholderbic
		this.ctrl.accountholderbic = {}
		this.ctrl.accountholderbic.id = "78714a11-62ce-4a47-b901-f6608efc0bc7_1677310305084"
		this.ctrl.accountholderbic.desc = "Account Holder BIC"
		this.ctrl.accountholderbic.visible = true
		this.ctrl.accountholderbic.label_name = "Account Holder BIC"
		this.ctrl.accountholderbic.df_code = "DF_1304_1670589236195"
		this.ctrl.accountholderbic.df_description = "Column Group 1"
		this.ctrl.accountholderbic.uictrl_code = "CDN_CTRL"
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
		this.ctrl.accountholderbic.binding_name = "ACCOUNTHOLDERBIC"
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
		this.ctrl.accountholderbic.vld_rules = []
		this.ctrl.accountholderbic.targetcolumn_lower = "accountholderbic"
		this.ctrl.accountholderbic.disabled = false
		this.ctrl.accountholderbic.view_name = "f_npss_liq_cycle_srch"
		this.ctrl.accountholderbic.ctrl_id = "npss_liq_cycle_srch_accountholderbic"
		this.ctrl.npss_liq_cycle_srch_accountholderbic = {}
		this.ctrl.npss_liq_cycle_srch_accountholderbic.onChangecomponent = new EventEmitter<any>()
	
		//Properties of accountnumber
		this.ctrl.accountnumber = {}
		this.ctrl.accountnumber.id = "379fe6e0-6d2e-4014-96e7-062f7d15b402_1677310305085"
		this.ctrl.accountnumber.desc = "Account Number"
		this.ctrl.accountnumber.visible = true
		this.ctrl.accountnumber.label_name = "Account Number"
		this.ctrl.accountnumber.df_code = "DF_1304_1670589236195"
		this.ctrl.accountnumber.df_description = "Column Group 1"
		this.ctrl.accountnumber.uictrl_code = "CDN_CTRL"
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
		this.ctrl.accountnumber.binding_name = "ACCOUNTNUMBER"
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
		this.ctrl.accountnumber.vld_rules = []
		this.ctrl.accountnumber.targetcolumn_lower = "accountnumber"
		this.ctrl.accountnumber.disabled = false
		this.ctrl.accountnumber.view_name = "f_npss_liq_cycle_srch"
		this.ctrl.accountnumber.ctrl_id = "npss_liq_cycle_srch_accountnumber"
		this.ctrl.npss_liq_cycle_srch_accountnumber = {}
		this.ctrl.npss_liq_cycle_srch_accountnumber.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cyclenumber
		this.ctrl.cyclenumber = {}
		this.ctrl.cyclenumber.id = "ad0a7576-1328-4bc5-9bc2-bb133cf7fbf7_1677310305085"
		this.ctrl.cyclenumber.desc = "Cycle Number"
		this.ctrl.cyclenumber.visible = true
		this.ctrl.cyclenumber.label_name = "Cycle Number"
		this.ctrl.cyclenumber.df_code = "DF_1304_1670589236195"
		this.ctrl.cyclenumber.df_description = "Column Group 1"
		this.ctrl.cyclenumber.uictrl_code = "TXT"
		this.ctrl.cyclenumber.target_column = "CYCLENUMBER"
		this.ctrl.cyclenumber.data_type = "TEXT"
		this.ctrl.cyclenumber.data_length = 32
		this.ctrl.cyclenumber.zone_df_code = "DF_1304_1670589236195"
		this.ctrl.cyclenumber.default_value = ""
		this.ctrl.cyclenumber.is_memory_ctrl = ""
		this.ctrl.cyclenumber.field_coordinates = ""
		this.ctrl.cyclenumber.sub_details = ""
		this.ctrl.cyclenumber.accept_char = ""
		this.ctrl.cyclenumber.currency_format = ""
		this.ctrl.cyclenumber.data_scale = ""
		this.ctrl.cyclenumber.binding_name = "CYCLENUMBER"
		this.ctrl.cyclenumber.hide_label = false
		this.ctrl.cyclenumber.depends_on = ""
		this.ctrl.cyclenumber.placeholder = ""
		this.ctrl.cyclenumber.dynamic_param = ""
		this.ctrl.cyclenumber.style_code = ""
		this.ctrl.cyclenumber.data_source = ""
		this.ctrl.cyclenumber.image_association = ""
		this.ctrl.cyclenumber.show = true
		this.ctrl.cyclenumber.sub_content = ""
		this.ctrl.cyclenumber.required = false
		this.ctrl.cyclenumber.vld_rules = []
		this.ctrl.cyclenumber.targetcolumn_lower = "cyclenumber"
		this.ctrl.cyclenumber.disabled = false
		this.ctrl.cyclenumber.view_name = "f_npss_liq_cycle_srch"
		this.ctrl.cyclenumber.ctrl_id = "npss_liq_cycle_srch_cyclenumber"
		this.ctrl.npss_liq_cycle_srch_cyclenumber = {}
		this.ctrl.npss_liq_cycle_srch_cyclenumber.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_liq_cycle_srch.model = {"CURRENCY":"","ACCOUNTHOLDERBIC":"","ACCOUNTNUMBER":"","CYCLENUMBER":""}
		this.screen_instance[this.comp_id].f_npss_liq_cycle_srch.Meta = [{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"CURRENCY"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"ACCOUNTHOLDERBIC"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"ACCOUNTNUMBER"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CYCLENUMBER"}]
		this.screen_instance[this.comp_id].f_npss_liq_cycle_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_liq_cycle_srch.dtt_code = "dtt_1304_1670589169341"
		this.screen_instance[this.comp_id].f_npss_liq_cycle_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_liq_cycle_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_liq_cycle_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_liq_cycle_srch[control][property] = value;
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
    