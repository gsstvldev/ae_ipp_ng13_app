/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26363 
Modified By     : Admin 
Modified Date   : 2022-Oct-10 14:36 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_salary_verification
Form Name       : NPSS Merch Verify Srch--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_merch_verify_srch',
  templateUrl: './f_npss_merch_verify_srch.component.html',
  styleUrls: ['./f_npss_merch_verify_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_merch_verify_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_merch_verify_srch') form;
  @ViewChild('npss_merch_verify_srch_memory59') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665384579126"
	dtt_code : string = "dtt_1304_1665386727379"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of memory59
		this.ctrl.memory59 = {}
		this.ctrl.memory59.id = "RN01CN1"
		this.ctrl.memory59.desc = "Tran ID"
		this.ctrl.memory59.visible = true
		this.ctrl.memory59.label_name = "Tran ID"
		this.ctrl.memory59.df_code = "DF_1304_1665386831744"
		this.ctrl.memory59.df_description = "Column Group 2"
		this.ctrl.memory59.uictrl_code = "TXT"
		this.ctrl.memory59.target_column = "memory59"
		this.ctrl.memory59.data_type = "NUMBER"
		this.ctrl.memory59.data_length = 9
		this.ctrl.memory59.zone_df_code = "DF_1304_1665386831744"
		this.ctrl.memory59.default_value = ""
		this.ctrl.memory59.is_memory_ctrl = "Y"
		this.ctrl.memory59.field_coordinates = ""
		this.ctrl.memory59.sub_details = ""
		this.ctrl.memory59.accept_char = ""
		this.ctrl.memory59.currency_format = ""
		this.ctrl.memory59.data_scale = ""
		this.ctrl.memory59.binding_name = "TRAN_ID"
		this.ctrl.memory59.hide_label = false
		this.ctrl.memory59.depends_on = ""
		this.ctrl.memory59.placeholder = ""
		this.ctrl.memory59.dynamic_param = ""
		this.ctrl.memory59.style_code = ""
		this.ctrl.memory59.data_source = ""
		this.ctrl.memory59.image_association = ""
		this.ctrl.memory59.show = true
		this.ctrl.memory59.sub_content = ""
		this.ctrl.memory59.required = false
		this.ctrl.memory59.vld_rules = []
		this.ctrl.memory59.targetcolumn_lower = "memory59"
		this.ctrl.memory59.disabled = false
		this.ctrl.memory59.view_name = "f_npss_merch_verify_srch"
		this.ctrl.memory59.ctrl_id = "npss_merch_verify_srch_memory59"
		this.ctrl.npss_merch_verify_srch_memory59 = {}
		this.ctrl.npss_merch_verify_srch_memory59.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_acct_no
		this.ctrl.dbtr_acct_no = {}
		this.ctrl.dbtr_acct_no.id = "RN01CN1001"
		this.ctrl.dbtr_acct_no.desc = "Dr Account No"
		this.ctrl.dbtr_acct_no.visible = true
		this.ctrl.dbtr_acct_no.label_name = "Dr Account No"
		this.ctrl.dbtr_acct_no.df_code = "DF_1304_1665386831744"
		this.ctrl.dbtr_acct_no.df_description = "Column Group 2"
		this.ctrl.dbtr_acct_no.uictrl_code = "TXT"
		this.ctrl.dbtr_acct_no.target_column = "DBTR_ACCT_NO"
		this.ctrl.dbtr_acct_no.data_type = "TEXT"
		this.ctrl.dbtr_acct_no.data_length = 20
		this.ctrl.dbtr_acct_no.zone_df_code = "DF_1304_1665386831744"
		this.ctrl.dbtr_acct_no.default_value = ""
		this.ctrl.dbtr_acct_no.is_memory_ctrl = ""
		this.ctrl.dbtr_acct_no.field_coordinates = ""
		this.ctrl.dbtr_acct_no.sub_details = ""
		this.ctrl.dbtr_acct_no.accept_char = ""
		this.ctrl.dbtr_acct_no.currency_format = ""
		this.ctrl.dbtr_acct_no.data_scale = ""
		this.ctrl.dbtr_acct_no.binding_name = "DBTR_ACCT_NO"
		this.ctrl.dbtr_acct_no.hide_label = false
		this.ctrl.dbtr_acct_no.depends_on = ""
		this.ctrl.dbtr_acct_no.placeholder = ""
		this.ctrl.dbtr_acct_no.dynamic_param = ""
		this.ctrl.dbtr_acct_no.style_code = ""
		this.ctrl.dbtr_acct_no.data_source = ""
		this.ctrl.dbtr_acct_no.image_association = ""
		this.ctrl.dbtr_acct_no.show = true
		this.ctrl.dbtr_acct_no.sub_content = ""
		this.ctrl.dbtr_acct_no.required = false
		this.ctrl.dbtr_acct_no.vld_rules = []
		this.ctrl.dbtr_acct_no.targetcolumn_lower = "dbtr_acct_no"
		this.ctrl.dbtr_acct_no.disabled = false
		this.ctrl.dbtr_acct_no.view_name = "f_npss_merch_verify_srch"
		this.ctrl.dbtr_acct_no.ctrl_id = "npss_merch_verify_srch_dbtr_acct_no"
		this.ctrl.npss_merch_verify_srch_dbtr_acct_no = {}
		this.ctrl.npss_merch_verify_srch_dbtr_acct_no.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_acct_no
		this.ctrl.cdtr_acct_no = {}
		this.ctrl.cdtr_acct_no.id = "RN01CN2"
		this.ctrl.cdtr_acct_no.desc = "Cr Account No"
		this.ctrl.cdtr_acct_no.visible = true
		this.ctrl.cdtr_acct_no.label_name = "Cr Account No"
		this.ctrl.cdtr_acct_no.df_code = "DF_1304_1665386831744"
		this.ctrl.cdtr_acct_no.df_description = "Column Group 2"
		this.ctrl.cdtr_acct_no.uictrl_code = "TXT"
		this.ctrl.cdtr_acct_no.target_column = "CDTR_ACCT_NO"
		this.ctrl.cdtr_acct_no.data_type = "TEXT"
		this.ctrl.cdtr_acct_no.data_length = 20
		this.ctrl.cdtr_acct_no.zone_df_code = "DF_1304_1665386831744"
		this.ctrl.cdtr_acct_no.default_value = ""
		this.ctrl.cdtr_acct_no.is_memory_ctrl = ""
		this.ctrl.cdtr_acct_no.field_coordinates = ""
		this.ctrl.cdtr_acct_no.sub_details = ""
		this.ctrl.cdtr_acct_no.accept_char = ""
		this.ctrl.cdtr_acct_no.currency_format = ""
		this.ctrl.cdtr_acct_no.data_scale = ""
		this.ctrl.cdtr_acct_no.binding_name = "CDTR_ACCT_NO"
		this.ctrl.cdtr_acct_no.hide_label = false
		this.ctrl.cdtr_acct_no.depends_on = ""
		this.ctrl.cdtr_acct_no.placeholder = ""
		this.ctrl.cdtr_acct_no.dynamic_param = ""
		this.ctrl.cdtr_acct_no.style_code = ""
		this.ctrl.cdtr_acct_no.data_source = ""
		this.ctrl.cdtr_acct_no.image_association = ""
		this.ctrl.cdtr_acct_no.show = true
		this.ctrl.cdtr_acct_no.sub_content = ""
		this.ctrl.cdtr_acct_no.required = false
		this.ctrl.cdtr_acct_no.vld_rules = []
		this.ctrl.cdtr_acct_no.targetcolumn_lower = "cdtr_acct_no"
		this.ctrl.cdtr_acct_no.disabled = false
		this.ctrl.cdtr_acct_no.view_name = "f_npss_merch_verify_srch"
		this.ctrl.cdtr_acct_no.ctrl_id = "npss_merch_verify_srch_cdtr_acct_no"
		this.ctrl.npss_merch_verify_srch_cdtr_acct_no = {}
		this.ctrl.npss_merch_verify_srch_cdtr_acct_no.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_pmt_type
		this.ctrl.cdtr_pmt_type = {}
		this.ctrl.cdtr_pmt_type.id = "RN01CN3"
		this.ctrl.cdtr_pmt_type.desc = "Payment Type"
		this.ctrl.cdtr_pmt_type.visible = true
		this.ctrl.cdtr_pmt_type.label_name = "Payment Type"
		this.ctrl.cdtr_pmt_type.df_code = "DF_1304_1665386831744"
		this.ctrl.cdtr_pmt_type.df_description = "Column Group 2"
		this.ctrl.cdtr_pmt_type.uictrl_code = "TXT"
		this.ctrl.cdtr_pmt_type.target_column = "CDTR_PMT_TYPE"
		this.ctrl.cdtr_pmt_type.data_type = "TEXT"
		this.ctrl.cdtr_pmt_type.data_length = 64
		this.ctrl.cdtr_pmt_type.zone_df_code = "DF_1304_1665386831744"
		this.ctrl.cdtr_pmt_type.default_value = ""
		this.ctrl.cdtr_pmt_type.is_memory_ctrl = ""
		this.ctrl.cdtr_pmt_type.field_coordinates = ""
		this.ctrl.cdtr_pmt_type.sub_details = ""
		this.ctrl.cdtr_pmt_type.accept_char = ""
		this.ctrl.cdtr_pmt_type.currency_format = ""
		this.ctrl.cdtr_pmt_type.data_scale = ""
		this.ctrl.cdtr_pmt_type.binding_name = "CDTR_PMT_TYPE"
		this.ctrl.cdtr_pmt_type.hide_label = false
		this.ctrl.cdtr_pmt_type.depends_on = ""
		this.ctrl.cdtr_pmt_type.placeholder = ""
		this.ctrl.cdtr_pmt_type.dynamic_param = ""
		this.ctrl.cdtr_pmt_type.style_code = ""
		this.ctrl.cdtr_pmt_type.data_source = ""
		this.ctrl.cdtr_pmt_type.image_association = ""
		this.ctrl.cdtr_pmt_type.show = true
		this.ctrl.cdtr_pmt_type.sub_content = ""
		this.ctrl.cdtr_pmt_type.required = false
		this.ctrl.cdtr_pmt_type.vld_rules = []
		this.ctrl.cdtr_pmt_type.targetcolumn_lower = "cdtr_pmt_type"
		this.ctrl.cdtr_pmt_type.disabled = false
		this.ctrl.cdtr_pmt_type.view_name = "f_npss_merch_verify_srch"
		this.ctrl.cdtr_pmt_type.ctrl_id = "npss_merch_verify_srch_cdtr_pmt_type"
		this.ctrl.npss_merch_verify_srch_cdtr_pmt_type = {}
		this.ctrl.npss_merch_verify_srch_cdtr_pmt_type.onChangecomponent = new EventEmitter<any>()
	
		//Properties of intrbk_sttlm_amnt
		this.ctrl.intrbk_sttlm_amnt = {}
		this.ctrl.intrbk_sttlm_amnt.id = "RN11CN4"
		this.ctrl.intrbk_sttlm_amnt.desc = "Amount"
		this.ctrl.intrbk_sttlm_amnt.visible = true
		this.ctrl.intrbk_sttlm_amnt.label_name = "Amount"
		this.ctrl.intrbk_sttlm_amnt.df_code = "DF_1304_1665386831744"
		this.ctrl.intrbk_sttlm_amnt.df_description = "Column Group 2"
		this.ctrl.intrbk_sttlm_amnt.uictrl_code = "CDN_CUR_CTRL"
		this.ctrl.intrbk_sttlm_amnt.target_column = "INTRBK_STTLM_AMNT"
		this.ctrl.intrbk_sttlm_amnt.data_type = "NUMBER"
		this.ctrl.intrbk_sttlm_amnt.data_length = 19
		this.ctrl.intrbk_sttlm_amnt.zone_df_code = "DF_1304_1665386831744"
		this.ctrl.intrbk_sttlm_amnt.default_value = ""
		this.ctrl.intrbk_sttlm_amnt.is_memory_ctrl = ""
		this.ctrl.intrbk_sttlm_amnt.field_coordinates = ""
		this.ctrl.intrbk_sttlm_amnt.sub_details = ""
		this.ctrl.intrbk_sttlm_amnt.accept_char = ""
		this.ctrl.intrbk_sttlm_amnt.currency_format = ""
		this.ctrl.intrbk_sttlm_amnt.data_scale = "2"
		this.ctrl.intrbk_sttlm_amnt.binding_name = "INTRBK_STTLM_AMNT"
		this.ctrl.intrbk_sttlm_amnt.hide_label = false
		this.ctrl.intrbk_sttlm_amnt.depends_on = ""
		this.ctrl.intrbk_sttlm_amnt.placeholder = ""
		this.ctrl.intrbk_sttlm_amnt.dynamic_param = ""
		this.ctrl.intrbk_sttlm_amnt.style_code = ""
		this.ctrl.intrbk_sttlm_amnt.data_source = ""
		this.ctrl.intrbk_sttlm_amnt.image_association = ""
		this.ctrl.intrbk_sttlm_amnt.show = true
		this.ctrl.intrbk_sttlm_amnt.sub_content = ""
		this.ctrl.intrbk_sttlm_amnt.required = false
		this.ctrl.intrbk_sttlm_amnt.vld_rules = []
		this.ctrl.intrbk_sttlm_amnt.targetcolumn_lower = "intrbk_sttlm_amnt"
		this.ctrl.intrbk_sttlm_amnt.disabled = false
		this.ctrl.intrbk_sttlm_amnt.view_name = "f_npss_merch_verify_srch"
		this.ctrl.intrbk_sttlm_amnt.ctrl_id = "npss_merch_verify_srch_intrbk_sttlm_amnt"
		this.ctrl.npss_merch_verify_srch_intrbk_sttlm_amnt = {}
		this.ctrl.npss_merch_verify_srch_intrbk_sttlm_amnt.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory58
		this.ctrl.memory58 = {}
		this.ctrl.memory58.id = "RN11CN5"
		this.ctrl.memory58.desc = "Created Date"
		this.ctrl.memory58.visible = true
		this.ctrl.memory58.label_name = "Created Date"
		this.ctrl.memory58.df_code = "DF_1304_1665386831744"
		this.ctrl.memory58.df_description = "Column Group 2"
		this.ctrl.memory58.uictrl_code = "CDN_DATE"
		this.ctrl.memory58.target_column = "memory58"
		this.ctrl.memory58.data_type = "DATETIME"
		this.ctrl.memory58.data_length = 0
		this.ctrl.memory58.zone_df_code = "DF_1304_1665386831744"
		this.ctrl.memory58.default_value = ""
		this.ctrl.memory58.is_memory_ctrl = "Y"
		this.ctrl.memory58.field_coordinates = ""
		this.ctrl.memory58.sub_details = ""
		this.ctrl.memory58.accept_char = ""
		this.ctrl.memory58.currency_format = ""
		this.ctrl.memory58.data_scale = ""
		this.ctrl.memory58.binding_name = "CREATEDDATE"
		this.ctrl.memory58.hide_label = false
		this.ctrl.memory58.depends_on = ""
		this.ctrl.memory58.placeholder = ""
		this.ctrl.memory58.dynamic_param = ""
		this.ctrl.memory58.style_code = ""
		this.ctrl.memory58.data_source = ""
		this.ctrl.memory58.image_association = ""
		this.ctrl.memory58.show = true
		this.ctrl.memory58.sub_content = ""
		this.ctrl.memory58.required = false
		this.ctrl.memory58.vld_rules = []
		this.ctrl.memory58.targetcolumn_lower = "memory58"
		this.ctrl.memory58.disabled = false
		this.ctrl.memory58.view_name = "f_npss_merch_verify_srch"
		this.ctrl.memory58.ctrl_id = "npss_merch_verify_srch_memory58"
		this.ctrl.npss_merch_verify_srch_memory58 = {}
		this.ctrl.npss_merch_verify_srch_memory58.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory56
		this.ctrl.memory56 = {}
		this.ctrl.memory56.id = "RN21CN6"
		this.ctrl.memory56.desc = "Queue"
		this.ctrl.memory56.visible = true
		this.ctrl.memory56.label_name = "Queue"
		this.ctrl.memory56.df_code = "DF_1304_1665386831744"
		this.ctrl.memory56.df_description = "Column Group 2"
		this.ctrl.memory56.uictrl_code = "CDN_CTRL"
		this.ctrl.memory56.target_column = "memory56"
		this.ctrl.memory56.data_type = "TEXT"
		this.ctrl.memory56.data_length = 64
		this.ctrl.memory56.zone_df_code = "DF_1304_1665386831744"
		this.ctrl.memory56.default_value = ""
		this.ctrl.memory56.is_memory_ctrl = "Y"
		this.ctrl.memory56.field_coordinates = ""
		this.ctrl.memory56.sub_details = ""
		this.ctrl.memory56.accept_char = ""
		this.ctrl.memory56.currency_format = ""
		this.ctrl.memory56.data_scale = ""
		this.ctrl.memory56.binding_name = "QUEUE"
		this.ctrl.memory56.hide_label = false
		this.ctrl.memory56.depends_on = ""
		this.ctrl.memory56.placeholder = ""
		this.ctrl.memory56.dynamic_param = ""
		this.ctrl.memory56.style_code = ""
		this.ctrl.memory56.data_source = ""
		this.ctrl.memory56.image_association = ""
		this.ctrl.memory56.show = true
		this.ctrl.memory56.sub_content = ""
		this.ctrl.memory56.required = false
		this.ctrl.memory56.vld_rules = []
		this.ctrl.memory56.targetcolumn_lower = "memory56"
		this.ctrl.memory56.disabled = false
		this.ctrl.memory56.view_name = "f_npss_merch_verify_srch"
		this.ctrl.memory56.ctrl_id = "npss_merch_verify_srch_memory56"
		this.ctrl.npss_merch_verify_srch_memory56 = {}
		this.ctrl.npss_merch_verify_srch_memory56.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory57
		this.ctrl.memory57 = {}
		this.ctrl.memory57.id = "RN21CN7"
		this.ctrl.memory57.desc = "Status"
		this.ctrl.memory57.visible = true
		this.ctrl.memory57.label_name = "Status"
		this.ctrl.memory57.df_code = "DF_1304_1665386831744"
		this.ctrl.memory57.df_description = "Column Group 2"
		this.ctrl.memory57.uictrl_code = "CDN_CTRL"
		this.ctrl.memory57.target_column = "memory57"
		this.ctrl.memory57.data_type = "TEXT"
		this.ctrl.memory57.data_length = 64
		this.ctrl.memory57.zone_df_code = "DF_1304_1665386831744"
		this.ctrl.memory57.default_value = ""
		this.ctrl.memory57.is_memory_ctrl = "Y"
		this.ctrl.memory57.field_coordinates = ""
		this.ctrl.memory57.sub_details = ""
		this.ctrl.memory57.accept_char = ""
		this.ctrl.memory57.currency_format = ""
		this.ctrl.memory57.data_scale = ""
		this.ctrl.memory57.binding_name = "TRAN_STATUS"
		this.ctrl.memory57.hide_label = false
		this.ctrl.memory57.depends_on = ""
		this.ctrl.memory57.placeholder = ""
		this.ctrl.memory57.dynamic_param = ""
		this.ctrl.memory57.style_code = ""
		this.ctrl.memory57.data_source = ""
		this.ctrl.memory57.image_association = ""
		this.ctrl.memory57.show = true
		this.ctrl.memory57.sub_content = ""
		this.ctrl.memory57.required = false
		this.ctrl.memory57.vld_rules = []
		this.ctrl.memory57.targetcolumn_lower = "memory57"
		this.ctrl.memory57.disabled = false
		this.ctrl.memory57.view_name = "f_npss_merch_verify_srch"
		this.ctrl.memory57.ctrl_id = "npss_merch_verify_srch_memory57"
		this.ctrl.npss_merch_verify_srch_memory57 = {}
		this.ctrl.npss_merch_verify_srch_memory57.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_merch_verify_srch.model = {"MEMORY59":"","DBTR_ACCT_NO":"","CDTR_ACCT_NO":"","CDTR_PMT_TYPE":"","INTRBK_STTLM_AMNT":"","MEMORY58":"","MEMORY56":"","MEMORY57":""}
		this.screen_instance[this.comp_id].f_npss_merch_verify_srch.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_ACCT_NO"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_ACCT_NO"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_PMT_TYPE"},{"CTLR_CODE":"CDN_CUR_CTRL","DATA_TYPE":"NUMBER","TARGET_COLUMN":"INTRBK_STTLM_AMNT"}]
		this.screen_instance[this.comp_id].f_npss_merch_verify_srch.dt_code = "dt_1304_1665384579126"
		this.screen_instance[this.comp_id].f_npss_merch_verify_srch.dtt_code = "dtt_1304_1665386727379"
		this.screen_instance[this.comp_id].f_npss_merch_verify_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_merch_verify_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_merch_verify_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_merch_verify_srch[control][property] = value;
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
    