/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34451 
Modified By     : Admin 
Modified Date   : 2024-Feb-20 10:47 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_outward_transactions_details
Form Name       : NPSS Outward Transaction Details Report SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_outward_transaction_details_report_srch',
  templateUrl: './f_npss_outward_transaction_details_report_srch.component.html',
  styleUrls: ['./f_npss_outward_transaction_details_report_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_outward_transaction_details_report_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_outward_transaction_details_report_srch') form;
  @ViewChild('npss_outward_transaction_details_report_srch_memory119') element: ElementRef;
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
		this.ctrl.memory119.id = "RN01CN1"
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
		this.ctrl.memory119.view_name = "f_npss_outward_transaction_details_report_srch"
		this.ctrl.memory119.ctrl_id = "npss_outward_transaction_details_report_srch_memory119"
		this.ctrl.npss_outward_transaction_details_report_srch_memory119 = {}
		this.ctrl.npss_outward_transaction_details_report_srch_memory119.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_outward_transaction_details_report_srch.memory119 = {}
	
		//Properties of memory75
		this.ctrl.memory75 = {}
		this.ctrl.memory75.id = "RN01CN2"
		this.ctrl.memory75.desc = "Transaction Status"
		this.ctrl.memory75.visible = true
		this.ctrl.memory75.label_name = "Transaction Status"
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
		this.ctrl.memory75.view_name = "f_npss_outward_transaction_details_report_srch"
		this.ctrl.memory75.ctrl_id = "npss_outward_transaction_details_report_srch_memory75"
		this.ctrl.npss_outward_transaction_details_report_srch_memory75 = {}
		this.ctrl.npss_outward_transaction_details_report_srch_memory75.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_outward_transaction_details_report_srch.memory75 = {}
	
		//Properties of department_code
		this.ctrl.department_code = {}
		this.ctrl.department_code.id = "RN11CN3"
		this.ctrl.department_code.desc = "Department Name"
		this.ctrl.department_code.visible = true
		this.ctrl.department_code.label_name = "Department Name"
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
		this.ctrl.department_code.view_name = "f_npss_outward_transaction_details_report_srch"
		this.ctrl.department_code.ctrl_id = "npss_outward_transaction_details_report_srch_department_code"
		this.ctrl.npss_outward_transaction_details_report_srch_department_code = {}
		this.ctrl.npss_outward_transaction_details_report_srch_department_code.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_outward_transaction_details_report_srch.department_code = {}
	
		//Properties of memory63
		this.ctrl.memory63 = {}
		this.ctrl.memory63.id = "RN11CN4"
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
		this.ctrl.memory63.view_name = "f_npss_outward_transaction_details_report_srch"
		this.ctrl.memory63.ctrl_id = "npss_outward_transaction_details_report_srch_memory63"
		this.ctrl.npss_outward_transaction_details_report_srch_memory63 = {}
		this.ctrl.npss_outward_transaction_details_report_srch_memory63.onChangecomponent = new EventEmitter<any>()
	
		//Properties of value_date
		this.ctrl.value_date = {}
		this.ctrl.value_date.id = "RN21CN5"
		this.ctrl.value_date.desc = "Processed Date"
		this.ctrl.value_date.visible = false
		this.ctrl.value_date.label_name = "Processed Date"
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
		this.ctrl.value_date.view_name = "f_npss_outward_transaction_details_report_srch"
		this.ctrl.value_date.ctrl_id = "npss_outward_transaction_details_report_srch_value_date"
		this.ctrl.npss_outward_transaction_details_report_srch_value_date = {}
		this.ctrl.npss_outward_transaction_details_report_srch_value_date.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory141
		this.ctrl.memory141 = {}
		this.ctrl.memory141.id = "RN11CN6"
		this.ctrl.memory141.desc = "API Success Failure"
		this.ctrl.memory141.visible = true
		this.ctrl.memory141.label_name = "API Success Failure"
		this.ctrl.memory141.df_code = "DF_1304_1665901396659"
		this.ctrl.memory141.df_description = "Column Group 1"
		this.ctrl.memory141.uictrl_code = "CBO"
		this.ctrl.memory141.target_column = "memory141"
		this.ctrl.memory141.data_type = "TEXT"
		this.ctrl.memory141.data_length = 0
		this.ctrl.memory141.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory141.default_value = ""
		this.ctrl.memory141.is_memory_ctrl = "Y"
		this.ctrl.memory141.field_coordinates = ""
		this.ctrl.memory141.sub_details = ""
		this.ctrl.memory141.accept_char = ""
		this.ctrl.memory141.currency_format = ""
		this.ctrl.memory141.data_scale = ""
		this.ctrl.memory141.binding_name = "API_SUCCESS_FAILURE"
		this.ctrl.memory141.hide_label = false
		this.ctrl.memory141.depends_on = ""
		this.ctrl.memory141.placeholder = ""
		this.ctrl.memory141.dynamic_param = ""
		this.ctrl.memory141.style_code = ""
		this.ctrl.memory141.data_source = {"ds_code":"UDS_1304_1679471398193","ds_description":"NPSS Process Sts CDB for RPT","rows":[],"type":"DPS_TABLE","value_member":"API_SUCCESS_FAILURE","display_member":"API_SUCCESS_FAILURE","first_record_display":"Select","column_list":"","order_by":"","target_table":"NPSS_VW_RPT_PROCESS_STATUS","context":"","filters":[{"filter_name":"Filter1","binding_name":"TENANT_ID","id":"DF_1679471550118","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","temp_value":"TENANT_ID","filter_values":"SESSION_LEVEL"}]},"query":"(TENANT_ID = SESSION_LEVEL.TENANT_ID)"},"sel_columns":[]}
		this.ctrl.memory141.image_association = ""
		this.ctrl.memory141.show = true
		this.ctrl.memory141.sub_content = ""
		this.ctrl.memory141.required = false
		this.ctrl.memory141.vld_rules = []
		this.ctrl.memory141.targetcolumn_lower = "memory141"
		this.ctrl.memory141.disabled = false
		this.ctrl.memory141.view_name = "f_npss_outward_transaction_details_report_srch"
		this.ctrl.memory141.ctrl_id = "npss_outward_transaction_details_report_srch_memory141"
		this.ctrl.npss_outward_transaction_details_report_srch_memory141 = {}
		this.ctrl.npss_outward_transaction_details_report_srch_memory141.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_outward_transaction_details_report_srch.memory141 = {}
	
		//Properties of dbtr_iban
		this.ctrl.dbtr_iban = {}
		this.ctrl.dbtr_iban.id = "RN31CN12"
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
		this.ctrl.dbtr_iban.view_name = "f_npss_outward_transaction_details_report_srch"
		this.ctrl.dbtr_iban.ctrl_id = "npss_outward_transaction_details_report_srch_dbtr_iban"
		this.ctrl.npss_outward_transaction_details_report_srch_dbtr_iban = {}
		this.ctrl.npss_outward_transaction_details_report_srch_dbtr_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_acct_name
		this.ctrl.dbtr_acct_name = {}
		this.ctrl.dbtr_acct_name.id = "RN31CN13"
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
		this.ctrl.dbtr_acct_name.view_name = "f_npss_outward_transaction_details_report_srch"
		this.ctrl.dbtr_acct_name.ctrl_id = "npss_outward_transaction_details_report_srch_dbtr_acct_name"
		this.ctrl.npss_outward_transaction_details_report_srch_dbtr_acct_name = {}
		this.ctrl.npss_outward_transaction_details_report_srch_dbtr_acct_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of process_group
		this.ctrl.process_group = {}
		this.ctrl.process_group.id = "RN21CN9"
		this.ctrl.process_group.desc = "Purpose Codes"
		this.ctrl.process_group.visible = true
		this.ctrl.process_group.label_name = "Purpose Codes"
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
		this.ctrl.process_group.data_source = {"ds_code":"UDS_1304_1679550169366","ds_description":"Purpose codes CDB for rpt","rows":[],"type":"DPS_TABLE","value_member":"PURPOSE_CODE","display_member":"PURPOSE_CODE","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_NC_PURPOSE_CODES","context":"","filters":[{"filter_name":"Filter1","binding_name":"TENANT_ID","id":"DF_1679550303378","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"},{"filter_name":"Filter2","binding_name":"NEED_SYNC","id":"DF_1679550303378","binding_value":"Y","source_name":"NEED_SYNC","source_value":"Y","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","temp_value":"TENANT_ID","filter_values":"SESSION_LEVEL"},{"operators":"=","data_type":"TEXT","binding_name":"NEED_SYNC","binding_value":"Y","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"Y"}]},"query":"(TENANT_ID = SESSION_LEVEL.TENANT_ID AND NEED_SYNC = Y)"},"sel_columns":[]}
		this.ctrl.process_group.image_association = ""
		this.ctrl.process_group.show = true
		this.ctrl.process_group.sub_content = ""
		this.ctrl.process_group.required = false
		this.ctrl.process_group.vld_rules = []
		this.ctrl.process_group.targetcolumn_lower = "process_group"
		this.ctrl.process_group.disabled = false
		this.ctrl.process_group.view_name = "f_npss_outward_transaction_details_report_srch"
		this.ctrl.process_group.ctrl_id = "npss_outward_transaction_details_report_srch_process_group"
		this.ctrl.npss_outward_transaction_details_report_srch_process_group = {}
		this.ctrl.npss_outward_transaction_details_report_srch_process_group.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_outward_transaction_details_report_srch.process_group = {}
	
		//Properties of cdtr_iban
		this.ctrl.cdtr_iban = {}
		this.ctrl.cdtr_iban.id = "RN31CN14"
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
		this.ctrl.cdtr_iban.view_name = "f_npss_outward_transaction_details_report_srch"
		this.ctrl.cdtr_iban.ctrl_id = "npss_outward_transaction_details_report_srch_cdtr_iban"
		this.ctrl.npss_outward_transaction_details_report_srch_cdtr_iban = {}
		this.ctrl.npss_outward_transaction_details_report_srch_cdtr_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_acct_name
		this.ctrl.cdtr_acct_name = {}
		this.ctrl.cdtr_acct_name.id = "RN41CN15"
		this.ctrl.cdtr_acct_name.desc = "Creditor Name"
		this.ctrl.cdtr_acct_name.visible = true
		this.ctrl.cdtr_acct_name.label_name = "Creditor Name"
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
		this.ctrl.cdtr_acct_name.view_name = "f_npss_outward_transaction_details_report_srch"
		this.ctrl.cdtr_acct_name.ctrl_id = "npss_outward_transaction_details_report_srch_cdtr_acct_name"
		this.ctrl.npss_outward_transaction_details_report_srch_cdtr_acct_name = {}
		this.ctrl.npss_outward_transaction_details_report_srch_cdtr_acct_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory142
		this.ctrl.memory142 = {}
		this.ctrl.memory142.id = "RN51CN16"
		this.ctrl.memory142.desc = "Beneficiary Bank"
		this.ctrl.memory142.visible = false
		this.ctrl.memory142.label_name = "Beneficiary Bank"
		this.ctrl.memory142.df_code = "DF_1304_1665901396659"
		this.ctrl.memory142.df_description = "Column Group 1"
		this.ctrl.memory142.uictrl_code = "CBO"
		this.ctrl.memory142.target_column = "memory142"
		this.ctrl.memory142.data_type = "TEXT"
		this.ctrl.memory142.data_length = 0
		this.ctrl.memory142.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory142.default_value = ""
		this.ctrl.memory142.is_memory_ctrl = "Y"
		this.ctrl.memory142.field_coordinates = ""
		this.ctrl.memory142.sub_details = ""
		this.ctrl.memory142.accept_char = ""
		this.ctrl.memory142.currency_format = ""
		this.ctrl.memory142.data_scale = ""
		this.ctrl.memory142.binding_name = "BENEFICIARY_BANK"
		this.ctrl.memory142.hide_label = false
		this.ctrl.memory142.depends_on = ""
		this.ctrl.memory142.placeholder = ""
		this.ctrl.memory142.dynamic_param = ""
		this.ctrl.memory142.style_code = ""
		this.ctrl.memory142.data_source = {"ds_code":"UDS_1304_1675679493844","ds_description":"BankName CDB for Report","rows":[],"type":"DPS_TABLE","value_member":"BANK_NAME","display_member":"BANK_NAME","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_MEMBER_BANKS","context":"","filters":[],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[]},"query":"()"},"sel_columns":[]}
		this.ctrl.memory142.image_association = ""
		this.ctrl.memory142.show = true
		this.ctrl.memory142.sub_content = ""
		this.ctrl.memory142.required = false
		this.ctrl.memory142.vld_rules = []
		this.ctrl.memory142.targetcolumn_lower = "memory142"
		this.ctrl.memory142.disabled = false
		this.ctrl.memory142.view_name = "f_npss_outward_transaction_details_report_srch"
		this.ctrl.memory142.ctrl_id = "npss_outward_transaction_details_report_srch_memory142"
		this.ctrl.npss_outward_transaction_details_report_srch_memory142 = {}
		this.ctrl.npss_outward_transaction_details_report_srch_memory142.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_outward_transaction_details_report_srch.memory142 = {}
	
		//Properties of channel_id
		this.ctrl.channel_id = {}
		this.ctrl.channel_id.id = "RN41CN15001"
		this.ctrl.channel_id.desc = "Source Channel/Channel ID"
		this.ctrl.channel_id.visible = true
		this.ctrl.channel_id.label_name = "Source Channel/Channel ID"
		this.ctrl.channel_id.df_code = "DF_1304_1665901396659"
		this.ctrl.channel_id.df_description = "Column Group 1"
		this.ctrl.channel_id.uictrl_code = "CBO"
		this.ctrl.channel_id.target_column = "CHANNEL_ID"
		this.ctrl.channel_id.data_type = "TEXT"
		this.ctrl.channel_id.data_length = 128
		this.ctrl.channel_id.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.channel_id.default_value = ""
		this.ctrl.channel_id.is_memory_ctrl = ""
		this.ctrl.channel_id.field_coordinates = ""
		this.ctrl.channel_id.sub_details = ""
		this.ctrl.channel_id.accept_char = ""
		this.ctrl.channel_id.currency_format = ""
		this.ctrl.channel_id.data_scale = ""
		this.ctrl.channel_id.binding_name = "CHANNEL_ID"
		this.ctrl.channel_id.hide_label = false
		this.ctrl.channel_id.depends_on = ""
		this.ctrl.channel_id.placeholder = ""
		this.ctrl.channel_id.dynamic_param = ""
		this.ctrl.channel_id.style_code = ""
		this.ctrl.channel_id.data_source = {"ds_code":"UDS_1304_1679564668451","ds_description":"Channel code cdb for rpt","rows":[],"type":"DPS_TABLE","value_member":"CHANNEL_CODE","display_member":"CHANNEL_CODE","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_NC_CHANNELS","context":"","filters":[{"filter_name":"Filter1","binding_name":"TENANT_ID","id":"DF_1679564748046","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"},{"filter_name":"Filter2","binding_name":"NEED_SYNC","id":"DF_1679564748046","binding_value":"Y","source_name":"NEED_SYNC","source_value":"Y","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","temp_value":"TENANT_ID","filter_values":"SESSION_LEVEL"},{"operators":"=","data_type":"TEXT","binding_name":"NEED_SYNC","binding_value":"Y","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"Y"}]},"query":"(TENANT_ID = SESSION_LEVEL.TENANT_ID AND NEED_SYNC = Y)"},"sel_columns":[]}
		this.ctrl.channel_id.image_association = ""
		this.ctrl.channel_id.show = true
		this.ctrl.channel_id.sub_content = ""
		this.ctrl.channel_id.required = false
		this.ctrl.channel_id.vld_rules = []
		this.ctrl.channel_id.targetcolumn_lower = "channel_id"
		this.ctrl.channel_id.disabled = false
		this.ctrl.channel_id.view_name = "f_npss_outward_transaction_details_report_srch"
		this.ctrl.channel_id.ctrl_id = "npss_outward_transaction_details_report_srch_channel_id"
		this.ctrl.npss_outward_transaction_details_report_srch_channel_id = {}
		this.ctrl.npss_outward_transaction_details_report_srch_channel_id.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_outward_transaction_details_report_srch.channel_id = {}
	
		//Properties of uetr
		this.ctrl.uetr = {}
		this.ctrl.uetr.id = "RN41CN16"
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
		this.ctrl.uetr.view_name = "f_npss_outward_transaction_details_report_srch"
		this.ctrl.uetr.ctrl_id = "npss_outward_transaction_details_report_srch_uetr"
		this.ctrl.npss_outward_transaction_details_report_srch_uetr = {}
		this.ctrl.npss_outward_transaction_details_report_srch_uetr.onChangecomponent = new EventEmitter<any>()
	
		//Properties of payment_endtoend_id
		this.ctrl.payment_endtoend_id = {}
		this.ctrl.payment_endtoend_id.id = "RN51CN18"
		this.ctrl.payment_endtoend_id.desc = "End to End ID"
		this.ctrl.payment_endtoend_id.visible = true
		this.ctrl.payment_endtoend_id.label_name = "End to End ID"
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
		this.ctrl.payment_endtoend_id.view_name = "f_npss_outward_transaction_details_report_srch"
		this.ctrl.payment_endtoend_id.ctrl_id = "npss_outward_transaction_details_report_srch_payment_endtoend_id"
		this.ctrl.npss_outward_transaction_details_report_srch_payment_endtoend_id = {}
		this.ctrl.npss_outward_transaction_details_report_srch_payment_endtoend_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of intrbk_sttlm_amnt
		this.ctrl.intrbk_sttlm_amnt = {}
		this.ctrl.intrbk_sttlm_amnt.id = "RN21CN8"
		this.ctrl.intrbk_sttlm_amnt.desc = "Transaction Amount Range"
		this.ctrl.intrbk_sttlm_amnt.visible = true
		this.ctrl.intrbk_sttlm_amnt.label_name = "Transaction Amount Range"
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
		this.ctrl.intrbk_sttlm_amnt.view_name = "f_npss_outward_transaction_details_report_srch"
		this.ctrl.intrbk_sttlm_amnt.ctrl_id = "npss_outward_transaction_details_report_srch_intrbk_sttlm_amnt"
		this.ctrl.npss_outward_transaction_details_report_srch_intrbk_sttlm_amnt = {}
		this.ctrl.npss_outward_transaction_details_report_srch_intrbk_sttlm_amnt.onChangecomponent = new EventEmitter<any>()
	
		//Properties of channel_refno
		this.ctrl.channel_refno = {}
		this.ctrl.channel_refno.id = "RN21CN10"
		this.ctrl.channel_refno.desc = "Sender/Originator Ref Number"
		this.ctrl.channel_refno.visible = true
		this.ctrl.channel_refno.label_name = "Sender/Originator Ref Number"
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
		this.ctrl.channel_refno.view_name = "f_npss_outward_transaction_details_report_srch"
		this.ctrl.channel_refno.ctrl_id = "npss_outward_transaction_details_report_srch_channel_refno"
		this.ctrl.npss_outward_transaction_details_report_srch_channel_refno = {}
		this.ctrl.npss_outward_transaction_details_report_srch_channel_refno.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_outward_transaction_details_report_srch.model = {"MEMORY119":"","MEMORY75":"","DEPARTMENT_CODE":"","MEMORY63":"setcurrentdate(),{}","VALUE_DATE":"","MEMORY141":"","DBTR_IBAN":"","DBTR_ACCT_NAME":"","PROCESS_GROUP":"","CDTR_IBAN":"","CDTR_ACCT_NAME":"","MEMORY142":"","CHANNEL_ID":"","UETR":"","PAYMENT_ENDTOEND_ID":"","INTRBK_STTLM_AMNT":"","CHANNEL_REFNO":""}
		this.screen_instance[this.comp_id].f_npss_outward_transaction_details_report_srch.Meta = [{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"DEPARTMENT_CODE"},{"CTLR_CODE":"CDN_DATE","DATA_TYPE":"DATETIME","TARGET_COLUMN":"VALUE_DATE"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_IBAN"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_ACCT_NAME"},{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROCESS_GROUP"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_IBAN"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_ACCT_NAME"},{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"CHANNEL_ID"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"UETR"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"PAYMENT_ENDTOEND_ID"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"NUMBER","TARGET_COLUMN":"INTRBK_STTLM_AMNT"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"CHANNEL_REFNO"}]
		this.screen_instance[this.comp_id].f_npss_outward_transaction_details_report_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_outward_transaction_details_report_srch.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_outward_transaction_details_report_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_outward_transaction_details_report_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_outward_transaction_details_report_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_outward_transaction_details_report_srch[control][property] = value;
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
    