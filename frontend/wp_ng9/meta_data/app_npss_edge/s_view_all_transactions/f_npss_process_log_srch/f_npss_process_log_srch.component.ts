/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26576 
Modified By     : Admin 
Modified Date   : 2022-Oct-19 15:5 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_all_transactions
Form Name       : NPSS Process log SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_process_log_srch',
  templateUrl: './f_npss_process_log_srch.component.html',
  styleUrls: ['./f_npss_process_log_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_process_log_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_process_log_srch') form;
  @ViewChild('npss_process_log_srch_uetr') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665901130705"
	dtt_code : string = "dtt_1304_1665905039255"

  
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
		this.ctrl.uetr.df_code = "DF_1304_1665905157963"
		this.ctrl.uetr.df_description = "Column Group 1"
		this.ctrl.uetr.uictrl_code = "CDN_CTRL"
		this.ctrl.uetr.target_column = "UETR"
		this.ctrl.uetr.data_type = "TEXT"
		this.ctrl.uetr.data_length = 64
		this.ctrl.uetr.zone_df_code = "DF_1304_1665905157963"
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
		this.ctrl.uetr.required = true
		this.ctrl.uetr.vld_rules = []
		this.ctrl.uetr.targetcolumn_lower = "uetr"
		this.ctrl.uetr.disabled = false
		this.ctrl.uetr.view_name = "f_npss_process_log_srch"
		this.ctrl.uetr.ctrl_id = "npss_process_log_srch_uetr"
		this.ctrl.npss_process_log_srch_uetr = {}
		this.ctrl.npss_process_log_srch_uetr.onChangecomponent = new EventEmitter<any>()
	
		//Properties of process_name
		this.ctrl.process_name = {}
		this.ctrl.process_name.id = "RN01CN2"
		this.ctrl.process_name.desc = "Process Name"
		this.ctrl.process_name.visible = true
		this.ctrl.process_name.label_name = "Process Name"
		this.ctrl.process_name.df_code = "DF_1304_1665905157963"
		this.ctrl.process_name.df_description = "Column Group 1"
		this.ctrl.process_name.uictrl_code = "CBO"
		this.ctrl.process_name.target_column = "PROCESS_NAME"
		this.ctrl.process_name.data_type = "TEXT"
		this.ctrl.process_name.data_length = 64
		this.ctrl.process_name.zone_df_code = "DF_1304_1665905157963"
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
		this.ctrl.process_name.data_source = {"ds_code":"UDS_1304_1666098232469","ds_description":"NPSS Process name CDB","rows":[],"type":"DPS_TABLE","value_member":"CD_CODE","display_member":"CD_DESCRIPTION","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_NC_CODE_DESCRIPTIONS","context":"","filters":[{"filter_name":"Filter1","binding_name":"CD_CATEGORY","id":"DF_1666098368356","binding_value":"PROCESS_NAME","source_name":"CD_CATEGORY","source_value":"PROCESS_NAME","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"CD_CATEGORY","binding_value":"PROCESS_NAME","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"PROCESS_NAME"}]},"query":"(CD_CATEGORY = PROCESS_NAME)"},"sel_columns":[]}
		this.ctrl.process_name.image_association = ""
		this.ctrl.process_name.show = true
		this.ctrl.process_name.sub_content = ""
		this.ctrl.process_name.required = false
		this.ctrl.process_name.vld_rules = []
		this.ctrl.process_name.targetcolumn_lower = "process_name"
		this.ctrl.process_name.disabled = false
		this.ctrl.process_name.view_name = "f_npss_process_log_srch"
		this.ctrl.process_name.ctrl_id = "npss_process_log_srch_process_name"
		this.ctrl.npss_process_log_srch_process_name = {}
		this.ctrl.npss_process_log_srch_process_name.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_process_log_srch.process_name = {}
	
		//Properties of processing_system
		this.ctrl.processing_system = {}
		this.ctrl.processing_system.id = "RN11CN3"
		this.ctrl.processing_system.desc = "Processing System"
		this.ctrl.processing_system.visible = true
		this.ctrl.processing_system.label_name = "Processing System"
		this.ctrl.processing_system.df_code = "DF_1304_1665905157963"
		this.ctrl.processing_system.df_description = "Column Group 1"
		this.ctrl.processing_system.uictrl_code = "CDN_CTRL"
		this.ctrl.processing_system.target_column = "PROCESSING_SYSTEM"
		this.ctrl.processing_system.data_type = "TEXT"
		this.ctrl.processing_system.data_length = 64
		this.ctrl.processing_system.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.processing_system.default_value = ""
		this.ctrl.processing_system.is_memory_ctrl = ""
		this.ctrl.processing_system.field_coordinates = ""
		this.ctrl.processing_system.sub_details = ""
		this.ctrl.processing_system.accept_char = ""
		this.ctrl.processing_system.currency_format = ""
		this.ctrl.processing_system.data_scale = ""
		this.ctrl.processing_system.binding_name = "PROCESSING_SYSTEM"
		this.ctrl.processing_system.hide_label = false
		this.ctrl.processing_system.depends_on = ""
		this.ctrl.processing_system.placeholder = ""
		this.ctrl.processing_system.dynamic_param = ""
		this.ctrl.processing_system.style_code = ""
		this.ctrl.processing_system.data_source = ""
		this.ctrl.processing_system.image_association = ""
		this.ctrl.processing_system.show = true
		this.ctrl.processing_system.sub_content = ""
		this.ctrl.processing_system.required = false
		this.ctrl.processing_system.vld_rules = []
		this.ctrl.processing_system.targetcolumn_lower = "processing_system"
		this.ctrl.processing_system.disabled = false
		this.ctrl.processing_system.view_name = "f_npss_process_log_srch"
		this.ctrl.processing_system.ctrl_id = "npss_process_log_srch_processing_system"
		this.ctrl.npss_process_log_srch_processing_system = {}
		this.ctrl.npss_process_log_srch_processing_system.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory9
		this.ctrl.memory9 = {}
		this.ctrl.memory9.id = "RN11CN4"
		this.ctrl.memory9.desc = "Created Date"
		this.ctrl.memory9.visible = true
		this.ctrl.memory9.label_name = "Created Date"
		this.ctrl.memory9.df_code = "DF_1304_1665905157963"
		this.ctrl.memory9.df_description = "Column Group 1"
		this.ctrl.memory9.uictrl_code = "CDN_DATE"
		this.ctrl.memory9.target_column = "memory9"
		this.ctrl.memory9.data_type = "DATETIME"
		this.ctrl.memory9.data_length = 0
		this.ctrl.memory9.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.memory9.default_value = "setcurrentdate(),{}"
		this.ctrl.memory9.is_memory_ctrl = "Y"
		this.ctrl.memory9.field_coordinates = ""
		this.ctrl.memory9.sub_details = ""
		this.ctrl.memory9.accept_char = ""
		this.ctrl.memory9.currency_format = ""
		this.ctrl.memory9.data_scale = ""
		this.ctrl.memory9.binding_name = "CREATED_DATE"
		this.ctrl.memory9.hide_label = false
		this.ctrl.memory9.depends_on = ""
		this.ctrl.memory9.placeholder = ""
		this.ctrl.memory9.dynamic_param = ""
		this.ctrl.memory9.style_code = ""
		this.ctrl.memory9.data_source = ""
		this.ctrl.memory9.image_association = ""
		this.ctrl.memory9.show = true
		this.ctrl.memory9.sub_content = ""
		this.ctrl.memory9.required = false
		this.ctrl.memory9.vld_rules = []
		this.ctrl.memory9.targetcolumn_lower = "memory9"
		this.ctrl.memory9.disabled = false
		this.ctrl.memory9.view_name = "f_npss_process_log_srch"
		this.ctrl.memory9.ctrl_id = "npss_process_log_srch_memory9"
		this.ctrl.npss_process_log_srch_memory9 = {}
		this.ctrl.npss_process_log_srch_memory9.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_process_log_srch.model = {"UETR":"","PROCESS_NAME":"","PROCESSING_SYSTEM":"","MEMORY9":"setcurrentdate(),{}"}
		this.screen_instance[this.comp_id].f_npss_process_log_srch.Meta = [{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"UETR"},{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROCESS_NAME"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROCESSING_SYSTEM"}]
		this.screen_instance[this.comp_id].f_npss_process_log_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_process_log_srch.dtt_code = "dtt_1304_1665905039255"
		this.screen_instance[this.comp_id].f_npss_process_log_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_process_log_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_process_log_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_process_log_srch[control][property] = value;
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
    