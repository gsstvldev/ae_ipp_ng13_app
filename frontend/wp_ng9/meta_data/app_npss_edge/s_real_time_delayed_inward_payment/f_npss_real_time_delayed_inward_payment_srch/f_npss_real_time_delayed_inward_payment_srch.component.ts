/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35083 
Modified By     : Admin 
Modified Date   : 2024-Apr-04 11:10 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_real_time_delayed_inward_payment
Form Name       : NPSS Real Time Delayed Inward Payment SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_real_time_delayed_inward_payment_srch',
  templateUrl: './f_npss_real_time_delayed_inward_payment_srch.component.html',
  styleUrls: ['./f_npss_real_time_delayed_inward_payment_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_real_time_delayed_inward_payment_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_real_time_delayed_inward_payment_srch') form;
  @ViewChild('npss_real_time_delayed_inward_payment_srch_memory152') element: ElementRef;
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

  
		//Properties of memory152
		this.ctrl.memory152 = {}
		this.ctrl.memory152.id = "RN01CN3"
		this.ctrl.memory152.desc = "Processed Date"
		this.ctrl.memory152.visible = true
		this.ctrl.memory152.label_name = "Processed Date"
		this.ctrl.memory152.df_code = "DF_1304_1665901396659"
		this.ctrl.memory152.df_description = "Column Group 1"
		this.ctrl.memory152.uictrl_code = "CDN_DATE"
		this.ctrl.memory152.target_column = "memory152"
		this.ctrl.memory152.data_type = "DATETIME"
		this.ctrl.memory152.data_length = 0
		this.ctrl.memory152.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory152.default_value = "setcurrentdate(),{}"
		this.ctrl.memory152.is_memory_ctrl = "Y"
		this.ctrl.memory152.field_coordinates = ""
		this.ctrl.memory152.sub_details = ""
		this.ctrl.memory152.accept_char = ""
		this.ctrl.memory152.currency_format = ""
		this.ctrl.memory152.data_scale = ""
		this.ctrl.memory152.binding_name = "PROCESSED_DATE"
		this.ctrl.memory152.hide_label = false
		this.ctrl.memory152.depends_on = ""
		this.ctrl.memory152.placeholder = ""
		this.ctrl.memory152.dynamic_param = ""
		this.ctrl.memory152.style_code = ""
		this.ctrl.memory152.data_source = ""
		this.ctrl.memory152.image_association = ""
		this.ctrl.memory152.show = true
		this.ctrl.memory152.sub_content = ""
		this.ctrl.memory152.required = false
		this.ctrl.memory152.vld_rules = []
		this.ctrl.memory152.targetcolumn_lower = "memory152"
		this.ctrl.memory152.disabled = false
		this.ctrl.memory152.view_name = "f_npss_real_time_delayed_inward_payment_srch"
		this.ctrl.memory152.ctrl_id = "npss_real_time_delayed_inward_payment_srch_memory152"
		this.ctrl.npss_real_time_delayed_inward_payment_srch_memory152 = {}
		this.ctrl.npss_real_time_delayed_inward_payment_srch_memory152.onChangecomponent = new EventEmitter<any>()
	
		//Properties of department_code
		this.ctrl.department_code = {}
		this.ctrl.department_code.id = "RN01CN2"
		this.ctrl.department_code.desc = "Department Name"
		this.ctrl.department_code.visible = true
		this.ctrl.department_code.label_name = "Department Name"
		this.ctrl.department_code.df_code = "DF_1304_1665901396659"
		this.ctrl.department_code.df_description = "Column Group 1"
		this.ctrl.department_code.uictrl_code = "CBO"
		this.ctrl.department_code.target_column = "DEPARTMENT_CODE"
		this.ctrl.department_code.data_type = "TEXT"
		this.ctrl.department_code.data_length = 32
		this.ctrl.department_code.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.department_code.default_value = ""
		this.ctrl.department_code.is_memory_ctrl = ""
		this.ctrl.department_code.field_coordinates = ""
		this.ctrl.department_code.sub_details = ""
		this.ctrl.department_code.accept_char = ""
		this.ctrl.department_code.currency_format = ""
		this.ctrl.department_code.data_scale = ""
		this.ctrl.department_code.binding_name = "DEPARTMENT_CODE"
		this.ctrl.department_code.hide_label = false
		this.ctrl.department_code.depends_on = ""
		this.ctrl.department_code.placeholder = ""
		this.ctrl.department_code.dynamic_param = ""
		this.ctrl.department_code.style_code = ""
		this.ctrl.department_code.data_source = {"ds_code":"UDS_1304_1677509056279","ds_description":"NPSS RPT LOGIN SYS AND CUR SYSTEM","rows":[],"type":"BIND_SYSTEMS","value_member":"S_DESCRIPTION","display_member":"S_DESCRIPTION","first_record_display":"Select","column_list":"","order_by":"","target_table":"","context":"","filters":[{"filter_name":"Filter1","binding_name":"ST_ID","id":"DF_1678714670799","binding_value":232,"source_name":"ST_ID","source_value":232,"source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"}],"type_desc":"Combo Binding System - Generic","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"ST_ID","binding_value":232,"sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":232}]},"query":"(ST_ID = 232)"},"sel_columns":[],"need_auto_first_record":true,"current_sys":true,"childsys":"ALLOCATED","need_first_item_selection":false,"has_parent":false}
		this.ctrl.department_code.image_association = ""
		this.ctrl.department_code.show = true
		this.ctrl.department_code.sub_content = ""
		this.ctrl.department_code.required = false
		this.ctrl.department_code.vld_rules = []
		this.ctrl.department_code.targetcolumn_lower = "department_code"
		this.ctrl.department_code.disabled = false
		this.ctrl.department_code.view_name = "f_npss_real_time_delayed_inward_payment_srch"
		this.ctrl.department_code.ctrl_id = "npss_real_time_delayed_inward_payment_srch_department_code"
		this.ctrl.npss_real_time_delayed_inward_payment_srch_department_code = {}
		this.ctrl.npss_real_time_delayed_inward_payment_srch_department_code.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_real_time_delayed_inward_payment_srch.department_code = {}
		this.screen_instance[this.comp_id].f_npss_real_time_delayed_inward_payment_srch.model = {"MEMORY152":"setcurrentdate(),{}","DEPARTMENT_CODE":""}
		this.screen_instance[this.comp_id].f_npss_real_time_delayed_inward_payment_srch.Meta = [{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"DEPARTMENT_CODE"}]
		this.screen_instance[this.comp_id].f_npss_real_time_delayed_inward_payment_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_real_time_delayed_inward_payment_srch.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_real_time_delayed_inward_payment_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_real_time_delayed_inward_payment_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_real_time_delayed_inward_payment_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_real_time_delayed_inward_payment_srch[control][property] = value;
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
    