/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27579 
Modified By     : Admin 
Modified Date   : 2022-Dec-29 8:27 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_setup
Form Name       : NPSS Merchant UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_merchant_ui',
  templateUrl: './f_npss_merchant_ui.component.html',
  styleUrls: ['./f_npss_merchant_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_merchant_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_merchant_ui') form;
  @ViewChild('npss_merchant_ui_channel_id') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1666846074129"
	dtt_code : string = "dtt_1304_1666846129395"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of channel_id
		this.ctrl.channel_id = {}
		this.ctrl.channel_id.id = "RN31CN14RN4CN16"
		this.ctrl.channel_id.desc = "Channel ID"
		this.ctrl.channel_id.visible = true
		this.ctrl.channel_id.label_name = "Channel ID"
		this.ctrl.channel_id.df_code = "DF_1304_1666846276198"
		this.ctrl.channel_id.df_description = "Column Group 1"
		this.ctrl.channel_id.uictrl_code = "CBO"
		this.ctrl.channel_id.target_column = "CHANNEL_ID"
		this.ctrl.channel_id.data_type = "TEXT"
		this.ctrl.channel_id.data_length = 128
		this.ctrl.channel_id.zone_df_code = "DF_1304_1666846276198"
		this.ctrl.channel_id.default_value = ""
		this.ctrl.channel_id.is_memory_ctrl = ""
		this.ctrl.channel_id.field_coordinates = ""
		this.ctrl.channel_id.sub_details = ""
		this.ctrl.channel_id.accept_char = ""
		this.ctrl.channel_id.currency_format = ""
		this.ctrl.channel_id.data_scale = ""
		this.ctrl.channel_id.hide_label = false
		this.ctrl.channel_id.depends_on = ""
		this.ctrl.channel_id.placeholder = ""
		this.ctrl.channel_id.dynamic_param = ""
		this.ctrl.channel_id.style_code = ""
		this.ctrl.channel_id.data_source = {"ds_code":"UDS_1304_1670498867574","ds_description":"Simulator SQL CDB","rows":[],"type":"DPS_TABLE","value_member":"S_CODE","display_member":"S_DESCRIPTION","first_record_display":"","column_list":"","order_by":"CREATED_DATE DESC","target_table":"CORE_SYSTEM_EXTN","context":"","filters":[{"filter_name":"Filter1","binding_name":"ST_CODE","id":"DF_1670573366636","binding_value":"CH","source_name":"ST_CODE","source_value":"CH","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter2","binding_name":"TENANT_ID","id":"DF_1670573366636","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"ST_CODE","binding_value":"CH","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"CH"},{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"}]},"query":"(ST_CODE = CH AND TENANT_ID = SESSION_LEVEL.TENANT_ID)"},"sel_columns":[],"need_first_item_selection":true,"has_parent":false}
		this.ctrl.channel_id.image_association = ""
		this.ctrl.channel_id.show = true
		this.ctrl.channel_id.sub_content = ""
		this.ctrl.channel_id.required = false
		this.ctrl.channel_id.vld_rules = []
		this.ctrl.channel_id.targetcolumn_lower = "channel_id"
		this.ctrl.channel_id.disabled = false
		this.ctrl.channel_id.view_name = "f_npss_merchant_ui"
		this.ctrl.channel_id.ctrl_id = "npss_merchant_ui_channel_id"
		this.ctrl.npss_merchant_ui_channel_id = {}
		this.ctrl.npss_merchant_ui_channel_id.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_merchant_ui.channel_id = {}
	
		//Properties of bankuserid
		this.ctrl.bankuserid = {}
		this.ctrl.bankuserid.id = "RN31CN14RN4CN17"
		this.ctrl.bankuserid.desc = "Bank User ID"
		this.ctrl.bankuserid.visible = true
		this.ctrl.bankuserid.label_name = "Bank User ID"
		this.ctrl.bankuserid.df_code = "DF_1304_1666846276198"
		this.ctrl.bankuserid.df_description = "Column Group 1"
		this.ctrl.bankuserid.uictrl_code = "TXT"
		this.ctrl.bankuserid.target_column = "BANKUSERID"
		this.ctrl.bankuserid.data_type = "TEXT"
		this.ctrl.bankuserid.data_length = 16
		this.ctrl.bankuserid.zone_df_code = "DF_1304_1666846276198"
		this.ctrl.bankuserid.default_value = ""
		this.ctrl.bankuserid.is_memory_ctrl = ""
		this.ctrl.bankuserid.field_coordinates = ""
		this.ctrl.bankuserid.sub_details = ""
		this.ctrl.bankuserid.accept_char = ""
		this.ctrl.bankuserid.currency_format = ""
		this.ctrl.bankuserid.data_scale = ""
		this.ctrl.bankuserid.hide_label = false
		this.ctrl.bankuserid.depends_on = ""
		this.ctrl.bankuserid.placeholder = ""
		this.ctrl.bankuserid.dynamic_param = ""
		this.ctrl.bankuserid.style_code = ""
		this.ctrl.bankuserid.data_source = ""
		this.ctrl.bankuserid.image_association = ""
		this.ctrl.bankuserid.show = true
		this.ctrl.bankuserid.sub_content = "*"
		this.ctrl.bankuserid.required = true
		this.ctrl.bankuserid.vld_rules = []
		this.ctrl.bankuserid.targetcolumn_lower = "bankuserid"
		this.ctrl.bankuserid.disabled = false
		this.ctrl.bankuserid.view_name = "f_npss_merchant_ui"
		this.ctrl.bankuserid.ctrl_id = "npss_merchant_ui_bankuserid"
		this.ctrl.npss_merchant_ui_bankuserid = {}
		this.ctrl.npss_merchant_ui_bankuserid.onChangecomponent = new EventEmitter<any>()
	
		//Properties of merchant_name
		this.ctrl.merchant_name = {}
		this.ctrl.merchant_name.id = "RN31CN14RN4CN18"
		this.ctrl.merchant_name.desc = "Name"
		this.ctrl.merchant_name.visible = true
		this.ctrl.merchant_name.label_name = "Name"
		this.ctrl.merchant_name.df_code = "DF_1304_1666846276198"
		this.ctrl.merchant_name.df_description = "Column Group 1"
		this.ctrl.merchant_name.uictrl_code = "TXT"
		this.ctrl.merchant_name.target_column = "MERCHANT_NAME"
		this.ctrl.merchant_name.data_type = "TEXT"
		this.ctrl.merchant_name.data_length = 50
		this.ctrl.merchant_name.zone_df_code = "DF_1304_1666846276198"
		this.ctrl.merchant_name.default_value = ""
		this.ctrl.merchant_name.is_memory_ctrl = ""
		this.ctrl.merchant_name.field_coordinates = ""
		this.ctrl.merchant_name.sub_details = ""
		this.ctrl.merchant_name.accept_char = ""
		this.ctrl.merchant_name.currency_format = ""
		this.ctrl.merchant_name.data_scale = ""
		this.ctrl.merchant_name.hide_label = false
		this.ctrl.merchant_name.depends_on = ""
		this.ctrl.merchant_name.placeholder = ""
		this.ctrl.merchant_name.dynamic_param = ""
		this.ctrl.merchant_name.style_code = ""
		this.ctrl.merchant_name.data_source = ""
		this.ctrl.merchant_name.image_association = ""
		this.ctrl.merchant_name.show = true
		this.ctrl.merchant_name.sub_content = ""
		this.ctrl.merchant_name.required = false
		this.ctrl.merchant_name.vld_rules = []
		this.ctrl.merchant_name.targetcolumn_lower = "merchant_name"
		this.ctrl.merchant_name.disabled = false
		this.ctrl.merchant_name.view_name = "f_npss_merchant_ui"
		this.ctrl.merchant_name.ctrl_id = "npss_merchant_ui_merchant_name"
		this.ctrl.npss_merchant_ui_merchant_name = {}
		this.ctrl.npss_merchant_ui_merchant_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of surname
		this.ctrl.surname = {}
		this.ctrl.surname.id = "RN31CN14RN4CN19"
		this.ctrl.surname.desc = "Surname"
		this.ctrl.surname.visible = true
		this.ctrl.surname.label_name = "Surname"
		this.ctrl.surname.df_code = "DF_1304_1666846276198"
		this.ctrl.surname.df_description = "Column Group 1"
		this.ctrl.surname.uictrl_code = "TXT"
		this.ctrl.surname.target_column = "SURNAME"
		this.ctrl.surname.data_type = "TEXT"
		this.ctrl.surname.data_length = 50
		this.ctrl.surname.zone_df_code = "DF_1304_1666846276198"
		this.ctrl.surname.default_value = ""
		this.ctrl.surname.is_memory_ctrl = ""
		this.ctrl.surname.field_coordinates = ""
		this.ctrl.surname.sub_details = ""
		this.ctrl.surname.accept_char = ""
		this.ctrl.surname.currency_format = ""
		this.ctrl.surname.data_scale = ""
		this.ctrl.surname.hide_label = false
		this.ctrl.surname.depends_on = ""
		this.ctrl.surname.placeholder = ""
		this.ctrl.surname.dynamic_param = ""
		this.ctrl.surname.style_code = ""
		this.ctrl.surname.data_source = ""
		this.ctrl.surname.image_association = ""
		this.ctrl.surname.show = true
		this.ctrl.surname.sub_content = ""
		this.ctrl.surname.required = false
		this.ctrl.surname.vld_rules = []
		this.ctrl.surname.targetcolumn_lower = "surname"
		this.ctrl.surname.disabled = false
		this.ctrl.surname.view_name = "f_npss_merchant_ui"
		this.ctrl.surname.ctrl_id = "npss_merchant_ui_surname"
		this.ctrl.npss_merchant_ui_surname = {}
		this.ctrl.npss_merchant_ui_surname.onChangecomponent = new EventEmitter<any>()
	
		//Properties of denomination
		this.ctrl.denomination = {}
		this.ctrl.denomination.id = "RN31CN14RN4CN20"
		this.ctrl.denomination.desc = "Denomination"
		this.ctrl.denomination.visible = true
		this.ctrl.denomination.label_name = "Denomination"
		this.ctrl.denomination.df_code = "DF_1304_1666846276198"
		this.ctrl.denomination.df_description = "Column Group 1"
		this.ctrl.denomination.uictrl_code = "TXT"
		this.ctrl.denomination.target_column = "DENOMINATION"
		this.ctrl.denomination.data_type = "TEXT"
		this.ctrl.denomination.data_length = 100
		this.ctrl.denomination.zone_df_code = "DF_1304_1666846276198"
		this.ctrl.denomination.default_value = ""
		this.ctrl.denomination.is_memory_ctrl = ""
		this.ctrl.denomination.field_coordinates = ""
		this.ctrl.denomination.sub_details = ""
		this.ctrl.denomination.accept_char = ""
		this.ctrl.denomination.currency_format = ""
		this.ctrl.denomination.data_scale = ""
		this.ctrl.denomination.hide_label = false
		this.ctrl.denomination.depends_on = ""
		this.ctrl.denomination.placeholder = ""
		this.ctrl.denomination.dynamic_param = ""
		this.ctrl.denomination.style_code = ""
		this.ctrl.denomination.data_source = ""
		this.ctrl.denomination.image_association = ""
		this.ctrl.denomination.show = true
		this.ctrl.denomination.sub_content = "*"
		this.ctrl.denomination.required = true
		this.ctrl.denomination.vld_rules = []
		this.ctrl.denomination.targetcolumn_lower = "denomination"
		this.ctrl.denomination.disabled = false
		this.ctrl.denomination.view_name = "f_npss_merchant_ui"
		this.ctrl.denomination.ctrl_id = "npss_merchant_ui_denomination"
		this.ctrl.npss_merchant_ui_denomination = {}
		this.ctrl.npss_merchant_ui_denomination.onChangecomponent = new EventEmitter<any>()
	
		//Properties of vat_number
		this.ctrl.vat_number = {}
		this.ctrl.vat_number.id = "RN31CN14RN4CN21"
		this.ctrl.vat_number.desc = "VAT Number"
		this.ctrl.vat_number.visible = true
		this.ctrl.vat_number.label_name = "VAT Number"
		this.ctrl.vat_number.df_code = "DF_1304_1666846276198"
		this.ctrl.vat_number.df_description = "Column Group 1"
		this.ctrl.vat_number.uictrl_code = "TXT"
		this.ctrl.vat_number.target_column = "VAT_NUMBER"
		this.ctrl.vat_number.data_type = "TEXT"
		this.ctrl.vat_number.data_length = 20
		this.ctrl.vat_number.zone_df_code = "DF_1304_1666846276198"
		this.ctrl.vat_number.default_value = ""
		this.ctrl.vat_number.is_memory_ctrl = ""
		this.ctrl.vat_number.field_coordinates = ""
		this.ctrl.vat_number.sub_details = ""
		this.ctrl.vat_number.accept_char = ""
		this.ctrl.vat_number.currency_format = ""
		this.ctrl.vat_number.data_scale = ""
		this.ctrl.vat_number.hide_label = false
		this.ctrl.vat_number.depends_on = ""
		this.ctrl.vat_number.placeholder = ""
		this.ctrl.vat_number.dynamic_param = ""
		this.ctrl.vat_number.style_code = ""
		this.ctrl.vat_number.data_source = ""
		this.ctrl.vat_number.image_association = ""
		this.ctrl.vat_number.show = true
		this.ctrl.vat_number.sub_content = "*"
		this.ctrl.vat_number.required = true
		this.ctrl.vat_number.vld_rules = []
		this.ctrl.vat_number.targetcolumn_lower = "vat_number"
		this.ctrl.vat_number.disabled = false
		this.ctrl.vat_number.view_name = "f_npss_merchant_ui"
		this.ctrl.vat_number.ctrl_id = "npss_merchant_ui_vat_number"
		this.ctrl.npss_merchant_ui_vat_number = {}
		this.ctrl.npss_merchant_ui_vat_number.onChangecomponent = new EventEmitter<any>()
	
		//Properties of mcc
		this.ctrl.mcc = {}
		this.ctrl.mcc.id = "RN31CN14RN4CN22"
		this.ctrl.mcc.desc = "MCC"
		this.ctrl.mcc.visible = true
		this.ctrl.mcc.label_name = "MCC"
		this.ctrl.mcc.df_code = "DF_1304_1666846276198"
		this.ctrl.mcc.df_description = "Column Group 1"
		this.ctrl.mcc.uictrl_code = "TXT"
		this.ctrl.mcc.target_column = "MCC"
		this.ctrl.mcc.data_type = "TEXT"
		this.ctrl.mcc.data_length = 4
		this.ctrl.mcc.zone_df_code = "DF_1304_1666846276198"
		this.ctrl.mcc.default_value = ""
		this.ctrl.mcc.is_memory_ctrl = ""
		this.ctrl.mcc.field_coordinates = ""
		this.ctrl.mcc.sub_details = ""
		this.ctrl.mcc.accept_char = ""
		this.ctrl.mcc.currency_format = ""
		this.ctrl.mcc.data_scale = ""
		this.ctrl.mcc.hide_label = false
		this.ctrl.mcc.depends_on = ""
		this.ctrl.mcc.placeholder = ""
		this.ctrl.mcc.dynamic_param = ""
		this.ctrl.mcc.style_code = ""
		this.ctrl.mcc.data_source = ""
		this.ctrl.mcc.image_association = ""
		this.ctrl.mcc.show = true
		this.ctrl.mcc.sub_content = "*"
		this.ctrl.mcc.required = true
		this.ctrl.mcc.vld_rules = []
		this.ctrl.mcc.targetcolumn_lower = "mcc"
		this.ctrl.mcc.disabled = false
		this.ctrl.mcc.view_name = "f_npss_merchant_ui"
		this.ctrl.mcc.ctrl_id = "npss_merchant_ui_mcc"
		this.ctrl.npss_merchant_ui_mcc = {}
		this.ctrl.npss_merchant_ui_mcc.onChangecomponent = new EventEmitter<any>()
	
		//Properties of mobile
		this.ctrl.mobile = {}
		this.ctrl.mobile.id = "RN31CN14RN4CN23"
		this.ctrl.mobile.desc = "Mobile"
		this.ctrl.mobile.visible = true
		this.ctrl.mobile.label_name = "Mobile"
		this.ctrl.mobile.df_code = "DF_1304_1666846276198"
		this.ctrl.mobile.df_description = "Column Group 1"
		this.ctrl.mobile.uictrl_code = "TXT"
		this.ctrl.mobile.target_column = "MOBILE"
		this.ctrl.mobile.data_type = "TEXT"
		this.ctrl.mobile.data_length = 30
		this.ctrl.mobile.zone_df_code = "DF_1304_1666846276198"
		this.ctrl.mobile.default_value = ""
		this.ctrl.mobile.is_memory_ctrl = ""
		this.ctrl.mobile.field_coordinates = ""
		this.ctrl.mobile.sub_details = ""
		this.ctrl.mobile.accept_char = ""
		this.ctrl.mobile.currency_format = ""
		this.ctrl.mobile.data_scale = ""
		this.ctrl.mobile.hide_label = false
		this.ctrl.mobile.depends_on = ""
		this.ctrl.mobile.placeholder = ""
		this.ctrl.mobile.dynamic_param = ""
		this.ctrl.mobile.style_code = ""
		this.ctrl.mobile.data_source = ""
		this.ctrl.mobile.image_association = ""
		this.ctrl.mobile.show = true
		this.ctrl.mobile.sub_content = "*"
		this.ctrl.mobile.required = true
		this.ctrl.mobile.vld_rules = []
		this.ctrl.mobile.targetcolumn_lower = "mobile"
		this.ctrl.mobile.disabled = false
		this.ctrl.mobile.view_name = "f_npss_merchant_ui"
		this.ctrl.mobile.ctrl_id = "npss_merchant_ui_mobile"
		this.ctrl.npss_merchant_ui_mobile = {}
		this.ctrl.npss_merchant_ui_mobile.onChangecomponent = new EventEmitter<any>()
	
		//Properties of proxy_type
		this.ctrl.proxy_type = {}
		this.ctrl.proxy_type.id = "RN31CN14RN4CN24"
		this.ctrl.proxy_type.desc = "Type"
		this.ctrl.proxy_type.visible = true
		this.ctrl.proxy_type.label_name = "Type"
		this.ctrl.proxy_type.df_code = "DF_1304_1666846276198"
		this.ctrl.proxy_type.df_description = "Column Group 1"
		this.ctrl.proxy_type.uictrl_code = "CBO"
		this.ctrl.proxy_type.target_column = "PROXY_TYPE"
		this.ctrl.proxy_type.data_type = "TEXT"
		this.ctrl.proxy_type.data_length = 50
		this.ctrl.proxy_type.zone_df_code = "DF_1304_1666846276198"
		this.ctrl.proxy_type.default_value = ""
		this.ctrl.proxy_type.is_memory_ctrl = ""
		this.ctrl.proxy_type.field_coordinates = ""
		this.ctrl.proxy_type.sub_details = ""
		this.ctrl.proxy_type.accept_char = ""
		this.ctrl.proxy_type.currency_format = ""
		this.ctrl.proxy_type.data_scale = ""
		this.ctrl.proxy_type.hide_label = false
		this.ctrl.proxy_type.depends_on = ""
		this.ctrl.proxy_type.placeholder = ""
		this.ctrl.proxy_type.dynamic_param = ""
		this.ctrl.proxy_type.style_code = ""
		this.ctrl.proxy_type.data_source = {"ds_code":"UDS_1304_1671512421204","ds_description":"NPSS Type SQL CDB","rows":[],"type":"DPS_TABLE","value_member":"CD_CODE","display_member":"CD_DESCRIPTION","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_NC_CODE_DESCRIPTIONS","context":"","filters":[{"filter_name":"Filter1","binding_name":"CD_CATEGORY","id":"DF_1671512556947","binding_value":"MERCHANT_PROXY_TYPE","source_name":"CD_CATEGORY","source_value":"MERCHANT_PROXY_TYPE","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter2","binding_name":"TENANT_ID","id":"DF_1671512556947","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"},{"filter_name":"Filter3","binding_name":"STATUS","id":"DF_1671512556947","binding_value":"APPROVED","source_name":"STATUS","source_value":"APPROVED","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"CD_CATEGORY","binding_value":"MERCHANT_PROXY_TYPE","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"MERCHANT_PROXY_TYPE"},{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"},{"operators":"=","data_type":"TEXT","binding_name":"STATUS","binding_value":"APPROVED","sort_order":3,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"APPROVED"}]},"query":"(CD_CATEGORY = MERCHANT_PROXY_TYPE AND TENANT_ID = SESSION_LEVEL.TENANT_ID AND STATUS = APPROVED)"},"sel_columns":[]}
		this.ctrl.proxy_type.image_association = ""
		this.ctrl.proxy_type.show = true
		this.ctrl.proxy_type.sub_content = ""
		this.ctrl.proxy_type.required = false
		this.ctrl.proxy_type.vld_rules = []
		this.ctrl.proxy_type.targetcolumn_lower = "proxy_type"
		this.ctrl.proxy_type.disabled = false
		this.ctrl.proxy_type.view_name = "f_npss_merchant_ui"
		this.ctrl.proxy_type.ctrl_id = "npss_merchant_ui_proxy_type"
		this.ctrl.npss_merchant_ui_proxy_type = {}
		this.ctrl.npss_merchant_ui_proxy_type.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_merchant_ui.proxy_type = {}
	
		//Properties of proxy_value
		this.ctrl.proxy_value = {}
		this.ctrl.proxy_value.id = "RN31CN14RN4CN25"
		this.ctrl.proxy_value.desc = "Value"
		this.ctrl.proxy_value.visible = true
		this.ctrl.proxy_value.label_name = "Value"
		this.ctrl.proxy_value.df_code = "DF_1304_1666846276198"
		this.ctrl.proxy_value.df_description = "Column Group 1"
		this.ctrl.proxy_value.uictrl_code = "TXT"
		this.ctrl.proxy_value.target_column = "PROXY_VALUE"
		this.ctrl.proxy_value.data_type = "TEXT"
		this.ctrl.proxy_value.data_length = 50
		this.ctrl.proxy_value.zone_df_code = "DF_1304_1666846276198"
		this.ctrl.proxy_value.default_value = ""
		this.ctrl.proxy_value.is_memory_ctrl = ""
		this.ctrl.proxy_value.field_coordinates = ""
		this.ctrl.proxy_value.sub_details = ""
		this.ctrl.proxy_value.accept_char = ""
		this.ctrl.proxy_value.currency_format = ""
		this.ctrl.proxy_value.data_scale = ""
		this.ctrl.proxy_value.hide_label = false
		this.ctrl.proxy_value.depends_on = ""
		this.ctrl.proxy_value.placeholder = ""
		this.ctrl.proxy_value.dynamic_param = ""
		this.ctrl.proxy_value.style_code = ""
		this.ctrl.proxy_value.data_source = ""
		this.ctrl.proxy_value.image_association = ""
		this.ctrl.proxy_value.show = true
		this.ctrl.proxy_value.sub_content = ""
		this.ctrl.proxy_value.required = false
		this.ctrl.proxy_value.vld_rules = []
		this.ctrl.proxy_value.targetcolumn_lower = "proxy_value"
		this.ctrl.proxy_value.disabled = false
		this.ctrl.proxy_value.view_name = "f_npss_merchant_ui"
		this.ctrl.proxy_value.ctrl_id = "npss_merchant_ui_proxy_value"
		this.ctrl.npss_merchant_ui_proxy_value = {}
		this.ctrl.npss_merchant_ui_proxy_value.onChangecomponent = new EventEmitter<any>()
	
		//Properties of channel_name
		this.ctrl.channel_name = {}
		this.ctrl.channel_name.id = "RN31CN14RN4CN26"
		this.ctrl.channel_name.desc = "Channel Name"
		this.ctrl.channel_name.visible = true
		this.ctrl.channel_name.label_name = "Channel Name"
		this.ctrl.channel_name.df_code = "DF_1304_1666846276198"
		this.ctrl.channel_name.df_description = "Column Group 1"
		this.ctrl.channel_name.uictrl_code = "TXT"
		this.ctrl.channel_name.target_column = "CHANNEL_NAME"
		this.ctrl.channel_name.data_type = "TEXT"
		this.ctrl.channel_name.data_length = 100
		this.ctrl.channel_name.zone_df_code = "DF_1304_1666846276198"
		this.ctrl.channel_name.default_value = ""
		this.ctrl.channel_name.is_memory_ctrl = ""
		this.ctrl.channel_name.field_coordinates = ""
		this.ctrl.channel_name.sub_details = ""
		this.ctrl.channel_name.accept_char = ""
		this.ctrl.channel_name.currency_format = ""
		this.ctrl.channel_name.data_scale = ""
		this.ctrl.channel_name.hide_label = false
		this.ctrl.channel_name.depends_on = ""
		this.ctrl.channel_name.placeholder = ""
		this.ctrl.channel_name.dynamic_param = ""
		this.ctrl.channel_name.style_code = ""
		this.ctrl.channel_name.data_source = ""
		this.ctrl.channel_name.image_association = ""
		this.ctrl.channel_name.show = true
		this.ctrl.channel_name.sub_content = ""
		this.ctrl.channel_name.required = false
		this.ctrl.channel_name.vld_rules = []
		this.ctrl.channel_name.targetcolumn_lower = "channel_name"
		this.ctrl.channel_name.disabled = false
		this.ctrl.channel_name.view_name = "f_npss_merchant_ui"
		this.ctrl.channel_name.ctrl_id = "npss_merchant_ui_channel_name"
		this.ctrl.npss_merchant_ui_channel_name = {}
		this.ctrl.npss_merchant_ui_channel_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of merchant_tag
		this.ctrl.merchant_tag = {}
		this.ctrl.merchant_tag.id = "RN31CN14RN4CN27"
		this.ctrl.merchant_tag.desc = "Merchant Tag"
		this.ctrl.merchant_tag.visible = true
		this.ctrl.merchant_tag.label_name = "Merchant Tag"
		this.ctrl.merchant_tag.df_code = "DF_1304_1666846276198"
		this.ctrl.merchant_tag.df_description = "Column Group 1"
		this.ctrl.merchant_tag.uictrl_code = "TXT"
		this.ctrl.merchant_tag.target_column = "MERCHANT_TAG"
		this.ctrl.merchant_tag.data_type = "TEXT"
		this.ctrl.merchant_tag.data_length = 8
		this.ctrl.merchant_tag.zone_df_code = "DF_1304_1666846276198"
		this.ctrl.merchant_tag.default_value = ""
		this.ctrl.merchant_tag.is_memory_ctrl = ""
		this.ctrl.merchant_tag.field_coordinates = ""
		this.ctrl.merchant_tag.sub_details = ""
		this.ctrl.merchant_tag.accept_char = ""
		this.ctrl.merchant_tag.currency_format = ""
		this.ctrl.merchant_tag.data_scale = ""
		this.ctrl.merchant_tag.hide_label = false
		this.ctrl.merchant_tag.depends_on = ""
		this.ctrl.merchant_tag.placeholder = ""
		this.ctrl.merchant_tag.dynamic_param = ""
		this.ctrl.merchant_tag.style_code = ""
		this.ctrl.merchant_tag.data_source = ""
		this.ctrl.merchant_tag.image_association = ""
		this.ctrl.merchant_tag.show = true
		this.ctrl.merchant_tag.sub_content = ""
		this.ctrl.merchant_tag.required = false
		this.ctrl.merchant_tag.vld_rules = []
		this.ctrl.merchant_tag.targetcolumn_lower = "merchant_tag"
		this.ctrl.merchant_tag.disabled = false
		this.ctrl.merchant_tag.view_name = "f_npss_merchant_ui"
		this.ctrl.merchant_tag.ctrl_id = "npss_merchant_ui_merchant_tag"
		this.ctrl.npss_merchant_ui_merchant_tag = {}
		this.ctrl.npss_merchant_ui_merchant_tag.onChangecomponent = new EventEmitter<any>()
	
		//Properties of logo
		this.ctrl.logo = {}
		this.ctrl.logo.id = "RN21CN15"
		this.ctrl.logo.desc = "Logo"
		this.ctrl.logo.visible = false
		this.ctrl.logo.label_name = "Logo"
		this.ctrl.logo.df_code = "DF_1304_1666846276198"
		this.ctrl.logo.df_description = "Column Group 1"
		this.ctrl.logo.uictrl_code = "IMG_BRW"
		this.ctrl.logo.target_column = "LOGO"
		this.ctrl.logo.data_type = "TEXT"
		this.ctrl.logo.data_length = 4000
		this.ctrl.logo.zone_df_code = "DF_1304_1666846276198"
		this.ctrl.logo.default_value = ""
		this.ctrl.logo.is_memory_ctrl = ""
		this.ctrl.logo.field_coordinates = ""
		this.ctrl.logo.sub_details = ""
		this.ctrl.logo.accept_char = ""
		this.ctrl.logo.currency_format = ""
		this.ctrl.logo.data_scale = ""
		this.ctrl.logo.hide_label = false
		this.ctrl.logo.depends_on = ""
		this.ctrl.logo.placeholder = ""
		this.ctrl.logo.dynamic_param = ""
		this.ctrl.logo.style_code = ""
		this.ctrl.logo.data_source = ""
		this.ctrl.logo.image_association = ""
		this.ctrl.logo.show = true
		this.ctrl.logo.sub_content = ""
		this.ctrl.logo.required = false
		this.ctrl.logo.vld_rules = []
		this.ctrl.logo.targetcolumn_lower = "logo"
		this.ctrl.logo.disabled = false
		this.ctrl.logo.view_name = "f_npss_merchant_ui"
		this.ctrl.logo.ctrl_id = "npss_merchant_ui_logo"
		this.ctrl.npss_merchant_ui_logo = {}
		this.ctrl.npss_merchant_ui_logo.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_merchant_ui.model = {"CHANNEL_ID":"","BANKUSERID":"","MERCHANT_NAME":"","SURNAME":"","DENOMINATION":"","VAT_NUMBER":"","MCC":"","MOBILE":"","PROXY_TYPE":"","PROXY_VALUE":"","CHANNEL_NAME":"","MERCHANT_TAG":"","LOGO":""}
		this.screen_instance[this.comp_id].f_npss_merchant_ui.Meta = [{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"CHANNEL_ID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"BANKUSERID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"MERCHANT_NAME"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"SURNAME"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DENOMINATION"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"VAT_NUMBER"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"MCC"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"MOBILE"},{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROXY_TYPE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROXY_VALUE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CHANNEL_NAME"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"MERCHANT_TAG"},{"CTLR_CODE":"IMG_BRW","DATA_TYPE":"TEXT","TARGET_COLUMN":"LOGO"}]
		this.screen_instance[this.comp_id].f_npss_merchant_ui.dt_code = "dt_1304_1666846074129"
		this.screen_instance[this.comp_id].f_npss_merchant_ui.dtt_code = "dtt_1304_1666846129395"
		this.screen_instance[this.comp_id].f_npss_merchant_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_merchant_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_merchant_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_merchant_ui[control][property] = value;
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
    