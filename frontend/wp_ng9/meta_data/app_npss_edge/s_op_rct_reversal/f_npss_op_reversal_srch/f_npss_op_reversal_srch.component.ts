/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27978 
Modified By     : Admin 
Modified Date   : 2023-Feb-02 5:34 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_op_rct_reversal
Form Name       : NPSS OP Reversal SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_op_reversal_srch',
  templateUrl: './f_npss_op_reversal_srch.component.html',
  styleUrls: ['./f_npss_op_reversal_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_op_reversal_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_op_reversal_srch') form;
  @ViewChild('npss_op_reversal_srch_memory100') element: ElementRef;
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
		this.ctrl.memory100.id = "RN41CN11"
		this.ctrl.memory100.desc = "Debit IBAN"
		this.ctrl.memory100.visible = true
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
		this.ctrl.memory100.view_name = "f_npss_op_reversal_srch"
		this.ctrl.memory100.ctrl_id = "npss_op_reversal_srch_memory100"
		this.ctrl.npss_op_reversal_srch_memory100 = {}
		this.ctrl.npss_op_reversal_srch_memory100.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory99
		this.ctrl.memory99 = {}
		this.ctrl.memory99.id = "RN41CN12"
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
		this.ctrl.memory99.view_name = "f_npss_op_reversal_srch"
		this.ctrl.memory99.ctrl_id = "npss_op_reversal_srch_memory99"
		this.ctrl.npss_op_reversal_srch_memory99 = {}
		this.ctrl.npss_op_reversal_srch_memory99.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory98
		this.ctrl.memory98 = {}
		this.ctrl.memory98.id = "RN21CN10"
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
		this.ctrl.memory98.view_name = "f_npss_op_reversal_srch"
		this.ctrl.memory98.ctrl_id = "npss_op_reversal_srch_memory98"
		this.ctrl.npss_op_reversal_srch_memory98 = {}
		this.ctrl.npss_op_reversal_srch_memory98.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory92
		this.ctrl.memory92 = {}
		this.ctrl.memory92.id = "RN21CN13"
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
		this.ctrl.memory92.view_name = "f_npss_op_reversal_srch"
		this.ctrl.memory92.ctrl_id = "npss_op_reversal_srch_memory92"
		this.ctrl.npss_op_reversal_srch_memory92 = {}
		this.ctrl.npss_op_reversal_srch_memory92.onChangecomponent = new EventEmitter<any>()
	
		//Properties of reversal_amount
		this.ctrl.reversal_amount = {}
		this.ctrl.reversal_amount.id = "RN11CN7001"
		this.ctrl.reversal_amount.desc = "Reversal Amount"
		this.ctrl.reversal_amount.visible = true
		this.ctrl.reversal_amount.label_name = "Reversal Amount"
		this.ctrl.reversal_amount.df_code = "DF_1304_1665901396659"
		this.ctrl.reversal_amount.df_description = "Column Group 1"
		this.ctrl.reversal_amount.uictrl_code = "CDN_CTRL"
		this.ctrl.reversal_amount.target_column = "REVERSAL_AMOUNT"
		this.ctrl.reversal_amount.data_type = "NUMBER"
		this.ctrl.reversal_amount.data_length = 19
		this.ctrl.reversal_amount.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.reversal_amount.default_value = ""
		this.ctrl.reversal_amount.is_memory_ctrl = ""
		this.ctrl.reversal_amount.field_coordinates = ""
		this.ctrl.reversal_amount.sub_details = ""
		this.ctrl.reversal_amount.accept_char = ""
		this.ctrl.reversal_amount.currency_format = ""
		this.ctrl.reversal_amount.data_scale = "2"
		this.ctrl.reversal_amount.binding_name = "REVERSAL_AMOUNT"
		this.ctrl.reversal_amount.hide_label = false
		this.ctrl.reversal_amount.depends_on = ""
		this.ctrl.reversal_amount.placeholder = ""
		this.ctrl.reversal_amount.dynamic_param = ""
		this.ctrl.reversal_amount.style_code = ""
		this.ctrl.reversal_amount.data_source = ""
		this.ctrl.reversal_amount.image_association = ""
		this.ctrl.reversal_amount.show = true
		this.ctrl.reversal_amount.sub_content = ""
		this.ctrl.reversal_amount.required = false
		this.ctrl.reversal_amount.vld_rules = []
		this.ctrl.reversal_amount.targetcolumn_lower = "reversal_amount"
		this.ctrl.reversal_amount.disabled = false
		this.ctrl.reversal_amount.view_name = "f_npss_op_reversal_srch"
		this.ctrl.reversal_amount.ctrl_id = "npss_op_reversal_srch_reversal_amount"
		this.ctrl.npss_op_reversal_srch_reversal_amount = {}
		this.ctrl.npss_op_reversal_srch_reversal_amount.onChangecomponent = new EventEmitter<any>()
	
		//Properties of payment_endtoend_id
		this.ctrl.payment_endtoend_id = {}
		this.ctrl.payment_endtoend_id.id = "RN71CN17"
		this.ctrl.payment_endtoend_id.desc = "Original E2E reference Number"
		this.ctrl.payment_endtoend_id.visible = false
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
		this.ctrl.payment_endtoend_id.view_name = "f_npss_op_reversal_srch"
		this.ctrl.payment_endtoend_id.ctrl_id = "npss_op_reversal_srch_payment_endtoend_id"
		this.ctrl.npss_op_reversal_srch_payment_endtoend_id = {}
		this.ctrl.npss_op_reversal_srch_payment_endtoend_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of clrsysref
		this.ctrl.clrsysref = {}
		this.ctrl.clrsysref.id = "RN61CN16"
		this.ctrl.clrsysref.desc = "Clearing System Reference"
		this.ctrl.clrsysref.visible = true
		this.ctrl.clrsysref.label_name = "Clearing System Reference"
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
		this.ctrl.clrsysref.view_name = "f_npss_op_reversal_srch"
		this.ctrl.clrsysref.ctrl_id = "npss_op_reversal_srch_clrsysref"
		this.ctrl.npss_op_reversal_srch_clrsysref = {}
		this.ctrl.npss_op_reversal_srch_clrsysref.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory101
		this.ctrl.memory101 = {}
		this.ctrl.memory101.id = "RN81CN11"
		this.ctrl.memory101.desc = "T24/CI reference number"
		this.ctrl.memory101.visible = false
		this.ctrl.memory101.label_name = "T24/CI reference number"
		this.ctrl.memory101.df_code = "DF_1304_1665901396659"
		this.ctrl.memory101.df_description = "Column Group 1"
		this.ctrl.memory101.uictrl_code = "CDN_CTRL"
		this.ctrl.memory101.target_column = "memory101"
		this.ctrl.memory101.data_type = "TEXT"
		this.ctrl.memory101.data_length = 64
		this.ctrl.memory101.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory101.default_value = ""
		this.ctrl.memory101.is_memory_ctrl = "Y"
		this.ctrl.memory101.field_coordinates = ""
		this.ctrl.memory101.sub_details = ""
		this.ctrl.memory101.accept_char = ""
		this.ctrl.memory101.currency_format = ""
		this.ctrl.memory101.data_scale = ""
		this.ctrl.memory101.binding_name = "PROCESS_REF_NO"
		this.ctrl.memory101.hide_label = false
		this.ctrl.memory101.depends_on = ""
		this.ctrl.memory101.placeholder = ""
		this.ctrl.memory101.dynamic_param = ""
		this.ctrl.memory101.style_code = ""
		this.ctrl.memory101.data_source = ""
		this.ctrl.memory101.image_association = ""
		this.ctrl.memory101.show = true
		this.ctrl.memory101.sub_content = ""
		this.ctrl.memory101.required = false
		this.ctrl.memory101.vld_rules = []
		this.ctrl.memory101.targetcolumn_lower = "memory101"
		this.ctrl.memory101.disabled = false
		this.ctrl.memory101.view_name = "f_npss_op_reversal_srch"
		this.ctrl.memory101.ctrl_id = "npss_op_reversal_srch_memory101"
		this.ctrl.npss_op_reversal_srch_memory101 = {}
		this.ctrl.npss_op_reversal_srch_memory101.onChangecomponent = new EventEmitter<any>()
	
		//Properties of uetr
		this.ctrl.uetr = {}
		this.ctrl.uetr.id = "RN01CN3"
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
		this.ctrl.uetr.view_name = "f_npss_op_reversal_srch"
		this.ctrl.uetr.ctrl_id = "npss_op_reversal_srch_uetr"
		this.ctrl.npss_op_reversal_srch_uetr = {}
		this.ctrl.npss_op_reversal_srch_uetr.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory87
		this.ctrl.memory87 = {}
		this.ctrl.memory87.id = "RN11CN5"
		this.ctrl.memory87.desc = "Reversal Code"
		this.ctrl.memory87.visible = true
		this.ctrl.memory87.label_name = "Reversal Code"
		this.ctrl.memory87.df_code = "DF_1304_1665901396659"
		this.ctrl.memory87.df_description = "Column Group 1"
		this.ctrl.memory87.uictrl_code = "CBO"
		this.ctrl.memory87.target_column = "memory87"
		this.ctrl.memory87.data_type = "TEXT"
		this.ctrl.memory87.data_length = 0
		this.ctrl.memory87.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory87.default_value = ""
		this.ctrl.memory87.is_memory_ctrl = "Y"
		this.ctrl.memory87.field_coordinates = ""
		this.ctrl.memory87.sub_details = ""
		this.ctrl.memory87.accept_char = ""
		this.ctrl.memory87.currency_format = ""
		this.ctrl.memory87.data_scale = ""
		this.ctrl.memory87.binding_name = "REVERSAL_CODE"
		this.ctrl.memory87.hide_label = false
		this.ctrl.memory87.depends_on = ""
		this.ctrl.memory87.placeholder = ""
		this.ctrl.memory87.dynamic_param = ""
		this.ctrl.memory87.style_code = ""
		this.ctrl.memory87.data_source = {"ds_code":"UDS_1304_1671190293384","ds_description":"NPSS Reversal Code CDB","rows":[],"type":"DPS_TABLE","value_member":"CD_CODE","display_member":"DESCRIPTION","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_VW_NC_CODE_DESCRIPTION","context":"","filters":[{"filter_name":"Filter1","binding_name":"STATUS","id":"DF_1671191243305","binding_value":"APPROVED","source_name":"STATUS","source_value":"APPROVED","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter2","binding_name":"TENANT_ID","id":"DF_1671191243305","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"},{"filter_name":"Filter3","binding_name":"CD_CATEGORY","id":"DF_1671191243305","binding_value":"REVERSAL_REASON_IDENTIFIER_CODE","source_name":"CD_CATEGORY","source_value":"REVERSAL_REASON_IDENTIFIER_CODE","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter4","binding_name":"PROCESSING_SYSTEM","id":"DF_1671191243305","binding_value":"CBUAE","source_name":"PROCESSING_SYSTEM","source_value":"CBUAE","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"STATUS","binding_value":"APPROVED","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"APPROVED"},{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"},{"operators":"=","data_type":"TEXT","binding_name":"CD_CATEGORY","binding_value":"REVERSAL_REASON_IDENTIFIER_CODE","sort_order":3,"conjuction_operator":"","is_cluster_key":"N","temp_value":"REVERSAL_REASON_IDENTIFIER_CODE","filter_values":"HARDCODED"},{"operators":"=","data_type":"TEXT","binding_name":"PROCESSING_SYSTEM","binding_value":"CBUAE","sort_order":4,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"CBUAE"}]},"query":"(STATUS = APPROVED AND TENANT_ID = SESSION_LEVEL.TENANT_ID AND CD_CATEGORY = REVERSAL_REASON_IDENTIFIER_CODE AND PROCESSING_SYSTEM = CBUAE)"},"sel_columns":[],"need_first_item_selection":false,"has_parent":false}
		this.ctrl.memory87.image_association = ""
		this.ctrl.memory87.show = true
		this.ctrl.memory87.sub_content = ""
		this.ctrl.memory87.required = false
		this.ctrl.memory87.vld_rules = []
		this.ctrl.memory87.targetcolumn_lower = "memory87"
		this.ctrl.memory87.disabled = false
		this.ctrl.memory87.view_name = "f_npss_op_reversal_srch"
		this.ctrl.memory87.ctrl_id = "npss_op_reversal_srch_memory87"
		this.ctrl.npss_op_reversal_srch_memory87 = {}
		this.ctrl.npss_op_reversal_srch_memory87.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_op_reversal_srch.memory87 = {}
	
		//Properties of memory75
		this.ctrl.memory75 = {}
		this.ctrl.memory75.id = "RN11CN10"
		this.ctrl.memory75.desc = "Status"
		this.ctrl.memory75.visible = true
		this.ctrl.memory75.label_name = "Status"
		this.ctrl.memory75.df_code = "DF_1304_1665901396659"
		this.ctrl.memory75.df_description = "Column Group 1"
		this.ctrl.memory75.uictrl_code = "CBO"
		this.ctrl.memory75.target_column = "memory75"
		this.ctrl.memory75.data_type = "TEXT"
		this.ctrl.memory75.data_length = 0
		this.ctrl.memory75.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory75.default_value = ""
		this.ctrl.memory75.is_memory_ctrl = "Y"
		this.ctrl.memory75.field_coordinates = ""
		this.ctrl.memory75.sub_details = ""
		this.ctrl.memory75.accept_char = ""
		this.ctrl.memory75.currency_format = ""
		this.ctrl.memory75.data_scale = ""
		this.ctrl.memory75.binding_name = "STATUS"
		this.ctrl.memory75.hide_label = false
		this.ctrl.memory75.depends_on = ""
		this.ctrl.memory75.placeholder = ""
		this.ctrl.memory75.dynamic_param = ""
		this.ctrl.memory75.style_code = ""
		this.ctrl.memory75.data_source = {"ds_code":"UDS_1304_1671191058752","ds_description":"NPSS OP Reversal Status","rows":[],"type":"DPS_TABLE","value_member":"CD_CODE","display_member":"CD_DESCRIPTION","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_NC_CODE_DESCRIPTIONS","context":"","filters":[{"filter_name":"Filter1","binding_name":"STATUS","id":"DF_1671191194251","binding_value":"APPROVED","source_name":"STATUS","source_value":"APPROVED","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter2","binding_name":"CD_CATEGORY","id":"DF_1671191194251","binding_value":"OP_REVERSAL_STATUS","source_name":"CD_CATEGORY","source_value":"OP_REVERSAL_STATUS","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter3","binding_name":"TENANT_ID","id":"DF_1671191194251","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"STATUS","binding_value":"APPROVED","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"APPROVED"},{"operators":"=","data_type":"TEXT","binding_name":"CD_CATEGORY","binding_value":"OP_REVERSAL_STATUS","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"OP_REVERSAL_STATUS"},{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":3,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"}]},"query":"(STATUS = APPROVED AND CD_CATEGORY = OP_REVERSAL_STATUS AND TENANT_ID = SESSION_LEVEL.TENANT_ID)"},"sel_columns":[]}
		this.ctrl.memory75.image_association = ""
		this.ctrl.memory75.show = true
		this.ctrl.memory75.sub_content = ""
		this.ctrl.memory75.required = false
		this.ctrl.memory75.vld_rules = []
		this.ctrl.memory75.targetcolumn_lower = "memory75"
		this.ctrl.memory75.disabled = false
		this.ctrl.memory75.view_name = "f_npss_op_reversal_srch"
		this.ctrl.memory75.ctrl_id = "npss_op_reversal_srch_memory75"
		this.ctrl.npss_op_reversal_srch_memory75 = {}
		this.ctrl.npss_op_reversal_srch_memory75.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_op_reversal_srch.memory75 = {}
		this.screen_instance[this.comp_id].f_npss_op_reversal_srch.model = {"MEMORY100":"","MEMORY99":"","MEMORY98":"","MEMORY92":"","REVERSAL_AMOUNT":"","PAYMENT_ENDTOEND_ID":"","CLRSYSREF":"","MEMORY101":"","UETR":"","MEMORY87":"","MEMORY75":""}
		this.screen_instance[this.comp_id].f_npss_op_reversal_srch.Meta = [{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"NUMBER","TARGET_COLUMN":"REVERSAL_AMOUNT"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"PAYMENT_ENDTOEND_ID"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"CLRSYSREF"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"UETR"}]
		this.screen_instance[this.comp_id].f_npss_op_reversal_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_op_reversal_srch.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_op_reversal_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_op_reversal_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_op_reversal_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_op_reversal_srch[control][property] = value;
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
    