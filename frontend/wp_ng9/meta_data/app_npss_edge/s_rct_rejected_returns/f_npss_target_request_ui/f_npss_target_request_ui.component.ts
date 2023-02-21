/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28208 
Modified By     : Admin 
Modified Date   : 2023-Feb-21 8:7 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_rejected_returns
Form Name       : NPSS Target Request UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_target_request_ui',
  templateUrl: './f_npss_target_request_ui.component.html',
  styleUrls: ['./f_npss_target_request_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_target_request_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_target_request_ui') form;
  @ViewChild('npss_target_request_ui_request_data_json') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665901130705"
	dtt_code : string = "dtt_1304_1665905039255"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of request_data_json
		this.ctrl.request_data_json = {}
		this.ctrl.request_data_json.id = "RN01CN1"
		this.ctrl.request_data_json.desc = "Request Data"
		this.ctrl.request_data_json.visible = false
		this.ctrl.request_data_json.label_name = "Request Data"
		this.ctrl.request_data_json.df_code = "DF_1304_1665905157963"
		this.ctrl.request_data_json.df_description = "Column Group 1"
		this.ctrl.request_data_json.uictrl_code = "RICH_TXT"
		this.ctrl.request_data_json.target_column = "REQUEST_DATA_JSON"
		this.ctrl.request_data_json.data_type = "TEXT"
		this.ctrl.request_data_json.data_length = 80000
		this.ctrl.request_data_json.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.request_data_json.default_value = ""
		this.ctrl.request_data_json.is_memory_ctrl = ""
		this.ctrl.request_data_json.field_coordinates = ""
		this.ctrl.request_data_json.sub_details = ""
		this.ctrl.request_data_json.accept_char = ""
		this.ctrl.request_data_json.currency_format = ""
		this.ctrl.request_data_json.data_scale = ""
		this.ctrl.request_data_json.hide_label = false
		this.ctrl.request_data_json.depends_on = ""
		this.ctrl.request_data_json.placeholder = ""
		this.ctrl.request_data_json.dynamic_param = ""
		this.ctrl.request_data_json.style_code = ""
		this.ctrl.request_data_json.data_source = ""
		this.ctrl.request_data_json.image_association = ""
		this.ctrl.request_data_json.show = true
		this.ctrl.request_data_json.sub_content = ""
		this.ctrl.request_data_json.required = false
		this.ctrl.request_data_json.vld_rules = []
		this.ctrl.request_data_json.targetcolumn_lower = "request_data_json"
		this.ctrl.request_data_json.disabled = false
		this.ctrl.request_data_json.view_name = "f_npss_target_request_ui"
		this.ctrl.request_data_json.ctrl_id = "npss_target_request_ui_request_data_json"
		this.ctrl.npss_target_request_ui_request_data_json = {}
		this.ctrl.npss_target_request_ui_request_data_json.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_target_request_ui.model = {"REQUEST_DATA_JSON":""}
		this.screen_instance[this.comp_id].f_npss_target_request_ui.Meta = [{"CTLR_CODE":"RICH_TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"REQUEST_DATA_JSON"}]
		this.screen_instance[this.comp_id].f_npss_target_request_ui.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_target_request_ui.dtt_code = "dtt_1304_1665905039255"
		this.screen_instance[this.comp_id].f_npss_target_request_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_target_request_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_target_request_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_target_request_ui[control][property] = value;
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
    