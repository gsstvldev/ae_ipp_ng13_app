/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 36223 
Modified By     : Admin 
Modified Date   : 2024-Aug-08 4:48 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_camt053
Form Name       : NPSS View camt053 SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_view_camt053_srch',
  templateUrl: './f_npss_view_camt053_srch.component.html',
  styleUrls: ['./f_npss_view_camt053_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_view_camt053_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_view_camt053_srch') form;
  @ViewChild('npss_view_camt053_srch_memory78') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1672471156312"
	dtt_code : string = "dtt_1304_1721709764304"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of memory78
		this.ctrl.memory78 = {}
		this.ctrl.memory78.id = "RN31CN7"
		this.ctrl.memory78.desc = "Created Date"
		this.ctrl.memory78.visible = false
		this.ctrl.memory78.label_name = "Created Date"
		this.ctrl.memory78.df_code = "DF_1304_1721709921132"
		this.ctrl.memory78.df_description = "Column Group 1"
		this.ctrl.memory78.uictrl_code = "CDN_DATE"
		this.ctrl.memory78.target_column = "memory78"
		this.ctrl.memory78.data_type = "DATETIME"
		this.ctrl.memory78.data_length = 0
		this.ctrl.memory78.zone_df_code = "DF_1304_1721709921132"
		this.ctrl.memory78.default_value = ""
		this.ctrl.memory78.is_memory_ctrl = "Y"
		this.ctrl.memory78.field_coordinates = ""
		this.ctrl.memory78.sub_details = ""
		this.ctrl.memory78.accept_char = ""
		this.ctrl.memory78.currency_format = ""
		this.ctrl.memory78.data_scale = ""
		this.ctrl.memory78.binding_name = "CREATED_DATE"
		this.ctrl.memory78.hide_label = false
		this.ctrl.memory78.depends_on = ""
		this.ctrl.memory78.placeholder = ""
		this.ctrl.memory78.dynamic_param = ""
		this.ctrl.memory78.style_code = ""
		this.ctrl.memory78.data_source = ""
		this.ctrl.memory78.image_association = ""
		this.ctrl.memory78.show = true
		this.ctrl.memory78.sub_content = ""
		this.ctrl.memory78.required = false
		this.ctrl.memory78.vld_rules = []
		this.ctrl.memory78.targetcolumn_lower = "memory78"
		this.ctrl.memory78.disabled = false
		this.ctrl.memory78.view_name = "f_npss_view_camt053_srch"
		this.ctrl.memory78.ctrl_id = "npss_view_camt053_srch_memory78"
		this.ctrl.npss_view_camt053_srch_memory78 = {}
		this.ctrl.npss_view_camt053_srch_memory78.onChangecomponent = new EventEmitter<any>()
	
		//Properties of hdr_msg_id
		this.ctrl.hdr_msg_id = {}
		this.ctrl.hdr_msg_id.id = "5653108d-9e2b-471f-b685-ea16708f3e6e_1722330688602"
		this.ctrl.hdr_msg_id.desc = "Header Msg Id"
		this.ctrl.hdr_msg_id.visible = true
		this.ctrl.hdr_msg_id.label_name = "Header Msg Id"
		this.ctrl.hdr_msg_id.df_code = "DF_1304_1721709921132"
		this.ctrl.hdr_msg_id.df_description = "Column Group 1"
		this.ctrl.hdr_msg_id.uictrl_code = "CDN_CTRL"
		this.ctrl.hdr_msg_id.target_column = "HDR_MSG_ID"
		this.ctrl.hdr_msg_id.data_type = "TEXT"
		this.ctrl.hdr_msg_id.data_length = 64
		this.ctrl.hdr_msg_id.zone_df_code = "DF_1304_1721709921132"
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
		this.ctrl.hdr_msg_id.view_name = "f_npss_view_camt053_srch"
		this.ctrl.hdr_msg_id.ctrl_id = "npss_view_camt053_srch_hdr_msg_id"
		this.ctrl.npss_view_camt053_srch_hdr_msg_id = {}
		this.ctrl.npss_view_camt053_srch_hdr_msg_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of stmt_id
		this.ctrl.stmt_id = {}
		this.ctrl.stmt_id.id = "96d844ae-64c5-400c-84fe-96af47140a8f_1722330688602"
		this.ctrl.stmt_id.desc = "Statement Id"
		this.ctrl.stmt_id.visible = true
		this.ctrl.stmt_id.label_name = "Statement Id"
		this.ctrl.stmt_id.df_code = "DF_1304_1721709921132"
		this.ctrl.stmt_id.df_description = "Column Group 1"
		this.ctrl.stmt_id.uictrl_code = "CDN_CTRL"
		this.ctrl.stmt_id.target_column = "STMT_ID"
		this.ctrl.stmt_id.data_type = "TEXT"
		this.ctrl.stmt_id.data_length = 64
		this.ctrl.stmt_id.zone_df_code = "DF_1304_1721709921132"
		this.ctrl.stmt_id.default_value = ""
		this.ctrl.stmt_id.is_memory_ctrl = ""
		this.ctrl.stmt_id.field_coordinates = ""
		this.ctrl.stmt_id.sub_details = ""
		this.ctrl.stmt_id.accept_char = ""
		this.ctrl.stmt_id.currency_format = ""
		this.ctrl.stmt_id.data_scale = ""
		this.ctrl.stmt_id.binding_name = "STMT_ID"
		this.ctrl.stmt_id.hide_label = false
		this.ctrl.stmt_id.depends_on = ""
		this.ctrl.stmt_id.placeholder = ""
		this.ctrl.stmt_id.dynamic_param = ""
		this.ctrl.stmt_id.style_code = ""
		this.ctrl.stmt_id.data_source = ""
		this.ctrl.stmt_id.image_association = ""
		this.ctrl.stmt_id.show = true
		this.ctrl.stmt_id.sub_content = ""
		this.ctrl.stmt_id.required = false
		this.ctrl.stmt_id.vld_rules = []
		this.ctrl.stmt_id.targetcolumn_lower = "stmt_id"
		this.ctrl.stmt_id.disabled = false
		this.ctrl.stmt_id.view_name = "f_npss_view_camt053_srch"
		this.ctrl.stmt_id.ctrl_id = "npss_view_camt053_srch_stmt_id"
		this.ctrl.npss_view_camt053_srch_stmt_id = {}
		this.ctrl.npss_view_camt053_srch_stmt_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of stmt_from_to_date_time
		this.ctrl.stmt_from_to_date_time = {}
		this.ctrl.stmt_from_to_date_time.id = "ae43bfc3-4a7b-4726-9306-4708312b6819_1722330688602"
		this.ctrl.stmt_from_to_date_time.desc = "Statement from dt & time"
		this.ctrl.stmt_from_to_date_time.visible = true
		this.ctrl.stmt_from_to_date_time.label_name = "Statement from dt & time"
		this.ctrl.stmt_from_to_date_time.df_code = "DF_1304_1721709921132"
		this.ctrl.stmt_from_to_date_time.df_description = "Column Group 1"
		this.ctrl.stmt_from_to_date_time.uictrl_code = "CDN_DATE"
		this.ctrl.stmt_from_to_date_time.target_column = "STMT_FROM_TO_DATE_TIME"
		this.ctrl.stmt_from_to_date_time.data_type = "DATETIME"
		this.ctrl.stmt_from_to_date_time.data_length = 0
		this.ctrl.stmt_from_to_date_time.zone_df_code = "DF_1304_1721709921132"
		this.ctrl.stmt_from_to_date_time.default_value = ""
		this.ctrl.stmt_from_to_date_time.is_memory_ctrl = ""
		this.ctrl.stmt_from_to_date_time.field_coordinates = ""
		this.ctrl.stmt_from_to_date_time.sub_details = ""
		this.ctrl.stmt_from_to_date_time.accept_char = ""
		this.ctrl.stmt_from_to_date_time.currency_format = ""
		this.ctrl.stmt_from_to_date_time.data_scale = ""
		this.ctrl.stmt_from_to_date_time.binding_name = "STMT_FROM_TO_DATE_TIME"
		this.ctrl.stmt_from_to_date_time.hide_label = false
		this.ctrl.stmt_from_to_date_time.depends_on = ""
		this.ctrl.stmt_from_to_date_time.placeholder = ""
		this.ctrl.stmt_from_to_date_time.dynamic_param = ""
		this.ctrl.stmt_from_to_date_time.style_code = ""
		this.ctrl.stmt_from_to_date_time.data_source = ""
		this.ctrl.stmt_from_to_date_time.image_association = ""
		this.ctrl.stmt_from_to_date_time.show = true
		this.ctrl.stmt_from_to_date_time.sub_content = ""
		this.ctrl.stmt_from_to_date_time.required = false
		this.ctrl.stmt_from_to_date_time.vld_rules = []
		this.ctrl.stmt_from_to_date_time.targetcolumn_lower = "stmt_from_to_date_time"
		this.ctrl.stmt_from_to_date_time.disabled = false
		this.ctrl.stmt_from_to_date_time.view_name = "f_npss_view_camt053_srch"
		this.ctrl.stmt_from_to_date_time.ctrl_id = "npss_view_camt053_srch_stmt_from_to_date_time"
		this.ctrl.npss_view_camt053_srch_stmt_from_to_date_time = {}
		this.ctrl.npss_view_camt053_srch_stmt_from_to_date_time.onChangecomponent = new EventEmitter<any>()
	
		//Properties of stmt_to_date_time
		this.ctrl.stmt_to_date_time = {}
		this.ctrl.stmt_to_date_time.id = "b75607d3-2357-4f01-86c0-d33db408c78e_1722330688602"
		this.ctrl.stmt_to_date_time.desc = "Statement to dt & time"
		this.ctrl.stmt_to_date_time.visible = true
		this.ctrl.stmt_to_date_time.label_name = "Statement to dt & time"
		this.ctrl.stmt_to_date_time.df_code = "DF_1304_1721709921132"
		this.ctrl.stmt_to_date_time.df_description = "Column Group 1"
		this.ctrl.stmt_to_date_time.uictrl_code = "CDN_DATE"
		this.ctrl.stmt_to_date_time.target_column = "STMT_TO_DATE_TIME"
		this.ctrl.stmt_to_date_time.data_type = "DATETIME"
		this.ctrl.stmt_to_date_time.data_length = 0
		this.ctrl.stmt_to_date_time.zone_df_code = "DF_1304_1721709921132"
		this.ctrl.stmt_to_date_time.default_value = ""
		this.ctrl.stmt_to_date_time.is_memory_ctrl = ""
		this.ctrl.stmt_to_date_time.field_coordinates = ""
		this.ctrl.stmt_to_date_time.sub_details = ""
		this.ctrl.stmt_to_date_time.accept_char = ""
		this.ctrl.stmt_to_date_time.currency_format = ""
		this.ctrl.stmt_to_date_time.data_scale = ""
		this.ctrl.stmt_to_date_time.binding_name = "STMT_TO_DATE_TIME"
		this.ctrl.stmt_to_date_time.hide_label = false
		this.ctrl.stmt_to_date_time.depends_on = ""
		this.ctrl.stmt_to_date_time.placeholder = ""
		this.ctrl.stmt_to_date_time.dynamic_param = ""
		this.ctrl.stmt_to_date_time.style_code = ""
		this.ctrl.stmt_to_date_time.data_source = ""
		this.ctrl.stmt_to_date_time.image_association = ""
		this.ctrl.stmt_to_date_time.show = true
		this.ctrl.stmt_to_date_time.sub_content = ""
		this.ctrl.stmt_to_date_time.required = false
		this.ctrl.stmt_to_date_time.vld_rules = []
		this.ctrl.stmt_to_date_time.targetcolumn_lower = "stmt_to_date_time"
		this.ctrl.stmt_to_date_time.disabled = false
		this.ctrl.stmt_to_date_time.view_name = "f_npss_view_camt053_srch"
		this.ctrl.stmt_to_date_time.ctrl_id = "npss_view_camt053_srch_stmt_to_date_time"
		this.ctrl.npss_view_camt053_srch_stmt_to_date_time = {}
		this.ctrl.npss_view_camt053_srch_stmt_to_date_time.onChangecomponent = new EventEmitter<any>()
	
		//Properties of uetr
		this.ctrl.uetr = {}
		this.ctrl.uetr.id = "9a72d957-89c0-497e-b5a3-1f0cd4070a90_1722330688602"
		this.ctrl.uetr.desc = "UETR"
		this.ctrl.uetr.visible = true
		this.ctrl.uetr.label_name = "UETR"
		this.ctrl.uetr.df_code = "DF_1304_1721709921132"
		this.ctrl.uetr.df_description = "Column Group 1"
		this.ctrl.uetr.uictrl_code = "CDN_CTRL"
		this.ctrl.uetr.target_column = "UETR"
		this.ctrl.uetr.data_type = "TEXT"
		this.ctrl.uetr.data_length = 64
		this.ctrl.uetr.zone_df_code = "DF_1304_1721709921132"
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
		this.ctrl.uetr.view_name = "f_npss_view_camt053_srch"
		this.ctrl.uetr.ctrl_id = "npss_view_camt053_srch_uetr"
		this.ctrl.npss_view_camt053_srch_uetr = {}
		this.ctrl.npss_view_camt053_srch_uetr.onChangecomponent = new EventEmitter<any>()
	
		//Properties of txn_id
		this.ctrl.txn_id = {}
		this.ctrl.txn_id.id = "195d95db-264e-46f8-a8cd-f7a73bbb0972_1722330688602"
		this.ctrl.txn_id.desc = "Transaction Id"
		this.ctrl.txn_id.visible = true
		this.ctrl.txn_id.label_name = "Transaction Id"
		this.ctrl.txn_id.df_code = "DF_1304_1721709921132"
		this.ctrl.txn_id.df_description = "Column Group 1"
		this.ctrl.txn_id.uictrl_code = "CDN_CTRL"
		this.ctrl.txn_id.target_column = "TXN_ID"
		this.ctrl.txn_id.data_type = "TEXT"
		this.ctrl.txn_id.data_length = 64
		this.ctrl.txn_id.zone_df_code = "DF_1304_1721709921132"
		this.ctrl.txn_id.default_value = ""
		this.ctrl.txn_id.is_memory_ctrl = ""
		this.ctrl.txn_id.field_coordinates = ""
		this.ctrl.txn_id.sub_details = ""
		this.ctrl.txn_id.accept_char = ""
		this.ctrl.txn_id.currency_format = ""
		this.ctrl.txn_id.data_scale = ""
		this.ctrl.txn_id.binding_name = "TXN_ID"
		this.ctrl.txn_id.hide_label = false
		this.ctrl.txn_id.depends_on = ""
		this.ctrl.txn_id.placeholder = ""
		this.ctrl.txn_id.dynamic_param = ""
		this.ctrl.txn_id.style_code = ""
		this.ctrl.txn_id.data_source = ""
		this.ctrl.txn_id.image_association = ""
		this.ctrl.txn_id.show = true
		this.ctrl.txn_id.sub_content = ""
		this.ctrl.txn_id.required = false
		this.ctrl.txn_id.vld_rules = []
		this.ctrl.txn_id.targetcolumn_lower = "txn_id"
		this.ctrl.txn_id.disabled = false
		this.ctrl.txn_id.view_name = "f_npss_view_camt053_srch"
		this.ctrl.txn_id.ctrl_id = "npss_view_camt053_srch_txn_id"
		this.ctrl.npss_view_camt053_srch_txn_id = {}
		this.ctrl.npss_view_camt053_srch_txn_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of acct_id
		this.ctrl.acct_id = {}
		this.ctrl.acct_id.id = "1722330688602CN8"
		this.ctrl.acct_id.desc = "Account Id"
		this.ctrl.acct_id.visible = true
		this.ctrl.acct_id.label_name = "Account Id"
		this.ctrl.acct_id.df_code = "DF_1304_1721709921132"
		this.ctrl.acct_id.df_description = "Column Group 1"
		this.ctrl.acct_id.uictrl_code = "CDN_CTRL"
		this.ctrl.acct_id.target_column = "ACCT_ID"
		this.ctrl.acct_id.data_type = "TEXT"
		this.ctrl.acct_id.data_length = 32
		this.ctrl.acct_id.zone_df_code = "DF_1304_1721709921132"
		this.ctrl.acct_id.default_value = ""
		this.ctrl.acct_id.is_memory_ctrl = ""
		this.ctrl.acct_id.field_coordinates = ""
		this.ctrl.acct_id.sub_details = ""
		this.ctrl.acct_id.accept_char = ""
		this.ctrl.acct_id.currency_format = ""
		this.ctrl.acct_id.data_scale = ""
		this.ctrl.acct_id.binding_name = "ACCT_ID"
		this.ctrl.acct_id.hide_label = false
		this.ctrl.acct_id.depends_on = ""
		this.ctrl.acct_id.placeholder = ""
		this.ctrl.acct_id.dynamic_param = ""
		this.ctrl.acct_id.style_code = ""
		this.ctrl.acct_id.data_source = ""
		this.ctrl.acct_id.image_association = ""
		this.ctrl.acct_id.show = true
		this.ctrl.acct_id.sub_content = ""
		this.ctrl.acct_id.required = false
		this.ctrl.acct_id.vld_rules = []
		this.ctrl.acct_id.targetcolumn_lower = "acct_id"
		this.ctrl.acct_id.disabled = false
		this.ctrl.acct_id.view_name = "f_npss_view_camt053_srch"
		this.ctrl.acct_id.ctrl_id = "npss_view_camt053_srch_acct_id"
		this.ctrl.npss_view_camt053_srch_acct_id = {}
		this.ctrl.npss_view_camt053_srch_acct_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of hdr_created_date_time
		this.ctrl.hdr_created_date_time = {}
		this.ctrl.hdr_created_date_time.id = "RN41CN9"
		this.ctrl.hdr_created_date_time.desc = "HdrCreDtTm"
		this.ctrl.hdr_created_date_time.visible = false
		this.ctrl.hdr_created_date_time.label_name = "HdrCreDtTm"
		this.ctrl.hdr_created_date_time.df_code = "DF_1304_1721709921132"
		this.ctrl.hdr_created_date_time.df_description = "Column Group 1"
		this.ctrl.hdr_created_date_time.uictrl_code = "CDN_DATE"
		this.ctrl.hdr_created_date_time.target_column = "HDR_CREATED_DATE_TIME"
		this.ctrl.hdr_created_date_time.data_type = "DATETIME"
		this.ctrl.hdr_created_date_time.data_length = 0
		this.ctrl.hdr_created_date_time.zone_df_code = "DF_1304_1721709921132"
		this.ctrl.hdr_created_date_time.default_value = ""
		this.ctrl.hdr_created_date_time.is_memory_ctrl = ""
		this.ctrl.hdr_created_date_time.field_coordinates = ""
		this.ctrl.hdr_created_date_time.sub_details = ""
		this.ctrl.hdr_created_date_time.accept_char = ""
		this.ctrl.hdr_created_date_time.currency_format = ""
		this.ctrl.hdr_created_date_time.data_scale = ""
		this.ctrl.hdr_created_date_time.binding_name = "HDR_CREATED_DATE_TIME"
		this.ctrl.hdr_created_date_time.hide_label = false
		this.ctrl.hdr_created_date_time.depends_on = ""
		this.ctrl.hdr_created_date_time.placeholder = ""
		this.ctrl.hdr_created_date_time.dynamic_param = ""
		this.ctrl.hdr_created_date_time.style_code = ""
		this.ctrl.hdr_created_date_time.data_source = ""
		this.ctrl.hdr_created_date_time.image_association = ""
		this.ctrl.hdr_created_date_time.show = true
		this.ctrl.hdr_created_date_time.sub_content = ""
		this.ctrl.hdr_created_date_time.required = false
		this.ctrl.hdr_created_date_time.vld_rules = []
		this.ctrl.hdr_created_date_time.targetcolumn_lower = "hdr_created_date_time"
		this.ctrl.hdr_created_date_time.disabled = false
		this.ctrl.hdr_created_date_time.view_name = "f_npss_view_camt053_srch"
		this.ctrl.hdr_created_date_time.ctrl_id = "npss_view_camt053_srch_hdr_created_date_time"
		this.ctrl.npss_view_camt053_srch_hdr_created_date_time = {}
		this.ctrl.npss_view_camt053_srch_hdr_created_date_time.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_view_camt053_srch.model = {"MEMORY78":"","HDR_MSG_ID":"","STMT_ID":"","STMT_FROM_TO_DATE_TIME":"","STMT_TO_DATE_TIME":"","UETR":"","TXN_ID":"","ACCT_ID":"","HDR_CREATED_DATE_TIME":""}
		this.screen_instance[this.comp_id].f_npss_view_camt053_srch.Meta = [{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"HDR_MSG_ID"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"STMT_ID"},{"CTLR_CODE":"CDN_DATE","DATA_TYPE":"DATETIME","TARGET_COLUMN":"STMT_FROM_TO_DATE_TIME"},{"CTLR_CODE":"CDN_DATE","DATA_TYPE":"DATETIME","TARGET_COLUMN":"STMT_TO_DATE_TIME"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"UETR"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"TXN_ID"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"ACCT_ID"},{"CTLR_CODE":"CDN_DATE","DATA_TYPE":"DATETIME","TARGET_COLUMN":"HDR_CREATED_DATE_TIME"}]
		this.screen_instance[this.comp_id].f_npss_view_camt053_srch.dt_code = "dt_1304_1672471156312"
		this.screen_instance[this.comp_id].f_npss_view_camt053_srch.dtt_code = "dtt_1304_1721709764304"
		this.screen_instance[this.comp_id].f_npss_view_camt053_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_view_camt053_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_view_camt053_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_view_camt053_srch[control][property] = value;
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
    