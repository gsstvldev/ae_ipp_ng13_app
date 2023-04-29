/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 29372 
Modified By     : Admin 
Modified Date   : 2023-Apr-29 9:19 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_find_r_messages
Form Name       : NPSS Find R Messages SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_find_r_messages_srch',
  templateUrl: './f_npss_find_r_messages_srch.component.html',
  styleUrls: ['./f_npss_find_r_messages_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_find_r_messages_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_find_r_messages_srch') form;
  @ViewChild('npss_find_r_messages_srch_senderbic') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665901130705"
	dtt_code : string = "dtt_1304_1670589169341"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of senderbic
		this.ctrl.senderbic = {}
		this.ctrl.senderbic.id = "RN01CN1"
		this.ctrl.senderbic.desc = "Sender BIC"
		this.ctrl.senderbic.visible = true
		this.ctrl.senderbic.label_name = "Sender BIC"
		this.ctrl.senderbic.df_code = "DF_1304_1670589236195"
		this.ctrl.senderbic.df_description = "Column Group 1"
		this.ctrl.senderbic.uictrl_code = "CDN_CTRL"
		this.ctrl.senderbic.target_column = "SENDERBIC"
		this.ctrl.senderbic.data_type = "TEXT"
		this.ctrl.senderbic.data_length = 32
		this.ctrl.senderbic.zone_df_code = "DF_1304_1670589236195"
		this.ctrl.senderbic.default_value = ""
		this.ctrl.senderbic.is_memory_ctrl = ""
		this.ctrl.senderbic.field_coordinates = ""
		this.ctrl.senderbic.sub_details = ""
		this.ctrl.senderbic.accept_char = ""
		this.ctrl.senderbic.currency_format = ""
		this.ctrl.senderbic.data_scale = ""
		this.ctrl.senderbic.binding_name = "SENDERBIC"
		this.ctrl.senderbic.hide_label = false
		this.ctrl.senderbic.depends_on = ""
		this.ctrl.senderbic.placeholder = ""
		this.ctrl.senderbic.dynamic_param = ""
		this.ctrl.senderbic.style_code = ""
		this.ctrl.senderbic.data_source = ""
		this.ctrl.senderbic.image_association = ""
		this.ctrl.senderbic.show = true
		this.ctrl.senderbic.sub_content = ""
		this.ctrl.senderbic.required = false
		this.ctrl.senderbic.vld_rules = []
		this.ctrl.senderbic.targetcolumn_lower = "senderbic"
		this.ctrl.senderbic.disabled = false
		this.ctrl.senderbic.view_name = "f_npss_find_r_messages_srch"
		this.ctrl.senderbic.ctrl_id = "npss_find_r_messages_srch_senderbic"
		this.ctrl.npss_find_r_messages_srch_senderbic = {}
		this.ctrl.npss_find_r_messages_srch_senderbic.onChangecomponent = new EventEmitter<any>()
	
		//Properties of fromdate
		this.ctrl.fromdate = {}
		this.ctrl.fromdate.id = "RN01CN2"
		this.ctrl.fromdate.desc = "From Date"
		this.ctrl.fromdate.visible = true
		this.ctrl.fromdate.label_name = "From Date"
		this.ctrl.fromdate.df_code = "DF_1304_1670589236195"
		this.ctrl.fromdate.df_description = "Column Group 1"
		this.ctrl.fromdate.uictrl_code = "DTP"
		this.ctrl.fromdate.target_column = "FROMDATE"
		this.ctrl.fromdate.data_type = "DATETIME"
		this.ctrl.fromdate.data_length = 0
		this.ctrl.fromdate.zone_df_code = "DF_1304_1670589236195"
		this.ctrl.fromdate.default_value = "setcurrentdate(),{}"
		this.ctrl.fromdate.is_memory_ctrl = ""
		this.ctrl.fromdate.field_coordinates = ""
		this.ctrl.fromdate.sub_details = ""
		this.ctrl.fromdate.accept_char = ""
		this.ctrl.fromdate.currency_format = ""
		this.ctrl.fromdate.data_scale = ""
		this.ctrl.fromdate.binding_name = "FROMDATE"
		this.ctrl.fromdate.hide_label = false
		this.ctrl.fromdate.depends_on = ""
		this.ctrl.fromdate.placeholder = ""
		this.ctrl.fromdate.dynamic_param = ""
		this.ctrl.fromdate.style_code = ""
		this.ctrl.fromdate.data_source = ""
		this.ctrl.fromdate.image_association = ""
		this.ctrl.fromdate.show = true
		this.ctrl.fromdate.sub_content = ""
		this.ctrl.fromdate.required = false
		this.ctrl.fromdate.vld_rules = []
		this.ctrl.fromdate.targetcolumn_lower = "fromdate"
		this.ctrl.fromdate.disabled = false
		this.ctrl.fromdate.view_name = "f_npss_find_r_messages_srch"
		this.ctrl.fromdate.ctrl_id = "npss_find_r_messages_srch_fromdate"
		this.ctrl.npss_find_r_messages_srch_fromdate = {}
		this.ctrl.npss_find_r_messages_srch_fromdate.onChangecomponent = new EventEmitter<any>()
	
		//Properties of todate
		this.ctrl.todate = {}
		this.ctrl.todate.id = "RN01CN3"
		this.ctrl.todate.desc = "To Date"
		this.ctrl.todate.visible = true
		this.ctrl.todate.label_name = "To Date"
		this.ctrl.todate.df_code = "DF_1304_1670589236195"
		this.ctrl.todate.df_description = "Column Group 1"
		this.ctrl.todate.uictrl_code = "DTP"
		this.ctrl.todate.target_column = "TODATE"
		this.ctrl.todate.data_type = "DATETIME"
		this.ctrl.todate.data_length = 0
		this.ctrl.todate.zone_df_code = "DF_1304_1670589236195"
		this.ctrl.todate.default_value = "setcurrentdate(),{}"
		this.ctrl.todate.is_memory_ctrl = ""
		this.ctrl.todate.field_coordinates = ""
		this.ctrl.todate.sub_details = ""
		this.ctrl.todate.accept_char = ""
		this.ctrl.todate.currency_format = ""
		this.ctrl.todate.data_scale = ""
		this.ctrl.todate.binding_name = "TODATE"
		this.ctrl.todate.hide_label = false
		this.ctrl.todate.depends_on = ""
		this.ctrl.todate.placeholder = ""
		this.ctrl.todate.dynamic_param = ""
		this.ctrl.todate.style_code = ""
		this.ctrl.todate.data_source = ""
		this.ctrl.todate.image_association = ""
		this.ctrl.todate.show = true
		this.ctrl.todate.sub_content = ""
		this.ctrl.todate.required = false
		this.ctrl.todate.vld_rules = []
		this.ctrl.todate.targetcolumn_lower = "todate"
		this.ctrl.todate.disabled = false
		this.ctrl.todate.view_name = "f_npss_find_r_messages_srch"
		this.ctrl.todate.ctrl_id = "npss_find_r_messages_srch_todate"
		this.ctrl.npss_find_r_messages_srch_todate = {}
		this.ctrl.npss_find_r_messages_srch_todate.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_find_r_messages_srch.model = {"SENDERBIC":"","FROMDATE":"setcurrentdate(),{}","TODATE":"setcurrentdate(),{}"}
		this.screen_instance[this.comp_id].f_npss_find_r_messages_srch.Meta = [{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"SENDERBIC"},{"CTLR_CODE":"DTP","DATA_TYPE":"DATETIME","TARGET_COLUMN":"FROMDATE"},{"CTLR_CODE":"DTP","DATA_TYPE":"DATETIME","TARGET_COLUMN":"TODATE"}]
		this.screen_instance[this.comp_id].f_npss_find_r_messages_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_find_r_messages_srch.dtt_code = "dtt_1304_1670589169341"
		this.screen_instance[this.comp_id].f_npss_find_r_messages_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_find_r_messages_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_find_r_messages_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_find_r_messages_srch[control][property] = value;
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
    