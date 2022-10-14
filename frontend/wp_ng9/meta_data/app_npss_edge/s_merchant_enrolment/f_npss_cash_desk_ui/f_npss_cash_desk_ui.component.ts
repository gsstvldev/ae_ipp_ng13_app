/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26441 
Modified By     : Admin 
Modified Date   : 2022-Oct-14 11:18 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_enrolment
Form Name       : NPSS Cash Desk UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_cash_desk_ui',
  templateUrl: './f_npss_cash_desk_ui.component.html',
  styleUrls: ['./f_npss_cash_desk_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_cash_desk_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_cash_desk_ui') form;
  @ViewChild('npss_cash_desk_ui_cash_desk_id') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665384579126"
	dtt_code : string = "dtt_1304_1665386514812"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of cash_desk_id
		this.ctrl.cash_desk_id = {}
		this.ctrl.cash_desk_id.id = "RN01CN1"
		this.ctrl.cash_desk_id.desc = "Cash Desk ID"
		this.ctrl.cash_desk_id.visible = true
		this.ctrl.cash_desk_id.label_name = "Cash Desk ID"
		this.ctrl.cash_desk_id.df_code = "DF_1304_1665386596966"
		this.ctrl.cash_desk_id.df_description = "Column Group 1"
		this.ctrl.cash_desk_id.uictrl_code = "TXT"
		this.ctrl.cash_desk_id.target_column = "CASH_DESK_ID"
		this.ctrl.cash_desk_id.data_type = "TEXT"
		this.ctrl.cash_desk_id.data_length = 32
		this.ctrl.cash_desk_id.zone_df_code = "DF_1304_1665386596966"
		this.ctrl.cash_desk_id.default_value = ""
		this.ctrl.cash_desk_id.is_memory_ctrl = ""
		this.ctrl.cash_desk_id.field_coordinates = ""
		this.ctrl.cash_desk_id.sub_details = ""
		this.ctrl.cash_desk_id.accept_char = ""
		this.ctrl.cash_desk_id.currency_format = ""
		this.ctrl.cash_desk_id.data_scale = ""
		this.ctrl.cash_desk_id.hide_label = false
		this.ctrl.cash_desk_id.depends_on = ""
		this.ctrl.cash_desk_id.placeholder = ""
		this.ctrl.cash_desk_id.dynamic_param = ""
		this.ctrl.cash_desk_id.style_code = ""
		this.ctrl.cash_desk_id.data_source = ""
		this.ctrl.cash_desk_id.image_association = ""
		this.ctrl.cash_desk_id.show = true
		this.ctrl.cash_desk_id.sub_content = "*"
		this.ctrl.cash_desk_id.required = true
		this.ctrl.cash_desk_id.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.cash_desk_id.targetcolumn_lower = "cash_desk_id"
		this.ctrl.cash_desk_id.disabled = false
		this.ctrl.cash_desk_id.view_name = "f_npss_cash_desk_ui"
		this.ctrl.cash_desk_id.ctrl_id = "npss_cash_desk_ui_cash_desk_id"
		this.ctrl.npss_cash_desk_ui_cash_desk_id = {}
		this.ctrl.npss_cash_desk_ui_cash_desk_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cash_desk_name
		this.ctrl.cash_desk_name = {}
		this.ctrl.cash_desk_name.id = "RN01CN1001"
		this.ctrl.cash_desk_name.desc = "Name of the Cash Desk"
		this.ctrl.cash_desk_name.visible = true
		this.ctrl.cash_desk_name.label_name = "Name of the Cash Desk"
		this.ctrl.cash_desk_name.df_code = "DF_1304_1665386596966"
		this.ctrl.cash_desk_name.df_description = "Column Group 1"
		this.ctrl.cash_desk_name.uictrl_code = "TXT"
		this.ctrl.cash_desk_name.target_column = "CASH_DESK_NAME"
		this.ctrl.cash_desk_name.data_type = "TEXT"
		this.ctrl.cash_desk_name.data_length = 256
		this.ctrl.cash_desk_name.zone_df_code = "DF_1304_1665386596966"
		this.ctrl.cash_desk_name.default_value = ""
		this.ctrl.cash_desk_name.is_memory_ctrl = ""
		this.ctrl.cash_desk_name.field_coordinates = ""
		this.ctrl.cash_desk_name.sub_details = ""
		this.ctrl.cash_desk_name.accept_char = ""
		this.ctrl.cash_desk_name.currency_format = ""
		this.ctrl.cash_desk_name.data_scale = ""
		this.ctrl.cash_desk_name.hide_label = false
		this.ctrl.cash_desk_name.depends_on = ""
		this.ctrl.cash_desk_name.placeholder = ""
		this.ctrl.cash_desk_name.dynamic_param = ""
		this.ctrl.cash_desk_name.style_code = ""
		this.ctrl.cash_desk_name.data_source = ""
		this.ctrl.cash_desk_name.image_association = ""
		this.ctrl.cash_desk_name.show = true
		this.ctrl.cash_desk_name.sub_content = "*"
		this.ctrl.cash_desk_name.required = true
		this.ctrl.cash_desk_name.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.cash_desk_name.targetcolumn_lower = "cash_desk_name"
		this.ctrl.cash_desk_name.disabled = false
		this.ctrl.cash_desk_name.view_name = "f_npss_cash_desk_ui"
		this.ctrl.cash_desk_name.ctrl_id = "npss_cash_desk_ui_cash_desk_name"
		this.ctrl.npss_cash_desk_ui_cash_desk_name = {}
		this.ctrl.npss_cash_desk_ui_cash_desk_name.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_cash_desk_ui.model = {"CASH_DESK_ID":"","CASH_DESK_NAME":""}
		this.screen_instance[this.comp_id].f_npss_cash_desk_ui.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CASH_DESK_ID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CASH_DESK_NAME"}]
		this.screen_instance[this.comp_id].f_npss_cash_desk_ui.dt_code = "dt_1304_1665384579126"
		this.screen_instance[this.comp_id].f_npss_cash_desk_ui.dtt_code = "dtt_1304_1665386514812"
		this.screen_instance[this.comp_id].f_npss_cash_desk_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_cash_desk_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_cash_desk_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_cash_desk_ui[control][property] = value;
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
    