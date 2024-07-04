/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35947 
Modified By     : Admin 
Modified Date   : 2024-Jul-04 7:2 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_inward_cb_nak_enquiry_report
Form Name       : NPSS Inward CB NAK Enquiry Report SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_inward_cb_nak_enquiry_report_srch',
  templateUrl: './f_npss_inward_cb_nak_enquiry_report_srch.component.html',
  styleUrls: ['./f_npss_inward_cb_nak_enquiry_report_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_inward_cb_nak_enquiry_report_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_inward_cb_nak_enquiry_report_srch') form;
  @ViewChild('npss_inward_cb_nak_enquiry_report_srch_memory118') element: ElementRef;
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

  
		//Properties of memory118
		this.ctrl.memory118 = {}
		this.ctrl.memory118.id = "RN01CN1"
		this.ctrl.memory118.desc = "Transaction ID"
		this.ctrl.memory118.visible = true
		this.ctrl.memory118.label_name = "Transaction ID"
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
		this.ctrl.memory118.view_name = "f_npss_inward_cb_nak_enquiry_report_srch"
		this.ctrl.memory118.ctrl_id = "npss_inward_cb_nak_enquiry_report_srch_memory118"
		this.ctrl.npss_inward_cb_nak_enquiry_report_srch_memory118 = {}
		this.ctrl.npss_inward_cb_nak_enquiry_report_srch_memory118.onChangecomponent = new EventEmitter<any>()
	
		//Properties of payment_endtoend_id
		this.ctrl.payment_endtoend_id = {}
		this.ctrl.payment_endtoend_id.id = "RN01CN2"
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
		this.ctrl.payment_endtoend_id.view_name = "f_npss_inward_cb_nak_enquiry_report_srch"
		this.ctrl.payment_endtoend_id.ctrl_id = "npss_inward_cb_nak_enquiry_report_srch_payment_endtoend_id"
		this.ctrl.npss_inward_cb_nak_enquiry_report_srch_payment_endtoend_id = {}
		this.ctrl.npss_inward_cb_nak_enquiry_report_srch_payment_endtoend_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of department_code
		this.ctrl.department_code = {}
		this.ctrl.department_code.id = "RN01CN3"
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
		this.ctrl.department_code.view_name = "f_npss_inward_cb_nak_enquiry_report_srch"
		this.ctrl.department_code.ctrl_id = "npss_inward_cb_nak_enquiry_report_srch_department_code"
		this.ctrl.npss_inward_cb_nak_enquiry_report_srch_department_code = {}
		this.ctrl.npss_inward_cb_nak_enquiry_report_srch_department_code.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_inward_cb_nak_enquiry_report_srch.department_code = {}
	
		//Properties of dbtr_iban
		this.ctrl.dbtr_iban = {}
		this.ctrl.dbtr_iban.id = "RN11CN4"
		this.ctrl.dbtr_iban.desc = "Payer Account Number"
		this.ctrl.dbtr_iban.visible = true
		this.ctrl.dbtr_iban.label_name = "Payer Account Number"
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
		this.ctrl.dbtr_iban.view_name = "f_npss_inward_cb_nak_enquiry_report_srch"
		this.ctrl.dbtr_iban.ctrl_id = "npss_inward_cb_nak_enquiry_report_srch_dbtr_iban"
		this.ctrl.npss_inward_cb_nak_enquiry_report_srch_dbtr_iban = {}
		this.ctrl.npss_inward_cb_nak_enquiry_report_srch_dbtr_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of intrbk_sttlm_amnt
		this.ctrl.intrbk_sttlm_amnt = {}
		this.ctrl.intrbk_sttlm_amnt.id = "RN11CN5"
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
		this.ctrl.intrbk_sttlm_amnt.view_name = "f_npss_inward_cb_nak_enquiry_report_srch"
		this.ctrl.intrbk_sttlm_amnt.ctrl_id = "npss_inward_cb_nak_enquiry_report_srch_intrbk_sttlm_amnt"
		this.ctrl.npss_inward_cb_nak_enquiry_report_srch_intrbk_sttlm_amnt = {}
		this.ctrl.npss_inward_cb_nak_enquiry_report_srch_intrbk_sttlm_amnt.onChangecomponent = new EventEmitter<any>()
	
		//Properties of process_group
		this.ctrl.process_group = {}
		this.ctrl.process_group.id = "RN11CN6"
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
		this.ctrl.process_group.view_name = "f_npss_inward_cb_nak_enquiry_report_srch"
		this.ctrl.process_group.ctrl_id = "npss_inward_cb_nak_enquiry_report_srch_process_group"
		this.ctrl.npss_inward_cb_nak_enquiry_report_srch_process_group = {}
		this.ctrl.npss_inward_cb_nak_enquiry_report_srch_process_group.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_inward_cb_nak_enquiry_report_srch.process_group = {}
	
		//Properties of memory63
		this.ctrl.memory63 = {}
		this.ctrl.memory63.id = "RN21CN7"
		this.ctrl.memory63.desc = "Date"
		this.ctrl.memory63.visible = true
		this.ctrl.memory63.label_name = "Date"
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
		this.ctrl.memory63.view_name = "f_npss_inward_cb_nak_enquiry_report_srch"
		this.ctrl.memory63.ctrl_id = "npss_inward_cb_nak_enquiry_report_srch_memory63"
		this.ctrl.npss_inward_cb_nak_enquiry_report_srch_memory63 = {}
		this.ctrl.npss_inward_cb_nak_enquiry_report_srch_memory63.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory142
		this.ctrl.memory142 = {}
		this.ctrl.memory142.id = "RN21CN8"
		this.ctrl.memory142.desc = "Ordering Bank Name"
		this.ctrl.memory142.visible = true
		this.ctrl.memory142.label_name = "Ordering Bank Name"
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
		this.ctrl.memory142.view_name = "f_npss_inward_cb_nak_enquiry_report_srch"
		this.ctrl.memory142.ctrl_id = "npss_inward_cb_nak_enquiry_report_srch_memory142"
		this.ctrl.npss_inward_cb_nak_enquiry_report_srch_memory142 = {}
		this.ctrl.npss_inward_cb_nak_enquiry_report_srch_memory142.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_inward_cb_nak_enquiry_report_srch.memory142 = {}
		this.screen_instance[this.comp_id].f_npss_inward_cb_nak_enquiry_report_srch.model = {"MEMORY118":"","PAYMENT_ENDTOEND_ID":"","DEPARTMENT_CODE":"","DBTR_IBAN":"","INTRBK_STTLM_AMNT":"","PROCESS_GROUP":"","MEMORY63":"setcurrentdate(),{}","MEMORY142":""}
		this.screen_instance[this.comp_id].f_npss_inward_cb_nak_enquiry_report_srch.Meta = [{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"PAYMENT_ENDTOEND_ID"},{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"DEPARTMENT_CODE"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_IBAN"},{"CTLR_CODE":"CDN_CUR_CTRL","DATA_TYPE":"NUMBER","TARGET_COLUMN":"INTRBK_STTLM_AMNT"},{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROCESS_GROUP"}]
		this.screen_instance[this.comp_id].f_npss_inward_cb_nak_enquiry_report_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_inward_cb_nak_enquiry_report_srch.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_inward_cb_nak_enquiry_report_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_inward_cb_nak_enquiry_report_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_inward_cb_nak_enquiry_report_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_inward_cb_nak_enquiry_report_srch[control][property] = value;
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
    