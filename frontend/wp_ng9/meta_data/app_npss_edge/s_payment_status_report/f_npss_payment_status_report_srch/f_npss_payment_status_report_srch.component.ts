/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34740 
Modified By     : Admin 
Modified Date   : 2024-Mar-14 4:46 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_payment_status_report
Form Name       : NPSS Payment Status Report SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_payment_status_report_srch',
  templateUrl: './f_npss_payment_status_report_srch.component.html',
  styleUrls: ['./f_npss_payment_status_report_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_payment_status_report_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_payment_status_report_srch') form;
  @ViewChild('npss_payment_status_report_srch_timestamp') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665901130705"
	dtt_code : string = "dtt_1304_1681973868376"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of timestamp
		this.ctrl.timestamp = {}
		this.ctrl.timestamp.id = "RN01CN2"
		this.ctrl.timestamp.desc = "Timestamp"
		this.ctrl.timestamp.visible = true
		this.ctrl.timestamp.label_name = "Timestamp"
		this.ctrl.timestamp.df_code = "DF_1304_1681973942147"
		this.ctrl.timestamp.df_description = "Column Group 1"
		this.ctrl.timestamp.uictrl_code = "CDN_DATE"
		this.ctrl.timestamp.target_column = "TIMESTAMP"
		this.ctrl.timestamp.data_type = "DATETIME"
		this.ctrl.timestamp.data_length = 0
		this.ctrl.timestamp.zone_df_code = "DF_1304_1681973942147"
		this.ctrl.timestamp.default_value = ""
		this.ctrl.timestamp.is_memory_ctrl = ""
		this.ctrl.timestamp.field_coordinates = ""
		this.ctrl.timestamp.sub_details = ""
		this.ctrl.timestamp.accept_char = ""
		this.ctrl.timestamp.currency_format = ""
		this.ctrl.timestamp.data_scale = ""
		this.ctrl.timestamp.binding_name = "TIMESTAMP"
		this.ctrl.timestamp.hide_label = false
		this.ctrl.timestamp.depends_on = ""
		this.ctrl.timestamp.placeholder = ""
		this.ctrl.timestamp.dynamic_param = ""
		this.ctrl.timestamp.style_code = ""
		this.ctrl.timestamp.data_source = ""
		this.ctrl.timestamp.image_association = ""
		this.ctrl.timestamp.show = true
		this.ctrl.timestamp.sub_content = ""
		this.ctrl.timestamp.required = false
		this.ctrl.timestamp.vld_rules = []
		this.ctrl.timestamp.targetcolumn_lower = "timestamp"
		this.ctrl.timestamp.disabled = false
		this.ctrl.timestamp.view_name = "f_npss_payment_status_report_srch"
		this.ctrl.timestamp.ctrl_id = "npss_payment_status_report_srch_timestamp"
		this.ctrl.npss_payment_status_report_srch_timestamp = {}
		this.ctrl.npss_payment_status_report_srch_timestamp.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory20
		this.ctrl.memory20 = {}
		this.ctrl.memory20.id = "RN01CN4"
		this.ctrl.memory20.desc = "Created Date"
		this.ctrl.memory20.visible = true
		this.ctrl.memory20.label_name = "Created Date"
		this.ctrl.memory20.df_code = "DF_1304_1681973942147"
		this.ctrl.memory20.df_description = "Column Group 1"
		this.ctrl.memory20.uictrl_code = "CDN_DATE"
		this.ctrl.memory20.target_column = "memory20"
		this.ctrl.memory20.data_type = "DATETIME"
		this.ctrl.memory20.data_length = 0
		this.ctrl.memory20.zone_df_code = "DF_1304_1681973942147"
		this.ctrl.memory20.default_value = "setcurrentdate(),{}"
		this.ctrl.memory20.is_memory_ctrl = "Y"
		this.ctrl.memory20.field_coordinates = ""
		this.ctrl.memory20.sub_details = ""
		this.ctrl.memory20.accept_char = ""
		this.ctrl.memory20.currency_format = ""
		this.ctrl.memory20.data_scale = ""
		this.ctrl.memory20.binding_name = "CREATED_DATE"
		this.ctrl.memory20.hide_label = false
		this.ctrl.memory20.depends_on = ""
		this.ctrl.memory20.placeholder = ""
		this.ctrl.memory20.dynamic_param = ""
		this.ctrl.memory20.style_code = ""
		this.ctrl.memory20.data_source = ""
		this.ctrl.memory20.image_association = ""
		this.ctrl.memory20.show = true
		this.ctrl.memory20.sub_content = ""
		this.ctrl.memory20.required = false
		this.ctrl.memory20.vld_rules = []
		this.ctrl.memory20.targetcolumn_lower = "memory20"
		this.ctrl.memory20.disabled = false
		this.ctrl.memory20.view_name = "f_npss_payment_status_report_srch"
		this.ctrl.memory20.ctrl_id = "npss_payment_status_report_srch_memory20"
		this.ctrl.npss_payment_status_report_srch_memory20 = {}
		this.ctrl.npss_payment_status_report_srch_memory20.onChangecomponent = new EventEmitter<any>()
	
		//Properties of sender
		this.ctrl.sender = {}
		this.ctrl.sender.id = "RN11CN6"
		this.ctrl.sender.desc = "Sender"
		this.ctrl.sender.visible = true
		this.ctrl.sender.label_name = "Sender"
		this.ctrl.sender.df_code = "DF_1304_1681973942147"
		this.ctrl.sender.df_description = "Column Group 1"
		this.ctrl.sender.uictrl_code = "CDN_CTRL"
		this.ctrl.sender.target_column = "SENDER"
		this.ctrl.sender.data_type = "TEXT"
		this.ctrl.sender.data_length = 32
		this.ctrl.sender.zone_df_code = "DF_1304_1681973942147"
		this.ctrl.sender.default_value = ""
		this.ctrl.sender.is_memory_ctrl = ""
		this.ctrl.sender.field_coordinates = ""
		this.ctrl.sender.sub_details = ""
		this.ctrl.sender.accept_char = ""
		this.ctrl.sender.currency_format = ""
		this.ctrl.sender.data_scale = ""
		this.ctrl.sender.binding_name = "SENDER"
		this.ctrl.sender.hide_label = false
		this.ctrl.sender.depends_on = ""
		this.ctrl.sender.placeholder = ""
		this.ctrl.sender.dynamic_param = ""
		this.ctrl.sender.style_code = ""
		this.ctrl.sender.data_source = ""
		this.ctrl.sender.image_association = ""
		this.ctrl.sender.show = true
		this.ctrl.sender.sub_content = ""
		this.ctrl.sender.required = false
		this.ctrl.sender.vld_rules = []
		this.ctrl.sender.targetcolumn_lower = "sender"
		this.ctrl.sender.disabled = false
		this.ctrl.sender.view_name = "f_npss_payment_status_report_srch"
		this.ctrl.sender.ctrl_id = "npss_payment_status_report_srch_sender"
		this.ctrl.npss_payment_status_report_srch_sender = {}
		this.ctrl.npss_payment_status_report_srch_sender.onChangecomponent = new EventEmitter<any>()
	
		//Properties of receiver
		this.ctrl.receiver = {}
		this.ctrl.receiver.id = "RN11CN8"
		this.ctrl.receiver.desc = "Receiver"
		this.ctrl.receiver.visible = true
		this.ctrl.receiver.label_name = "Receiver"
		this.ctrl.receiver.df_code = "DF_1304_1681973942147"
		this.ctrl.receiver.df_description = "Column Group 1"
		this.ctrl.receiver.uictrl_code = "CDN_CTRL"
		this.ctrl.receiver.target_column = "RECEIVER"
		this.ctrl.receiver.data_type = "TEXT"
		this.ctrl.receiver.data_length = 32
		this.ctrl.receiver.zone_df_code = "DF_1304_1681973942147"
		this.ctrl.receiver.default_value = ""
		this.ctrl.receiver.is_memory_ctrl = ""
		this.ctrl.receiver.field_coordinates = ""
		this.ctrl.receiver.sub_details = ""
		this.ctrl.receiver.accept_char = ""
		this.ctrl.receiver.currency_format = ""
		this.ctrl.receiver.data_scale = ""
		this.ctrl.receiver.binding_name = "RECEIVER"
		this.ctrl.receiver.hide_label = false
		this.ctrl.receiver.depends_on = ""
		this.ctrl.receiver.placeholder = ""
		this.ctrl.receiver.dynamic_param = ""
		this.ctrl.receiver.style_code = ""
		this.ctrl.receiver.data_source = ""
		this.ctrl.receiver.image_association = ""
		this.ctrl.receiver.show = true
		this.ctrl.receiver.sub_content = ""
		this.ctrl.receiver.required = false
		this.ctrl.receiver.vld_rules = []
		this.ctrl.receiver.targetcolumn_lower = "receiver"
		this.ctrl.receiver.disabled = false
		this.ctrl.receiver.view_name = "f_npss_payment_status_report_srch"
		this.ctrl.receiver.ctrl_id = "npss_payment_status_report_srch_receiver"
		this.ctrl.npss_payment_status_report_srch_receiver = {}
		this.ctrl.npss_payment_status_report_srch_receiver.onChangecomponent = new EventEmitter<any>()
	
		//Properties of beneficiary
		this.ctrl.beneficiary = {}
		this.ctrl.beneficiary.id = "RN21CN9"
		this.ctrl.beneficiary.desc = "Beneficiary"
		this.ctrl.beneficiary.visible = true
		this.ctrl.beneficiary.label_name = "Beneficiary"
		this.ctrl.beneficiary.df_code = "DF_1304_1681973942147"
		this.ctrl.beneficiary.df_description = "Column Group 1"
		this.ctrl.beneficiary.uictrl_code = "CDN_CTRL"
		this.ctrl.beneficiary.target_column = "BENEFICIARY"
		this.ctrl.beneficiary.data_type = "TEXT"
		this.ctrl.beneficiary.data_length = 32
		this.ctrl.beneficiary.zone_df_code = "DF_1304_1681973942147"
		this.ctrl.beneficiary.default_value = ""
		this.ctrl.beneficiary.is_memory_ctrl = ""
		this.ctrl.beneficiary.field_coordinates = ""
		this.ctrl.beneficiary.sub_details = ""
		this.ctrl.beneficiary.accept_char = ""
		this.ctrl.beneficiary.currency_format = ""
		this.ctrl.beneficiary.data_scale = ""
		this.ctrl.beneficiary.binding_name = "BENEFICIARY"
		this.ctrl.beneficiary.hide_label = false
		this.ctrl.beneficiary.depends_on = ""
		this.ctrl.beneficiary.placeholder = ""
		this.ctrl.beneficiary.dynamic_param = ""
		this.ctrl.beneficiary.style_code = ""
		this.ctrl.beneficiary.data_source = ""
		this.ctrl.beneficiary.image_association = ""
		this.ctrl.beneficiary.show = true
		this.ctrl.beneficiary.sub_content = ""
		this.ctrl.beneficiary.required = false
		this.ctrl.beneficiary.vld_rules = []
		this.ctrl.beneficiary.targetcolumn_lower = "beneficiary"
		this.ctrl.beneficiary.disabled = false
		this.ctrl.beneficiary.view_name = "f_npss_payment_status_report_srch"
		this.ctrl.beneficiary.ctrl_id = "npss_payment_status_report_srch_beneficiary"
		this.ctrl.npss_payment_status_report_srch_beneficiary = {}
		this.ctrl.npss_payment_status_report_srch_beneficiary.onChangecomponent = new EventEmitter<any>()
	
		//Properties of payer
		this.ctrl.payer = {}
		this.ctrl.payer.id = "RN11CN7"
		this.ctrl.payer.desc = "Payer"
		this.ctrl.payer.visible = true
		this.ctrl.payer.label_name = "Payer"
		this.ctrl.payer.df_code = "DF_1304_1681973942147"
		this.ctrl.payer.df_description = "Column Group 1"
		this.ctrl.payer.uictrl_code = "CDN_CTRL"
		this.ctrl.payer.target_column = "PAYER"
		this.ctrl.payer.data_type = "TEXT"
		this.ctrl.payer.data_length = 32
		this.ctrl.payer.zone_df_code = "DF_1304_1681973942147"
		this.ctrl.payer.default_value = ""
		this.ctrl.payer.is_memory_ctrl = ""
		this.ctrl.payer.field_coordinates = ""
		this.ctrl.payer.sub_details = ""
		this.ctrl.payer.accept_char = ""
		this.ctrl.payer.currency_format = ""
		this.ctrl.payer.data_scale = ""
		this.ctrl.payer.binding_name = "PAYER"
		this.ctrl.payer.hide_label = false
		this.ctrl.payer.depends_on = ""
		this.ctrl.payer.placeholder = ""
		this.ctrl.payer.dynamic_param = ""
		this.ctrl.payer.style_code = ""
		this.ctrl.payer.data_source = ""
		this.ctrl.payer.image_association = ""
		this.ctrl.payer.show = true
		this.ctrl.payer.sub_content = ""
		this.ctrl.payer.required = false
		this.ctrl.payer.vld_rules = []
		this.ctrl.payer.targetcolumn_lower = "payer"
		this.ctrl.payer.disabled = false
		this.ctrl.payer.view_name = "f_npss_payment_status_report_srch"
		this.ctrl.payer.ctrl_id = "npss_payment_status_report_srch_payer"
		this.ctrl.npss_payment_status_report_srch_payer = {}
		this.ctrl.npss_payment_status_report_srch_payer.onChangecomponent = new EventEmitter<any>()
	
		//Properties of amount
		this.ctrl.amount = {}
		this.ctrl.amount.id = "RN21CN10"
		this.ctrl.amount.desc = "Amount"
		this.ctrl.amount.visible = true
		this.ctrl.amount.label_name = "Amount"
		this.ctrl.amount.df_code = "DF_1304_1681973942147"
		this.ctrl.amount.df_description = "Column Group 1"
		this.ctrl.amount.uictrl_code = "CDN_CTRL"
		this.ctrl.amount.target_column = "AMOUNT"
		this.ctrl.amount.data_type = "NUMBER"
		this.ctrl.amount.data_length = 19
		this.ctrl.amount.zone_df_code = "DF_1304_1681973942147"
		this.ctrl.amount.default_value = ""
		this.ctrl.amount.is_memory_ctrl = ""
		this.ctrl.amount.field_coordinates = ""
		this.ctrl.amount.sub_details = ""
		this.ctrl.amount.accept_char = ""
		this.ctrl.amount.currency_format = ""
		this.ctrl.amount.data_scale = "2"
		this.ctrl.amount.binding_name = "AMOUNT"
		this.ctrl.amount.hide_label = false
		this.ctrl.amount.depends_on = ""
		this.ctrl.amount.placeholder = ""
		this.ctrl.amount.dynamic_param = ""
		this.ctrl.amount.style_code = ""
		this.ctrl.amount.data_source = ""
		this.ctrl.amount.image_association = ""
		this.ctrl.amount.show = true
		this.ctrl.amount.sub_content = ""
		this.ctrl.amount.required = false
		this.ctrl.amount.vld_rules = []
		this.ctrl.amount.targetcolumn_lower = "amount"
		this.ctrl.amount.disabled = false
		this.ctrl.amount.view_name = "f_npss_payment_status_report_srch"
		this.ctrl.amount.ctrl_id = "npss_payment_status_report_srch_amount"
		this.ctrl.npss_payment_status_report_srch_amount = {}
		this.ctrl.npss_payment_status_report_srch_amount.onChangecomponent = new EventEmitter<any>()
	
		//Properties of currency
		this.ctrl.currency = {}
		this.ctrl.currency.id = "RN21CN11"
		this.ctrl.currency.desc = "Currency"
		this.ctrl.currency.visible = true
		this.ctrl.currency.label_name = "Currency"
		this.ctrl.currency.df_code = "DF_1304_1681973942147"
		this.ctrl.currency.df_description = "Column Group 1"
		this.ctrl.currency.uictrl_code = "CDN_CTRL"
		this.ctrl.currency.target_column = "CURRENCY"
		this.ctrl.currency.data_type = "TEXT"
		this.ctrl.currency.data_length = 3
		this.ctrl.currency.zone_df_code = "DF_1304_1681973942147"
		this.ctrl.currency.default_value = ""
		this.ctrl.currency.is_memory_ctrl = ""
		this.ctrl.currency.field_coordinates = ""
		this.ctrl.currency.sub_details = ""
		this.ctrl.currency.accept_char = ""
		this.ctrl.currency.currency_format = ""
		this.ctrl.currency.data_scale = ""
		this.ctrl.currency.binding_name = "CURRENCY"
		this.ctrl.currency.hide_label = false
		this.ctrl.currency.depends_on = ""
		this.ctrl.currency.placeholder = ""
		this.ctrl.currency.dynamic_param = ""
		this.ctrl.currency.style_code = ""
		this.ctrl.currency.data_source = ""
		this.ctrl.currency.image_association = ""
		this.ctrl.currency.show = true
		this.ctrl.currency.sub_content = ""
		this.ctrl.currency.required = false
		this.ctrl.currency.vld_rules = []
		this.ctrl.currency.targetcolumn_lower = "currency"
		this.ctrl.currency.disabled = false
		this.ctrl.currency.view_name = "f_npss_payment_status_report_srch"
		this.ctrl.currency.ctrl_id = "npss_payment_status_report_srch_currency"
		this.ctrl.npss_payment_status_report_srch_currency = {}
		this.ctrl.npss_payment_status_report_srch_currency.onChangecomponent = new EventEmitter<any>()
	
		//Properties of payment_status
		this.ctrl.payment_status = {}
		this.ctrl.payment_status.id = "RN31CN12"
		this.ctrl.payment_status.desc = "Payment Status"
		this.ctrl.payment_status.visible = true
		this.ctrl.payment_status.label_name = "Payment Status"
		this.ctrl.payment_status.df_code = "DF_1304_1681973942147"
		this.ctrl.payment_status.df_description = "Column Group 1"
		this.ctrl.payment_status.uictrl_code = "CDN_CTRL"
		this.ctrl.payment_status.target_column = "PAYMENT_STATUS"
		this.ctrl.payment_status.data_type = "TEXT"
		this.ctrl.payment_status.data_length = 32
		this.ctrl.payment_status.zone_df_code = "DF_1304_1681973942147"
		this.ctrl.payment_status.default_value = ""
		this.ctrl.payment_status.is_memory_ctrl = ""
		this.ctrl.payment_status.field_coordinates = ""
		this.ctrl.payment_status.sub_details = ""
		this.ctrl.payment_status.accept_char = ""
		this.ctrl.payment_status.currency_format = ""
		this.ctrl.payment_status.data_scale = ""
		this.ctrl.payment_status.binding_name = "PAYMENT_STATUS"
		this.ctrl.payment_status.hide_label = false
		this.ctrl.payment_status.depends_on = ""
		this.ctrl.payment_status.placeholder = ""
		this.ctrl.payment_status.dynamic_param = ""
		this.ctrl.payment_status.style_code = ""
		this.ctrl.payment_status.data_source = ""
		this.ctrl.payment_status.image_association = ""
		this.ctrl.payment_status.show = true
		this.ctrl.payment_status.sub_content = ""
		this.ctrl.payment_status.required = false
		this.ctrl.payment_status.vld_rules = []
		this.ctrl.payment_status.targetcolumn_lower = "payment_status"
		this.ctrl.payment_status.disabled = false
		this.ctrl.payment_status.view_name = "f_npss_payment_status_report_srch"
		this.ctrl.payment_status.ctrl_id = "npss_payment_status_report_srch_payment_status"
		this.ctrl.npss_payment_status_report_srch_payment_status = {}
		this.ctrl.npss_payment_status_report_srch_payment_status.onChangecomponent = new EventEmitter<any>()
	
		//Properties of source
		this.ctrl.source = {}
		this.ctrl.source.id = "RN31CN13"
		this.ctrl.source.desc = "Source"
		this.ctrl.source.visible = true
		this.ctrl.source.label_name = "Source"
		this.ctrl.source.df_code = "DF_1304_1681973942147"
		this.ctrl.source.df_description = "Column Group 1"
		this.ctrl.source.uictrl_code = "CDN_CTRL"
		this.ctrl.source.target_column = "SOURCE"
		this.ctrl.source.data_type = "TEXT"
		this.ctrl.source.data_length = 64
		this.ctrl.source.zone_df_code = "DF_1304_1681973942147"
		this.ctrl.source.default_value = ""
		this.ctrl.source.is_memory_ctrl = ""
		this.ctrl.source.field_coordinates = ""
		this.ctrl.source.sub_details = ""
		this.ctrl.source.accept_char = ""
		this.ctrl.source.currency_format = ""
		this.ctrl.source.data_scale = ""
		this.ctrl.source.binding_name = "SOURCE"
		this.ctrl.source.hide_label = false
		this.ctrl.source.depends_on = ""
		this.ctrl.source.placeholder = ""
		this.ctrl.source.dynamic_param = ""
		this.ctrl.source.style_code = ""
		this.ctrl.source.data_source = ""
		this.ctrl.source.image_association = ""
		this.ctrl.source.show = true
		this.ctrl.source.sub_content = ""
		this.ctrl.source.required = false
		this.ctrl.source.vld_rules = []
		this.ctrl.source.targetcolumn_lower = "source"
		this.ctrl.source.disabled = false
		this.ctrl.source.view_name = "f_npss_payment_status_report_srch"
		this.ctrl.source.ctrl_id = "npss_payment_status_report_srch_source"
		this.ctrl.npss_payment_status_report_srch_source = {}
		this.ctrl.npss_payment_status_report_srch_source.onChangecomponent = new EventEmitter<any>()
	
		//Properties of sender_ref
		this.ctrl.sender_ref = {}
		this.ctrl.sender_ref.id = "RN31CN14"
		this.ctrl.sender_ref.desc = "Sender Reference"
		this.ctrl.sender_ref.visible = true
		this.ctrl.sender_ref.label_name = "Sender Reference"
		this.ctrl.sender_ref.df_code = "DF_1304_1681973942147"
		this.ctrl.sender_ref.df_description = "Column Group 1"
		this.ctrl.sender_ref.uictrl_code = "CDN_CTRL"
		this.ctrl.sender_ref.target_column = "SENDER_REF"
		this.ctrl.sender_ref.data_type = "TEXT"
		this.ctrl.sender_ref.data_length = 128
		this.ctrl.sender_ref.zone_df_code = "DF_1304_1681973942147"
		this.ctrl.sender_ref.default_value = ""
		this.ctrl.sender_ref.is_memory_ctrl = ""
		this.ctrl.sender_ref.field_coordinates = ""
		this.ctrl.sender_ref.sub_details = ""
		this.ctrl.sender_ref.accept_char = ""
		this.ctrl.sender_ref.currency_format = ""
		this.ctrl.sender_ref.data_scale = ""
		this.ctrl.sender_ref.binding_name = "SENDER_REF"
		this.ctrl.sender_ref.hide_label = false
		this.ctrl.sender_ref.depends_on = ""
		this.ctrl.sender_ref.placeholder = ""
		this.ctrl.sender_ref.dynamic_param = ""
		this.ctrl.sender_ref.style_code = ""
		this.ctrl.sender_ref.data_source = ""
		this.ctrl.sender_ref.image_association = ""
		this.ctrl.sender_ref.show = true
		this.ctrl.sender_ref.sub_content = ""
		this.ctrl.sender_ref.required = false
		this.ctrl.sender_ref.vld_rules = []
		this.ctrl.sender_ref.targetcolumn_lower = "sender_ref"
		this.ctrl.sender_ref.disabled = false
		this.ctrl.sender_ref.view_name = "f_npss_payment_status_report_srch"
		this.ctrl.sender_ref.ctrl_id = "npss_payment_status_report_srch_sender_ref"
		this.ctrl.npss_payment_status_report_srch_sender_ref = {}
		this.ctrl.npss_payment_status_report_srch_sender_ref.onChangecomponent = new EventEmitter<any>()
	
		//Properties of system_ref
		this.ctrl.system_ref = {}
		this.ctrl.system_ref.id = "RN41CN15"
		this.ctrl.system_ref.desc = "System Reference"
		this.ctrl.system_ref.visible = true
		this.ctrl.system_ref.label_name = "System Reference"
		this.ctrl.system_ref.df_code = "DF_1304_1681973942147"
		this.ctrl.system_ref.df_description = "Column Group 1"
		this.ctrl.system_ref.uictrl_code = "CDN_CTRL"
		this.ctrl.system_ref.target_column = "SYSTEM_REF"
		this.ctrl.system_ref.data_type = "TEXT"
		this.ctrl.system_ref.data_length = 128
		this.ctrl.system_ref.zone_df_code = "DF_1304_1681973942147"
		this.ctrl.system_ref.default_value = ""
		this.ctrl.system_ref.is_memory_ctrl = ""
		this.ctrl.system_ref.field_coordinates = ""
		this.ctrl.system_ref.sub_details = ""
		this.ctrl.system_ref.accept_char = ""
		this.ctrl.system_ref.currency_format = ""
		this.ctrl.system_ref.data_scale = ""
		this.ctrl.system_ref.binding_name = "SYSTEM_REF"
		this.ctrl.system_ref.hide_label = false
		this.ctrl.system_ref.depends_on = ""
		this.ctrl.system_ref.placeholder = ""
		this.ctrl.system_ref.dynamic_param = ""
		this.ctrl.system_ref.style_code = ""
		this.ctrl.system_ref.data_source = ""
		this.ctrl.system_ref.image_association = ""
		this.ctrl.system_ref.show = true
		this.ctrl.system_ref.sub_content = ""
		this.ctrl.system_ref.required = false
		this.ctrl.system_ref.vld_rules = []
		this.ctrl.system_ref.targetcolumn_lower = "system_ref"
		this.ctrl.system_ref.disabled = false
		this.ctrl.system_ref.view_name = "f_npss_payment_status_report_srch"
		this.ctrl.system_ref.ctrl_id = "npss_payment_status_report_srch_system_ref"
		this.ctrl.npss_payment_status_report_srch_system_ref = {}
		this.ctrl.npss_payment_status_report_srch_system_ref.onChangecomponent = new EventEmitter<any>()
	
		//Properties of batch_ref
		this.ctrl.batch_ref = {}
		this.ctrl.batch_ref.id = "RN41CN16"
		this.ctrl.batch_ref.desc = "Batch Reference"
		this.ctrl.batch_ref.visible = true
		this.ctrl.batch_ref.label_name = "Batch Reference"
		this.ctrl.batch_ref.df_code = "DF_1304_1681973942147"
		this.ctrl.batch_ref.df_description = "Column Group 1"
		this.ctrl.batch_ref.uictrl_code = "CDN_CTRL"
		this.ctrl.batch_ref.target_column = "BATCH_REF"
		this.ctrl.batch_ref.data_type = "TEXT"
		this.ctrl.batch_ref.data_length = 128
		this.ctrl.batch_ref.zone_df_code = "DF_1304_1681973942147"
		this.ctrl.batch_ref.default_value = ""
		this.ctrl.batch_ref.is_memory_ctrl = ""
		this.ctrl.batch_ref.field_coordinates = ""
		this.ctrl.batch_ref.sub_details = ""
		this.ctrl.batch_ref.accept_char = ""
		this.ctrl.batch_ref.currency_format = ""
		this.ctrl.batch_ref.data_scale = ""
		this.ctrl.batch_ref.binding_name = "BATCH_REF"
		this.ctrl.batch_ref.hide_label = false
		this.ctrl.batch_ref.depends_on = ""
		this.ctrl.batch_ref.placeholder = ""
		this.ctrl.batch_ref.dynamic_param = ""
		this.ctrl.batch_ref.style_code = ""
		this.ctrl.batch_ref.data_source = ""
		this.ctrl.batch_ref.image_association = ""
		this.ctrl.batch_ref.show = true
		this.ctrl.batch_ref.sub_content = ""
		this.ctrl.batch_ref.required = false
		this.ctrl.batch_ref.vld_rules = []
		this.ctrl.batch_ref.targetcolumn_lower = "batch_ref"
		this.ctrl.batch_ref.disabled = false
		this.ctrl.batch_ref.view_name = "f_npss_payment_status_report_srch"
		this.ctrl.batch_ref.ctrl_id = "npss_payment_status_report_srch_batch_ref"
		this.ctrl.npss_payment_status_report_srch_batch_ref = {}
		this.ctrl.npss_payment_status_report_srch_batch_ref.onChangecomponent = new EventEmitter<any>()
	
		//Properties of originator_reference
		this.ctrl.originator_reference = {}
		this.ctrl.originator_reference.id = "RN01CN3"
		this.ctrl.originator_reference.desc = "Originator Reference"
		this.ctrl.originator_reference.visible = true
		this.ctrl.originator_reference.label_name = "Originator Reference"
		this.ctrl.originator_reference.df_code = "DF_1304_1681973942147"
		this.ctrl.originator_reference.df_description = "Column Group 1"
		this.ctrl.originator_reference.uictrl_code = "CDN_CTRL"
		this.ctrl.originator_reference.target_column = "ORIGINATOR_REFERENCE"
		this.ctrl.originator_reference.data_type = "TEXT"
		this.ctrl.originator_reference.data_length = 128
		this.ctrl.originator_reference.zone_df_code = "DF_1304_1681973942147"
		this.ctrl.originator_reference.default_value = ""
		this.ctrl.originator_reference.is_memory_ctrl = ""
		this.ctrl.originator_reference.field_coordinates = ""
		this.ctrl.originator_reference.sub_details = ""
		this.ctrl.originator_reference.accept_char = ""
		this.ctrl.originator_reference.currency_format = ""
		this.ctrl.originator_reference.data_scale = ""
		this.ctrl.originator_reference.binding_name = "ORIGINATOR_REFERENCE"
		this.ctrl.originator_reference.hide_label = false
		this.ctrl.originator_reference.depends_on = ""
		this.ctrl.originator_reference.placeholder = ""
		this.ctrl.originator_reference.dynamic_param = ""
		this.ctrl.originator_reference.style_code = ""
		this.ctrl.originator_reference.data_source = ""
		this.ctrl.originator_reference.image_association = ""
		this.ctrl.originator_reference.show = true
		this.ctrl.originator_reference.sub_content = ""
		this.ctrl.originator_reference.required = false
		this.ctrl.originator_reference.vld_rules = []
		this.ctrl.originator_reference.targetcolumn_lower = "originator_reference"
		this.ctrl.originator_reference.disabled = false
		this.ctrl.originator_reference.view_name = "f_npss_payment_status_report_srch"
		this.ctrl.originator_reference.ctrl_id = "npss_payment_status_report_srch_originator_reference"
		this.ctrl.npss_payment_status_report_srch_originator_reference = {}
		this.ctrl.npss_payment_status_report_srch_originator_reference.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_payment_status_report_srch.model = {"TIMESTAMP":"","MEMORY20":"setcurrentdate(),{}","SENDER":"","RECEIVER":"","BENEFICIARY":"","PAYER":"","AMOUNT":"","CURRENCY":"","PAYMENT_STATUS":"","SOURCE":"","SENDER_REF":"","SYSTEM_REF":"","BATCH_REF":"","ORIGINATOR_REFERENCE":""}
		this.screen_instance[this.comp_id].f_npss_payment_status_report_srch.Meta = [{"CTLR_CODE":"CDN_DATE","DATA_TYPE":"DATETIME","TARGET_COLUMN":"TIMESTAMP"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"SENDER"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"RECEIVER"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"BENEFICIARY"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"PAYER"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"NUMBER","TARGET_COLUMN":"AMOUNT"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"CURRENCY"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"PAYMENT_STATUS"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"SOURCE"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"SENDER_REF"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"SYSTEM_REF"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"BATCH_REF"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"ORIGINATOR_REFERENCE"}]
		this.screen_instance[this.comp_id].f_npss_payment_status_report_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_payment_status_report_srch.dtt_code = "dtt_1304_1681973868376"
		this.screen_instance[this.comp_id].f_npss_payment_status_report_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_payment_status_report_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_payment_status_report_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_payment_status_report_srch[control][property] = value;
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
    