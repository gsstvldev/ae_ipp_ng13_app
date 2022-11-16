/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26908 
Modified By     : Admin 
Modified Date   : 2022-Nov-16 11:36 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_bct_review_transactions
Form Name       : NPSS Investigation srch--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_investigation_srch',
  templateUrl: './f_npss_investigation_srch.component.html',
  styleUrls: ['./f_npss_investigation_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_investigation_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_investigation_srch') form;
  @ViewChild('npss_investigation_srch_value_date') element: ElementRef;
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
		this.ctrl.value_date.id = "RN01CN1001"
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
		this.ctrl.value_date.view_name = "f_npss_investigation_srch"
		this.ctrl.value_date.ctrl_id = "npss_investigation_srch_value_date"
		this.ctrl.npss_investigation_srch_value_date = {}
		this.ctrl.npss_investigation_srch_value_date.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory63
		this.ctrl.memory63 = {}
		this.ctrl.memory63.id = "RN21CN5"
		this.ctrl.memory63.desc = "Created date"
		this.ctrl.memory63.visible = true
		this.ctrl.memory63.label_name = "Created date"
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
		this.ctrl.memory63.view_name = "f_npss_investigation_srch"
		this.ctrl.memory63.ctrl_id = "npss_investigation_srch_memory63"
		this.ctrl.npss_investigation_srch_memory63 = {}
		this.ctrl.npss_investigation_srch_memory63.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_iban
		this.ctrl.cdtr_iban = {}
		this.ctrl.cdtr_iban.id = "RN01CN1"
		this.ctrl.cdtr_iban.desc = "Creditor IBAN"
		this.ctrl.cdtr_iban.visible = true
		this.ctrl.cdtr_iban.label_name = "Creditor IBAN"
		this.ctrl.cdtr_iban.df_code = "DF_1304_1665901396659"
		this.ctrl.cdtr_iban.df_description = "Column Group 1"
		this.ctrl.cdtr_iban.uictrl_code = "TXT"
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
		this.ctrl.cdtr_iban.view_name = "f_npss_investigation_srch"
		this.ctrl.cdtr_iban.ctrl_id = "npss_investigation_srch_cdtr_iban"
		this.ctrl.npss_investigation_srch_cdtr_iban = {}
		this.ctrl.npss_investigation_srch_cdtr_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of uetr
		this.ctrl.uetr = {}
		this.ctrl.uetr.id = "RN11CN2"
		this.ctrl.uetr.desc = "Clearing sys ref number"
		this.ctrl.uetr.visible = true
		this.ctrl.uetr.label_name = "Clearing sys ref number"
		this.ctrl.uetr.df_code = "DF_1304_1665901396659"
		this.ctrl.uetr.df_description = "Column Group 1"
		this.ctrl.uetr.uictrl_code = "TXT"
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
		this.ctrl.uetr.view_name = "f_npss_investigation_srch"
		this.ctrl.uetr.ctrl_id = "npss_investigation_srch_uetr"
		this.ctrl.npss_investigation_srch_uetr = {}
		this.ctrl.npss_investigation_srch_uetr.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory67
		this.ctrl.memory67 = {}
		this.ctrl.memory67.id = "RN51CN11"
		this.ctrl.memory67.desc = "Payment Method"
		this.ctrl.memory67.visible = true
		this.ctrl.memory67.label_name = "Payment Method"
		this.ctrl.memory67.df_code = "DF_1304_1665901396659"
		this.ctrl.memory67.df_description = "Column Group 1"
		this.ctrl.memory67.uictrl_code = "CBO"
		this.ctrl.memory67.target_column = "memory67"
		this.ctrl.memory67.data_type = "TEXT"
		this.ctrl.memory67.data_length = 0
		this.ctrl.memory67.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory67.default_value = ""
		this.ctrl.memory67.is_memory_ctrl = "Y"
		this.ctrl.memory67.field_coordinates = ""
		this.ctrl.memory67.sub_details = ""
		this.ctrl.memory67.accept_char = ""
		this.ctrl.memory67.currency_format = ""
		this.ctrl.memory67.data_scale = ""
		this.ctrl.memory67.binding_name = "MEM_PAYMENT_METHOD"
		this.ctrl.memory67.hide_label = false
		this.ctrl.memory67.depends_on = ""
		this.ctrl.memory67.placeholder = ""
		this.ctrl.memory67.dynamic_param = ""
		this.ctrl.memory67.style_code = ""
		this.ctrl.memory67.data_source = {"ds_code":"UDS_1304_1668418325492","ds_description":"Payment Method CDB","rows":[],"type":"DPS_TABLE","value_member":"CD_CODE","display_member":"CD_DESCRIPTION","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_NC_CODE_DESCRIPTIONS","context":"","filters":[{"filter_name":"Filter1","binding_name":"CD_CATEGORY","id":"DF_1668418458191","binding_value":"MEM_PAYMENT_METHOD","source_name":"CD_CATEGORY","source_value":"MEM_PAYMENT_METHOD","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter2","binding_name":"TENANT_ID","id":"DF_1668418458191","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"CD_CATEGORY","binding_value":"MEM_PAYMENT_METHOD","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","temp_value":"MEM_PAYMENT_METHOD","filter_values":"HARDCODED"},{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"}]},"query":"(CD_CATEGORY = MEM_PAYMENT_METHOD AND TENANT_ID = SESSION_LEVEL.TENANT_ID)"},"sel_columns":[]}
		this.ctrl.memory67.image_association = ""
		this.ctrl.memory67.show = true
		this.ctrl.memory67.sub_content = ""
		this.ctrl.memory67.required = false
		this.ctrl.memory67.vld_rules = []
		this.ctrl.memory67.targetcolumn_lower = "memory67"
		this.ctrl.memory67.disabled = false
		this.ctrl.memory67.view_name = "f_npss_investigation_srch"
		this.ctrl.memory67.ctrl_id = "npss_investigation_srch_memory67"
		this.ctrl.npss_investigation_srch_memory67 = {}
		this.ctrl.npss_investigation_srch_memory67.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_investigation_srch.memory67 = {}
	
		//Properties of tran_ref_id
		this.ctrl.tran_ref_id = {}
		this.ctrl.tran_ref_id.id = "RN21CN6"
		this.ctrl.tran_ref_id.desc = "Transaction Ref No"
		this.ctrl.tran_ref_id.visible = true
		this.ctrl.tran_ref_id.label_name = "Transaction Ref No"
		this.ctrl.tran_ref_id.df_code = "DF_1304_1665901396659"
		this.ctrl.tran_ref_id.df_description = "Column Group 1"
		this.ctrl.tran_ref_id.uictrl_code = "TXT"
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
		this.ctrl.tran_ref_id.view_name = "f_npss_investigation_srch"
		this.ctrl.tran_ref_id.ctrl_id = "npss_investigation_srch_tran_ref_id"
		this.ctrl.npss_investigation_srch_tran_ref_id = {}
		this.ctrl.npss_investigation_srch_tran_ref_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of payment_endtoend_id
		this.ctrl.payment_endtoend_id = {}
		this.ctrl.payment_endtoend_id.id = "RN61CN13"
		this.ctrl.payment_endtoend_id.desc = "E2E Ref ID"
		this.ctrl.payment_endtoend_id.visible = true
		this.ctrl.payment_endtoend_id.label_name = "E2E Ref ID"
		this.ctrl.payment_endtoend_id.df_code = "DF_1304_1665901396659"
		this.ctrl.payment_endtoend_id.df_description = "Column Group 1"
		this.ctrl.payment_endtoend_id.uictrl_code = "TXT"
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
		this.ctrl.payment_endtoend_id.view_name = "f_npss_investigation_srch"
		this.ctrl.payment_endtoend_id.ctrl_id = "npss_investigation_srch_payment_endtoend_id"
		this.ctrl.npss_investigation_srch_payment_endtoend_id = {}
		this.ctrl.npss_investigation_srch_payment_endtoend_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_acct_no
		this.ctrl.cdtr_acct_no = {}
		this.ctrl.cdtr_acct_no.id = "RN31CN7"
		this.ctrl.cdtr_acct_no.desc = "Cr Account Number"
		this.ctrl.cdtr_acct_no.visible = true
		this.ctrl.cdtr_acct_no.label_name = "Cr Account Number"
		this.ctrl.cdtr_acct_no.df_code = "DF_1304_1665901396659"
		this.ctrl.cdtr_acct_no.df_description = "Column Group 1"
		this.ctrl.cdtr_acct_no.uictrl_code = "TXT"
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
		this.ctrl.cdtr_acct_no.view_name = "f_npss_investigation_srch"
		this.ctrl.cdtr_acct_no.ctrl_id = "npss_investigation_srch_cdtr_acct_no"
		this.ctrl.npss_investigation_srch_cdtr_acct_no = {}
		this.ctrl.npss_investigation_srch_cdtr_acct_no.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_acct_no
		this.ctrl.dbtr_acct_no = {}
		this.ctrl.dbtr_acct_no.id = "RN41CN9"
		this.ctrl.dbtr_acct_no.desc = "Dr Account Number"
		this.ctrl.dbtr_acct_no.visible = true
		this.ctrl.dbtr_acct_no.label_name = "Dr Account Number"
		this.ctrl.dbtr_acct_no.df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_acct_no.df_description = "Column Group 1"
		this.ctrl.dbtr_acct_no.uictrl_code = "TXT"
		this.ctrl.dbtr_acct_no.target_column = "DBTR_ACCT_NO"
		this.ctrl.dbtr_acct_no.data_type = "TEXT"
		this.ctrl.dbtr_acct_no.data_length = 20
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
		this.ctrl.dbtr_acct_no.view_name = "f_npss_investigation_srch"
		this.ctrl.dbtr_acct_no.ctrl_id = "npss_investigation_srch_dbtr_acct_no"
		this.ctrl.npss_investigation_srch_dbtr_acct_no = {}
		this.ctrl.npss_investigation_srch_dbtr_acct_no.onChangecomponent = new EventEmitter<any>()
	
		//Properties of intrbk_sttlm_amnt
		this.ctrl.intrbk_sttlm_amnt = {}
		this.ctrl.intrbk_sttlm_amnt.id = "RN41CN12"
		this.ctrl.intrbk_sttlm_amnt.desc = "Transaction Amount"
		this.ctrl.intrbk_sttlm_amnt.visible = true
		this.ctrl.intrbk_sttlm_amnt.label_name = "Transaction Amount"
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
		this.ctrl.intrbk_sttlm_amnt.view_name = "f_npss_investigation_srch"
		this.ctrl.intrbk_sttlm_amnt.ctrl_id = "npss_investigation_srch_intrbk_sttlm_amnt"
		this.ctrl.npss_investigation_srch_intrbk_sttlm_amnt = {}
		this.ctrl.npss_investigation_srch_intrbk_sttlm_amnt.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_investigation_srch.model = {"VALUE_DATE":"setcurrentdate(),{}","MEMORY63":"setcurrentdate(),{}","CDTR_IBAN":"","UETR":"","MEMORY67":"","TRAN_REF_ID":"","PAYMENT_ENDTOEND_ID":"","CDTR_ACCT_NO":"","DBTR_ACCT_NO":"","INTRBK_STTLM_AMNT":""}
		this.screen_instance[this.comp_id].f_npss_investigation_srch.Meta = [{"CTLR_CODE":"CDN_DATE","DATA_TYPE":"DATETIME","TARGET_COLUMN":"VALUE_DATE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_IBAN"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"UETR"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"TRAN_REF_ID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"PAYMENT_ENDTOEND_ID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_ACCT_NO"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_ACCT_NO"},{"CTLR_CODE":"CDN_CUR_CTRL","DATA_TYPE":"NUMBER","TARGET_COLUMN":"INTRBK_STTLM_AMNT"}]
		this.screen_instance[this.comp_id].f_npss_investigation_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_investigation_srch.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_investigation_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_investigation_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_investigation_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_investigation_srch[control][property] = value;
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
    