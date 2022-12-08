/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27218 
Modified By     : Admin 
Modified Date   : 2022-Dec-08 7:57 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_simulator
Form Name       : NPSS RCT simulator UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_rct_simulator_ui',
  templateUrl: './f_npss_rct_simulator_ui.component.html',
  styleUrls: ['./f_npss_rct_simulator_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_rct_simulator_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_rct_simulator_ui') form;
  @ViewChild('npss_rct_simulator_ui_hdr_msg_id') element: ElementRef;
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

  
		//Properties of hdr_msg_id
		this.ctrl.hdr_msg_id = {}
		this.ctrl.hdr_msg_id.id = "RN01CN1"
		this.ctrl.hdr_msg_id.desc = "Message Hdr ID"
		this.ctrl.hdr_msg_id.visible = true
		this.ctrl.hdr_msg_id.label_name = "Message Hdr ID"
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
		this.ctrl.hdr_msg_id.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.hdr_msg_id.ctrl_id = "npss_rct_simulator_ui_hdr_msg_id"
		this.ctrl.npss_rct_simulator_ui_hdr_msg_id = {}
		this.ctrl.npss_rct_simulator_ui_hdr_msg_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of hdr_created_date
		this.ctrl.hdr_created_date = {}
		this.ctrl.hdr_created_date.id = "RN01CN2"
		this.ctrl.hdr_created_date.desc = "Creation Date Time"
		this.ctrl.hdr_created_date.visible = true
		this.ctrl.hdr_created_date.label_name = "Creation Date Time"
		this.ctrl.hdr_created_date.df_code = "DF_1304_1665901396659"
		this.ctrl.hdr_created_date.df_description = "Column Group 1"
		this.ctrl.hdr_created_date.uictrl_code = "DTP"
		this.ctrl.hdr_created_date.target_column = "HDR_CREATED_DATE"
		this.ctrl.hdr_created_date.data_type = "DATETIME"
		this.ctrl.hdr_created_date.data_length = 0
		this.ctrl.hdr_created_date.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.hdr_created_date.default_value = "setcurrentdate(),{}"
		this.ctrl.hdr_created_date.is_memory_ctrl = ""
		this.ctrl.hdr_created_date.field_coordinates = ""
		this.ctrl.hdr_created_date.sub_details = ""
		this.ctrl.hdr_created_date.accept_char = ""
		this.ctrl.hdr_created_date.currency_format = ""
		this.ctrl.hdr_created_date.data_scale = ""
		this.ctrl.hdr_created_date.hide_label = false
		this.ctrl.hdr_created_date.depends_on = ""
		this.ctrl.hdr_created_date.placeholder = ""
		this.ctrl.hdr_created_date.dynamic_param = ""
		this.ctrl.hdr_created_date.style_code = ""
		this.ctrl.hdr_created_date.data_source = ""
		this.ctrl.hdr_created_date.image_association = ""
		this.ctrl.hdr_created_date.show = true
		this.ctrl.hdr_created_date.sub_content = ""
		this.ctrl.hdr_created_date.required = false
		this.ctrl.hdr_created_date.vld_rules = []
		this.ctrl.hdr_created_date.targetcolumn_lower = "hdr_created_date"
		this.ctrl.hdr_created_date.disabled = false
		this.ctrl.hdr_created_date.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.hdr_created_date.ctrl_id = "npss_rct_simulator_ui_hdr_created_date"
		this.ctrl.npss_rct_simulator_ui_hdr_created_date = {}
		this.ctrl.npss_rct_simulator_ui_hdr_created_date.onChangecomponent = new EventEmitter<any>()
	
		//Properties of hdr_total_records
		this.ctrl.hdr_total_records = {}
		this.ctrl.hdr_total_records.id = "RN01CN3"
		this.ctrl.hdr_total_records.desc = "No. of Records"
		this.ctrl.hdr_total_records.visible = true
		this.ctrl.hdr_total_records.label_name = "No. of Records"
		this.ctrl.hdr_total_records.df_code = "DF_1304_1665901396659"
		this.ctrl.hdr_total_records.df_description = "Column Group 1"
		this.ctrl.hdr_total_records.uictrl_code = "TXT"
		this.ctrl.hdr_total_records.target_column = "HDR_TOTAL_RECORDS"
		this.ctrl.hdr_total_records.data_type = "NUMBER"
		this.ctrl.hdr_total_records.data_length = 9
		this.ctrl.hdr_total_records.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.hdr_total_records.default_value = "1"
		this.ctrl.hdr_total_records.is_memory_ctrl = ""
		this.ctrl.hdr_total_records.field_coordinates = ""
		this.ctrl.hdr_total_records.sub_details = ""
		this.ctrl.hdr_total_records.accept_char = ""
		this.ctrl.hdr_total_records.currency_format = ""
		this.ctrl.hdr_total_records.data_scale = ""
		this.ctrl.hdr_total_records.hide_label = false
		this.ctrl.hdr_total_records.depends_on = ""
		this.ctrl.hdr_total_records.placeholder = ""
		this.ctrl.hdr_total_records.dynamic_param = ""
		this.ctrl.hdr_total_records.style_code = ""
		this.ctrl.hdr_total_records.data_source = ""
		this.ctrl.hdr_total_records.image_association = ""
		this.ctrl.hdr_total_records.show = true
		this.ctrl.hdr_total_records.sub_content = ""
		this.ctrl.hdr_total_records.required = false
		this.ctrl.hdr_total_records.vld_rules = []
		this.ctrl.hdr_total_records.targetcolumn_lower = "hdr_total_records"
		this.ctrl.hdr_total_records.disabled = false
		this.ctrl.hdr_total_records.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.hdr_total_records.ctrl_id = "npss_rct_simulator_ui_hdr_total_records"
		this.ctrl.npss_rct_simulator_ui_hdr_total_records = {}
		this.ctrl.npss_rct_simulator_ui_hdr_total_records.onChangecomponent = new EventEmitter<any>()
	
		//Properties of hdr_total_amount
		this.ctrl.hdr_total_amount = {}
		this.ctrl.hdr_total_amount.id = "RN01CN4"
		this.ctrl.hdr_total_amount.desc = "Total Amount"
		this.ctrl.hdr_total_amount.visible = true
		this.ctrl.hdr_total_amount.label_name = "Total Amount"
		this.ctrl.hdr_total_amount.df_code = "DF_1304_1665901396659"
		this.ctrl.hdr_total_amount.df_description = "Column Group 1"
		this.ctrl.hdr_total_amount.uictrl_code = "CUR"
		this.ctrl.hdr_total_amount.target_column = "HDR_TOTAL_AMOUNT"
		this.ctrl.hdr_total_amount.data_type = "NUMBER"
		this.ctrl.hdr_total_amount.data_length = 9
		this.ctrl.hdr_total_amount.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.hdr_total_amount.default_value = ""
		this.ctrl.hdr_total_amount.is_memory_ctrl = ""
		this.ctrl.hdr_total_amount.field_coordinates = ""
		this.ctrl.hdr_total_amount.sub_details = ""
		this.ctrl.hdr_total_amount.accept_char = ""
		this.ctrl.hdr_total_amount.currency_format = ""
		this.ctrl.hdr_total_amount.data_scale = "2"
		this.ctrl.hdr_total_amount.hide_label = false
		this.ctrl.hdr_total_amount.depends_on = ""
		this.ctrl.hdr_total_amount.placeholder = ""
		this.ctrl.hdr_total_amount.dynamic_param = ""
		this.ctrl.hdr_total_amount.style_code = ""
		this.ctrl.hdr_total_amount.data_source = ""
		this.ctrl.hdr_total_amount.image_association = ""
		this.ctrl.hdr_total_amount.show = true
		this.ctrl.hdr_total_amount.sub_content = ""
		this.ctrl.hdr_total_amount.required = false
		this.ctrl.hdr_total_amount.vld_rules = []
		this.ctrl.hdr_total_amount.targetcolumn_lower = "hdr_total_amount"
		this.ctrl.hdr_total_amount.disabled = false
		this.ctrl.hdr_total_amount.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.hdr_total_amount.ctrl_id = "npss_rct_simulator_ui_hdr_total_amount"
		this.ctrl.npss_rct_simulator_ui_hdr_total_amount = {}
		this.ctrl.npss_rct_simulator_ui_hdr_total_amount.onChangecomponent = new EventEmitter<any>()
	
		//Properties of hdr_settlement_date
		this.ctrl.hdr_settlement_date = {}
		this.ctrl.hdr_settlement_date.id = "RN01CN5"
		this.ctrl.hdr_settlement_date.desc = "Interbank Settlement Date"
		this.ctrl.hdr_settlement_date.visible = true
		this.ctrl.hdr_settlement_date.label_name = "Interbank Settlement Date"
		this.ctrl.hdr_settlement_date.df_code = "DF_1304_1665901396659"
		this.ctrl.hdr_settlement_date.df_description = "Column Group 1"
		this.ctrl.hdr_settlement_date.uictrl_code = "DTP"
		this.ctrl.hdr_settlement_date.target_column = "HDR_SETTLEMENT_DATE"
		this.ctrl.hdr_settlement_date.data_type = "DATETIME"
		this.ctrl.hdr_settlement_date.data_length = 0
		this.ctrl.hdr_settlement_date.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.hdr_settlement_date.default_value = "setcurrentdate(),{}"
		this.ctrl.hdr_settlement_date.is_memory_ctrl = ""
		this.ctrl.hdr_settlement_date.field_coordinates = ""
		this.ctrl.hdr_settlement_date.sub_details = ""
		this.ctrl.hdr_settlement_date.accept_char = ""
		this.ctrl.hdr_settlement_date.currency_format = ""
		this.ctrl.hdr_settlement_date.data_scale = ""
		this.ctrl.hdr_settlement_date.hide_label = false
		this.ctrl.hdr_settlement_date.depends_on = ""
		this.ctrl.hdr_settlement_date.placeholder = ""
		this.ctrl.hdr_settlement_date.dynamic_param = ""
		this.ctrl.hdr_settlement_date.style_code = ""
		this.ctrl.hdr_settlement_date.data_source = ""
		this.ctrl.hdr_settlement_date.image_association = ""
		this.ctrl.hdr_settlement_date.show = true
		this.ctrl.hdr_settlement_date.sub_content = ""
		this.ctrl.hdr_settlement_date.required = false
		this.ctrl.hdr_settlement_date.vld_rules = []
		this.ctrl.hdr_settlement_date.targetcolumn_lower = "hdr_settlement_date"
		this.ctrl.hdr_settlement_date.disabled = false
		this.ctrl.hdr_settlement_date.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.hdr_settlement_date.ctrl_id = "npss_rct_simulator_ui_hdr_settlement_date"
		this.ctrl.npss_rct_simulator_ui_hdr_settlement_date = {}
		this.ctrl.npss_rct_simulator_ui_hdr_settlement_date.onChangecomponent = new EventEmitter<any>()
	
		//Properties of value_date
		this.ctrl.value_date = {}
		this.ctrl.value_date.id = "RN01CN7"
		this.ctrl.value_date.desc = "Value Date"
		this.ctrl.value_date.visible = true
		this.ctrl.value_date.label_name = "Value Date"
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
		this.ctrl.value_date.vld_rules = []
		this.ctrl.value_date.targetcolumn_lower = "value_date"
		this.ctrl.value_date.disabled = false
		this.ctrl.value_date.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.value_date.ctrl_id = "npss_rct_simulator_ui_value_date"
		this.ctrl.npss_rct_simulator_ui_value_date = {}
		this.ctrl.npss_rct_simulator_ui_value_date.onChangecomponent = new EventEmitter<any>()
	
		//Properties of hdr_settlement_method
		this.ctrl.hdr_settlement_method = {}
		this.ctrl.hdr_settlement_method.id = "RN11CN8"
		this.ctrl.hdr_settlement_method.desc = "Settlement Method"
		this.ctrl.hdr_settlement_method.visible = true
		this.ctrl.hdr_settlement_method.label_name = "Settlement Method"
		this.ctrl.hdr_settlement_method.df_code = "DF_1304_1665901396659"
		this.ctrl.hdr_settlement_method.df_description = "Column Group 1"
		this.ctrl.hdr_settlement_method.uictrl_code = "TXT"
		this.ctrl.hdr_settlement_method.target_column = "HDR_SETTLEMENT_METHOD"
		this.ctrl.hdr_settlement_method.data_type = "TEXT"
		this.ctrl.hdr_settlement_method.data_length = 64
		this.ctrl.hdr_settlement_method.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.hdr_settlement_method.default_value = "CLRG"
		this.ctrl.hdr_settlement_method.is_memory_ctrl = ""
		this.ctrl.hdr_settlement_method.field_coordinates = ""
		this.ctrl.hdr_settlement_method.sub_details = ""
		this.ctrl.hdr_settlement_method.accept_char = ""
		this.ctrl.hdr_settlement_method.currency_format = ""
		this.ctrl.hdr_settlement_method.data_scale = ""
		this.ctrl.hdr_settlement_method.hide_label = false
		this.ctrl.hdr_settlement_method.depends_on = ""
		this.ctrl.hdr_settlement_method.placeholder = ""
		this.ctrl.hdr_settlement_method.dynamic_param = ""
		this.ctrl.hdr_settlement_method.style_code = ""
		this.ctrl.hdr_settlement_method.data_source = ""
		this.ctrl.hdr_settlement_method.image_association = ""
		this.ctrl.hdr_settlement_method.show = true
		this.ctrl.hdr_settlement_method.sub_content = ""
		this.ctrl.hdr_settlement_method.required = false
		this.ctrl.hdr_settlement_method.vld_rules = []
		this.ctrl.hdr_settlement_method.targetcolumn_lower = "hdr_settlement_method"
		this.ctrl.hdr_settlement_method.disabled = false
		this.ctrl.hdr_settlement_method.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.hdr_settlement_method.ctrl_id = "npss_rct_simulator_ui_hdr_settlement_method"
		this.ctrl.npss_rct_simulator_ui_hdr_settlement_method = {}
		this.ctrl.npss_rct_simulator_ui_hdr_settlement_method.onChangecomponent = new EventEmitter<any>()
	
		//Properties of hdr_clearing_system
		this.ctrl.hdr_clearing_system = {}
		this.ctrl.hdr_clearing_system.id = "RN11CN9"
		this.ctrl.hdr_clearing_system.desc = "Clearing System"
		this.ctrl.hdr_clearing_system.visible = true
		this.ctrl.hdr_clearing_system.label_name = "Clearing System"
		this.ctrl.hdr_clearing_system.df_code = "DF_1304_1665901396659"
		this.ctrl.hdr_clearing_system.df_description = "Column Group 1"
		this.ctrl.hdr_clearing_system.uictrl_code = "TXT"
		this.ctrl.hdr_clearing_system.target_column = "HDR_CLEARING_SYSTEM"
		this.ctrl.hdr_clearing_system.data_type = "TEXT"
		this.ctrl.hdr_clearing_system.data_length = 64
		this.ctrl.hdr_clearing_system.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.hdr_clearing_system.default_value = "UAEIPP Core Service"
		this.ctrl.hdr_clearing_system.is_memory_ctrl = ""
		this.ctrl.hdr_clearing_system.field_coordinates = ""
		this.ctrl.hdr_clearing_system.sub_details = ""
		this.ctrl.hdr_clearing_system.accept_char = ""
		this.ctrl.hdr_clearing_system.currency_format = ""
		this.ctrl.hdr_clearing_system.data_scale = ""
		this.ctrl.hdr_clearing_system.hide_label = false
		this.ctrl.hdr_clearing_system.depends_on = ""
		this.ctrl.hdr_clearing_system.placeholder = ""
		this.ctrl.hdr_clearing_system.dynamic_param = ""
		this.ctrl.hdr_clearing_system.style_code = ""
		this.ctrl.hdr_clearing_system.data_source = ""
		this.ctrl.hdr_clearing_system.image_association = ""
		this.ctrl.hdr_clearing_system.show = true
		this.ctrl.hdr_clearing_system.sub_content = ""
		this.ctrl.hdr_clearing_system.required = false
		this.ctrl.hdr_clearing_system.vld_rules = []
		this.ctrl.hdr_clearing_system.targetcolumn_lower = "hdr_clearing_system"
		this.ctrl.hdr_clearing_system.disabled = false
		this.ctrl.hdr_clearing_system.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.hdr_clearing_system.ctrl_id = "npss_rct_simulator_ui_hdr_clearing_system"
		this.ctrl.npss_rct_simulator_ui_hdr_clearing_system = {}
		this.ctrl.npss_rct_simulator_ui_hdr_clearing_system.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dr_sort_code
		this.ctrl.dr_sort_code = {}
		this.ctrl.dr_sort_code.id = "RN11CN10"
		this.ctrl.dr_sort_code.desc = "Sender BIC"
		this.ctrl.dr_sort_code.visible = true
		this.ctrl.dr_sort_code.label_name = "Sender BIC"
		this.ctrl.dr_sort_code.df_code = "DF_1304_1665901396659"
		this.ctrl.dr_sort_code.df_description = "Column Group 1"
		this.ctrl.dr_sort_code.uictrl_code = "TXT"
		this.ctrl.dr_sort_code.target_column = "DR_SORT_CODE"
		this.ctrl.dr_sort_code.data_type = "TEXT"
		this.ctrl.dr_sort_code.data_length = 11
		this.ctrl.dr_sort_code.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.dr_sort_code.default_value = "Sender Bic"
		this.ctrl.dr_sort_code.is_memory_ctrl = ""
		this.ctrl.dr_sort_code.field_coordinates = ""
		this.ctrl.dr_sort_code.sub_details = ""
		this.ctrl.dr_sort_code.accept_char = ""
		this.ctrl.dr_sort_code.currency_format = ""
		this.ctrl.dr_sort_code.data_scale = ""
		this.ctrl.dr_sort_code.hide_label = false
		this.ctrl.dr_sort_code.depends_on = ""
		this.ctrl.dr_sort_code.placeholder = ""
		this.ctrl.dr_sort_code.dynamic_param = ""
		this.ctrl.dr_sort_code.style_code = ""
		this.ctrl.dr_sort_code.data_source = ""
		this.ctrl.dr_sort_code.image_association = ""
		this.ctrl.dr_sort_code.show = true
		this.ctrl.dr_sort_code.sub_content = ""
		this.ctrl.dr_sort_code.required = false
		this.ctrl.dr_sort_code.vld_rules = []
		this.ctrl.dr_sort_code.targetcolumn_lower = "dr_sort_code"
		this.ctrl.dr_sort_code.disabled = false
		this.ctrl.dr_sort_code.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.dr_sort_code.ctrl_id = "npss_rct_simulator_ui_dr_sort_code"
		this.ctrl.npss_rct_simulator_ui_dr_sort_code = {}
		this.ctrl.npss_rct_simulator_ui_dr_sort_code.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cr_sort_code
		this.ctrl.cr_sort_code = {}
		this.ctrl.cr_sort_code.id = "RN11CN11"
		this.ctrl.cr_sort_code.desc = "Cr Sort Code"
		this.ctrl.cr_sort_code.visible = true
		this.ctrl.cr_sort_code.label_name = "Cr Sort Code"
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
		this.ctrl.cr_sort_code.hide_label = false
		this.ctrl.cr_sort_code.depends_on = ""
		this.ctrl.cr_sort_code.placeholder = ""
		this.ctrl.cr_sort_code.dynamic_param = ""
		this.ctrl.cr_sort_code.style_code = ""
		this.ctrl.cr_sort_code.data_source = {"ds_code":"UDS_1304_1670483620977","ds_description":"NPSS Bank BIC CDB","rows":[],"type":"DPS_TABLE","value_member":"BIC_CODE","display_member":"BIC_CODE","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_MEMBER_BANKS","context":"","filters":[{"filter_name":"Filter1","binding_name":"TENANT_ID","id":"DF_1670483970659","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"}]},"query":"(TENANT_ID = SESSION_LEVEL.TENANT_ID)"},"need_auto_first_record":true,"sel_columns":[]}
		this.ctrl.cr_sort_code.image_association = ""
		this.ctrl.cr_sort_code.show = true
		this.ctrl.cr_sort_code.sub_content = ""
		this.ctrl.cr_sort_code.required = false
		this.ctrl.cr_sort_code.vld_rules = []
		this.ctrl.cr_sort_code.targetcolumn_lower = "cr_sort_code"
		this.ctrl.cr_sort_code.disabled = false
		this.ctrl.cr_sort_code.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.cr_sort_code.ctrl_id = "npss_rct_simulator_ui_cr_sort_code"
		this.ctrl.npss_rct_simulator_ui_cr_sort_code = {}
		this.ctrl.npss_rct_simulator_ui_cr_sort_code.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_rct_simulator_ui.cr_sort_code = {}
	
		//Properties of instruction_id
		this.ctrl.instruction_id = {}
		this.ctrl.instruction_id.id = "RN11CN13"
		this.ctrl.instruction_id.desc = "Instruction ID"
		this.ctrl.instruction_id.visible = true
		this.ctrl.instruction_id.label_name = "Instruction ID"
		this.ctrl.instruction_id.df_code = "DF_1304_1665901396659"
		this.ctrl.instruction_id.df_description = "Column Group 1"
		this.ctrl.instruction_id.uictrl_code = "TXT"
		this.ctrl.instruction_id.target_column = "INSTRUCTION_ID"
		this.ctrl.instruction_id.data_type = "TEXT"
		this.ctrl.instruction_id.data_length = 35
		this.ctrl.instruction_id.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.instruction_id.default_value = ""
		this.ctrl.instruction_id.is_memory_ctrl = ""
		this.ctrl.instruction_id.field_coordinates = ""
		this.ctrl.instruction_id.sub_details = ""
		this.ctrl.instruction_id.accept_char = ""
		this.ctrl.instruction_id.currency_format = ""
		this.ctrl.instruction_id.data_scale = ""
		this.ctrl.instruction_id.hide_label = false
		this.ctrl.instruction_id.depends_on = ""
		this.ctrl.instruction_id.placeholder = ""
		this.ctrl.instruction_id.dynamic_param = ""
		this.ctrl.instruction_id.style_code = ""
		this.ctrl.instruction_id.data_source = ""
		this.ctrl.instruction_id.image_association = ""
		this.ctrl.instruction_id.show = true
		this.ctrl.instruction_id.sub_content = ""
		this.ctrl.instruction_id.required = false
		this.ctrl.instruction_id.vld_rules = []
		this.ctrl.instruction_id.targetcolumn_lower = "instruction_id"
		this.ctrl.instruction_id.disabled = false
		this.ctrl.instruction_id.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.instruction_id.ctrl_id = "npss_rct_simulator_ui_instruction_id"
		this.ctrl.npss_rct_simulator_ui_instruction_id = {}
		this.ctrl.npss_rct_simulator_ui_instruction_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of payment_endtoend_id
		this.ctrl.payment_endtoend_id = {}
		this.ctrl.payment_endtoend_id.id = "RN11CN12"
		this.ctrl.payment_endtoend_id.desc = "End To End ID"
		this.ctrl.payment_endtoend_id.visible = true
		this.ctrl.payment_endtoend_id.label_name = "End To End ID"
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
		this.ctrl.payment_endtoend_id.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.payment_endtoend_id.ctrl_id = "npss_rct_simulator_ui_payment_endtoend_id"
		this.ctrl.npss_rct_simulator_ui_payment_endtoend_id = {}
		this.ctrl.npss_rct_simulator_ui_payment_endtoend_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of tran_ref_id
		this.ctrl.tran_ref_id = {}
		this.ctrl.tran_ref_id.id = "RN21CN14"
		this.ctrl.tran_ref_id.desc = "Transaction ID"
		this.ctrl.tran_ref_id.visible = true
		this.ctrl.tran_ref_id.label_name = "Transaction ID"
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
		this.ctrl.tran_ref_id.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.tran_ref_id.ctrl_id = "npss_rct_simulator_ui_tran_ref_id"
		this.ctrl.npss_rct_simulator_ui_tran_ref_id = {}
		this.ctrl.npss_rct_simulator_ui_tran_ref_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of uetr
		this.ctrl.uetr = {}
		this.ctrl.uetr.id = "RN21CN20"
		this.ctrl.uetr.desc = "UETR"
		this.ctrl.uetr.visible = true
		this.ctrl.uetr.label_name = "UETR"
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
		this.ctrl.uetr.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.uetr.ctrl_id = "npss_rct_simulator_ui_uetr"
		this.ctrl.npss_rct_simulator_ui_uetr = {}
		this.ctrl.npss_rct_simulator_ui_uetr.onChangecomponent = new EventEmitter<any>()
	
		//Properties of instrument_type
		this.ctrl.instrument_type = {}
		this.ctrl.instrument_type.id = "RN21CN21"
		this.ctrl.instrument_type.desc = "Local Instrument"
		this.ctrl.instrument_type.visible = true
		this.ctrl.instrument_type.label_name = "Local Instrument"
		this.ctrl.instrument_type.df_code = "DF_1304_1665901396659"
		this.ctrl.instrument_type.df_description = "Column Group 1"
		this.ctrl.instrument_type.uictrl_code = "TXT"
		this.ctrl.instrument_type.target_column = "INSTRUMENT_TYPE"
		this.ctrl.instrument_type.data_type = "TEXT"
		this.ctrl.instrument_type.data_length = 35
		this.ctrl.instrument_type.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.instrument_type.default_value = "INST"
		this.ctrl.instrument_type.is_memory_ctrl = ""
		this.ctrl.instrument_type.field_coordinates = ""
		this.ctrl.instrument_type.sub_details = ""
		this.ctrl.instrument_type.accept_char = ""
		this.ctrl.instrument_type.currency_format = ""
		this.ctrl.instrument_type.data_scale = ""
		this.ctrl.instrument_type.hide_label = false
		this.ctrl.instrument_type.depends_on = ""
		this.ctrl.instrument_type.placeholder = ""
		this.ctrl.instrument_type.dynamic_param = ""
		this.ctrl.instrument_type.style_code = ""
		this.ctrl.instrument_type.data_source = ""
		this.ctrl.instrument_type.image_association = ""
		this.ctrl.instrument_type.show = true
		this.ctrl.instrument_type.sub_content = ""
		this.ctrl.instrument_type.required = false
		this.ctrl.instrument_type.vld_rules = []
		this.ctrl.instrument_type.targetcolumn_lower = "instrument_type"
		this.ctrl.instrument_type.disabled = false
		this.ctrl.instrument_type.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.instrument_type.ctrl_id = "npss_rct_simulator_ui_instrument_type"
		this.ctrl.npss_rct_simulator_ui_instrument_type = {}
		this.ctrl.npss_rct_simulator_ui_instrument_type.onChangecomponent = new EventEmitter<any>()
	
		//Properties of category_purpose
		this.ctrl.category_purpose = {}
		this.ctrl.category_purpose.id = "RN21CN22"
		this.ctrl.category_purpose.desc = "Category Purpose"
		this.ctrl.category_purpose.visible = true
		this.ctrl.category_purpose.label_name = "Category Purpose"
		this.ctrl.category_purpose.df_code = "DF_1304_1665901396659"
		this.ctrl.category_purpose.df_description = "Column Group 1"
		this.ctrl.category_purpose.uictrl_code = "TXT"
		this.ctrl.category_purpose.target_column = "CATEGORY_PURPOSE"
		this.ctrl.category_purpose.data_type = "TEXT"
		this.ctrl.category_purpose.data_length = 64
		this.ctrl.category_purpose.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.category_purpose.default_value = ""
		this.ctrl.category_purpose.is_memory_ctrl = ""
		this.ctrl.category_purpose.field_coordinates = ""
		this.ctrl.category_purpose.sub_details = ""
		this.ctrl.category_purpose.accept_char = ""
		this.ctrl.category_purpose.currency_format = ""
		this.ctrl.category_purpose.data_scale = ""
		this.ctrl.category_purpose.hide_label = false
		this.ctrl.category_purpose.depends_on = ""
		this.ctrl.category_purpose.placeholder = ""
		this.ctrl.category_purpose.dynamic_param = ""
		this.ctrl.category_purpose.style_code = ""
		this.ctrl.category_purpose.data_source = ""
		this.ctrl.category_purpose.image_association = ""
		this.ctrl.category_purpose.show = true
		this.ctrl.category_purpose.sub_content = ""
		this.ctrl.category_purpose.required = false
		this.ctrl.category_purpose.vld_rules = []
		this.ctrl.category_purpose.targetcolumn_lower = "category_purpose"
		this.ctrl.category_purpose.disabled = false
		this.ctrl.category_purpose.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.category_purpose.ctrl_id = "npss_rct_simulator_ui_category_purpose"
		this.ctrl.npss_rct_simulator_ui_category_purpose = {}
		this.ctrl.npss_rct_simulator_ui_category_purpose.onChangecomponent = new EventEmitter<any>()
	
		//Properties of category_purpose_prty
		this.ctrl.category_purpose_prty = {}
		this.ctrl.category_purpose_prty.id = "RN21CN23"
		this.ctrl.category_purpose_prty.desc = "Category Purpose Code"
		this.ctrl.category_purpose_prty.visible = true
		this.ctrl.category_purpose_prty.label_name = "Category Purpose Code"
		this.ctrl.category_purpose_prty.df_code = "DF_1304_1665901396659"
		this.ctrl.category_purpose_prty.df_description = "Column Group 1"
		this.ctrl.category_purpose_prty.uictrl_code = "CBO"
		this.ctrl.category_purpose_prty.target_column = "CATEGORY_PURPOSE_PRTY"
		this.ctrl.category_purpose_prty.data_type = "TEXT"
		this.ctrl.category_purpose_prty.data_length = 35
		this.ctrl.category_purpose_prty.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.category_purpose_prty.default_value = ""
		this.ctrl.category_purpose_prty.is_memory_ctrl = ""
		this.ctrl.category_purpose_prty.field_coordinates = ""
		this.ctrl.category_purpose_prty.sub_details = ""
		this.ctrl.category_purpose_prty.accept_char = ""
		this.ctrl.category_purpose_prty.currency_format = ""
		this.ctrl.category_purpose_prty.data_scale = ""
		this.ctrl.category_purpose_prty.hide_label = false
		this.ctrl.category_purpose_prty.depends_on = ""
		this.ctrl.category_purpose_prty.placeholder = ""
		this.ctrl.category_purpose_prty.dynamic_param = ""
		this.ctrl.category_purpose_prty.style_code = ""
		this.ctrl.category_purpose_prty.data_source = {"ds_code":"UDS_1304_1670484711870","ds_description":"NPSS Purpose Code CDB","rows":[],"type":"DPS_TABLE","value_member":"PURPOSE_CODE","display_member":"PURPOSE_CODE","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_NC_PURPOSE_CODES","context":"","filters":[],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[]},"query":"()"},"sel_columns":[]}
		this.ctrl.category_purpose_prty.image_association = ""
		this.ctrl.category_purpose_prty.show = true
		this.ctrl.category_purpose_prty.sub_content = ""
		this.ctrl.category_purpose_prty.required = false
		this.ctrl.category_purpose_prty.vld_rules = []
		this.ctrl.category_purpose_prty.targetcolumn_lower = "category_purpose_prty"
		this.ctrl.category_purpose_prty.disabled = false
		this.ctrl.category_purpose_prty.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.category_purpose_prty.ctrl_id = "npss_rct_simulator_ui_category_purpose_prty"
		this.ctrl.npss_rct_simulator_ui_category_purpose_prty = {}
		this.ctrl.npss_rct_simulator_ui_category_purpose_prty.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_rct_simulator_ui.category_purpose_prty = {}
	
		//Properties of intrbk_sttlm_amnt
		this.ctrl.intrbk_sttlm_amnt = {}
		this.ctrl.intrbk_sttlm_amnt.id = "RN21CN24"
		this.ctrl.intrbk_sttlm_amnt.desc = "Amount"
		this.ctrl.intrbk_sttlm_amnt.visible = true
		this.ctrl.intrbk_sttlm_amnt.label_name = "Amount"
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
		this.ctrl.intrbk_sttlm_amnt.vld_rules = []
		this.ctrl.intrbk_sttlm_amnt.targetcolumn_lower = "intrbk_sttlm_amnt"
		this.ctrl.intrbk_sttlm_amnt.disabled = false
		this.ctrl.intrbk_sttlm_amnt.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.intrbk_sttlm_amnt.ctrl_id = "npss_rct_simulator_ui_intrbk_sttlm_amnt"
		this.ctrl.npss_rct_simulator_ui_intrbk_sttlm_amnt = {}
		this.ctrl.npss_rct_simulator_ui_intrbk_sttlm_amnt.onChangecomponent = new EventEmitter<any>()
	
		//Properties of charge_bearer
		this.ctrl.charge_bearer = {}
		this.ctrl.charge_bearer.id = "RN31CN25"
		this.ctrl.charge_bearer.desc = "Charge Bearer"
		this.ctrl.charge_bearer.visible = true
		this.ctrl.charge_bearer.label_name = "Charge Bearer"
		this.ctrl.charge_bearer.df_code = "DF_1304_1665901396659"
		this.ctrl.charge_bearer.df_description = "Column Group 1"
		this.ctrl.charge_bearer.uictrl_code = "TXT"
		this.ctrl.charge_bearer.target_column = "CHARGE_BEARER"
		this.ctrl.charge_bearer.data_type = "TEXT"
		this.ctrl.charge_bearer.data_length = 16
		this.ctrl.charge_bearer.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.charge_bearer.default_value = "SLEV"
		this.ctrl.charge_bearer.is_memory_ctrl = ""
		this.ctrl.charge_bearer.field_coordinates = ""
		this.ctrl.charge_bearer.sub_details = ""
		this.ctrl.charge_bearer.accept_char = ""
		this.ctrl.charge_bearer.currency_format = ""
		this.ctrl.charge_bearer.data_scale = ""
		this.ctrl.charge_bearer.hide_label = false
		this.ctrl.charge_bearer.depends_on = ""
		this.ctrl.charge_bearer.placeholder = ""
		this.ctrl.charge_bearer.dynamic_param = ""
		this.ctrl.charge_bearer.style_code = ""
		this.ctrl.charge_bearer.data_source = ""
		this.ctrl.charge_bearer.image_association = ""
		this.ctrl.charge_bearer.show = true
		this.ctrl.charge_bearer.sub_content = ""
		this.ctrl.charge_bearer.required = false
		this.ctrl.charge_bearer.vld_rules = []
		this.ctrl.charge_bearer.targetcolumn_lower = "charge_bearer"
		this.ctrl.charge_bearer.disabled = false
		this.ctrl.charge_bearer.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.charge_bearer.ctrl_id = "npss_rct_simulator_ui_charge_bearer"
		this.ctrl.npss_rct_simulator_ui_charge_bearer = {}
		this.ctrl.npss_rct_simulator_ui_charge_bearer.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_acct_name
		this.ctrl.dbtr_acct_name = {}
		this.ctrl.dbtr_acct_name.id = "RN31CN26"
		this.ctrl.dbtr_acct_name.desc = "Sender Customer Name (Dr)"
		this.ctrl.dbtr_acct_name.visible = true
		this.ctrl.dbtr_acct_name.label_name = "Sender Customer Name (Dr)"
		this.ctrl.dbtr_acct_name.df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_acct_name.df_description = "Column Group 1"
		this.ctrl.dbtr_acct_name.uictrl_code = "TXT"
		this.ctrl.dbtr_acct_name.target_column = "DBTR_ACCT_NAME"
		this.ctrl.dbtr_acct_name.data_type = "TEXT"
		this.ctrl.dbtr_acct_name.data_length = 128
		this.ctrl.dbtr_acct_name.zone_df_code = "DF_1304_1665901396659"
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
		this.ctrl.dbtr_acct_name.data_source = ""
		this.ctrl.dbtr_acct_name.image_association = ""
		this.ctrl.dbtr_acct_name.show = true
		this.ctrl.dbtr_acct_name.sub_content = ""
		this.ctrl.dbtr_acct_name.required = false
		this.ctrl.dbtr_acct_name.vld_rules = []
		this.ctrl.dbtr_acct_name.targetcolumn_lower = "dbtr_acct_name"
		this.ctrl.dbtr_acct_name.disabled = false
		this.ctrl.dbtr_acct_name.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.dbtr_acct_name.ctrl_id = "npss_rct_simulator_ui_dbtr_acct_name"
		this.ctrl.npss_rct_simulator_ui_dbtr_acct_name = {}
		this.ctrl.npss_rct_simulator_ui_dbtr_acct_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of ext_org_id_code
		this.ctrl.ext_org_id_code = {}
		this.ctrl.ext_org_id_code.id = "RN31CN27"
		this.ctrl.ext_org_id_code.desc = "Ext Org Code"
		this.ctrl.ext_org_id_code.visible = true
		this.ctrl.ext_org_id_code.label_name = "Ext Org Code"
		this.ctrl.ext_org_id_code.df_code = "DF_1304_1665901396659"
		this.ctrl.ext_org_id_code.df_description = "Column Group 1"
		this.ctrl.ext_org_id_code.uictrl_code = "TXT"
		this.ctrl.ext_org_id_code.target_column = "EXT_ORG_ID_CODE"
		this.ctrl.ext_org_id_code.data_type = "TEXT"
		this.ctrl.ext_org_id_code.data_length = 4
		this.ctrl.ext_org_id_code.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.ext_org_id_code.default_value = ""
		this.ctrl.ext_org_id_code.is_memory_ctrl = ""
		this.ctrl.ext_org_id_code.field_coordinates = ""
		this.ctrl.ext_org_id_code.sub_details = ""
		this.ctrl.ext_org_id_code.accept_char = ""
		this.ctrl.ext_org_id_code.currency_format = ""
		this.ctrl.ext_org_id_code.data_scale = ""
		this.ctrl.ext_org_id_code.hide_label = false
		this.ctrl.ext_org_id_code.depends_on = ""
		this.ctrl.ext_org_id_code.placeholder = ""
		this.ctrl.ext_org_id_code.dynamic_param = ""
		this.ctrl.ext_org_id_code.style_code = ""
		this.ctrl.ext_org_id_code.data_source = ""
		this.ctrl.ext_org_id_code.image_association = ""
		this.ctrl.ext_org_id_code.show = true
		this.ctrl.ext_org_id_code.sub_content = ""
		this.ctrl.ext_org_id_code.required = false
		this.ctrl.ext_org_id_code.vld_rules = []
		this.ctrl.ext_org_id_code.targetcolumn_lower = "ext_org_id_code"
		this.ctrl.ext_org_id_code.disabled = false
		this.ctrl.ext_org_id_code.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.ext_org_id_code.ctrl_id = "npss_rct_simulator_ui_ext_org_id_code"
		this.ctrl.npss_rct_simulator_ui_ext_org_id_code = {}
		this.ctrl.npss_rct_simulator_ui_ext_org_id_code.onChangecomponent = new EventEmitter<any>()
	
		//Properties of ext_person_id_code
		this.ctrl.ext_person_id_code = {}
		this.ctrl.ext_person_id_code.id = "RN31CN28"
		this.ctrl.ext_person_id_code.desc = "Ext Person Code"
		this.ctrl.ext_person_id_code.visible = true
		this.ctrl.ext_person_id_code.label_name = "Ext Person Code"
		this.ctrl.ext_person_id_code.df_code = "DF_1304_1665901396659"
		this.ctrl.ext_person_id_code.df_description = "Column Group 1"
		this.ctrl.ext_person_id_code.uictrl_code = "TXT"
		this.ctrl.ext_person_id_code.target_column = "EXT_PERSON_ID_CODE"
		this.ctrl.ext_person_id_code.data_type = "TEXT"
		this.ctrl.ext_person_id_code.data_length = 4
		this.ctrl.ext_person_id_code.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.ext_person_id_code.default_value = ""
		this.ctrl.ext_person_id_code.is_memory_ctrl = ""
		this.ctrl.ext_person_id_code.field_coordinates = ""
		this.ctrl.ext_person_id_code.sub_details = ""
		this.ctrl.ext_person_id_code.accept_char = ""
		this.ctrl.ext_person_id_code.currency_format = ""
		this.ctrl.ext_person_id_code.data_scale = ""
		this.ctrl.ext_person_id_code.hide_label = false
		this.ctrl.ext_person_id_code.depends_on = ""
		this.ctrl.ext_person_id_code.placeholder = ""
		this.ctrl.ext_person_id_code.dynamic_param = ""
		this.ctrl.ext_person_id_code.style_code = ""
		this.ctrl.ext_person_id_code.data_source = ""
		this.ctrl.ext_person_id_code.image_association = ""
		this.ctrl.ext_person_id_code.show = true
		this.ctrl.ext_person_id_code.sub_content = ""
		this.ctrl.ext_person_id_code.required = false
		this.ctrl.ext_person_id_code.vld_rules = []
		this.ctrl.ext_person_id_code.targetcolumn_lower = "ext_person_id_code"
		this.ctrl.ext_person_id_code.disabled = false
		this.ctrl.ext_person_id_code.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.ext_person_id_code.ctrl_id = "npss_rct_simulator_ui_ext_person_id_code"
		this.ctrl.npss_rct_simulator_ui_ext_person_id_code = {}
		this.ctrl.npss_rct_simulator_ui_ext_person_id_code.onChangecomponent = new EventEmitter<any>()
	
		//Properties of issuer_type_code
		this.ctrl.issuer_type_code = {}
		this.ctrl.issuer_type_code.id = "RN31CN29"
		this.ctrl.issuer_type_code.desc = "Issuer Type Code"
		this.ctrl.issuer_type_code.visible = true
		this.ctrl.issuer_type_code.label_name = "Issuer Type Code"
		this.ctrl.issuer_type_code.df_code = "DF_1304_1665901396659"
		this.ctrl.issuer_type_code.df_description = "Column Group 1"
		this.ctrl.issuer_type_code.uictrl_code = "TXT"
		this.ctrl.issuer_type_code.target_column = "ISSUER_TYPE_CODE"
		this.ctrl.issuer_type_code.data_type = "TEXT"
		this.ctrl.issuer_type_code.data_length = 35
		this.ctrl.issuer_type_code.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.issuer_type_code.default_value = ""
		this.ctrl.issuer_type_code.is_memory_ctrl = ""
		this.ctrl.issuer_type_code.field_coordinates = ""
		this.ctrl.issuer_type_code.sub_details = ""
		this.ctrl.issuer_type_code.accept_char = ""
		this.ctrl.issuer_type_code.currency_format = ""
		this.ctrl.issuer_type_code.data_scale = ""
		this.ctrl.issuer_type_code.hide_label = false
		this.ctrl.issuer_type_code.depends_on = ""
		this.ctrl.issuer_type_code.placeholder = ""
		this.ctrl.issuer_type_code.dynamic_param = ""
		this.ctrl.issuer_type_code.style_code = ""
		this.ctrl.issuer_type_code.data_source = ""
		this.ctrl.issuer_type_code.image_association = ""
		this.ctrl.issuer_type_code.show = true
		this.ctrl.issuer_type_code.sub_content = ""
		this.ctrl.issuer_type_code.required = false
		this.ctrl.issuer_type_code.vld_rules = []
		this.ctrl.issuer_type_code.targetcolumn_lower = "issuer_type_code"
		this.ctrl.issuer_type_code.disabled = false
		this.ctrl.issuer_type_code.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.issuer_type_code.ctrl_id = "npss_rct_simulator_ui_issuer_type_code"
		this.ctrl.npss_rct_simulator_ui_issuer_type_code = {}
		this.ctrl.npss_rct_simulator_ui_issuer_type_code.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_birth_date
		this.ctrl.dbtr_birth_date = {}
		this.ctrl.dbtr_birth_date.id = "RN31CN30"
		this.ctrl.dbtr_birth_date.desc = "Date of Birth"
		this.ctrl.dbtr_birth_date.visible = true
		this.ctrl.dbtr_birth_date.label_name = "Date of Birth"
		this.ctrl.dbtr_birth_date.df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_birth_date.df_description = "Column Group 1"
		this.ctrl.dbtr_birth_date.uictrl_code = "DTP"
		this.ctrl.dbtr_birth_date.target_column = "DBTR_BIRTH_DATE"
		this.ctrl.dbtr_birth_date.data_type = "DATETIME"
		this.ctrl.dbtr_birth_date.data_length = 0
		this.ctrl.dbtr_birth_date.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_birth_date.default_value = ""
		this.ctrl.dbtr_birth_date.is_memory_ctrl = ""
		this.ctrl.dbtr_birth_date.field_coordinates = ""
		this.ctrl.dbtr_birth_date.sub_details = ""
		this.ctrl.dbtr_birth_date.accept_char = ""
		this.ctrl.dbtr_birth_date.currency_format = ""
		this.ctrl.dbtr_birth_date.data_scale = ""
		this.ctrl.dbtr_birth_date.hide_label = false
		this.ctrl.dbtr_birth_date.depends_on = ""
		this.ctrl.dbtr_birth_date.placeholder = ""
		this.ctrl.dbtr_birth_date.dynamic_param = ""
		this.ctrl.dbtr_birth_date.style_code = ""
		this.ctrl.dbtr_birth_date.data_source = ""
		this.ctrl.dbtr_birth_date.image_association = ""
		this.ctrl.dbtr_birth_date.show = true
		this.ctrl.dbtr_birth_date.sub_content = ""
		this.ctrl.dbtr_birth_date.required = false
		this.ctrl.dbtr_birth_date.vld_rules = []
		this.ctrl.dbtr_birth_date.targetcolumn_lower = "dbtr_birth_date"
		this.ctrl.dbtr_birth_date.disabled = false
		this.ctrl.dbtr_birth_date.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.dbtr_birth_date.ctrl_id = "npss_rct_simulator_ui_dbtr_birth_date"
		this.ctrl.npss_rct_simulator_ui_dbtr_birth_date = {}
		this.ctrl.npss_rct_simulator_ui_dbtr_birth_date.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_city_birth
		this.ctrl.dbtr_city_birth = {}
		this.ctrl.dbtr_city_birth.id = "RN41CN31"
		this.ctrl.dbtr_city_birth.desc = "City Of Birth"
		this.ctrl.dbtr_city_birth.visible = true
		this.ctrl.dbtr_city_birth.label_name = "City Of Birth"
		this.ctrl.dbtr_city_birth.df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_city_birth.df_description = "Column Group 1"
		this.ctrl.dbtr_city_birth.uictrl_code = "TXT"
		this.ctrl.dbtr_city_birth.target_column = "DBTR_CITY_BIRTH"
		this.ctrl.dbtr_city_birth.data_type = "TEXT"
		this.ctrl.dbtr_city_birth.data_length = 35
		this.ctrl.dbtr_city_birth.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_city_birth.default_value = ""
		this.ctrl.dbtr_city_birth.is_memory_ctrl = ""
		this.ctrl.dbtr_city_birth.field_coordinates = ""
		this.ctrl.dbtr_city_birth.sub_details = ""
		this.ctrl.dbtr_city_birth.accept_char = ""
		this.ctrl.dbtr_city_birth.currency_format = ""
		this.ctrl.dbtr_city_birth.data_scale = ""
		this.ctrl.dbtr_city_birth.hide_label = false
		this.ctrl.dbtr_city_birth.depends_on = ""
		this.ctrl.dbtr_city_birth.placeholder = ""
		this.ctrl.dbtr_city_birth.dynamic_param = ""
		this.ctrl.dbtr_city_birth.style_code = ""
		this.ctrl.dbtr_city_birth.data_source = ""
		this.ctrl.dbtr_city_birth.image_association = ""
		this.ctrl.dbtr_city_birth.show = true
		this.ctrl.dbtr_city_birth.sub_content = ""
		this.ctrl.dbtr_city_birth.required = false
		this.ctrl.dbtr_city_birth.vld_rules = []
		this.ctrl.dbtr_city_birth.targetcolumn_lower = "dbtr_city_birth"
		this.ctrl.dbtr_city_birth.disabled = false
		this.ctrl.dbtr_city_birth.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.dbtr_city_birth.ctrl_id = "npss_rct_simulator_ui_dbtr_city_birth"
		this.ctrl.npss_rct_simulator_ui_dbtr_city_birth = {}
		this.ctrl.npss_rct_simulator_ui_dbtr_city_birth.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_country
		this.ctrl.dbtr_country = {}
		this.ctrl.dbtr_country.id = "RN41CN32"
		this.ctrl.dbtr_country.desc = "Country Of Birth"
		this.ctrl.dbtr_country.visible = true
		this.ctrl.dbtr_country.label_name = "Country Of Birth"
		this.ctrl.dbtr_country.df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_country.df_description = "Column Group 1"
		this.ctrl.dbtr_country.uictrl_code = "TXT"
		this.ctrl.dbtr_country.target_column = "DBTR_COUNTRY"
		this.ctrl.dbtr_country.data_type = "TEXT"
		this.ctrl.dbtr_country.data_length = 2
		this.ctrl.dbtr_country.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_country.default_value = ""
		this.ctrl.dbtr_country.is_memory_ctrl = ""
		this.ctrl.dbtr_country.field_coordinates = ""
		this.ctrl.dbtr_country.sub_details = ""
		this.ctrl.dbtr_country.accept_char = ""
		this.ctrl.dbtr_country.currency_format = ""
		this.ctrl.dbtr_country.data_scale = ""
		this.ctrl.dbtr_country.hide_label = false
		this.ctrl.dbtr_country.depends_on = ""
		this.ctrl.dbtr_country.placeholder = ""
		this.ctrl.dbtr_country.dynamic_param = ""
		this.ctrl.dbtr_country.style_code = ""
		this.ctrl.dbtr_country.data_source = ""
		this.ctrl.dbtr_country.image_association = ""
		this.ctrl.dbtr_country.show = true
		this.ctrl.dbtr_country.sub_content = ""
		this.ctrl.dbtr_country.required = false
		this.ctrl.dbtr_country.vld_rules = []
		this.ctrl.dbtr_country.targetcolumn_lower = "dbtr_country"
		this.ctrl.dbtr_country.disabled = false
		this.ctrl.dbtr_country.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.dbtr_country.ctrl_id = "npss_rct_simulator_ui_dbtr_country"
		this.ctrl.npss_rct_simulator_ui_dbtr_country = {}
		this.ctrl.npss_rct_simulator_ui_dbtr_country.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_document_id
		this.ctrl.dbtr_document_id = {}
		this.ctrl.dbtr_document_id.id = "RN41CN37"
		this.ctrl.dbtr_document_id.desc = "Document ID"
		this.ctrl.dbtr_document_id.visible = true
		this.ctrl.dbtr_document_id.label_name = "Document ID"
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
		this.ctrl.dbtr_document_id.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.dbtr_document_id.ctrl_id = "npss_rct_simulator_ui_dbtr_document_id"
		this.ctrl.npss_rct_simulator_ui_dbtr_document_id = {}
		this.ctrl.npss_rct_simulator_ui_dbtr_document_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_iban
		this.ctrl.dbtr_iban = {}
		this.ctrl.dbtr_iban.id = "RN41CN38"
		this.ctrl.dbtr_iban.desc = "Sender IBAN"
		this.ctrl.dbtr_iban.visible = true
		this.ctrl.dbtr_iban.label_name = "Sender IBAN"
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
		this.ctrl.dbtr_iban.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.dbtr_iban.ctrl_id = "npss_rct_simulator_ui_dbtr_iban"
		this.ctrl.npss_rct_simulator_ui_dbtr_iban = {}
		this.ctrl.npss_rct_simulator_ui_dbtr_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_acct_no
		this.ctrl.dbtr_acct_no = {}
		this.ctrl.dbtr_acct_no.id = "RN41CN39"
		this.ctrl.dbtr_acct_no.desc = "Sender Account No"
		this.ctrl.dbtr_acct_no.visible = true
		this.ctrl.dbtr_acct_no.label_name = "Sender Account No"
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
		this.ctrl.dbtr_acct_no.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.dbtr_acct_no.ctrl_id = "npss_rct_simulator_ui_dbtr_acct_no"
		this.ctrl.npss_rct_simulator_ui_dbtr_acct_no = {}
		this.ctrl.npss_rct_simulator_ui_dbtr_acct_no.onChangecomponent = new EventEmitter<any>()
	
		//Properties of ext_acct_id_code
		this.ctrl.ext_acct_id_code = {}
		this.ctrl.ext_acct_id_code.id = "RN41CN40"
		this.ctrl.ext_acct_id_code.desc = "Ext Acct Code"
		this.ctrl.ext_acct_id_code.visible = true
		this.ctrl.ext_acct_id_code.label_name = "Ext Acct Code"
		this.ctrl.ext_acct_id_code.df_code = "DF_1304_1665901396659"
		this.ctrl.ext_acct_id_code.df_description = "Column Group 1"
		this.ctrl.ext_acct_id_code.uictrl_code = "TXT"
		this.ctrl.ext_acct_id_code.target_column = "EXT_ACCT_ID_CODE"
		this.ctrl.ext_acct_id_code.data_type = "TEXT"
		this.ctrl.ext_acct_id_code.data_length = 4
		this.ctrl.ext_acct_id_code.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.ext_acct_id_code.default_value = "AIIN"
		this.ctrl.ext_acct_id_code.is_memory_ctrl = ""
		this.ctrl.ext_acct_id_code.field_coordinates = ""
		this.ctrl.ext_acct_id_code.sub_details = ""
		this.ctrl.ext_acct_id_code.accept_char = ""
		this.ctrl.ext_acct_id_code.currency_format = ""
		this.ctrl.ext_acct_id_code.data_scale = ""
		this.ctrl.ext_acct_id_code.hide_label = false
		this.ctrl.ext_acct_id_code.depends_on = ""
		this.ctrl.ext_acct_id_code.placeholder = ""
		this.ctrl.ext_acct_id_code.dynamic_param = ""
		this.ctrl.ext_acct_id_code.style_code = ""
		this.ctrl.ext_acct_id_code.data_source = ""
		this.ctrl.ext_acct_id_code.image_association = ""
		this.ctrl.ext_acct_id_code.show = true
		this.ctrl.ext_acct_id_code.sub_content = ""
		this.ctrl.ext_acct_id_code.required = false
		this.ctrl.ext_acct_id_code.vld_rules = []
		this.ctrl.ext_acct_id_code.targetcolumn_lower = "ext_acct_id_code"
		this.ctrl.ext_acct_id_code.disabled = false
		this.ctrl.ext_acct_id_code.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.ext_acct_id_code.ctrl_id = "npss_rct_simulator_ui_ext_acct_id_code"
		this.ctrl.npss_rct_simulator_ui_ext_acct_id_code = {}
		this.ctrl.npss_rct_simulator_ui_ext_acct_id_code.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_cust_type
		this.ctrl.dbtr_cust_type = {}
		this.ctrl.dbtr_cust_type.id = "RN51CN41"
		this.ctrl.dbtr_cust_type.desc = "Sender Customer Type"
		this.ctrl.dbtr_cust_type.visible = true
		this.ctrl.dbtr_cust_type.label_name = "Sender Customer Type"
		this.ctrl.dbtr_cust_type.df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_cust_type.df_description = "Column Group 1"
		this.ctrl.dbtr_cust_type.uictrl_code = "TXT"
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
		this.ctrl.dbtr_cust_type.data_source = ""
		this.ctrl.dbtr_cust_type.image_association = ""
		this.ctrl.dbtr_cust_type.show = true
		this.ctrl.dbtr_cust_type.sub_content = ""
		this.ctrl.dbtr_cust_type.required = false
		this.ctrl.dbtr_cust_type.vld_rules = []
		this.ctrl.dbtr_cust_type.targetcolumn_lower = "dbtr_cust_type"
		this.ctrl.dbtr_cust_type.disabled = false
		this.ctrl.dbtr_cust_type.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.dbtr_cust_type.ctrl_id = "npss_rct_simulator_ui_dbtr_cust_type"
		this.ctrl.npss_rct_simulator_ui_dbtr_cust_type = {}
		this.ctrl.npss_rct_simulator_ui_dbtr_cust_type.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_acct_name
		this.ctrl.cdtr_acct_name = {}
		this.ctrl.cdtr_acct_name.id = "RN51CN48"
		this.ctrl.cdtr_acct_name.desc = "Beneficiary Name"
		this.ctrl.cdtr_acct_name.visible = true
		this.ctrl.cdtr_acct_name.label_name = "Beneficiary Name"
		this.ctrl.cdtr_acct_name.df_code = "DF_1304_1665901396659"
		this.ctrl.cdtr_acct_name.df_description = "Column Group 1"
		this.ctrl.cdtr_acct_name.uictrl_code = "TXT"
		this.ctrl.cdtr_acct_name.target_column = "CDTR_ACCT_NAME"
		this.ctrl.cdtr_acct_name.data_type = "TEXT"
		this.ctrl.cdtr_acct_name.data_length = 100
		this.ctrl.cdtr_acct_name.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.cdtr_acct_name.default_value = ""
		this.ctrl.cdtr_acct_name.is_memory_ctrl = ""
		this.ctrl.cdtr_acct_name.field_coordinates = ""
		this.ctrl.cdtr_acct_name.sub_details = ""
		this.ctrl.cdtr_acct_name.accept_char = ""
		this.ctrl.cdtr_acct_name.currency_format = ""
		this.ctrl.cdtr_acct_name.data_scale = ""
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
		this.ctrl.cdtr_acct_name.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.cdtr_acct_name.ctrl_id = "npss_rct_simulator_ui_cdtr_acct_name"
		this.ctrl.npss_rct_simulator_ui_cdtr_acct_name = {}
		this.ctrl.npss_rct_simulator_ui_cdtr_acct_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_acct_no
		this.ctrl.cdtr_acct_no = {}
		this.ctrl.cdtr_acct_no.id = "RN51CN47"
		this.ctrl.cdtr_acct_no.desc = "Beneficiary Account No"
		this.ctrl.cdtr_acct_no.visible = true
		this.ctrl.cdtr_acct_no.label_name = "Beneficiary Account No"
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
		this.ctrl.cdtr_acct_no.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.cdtr_acct_no.ctrl_id = "npss_rct_simulator_ui_cdtr_acct_no"
		this.ctrl.npss_rct_simulator_ui_cdtr_acct_no = {}
		this.ctrl.npss_rct_simulator_ui_cdtr_acct_no.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cdtr_iban
		this.ctrl.cdtr_iban = {}
		this.ctrl.cdtr_iban.id = "RN51CN49"
		this.ctrl.cdtr_iban.desc = "Beneficiary IBAN"
		this.ctrl.cdtr_iban.visible = true
		this.ctrl.cdtr_iban.label_name = "Beneficiary IBAN"
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
		this.ctrl.cdtr_iban.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.cdtr_iban.ctrl_id = "npss_rct_simulator_ui_cdtr_iban"
		this.ctrl.npss_rct_simulator_ui_cdtr_iban = {}
		this.ctrl.npss_rct_simulator_ui_cdtr_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cr_acct_identification
		this.ctrl.cr_acct_identification = {}
		this.ctrl.cr_acct_identification.id = "RN51CN50"
		this.ctrl.cr_acct_identification.desc = "Identification"
		this.ctrl.cr_acct_identification.visible = true
		this.ctrl.cr_acct_identification.label_name = "Identification"
		this.ctrl.cr_acct_identification.df_code = "DF_1304_1665901396659"
		this.ctrl.cr_acct_identification.df_description = "Column Group 1"
		this.ctrl.cr_acct_identification.uictrl_code = "TXT"
		this.ctrl.cr_acct_identification.target_column = "CR_ACCT_IDENTIFICATION"
		this.ctrl.cr_acct_identification.data_type = "TEXT"
		this.ctrl.cr_acct_identification.data_length = 34
		this.ctrl.cr_acct_identification.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.cr_acct_identification.default_value = ""
		this.ctrl.cr_acct_identification.is_memory_ctrl = ""
		this.ctrl.cr_acct_identification.field_coordinates = ""
		this.ctrl.cr_acct_identification.sub_details = ""
		this.ctrl.cr_acct_identification.accept_char = ""
		this.ctrl.cr_acct_identification.currency_format = ""
		this.ctrl.cr_acct_identification.data_scale = ""
		this.ctrl.cr_acct_identification.hide_label = false
		this.ctrl.cr_acct_identification.depends_on = ""
		this.ctrl.cr_acct_identification.placeholder = ""
		this.ctrl.cr_acct_identification.dynamic_param = ""
		this.ctrl.cr_acct_identification.style_code = ""
		this.ctrl.cr_acct_identification.data_source = ""
		this.ctrl.cr_acct_identification.image_association = ""
		this.ctrl.cr_acct_identification.show = true
		this.ctrl.cr_acct_identification.sub_content = ""
		this.ctrl.cr_acct_identification.required = false
		this.ctrl.cr_acct_identification.vld_rules = []
		this.ctrl.cr_acct_identification.targetcolumn_lower = "cr_acct_identification"
		this.ctrl.cr_acct_identification.disabled = false
		this.ctrl.cr_acct_identification.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.cr_acct_identification.ctrl_id = "npss_rct_simulator_ui_cr_acct_identification"
		this.ctrl.npss_rct_simulator_ui_cr_acct_identification = {}
		this.ctrl.npss_rct_simulator_ui_cr_acct_identification.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cr_acct_id_code
		this.ctrl.cr_acct_id_code = {}
		this.ctrl.cr_acct_id_code.id = "RN51CN51"
		this.ctrl.cr_acct_id_code.desc = "Credit Card"
		this.ctrl.cr_acct_id_code.visible = true
		this.ctrl.cr_acct_id_code.label_name = "Credit Card"
		this.ctrl.cr_acct_id_code.df_code = "DF_1304_1665901396659"
		this.ctrl.cr_acct_id_code.df_description = "Column Group 1"
		this.ctrl.cr_acct_id_code.uictrl_code = "TXT"
		this.ctrl.cr_acct_id_code.target_column = "CR_ACCT_ID_CODE"
		this.ctrl.cr_acct_id_code.data_type = "TEXT"
		this.ctrl.cr_acct_id_code.data_length = 4
		this.ctrl.cr_acct_id_code.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.cr_acct_id_code.default_value = "AIIN"
		this.ctrl.cr_acct_id_code.is_memory_ctrl = ""
		this.ctrl.cr_acct_id_code.field_coordinates = ""
		this.ctrl.cr_acct_id_code.sub_details = ""
		this.ctrl.cr_acct_id_code.accept_char = ""
		this.ctrl.cr_acct_id_code.currency_format = ""
		this.ctrl.cr_acct_id_code.data_scale = ""
		this.ctrl.cr_acct_id_code.hide_label = false
		this.ctrl.cr_acct_id_code.depends_on = ""
		this.ctrl.cr_acct_id_code.placeholder = ""
		this.ctrl.cr_acct_id_code.dynamic_param = ""
		this.ctrl.cr_acct_id_code.style_code = ""
		this.ctrl.cr_acct_id_code.data_source = ""
		this.ctrl.cr_acct_id_code.image_association = ""
		this.ctrl.cr_acct_id_code.show = true
		this.ctrl.cr_acct_id_code.sub_content = ""
		this.ctrl.cr_acct_id_code.required = false
		this.ctrl.cr_acct_id_code.vld_rules = []
		this.ctrl.cr_acct_id_code.targetcolumn_lower = "cr_acct_id_code"
		this.ctrl.cr_acct_id_code.disabled = false
		this.ctrl.cr_acct_id_code.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.cr_acct_id_code.ctrl_id = "npss_rct_simulator_ui_cr_acct_id_code"
		this.ctrl.npss_rct_simulator_ui_cr_acct_id_code = {}
		this.ctrl.npss_rct_simulator_ui_cr_acct_id_code.onChangecomponent = new EventEmitter<any>()
	
		//Properties of ext_purpose_code
		this.ctrl.ext_purpose_code = {}
		this.ctrl.ext_purpose_code.id = "RN61CN52"
		this.ctrl.ext_purpose_code.desc = "Ext Purpose Code"
		this.ctrl.ext_purpose_code.visible = true
		this.ctrl.ext_purpose_code.label_name = "Ext Purpose Code"
		this.ctrl.ext_purpose_code.df_code = "DF_1304_1665901396659"
		this.ctrl.ext_purpose_code.df_description = "Column Group 1"
		this.ctrl.ext_purpose_code.uictrl_code = "TXT"
		this.ctrl.ext_purpose_code.target_column = "EXT_PURPOSE_CODE"
		this.ctrl.ext_purpose_code.data_type = "TEXT"
		this.ctrl.ext_purpose_code.data_length = 4
		this.ctrl.ext_purpose_code.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.ext_purpose_code.default_value = ""
		this.ctrl.ext_purpose_code.is_memory_ctrl = ""
		this.ctrl.ext_purpose_code.field_coordinates = ""
		this.ctrl.ext_purpose_code.sub_details = ""
		this.ctrl.ext_purpose_code.accept_char = ""
		this.ctrl.ext_purpose_code.currency_format = ""
		this.ctrl.ext_purpose_code.data_scale = ""
		this.ctrl.ext_purpose_code.hide_label = false
		this.ctrl.ext_purpose_code.depends_on = ""
		this.ctrl.ext_purpose_code.placeholder = ""
		this.ctrl.ext_purpose_code.dynamic_param = ""
		this.ctrl.ext_purpose_code.style_code = ""
		this.ctrl.ext_purpose_code.data_source = ""
		this.ctrl.ext_purpose_code.image_association = ""
		this.ctrl.ext_purpose_code.show = true
		this.ctrl.ext_purpose_code.sub_content = ""
		this.ctrl.ext_purpose_code.required = false
		this.ctrl.ext_purpose_code.vld_rules = []
		this.ctrl.ext_purpose_code.targetcolumn_lower = "ext_purpose_code"
		this.ctrl.ext_purpose_code.disabled = false
		this.ctrl.ext_purpose_code.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.ext_purpose_code.ctrl_id = "npss_rct_simulator_ui_ext_purpose_code"
		this.ctrl.npss_rct_simulator_ui_ext_purpose_code = {}
		this.ctrl.npss_rct_simulator_ui_ext_purpose_code.onChangecomponent = new EventEmitter<any>()
	
		//Properties of ext_purpose_prty
		this.ctrl.ext_purpose_prty = {}
		this.ctrl.ext_purpose_prty.id = "RN61CN53"
		this.ctrl.ext_purpose_prty.desc = "Ext Purpose Proprietary"
		this.ctrl.ext_purpose_prty.visible = true
		this.ctrl.ext_purpose_prty.label_name = "Ext Purpose Proprietary"
		this.ctrl.ext_purpose_prty.df_code = "DF_1304_1665901396659"
		this.ctrl.ext_purpose_prty.df_description = "Column Group 1"
		this.ctrl.ext_purpose_prty.uictrl_code = "TXT"
		this.ctrl.ext_purpose_prty.target_column = "EXT_PURPOSE_PRTY"
		this.ctrl.ext_purpose_prty.data_type = "TEXT"
		this.ctrl.ext_purpose_prty.data_length = 35
		this.ctrl.ext_purpose_prty.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.ext_purpose_prty.default_value = ""
		this.ctrl.ext_purpose_prty.is_memory_ctrl = ""
		this.ctrl.ext_purpose_prty.field_coordinates = ""
		this.ctrl.ext_purpose_prty.sub_details = ""
		this.ctrl.ext_purpose_prty.accept_char = ""
		this.ctrl.ext_purpose_prty.currency_format = ""
		this.ctrl.ext_purpose_prty.data_scale = ""
		this.ctrl.ext_purpose_prty.hide_label = false
		this.ctrl.ext_purpose_prty.depends_on = ""
		this.ctrl.ext_purpose_prty.placeholder = ""
		this.ctrl.ext_purpose_prty.dynamic_param = ""
		this.ctrl.ext_purpose_prty.style_code = ""
		this.ctrl.ext_purpose_prty.data_source = ""
		this.ctrl.ext_purpose_prty.image_association = ""
		this.ctrl.ext_purpose_prty.show = true
		this.ctrl.ext_purpose_prty.sub_content = ""
		this.ctrl.ext_purpose_prty.required = false
		this.ctrl.ext_purpose_prty.vld_rules = []
		this.ctrl.ext_purpose_prty.targetcolumn_lower = "ext_purpose_prty"
		this.ctrl.ext_purpose_prty.disabled = false
		this.ctrl.ext_purpose_prty.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.ext_purpose_prty.ctrl_id = "npss_rct_simulator_ui_ext_purpose_prty"
		this.ctrl.npss_rct_simulator_ui_ext_purpose_prty = {}
		this.ctrl.npss_rct_simulator_ui_ext_purpose_prty.onChangecomponent = new EventEmitter<any>()
	
		//Properties of remittance_info
		this.ctrl.remittance_info = {}
		this.ctrl.remittance_info.id = "RN61CN54"
		this.ctrl.remittance_info.desc = "Remittance Info"
		this.ctrl.remittance_info.visible = true
		this.ctrl.remittance_info.label_name = "Remittance Info"
		this.ctrl.remittance_info.df_code = "DF_1304_1665901396659"
		this.ctrl.remittance_info.df_description = "Column Group 1"
		this.ctrl.remittance_info.uictrl_code = "TXT"
		this.ctrl.remittance_info.target_column = "REMITTANCE_INFO"
		this.ctrl.remittance_info.data_type = "TEXT"
		this.ctrl.remittance_info.data_length = 140
		this.ctrl.remittance_info.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.remittance_info.default_value = ""
		this.ctrl.remittance_info.is_memory_ctrl = ""
		this.ctrl.remittance_info.field_coordinates = ""
		this.ctrl.remittance_info.sub_details = ""
		this.ctrl.remittance_info.accept_char = ""
		this.ctrl.remittance_info.currency_format = ""
		this.ctrl.remittance_info.data_scale = ""
		this.ctrl.remittance_info.hide_label = false
		this.ctrl.remittance_info.depends_on = ""
		this.ctrl.remittance_info.placeholder = ""
		this.ctrl.remittance_info.dynamic_param = ""
		this.ctrl.remittance_info.style_code = ""
		this.ctrl.remittance_info.data_source = ""
		this.ctrl.remittance_info.image_association = ""
		this.ctrl.remittance_info.show = true
		this.ctrl.remittance_info.sub_content = ""
		this.ctrl.remittance_info.required = false
		this.ctrl.remittance_info.vld_rules = []
		this.ctrl.remittance_info.targetcolumn_lower = "remittance_info"
		this.ctrl.remittance_info.disabled = false
		this.ctrl.remittance_info.view_name = "f_npss_rct_simulator_ui"
		this.ctrl.remittance_info.ctrl_id = "npss_rct_simulator_ui_remittance_info"
		this.ctrl.npss_rct_simulator_ui_remittance_info = {}
		this.ctrl.npss_rct_simulator_ui_remittance_info.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_rct_simulator_ui.model = {"HDR_MSG_ID":"","HDR_CREATED_DATE":"setcurrentdate(),{}","HDR_TOTAL_RECORDS":"1","HDR_TOTAL_AMOUNT":"","HDR_SETTLEMENT_DATE":"setcurrentdate(),{}","VALUE_DATE":"setcurrentdate(),{}","HDR_SETTLEMENT_METHOD":"CLRG","HDR_CLEARING_SYSTEM":"UAEIPP Core Service","DR_SORT_CODE":"Sender Bic","CR_SORT_CODE":"","INSTRUCTION_ID":"","PAYMENT_ENDTOEND_ID":"","TRAN_REF_ID":"","UETR":"","INSTRUMENT_TYPE":"INST","CATEGORY_PURPOSE":"","CATEGORY_PURPOSE_PRTY":"","INTRBK_STTLM_AMNT":"","CHARGE_BEARER":"SLEV","DBTR_ACCT_NAME":"","EXT_ORG_ID_CODE":"","EXT_PERSON_ID_CODE":"","ISSUER_TYPE_CODE":"","DBTR_BIRTH_DATE":"","DBTR_CITY_BIRTH":"","DBTR_COUNTRY":"","DBTR_DOCUMENT_ID":"","DBTR_IBAN":"","DBTR_ACCT_NO":"","EXT_ACCT_ID_CODE":"AIIN","DBTR_CUST_TYPE":"","CDTR_ACCT_NAME":"","CDTR_ACCT_NO":"","CDTR_IBAN":"","CR_ACCT_IDENTIFICATION":"","CR_ACCT_ID_CODE":"AIIN","EXT_PURPOSE_CODE":"","EXT_PURPOSE_PRTY":"","REMITTANCE_INFO":""}
		this.screen_instance[this.comp_id].f_npss_rct_simulator_ui.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"HDR_MSG_ID"},{"CTLR_CODE":"DTP","DATA_TYPE":"DATETIME","TARGET_COLUMN":"HDR_CREATED_DATE"},{"CTLR_CODE":"TXT","DATA_TYPE":"NUMBER","TARGET_COLUMN":"HDR_TOTAL_RECORDS"},{"CTLR_CODE":"CUR","DATA_TYPE":"NUMBER","TARGET_COLUMN":"HDR_TOTAL_AMOUNT"},{"CTLR_CODE":"DTP","DATA_TYPE":"DATETIME","TARGET_COLUMN":"HDR_SETTLEMENT_DATE"},{"CTLR_CODE":"DTP","DATA_TYPE":"DATETIME","TARGET_COLUMN":"VALUE_DATE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"HDR_SETTLEMENT_METHOD"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"HDR_CLEARING_SYSTEM"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DR_SORT_CODE"},{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"CR_SORT_CODE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"INSTRUCTION_ID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"PAYMENT_ENDTOEND_ID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"TRAN_REF_ID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"UETR"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"INSTRUMENT_TYPE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CATEGORY_PURPOSE"},{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"CATEGORY_PURPOSE_PRTY"},{"CTLR_CODE":"CUR","DATA_TYPE":"NUMBER","TARGET_COLUMN":"INTRBK_STTLM_AMNT"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CHARGE_BEARER"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_ACCT_NAME"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"EXT_ORG_ID_CODE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"EXT_PERSON_ID_CODE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"ISSUER_TYPE_CODE"},{"CTLR_CODE":"DTP","DATA_TYPE":"DATETIME","TARGET_COLUMN":"DBTR_BIRTH_DATE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_CITY_BIRTH"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_COUNTRY"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_DOCUMENT_ID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_IBAN"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_ACCT_NO"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"EXT_ACCT_ID_CODE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_CUST_TYPE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_ACCT_NAME"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_ACCT_NO"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CDTR_IBAN"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CR_ACCT_IDENTIFICATION"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CR_ACCT_ID_CODE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"EXT_PURPOSE_CODE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"EXT_PURPOSE_PRTY"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"REMITTANCE_INFO"}]
		this.screen_instance[this.comp_id].f_npss_rct_simulator_ui.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_rct_simulator_ui.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_rct_simulator_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_rct_simulator_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_rct_simulator_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_rct_simulator_ui[control][property] = value;
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
    