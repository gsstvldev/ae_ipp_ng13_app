/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35083 
Modified By     : Admin 
Modified Date   : 2024-Apr-04 11:10 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_user_password_history_report
Form Name       : NPSS User Password History SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_user_password_history_srch',
  templateUrl: './f_npss_user_password_history_srch.component.html',
  styleUrls: ['./f_npss_user_password_history_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_user_password_history_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_user_password_history_srch') form;
  @ViewChild('npss_user_password_history_srch_memory156') element: ElementRef;
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
		this.ctrl.memory156.desc = "User Name"
		this.ctrl.memory156.visible = true
		this.ctrl.memory156.label_name = "User Name"
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
		this.ctrl.memory156.view_name = "f_npss_user_password_history_srch"
		this.ctrl.memory156.ctrl_id = "npss_user_password_history_srch_memory156"
		this.ctrl.npss_user_password_history_srch_memory156 = {}
		this.ctrl.npss_user_password_history_srch_memory156.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory63
		this.ctrl.memory63 = {}
		this.ctrl.memory63.id = "RN01CN2"
		this.ctrl.memory63.desc = "Password Changed Date"
		this.ctrl.memory63.visible = true
		this.ctrl.memory63.label_name = "Password Changed Date"
		this.ctrl.memory63.df_code = "DF_1304_1665901396659"
		this.ctrl.memory63.df_description = "Column Group 1"
		this.ctrl.memory63.uictrl_code = "CDN_DATE"
		this.ctrl.memory63.target_column = "memory63"
		this.ctrl.memory63.data_type = "DATETIME"
		this.ctrl.memory63.data_length = 0
		this.ctrl.memory63.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory63.default_value = "setcurrentdate(),{}"
		this.ctrl.memory63.is_memory_ctrl = "Y"
		this.ctrl.memory63.field_coordinates = ""
		this.ctrl.memory63.sub_details = ""
		this.ctrl.memory63.accept_char = ""
		this.ctrl.memory63.currency_format = ""
		this.ctrl.memory63.data_scale = ""
		this.ctrl.memory63.binding_name = "CREATED_DATE"
		this.ctrl.memory63.hide_label = false
		this.ctrl.memory63.depends_on = ""
		this.ctrl.memory63.placeholder = ""
		this.ctrl.memory63.dynamic_param = ""
		this.ctrl.memory63.style_code = ""
		this.ctrl.memory63.data_source = ""
		this.ctrl.memory63.image_association = ""
		this.ctrl.memory63.show = true
		this.ctrl.memory63.sub_content = ""
		this.ctrl.memory63.required = false
		this.ctrl.memory63.vld_rules = []
		this.ctrl.memory63.targetcolumn_lower = "memory63"
		this.ctrl.memory63.disabled = false
		this.ctrl.memory63.view_name = "f_npss_user_password_history_srch"
		this.ctrl.memory63.ctrl_id = "npss_user_password_history_srch_memory63"
		this.ctrl.npss_user_password_history_srch_memory63 = {}
		this.ctrl.npss_user_password_history_srch_memory63.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_user_password_history_srch.model = {"MEMORY156":"","MEMORY63":"setcurrentdate(),{}"}
		this.screen_instance[this.comp_id].f_npss_user_password_history_srch.Meta = []
		this.screen_instance[this.comp_id].f_npss_user_password_history_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_user_password_history_srch.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_user_password_history_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_user_password_history_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_user_password_history_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_user_password_history_srch[control][property] = value;
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
    