/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27598 
Modified By     : Admin 
Modified Date   : 2022-Dec-29 6:21 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_process_logs
Form Name       : NPSS API PLog SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_api_plog_srch',
  templateUrl: './f_npss_api_plog_srch.component.html',
  styleUrls: ['./f_npss_api_plog_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_api_plog_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_api_plog_srch') form;
  @ViewChild('npss_api_plog_srch_process_name') element: ElementRef;
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
		this.ctrl.process_name.id = "32c103fc-69ba-486f-bf8c-c46be3a6bc33_1670593280291"
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
		this.ctrl.process_name.view_name = "f_npss_api_plog_srch"
		this.ctrl.process_name.ctrl_id = "npss_api_plog_srch_process_name"
		this.ctrl.npss_api_plog_srch_process_name = {}
		this.ctrl.npss_api_plog_srch_process_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of processing_system
		this.ctrl.processing_system = {}
		this.ctrl.processing_system.id = "a5360061-7d75-49aa-b6dd-a3f91a90812e_1670593280291"
		this.ctrl.processing_system.desc = "Processing System"
		this.ctrl.processing_system.visible = true
		this.ctrl.processing_system.label_name = "Processing System"
		this.ctrl.processing_system.df_code = "DF_1304_1670589236195"
		this.ctrl.processing_system.df_description = "Column Group 1"
		this.ctrl.processing_system.uictrl_code = "TXT"
		this.ctrl.processing_system.target_column = "PROCESSING_SYSTEM"
		this.ctrl.processing_system.data_type = "TEXT"
		this.ctrl.processing_system.data_length = 64
		this.ctrl.processing_system.zone_df_code = "DF_1304_1670589236195"
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
		this.ctrl.processing_system.view_name = "f_npss_api_plog_srch"
		this.ctrl.processing_system.ctrl_id = "npss_api_plog_srch_processing_system"
		this.ctrl.npss_api_plog_srch_processing_system = {}
		this.ctrl.npss_api_plog_srch_processing_system.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory10
		this.ctrl.memory10 = {}
		this.ctrl.memory10.id = "d6f5a509-093f-4214-9296-fd759d979d8d_1670593280291"
		this.ctrl.memory10.desc = "Process Status"
		this.ctrl.memory10.visible = true
		this.ctrl.memory10.label_name = "Process Status"
		this.ctrl.memory10.df_code = "DF_1304_1670589236195"
		this.ctrl.memory10.df_description = "Column Group 1"
		this.ctrl.memory10.uictrl_code = "CDN_CTRL"
		this.ctrl.memory10.target_column = "memory10"
		this.ctrl.memory10.data_type = "TEXT"
		this.ctrl.memory10.data_length = 64
		this.ctrl.memory10.zone_df_code = "DF_1304_1670589236195"
		this.ctrl.memory10.default_value = ""
		this.ctrl.memory10.is_memory_ctrl = "Y"
		this.ctrl.memory10.field_coordinates = ""
		this.ctrl.memory10.sub_details = ""
		this.ctrl.memory10.accept_char = ""
		this.ctrl.memory10.currency_format = ""
		this.ctrl.memory10.data_scale = ""
		this.ctrl.memory10.binding_name = "PROCESS_STATUS"
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
		this.ctrl.memory10.view_name = "f_npss_api_plog_srch"
		this.ctrl.memory10.ctrl_id = "npss_api_plog_srch_memory10"
		this.ctrl.npss_api_plog_srch_memory10 = {}
		this.ctrl.npss_api_plog_srch_memory10.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory7
		this.ctrl.memory7 = {}
		this.ctrl.memory7.id = "1bb75499-d8e2-44cc-abb3-d783b3bd8155_1670593280291"
		this.ctrl.memory7.desc = "Created Date"
		this.ctrl.memory7.visible = true
		this.ctrl.memory7.label_name = "Created Date"
		this.ctrl.memory7.df_code = "DF_1304_1670589236195"
		this.ctrl.memory7.df_description = "Column Group 1"
		this.ctrl.memory7.uictrl_code = "CDN_DATE"
		this.ctrl.memory7.target_column = "memory7"
		this.ctrl.memory7.data_type = "DATETIME"
		this.ctrl.memory7.data_length = 0
		this.ctrl.memory7.zone_df_code = "DF_1304_1670589236195"
		this.ctrl.memory7.default_value = "setcurrentdate(),{}"
		this.ctrl.memory7.is_memory_ctrl = "Y"
		this.ctrl.memory7.field_coordinates = ""
		this.ctrl.memory7.sub_details = ""
		this.ctrl.memory7.accept_char = ""
		this.ctrl.memory7.currency_format = ""
		this.ctrl.memory7.data_scale = ""
		this.ctrl.memory7.binding_name = "CREATED_DATE"
		this.ctrl.memory7.hide_label = false
		this.ctrl.memory7.depends_on = ""
		this.ctrl.memory7.placeholder = ""
		this.ctrl.memory7.dynamic_param = ""
		this.ctrl.memory7.style_code = ""
		this.ctrl.memory7.data_source = ""
		this.ctrl.memory7.image_association = ""
		this.ctrl.memory7.show = true
		this.ctrl.memory7.sub_content = ""
		this.ctrl.memory7.required = false
		this.ctrl.memory7.vld_rules = []
		this.ctrl.memory7.targetcolumn_lower = "memory7"
		this.ctrl.memory7.disabled = false
		this.ctrl.memory7.view_name = "f_npss_api_plog_srch"
		this.ctrl.memory7.ctrl_id = "npss_api_plog_srch_memory7"
		this.ctrl.npss_api_plog_srch_memory7 = {}
		this.ctrl.npss_api_plog_srch_memory7.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_api_plog_srch.model = {"PROCESS_NAME":"","PROCESSING_SYSTEM":"","MEMORY10":"","MEMORY7":"setcurrentdate(),{}"}
		this.screen_instance[this.comp_id].f_npss_api_plog_srch.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROCESS_NAME"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROCESSING_SYSTEM"}]
		this.screen_instance[this.comp_id].f_npss_api_plog_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_api_plog_srch.dtt_code = "dtt_1304_1670589169341"
		this.screen_instance[this.comp_id].f_npss_api_plog_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_api_plog_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_api_plog_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_api_plog_srch[control][property] = value;
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
    