/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35950 
Modified By     : Admin 
Modified Date   : 2024-Jul-04 10:19 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_batch_file_status_report
Form Name       : NPSS Batch File Status Report SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_batch_file_status_report_srch',
  templateUrl: './f_npss_batch_file_status_report_srch.component.html',
  styleUrls: ['./f_npss_batch_file_status_report_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_batch_file_status_report_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_batch_file_status_report_srch') form;
  @ViewChild('npss_batch_file_status_report_srch_batch_reference') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665901130705"
	dtt_code : string = "dtt_1304_1681974988885"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of batch_reference
		this.ctrl.batch_reference = {}
		this.ctrl.batch_reference.id = "RN01CN1"
		this.ctrl.batch_reference.desc = "Batch Reference"
		this.ctrl.batch_reference.visible = true
		this.ctrl.batch_reference.label_name = "Batch Reference"
		this.ctrl.batch_reference.df_code = "DF_1304_1681975038940"
		this.ctrl.batch_reference.df_description = "Column Group 1"
		this.ctrl.batch_reference.uictrl_code = "CDN_CTRL"
		this.ctrl.batch_reference.target_column = "BATCH_REFERENCE"
		this.ctrl.batch_reference.data_type = "TEXT"
		this.ctrl.batch_reference.data_length = 128
		this.ctrl.batch_reference.zone_df_code = "DF_1304_1681975038940"
		this.ctrl.batch_reference.default_value = ""
		this.ctrl.batch_reference.is_memory_ctrl = ""
		this.ctrl.batch_reference.field_coordinates = ""
		this.ctrl.batch_reference.sub_details = ""
		this.ctrl.batch_reference.accept_char = ""
		this.ctrl.batch_reference.currency_format = ""
		this.ctrl.batch_reference.data_scale = ""
		this.ctrl.batch_reference.binding_name = "BATCH_REFERENCE"
		this.ctrl.batch_reference.hide_label = false
		this.ctrl.batch_reference.depends_on = ""
		this.ctrl.batch_reference.placeholder = ""
		this.ctrl.batch_reference.dynamic_param = ""
		this.ctrl.batch_reference.style_code = ""
		this.ctrl.batch_reference.data_source = ""
		this.ctrl.batch_reference.image_association = ""
		this.ctrl.batch_reference.show = true
		this.ctrl.batch_reference.sub_content = ""
		this.ctrl.batch_reference.required = false
		this.ctrl.batch_reference.vld_rules = []
		this.ctrl.batch_reference.targetcolumn_lower = "batch_reference"
		this.ctrl.batch_reference.disabled = false
		this.ctrl.batch_reference.view_name = "f_npss_batch_file_status_report_srch"
		this.ctrl.batch_reference.ctrl_id = "npss_batch_file_status_report_srch_batch_reference"
		this.ctrl.npss_batch_file_status_report_srch_batch_reference = {}
		this.ctrl.npss_batch_file_status_report_srch_batch_reference.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cycle_number
		this.ctrl.cycle_number = {}
		this.ctrl.cycle_number.id = "RN01CN2"
		this.ctrl.cycle_number.desc = "Cycle Number"
		this.ctrl.cycle_number.visible = true
		this.ctrl.cycle_number.label_name = "Cycle Number"
		this.ctrl.cycle_number.df_code = "DF_1304_1681975038940"
		this.ctrl.cycle_number.df_description = "Column Group 1"
		this.ctrl.cycle_number.uictrl_code = "CDN_CTRL"
		this.ctrl.cycle_number.target_column = "CYCLE_NUMBER"
		this.ctrl.cycle_number.data_type = "NUMBER"
		this.ctrl.cycle_number.data_length = 9
		this.ctrl.cycle_number.zone_df_code = "DF_1304_1681975038940"
		this.ctrl.cycle_number.default_value = ""
		this.ctrl.cycle_number.is_memory_ctrl = ""
		this.ctrl.cycle_number.field_coordinates = ""
		this.ctrl.cycle_number.sub_details = ""
		this.ctrl.cycle_number.accept_char = ""
		this.ctrl.cycle_number.currency_format = ""
		this.ctrl.cycle_number.data_scale = ""
		this.ctrl.cycle_number.binding_name = "CYCLE_NUMBER"
		this.ctrl.cycle_number.hide_label = false
		this.ctrl.cycle_number.depends_on = ""
		this.ctrl.cycle_number.placeholder = ""
		this.ctrl.cycle_number.dynamic_param = ""
		this.ctrl.cycle_number.style_code = ""
		this.ctrl.cycle_number.data_source = ""
		this.ctrl.cycle_number.image_association = ""
		this.ctrl.cycle_number.show = true
		this.ctrl.cycle_number.sub_content = ""
		this.ctrl.cycle_number.required = false
		this.ctrl.cycle_number.vld_rules = []
		this.ctrl.cycle_number.targetcolumn_lower = "cycle_number"
		this.ctrl.cycle_number.disabled = false
		this.ctrl.cycle_number.view_name = "f_npss_batch_file_status_report_srch"
		this.ctrl.cycle_number.ctrl_id = "npss_batch_file_status_report_srch_cycle_number"
		this.ctrl.npss_batch_file_status_report_srch_cycle_number = {}
		this.ctrl.npss_batch_file_status_report_srch_cycle_number.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory10
		this.ctrl.memory10 = {}
		this.ctrl.memory10.id = "RN11CN3"
		this.ctrl.memory10.desc = "Created Date"
		this.ctrl.memory10.visible = true
		this.ctrl.memory10.label_name = "Created Date"
		this.ctrl.memory10.df_code = "DF_1304_1681975038940"
		this.ctrl.memory10.df_description = "Column Group 1"
		this.ctrl.memory10.uictrl_code = "CDN_DATE"
		this.ctrl.memory10.target_column = "memory10"
		this.ctrl.memory10.data_type = "DATETIME"
		this.ctrl.memory10.data_length = 0
		this.ctrl.memory10.zone_df_code = "DF_1304_1681975038940"
		this.ctrl.memory10.default_value = "setcurrentdate(),{}"
		this.ctrl.memory10.is_memory_ctrl = "Y"
		this.ctrl.memory10.field_coordinates = ""
		this.ctrl.memory10.sub_details = ""
		this.ctrl.memory10.accept_char = ""
		this.ctrl.memory10.currency_format = ""
		this.ctrl.memory10.data_scale = ""
		this.ctrl.memory10.binding_name = "CREATED_DATE"
		this.ctrl.memory10.hide_label = false
		this.ctrl.memory10.depends_on = ""
		this.ctrl.memory10.placeholder = ""
		this.ctrl.memory10.dynamic_param = ""
		this.ctrl.memory10.style_code = ""
		this.ctrl.memory10.data_source = ""
		this.ctrl.memory10.image_association = ""
		this.ctrl.memory10.show = true
		this.ctrl.memory10.sub_content = ""
		this.ctrl.memory10.required = false
		this.ctrl.memory10.vld_rules = []
		this.ctrl.memory10.targetcolumn_lower = "memory10"
		this.ctrl.memory10.disabled = false
		this.ctrl.memory10.view_name = "f_npss_batch_file_status_report_srch"
		this.ctrl.memory10.ctrl_id = "npss_batch_file_status_report_srch_memory10"
		this.ctrl.npss_batch_file_status_report_srch_memory10 = {}
		this.ctrl.npss_batch_file_status_report_srch_memory10.onChangecomponent = new EventEmitter<any>()
	
		//Properties of fsvd
		this.ctrl.fsvd = {}
		this.ctrl.fsvd.id = "RN11CN4"
		this.ctrl.fsvd.desc = "FSVD"
		this.ctrl.fsvd.visible = true
		this.ctrl.fsvd.label_name = "FSVD"
		this.ctrl.fsvd.df_code = "DF_1304_1681975038940"
		this.ctrl.fsvd.df_description = "Column Group 1"
		this.ctrl.fsvd.uictrl_code = "CDN_CTRL"
		this.ctrl.fsvd.target_column = "FSVD"
		this.ctrl.fsvd.data_type = "TEXT"
		this.ctrl.fsvd.data_length = 32
		this.ctrl.fsvd.zone_df_code = "DF_1304_1681975038940"
		this.ctrl.fsvd.default_value = ""
		this.ctrl.fsvd.is_memory_ctrl = ""
		this.ctrl.fsvd.field_coordinates = ""
		this.ctrl.fsvd.sub_details = ""
		this.ctrl.fsvd.accept_char = ""
		this.ctrl.fsvd.currency_format = ""
		this.ctrl.fsvd.data_scale = ""
		this.ctrl.fsvd.binding_name = "FSVD"
		this.ctrl.fsvd.hide_label = false
		this.ctrl.fsvd.depends_on = ""
		this.ctrl.fsvd.placeholder = ""
		this.ctrl.fsvd.dynamic_param = ""
		this.ctrl.fsvd.style_code = ""
		this.ctrl.fsvd.data_source = ""
		this.ctrl.fsvd.image_association = ""
		this.ctrl.fsvd.show = true
		this.ctrl.fsvd.sub_content = ""
		this.ctrl.fsvd.required = false
		this.ctrl.fsvd.vld_rules = []
		this.ctrl.fsvd.targetcolumn_lower = "fsvd"
		this.ctrl.fsvd.disabled = false
		this.ctrl.fsvd.view_name = "f_npss_batch_file_status_report_srch"
		this.ctrl.fsvd.ctrl_id = "npss_batch_file_status_report_srch_fsvd"
		this.ctrl.npss_batch_file_status_report_srch_fsvd = {}
		this.ctrl.npss_batch_file_status_report_srch_fsvd.onChangecomponent = new EventEmitter<any>()
	
		//Properties of submission_time
		this.ctrl.submission_time = {}
		this.ctrl.submission_time.id = "RN21CN7"
		this.ctrl.submission_time.desc = "Submission Time"
		this.ctrl.submission_time.visible = true
		this.ctrl.submission_time.label_name = "Submission Time"
		this.ctrl.submission_time.df_code = "DF_1304_1681975038940"
		this.ctrl.submission_time.df_description = "Column Group 1"
		this.ctrl.submission_time.uictrl_code = "CDN_CTRL"
		this.ctrl.submission_time.target_column = "SUBMISSION_TIME"
		this.ctrl.submission_time.data_type = "TEXT"
		this.ctrl.submission_time.data_length = 32
		this.ctrl.submission_time.zone_df_code = "DF_1304_1681975038940"
		this.ctrl.submission_time.default_value = ""
		this.ctrl.submission_time.is_memory_ctrl = ""
		this.ctrl.submission_time.field_coordinates = ""
		this.ctrl.submission_time.sub_details = ""
		this.ctrl.submission_time.accept_char = ""
		this.ctrl.submission_time.currency_format = ""
		this.ctrl.submission_time.data_scale = ""
		this.ctrl.submission_time.binding_name = "SUBMISSION_TIME"
		this.ctrl.submission_time.hide_label = false
		this.ctrl.submission_time.depends_on = ""
		this.ctrl.submission_time.placeholder = ""
		this.ctrl.submission_time.dynamic_param = ""
		this.ctrl.submission_time.style_code = ""
		this.ctrl.submission_time.data_source = ""
		this.ctrl.submission_time.image_association = ""
		this.ctrl.submission_time.show = true
		this.ctrl.submission_time.sub_content = ""
		this.ctrl.submission_time.required = false
		this.ctrl.submission_time.vld_rules = []
		this.ctrl.submission_time.targetcolumn_lower = "submission_time"
		this.ctrl.submission_time.disabled = false
		this.ctrl.submission_time.view_name = "f_npss_batch_file_status_report_srch"
		this.ctrl.submission_time.ctrl_id = "npss_batch_file_status_report_srch_submission_time"
		this.ctrl.npss_batch_file_status_report_srch_submission_time = {}
		this.ctrl.npss_batch_file_status_report_srch_submission_time.onChangecomponent = new EventEmitter<any>()
	
		//Properties of completion_time
		this.ctrl.completion_time = {}
		this.ctrl.completion_time.id = "RN21CN5"
		this.ctrl.completion_time.desc = "Completion Time"
		this.ctrl.completion_time.visible = true
		this.ctrl.completion_time.label_name = "Completion Time"
		this.ctrl.completion_time.df_code = "DF_1304_1681975038940"
		this.ctrl.completion_time.df_description = "Column Group 1"
		this.ctrl.completion_time.uictrl_code = "CDN_CTRL"
		this.ctrl.completion_time.target_column = "COMPLETION_TIME"
		this.ctrl.completion_time.data_type = "TEXT"
		this.ctrl.completion_time.data_length = 32
		this.ctrl.completion_time.zone_df_code = "DF_1304_1681975038940"
		this.ctrl.completion_time.default_value = ""
		this.ctrl.completion_time.is_memory_ctrl = ""
		this.ctrl.completion_time.field_coordinates = ""
		this.ctrl.completion_time.sub_details = ""
		this.ctrl.completion_time.accept_char = ""
		this.ctrl.completion_time.currency_format = ""
		this.ctrl.completion_time.data_scale = ""
		this.ctrl.completion_time.binding_name = "COMPLETION_TIME"
		this.ctrl.completion_time.hide_label = false
		this.ctrl.completion_time.depends_on = ""
		this.ctrl.completion_time.placeholder = ""
		this.ctrl.completion_time.dynamic_param = ""
		this.ctrl.completion_time.style_code = ""
		this.ctrl.completion_time.data_source = ""
		this.ctrl.completion_time.image_association = ""
		this.ctrl.completion_time.show = true
		this.ctrl.completion_time.sub_content = ""
		this.ctrl.completion_time.required = false
		this.ctrl.completion_time.vld_rules = []
		this.ctrl.completion_time.targetcolumn_lower = "completion_time"
		this.ctrl.completion_time.disabled = false
		this.ctrl.completion_time.view_name = "f_npss_batch_file_status_report_srch"
		this.ctrl.completion_time.ctrl_id = "npss_batch_file_status_report_srch_completion_time"
		this.ctrl.npss_batch_file_status_report_srch_completion_time = {}
		this.ctrl.npss_batch_file_status_report_srch_completion_time.onChangecomponent = new EventEmitter<any>()
	
		//Properties of number_of_fsis
		this.ctrl.number_of_fsis = {}
		this.ctrl.number_of_fsis.id = "RN31CN9"
		this.ctrl.number_of_fsis.desc = "Number of Fsis"
		this.ctrl.number_of_fsis.visible = true
		this.ctrl.number_of_fsis.label_name = "Number of Fsis"
		this.ctrl.number_of_fsis.df_code = "DF_1304_1681975038940"
		this.ctrl.number_of_fsis.df_description = "Column Group 1"
		this.ctrl.number_of_fsis.uictrl_code = "CDN_CTRL"
		this.ctrl.number_of_fsis.target_column = "NUMBER_OF_FSIS"
		this.ctrl.number_of_fsis.data_type = "NUMBER"
		this.ctrl.number_of_fsis.data_length = 9
		this.ctrl.number_of_fsis.zone_df_code = "DF_1304_1681975038940"
		this.ctrl.number_of_fsis.default_value = ""
		this.ctrl.number_of_fsis.is_memory_ctrl = ""
		this.ctrl.number_of_fsis.field_coordinates = ""
		this.ctrl.number_of_fsis.sub_details = ""
		this.ctrl.number_of_fsis.accept_char = ""
		this.ctrl.number_of_fsis.currency_format = ""
		this.ctrl.number_of_fsis.data_scale = ""
		this.ctrl.number_of_fsis.binding_name = "NUMBER_OF_FSIS"
		this.ctrl.number_of_fsis.hide_label = false
		this.ctrl.number_of_fsis.depends_on = ""
		this.ctrl.number_of_fsis.placeholder = ""
		this.ctrl.number_of_fsis.dynamic_param = ""
		this.ctrl.number_of_fsis.style_code = ""
		this.ctrl.number_of_fsis.data_source = ""
		this.ctrl.number_of_fsis.image_association = ""
		this.ctrl.number_of_fsis.show = true
		this.ctrl.number_of_fsis.sub_content = ""
		this.ctrl.number_of_fsis.required = false
		this.ctrl.number_of_fsis.vld_rules = []
		this.ctrl.number_of_fsis.targetcolumn_lower = "number_of_fsis"
		this.ctrl.number_of_fsis.disabled = false
		this.ctrl.number_of_fsis.view_name = "f_npss_batch_file_status_report_srch"
		this.ctrl.number_of_fsis.ctrl_id = "npss_batch_file_status_report_srch_number_of_fsis"
		this.ctrl.npss_batch_file_status_report_srch_number_of_fsis = {}
		this.ctrl.npss_batch_file_status_report_srch_number_of_fsis.onChangecomponent = new EventEmitter<any>()
	
		//Properties of number_of_payments
		this.ctrl.number_of_payments = {}
		this.ctrl.number_of_payments.id = "RN31CN8"
		this.ctrl.number_of_payments.desc = "Number of Payments"
		this.ctrl.number_of_payments.visible = true
		this.ctrl.number_of_payments.label_name = "Number of Payments"
		this.ctrl.number_of_payments.df_code = "DF_1304_1681975038940"
		this.ctrl.number_of_payments.df_description = "Column Group 1"
		this.ctrl.number_of_payments.uictrl_code = "CDN_CTRL"
		this.ctrl.number_of_payments.target_column = "NUMBER_OF_PAYMENTS"
		this.ctrl.number_of_payments.data_type = "NUMBER"
		this.ctrl.number_of_payments.data_length = 9
		this.ctrl.number_of_payments.zone_df_code = "DF_1304_1681975038940"
		this.ctrl.number_of_payments.default_value = ""
		this.ctrl.number_of_payments.is_memory_ctrl = ""
		this.ctrl.number_of_payments.field_coordinates = ""
		this.ctrl.number_of_payments.sub_details = ""
		this.ctrl.number_of_payments.accept_char = ""
		this.ctrl.number_of_payments.currency_format = ""
		this.ctrl.number_of_payments.data_scale = ""
		this.ctrl.number_of_payments.binding_name = "NUMBER_OF_PAYMENTS"
		this.ctrl.number_of_payments.hide_label = false
		this.ctrl.number_of_payments.depends_on = ""
		this.ctrl.number_of_payments.placeholder = ""
		this.ctrl.number_of_payments.dynamic_param = ""
		this.ctrl.number_of_payments.style_code = ""
		this.ctrl.number_of_payments.data_source = ""
		this.ctrl.number_of_payments.image_association = ""
		this.ctrl.number_of_payments.show = true
		this.ctrl.number_of_payments.sub_content = ""
		this.ctrl.number_of_payments.required = false
		this.ctrl.number_of_payments.vld_rules = []
		this.ctrl.number_of_payments.targetcolumn_lower = "number_of_payments"
		this.ctrl.number_of_payments.disabled = false
		this.ctrl.number_of_payments.view_name = "f_npss_batch_file_status_report_srch"
		this.ctrl.number_of_payments.ctrl_id = "npss_batch_file_status_report_srch_number_of_payments"
		this.ctrl.npss_batch_file_status_report_srch_number_of_payments = {}
		this.ctrl.npss_batch_file_status_report_srch_number_of_payments.onChangecomponent = new EventEmitter<any>()
	
		//Properties of amount
		this.ctrl.amount = {}
		this.ctrl.amount.id = "RN41CN10"
		this.ctrl.amount.desc = "Amount"
		this.ctrl.amount.visible = true
		this.ctrl.amount.label_name = "Amount"
		this.ctrl.amount.df_code = "DF_1304_1681975038940"
		this.ctrl.amount.df_description = "Column Group 1"
		this.ctrl.amount.uictrl_code = "CDN_CTRL"
		this.ctrl.amount.target_column = "AMOUNT"
		this.ctrl.amount.data_type = "NUMBER"
		this.ctrl.amount.data_length = 19
		this.ctrl.amount.zone_df_code = "DF_1304_1681975038940"
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
		this.ctrl.amount.view_name = "f_npss_batch_file_status_report_srch"
		this.ctrl.amount.ctrl_id = "npss_batch_file_status_report_srch_amount"
		this.ctrl.npss_batch_file_status_report_srch_amount = {}
		this.ctrl.npss_batch_file_status_report_srch_amount.onChangecomponent = new EventEmitter<any>()
	
		//Properties of batch_file_status
		this.ctrl.batch_file_status = {}
		this.ctrl.batch_file_status.id = "RN41CN11"
		this.ctrl.batch_file_status.desc = "Batch File Status"
		this.ctrl.batch_file_status.visible = true
		this.ctrl.batch_file_status.label_name = "Batch File Status"
		this.ctrl.batch_file_status.df_code = "DF_1304_1681975038940"
		this.ctrl.batch_file_status.df_description = "Column Group 1"
		this.ctrl.batch_file_status.uictrl_code = "CDN_CTRL"
		this.ctrl.batch_file_status.target_column = "BATCH_FILE_STATUS"
		this.ctrl.batch_file_status.data_type = "TEXT"
		this.ctrl.batch_file_status.data_length = 32
		this.ctrl.batch_file_status.zone_df_code = "DF_1304_1681975038940"
		this.ctrl.batch_file_status.default_value = ""
		this.ctrl.batch_file_status.is_memory_ctrl = ""
		this.ctrl.batch_file_status.field_coordinates = ""
		this.ctrl.batch_file_status.sub_details = ""
		this.ctrl.batch_file_status.accept_char = ""
		this.ctrl.batch_file_status.currency_format = ""
		this.ctrl.batch_file_status.data_scale = ""
		this.ctrl.batch_file_status.binding_name = "BATCH_FILE_STATUS"
		this.ctrl.batch_file_status.hide_label = false
		this.ctrl.batch_file_status.depends_on = ""
		this.ctrl.batch_file_status.placeholder = ""
		this.ctrl.batch_file_status.dynamic_param = ""
		this.ctrl.batch_file_status.style_code = ""
		this.ctrl.batch_file_status.data_source = ""
		this.ctrl.batch_file_status.image_association = ""
		this.ctrl.batch_file_status.show = true
		this.ctrl.batch_file_status.sub_content = ""
		this.ctrl.batch_file_status.required = false
		this.ctrl.batch_file_status.vld_rules = []
		this.ctrl.batch_file_status.targetcolumn_lower = "batch_file_status"
		this.ctrl.batch_file_status.disabled = false
		this.ctrl.batch_file_status.view_name = "f_npss_batch_file_status_report_srch"
		this.ctrl.batch_file_status.ctrl_id = "npss_batch_file_status_report_srch_batch_file_status"
		this.ctrl.npss_batch_file_status_report_srch_batch_file_status = {}
		this.ctrl.npss_batch_file_status_report_srch_batch_file_status.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_batch_file_status_report_srch.model = {"BATCH_REFERENCE":"","CYCLE_NUMBER":"","MEMORY10":"setcurrentdate(),{}","FSVD":"","SUBMISSION_TIME":"","COMPLETION_TIME":"","NUMBER_OF_FSIS":"","NUMBER_OF_PAYMENTS":"","AMOUNT":"","BATCH_FILE_STATUS":""}
		this.screen_instance[this.comp_id].f_npss_batch_file_status_report_srch.Meta = [{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"BATCH_REFERENCE"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"NUMBER","TARGET_COLUMN":"CYCLE_NUMBER"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"FSVD"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"SUBMISSION_TIME"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"COMPLETION_TIME"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"NUMBER","TARGET_COLUMN":"NUMBER_OF_FSIS"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"NUMBER","TARGET_COLUMN":"NUMBER_OF_PAYMENTS"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"NUMBER","TARGET_COLUMN":"AMOUNT"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"BATCH_FILE_STATUS"}]
		this.screen_instance[this.comp_id].f_npss_batch_file_status_report_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_batch_file_status_report_srch.dtt_code = "dtt_1304_1681974988885"
		this.screen_instance[this.comp_id].f_npss_batch_file_status_report_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_batch_file_status_report_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_batch_file_status_report_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_batch_file_status_report_srch[control][property] = value;
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
    