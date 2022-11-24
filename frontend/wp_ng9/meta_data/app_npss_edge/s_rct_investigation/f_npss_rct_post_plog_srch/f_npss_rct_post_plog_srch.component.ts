/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27050 
Modified By     : Admin 
Modified Date   : 2022-Nov-24 4:21 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_investigation
Form Name       : NPSS RCT Post PLOG srch--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_rct_post_plog_srch',
  templateUrl: './f_npss_rct_post_plog_srch.component.html',
  styleUrls: ['./f_npss_rct_post_plog_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_rct_post_plog_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_rct_post_plog_srch') form;
  @ViewChild('npss_rct_post_plog_srch_memory18') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665901130705"
	dtt_code : string = "dtt_1304_1665905039255"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of memory18
		this.ctrl.memory18 = {}
		this.ctrl.memory18.id = "2d2e05ac-5ece-4d1d-9ec8-b2be0491e67b_1668849760484"
		this.ctrl.memory18.desc = "Value Date"
		this.ctrl.memory18.visible = true
		this.ctrl.memory18.label_name = "Value Date"
		this.ctrl.memory18.df_code = "DF_1304_1665905157963"
		this.ctrl.memory18.df_description = "Column Group 1"
		this.ctrl.memory18.uictrl_code = "CDN_DATE"
		this.ctrl.memory18.target_column = "memory18"
		this.ctrl.memory18.data_type = "DATETIME"
		this.ctrl.memory18.data_length = 0
		this.ctrl.memory18.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.memory18.default_value = "setcurrentdate(),{}"
		this.ctrl.memory18.is_memory_ctrl = "Y"
		this.ctrl.memory18.field_coordinates = ""
		this.ctrl.memory18.sub_details = ""
		this.ctrl.memory18.accept_char = ""
		this.ctrl.memory18.currency_format = ""
		this.ctrl.memory18.data_scale = ""
		this.ctrl.memory18.binding_name = "VALUE_DATE"
		this.ctrl.memory18.hide_label = false
		this.ctrl.memory18.depends_on = ""
		this.ctrl.memory18.placeholder = ""
		this.ctrl.memory18.dynamic_param = ""
		this.ctrl.memory18.style_code = ""
		this.ctrl.memory18.data_source = ""
		this.ctrl.memory18.image_association = ""
		this.ctrl.memory18.show = true
		this.ctrl.memory18.sub_content = ""
		this.ctrl.memory18.required = false
		this.ctrl.memory18.vld_rules = []
		this.ctrl.memory18.targetcolumn_lower = "memory18"
		this.ctrl.memory18.disabled = false
		this.ctrl.memory18.view_name = "f_npss_rct_post_plog_srch"
		this.ctrl.memory18.ctrl_id = "npss_rct_post_plog_srch_memory18"
		this.ctrl.npss_rct_post_plog_srch_memory18 = {}
		this.ctrl.npss_rct_post_plog_srch_memory18.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory9
		this.ctrl.memory9 = {}
		this.ctrl.memory9.id = "1d59c8ef-6767-4201-8531-33f40d786f77_1668849760484"
		this.ctrl.memory9.desc = "Created Date"
		this.ctrl.memory9.visible = true
		this.ctrl.memory9.label_name = "Created Date"
		this.ctrl.memory9.df_code = "DF_1304_1665905157963"
		this.ctrl.memory9.df_description = "Column Group 1"
		this.ctrl.memory9.uictrl_code = "CDN_DATE"
		this.ctrl.memory9.target_column = "memory9"
		this.ctrl.memory9.data_type = "DATETIME"
		this.ctrl.memory9.data_length = 0
		this.ctrl.memory9.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.memory9.default_value = "setcurrentdate(),{}"
		this.ctrl.memory9.is_memory_ctrl = "Y"
		this.ctrl.memory9.field_coordinates = ""
		this.ctrl.memory9.sub_details = ""
		this.ctrl.memory9.accept_char = ""
		this.ctrl.memory9.currency_format = ""
		this.ctrl.memory9.data_scale = ""
		this.ctrl.memory9.binding_name = "CREATED_DATE"
		this.ctrl.memory9.hide_label = false
		this.ctrl.memory9.depends_on = ""
		this.ctrl.memory9.placeholder = ""
		this.ctrl.memory9.dynamic_param = ""
		this.ctrl.memory9.style_code = ""
		this.ctrl.memory9.data_source = ""
		this.ctrl.memory9.image_association = ""
		this.ctrl.memory9.show = true
		this.ctrl.memory9.sub_content = ""
		this.ctrl.memory9.required = false
		this.ctrl.memory9.vld_rules = []
		this.ctrl.memory9.targetcolumn_lower = "memory9"
		this.ctrl.memory9.disabled = false
		this.ctrl.memory9.view_name = "f_npss_rct_post_plog_srch"
		this.ctrl.memory9.ctrl_id = "npss_rct_post_plog_srch_memory9"
		this.ctrl.npss_rct_post_plog_srch_memory9 = {}
		this.ctrl.npss_rct_post_plog_srch_memory9.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory19
		this.ctrl.memory19 = {}
		this.ctrl.memory19.id = "4780b030-689c-4e95-810c-2bac7f06d098_1668849760485"
		this.ctrl.memory19.desc = "Creditor IBAN"
		this.ctrl.memory19.visible = true
		this.ctrl.memory19.label_name = "Creditor IBAN"
		this.ctrl.memory19.df_code = "DF_1304_1665905157963"
		this.ctrl.memory19.df_description = "Column Group 1"
		this.ctrl.memory19.uictrl_code = "TXT"
		this.ctrl.memory19.target_column = "memory19"
		this.ctrl.memory19.data_type = "TEXT"
		this.ctrl.memory19.data_length = 32
		this.ctrl.memory19.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.memory19.default_value = ""
		this.ctrl.memory19.is_memory_ctrl = "Y"
		this.ctrl.memory19.field_coordinates = ""
		this.ctrl.memory19.sub_details = ""
		this.ctrl.memory19.accept_char = ""
		this.ctrl.memory19.currency_format = ""
		this.ctrl.memory19.data_scale = ""
		this.ctrl.memory19.binding_name = "CDTR_IBAN"
		this.ctrl.memory19.hide_label = false
		this.ctrl.memory19.depends_on = ""
		this.ctrl.memory19.placeholder = ""
		this.ctrl.memory19.dynamic_param = ""
		this.ctrl.memory19.style_code = ""
		this.ctrl.memory19.data_source = ""
		this.ctrl.memory19.image_association = ""
		this.ctrl.memory19.show = true
		this.ctrl.memory19.sub_content = ""
		this.ctrl.memory19.required = false
		this.ctrl.memory19.vld_rules = []
		this.ctrl.memory19.targetcolumn_lower = "memory19"
		this.ctrl.memory19.disabled = false
		this.ctrl.memory19.view_name = "f_npss_rct_post_plog_srch"
		this.ctrl.memory19.ctrl_id = "npss_rct_post_plog_srch_memory19"
		this.ctrl.npss_rct_post_plog_srch_memory19 = {}
		this.ctrl.npss_rct_post_plog_srch_memory19.onChangecomponent = new EventEmitter<any>()
	
		//Properties of uetr
		this.ctrl.uetr = {}
		this.ctrl.uetr.id = "79fe1420-8679-4818-8921-a5f8ce0318b7_1668849760485"
		this.ctrl.uetr.desc = "UETR"
		this.ctrl.uetr.visible = true
		this.ctrl.uetr.label_name = "UETR"
		this.ctrl.uetr.df_code = "DF_1304_1665905157963"
		this.ctrl.uetr.df_description = "Column Group 1"
		this.ctrl.uetr.uictrl_code = "TXT"
		this.ctrl.uetr.target_column = "UETR"
		this.ctrl.uetr.data_type = "TEXT"
		this.ctrl.uetr.data_length = 64
		this.ctrl.uetr.zone_df_code = "DF_1304_1665905157963"
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
		this.ctrl.uetr.required = true
		this.ctrl.uetr.vld_rules = []
		this.ctrl.uetr.targetcolumn_lower = "uetr"
		this.ctrl.uetr.disabled = false
		this.ctrl.uetr.view_name = "f_npss_rct_post_plog_srch"
		this.ctrl.uetr.ctrl_id = "npss_rct_post_plog_srch_uetr"
		this.ctrl.npss_rct_post_plog_srch_uetr = {}
		this.ctrl.npss_rct_post_plog_srch_uetr.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory21
		this.ctrl.memory21 = {}
		this.ctrl.memory21.id = "be70727e-7695-4c4c-ada8-7d73ffbb73a5_1668849760485"
		this.ctrl.memory21.desc = "Transaction Ref No"
		this.ctrl.memory21.visible = true
		this.ctrl.memory21.label_name = "Transaction Ref No"
		this.ctrl.memory21.df_code = "DF_1304_1665905157963"
		this.ctrl.memory21.df_description = "Column Group 1"
		this.ctrl.memory21.uictrl_code = "TXT"
		this.ctrl.memory21.target_column = "memory21"
		this.ctrl.memory21.data_type = "TEXT"
		this.ctrl.memory21.data_length = 0
		this.ctrl.memory21.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.memory21.default_value = ""
		this.ctrl.memory21.is_memory_ctrl = "Y"
		this.ctrl.memory21.field_coordinates = ""
		this.ctrl.memory21.sub_details = ""
		this.ctrl.memory21.accept_char = ""
		this.ctrl.memory21.currency_format = ""
		this.ctrl.memory21.data_scale = ""
		this.ctrl.memory21.binding_name = "TRAN_REF_ID"
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
		this.ctrl.memory21.view_name = "f_npss_rct_post_plog_srch"
		this.ctrl.memory21.ctrl_id = "npss_rct_post_plog_srch_memory21"
		this.ctrl.npss_rct_post_plog_srch_memory21 = {}
		this.ctrl.npss_rct_post_plog_srch_memory21.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory27
		this.ctrl.memory27 = {}
		this.ctrl.memory27.id = "RN51CN12"
		this.ctrl.memory27.desc = "Clearing System Ref No"
		this.ctrl.memory27.visible = true
		this.ctrl.memory27.label_name = "Clearing System Ref No"
		this.ctrl.memory27.df_code = "DF_1304_1665905157963"
		this.ctrl.memory27.df_description = "Column Group 1"
		this.ctrl.memory27.uictrl_code = "TXT"
		this.ctrl.memory27.target_column = "memory27"
		this.ctrl.memory27.data_type = "TEXT"
		this.ctrl.memory27.data_length = 0
		this.ctrl.memory27.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.memory27.default_value = ""
		this.ctrl.memory27.is_memory_ctrl = "Y"
		this.ctrl.memory27.field_coordinates = ""
		this.ctrl.memory27.sub_details = ""
		this.ctrl.memory27.accept_char = ""
		this.ctrl.memory27.currency_format = ""
		this.ctrl.memory27.data_scale = ""
		this.ctrl.memory27.binding_name = "CLRSYSREF"
		this.ctrl.memory27.depends_on = ""
		this.ctrl.memory27.placeholder = ""
		this.ctrl.memory27.dynamic_param = ""
		this.ctrl.memory27.style_code = ""
		this.ctrl.memory27.data_source = ""
		this.ctrl.memory27.image_association = ""
		this.ctrl.memory27.show = true
		this.ctrl.memory27.sub_content = ""
		this.ctrl.memory27.required = false
		this.ctrl.memory27.vld_rules = []
		this.ctrl.memory27.targetcolumn_lower = "memory27"
		this.ctrl.memory27.disabled = false
		this.ctrl.memory27.view_name = "f_npss_rct_post_plog_srch"
		this.ctrl.memory27.ctrl_id = "npss_rct_post_plog_srch_memory27"
		this.ctrl.npss_rct_post_plog_srch_memory27 = {}
		this.ctrl.npss_rct_post_plog_srch_memory27.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory22
		this.ctrl.memory22 = {}
		this.ctrl.memory22.id = "6177f9b8-0811-416a-a18e-2ba739f8ac11_1668849760485"
		this.ctrl.memory22.desc = "E2E Ref ID"
		this.ctrl.memory22.visible = true
		this.ctrl.memory22.label_name = "E2E Ref ID"
		this.ctrl.memory22.df_code = "DF_1304_1665905157963"
		this.ctrl.memory22.df_description = "Column Group 1"
		this.ctrl.memory22.uictrl_code = "TXT"
		this.ctrl.memory22.target_column = "memory22"
		this.ctrl.memory22.data_type = "TEXT"
		this.ctrl.memory22.data_length = 32
		this.ctrl.memory22.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.memory22.default_value = ""
		this.ctrl.memory22.is_memory_ctrl = "Y"
		this.ctrl.memory22.field_coordinates = ""
		this.ctrl.memory22.sub_details = ""
		this.ctrl.memory22.accept_char = ""
		this.ctrl.memory22.currency_format = ""
		this.ctrl.memory22.data_scale = ""
		this.ctrl.memory22.binding_name = "E2E_REF_ID"
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
		this.ctrl.memory22.view_name = "f_npss_rct_post_plog_srch"
		this.ctrl.memory22.ctrl_id = "npss_rct_post_plog_srch_memory22"
		this.ctrl.npss_rct_post_plog_srch_memory22 = {}
		this.ctrl.npss_rct_post_plog_srch_memory22.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory23
		this.ctrl.memory23 = {}
		this.ctrl.memory23.id = "d0e858af-a7cf-4422-83f9-0af3db8e4344_1668849760485"
		this.ctrl.memory23.desc = "Cr Account Number"
		this.ctrl.memory23.visible = true
		this.ctrl.memory23.label_name = "Cr Account Number"
		this.ctrl.memory23.df_code = "DF_1304_1665905157963"
		this.ctrl.memory23.df_description = "Column Group 1"
		this.ctrl.memory23.uictrl_code = "TXT"
		this.ctrl.memory23.target_column = "memory23"
		this.ctrl.memory23.data_type = "TEXT"
		this.ctrl.memory23.data_length = 64
		this.ctrl.memory23.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.memory23.default_value = ""
		this.ctrl.memory23.is_memory_ctrl = "Y"
		this.ctrl.memory23.field_coordinates = ""
		this.ctrl.memory23.sub_details = ""
		this.ctrl.memory23.accept_char = ""
		this.ctrl.memory23.currency_format = ""
		this.ctrl.memory23.data_scale = ""
		this.ctrl.memory23.binding_name = "CDTR_ACCT_NO"
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
		this.ctrl.memory23.view_name = "f_npss_rct_post_plog_srch"
		this.ctrl.memory23.ctrl_id = "npss_rct_post_plog_srch_memory23"
		this.ctrl.npss_rct_post_plog_srch_memory23 = {}
		this.ctrl.npss_rct_post_plog_srch_memory23.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory24
		this.ctrl.memory24 = {}
		this.ctrl.memory24.id = "3af74f36-3020-47dd-a037-284a7d9064f4_1668849760485"
		this.ctrl.memory24.desc = "Dr Account Number"
		this.ctrl.memory24.visible = true
		this.ctrl.memory24.label_name = "Dr Account Number"
		this.ctrl.memory24.df_code = "DF_1304_1665905157963"
		this.ctrl.memory24.df_description = "Column Group 1"
		this.ctrl.memory24.uictrl_code = "TXT"
		this.ctrl.memory24.target_column = "memory24"
		this.ctrl.memory24.data_type = "TEXT"
		this.ctrl.memory24.data_length = 64
		this.ctrl.memory24.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.memory24.default_value = ""
		this.ctrl.memory24.is_memory_ctrl = "Y"
		this.ctrl.memory24.field_coordinates = ""
		this.ctrl.memory24.sub_details = ""
		this.ctrl.memory24.accept_char = ""
		this.ctrl.memory24.currency_format = ""
		this.ctrl.memory24.data_scale = ""
		this.ctrl.memory24.binding_name = "DBTR_ACCT_NO"
		this.ctrl.memory24.hide_label = false
		this.ctrl.memory24.depends_on = ""
		this.ctrl.memory24.placeholder = ""
		this.ctrl.memory24.dynamic_param = ""
		this.ctrl.memory24.style_code = ""
		this.ctrl.memory24.data_source = ""
		this.ctrl.memory24.image_association = ""
		this.ctrl.memory24.show = true
		this.ctrl.memory24.sub_content = ""
		this.ctrl.memory24.required = false
		this.ctrl.memory24.vld_rules = []
		this.ctrl.memory24.targetcolumn_lower = "memory24"
		this.ctrl.memory24.disabled = false
		this.ctrl.memory24.view_name = "f_npss_rct_post_plog_srch"
		this.ctrl.memory24.ctrl_id = "npss_rct_post_plog_srch_memory24"
		this.ctrl.npss_rct_post_plog_srch_memory24 = {}
		this.ctrl.npss_rct_post_plog_srch_memory24.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory25
		this.ctrl.memory25 = {}
		this.ctrl.memory25.id = "e177cc22-d2d9-4a01-9db7-032022d814eb_1668849760485"
		this.ctrl.memory25.desc = "Transaction Amount"
		this.ctrl.memory25.visible = true
		this.ctrl.memory25.label_name = "Transaction Amount"
		this.ctrl.memory25.df_code = "DF_1304_1665905157963"
		this.ctrl.memory25.df_description = "Column Group 1"
		this.ctrl.memory25.uictrl_code = "CDN_CUR_CTRL"
		this.ctrl.memory25.target_column = "memory25"
		this.ctrl.memory25.data_type = "NUMBER"
		this.ctrl.memory25.data_length = 19
		this.ctrl.memory25.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.memory25.default_value = ""
		this.ctrl.memory25.is_memory_ctrl = "Y"
		this.ctrl.memory25.field_coordinates = ""
		this.ctrl.memory25.sub_details = ""
		this.ctrl.memory25.accept_char = ""
		this.ctrl.memory25.currency_format = ""
		this.ctrl.memory25.data_scale = "2"
		this.ctrl.memory25.binding_name = "INTRBK_STTLM_AMNT"
		this.ctrl.memory25.hide_label = false
		this.ctrl.memory25.depends_on = ""
		this.ctrl.memory25.placeholder = ""
		this.ctrl.memory25.dynamic_param = ""
		this.ctrl.memory25.style_code = ""
		this.ctrl.memory25.data_source = ""
		this.ctrl.memory25.image_association = ""
		this.ctrl.memory25.show = true
		this.ctrl.memory25.sub_content = ""
		this.ctrl.memory25.required = false
		this.ctrl.memory25.vld_rules = []
		this.ctrl.memory25.targetcolumn_lower = "memory25"
		this.ctrl.memory25.disabled = false
		this.ctrl.memory25.view_name = "f_npss_rct_post_plog_srch"
		this.ctrl.memory25.ctrl_id = "npss_rct_post_plog_srch_memory25"
		this.ctrl.npss_rct_post_plog_srch_memory25 = {}
		this.ctrl.npss_rct_post_plog_srch_memory25.onChangecomponent = new EventEmitter<any>()
	
		//Properties of process_name
		this.ctrl.process_name = {}
		this.ctrl.process_name.id = "9b197d4d-4d43-45d4-a9d8-e059181b315f_1668849760485"
		this.ctrl.process_name.desc = "Process Name"
		this.ctrl.process_name.visible = true
		this.ctrl.process_name.label_name = "Process Name"
		this.ctrl.process_name.df_code = "DF_1304_1665905157963"
		this.ctrl.process_name.df_description = "Column Group 1"
		this.ctrl.process_name.uictrl_code = "CBO"
		this.ctrl.process_name.target_column = "PROCESS_NAME"
		this.ctrl.process_name.data_type = "TEXT"
		this.ctrl.process_name.data_length = 64
		this.ctrl.process_name.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.process_name.default_value = ""
		this.ctrl.process_name.is_memory_ctrl = ""
		this.ctrl.process_name.field_coordinates = ""
		this.ctrl.process_name.sub_details = ""
		this.ctrl.process_name.accept_char = ""
		this.ctrl.process_name.currency_format = ""
		this.ctrl.process_name.data_scale = ""
		this.ctrl.process_name.binding_name = "PROCESS_NAME"
		this.ctrl.process_name.hide_label = false
		this.ctrl.process_name.depends_on = ""
		this.ctrl.process_name.placeholder = ""
		this.ctrl.process_name.dynamic_param = ""
		this.ctrl.process_name.style_code = ""
		this.ctrl.process_name.data_source = {"ds_code":"UDS_1304_1666098232469","ds_description":"NPSS Process name CDB","rows":[],"type":"DPS_TABLE","value_member":"CD_CODE","display_member":"CD_DESCRIPTION","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_NC_CODE_DESCRIPTIONS","context":"","filters":[{"filter_name":"Filter1","binding_name":"CD_CATEGORY","id":"DF_1666098368356","binding_value":"PROCESS_NAME","source_name":"CD_CATEGORY","source_value":"PROCESS_NAME","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"CD_CATEGORY","binding_value":"PROCESS_NAME","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"PROCESS_NAME"}]},"query":"(CD_CATEGORY = PROCESS_NAME)"},"sel_columns":[]}
		this.ctrl.process_name.image_association = ""
		this.ctrl.process_name.show = true
		this.ctrl.process_name.sub_content = ""
		this.ctrl.process_name.required = false
		this.ctrl.process_name.vld_rules = []
		this.ctrl.process_name.targetcolumn_lower = "process_name"
		this.ctrl.process_name.disabled = false
		this.ctrl.process_name.view_name = "f_npss_rct_post_plog_srch"
		this.ctrl.process_name.ctrl_id = "npss_rct_post_plog_srch_process_name"
		this.ctrl.npss_rct_post_plog_srch_process_name = {}
		this.ctrl.npss_rct_post_plog_srch_process_name.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_rct_post_plog_srch.process_name = {}
	
		//Properties of processing_system
		this.ctrl.processing_system = {}
		this.ctrl.processing_system.id = "2b78f8bd-2be0-48fb-9a3c-4e69a3fef50b_1668849760485"
		this.ctrl.processing_system.desc = "Processing System"
		this.ctrl.processing_system.visible = true
		this.ctrl.processing_system.label_name = "Processing System"
		this.ctrl.processing_system.df_code = "DF_1304_1665905157963"
		this.ctrl.processing_system.df_description = "Column Group 1"
		this.ctrl.processing_system.uictrl_code = "CDN_CTRL"
		this.ctrl.processing_system.target_column = "PROCESSING_SYSTEM"
		this.ctrl.processing_system.data_type = "TEXT"
		this.ctrl.processing_system.data_length = 64
		this.ctrl.processing_system.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.processing_system.default_value = ""
		this.ctrl.processing_system.is_memory_ctrl = ""
		this.ctrl.processing_system.field_coordinates = ""
		this.ctrl.processing_system.sub_details = ""
		this.ctrl.processing_system.accept_char = ""
		this.ctrl.processing_system.currency_format = ""
		this.ctrl.processing_system.data_scale = ""
		this.ctrl.processing_system.binding_name = "PROCESSING_SYSTEM"
		this.ctrl.processing_system.hide_label = false
		this.ctrl.processing_system.depends_on = ""
		this.ctrl.processing_system.placeholder = ""
		this.ctrl.processing_system.dynamic_param = ""
		this.ctrl.processing_system.style_code = ""
		this.ctrl.processing_system.data_source = ""
		this.ctrl.processing_system.image_association = ""
		this.ctrl.processing_system.show = true
		this.ctrl.processing_system.sub_content = ""
		this.ctrl.processing_system.required = false
		this.ctrl.processing_system.vld_rules = []
		this.ctrl.processing_system.targetcolumn_lower = "processing_system"
		this.ctrl.processing_system.disabled = false
		this.ctrl.processing_system.view_name = "f_npss_rct_post_plog_srch"
		this.ctrl.processing_system.ctrl_id = "npss_rct_post_plog_srch_processing_system"
		this.ctrl.npss_rct_post_plog_srch_processing_system = {}
		this.ctrl.npss_rct_post_plog_srch_processing_system.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_rct_post_plog_srch.model = {"MEMORY18":"setcurrentdate(),{}","MEMORY9":"setcurrentdate(),{}","MEMORY19":"","UETR":"","MEMORY21":"","MEMORY27":"","MEMORY22":"","MEMORY23":"","MEMORY24":"","MEMORY25":"","PROCESS_NAME":"","PROCESSING_SYSTEM":""}
		this.screen_instance[this.comp_id].f_npss_rct_post_plog_srch.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"UETR"},{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROCESS_NAME"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROCESSING_SYSTEM"}]
		this.screen_instance[this.comp_id].f_npss_rct_post_plog_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_rct_post_plog_srch.dtt_code = "dtt_1304_1665905039255"
		this.screen_instance[this.comp_id].f_npss_rct_post_plog_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_rct_post_plog_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_rct_post_plog_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_rct_post_plog_srch[control][property] = value;
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
    