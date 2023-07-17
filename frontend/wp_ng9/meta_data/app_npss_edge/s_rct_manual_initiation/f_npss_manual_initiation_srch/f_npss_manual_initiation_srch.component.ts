/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 31109 
Modified By     : Admin 
Modified Date   : 2023-Jul-17 12:26 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_manual_initiation
Form Name       : NPSS Manual initiation SRCh--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_manual_initiation_srch',
  templateUrl: './f_npss_manual_initiation_srch.component.html',
  styleUrls: ['./f_npss_manual_initiation_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_manual_initiation_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_manual_initiation_srch') form;
  @ViewChild('npss_manual_initiation_srch_memory91') element: ElementRef;
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

  
		//Properties of memory91
		this.ctrl.memory91 = {}
		this.ctrl.memory91.id = "RN41CN6"
		this.ctrl.memory91.desc = "Cr BAN"
		this.ctrl.memory91.visible = false
		this.ctrl.memory91.label_name = "Cr BAN"
		this.ctrl.memory91.df_code = "DF_1304_1665901396659"
		this.ctrl.memory91.df_description = "Column Group 1"
		this.ctrl.memory91.uictrl_code = "CDN_CTRL"
		this.ctrl.memory91.target_column = "memory91"
		this.ctrl.memory91.data_type = "TEXT"
		this.ctrl.memory91.data_length = 64
		this.ctrl.memory91.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory91.default_value = ""
		this.ctrl.memory91.is_memory_ctrl = "Y"
		this.ctrl.memory91.field_coordinates = ""
		this.ctrl.memory91.sub_details = ""
		this.ctrl.memory91.accept_char = ""
		this.ctrl.memory91.currency_format = ""
		this.ctrl.memory91.data_scale = ""
		this.ctrl.memory91.binding_name = "CDTR_IBAN"
		this.ctrl.memory91.hide_label = false
		this.ctrl.memory91.depends_on = ""
		this.ctrl.memory91.placeholder = ""
		this.ctrl.memory91.dynamic_param = ""
		this.ctrl.memory91.style_code = ""
		this.ctrl.memory91.data_source = ""
		this.ctrl.memory91.image_association = ""
		this.ctrl.memory91.show = true
		this.ctrl.memory91.sub_content = ""
		this.ctrl.memory91.required = false
		this.ctrl.memory91.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.memory91.targetcolumn_lower = "memory91"
		this.ctrl.memory91.disabled = false
		this.ctrl.memory91.view_name = "f_npss_manual_initiation_srch"
		this.ctrl.memory91.ctrl_id = "npss_manual_initiation_srch_memory91"
		this.ctrl.npss_manual_initiation_srch_memory91 = {}
		this.ctrl.npss_manual_initiation_srch_memory91.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory89
		this.ctrl.memory89 = {}
		this.ctrl.memory89.id = "RN01CN2"
		this.ctrl.memory89.desc = "Transaction Date"
		this.ctrl.memory89.visible = true
		this.ctrl.memory89.label_name = "Transaction Date"
		this.ctrl.memory89.df_code = "DF_1304_1665901396659"
		this.ctrl.memory89.df_description = "Column Group 1"
		this.ctrl.memory89.uictrl_code = "CDN_DATE"
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
		this.ctrl.memory89.view_name = "f_npss_manual_initiation_srch"
		this.ctrl.memory89.ctrl_id = "npss_manual_initiation_srch_memory89"
		this.ctrl.npss_manual_initiation_srch_memory89 = {}
		this.ctrl.npss_manual_initiation_srch_memory89.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory92
		this.ctrl.memory92 = {}
		this.ctrl.memory92.id = "RN11CN3"
		this.ctrl.memory92.desc = "Amount"
		this.ctrl.memory92.visible = true
		this.ctrl.memory92.label_name = "Amount"
		this.ctrl.memory92.df_code = "DF_1304_1665901396659"
		this.ctrl.memory92.df_description = "Column Group 1"
		this.ctrl.memory92.uictrl_code = "CDN_CUR_CTRL"
		this.ctrl.memory92.target_column = "memory92"
		this.ctrl.memory92.data_type = "NUMBER"
		this.ctrl.memory92.data_length = 19
		this.ctrl.memory92.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory92.default_value = ""
		this.ctrl.memory92.is_memory_ctrl = "Y"
		this.ctrl.memory92.field_coordinates = ""
		this.ctrl.memory92.sub_details = ""
		this.ctrl.memory92.accept_char = ""
		this.ctrl.memory92.currency_format = ""
		this.ctrl.memory92.data_scale = "2"
		this.ctrl.memory92.binding_name = "INTRBK_STTLM_AMNT"
		this.ctrl.memory92.hide_label = false
		this.ctrl.memory92.depends_on = ""
		this.ctrl.memory92.placeholder = ""
		this.ctrl.memory92.dynamic_param = ""
		this.ctrl.memory92.style_code = ""
		this.ctrl.memory92.data_source = ""
		this.ctrl.memory92.image_association = ""
		this.ctrl.memory92.show = true
		this.ctrl.memory92.sub_content = ""
		this.ctrl.memory92.required = false
		this.ctrl.memory92.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTZERO","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.memory92.targetcolumn_lower = "memory92"
		this.ctrl.memory92.disabled = false
		this.ctrl.memory92.view_name = "f_npss_manual_initiation_srch"
		this.ctrl.memory92.ctrl_id = "npss_manual_initiation_srch_memory92"
		this.ctrl.npss_manual_initiation_srch_memory92 = {}
		this.ctrl.npss_manual_initiation_srch_memory92.onChangecomponent = new EventEmitter<any>()
	
		//Properties of uetr
		this.ctrl.uetr = {}
		this.ctrl.uetr.id = "RN51CN7"
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
		this.ctrl.uetr.view_name = "f_npss_manual_initiation_srch"
		this.ctrl.uetr.ctrl_id = "npss_manual_initiation_srch_uetr"
		this.ctrl.npss_manual_initiation_srch_uetr = {}
		this.ctrl.npss_manual_initiation_srch_uetr.onChangecomponent = new EventEmitter<any>()
	
		//Properties of payment_endtoend_id
		this.ctrl.payment_endtoend_id = {}
		this.ctrl.payment_endtoend_id.id = "RN11CN4"
		this.ctrl.payment_endtoend_id.desc = "Original E2E reference Number"
		this.ctrl.payment_endtoend_id.visible = true
		this.ctrl.payment_endtoend_id.label_name = "Original E2E reference Number"
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
		this.ctrl.payment_endtoend_id.view_name = "f_npss_manual_initiation_srch"
		this.ctrl.payment_endtoend_id.ctrl_id = "npss_manual_initiation_srch_payment_endtoend_id"
		this.ctrl.npss_manual_initiation_srch_payment_endtoend_id = {}
		this.ctrl.npss_manual_initiation_srch_payment_endtoend_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of clrsysref
		this.ctrl.clrsysref = {}
		this.ctrl.clrsysref.id = "RN51CN6"
		this.ctrl.clrsysref.desc = "IPP Reference Number"
		this.ctrl.clrsysref.visible = false
		this.ctrl.clrsysref.label_name = "IPP Reference Number"
		this.ctrl.clrsysref.df_code = "DF_1304_1665901396659"
		this.ctrl.clrsysref.df_description = "Column Group 1"
		this.ctrl.clrsysref.uictrl_code = "CDN_CTRL"
		this.ctrl.clrsysref.target_column = "CLRSYSREF"
		this.ctrl.clrsysref.data_type = "TEXT"
		this.ctrl.clrsysref.data_length = 35
		this.ctrl.clrsysref.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.clrsysref.default_value = ""
		this.ctrl.clrsysref.is_memory_ctrl = ""
		this.ctrl.clrsysref.field_coordinates = ""
		this.ctrl.clrsysref.sub_details = ""
		this.ctrl.clrsysref.accept_char = ""
		this.ctrl.clrsysref.currency_format = ""
		this.ctrl.clrsysref.data_scale = ""
		this.ctrl.clrsysref.binding_name = "CLRSYSREF"
		this.ctrl.clrsysref.hide_label = false
		this.ctrl.clrsysref.depends_on = ""
		this.ctrl.clrsysref.placeholder = ""
		this.ctrl.clrsysref.dynamic_param = ""
		this.ctrl.clrsysref.style_code = ""
		this.ctrl.clrsysref.data_source = ""
		this.ctrl.clrsysref.image_association = ""
		this.ctrl.clrsysref.show = true
		this.ctrl.clrsysref.sub_content = ""
		this.ctrl.clrsysref.required = false
		this.ctrl.clrsysref.vld_rules = []
		this.ctrl.clrsysref.targetcolumn_lower = "clrsysref"
		this.ctrl.clrsysref.disabled = false
		this.ctrl.clrsysref.view_name = "f_npss_manual_initiation_srch"
		this.ctrl.clrsysref.ctrl_id = "npss_manual_initiation_srch_clrsysref"
		this.ctrl.npss_manual_initiation_srch_clrsysref = {}
		this.ctrl.npss_manual_initiation_srch_clrsysref.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_manual_initiation_srch.model = {"MEMORY91":"","MEMORY89":"setcurrentdate(),{}","MEMORY92":"","UETR":"","PAYMENT_ENDTOEND_ID":"","CLRSYSREF":""}
		this.screen_instance[this.comp_id].f_npss_manual_initiation_srch.Meta = [{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"UETR"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"PAYMENT_ENDTOEND_ID"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"CLRSYSREF"}]
		this.screen_instance[this.comp_id].f_npss_manual_initiation_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_manual_initiation_srch.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_manual_initiation_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_manual_initiation_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_manual_initiation_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_manual_initiation_srch[control][property] = value;
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
    