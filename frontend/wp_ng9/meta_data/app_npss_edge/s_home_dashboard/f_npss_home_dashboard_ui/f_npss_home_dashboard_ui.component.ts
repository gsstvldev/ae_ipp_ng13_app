/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28819 
Modified By     : Admin 
Modified Date   : 2023-Mar-21 15:11 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_home_dashboard
Form Name       : NPSS Home Dashboard UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_home_dashboard_ui',
  templateUrl: './f_npss_home_dashboard_ui.component.html',
  styleUrls: ['./f_npss_home_dashboard_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_home_dashboard_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_home_dashboard_ui') form;
  @ViewChild('npss_home_dashboard_ui_memory89') element: ElementRef;
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

  
		//Properties of memory89
		this.ctrl.memory89 = {}
		this.ctrl.memory89.id = "cff1afbe-2225-4b95-a2da-e1dfce426c16_1677930393794"
		this.ctrl.memory89.desc = "Created Date"
		this.ctrl.memory89.visible = false
		this.ctrl.memory89.label_name = "Created Date"
		this.ctrl.memory89.df_code = "DF_1304_1665901396659"
		this.ctrl.memory89.df_description = "Column Group 1"
		this.ctrl.memory89.uictrl_code = "DTP"
		this.ctrl.memory89.target_column = "memory89"
		this.ctrl.memory89.data_type = "DATETIME"
		this.ctrl.memory89.data_length = 0
		this.ctrl.memory89.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory89.default_value = "setcurrentdate(),{}"
		this.ctrl.memory89.is_memory_ctrl = "Y"
		this.ctrl.memory89.field_coordinates = ""
		this.ctrl.memory89.sub_details = ""
		this.ctrl.memory89.accept_char = ""
		this.ctrl.memory89.currency_format = ""
		this.ctrl.memory89.data_scale = ""
		this.ctrl.memory89.binding_name = "CREATED_DATE"
		this.ctrl.memory89.hide_label = false
		this.ctrl.memory89.depends_on = ""
		this.ctrl.memory89.placeholder = ""
		this.ctrl.memory89.dynamic_param = ""
		this.ctrl.memory89.style_code = ""
		this.ctrl.memory89.data_source = ""
		this.ctrl.memory89.image_association = ""
		this.ctrl.memory89.show = true
		this.ctrl.memory89.sub_content = ""
		this.ctrl.memory89.required = false
		this.ctrl.memory89.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Select the date","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.memory89.targetcolumn_lower = "memory89"
		this.ctrl.memory89.disabled = false
		this.ctrl.memory89.view_name = "f_npss_home_dashboard_ui"
		this.ctrl.memory89.ctrl_id = "npss_home_dashboard_ui_memory89"
		this.ctrl.npss_home_dashboard_ui_memory89 = {}
		this.ctrl.npss_home_dashboard_ui_memory89.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_home_dashboard_ui.model = {"MEMORY89":"setcurrentdate(),{}"}
		this.screen_instance[this.comp_id].f_npss_home_dashboard_ui.Meta = []
		this.screen_instance[this.comp_id].f_npss_home_dashboard_ui.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_home_dashboard_ui.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_home_dashboard_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_home_dashboard_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_home_dashboard_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_home_dashboard_ui[control][property] = value;
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
    