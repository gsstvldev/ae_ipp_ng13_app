/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35112 
Modified By     : Admin 
Modified Date   : 2024-Apr-08 6:38 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_debit_advice_report
Form Name       : Debit Advice Report SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_debit_advice_report_srch',
  templateUrl: './f_debit_advice_report_srch.component.html',
  styleUrls: ['./f_debit_advice_report_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_debit_advice_report_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_debit_advice_report_srch') form;
  @ViewChild('debit_advice_report_srch_uetr') element: ElementRef;
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
		this.ctrl.uetr.desc = "UETR"
		this.ctrl.uetr.visible = true
		this.ctrl.uetr.label_name = "UETR"
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
		this.ctrl.uetr.view_name = "f_debit_advice_report_srch"
		this.ctrl.uetr.ctrl_id = "debit_advice_report_srch_uetr"
		this.ctrl.debit_advice_report_srch_uetr = {}
		this.ctrl.debit_advice_report_srch_uetr.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory151
		this.ctrl.memory151 = {}
		this.ctrl.memory151.id = "RN01CN2"
		this.ctrl.memory151.desc = "T24 FT Reference Number"
		this.ctrl.memory151.visible = true
		this.ctrl.memory151.label_name = "T24 FT Reference Number"
		this.ctrl.memory151.df_code = "DF_1304_1665901396659"
		this.ctrl.memory151.df_description = "Column Group 1"
		this.ctrl.memory151.uictrl_code = "CDN_CTRL"
		this.ctrl.memory151.target_column = "memory151"
		this.ctrl.memory151.data_type = "TEXT"
		this.ctrl.memory151.data_length = 0
		this.ctrl.memory151.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory151.default_value = ""
		this.ctrl.memory151.is_memory_ctrl = "Y"
		this.ctrl.memory151.field_coordinates = ""
		this.ctrl.memory151.sub_details = ""
		this.ctrl.memory151.accept_char = ""
		this.ctrl.memory151.currency_format = ""
		this.ctrl.memory151.data_scale = ""
		this.ctrl.memory151.binding_name = "T24_FT_REFERENCE_NUMBER"
		this.ctrl.memory151.hide_label = false
		this.ctrl.memory151.depends_on = ""
		this.ctrl.memory151.placeholder = ""
		this.ctrl.memory151.dynamic_param = ""
		this.ctrl.memory151.style_code = ""
		this.ctrl.memory151.data_source = ""
		this.ctrl.memory151.image_association = ""
		this.ctrl.memory151.show = true
		this.ctrl.memory151.sub_content = ""
		this.ctrl.memory151.required = false
		this.ctrl.memory151.vld_rules = []
		this.ctrl.memory151.targetcolumn_lower = "memory151"
		this.ctrl.memory151.disabled = false
		this.ctrl.memory151.view_name = "f_debit_advice_report_srch"
		this.ctrl.memory151.ctrl_id = "debit_advice_report_srch_memory151"
		this.ctrl.debit_advice_report_srch_memory151 = {}
		this.ctrl.debit_advice_report_srch_memory151.onChangecomponent = new EventEmitter<any>()
	
		//Properties of payment_endtoend_id
		this.ctrl.payment_endtoend_id = {}
		this.ctrl.payment_endtoend_id.id = "RN11CN3"
		this.ctrl.payment_endtoend_id.desc = "End to End ID"
		this.ctrl.payment_endtoend_id.visible = true
		this.ctrl.payment_endtoend_id.label_name = "End to End ID"
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
		this.ctrl.payment_endtoend_id.view_name = "f_debit_advice_report_srch"
		this.ctrl.payment_endtoend_id.ctrl_id = "debit_advice_report_srch_payment_endtoend_id"
		this.ctrl.debit_advice_report_srch_payment_endtoend_id = {}
		this.ctrl.debit_advice_report_srch_payment_endtoend_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of channel_refno
		this.ctrl.channel_refno = {}
		this.ctrl.channel_refno.id = "RN11CN4"
		this.ctrl.channel_refno.desc = "Sender Reference number"
		this.ctrl.channel_refno.visible = true
		this.ctrl.channel_refno.label_name = "Sender Reference number"
		this.ctrl.channel_refno.df_code = "DF_1304_1665901396659"
		this.ctrl.channel_refno.df_description = "Column Group 1"
		this.ctrl.channel_refno.uictrl_code = "CDN_CTRL"
		this.ctrl.channel_refno.target_column = "CHANNEL_REFNO"
		this.ctrl.channel_refno.data_type = "TEXT"
		this.ctrl.channel_refno.data_length = 128
		this.ctrl.channel_refno.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.channel_refno.default_value = ""
		this.ctrl.channel_refno.is_memory_ctrl = ""
		this.ctrl.channel_refno.field_coordinates = ""
		this.ctrl.channel_refno.sub_details = ""
		this.ctrl.channel_refno.accept_char = ""
		this.ctrl.channel_refno.currency_format = ""
		this.ctrl.channel_refno.data_scale = ""
		this.ctrl.channel_refno.binding_name = "CHANNEL_REFNO"
		this.ctrl.channel_refno.hide_label = false
		this.ctrl.channel_refno.depends_on = ""
		this.ctrl.channel_refno.placeholder = ""
		this.ctrl.channel_refno.dynamic_param = ""
		this.ctrl.channel_refno.style_code = ""
		this.ctrl.channel_refno.data_source = ""
		this.ctrl.channel_refno.image_association = ""
		this.ctrl.channel_refno.show = true
		this.ctrl.channel_refno.sub_content = ""
		this.ctrl.channel_refno.required = false
		this.ctrl.channel_refno.vld_rules = []
		this.ctrl.channel_refno.targetcolumn_lower = "channel_refno"
		this.ctrl.channel_refno.disabled = false
		this.ctrl.channel_refno.view_name = "f_debit_advice_report_srch"
		this.ctrl.channel_refno.ctrl_id = "debit_advice_report_srch_channel_refno"
		this.ctrl.debit_advice_report_srch_channel_refno = {}
		this.ctrl.debit_advice_report_srch_channel_refno.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_debit_advice_report_srch.model = {"UETR":"","MEMORY151":"","PAYMENT_ENDTOEND_ID":"","CHANNEL_REFNO":""}
		this.screen_instance[this.comp_id].f_debit_advice_report_srch.Meta = [{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"UETR"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"PAYMENT_ENDTOEND_ID"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"CHANNEL_REFNO"}]
		this.screen_instance[this.comp_id].f_debit_advice_report_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_debit_advice_report_srch.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_debit_advice_report_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_debit_advice_report_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_debit_advice_report_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_debit_advice_report_srch[control][property] = value;
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
    