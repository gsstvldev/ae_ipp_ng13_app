/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35947 
Modified By     : Admin 
Modified Date   : 2024-Jul-04 7:1 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_user_authentication_history_report
Form Name       : NPSS User Authentication History SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_user_authentication_history_srch',
  templateUrl: './f_npss_user_authentication_history_srch.component.html',
  styleUrls: ['./f_npss_user_authentication_history_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_user_authentication_history_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_user_authentication_history_srch') form;
  @ViewChild('npss_user_authentication_history_srch_memory153') element: ElementRef;
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

  
		//Properties of memory153
		this.ctrl.memory153 = {}
		this.ctrl.memory153.id = "RN01CN1"
		this.ctrl.memory153.desc = "User Name"
		this.ctrl.memory153.visible = true
		this.ctrl.memory153.label_name = "User Name"
		this.ctrl.memory153.df_code = "DF_1304_1665901396659"
		this.ctrl.memory153.df_description = "Column Group 1"
		this.ctrl.memory153.uictrl_code = "CDN_CTRL"
		this.ctrl.memory153.target_column = "memory153"
		this.ctrl.memory153.data_type = "TEXT"
		this.ctrl.memory153.data_length = 32
		this.ctrl.memory153.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory153.default_value = ""
		this.ctrl.memory153.is_memory_ctrl = "Y"
		this.ctrl.memory153.field_coordinates = ""
		this.ctrl.memory153.sub_details = ""
		this.ctrl.memory153.accept_char = ""
		this.ctrl.memory153.currency_format = ""
		this.ctrl.memory153.data_scale = ""
		this.ctrl.memory153.binding_name = "USER_NAME"
		this.ctrl.memory153.hide_label = false
		this.ctrl.memory153.depends_on = ""
		this.ctrl.memory153.placeholder = ""
		this.ctrl.memory153.dynamic_param = ""
		this.ctrl.memory153.style_code = ""
		this.ctrl.memory153.data_source = ""
		this.ctrl.memory153.image_association = ""
		this.ctrl.memory153.show = true
		this.ctrl.memory153.sub_content = ""
		this.ctrl.memory153.required = false
		this.ctrl.memory153.vld_rules = []
		this.ctrl.memory153.targetcolumn_lower = "memory153"
		this.ctrl.memory153.disabled = false
		this.ctrl.memory153.view_name = "f_npss_user_authentication_history_srch"
		this.ctrl.memory153.ctrl_id = "npss_user_authentication_history_srch_memory153"
		this.ctrl.npss_user_authentication_history_srch_memory153 = {}
		this.ctrl.npss_user_authentication_history_srch_memory153.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory167
		this.ctrl.memory167 = {}
		this.ctrl.memory167.id = "RN01CN2"
		this.ctrl.memory167.desc = "Date"
		this.ctrl.memory167.visible = true
		this.ctrl.memory167.label_name = "Date"
		this.ctrl.memory167.df_code = "DF_1304_1665901396659"
		this.ctrl.memory167.df_description = "Column Group 1"
		this.ctrl.memory167.uictrl_code = "CDN_DATE"
		this.ctrl.memory167.target_column = "memory167"
		this.ctrl.memory167.data_type = "DATETIME"
		this.ctrl.memory167.data_length = 0
		this.ctrl.memory167.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory167.default_value = "setcurrentdate(),{}"
		this.ctrl.memory167.is_memory_ctrl = "Y"
		this.ctrl.memory167.field_coordinates = ""
		this.ctrl.memory167.sub_details = ""
		this.ctrl.memory167.accept_char = ""
		this.ctrl.memory167.currency_format = ""
		this.ctrl.memory167.data_scale = ""
		this.ctrl.memory167.binding_name = "DATE"
		this.ctrl.memory167.hide_label = false
		this.ctrl.memory167.depends_on = ""
		this.ctrl.memory167.placeholder = ""
		this.ctrl.memory167.dynamic_param = ""
		this.ctrl.memory167.style_code = ""
		this.ctrl.memory167.data_source = ""
		this.ctrl.memory167.image_association = ""
		this.ctrl.memory167.show = true
		this.ctrl.memory167.sub_content = ""
		this.ctrl.memory167.required = false
		this.ctrl.memory167.vld_rules = []
		this.ctrl.memory167.targetcolumn_lower = "memory167"
		this.ctrl.memory167.disabled = false
		this.ctrl.memory167.view_name = "f_npss_user_authentication_history_srch"
		this.ctrl.memory167.ctrl_id = "npss_user_authentication_history_srch_memory167"
		this.ctrl.npss_user_authentication_history_srch_memory167 = {}
		this.ctrl.npss_user_authentication_history_srch_memory167.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_user_authentication_history_srch.model = {"MEMORY153":"","MEMORY167":"setcurrentdate(),{}"}
		this.screen_instance[this.comp_id].f_npss_user_authentication_history_srch.Meta = []
		this.screen_instance[this.comp_id].f_npss_user_authentication_history_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_user_authentication_history_srch.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_user_authentication_history_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_user_authentication_history_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_user_authentication_history_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_user_authentication_history_srch[control][property] = value;
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
    