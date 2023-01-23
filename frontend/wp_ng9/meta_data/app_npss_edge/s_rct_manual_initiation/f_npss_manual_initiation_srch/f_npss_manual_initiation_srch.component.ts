/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27890 
Modified By     : Admin 
Modified Date   : 2023-Jan-23 11:42 AM 
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
  @ViewChild('npss_manual_initiation_srch_memory100') element: ElementRef;
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

  
		//Properties of memory100
		this.ctrl.memory100 = {}
		this.ctrl.memory100.id = "RN41CN6"
		this.ctrl.memory100.desc = "Debit IBAN"
		this.ctrl.memory100.visible = false
		this.ctrl.memory100.label_name = "Debit IBAN"
		this.ctrl.memory100.df_code = "DF_1304_1665901396659"
		this.ctrl.memory100.df_description = "Column Group 1"
		this.ctrl.memory100.uictrl_code = "CDN_CTRL"
		this.ctrl.memory100.target_column = "memory100"
		this.ctrl.memory100.data_type = "TEXT"
		this.ctrl.memory100.data_length = 152
		this.ctrl.memory100.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory100.default_value = ""
		this.ctrl.memory100.is_memory_ctrl = "Y"
		this.ctrl.memory100.field_coordinates = ""
		this.ctrl.memory100.sub_details = ""
		this.ctrl.memory100.accept_char = ""
		this.ctrl.memory100.currency_format = ""
		this.ctrl.memory100.data_scale = ""
		this.ctrl.memory100.binding_name = "DBTR_IBAN"
		this.ctrl.memory100.hide_label = false
		this.ctrl.memory100.depends_on = "memory97:IBAN"
		this.ctrl.memory100.placeholder = ""
		this.ctrl.memory100.dynamic_param = ""
		this.ctrl.memory100.style_code = ""
		this.ctrl.memory100.data_source = ""
		this.ctrl.memory100.image_association = ""
		this.ctrl.memory100.show = false
		this.ctrl.memory100.sub_content = ""
		this.ctrl.memory100.required = false
		this.ctrl.memory100.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.memory100.targetcolumn_lower = "memory100"
		this.ctrl.memory100.disabled = false
		this.ctrl.memory100.view_name = "f_npss_manual_initiation_srch"
		this.ctrl.memory100.ctrl_id = "npss_manual_initiation_srch_memory100"
		this.ctrl.npss_manual_initiation_srch_memory100 = {}
		this.ctrl.npss_manual_initiation_srch_memory100.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory99
		this.ctrl.memory99 = {}
		this.ctrl.memory99.id = "RN01CN1"
		this.ctrl.memory99.desc = "Debit Card No"
		this.ctrl.memory99.visible = true
		this.ctrl.memory99.label_name = "Debit Card No"
		this.ctrl.memory99.df_code = "DF_1304_1665901396659"
		this.ctrl.memory99.df_description = "Column Group 1"
		this.ctrl.memory99.uictrl_code = "CDN_CTRL"
		this.ctrl.memory99.target_column = "memory99"
		this.ctrl.memory99.data_type = "TEXT"
		this.ctrl.memory99.data_length = 512
		this.ctrl.memory99.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory99.default_value = ""
		this.ctrl.memory99.is_memory_ctrl = "Y"
		this.ctrl.memory99.field_coordinates = ""
		this.ctrl.memory99.sub_details = ""
		this.ctrl.memory99.accept_char = ""
		this.ctrl.memory99.currency_format = ""
		this.ctrl.memory99.data_scale = ""
		this.ctrl.memory99.binding_name = "DBTR_ACCT_NO"
		this.ctrl.memory99.hide_label = false
		this.ctrl.memory99.depends_on = "memory97:CARD"
		this.ctrl.memory99.placeholder = ""
		this.ctrl.memory99.dynamic_param = ""
		this.ctrl.memory99.style_code = ""
		this.ctrl.memory99.data_source = ""
		this.ctrl.memory99.image_association = ""
		this.ctrl.memory99.show = false
		this.ctrl.memory99.sub_content = ""
		this.ctrl.memory99.required = false
		this.ctrl.memory99.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.memory99.targetcolumn_lower = "memory99"
		this.ctrl.memory99.disabled = false
		this.ctrl.memory99.view_name = "f_npss_manual_initiation_srch"
		this.ctrl.memory99.ctrl_id = "npss_manual_initiation_srch_memory99"
		this.ctrl.npss_manual_initiation_srch_memory99 = {}
		this.ctrl.npss_manual_initiation_srch_memory99.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory98
		this.ctrl.memory98 = {}
		this.ctrl.memory98.id = "RN01CN2"
		this.ctrl.memory98.desc = "Transaction Date"
		this.ctrl.memory98.visible = true
		this.ctrl.memory98.label_name = "Transaction Date"
		this.ctrl.memory98.df_code = "DF_1304_1665901396659"
		this.ctrl.memory98.df_description = "Column Group 1"
		this.ctrl.memory98.uictrl_code = "CDN_DATE"
		this.ctrl.memory98.target_column = "memory98"
		this.ctrl.memory98.data_type = "DATETIME"
		this.ctrl.memory98.data_length = 0
		this.ctrl.memory98.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory98.default_value = ""
		this.ctrl.memory98.is_memory_ctrl = "Y"
		this.ctrl.memory98.field_coordinates = ""
		this.ctrl.memory98.sub_details = ""
		this.ctrl.memory98.accept_char = ""
		this.ctrl.memory98.currency_format = ""
		this.ctrl.memory98.data_scale = ""
		this.ctrl.memory98.binding_name = "VALUE_DATE"
		this.ctrl.memory98.hide_label = false
		this.ctrl.memory98.depends_on = ""
		this.ctrl.memory98.placeholder = ""
		this.ctrl.memory98.dynamic_param = ""
		this.ctrl.memory98.style_code = ""
		this.ctrl.memory98.data_source = ""
		this.ctrl.memory98.image_association = ""
		this.ctrl.memory98.show = true
		this.ctrl.memory98.sub_content = ""
		this.ctrl.memory98.required = false
		this.ctrl.memory98.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.memory98.targetcolumn_lower = "memory98"
		this.ctrl.memory98.disabled = false
		this.ctrl.memory98.view_name = "f_npss_manual_initiation_srch"
		this.ctrl.memory98.ctrl_id = "npss_manual_initiation_srch_memory98"
		this.ctrl.npss_manual_initiation_srch_memory98 = {}
		this.ctrl.npss_manual_initiation_srch_memory98.onChangecomponent = new EventEmitter<any>()
	
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
		this.ctrl.clrsysref.id = "RN51CN7"
		this.ctrl.clrsysref.desc = "CB IPP reference number"
		this.ctrl.clrsysref.visible = false
		this.ctrl.clrsysref.label_name = "CB IPP reference number"
		this.ctrl.clrsysref.df_code = "DF_1304_1665901396659"
		this.ctrl.clrsysref.df_description = "Column Group 1"
		this.ctrl.clrsysref.uictrl_code = "TXT"
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
		this.screen_instance[this.comp_id].f_npss_manual_initiation_srch.model = {"MEMORY100":"","MEMORY99":"","MEMORY98":"","MEMORY92":"","PAYMENT_ENDTOEND_ID":"","CLRSYSREF":""}
		this.screen_instance[this.comp_id].f_npss_manual_initiation_srch.Meta = [{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"PAYMENT_ENDTOEND_ID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CLRSYSREF"}]
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
    