/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27873 
Modified By     : Admin 
Modified Date   : 2023-Jan-19 7:37 AM 
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
	
		//Properties of cr_acct_identification
		this.ctrl.cr_acct_identification = {}
		this.ctrl.cr_acct_identification.id = "RN01CN13"
		this.ctrl.cr_acct_identification.desc = "Cr Account Identifiction"
		this.ctrl.cr_acct_identification.visible = true
		this.ctrl.cr_acct_identification.label_name = "Cr Account Identifiction"
		this.ctrl.cr_acct_identification.df_code = "DF_1304_1665901396659"
		this.ctrl.cr_acct_identification.df_description = "Column Group 1"
		this.ctrl.cr_acct_identification.uictrl_code = "TXT"
		this.ctrl.cr_acct_identification.target_column = "CR_ACCT_IDENTIFICATION"
		this.ctrl.cr_acct_identification.data_type = "TEXT"
		this.ctrl.cr_acct_identification.data_length = 512
		this.ctrl.cr_acct_identification.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.cr_acct_identification.default_value = ""
		this.ctrl.cr_acct_identification.is_memory_ctrl = ""
		this.ctrl.cr_acct_identification.field_coordinates = ""
		this.ctrl.cr_acct_identification.sub_details = ""
		this.ctrl.cr_acct_identification.accept_char = ""
		this.ctrl.cr_acct_identification.currency_format = ""
		this.ctrl.cr_acct_identification.data_scale = ""
		this.ctrl.cr_acct_identification.hide_label = false
		this.ctrl.cr_acct_identification.depends_on = ""
		this.ctrl.cr_acct_identification.placeholder = ""
		this.ctrl.cr_acct_identification.dynamic_param = ""
		this.ctrl.cr_acct_identification.style_code = ""
		this.ctrl.cr_acct_identification.data_source = ""
		this.ctrl.cr_acct_identification.image_association = ""
		this.ctrl.cr_acct_identification.show = true
		this.ctrl.cr_acct_identification.sub_content = ""
		this.ctrl.cr_acct_identification.required = false
		this.ctrl.cr_acct_identification.vld_rules = []
		this.ctrl.cr_acct_identification.targetcolumn_lower = "cr_acct_identification"
		this.ctrl.cr_acct_identification.disabled = false
		this.ctrl.cr_acct_identification.view_name = "f_npss_rct_reversal_ui"
		this.ctrl.cr_acct_identification.ctrl_id = "npss_rct_reversal_ui_cr_acct_identification"
		this.ctrl.npss_rct_reversal_ui_cr_acct_identification = {}
		this.ctrl.npss_rct_reversal_ui_cr_acct_identification.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory96
		this.ctrl.memory96 = {}
		this.ctrl.memory96.id = "RN01CN13001"
		this.ctrl.memory96.desc = "Cr Account No"
		this.ctrl.memory96.visible = true
		this.ctrl.memory96.label_name = "Cr Account No"
		this.ctrl.memory96.df_code = "DF_1304_1665901396659"
		this.ctrl.memory96.df_description = "Column Group 1"
		this.ctrl.memory96.uictrl_code = "TXT"
		this.ctrl.memory96.target_column = "memory96"
		this.ctrl.memory96.data_type = "TEXT"
		this.ctrl.memory96.data_length = 0
		this.ctrl.memory96.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory96.default_value = ""
		this.ctrl.memory96.is_memory_ctrl = "Y"
		this.ctrl.memory96.field_coordinates = ""
		this.ctrl.memory96.sub_details = ""
		this.ctrl.memory96.accept_char = ""
		this.ctrl.memory96.currency_format = ""
		this.ctrl.memory96.data_scale = ""
		this.ctrl.memory96.hide_label = false
		this.ctrl.memory96.depends_on = ""
		this.ctrl.memory96.placeholder = ""
		this.ctrl.memory96.dynamic_param = ""
		this.ctrl.memory96.style_code = ""
		this.ctrl.memory96.data_source = ""
		this.ctrl.memory96.image_association = ""
		this.ctrl.memory96.show = true
		this.ctrl.memory96.sub_content = ""
		this.ctrl.memory96.required = false
		this.ctrl.memory96.vld_rules = []
		this.ctrl.memory96.targetcolumn_lower = "memory96"
		this.ctrl.memory96.disabled = false
		this.ctrl.memory96.view_name = "f_npss_rct_reversal_ui"
		this.ctrl.memory96.ctrl_id = "npss_rct_reversal_ui_memory96"
		this.ctrl.npss_rct_reversal_ui_memory96 = {}
		this.ctrl.npss_rct_reversal_ui_memory96.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_acct_name
		this.ctrl.cdtr_acct_name = {}
		this.ctrl.cdtr_acct_name.id = "RN31CN11"
		this.ctrl.cdtr_acct_name.desc = "Cr Name"
		this.ctrl.cdtr_acct_name.visible = true
		this.ctrl.cdtr_acct_name.label_name = "Cr Name"
		this.ctrl.cdtr_acct_name.df_code = "DF_1304_1665901396659"
		this.ctrl.cdtr_acct_name.df_description = "Column Group 1"
		this.ctrl.cdtr_acct_name.uictrl_code = "TXT"
		this.ctrl.cdtr_acct_name.target_column = "CDTR_ACCT_NAME"
		this.ctrl.cdtr_acct_name.data_type = "TEXT"
		this.ctrl.cdtr_acct_name.data_length = 100
		this.ctrl.cdtr_acct_name.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.cdtr_acct_name.default_value = ""
		this.ctrl.cdtr_acct_name.is_memory_ctrl = ""
		this.ctrl.cdtr_acct_name.field_coordinates = ""
		this.ctrl.cdtr_acct_name.sub_details = ""
		this.ctrl.cdtr_acct_name.accept_char = ""
		this.ctrl.cdtr_acct_name.currency_format = ""
		this.ctrl.cdtr_acct_name.data_scale = ""
		this.ctrl.cdtr_acct_name.hide_label = false
		this.ctrl.cdtr_acct_name.depends_on = ""
		this.ctrl.cdtr_acct_name.placeholder = ""
		this.ctrl.cdtr_acct_name.dynamic_param = ""
		this.ctrl.cdtr_acct_name.style_code = ""
		this.ctrl.cdtr_acct_name.data_source = ""
		this.ctrl.cdtr_acct_name.image_association = ""
		this.ctrl.cdtr_acct_name.show = true
		this.ctrl.cdtr_acct_name.sub_content = ""
		this.ctrl.cdtr_acct_name.required = false
		this.ctrl.cdtr_acct_name.vld_rules = []
		this.ctrl.cdtr_acct_name.targetcolumn_lower = "cdtr_acct_name"
		this.ctrl.cdtr_acct_name.disabled = false
		this.ctrl.cdtr_acct_name.view_name = "f_npss_rct_reversal_ui"
		this.ctrl.cdtr_acct_name.ctrl_id = "npss_rct_reversal_ui_cdtr_acct_name"
		this.ctrl.npss_rct_reversal_ui_cdtr_acct_name = {}
		this.ctrl.npss_rct_reversal_ui_cdtr_acct_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of clrsysref
		this.ctrl.clrsysref = {}
		this.ctrl.clrsysref.id = "RN31CN12"
		this.ctrl.clrsysref.desc = "Clr Ref No"
		this.ctrl.clrsysref.visible = true
		this.ctrl.clrsysref.label_name = "Clr Ref No"
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
		this.ctrl.clrsysref.view_name = "f_npss_rct_reversal_ui"
		this.ctrl.clrsysref.ctrl_id = "npss_rct_reversal_ui_clrsysref"
		this.ctrl.npss_rct_reversal_ui_clrsysref = {}
		this.ctrl.npss_rct_reversal_ui_clrsysref.onChangecomponent = new EventEmitter<any>()
	
		//Properties of payment_endtoend_id
		this.ctrl.payment_endtoend_id = {}
		this.ctrl.payment_endtoend_id.id = "RN31CN13"
		this.ctrl.payment_endtoend_id.desc = "End to End Ref No"
		this.ctrl.payment_endtoend_id.visible = true
		this.ctrl.payment_endtoend_id.label_name = "End to End Ref No"
		this.ctrl.payment_endtoend_id.df_code = "DF_1304_1665901396659"
		this.ctrl.payment_endtoend_id.df_description = "Column Group 1"
		this.ctrl.payment_endtoend_id.uictrl_code = "TXT"
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
		this.ctrl.payment_endtoend_id.view_name = "f_npss_rct_reversal_ui"
		this.ctrl.payment_endtoend_id.ctrl_id = "npss_rct_reversal_ui_payment_endtoend_id"
		this.ctrl.npss_rct_reversal_ui_payment_endtoend_id = {}
		this.ctrl.npss_rct_reversal_ui_payment_endtoend_id.onChangecomponent = new EventEmitter<any>()
	
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
	
		//Properties of dbtr_iban
		this.ctrl.dbtr_iban = {}
		this.ctrl.dbtr_iban.id = "RN11CN4"
		this.ctrl.dbtr_iban.desc = "Dr Account No"
		this.ctrl.dbtr_iban.visible = true
		this.ctrl.dbtr_iban.label_name = "Dr Account No"
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
	
		//Properties of dbtr_acct_name
		this.ctrl.dbtr_acct_name = {}
		this.ctrl.dbtr_acct_name.id = "RN21CN5"
		this.ctrl.dbtr_acct_name.desc = "Dr Account Name"
		this.ctrl.dbtr_acct_name.visible = true
		this.ctrl.dbtr_acct_name.label_name = "Dr Account Name"
		this.ctrl.dbtr_acct_name.df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_acct_name.df_description = "Column Group 1"
		this.ctrl.dbtr_acct_name.uictrl_code = "TXT"
		this.ctrl.dbtr_acct_name.target_column = "DBTR_ACCT_NAME"
		this.ctrl.dbtr_acct_name.data_type = "TEXT"
		this.ctrl.dbtr_acct_name.data_length = 128
		this.ctrl.dbtr_acct_name.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_acct_name.default_value = ""
		this.ctrl.dbtr_acct_name.is_memory_ctrl = ""
		this.ctrl.dbtr_acct_name.field_coordinates = ""
		this.ctrl.dbtr_acct_name.sub_details = ""
		this.ctrl.dbtr_acct_name.accept_char = ""
		this.ctrl.dbtr_acct_name.currency_format = ""
		this.ctrl.dbtr_acct_name.data_scale = ""
		this.ctrl.dbtr_acct_name.hide_label = false
		this.ctrl.dbtr_acct_name.depends_on = ""
		this.ctrl.dbtr_acct_name.placeholder = ""
		this.ctrl.dbtr_acct_name.dynamic_param = ""
		this.ctrl.dbtr_acct_name.style_code = ""
		this.ctrl.dbtr_acct_name.data_source = ""
		this.ctrl.dbtr_acct_name.image_association = ""
		this.ctrl.dbtr_acct_name.show = true
		this.ctrl.dbtr_acct_name.sub_content = ""
		this.ctrl.dbtr_acct_name.required = false
		this.ctrl.dbtr_acct_name.vld_rules = []
		this.ctrl.dbtr_acct_name.targetcolumn_lower = "dbtr_acct_name"
		this.ctrl.dbtr_acct_name.disabled = false
		this.ctrl.dbtr_acct_name.view_name = "f_npss_rct_reversal_ui"
		this.ctrl.dbtr_acct_name.ctrl_id = "npss_rct_reversal_ui_dbtr_acct_name"
		this.ctrl.npss_rct_reversal_ui_dbtr_acct_name = {}
		this.ctrl.npss_rct_reversal_ui_dbtr_acct_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of intrbk_sttlm_cur
		this.ctrl.intrbk_sttlm_cur = {}
		this.ctrl.intrbk_sttlm_cur.id = "RN21CN6"
		this.ctrl.intrbk_sttlm_cur.desc = "Dr Account Currency"
		this.ctrl.intrbk_sttlm_cur.visible = true
		this.ctrl.intrbk_sttlm_cur.label_name = "Dr Account Currency"
		this.ctrl.intrbk_sttlm_cur.df_code = "DF_1304_1665901396659"
		this.ctrl.intrbk_sttlm_cur.df_description = "Column Group 1"
		this.ctrl.intrbk_sttlm_cur.uictrl_code = "TXT"
		this.ctrl.intrbk_sttlm_cur.target_column = "INTRBK_STTLM_CUR"
		this.ctrl.intrbk_sttlm_cur.data_type = "TEXT"
		this.ctrl.intrbk_sttlm_cur.data_length = 3
		this.ctrl.intrbk_sttlm_cur.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.intrbk_sttlm_cur.default_value = ""
		this.ctrl.intrbk_sttlm_cur.is_memory_ctrl = ""
		this.ctrl.intrbk_sttlm_cur.field_coordinates = ""
		this.ctrl.intrbk_sttlm_cur.sub_details = ""
		this.ctrl.intrbk_sttlm_cur.accept_char = ""
		this.ctrl.intrbk_sttlm_cur.currency_format = ""
		this.ctrl.intrbk_sttlm_cur.data_scale = ""
		this.ctrl.intrbk_sttlm_cur.hide_label = false
		this.ctrl.intrbk_sttlm_cur.depends_on = ""
		this.ctrl.intrbk_sttlm_cur.placeholder = ""
		this.ctrl.intrbk_sttlm_cur.dynamic_param = ""
		this.ctrl.intrbk_sttlm_cur.style_code = ""
		this.ctrl.intrbk_sttlm_cur.data_source = ""
		this.ctrl.intrbk_sttlm_cur.image_association = ""
		this.ctrl.intrbk_sttlm_cur.show = true
		this.ctrl.intrbk_sttlm_cur.sub_content = ""
		this.ctrl.intrbk_sttlm_cur.required = false
		this.ctrl.intrbk_sttlm_cur.vld_rules = []
		this.ctrl.intrbk_sttlm_cur.targetcolumn_lower = "intrbk_sttlm_cur"
		this.ctrl.intrbk_sttlm_cur.disabled = false
		this.ctrl.intrbk_sttlm_cur.view_name = "f_npss_rct_reversal_ui"
		this.ctrl.intrbk_sttlm_cur.ctrl_id = "npss_rct_reversal_ui_intrbk_sttlm_cur"
		this.ctrl.npss_rct_reversal_ui_intrbk_sttlm_cur = {}
		this.ctrl.npss_rct_reversal_ui_intrbk_sttlm_cur.onChangecomponent = new EventEmitter<any>()
	
		//Properties of intrbk_sttlm_amnt
		this.ctrl.intrbk_sttlm_amnt = {}
		this.ctrl.intrbk_sttlm_amnt.id = "RN31CN8"
		this.ctrl.intrbk_sttlm_amnt.desc = "Inward Amount"
		this.ctrl.intrbk_sttlm_amnt.visible = true
		this.ctrl.intrbk_sttlm_amnt.label_name = "Inward Amount"
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
		this.screen_instance[this.comp_id].f_npss_rct_reversal_ui.model = {"VALUE_DATE":"","CDTR_IBAN":"","CR_ACCT_IDENTIFICATION":"","MEMORY96":"","CDTR_ACCT_NAME":"","CLRSYSREF":"","PAYMENT_ENDTOEND_ID":"","UETR":"","DBTR_IBAN":"","DBTR_ACCT_NAME":"","INTRBK_STTLM_CUR":"","INTRBK_STTLM_AMNT":""}
		this.screen_instance[this.comp_id].f_npss_rct_reversal_ui.Meta = [{"CTLR_CODE":"DTP","DATA_TYPE":"DATETIME","TARGET_COLUMN":"VALUE_DATE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_IBAN"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CR_ACCT_IDENTIFICATION"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_ACCT_NAME"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CLRSYSREF"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"PAYMENT_ENDTOEND_ID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"UETR"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_IBAN"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_ACCT_NAME"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"INTRBK_STTLM_CUR"},{"CTLR_CODE":"CUR","DATA_TYPE":"NUMBER","TARGET_COLUMN":"INTRBK_STTLM_AMNT"}]
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
    