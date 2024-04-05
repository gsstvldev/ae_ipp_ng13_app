/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35086 
Modified By     : Admin 
Modified Date   : 2024-Apr-04 13:9 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_posting_failures
Form Name       : NPSS RCT IP Posting Failure SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_rct_ip_posting_failure_srch',
  templateUrl: './f_npss_rct_ip_posting_failure_srch.component.html',
  styleUrls: ['./f_npss_rct_ip_posting_failure_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_rct_ip_posting_failure_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_rct_ip_posting_failure_srch') form;
  @ViewChild('npss_rct_ip_posting_failure_srch_value_date') element: ElementRef;
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
		this.ctrl.value_date.id = "37e11804-e673-4c0d-96ce-6d9da5ffc8ad_1677571954675"
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
		this.ctrl.value_date.view_name = "f_npss_rct_ip_posting_failure_srch"
		this.ctrl.value_date.ctrl_id = "npss_rct_ip_posting_failure_srch_value_date"
		this.ctrl.npss_rct_ip_posting_failure_srch_value_date = {}
		this.ctrl.npss_rct_ip_posting_failure_srch_value_date.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory63
		this.ctrl.memory63 = {}
		this.ctrl.memory63.id = "3855b1f2-d570-4864-a0c5-6acd4eb5a7b2_1677571954675"
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
		this.ctrl.memory63.view_name = "f_npss_rct_ip_posting_failure_srch"
		this.ctrl.memory63.ctrl_id = "npss_rct_ip_posting_failure_srch_memory63"
		this.ctrl.npss_rct_ip_posting_failure_srch_memory63 = {}
		this.ctrl.npss_rct_ip_posting_failure_srch_memory63.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_iban
		this.ctrl.cdtr_iban = {}
		this.ctrl.cdtr_iban.id = "bb5c3a63-f73d-440e-b8b6-48ceb3b0a4f9_1677571954676"
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
		this.ctrl.cdtr_iban.view_name = "f_npss_rct_ip_posting_failure_srch"
		this.ctrl.cdtr_iban.ctrl_id = "npss_rct_ip_posting_failure_srch_cdtr_iban"
		this.ctrl.npss_rct_ip_posting_failure_srch_cdtr_iban = {}
		this.ctrl.npss_rct_ip_posting_failure_srch_cdtr_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cr_acct_identification
		this.ctrl.cr_acct_identification = {}
		this.ctrl.cr_acct_identification.id = "d572b6d9-a5b9-4ecb-8522-c70f6d03f4b0_1677571954676"
		this.ctrl.cr_acct_identification.desc = "Cr Account Identification"
		this.ctrl.cr_acct_identification.visible = true
		this.ctrl.cr_acct_identification.label_name = "Cr Account Identification"
		this.ctrl.cr_acct_identification.df_code = "DF_1304_1665901396659"
		this.ctrl.cr_acct_identification.df_description = "Column Group 1"
		this.ctrl.cr_acct_identification.uictrl_code = "CDN_CTRL"
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
		this.ctrl.cr_acct_identification.view_name = "f_npss_rct_ip_posting_failure_srch"
		this.ctrl.cr_acct_identification.ctrl_id = "npss_rct_ip_posting_failure_srch_cr_acct_identification"
		this.ctrl.npss_rct_ip_posting_failure_srch_cr_acct_identification = {}
		this.ctrl.npss_rct_ip_posting_failure_srch_cr_acct_identification.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_acct_name
		this.ctrl.cdtr_acct_name = {}
		this.ctrl.cdtr_acct_name.id = "6b3a02f8-fbe1-4893-9486-3afcf7855209_1677571954676"
		this.ctrl.cdtr_acct_name.desc = "Cr Account Name"
		this.ctrl.cdtr_acct_name.visible = true
		this.ctrl.cdtr_acct_name.label_name = "Cr Account Name"
		this.ctrl.cdtr_acct_name.df_code = "DF_1304_1665901396659"
		this.ctrl.cdtr_acct_name.df_description = "Column Group 1"
		this.ctrl.cdtr_acct_name.uictrl_code = "CDN_CTRL"
		this.ctrl.cdtr_acct_name.target_column = "CDTR_ACCT_NAME"
		this.ctrl.cdtr_acct_name.data_type = "TEXT"
		this.ctrl.cdtr_acct_name.data_length = 256
		this.ctrl.cdtr_acct_name.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.cdtr_acct_name.default_value = ""
		this.ctrl.cdtr_acct_name.is_memory_ctrl = ""
		this.ctrl.cdtr_acct_name.field_coordinates = ""
		this.ctrl.cdtr_acct_name.sub_details = ""
		this.ctrl.cdtr_acct_name.accept_char = ""
		this.ctrl.cdtr_acct_name.currency_format = ""
		this.ctrl.cdtr_acct_name.data_scale = ""
		this.ctrl.cdtr_acct_name.binding_name = "CDTR_ACCT_NAME"
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
		this.ctrl.cdtr_acct_name.view_name = "f_npss_rct_ip_posting_failure_srch"
		this.ctrl.cdtr_acct_name.ctrl_id = "npss_rct_ip_posting_failure_srch_cdtr_acct_name"
		this.ctrl.npss_rct_ip_posting_failure_srch_cdtr_acct_name = {}
		this.ctrl.npss_rct_ip_posting_failure_srch_cdtr_acct_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_iban
		this.ctrl.dbtr_iban = {}
		this.ctrl.dbtr_iban.id = "9a380e7f-0040-4d16-8f54-e0a650f0ee00_1677571954676"
		this.ctrl.dbtr_iban.desc = "Dr IBAN"
		this.ctrl.dbtr_iban.visible = true
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
		this.ctrl.dbtr_iban.view_name = "f_npss_rct_ip_posting_failure_srch"
		this.ctrl.dbtr_iban.ctrl_id = "npss_rct_ip_posting_failure_srch_dbtr_iban"
		this.ctrl.npss_rct_ip_posting_failure_srch_dbtr_iban = {}
		this.ctrl.npss_rct_ip_posting_failure_srch_dbtr_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of uetr
		this.ctrl.uetr = {}
		this.ctrl.uetr.id = "9afd256f-0f4a-4e5a-a0bf-44e728693a51_1677571954676"
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
		this.ctrl.uetr.view_name = "f_npss_rct_ip_posting_failure_srch"
		this.ctrl.uetr.ctrl_id = "npss_rct_ip_posting_failure_srch_uetr"
		this.ctrl.npss_rct_ip_posting_failure_srch_uetr = {}
		this.ctrl.npss_rct_ip_posting_failure_srch_uetr.onChangecomponent = new EventEmitter<any>()
	
		//Properties of clrsysref
		this.ctrl.clrsysref = {}
		this.ctrl.clrsysref.id = "4149e484-fa50-4c4c-9746-286745691b8c_1677571954676"
		this.ctrl.clrsysref.desc = "Clearing Sys Ref No"
		this.ctrl.clrsysref.visible = true
		this.ctrl.clrsysref.label_name = "Clearing Sys Ref No"
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
		this.ctrl.clrsysref.view_name = "f_npss_rct_ip_posting_failure_srch"
		this.ctrl.clrsysref.ctrl_id = "npss_rct_ip_posting_failure_srch_clrsysref"
		this.ctrl.npss_rct_ip_posting_failure_srch_clrsysref = {}
		this.ctrl.npss_rct_ip_posting_failure_srch_clrsysref.onChangecomponent = new EventEmitter<any>()
	
		//Properties of payment_endtoend_id
		this.ctrl.payment_endtoend_id = {}
		this.ctrl.payment_endtoend_id.id = "221c9a05-1590-46e8-9416-d47770ef7faf_1677571954676"
		this.ctrl.payment_endtoend_id.desc = "E2E Ref ID"
		this.ctrl.payment_endtoend_id.visible = true
		this.ctrl.payment_endtoend_id.label_name = "E2E Ref ID"
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
		this.ctrl.payment_endtoend_id.view_name = "f_npss_rct_ip_posting_failure_srch"
		this.ctrl.payment_endtoend_id.ctrl_id = "npss_rct_ip_posting_failure_srch_payment_endtoend_id"
		this.ctrl.npss_rct_ip_posting_failure_srch_payment_endtoend_id = {}
		this.ctrl.npss_rct_ip_posting_failure_srch_payment_endtoend_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of processing_system
		this.ctrl.processing_system = {}
		this.ctrl.processing_system.id = "f33f7cba-f1cb-4eca-9ff6-65e08924f712_1677571954676"
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
		this.ctrl.processing_system.view_name = "f_npss_rct_ip_posting_failure_srch"
		this.ctrl.processing_system.ctrl_id = "npss_rct_ip_posting_failure_srch_processing_system"
		this.ctrl.npss_rct_ip_posting_failure_srch_processing_system = {}
		this.ctrl.npss_rct_ip_posting_failure_srch_processing_system.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory108
		this.ctrl.memory108 = {}
		this.ctrl.memory108.id = "r1CN12"
		this.ctrl.memory108.desc = "Message Type"
		this.ctrl.memory108.visible = true
		this.ctrl.memory108.label_name = "Message Type"
		this.ctrl.memory108.df_code = "DF_1304_1665901396659"
		this.ctrl.memory108.df_description = "Column Group 1"
		this.ctrl.memory108.uictrl_code = "TXT"
		this.ctrl.memory108.target_column = "memory108"
		this.ctrl.memory108.data_type = "TEXT"
		this.ctrl.memory108.data_length = 0
		this.ctrl.memory108.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory108.default_value = ""
		this.ctrl.memory108.is_memory_ctrl = "Y"
		this.ctrl.memory108.field_coordinates = ""
		this.ctrl.memory108.sub_details = ""
		this.ctrl.memory108.accept_char = ""
		this.ctrl.memory108.currency_format = ""
		this.ctrl.memory108.data_scale = ""
		this.ctrl.memory108.binding_name = "PROCESS_NAME"
		this.ctrl.memory108.hide_label = false
		this.ctrl.memory108.depends_on = ""
		this.ctrl.memory108.placeholder = ""
		this.ctrl.memory108.dynamic_param = ""
		this.ctrl.memory108.style_code = ""
		this.ctrl.memory108.data_source = ""
		this.ctrl.memory108.image_association = ""
		this.ctrl.memory108.show = true
		this.ctrl.memory108.sub_content = ""
		this.ctrl.memory108.required = false
		this.ctrl.memory108.vld_rules = []
		this.ctrl.memory108.targetcolumn_lower = "memory108"
		this.ctrl.memory108.disabled = false
		this.ctrl.memory108.view_name = "f_npss_rct_ip_posting_failure_srch"
		this.ctrl.memory108.ctrl_id = "npss_rct_ip_posting_failure_srch_memory108"
		this.ctrl.npss_rct_ip_posting_failure_srch_memory108 = {}
		this.ctrl.npss_rct_ip_posting_failure_srch_memory108.onChangecomponent = new EventEmitter<any>()
	
		//Properties of account_currency
		this.ctrl.account_currency = {}
		this.ctrl.account_currency.id = "r3CN14"
		this.ctrl.account_currency.desc = "Account Currency"
		this.ctrl.account_currency.visible = true
		this.ctrl.account_currency.label_name = "Account Currency"
		this.ctrl.account_currency.df_code = "DF_1304_1665901396659"
		this.ctrl.account_currency.df_description = "Column Group 1"
		this.ctrl.account_currency.uictrl_code = "TXT"
		this.ctrl.account_currency.target_column = "ACCOUNT_CURRENCY"
		this.ctrl.account_currency.data_type = "TEXT"
		this.ctrl.account_currency.data_length = 3
		this.ctrl.account_currency.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.account_currency.default_value = ""
		this.ctrl.account_currency.is_memory_ctrl = ""
		this.ctrl.account_currency.field_coordinates = ""
		this.ctrl.account_currency.sub_details = ""
		this.ctrl.account_currency.accept_char = ""
		this.ctrl.account_currency.currency_format = ""
		this.ctrl.account_currency.data_scale = ""
		this.ctrl.account_currency.binding_name = "ACCOUNT_CURRENCY"
		this.ctrl.account_currency.hide_label = false
		this.ctrl.account_currency.depends_on = ""
		this.ctrl.account_currency.placeholder = ""
		this.ctrl.account_currency.dynamic_param = ""
		this.ctrl.account_currency.style_code = ""
		this.ctrl.account_currency.data_source = ""
		this.ctrl.account_currency.image_association = ""
		this.ctrl.account_currency.show = true
		this.ctrl.account_currency.sub_content = ""
		this.ctrl.account_currency.required = false
		this.ctrl.account_currency.vld_rules = []
		this.ctrl.account_currency.targetcolumn_lower = "account_currency"
		this.ctrl.account_currency.disabled = false
		this.ctrl.account_currency.view_name = "f_npss_rct_ip_posting_failure_srch"
		this.ctrl.account_currency.ctrl_id = "npss_rct_ip_posting_failure_srch_account_currency"
		this.ctrl.npss_rct_ip_posting_failure_srch_account_currency = {}
		this.ctrl.npss_rct_ip_posting_failure_srch_account_currency.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory124
		this.ctrl.memory124 = {}
		this.ctrl.memory124.id = "r3CN20"
		this.ctrl.memory124.desc = "Process Group"
		this.ctrl.memory124.visible = true
		this.ctrl.memory124.label_name = "Process Group"
		this.ctrl.memory124.df_code = "DF_1304_1665901396659"
		this.ctrl.memory124.df_description = "Column Group 1"
		this.ctrl.memory124.uictrl_code = "CBO"
		this.ctrl.memory124.target_column = "memory124"
		this.ctrl.memory124.data_type = "TEXT"
		this.ctrl.memory124.data_length = 64
		this.ctrl.memory124.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory124.default_value = ""
		this.ctrl.memory124.is_memory_ctrl = "Y"
		this.ctrl.memory124.field_coordinates = ""
		this.ctrl.memory124.sub_details = ""
		this.ctrl.memory124.accept_char = ""
		this.ctrl.memory124.currency_format = ""
		this.ctrl.memory124.data_scale = ""
		this.ctrl.memory124.binding_name = "PROCESSGROUP"
		this.ctrl.memory124.hide_label = false
		this.ctrl.memory124.depends_on = ""
		this.ctrl.memory124.placeholder = ""
		this.ctrl.memory124.dynamic_param = ""
		this.ctrl.memory124.style_code = ""
		this.ctrl.memory124.data_source = {"ds_code":"UDS_1304_1679510002946","ds_description":"NPSS Online Batch Static","rows":[{"value":"Select","code":""},{"value":"Online","code":"Online"},{"value":"Batch","code":"Batch"}],"type":"DPS_STATIC","value_member":"CODE","display_member":"VALUE","first_record_display":"Select","column_list":"CODE;VALUE","order_by":"","target_table":"","context":"","filters":[],"type_desc":"Combo Binding Static","conditional_operator":"CONTAINS","sel_columns":[]}
		this.ctrl.memory124.image_association = ""
		this.ctrl.memory124.show = true
		this.ctrl.memory124.sub_content = ""
		this.ctrl.memory124.required = false
		this.ctrl.memory124.vld_rules = []
		this.ctrl.memory124.targetcolumn_lower = "memory124"
		this.ctrl.memory124.disabled = false
		this.ctrl.memory124.view_name = "f_npss_rct_ip_posting_failure_srch"
		this.ctrl.memory124.ctrl_id = "npss_rct_ip_posting_failure_srch_memory124"
		this.ctrl.npss_rct_ip_posting_failure_srch_memory124 = {}
		this.ctrl.npss_rct_ip_posting_failure_srch_memory124.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_rct_ip_posting_failure_srch.memory124 = {}
	
		//Properties of cr_sort_code
		this.ctrl.cr_sort_code = {}
		this.ctrl.cr_sort_code.id = "r2CN13"
		this.ctrl.cr_sort_code.desc = "CR Bank Name"
		this.ctrl.cr_sort_code.visible = true
		this.ctrl.cr_sort_code.label_name = "CR Bank Name"
		this.ctrl.cr_sort_code.df_code = "DF_1304_1665901396659"
		this.ctrl.cr_sort_code.df_description = "Column Group 1"
		this.ctrl.cr_sort_code.uictrl_code = "CBO"
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
		this.ctrl.cr_sort_code.binding_name = "CR_SORT_CODE"
		this.ctrl.cr_sort_code.hide_label = false
		this.ctrl.cr_sort_code.depends_on = ""
		this.ctrl.cr_sort_code.placeholder = ""
		this.ctrl.cr_sort_code.dynamic_param = ""
		this.ctrl.cr_sort_code.style_code = ""
		this.ctrl.cr_sort_code.data_source = {"ds_code":"UDS_1304_1670483620977","ds_description":"NPSS Bank BIC CDB","rows":[],"type":"DPS_TABLE","value_member":"BIC_CODE","display_member":"BIC_CODE","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_MEMBER_BANKS","context":"","filters":[{"filter_name":"Filter1","binding_name":"TENANT_ID","id":"DF_1677586337229","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"}]},"query":"(TENANT_ID = SESSION_LEVEL.TENANT_ID)"},"need_auto_first_record":false,"sel_columns":[],"need_first_item_selection":false,"has_parent":false}
		this.ctrl.cr_sort_code.image_association = ""
		this.ctrl.cr_sort_code.show = true
		this.ctrl.cr_sort_code.sub_content = ""
		this.ctrl.cr_sort_code.required = false
		this.ctrl.cr_sort_code.vld_rules = []
		this.ctrl.cr_sort_code.targetcolumn_lower = "cr_sort_code"
		this.ctrl.cr_sort_code.disabled = false
		this.ctrl.cr_sort_code.view_name = "f_npss_rct_ip_posting_failure_srch"
		this.ctrl.cr_sort_code.ctrl_id = "npss_rct_ip_posting_failure_srch_cr_sort_code"
		this.ctrl.npss_rct_ip_posting_failure_srch_cr_sort_code = {}
		this.ctrl.npss_rct_ip_posting_failure_srch_cr_sort_code.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_rct_ip_posting_failure_srch.cr_sort_code = {}
	
		//Properties of dr_sort_code
		this.ctrl.dr_sort_code = {}
		this.ctrl.dr_sort_code.id = "RN51CN17"
		this.ctrl.dr_sort_code.desc = "Dr Bank Name"
		this.ctrl.dr_sort_code.visible = true
		this.ctrl.dr_sort_code.label_name = "Dr Bank Name"
		this.ctrl.dr_sort_code.df_code = "DF_1304_1665901396659"
		this.ctrl.dr_sort_code.df_description = "Column Group 1"
		this.ctrl.dr_sort_code.uictrl_code = "CBO"
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
		this.ctrl.dr_sort_code.binding_name = "DR_SORT_CODE"
		this.ctrl.dr_sort_code.hide_label = false
		this.ctrl.dr_sort_code.depends_on = ""
		this.ctrl.dr_sort_code.placeholder = ""
		this.ctrl.dr_sort_code.dynamic_param = ""
		this.ctrl.dr_sort_code.style_code = ""
		this.ctrl.dr_sort_code.data_source = {"ds_code":"UDS_1304_1670483620977","ds_description":"NPSS Bank BIC CDB","rows":[],"type":"DPS_TABLE","value_member":"BIC_CODE","display_member":"BIC_CODE","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_MEMBER_BANKS","context":"","filters":[{"filter_name":"Filter1","binding_name":"TENANT_ID","id":"DF_1677586337229","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"}]},"query":"(TENANT_ID = SESSION_LEVEL.TENANT_ID)"},"need_auto_first_record":false,"sel_columns":[],"need_first_item_selection":false,"has_parent":false}
		this.ctrl.dr_sort_code.image_association = ""
		this.ctrl.dr_sort_code.show = true
		this.ctrl.dr_sort_code.sub_content = ""
		this.ctrl.dr_sort_code.required = false
		this.ctrl.dr_sort_code.vld_rules = []
		this.ctrl.dr_sort_code.targetcolumn_lower = "dr_sort_code"
		this.ctrl.dr_sort_code.disabled = false
		this.ctrl.dr_sort_code.view_name = "f_npss_rct_ip_posting_failure_srch"
		this.ctrl.dr_sort_code.ctrl_id = "npss_rct_ip_posting_failure_srch_dr_sort_code"
		this.ctrl.npss_rct_ip_posting_failure_srch_dr_sort_code = {}
		this.ctrl.npss_rct_ip_posting_failure_srch_dr_sort_code.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_rct_ip_posting_failure_srch.dr_sort_code = {}
	
		//Properties of intrbk_sttlm_amnt
		this.ctrl.intrbk_sttlm_amnt = {}
		this.ctrl.intrbk_sttlm_amnt.id = "1677571954675CN11"
		this.ctrl.intrbk_sttlm_amnt.desc = "Amount"
		this.ctrl.intrbk_sttlm_amnt.visible = true
		this.ctrl.intrbk_sttlm_amnt.label_name = "Amount"
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
		this.ctrl.intrbk_sttlm_amnt.view_name = "f_npss_rct_ip_posting_failure_srch"
		this.ctrl.intrbk_sttlm_amnt.ctrl_id = "npss_rct_ip_posting_failure_srch_intrbk_sttlm_amnt"
		this.ctrl.npss_rct_ip_posting_failure_srch_intrbk_sttlm_amnt = {}
		this.ctrl.npss_rct_ip_posting_failure_srch_intrbk_sttlm_amnt.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory110
		this.ctrl.memory110 = {}
		this.ctrl.memory110.id = "1677571954676CN15"
		this.ctrl.memory110.desc = "Cr Acct Posting Restriction Code"
		this.ctrl.memory110.visible = true
		this.ctrl.memory110.label_name = "Cr Acct Posting Restriction Code"
		this.ctrl.memory110.df_code = "DF_1304_1665901396659"
		this.ctrl.memory110.df_description = "Column Group 1"
		this.ctrl.memory110.uictrl_code = "CDN_CTRL"
		this.ctrl.memory110.target_column = "memory110"
		this.ctrl.memory110.data_type = "TEXT"
		this.ctrl.memory110.data_length = 0
		this.ctrl.memory110.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory110.default_value = ""
		this.ctrl.memory110.is_memory_ctrl = "Y"
		this.ctrl.memory110.field_coordinates = ""
		this.ctrl.memory110.sub_details = ""
		this.ctrl.memory110.accept_char = ""
		this.ctrl.memory110.currency_format = ""
		this.ctrl.memory110.data_scale = ""
		this.ctrl.memory110.binding_name = "CUSTOMER_POSTING_RESTRICTION_CODE"
		this.ctrl.memory110.hide_label = false
		this.ctrl.memory110.depends_on = ""
		this.ctrl.memory110.placeholder = ""
		this.ctrl.memory110.dynamic_param = ""
		this.ctrl.memory110.style_code = ""
		this.ctrl.memory110.data_source = ""
		this.ctrl.memory110.image_association = ""
		this.ctrl.memory110.show = true
		this.ctrl.memory110.sub_content = ""
		this.ctrl.memory110.required = false
		this.ctrl.memory110.vld_rules = []
		this.ctrl.memory110.targetcolumn_lower = "memory110"
		this.ctrl.memory110.disabled = false
		this.ctrl.memory110.view_name = "f_npss_rct_ip_posting_failure_srch"
		this.ctrl.memory110.ctrl_id = "npss_rct_ip_posting_failure_srch_memory110"
		this.ctrl.npss_rct_ip_posting_failure_srch_memory110 = {}
		this.ctrl.npss_rct_ip_posting_failure_srch_memory110.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory111
		this.ctrl.memory111 = {}
		this.ctrl.memory111.id = "RN51CN16"
		this.ctrl.memory111.desc = "Posting Restriction Description"
		this.ctrl.memory111.visible = true
		this.ctrl.memory111.label_name = "Posting Restriction Description"
		this.ctrl.memory111.df_code = "DF_1304_1665901396659"
		this.ctrl.memory111.df_description = "Column Group 1"
		this.ctrl.memory111.uictrl_code = "CDN_CTRL"
		this.ctrl.memory111.target_column = "memory111"
		this.ctrl.memory111.data_type = "TEXT"
		this.ctrl.memory111.data_length = 0
		this.ctrl.memory111.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory111.default_value = ""
		this.ctrl.memory111.is_memory_ctrl = "Y"
		this.ctrl.memory111.field_coordinates = ""
		this.ctrl.memory111.sub_details = ""
		this.ctrl.memory111.accept_char = ""
		this.ctrl.memory111.currency_format = ""
		this.ctrl.memory111.data_scale = ""
		this.ctrl.memory111.binding_name = "ACCOUNT_POSTRING_TYPE_DESCRIPTION"
		this.ctrl.memory111.hide_label = false
		this.ctrl.memory111.depends_on = ""
		this.ctrl.memory111.placeholder = ""
		this.ctrl.memory111.dynamic_param = ""
		this.ctrl.memory111.style_code = ""
		this.ctrl.memory111.data_source = ""
		this.ctrl.memory111.image_association = ""
		this.ctrl.memory111.show = true
		this.ctrl.memory111.sub_content = ""
		this.ctrl.memory111.required = false
		this.ctrl.memory111.vld_rules = []
		this.ctrl.memory111.targetcolumn_lower = "memory111"
		this.ctrl.memory111.disabled = false
		this.ctrl.memory111.view_name = "f_npss_rct_ip_posting_failure_srch"
		this.ctrl.memory111.ctrl_id = "npss_rct_ip_posting_failure_srch_memory111"
		this.ctrl.npss_rct_ip_posting_failure_srch_memory111 = {}
		this.ctrl.npss_rct_ip_posting_failure_srch_memory111.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory112
		this.ctrl.memory112 = {}
		this.ctrl.memory112.id = "RN51CN18"
		this.ctrl.memory112.desc = "Failure Error Code"
		this.ctrl.memory112.visible = true
		this.ctrl.memory112.label_name = "Failure Error Code"
		this.ctrl.memory112.df_code = "DF_1304_1665901396659"
		this.ctrl.memory112.df_description = "Column Group 1"
		this.ctrl.memory112.uictrl_code = "CBO"
		this.ctrl.memory112.target_column = "memory112"
		this.ctrl.memory112.data_type = "TEXT"
		this.ctrl.memory112.data_length = 0
		this.ctrl.memory112.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory112.default_value = ""
		this.ctrl.memory112.is_memory_ctrl = "Y"
		this.ctrl.memory112.field_coordinates = ""
		this.ctrl.memory112.sub_details = ""
		this.ctrl.memory112.accept_char = ""
		this.ctrl.memory112.currency_format = ""
		this.ctrl.memory112.data_scale = ""
		this.ctrl.memory112.binding_name = "T24_RETURN_CODE"
		this.ctrl.memory112.hide_label = false
		this.ctrl.memory112.depends_on = ""
		this.ctrl.memory112.placeholder = ""
		this.ctrl.memory112.dynamic_param = ""
		this.ctrl.memory112.style_code = ""
		this.ctrl.memory112.data_source = {"ds_code":"UDS_1304_1677578070098","ds_description":"T24 Error code cdb","rows":[],"type":"DPS_TABLE","value_member":"ERROR_CODE","display_member":"ERROR_CODE","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_NC_ERROR_CODES","context":"","filters":[{"filter_name":"Filter1","binding_name":"PROCESSING_SYSTEM","id":"DF_1678254871705","binding_value":"T24","source_name":"PROCESSING_SYSTEM","source_value":"T24","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter2","binding_name":"NEED_SYNC","id":"DF_1678254871705","binding_value":"Y","source_name":"NEED_SYNC","source_value":"Y","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter3","binding_name":"TENANT_ID","id":"DF_1678254871705","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"PROCESSING_SYSTEM","binding_value":"T24","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"T24"},{"operators":"=","data_type":"TEXT","binding_name":"NEED_SYNC","binding_value":"Y","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"Y"},{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":3,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"}]},"query":"(PROCESSING_SYSTEM = T24 AND NEED_SYNC = Y AND TENANT_ID = SESSION_LEVEL.TENANT_ID)"},"sel_columns":[],"need_first_item_selection":false,"has_parent":false}
		this.ctrl.memory112.image_association = ""
		this.ctrl.memory112.show = true
		this.ctrl.memory112.sub_content = ""
		this.ctrl.memory112.required = false
		this.ctrl.memory112.vld_rules = []
		this.ctrl.memory112.targetcolumn_lower = "memory112"
		this.ctrl.memory112.disabled = false
		this.ctrl.memory112.view_name = "f_npss_rct_ip_posting_failure_srch"
		this.ctrl.memory112.ctrl_id = "npss_rct_ip_posting_failure_srch_memory112"
		this.ctrl.npss_rct_ip_posting_failure_srch_memory112 = {}
		this.ctrl.npss_rct_ip_posting_failure_srch_memory112.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_rct_ip_posting_failure_srch.memory112 = {}
	
		//Properties of memory113
		this.ctrl.memory113 = {}
		this.ctrl.memory113.id = "RN51CN19"
		this.ctrl.memory113.desc = "Error Description"
		this.ctrl.memory113.visible = true
		this.ctrl.memory113.label_name = "Error Description"
		this.ctrl.memory113.df_code = "DF_1304_1665901396659"
		this.ctrl.memory113.df_description = "Column Group 1"
		this.ctrl.memory113.uictrl_code = "CBO"
		this.ctrl.memory113.target_column = "memory113"
		this.ctrl.memory113.data_type = "TEXT"
		this.ctrl.memory113.data_length = 0
		this.ctrl.memory113.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory113.default_value = ""
		this.ctrl.memory113.is_memory_ctrl = "Y"
		this.ctrl.memory113.field_coordinates = ""
		this.ctrl.memory113.sub_details = ""
		this.ctrl.memory113.accept_char = ""
		this.ctrl.memory113.currency_format = ""
		this.ctrl.memory113.data_scale = ""
		this.ctrl.memory113.binding_name = "ERROR_DESCRIPTION"
		this.ctrl.memory113.hide_label = false
		this.ctrl.memory113.depends_on = ""
		this.ctrl.memory113.placeholder = ""
		this.ctrl.memory113.dynamic_param = ""
		this.ctrl.memory113.style_code = ""
		this.ctrl.memory113.data_source = {"ds_code":"UDS_1304_1677578156688","ds_description":"T24 Error Desc","rows":[],"type":"DPS_TABLE","value_member":"ERROR_DESCRIPTION","display_member":"ERROR_DESCRIPTION","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_NC_ERROR_CODES","context":"","filters":[{"filter_name":"Filter1","binding_name":"TENANT_ID","id":"DF_1678255016217","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"},{"filter_name":"Filter2","binding_name":"NEED_SYNC","id":"DF_1678255016217","binding_value":"Y","source_name":"NEED_SYNC","source_value":"Y","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter3","binding_name":"PROCESSING_SYSTEM","id":"DF_1678255016217","binding_value":"T24","source_name":"PROCESSING_SYSTEM","source_value":"T24","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"},{"operators":"=","data_type":"TEXT","binding_name":"NEED_SYNC","binding_value":"Y","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"Y"},{"operators":"=","data_type":"TEXT","binding_name":"PROCESSING_SYSTEM","binding_value":"T24","sort_order":3,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"T24"}]},"query":"(TENANT_ID = SESSION_LEVEL.TENANT_ID AND NEED_SYNC = Y AND PROCESSING_SYSTEM = T24)"},"sel_columns":[],"need_first_item_selection":false,"has_parent":false}
		this.ctrl.memory113.image_association = ""
		this.ctrl.memory113.show = true
		this.ctrl.memory113.sub_content = ""
		this.ctrl.memory113.required = false
		this.ctrl.memory113.vld_rules = []
		this.ctrl.memory113.targetcolumn_lower = "memory113"
		this.ctrl.memory113.disabled = false
		this.ctrl.memory113.view_name = "f_npss_rct_ip_posting_failure_srch"
		this.ctrl.memory113.ctrl_id = "npss_rct_ip_posting_failure_srch_memory113"
		this.ctrl.npss_rct_ip_posting_failure_srch_memory113 = {}
		this.ctrl.npss_rct_ip_posting_failure_srch_memory113.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_rct_ip_posting_failure_srch.memory113 = {}
		this.screen_instance[this.comp_id].f_npss_rct_ip_posting_failure_srch.model = {"VALUE_DATE":"setcurrentdate(),{}","MEMORY63":"setcurrentdate(),{}","CDTR_IBAN":"","CR_ACCT_IDENTIFICATION":"","CDTR_ACCT_NAME":"","DBTR_IBAN":"","UETR":"","CLRSYSREF":"","PAYMENT_ENDTOEND_ID":"","PROCESSING_SYSTEM":"","MEMORY108":"","ACCOUNT_CURRENCY":"","MEMORY124":"","CR_SORT_CODE":"","DR_SORT_CODE":"","INTRBK_STTLM_AMNT":"","MEMORY110":"","MEMORY111":"","MEMORY112":"","MEMORY113":""}
		this.screen_instance[this.comp_id].f_npss_rct_ip_posting_failure_srch.Meta = [{"CTLR_CODE":"CDN_DATE","DATA_TYPE":"DATETIME","TARGET_COLUMN":"VALUE_DATE"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_IBAN"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"CR_ACCT_IDENTIFICATION"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_ACCT_NAME"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_IBAN"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"UETR"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"CLRSYSREF"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"PAYMENT_ENDTOEND_ID"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROCESSING_SYSTEM"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"ACCOUNT_CURRENCY"},{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"CR_SORT_CODE"},{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"DR_SORT_CODE"},{"CTLR_CODE":"CDN_CUR_CTRL","DATA_TYPE":"NUMBER","TARGET_COLUMN":"INTRBK_STTLM_AMNT"}]
		this.screen_instance[this.comp_id].f_npss_rct_ip_posting_failure_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_rct_ip_posting_failure_srch.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_rct_ip_posting_failure_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_rct_ip_posting_failure_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_rct_ip_posting_failure_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_rct_ip_posting_failure_srch[control][property] = value;
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
    