/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35123 
Modified By     : Admin 
Modified Date   : 2024-Apr-09 13:7 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_credit_advice_report
Form Name       : Credit Advice Report--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_credit_advice_report',
  templateUrl: './f_credit_advice_report.component.html',
  styleUrls: ['./f_credit_advice_report.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_credit_advice_reportComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_credit_advice_report') form;
  @ViewChild('credit_advice_report_uetr') element: ElementRef;
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

  
		//Properties of uetr
		this.ctrl.uetr = {}
		this.ctrl.uetr.id = "RN01CN1"
		this.ctrl.uetr.desc = "IPP Reference Number"
		this.ctrl.uetr.visible = true
		this.ctrl.uetr.label_name = "IPP Reference Number"
		this.ctrl.uetr.df_code = "DF_1304_1665901396659"
		this.ctrl.uetr.df_description = "Column Group 1"
		this.ctrl.uetr.uictrl_code = "CDN_CTRL"
		this.ctrl.uetr.target_column = "UETR"
		this.ctrl.uetr.data_type = "TEXT"
		this.ctrl.uetr.data_length = 64
		this.ctrl.uetr.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.uetr.default_value = ""
		this.ctrl.uetr.is_memory_ctrl = ""
		this.ctrl.uetr.field_coordinates = ""
		this.ctrl.uetr.sub_details = ""
		this.ctrl.uetr.accept_char = ""
		this.ctrl.uetr.currency_format = ""
		this.ctrl.uetr.data_scale = ""
		this.ctrl.uetr.binding_name = "UETR"
		this.ctrl.uetr.hide_label = false
		this.ctrl.uetr.depends_on = ""
		this.ctrl.uetr.placeholder = ""
		this.ctrl.uetr.dynamic_param = ""
		this.ctrl.uetr.style_code = ""
		this.ctrl.uetr.data_source = ""
		this.ctrl.uetr.image_association = ""
		this.ctrl.uetr.show = true
		this.ctrl.uetr.sub_content = ""
		this.ctrl.uetr.required = false
		this.ctrl.uetr.vld_rules = []
		this.ctrl.uetr.targetcolumn_lower = "uetr"
		this.ctrl.uetr.disabled = false
		this.ctrl.uetr.view_name = "f_credit_advice_report"
		this.ctrl.uetr.ctrl_id = "credit_advice_report_uetr"
		this.ctrl.credit_advice_report_uetr = {}
		this.ctrl.credit_advice_report_uetr.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory101
		this.ctrl.memory101 = {}
		this.ctrl.memory101.id = "RN01CN2"
		this.ctrl.memory101.desc = "T24 FT Reference Number"
		this.ctrl.memory101.visible = true
		this.ctrl.memory101.label_name = "T24 FT Reference Number"
		this.ctrl.memory101.df_code = "DF_1304_1665901396659"
		this.ctrl.memory101.df_description = "Column Group 1"
		this.ctrl.memory101.uictrl_code = "CDN_CTRL"
		this.ctrl.memory101.target_column = "memory101"
		this.ctrl.memory101.data_type = "TEXT"
		this.ctrl.memory101.data_length = 64
		this.ctrl.memory101.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory101.default_value = ""
		this.ctrl.memory101.is_memory_ctrl = "Y"
		this.ctrl.memory101.field_coordinates = ""
		this.ctrl.memory101.sub_details = ""
		this.ctrl.memory101.accept_char = ""
		this.ctrl.memory101.currency_format = ""
		this.ctrl.memory101.data_scale = ""
		this.ctrl.memory101.binding_name = "PROCESS_REF_NO"
		this.ctrl.memory101.hide_label = false
		this.ctrl.memory101.depends_on = ""
		this.ctrl.memory101.placeholder = ""
		this.ctrl.memory101.dynamic_param = ""
		this.ctrl.memory101.style_code = ""
		this.ctrl.memory101.data_source = ""
		this.ctrl.memory101.image_association = ""
		this.ctrl.memory101.show = true
		this.ctrl.memory101.sub_content = ""
		this.ctrl.memory101.required = false
		this.ctrl.memory101.vld_rules = []
		this.ctrl.memory101.targetcolumn_lower = "memory101"
		this.ctrl.memory101.disabled = false
		this.ctrl.memory101.view_name = "f_credit_advice_report"
		this.ctrl.memory101.ctrl_id = "credit_advice_report_memory101"
		this.ctrl.credit_advice_report_memory101 = {}
		this.ctrl.credit_advice_report_memory101.onChangecomponent = new EventEmitter<any>()
	
		//Properties of payment_endtoend_id
		this.ctrl.payment_endtoend_id = {}
		this.ctrl.payment_endtoend_id.id = "RN11CN3"
		this.ctrl.payment_endtoend_id.desc = "E2E Reference Number"
		this.ctrl.payment_endtoend_id.visible = false
		this.ctrl.payment_endtoend_id.label_name = "E2E Reference Number"
		this.ctrl.payment_endtoend_id.df_code = "DF_1304_1665901396659"
		this.ctrl.payment_endtoend_id.df_description = "Column Group 1"
		this.ctrl.payment_endtoend_id.uictrl_code = "CDN_CTRL"
		this.ctrl.payment_endtoend_id.target_column = "PAYMENT_ENDTOEND_ID"
		this.ctrl.payment_endtoend_id.data_type = "TEXT"
		this.ctrl.payment_endtoend_id.data_length = 64
		this.ctrl.payment_endtoend_id.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.payment_endtoend_id.default_value = ""
		this.ctrl.payment_endtoend_id.is_memory_ctrl = ""
		this.ctrl.payment_endtoend_id.field_coordinates = ""
		this.ctrl.payment_endtoend_id.sub_details = ""
		this.ctrl.payment_endtoend_id.accept_char = ""
		this.ctrl.payment_endtoend_id.currency_format = ""
		this.ctrl.payment_endtoend_id.data_scale = ""
		this.ctrl.payment_endtoend_id.binding_name = "PAYMENT_ENDTOEND_ID"
		this.ctrl.payment_endtoend_id.hide_label = false
		this.ctrl.payment_endtoend_id.depends_on = ""
		this.ctrl.payment_endtoend_id.placeholder = ""
		this.ctrl.payment_endtoend_id.dynamic_param = ""
		this.ctrl.payment_endtoend_id.style_code = ""
		this.ctrl.payment_endtoend_id.data_source = ""
		this.ctrl.payment_endtoend_id.image_association = ""
		this.ctrl.payment_endtoend_id.show = true
		this.ctrl.payment_endtoend_id.sub_content = ""
		this.ctrl.payment_endtoend_id.required = false
		this.ctrl.payment_endtoend_id.vld_rules = []
		this.ctrl.payment_endtoend_id.targetcolumn_lower = "payment_endtoend_id"
		this.ctrl.payment_endtoend_id.disabled = false
		this.ctrl.payment_endtoend_id.view_name = "f_credit_advice_report"
		this.ctrl.payment_endtoend_id.ctrl_id = "credit_advice_report_payment_endtoend_id"
		this.ctrl.credit_advice_report_payment_endtoend_id = {}
		this.ctrl.credit_advice_report_payment_endtoend_id.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_credit_advice_report.model = {"UETR":"","MEMORY101":"","PAYMENT_ENDTOEND_ID":""}
		this.screen_instance[this.comp_id].f_credit_advice_report.Meta = [{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"UETR"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"PAYMENT_ENDTOEND_ID"}]
		this.screen_instance[this.comp_id].f_credit_advice_report.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_credit_advice_report.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_credit_advice_report.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_credit_advice_report[control]==undefined) {
      this.screen_instance[this.comp_id].f_credit_advice_report[control] = {}
    }
    this.screen_instance[this.comp_id].f_credit_advice_report[control][property] = value;
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
    