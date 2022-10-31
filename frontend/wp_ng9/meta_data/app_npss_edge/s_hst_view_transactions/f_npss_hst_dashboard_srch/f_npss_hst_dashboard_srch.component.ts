/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26732 
Modified By     : Admin 
Modified Date   : 2022-Oct-31 6:59 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_hst_view_transactions
Form Name       : NPSS HST Dashboard SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_hst_dashboard_srch',
  templateUrl: './f_npss_hst_dashboard_srch.component.html',
  styleUrls: ['./f_npss_hst_dashboard_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_hst_dashboard_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_hst_dashboard_srch') form;
  @ViewChild('npss_hst_dashboard_srch_value_date') element: ElementRef;
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
		this.ctrl.value_date.view_name = "f_npss_hst_dashboard_srch"
		this.ctrl.value_date.ctrl_id = "npss_hst_dashboard_srch_value_date"
		this.ctrl.npss_hst_dashboard_srch_value_date = {}
		this.ctrl.npss_hst_dashboard_srch_value_date.onChangecomponent = new EventEmitter<any>()
	
		//Properties of intrbk_sttlm_amnt
		this.ctrl.intrbk_sttlm_amnt = {}
		this.ctrl.intrbk_sttlm_amnt.id = "RN41CN13"
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
		this.ctrl.intrbk_sttlm_amnt.view_name = "f_npss_hst_dashboard_srch"
		this.ctrl.intrbk_sttlm_amnt.ctrl_id = "npss_hst_dashboard_srch_intrbk_sttlm_amnt"
		this.ctrl.npss_hst_dashboard_srch_intrbk_sttlm_amnt = {}
		this.ctrl.npss_hst_dashboard_srch_intrbk_sttlm_amnt.onChangecomponent = new EventEmitter<any>()
	
		//Properties of process_type
		this.ctrl.process_type = {}
		this.ctrl.process_type.id = "RN01CN1001"
		this.ctrl.process_type.desc = "Process Type"
		this.ctrl.process_type.visible = true
		this.ctrl.process_type.label_name = "Process Type"
		this.ctrl.process_type.df_code = "DF_1304_1665901396659"
		this.ctrl.process_type.df_description = "Column Group 1"
		this.ctrl.process_type.uictrl_code = "CBO"
		this.ctrl.process_type.target_column = "PROCESS_TYPE"
		this.ctrl.process_type.data_type = "TEXT"
		this.ctrl.process_type.data_length = 2
		this.ctrl.process_type.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.process_type.default_value = ""
		this.ctrl.process_type.is_memory_ctrl = ""
		this.ctrl.process_type.field_coordinates = ""
		this.ctrl.process_type.sub_details = ""
		this.ctrl.process_type.accept_char = ""
		this.ctrl.process_type.currency_format = ""
		this.ctrl.process_type.data_scale = ""
		this.ctrl.process_type.binding_name = "PROCESS_TYPE"
		this.ctrl.process_type.hide_label = false
		this.ctrl.process_type.depends_on = ""
		this.ctrl.process_type.placeholder = ""
		this.ctrl.process_type.dynamic_param = ""
		this.ctrl.process_type.style_code = ""
		this.ctrl.process_type.data_source = {"ds_code":"UDS_1304_1666069454473","ds_description":"NPSS Process Type CDB","rows":[],"type":"DPS_TABLE","value_member":"CD_CODE","display_member":"CD_DESCRIPTION","first_record_display":"Select","column_list":"","order_by":"SORT_ORDER ASC","target_table":"CORE_CODE_DESCRIPTIONS","context":"","filters":[{"filter_name":"Filter1","binding_name":"CD_CATEGORY","id":"DF_1666085228019","binding_value":"PROCESS_TYPE","source_name":"CD_CATEGORY","source_value":"PROCESS_TYPE","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter2","binding_name":"TENANT_ID","id":"DF_1666085228019","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"CD_CATEGORY","binding_value":"PROCESS_TYPE","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"PROCESS_TYPE"},{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"}]},"query":"(CD_CATEGORY = PROCESS_TYPE AND TENANT_ID = SESSION_LEVEL.TENANT_ID)"},"sel_columns":[],"need_first_item_selection":false,"has_parent":false}
		this.ctrl.process_type.image_association = ""
		this.ctrl.process_type.show = true
		this.ctrl.process_type.sub_content = ""
		this.ctrl.process_type.required = false
		this.ctrl.process_type.vld_rules = []
		this.ctrl.process_type.targetcolumn_lower = "process_type"
		this.ctrl.process_type.disabled = false
		this.ctrl.process_type.view_name = "f_npss_hst_dashboard_srch"
		this.ctrl.process_type.ctrl_id = "npss_hst_dashboard_srch_process_type"
		this.ctrl.npss_hst_dashboard_srch_process_type = {}
		this.ctrl.npss_hst_dashboard_srch_process_type.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_hst_dashboard_srch.process_type = {}
	
		//Properties of hdr_msg_id
		this.ctrl.hdr_msg_id = {}
		this.ctrl.hdr_msg_id.id = "RN01CN2"
		this.ctrl.hdr_msg_id.desc = "Message Id"
		this.ctrl.hdr_msg_id.visible = true
		this.ctrl.hdr_msg_id.label_name = "Message Id"
		this.ctrl.hdr_msg_id.df_code = "DF_1304_1665901396659"
		this.ctrl.hdr_msg_id.df_description = "Column Group 1"
		this.ctrl.hdr_msg_id.uictrl_code = "TXT"
		this.ctrl.hdr_msg_id.target_column = "HDR_MSG_ID"
		this.ctrl.hdr_msg_id.data_type = "TEXT"
		this.ctrl.hdr_msg_id.data_length = 64
		this.ctrl.hdr_msg_id.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.hdr_msg_id.default_value = ""
		this.ctrl.hdr_msg_id.is_memory_ctrl = ""
		this.ctrl.hdr_msg_id.field_coordinates = ""
		this.ctrl.hdr_msg_id.sub_details = ""
		this.ctrl.hdr_msg_id.accept_char = ""
		this.ctrl.hdr_msg_id.currency_format = ""
		this.ctrl.hdr_msg_id.data_scale = ""
		this.ctrl.hdr_msg_id.binding_name = "HDR_MSG_ID"
		this.ctrl.hdr_msg_id.hide_label = false
		this.ctrl.hdr_msg_id.depends_on = ""
		this.ctrl.hdr_msg_id.placeholder = ""
		this.ctrl.hdr_msg_id.dynamic_param = ""
		this.ctrl.hdr_msg_id.style_code = ""
		this.ctrl.hdr_msg_id.data_source = ""
		this.ctrl.hdr_msg_id.image_association = ""
		this.ctrl.hdr_msg_id.show = true
		this.ctrl.hdr_msg_id.sub_content = ""
		this.ctrl.hdr_msg_id.required = false
		this.ctrl.hdr_msg_id.vld_rules = []
		this.ctrl.hdr_msg_id.targetcolumn_lower = "hdr_msg_id"
		this.ctrl.hdr_msg_id.disabled = false
		this.ctrl.hdr_msg_id.view_name = "f_npss_hst_dashboard_srch"
		this.ctrl.hdr_msg_id.ctrl_id = "npss_hst_dashboard_srch_hdr_msg_id"
		this.ctrl.npss_hst_dashboard_srch_hdr_msg_id = {}
		this.ctrl.npss_hst_dashboard_srch_hdr_msg_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of channel_id
		this.ctrl.channel_id = {}
		this.ctrl.channel_id.id = "RN11CN3"
		this.ctrl.channel_id.desc = "Channel Id"
		this.ctrl.channel_id.visible = true
		this.ctrl.channel_id.label_name = "Channel Id"
		this.ctrl.channel_id.df_code = "DF_1304_1665901396659"
		this.ctrl.channel_id.df_description = "Column Group 1"
		this.ctrl.channel_id.uictrl_code = "TXT"
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
		this.ctrl.channel_id.data_source = ""
		this.ctrl.channel_id.image_association = ""
		this.ctrl.channel_id.show = true
		this.ctrl.channel_id.sub_content = ""
		this.ctrl.channel_id.required = false
		this.ctrl.channel_id.vld_rules = []
		this.ctrl.channel_id.targetcolumn_lower = "channel_id"
		this.ctrl.channel_id.disabled = false
		this.ctrl.channel_id.view_name = "f_npss_hst_dashboard_srch"
		this.ctrl.channel_id.ctrl_id = "npss_hst_dashboard_srch_channel_id"
		this.ctrl.npss_hst_dashboard_srch_channel_id = {}
		this.ctrl.npss_hst_dashboard_srch_channel_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_phone_no
		this.ctrl.dbtr_phone_no = {}
		this.ctrl.dbtr_phone_no.id = "RN11CN4"
		this.ctrl.dbtr_phone_no.desc = "Customer Phone No"
		this.ctrl.dbtr_phone_no.visible = true
		this.ctrl.dbtr_phone_no.label_name = "Customer Phone No"
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
		this.ctrl.dbtr_phone_no.binding_name = "DBTR_PHONE_NO"
		this.ctrl.dbtr_phone_no.hide_label = false
		this.ctrl.dbtr_phone_no.depends_on = ""
		this.ctrl.dbtr_phone_no.placeholder = ""
		this.ctrl.dbtr_phone_no.dynamic_param = ""
		this.ctrl.dbtr_phone_no.style_code = ""
		this.ctrl.dbtr_phone_no.data_source = ""
		this.ctrl.dbtr_phone_no.image_association = ""
		this.ctrl.dbtr_phone_no.show = true
		this.ctrl.dbtr_phone_no.sub_content = ""
		this.ctrl.dbtr_phone_no.required = false
		this.ctrl.dbtr_phone_no.vld_rules = []
		this.ctrl.dbtr_phone_no.targetcolumn_lower = "dbtr_phone_no"
		this.ctrl.dbtr_phone_no.disabled = false
		this.ctrl.dbtr_phone_no.view_name = "f_npss_hst_dashboard_srch"
		this.ctrl.dbtr_phone_no.ctrl_id = "npss_hst_dashboard_srch_dbtr_phone_no"
		this.ctrl.npss_hst_dashboard_srch_dbtr_phone_no = {}
		this.ctrl.npss_hst_dashboard_srch_dbtr_phone_no.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_email_id
		this.ctrl.dbtr_email_id = {}
		this.ctrl.dbtr_email_id.id = "RN11CN5"
		this.ctrl.dbtr_email_id.desc = "Customer Email Id"
		this.ctrl.dbtr_email_id.visible = true
		this.ctrl.dbtr_email_id.label_name = "Customer Email Id"
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
		this.ctrl.dbtr_email_id.binding_name = "DBTR_EMAIL_ID"
		this.ctrl.dbtr_email_id.hide_label = false
		this.ctrl.dbtr_email_id.depends_on = ""
		this.ctrl.dbtr_email_id.placeholder = ""
		this.ctrl.dbtr_email_id.dynamic_param = ""
		this.ctrl.dbtr_email_id.style_code = ""
		this.ctrl.dbtr_email_id.data_source = ""
		this.ctrl.dbtr_email_id.image_association = ""
		this.ctrl.dbtr_email_id.show = true
		this.ctrl.dbtr_email_id.sub_content = ""
		this.ctrl.dbtr_email_id.required = false
		this.ctrl.dbtr_email_id.vld_rules = []
		this.ctrl.dbtr_email_id.targetcolumn_lower = "dbtr_email_id"
		this.ctrl.dbtr_email_id.disabled = false
		this.ctrl.dbtr_email_id.view_name = "f_npss_hst_dashboard_srch"
		this.ctrl.dbtr_email_id.ctrl_id = "npss_hst_dashboard_srch_dbtr_email_id"
		this.ctrl.npss_hst_dashboard_srch_dbtr_email_id = {}
		this.ctrl.npss_hst_dashboard_srch_dbtr_email_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_document_id
		this.ctrl.dbtr_document_id = {}
		this.ctrl.dbtr_document_id.id = "RN21CN6"
		this.ctrl.dbtr_document_id.desc = "Customer Document Id"
		this.ctrl.dbtr_document_id.visible = true
		this.ctrl.dbtr_document_id.label_name = "Customer Document Id"
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
		this.ctrl.dbtr_document_id.binding_name = "DBTR_DOCUMENT_ID"
		this.ctrl.dbtr_document_id.hide_label = false
		this.ctrl.dbtr_document_id.depends_on = ""
		this.ctrl.dbtr_document_id.placeholder = ""
		this.ctrl.dbtr_document_id.dynamic_param = ""
		this.ctrl.dbtr_document_id.style_code = ""
		this.ctrl.dbtr_document_id.data_source = ""
		this.ctrl.dbtr_document_id.image_association = ""
		this.ctrl.dbtr_document_id.show = true
		this.ctrl.dbtr_document_id.sub_content = ""
		this.ctrl.dbtr_document_id.required = false
		this.ctrl.dbtr_document_id.vld_rules = []
		this.ctrl.dbtr_document_id.targetcolumn_lower = "dbtr_document_id"
		this.ctrl.dbtr_document_id.disabled = false
		this.ctrl.dbtr_document_id.view_name = "f_npss_hst_dashboard_srch"
		this.ctrl.dbtr_document_id.ctrl_id = "npss_hst_dashboard_srch_dbtr_document_id"
		this.ctrl.npss_hst_dashboard_srch_dbtr_document_id = {}
		this.ctrl.npss_hst_dashboard_srch_dbtr_document_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_iban
		this.ctrl.cdtr_iban = {}
		this.ctrl.cdtr_iban.id = "RN21CN7"
		this.ctrl.cdtr_iban.desc = "Customer IBAN"
		this.ctrl.cdtr_iban.visible = true
		this.ctrl.cdtr_iban.label_name = "Customer IBAN"
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
		this.ctrl.cdtr_iban.view_name = "f_npss_hst_dashboard_srch"
		this.ctrl.cdtr_iban.ctrl_id = "npss_hst_dashboard_srch_cdtr_iban"
		this.ctrl.npss_hst_dashboard_srch_cdtr_iban = {}
		this.ctrl.npss_hst_dashboard_srch_cdtr_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_phone_no
		this.ctrl.cdtr_phone_no = {}
		this.ctrl.cdtr_phone_no.id = "RN21CN8"
		this.ctrl.cdtr_phone_no.desc = "Beneficiary Phone No"
		this.ctrl.cdtr_phone_no.visible = true
		this.ctrl.cdtr_phone_no.label_name = "Beneficiary Phone No"
		this.ctrl.cdtr_phone_no.df_code = "DF_1304_1665901396659"
		this.ctrl.cdtr_phone_no.df_description = "Column Group 1"
		this.ctrl.cdtr_phone_no.uictrl_code = "TXT"
		this.ctrl.cdtr_phone_no.target_column = "CDTR_PHONE_NO"
		this.ctrl.cdtr_phone_no.data_type = "TEXT"
		this.ctrl.cdtr_phone_no.data_length = 64
		this.ctrl.cdtr_phone_no.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.cdtr_phone_no.default_value = ""
		this.ctrl.cdtr_phone_no.is_memory_ctrl = ""
		this.ctrl.cdtr_phone_no.field_coordinates = ""
		this.ctrl.cdtr_phone_no.sub_details = ""
		this.ctrl.cdtr_phone_no.accept_char = ""
		this.ctrl.cdtr_phone_no.currency_format = ""
		this.ctrl.cdtr_phone_no.data_scale = ""
		this.ctrl.cdtr_phone_no.binding_name = "CDTR_PHONE_NO"
		this.ctrl.cdtr_phone_no.hide_label = false
		this.ctrl.cdtr_phone_no.depends_on = ""
		this.ctrl.cdtr_phone_no.placeholder = ""
		this.ctrl.cdtr_phone_no.dynamic_param = ""
		this.ctrl.cdtr_phone_no.style_code = ""
		this.ctrl.cdtr_phone_no.data_source = ""
		this.ctrl.cdtr_phone_no.image_association = ""
		this.ctrl.cdtr_phone_no.show = true
		this.ctrl.cdtr_phone_no.sub_content = ""
		this.ctrl.cdtr_phone_no.required = false
		this.ctrl.cdtr_phone_no.vld_rules = []
		this.ctrl.cdtr_phone_no.targetcolumn_lower = "cdtr_phone_no"
		this.ctrl.cdtr_phone_no.disabled = false
		this.ctrl.cdtr_phone_no.view_name = "f_npss_hst_dashboard_srch"
		this.ctrl.cdtr_phone_no.ctrl_id = "npss_hst_dashboard_srch_cdtr_phone_no"
		this.ctrl.npss_hst_dashboard_srch_cdtr_phone_no = {}
		this.ctrl.npss_hst_dashboard_srch_cdtr_phone_no.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_email_id
		this.ctrl.cdtr_email_id = {}
		this.ctrl.cdtr_email_id.id = "RN31CN9"
		this.ctrl.cdtr_email_id.desc = "Beneficiary Email Id"
		this.ctrl.cdtr_email_id.visible = true
		this.ctrl.cdtr_email_id.label_name = "Beneficiary Email Id"
		this.ctrl.cdtr_email_id.df_code = "DF_1304_1665901396659"
		this.ctrl.cdtr_email_id.df_description = "Column Group 1"
		this.ctrl.cdtr_email_id.uictrl_code = "TXT"
		this.ctrl.cdtr_email_id.target_column = "CDTR_EMAIL_ID"
		this.ctrl.cdtr_email_id.data_type = "TEXT"
		this.ctrl.cdtr_email_id.data_length = 64
		this.ctrl.cdtr_email_id.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.cdtr_email_id.default_value = ""
		this.ctrl.cdtr_email_id.is_memory_ctrl = ""
		this.ctrl.cdtr_email_id.field_coordinates = ""
		this.ctrl.cdtr_email_id.sub_details = ""
		this.ctrl.cdtr_email_id.accept_char = ""
		this.ctrl.cdtr_email_id.currency_format = ""
		this.ctrl.cdtr_email_id.data_scale = ""
		this.ctrl.cdtr_email_id.binding_name = "CDTR_EMAIL_ID"
		this.ctrl.cdtr_email_id.hide_label = false
		this.ctrl.cdtr_email_id.depends_on = ""
		this.ctrl.cdtr_email_id.placeholder = ""
		this.ctrl.cdtr_email_id.dynamic_param = ""
		this.ctrl.cdtr_email_id.style_code = ""
		this.ctrl.cdtr_email_id.data_source = ""
		this.ctrl.cdtr_email_id.image_association = ""
		this.ctrl.cdtr_email_id.show = true
		this.ctrl.cdtr_email_id.sub_content = ""
		this.ctrl.cdtr_email_id.required = false
		this.ctrl.cdtr_email_id.vld_rules = []
		this.ctrl.cdtr_email_id.targetcolumn_lower = "cdtr_email_id"
		this.ctrl.cdtr_email_id.disabled = false
		this.ctrl.cdtr_email_id.view_name = "f_npss_hst_dashboard_srch"
		this.ctrl.cdtr_email_id.ctrl_id = "npss_hst_dashboard_srch_cdtr_email_id"
		this.ctrl.npss_hst_dashboard_srch_cdtr_email_id = {}
		this.ctrl.npss_hst_dashboard_srch_cdtr_email_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_document_id
		this.ctrl.cdtr_document_id = {}
		this.ctrl.cdtr_document_id.id = "RN31CN10"
		this.ctrl.cdtr_document_id.desc = "Beneficiary Document Id"
		this.ctrl.cdtr_document_id.visible = true
		this.ctrl.cdtr_document_id.label_name = "Beneficiary Document Id"
		this.ctrl.cdtr_document_id.df_code = "DF_1304_1665901396659"
		this.ctrl.cdtr_document_id.df_description = "Column Group 1"
		this.ctrl.cdtr_document_id.uictrl_code = "TXT"
		this.ctrl.cdtr_document_id.target_column = "CDTR_DOCUMENT_ID"
		this.ctrl.cdtr_document_id.data_type = "TEXT"
		this.ctrl.cdtr_document_id.data_length = 64
		this.ctrl.cdtr_document_id.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.cdtr_document_id.default_value = ""
		this.ctrl.cdtr_document_id.is_memory_ctrl = ""
		this.ctrl.cdtr_document_id.field_coordinates = ""
		this.ctrl.cdtr_document_id.sub_details = ""
		this.ctrl.cdtr_document_id.accept_char = ""
		this.ctrl.cdtr_document_id.currency_format = ""
		this.ctrl.cdtr_document_id.data_scale = ""
		this.ctrl.cdtr_document_id.binding_name = "CDTR_DOCUMENT_ID"
		this.ctrl.cdtr_document_id.hide_label = false
		this.ctrl.cdtr_document_id.depends_on = ""
		this.ctrl.cdtr_document_id.placeholder = ""
		this.ctrl.cdtr_document_id.dynamic_param = ""
		this.ctrl.cdtr_document_id.style_code = ""
		this.ctrl.cdtr_document_id.data_source = ""
		this.ctrl.cdtr_document_id.image_association = ""
		this.ctrl.cdtr_document_id.show = true
		this.ctrl.cdtr_document_id.sub_content = ""
		this.ctrl.cdtr_document_id.required = false
		this.ctrl.cdtr_document_id.vld_rules = []
		this.ctrl.cdtr_document_id.targetcolumn_lower = "cdtr_document_id"
		this.ctrl.cdtr_document_id.disabled = false
		this.ctrl.cdtr_document_id.view_name = "f_npss_hst_dashboard_srch"
		this.ctrl.cdtr_document_id.ctrl_id = "npss_hst_dashboard_srch_cdtr_document_id"
		this.ctrl.npss_hst_dashboard_srch_cdtr_document_id = {}
		this.ctrl.npss_hst_dashboard_srch_cdtr_document_id.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_hst_dashboard_srch.model = {"VALUE_DATE":"setcurrentdate(),{}","INTRBK_STTLM_AMNT":"","PROCESS_TYPE":"","HDR_MSG_ID":"","CHANNEL_ID":"","DBTR_PHONE_NO":"","DBTR_EMAIL_ID":"","DBTR_DOCUMENT_ID":"","CDTR_IBAN":"","CDTR_PHONE_NO":"","CDTR_EMAIL_ID":"","CDTR_DOCUMENT_ID":""}
		this.screen_instance[this.comp_id].f_npss_hst_dashboard_srch.Meta = [{"CTLR_CODE":"CDN_DATE","DATA_TYPE":"DATETIME","TARGET_COLUMN":"VALUE_DATE"},{"CTLR_CODE":"CDN_CUR_CTRL","DATA_TYPE":"NUMBER","TARGET_COLUMN":"INTRBK_STTLM_AMNT"},{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROCESS_TYPE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"HDR_MSG_ID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CHANNEL_ID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_PHONE_NO"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_EMAIL_ID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_DOCUMENT_ID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_IBAN"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_PHONE_NO"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_EMAIL_ID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_DOCUMENT_ID"}]
		this.screen_instance[this.comp_id].f_npss_hst_dashboard_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_hst_dashboard_srch.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_hst_dashboard_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_hst_dashboard_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_hst_dashboard_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_hst_dashboard_srch[control][property] = value;
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
    