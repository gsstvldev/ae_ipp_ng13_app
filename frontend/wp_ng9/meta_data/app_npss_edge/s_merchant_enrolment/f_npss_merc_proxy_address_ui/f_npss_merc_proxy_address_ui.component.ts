/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26375 
Modified By     : Admin 
Modified Date   : 2022-Oct-11 7:10 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_enrolment
Form Name       : NPSS Merc Proxy Address UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_merc_proxy_address_ui',
  templateUrl: './f_npss_merc_proxy_address_ui.component.html',
  styleUrls: ['./f_npss_merc_proxy_address_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_merc_proxy_address_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_merc_proxy_address_ui') form;
  @ViewChild('npss_merc_proxy_address_ui_category') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665384579126"
	dtt_code : string = "dtt_1304_1665384653050"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of category
		this.ctrl.category = {}
		this.ctrl.category.id = "RN01CN1"
		this.ctrl.category.desc = "Type"
		this.ctrl.category.visible = true
		this.ctrl.category.label_name = "Type"
		this.ctrl.category.df_code = "DF_1304_1665384730214"
		this.ctrl.category.df_description = "Column Group 1"
		this.ctrl.category.uictrl_code = "CBO"
		this.ctrl.category.target_column = "CATEGORY"
		this.ctrl.category.data_type = "TEXT"
		this.ctrl.category.data_length = 16
		this.ctrl.category.zone_df_code = "DF_1304_1665384730214"
		this.ctrl.category.default_value = ""
		this.ctrl.category.is_memory_ctrl = ""
		this.ctrl.category.field_coordinates = ""
		this.ctrl.category.sub_details = ""
		this.ctrl.category.accept_char = ""
		this.ctrl.category.currency_format = ""
		this.ctrl.category.data_scale = ""
		this.ctrl.category.hide_label = false
		this.ctrl.category.depends_on = ""
		this.ctrl.category.placeholder = ""
		this.ctrl.category.dynamic_param = ""
		this.ctrl.category.style_code = ""
		this.ctrl.category.data_source = {"ds_code":"UDS_1304_1665392732834","ds_description":"NPSS Category CDB","rows":[],"type":"DPS_TABLE","value_member":"CD_CODE","display_member":"CD_DESCRIPTION","first_record_display":"Select","column_list":"","order_by":"SORT_ORDER ASC","target_table":"CORE_CODE_DESCRIPTIONS","context":"","filters":[{"filter_name":"Filter1","binding_name":"CD_CATEGORY","id":"DF_1665392833793","binding_value":"NPSS_CATEGORY","source_name":"CD_CATEGORY","source_value":"NPSS_CATEGORY","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter2","binding_name":"TENANT_ID","id":"DF_1665392833793","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"CD_CATEGORY","binding_value":"NPSS_CATEGORY","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"NPSS_CATEGORY"},{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"}]},"query":"(CD_CATEGORY = NPSS_CATEGORY AND TENANT_ID = SESSION_LEVEL.TENANT_ID)"},"sel_columns":[]}
		this.ctrl.category.image_association = ""
		this.ctrl.category.show = true
		this.ctrl.category.sub_content = ""
		this.ctrl.category.required = false
		this.ctrl.category.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Select the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.category.targetcolumn_lower = "category"
		this.ctrl.category.disabled = false
		this.ctrl.category.view_name = "f_npss_merc_proxy_address_ui"
		this.ctrl.category.ctrl_id = "npss_merc_proxy_address_ui_category"
		this.ctrl.npss_merc_proxy_address_ui_category = {}
		this.ctrl.npss_merc_proxy_address_ui_category.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_merc_proxy_address_ui.category = {}
	
		//Properties of professional
		this.ctrl.professional = {}
		this.ctrl.professional.id = "RN01CN2"
		this.ctrl.professional.desc = "Professional"
		this.ctrl.professional.visible = true
		this.ctrl.professional.label_name = "Professional"
		this.ctrl.professional.df_code = "DF_1304_1665384730214"
		this.ctrl.professional.df_description = "Column Group 1"
		this.ctrl.professional.uictrl_code = "TXT"
		this.ctrl.professional.target_column = "PROFESSIONAL"
		this.ctrl.professional.data_type = "TEXT"
		this.ctrl.professional.data_length = 16
		this.ctrl.professional.zone_df_code = "DF_1304_1665384730214"
		this.ctrl.professional.default_value = ""
		this.ctrl.professional.is_memory_ctrl = ""
		this.ctrl.professional.field_coordinates = ""
		this.ctrl.professional.sub_details = ""
		this.ctrl.professional.accept_char = ""
		this.ctrl.professional.currency_format = ""
		this.ctrl.professional.data_scale = ""
		this.ctrl.professional.hide_label = false
		this.ctrl.professional.depends_on = "CATEGORY:Professional"
		this.ctrl.professional.placeholder = ""
		this.ctrl.professional.dynamic_param = ""
		this.ctrl.professional.style_code = ""
		this.ctrl.professional.data_source = ""
		this.ctrl.professional.image_association = ""
		this.ctrl.professional.show = false
		this.ctrl.professional.sub_content = ""
		this.ctrl.professional.required = false
		this.ctrl.professional.vld_rules = []
		this.ctrl.professional.targetcolumn_lower = "professional"
		this.ctrl.professional.disabled = false
		this.ctrl.professional.view_name = "f_npss_merc_proxy_address_ui"
		this.ctrl.professional.ctrl_id = "npss_merc_proxy_address_ui_professional"
		this.ctrl.npss_merc_proxy_address_ui_professional = {}
		this.ctrl.npss_merc_proxy_address_ui_professional.onChangecomponent = new EventEmitter<any>()
	
		//Properties of merc_category_code
		this.ctrl.merc_category_code = {}
		this.ctrl.merc_category_code.id = "RN01CN3"
		this.ctrl.merc_category_code.desc = "Merchant Category Code"
		this.ctrl.merc_category_code.visible = true
		this.ctrl.merc_category_code.label_name = "Merchant Category Code"
		this.ctrl.merc_category_code.df_code = "DF_1304_1665384730214"
		this.ctrl.merc_category_code.df_description = "Column Group 1"
		this.ctrl.merc_category_code.uictrl_code = "TXT"
		this.ctrl.merc_category_code.target_column = "MERC_CATEGORY_CODE"
		this.ctrl.merc_category_code.data_type = "TEXT"
		this.ctrl.merc_category_code.data_length = 32
		this.ctrl.merc_category_code.zone_df_code = "DF_1304_1665384730214"
		this.ctrl.merc_category_code.default_value = ""
		this.ctrl.merc_category_code.is_memory_ctrl = ""
		this.ctrl.merc_category_code.field_coordinates = ""
		this.ctrl.merc_category_code.sub_details = ""
		this.ctrl.merc_category_code.accept_char = ""
		this.ctrl.merc_category_code.currency_format = ""
		this.ctrl.merc_category_code.data_scale = ""
		this.ctrl.merc_category_code.hide_label = false
		this.ctrl.merc_category_code.depends_on = "CATEGORY:Merchant"
		this.ctrl.merc_category_code.placeholder = ""
		this.ctrl.merc_category_code.dynamic_param = ""
		this.ctrl.merc_category_code.style_code = ""
		this.ctrl.merc_category_code.data_source = ""
		this.ctrl.merc_category_code.image_association = ""
		this.ctrl.merc_category_code.show = false
		this.ctrl.merc_category_code.sub_content = ""
		this.ctrl.merc_category_code.required = false
		this.ctrl.merc_category_code.vld_rules = []
		this.ctrl.merc_category_code.targetcolumn_lower = "merc_category_code"
		this.ctrl.merc_category_code.disabled = false
		this.ctrl.merc_category_code.view_name = "f_npss_merc_proxy_address_ui"
		this.ctrl.merc_category_code.ctrl_id = "npss_merc_proxy_address_ui_merc_category_code"
		this.ctrl.npss_merc_proxy_address_ui_merc_category_code = {}
		this.ctrl.npss_merc_proxy_address_ui_merc_category_code.onChangecomponent = new EventEmitter<any>()
	
		//Properties of merchant
		this.ctrl.merchant = {}
		this.ctrl.merchant.id = "RN01CN4"
		this.ctrl.merchant.desc = "Merchant"
		this.ctrl.merchant.visible = true
		this.ctrl.merchant.label_name = "Merchant"
		this.ctrl.merchant.df_code = "DF_1304_1665384730214"
		this.ctrl.merchant.df_description = "Column Group 1"
		this.ctrl.merchant.uictrl_code = "TXT"
		this.ctrl.merchant.target_column = "MERCHANT"
		this.ctrl.merchant.data_type = "TEXT"
		this.ctrl.merchant.data_length = 64
		this.ctrl.merchant.zone_df_code = "DF_1304_1665384730214"
		this.ctrl.merchant.default_value = ""
		this.ctrl.merchant.is_memory_ctrl = ""
		this.ctrl.merchant.field_coordinates = ""
		this.ctrl.merchant.sub_details = ""
		this.ctrl.merchant.accept_char = ""
		this.ctrl.merchant.currency_format = ""
		this.ctrl.merchant.data_scale = ""
		this.ctrl.merchant.hide_label = false
		this.ctrl.merchant.depends_on = "CATEGORY:Merchant"
		this.ctrl.merchant.placeholder = ""
		this.ctrl.merchant.dynamic_param = ""
		this.ctrl.merchant.style_code = ""
		this.ctrl.merchant.data_source = ""
		this.ctrl.merchant.image_association = ""
		this.ctrl.merchant.show = false
		this.ctrl.merchant.sub_content = ""
		this.ctrl.merchant.required = false
		this.ctrl.merchant.vld_rules = []
		this.ctrl.merchant.targetcolumn_lower = "merchant"
		this.ctrl.merchant.disabled = false
		this.ctrl.merchant.view_name = "f_npss_merc_proxy_address_ui"
		this.ctrl.merchant.ctrl_id = "npss_merc_proxy_address_ui_merchant"
		this.ctrl.npss_merc_proxy_address_ui_merchant = {}
		this.ctrl.npss_merc_proxy_address_ui_merchant.onChangecomponent = new EventEmitter<any>()
	
		//Properties of merchant_tag
		this.ctrl.merchant_tag = {}
		this.ctrl.merchant_tag.id = "RN01CN5"
		this.ctrl.merchant_tag.desc = "Merchant Tag"
		this.ctrl.merchant_tag.visible = true
		this.ctrl.merchant_tag.label_name = "Merchant Tag"
		this.ctrl.merchant_tag.df_code = "DF_1304_1665384730214"
		this.ctrl.merchant_tag.df_description = "Column Group 1"
		this.ctrl.merchant_tag.uictrl_code = "TXT"
		this.ctrl.merchant_tag.target_column = "MERCHANT_TAG"
		this.ctrl.merchant_tag.data_type = "TEXT"
		this.ctrl.merchant_tag.data_length = 16
		this.ctrl.merchant_tag.zone_df_code = "DF_1304_1665384730214"
		this.ctrl.merchant_tag.default_value = ""
		this.ctrl.merchant_tag.is_memory_ctrl = ""
		this.ctrl.merchant_tag.field_coordinates = ""
		this.ctrl.merchant_tag.sub_details = ""
		this.ctrl.merchant_tag.accept_char = ""
		this.ctrl.merchant_tag.currency_format = ""
		this.ctrl.merchant_tag.data_scale = ""
		this.ctrl.merchant_tag.hide_label = false
		this.ctrl.merchant_tag.depends_on = "CATEGORY:Merchant"
		this.ctrl.merchant_tag.placeholder = ""
		this.ctrl.merchant_tag.dynamic_param = ""
		this.ctrl.merchant_tag.style_code = ""
		this.ctrl.merchant_tag.data_source = ""
		this.ctrl.merchant_tag.image_association = ""
		this.ctrl.merchant_tag.show = false
		this.ctrl.merchant_tag.sub_content = ""
		this.ctrl.merchant_tag.required = false
		this.ctrl.merchant_tag.vld_rules = []
		this.ctrl.merchant_tag.targetcolumn_lower = "merchant_tag"
		this.ctrl.merchant_tag.disabled = false
		this.ctrl.merchant_tag.view_name = "f_npss_merc_proxy_address_ui"
		this.ctrl.merchant_tag.ctrl_id = "npss_merc_proxy_address_ui_merchant_tag"
		this.ctrl.npss_merc_proxy_address_ui_merchant_tag = {}
		this.ctrl.npss_merc_proxy_address_ui_merchant_tag.onChangecomponent = new EventEmitter<any>()
	
		//Properties of denomination
		this.ctrl.denomination = {}
		this.ctrl.denomination.id = "RN11CN6"
		this.ctrl.denomination.desc = "Denomination"
		this.ctrl.denomination.visible = true
		this.ctrl.denomination.label_name = "Denomination"
		this.ctrl.denomination.df_code = "DF_1304_1665384730214"
		this.ctrl.denomination.df_description = "Column Group 1"
		this.ctrl.denomination.uictrl_code = "TXT"
		this.ctrl.denomination.target_column = "DENOMINATION"
		this.ctrl.denomination.data_type = "TEXT"
		this.ctrl.denomination.data_length = 64
		this.ctrl.denomination.zone_df_code = "DF_1304_1665384730214"
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
		this.ctrl.denomination.sub_content = ""
		this.ctrl.denomination.required = false
		this.ctrl.denomination.vld_rules = []
		this.ctrl.denomination.targetcolumn_lower = "denomination"
		this.ctrl.denomination.disabled = false
		this.ctrl.denomination.view_name = "f_npss_merc_proxy_address_ui"
		this.ctrl.denomination.ctrl_id = "npss_merc_proxy_address_ui_denomination"
		this.ctrl.npss_merc_proxy_address_ui_denomination = {}
		this.ctrl.npss_merc_proxy_address_ui_denomination.onChangecomponent = new EventEmitter<any>()
	
		//Properties of iban
		this.ctrl.iban = {}
		this.ctrl.iban.id = "RN11CN7"
		this.ctrl.iban.desc = "IBAN"
		this.ctrl.iban.visible = true
		this.ctrl.iban.label_name = "IBAN"
		this.ctrl.iban.df_code = "DF_1304_1665384730214"
		this.ctrl.iban.df_description = "Column Group 1"
		this.ctrl.iban.uictrl_code = "TXT"
		this.ctrl.iban.target_column = "IBAN"
		this.ctrl.iban.data_type = "TEXT"
		this.ctrl.iban.data_length = 32
		this.ctrl.iban.zone_df_code = "DF_1304_1665384730214"
		this.ctrl.iban.default_value = ""
		this.ctrl.iban.is_memory_ctrl = ""
		this.ctrl.iban.field_coordinates = ""
		this.ctrl.iban.sub_details = ""
		this.ctrl.iban.accept_char = ""
		this.ctrl.iban.currency_format = ""
		this.ctrl.iban.data_scale = ""
		this.ctrl.iban.hide_label = false
		this.ctrl.iban.depends_on = ""
		this.ctrl.iban.placeholder = ""
		this.ctrl.iban.dynamic_param = ""
		this.ctrl.iban.style_code = ""
		this.ctrl.iban.data_source = ""
		this.ctrl.iban.image_association = ""
		this.ctrl.iban.show = true
		this.ctrl.iban.sub_content = ""
		this.ctrl.iban.required = false
		this.ctrl.iban.vld_rules = []
		this.ctrl.iban.targetcolumn_lower = "iban"
		this.ctrl.iban.disabled = false
		this.ctrl.iban.view_name = "f_npss_merc_proxy_address_ui"
		this.ctrl.iban.ctrl_id = "npss_merc_proxy_address_ui_iban"
		this.ctrl.npss_merc_proxy_address_ui_iban = {}
		this.ctrl.npss_merc_proxy_address_ui_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of participant_code
		this.ctrl.participant_code = {}
		this.ctrl.participant_code.id = "RN11CN8"
		this.ctrl.participant_code.desc = "Participant Code"
		this.ctrl.participant_code.visible = true
		this.ctrl.participant_code.label_name = "Participant Code"
		this.ctrl.participant_code.df_code = "DF_1304_1665384730214"
		this.ctrl.participant_code.df_description = "Column Group 1"
		this.ctrl.participant_code.uictrl_code = "CBO"
		this.ctrl.participant_code.target_column = "PARTICIPANT_CODE"
		this.ctrl.participant_code.data_type = "TEXT"
		this.ctrl.participant_code.data_length = 16
		this.ctrl.participant_code.zone_df_code = "DF_1304_1665384730214"
		this.ctrl.participant_code.default_value = ""
		this.ctrl.participant_code.is_memory_ctrl = ""
		this.ctrl.participant_code.field_coordinates = ""
		this.ctrl.participant_code.sub_details = ""
		this.ctrl.participant_code.accept_char = ""
		this.ctrl.participant_code.currency_format = ""
		this.ctrl.participant_code.data_scale = ""
		this.ctrl.participant_code.hide_label = false
		this.ctrl.participant_code.depends_on = ""
		this.ctrl.participant_code.placeholder = ""
		this.ctrl.participant_code.dynamic_param = ""
		this.ctrl.participant_code.style_code = ""
		this.ctrl.participant_code.data_source = {"ds_code":"UDS_1304_1665389079534","ds_description":"NPSS Participant code SQL","rows":[],"type":"DPS_TABLE","value_member":"SORT_CODE","display_member":"SYSTEM_NAME","first_record_display":"","column_list":"","order_by":"","target_table":"NPSS_VW_PARTICIPANT_CODE","context":"","filters":[{"filter_name":"Filter1","binding_name":"S_ID","id":"DF_1665389196469","binding_value":"SESSION_LEVEL.S_ID","source_name":"S_ID","source_value":"SESSION_LEVEL.S_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"},{"filter_name":"Filter2","binding_name":"TENANT_ID","id":"DF_1665389196469","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"S_ID","binding_value":"SESSION_LEVEL.S_ID","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"S_ID"},{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"}]},"query":"(S_ID = SESSION_LEVEL.S_ID AND TENANT_ID = SESSION_LEVEL.TENANT_ID)"},"need_auto_first_record":true,"sel_columns":[]}
		this.ctrl.participant_code.image_association = ""
		this.ctrl.participant_code.show = true
		this.ctrl.participant_code.sub_content = ""
		this.ctrl.participant_code.required = false
		this.ctrl.participant_code.vld_rules = []
		this.ctrl.participant_code.targetcolumn_lower = "participant_code"
		this.ctrl.participant_code.disabled = false
		this.ctrl.participant_code.view_name = "f_npss_merc_proxy_address_ui"
		this.ctrl.participant_code.ctrl_id = "npss_merc_proxy_address_ui_participant_code"
		this.ctrl.npss_merc_proxy_address_ui_participant_code = {}
		this.ctrl.npss_merc_proxy_address_ui_participant_code.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_merc_proxy_address_ui.participant_code = {}
	
		//Properties of poi
		this.ctrl.poi = {}
		this.ctrl.poi.id = "RN21CN9"
		this.ctrl.poi.desc = "POI"
		this.ctrl.poi.visible = true
		this.ctrl.poi.label_name = "POI"
		this.ctrl.poi.df_code = "DF_1304_1665384730214"
		this.ctrl.poi.df_description = "Column Group 1"
		this.ctrl.poi.uictrl_code = "TXT"
		this.ctrl.poi.target_column = "POI"
		this.ctrl.poi.data_type = "TEXT"
		this.ctrl.poi.data_length = 32
		this.ctrl.poi.zone_df_code = "DF_1304_1665384730214"
		this.ctrl.poi.default_value = ""
		this.ctrl.poi.is_memory_ctrl = ""
		this.ctrl.poi.field_coordinates = ""
		this.ctrl.poi.sub_details = ""
		this.ctrl.poi.accept_char = ""
		this.ctrl.poi.currency_format = ""
		this.ctrl.poi.data_scale = ""
		this.ctrl.poi.hide_label = false
		this.ctrl.poi.depends_on = ""
		this.ctrl.poi.placeholder = ""
		this.ctrl.poi.dynamic_param = ""
		this.ctrl.poi.style_code = ""
		this.ctrl.poi.data_source = ""
		this.ctrl.poi.image_association = ""
		this.ctrl.poi.show = true
		this.ctrl.poi.sub_content = ""
		this.ctrl.poi.required = false
		this.ctrl.poi.vld_rules = []
		this.ctrl.poi.targetcolumn_lower = "poi"
		this.ctrl.poi.disabled = false
		this.ctrl.poi.view_name = "f_npss_merc_proxy_address_ui"
		this.ctrl.poi.ctrl_id = "npss_merc_proxy_address_ui_poi"
		this.ctrl.npss_merc_proxy_address_ui_poi = {}
		this.ctrl.npss_merc_proxy_address_ui_poi.onChangecomponent = new EventEmitter<any>()
	
		//Properties of vat_id
		this.ctrl.vat_id = {}
		this.ctrl.vat_id.id = "RN21CN10"
		this.ctrl.vat_id.desc = "VAT ID"
		this.ctrl.vat_id.visible = true
		this.ctrl.vat_id.label_name = "VAT ID"
		this.ctrl.vat_id.df_code = "DF_1304_1665384730214"
		this.ctrl.vat_id.df_description = "Column Group 1"
		this.ctrl.vat_id.uictrl_code = "TXT"
		this.ctrl.vat_id.target_column = "VAT_ID"
		this.ctrl.vat_id.data_type = "NUMBER"
		this.ctrl.vat_id.data_length = 9
		this.ctrl.vat_id.zone_df_code = "DF_1304_1665384730214"
		this.ctrl.vat_id.default_value = ""
		this.ctrl.vat_id.is_memory_ctrl = ""
		this.ctrl.vat_id.field_coordinates = ""
		this.ctrl.vat_id.sub_details = ""
		this.ctrl.vat_id.accept_char = ""
		this.ctrl.vat_id.currency_format = ""
		this.ctrl.vat_id.data_scale = ""
		this.ctrl.vat_id.hide_label = false
		this.ctrl.vat_id.depends_on = ""
		this.ctrl.vat_id.placeholder = ""
		this.ctrl.vat_id.dynamic_param = ""
		this.ctrl.vat_id.style_code = ""
		this.ctrl.vat_id.data_source = ""
		this.ctrl.vat_id.image_association = ""
		this.ctrl.vat_id.show = true
		this.ctrl.vat_id.sub_content = ""
		this.ctrl.vat_id.required = false
		this.ctrl.vat_id.vld_rules = []
		this.ctrl.vat_id.targetcolumn_lower = "vat_id"
		this.ctrl.vat_id.disabled = false
		this.ctrl.vat_id.view_name = "f_npss_merc_proxy_address_ui"
		this.ctrl.vat_id.ctrl_id = "npss_merc_proxy_address_ui_vat_id"
		this.ctrl.npss_merc_proxy_address_ui_vat_id = {}
		this.ctrl.npss_merc_proxy_address_ui_vat_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of phone_no
		this.ctrl.phone_no = {}
		this.ctrl.phone_no.id = "RN21CN11"
		this.ctrl.phone_no.desc = "Phone No"
		this.ctrl.phone_no.visible = true
		this.ctrl.phone_no.label_name = "Phone No"
		this.ctrl.phone_no.df_code = "DF_1304_1665384730214"
		this.ctrl.phone_no.df_description = "Column Group 1"
		this.ctrl.phone_no.uictrl_code = "TXT"
		this.ctrl.phone_no.target_column = "PHONE_NO"
		this.ctrl.phone_no.data_type = "TEXT"
		this.ctrl.phone_no.data_length = 24
		this.ctrl.phone_no.zone_df_code = "DF_1304_1665384730214"
		this.ctrl.phone_no.default_value = ""
		this.ctrl.phone_no.is_memory_ctrl = ""
		this.ctrl.phone_no.field_coordinates = ""
		this.ctrl.phone_no.sub_details = ""
		this.ctrl.phone_no.accept_char = ""
		this.ctrl.phone_no.currency_format = ""
		this.ctrl.phone_no.data_scale = ""
		this.ctrl.phone_no.hide_label = false
		this.ctrl.phone_no.depends_on = ""
		this.ctrl.phone_no.placeholder = ""
		this.ctrl.phone_no.dynamic_param = ""
		this.ctrl.phone_no.style_code = ""
		this.ctrl.phone_no.data_source = ""
		this.ctrl.phone_no.image_association = ""
		this.ctrl.phone_no.show = true
		this.ctrl.phone_no.sub_content = ""
		this.ctrl.phone_no.required = false
		this.ctrl.phone_no.vld_rules = []
		this.ctrl.phone_no.targetcolumn_lower = "phone_no"
		this.ctrl.phone_no.disabled = false
		this.ctrl.phone_no.view_name = "f_npss_merc_proxy_address_ui"
		this.ctrl.phone_no.ctrl_id = "npss_merc_proxy_address_ui_phone_no"
		this.ctrl.npss_merc_proxy_address_ui_phone_no = {}
		this.ctrl.npss_merc_proxy_address_ui_phone_no.onChangecomponent = new EventEmitter<any>()
	
		//Properties of email_id
		this.ctrl.email_id = {}
		this.ctrl.email_id.id = "RN21CN12"
		this.ctrl.email_id.desc = "Email ID"
		this.ctrl.email_id.visible = true
		this.ctrl.email_id.label_name = "Email ID"
		this.ctrl.email_id.df_code = "DF_1304_1665384730214"
		this.ctrl.email_id.df_description = "Column Group 1"
		this.ctrl.email_id.uictrl_code = "TXT"
		this.ctrl.email_id.target_column = "EMAIL_ID"
		this.ctrl.email_id.data_type = "TEXT"
		this.ctrl.email_id.data_length = 256
		this.ctrl.email_id.zone_df_code = "DF_1304_1665384730214"
		this.ctrl.email_id.default_value = ""
		this.ctrl.email_id.is_memory_ctrl = ""
		this.ctrl.email_id.field_coordinates = ""
		this.ctrl.email_id.sub_details = ""
		this.ctrl.email_id.accept_char = ""
		this.ctrl.email_id.currency_format = ""
		this.ctrl.email_id.data_scale = ""
		this.ctrl.email_id.hide_label = false
		this.ctrl.email_id.depends_on = ""
		this.ctrl.email_id.placeholder = ""
		this.ctrl.email_id.dynamic_param = ""
		this.ctrl.email_id.style_code = ""
		this.ctrl.email_id.data_source = ""
		this.ctrl.email_id.image_association = ""
		this.ctrl.email_id.show = true
		this.ctrl.email_id.sub_content = ""
		this.ctrl.email_id.required = false
		this.ctrl.email_id.vld_rules = []
		this.ctrl.email_id.targetcolumn_lower = "email_id"
		this.ctrl.email_id.disabled = false
		this.ctrl.email_id.view_name = "f_npss_merc_proxy_address_ui"
		this.ctrl.email_id.ctrl_id = "npss_merc_proxy_address_ui_email_id"
		this.ctrl.npss_merc_proxy_address_ui_email_id = {}
		this.ctrl.npss_merc_proxy_address_ui_email_id.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_merc_proxy_address_ui.model = {"CATEGORY":"","PROFESSIONAL":"","MERC_CATEGORY_CODE":"","MERCHANT":"","MERCHANT_TAG":"","DENOMINATION":"","IBAN":"","PARTICIPANT_CODE":"","POI":"","VAT_ID":"","PHONE_NO":"","EMAIL_ID":""}
		this.screen_instance[this.comp_id].f_npss_merc_proxy_address_ui.Meta = [{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"CATEGORY"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROFESSIONAL"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"MERC_CATEGORY_CODE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"MERCHANT"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"MERCHANT_TAG"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DENOMINATION"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"IBAN"},{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"PARTICIPANT_CODE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"POI"},{"CTLR_CODE":"TXT","DATA_TYPE":"NUMBER","TARGET_COLUMN":"VAT_ID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"PHONE_NO"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"EMAIL_ID"}]
		this.screen_instance[this.comp_id].f_npss_merc_proxy_address_ui.dt_code = "dt_1304_1665384579126"
		this.screen_instance[this.comp_id].f_npss_merc_proxy_address_ui.dtt_code = "dtt_1304_1665384653050"
		this.screen_instance[this.comp_id].f_npss_merc_proxy_address_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_merc_proxy_address_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_merc_proxy_address_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_merc_proxy_address_ui[control][property] = value;
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
    