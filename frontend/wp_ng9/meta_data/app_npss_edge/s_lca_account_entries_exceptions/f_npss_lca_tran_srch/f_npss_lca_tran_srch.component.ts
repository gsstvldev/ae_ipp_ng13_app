/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34474 
Modified By     : Admin 
Modified Date   : 2024-Feb-21 8:5 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_lca_account_entries_exceptions
Form Name       : NPSS LCA Tran SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_lca_tran_srch',
  templateUrl: './f_npss_lca_tran_srch.component.html',
  styleUrls: ['./f_npss_lca_tran_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_lca_tran_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_lca_tran_srch') form;
  @ViewChild('npss_lca_tran_srch_value_date') element: ElementRef;
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
		this.ctrl.value_date.id = "7213ef54-b2de-4600-b730-4075331c5665_1688467513294"
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
		this.ctrl.value_date.view_name = "f_npss_lca_tran_srch"
		this.ctrl.value_date.ctrl_id = "npss_lca_tran_srch_value_date"
		this.ctrl.npss_lca_tran_srch_value_date = {}
		this.ctrl.npss_lca_tran_srch_value_date.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory63
		this.ctrl.memory63 = {}
		this.ctrl.memory63.id = "6cbcc42f-0f6a-475e-8bfe-c617762b2af0_1688467513294"
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
		this.ctrl.memory63.view_name = "f_npss_lca_tran_srch"
		this.ctrl.memory63.ctrl_id = "npss_lca_tran_srch_memory63"
		this.ctrl.npss_lca_tran_srch_memory63 = {}
		this.ctrl.npss_lca_tran_srch_memory63.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_iban
		this.ctrl.cdtr_iban = {}
		this.ctrl.cdtr_iban.id = "a790833c-bb0a-4de3-8127-bebfb8528ede_1688467513294"
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
		this.ctrl.cdtr_iban.view_name = "f_npss_lca_tran_srch"
		this.ctrl.cdtr_iban.ctrl_id = "npss_lca_tran_srch_cdtr_iban"
		this.ctrl.npss_lca_tran_srch_cdtr_iban = {}
		this.ctrl.npss_lca_tran_srch_cdtr_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cr_acct_identification
		this.ctrl.cr_acct_identification = {}
		this.ctrl.cr_acct_identification.id = "2eada53e-a6d9-4dfe-ab5a-ac2aa9069ea9_1688467513294"
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
		this.ctrl.cr_acct_identification.view_name = "f_npss_lca_tran_srch"
		this.ctrl.cr_acct_identification.ctrl_id = "npss_lca_tran_srch_cr_acct_identification"
		this.ctrl.npss_lca_tran_srch_cr_acct_identification = {}
		this.ctrl.npss_lca_tran_srch_cr_acct_identification.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_acct_name
		this.ctrl.cdtr_acct_name = {}
		this.ctrl.cdtr_acct_name.id = "a45bc7b2-c96c-447c-8af0-d18603e1077c_1688467513294"
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
		this.ctrl.cdtr_acct_name.view_name = "f_npss_lca_tran_srch"
		this.ctrl.cdtr_acct_name.ctrl_id = "npss_lca_tran_srch_cdtr_acct_name"
		this.ctrl.npss_lca_tran_srch_cdtr_acct_name = {}
		this.ctrl.npss_lca_tran_srch_cdtr_acct_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_iban
		this.ctrl.dbtr_iban = {}
		this.ctrl.dbtr_iban.id = "7e6cb7b5-e22a-459d-a22d-2b60cc700c7f_1688467513294"
		this.ctrl.dbtr_iban.desc = "Debtor IBAN"
		this.ctrl.dbtr_iban.visible = true
		this.ctrl.dbtr_iban.label_name = "Debtor IBAN"
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
		this.ctrl.dbtr_iban.view_name = "f_npss_lca_tran_srch"
		this.ctrl.dbtr_iban.ctrl_id = "npss_lca_tran_srch_dbtr_iban"
		this.ctrl.npss_lca_tran_srch_dbtr_iban = {}
		this.ctrl.npss_lca_tran_srch_dbtr_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of clrsysref
		this.ctrl.clrsysref = {}
		this.ctrl.clrsysref.id = "de186694-17d9-4927-b637-c23d989e5583_1688467513294"
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
		this.ctrl.clrsysref.view_name = "f_npss_lca_tran_srch"
		this.ctrl.clrsysref.ctrl_id = "npss_lca_tran_srch_clrsysref"
		this.ctrl.npss_lca_tran_srch_clrsysref = {}
		this.ctrl.npss_lca_tran_srch_clrsysref.onChangecomponent = new EventEmitter<any>()
	
		//Properties of payment_endtoend_id
		this.ctrl.payment_endtoend_id = {}
		this.ctrl.payment_endtoend_id.id = "d6ff822b-ced1-494a-91df-0b63743983de_1688467513294"
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
		this.ctrl.payment_endtoend_id.view_name = "f_npss_lca_tran_srch"
		this.ctrl.payment_endtoend_id.ctrl_id = "npss_lca_tran_srch_payment_endtoend_id"
		this.ctrl.npss_lca_tran_srch_payment_endtoend_id = {}
		this.ctrl.npss_lca_tran_srch_payment_endtoend_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of processing_system
		this.ctrl.processing_system = {}
		this.ctrl.processing_system.id = "39ffba78-8891-4f08-8b74-562ad806ffb4_1688467513294"
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
		this.ctrl.processing_system.view_name = "f_npss_lca_tran_srch"
		this.ctrl.processing_system.ctrl_id = "npss_lca_tran_srch_processing_system"
		this.ctrl.npss_lca_tran_srch_processing_system = {}
		this.ctrl.npss_lca_tran_srch_processing_system.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_lca_tran_srch.model = {"VALUE_DATE":"setcurrentdate(),{}","MEMORY63":"setcurrentdate(),{}","CDTR_IBAN":"","CR_ACCT_IDENTIFICATION":"","CDTR_ACCT_NAME":"","DBTR_IBAN":"","CLRSYSREF":"","PAYMENT_ENDTOEND_ID":"","PROCESSING_SYSTEM":""}
		this.screen_instance[this.comp_id].f_npss_lca_tran_srch.Meta = [{"CTLR_CODE":"CDN_DATE","DATA_TYPE":"DATETIME","TARGET_COLUMN":"VALUE_DATE"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_IBAN"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"CR_ACCT_IDENTIFICATION"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_ACCT_NAME"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_IBAN"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"CLRSYSREF"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"PAYMENT_ENDTOEND_ID"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROCESSING_SYSTEM"}]
		this.screen_instance[this.comp_id].f_npss_lca_tran_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_lca_tran_srch.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_lca_tran_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_lca_tran_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_lca_tran_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_lca_tran_srch[control][property] = value;
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
    