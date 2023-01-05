/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27703 
Modified By     : Admin 
Modified Date   : 2023-Jan-05 12:50 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_p2p_payments
Form Name       : NPSS P2P Retrive contacct--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_p2p_retrive_contacct',
  templateUrl: './f_npss_p2p_retrive_contacct.component.html',
  styleUrls: ['./f_npss_p2p_retrive_contacct.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_p2p_retrive_contacctComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_p2p_retrive_contacct') form;
  @ViewChild('npss_p2p_retrive_contacct_channel_id') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1666846042955"
	dtt_code : string = "dtt_1304_1666846082411"

  
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
		this.ctrl.channel_id.id = "RN01CN1"
		this.ctrl.channel_id.desc = "Channel ID"
		this.ctrl.channel_id.visible = true
		this.ctrl.channel_id.label_name = "Channel ID"
		this.ctrl.channel_id.df_code = "DF_1304_1666846148448"
		this.ctrl.channel_id.df_description = "Customer"
		this.ctrl.channel_id.uictrl_code = "CBO"
		this.ctrl.channel_id.target_column = "CHANNEL_ID"
		this.ctrl.channel_id.data_type = "TEXT"
		this.ctrl.channel_id.data_length = 128
		this.ctrl.channel_id.zone_df_code = "DF_1304_1666846148448"
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
		this.ctrl.channel_id.view_name = "f_npss_p2p_retrive_contacct"
		this.ctrl.channel_id.ctrl_id = "npss_p2p_retrive_contacct_channel_id"
		this.ctrl.npss_p2p_retrive_contacct_channel_id = {}
		this.ctrl.npss_p2p_retrive_contacct_channel_id.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_p2p_retrive_contacct.channel_id = {}
	
		//Properties of bankuserid
		this.ctrl.bankuserid = {}
		this.ctrl.bankuserid.id = "RN01CN3"
		this.ctrl.bankuserid.desc = "Payer Bank User ID"
		this.ctrl.bankuserid.visible = true
		this.ctrl.bankuserid.label_name = "Payer Bank User ID"
		this.ctrl.bankuserid.df_code = "DF_1304_1666846148448"
		this.ctrl.bankuserid.df_description = "Customer"
		this.ctrl.bankuserid.uictrl_code = "TXT"
		this.ctrl.bankuserid.target_column = "BANKUSERID"
		this.ctrl.bankuserid.data_type = "TEXT"
		this.ctrl.bankuserid.data_length = 16
		this.ctrl.bankuserid.zone_df_code = "DF_1304_1666846148448"
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
		this.ctrl.bankuserid.view_name = "f_npss_p2p_retrive_contacct"
		this.ctrl.bankuserid.ctrl_id = "npss_p2p_retrive_contacct_bankuserid"
		this.ctrl.npss_p2p_retrive_contacct_bankuserid = {}
		this.ctrl.npss_p2p_retrive_contacct_bankuserid.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory23
		this.ctrl.memory23 = {}
		this.ctrl.memory23.id = "RN51CN11"
		this.ctrl.memory23.desc = "Bank Account ID"
		this.ctrl.memory23.visible = true
		this.ctrl.memory23.label_name = "Bank Account ID"
		this.ctrl.memory23.df_code = "DF_1304_1666846148448"
		this.ctrl.memory23.df_description = "Customer"
		this.ctrl.memory23.uictrl_code = "TXT"
		this.ctrl.memory23.target_column = "memory23"
		this.ctrl.memory23.data_type = "TEXT"
		this.ctrl.memory23.data_length = 0
		this.ctrl.memory23.zone_df_code = "DF_1304_1666846148448"
		this.ctrl.memory23.default_value = ""
		this.ctrl.memory23.is_memory_ctrl = "Y"
		this.ctrl.memory23.field_coordinates = ""
		this.ctrl.memory23.sub_details = ""
		this.ctrl.memory23.accept_char = ""
		this.ctrl.memory23.currency_format = ""
		this.ctrl.memory23.data_scale = ""
		this.ctrl.memory23.hide_label = false
		this.ctrl.memory23.depends_on = ""
		this.ctrl.memory23.placeholder = ""
		this.ctrl.memory23.dynamic_param = ""
		this.ctrl.memory23.style_code = ""
		this.ctrl.memory23.data_source = ""
		this.ctrl.memory23.image_association = ""
		this.ctrl.memory23.show = true
		this.ctrl.memory23.sub_content = ""
		this.ctrl.memory23.required = false
		this.ctrl.memory23.vld_rules = []
		this.ctrl.memory23.targetcolumn_lower = "memory23"
		this.ctrl.memory23.disabled = false
		this.ctrl.memory23.view_name = "f_npss_p2p_retrive_contacct"
		this.ctrl.memory23.ctrl_id = "npss_p2p_retrive_contacct_memory23"
		this.ctrl.npss_p2p_retrive_contacct_memory23 = {}
		this.ctrl.npss_p2p_retrive_contacct_memory23.onChangecomponent = new EventEmitter<any>()
	
		//Properties of mobile
		this.ctrl.mobile = {}
		this.ctrl.mobile.id = "RN21CN5"
		this.ctrl.mobile.desc = "Payee Mobile Number"
		this.ctrl.mobile.visible = true
		this.ctrl.mobile.label_name = "Payee Mobile Number"
		this.ctrl.mobile.df_code = "DF_1304_1666846148448"
		this.ctrl.mobile.df_description = "Customer"
		this.ctrl.mobile.uictrl_code = "TXT"
		this.ctrl.mobile.target_column = "MOBILE"
		this.ctrl.mobile.data_type = "TEXT"
		this.ctrl.mobile.data_length = 30
		this.ctrl.mobile.zone_df_code = "DF_1304_1666846148448"
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
		this.ctrl.mobile.view_name = "f_npss_p2p_retrive_contacct"
		this.ctrl.mobile.ctrl_id = "npss_p2p_retrive_contacct_mobile"
		this.ctrl.npss_p2p_retrive_contacct_mobile = {}
		this.ctrl.npss_p2p_retrive_contacct_mobile.onChangecomponent = new EventEmitter<any>()
	
		//Properties of proxy_type
		this.ctrl.proxy_type = {}
		this.ctrl.proxy_type.id = "RN11CN4"
		this.ctrl.proxy_type.desc = "Payee Proxy Type"
		this.ctrl.proxy_type.visible = true
		this.ctrl.proxy_type.label_name = "Payee Proxy Type"
		this.ctrl.proxy_type.df_code = "DF_1304_1666846148448"
		this.ctrl.proxy_type.df_description = "Customer"
		this.ctrl.proxy_type.uictrl_code = "CBO"
		this.ctrl.proxy_type.target_column = "PROXY_TYPE"
		this.ctrl.proxy_type.data_type = "TEXT"
		this.ctrl.proxy_type.data_length = 50
		this.ctrl.proxy_type.zone_df_code = "DF_1304_1666846148448"
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
		this.ctrl.proxy_type.data_source = {"ds_code":"UDS_1304_1671512109095","ds_description":"NPSS Cust Proxy Type CDB","rows":[],"type":"DPS_TABLE","value_member":"CD_CODE","display_member":"CD_DESCRIPTION","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_NC_CODE_DESCRIPTIONS","context":"","filters":[{"filter_name":"Filter1","binding_name":"CD_CATEGORY","id":"DF_1671513401875","binding_value":"CUSTOMER_PROXY_TYPE","source_name":"CD_CATEGORY","source_value":"CUSTOMER_PROXY_TYPE","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter2","binding_name":"STATUS","id":"DF_1671513401875","binding_value":"APPROVED","source_name":"STATUS","source_value":"APPROVED","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter3","binding_name":"TENANT_ID","id":"DF_1671513401875","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"CD_CATEGORY","binding_value":"CUSTOMER_PROXY_TYPE","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"CUSTOMER_PROXY_TYPE"},{"operators":"=","data_type":"TEXT","binding_name":"STATUS","binding_value":"APPROVED","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"APPROVED"},{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":3,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"}]},"query":"(CD_CATEGORY = CUSTOMER_PROXY_TYPE AND STATUS = APPROVED AND TENANT_ID = SESSION_LEVEL.TENANT_ID)"},"sel_columns":[]}
		this.ctrl.proxy_type.image_association = ""
		this.ctrl.proxy_type.show = true
		this.ctrl.proxy_type.sub_content = ""
		this.ctrl.proxy_type.required = false
		this.ctrl.proxy_type.vld_rules = []
		this.ctrl.proxy_type.targetcolumn_lower = "proxy_type"
		this.ctrl.proxy_type.disabled = false
		this.ctrl.proxy_type.view_name = "f_npss_p2p_retrive_contacct"
		this.ctrl.proxy_type.ctrl_id = "npss_p2p_retrive_contacct_proxy_type"
		this.ctrl.npss_p2p_retrive_contacct_proxy_type = {}
		this.ctrl.npss_p2p_retrive_contacct_proxy_type.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_p2p_retrive_contacct.proxy_type = {}
	
		//Properties of proxy_value
		this.ctrl.proxy_value = {}
		this.ctrl.proxy_value.id = "RN11CN6"
		this.ctrl.proxy_value.desc = "Payee Proxy Value"
		this.ctrl.proxy_value.visible = true
		this.ctrl.proxy_value.label_name = "Payee Proxy Value"
		this.ctrl.proxy_value.df_code = "DF_1304_1666846148448"
		this.ctrl.proxy_value.df_description = "Customer"
		this.ctrl.proxy_value.uictrl_code = "TXT"
		this.ctrl.proxy_value.target_column = "PROXY_VALUE"
		this.ctrl.proxy_value.data_type = "TEXT"
		this.ctrl.proxy_value.data_length = 50
		this.ctrl.proxy_value.zone_df_code = "DF_1304_1666846148448"
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
		this.ctrl.proxy_value.view_name = "f_npss_p2p_retrive_contacct"
		this.ctrl.proxy_value.ctrl_id = "npss_p2p_retrive_contacct_proxy_value"
		this.ctrl.npss_p2p_retrive_contacct_proxy_value = {}
		this.ctrl.npss_p2p_retrive_contacct_proxy_value.onChangecomponent = new EventEmitter<any>()
	
		//Properties of customer_name
		this.ctrl.customer_name = {}
		this.ctrl.customer_name.id = "RN21CN7"
		this.ctrl.customer_name.desc = "Customer Name"
		this.ctrl.customer_name.visible = true
		this.ctrl.customer_name.label_name = "Customer Name"
		this.ctrl.customer_name.df_code = "DF_1304_1666846148448"
		this.ctrl.customer_name.df_description = "Customer"
		this.ctrl.customer_name.uictrl_code = "TXT"
		this.ctrl.customer_name.target_column = "CUSTOMER_NAME"
		this.ctrl.customer_name.data_type = "TEXT"
		this.ctrl.customer_name.data_length = 50
		this.ctrl.customer_name.zone_df_code = "DF_1304_1666846148448"
		this.ctrl.customer_name.default_value = ""
		this.ctrl.customer_name.is_memory_ctrl = ""
		this.ctrl.customer_name.field_coordinates = ""
		this.ctrl.customer_name.sub_details = ""
		this.ctrl.customer_name.accept_char = ""
		this.ctrl.customer_name.currency_format = ""
		this.ctrl.customer_name.data_scale = ""
		this.ctrl.customer_name.hide_label = false
		this.ctrl.customer_name.depends_on = ""
		this.ctrl.customer_name.placeholder = ""
		this.ctrl.customer_name.dynamic_param = ""
		this.ctrl.customer_name.style_code = ""
		this.ctrl.customer_name.data_source = ""
		this.ctrl.customer_name.image_association = ""
		this.ctrl.customer_name.show = true
		this.ctrl.customer_name.sub_content = "*"
		this.ctrl.customer_name.required = true
		this.ctrl.customer_name.vld_rules = []
		this.ctrl.customer_name.targetcolumn_lower = "customer_name"
		this.ctrl.customer_name.disabled = false
		this.ctrl.customer_name.view_name = "f_npss_p2p_retrive_contacct"
		this.ctrl.customer_name.ctrl_id = "npss_p2p_retrive_contacct_customer_name"
		this.ctrl.npss_p2p_retrive_contacct_customer_name = {}
		this.ctrl.npss_p2p_retrive_contacct_customer_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory22
		this.ctrl.memory22 = {}
		this.ctrl.memory22.id = "RN31CN8"
		this.ctrl.memory22.desc = "Currency"
		this.ctrl.memory22.visible = true
		this.ctrl.memory22.label_name = "Currency"
		this.ctrl.memory22.df_code = "DF_1304_1666846148448"
		this.ctrl.memory22.df_description = "Customer"
		this.ctrl.memory22.uictrl_code = "TXT"
		this.ctrl.memory22.target_column = "memory22"
		this.ctrl.memory22.data_type = "TEXT"
		this.ctrl.memory22.data_length = 0
		this.ctrl.memory22.zone_df_code = "DF_1304_1666846148448"
		this.ctrl.memory22.default_value = "AED"
		this.ctrl.memory22.is_memory_ctrl = "Y"
		this.ctrl.memory22.field_coordinates = ""
		this.ctrl.memory22.sub_details = ""
		this.ctrl.memory22.accept_char = ""
		this.ctrl.memory22.currency_format = ""
		this.ctrl.memory22.data_scale = ""
		this.ctrl.memory22.hide_label = false
		this.ctrl.memory22.depends_on = ""
		this.ctrl.memory22.placeholder = ""
		this.ctrl.memory22.dynamic_param = ""
		this.ctrl.memory22.style_code = ""
		this.ctrl.memory22.data_source = ""
		this.ctrl.memory22.image_association = ""
		this.ctrl.memory22.show = true
		this.ctrl.memory22.sub_content = ""
		this.ctrl.memory22.required = false
		this.ctrl.memory22.vld_rules = []
		this.ctrl.memory22.targetcolumn_lower = "memory22"
		this.ctrl.memory22.disabled = false
		this.ctrl.memory22.view_name = "f_npss_p2p_retrive_contacct"
		this.ctrl.memory22.ctrl_id = "npss_p2p_retrive_contacct_memory22"
		this.ctrl.npss_p2p_retrive_contacct_memory22 = {}
		this.ctrl.npss_p2p_retrive_contacct_memory22.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory21
		this.ctrl.memory21 = {}
		this.ctrl.memory21.id = "RN31CN7"
		this.ctrl.memory21.desc = "Amount"
		this.ctrl.memory21.visible = true
		this.ctrl.memory21.label_name = "Amount"
		this.ctrl.memory21.df_code = "DF_1304_1666846148448"
		this.ctrl.memory21.df_description = "Customer"
		this.ctrl.memory21.uictrl_code = "CUR"
		this.ctrl.memory21.target_column = "memory21"
		this.ctrl.memory21.data_type = "NUMBER"
		this.ctrl.memory21.data_length = 0
		this.ctrl.memory21.zone_df_code = "DF_1304_1666846148448"
		this.ctrl.memory21.default_value = ""
		this.ctrl.memory21.is_memory_ctrl = "Y"
		this.ctrl.memory21.field_coordinates = ""
		this.ctrl.memory21.sub_details = ""
		this.ctrl.memory21.accept_char = ""
		this.ctrl.memory21.currency_format = ""
		this.ctrl.memory21.data_scale = ""
		this.ctrl.memory21.hide_label = false
		this.ctrl.memory21.depends_on = ""
		this.ctrl.memory21.placeholder = ""
		this.ctrl.memory21.dynamic_param = ""
		this.ctrl.memory21.style_code = ""
		this.ctrl.memory21.data_source = ""
		this.ctrl.memory21.image_association = ""
		this.ctrl.memory21.show = true
		this.ctrl.memory21.sub_content = ""
		this.ctrl.memory21.required = false
		this.ctrl.memory21.vld_rules = []
		this.ctrl.memory21.targetcolumn_lower = "memory21"
		this.ctrl.memory21.disabled = false
		this.ctrl.memory21.view_name = "f_npss_p2p_retrive_contacct"
		this.ctrl.memory21.ctrl_id = "npss_p2p_retrive_contacct_memory21"
		this.ctrl.npss_p2p_retrive_contacct_memory21 = {}
		this.ctrl.npss_p2p_retrive_contacct_memory21.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_p2p_retrive_contacct.model = {"CHANNEL_ID":"","BANKUSERID":"","MEMORY23":"","MOBILE":"","PROXY_TYPE":"","PROXY_VALUE":"","CUSTOMER_NAME":"","MEMORY22":"AED","MEMORY21":""}
		this.screen_instance[this.comp_id].f_npss_p2p_retrive_contacct.Meta = [{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"CHANNEL_ID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"BANKUSERID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"MOBILE"},{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROXY_TYPE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROXY_VALUE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CUSTOMER_NAME"}]
		this.screen_instance[this.comp_id].f_npss_p2p_retrive_contacct.dt_code = "dt_1304_1666846042955"
		this.screen_instance[this.comp_id].f_npss_p2p_retrive_contacct.dtt_code = "dtt_1304_1666846082411"
		this.screen_instance[this.comp_id].f_npss_p2p_retrive_contacct.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_p2p_retrive_contacct[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_p2p_retrive_contacct[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_p2p_retrive_contacct[control][property] = value;
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
    