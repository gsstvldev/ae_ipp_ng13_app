/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35083 
Modified By     : Admin 
Modified Date   : 2024-Apr-04 11:11 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_outward_arc_transactions_details
Form Name       : NPSS OP ARC Transaction Report SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_op_arc_transaction_report_srch',
  templateUrl: './f_npss_op_arc_transaction_report_srch.component.html',
  styleUrls: ['./f_npss_op_arc_transaction_report_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_op_arc_transaction_report_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_op_arc_transaction_report_srch') form;
  @ViewChild('npss_op_arc_transaction_report_srch_memory119') element: ElementRef;
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

  
		//Properties of memory119
		this.ctrl.memory119 = {}
		this.ctrl.memory119.id = "RN01CN2"
		this.ctrl.memory119.desc = "Message Type"
		this.ctrl.memory119.visible = true
		this.ctrl.memory119.label_name = "Message Type"
		this.ctrl.memory119.df_code = "DF_1304_1665901396659"
		this.ctrl.memory119.df_description = "Column Group 1"
		this.ctrl.memory119.uictrl_code = "CBO"
		this.ctrl.memory119.target_column = "memory119"
		this.ctrl.memory119.data_type = "TEXT"
		this.ctrl.memory119.data_length = 0
		this.ctrl.memory119.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory119.default_value = ""
		this.ctrl.memory119.is_memory_ctrl = "Y"
		this.ctrl.memory119.field_coordinates = ""
		this.ctrl.memory119.sub_details = ""
		this.ctrl.memory119.accept_char = ""
		this.ctrl.memory119.currency_format = ""
		this.ctrl.memory119.data_scale = ""
		this.ctrl.memory119.binding_name = "PROCESS_NAME"
		this.ctrl.memory119.hide_label = false
		this.ctrl.memory119.depends_on = ""
		this.ctrl.memory119.placeholder = ""
		this.ctrl.memory119.dynamic_param = ""
		this.ctrl.memory119.style_code = ""
		this.ctrl.memory119.data_source = {"ds_code":"UDS_1304_1678195196158","ds_description":"Msg Type CDB for rpt","rows":[],"type":"DPS_TABLE","value_member":"CD_CODE","display_member":"CD_DESCRIPTION","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_NC_CODE_DESCRIPTIONS","context":"","filters":[{"filter_name":"Filter1","binding_name":"CD_CATEGORY","id":"DF_1678346681058","binding_value":"OP_MESSAGE_TYPE","source_name":"CD_CATEGORY","source_value":"OP_MESSAGE_TYPE","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter2","binding_name":"TENANT_ID","id":"DF_1678346681058","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"},{"filter_name":"Filter3","binding_name":"NEED_SYNC","id":"DF_1678346681058","binding_value":"Y","source_name":"NEED_SYNC","source_value":"Y","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"CD_CATEGORY","binding_value":"OP_MESSAGE_TYPE","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"OP_MESSAGE_TYPE"},{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"},{"operators":"=","data_type":"TEXT","binding_name":"NEED_SYNC","binding_value":"Y","sort_order":3,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"Y"}]},"query":"(CD_CATEGORY = OP_MESSAGE_TYPE AND TENANT_ID = SESSION_LEVEL.TENANT_ID AND NEED_SYNC = Y)"},"sel_columns":[],"need_first_item_selection":false,"has_parent":false}
		this.ctrl.memory119.image_association = ""
		this.ctrl.memory119.show = true
		this.ctrl.memory119.sub_content = ""
		this.ctrl.memory119.required = false
		this.ctrl.memory119.vld_rules = []
		this.ctrl.memory119.targetcolumn_lower = "memory119"
		this.ctrl.memory119.disabled = false
		this.ctrl.memory119.view_name = "f_npss_op_arc_transaction_report_srch"
		this.ctrl.memory119.ctrl_id = "npss_op_arc_transaction_report_srch_memory119"
		this.ctrl.npss_op_arc_transaction_report_srch_memory119 = {}
		this.ctrl.npss_op_arc_transaction_report_srch_memory119.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_op_arc_transaction_report_srch.memory119 = {}
	
		//Properties of memory75
		this.ctrl.memory75 = {}
		this.ctrl.memory75.id = "RN01CN3"
		this.ctrl.memory75.desc = "Trn status"
		this.ctrl.memory75.visible = true
		this.ctrl.memory75.label_name = "Trn status"
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
		this.ctrl.memory75.data_source = {"ds_code":"UDS_1304_1669276117602","ds_description":"Status CDB FOR OP","rows":[],"type":"DPS_TABLE","value_member":"STATUS","display_member":"STATUS","first_record_display":"Select","column_list":"","order_by":"","target_table":"NPSS_VW_RPT_STATUS","context":"","filters":[{"filter_name":"Filter1","binding_name":"PROCESS_TYPE","id":"DF_1678086804065","binding_value":"OP","source_name":"PROCESS_TYPE","source_value":"OP","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"PROCESS_TYPE","binding_value":"OP","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"OP"}]},"query":"(PROCESS_TYPE = OP)"},"sel_columns":[],"need_first_item_selection":false,"has_parent":false}
		this.ctrl.memory75.image_association = ""
		this.ctrl.memory75.show = true
		this.ctrl.memory75.sub_content = ""
		this.ctrl.memory75.required = false
		this.ctrl.memory75.vld_rules = []
		this.ctrl.memory75.targetcolumn_lower = "memory75"
		this.ctrl.memory75.disabled = false
		this.ctrl.memory75.view_name = "f_npss_op_arc_transaction_report_srch"
		this.ctrl.memory75.ctrl_id = "npss_op_arc_transaction_report_srch_memory75"
		this.ctrl.npss_op_arc_transaction_report_srch_memory75 = {}
		this.ctrl.npss_op_arc_transaction_report_srch_memory75.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_op_arc_transaction_report_srch.memory75 = {}
	
		//Properties of department_code
		this.ctrl.department_code = {}
		this.ctrl.department_code.id = "RN01CN4"
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
		this.ctrl.department_code.data_source = {"ds_code":"UDS_1304_1677509056279","ds_description":"NPSS RPT LOGIN SYS AND CUR SYSTEM","rows":[],"type":"BIND_SYSTEMS","value_member":"S_DESCRIPTION","display_member":"S_DESCRIPTION","first_record_display":"Select","column_list":"","order_by":"","target_table":"","context":"","filters":[{"filter_name":"Filter1","binding_name":"ST_ID","id":"DF_1678714670799","binding_value":232,"source_name":"ST_ID","source_value":232,"source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"}],"type_desc":"Combo Binding System - Generic","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"ST_ID","binding_value":232,"sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":232}]},"query":"(ST_ID = 232)"},"sel_columns":[],"need_auto_first_record":true,"current_sys":true,"childsys":"ALLOCATED","need_first_item_selection":false,"has_parent":false}
		this.ctrl.department_code.image_association = ""
		this.ctrl.department_code.show = true
		this.ctrl.department_code.sub_content = ""
		this.ctrl.department_code.required = false
		this.ctrl.department_code.vld_rules = []
		this.ctrl.department_code.targetcolumn_lower = "department_code"
		this.ctrl.department_code.disabled = false
		this.ctrl.department_code.view_name = "f_npss_op_arc_transaction_report_srch"
		this.ctrl.department_code.ctrl_id = "npss_op_arc_transaction_report_srch_department_code"
		this.ctrl.npss_op_arc_transaction_report_srch_department_code = {}
		this.ctrl.npss_op_arc_transaction_report_srch_department_code.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_op_arc_transaction_report_srch.department_code = {}
	
		//Properties of memory63
		this.ctrl.memory63 = {}
		this.ctrl.memory63.id = "RN11CN5"
		this.ctrl.memory63.desc = "Transaction Date"
		this.ctrl.memory63.visible = true
		this.ctrl.memory63.label_name = "Transaction Date"
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
		this.ctrl.memory63.view_name = "f_npss_op_arc_transaction_report_srch"
		this.ctrl.memory63.ctrl_id = "npss_op_arc_transaction_report_srch_memory63"
		this.ctrl.npss_op_arc_transaction_report_srch_memory63 = {}
		this.ctrl.npss_op_arc_transaction_report_srch_memory63.onChangecomponent = new EventEmitter<any>()
	
		//Properties of channel_refno
		this.ctrl.channel_refno = {}
		this.ctrl.channel_refno.id = "RN21CN7"
		this.ctrl.channel_refno.desc = "Channel Refno"
		this.ctrl.channel_refno.visible = true
		this.ctrl.channel_refno.label_name = "Channel Refno"
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
		this.ctrl.channel_refno.view_name = "f_npss_op_arc_transaction_report_srch"
		this.ctrl.channel_refno.ctrl_id = "npss_op_arc_transaction_report_srch_channel_refno"
		this.ctrl.npss_op_arc_transaction_report_srch_channel_refno = {}
		this.ctrl.npss_op_arc_transaction_report_srch_channel_refno.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_iban
		this.ctrl.dbtr_iban = {}
		this.ctrl.dbtr_iban.id = "RN21CN8"
		this.ctrl.dbtr_iban.desc = "Debtor Account"
		this.ctrl.dbtr_iban.visible = true
		this.ctrl.dbtr_iban.label_name = "Debtor Account"
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
		this.ctrl.dbtr_iban.view_name = "f_npss_op_arc_transaction_report_srch"
		this.ctrl.dbtr_iban.ctrl_id = "npss_op_arc_transaction_report_srch_dbtr_iban"
		this.ctrl.npss_op_arc_transaction_report_srch_dbtr_iban = {}
		this.ctrl.npss_op_arc_transaction_report_srch_dbtr_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_acct_name
		this.ctrl.dbtr_acct_name = {}
		this.ctrl.dbtr_acct_name.id = "RN31CN9"
		this.ctrl.dbtr_acct_name.desc = "Debtor Name"
		this.ctrl.dbtr_acct_name.visible = true
		this.ctrl.dbtr_acct_name.label_name = "Debtor Name"
		this.ctrl.dbtr_acct_name.df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_acct_name.df_description = "Column Group 1"
		this.ctrl.dbtr_acct_name.uictrl_code = "CDN_CTRL"
		this.ctrl.dbtr_acct_name.target_column = "DBTR_ACCT_NAME"
		this.ctrl.dbtr_acct_name.data_type = "TEXT"
		this.ctrl.dbtr_acct_name.data_length = 256
		this.ctrl.dbtr_acct_name.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_acct_name.default_value = ""
		this.ctrl.dbtr_acct_name.is_memory_ctrl = ""
		this.ctrl.dbtr_acct_name.field_coordinates = ""
		this.ctrl.dbtr_acct_name.sub_details = ""
		this.ctrl.dbtr_acct_name.accept_char = ""
		this.ctrl.dbtr_acct_name.currency_format = ""
		this.ctrl.dbtr_acct_name.data_scale = ""
		this.ctrl.dbtr_acct_name.binding_name = "DBTR_ACCT_NAME"
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
		this.ctrl.dbtr_acct_name.view_name = "f_npss_op_arc_transaction_report_srch"
		this.ctrl.dbtr_acct_name.ctrl_id = "npss_op_arc_transaction_report_srch_dbtr_acct_name"
		this.ctrl.npss_op_arc_transaction_report_srch_dbtr_acct_name = {}
		this.ctrl.npss_op_arc_transaction_report_srch_dbtr_acct_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_iban
		this.ctrl.cdtr_iban = {}
		this.ctrl.cdtr_iban.id = "RN31CN10"
		this.ctrl.cdtr_iban.desc = "Creditor Account"
		this.ctrl.cdtr_iban.visible = true
		this.ctrl.cdtr_iban.label_name = "Creditor Account"
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
		this.ctrl.cdtr_iban.view_name = "f_npss_op_arc_transaction_report_srch"
		this.ctrl.cdtr_iban.ctrl_id = "npss_op_arc_transaction_report_srch_cdtr_iban"
		this.ctrl.npss_op_arc_transaction_report_srch_cdtr_iban = {}
		this.ctrl.npss_op_arc_transaction_report_srch_cdtr_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_acct_no
		this.ctrl.cdtr_acct_no = {}
		this.ctrl.cdtr_acct_no.id = "RN41CN11"
		this.ctrl.cdtr_acct_no.desc = "Creditor Name"
		this.ctrl.cdtr_acct_no.visible = true
		this.ctrl.cdtr_acct_no.label_name = "Creditor Name"
		this.ctrl.cdtr_acct_no.df_code = "DF_1304_1665901396659"
		this.ctrl.cdtr_acct_no.df_description = "Column Group 1"
		this.ctrl.cdtr_acct_no.uictrl_code = "CDN_CTRL"
		this.ctrl.cdtr_acct_no.target_column = "CDTR_ACCT_NO"
		this.ctrl.cdtr_acct_no.data_type = "TEXT"
		this.ctrl.cdtr_acct_no.data_length = 20
		this.ctrl.cdtr_acct_no.zone_df_code = "DF_1304_1665901396659"
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
		this.ctrl.cdtr_acct_no.view_name = "f_npss_op_arc_transaction_report_srch"
		this.ctrl.cdtr_acct_no.ctrl_id = "npss_op_arc_transaction_report_srch_cdtr_acct_no"
		this.ctrl.npss_op_arc_transaction_report_srch_cdtr_acct_no = {}
		this.ctrl.npss_op_arc_transaction_report_srch_cdtr_acct_no.onChangecomponent = new EventEmitter<any>()
	
		//Properties of uetr
		this.ctrl.uetr = {}
		this.ctrl.uetr.id = "RN41CN12"
		this.ctrl.uetr.desc = "IPP Reference Number"
		this.ctrl.uetr.visible = true
		this.ctrl.uetr.label_name = "IPP Reference Number"
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
		this.ctrl.uetr.view_name = "f_npss_op_arc_transaction_report_srch"
		this.ctrl.uetr.ctrl_id = "npss_op_arc_transaction_report_srch_uetr"
		this.ctrl.npss_op_arc_transaction_report_srch_uetr = {}
		this.ctrl.npss_op_arc_transaction_report_srch_uetr.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory109
		this.ctrl.memory109 = {}
		this.ctrl.memory109.id = "RN51CN13"
		this.ctrl.memory109.desc = "Bank Name"
		this.ctrl.memory109.visible = false
		this.ctrl.memory109.label_name = "Bank Name"
		this.ctrl.memory109.df_code = "DF_1304_1665901396659"
		this.ctrl.memory109.df_description = "Column Group 1"
		this.ctrl.memory109.uictrl_code = "TXT"
		this.ctrl.memory109.target_column = "memory109"
		this.ctrl.memory109.data_type = "TEXT"
		this.ctrl.memory109.data_length = 0
		this.ctrl.memory109.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory109.default_value = ""
		this.ctrl.memory109.is_memory_ctrl = "Y"
		this.ctrl.memory109.field_coordinates = ""
		this.ctrl.memory109.sub_details = ""
		this.ctrl.memory109.accept_char = ""
		this.ctrl.memory109.currency_format = ""
		this.ctrl.memory109.data_scale = ""
		this.ctrl.memory109.binding_name = "BIC_CODE"
		this.ctrl.memory109.hide_label = false
		this.ctrl.memory109.depends_on = ""
		this.ctrl.memory109.placeholder = ""
		this.ctrl.memory109.dynamic_param = ""
		this.ctrl.memory109.style_code = ""
		this.ctrl.memory109.data_source = ""
		this.ctrl.memory109.image_association = ""
		this.ctrl.memory109.show = true
		this.ctrl.memory109.sub_content = ""
		this.ctrl.memory109.required = false
		this.ctrl.memory109.vld_rules = []
		this.ctrl.memory109.targetcolumn_lower = "memory109"
		this.ctrl.memory109.disabled = false
		this.ctrl.memory109.view_name = "f_npss_op_arc_transaction_report_srch"
		this.ctrl.memory109.ctrl_id = "npss_op_arc_transaction_report_srch_memory109"
		this.ctrl.npss_op_arc_transaction_report_srch_memory109 = {}
		this.ctrl.npss_op_arc_transaction_report_srch_memory109.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_op_arc_transaction_report_srch.model = {"MEMORY119":"","MEMORY75":"","DEPARTMENT_CODE":"","MEMORY63":"setcurrentdate(),{}","CHANNEL_REFNO":"","DBTR_IBAN":"","DBTR_ACCT_NAME":"","CDTR_IBAN":"","CDTR_ACCT_NO":"","UETR":"","MEMORY109":""}
		this.screen_instance[this.comp_id].f_npss_op_arc_transaction_report_srch.Meta = [{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"DEPARTMENT_CODE"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"CHANNEL_REFNO"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_IBAN"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_ACCT_NAME"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_IBAN"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_ACCT_NO"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"UETR"}]
		this.screen_instance[this.comp_id].f_npss_op_arc_transaction_report_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_op_arc_transaction_report_srch.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_op_arc_transaction_report_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_op_arc_transaction_report_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_op_arc_transaction_report_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_op_arc_transaction_report_srch[control][property] = value;
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
    