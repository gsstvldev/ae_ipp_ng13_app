/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27914 
Modified By     : Admin 
Modified Date   : 2023-Jan-25 6:1 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_manual_verification
Form Name       : NPSS Manual Verification SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_manual_verification_srch',
  templateUrl: './f_npss_manual_verification_srch.component.html',
  styleUrls: ['./f_npss_manual_verification_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_manual_verification_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_manual_verification_srch') form;
  @ViewChild('npss_manual_verification_srch_memory91') element: ElementRef;
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
		this.ctrl.memory91.id = "9c78b1b4-2aa1-48ac-9017-209d01b1b37d_1674573747682"
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
		this.ctrl.memory91.view_name = "f_npss_manual_verification_srch"
		this.ctrl.memory91.ctrl_id = "npss_manual_verification_srch_memory91"
		this.ctrl.npss_manual_verification_srch_memory91 = {}
		this.ctrl.npss_manual_verification_srch_memory91.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_iban
		this.ctrl.dbtr_iban = {}
		this.ctrl.dbtr_iban.id = "RN31CN6"
		this.ctrl.dbtr_iban.desc = "Dr IBAN"
		this.ctrl.dbtr_iban.visible = false
		this.ctrl.dbtr_iban.label_name = "Dr IBAN"
		this.ctrl.dbtr_iban.df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_iban.df_description = "Column Group 1"
		this.ctrl.dbtr_iban.uictrl_code = "CDN_CTRL"
		this.ctrl.dbtr_iban.target_column = "DBTR_IBAN"
		this.ctrl.dbtr_iban.data_type = "TEXT"
		this.ctrl.dbtr_iban.data_length = 64
		this.ctrl.dbtr_iban.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_iban.default_value = ""
		this.ctrl.dbtr_iban.is_memory_ctrl = ""
		this.ctrl.dbtr_iban.field_coordinates = ""
		this.ctrl.dbtr_iban.sub_details = ""
		this.ctrl.dbtr_iban.accept_char = ""
		this.ctrl.dbtr_iban.currency_format = ""
		this.ctrl.dbtr_iban.data_scale = ""
		this.ctrl.dbtr_iban.binding_name = "DBTR_IBAN"
		this.ctrl.dbtr_iban.hide_label = false
		this.ctrl.dbtr_iban.depends_on = ""
		this.ctrl.dbtr_iban.placeholder = ""
		this.ctrl.dbtr_iban.dynamic_param = ""
		this.ctrl.dbtr_iban.style_code = ""
		this.ctrl.dbtr_iban.data_source = ""
		this.ctrl.dbtr_iban.image_association = ""
		this.ctrl.dbtr_iban.show = true
		this.ctrl.dbtr_iban.sub_content = ""
		this.ctrl.dbtr_iban.required = false
		this.ctrl.dbtr_iban.vld_rules = []
		this.ctrl.dbtr_iban.targetcolumn_lower = "dbtr_iban"
		this.ctrl.dbtr_iban.disabled = false
		this.ctrl.dbtr_iban.view_name = "f_npss_manual_verification_srch"
		this.ctrl.dbtr_iban.ctrl_id = "npss_manual_verification_srch_dbtr_iban"
		this.ctrl.npss_manual_verification_srch_dbtr_iban = {}
		this.ctrl.npss_manual_verification_srch_dbtr_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory89
		this.ctrl.memory89 = {}
		this.ctrl.memory89.id = "7b8bd0a5-4090-4f26-bdbe-2c29a1dd99c0_1674573747682"
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
		this.ctrl.memory89.view_name = "f_npss_manual_verification_srch"
		this.ctrl.memory89.ctrl_id = "npss_manual_verification_srch_memory89"
		this.ctrl.npss_manual_verification_srch_memory89 = {}
		this.ctrl.npss_manual_verification_srch_memory89.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory92
		this.ctrl.memory92 = {}
		this.ctrl.memory92.id = "34ed9440-95b5-4299-a032-4e2729ffe9a5_1674573747682"
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
		this.ctrl.memory92.view_name = "f_npss_manual_verification_srch"
		this.ctrl.memory92.ctrl_id = "npss_manual_verification_srch_memory92"
		this.ctrl.npss_manual_verification_srch_memory92 = {}
		this.ctrl.npss_manual_verification_srch_memory92.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_manual_verification_srch.model = {"MEMORY91":"","DBTR_IBAN":"","MEMORY89":"setcurrentdate(),{}","MEMORY92":""}
		this.screen_instance[this.comp_id].f_npss_manual_verification_srch.Meta = [{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_IBAN"}]
		this.screen_instance[this.comp_id].f_npss_manual_verification_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_manual_verification_srch.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_manual_verification_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_manual_verification_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_manual_verification_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_manual_verification_srch[control][property] = value;
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
    