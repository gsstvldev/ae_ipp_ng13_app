/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26378 
Modified By     : Admin 
Modified Date   : 2022-Oct-11 9:14 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_customer_request_to_pay
Form Name       : Cust Transaction UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_cust_transaction_ui',
  templateUrl: './f_cust_transaction_ui.component.html',
  styleUrls: ['./f_cust_transaction_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_cust_transaction_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_cust_transaction_ui') form;
  @ViewChild('cust_transaction_ui_memory51') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665384453253"
	dtt_code : string = "dtt_1304_1665385772257"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of memory51
		this.ctrl.memory51 = {}
		this.ctrl.memory51.id = "RN01CN1"
		this.ctrl.memory51.desc = "Payor Information (Customer)"
		this.ctrl.memory51.visible = false
		this.ctrl.memory51.label_name = "Payor Information (Customer)"
		this.ctrl.memory51.df_code = "DF_1304_1665385905734"
		this.ctrl.memory51.df_description = "Column Group 1"
		this.ctrl.memory51.uictrl_code = "LBL"
		this.ctrl.memory51.target_column = "memory51"
		this.ctrl.memory51.data_type = "TEXT"
		this.ctrl.memory51.data_length = 12
		this.ctrl.memory51.zone_df_code = "DF_1304_1665385905734"
		this.ctrl.memory51.default_value = ""
		this.ctrl.memory51.is_memory_ctrl = "Y"
		this.ctrl.memory51.field_coordinates = ""
		this.ctrl.memory51.sub_details = ""
		this.ctrl.memory51.accept_char = ""
		this.ctrl.memory51.currency_format = ""
		this.ctrl.memory51.data_scale = ""
		this.ctrl.memory51.hide_label = false
		this.ctrl.memory51.depends_on = ""
		this.ctrl.memory51.placeholder = ""
		this.ctrl.memory51.dynamic_param = ""
		this.ctrl.memory51.style_code = ""
		this.ctrl.memory51.data_source = ""
		this.ctrl.memory51.image_association = ""
		this.ctrl.memory51.show = true
		this.ctrl.memory51.sub_content = ""
		this.ctrl.memory51.required = false
		this.ctrl.memory51.vld_rules = []
		this.ctrl.memory51.targetcolumn_lower = "memory51"
		this.ctrl.memory51.disabled = false
		this.ctrl.memory51.view_name = "f_cust_transaction_ui"
		this.ctrl.memory51.ctrl_id = "cust_transaction_ui_memory51"
		this.ctrl.cust_transaction_ui_memory51 = {}
		this.ctrl.cust_transaction_ui_memory51.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_cust_transaction_ui.memory51 = {}
	
		//Properties of dbtr_acct_name
		this.ctrl.dbtr_acct_name = {}
		this.ctrl.dbtr_acct_name.id = "RN11CN2"
		this.ctrl.dbtr_acct_name.desc = "Customer Name"
		this.ctrl.dbtr_acct_name.visible = true
		this.ctrl.dbtr_acct_name.label_name = "Customer Name"
		this.ctrl.dbtr_acct_name.df_code = "DF_1304_1665385905734"
		this.ctrl.dbtr_acct_name.df_description = "Column Group 1"
		this.ctrl.dbtr_acct_name.uictrl_code = "CBO"
		this.ctrl.dbtr_acct_name.target_column = "DBTR_ACCT_NAME"
		this.ctrl.dbtr_acct_name.data_type = "TEXT"
		this.ctrl.dbtr_acct_name.data_length = 128
		this.ctrl.dbtr_acct_name.zone_df_code = "DF_1304_1665385905734"
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
		this.ctrl.dbtr_acct_name.data_source = {"ds_code":"UDS_1304_1665400212522","ds_description":"NPSS Customer Name CDB","rows":[],"type":"DPS_TABLE","value_member":"CUSTOMER","display_member":"CUSTOMER","first_record_display":"Select","column_list":"","order_by":"","target_table":"NPSS_CUST_PROXY_ADDRESS","context":"","filters":[{"filter_name":"Filter1","binding_name":"SYSTEM_ID","id":"DF_1665400403907","binding_value":"SESSION_LEVEL.S_ID","source_name":"SYSTEM_ID","source_value":"SESSION_LEVEL.S_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"SYSTEM_ID","binding_value":"SESSION_LEVEL.S_ID","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"S_ID"}]},"query":"(SYSTEM_ID = SESSION_LEVEL.S_ID)"},"sel_columns":[]}
		this.ctrl.dbtr_acct_name.image_association = ""
		this.ctrl.dbtr_acct_name.show = true
		this.ctrl.dbtr_acct_name.sub_content = ""
		this.ctrl.dbtr_acct_name.required = false
		this.ctrl.dbtr_acct_name.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Select the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.dbtr_acct_name.targetcolumn_lower = "dbtr_acct_name"
		this.ctrl.dbtr_acct_name.disabled = false
		this.ctrl.dbtr_acct_name.view_name = "f_cust_transaction_ui"
		this.ctrl.dbtr_acct_name.ctrl_id = "cust_transaction_ui_dbtr_acct_name"
		this.ctrl.cust_transaction_ui_dbtr_acct_name = {}
		this.ctrl.cust_transaction_ui_dbtr_acct_name.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_cust_transaction_ui.dbtr_acct_name = {}
	
		//Properties of dbtr_phone_no
		this.ctrl.dbtr_phone_no = {}
		this.ctrl.dbtr_phone_no.id = "RN11CN3"
		this.ctrl.dbtr_phone_no.desc = "Phone No"
		this.ctrl.dbtr_phone_no.visible = true
		this.ctrl.dbtr_phone_no.label_name = "Phone No"
		this.ctrl.dbtr_phone_no.df_code = "DF_1304_1665385905734"
		this.ctrl.dbtr_phone_no.df_description = "Column Group 1"
		this.ctrl.dbtr_phone_no.uictrl_code = "CBO"
		this.ctrl.dbtr_phone_no.target_column = "DBTR_PHONE_NO"
		this.ctrl.dbtr_phone_no.data_type = "TEXT"
		this.ctrl.dbtr_phone_no.data_length = 64
		this.ctrl.dbtr_phone_no.zone_df_code = "DF_1304_1665385905734"
		this.ctrl.dbtr_phone_no.default_value = ""
		this.ctrl.dbtr_phone_no.is_memory_ctrl = ""
		this.ctrl.dbtr_phone_no.field_coordinates = ""
		this.ctrl.dbtr_phone_no.sub_details = ""
		this.ctrl.dbtr_phone_no.accept_char = ""
		this.ctrl.dbtr_phone_no.currency_format = ""
		this.ctrl.dbtr_phone_no.data_scale = ""
		this.ctrl.dbtr_phone_no.hide_label = false
		this.ctrl.dbtr_phone_no.depends_on = ""
		this.ctrl.dbtr_phone_no.placeholder = ""
		this.ctrl.dbtr_phone_no.dynamic_param = ""
		this.ctrl.dbtr_phone_no.style_code = ""
		this.ctrl.dbtr_phone_no.data_source = {"ds_code":"UDS_1304_1665468309172","ds_description":"NPSS Phone NO CDB","rows":[],"type":"DPS_TABLE","value_member":"PHONE_NO","display_member":"PHONE_NO","first_record_display":"Select","column_list":"","order_by":"","target_table":"IPS_CUST_PROXY_ADDRESS","context":"","filters":[],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[]},"query":"()"},"sel_columns":[],"need_first_item_selection":false,"has_parent":false}
		this.ctrl.dbtr_phone_no.image_association = ""
		this.ctrl.dbtr_phone_no.show = true
		this.ctrl.dbtr_phone_no.sub_content = ""
		this.ctrl.dbtr_phone_no.required = false
		this.ctrl.dbtr_phone_no.vld_rules = []
		this.ctrl.dbtr_phone_no.targetcolumn_lower = "dbtr_phone_no"
		this.ctrl.dbtr_phone_no.disabled = false
		this.ctrl.dbtr_phone_no.view_name = "f_cust_transaction_ui"
		this.ctrl.dbtr_phone_no.ctrl_id = "cust_transaction_ui_dbtr_phone_no"
		this.ctrl.cust_transaction_ui_dbtr_phone_no = {}
		this.ctrl.cust_transaction_ui_dbtr_phone_no.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_cust_transaction_ui.dbtr_phone_no = {}
	
		//Properties of dbtr_acct_balance
		this.ctrl.dbtr_acct_balance = {}
		this.ctrl.dbtr_acct_balance.id = "RN21CN4"
		this.ctrl.dbtr_acct_balance.desc = "Account Balance"
		this.ctrl.dbtr_acct_balance.visible = true
		this.ctrl.dbtr_acct_balance.label_name = "Account Balance"
		this.ctrl.dbtr_acct_balance.df_code = "DF_1304_1665385905734"
		this.ctrl.dbtr_acct_balance.df_description = "Column Group 1"
		this.ctrl.dbtr_acct_balance.uictrl_code = "CUR"
		this.ctrl.dbtr_acct_balance.target_column = "DBTR_ACCT_BALANCE"
		this.ctrl.dbtr_acct_balance.data_type = "NUMBER"
		this.ctrl.dbtr_acct_balance.data_length = 19
		this.ctrl.dbtr_acct_balance.zone_df_code = "DF_1304_1665385905734"
		this.ctrl.dbtr_acct_balance.default_value = ""
		this.ctrl.dbtr_acct_balance.is_memory_ctrl = ""
		this.ctrl.dbtr_acct_balance.field_coordinates = ""
		this.ctrl.dbtr_acct_balance.sub_details = ""
		this.ctrl.dbtr_acct_balance.accept_char = ""
		this.ctrl.dbtr_acct_balance.currency_format = ""
		this.ctrl.dbtr_acct_balance.data_scale = "2"
		this.ctrl.dbtr_acct_balance.hide_label = false
		this.ctrl.dbtr_acct_balance.depends_on = ""
		this.ctrl.dbtr_acct_balance.placeholder = ""
		this.ctrl.dbtr_acct_balance.dynamic_param = ""
		this.ctrl.dbtr_acct_balance.style_code = ""
		this.ctrl.dbtr_acct_balance.data_source = ""
		this.ctrl.dbtr_acct_balance.image_association = ""
		this.ctrl.dbtr_acct_balance.show = true
		this.ctrl.dbtr_acct_balance.sub_content = ""
		this.ctrl.dbtr_acct_balance.required = false
		this.ctrl.dbtr_acct_balance.vld_rules = []
		this.ctrl.dbtr_acct_balance.targetcolumn_lower = "dbtr_acct_balance"
		this.ctrl.dbtr_acct_balance.disabled = false
		this.ctrl.dbtr_acct_balance.view_name = "f_cust_transaction_ui"
		this.ctrl.dbtr_acct_balance.ctrl_id = "cust_transaction_ui_dbtr_acct_balance"
		this.ctrl.cust_transaction_ui_dbtr_acct_balance = {}
		this.ctrl.cust_transaction_ui_dbtr_acct_balance.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_sanction_limit
		this.ctrl.dbtr_sanction_limit = {}
		this.ctrl.dbtr_sanction_limit.id = "RN21CN5"
		this.ctrl.dbtr_sanction_limit.desc = "Sanction Limit"
		this.ctrl.dbtr_sanction_limit.visible = true
		this.ctrl.dbtr_sanction_limit.label_name = "Sanction Limit"
		this.ctrl.dbtr_sanction_limit.df_code = "DF_1304_1665385905734"
		this.ctrl.dbtr_sanction_limit.df_description = "Column Group 1"
		this.ctrl.dbtr_sanction_limit.uictrl_code = "CUR"
		this.ctrl.dbtr_sanction_limit.target_column = "DBTR_SANCTION_LIMIT"
		this.ctrl.dbtr_sanction_limit.data_type = "NUMBER"
		this.ctrl.dbtr_sanction_limit.data_length = 19
		this.ctrl.dbtr_sanction_limit.zone_df_code = "DF_1304_1665385905734"
		this.ctrl.dbtr_sanction_limit.default_value = ""
		this.ctrl.dbtr_sanction_limit.is_memory_ctrl = ""
		this.ctrl.dbtr_sanction_limit.field_coordinates = ""
		this.ctrl.dbtr_sanction_limit.sub_details = ""
		this.ctrl.dbtr_sanction_limit.accept_char = ""
		this.ctrl.dbtr_sanction_limit.currency_format = ""
		this.ctrl.dbtr_sanction_limit.data_scale = "2"
		this.ctrl.dbtr_sanction_limit.hide_label = false
		this.ctrl.dbtr_sanction_limit.depends_on = ""
		this.ctrl.dbtr_sanction_limit.placeholder = ""
		this.ctrl.dbtr_sanction_limit.dynamic_param = ""
		this.ctrl.dbtr_sanction_limit.style_code = ""
		this.ctrl.dbtr_sanction_limit.data_source = ""
		this.ctrl.dbtr_sanction_limit.image_association = ""
		this.ctrl.dbtr_sanction_limit.show = true
		this.ctrl.dbtr_sanction_limit.sub_content = ""
		this.ctrl.dbtr_sanction_limit.required = false
		this.ctrl.dbtr_sanction_limit.vld_rules = []
		this.ctrl.dbtr_sanction_limit.targetcolumn_lower = "dbtr_sanction_limit"
		this.ctrl.dbtr_sanction_limit.disabled = false
		this.ctrl.dbtr_sanction_limit.view_name = "f_cust_transaction_ui"
		this.ctrl.dbtr_sanction_limit.ctrl_id = "cust_transaction_ui_dbtr_sanction_limit"
		this.ctrl.cust_transaction_ui_dbtr_sanction_limit = {}
		this.ctrl.cust_transaction_ui_dbtr_sanction_limit.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory52
		this.ctrl.memory52 = {}
		this.ctrl.memory52.id = "RN31CN6"
		this.ctrl.memory52.desc = "Payee Information (Beneficiary)"
		this.ctrl.memory52.visible = false
		this.ctrl.memory52.label_name = "Payee Information (Beneficiary)"
		this.ctrl.memory52.df_code = "DF_1304_1665385905734"
		this.ctrl.memory52.df_description = "Column Group 1"
		this.ctrl.memory52.uictrl_code = "LBL"
		this.ctrl.memory52.target_column = "memory52"
		this.ctrl.memory52.data_type = "TEXT"
		this.ctrl.memory52.data_length = 16
		this.ctrl.memory52.zone_df_code = "DF_1304_1665385905734"
		this.ctrl.memory52.default_value = ""
		this.ctrl.memory52.is_memory_ctrl = "Y"
		this.ctrl.memory52.field_coordinates = ""
		this.ctrl.memory52.sub_details = ""
		this.ctrl.memory52.accept_char = ""
		this.ctrl.memory52.currency_format = ""
		this.ctrl.memory52.data_scale = ""
		this.ctrl.memory52.hide_label = false
		this.ctrl.memory52.depends_on = ""
		this.ctrl.memory52.placeholder = ""
		this.ctrl.memory52.dynamic_param = ""
		this.ctrl.memory52.style_code = ""
		this.ctrl.memory52.data_source = ""
		this.ctrl.memory52.image_association = ""
		this.ctrl.memory52.show = true
		this.ctrl.memory52.sub_content = ""
		this.ctrl.memory52.required = false
		this.ctrl.memory52.vld_rules = []
		this.ctrl.memory52.targetcolumn_lower = "memory52"
		this.ctrl.memory52.disabled = false
		this.ctrl.memory52.view_name = "f_cust_transaction_ui"
		this.ctrl.memory52.ctrl_id = "cust_transaction_ui_memory52"
		this.ctrl.cust_transaction_ui_memory52 = {}
		this.ctrl.cust_transaction_ui_memory52.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_cust_transaction_ui.memory52 = {}
	
		//Properties of cdtr_pmt_type
		this.ctrl.cdtr_pmt_type = {}
		this.ctrl.cdtr_pmt_type.id = "RN101CN14"
		this.ctrl.cdtr_pmt_type.desc = "Payment Type"
		this.ctrl.cdtr_pmt_type.visible = false
		this.ctrl.cdtr_pmt_type.label_name = "Payment Type"
		this.ctrl.cdtr_pmt_type.df_code = "DF_1304_1665385905734"
		this.ctrl.cdtr_pmt_type.df_description = "Column Group 1"
		this.ctrl.cdtr_pmt_type.uictrl_code = "CBO"
		this.ctrl.cdtr_pmt_type.target_column = "CDTR_PMT_TYPE"
		this.ctrl.cdtr_pmt_type.data_type = "TEXT"
		this.ctrl.cdtr_pmt_type.data_length = 64
		this.ctrl.cdtr_pmt_type.zone_df_code = "DF_1304_1665385905734"
		this.ctrl.cdtr_pmt_type.default_value = ""
		this.ctrl.cdtr_pmt_type.is_memory_ctrl = ""
		this.ctrl.cdtr_pmt_type.field_coordinates = ""
		this.ctrl.cdtr_pmt_type.sub_details = ""
		this.ctrl.cdtr_pmt_type.accept_char = ""
		this.ctrl.cdtr_pmt_type.currency_format = ""
		this.ctrl.cdtr_pmt_type.data_scale = ""
		this.ctrl.cdtr_pmt_type.hide_label = false
		this.ctrl.cdtr_pmt_type.depends_on = ""
		this.ctrl.cdtr_pmt_type.placeholder = ""
		this.ctrl.cdtr_pmt_type.dynamic_param = ""
		this.ctrl.cdtr_pmt_type.style_code = ""
		this.ctrl.cdtr_pmt_type.data_source = {"ds_code":"UDS_1304_1665460633793","ds_description":"NPSS Payment Type CDB","rows":[],"type":"DPS_TABLE","value_member":"CD_CODE","display_member":"CD_DESCRIPTION","first_record_display":"Select","column_list":"","order_by":"SORT_ORDER ASC","target_table":"CORE_CODE_DESCRIPTIONS","context":"","filters":[{"filter_name":"Filter1","binding_name":"CD_CATEGORY","id":"DF_1665468376572","binding_value":"IPS_PAYMENT_TYPE","source_name":"CD_CATEGORY","source_value":"IPS_PAYMENT_TYPE","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter2","binding_name":"TENANT_ID","id":"DF_1665468376572","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"CD_CATEGORY","binding_value":"IPS_PAYMENT_TYPE","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","temp_value":"IPS_PAYMENT_TYPE","filter_values":"HARDCODED"},{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"}]},"query":"(CD_CATEGORY = IPS_PAYMENT_TYPE AND TENANT_ID = SESSION_LEVEL.TENANT_ID)"},"sel_columns":[],"need_first_item_selection":false,"has_parent":false}
		this.ctrl.cdtr_pmt_type.image_association = ""
		this.ctrl.cdtr_pmt_type.show = true
		this.ctrl.cdtr_pmt_type.sub_content = ""
		this.ctrl.cdtr_pmt_type.required = false
		this.ctrl.cdtr_pmt_type.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Select the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.cdtr_pmt_type.targetcolumn_lower = "cdtr_pmt_type"
		this.ctrl.cdtr_pmt_type.disabled = false
		this.ctrl.cdtr_pmt_type.view_name = "f_cust_transaction_ui"
		this.ctrl.cdtr_pmt_type.ctrl_id = "cust_transaction_ui_cdtr_pmt_type"
		this.ctrl.cust_transaction_ui_cdtr_pmt_type = {}
		this.ctrl.cust_transaction_ui_cdtr_pmt_type.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_cust_transaction_ui.cdtr_pmt_type = {}
	
		//Properties of cdtr_phone_no
		this.ctrl.cdtr_phone_no = {}
		this.ctrl.cdtr_phone_no.id = "RN51CN8"
		this.ctrl.cdtr_phone_no.desc = "Phone No"
		this.ctrl.cdtr_phone_no.visible = false
		this.ctrl.cdtr_phone_no.label_name = "Phone No"
		this.ctrl.cdtr_phone_no.df_code = "DF_1304_1665385905734"
		this.ctrl.cdtr_phone_no.df_description = "Column Group 1"
		this.ctrl.cdtr_phone_no.uictrl_code = "TXT"
		this.ctrl.cdtr_phone_no.target_column = "CDTR_PHONE_NO"
		this.ctrl.cdtr_phone_no.data_type = "TEXT"
		this.ctrl.cdtr_phone_no.data_length = 64
		this.ctrl.cdtr_phone_no.zone_df_code = "DF_1304_1665385905734"
		this.ctrl.cdtr_phone_no.default_value = ""
		this.ctrl.cdtr_phone_no.is_memory_ctrl = ""
		this.ctrl.cdtr_phone_no.field_coordinates = ""
		this.ctrl.cdtr_phone_no.sub_details = ""
		this.ctrl.cdtr_phone_no.accept_char = ""
		this.ctrl.cdtr_phone_no.currency_format = ""
		this.ctrl.cdtr_phone_no.data_scale = ""
		this.ctrl.cdtr_phone_no.hide_label = false
		this.ctrl.cdtr_phone_no.depends_on = "CDTR_PMT_TYPE:Phone No"
		this.ctrl.cdtr_phone_no.placeholder = ""
		this.ctrl.cdtr_phone_no.dynamic_param = ""
		this.ctrl.cdtr_phone_no.style_code = ""
		this.ctrl.cdtr_phone_no.data_source = ""
		this.ctrl.cdtr_phone_no.image_association = ""
		this.ctrl.cdtr_phone_no.show = false
		this.ctrl.cdtr_phone_no.sub_content = ""
		this.ctrl.cdtr_phone_no.required = false
		this.ctrl.cdtr_phone_no.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.cdtr_phone_no.targetcolumn_lower = "cdtr_phone_no"
		this.ctrl.cdtr_phone_no.disabled = false
		this.ctrl.cdtr_phone_no.view_name = "f_cust_transaction_ui"
		this.ctrl.cdtr_phone_no.ctrl_id = "cust_transaction_ui_cdtr_phone_no"
		this.ctrl.cust_transaction_ui_cdtr_phone_no = {}
		this.ctrl.cust_transaction_ui_cdtr_phone_no.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_email_id
		this.ctrl.cdtr_email_id = {}
		this.ctrl.cdtr_email_id.id = "RN61CN9"
		this.ctrl.cdtr_email_id.desc = "Email ID"
		this.ctrl.cdtr_email_id.visible = false
		this.ctrl.cdtr_email_id.label_name = "Email ID"
		this.ctrl.cdtr_email_id.df_code = "DF_1304_1665385905734"
		this.ctrl.cdtr_email_id.df_description = "Column Group 1"
		this.ctrl.cdtr_email_id.uictrl_code = "TXT"
		this.ctrl.cdtr_email_id.target_column = "CDTR_EMAIL_ID"
		this.ctrl.cdtr_email_id.data_type = "TEXT"
		this.ctrl.cdtr_email_id.data_length = 64
		this.ctrl.cdtr_email_id.zone_df_code = "DF_1304_1665385905734"
		this.ctrl.cdtr_email_id.default_value = ""
		this.ctrl.cdtr_email_id.is_memory_ctrl = ""
		this.ctrl.cdtr_email_id.field_coordinates = ""
		this.ctrl.cdtr_email_id.sub_details = ""
		this.ctrl.cdtr_email_id.accept_char = ""
		this.ctrl.cdtr_email_id.currency_format = ""
		this.ctrl.cdtr_email_id.data_scale = ""
		this.ctrl.cdtr_email_id.hide_label = false
		this.ctrl.cdtr_email_id.depends_on = "CDTR_PMT_TYPE:Email"
		this.ctrl.cdtr_email_id.placeholder = ""
		this.ctrl.cdtr_email_id.dynamic_param = ""
		this.ctrl.cdtr_email_id.style_code = ""
		this.ctrl.cdtr_email_id.data_source = ""
		this.ctrl.cdtr_email_id.image_association = ""
		this.ctrl.cdtr_email_id.show = false
		this.ctrl.cdtr_email_id.sub_content = ""
		this.ctrl.cdtr_email_id.required = false
		this.ctrl.cdtr_email_id.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.cdtr_email_id.targetcolumn_lower = "cdtr_email_id"
		this.ctrl.cdtr_email_id.disabled = false
		this.ctrl.cdtr_email_id.view_name = "f_cust_transaction_ui"
		this.ctrl.cdtr_email_id.ctrl_id = "cust_transaction_ui_cdtr_email_id"
		this.ctrl.cust_transaction_ui_cdtr_email_id = {}
		this.ctrl.cust_transaction_ui_cdtr_email_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_emirates
		this.ctrl.cdtr_emirates = {}
		this.ctrl.cdtr_emirates.id = "RN71CN10"
		this.ctrl.cdtr_emirates.desc = "Emirates"
		this.ctrl.cdtr_emirates.visible = false
		this.ctrl.cdtr_emirates.label_name = "Emirates"
		this.ctrl.cdtr_emirates.df_code = "DF_1304_1665385905734"
		this.ctrl.cdtr_emirates.df_description = "Column Group 1"
		this.ctrl.cdtr_emirates.uictrl_code = "TXT"
		this.ctrl.cdtr_emirates.target_column = "CDTR_EMIRATES"
		this.ctrl.cdtr_emirates.data_type = "TEXT"
		this.ctrl.cdtr_emirates.data_length = 64
		this.ctrl.cdtr_emirates.zone_df_code = "DF_1304_1665385905734"
		this.ctrl.cdtr_emirates.default_value = ""
		this.ctrl.cdtr_emirates.is_memory_ctrl = ""
		this.ctrl.cdtr_emirates.field_coordinates = ""
		this.ctrl.cdtr_emirates.sub_details = ""
		this.ctrl.cdtr_emirates.accept_char = ""
		this.ctrl.cdtr_emirates.currency_format = ""
		this.ctrl.cdtr_emirates.data_scale = ""
		this.ctrl.cdtr_emirates.hide_label = false
		this.ctrl.cdtr_emirates.depends_on = "CDTR_PMT_TYPE:Emirates"
		this.ctrl.cdtr_emirates.placeholder = ""
		this.ctrl.cdtr_emirates.dynamic_param = ""
		this.ctrl.cdtr_emirates.style_code = ""
		this.ctrl.cdtr_emirates.data_source = ""
		this.ctrl.cdtr_emirates.image_association = ""
		this.ctrl.cdtr_emirates.show = false
		this.ctrl.cdtr_emirates.sub_content = ""
		this.ctrl.cdtr_emirates.required = false
		this.ctrl.cdtr_emirates.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.cdtr_emirates.targetcolumn_lower = "cdtr_emirates"
		this.ctrl.cdtr_emirates.disabled = false
		this.ctrl.cdtr_emirates.view_name = "f_cust_transaction_ui"
		this.ctrl.cdtr_emirates.ctrl_id = "cust_transaction_ui_cdtr_emirates"
		this.ctrl.cust_transaction_ui_cdtr_emirates = {}
		this.ctrl.cust_transaction_ui_cdtr_emirates.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_iban
		this.ctrl.cdtr_iban = {}
		this.ctrl.cdtr_iban.id = "RN81CN11"
		this.ctrl.cdtr_iban.desc = "IBAN"
		this.ctrl.cdtr_iban.visible = false
		this.ctrl.cdtr_iban.label_name = "IBAN"
		this.ctrl.cdtr_iban.df_code = "DF_1304_1665385905734"
		this.ctrl.cdtr_iban.df_description = "Column Group 1"
		this.ctrl.cdtr_iban.uictrl_code = "TXT"
		this.ctrl.cdtr_iban.target_column = "CDTR_IBAN"
		this.ctrl.cdtr_iban.data_type = "TEXT"
		this.ctrl.cdtr_iban.data_length = 64
		this.ctrl.cdtr_iban.zone_df_code = "DF_1304_1665385905734"
		this.ctrl.cdtr_iban.default_value = ""
		this.ctrl.cdtr_iban.is_memory_ctrl = ""
		this.ctrl.cdtr_iban.field_coordinates = ""
		this.ctrl.cdtr_iban.sub_details = ""
		this.ctrl.cdtr_iban.accept_char = ""
		this.ctrl.cdtr_iban.currency_format = ""
		this.ctrl.cdtr_iban.data_scale = ""
		this.ctrl.cdtr_iban.hide_label = false
		this.ctrl.cdtr_iban.depends_on = "CDTR_PMT_TYPE:IBAN"
		this.ctrl.cdtr_iban.placeholder = ""
		this.ctrl.cdtr_iban.dynamic_param = ""
		this.ctrl.cdtr_iban.style_code = ""
		this.ctrl.cdtr_iban.data_source = ""
		this.ctrl.cdtr_iban.image_association = ""
		this.ctrl.cdtr_iban.show = false
		this.ctrl.cdtr_iban.sub_content = ""
		this.ctrl.cdtr_iban.required = false
		this.ctrl.cdtr_iban.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.cdtr_iban.targetcolumn_lower = "cdtr_iban"
		this.ctrl.cdtr_iban.disabled = false
		this.ctrl.cdtr_iban.view_name = "f_cust_transaction_ui"
		this.ctrl.cdtr_iban.ctrl_id = "cust_transaction_ui_cdtr_iban"
		this.ctrl.cust_transaction_ui_cdtr_iban = {}
		this.ctrl.cust_transaction_ui_cdtr_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of intrbk_sttlm_amnt
		this.ctrl.intrbk_sttlm_amnt = {}
		this.ctrl.intrbk_sttlm_amnt.id = "RN91CN12"
		this.ctrl.intrbk_sttlm_amnt.desc = "Enter Amount"
		this.ctrl.intrbk_sttlm_amnt.visible = false
		this.ctrl.intrbk_sttlm_amnt.label_name = "Enter Amount"
		this.ctrl.intrbk_sttlm_amnt.df_code = "DF_1304_1665385905734"
		this.ctrl.intrbk_sttlm_amnt.df_description = "Column Group 1"
		this.ctrl.intrbk_sttlm_amnt.uictrl_code = "CUR"
		this.ctrl.intrbk_sttlm_amnt.target_column = "INTRBK_STTLM_AMNT"
		this.ctrl.intrbk_sttlm_amnt.data_type = "NUMBER"
		this.ctrl.intrbk_sttlm_amnt.data_length = 19
		this.ctrl.intrbk_sttlm_amnt.zone_df_code = "DF_1304_1665385905734"
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
		this.ctrl.intrbk_sttlm_amnt.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.intrbk_sttlm_amnt.targetcolumn_lower = "intrbk_sttlm_amnt"
		this.ctrl.intrbk_sttlm_amnt.disabled = false
		this.ctrl.intrbk_sttlm_amnt.view_name = "f_cust_transaction_ui"
		this.ctrl.intrbk_sttlm_amnt.ctrl_id = "cust_transaction_ui_intrbk_sttlm_amnt"
		this.ctrl.cust_transaction_ui_intrbk_sttlm_amnt = {}
		this.ctrl.cust_transaction_ui_intrbk_sttlm_amnt.onChangecomponent = new EventEmitter<any>()
	
		//Properties of value_date
		this.ctrl.value_date = {}
		this.ctrl.value_date.id = "RN101CN13"
		this.ctrl.value_date.desc = "Value Date"
		this.ctrl.value_date.visible = false
		this.ctrl.value_date.label_name = "Value Date"
		this.ctrl.value_date.df_code = "DF_1304_1665385905734"
		this.ctrl.value_date.df_description = "Column Group 1"
		this.ctrl.value_date.uictrl_code = "DTP"
		this.ctrl.value_date.target_column = "VALUE_DATE"
		this.ctrl.value_date.data_type = "DATETIME"
		this.ctrl.value_date.data_length = 0
		this.ctrl.value_date.zone_df_code = "DF_1304_1665385905734"
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
		this.ctrl.value_date.sub_content = "*"
		this.ctrl.value_date.required = true
		this.ctrl.value_date.vld_rules = []
		this.ctrl.value_date.targetcolumn_lower = "value_date"
		this.ctrl.value_date.disabled = false
		this.ctrl.value_date.view_name = "f_cust_transaction_ui"
		this.ctrl.value_date.ctrl_id = "cust_transaction_ui_value_date"
		this.ctrl.cust_transaction_ui_value_date = {}
		this.ctrl.cust_transaction_ui_value_date.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_cust_transaction_ui.model = {"MEMORY51":"","DBTR_ACCT_NAME":"","DBTR_PHONE_NO":"","DBTR_ACCT_BALANCE":"","DBTR_SANCTION_LIMIT":"","MEMORY52":"","CDTR_PMT_TYPE":"","CDTR_PHONE_NO":"","CDTR_EMAIL_ID":"","CDTR_EMIRATES":"","CDTR_IBAN":"","INTRBK_STTLM_AMNT":"","VALUE_DATE":""}
		this.screen_instance[this.comp_id].f_cust_transaction_ui.Meta = [{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_ACCT_NAME"},{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_PHONE_NO"},{"CTLR_CODE":"CUR","DATA_TYPE":"NUMBER","TARGET_COLUMN":"DBTR_ACCT_BALANCE"},{"CTLR_CODE":"CUR","DATA_TYPE":"NUMBER","TARGET_COLUMN":"DBTR_SANCTION_LIMIT"},{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_PMT_TYPE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_PHONE_NO"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_EMAIL_ID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_EMIRATES"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_IBAN"},{"CTLR_CODE":"CUR","DATA_TYPE":"NUMBER","TARGET_COLUMN":"INTRBK_STTLM_AMNT"},{"CTLR_CODE":"DTP","DATA_TYPE":"DATETIME","TARGET_COLUMN":"VALUE_DATE"}]
		this.screen_instance[this.comp_id].f_cust_transaction_ui.dt_code = "dt_1304_1665384453253"
		this.screen_instance[this.comp_id].f_cust_transaction_ui.dtt_code = "dtt_1304_1665385772257"
		this.screen_instance[this.comp_id].f_cust_transaction_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_cust_transaction_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_cust_transaction_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_cust_transaction_ui[control][property] = value;
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
    