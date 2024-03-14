/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34767 
Modified By     : Admin 
Modified Date   : 2024-Mar-14 12:27 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_user_activities
Form Name       : NPSS User Log SRCh--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_user_log_srch',
  templateUrl: './f_npss_user_log_srch.component.html',
  styleUrls: ['./f_npss_user_log_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_user_log_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_user_log_srch') form;
  @ViewChild('npss_user_log_srch_memory17') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665901130705"
	dtt_code : string = "dtt_1304_1665903906193"

  
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
		this.ctrl.memory17.visible = false
		this.ctrl.memory17.label_name = "Created Date"
		this.ctrl.memory17.df_code = "DF_1304_1665904016567"
		this.ctrl.memory17.df_description = "Column Group 1"
		this.ctrl.memory17.uictrl_code = "CDN_DATE"
		this.ctrl.memory17.target_column = "memory17"
		this.ctrl.memory17.data_type = "DATETIME"
		this.ctrl.memory17.data_length = 0
		this.ctrl.memory17.zone_df_code = "DF_1304_1665904016567"
		this.ctrl.memory17.default_value = ""
		this.ctrl.memory17.is_memory_ctrl = "Y"
		this.ctrl.memory17.field_coordinates = ""
		this.ctrl.memory17.sub_details = ""
		this.ctrl.memory17.accept_char = ""
		this.ctrl.memory17.currency_format = ""
		this.ctrl.memory17.data_scale = ""
		this.ctrl.memory17.binding_name = "CREATED_DATE"
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
		this.ctrl.memory17.view_name = "f_npss_user_log_srch"
		this.ctrl.memory17.ctrl_id = "npss_user_log_srch_memory17"
		this.ctrl.npss_user_log_srch_memory17 = {}
		this.ctrl.npss_user_log_srch_memory17.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory18
		this.ctrl.memory18 = {}
		this.ctrl.memory18.id = "RN11CN2"
		this.ctrl.memory18.desc = "User Login Name"
		this.ctrl.memory18.visible = true
		this.ctrl.memory18.label_name = "User Login Name"
		this.ctrl.memory18.df_code = "DF_1304_1665904016567"
		this.ctrl.memory18.df_description = "Column Group 1"
		this.ctrl.memory18.uictrl_code = "CDN_CTRL"
		this.ctrl.memory18.target_column = "memory18"
		this.ctrl.memory18.data_type = "TEXT"
		this.ctrl.memory18.data_length = 0
		this.ctrl.memory18.zone_df_code = "DF_1304_1665904016567"
		this.ctrl.memory18.default_value = ""
		this.ctrl.memory18.is_memory_ctrl = "Y"
		this.ctrl.memory18.field_coordinates = ""
		this.ctrl.memory18.sub_details = ""
		this.ctrl.memory18.accept_char = ""
		this.ctrl.memory18.currency_format = ""
		this.ctrl.memory18.data_scale = ""
		this.ctrl.memory18.binding_name = "LOGIN_NAME"
		this.ctrl.memory18.hide_label = false
		this.ctrl.memory18.depends_on = ""
		this.ctrl.memory18.placeholder = ""
		this.ctrl.memory18.dynamic_param = ""
		this.ctrl.memory18.style_code = ""
		this.ctrl.memory18.data_source = ""
		this.ctrl.memory18.image_association = ""
		this.ctrl.memory18.show = true
		this.ctrl.memory18.sub_content = ""
		this.ctrl.memory18.required = false
		this.ctrl.memory18.vld_rules = []
		this.ctrl.memory18.targetcolumn_lower = "memory18"
		this.ctrl.memory18.disabled = false
		this.ctrl.memory18.view_name = "f_npss_user_log_srch"
		this.ctrl.memory18.ctrl_id = "npss_user_log_srch_memory18"
		this.ctrl.npss_user_log_srch_memory18 = {}
		this.ctrl.npss_user_log_srch_memory18.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_user_log_srch.model = {"MEMORY17":"","MEMORY18":""}
		this.screen_instance[this.comp_id].f_npss_user_log_srch.Meta = []
		this.screen_instance[this.comp_id].f_npss_user_log_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_user_log_srch.dtt_code = "dtt_1304_1665903906193"
		this.screen_instance[this.comp_id].f_npss_user_log_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_user_log_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_user_log_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_user_log_srch[control][property] = value;
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
    