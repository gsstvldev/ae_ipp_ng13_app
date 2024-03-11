/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34710 
Modified By     : Admin 
Modified Date   : 2024-Mar-11 13:48 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_merchant_details
Form Name       : NPSS Merchant Payment type QR UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_merchant_payment_type_qr_ui',
  templateUrl: './f_npss_merchant_payment_type_qr_ui.component.html',
  styleUrls: ['./f_npss_merchant_payment_type_qr_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_merchant_payment_type_qr_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_merchant_payment_type_qr_ui') form;
  @ViewChild('npss_merchant_payment_type_qr_ui_dbtr_cust_type') element: ElementRef;
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

  
		//Properties of dbtr_cust_type
		this.ctrl.dbtr_cust_type = {}
		this.ctrl.dbtr_cust_type.id = "RN01CN1"
		this.ctrl.dbtr_cust_type.desc = "Payment Type"
		this.ctrl.dbtr_cust_type.visible = true
		this.ctrl.dbtr_cust_type.label_name = "Payment Type"
		this.ctrl.dbtr_cust_type.df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_cust_type.df_description = "Column Group 1"
		this.ctrl.dbtr_cust_type.uictrl_code = "CBO"
		this.ctrl.dbtr_cust_type.target_column = "DBTR_CUST_TYPE"
		this.ctrl.dbtr_cust_type.data_type = "TEXT"
		this.ctrl.dbtr_cust_type.data_length = 4
		this.ctrl.dbtr_cust_type.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_cust_type.default_value = ""
		this.ctrl.dbtr_cust_type.is_memory_ctrl = ""
		this.ctrl.dbtr_cust_type.field_coordinates = ""
		this.ctrl.dbtr_cust_type.sub_details = ""
		this.ctrl.dbtr_cust_type.accept_char = ""
		this.ctrl.dbtr_cust_type.currency_format = ""
		this.ctrl.dbtr_cust_type.data_scale = ""
		this.ctrl.dbtr_cust_type.hide_label = false
		this.ctrl.dbtr_cust_type.depends_on = ""
		this.ctrl.dbtr_cust_type.placeholder = ""
		this.ctrl.dbtr_cust_type.dynamic_param = ""
		this.ctrl.dbtr_cust_type.style_code = ""
		this.ctrl.dbtr_cust_type.data_source = {"ds_code":"UDS_1304_1680248659944","ds_description":"NPSS Payment type QR Static","rows":[{"value":"Select","code":""},{"value":"Phone No","code":"Phone No"},{"value":"Email Id","code":"Email Id"},{"value":"IBAN","code":"IBAN"},{"value":"Emirates","code":"Emirates"}],"type":"DPS_STATIC","value_member":"CODE","display_member":"VALUE","first_record_display":"Select","column_list":"CODE;VALUE","order_by":"","target_table":"","context":"","filters":[],"type_desc":"Combo Binding Static","conditional_operator":"CONTAINS","sel_columns":[],"need_first_item_selection":false,"has_parent":false}
		this.ctrl.dbtr_cust_type.image_association = ""
		this.ctrl.dbtr_cust_type.show = true
		this.ctrl.dbtr_cust_type.sub_content = ""
		this.ctrl.dbtr_cust_type.required = false
		this.ctrl.dbtr_cust_type.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Select the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.dbtr_cust_type.targetcolumn_lower = "dbtr_cust_type"
		this.ctrl.dbtr_cust_type.disabled = false
		this.ctrl.dbtr_cust_type.view_name = "f_npss_merchant_payment_type_qr_ui"
		this.ctrl.dbtr_cust_type.ctrl_id = "npss_merchant_payment_type_qr_ui_dbtr_cust_type"
		this.ctrl.npss_merchant_payment_type_qr_ui_dbtr_cust_type = {}
		this.ctrl.npss_merchant_payment_type_qr_ui_dbtr_cust_type.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_merchant_payment_type_qr_ui.dbtr_cust_type = {}
	
		//Properties of dbtr_phone_no
		this.ctrl.dbtr_phone_no = {}
		this.ctrl.dbtr_phone_no.id = "RN01CN2"
		this.ctrl.dbtr_phone_no.desc = "Phone No"
		this.ctrl.dbtr_phone_no.visible = true
		this.ctrl.dbtr_phone_no.label_name = "Phone No"
		this.ctrl.dbtr_phone_no.df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_phone_no.df_description = "Column Group 1"
		this.ctrl.dbtr_phone_no.uictrl_code = "TXT"
		this.ctrl.dbtr_phone_no.target_column = "DBTR_PHONE_NO"
		this.ctrl.dbtr_phone_no.data_type = "TEXT"
		this.ctrl.dbtr_phone_no.data_length = 64
		this.ctrl.dbtr_phone_no.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_phone_no.default_value = ""
		this.ctrl.dbtr_phone_no.is_memory_ctrl = ""
		this.ctrl.dbtr_phone_no.field_coordinates = ""
		this.ctrl.dbtr_phone_no.sub_details = ""
		this.ctrl.dbtr_phone_no.accept_char = ""
		this.ctrl.dbtr_phone_no.currency_format = ""
		this.ctrl.dbtr_phone_no.data_scale = ""
		this.ctrl.dbtr_phone_no.hide_label = false
		this.ctrl.dbtr_phone_no.depends_on = "DBTR_CUST_TYPE:Phone No"
		this.ctrl.dbtr_phone_no.placeholder = ""
		this.ctrl.dbtr_phone_no.dynamic_param = ""
		this.ctrl.dbtr_phone_no.style_code = ""
		this.ctrl.dbtr_phone_no.data_source = ""
		this.ctrl.dbtr_phone_no.image_association = ""
		this.ctrl.dbtr_phone_no.show = false
		this.ctrl.dbtr_phone_no.sub_content = ""
		this.ctrl.dbtr_phone_no.required = false
		this.ctrl.dbtr_phone_no.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.dbtr_phone_no.targetcolumn_lower = "dbtr_phone_no"
		this.ctrl.dbtr_phone_no.disabled = false
		this.ctrl.dbtr_phone_no.view_name = "f_npss_merchant_payment_type_qr_ui"
		this.ctrl.dbtr_phone_no.ctrl_id = "npss_merchant_payment_type_qr_ui_dbtr_phone_no"
		this.ctrl.npss_merchant_payment_type_qr_ui_dbtr_phone_no = {}
		this.ctrl.npss_merchant_payment_type_qr_ui_dbtr_phone_no.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_email_id
		this.ctrl.dbtr_email_id = {}
		this.ctrl.dbtr_email_id.id = "RN11CN3"
		this.ctrl.dbtr_email_id.desc = "Email Id"
		this.ctrl.dbtr_email_id.visible = true
		this.ctrl.dbtr_email_id.label_name = "Email Id"
		this.ctrl.dbtr_email_id.df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_email_id.df_description = "Column Group 1"
		this.ctrl.dbtr_email_id.uictrl_code = "TXT"
		this.ctrl.dbtr_email_id.target_column = "DBTR_EMAIL_ID"
		this.ctrl.dbtr_email_id.data_type = "TEXT"
		this.ctrl.dbtr_email_id.data_length = 64
		this.ctrl.dbtr_email_id.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_email_id.default_value = ""
		this.ctrl.dbtr_email_id.is_memory_ctrl = ""
		this.ctrl.dbtr_email_id.field_coordinates = ""
		this.ctrl.dbtr_email_id.sub_details = ""
		this.ctrl.dbtr_email_id.accept_char = ""
		this.ctrl.dbtr_email_id.currency_format = ""
		this.ctrl.dbtr_email_id.data_scale = ""
		this.ctrl.dbtr_email_id.hide_label = false
		this.ctrl.dbtr_email_id.depends_on = "DBTR_CUST_TYPE:Email Id"
		this.ctrl.dbtr_email_id.placeholder = ""
		this.ctrl.dbtr_email_id.dynamic_param = ""
		this.ctrl.dbtr_email_id.style_code = ""
		this.ctrl.dbtr_email_id.data_source = ""
		this.ctrl.dbtr_email_id.image_association = ""
		this.ctrl.dbtr_email_id.show = false
		this.ctrl.dbtr_email_id.sub_content = ""
		this.ctrl.dbtr_email_id.required = false
		this.ctrl.dbtr_email_id.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.dbtr_email_id.targetcolumn_lower = "dbtr_email_id"
		this.ctrl.dbtr_email_id.disabled = false
		this.ctrl.dbtr_email_id.view_name = "f_npss_merchant_payment_type_qr_ui"
		this.ctrl.dbtr_email_id.ctrl_id = "npss_merchant_payment_type_qr_ui_dbtr_email_id"
		this.ctrl.npss_merchant_payment_type_qr_ui_dbtr_email_id = {}
		this.ctrl.npss_merchant_payment_type_qr_ui_dbtr_email_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_iban
		this.ctrl.dbtr_iban = {}
		this.ctrl.dbtr_iban.id = "RN11CN5"
		this.ctrl.dbtr_iban.desc = "IBAN"
		this.ctrl.dbtr_iban.visible = true
		this.ctrl.dbtr_iban.label_name = "IBAN"
		this.ctrl.dbtr_iban.df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_iban.df_description = "Column Group 1"
		this.ctrl.dbtr_iban.uictrl_code = "TXT"
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
		this.ctrl.dbtr_iban.hide_label = false
		this.ctrl.dbtr_iban.depends_on = "DBTR_CUST_TYPE:IBAN"
		this.ctrl.dbtr_iban.placeholder = ""
		this.ctrl.dbtr_iban.dynamic_param = ""
		this.ctrl.dbtr_iban.style_code = ""
		this.ctrl.dbtr_iban.data_source = ""
		this.ctrl.dbtr_iban.image_association = ""
		this.ctrl.dbtr_iban.show = false
		this.ctrl.dbtr_iban.sub_content = ""
		this.ctrl.dbtr_iban.required = false
		this.ctrl.dbtr_iban.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.dbtr_iban.targetcolumn_lower = "dbtr_iban"
		this.ctrl.dbtr_iban.disabled = false
		this.ctrl.dbtr_iban.view_name = "f_npss_merchant_payment_type_qr_ui"
		this.ctrl.dbtr_iban.ctrl_id = "npss_merchant_payment_type_qr_ui_dbtr_iban"
		this.ctrl.npss_merchant_payment_type_qr_ui_dbtr_iban = {}
		this.ctrl.npss_merchant_payment_type_qr_ui_dbtr_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_document_id
		this.ctrl.dbtr_document_id = {}
		this.ctrl.dbtr_document_id.id = "RN21CN4"
		this.ctrl.dbtr_document_id.desc = "Emirates"
		this.ctrl.dbtr_document_id.visible = true
		this.ctrl.dbtr_document_id.label_name = "Emirates"
		this.ctrl.dbtr_document_id.df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_document_id.df_description = "Column Group 1"
		this.ctrl.dbtr_document_id.uictrl_code = "TXT"
		this.ctrl.dbtr_document_id.target_column = "DBTR_DOCUMENT_ID"
		this.ctrl.dbtr_document_id.data_type = "TEXT"
		this.ctrl.dbtr_document_id.data_length = 64
		this.ctrl.dbtr_document_id.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_document_id.default_value = ""
		this.ctrl.dbtr_document_id.is_memory_ctrl = ""
		this.ctrl.dbtr_document_id.field_coordinates = ""
		this.ctrl.dbtr_document_id.sub_details = ""
		this.ctrl.dbtr_document_id.accept_char = ""
		this.ctrl.dbtr_document_id.currency_format = ""
		this.ctrl.dbtr_document_id.data_scale = ""
		this.ctrl.dbtr_document_id.hide_label = false
		this.ctrl.dbtr_document_id.depends_on = "DBTR_CUST_TYPE:Emirates"
		this.ctrl.dbtr_document_id.placeholder = ""
		this.ctrl.dbtr_document_id.dynamic_param = ""
		this.ctrl.dbtr_document_id.style_code = ""
		this.ctrl.dbtr_document_id.data_source = ""
		this.ctrl.dbtr_document_id.image_association = ""
		this.ctrl.dbtr_document_id.show = false
		this.ctrl.dbtr_document_id.sub_content = ""
		this.ctrl.dbtr_document_id.required = false
		this.ctrl.dbtr_document_id.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.dbtr_document_id.targetcolumn_lower = "dbtr_document_id"
		this.ctrl.dbtr_document_id.disabled = false
		this.ctrl.dbtr_document_id.view_name = "f_npss_merchant_payment_type_qr_ui"
		this.ctrl.dbtr_document_id.ctrl_id = "npss_merchant_payment_type_qr_ui_dbtr_document_id"
		this.ctrl.npss_merchant_payment_type_qr_ui_dbtr_document_id = {}
		this.ctrl.npss_merchant_payment_type_qr_ui_dbtr_document_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of value_date
		this.ctrl.value_date = {}
		this.ctrl.value_date.id = "RN21CN9"
		this.ctrl.value_date.desc = "Invoice Date"
		this.ctrl.value_date.visible = true
		this.ctrl.value_date.label_name = "Invoice Date"
		this.ctrl.value_date.df_code = "DF_1304_1665901396659"
		this.ctrl.value_date.df_description = "Column Group 1"
		this.ctrl.value_date.uictrl_code = "DTP"
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
		this.ctrl.value_date.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.value_date.targetcolumn_lower = "value_date"
		this.ctrl.value_date.disabled = false
		this.ctrl.value_date.view_name = "f_npss_merchant_payment_type_qr_ui"
		this.ctrl.value_date.ctrl_id = "npss_merchant_payment_type_qr_ui_value_date"
		this.ctrl.npss_merchant_payment_type_qr_ui_value_date = {}
		this.ctrl.npss_merchant_payment_type_qr_ui_value_date.onChangecomponent = new EventEmitter<any>()
	
		//Properties of remarks
		this.ctrl.remarks = {}
		this.ctrl.remarks.id = "RN31CN8"
		this.ctrl.remarks.desc = "Invoice Reference"
		this.ctrl.remarks.visible = true
		this.ctrl.remarks.label_name = "Invoice Reference"
		this.ctrl.remarks.df_code = "DF_1304_1665901396659"
		this.ctrl.remarks.df_description = "Column Group 1"
		this.ctrl.remarks.uictrl_code = "TXT"
		this.ctrl.remarks.target_column = "REMARKS"
		this.ctrl.remarks.data_type = "TEXT"
		this.ctrl.remarks.data_length = 256
		this.ctrl.remarks.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.remarks.default_value = ""
		this.ctrl.remarks.is_memory_ctrl = ""
		this.ctrl.remarks.field_coordinates = ""
		this.ctrl.remarks.sub_details = ""
		this.ctrl.remarks.accept_char = ""
		this.ctrl.remarks.currency_format = ""
		this.ctrl.remarks.data_scale = ""
		this.ctrl.remarks.hide_label = false
		this.ctrl.remarks.depends_on = ""
		this.ctrl.remarks.placeholder = ""
		this.ctrl.remarks.dynamic_param = ""
		this.ctrl.remarks.style_code = ""
		this.ctrl.remarks.data_source = ""
		this.ctrl.remarks.image_association = ""
		this.ctrl.remarks.show = true
		this.ctrl.remarks.sub_content = ""
		this.ctrl.remarks.required = false
		this.ctrl.remarks.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.remarks.targetcolumn_lower = "remarks"
		this.ctrl.remarks.disabled = false
		this.ctrl.remarks.view_name = "f_npss_merchant_payment_type_qr_ui"
		this.ctrl.remarks.ctrl_id = "npss_merchant_payment_type_qr_ui_remarks"
		this.ctrl.npss_merchant_payment_type_qr_ui_remarks = {}
		this.ctrl.npss_merchant_payment_type_qr_ui_remarks.onChangecomponent = new EventEmitter<any>()
	
		//Properties of intrbk_sttlm_amnt
		this.ctrl.intrbk_sttlm_amnt = {}
		this.ctrl.intrbk_sttlm_amnt.id = "RN31CN7"
		this.ctrl.intrbk_sttlm_amnt.desc = "Enter Amount"
		this.ctrl.intrbk_sttlm_amnt.visible = true
		this.ctrl.intrbk_sttlm_amnt.label_name = "Enter Amount"
		this.ctrl.intrbk_sttlm_amnt.df_code = "DF_1304_1665901396659"
		this.ctrl.intrbk_sttlm_amnt.df_description = "Column Group 1"
		this.ctrl.intrbk_sttlm_amnt.uictrl_code = "CUR"
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
		this.ctrl.intrbk_sttlm_amnt.view_name = "f_npss_merchant_payment_type_qr_ui"
		this.ctrl.intrbk_sttlm_amnt.ctrl_id = "npss_merchant_payment_type_qr_ui_intrbk_sttlm_amnt"
		this.ctrl.npss_merchant_payment_type_qr_ui_intrbk_sttlm_amnt = {}
		this.ctrl.npss_merchant_payment_type_qr_ui_intrbk_sttlm_amnt.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_merchant_payment_type_qr_ui.model = {"DBTR_CUST_TYPE":"","DBTR_PHONE_NO":"","DBTR_EMAIL_ID":"","DBTR_IBAN":"","DBTR_DOCUMENT_ID":"","VALUE_DATE":"setcurrentdate(),{}","REMARKS":"","INTRBK_STTLM_AMNT":""}
		this.screen_instance[this.comp_id].f_npss_merchant_payment_type_qr_ui.Meta = [{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_CUST_TYPE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_PHONE_NO"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_EMAIL_ID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_IBAN"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_DOCUMENT_ID"},{"CTLR_CODE":"DTP","DATA_TYPE":"DATETIME","TARGET_COLUMN":"VALUE_DATE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"REMARKS"},{"CTLR_CODE":"CUR","DATA_TYPE":"NUMBER","TARGET_COLUMN":"INTRBK_STTLM_AMNT"}]
		this.screen_instance[this.comp_id].f_npss_merchant_payment_type_qr_ui.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_merchant_payment_type_qr_ui.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_merchant_payment_type_qr_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_merchant_payment_type_qr_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_merchant_payment_type_qr_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_merchant_payment_type_qr_ui[control][property] = value;
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
    