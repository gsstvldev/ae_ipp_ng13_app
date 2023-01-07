/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27746 
Modified By     : Admin 
Modified Date   : 2023-Jan-07 12:52 PM 
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
  @ViewChild('npss_op_reversal_srch_value_date') element: ElementRef;
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
		this.ctrl.value_date.default_value = ""
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
		this.ctrl.value_date.view_name = "f_npss_op_reversal_srch"
		this.ctrl.value_date.ctrl_id = "npss_op_reversal_srch_value_date"
		this.ctrl.npss_op_reversal_srch_value_date = {}
		this.ctrl.npss_op_reversal_srch_value_date.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_iban
		this.ctrl.dbtr_iban = {}
		this.ctrl.dbtr_iban.id = "RN41CN8"
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
		this.ctrl.dbtr_iban.view_name = "f_npss_op_reversal_srch"
		this.ctrl.dbtr_iban.ctrl_id = "npss_op_reversal_srch_dbtr_iban"
		this.ctrl.npss_op_reversal_srch_dbtr_iban = {}
		this.ctrl.npss_op_reversal_srch_dbtr_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_acct_no
		this.ctrl.dbtr_acct_no = {}
		this.ctrl.dbtr_acct_no.id = "RN41CN9"
		this.ctrl.dbtr_acct_no.desc = "Dr Account Identification"
		this.ctrl.dbtr_acct_no.visible = true
		this.ctrl.dbtr_acct_no.label_name = "Dr Account Identification"
		this.ctrl.dbtr_acct_no.df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_acct_no.df_description = "Column Group 1"
		this.ctrl.dbtr_acct_no.uictrl_code = "TXT"
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
		this.ctrl.dbtr_acct_no.view_name = "f_npss_op_reversal_srch"
		this.ctrl.dbtr_acct_no.ctrl_id = "npss_op_reversal_srch_dbtr_acct_no"
		this.ctrl.npss_op_reversal_srch_dbtr_acct_no = {}
		this.ctrl.npss_op_reversal_srch_dbtr_acct_no.onChangecomponent = new EventEmitter<any>()
	
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
	
		//Properties of intrbk_sttlm_amnt
		this.ctrl.intrbk_sttlm_amnt = {}
		this.ctrl.intrbk_sttlm_amnt.id = "RN01CN4"
		this.ctrl.intrbk_sttlm_amnt.desc = "Original Amount"
		this.ctrl.intrbk_sttlm_amnt.visible = true
		this.ctrl.intrbk_sttlm_amnt.label_name = "Original Amount"
		this.ctrl.intrbk_sttlm_amnt.df_code = "DF_1304_1665901396659"
		this.ctrl.intrbk_sttlm_amnt.df_description = "Column Group 1"
		this.ctrl.intrbk_sttlm_amnt.uictrl_code = "CDN_CTRL"
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
		this.ctrl.intrbk_sttlm_amnt.view_name = "f_npss_op_reversal_srch"
		this.ctrl.intrbk_sttlm_amnt.ctrl_id = "npss_op_reversal_srch_intrbk_sttlm_amnt"
		this.ctrl.npss_op_reversal_srch_intrbk_sttlm_amnt = {}
		this.ctrl.npss_op_reversal_srch_intrbk_sttlm_amnt.onChangecomponent = new EventEmitter<any>()
	
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
		this.screen_instance[this.comp_id].f_npss_op_reversal_srch.model = {"VALUE_DATE":"","DBTR_IBAN":"","DBTR_ACCT_NO":"","UETR":"","INTRBK_STTLM_AMNT":"","REVERSAL_AMOUNT":"","MEMORY87":"","MEMORY75":""}
		this.screen_instance[this.comp_id].f_npss_op_reversal_srch.Meta = [{"CTLR_CODE":"CDN_DATE","DATA_TYPE":"DATETIME","TARGET_COLUMN":"VALUE_DATE"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_IBAN"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_ACCT_NO"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"UETR"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"NUMBER","TARGET_COLUMN":"INTRBK_STTLM_AMNT"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"NUMBER","TARGET_COLUMN":"REVERSAL_AMOUNT"}]
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
    