/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 33273 
Modified By     : Admin 
Modified Date   : 2023-Nov-21 6:39 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_sm_api_failures
Form Name       : NPSS SM Failure SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_sm_failure_srch',
  templateUrl: './f_npss_sm_failure_srch.component.html',
  styleUrls: ['./f_npss_sm_failure_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_sm_failure_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_sm_failure_srch') form;
  @ViewChild('npss_sm_failure_srch_memory17') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1666847145490"
	dtt_code : string = "dtt_1304_1666847230281"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of memory17
		this.ctrl.memory17 = {}
		this.ctrl.memory17.id = "RN01CN1"
		this.ctrl.memory17.desc = "Created Date"
		this.ctrl.memory17.visible = true
		this.ctrl.memory17.label_name = "Created Date"
		this.ctrl.memory17.df_code = "DF_1304_1666847300048"
		this.ctrl.memory17.df_description = "Process Log"
		this.ctrl.memory17.uictrl_code = "CDN_DATE"
		this.ctrl.memory17.target_column = "memory17"
		this.ctrl.memory17.data_type = "DATETIME"
		this.ctrl.memory17.data_length = 0
		this.ctrl.memory17.zone_df_code = "DF_1304_1666847300048"
		this.ctrl.memory17.default_value = "setcurrentdate(),{}"
		this.ctrl.memory17.is_memory_ctrl = "Y"
		this.ctrl.memory17.field_coordinates = ""
		this.ctrl.memory17.sub_details = ""
		this.ctrl.memory17.accept_char = ""
		this.ctrl.memory17.currency_format = ""
		this.ctrl.memory17.data_scale = ""
		this.ctrl.memory17.binding_name = "MICREATED_DATE"
		this.ctrl.memory17.hide_label = false
		this.ctrl.memory17.depends_on = ""
		this.ctrl.memory17.placeholder = ""
		this.ctrl.memory17.dynamic_param = ""
		this.ctrl.memory17.style_code = ""
		this.ctrl.memory17.data_source = ""
		this.ctrl.memory17.image_association = ""
		this.ctrl.memory17.show = true
		this.ctrl.memory17.sub_content = ""
		this.ctrl.memory17.required = false
		this.ctrl.memory17.vld_rules = []
		this.ctrl.memory17.targetcolumn_lower = "memory17"
		this.ctrl.memory17.disabled = false
		this.ctrl.memory17.view_name = "f_npss_sm_failure_srch"
		this.ctrl.memory17.ctrl_id = "npss_sm_failure_srch_memory17"
		this.ctrl.npss_sm_failure_srch_memory17 = {}
		this.ctrl.npss_sm_failure_srch_memory17.onChangecomponent = new EventEmitter<any>()
	
		//Properties of bankuserid
		this.ctrl.bankuserid = {}
		this.ctrl.bankuserid.id = "RN01CN2"
		this.ctrl.bankuserid.desc = "bank User ID"
		this.ctrl.bankuserid.visible = true
		this.ctrl.bankuserid.label_name = "bank User ID"
		this.ctrl.bankuserid.df_code = "DF_1304_1666847300048"
		this.ctrl.bankuserid.df_description = "Process Log"
		this.ctrl.bankuserid.uictrl_code = "TXT"
		this.ctrl.bankuserid.target_column = "BANKUSERID"
		this.ctrl.bankuserid.data_type = "TEXT"
		this.ctrl.bankuserid.data_length = 16
		this.ctrl.bankuserid.zone_df_code = "DF_1304_1666847300048"
		this.ctrl.bankuserid.default_value = ""
		this.ctrl.bankuserid.is_memory_ctrl = ""
		this.ctrl.bankuserid.field_coordinates = ""
		this.ctrl.bankuserid.sub_details = ""
		this.ctrl.bankuserid.accept_char = ""
		this.ctrl.bankuserid.currency_format = ""
		this.ctrl.bankuserid.data_scale = ""
		this.ctrl.bankuserid.binding_name = "BANKUSERID"
		this.ctrl.bankuserid.hide_label = false
		this.ctrl.bankuserid.depends_on = ""
		this.ctrl.bankuserid.placeholder = ""
		this.ctrl.bankuserid.dynamic_param = ""
		this.ctrl.bankuserid.style_code = ""
		this.ctrl.bankuserid.data_source = ""
		this.ctrl.bankuserid.image_association = ""
		this.ctrl.bankuserid.show = true
		this.ctrl.bankuserid.sub_content = ""
		this.ctrl.bankuserid.required = true
		this.ctrl.bankuserid.vld_rules = []
		this.ctrl.bankuserid.targetcolumn_lower = "bankuserid"
		this.ctrl.bankuserid.disabled = false
		this.ctrl.bankuserid.view_name = "f_npss_sm_failure_srch"
		this.ctrl.bankuserid.ctrl_id = "npss_sm_failure_srch_bankuserid"
		this.ctrl.npss_sm_failure_srch_bankuserid = {}
		this.ctrl.npss_sm_failure_srch_bankuserid.onChangecomponent = new EventEmitter<any>()
	
		//Properties of process_name
		this.ctrl.process_name = {}
		this.ctrl.process_name.id = "RN11CN3"
		this.ctrl.process_name.desc = "Process Name"
		this.ctrl.process_name.visible = true
		this.ctrl.process_name.label_name = "Process Name"
		this.ctrl.process_name.df_code = "DF_1304_1666847300048"
		this.ctrl.process_name.df_description = "Process Log"
		this.ctrl.process_name.uictrl_code = "TXT"
		this.ctrl.process_name.target_column = "PROCESS_NAME"
		this.ctrl.process_name.data_type = "TEXT"
		this.ctrl.process_name.data_length = 64
		this.ctrl.process_name.zone_df_code = "DF_1304_1666847300048"
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
		this.ctrl.process_name.view_name = "f_npss_sm_failure_srch"
		this.ctrl.process_name.ctrl_id = "npss_sm_failure_srch_process_name"
		this.ctrl.npss_sm_failure_srch_process_name = {}
		this.ctrl.npss_sm_failure_srch_process_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of processing_system
		this.ctrl.processing_system = {}
		this.ctrl.processing_system.id = "RN11CN4"
		this.ctrl.processing_system.desc = "Processing System"
		this.ctrl.processing_system.visible = true
		this.ctrl.processing_system.label_name = "Processing System"
		this.ctrl.processing_system.df_code = "DF_1304_1666847300048"
		this.ctrl.processing_system.df_description = "Process Log"
		this.ctrl.processing_system.uictrl_code = "CDN_CTRL"
		this.ctrl.processing_system.target_column = "PROCESSING_SYSTEM"
		this.ctrl.processing_system.data_type = "TEXT"
		this.ctrl.processing_system.data_length = 64
		this.ctrl.processing_system.zone_df_code = "DF_1304_1666847300048"
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
		this.ctrl.processing_system.view_name = "f_npss_sm_failure_srch"
		this.ctrl.processing_system.ctrl_id = "npss_sm_failure_srch_processing_system"
		this.ctrl.npss_sm_failure_srch_processing_system = {}
		this.ctrl.npss_sm_failure_srch_processing_system.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_sm_failure_srch.model = {"MEMORY17":"setcurrentdate(),{}","BANKUSERID":"","PROCESS_NAME":"","PROCESSING_SYSTEM":""}
		this.screen_instance[this.comp_id].f_npss_sm_failure_srch.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"BANKUSERID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROCESS_NAME"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROCESSING_SYSTEM"}]
		this.screen_instance[this.comp_id].f_npss_sm_failure_srch.dt_code = "dt_1304_1666847145490"
		this.screen_instance[this.comp_id].f_npss_sm_failure_srch.dtt_code = "dtt_1304_1666847230281"
		this.screen_instance[this.comp_id].f_npss_sm_failure_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_sm_failure_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_sm_failure_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_sm_failure_srch[control][property] = value;
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
    