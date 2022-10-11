/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26370 
Modified By     : Admin 
Modified Date   : 2022-Oct-11 4:41 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_customer_verify
Form Name       : NPSS Customer SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_customer_srch',
  templateUrl: './f_npss_customer_srch.component.html',
  styleUrls: ['./f_npss_customer_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_customer_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_customer_srch') form;
  @ViewChild('npss_customer_srch_phone_no') element: ElementRef;
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
		this.ctrl.phone_no.visible = true
		this.ctrl.phone_no.label_name = "Phone No"
		this.ctrl.phone_no.df_code = "DF_1304_1665384649010"
		this.ctrl.phone_no.df_description = "Column Group 1"
		this.ctrl.phone_no.uictrl_code = "CDN_CTRL"
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
		this.ctrl.phone_no.binding_name = "PHONE_NO"
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
		this.ctrl.phone_no.vld_rules = []
		this.ctrl.phone_no.targetcolumn_lower = "phone_no"
		this.ctrl.phone_no.disabled = false
		this.ctrl.phone_no.view_name = "f_npss_customer_srch"
		this.ctrl.phone_no.ctrl_id = "npss_customer_srch_phone_no"
		this.ctrl.npss_customer_srch_phone_no = {}
		this.ctrl.npss_customer_srch_phone_no.onChangecomponent = new EventEmitter<any>()
	
		//Properties of email_id
		this.ctrl.email_id = {}
		this.ctrl.email_id.id = "RN01CN2"
		this.ctrl.email_id.desc = "Email ID"
		this.ctrl.email_id.visible = true
		this.ctrl.email_id.label_name = "Email ID"
		this.ctrl.email_id.df_code = "DF_1304_1665384649010"
		this.ctrl.email_id.df_description = "Column Group 1"
		this.ctrl.email_id.uictrl_code = "CDN_CTRL"
		this.ctrl.email_id.target_column = "EMAIL_ID"
		this.ctrl.email_id.data_type = "TEXT"
		this.ctrl.email_id.data_length = 256
		this.ctrl.email_id.zone_df_code = "DF_1304_1665384649010"
		this.ctrl.email_id.default_value = ""
		this.ctrl.email_id.is_memory_ctrl = ""
		this.ctrl.email_id.field_coordinates = ""
		this.ctrl.email_id.sub_details = ""
		this.ctrl.email_id.accept_char = ""
		this.ctrl.email_id.currency_format = ""
		this.ctrl.email_id.data_scale = ""
		this.ctrl.email_id.binding_name = "EMAIL_ID"
		this.ctrl.email_id.hide_label = false
		this.ctrl.email_id.depends_on = ""
		this.ctrl.email_id.placeholder = ""
		this.ctrl.email_id.dynamic_param = ""
		this.ctrl.email_id.style_code = ""
		this.ctrl.email_id.data_source = ""
		this.ctrl.email_id.image_association = ""
		this.ctrl.email_id.show = true
		this.ctrl.email_id.sub_content = ""
		this.ctrl.email_id.required = false
		this.ctrl.email_id.vld_rules = []
		this.ctrl.email_id.targetcolumn_lower = "email_id"
		this.ctrl.email_id.disabled = false
		this.ctrl.email_id.view_name = "f_npss_customer_srch"
		this.ctrl.email_id.ctrl_id = "npss_customer_srch_email_id"
		this.ctrl.npss_customer_srch_email_id = {}
		this.ctrl.npss_customer_srch_email_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of emirates_id
		this.ctrl.emirates_id = {}
		this.ctrl.emirates_id.id = "RN11CN3"
		this.ctrl.emirates_id.desc = "Emirates ID"
		this.ctrl.emirates_id.visible = true
		this.ctrl.emirates_id.label_name = "Emirates ID"
		this.ctrl.emirates_id.df_code = "DF_1304_1665384649010"
		this.ctrl.emirates_id.df_description = "Column Group 1"
		this.ctrl.emirates_id.uictrl_code = "CDN_CTRL"
		this.ctrl.emirates_id.target_column = "EMIRATES_ID"
		this.ctrl.emirates_id.data_type = "TEXT"
		this.ctrl.emirates_id.data_length = 32
		this.ctrl.emirates_id.zone_df_code = "DF_1304_1665384649010"
		this.ctrl.emirates_id.default_value = ""
		this.ctrl.emirates_id.is_memory_ctrl = ""
		this.ctrl.emirates_id.field_coordinates = ""
		this.ctrl.emirates_id.sub_details = ""
		this.ctrl.emirates_id.accept_char = ""
		this.ctrl.emirates_id.currency_format = ""
		this.ctrl.emirates_id.data_scale = ""
		this.ctrl.emirates_id.binding_name = "EMIRATES_ID"
		this.ctrl.emirates_id.hide_label = false
		this.ctrl.emirates_id.depends_on = ""
		this.ctrl.emirates_id.placeholder = ""
		this.ctrl.emirates_id.dynamic_param = ""
		this.ctrl.emirates_id.style_code = ""
		this.ctrl.emirates_id.data_source = ""
		this.ctrl.emirates_id.image_association = ""
		this.ctrl.emirates_id.show = true
		this.ctrl.emirates_id.sub_content = ""
		this.ctrl.emirates_id.required = false
		this.ctrl.emirates_id.vld_rules = []
		this.ctrl.emirates_id.targetcolumn_lower = "emirates_id"
		this.ctrl.emirates_id.disabled = false
		this.ctrl.emirates_id.view_name = "f_npss_customer_srch"
		this.ctrl.emirates_id.ctrl_id = "npss_customer_srch_emirates_id"
		this.ctrl.npss_customer_srch_emirates_id = {}
		this.ctrl.npss_customer_srch_emirates_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of iban
		this.ctrl.iban = {}
		this.ctrl.iban.id = "RN11CN4"
		this.ctrl.iban.desc = "IBAN"
		this.ctrl.iban.visible = true
		this.ctrl.iban.label_name = "IBAN"
		this.ctrl.iban.df_code = "DF_1304_1665384649010"
		this.ctrl.iban.df_description = "Column Group 1"
		this.ctrl.iban.uictrl_code = "CDN_CTRL"
		this.ctrl.iban.target_column = "IBAN"
		this.ctrl.iban.data_type = "TEXT"
		this.ctrl.iban.data_length = 32
		this.ctrl.iban.zone_df_code = "DF_1304_1665384649010"
		this.ctrl.iban.default_value = ""
		this.ctrl.iban.is_memory_ctrl = ""
		this.ctrl.iban.field_coordinates = ""
		this.ctrl.iban.sub_details = ""
		this.ctrl.iban.accept_char = ""
		this.ctrl.iban.currency_format = ""
		this.ctrl.iban.data_scale = ""
		this.ctrl.iban.binding_name = "IBAN"
		this.ctrl.iban.hide_label = false
		this.ctrl.iban.depends_on = ""
		this.ctrl.iban.placeholder = ""
		this.ctrl.iban.dynamic_param = ""
		this.ctrl.iban.style_code = ""
		this.ctrl.iban.data_source = ""
		this.ctrl.iban.image_association = ""
		this.ctrl.iban.show = true
		this.ctrl.iban.sub_content = ""
		this.ctrl.iban.required = false
		this.ctrl.iban.vld_rules = []
		this.ctrl.iban.targetcolumn_lower = "iban"
		this.ctrl.iban.disabled = false
		this.ctrl.iban.view_name = "f_npss_customer_srch"
		this.ctrl.iban.ctrl_id = "npss_customer_srch_iban"
		this.ctrl.npss_customer_srch_iban = {}
		this.ctrl.npss_customer_srch_iban.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_customer_srch.model = {"PHONE_NO":"","EMAIL_ID":"","EMIRATES_ID":"","IBAN":""}
		this.screen_instance[this.comp_id].f_npss_customer_srch.Meta = [{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"PHONE_NO"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"EMAIL_ID"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"EMIRATES_ID"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"IBAN"}]
		this.screen_instance[this.comp_id].f_npss_customer_srch.dt_code = "dt_1304_1665384453253"
		this.screen_instance[this.comp_id].f_npss_customer_srch.dtt_code = "dtt_1304_1665384533560"
		this.screen_instance[this.comp_id].f_npss_customer_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_customer_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_customer_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_customer_srch[control][property] = value;
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
    