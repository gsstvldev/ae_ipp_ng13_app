/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27043 
Modified By     : Admin 
Modified Date   : 2022-Nov-23 13:29 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_reversal
Form Name       : NPSS RCT Reversal UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_rct_reversal_ui',
  templateUrl: './f_npss_rct_reversal_ui.component.html',
  styleUrls: ['./f_npss_rct_reversal_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_rct_reversal_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_rct_reversal_ui') form;
  @ViewChild('npss_rct_reversal_ui_value_date') element: ElementRef;
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
		this.ctrl.value_date.id = "RN01CN1"
		this.ctrl.value_date.desc = "Value Date"
		this.ctrl.value_date.visible = true
		this.ctrl.value_date.label_name = "Value Date"
		this.ctrl.value_date.df_code = "DF_1304_1665901396659"
		this.ctrl.value_date.df_description = "Column Group 1"
		this.ctrl.value_date.uictrl_code = "DTP"
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
		this.ctrl.value_date.view_name = "f_npss_rct_reversal_ui"
		this.ctrl.value_date.ctrl_id = "npss_rct_reversal_ui_value_date"
		this.ctrl.npss_rct_reversal_ui_value_date = {}
		this.ctrl.npss_rct_reversal_ui_value_date.onChangecomponent = new EventEmitter<any>()
	
		//Properties of uetr
		this.ctrl.uetr = {}
		this.ctrl.uetr.id = "RN01CN2"
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
		this.ctrl.uetr.view_name = "f_npss_rct_reversal_ui"
		this.ctrl.uetr.ctrl_id = "npss_rct_reversal_ui_uetr"
		this.ctrl.npss_rct_reversal_ui_uetr = {}
		this.ctrl.npss_rct_reversal_ui_uetr.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_iban
		this.ctrl.cdtr_iban = {}
		this.ctrl.cdtr_iban.id = "RN11CN3"
		this.ctrl.cdtr_iban.desc = "Cr IBAN"
		this.ctrl.cdtr_iban.visible = true
		this.ctrl.cdtr_iban.label_name = "Cr IBAN"
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
		this.ctrl.cdtr_iban.view_name = "f_npss_rct_reversal_ui"
		this.ctrl.cdtr_iban.ctrl_id = "npss_rct_reversal_ui_cdtr_iban"
		this.ctrl.npss_rct_reversal_ui_cdtr_iban = {}
		this.ctrl.npss_rct_reversal_ui_cdtr_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_iban
		this.ctrl.dbtr_iban = {}
		this.ctrl.dbtr_iban.id = "RN11CN4"
		this.ctrl.dbtr_iban.desc = "Dr IBAN"
		this.ctrl.dbtr_iban.visible = true
		this.ctrl.dbtr_iban.label_name = "Dr IBAN"
		this.ctrl.dbtr_iban.df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_iban.df_description = "Column Group 1"
		this.ctrl.dbtr_iban.uictrl_code = "TXT"
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
		this.ctrl.dbtr_iban.view_name = "f_npss_rct_reversal_ui"
		this.ctrl.dbtr_iban.ctrl_id = "npss_rct_reversal_ui_dbtr_iban"
		this.ctrl.npss_rct_reversal_ui_dbtr_iban = {}
		this.ctrl.npss_rct_reversal_ui_dbtr_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cr_sort_code
		this.ctrl.cr_sort_code = {}
		this.ctrl.cr_sort_code.id = "RN21CN6"
		this.ctrl.cr_sort_code.desc = "Cr Bic Code"
		this.ctrl.cr_sort_code.visible = true
		this.ctrl.cr_sort_code.label_name = "Cr Bic Code"
		this.ctrl.cr_sort_code.df_code = "DF_1304_1665901396659"
		this.ctrl.cr_sort_code.df_description = "Column Group 1"
		this.ctrl.cr_sort_code.uictrl_code = "TXT"
		this.ctrl.cr_sort_code.target_column = "CR_SORT_CODE"
		this.ctrl.cr_sort_code.data_type = "TEXT"
		this.ctrl.cr_sort_code.data_length = 11
		this.ctrl.cr_sort_code.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.cr_sort_code.default_value = ""
		this.ctrl.cr_sort_code.is_memory_ctrl = ""
		this.ctrl.cr_sort_code.field_coordinates = ""
		this.ctrl.cr_sort_code.sub_details = ""
		this.ctrl.cr_sort_code.accept_char = ""
		this.ctrl.cr_sort_code.currency_format = ""
		this.ctrl.cr_sort_code.data_scale = ""
		this.ctrl.cr_sort_code.hide_label = false
		this.ctrl.cr_sort_code.depends_on = ""
		this.ctrl.cr_sort_code.placeholder = ""
		this.ctrl.cr_sort_code.dynamic_param = ""
		this.ctrl.cr_sort_code.style_code = ""
		this.ctrl.cr_sort_code.data_source = ""
		this.ctrl.cr_sort_code.image_association = ""
		this.ctrl.cr_sort_code.show = true
		this.ctrl.cr_sort_code.sub_content = ""
		this.ctrl.cr_sort_code.required = false
		this.ctrl.cr_sort_code.vld_rules = []
		this.ctrl.cr_sort_code.targetcolumn_lower = "cr_sort_code"
		this.ctrl.cr_sort_code.disabled = false
		this.ctrl.cr_sort_code.view_name = "f_npss_rct_reversal_ui"
		this.ctrl.cr_sort_code.ctrl_id = "npss_rct_reversal_ui_cr_sort_code"
		this.ctrl.npss_rct_reversal_ui_cr_sort_code = {}
		this.ctrl.npss_rct_reversal_ui_cr_sort_code.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dr_sort_code
		this.ctrl.dr_sort_code = {}
		this.ctrl.dr_sort_code.id = "RN21CN5"
		this.ctrl.dr_sort_code.desc = "Dr Bic Code"
		this.ctrl.dr_sort_code.visible = true
		this.ctrl.dr_sort_code.label_name = "Dr Bic Code"
		this.ctrl.dr_sort_code.df_code = "DF_1304_1665901396659"
		this.ctrl.dr_sort_code.df_description = "Column Group 1"
		this.ctrl.dr_sort_code.uictrl_code = "TXT"
		this.ctrl.dr_sort_code.target_column = "DR_SORT_CODE"
		this.ctrl.dr_sort_code.data_type = "TEXT"
		this.ctrl.dr_sort_code.data_length = 11
		this.ctrl.dr_sort_code.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.dr_sort_code.default_value = ""
		this.ctrl.dr_sort_code.is_memory_ctrl = ""
		this.ctrl.dr_sort_code.field_coordinates = ""
		this.ctrl.dr_sort_code.sub_details = ""
		this.ctrl.dr_sort_code.accept_char = ""
		this.ctrl.dr_sort_code.currency_format = ""
		this.ctrl.dr_sort_code.data_scale = ""
		this.ctrl.dr_sort_code.hide_label = false
		this.ctrl.dr_sort_code.depends_on = ""
		this.ctrl.dr_sort_code.placeholder = ""
		this.ctrl.dr_sort_code.dynamic_param = ""
		this.ctrl.dr_sort_code.style_code = ""
		this.ctrl.dr_sort_code.data_source = ""
		this.ctrl.dr_sort_code.image_association = ""
		this.ctrl.dr_sort_code.show = true
		this.ctrl.dr_sort_code.sub_content = ""
		this.ctrl.dr_sort_code.required = false
		this.ctrl.dr_sort_code.vld_rules = []
		this.ctrl.dr_sort_code.targetcolumn_lower = "dr_sort_code"
		this.ctrl.dr_sort_code.disabled = false
		this.ctrl.dr_sort_code.view_name = "f_npss_rct_reversal_ui"
		this.ctrl.dr_sort_code.ctrl_id = "npss_rct_reversal_ui_dr_sort_code"
		this.ctrl.npss_rct_reversal_ui_dr_sort_code = {}
		this.ctrl.npss_rct_reversal_ui_dr_sort_code.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_phone_no
		this.ctrl.cdtr_phone_no = {}
		this.ctrl.cdtr_phone_no.id = "RN31CN7"
		this.ctrl.cdtr_phone_no.desc = "Cr Phone No"
		this.ctrl.cdtr_phone_no.visible = true
		this.ctrl.cdtr_phone_no.label_name = "Cr Phone No"
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
		this.ctrl.cdtr_phone_no.view_name = "f_npss_rct_reversal_ui"
		this.ctrl.cdtr_phone_no.ctrl_id = "npss_rct_reversal_ui_cdtr_phone_no"
		this.ctrl.npss_rct_reversal_ui_cdtr_phone_no = {}
		this.ctrl.npss_rct_reversal_ui_cdtr_phone_no.onChangecomponent = new EventEmitter<any>()
	
		//Properties of intrbk_sttlm_amnt
		this.ctrl.intrbk_sttlm_amnt = {}
		this.ctrl.intrbk_sttlm_amnt.id = "RN31CN8"
		this.ctrl.intrbk_sttlm_amnt.desc = "Amount"
		this.ctrl.intrbk_sttlm_amnt.visible = true
		this.ctrl.intrbk_sttlm_amnt.label_name = "Amount"
		this.ctrl.intrbk_sttlm_amnt.df_code = "DF_1304_1665901396659"
		this.ctrl.intrbk_sttlm_amnt.df_description = "Column Group 1"
		this.ctrl.intrbk_sttlm_amnt.uictrl_code = "CUR"
		this.ctrl.intrbk_sttlm_amnt.target_column = "INTRBK_STTLM_AMNT"
		this.ctrl.intrbk_sttlm_amnt.data_type = "NUMBER"
		this.ctrl.intrbk_sttlm_amnt.data_length = 19
		this.ctrl.intrbk_sttlm_amnt.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.intrbk_sttlm_amnt.default_value = ""
		this.ctrl.intrbk_sttlm_amnt.is_memory_ctrl = ""
		this.ctrl.intrbk_sttlm_amnt.field_coordinates = ""
		this.ctrl.intrbk_sttlm_amnt.sub_details = ""
		this.ctrl.intrbk_sttlm_amnt.accept_char = ""
		this.ctrl.intrbk_sttlm_amnt.currency_format = ""
		this.ctrl.intrbk_sttlm_amnt.data_scale = "2"
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
		this.ctrl.intrbk_sttlm_amnt.view_name = "f_npss_rct_reversal_ui"
		this.ctrl.intrbk_sttlm_amnt.ctrl_id = "npss_rct_reversal_ui_intrbk_sttlm_amnt"
		this.ctrl.npss_rct_reversal_ui_intrbk_sttlm_amnt = {}
		this.ctrl.npss_rct_reversal_ui_intrbk_sttlm_amnt.onChangecomponent = new EventEmitter<any>()
	
		//Properties of tran_ref_id
		this.ctrl.tran_ref_id = {}
		this.ctrl.tran_ref_id.id = "RN41CN9"
		this.ctrl.tran_ref_id.desc = "Tran Ref ID"
		this.ctrl.tran_ref_id.visible = false
		this.ctrl.tran_ref_id.label_name = "Tran Ref ID"
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
		this.ctrl.tran_ref_id.view_name = "f_npss_rct_reversal_ui"
		this.ctrl.tran_ref_id.ctrl_id = "npss_rct_reversal_ui_tran_ref_id"
		this.ctrl.npss_rct_reversal_ui_tran_ref_id = {}
		this.ctrl.npss_rct_reversal_ui_tran_ref_id.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_rct_reversal_ui.model = {"VALUE_DATE":"","UETR":"","CDTR_IBAN":"","DBTR_IBAN":"","CR_SORT_CODE":"","DR_SORT_CODE":"","CDTR_PHONE_NO":"","INTRBK_STTLM_AMNT":"","TRAN_REF_ID":""}
		this.screen_instance[this.comp_id].f_npss_rct_reversal_ui.Meta = [{"CTLR_CODE":"DTP","DATA_TYPE":"DATETIME","TARGET_COLUMN":"VALUE_DATE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"UETR"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_IBAN"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_IBAN"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CR_SORT_CODE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DR_SORT_CODE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_PHONE_NO"},{"CTLR_CODE":"CUR","DATA_TYPE":"NUMBER","TARGET_COLUMN":"INTRBK_STTLM_AMNT"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"TRAN_REF_ID"}]
		this.screen_instance[this.comp_id].f_npss_rct_reversal_ui.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_rct_reversal_ui.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_rct_reversal_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_rct_reversal_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_rct_reversal_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_rct_reversal_ui[control][property] = value;
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
    