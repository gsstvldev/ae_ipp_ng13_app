/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26401 
Modified By     : Admin 
Modified Date   : 2022-Oct-12 5:35 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_power_bi_dashboard
Form Name       : NPSS Power Reports SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_power_reports_srch',
  templateUrl: './f_npss_power_reports_srch.component.html',
  styleUrls: ['./f_npss_power_reports_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_power_reports_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_power_reports_srch') form;
  @ViewChild('npss_power_reports_srch_memory6') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665384453253"
	dtt_code : string = "dtt_1304_1665384533560"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of memory6
		this.ctrl.memory6 = {}
		this.ctrl.memory6.id = "RN01CN1"
		this.ctrl.memory6.desc = "Reports Code"
		this.ctrl.memory6.visible = false
		this.ctrl.memory6.label_name = "Reports Code"
		this.ctrl.memory6.df_code = "DF_1304_1665384649010"
		this.ctrl.memory6.df_description = "Column Group 1"
		this.ctrl.memory6.uictrl_code = "TXT"
		this.ctrl.memory6.target_column = "memory6"
		this.ctrl.memory6.data_type = "TEXT"
		this.ctrl.memory6.data_length = 32
		this.ctrl.memory6.zone_df_code = "DF_1304_1665384649010"
		this.ctrl.memory6.default_value = ""
		this.ctrl.memory6.is_memory_ctrl = "Y"
		this.ctrl.memory6.field_coordinates = ""
		this.ctrl.memory6.sub_details = ""
		this.ctrl.memory6.accept_char = ""
		this.ctrl.memory6.currency_format = ""
		this.ctrl.memory6.data_scale = ""
		this.ctrl.memory6.binding_name = "REPORTS_CODE"
		this.ctrl.memory6.hide_label = false
		this.ctrl.memory6.depends_on = ""
		this.ctrl.memory6.placeholder = ""
		this.ctrl.memory6.dynamic_param = ""
		this.ctrl.memory6.style_code = ""
		this.ctrl.memory6.data_source = ""
		this.ctrl.memory6.image_association = ""
		this.ctrl.memory6.show = true
		this.ctrl.memory6.sub_content = ""
		this.ctrl.memory6.required = false
		this.ctrl.memory6.vld_rules = []
		this.ctrl.memory6.targetcolumn_lower = "memory6"
		this.ctrl.memory6.disabled = false
		this.ctrl.memory6.view_name = "f_npss_power_reports_srch"
		this.ctrl.memory6.ctrl_id = "npss_power_reports_srch_memory6"
		this.ctrl.npss_power_reports_srch_memory6 = {}
		this.ctrl.npss_power_reports_srch_memory6.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory7
		this.ctrl.memory7 = {}
		this.ctrl.memory7.id = "RN11CN2"
		this.ctrl.memory7.desc = "Reports Description"
		this.ctrl.memory7.visible = false
		this.ctrl.memory7.label_name = "Reports Description"
		this.ctrl.memory7.df_code = "DF_1304_1665384649010"
		this.ctrl.memory7.df_description = "Column Group 1"
		this.ctrl.memory7.uictrl_code = "TXT"
		this.ctrl.memory7.target_column = "memory7"
		this.ctrl.memory7.data_type = "TEXT"
		this.ctrl.memory7.data_length = 64
		this.ctrl.memory7.zone_df_code = "DF_1304_1665384649010"
		this.ctrl.memory7.default_value = ""
		this.ctrl.memory7.is_memory_ctrl = "Y"
		this.ctrl.memory7.field_coordinates = ""
		this.ctrl.memory7.sub_details = ""
		this.ctrl.memory7.accept_char = ""
		this.ctrl.memory7.currency_format = ""
		this.ctrl.memory7.data_scale = ""
		this.ctrl.memory7.binding_name = "REPORTS_DESC"
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
		this.ctrl.memory7.view_name = "f_npss_power_reports_srch"
		this.ctrl.memory7.ctrl_id = "npss_power_reports_srch_memory7"
		this.ctrl.npss_power_reports_srch_memory7 = {}
		this.ctrl.npss_power_reports_srch_memory7.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory8
		this.ctrl.memory8 = {}
		this.ctrl.memory8.id = "RN21CN3"
		this.ctrl.memory8.desc = "Report URL"
		this.ctrl.memory8.visible = false
		this.ctrl.memory8.label_name = "Report URL"
		this.ctrl.memory8.df_code = "DF_1304_1665384649010"
		this.ctrl.memory8.df_description = "Column Group 1"
		this.ctrl.memory8.uictrl_code = "TXT"
		this.ctrl.memory8.target_column = "memory8"
		this.ctrl.memory8.data_type = "TEXT"
		this.ctrl.memory8.data_length = 264
		this.ctrl.memory8.zone_df_code = "DF_1304_1665384649010"
		this.ctrl.memory8.default_value = ""
		this.ctrl.memory8.is_memory_ctrl = "Y"
		this.ctrl.memory8.field_coordinates = ""
		this.ctrl.memory8.sub_details = ""
		this.ctrl.memory8.accept_char = ""
		this.ctrl.memory8.currency_format = ""
		this.ctrl.memory8.data_scale = ""
		this.ctrl.memory8.binding_name = "REPORT_URL"
		this.ctrl.memory8.hide_label = false
		this.ctrl.memory8.depends_on = ""
		this.ctrl.memory8.placeholder = ""
		this.ctrl.memory8.dynamic_param = ""
		this.ctrl.memory8.style_code = ""
		this.ctrl.memory8.data_source = ""
		this.ctrl.memory8.image_association = ""
		this.ctrl.memory8.show = true
		this.ctrl.memory8.sub_content = ""
		this.ctrl.memory8.required = false
		this.ctrl.memory8.vld_rules = []
		this.ctrl.memory8.targetcolumn_lower = "memory8"
		this.ctrl.memory8.disabled = false
		this.ctrl.memory8.view_name = "f_npss_power_reports_srch"
		this.ctrl.memory8.ctrl_id = "npss_power_reports_srch_memory8"
		this.ctrl.npss_power_reports_srch_memory8 = {}
		this.ctrl.npss_power_reports_srch_memory8.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_power_reports_srch.model = {"MEMORY6":"","MEMORY7":"","MEMORY8":""}
		this.screen_instance[this.comp_id].f_npss_power_reports_srch.Meta = []
		this.screen_instance[this.comp_id].f_npss_power_reports_srch.dt_code = "dt_1304_1665384453253"
		this.screen_instance[this.comp_id].f_npss_power_reports_srch.dtt_code = "dtt_1304_1665384533560"
		this.screen_instance[this.comp_id].f_npss_power_reports_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_power_reports_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_power_reports_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_power_reports_srch[control][property] = value;
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
    