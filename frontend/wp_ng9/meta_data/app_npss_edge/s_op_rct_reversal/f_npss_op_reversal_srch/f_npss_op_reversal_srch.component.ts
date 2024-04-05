/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35107 
Modified By     : Admin 
Modified Date   : 2024-Apr-05 9:38 AM 
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
  @ViewChild('npss_op_reversal_srch_memory130') element: ElementRef;
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

  
		//Properties of memory130
		this.ctrl.memory130 = {}
		this.ctrl.memory130.id = "RN41CN11"
		this.ctrl.memory130.desc = "Debit IBAN"
		this.ctrl.memory130.visible = true
		this.ctrl.memory130.label_name = "Debit IBAN"
		this.ctrl.memory130.df_code = "DF_1304_1665901396659"
		this.ctrl.memory130.df_description = "Column Group 1"
		this.ctrl.memory130.uictrl_code = "CDN_CTRL"
		this.ctrl.memory130.target_column = "memory130"
		this.ctrl.memory130.data_type = "TEXT"
		this.ctrl.memory130.data_length = 0
		this.ctrl.memory130.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory130.default_value = ""
		this.ctrl.memory130.is_memory_ctrl = "Y"
		this.ctrl.memory130.field_coordinates = ""
		this.ctrl.memory130.sub_details = ""
		this.ctrl.memory130.accept_char = ""
		this.ctrl.memory130.currency_format = ""
		this.ctrl.memory130.data_scale = ""
		this.ctrl.memory130.binding_name = "DBTR_IBAN"
		this.ctrl.memory130.hide_label = false
		this.ctrl.memory130.depends_on = "memory97:IBAN"
		this.ctrl.memory130.placeholder = ""
		this.ctrl.memory130.dynamic_param = ""
		this.ctrl.memory130.style_code = ""
		this.ctrl.memory130.data_source = ""
		this.ctrl.memory130.image_association = ""
		this.ctrl.memory130.show = false
		this.ctrl.memory130.sub_content = ""
		this.ctrl.memory130.required = false
		this.ctrl.memory130.vld_rules = []
		this.ctrl.memory130.targetcolumn_lower = "memory130"
		this.ctrl.memory130.disabled = false
		this.ctrl.memory130.view_name = "f_npss_op_reversal_srch"
		this.ctrl.memory130.ctrl_id = "npss_op_reversal_srch_memory130"
		this.ctrl.npss_op_reversal_srch_memory130 = {}
		this.ctrl.npss_op_reversal_srch_memory130.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_acct_no
		this.ctrl.dbtr_acct_no = {}
		this.ctrl.dbtr_acct_no.id = "RN41CN12"
		this.ctrl.dbtr_acct_no.desc = "Debit Card No"
		this.ctrl.dbtr_acct_no.visible = true
		this.ctrl.dbtr_acct_no.label_name = "Debit Card No"
		this.ctrl.dbtr_acct_no.df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_acct_no.df_description = "Column Group 1"
		this.ctrl.dbtr_acct_no.uictrl_code = "CDN_CTRL"
		this.ctrl.dbtr_acct_no.target_column = "DBTR_ACCT_NO"
		this.ctrl.dbtr_acct_no.data_type = "TEXT"
		this.ctrl.dbtr_acct_no.data_length = 512
		this.ctrl.dbtr_acct_no.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_acct_no.default_value = ""
		this.ctrl.dbtr_acct_no.is_memory_ctrl = ""
		this.ctrl.dbtr_acct_no.field_coordinates = ""
		this.ctrl.dbtr_acct_no.sub_details = ""
		this.ctrl.dbtr_acct_no.accept_char = ""
		this.ctrl.dbtr_acct_no.currency_format = ""
		this.ctrl.dbtr_acct_no.data_scale = ""
		this.ctrl.dbtr_acct_no.binding_name = "DBTR_ACCT_NO"
		this.ctrl.dbtr_acct_no.hide_label = false
		this.ctrl.dbtr_acct_no.depends_on = "memory97:CARD"
		this.ctrl.dbtr_acct_no.placeholder = ""
		this.ctrl.dbtr_acct_no.dynamic_param = ""
		this.ctrl.dbtr_acct_no.style_code = ""
		this.ctrl.dbtr_acct_no.data_source = ""
		this.ctrl.dbtr_acct_no.image_association = ""
		this.ctrl.dbtr_acct_no.show = false
		this.ctrl.dbtr_acct_no.sub_content = ""
		this.ctrl.dbtr_acct_no.required = false
		this.ctrl.dbtr_acct_no.vld_rules = []
		this.ctrl.dbtr_acct_no.targetcolumn_lower = "dbtr_acct_no"
		this.ctrl.dbtr_acct_no.disabled = false
		this.ctrl.dbtr_acct_no.view_name = "f_npss_op_reversal_srch"
		this.ctrl.dbtr_acct_no.ctrl_id = "npss_op_reversal_srch_dbtr_acct_no"
		this.ctrl.npss_op_reversal_srch_dbtr_acct_no = {}
		this.ctrl.npss_op_reversal_srch_dbtr_acct_no.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory132
		this.ctrl.memory132 = {}
		this.ctrl.memory132.id = "RN21CN10"
		this.ctrl.memory132.desc = "Transaction Date"
		this.ctrl.memory132.visible = true
		this.ctrl.memory132.label_name = "Transaction Date"
		this.ctrl.memory132.df_code = "DF_1304_1665901396659"
		this.ctrl.memory132.df_description = "Column Group 1"
		this.ctrl.memory132.uictrl_code = "CDN_DATE"
		this.ctrl.memory132.target_column = "memory132"
		this.ctrl.memory132.data_type = "DATETIME"
		this.ctrl.memory132.data_length = 0
		this.ctrl.memory132.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory132.default_value = "setcurrentdate(),{}"
		this.ctrl.memory132.is_memory_ctrl = "Y"
		this.ctrl.memory132.field_coordinates = ""
		this.ctrl.memory132.sub_details = ""
		this.ctrl.memory132.accept_char = ""
		this.ctrl.memory132.currency_format = ""
		this.ctrl.memory132.data_scale = ""
		this.ctrl.memory132.binding_name = "CREATED_DATE"
		this.ctrl.memory132.hide_label = false
		this.ctrl.memory132.depends_on = ""
		this.ctrl.memory132.placeholder = ""
		this.ctrl.memory132.dynamic_param = ""
		this.ctrl.memory132.style_code = ""
		this.ctrl.memory132.data_source = ""
		this.ctrl.memory132.image_association = ""
		this.ctrl.memory132.show = true
		this.ctrl.memory132.sub_content = ""
		this.ctrl.memory132.required = false
		this.ctrl.memory132.vld_rules = []
		this.ctrl.memory132.targetcolumn_lower = "memory132"
		this.ctrl.memory132.disabled = false
		this.ctrl.memory132.view_name = "f_npss_op_reversal_srch"
		this.ctrl.memory132.ctrl_id = "npss_op_reversal_srch_memory132"
		this.ctrl.npss_op_reversal_srch_memory132 = {}
		this.ctrl.npss_op_reversal_srch_memory132.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory131
		this.ctrl.memory131 = {}
		this.ctrl.memory131.id = "RN21CN13"
		this.ctrl.memory131.desc = "Amount"
		this.ctrl.memory131.visible = true
		this.ctrl.memory131.label_name = "Amount"
		this.ctrl.memory131.df_code = "DF_1304_1665901396659"
		this.ctrl.memory131.df_description = "Column Group 1"
		this.ctrl.memory131.uictrl_code = "CDN_CTRL"
		this.ctrl.memory131.target_column = "memory131"
		this.ctrl.memory131.data_type = "NUMBER"
		this.ctrl.memory131.data_length = 0
		this.ctrl.memory131.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory131.default_value = ""
		this.ctrl.memory131.is_memory_ctrl = "Y"
		this.ctrl.memory131.field_coordinates = ""
		this.ctrl.memory131.sub_details = ""
		this.ctrl.memory131.accept_char = ""
		this.ctrl.memory131.currency_format = ""
		this.ctrl.memory131.data_scale = ""
		this.ctrl.memory131.binding_name = "INTRBK_STTLM_AMNT"
		this.ctrl.memory131.hide_label = false
		this.ctrl.memory131.depends_on = ""
		this.ctrl.memory131.placeholder = ""
		this.ctrl.memory131.dynamic_param = ""
		this.ctrl.memory131.style_code = ""
		this.ctrl.memory131.data_source = ""
		this.ctrl.memory131.image_association = ""
		this.ctrl.memory131.show = true
		this.ctrl.memory131.sub_content = ""
		this.ctrl.memory131.required = false
		this.ctrl.memory131.vld_rules = []
		this.ctrl.memory131.targetcolumn_lower = "memory131"
		this.ctrl.memory131.disabled = false
		this.ctrl.memory131.view_name = "f_npss_op_reversal_srch"
		this.ctrl.memory131.ctrl_id = "npss_op_reversal_srch_memory131"
		this.ctrl.npss_op_reversal_srch_memory131 = {}
		this.ctrl.npss_op_reversal_srch_memory131.onChangecomponent = new EventEmitter<any>()
	
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
	
		//Properties of memory118
		this.ctrl.memory118 = {}
		this.ctrl.memory118.id = "RN81CN11"
		this.ctrl.memory118.desc = "T24/CI reference number"
		this.ctrl.memory118.visible = true
		this.ctrl.memory118.label_name = "T24/CI reference number"
		this.ctrl.memory118.df_code = "DF_1304_1665901396659"
		this.ctrl.memory118.df_description = "Column Group 1"
		this.ctrl.memory118.uictrl_code = "CDN_CTRL"
		this.ctrl.memory118.target_column = "memory118"
		this.ctrl.memory118.data_type = "TEXT"
		this.ctrl.memory118.data_length = 64
		this.ctrl.memory118.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory118.default_value = ""
		this.ctrl.memory118.is_memory_ctrl = "Y"
		this.ctrl.memory118.field_coordinates = ""
		this.ctrl.memory118.sub_details = ""
		this.ctrl.memory118.accept_char = ""
		this.ctrl.memory118.currency_format = ""
		this.ctrl.memory118.data_scale = ""
		this.ctrl.memory118.binding_name = "NPSSTRRD_REFNO"
		this.ctrl.memory118.hide_label = false
		this.ctrl.memory118.depends_on = ""
		this.ctrl.memory118.placeholder = ""
		this.ctrl.memory118.dynamic_param = ""
		this.ctrl.memory118.style_code = ""
		this.ctrl.memory118.data_source = ""
		this.ctrl.memory118.image_association = ""
		this.ctrl.memory118.show = true
		this.ctrl.memory118.sub_content = ""
		this.ctrl.memory118.required = false
		this.ctrl.memory118.vld_rules = []
		this.ctrl.memory118.targetcolumn_lower = "memory118"
		this.ctrl.memory118.disabled = false
		this.ctrl.memory118.view_name = "f_npss_op_reversal_srch"
		this.ctrl.memory118.ctrl_id = "npss_op_reversal_srch_memory118"
		this.ctrl.npss_op_reversal_srch_memory118 = {}
		this.ctrl.npss_op_reversal_srch_memory118.onChangecomponent = new EventEmitter<any>()
	
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
		this.ctrl.memory87.data_source = {"ds_code":"UDS_1304_1671190293384","ds_description":"NPSS Reversal Code CDB","rows":[],"type":"DPS_TABLE","value_member":"CD_CODE","display_member":"DESCRIPTION","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_VW_NC_CODE_DESCRIPTION","context":"","filters":[{"filter_name":"Filter1","binding_name":"NEED_SYNC","id":"DF_1678253616790","binding_value":"Y","source_name":"NEED_SYNC","source_value":"Y","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter2","binding_name":"TENANT_ID","id":"DF_1678253616790","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"},{"filter_name":"Filter3","binding_name":"CD_CATEGORY","id":"DF_1678253616790","binding_value":"REVERSAL_REASON_IDENTIFIER_CODE","source_name":"CD_CATEGORY","source_value":"REVERSAL_REASON_IDENTIFIER_CODE","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter4","binding_name":"PROCESSING_SYSTEM","id":"DF_1678253616790","binding_value":"CBUAE","source_name":"PROCESSING_SYSTEM","source_value":"CBUAE","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"NEED_SYNC","binding_value":"Y","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"Y"},{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"},{"operators":"=","data_type":"TEXT","binding_name":"CD_CATEGORY","binding_value":"REVERSAL_REASON_IDENTIFIER_CODE","sort_order":3,"conjuction_operator":"","is_cluster_key":"N","temp_value":"REVERSAL_REASON_IDENTIFIER_CODE","filter_values":"HARDCODED"},{"operators":"=","data_type":"TEXT","binding_name":"PROCESSING_SYSTEM","binding_value":"CBUAE","sort_order":4,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"CBUAE"}]},"query":"(NEED_SYNC = Y AND TENANT_ID = SESSION_LEVEL.TENANT_ID AND CD_CATEGORY = REVERSAL_REASON_IDENTIFIER_CODE AND PROCESSING_SYSTEM = CBUAE)"},"sel_columns":[],"need_first_item_selection":false,"has_parent":false}
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
		this.ctrl.memory75.data_source = {"ds_code":"UDS_1304_1671191058752","ds_description":"NPSS OP Reversal Status","rows":[],"type":"DPS_TABLE","value_member":"CD_CODE","display_member":"CD_DESCRIPTION","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_NC_CODE_DESCRIPTIONS","context":"","filters":[{"filter_name":"Filter1","binding_name":"NEED_SYNC","id":"DF_1678253074914","binding_value":"Y","source_name":"NEED_SYNC","source_value":"Y","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter2","binding_name":"CD_CATEGORY","id":"DF_1678253074914","binding_value":"OP_REVERSAL_STATUS","source_name":"CD_CATEGORY","source_value":"OP_REVERSAL_STATUS","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter3","binding_name":"TENANT_ID","id":"DF_1678253074914","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"NEED_SYNC","binding_value":"Y","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"Y"},{"operators":"=","data_type":"TEXT","binding_name":"CD_CATEGORY","binding_value":"OP_REVERSAL_STATUS","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"OP_REVERSAL_STATUS"},{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":3,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"}]},"query":"(NEED_SYNC = Y AND CD_CATEGORY = OP_REVERSAL_STATUS AND TENANT_ID = SESSION_LEVEL.TENANT_ID)"},"sel_columns":[],"need_first_item_selection":false,"has_parent":false}
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
	
		//Properties of memory101
		this.ctrl.memory101 = {}
		this.ctrl.memory101.id = "RN51CN12"
		this.ctrl.memory101.desc = "FT Number"
		this.ctrl.memory101.visible = true
		this.ctrl.memory101.label_name = "FT Number"
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
	
		//Properties of process_group
		this.ctrl.process_group = {}
		this.ctrl.process_group.id = "RN51CN13"
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
		this.ctrl.process_group.data_source = {"ds_code":"UDS_1304_1707195068242","ds_description":"NPSS Process Group RPT CDB","rows":[],"type":"DPS_TABLE","value_member":"CD_CODE","display_member":"CD_DESCRIPTION","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_NC_CODE_DESCRIPTIONS","context":"","filters":[{"filter_name":"Filter1","binding_name":"TENANT_ID","id":"DF_1710314316507","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"},{"filter_name":"Filter2","binding_name":"CD_CATEGORY","id":"DF_1710314316507","binding_value":"RPT_PRC_GROUP","source_name":"CD_CATEGORY","source_value":"RPT_PRC_GROUP","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter3","binding_name":"NEED_SYNC","id":"DF_1710314316507","binding_value":"Y","source_name":"NEED_SYNC","source_value":"Y","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","temp_value":"TENANT_ID","filter_values":"SESSION_LEVEL"},{"operators":"=","data_type":"TEXT","binding_name":"CD_CATEGORY","binding_value":"RPT_PRC_GROUP","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"RPT_PRC_GROUP"},{"operators":"=","data_type":"TEXT","binding_name":"NEED_SYNC","binding_value":"Y","sort_order":3,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"Y"}]},"query":"(TENANT_ID = SESSION_LEVEL.TENANT_ID AND CD_CATEGORY = RPT_PRC_GROUP AND NEED_SYNC = Y)"},"sel_columns":[],"need_first_item_selection":false,"has_parent":false}
		this.ctrl.process_group.image_association = ""
		this.ctrl.process_group.show = true
		this.ctrl.process_group.sub_content = ""
		this.ctrl.process_group.required = false
		this.ctrl.process_group.vld_rules = []
		this.ctrl.process_group.targetcolumn_lower = "process_group"
		this.ctrl.process_group.disabled = false
		this.ctrl.process_group.view_name = "f_npss_op_reversal_srch"
		this.ctrl.process_group.ctrl_id = "npss_op_reversal_srch_process_group"
		this.ctrl.npss_op_reversal_srch_process_group = {}
		this.ctrl.npss_op_reversal_srch_process_group.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_op_reversal_srch.process_group = {}
	
		//Properties of channel_refno
		this.ctrl.channel_refno = {}
		this.ctrl.channel_refno.id = "RN61CN14"
		this.ctrl.channel_refno.desc = "Batch Reference No"
		this.ctrl.channel_refno.visible = true
		this.ctrl.channel_refno.label_name = "Batch Reference No"
		this.ctrl.channel_refno.df_code = "DF_1304_1665901396659"
		this.ctrl.channel_refno.df_description = "Column Group 1"
		this.ctrl.channel_refno.uictrl_code = "CDN_CTRL"
		this.ctrl.channel_refno.target_column = "CHANNEL_REFNO"
		this.ctrl.channel_refno.data_type = "TEXT"
		this.ctrl.channel_refno.data_length = 128
		this.ctrl.channel_refno.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.channel_refno.default_value = ""
		this.ctrl.channel_refno.is_memory_ctrl = ""
		this.ctrl.channel_refno.field_coordinates = ""
		this.ctrl.channel_refno.sub_details = ""
		this.ctrl.channel_refno.accept_char = ""
		this.ctrl.channel_refno.currency_format = ""
		this.ctrl.channel_refno.data_scale = ""
		this.ctrl.channel_refno.binding_name = "CHANNEL_REFNO"
		this.ctrl.channel_refno.hide_label = false
		this.ctrl.channel_refno.depends_on = ""
		this.ctrl.channel_refno.placeholder = ""
		this.ctrl.channel_refno.dynamic_param = ""
		this.ctrl.channel_refno.style_code = ""
		this.ctrl.channel_refno.data_source = ""
		this.ctrl.channel_refno.image_association = ""
		this.ctrl.channel_refno.show = true
		this.ctrl.channel_refno.sub_content = ""
		this.ctrl.channel_refno.required = false
		this.ctrl.channel_refno.vld_rules = []
		this.ctrl.channel_refno.targetcolumn_lower = "channel_refno"
		this.ctrl.channel_refno.disabled = false
		this.ctrl.channel_refno.view_name = "f_npss_op_reversal_srch"
		this.ctrl.channel_refno.ctrl_id = "npss_op_reversal_srch_channel_refno"
		this.ctrl.npss_op_reversal_srch_channel_refno = {}
		this.ctrl.npss_op_reversal_srch_channel_refno.onChangecomponent = new EventEmitter<any>()
	
		//Properties of tran_ref_id
		this.ctrl.tran_ref_id = {}
		this.ctrl.tran_ref_id.id = "RN61CN15"
		this.ctrl.tran_ref_id.desc = "Batch Tran Ref No"
		this.ctrl.tran_ref_id.visible = true
		this.ctrl.tran_ref_id.label_name = "Batch Tran Ref No"
		this.ctrl.tran_ref_id.df_code = "DF_1304_1665901396659"
		this.ctrl.tran_ref_id.df_description = "Column Group 1"
		this.ctrl.tran_ref_id.uictrl_code = "CDN_CTRL"
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
		this.ctrl.tran_ref_id.view_name = "f_npss_op_reversal_srch"
		this.ctrl.tran_ref_id.ctrl_id = "npss_op_reversal_srch_tran_ref_id"
		this.ctrl.npss_op_reversal_srch_tran_ref_id = {}
		this.ctrl.npss_op_reversal_srch_tran_ref_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of outward_file_name
		this.ctrl.outward_file_name = {}
		this.ctrl.outward_file_name.id = "RN71CN16"
		this.ctrl.outward_file_name.desc = "Outward File Name"
		this.ctrl.outward_file_name.visible = false
		this.ctrl.outward_file_name.label_name = "Outward File Name"
		this.ctrl.outward_file_name.df_code = "DF_1304_1665901396659"
		this.ctrl.outward_file_name.df_description = "Column Group 1"
		this.ctrl.outward_file_name.uictrl_code = "CDN_CTRL"
		this.ctrl.outward_file_name.target_column = "OUTWARD_FILE_NAME"
		this.ctrl.outward_file_name.data_type = "TEXT"
		this.ctrl.outward_file_name.data_length = 256
		this.ctrl.outward_file_name.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.outward_file_name.default_value = ""
		this.ctrl.outward_file_name.is_memory_ctrl = ""
		this.ctrl.outward_file_name.field_coordinates = ""
		this.ctrl.outward_file_name.sub_details = ""
		this.ctrl.outward_file_name.accept_char = ""
		this.ctrl.outward_file_name.currency_format = ""
		this.ctrl.outward_file_name.data_scale = ""
		this.ctrl.outward_file_name.binding_name = "OUTWARD_FILE_NAME"
		this.ctrl.outward_file_name.hide_label = false
		this.ctrl.outward_file_name.depends_on = ""
		this.ctrl.outward_file_name.placeholder = ""
		this.ctrl.outward_file_name.dynamic_param = ""
		this.ctrl.outward_file_name.style_code = ""
		this.ctrl.outward_file_name.data_source = ""
		this.ctrl.outward_file_name.image_association = ""
		this.ctrl.outward_file_name.show = true
		this.ctrl.outward_file_name.sub_content = ""
		this.ctrl.outward_file_name.required = false
		this.ctrl.outward_file_name.vld_rules = []
		this.ctrl.outward_file_name.targetcolumn_lower = "outward_file_name"
		this.ctrl.outward_file_name.disabled = false
		this.ctrl.outward_file_name.view_name = "f_npss_op_reversal_srch"
		this.ctrl.outward_file_name.ctrl_id = "npss_op_reversal_srch_outward_file_name"
		this.ctrl.npss_op_reversal_srch_outward_file_name = {}
		this.ctrl.npss_op_reversal_srch_outward_file_name.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_op_reversal_srch.model = {"MEMORY130":"","DBTR_ACCT_NO":"","MEMORY132":"setcurrentdate(),{}","MEMORY131":"","REVERSAL_AMOUNT":"","PAYMENT_ENDTOEND_ID":"","CLRSYSREF":"","MEMORY118":"","UETR":"","MEMORY87":"","MEMORY75":"","MEMORY101":"","PROCESS_GROUP":"","CHANNEL_REFNO":"","TRAN_REF_ID":"","OUTWARD_FILE_NAME":""}
		this.screen_instance[this.comp_id].f_npss_op_reversal_srch.Meta = [{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_ACCT_NO"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"NUMBER","TARGET_COLUMN":"REVERSAL_AMOUNT"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"PAYMENT_ENDTOEND_ID"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"CLRSYSREF"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"UETR"},{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROCESS_GROUP"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"CHANNEL_REFNO"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"TRAN_REF_ID"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"OUTWARD_FILE_NAME"}]
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
    