/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35102 
Modified By     : Admin 
Modified Date   : 2024-Apr-05 7:38 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_user_maintenance_report
Form Name       : User Maintenance Report SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_user_maintenance_report_srch',
  templateUrl: './f_user_maintenance_report_srch.component.html',
  styleUrls: ['./f_user_maintenance_report_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_user_maintenance_report_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_user_maintenance_report_srch') form;
  @ViewChild('user_maintenance_report_srch_memory156') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665901130705"
	dtt_code : string = "dtt_1304_1665901217208"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of memory156
		this.ctrl.memory156 = {}
		this.ctrl.memory156.id = "RN01CN1"
		this.ctrl.memory156.desc = "Login Name"
		this.ctrl.memory156.visible = true
		this.ctrl.memory156.label_name = "Login Name"
		this.ctrl.memory156.df_code = "DF_1304_1665901396659"
		this.ctrl.memory156.df_description = "Column Group 1"
		this.ctrl.memory156.uictrl_code = "CDN_CTRL"
		this.ctrl.memory156.target_column = "memory156"
		this.ctrl.memory156.data_type = "TEXT"
		this.ctrl.memory156.data_length = 32
		this.ctrl.memory156.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory156.default_value = ""
		this.ctrl.memory156.is_memory_ctrl = "Y"
		this.ctrl.memory156.field_coordinates = ""
		this.ctrl.memory156.sub_details = ""
		this.ctrl.memory156.accept_char = ""
		this.ctrl.memory156.currency_format = ""
		this.ctrl.memory156.data_scale = ""
		this.ctrl.memory156.binding_name = "LOGIN_NAME"
		this.ctrl.memory156.hide_label = false
		this.ctrl.memory156.depends_on = ""
		this.ctrl.memory156.placeholder = ""
		this.ctrl.memory156.dynamic_param = ""
		this.ctrl.memory156.style_code = ""
		this.ctrl.memory156.data_source = ""
		this.ctrl.memory156.image_association = ""
		this.ctrl.memory156.show = true
		this.ctrl.memory156.sub_content = ""
		this.ctrl.memory156.required = false
		this.ctrl.memory156.vld_rules = []
		this.ctrl.memory156.targetcolumn_lower = "memory156"
		this.ctrl.memory156.disabled = false
		this.ctrl.memory156.view_name = "f_user_maintenance_report_srch"
		this.ctrl.memory156.ctrl_id = "user_maintenance_report_srch_memory156"
		this.ctrl.user_maintenance_report_srch_memory156 = {}
		this.ctrl.user_maintenance_report_srch_memory156.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory160
		this.ctrl.memory160 = {}
		this.ctrl.memory160.id = "RN01CN5"
		this.ctrl.memory160.desc = "First Name"
		this.ctrl.memory160.visible = true
		this.ctrl.memory160.label_name = "First Name"
		this.ctrl.memory160.df_code = "DF_1304_1665901396659"
		this.ctrl.memory160.df_description = "Column Group 1"
		this.ctrl.memory160.uictrl_code = "CDN_CTRL"
		this.ctrl.memory160.target_column = "memory160"
		this.ctrl.memory160.data_type = "TEXT"
		this.ctrl.memory160.data_length = 32
		this.ctrl.memory160.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory160.default_value = ""
		this.ctrl.memory160.is_memory_ctrl = "Y"
		this.ctrl.memory160.field_coordinates = ""
		this.ctrl.memory160.sub_details = ""
		this.ctrl.memory160.accept_char = ""
		this.ctrl.memory160.currency_format = ""
		this.ctrl.memory160.data_scale = ""
		this.ctrl.memory160.binding_name = "FIRST_NAME"
		this.ctrl.memory160.hide_label = false
		this.ctrl.memory160.depends_on = ""
		this.ctrl.memory160.placeholder = ""
		this.ctrl.memory160.dynamic_param = ""
		this.ctrl.memory160.style_code = ""
		this.ctrl.memory160.data_source = ""
		this.ctrl.memory160.image_association = ""
		this.ctrl.memory160.show = true
		this.ctrl.memory160.sub_content = ""
		this.ctrl.memory160.required = false
		this.ctrl.memory160.vld_rules = []
		this.ctrl.memory160.targetcolumn_lower = "memory160"
		this.ctrl.memory160.disabled = false
		this.ctrl.memory160.view_name = "f_user_maintenance_report_srch"
		this.ctrl.memory160.ctrl_id = "user_maintenance_report_srch_memory160"
		this.ctrl.user_maintenance_report_srch_memory160 = {}
		this.ctrl.user_maintenance_report_srch_memory160.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory161
		this.ctrl.memory161 = {}
		this.ctrl.memory161.id = "RN11CN6"
		this.ctrl.memory161.desc = "Email"
		this.ctrl.memory161.visible = true
		this.ctrl.memory161.label_name = "Email"
		this.ctrl.memory161.df_code = "DF_1304_1665901396659"
		this.ctrl.memory161.df_description = "Column Group 1"
		this.ctrl.memory161.uictrl_code = "CDN_CTRL"
		this.ctrl.memory161.target_column = "memory161"
		this.ctrl.memory161.data_type = "TEXT"
		this.ctrl.memory161.data_length = 32
		this.ctrl.memory161.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory161.default_value = ""
		this.ctrl.memory161.is_memory_ctrl = "Y"
		this.ctrl.memory161.field_coordinates = ""
		this.ctrl.memory161.sub_details = ""
		this.ctrl.memory161.accept_char = ""
		this.ctrl.memory161.currency_format = ""
		this.ctrl.memory161.data_scale = ""
		this.ctrl.memory161.binding_name = "EMAIL_ID"
		this.ctrl.memory161.hide_label = false
		this.ctrl.memory161.depends_on = ""
		this.ctrl.memory161.placeholder = ""
		this.ctrl.memory161.dynamic_param = ""
		this.ctrl.memory161.style_code = ""
		this.ctrl.memory161.data_source = ""
		this.ctrl.memory161.image_association = ""
		this.ctrl.memory161.show = true
		this.ctrl.memory161.sub_content = ""
		this.ctrl.memory161.required = false
		this.ctrl.memory161.vld_rules = []
		this.ctrl.memory161.targetcolumn_lower = "memory161"
		this.ctrl.memory161.disabled = false
		this.ctrl.memory161.view_name = "f_user_maintenance_report_srch"
		this.ctrl.memory161.ctrl_id = "user_maintenance_report_srch_memory161"
		this.ctrl.user_maintenance_report_srch_memory161 = {}
		this.ctrl.user_maintenance_report_srch_memory161.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory162
		this.ctrl.memory162 = {}
		this.ctrl.memory162.id = "RN11CN7"
		this.ctrl.memory162.desc = "Mobile Number"
		this.ctrl.memory162.visible = true
		this.ctrl.memory162.label_name = "Mobile Number"
		this.ctrl.memory162.df_code = "DF_1304_1665901396659"
		this.ctrl.memory162.df_description = "Column Group 1"
		this.ctrl.memory162.uictrl_code = "CDN_CTRL"
		this.ctrl.memory162.target_column = "memory162"
		this.ctrl.memory162.data_type = "NUMBER"
		this.ctrl.memory162.data_length = 10
		this.ctrl.memory162.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory162.default_value = ""
		this.ctrl.memory162.is_memory_ctrl = "Y"
		this.ctrl.memory162.field_coordinates = ""
		this.ctrl.memory162.sub_details = ""
		this.ctrl.memory162.accept_char = ""
		this.ctrl.memory162.currency_format = ""
		this.ctrl.memory162.data_scale = ""
		this.ctrl.memory162.binding_name = "MOBILE_NO"
		this.ctrl.memory162.hide_label = false
		this.ctrl.memory162.depends_on = ""
		this.ctrl.memory162.placeholder = ""
		this.ctrl.memory162.dynamic_param = ""
		this.ctrl.memory162.style_code = ""
		this.ctrl.memory162.data_source = ""
		this.ctrl.memory162.image_association = ""
		this.ctrl.memory162.show = true
		this.ctrl.memory162.sub_content = ""
		this.ctrl.memory162.required = false
		this.ctrl.memory162.vld_rules = []
		this.ctrl.memory162.targetcolumn_lower = "memory162"
		this.ctrl.memory162.disabled = false
		this.ctrl.memory162.view_name = "f_user_maintenance_report_srch"
		this.ctrl.memory162.ctrl_id = "user_maintenance_report_srch_memory162"
		this.ctrl.user_maintenance_report_srch_memory162 = {}
		this.ctrl.user_maintenance_report_srch_memory162.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory163
		this.ctrl.memory163 = {}
		this.ctrl.memory163.id = "RN21CN8"
		this.ctrl.memory163.desc = "Start Active Date"
		this.ctrl.memory163.visible = true
		this.ctrl.memory163.label_name = "Start Active Date"
		this.ctrl.memory163.df_code = "DF_1304_1665901396659"
		this.ctrl.memory163.df_description = "Column Group 1"
		this.ctrl.memory163.uictrl_code = "CDN_DATE"
		this.ctrl.memory163.target_column = "memory163"
		this.ctrl.memory163.data_type = "DATETIME"
		this.ctrl.memory163.data_length = 0
		this.ctrl.memory163.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory163.default_value = "setcurrentdate(),{}"
		this.ctrl.memory163.is_memory_ctrl = "Y"
		this.ctrl.memory163.field_coordinates = ""
		this.ctrl.memory163.sub_details = ""
		this.ctrl.memory163.accept_char = ""
		this.ctrl.memory163.currency_format = ""
		this.ctrl.memory163.data_scale = ""
		this.ctrl.memory163.binding_name = "START_ACTIVE_DATE"
		this.ctrl.memory163.hide_label = false
		this.ctrl.memory163.depends_on = ""
		this.ctrl.memory163.placeholder = ""
		this.ctrl.memory163.dynamic_param = ""
		this.ctrl.memory163.style_code = ""
		this.ctrl.memory163.data_source = ""
		this.ctrl.memory163.image_association = ""
		this.ctrl.memory163.show = true
		this.ctrl.memory163.sub_content = ""
		this.ctrl.memory163.required = false
		this.ctrl.memory163.vld_rules = []
		this.ctrl.memory163.targetcolumn_lower = "memory163"
		this.ctrl.memory163.disabled = false
		this.ctrl.memory163.view_name = "f_user_maintenance_report_srch"
		this.ctrl.memory163.ctrl_id = "user_maintenance_report_srch_memory163"
		this.ctrl.user_maintenance_report_srch_memory163 = {}
		this.ctrl.user_maintenance_report_srch_memory163.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory75
		this.ctrl.memory75 = {}
		this.ctrl.memory75.id = "RN21CN9"
		this.ctrl.memory75.desc = "Trn status"
		this.ctrl.memory75.visible = true
		this.ctrl.memory75.label_name = "Trn status"
		this.ctrl.memory75.df_code = "DF_1304_1665901396659"
		this.ctrl.memory75.df_description = "Column Group 1"
		this.ctrl.memory75.uictrl_code = "CDN_CTRL"
		this.ctrl.memory75.target_column = "memory75"
		this.ctrl.memory75.data_type = "TEXT"
		this.ctrl.memory75.data_length = 0
		this.ctrl.memory75.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory75.default_value = ""
		this.ctrl.memory75.is_memory_ctrl = "Y"
		this.ctrl.memory75.field_coordinates = ""
		this.ctrl.memory75.sub_details = ""
		this.ctrl.memory75.accept_char = ""
		this.ctrl.memory75.currency_format = ""
		this.ctrl.memory75.data_scale = ""
		this.ctrl.memory75.binding_name = "STATUS"
		this.ctrl.memory75.hide_label = false
		this.ctrl.memory75.depends_on = ""
		this.ctrl.memory75.placeholder = ""
		this.ctrl.memory75.dynamic_param = ""
		this.ctrl.memory75.style_code = ""
		this.ctrl.memory75.data_source = {"ds_code":"UDS_1304_1669276117602","ds_description":"Status CDB FOR OP","rows":[],"type":"DPS_TABLE","value_member":"STATUS","display_member":"STATUS","first_record_display":"Select","column_list":"","order_by":"","target_table":"NPSS_VW_RPT_STATUS","context":"","filters":[{"filter_name":"Filter1","binding_name":"PROCESS_TYPE","id":"DF_1678086804065","binding_value":"OP","source_name":"PROCESS_TYPE","source_value":"OP","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"PROCESS_TYPE","binding_value":"OP","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"OP"}]},"query":"(PROCESS_TYPE = OP)"},"sel_columns":[],"need_first_item_selection":false,"has_parent":false}
		this.ctrl.memory75.image_association = ""
		this.ctrl.memory75.show = true
		this.ctrl.memory75.sub_content = ""
		this.ctrl.memory75.required = false
		this.ctrl.memory75.vld_rules = []
		this.ctrl.memory75.targetcolumn_lower = "memory75"
		this.ctrl.memory75.disabled = false
		this.ctrl.memory75.view_name = "f_user_maintenance_report_srch"
		this.ctrl.memory75.ctrl_id = "user_maintenance_report_srch_memory75"
		this.ctrl.user_maintenance_report_srch_memory75 = {}
		this.ctrl.user_maintenance_report_srch_memory75.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_user_maintenance_report_srch.model = {"MEMORY156":"","MEMORY160":"","MEMORY161":"","MEMORY162":"","MEMORY163":"setcurrentdate(),{}","MEMORY75":""}
		this.screen_instance[this.comp_id].f_user_maintenance_report_srch.Meta = []
		this.screen_instance[this.comp_id].f_user_maintenance_report_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_user_maintenance_report_srch.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_user_maintenance_report_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_user_maintenance_report_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_user_maintenance_report_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_user_maintenance_report_srch[control][property] = value;
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
    