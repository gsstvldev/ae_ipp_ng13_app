/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26348 
Modified By     : Admin 
Modified Date   : 2022-Oct-10 10:59 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_customer_enrolment
Form Name       : NPSS Modify Phone No UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_modify_phone_no_ui',
  templateUrl: './f_npss_modify_phone_no_ui.component.html',
  styleUrls: ['./f_npss_modify_phone_no_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_modify_phone_no_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_modify_phone_no_ui') form;
  @ViewChild('npss_modify_phone_no_ui_phone_no') element: ElementRef;
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

  
		//Properties of phone_no
		this.ctrl.phone_no = {}
		this.ctrl.phone_no.id = "RN01CN1"
		this.ctrl.phone_no.desc = "Phone No"
		this.ctrl.phone_no.visible = false
		this.ctrl.phone_no.label_name = "Phone No"
		this.ctrl.phone_no.df_code = "DF_1304_1665384649010"
		this.ctrl.phone_no.df_description = "Column Group 1"
		this.ctrl.phone_no.uictrl_code = "TXT"
		this.ctrl.phone_no.target_column = "PHONE_NO"
		this.ctrl.phone_no.data_type = "TEXT"
		this.ctrl.phone_no.data_length = 24
		this.ctrl.phone_no.zone_df_code = "DF_1304_1665384649010"
		this.ctrl.phone_no.default_value = ""
		this.ctrl.phone_no.is_memory_ctrl = ""
		this.ctrl.phone_no.field_coordinates = ""
		this.ctrl.phone_no.sub_details = ""
		this.ctrl.phone_no.accept_char = ""
		this.ctrl.phone_no.currency_format = ""
		this.ctrl.phone_no.data_scale = ""
		this.ctrl.phone_no.hide_label = false
		this.ctrl.phone_no.depends_on = ""
		this.ctrl.phone_no.placeholder = ""
		this.ctrl.phone_no.dynamic_param = ""
		this.ctrl.phone_no.style_code = ""
		this.ctrl.phone_no.data_source = ""
		this.ctrl.phone_no.image_association = ""
		this.ctrl.phone_no.show = true
		this.ctrl.phone_no.sub_content = ""
		this.ctrl.phone_no.required = false
		this.ctrl.phone_no.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.phone_no.targetcolumn_lower = "phone_no"
		this.ctrl.phone_no.disabled = false
		this.ctrl.phone_no.view_name = "f_npss_modify_phone_no_ui"
		this.ctrl.phone_no.ctrl_id = "npss_modify_phone_no_ui_phone_no"
		this.ctrl.npss_modify_phone_no_ui_phone_no = {}
		this.ctrl.npss_modify_phone_no_ui_phone_no.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_modify_phone_no_ui.model = {"PHONE_NO":""}
		this.screen_instance[this.comp_id].f_npss_modify_phone_no_ui.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"PHONE_NO"}]
		this.screen_instance[this.comp_id].f_npss_modify_phone_no_ui.dt_code = "dt_1304_1665384453253"
		this.screen_instance[this.comp_id].f_npss_modify_phone_no_ui.dtt_code = "dtt_1304_1665384533560"
		this.screen_instance[this.comp_id].f_npss_modify_phone_no_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_modify_phone_no_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_modify_phone_no_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_modify_phone_no_ui[control][property] = value;
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
    