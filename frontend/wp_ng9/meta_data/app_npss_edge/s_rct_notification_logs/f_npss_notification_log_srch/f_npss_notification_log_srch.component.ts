/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27718 
Modified By     : Admin 
Modified Date   : 2023-Jan-06 6:32 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_notification_logs
Form Name       : NPSS Notification Log SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_notification_log_srch',
  templateUrl: './f_npss_notification_log_srch.component.html',
  styleUrls: ['./f_npss_notification_log_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_notification_log_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_notification_log_srch') form;
  @ViewChild('npss_notification_log_srch_memory12') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665901130705"
	dtt_code : string = "dtt_1304_1672928670076"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of memory12
		this.ctrl.memory12 = {}
		this.ctrl.memory12.id = "RN01CN1"
		this.ctrl.memory12.desc = "Created Date"
		this.ctrl.memory12.visible = false
		this.ctrl.memory12.label_name = "Created Date"
		this.ctrl.memory12.df_code = "DF_1304_1672928913148"
		this.ctrl.memory12.df_description = "Column Group 1"
		this.ctrl.memory12.uictrl_code = "CDN_DATE"
		this.ctrl.memory12.target_column = "memory12"
		this.ctrl.memory12.data_type = "DATETIME"
		this.ctrl.memory12.data_length = 0
		this.ctrl.memory12.zone_df_code = "DF_1304_1672928913148"
		this.ctrl.memory12.default_value = "setcurrentdate(),{}"
		this.ctrl.memory12.is_memory_ctrl = "Y"
		this.ctrl.memory12.field_coordinates = ""
		this.ctrl.memory12.sub_details = ""
		this.ctrl.memory12.accept_char = ""
		this.ctrl.memory12.currency_format = ""
		this.ctrl.memory12.data_scale = ""
		this.ctrl.memory12.binding_name = "CREATED_DATE"
		this.ctrl.memory12.hide_label = false
		this.ctrl.memory12.depends_on = ""
		this.ctrl.memory12.placeholder = ""
		this.ctrl.memory12.dynamic_param = ""
		this.ctrl.memory12.style_code = ""
		this.ctrl.memory12.data_source = ""
		this.ctrl.memory12.image_association = ""
		this.ctrl.memory12.show = true
		this.ctrl.memory12.sub_content = ""
		this.ctrl.memory12.required = false
		this.ctrl.memory12.vld_rules = []
		this.ctrl.memory12.targetcolumn_lower = "memory12"
		this.ctrl.memory12.disabled = false
		this.ctrl.memory12.view_name = "f_npss_notification_log_srch"
		this.ctrl.memory12.ctrl_id = "npss_notification_log_srch_memory12"
		this.ctrl.npss_notification_log_srch_memory12 = {}
		this.ctrl.npss_notification_log_srch_memory12.onChangecomponent = new EventEmitter<any>()
	
		//Properties of channel_id
		this.ctrl.channel_id = {}
		this.ctrl.channel_id.id = "RN21CN3"
		this.ctrl.channel_id.desc = "Channel"
		this.ctrl.channel_id.visible = false
		this.ctrl.channel_id.label_name = "Channel"
		this.ctrl.channel_id.df_code = "DF_1304_1672928913148"
		this.ctrl.channel_id.df_description = "Column Group 1"
		this.ctrl.channel_id.uictrl_code = "TXT"
		this.ctrl.channel_id.target_column = "CHANNEL_ID"
		this.ctrl.channel_id.data_type = "TEXT"
		this.ctrl.channel_id.data_length = 32
		this.ctrl.channel_id.zone_df_code = "DF_1304_1672928913148"
		this.ctrl.channel_id.default_value = ""
		this.ctrl.channel_id.is_memory_ctrl = ""
		this.ctrl.channel_id.field_coordinates = ""
		this.ctrl.channel_id.sub_details = ""
		this.ctrl.channel_id.accept_char = ""
		this.ctrl.channel_id.currency_format = ""
		this.ctrl.channel_id.data_scale = ""
		this.ctrl.channel_id.binding_name = "CHANNEL_ID"
		this.ctrl.channel_id.hide_label = false
		this.ctrl.channel_id.depends_on = ""
		this.ctrl.channel_id.placeholder = ""
		this.ctrl.channel_id.dynamic_param = ""
		this.ctrl.channel_id.style_code = ""
		this.ctrl.channel_id.data_source = ""
		this.ctrl.channel_id.image_association = ""
		this.ctrl.channel_id.show = true
		this.ctrl.channel_id.sub_content = ""
		this.ctrl.channel_id.required = false
		this.ctrl.channel_id.vld_rules = []
		this.ctrl.channel_id.targetcolumn_lower = "channel_id"
		this.ctrl.channel_id.disabled = false
		this.ctrl.channel_id.view_name = "f_npss_notification_log_srch"
		this.ctrl.channel_id.ctrl_id = "npss_notification_log_srch_channel_id"
		this.ctrl.npss_notification_log_srch_channel_id = {}
		this.ctrl.npss_notification_log_srch_channel_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of channel_ref_no
		this.ctrl.channel_ref_no = {}
		this.ctrl.channel_ref_no.id = "RN11CN2"
		this.ctrl.channel_ref_no.desc = "Channel ref no"
		this.ctrl.channel_ref_no.visible = false
		this.ctrl.channel_ref_no.label_name = "Channel ref no"
		this.ctrl.channel_ref_no.df_code = "DF_1304_1672928913148"
		this.ctrl.channel_ref_no.df_description = "Column Group 1"
		this.ctrl.channel_ref_no.uictrl_code = "TXT"
		this.ctrl.channel_ref_no.target_column = "CHANNEL_REF_NO"
		this.ctrl.channel_ref_no.data_type = "TEXT"
		this.ctrl.channel_ref_no.data_length = 32
		this.ctrl.channel_ref_no.zone_df_code = "DF_1304_1672928913148"
		this.ctrl.channel_ref_no.default_value = ""
		this.ctrl.channel_ref_no.is_memory_ctrl = ""
		this.ctrl.channel_ref_no.field_coordinates = ""
		this.ctrl.channel_ref_no.sub_details = ""
		this.ctrl.channel_ref_no.accept_char = ""
		this.ctrl.channel_ref_no.currency_format = ""
		this.ctrl.channel_ref_no.data_scale = ""
		this.ctrl.channel_ref_no.binding_name = "CHANNEL_REF_NO"
		this.ctrl.channel_ref_no.hide_label = false
		this.ctrl.channel_ref_no.depends_on = ""
		this.ctrl.channel_ref_no.placeholder = ""
		this.ctrl.channel_ref_no.dynamic_param = ""
		this.ctrl.channel_ref_no.style_code = ""
		this.ctrl.channel_ref_no.data_source = ""
		this.ctrl.channel_ref_no.image_association = ""
		this.ctrl.channel_ref_no.show = true
		this.ctrl.channel_ref_no.sub_content = ""
		this.ctrl.channel_ref_no.required = false
		this.ctrl.channel_ref_no.vld_rules = []
		this.ctrl.channel_ref_no.targetcolumn_lower = "channel_ref_no"
		this.ctrl.channel_ref_no.disabled = false
		this.ctrl.channel_ref_no.view_name = "f_npss_notification_log_srch"
		this.ctrl.channel_ref_no.ctrl_id = "npss_notification_log_srch_channel_ref_no"
		this.ctrl.npss_notification_log_srch_channel_ref_no = {}
		this.ctrl.npss_notification_log_srch_channel_ref_no.onChangecomponent = new EventEmitter<any>()
	
		//Properties of status_code
		this.ctrl.status_code = {}
		this.ctrl.status_code.id = "RN31CN4"
		this.ctrl.status_code.desc = "Status code"
		this.ctrl.status_code.visible = false
		this.ctrl.status_code.label_name = "Status code"
		this.ctrl.status_code.df_code = "DF_1304_1672928913148"
		this.ctrl.status_code.df_description = "Column Group 1"
		this.ctrl.status_code.uictrl_code = "TXT"
		this.ctrl.status_code.target_column = "STATUS_CODE"
		this.ctrl.status_code.data_type = "TEXT"
		this.ctrl.status_code.data_length = 32
		this.ctrl.status_code.zone_df_code = "DF_1304_1672928913148"
		this.ctrl.status_code.default_value = ""
		this.ctrl.status_code.is_memory_ctrl = ""
		this.ctrl.status_code.field_coordinates = ""
		this.ctrl.status_code.sub_details = ""
		this.ctrl.status_code.accept_char = ""
		this.ctrl.status_code.currency_format = ""
		this.ctrl.status_code.data_scale = ""
		this.ctrl.status_code.binding_name = "STATUS_CODE"
		this.ctrl.status_code.hide_label = false
		this.ctrl.status_code.depends_on = ""
		this.ctrl.status_code.placeholder = ""
		this.ctrl.status_code.dynamic_param = ""
		this.ctrl.status_code.style_code = ""
		this.ctrl.status_code.data_source = ""
		this.ctrl.status_code.image_association = ""
		this.ctrl.status_code.show = true
		this.ctrl.status_code.sub_content = ""
		this.ctrl.status_code.required = false
		this.ctrl.status_code.vld_rules = []
		this.ctrl.status_code.targetcolumn_lower = "status_code"
		this.ctrl.status_code.disabled = false
		this.ctrl.status_code.view_name = "f_npss_notification_log_srch"
		this.ctrl.status_code.ctrl_id = "npss_notification_log_srch_status_code"
		this.ctrl.npss_notification_log_srch_status_code = {}
		this.ctrl.npss_notification_log_srch_status_code.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_notification_log_srch.model = {"MEMORY12":"setcurrentdate(),{}","CHANNEL_ID":"","CHANNEL_REF_NO":"","STATUS_CODE":""}
		this.screen_instance[this.comp_id].f_npss_notification_log_srch.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CHANNEL_ID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CHANNEL_REF_NO"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"STATUS_CODE"}]
		this.screen_instance[this.comp_id].f_npss_notification_log_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_notification_log_srch.dtt_code = "dtt_1304_1672928670076"
		this.screen_instance[this.comp_id].f_npss_notification_log_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_notification_log_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_notification_log_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_notification_log_srch[control][property] = value;
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
    