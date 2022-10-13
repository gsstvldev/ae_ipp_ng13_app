/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26432 
Modified By     : Admin 
Modified Date   : 2022-Oct-13 10:44 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rule_template_setup
Form Name       : Rule Setup SCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_rule_setup_sch',
  templateUrl: './f_rule_setup_sch.component.html',
  styleUrls: ['./f_rule_setup_sch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_rule_setup_schComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_rule_setup_sch') form;
  @ViewChild('rule_setup_sch_rule_code') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665647665115"
	dtt_code : string = "dtt_1304_1665647734603"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of rule_code
		this.ctrl.rule_code = {}
		this.ctrl.rule_code.id = "RN01CN1"
		this.ctrl.rule_code.desc = "Rule Code"
		this.ctrl.rule_code.visible = true
		this.ctrl.rule_code.label_name = "Rule Code"
		this.ctrl.rule_code.df_code = "DF_1304_1665648061000"
		this.ctrl.rule_code.df_description = "Column Group 1"
		this.ctrl.rule_code.uictrl_code = "CDN_CTRL"
		this.ctrl.rule_code.target_column = "RULE_CODE"
		this.ctrl.rule_code.data_type = "TEXT"
		this.ctrl.rule_code.data_length = 32
		this.ctrl.rule_code.zone_df_code = "DF_1304_1665648061000"
		this.ctrl.rule_code.default_value = ""
		this.ctrl.rule_code.is_memory_ctrl = ""
		this.ctrl.rule_code.field_coordinates = ""
		this.ctrl.rule_code.sub_details = ""
		this.ctrl.rule_code.accept_char = ""
		this.ctrl.rule_code.currency_format = ""
		this.ctrl.rule_code.data_scale = ""
		this.ctrl.rule_code.binding_name = "RULE_CODE"
		this.ctrl.rule_code.depends_on = ""
		this.ctrl.rule_code.placeholder = ""
		this.ctrl.rule_code.dynamic_param = ""
		this.ctrl.rule_code.style_code = ""
		this.ctrl.rule_code.data_source = ""
		this.ctrl.rule_code.image_association = ""
		this.ctrl.rule_code.show = true
		this.ctrl.rule_code.sub_content = ""
		this.ctrl.rule_code.required = true
		this.ctrl.rule_code.vld_rules = []
		this.ctrl.rule_code.targetcolumn_lower = "rule_code"
		this.ctrl.rule_code.disabled = false
		this.ctrl.rule_code.view_name = "f_rule_setup_sch"
		this.ctrl.rule_code.ctrl_id = "rule_setup_sch_rule_code"
		this.ctrl.rule_setup_sch_rule_code = {}
		this.ctrl.rule_setup_sch_rule_code.onChangecomponent = new EventEmitter<any>()
	
		//Properties of rule_name
		this.ctrl.rule_name = {}
		this.ctrl.rule_name.id = "RN01CN2"
		this.ctrl.rule_name.desc = "Rule name"
		this.ctrl.rule_name.visible = true
		this.ctrl.rule_name.label_name = "Rule name"
		this.ctrl.rule_name.df_code = "DF_1304_1665648061000"
		this.ctrl.rule_name.df_description = "Column Group 1"
		this.ctrl.rule_name.uictrl_code = "CDN_CTRL"
		this.ctrl.rule_name.target_column = "RULE_NAME"
		this.ctrl.rule_name.data_type = "TEXT"
		this.ctrl.rule_name.data_length = 64
		this.ctrl.rule_name.zone_df_code = "DF_1304_1665648061000"
		this.ctrl.rule_name.default_value = ""
		this.ctrl.rule_name.is_memory_ctrl = ""
		this.ctrl.rule_name.field_coordinates = ""
		this.ctrl.rule_name.sub_details = ""
		this.ctrl.rule_name.accept_char = ""
		this.ctrl.rule_name.currency_format = ""
		this.ctrl.rule_name.data_scale = ""
		this.ctrl.rule_name.binding_name = "RULE_NAME"
		this.ctrl.rule_name.depends_on = ""
		this.ctrl.rule_name.placeholder = ""
		this.ctrl.rule_name.dynamic_param = ""
		this.ctrl.rule_name.style_code = ""
		this.ctrl.rule_name.data_source = ""
		this.ctrl.rule_name.image_association = ""
		this.ctrl.rule_name.show = true
		this.ctrl.rule_name.sub_content = ""
		this.ctrl.rule_name.required = true
		this.ctrl.rule_name.vld_rules = []
		this.ctrl.rule_name.targetcolumn_lower = "rule_name"
		this.ctrl.rule_name.disabled = false
		this.ctrl.rule_name.view_name = "f_rule_setup_sch"
		this.ctrl.rule_name.ctrl_id = "rule_setup_sch_rule_name"
		this.ctrl.rule_setup_sch_rule_name = {}
		this.ctrl.rule_setup_sch_rule_name.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_rule_setup_sch.model = {"RULE_CODE":"","RULE_NAME":""}
		this.screen_instance[this.comp_id].f_rule_setup_sch.Meta = [{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"RULE_CODE"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"RULE_NAME"}]
		this.screen_instance[this.comp_id].f_rule_setup_sch.dt_code = "dt_1304_1665647665115"
		this.screen_instance[this.comp_id].f_rule_setup_sch.dtt_code = "dtt_1304_1665647734603"
		this.screen_instance[this.comp_id].f_rule_setup_sch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_rule_setup_sch[control]==undefined) {
      this.screen_instance[this.comp_id].f_rule_setup_sch[control] = {}
    }
    this.screen_instance[this.comp_id].f_rule_setup_sch[control][property] = value;
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
    