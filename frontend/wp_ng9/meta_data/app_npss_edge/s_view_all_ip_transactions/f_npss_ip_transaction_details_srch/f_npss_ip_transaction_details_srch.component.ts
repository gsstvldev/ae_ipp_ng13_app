/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35310 
Modified By     : Admin 
Modified Date   : 2024-May-02 11:30 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_all_ip_transactions
Form Name       : NPSS IP Transaction Details SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_ip_transaction_details_srch',
  templateUrl: './f_npss_ip_transaction_details_srch.component.html',
  styleUrls: ['./f_npss_ip_transaction_details_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_ip_transaction_details_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_ip_transaction_details_srch') form;
  @ViewChild('npss_ip_transaction_details_srch_value_date') element: ElementRef;
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
		this.ctrl.value_date.uictrl_code = "CDN_DATE"
		this.ctrl.value_date.target_column = "VALUE_DATE"
		this.ctrl.value_date.data_type = "DATETIME"
		this.ctrl.value_date.data_length = 0
		this.ctrl.value_date.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.value_date.default_value = "setcurrentdate(),{}"
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
		this.ctrl.value_date.view_name = "f_npss_ip_transaction_details_srch"
		this.ctrl.value_date.ctrl_id = "npss_ip_transaction_details_srch_value_date"
		this.ctrl.npss_ip_transaction_details_srch_value_date = {}
		this.ctrl.npss_ip_transaction_details_srch_value_date.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory63
		this.ctrl.memory63 = {}
		this.ctrl.memory63.id = "RN01CN2"
		this.ctrl.memory63.desc = "Created Date"
		this.ctrl.memory63.visible = true
		this.ctrl.memory63.label_name = "Created Date"
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
		this.ctrl.memory63.view_name = "f_npss_ip_transaction_details_srch"
		this.ctrl.memory63.ctrl_id = "npss_ip_transaction_details_srch_memory63"
		this.ctrl.npss_ip_transaction_details_srch_memory63 = {}
		this.ctrl.npss_ip_transaction_details_srch_memory63.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_iban
		this.ctrl.cdtr_iban = {}
		this.ctrl.cdtr_iban.id = "RN11CN3"
		this.ctrl.cdtr_iban.desc = "Cr IBAN"
		this.ctrl.cdtr_iban.visible = true
		this.ctrl.cdtr_iban.label_name = "Cr IBAN"
		this.ctrl.cdtr_iban.df_code = "DF_1304_1665901396659"
		this.ctrl.cdtr_iban.df_description = "Column Group 1"
		this.ctrl.cdtr_iban.uictrl_code = "CDN_CTRL"
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
		this.ctrl.cdtr_iban.view_name = "f_npss_ip_transaction_details_srch"
		this.ctrl.cdtr_iban.ctrl_id = "npss_ip_transaction_details_srch_cdtr_iban"
		this.ctrl.npss_ip_transaction_details_srch_cdtr_iban = {}
		this.ctrl.npss_ip_transaction_details_srch_cdtr_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cr_acct_identification
		this.ctrl.cr_acct_identification = {}
		this.ctrl.cr_acct_identification.id = "RN11CN4"
		this.ctrl.cr_acct_identification.desc = "Card Number"
		this.ctrl.cr_acct_identification.visible = true
		this.ctrl.cr_acct_identification.label_name = "Card Number"
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
		this.ctrl.cr_acct_identification.binding_name = "CR_ACCT_IDENTIFICATION"
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
		this.ctrl.cr_acct_identification.view_name = "f_npss_ip_transaction_details_srch"
		this.ctrl.cr_acct_identification.ctrl_id = "npss_ip_transaction_details_srch_cr_acct_identification"
		this.ctrl.npss_ip_transaction_details_srch_cr_acct_identification = {}
		this.ctrl.npss_ip_transaction_details_srch_cr_acct_identification.onChangecomponent = new EventEmitter<any>()
	
		//Properties of tran_ref_id
		this.ctrl.tran_ref_id = {}
		this.ctrl.tran_ref_id.id = "RN21CN7"
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
		this.ctrl.tran_ref_id.view_name = "f_npss_ip_transaction_details_srch"
		this.ctrl.tran_ref_id.ctrl_id = "npss_ip_transaction_details_srch_tran_ref_id"
		this.ctrl.npss_ip_transaction_details_srch_tran_ref_id = {}
		this.ctrl.npss_ip_transaction_details_srch_tran_ref_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of uetr
		this.ctrl.uetr = {}
		this.ctrl.uetr.id = "RN21CN6"
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
		this.ctrl.uetr.view_name = "f_npss_ip_transaction_details_srch"
		this.ctrl.uetr.ctrl_id = "npss_ip_transaction_details_srch_uetr"
		this.ctrl.npss_ip_transaction_details_srch_uetr = {}
		this.ctrl.npss_ip_transaction_details_srch_uetr.onChangecomponent = new EventEmitter<any>()
	
		//Properties of clrsysref
		this.ctrl.clrsysref = {}
		this.ctrl.clrsysref.id = "RN31CN8"
		this.ctrl.clrsysref.desc = "Clearing System Ref No"
		this.ctrl.clrsysref.visible = true
		this.ctrl.clrsysref.label_name = "Clearing System Ref No"
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
		this.ctrl.clrsysref.view_name = "f_npss_ip_transaction_details_srch"
		this.ctrl.clrsysref.ctrl_id = "npss_ip_transaction_details_srch_clrsysref"
		this.ctrl.npss_ip_transaction_details_srch_clrsysref = {}
		this.ctrl.npss_ip_transaction_details_srch_clrsysref.onChangecomponent = new EventEmitter<any>()
	
		//Properties of payment_endtoend_id
		this.ctrl.payment_endtoend_id = {}
		this.ctrl.payment_endtoend_id.id = "RN31CN9"
		this.ctrl.payment_endtoend_id.desc = "E2E Ref ID"
		this.ctrl.payment_endtoend_id.visible = true
		this.ctrl.payment_endtoend_id.label_name = "E2E Ref ID"
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
		this.ctrl.payment_endtoend_id.view_name = "f_npss_ip_transaction_details_srch"
		this.ctrl.payment_endtoend_id.ctrl_id = "npss_ip_transaction_details_srch_payment_endtoend_id"
		this.ctrl.npss_ip_transaction_details_srch_payment_endtoend_id = {}
		this.ctrl.npss_ip_transaction_details_srch_payment_endtoend_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of intrbk_sttlm_amnt
		this.ctrl.intrbk_sttlm_amnt = {}
		this.ctrl.intrbk_sttlm_amnt.id = "RN51CN12"
		this.ctrl.intrbk_sttlm_amnt.desc = "Transaction Amount"
		this.ctrl.intrbk_sttlm_amnt.visible = true
		this.ctrl.intrbk_sttlm_amnt.label_name = "Transaction Amount"
		this.ctrl.intrbk_sttlm_amnt.df_code = "DF_1304_1665901396659"
		this.ctrl.intrbk_sttlm_amnt.df_description = "Column Group 1"
		this.ctrl.intrbk_sttlm_amnt.uictrl_code = "CDN_CUR_CTRL"
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
		this.ctrl.intrbk_sttlm_amnt.view_name = "f_npss_ip_transaction_details_srch"
		this.ctrl.intrbk_sttlm_amnt.ctrl_id = "npss_ip_transaction_details_srch_intrbk_sttlm_amnt"
		this.ctrl.npss_ip_transaction_details_srch_intrbk_sttlm_amnt = {}
		this.ctrl.npss_ip_transaction_details_srch_intrbk_sttlm_amnt.onChangecomponent = new EventEmitter<any>()
	
		//Properties of processing_system
		this.ctrl.processing_system = {}
		this.ctrl.processing_system.id = "RN51CN13"
		this.ctrl.processing_system.desc = "Processing System"
		this.ctrl.processing_system.visible = true
		this.ctrl.processing_system.label_name = "Processing System"
		this.ctrl.processing_system.df_code = "DF_1304_1665901396659"
		this.ctrl.processing_system.df_description = "Column Group 1"
		this.ctrl.processing_system.uictrl_code = "CDN_CTRL"
		this.ctrl.processing_system.target_column = "PROCESSING_SYSTEM"
		this.ctrl.processing_system.data_type = "TEXT"
		this.ctrl.processing_system.data_length = 64
		this.ctrl.processing_system.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.processing_system.default_value = ""
		this.ctrl.processing_system.is_memory_ctrl = ""
		this.ctrl.processing_system.field_coordinates = ""
		this.ctrl.processing_system.sub_details = ""
		this.ctrl.processing_system.accept_char = ""
		this.ctrl.processing_system.currency_format = ""
		this.ctrl.processing_system.data_scale = ""
		this.ctrl.processing_system.binding_name = "PROCESSING_SYSTEM"
		this.ctrl.processing_system.hide_label = false
		this.ctrl.processing_system.depends_on = ""
		this.ctrl.processing_system.placeholder = ""
		this.ctrl.processing_system.dynamic_param = ""
		this.ctrl.processing_system.style_code = ""
		this.ctrl.processing_system.data_source = ""
		this.ctrl.processing_system.image_association = ""
		this.ctrl.processing_system.show = true
		this.ctrl.processing_system.sub_content = ""
		this.ctrl.processing_system.required = false
		this.ctrl.processing_system.vld_rules = []
		this.ctrl.processing_system.targetcolumn_lower = "processing_system"
		this.ctrl.processing_system.disabled = false
		this.ctrl.processing_system.view_name = "f_npss_ip_transaction_details_srch"
		this.ctrl.processing_system.ctrl_id = "npss_ip_transaction_details_srch_processing_system"
		this.ctrl.npss_ip_transaction_details_srch_processing_system = {}
		this.ctrl.npss_ip_transaction_details_srch_processing_system.onChangecomponent = new EventEmitter<any>()
	
		//Properties of process_group
		this.ctrl.process_group = {}
		this.ctrl.process_group.id = "RN51CN11"
		this.ctrl.process_group.desc = "Process Group"
		this.ctrl.process_group.visible = true
		this.ctrl.process_group.label_name = "Process Group"
		this.ctrl.process_group.df_code = "DF_1304_1665901396659"
		this.ctrl.process_group.df_description = "Column Group 1"
		this.ctrl.process_group.uictrl_code = "CBO"
		this.ctrl.process_group.target_column = "PROCESS_GROUP"
		this.ctrl.process_group.data_type = "TEXT"
		this.ctrl.process_group.data_length = 32
		this.ctrl.process_group.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.process_group.default_value = ""
		this.ctrl.process_group.is_memory_ctrl = ""
		this.ctrl.process_group.field_coordinates = ""
		this.ctrl.process_group.sub_details = ""
		this.ctrl.process_group.accept_char = ""
		this.ctrl.process_group.currency_format = ""
		this.ctrl.process_group.data_scale = ""
		this.ctrl.process_group.binding_name = "PROCESS_GROUP"
		this.ctrl.process_group.hide_label = false
		this.ctrl.process_group.depends_on = ""
		this.ctrl.process_group.placeholder = ""
		this.ctrl.process_group.dynamic_param = ""
		this.ctrl.process_group.style_code = ""
		this.ctrl.process_group.data_source = {"ds_code":"UDS_1304_1675403226618","ds_description":"NPSS Process group CDB","rows":[],"type":"DPS_TABLE","value_member":"CD_CODE","display_member":"CD_DESCRIPTION","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_NC_CODE_DESCRIPTIONS","context":"","filters":[{"filter_name":"Filter1","binding_name":"CD_CATEGORY","id":"DF_1710314038562","binding_value":"IP_PROCESS_GROUP","source_name":"CD_CATEGORY","source_value":"IP_PROCESS_GROUP","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter2","binding_name":"TENANT_ID","id":"DF_1710314038563","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"},{"filter_name":"Filter3","binding_name":"NEED_SYNC","id":"DF_1710314038563","binding_value":"Y","source_name":"NEED_SYNC","source_value":"Y","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"CD_CATEGORY","binding_value":"IP_PROCESS_GROUP","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"IP_PROCESS_GROUP"},{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"},{"operators":"=","data_type":"TEXT","binding_name":"NEED_SYNC","binding_value":"Y","sort_order":3,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"Y"}]},"query":"(CD_CATEGORY = IP_PROCESS_GROUP AND TENANT_ID = SESSION_LEVEL.TENANT_ID AND NEED_SYNC = Y)"},"sel_columns":[],"need_first_item_selection":false,"has_parent":false}
		this.ctrl.process_group.image_association = ""
		this.ctrl.process_group.show = true
		this.ctrl.process_group.sub_content = ""
		this.ctrl.process_group.required = false
		this.ctrl.process_group.vld_rules = []
		this.ctrl.process_group.targetcolumn_lower = "process_group"
		this.ctrl.process_group.disabled = false
		this.ctrl.process_group.view_name = "f_npss_ip_transaction_details_srch"
		this.ctrl.process_group.ctrl_id = "npss_ip_transaction_details_srch_process_group"
		this.ctrl.npss_ip_transaction_details_srch_process_group = {}
		this.ctrl.npss_ip_transaction_details_srch_process_group.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_ip_transaction_details_srch.process_group = {}
	
		//Properties of department_code
		this.ctrl.department_code = {}
		this.ctrl.department_code.id = "RN51CN12"
		this.ctrl.department_code.desc = "Department Code"
		this.ctrl.department_code.visible = true
		this.ctrl.department_code.label_name = "Department Code"
		this.ctrl.department_code.df_code = "DF_1304_1665901396659"
		this.ctrl.department_code.df_description = "Column Group 1"
		this.ctrl.department_code.uictrl_code = "CBO"
		this.ctrl.department_code.target_column = "DEPARTMENT_CODE"
		this.ctrl.department_code.data_type = "TEXT"
		this.ctrl.department_code.data_length = 32
		this.ctrl.department_code.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.department_code.default_value = ""
		this.ctrl.department_code.is_memory_ctrl = ""
		this.ctrl.department_code.field_coordinates = ""
		this.ctrl.department_code.sub_details = ""
		this.ctrl.department_code.accept_char = ""
		this.ctrl.department_code.currency_format = ""
		this.ctrl.department_code.data_scale = ""
		this.ctrl.department_code.binding_name = "DEPARTMENT_CODE"
		this.ctrl.department_code.hide_label = false
		this.ctrl.department_code.depends_on = ""
		this.ctrl.department_code.placeholder = ""
		this.ctrl.department_code.dynamic_param = ""
		this.ctrl.department_code.style_code = ""
		this.ctrl.department_code.data_source = {"ds_code":"UDS_1304_1672981344164","ds_description":"Core NC Department Code CDB","rows":[],"type":"DPS_TABLE","value_member":"CODE","display_member":"DESCRIPTION","first_record_display":"Select","column_list":"","order_by":"CODE","target_table":"CORE_VW_NC_DEPARTMENT_CODE","context":"","filters":[{"filter_name":"Filter1","binding_name":"NEED_SYNC","id":"DF_1678254226124","binding_value":"Y","source_name":"NEED_SYNC","source_value":"Y","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter2","binding_name":"TENANT_ID","id":"DF_1678254226124","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"NEED_SYNC","binding_value":"Y","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"Y"},{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"}]},"query":"(NEED_SYNC = Y AND TENANT_ID = SESSION_LEVEL.TENANT_ID)"},"need_auto_first_record":false,"sel_columns":[],"need_first_item_selection":false,"has_parent":false}
		this.ctrl.department_code.image_association = ""
		this.ctrl.department_code.show = true
		this.ctrl.department_code.sub_content = ""
		this.ctrl.department_code.required = false
		this.ctrl.department_code.vld_rules = []
		this.ctrl.department_code.targetcolumn_lower = "department_code"
		this.ctrl.department_code.disabled = false
		this.ctrl.department_code.view_name = "f_npss_ip_transaction_details_srch"
		this.ctrl.department_code.ctrl_id = "npss_ip_transaction_details_srch_department_code"
		this.ctrl.npss_ip_transaction_details_srch_department_code = {}
		this.ctrl.npss_ip_transaction_details_srch_department_code.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_ip_transaction_details_srch.department_code = {}
	
		//Properties of inward_file_name
		this.ctrl.inward_file_name = {}
		this.ctrl.inward_file_name.id = "RN51CN13"
		this.ctrl.inward_file_name.desc = "File Name"
		this.ctrl.inward_file_name.visible = true
		this.ctrl.inward_file_name.label_name = "File Name"
		this.ctrl.inward_file_name.df_code = "DF_1304_1665901396659"
		this.ctrl.inward_file_name.df_description = "Column Group 1"
		this.ctrl.inward_file_name.uictrl_code = "CDN_CTRL"
		this.ctrl.inward_file_name.target_column = "INWARD_FILE_NAME"
		this.ctrl.inward_file_name.data_type = "TEXT"
		this.ctrl.inward_file_name.data_length = 256
		this.ctrl.inward_file_name.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.inward_file_name.default_value = ""
		this.ctrl.inward_file_name.is_memory_ctrl = ""
		this.ctrl.inward_file_name.field_coordinates = ""
		this.ctrl.inward_file_name.sub_details = ""
		this.ctrl.inward_file_name.accept_char = ""
		this.ctrl.inward_file_name.currency_format = ""
		this.ctrl.inward_file_name.data_scale = ""
		this.ctrl.inward_file_name.binding_name = "INWARD_FILE_NAME"
		this.ctrl.inward_file_name.hide_label = false
		this.ctrl.inward_file_name.depends_on = ""
		this.ctrl.inward_file_name.placeholder = ""
		this.ctrl.inward_file_name.dynamic_param = ""
		this.ctrl.inward_file_name.style_code = ""
		this.ctrl.inward_file_name.data_source = ""
		this.ctrl.inward_file_name.image_association = ""
		this.ctrl.inward_file_name.show = true
		this.ctrl.inward_file_name.sub_content = ""
		this.ctrl.inward_file_name.required = false
		this.ctrl.inward_file_name.vld_rules = []
		this.ctrl.inward_file_name.targetcolumn_lower = "inward_file_name"
		this.ctrl.inward_file_name.disabled = false
		this.ctrl.inward_file_name.view_name = "f_npss_ip_transaction_details_srch"
		this.ctrl.inward_file_name.ctrl_id = "npss_ip_transaction_details_srch_inward_file_name"
		this.ctrl.npss_ip_transaction_details_srch_inward_file_name = {}
		this.ctrl.npss_ip_transaction_details_srch_inward_file_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory150
		this.ctrl.memory150 = {}
		this.ctrl.memory150.id = "RN51CN14"
		this.ctrl.memory150.desc = "Payment Flag"
		this.ctrl.memory150.visible = false
		this.ctrl.memory150.label_name = "Payment Flag"
		this.ctrl.memory150.df_code = "DF_1304_1665901396659"
		this.ctrl.memory150.df_description = "Column Group 1"
		this.ctrl.memory150.uictrl_code = "CBO"
		this.ctrl.memory150.target_column = "memory150"
		this.ctrl.memory150.data_type = "TEXT"
		this.ctrl.memory150.data_length = 0
		this.ctrl.memory150.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory150.default_value = ""
		this.ctrl.memory150.is_memory_ctrl = "Y"
		this.ctrl.memory150.field_coordinates = ""
		this.ctrl.memory150.sub_details = ""
		this.ctrl.memory150.accept_char = ""
		this.ctrl.memory150.currency_format = ""
		this.ctrl.memory150.data_scale = ""
		this.ctrl.memory150.binding_name = "BATCH_PAYMENT_FLAG"
		this.ctrl.memory150.hide_label = false
		this.ctrl.memory150.depends_on = ""
		this.ctrl.memory150.placeholder = ""
		this.ctrl.memory150.dynamic_param = ""
		this.ctrl.memory150.style_code = ""
		this.ctrl.memory150.data_source = {"ds_code":"UDS_1304_1710222049428","ds_description":"NPSS Batch Payment Flag SQL CDB","rows":[],"type":"DPS_TABLE","value_member":"CD_CODE","display_member":"CD_DESCRIPTION","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_NC_CODE_DESCRIPTIONS","context":"","filters":[{"filter_name":"Filter1","binding_name":"CD_CATEGORY","id":"DF_1710222178292","binding_value":"BATCH_PAYMENT_FLAG","source_name":"CD_CATEGORY","source_value":"BATCH_PAYMENT_FLAG","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"CD_CATEGORY","binding_value":"BATCH_PAYMENT_FLAG","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"BATCH_PAYMENT_FLAG"}]},"query":"(CD_CATEGORY = BATCH_PAYMENT_FLAG)"},"sel_columns":[]}
		this.ctrl.memory150.image_association = ""
		this.ctrl.memory150.show = true
		this.ctrl.memory150.sub_content = ""
		this.ctrl.memory150.required = false
		this.ctrl.memory150.vld_rules = []
		this.ctrl.memory150.targetcolumn_lower = "memory150"
		this.ctrl.memory150.disabled = false
		this.ctrl.memory150.view_name = "f_npss_ip_transaction_details_srch"
		this.ctrl.memory150.ctrl_id = "npss_ip_transaction_details_srch_memory150"
		this.ctrl.npss_ip_transaction_details_srch_memory150 = {}
		this.ctrl.npss_ip_transaction_details_srch_memory150.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_ip_transaction_details_srch.memory150 = {}
		this.screen_instance[this.comp_id].f_npss_ip_transaction_details_srch.model = {"VALUE_DATE":"setcurrentdate(),{}","MEMORY63":"setcurrentdate(),{}","CDTR_IBAN":"","CR_ACCT_IDENTIFICATION":"","TRAN_REF_ID":"","UETR":"","CLRSYSREF":"","PAYMENT_ENDTOEND_ID":"","INTRBK_STTLM_AMNT":"","PROCESSING_SYSTEM":"","PROCESS_GROUP":"","DEPARTMENT_CODE":"","INWARD_FILE_NAME":"","MEMORY150":""}
		this.screen_instance[this.comp_id].f_npss_ip_transaction_details_srch.Meta = [{"CTLR_CODE":"CDN_DATE","DATA_TYPE":"DATETIME","TARGET_COLUMN":"VALUE_DATE"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_IBAN"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CR_ACCT_IDENTIFICATION"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"TRAN_REF_ID"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"UETR"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CLRSYSREF"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"PAYMENT_ENDTOEND_ID"},{"CTLR_CODE":"CDN_CUR_CTRL","DATA_TYPE":"NUMBER","TARGET_COLUMN":"INTRBK_STTLM_AMNT"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROCESSING_SYSTEM"},{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROCESS_GROUP"},{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"DEPARTMENT_CODE"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"INWARD_FILE_NAME"}]
		this.screen_instance[this.comp_id].f_npss_ip_transaction_details_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_ip_transaction_details_srch.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_ip_transaction_details_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_ip_transaction_details_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_ip_transaction_details_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_ip_transaction_details_srch[control][property] = value;
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
    