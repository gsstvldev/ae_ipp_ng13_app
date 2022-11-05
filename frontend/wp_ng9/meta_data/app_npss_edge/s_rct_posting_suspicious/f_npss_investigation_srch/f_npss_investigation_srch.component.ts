/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26836 
Modified By     : Admin 
Modified Date   : 2022-Nov-05 11:21 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_posting_suspicious
Form Name       : NPSS Investigation srch--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_investigation_srch',
  templateUrl: './f_npss_investigation_srch.component.html',
  styleUrls: ['./f_npss_investigation_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_investigation_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_investigation_srch') form;
  @ViewChild('npss_investigation_srch_value_date') element: ElementRef;
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

  
		//Properties of value_date
		this.ctrl.value_date = {}
		this.ctrl.value_date.id = "RN01CN1001"
		this.ctrl.value_date.desc = "Value Date"
		this.ctrl.value_date.visible = true
		this.ctrl.value_date.label_name = "Value Date"
		this.ctrl.value_date.df_code = "DF_1304_1665901396659"
		this.ctrl.value_date.df_description = "Column Group 1"
		this.ctrl.value_date.uictrl_code = "CDN_DATE"
		this.ctrl.value_date.target_column = "VALUE_DATE"
		this.ctrl.value_date.data_type = "DATETIME"
		this.ctrl.value_date.data_length = 0
		this.ctrl.value_date.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.value_date.default_value = ""
		this.ctrl.value_date.is_memory_ctrl = ""
		this.ctrl.value_date.field_coordinates = ""
		this.ctrl.value_date.sub_details = ""
		this.ctrl.value_date.accept_char = ""
		this.ctrl.value_date.currency_format = ""
		this.ctrl.value_date.data_scale = ""
		this.ctrl.value_date.binding_name = "VALUE_DATE"
		this.ctrl.value_date.hide_label = false
		this.ctrl.value_date.depends_on = ""
		this.ctrl.value_date.placeholder = ""
		this.ctrl.value_date.dynamic_param = ""
		this.ctrl.value_date.style_code = ""
		this.ctrl.value_date.data_source = ""
		this.ctrl.value_date.image_association = ""
		this.ctrl.value_date.show = true
		this.ctrl.value_date.sub_content = ""
		this.ctrl.value_date.required = false
		this.ctrl.value_date.vld_rules = []
		this.ctrl.value_date.targetcolumn_lower = "value_date"
		this.ctrl.value_date.disabled = false
		this.ctrl.value_date.view_name = "f_npss_investigation_srch"
		this.ctrl.value_date.ctrl_id = "npss_investigation_srch_value_date"
		this.ctrl.npss_investigation_srch_value_date = {}
		this.ctrl.npss_investigation_srch_value_date.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory63
		this.ctrl.memory63 = {}
		this.ctrl.memory63.id = "RN21CN5"
		this.ctrl.memory63.desc = "Created date"
		this.ctrl.memory63.visible = false
		this.ctrl.memory63.label_name = "Created date"
		this.ctrl.memory63.df_code = "DF_1304_1665901396659"
		this.ctrl.memory63.df_description = "Column Group 1"
		this.ctrl.memory63.uictrl_code = "CDN_DATE"
		this.ctrl.memory63.target_column = "memory63"
		this.ctrl.memory63.data_type = "DATETIME"
		this.ctrl.memory63.data_length = 0
		this.ctrl.memory63.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory63.default_value = "setcurrentdate(),{}"
		this.ctrl.memory63.is_memory_ctrl = "Y"
		this.ctrl.memory63.field_coordinates = ""
		this.ctrl.memory63.sub_details = ""
		this.ctrl.memory63.accept_char = ""
		this.ctrl.memory63.currency_format = ""
		this.ctrl.memory63.data_scale = ""
		this.ctrl.memory63.binding_name = "CREATED_DATE"
		this.ctrl.memory63.hide_label = false
		this.ctrl.memory63.depends_on = ""
		this.ctrl.memory63.placeholder = ""
		this.ctrl.memory63.dynamic_param = ""
		this.ctrl.memory63.style_code = ""
		this.ctrl.memory63.data_source = ""
		this.ctrl.memory63.image_association = ""
		this.ctrl.memory63.show = true
		this.ctrl.memory63.sub_content = ""
		this.ctrl.memory63.required = false
		this.ctrl.memory63.vld_rules = []
		this.ctrl.memory63.targetcolumn_lower = "memory63"
		this.ctrl.memory63.disabled = false
		this.ctrl.memory63.view_name = "f_npss_investigation_srch"
		this.ctrl.memory63.ctrl_id = "npss_investigation_srch_memory63"
		this.ctrl.npss_investigation_srch_memory63 = {}
		this.ctrl.npss_investigation_srch_memory63.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_iban
		this.ctrl.cdtr_iban = {}
		this.ctrl.cdtr_iban.id = "RN01CN1"
		this.ctrl.cdtr_iban.desc = "Creditor IBAN"
		this.ctrl.cdtr_iban.visible = true
		this.ctrl.cdtr_iban.label_name = "Creditor IBAN"
		this.ctrl.cdtr_iban.df_code = "DF_1304_1665901396659"
		this.ctrl.cdtr_iban.df_description = "Column Group 1"
		this.ctrl.cdtr_iban.uictrl_code = "TXT"
		this.ctrl.cdtr_iban.target_column = "CDTR_IBAN"
		this.ctrl.cdtr_iban.data_type = "TEXT"
		this.ctrl.cdtr_iban.data_length = 64
		this.ctrl.cdtr_iban.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.cdtr_iban.default_value = ""
		this.ctrl.cdtr_iban.is_memory_ctrl = ""
		this.ctrl.cdtr_iban.field_coordinates = ""
		this.ctrl.cdtr_iban.sub_details = ""
		this.ctrl.cdtr_iban.accept_char = ""
		this.ctrl.cdtr_iban.currency_format = ""
		this.ctrl.cdtr_iban.data_scale = ""
		this.ctrl.cdtr_iban.binding_name = "CDTR_IBAN"
		this.ctrl.cdtr_iban.hide_label = false
		this.ctrl.cdtr_iban.depends_on = ""
		this.ctrl.cdtr_iban.placeholder = ""
		this.ctrl.cdtr_iban.dynamic_param = ""
		this.ctrl.cdtr_iban.style_code = ""
		this.ctrl.cdtr_iban.data_source = ""
		this.ctrl.cdtr_iban.image_association = ""
		this.ctrl.cdtr_iban.show = true
		this.ctrl.cdtr_iban.sub_content = ""
		this.ctrl.cdtr_iban.required = false
		this.ctrl.cdtr_iban.vld_rules = []
		this.ctrl.cdtr_iban.targetcolumn_lower = "cdtr_iban"
		this.ctrl.cdtr_iban.disabled = false
		this.ctrl.cdtr_iban.view_name = "f_npss_investigation_srch"
		this.ctrl.cdtr_iban.ctrl_id = "npss_investigation_srch_cdtr_iban"
		this.ctrl.npss_investigation_srch_cdtr_iban = {}
		this.ctrl.npss_investigation_srch_cdtr_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of uetr
		this.ctrl.uetr = {}
		this.ctrl.uetr.id = "RN11CN2"
		this.ctrl.uetr.desc = "UETR"
		this.ctrl.uetr.visible = true
		this.ctrl.uetr.label_name = "UETR"
		this.ctrl.uetr.df_code = "DF_1304_1665901396659"
		this.ctrl.uetr.df_description = "Column Group 1"
		this.ctrl.uetr.uictrl_code = "TXT"
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
		this.ctrl.uetr.view_name = "f_npss_investigation_srch"
		this.ctrl.uetr.ctrl_id = "npss_investigation_srch_uetr"
		this.ctrl.npss_investigation_srch_uetr = {}
		this.ctrl.npss_investigation_srch_uetr.onChangecomponent = new EventEmitter<any>()
	
		//Properties of tran_ref_id
		this.ctrl.tran_ref_id = {}
		this.ctrl.tran_ref_id.id = "RN21CN6"
		this.ctrl.tran_ref_id.desc = "Transaction Ref No"
		this.ctrl.tran_ref_id.visible = true
		this.ctrl.tran_ref_id.label_name = "Transaction Ref No"
		this.ctrl.tran_ref_id.df_code = "DF_1304_1665901396659"
		this.ctrl.tran_ref_id.df_description = "Column Group 1"
		this.ctrl.tran_ref_id.uictrl_code = "TXT"
		this.ctrl.tran_ref_id.target_column = "TRAN_REF_ID"
		this.ctrl.tran_ref_id.data_type = "TEXT"
		this.ctrl.tran_ref_id.data_length = 35
		this.ctrl.tran_ref_id.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.tran_ref_id.default_value = ""
		this.ctrl.tran_ref_id.is_memory_ctrl = ""
		this.ctrl.tran_ref_id.field_coordinates = ""
		this.ctrl.tran_ref_id.sub_details = ""
		this.ctrl.tran_ref_id.accept_char = ""
		this.ctrl.tran_ref_id.currency_format = ""
		this.ctrl.tran_ref_id.data_scale = ""
		this.ctrl.tran_ref_id.binding_name = "TRAN_REF_ID"
		this.ctrl.tran_ref_id.hide_label = false
		this.ctrl.tran_ref_id.depends_on = ""
		this.ctrl.tran_ref_id.placeholder = ""
		this.ctrl.tran_ref_id.dynamic_param = ""
		this.ctrl.tran_ref_id.style_code = ""
		this.ctrl.tran_ref_id.data_source = ""
		this.ctrl.tran_ref_id.image_association = ""
		this.ctrl.tran_ref_id.show = true
		this.ctrl.tran_ref_id.sub_content = ""
		this.ctrl.tran_ref_id.required = false
		this.ctrl.tran_ref_id.vld_rules = []
		this.ctrl.tran_ref_id.targetcolumn_lower = "tran_ref_id"
		this.ctrl.tran_ref_id.disabled = false
		this.ctrl.tran_ref_id.view_name = "f_npss_investigation_srch"
		this.ctrl.tran_ref_id.ctrl_id = "npss_investigation_srch_tran_ref_id"
		this.ctrl.npss_investigation_srch_tran_ref_id = {}
		this.ctrl.npss_investigation_srch_tran_ref_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_phone_no
		this.ctrl.cdtr_phone_no = {}
		this.ctrl.cdtr_phone_no.id = "RN11CN3"
		this.ctrl.cdtr_phone_no.desc = "Creditor Mobile No"
		this.ctrl.cdtr_phone_no.visible = true
		this.ctrl.cdtr_phone_no.label_name = "Creditor Mobile No"
		this.ctrl.cdtr_phone_no.df_code = "DF_1304_1665901396659"
		this.ctrl.cdtr_phone_no.df_description = "Column Group 1"
		this.ctrl.cdtr_phone_no.uictrl_code = "TXT"
		this.ctrl.cdtr_phone_no.target_column = "CDTR_PHONE_NO"
		this.ctrl.cdtr_phone_no.data_type = "TEXT"
		this.ctrl.cdtr_phone_no.data_length = 64
		this.ctrl.cdtr_phone_no.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.cdtr_phone_no.default_value = ""
		this.ctrl.cdtr_phone_no.is_memory_ctrl = ""
		this.ctrl.cdtr_phone_no.field_coordinates = ""
		this.ctrl.cdtr_phone_no.sub_details = ""
		this.ctrl.cdtr_phone_no.accept_char = ""
		this.ctrl.cdtr_phone_no.currency_format = ""
		this.ctrl.cdtr_phone_no.data_scale = ""
		this.ctrl.cdtr_phone_no.binding_name = "CDTR_PHONE_NO"
		this.ctrl.cdtr_phone_no.hide_label = false
		this.ctrl.cdtr_phone_no.depends_on = ""
		this.ctrl.cdtr_phone_no.placeholder = ""
		this.ctrl.cdtr_phone_no.dynamic_param = ""
		this.ctrl.cdtr_phone_no.style_code = ""
		this.ctrl.cdtr_phone_no.data_source = ""
		this.ctrl.cdtr_phone_no.image_association = ""
		this.ctrl.cdtr_phone_no.show = true
		this.ctrl.cdtr_phone_no.sub_content = ""
		this.ctrl.cdtr_phone_no.required = false
		this.ctrl.cdtr_phone_no.vld_rules = []
		this.ctrl.cdtr_phone_no.targetcolumn_lower = "cdtr_phone_no"
		this.ctrl.cdtr_phone_no.disabled = false
		this.ctrl.cdtr_phone_no.view_name = "f_npss_investigation_srch"
		this.ctrl.cdtr_phone_no.ctrl_id = "npss_investigation_srch_cdtr_phone_no"
		this.ctrl.npss_investigation_srch_cdtr_phone_no = {}
		this.ctrl.npss_investigation_srch_cdtr_phone_no.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_investigation_srch.model = {"VALUE_DATE":"","MEMORY63":"setcurrentdate(),{}","CDTR_IBAN":"","UETR":"","TRAN_REF_ID":"","CDTR_PHONE_NO":""}
		this.screen_instance[this.comp_id].f_npss_investigation_srch.Meta = [{"CTLR_CODE":"CDN_DATE","DATA_TYPE":"DATETIME","TARGET_COLUMN":"VALUE_DATE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_IBAN"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"UETR"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"TRAN_REF_ID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_PHONE_NO"}]
		this.screen_instance[this.comp_id].f_npss_investigation_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_investigation_srch.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_investigation_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_investigation_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_investigation_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_investigation_srch[control][property] = value;
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
    