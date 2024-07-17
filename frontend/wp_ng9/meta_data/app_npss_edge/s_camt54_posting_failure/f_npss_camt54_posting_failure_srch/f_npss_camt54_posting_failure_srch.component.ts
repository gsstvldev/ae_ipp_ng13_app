/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 36059 
Modified By     : Admin 
Modified Date   : 2024-Jul-17 7:20 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_camt54_posting_failure
Form Name       : NPSS Camt54 Posting Failure SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_camt54_posting_failure_srch',
  templateUrl: './f_npss_camt54_posting_failure_srch.component.html',
  styleUrls: ['./f_npss_camt54_posting_failure_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_camt54_posting_failure_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_camt54_posting_failure_srch') form;
  @ViewChild('npss_camt54_posting_failure_srch_end_to_end_id') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1672471156312"
	dtt_code : string = "dtt_1304_1672471952205"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of end_to_end_id
		this.ctrl.end_to_end_id = {}
		this.ctrl.end_to_end_id.id = "457dd887-1439-455a-8e39-748e419c1d44_1721190644568"
		this.ctrl.end_to_end_id.desc = "End To End Id"
		this.ctrl.end_to_end_id.visible = true
		this.ctrl.end_to_end_id.label_name = "End To End Id"
		this.ctrl.end_to_end_id.df_code = "DF_1304_1672472068656"
		this.ctrl.end_to_end_id.df_description = "Column Group 1"
		this.ctrl.end_to_end_id.uictrl_code = "CDN_CTRL"
		this.ctrl.end_to_end_id.target_column = "END_TO_END_ID"
		this.ctrl.end_to_end_id.data_type = "TEXT"
		this.ctrl.end_to_end_id.data_length = 35
		this.ctrl.end_to_end_id.zone_df_code = "DF_1304_1672472068656"
		this.ctrl.end_to_end_id.default_value = ""
		this.ctrl.end_to_end_id.is_memory_ctrl = ""
		this.ctrl.end_to_end_id.field_coordinates = ""
		this.ctrl.end_to_end_id.sub_details = ""
		this.ctrl.end_to_end_id.accept_char = ""
		this.ctrl.end_to_end_id.currency_format = ""
		this.ctrl.end_to_end_id.data_scale = ""
		this.ctrl.end_to_end_id.binding_name = "END_TO_END_ID"
		this.ctrl.end_to_end_id.hide_label = false
		this.ctrl.end_to_end_id.depends_on = ""
		this.ctrl.end_to_end_id.placeholder = ""
		this.ctrl.end_to_end_id.dynamic_param = ""
		this.ctrl.end_to_end_id.style_code = ""
		this.ctrl.end_to_end_id.data_source = ""
		this.ctrl.end_to_end_id.image_association = ""
		this.ctrl.end_to_end_id.show = true
		this.ctrl.end_to_end_id.sub_content = ""
		this.ctrl.end_to_end_id.required = false
		this.ctrl.end_to_end_id.vld_rules = []
		this.ctrl.end_to_end_id.targetcolumn_lower = "end_to_end_id"
		this.ctrl.end_to_end_id.disabled = false
		this.ctrl.end_to_end_id.view_name = "f_npss_camt54_posting_failure_srch"
		this.ctrl.end_to_end_id.ctrl_id = "npss_camt54_posting_failure_srch_end_to_end_id"
		this.ctrl.npss_camt54_posting_failure_srch_end_to_end_id = {}
		this.ctrl.npss_camt54_posting_failure_srch_end_to_end_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of iban
		this.ctrl.iban = {}
		this.ctrl.iban.id = "5d573529-a919-46af-938c-ee850e3f3942_1721190644568"
		this.ctrl.iban.desc = "IBAN"
		this.ctrl.iban.visible = true
		this.ctrl.iban.label_name = "IBAN"
		this.ctrl.iban.df_code = "DF_1304_1672472068656"
		this.ctrl.iban.df_description = "Column Group 1"
		this.ctrl.iban.uictrl_code = "CDN_CTRL"
		this.ctrl.iban.target_column = "IBAN"
		this.ctrl.iban.data_type = "TEXT"
		this.ctrl.iban.data_length = 35
		this.ctrl.iban.zone_df_code = "DF_1304_1672472068656"
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
		this.ctrl.iban.view_name = "f_npss_camt54_posting_failure_srch"
		this.ctrl.iban.ctrl_id = "npss_camt54_posting_failure_srch_iban"
		this.ctrl.npss_camt54_posting_failure_srch_iban = {}
		this.ctrl.npss_camt54_posting_failure_srch_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of ntfn_created_datetime
		this.ctrl.ntfn_created_datetime = {}
		this.ctrl.ntfn_created_datetime.id = "0854ca76-4604-4741-b2fb-7d869c1afb6b_1721190644568"
		this.ctrl.ntfn_created_datetime.desc = "Ntfn Created Datetime"
		this.ctrl.ntfn_created_datetime.visible = true
		this.ctrl.ntfn_created_datetime.label_name = "Ntfn Created Datetime"
		this.ctrl.ntfn_created_datetime.df_code = "DF_1304_1672472068656"
		this.ctrl.ntfn_created_datetime.df_description = "Column Group 1"
		this.ctrl.ntfn_created_datetime.uictrl_code = "CDN_CTRL"
		this.ctrl.ntfn_created_datetime.target_column = "NTFN_CREATED_DATETIME"
		this.ctrl.ntfn_created_datetime.data_type = "TEXT"
		this.ctrl.ntfn_created_datetime.data_length = 35
		this.ctrl.ntfn_created_datetime.zone_df_code = "DF_1304_1672472068656"
		this.ctrl.ntfn_created_datetime.default_value = ""
		this.ctrl.ntfn_created_datetime.is_memory_ctrl = ""
		this.ctrl.ntfn_created_datetime.field_coordinates = ""
		this.ctrl.ntfn_created_datetime.sub_details = ""
		this.ctrl.ntfn_created_datetime.accept_char = ""
		this.ctrl.ntfn_created_datetime.currency_format = ""
		this.ctrl.ntfn_created_datetime.data_scale = ""
		this.ctrl.ntfn_created_datetime.binding_name = "NTFN_CREATED_DATETIME"
		this.ctrl.ntfn_created_datetime.hide_label = false
		this.ctrl.ntfn_created_datetime.depends_on = ""
		this.ctrl.ntfn_created_datetime.placeholder = ""
		this.ctrl.ntfn_created_datetime.dynamic_param = ""
		this.ctrl.ntfn_created_datetime.style_code = ""
		this.ctrl.ntfn_created_datetime.data_source = ""
		this.ctrl.ntfn_created_datetime.image_association = ""
		this.ctrl.ntfn_created_datetime.show = true
		this.ctrl.ntfn_created_datetime.sub_content = ""
		this.ctrl.ntfn_created_datetime.required = false
		this.ctrl.ntfn_created_datetime.vld_rules = []
		this.ctrl.ntfn_created_datetime.targetcolumn_lower = "ntfn_created_datetime"
		this.ctrl.ntfn_created_datetime.disabled = false
		this.ctrl.ntfn_created_datetime.view_name = "f_npss_camt54_posting_failure_srch"
		this.ctrl.ntfn_created_datetime.ctrl_id = "npss_camt54_posting_failure_srch_ntfn_created_datetime"
		this.ctrl.npss_camt54_posting_failure_srch_ntfn_created_datetime = {}
		this.ctrl.npss_camt54_posting_failure_srch_ntfn_created_datetime.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cr_dr_indicator
		this.ctrl.cr_dr_indicator = {}
		this.ctrl.cr_dr_indicator.id = "a3eace85-775b-459e-bf70-34472089f4fe_1721190644568"
		this.ctrl.cr_dr_indicator.desc = "Cr Dr Indicator"
		this.ctrl.cr_dr_indicator.visible = true
		this.ctrl.cr_dr_indicator.label_name = "Cr Dr Indicator"
		this.ctrl.cr_dr_indicator.df_code = "DF_1304_1672472068656"
		this.ctrl.cr_dr_indicator.df_description = "Column Group 1"
		this.ctrl.cr_dr_indicator.uictrl_code = "CDN_CTRL"
		this.ctrl.cr_dr_indicator.target_column = "CR_DR_INDICATOR"
		this.ctrl.cr_dr_indicator.data_type = "TEXT"
		this.ctrl.cr_dr_indicator.data_length = 35
		this.ctrl.cr_dr_indicator.zone_df_code = "DF_1304_1672472068656"
		this.ctrl.cr_dr_indicator.default_value = ""
		this.ctrl.cr_dr_indicator.is_memory_ctrl = ""
		this.ctrl.cr_dr_indicator.field_coordinates = ""
		this.ctrl.cr_dr_indicator.sub_details = ""
		this.ctrl.cr_dr_indicator.accept_char = ""
		this.ctrl.cr_dr_indicator.currency_format = ""
		this.ctrl.cr_dr_indicator.data_scale = ""
		this.ctrl.cr_dr_indicator.binding_name = "CR_DR_INDICATOR"
		this.ctrl.cr_dr_indicator.hide_label = false
		this.ctrl.cr_dr_indicator.depends_on = ""
		this.ctrl.cr_dr_indicator.placeholder = ""
		this.ctrl.cr_dr_indicator.dynamic_param = ""
		this.ctrl.cr_dr_indicator.style_code = ""
		this.ctrl.cr_dr_indicator.data_source = ""
		this.ctrl.cr_dr_indicator.image_association = ""
		this.ctrl.cr_dr_indicator.show = true
		this.ctrl.cr_dr_indicator.sub_content = ""
		this.ctrl.cr_dr_indicator.required = false
		this.ctrl.cr_dr_indicator.vld_rules = []
		this.ctrl.cr_dr_indicator.targetcolumn_lower = "cr_dr_indicator"
		this.ctrl.cr_dr_indicator.disabled = false
		this.ctrl.cr_dr_indicator.view_name = "f_npss_camt54_posting_failure_srch"
		this.ctrl.cr_dr_indicator.ctrl_id = "npss_camt54_posting_failure_srch_cr_dr_indicator"
		this.ctrl.npss_camt54_posting_failure_srch_cr_dr_indicator = {}
		this.ctrl.npss_camt54_posting_failure_srch_cr_dr_indicator.onChangecomponent = new EventEmitter<any>()
	
		//Properties of ntfn_status
		this.ctrl.ntfn_status = {}
		this.ctrl.ntfn_status.id = "9838a79c-02c6-40ee-83c3-2f1b719b8603_1721190644568"
		this.ctrl.ntfn_status.desc = "Ntfn Status"
		this.ctrl.ntfn_status.visible = true
		this.ctrl.ntfn_status.label_name = "Ntfn Status"
		this.ctrl.ntfn_status.df_code = "DF_1304_1672472068656"
		this.ctrl.ntfn_status.df_description = "Column Group 1"
		this.ctrl.ntfn_status.uictrl_code = "CDN_CTRL"
		this.ctrl.ntfn_status.target_column = "NTFN_STATUS"
		this.ctrl.ntfn_status.data_type = "TEXT"
		this.ctrl.ntfn_status.data_length = 35
		this.ctrl.ntfn_status.zone_df_code = "DF_1304_1672472068656"
		this.ctrl.ntfn_status.default_value = ""
		this.ctrl.ntfn_status.is_memory_ctrl = ""
		this.ctrl.ntfn_status.field_coordinates = ""
		this.ctrl.ntfn_status.sub_details = ""
		this.ctrl.ntfn_status.accept_char = ""
		this.ctrl.ntfn_status.currency_format = ""
		this.ctrl.ntfn_status.data_scale = ""
		this.ctrl.ntfn_status.binding_name = "NTFN_STATUS"
		this.ctrl.ntfn_status.depends_on = ""
		this.ctrl.ntfn_status.placeholder = ""
		this.ctrl.ntfn_status.dynamic_param = ""
		this.ctrl.ntfn_status.style_code = ""
		this.ctrl.ntfn_status.data_source = ""
		this.ctrl.ntfn_status.image_association = ""
		this.ctrl.ntfn_status.show = true
		this.ctrl.ntfn_status.sub_content = ""
		this.ctrl.ntfn_status.required = false
		this.ctrl.ntfn_status.vld_rules = []
		this.ctrl.ntfn_status.targetcolumn_lower = "ntfn_status"
		this.ctrl.ntfn_status.disabled = false
		this.ctrl.ntfn_status.view_name = "f_npss_camt54_posting_failure_srch"
		this.ctrl.ntfn_status.ctrl_id = "npss_camt54_posting_failure_srch_ntfn_status"
		this.ctrl.npss_camt54_posting_failure_srch_ntfn_status = {}
		this.ctrl.npss_camt54_posting_failure_srch_ntfn_status.onChangecomponent = new EventEmitter<any>()
	
		//Properties of booking_datetime
		this.ctrl.booking_datetime = {}
		this.ctrl.booking_datetime.id = "b0d79d50-a208-47e6-b558-716e78e2a5e7_1721190644568"
		this.ctrl.booking_datetime.desc = "Booking Datetime"
		this.ctrl.booking_datetime.visible = true
		this.ctrl.booking_datetime.label_name = "Booking Datetime"
		this.ctrl.booking_datetime.df_code = "DF_1304_1672472068656"
		this.ctrl.booking_datetime.df_description = "Column Group 1"
		this.ctrl.booking_datetime.uictrl_code = "CDN_CTRL"
		this.ctrl.booking_datetime.target_column = "BOOKING_DATETIME"
		this.ctrl.booking_datetime.data_type = "TEXT"
		this.ctrl.booking_datetime.data_length = 35
		this.ctrl.booking_datetime.zone_df_code = "DF_1304_1672472068656"
		this.ctrl.booking_datetime.default_value = ""
		this.ctrl.booking_datetime.is_memory_ctrl = ""
		this.ctrl.booking_datetime.field_coordinates = ""
		this.ctrl.booking_datetime.sub_details = ""
		this.ctrl.booking_datetime.accept_char = ""
		this.ctrl.booking_datetime.currency_format = ""
		this.ctrl.booking_datetime.data_scale = ""
		this.ctrl.booking_datetime.binding_name = "BOOKING_DATETIME"
		this.ctrl.booking_datetime.depends_on = ""
		this.ctrl.booking_datetime.placeholder = ""
		this.ctrl.booking_datetime.dynamic_param = ""
		this.ctrl.booking_datetime.style_code = ""
		this.ctrl.booking_datetime.data_source = ""
		this.ctrl.booking_datetime.image_association = ""
		this.ctrl.booking_datetime.show = true
		this.ctrl.booking_datetime.sub_content = ""
		this.ctrl.booking_datetime.required = false
		this.ctrl.booking_datetime.vld_rules = []
		this.ctrl.booking_datetime.targetcolumn_lower = "booking_datetime"
		this.ctrl.booking_datetime.disabled = false
		this.ctrl.booking_datetime.view_name = "f_npss_camt54_posting_failure_srch"
		this.ctrl.booking_datetime.ctrl_id = "npss_camt54_posting_failure_srch_booking_datetime"
		this.ctrl.npss_camt54_posting_failure_srch_booking_datetime = {}
		this.ctrl.npss_camt54_posting_failure_srch_booking_datetime.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_camt54_posting_failure_srch.model = {"END_TO_END_ID":"","IBAN":"","NTFN_CREATED_DATETIME":"","CR_DR_INDICATOR":"","NTFN_STATUS":"","BOOKING_DATETIME":""}
		this.screen_instance[this.comp_id].f_npss_camt54_posting_failure_srch.Meta = [{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"END_TO_END_ID"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"IBAN"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"NTFN_CREATED_DATETIME"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"CR_DR_INDICATOR"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"NTFN_STATUS"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"BOOKING_DATETIME"}]
		this.screen_instance[this.comp_id].f_npss_camt54_posting_failure_srch.dt_code = "dt_1304_1672471156312"
		this.screen_instance[this.comp_id].f_npss_camt54_posting_failure_srch.dtt_code = "dtt_1304_1672471952205"
		this.screen_instance[this.comp_id].f_npss_camt54_posting_failure_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_camt54_posting_failure_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_camt54_posting_failure_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_camt54_posting_failure_srch[control][property] = value;
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
    