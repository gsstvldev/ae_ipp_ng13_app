/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27882 
Modified By     : Admin 
Modified Date   : 2023-Jan-20 11:7 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_exceptions
Form Name       : NPSS Exceptions SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_exceptions_srch',
  templateUrl: './f_npss_exceptions_srch.component.html',
  styleUrls: ['./f_npss_exceptions_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_exceptions_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_exceptions_srch') form;
  @ViewChild('npss_exceptions_srch_uetr') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665901130705"
	dtt_code : string = "dtt_1304_1674198360280"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of uetr
		this.ctrl.uetr = {}
		this.ctrl.uetr.id = "RN01CN1"
		this.ctrl.uetr.desc = "UETR"
		this.ctrl.uetr.visible = true
		this.ctrl.uetr.label_name = "UETR"
		this.ctrl.uetr.df_code = "DF_1304_1674198409820"
		this.ctrl.uetr.df_description = "Column Group 1"
		this.ctrl.uetr.uictrl_code = "CDN_CTRL"
		this.ctrl.uetr.target_column = "UETR"
		this.ctrl.uetr.data_type = "TEXT"
		this.ctrl.uetr.data_length = 64
		this.ctrl.uetr.zone_df_code = "DF_1304_1674198409820"
		this.ctrl.uetr.default_value = ""
		this.ctrl.uetr.is_memory_ctrl = ""
		this.ctrl.uetr.field_coordinates = ""
		this.ctrl.uetr.sub_details = ""
		this.ctrl.uetr.accept_char = ""
		this.ctrl.uetr.currency_format = ""
		this.ctrl.uetr.data_scale = ""
		this.ctrl.uetr.binding_name = "UETR"
		this.ctrl.uetr.hide_label = false
		this.ctrl.uetr.depends_on = ""
		this.ctrl.uetr.placeholder = ""
		this.ctrl.uetr.dynamic_param = ""
		this.ctrl.uetr.style_code = ""
		this.ctrl.uetr.data_source = ""
		this.ctrl.uetr.image_association = ""
		this.ctrl.uetr.show = true
		this.ctrl.uetr.sub_content = ""
		this.ctrl.uetr.required = false
		this.ctrl.uetr.vld_rules = []
		this.ctrl.uetr.targetcolumn_lower = "uetr"
		this.ctrl.uetr.disabled = false
		this.ctrl.uetr.view_name = "f_npss_exceptions_srch"
		this.ctrl.uetr.ctrl_id = "npss_exceptions_srch_uetr"
		this.ctrl.npss_exceptions_srch_uetr = {}
		this.ctrl.npss_exceptions_srch_uetr.onChangecomponent = new EventEmitter<any>()
	
		//Properties of message_data
		this.ctrl.message_data = {}
		this.ctrl.message_data.id = "RN01CN2"
		this.ctrl.message_data.desc = "Message Log"
		this.ctrl.message_data.visible = true
		this.ctrl.message_data.label_name = "Message Log"
		this.ctrl.message_data.df_code = "DF_1304_1674198409820"
		this.ctrl.message_data.df_description = "Column Group 1"
		this.ctrl.message_data.uictrl_code = "CDN_CTRL"
		this.ctrl.message_data.target_column = "MESSAGE_DATA"
		this.ctrl.message_data.data_type = "TEXT"
		this.ctrl.message_data.data_length = 80000
		this.ctrl.message_data.zone_df_code = "DF_1304_1674198409820"
		this.ctrl.message_data.default_value = ""
		this.ctrl.message_data.is_memory_ctrl = ""
		this.ctrl.message_data.field_coordinates = ""
		this.ctrl.message_data.sub_details = ""
		this.ctrl.message_data.accept_char = ""
		this.ctrl.message_data.currency_format = ""
		this.ctrl.message_data.data_scale = ""
		this.ctrl.message_data.binding_name = "MESSAGE_DATA"
		this.ctrl.message_data.hide_label = false
		this.ctrl.message_data.depends_on = ""
		this.ctrl.message_data.placeholder = ""
		this.ctrl.message_data.dynamic_param = ""
		this.ctrl.message_data.style_code = ""
		this.ctrl.message_data.data_source = ""
		this.ctrl.message_data.image_association = ""
		this.ctrl.message_data.show = true
		this.ctrl.message_data.sub_content = ""
		this.ctrl.message_data.required = false
		this.ctrl.message_data.vld_rules = []
		this.ctrl.message_data.targetcolumn_lower = "message_data"
		this.ctrl.message_data.disabled = false
		this.ctrl.message_data.view_name = "f_npss_exceptions_srch"
		this.ctrl.message_data.ctrl_id = "npss_exceptions_srch_message_data"
		this.ctrl.npss_exceptions_srch_message_data = {}
		this.ctrl.npss_exceptions_srch_message_data.onChangecomponent = new EventEmitter<any>()
	
		//Properties of process_system
		this.ctrl.process_system = {}
		this.ctrl.process_system.id = "RN11CN3"
		this.ctrl.process_system.desc = "Processing System"
		this.ctrl.process_system.visible = true
		this.ctrl.process_system.label_name = "Processing System"
		this.ctrl.process_system.df_code = "DF_1304_1674198409820"
		this.ctrl.process_system.df_description = "Column Group 1"
		this.ctrl.process_system.uictrl_code = "CBO"
		this.ctrl.process_system.target_column = "PROCESS_SYSTEM"
		this.ctrl.process_system.data_type = "TEXT"
		this.ctrl.process_system.data_length = 64
		this.ctrl.process_system.zone_df_code = "DF_1304_1674198409820"
		this.ctrl.process_system.default_value = ""
		this.ctrl.process_system.is_memory_ctrl = ""
		this.ctrl.process_system.field_coordinates = ""
		this.ctrl.process_system.sub_details = ""
		this.ctrl.process_system.accept_char = ""
		this.ctrl.process_system.currency_format = ""
		this.ctrl.process_system.data_scale = ""
		this.ctrl.process_system.binding_name = "PROCESS_SYSTEM"
		this.ctrl.process_system.hide_label = false
		this.ctrl.process_system.depends_on = ""
		this.ctrl.process_system.placeholder = ""
		this.ctrl.process_system.dynamic_param = ""
		this.ctrl.process_system.style_code = ""
		this.ctrl.process_system.data_source = {"ds_code":"UDS_1304_1672992612811","ds_description":"Core Processing system CDB","rows":[],"type":"DPS_TABLE","value_member":"SYSTEM_CODE","display_member":"SYSTEM_DESCRIPTION","first_record_display":"Select","column_list":"","order_by":"SYSTEM_DESCRIPTION","target_table":"CORE_NC_PROCESSING_SYSTEM","context":"","filters":[{"filter_name":"Filter1","binding_name":"TENANT_ID","id":"DF_1672992897321","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"},{"filter_name":"Filter2","binding_name":"STATUS","id":"DF_1672992897321","binding_value":"APPROVED","source_name":"STATUS","source_value":"APPROVED","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"},{"operators":"=","data_type":"TEXT","binding_name":"STATUS","binding_value":"APPROVED","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"APPROVED"}]},"query":"(TENANT_ID = SESSION_LEVEL.TENANT_ID AND STATUS = APPROVED)"},"sel_columns":[]}
		this.ctrl.process_system.image_association = ""
		this.ctrl.process_system.show = true
		this.ctrl.process_system.sub_content = ""
		this.ctrl.process_system.required = false
		this.ctrl.process_system.vld_rules = []
		this.ctrl.process_system.targetcolumn_lower = "process_system"
		this.ctrl.process_system.disabled = false
		this.ctrl.process_system.view_name = "f_npss_exceptions_srch"
		this.ctrl.process_system.ctrl_id = "npss_exceptions_srch_process_system"
		this.ctrl.npss_exceptions_srch_process_system = {}
		this.ctrl.npss_exceptions_srch_process_system.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_exceptions_srch.process_system = {}
	
		//Properties of process_name
		this.ctrl.process_name = {}
		this.ctrl.process_name.id = "RN11CN4"
		this.ctrl.process_name.desc = "Process Name"
		this.ctrl.process_name.visible = true
		this.ctrl.process_name.label_name = "Process Name"
		this.ctrl.process_name.df_code = "DF_1304_1674198409820"
		this.ctrl.process_name.df_description = "Column Group 1"
		this.ctrl.process_name.uictrl_code = "CDN_CTRL"
		this.ctrl.process_name.target_column = "PROCESS_NAME"
		this.ctrl.process_name.data_type = "TEXT"
		this.ctrl.process_name.data_length = 64
		this.ctrl.process_name.zone_df_code = "DF_1304_1674198409820"
		this.ctrl.process_name.default_value = ""
		this.ctrl.process_name.is_memory_ctrl = ""
		this.ctrl.process_name.field_coordinates = ""
		this.ctrl.process_name.sub_details = ""
		this.ctrl.process_name.accept_char = ""
		this.ctrl.process_name.currency_format = ""
		this.ctrl.process_name.data_scale = ""
		this.ctrl.process_name.binding_name = "PROCESS_NAME"
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
		this.ctrl.process_name.vld_rules = []
		this.ctrl.process_name.targetcolumn_lower = "process_name"
		this.ctrl.process_name.disabled = false
		this.ctrl.process_name.view_name = "f_npss_exceptions_srch"
		this.ctrl.process_name.ctrl_id = "npss_exceptions_srch_process_name"
		this.ctrl.npss_exceptions_srch_process_name = {}
		this.ctrl.npss_exceptions_srch_process_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of core
		this.ctrl.core = {}
		this.ctrl.core.id = "RN21CN5"
		this.ctrl.core.desc = "Service Name"
		this.ctrl.core.visible = true
		this.ctrl.core.label_name = "Service Name"
		this.ctrl.core.df_code = "DF_1304_1674198409820"
		this.ctrl.core.df_description = "Column Group 1"
		this.ctrl.core.uictrl_code = "CDN_CTRL"
		this.ctrl.core.target_column = "CORE"
		this.ctrl.core.data_type = "TEXT"
		this.ctrl.core.data_length = 64
		this.ctrl.core.zone_df_code = "DF_1304_1674198409820"
		this.ctrl.core.default_value = ""
		this.ctrl.core.is_memory_ctrl = ""
		this.ctrl.core.field_coordinates = ""
		this.ctrl.core.sub_details = ""
		this.ctrl.core.accept_char = ""
		this.ctrl.core.currency_format = ""
		this.ctrl.core.data_scale = ""
		this.ctrl.core.binding_name = "CORE"
		this.ctrl.core.hide_label = false
		this.ctrl.core.depends_on = ""
		this.ctrl.core.placeholder = ""
		this.ctrl.core.dynamic_param = ""
		this.ctrl.core.style_code = ""
		this.ctrl.core.data_source = ""
		this.ctrl.core.image_association = ""
		this.ctrl.core.show = true
		this.ctrl.core.sub_content = ""
		this.ctrl.core.required = false
		this.ctrl.core.vld_rules = []
		this.ctrl.core.targetcolumn_lower = "core"
		this.ctrl.core.disabled = false
		this.ctrl.core.view_name = "f_npss_exceptions_srch"
		this.ctrl.core.ctrl_id = "npss_exceptions_srch_core"
		this.ctrl.npss_exceptions_srch_core = {}
		this.ctrl.npss_exceptions_srch_core.onChangecomponent = new EventEmitter<any>()
	
		//Properties of req_data
		this.ctrl.req_data = {}
		this.ctrl.req_data.id = "RN21CN6"
		this.ctrl.req_data.desc = "Request Log"
		this.ctrl.req_data.visible = true
		this.ctrl.req_data.label_name = "Request Log"
		this.ctrl.req_data.df_code = "DF_1304_1674198409820"
		this.ctrl.req_data.df_description = "Column Group 1"
		this.ctrl.req_data.uictrl_code = "CDN_CTRL"
		this.ctrl.req_data.target_column = "REQ_DATA"
		this.ctrl.req_data.data_type = "TEXT"
		this.ctrl.req_data.data_length = 80000
		this.ctrl.req_data.zone_df_code = "DF_1304_1674198409820"
		this.ctrl.req_data.default_value = ""
		this.ctrl.req_data.is_memory_ctrl = ""
		this.ctrl.req_data.field_coordinates = ""
		this.ctrl.req_data.sub_details = ""
		this.ctrl.req_data.accept_char = ""
		this.ctrl.req_data.currency_format = ""
		this.ctrl.req_data.data_scale = ""
		this.ctrl.req_data.binding_name = "REQ_DATA"
		this.ctrl.req_data.hide_label = false
		this.ctrl.req_data.depends_on = ""
		this.ctrl.req_data.placeholder = ""
		this.ctrl.req_data.dynamic_param = ""
		this.ctrl.req_data.style_code = ""
		this.ctrl.req_data.data_source = ""
		this.ctrl.req_data.image_association = ""
		this.ctrl.req_data.show = true
		this.ctrl.req_data.sub_content = ""
		this.ctrl.req_data.required = false
		this.ctrl.req_data.vld_rules = []
		this.ctrl.req_data.targetcolumn_lower = "req_data"
		this.ctrl.req_data.disabled = false
		this.ctrl.req_data.view_name = "f_npss_exceptions_srch"
		this.ctrl.req_data.ctrl_id = "npss_exceptions_srch_req_data"
		this.ctrl.npss_exceptions_srch_req_data = {}
		this.ctrl.npss_exceptions_srch_req_data.onChangecomponent = new EventEmitter<any>()
	
		//Properties of res_data
		this.ctrl.res_data = {}
		this.ctrl.res_data.id = "RN31CN7"
		this.ctrl.res_data.desc = "Response Log"
		this.ctrl.res_data.visible = true
		this.ctrl.res_data.label_name = "Response Log"
		this.ctrl.res_data.df_code = "DF_1304_1674198409820"
		this.ctrl.res_data.df_description = "Column Group 1"
		this.ctrl.res_data.uictrl_code = "CDN_CTRL"
		this.ctrl.res_data.target_column = "RES_DATA"
		this.ctrl.res_data.data_type = "TEXT"
		this.ctrl.res_data.data_length = 80000
		this.ctrl.res_data.zone_df_code = "DF_1304_1674198409820"
		this.ctrl.res_data.default_value = ""
		this.ctrl.res_data.is_memory_ctrl = ""
		this.ctrl.res_data.field_coordinates = ""
		this.ctrl.res_data.sub_details = ""
		this.ctrl.res_data.accept_char = ""
		this.ctrl.res_data.currency_format = ""
		this.ctrl.res_data.data_scale = ""
		this.ctrl.res_data.binding_name = "RES_DATA"
		this.ctrl.res_data.hide_label = false
		this.ctrl.res_data.depends_on = ""
		this.ctrl.res_data.placeholder = ""
		this.ctrl.res_data.dynamic_param = ""
		this.ctrl.res_data.style_code = ""
		this.ctrl.res_data.data_source = ""
		this.ctrl.res_data.image_association = ""
		this.ctrl.res_data.show = true
		this.ctrl.res_data.sub_content = ""
		this.ctrl.res_data.required = false
		this.ctrl.res_data.vld_rules = []
		this.ctrl.res_data.targetcolumn_lower = "res_data"
		this.ctrl.res_data.disabled = false
		this.ctrl.res_data.view_name = "f_npss_exceptions_srch"
		this.ctrl.res_data.ctrl_id = "npss_exceptions_srch_res_data"
		this.ctrl.npss_exceptions_srch_res_data = {}
		this.ctrl.npss_exceptions_srch_res_data.onChangecomponent = new EventEmitter<any>()
	
		//Properties of err_datacore
		this.ctrl.err_datacore = {}
		this.ctrl.err_datacore.id = "RN31CN8"
		this.ctrl.err_datacore.desc = "Error Log"
		this.ctrl.err_datacore.visible = true
		this.ctrl.err_datacore.label_name = "Error Log"
		this.ctrl.err_datacore.df_code = "DF_1304_1674198409820"
		this.ctrl.err_datacore.df_description = "Column Group 1"
		this.ctrl.err_datacore.uictrl_code = "CDN_CTRL"
		this.ctrl.err_datacore.target_column = "ERR_DATACORE"
		this.ctrl.err_datacore.data_type = "TEXT"
		this.ctrl.err_datacore.data_length = 80000
		this.ctrl.err_datacore.zone_df_code = "DF_1304_1674198409820"
		this.ctrl.err_datacore.default_value = ""
		this.ctrl.err_datacore.is_memory_ctrl = ""
		this.ctrl.err_datacore.field_coordinates = ""
		this.ctrl.err_datacore.sub_details = ""
		this.ctrl.err_datacore.accept_char = ""
		this.ctrl.err_datacore.currency_format = ""
		this.ctrl.err_datacore.data_scale = ""
		this.ctrl.err_datacore.binding_name = "ERR_DATACORE"
		this.ctrl.err_datacore.hide_label = false
		this.ctrl.err_datacore.depends_on = ""
		this.ctrl.err_datacore.placeholder = ""
		this.ctrl.err_datacore.dynamic_param = ""
		this.ctrl.err_datacore.style_code = ""
		this.ctrl.err_datacore.data_source = ""
		this.ctrl.err_datacore.image_association = ""
		this.ctrl.err_datacore.show = true
		this.ctrl.err_datacore.sub_content = ""
		this.ctrl.err_datacore.required = false
		this.ctrl.err_datacore.vld_rules = []
		this.ctrl.err_datacore.targetcolumn_lower = "err_datacore"
		this.ctrl.err_datacore.disabled = false
		this.ctrl.err_datacore.view_name = "f_npss_exceptions_srch"
		this.ctrl.err_datacore.ctrl_id = "npss_exceptions_srch_err_datacore"
		this.ctrl.npss_exceptions_srch_err_datacore = {}
		this.ctrl.npss_exceptions_srch_err_datacore.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory10
		this.ctrl.memory10 = {}
		this.ctrl.memory10.id = "RN41CN9"
		this.ctrl.memory10.desc = "Created Date"
		this.ctrl.memory10.visible = false
		this.ctrl.memory10.label_name = "Created Date"
		this.ctrl.memory10.df_code = "DF_1304_1674198409820"
		this.ctrl.memory10.df_description = "Column Group 1"
		this.ctrl.memory10.uictrl_code = "CDN_DATE"
		this.ctrl.memory10.target_column = "memory10"
		this.ctrl.memory10.data_type = "DATETIME"
		this.ctrl.memory10.data_length = 0
		this.ctrl.memory10.zone_df_code = "DF_1304_1674198409820"
		this.ctrl.memory10.default_value = "setcurrentdate(),{}"
		this.ctrl.memory10.is_memory_ctrl = "Y"
		this.ctrl.memory10.field_coordinates = ""
		this.ctrl.memory10.sub_details = ""
		this.ctrl.memory10.accept_char = ""
		this.ctrl.memory10.currency_format = ""
		this.ctrl.memory10.data_scale = ""
		this.ctrl.memory10.binding_name = "CREATED_DATE"
		this.ctrl.memory10.hide_label = false
		this.ctrl.memory10.depends_on = ""
		this.ctrl.memory10.placeholder = ""
		this.ctrl.memory10.dynamic_param = ""
		this.ctrl.memory10.style_code = ""
		this.ctrl.memory10.data_source = ""
		this.ctrl.memory10.image_association = ""
		this.ctrl.memory10.show = true
		this.ctrl.memory10.sub_content = ""
		this.ctrl.memory10.required = false
		this.ctrl.memory10.vld_rules = []
		this.ctrl.memory10.targetcolumn_lower = "memory10"
		this.ctrl.memory10.disabled = false
		this.ctrl.memory10.view_name = "f_npss_exceptions_srch"
		this.ctrl.memory10.ctrl_id = "npss_exceptions_srch_memory10"
		this.ctrl.npss_exceptions_srch_memory10 = {}
		this.ctrl.npss_exceptions_srch_memory10.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_exceptions_srch.model = {"UETR":"","MESSAGE_DATA":"","PROCESS_SYSTEM":"","PROCESS_NAME":"","CORE":"","REQ_DATA":"","RES_DATA":"","ERR_DATACORE":"","MEMORY10":"setcurrentdate(),{}"}
		this.screen_instance[this.comp_id].f_npss_exceptions_srch.Meta = [{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"UETR"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"MESSAGE_DATA"},{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROCESS_SYSTEM"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROCESS_NAME"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"CORE"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"REQ_DATA"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"RES_DATA"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"ERR_DATACORE"}]
		this.screen_instance[this.comp_id].f_npss_exceptions_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_exceptions_srch.dtt_code = "dtt_1304_1674198360280"
		this.screen_instance[this.comp_id].f_npss_exceptions_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_exceptions_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_exceptions_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_exceptions_srch[control][property] = value;
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
    