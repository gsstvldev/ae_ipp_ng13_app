/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34767 
Modified By     : Admin 
Modified Date   : 2024-Mar-14 12:26 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_rejected_payments_by_cb
Form Name       : NPSS Rej Pay By CB SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_rej_pay_by_cb_srch',
  templateUrl: './f_npss_rej_pay_by_cb_srch.component.html',
  styleUrls: ['./f_npss_rej_pay_by_cb_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_rej_pay_by_cb_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_rej_pay_by_cb_srch') form;
  @ViewChild('npss_rej_pay_by_cb_srch_uetr') element: ElementRef;
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

  
		//Properties of uetr
		this.ctrl.uetr = {}
		this.ctrl.uetr.id = "RN01CN1"
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
		this.ctrl.uetr.vld_rules = [{"type":"CV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"","click":"Valitem","message":"","custom_val_message":{"ngmessages":[{"message_key":"GT_10_D","message_value":"Select only 10 days"}]},"expression":"","project_code":"CCI_PROJ3209","project_name":"npss_c_cond_ctrl_ui_validation","cv_event":"ON_SUBMIT"}]
		this.ctrl.uetr.targetcolumn_lower = "uetr"
		this.ctrl.uetr.disabled = false
		this.ctrl.uetr.view_name = "f_npss_rej_pay_by_cb_srch"
		this.ctrl.uetr.ctrl_id = "npss_rej_pay_by_cb_srch_uetr"
		this.ctrl.npss_rej_pay_by_cb_srch_uetr = {}
		this.ctrl.npss_rej_pay_by_cb_srch_uetr.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory107
		this.ctrl.memory107 = {}
		this.ctrl.memory107.id = "RN01CN2"
		this.ctrl.memory107.desc = "SCT Initiation Ref No"
		this.ctrl.memory107.visible = true
		this.ctrl.memory107.label_name = "SCT Initiation Ref No"
		this.ctrl.memory107.df_code = "DF_1304_1665901396659"
		this.ctrl.memory107.df_description = "Column Group 1"
		this.ctrl.memory107.uictrl_code = "CDN_CTRL"
		this.ctrl.memory107.target_column = "memory107"
		this.ctrl.memory107.data_type = "TEXT"
		this.ctrl.memory107.data_length = 64
		this.ctrl.memory107.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory107.default_value = ""
		this.ctrl.memory107.is_memory_ctrl = "Y"
		this.ctrl.memory107.field_coordinates = ""
		this.ctrl.memory107.sub_details = ""
		this.ctrl.memory107.accept_char = ""
		this.ctrl.memory107.currency_format = ""
		this.ctrl.memory107.data_scale = ""
		this.ctrl.memory107.binding_name = "NPSSTRRD_REFNO"
		this.ctrl.memory107.hide_label = false
		this.ctrl.memory107.depends_on = ""
		this.ctrl.memory107.placeholder = ""
		this.ctrl.memory107.dynamic_param = ""
		this.ctrl.memory107.style_code = ""
		this.ctrl.memory107.data_source = ""
		this.ctrl.memory107.image_association = ""
		this.ctrl.memory107.show = true
		this.ctrl.memory107.sub_content = ""
		this.ctrl.memory107.required = false
		this.ctrl.memory107.vld_rules = []
		this.ctrl.memory107.targetcolumn_lower = "memory107"
		this.ctrl.memory107.disabled = false
		this.ctrl.memory107.view_name = "f_npss_rej_pay_by_cb_srch"
		this.ctrl.memory107.ctrl_id = "npss_rej_pay_by_cb_srch_memory107"
		this.ctrl.npss_rej_pay_by_cb_srch_memory107 = {}
		this.ctrl.npss_rej_pay_by_cb_srch_memory107.onChangecomponent = new EventEmitter<any>()
	
		//Properties of payment_endtoend_id
		this.ctrl.payment_endtoend_id = {}
		this.ctrl.payment_endtoend_id.id = "RN11CN3"
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
		this.ctrl.payment_endtoend_id.vld_rules = [{"type":"CV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"","click":"Valitem","message":"","custom_val_message":{"ngmessages":[{"message_key":"GT_10_D","message_value":"Select only 10 days"}]},"expression":"","project_code":"CCI_PROJ3209","project_name":"npss_c_cond_ctrl_ui_validation","cv_event":"ON_SUBMIT"}]
		this.ctrl.payment_endtoend_id.targetcolumn_lower = "payment_endtoend_id"
		this.ctrl.payment_endtoend_id.disabled = false
		this.ctrl.payment_endtoend_id.view_name = "f_npss_rej_pay_by_cb_srch"
		this.ctrl.payment_endtoend_id.ctrl_id = "npss_rej_pay_by_cb_srch_payment_endtoend_id"
		this.ctrl.npss_rej_pay_by_cb_srch_payment_endtoend_id = {}
		this.ctrl.npss_rej_pay_by_cb_srch_payment_endtoend_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_iban
		this.ctrl.dbtr_iban = {}
		this.ctrl.dbtr_iban.id = "RN11CN4"
		this.ctrl.dbtr_iban.desc = "Payer Account No"
		this.ctrl.dbtr_iban.visible = true
		this.ctrl.dbtr_iban.label_name = "Payer Account No"
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
		this.ctrl.dbtr_iban.view_name = "f_npss_rej_pay_by_cb_srch"
		this.ctrl.dbtr_iban.ctrl_id = "npss_rej_pay_by_cb_srch_dbtr_iban"
		this.ctrl.npss_rej_pay_by_cb_srch_dbtr_iban = {}
		this.ctrl.npss_rej_pay_by_cb_srch_dbtr_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of intrbk_sttlm_amnt
		this.ctrl.intrbk_sttlm_amnt = {}
		this.ctrl.intrbk_sttlm_amnt.id = "RN21CN7"
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
		this.ctrl.intrbk_sttlm_amnt.view_name = "f_npss_rej_pay_by_cb_srch"
		this.ctrl.intrbk_sttlm_amnt.ctrl_id = "npss_rej_pay_by_cb_srch_intrbk_sttlm_amnt"
		this.ctrl.npss_rej_pay_by_cb_srch_intrbk_sttlm_amnt = {}
		this.ctrl.npss_rej_pay_by_cb_srch_intrbk_sttlm_amnt.onChangecomponent = new EventEmitter<any>()
	
		//Properties of value_date
		this.ctrl.value_date = {}
		this.ctrl.value_date.id = "RN21CN8"
		this.ctrl.value_date.desc = "Tran Date"
		this.ctrl.value_date.visible = true
		this.ctrl.value_date.label_name = "Tran Date"
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
		this.ctrl.value_date.vld_rules = [{"type":"CV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"","click":"Valitem","message":"","custom_val_message":{"ngmessages":[{"message_key":"GT_10_D","message_value":"Select only 10 days"},{"message_key":"DT_NULL","message_value":"Please select date"}]},"expression":"","project_code":"CCI_PROJ3207","project_name":"npss_c_date_validation_for_report","cv_event":"ON_SUBMIT"}]
		this.ctrl.value_date.targetcolumn_lower = "value_date"
		this.ctrl.value_date.disabled = false
		this.ctrl.value_date.view_name = "f_npss_rej_pay_by_cb_srch"
		this.ctrl.value_date.ctrl_id = "npss_rej_pay_by_cb_srch_value_date"
		this.ctrl.npss_rej_pay_by_cb_srch_value_date = {}
		this.ctrl.npss_rej_pay_by_cb_srch_value_date.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_acct_name
		this.ctrl.cdtr_acct_name = {}
		this.ctrl.cdtr_acct_name.id = "RN31CN9"
		this.ctrl.cdtr_acct_name.desc = "Beneficiary Name"
		this.ctrl.cdtr_acct_name.visible = true
		this.ctrl.cdtr_acct_name.label_name = "Beneficiary Name"
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
		this.ctrl.cdtr_acct_name.view_name = "f_npss_rej_pay_by_cb_srch"
		this.ctrl.cdtr_acct_name.ctrl_id = "npss_rej_pay_by_cb_srch_cdtr_acct_name"
		this.ctrl.npss_rej_pay_by_cb_srch_cdtr_acct_name = {}
		this.ctrl.npss_rej_pay_by_cb_srch_cdtr_acct_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cr_sort_code
		this.ctrl.cr_sort_code = {}
		this.ctrl.cr_sort_code.id = "RN31CN10"
		this.ctrl.cr_sort_code.desc = "Beneficiary Bank"
		this.ctrl.cr_sort_code.visible = true
		this.ctrl.cr_sort_code.label_name = "Beneficiary Bank"
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
		this.ctrl.cr_sort_code.data_source = {"ds_code":"UDS_1304_1676964219736","ds_description":"NPSS Code and Bank CDB","rows":[],"type":"DPS_TABLE","value_member":"BIC_CODE","display_member":"BANK_NAME","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_MEMBER_BANKS","context":"","filters":[{"filter_name":"Filter1","binding_name":"NEED_SYNC","id":"DF_1678254801794","binding_value":"Y","source_name":"NEED_SYNC","source_value":"Y","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter2","binding_name":"TENANT_ID","id":"DF_1678254801794","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"NEED_SYNC","binding_value":"Y","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"Y"},{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"}]},"query":"(NEED_SYNC = Y AND TENANT_ID = SESSION_LEVEL.TENANT_ID)"},"sel_columns":[],"need_first_item_selection":false,"has_parent":false}
		this.ctrl.cr_sort_code.image_association = ""
		this.ctrl.cr_sort_code.show = true
		this.ctrl.cr_sort_code.sub_content = ""
		this.ctrl.cr_sort_code.required = false
		this.ctrl.cr_sort_code.vld_rules = []
		this.ctrl.cr_sort_code.targetcolumn_lower = "cr_sort_code"
		this.ctrl.cr_sort_code.disabled = false
		this.ctrl.cr_sort_code.view_name = "f_npss_rej_pay_by_cb_srch"
		this.ctrl.cr_sort_code.ctrl_id = "npss_rej_pay_by_cb_srch_cr_sort_code"
		this.ctrl.npss_rej_pay_by_cb_srch_cr_sort_code = {}
		this.ctrl.npss_rej_pay_by_cb_srch_cr_sort_code.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_rej_pay_by_cb_srch.cr_sort_code = {}
		this.screen_instance[this.comp_id].f_npss_rej_pay_by_cb_srch.model = {"UETR":"","MEMORY107":"","PAYMENT_ENDTOEND_ID":"","DBTR_IBAN":"","INTRBK_STTLM_AMNT":"","VALUE_DATE":"setcurrentdate(),{}","CDTR_ACCT_NAME":"","CR_SORT_CODE":""}
		this.screen_instance[this.comp_id].f_npss_rej_pay_by_cb_srch.Meta = [{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"UETR"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"PAYMENT_ENDTOEND_ID"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_IBAN"},{"CTLR_CODE":"CDN_CUR_CTRL","DATA_TYPE":"NUMBER","TARGET_COLUMN":"INTRBK_STTLM_AMNT"},{"CTLR_CODE":"CDN_DATE","DATA_TYPE":"DATETIME","TARGET_COLUMN":"VALUE_DATE"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_ACCT_NAME"},{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"CR_SORT_CODE"}]
		this.screen_instance[this.comp_id].f_npss_rej_pay_by_cb_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_rej_pay_by_cb_srch.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_rej_pay_by_cb_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_rej_pay_by_cb_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_rej_pay_by_cb_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_rej_pay_by_cb_srch[control][property] = value;
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
    