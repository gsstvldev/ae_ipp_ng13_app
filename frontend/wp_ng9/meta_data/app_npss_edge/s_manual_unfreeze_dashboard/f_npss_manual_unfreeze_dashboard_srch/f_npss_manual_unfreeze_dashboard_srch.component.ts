/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34628 
Modified By     : Admin 
Modified Date   : 2024-Mar-05 8:14 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_manual_unfreeze_dashboard
Form Name       : NPSS Manual Unfreeze Dashboard SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_manual_unfreeze_dashboard_srch',
  templateUrl: './f_npss_manual_unfreeze_dashboard_srch.component.html',
  styleUrls: ['./f_npss_manual_unfreeze_dashboard_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_manual_unfreeze_dashboard_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_manual_unfreeze_dashboard_srch') form;
  @ViewChild('npss_manual_unfreeze_dashboard_srch_memory9') element: ElementRef;
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

  
		//Properties of memory9
		this.ctrl.memory9 = {}
		this.ctrl.memory9.id = "RN01CN1"
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
		this.ctrl.memory9.default_value = ""
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
		this.ctrl.memory9.view_name = "f_npss_manual_unfreeze_dashboard_srch"
		this.ctrl.memory9.ctrl_id = "npss_manual_unfreeze_dashboard_srch_memory9"
		this.ctrl.npss_manual_unfreeze_dashboard_srch_memory9 = {}
		this.ctrl.npss_manual_unfreeze_dashboard_srch_memory9.onChangecomponent = new EventEmitter<any>()
	
		//Properties of uetr
		this.ctrl.uetr = {}
		this.ctrl.uetr.id = "RN01CN1001"
		this.ctrl.uetr.desc = "UETR"
		this.ctrl.uetr.visible = true
		this.ctrl.uetr.label_name = "UETR"
		this.ctrl.uetr.df_code = "DF_1304_1665905157963"
		this.ctrl.uetr.df_description = "Column Group 1"
		this.ctrl.uetr.uictrl_code = "CDN_CTRL"
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
		this.ctrl.uetr.view_name = "f_npss_manual_unfreeze_dashboard_srch"
		this.ctrl.uetr.ctrl_id = "npss_manual_unfreeze_dashboard_srch_uetr"
		this.ctrl.npss_manual_unfreeze_dashboard_srch_uetr = {}
		this.ctrl.npss_manual_unfreeze_dashboard_srch_uetr.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_iban
		this.ctrl.dbtr_iban = {}
		this.ctrl.dbtr_iban.id = "RN11CN3"
		this.ctrl.dbtr_iban.desc = "Dr IBAN"
		this.ctrl.dbtr_iban.visible = true
		this.ctrl.dbtr_iban.label_name = "Dr IBAN"
		this.ctrl.dbtr_iban.df_code = "DF_1304_1665905157963"
		this.ctrl.dbtr_iban.df_description = "Column Group 1"
		this.ctrl.dbtr_iban.uictrl_code = "CDN_CTRL"
		this.ctrl.dbtr_iban.target_column = "DBTR_IBAN"
		this.ctrl.dbtr_iban.data_type = "TEXT"
		this.ctrl.dbtr_iban.data_length = 64
		this.ctrl.dbtr_iban.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.dbtr_iban.default_value = ""
		this.ctrl.dbtr_iban.is_memory_ctrl = ""
		this.ctrl.dbtr_iban.field_coordinates = ""
		this.ctrl.dbtr_iban.sub_details = ""
		this.ctrl.dbtr_iban.accept_char = ""
		this.ctrl.dbtr_iban.currency_format = ""
		this.ctrl.dbtr_iban.data_scale = ""
		this.ctrl.dbtr_iban.binding_name = "DBTR_IBAN"
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
		this.ctrl.dbtr_iban.view_name = "f_npss_manual_unfreeze_dashboard_srch"
		this.ctrl.dbtr_iban.ctrl_id = "npss_manual_unfreeze_dashboard_srch_dbtr_iban"
		this.ctrl.npss_manual_unfreeze_dashboard_srch_dbtr_iban = {}
		this.ctrl.npss_manual_unfreeze_dashboard_srch_dbtr_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of msg_id
		this.ctrl.msg_id = {}
		this.ctrl.msg_id.id = "RN11CN2"
		this.ctrl.msg_id.desc = "Message ID"
		this.ctrl.msg_id.visible = true
		this.ctrl.msg_id.label_name = "Message ID"
		this.ctrl.msg_id.df_code = "DF_1304_1665905157963"
		this.ctrl.msg_id.df_description = "Column Group 1"
		this.ctrl.msg_id.uictrl_code = "CDN_CTRL"
		this.ctrl.msg_id.target_column = "MSG_ID"
		this.ctrl.msg_id.data_type = "TEXT"
		this.ctrl.msg_id.data_length = 64
		this.ctrl.msg_id.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.msg_id.default_value = ""
		this.ctrl.msg_id.is_memory_ctrl = ""
		this.ctrl.msg_id.field_coordinates = ""
		this.ctrl.msg_id.sub_details = ""
		this.ctrl.msg_id.accept_char = ""
		this.ctrl.msg_id.currency_format = ""
		this.ctrl.msg_id.data_scale = ""
		this.ctrl.msg_id.binding_name = "MSG_ID"
		this.ctrl.msg_id.hide_label = false
		this.ctrl.msg_id.depends_on = ""
		this.ctrl.msg_id.placeholder = ""
		this.ctrl.msg_id.dynamic_param = ""
		this.ctrl.msg_id.style_code = ""
		this.ctrl.msg_id.data_source = ""
		this.ctrl.msg_id.image_association = ""
		this.ctrl.msg_id.show = true
		this.ctrl.msg_id.sub_content = ""
		this.ctrl.msg_id.required = true
		this.ctrl.msg_id.vld_rules = []
		this.ctrl.msg_id.targetcolumn_lower = "msg_id"
		this.ctrl.msg_id.disabled = false
		this.ctrl.msg_id.view_name = "f_npss_manual_unfreeze_dashboard_srch"
		this.ctrl.msg_id.ctrl_id = "npss_manual_unfreeze_dashboard_srch_msg_id"
		this.ctrl.npss_manual_unfreeze_dashboard_srch_msg_id = {}
		this.ctrl.npss_manual_unfreeze_dashboard_srch_msg_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of amount
		this.ctrl.amount = {}
		this.ctrl.amount.id = "RN21CN4"
		this.ctrl.amount.desc = "Amount"
		this.ctrl.amount.visible = false
		this.ctrl.amount.label_name = "Amount"
		this.ctrl.amount.df_code = "DF_1304_1665905157963"
		this.ctrl.amount.df_description = "Column Group 1"
		this.ctrl.amount.uictrl_code = "CDN_CTRL"
		this.ctrl.amount.target_column = "AMOUNT"
		this.ctrl.amount.data_type = "NUMBER"
		this.ctrl.amount.data_length = 19
		this.ctrl.amount.zone_df_code = "DF_1304_1665905157963"
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
		this.ctrl.amount.view_name = "f_npss_manual_unfreeze_dashboard_srch"
		this.ctrl.amount.ctrl_id = "npss_manual_unfreeze_dashboard_srch_amount"
		this.ctrl.npss_manual_unfreeze_dashboard_srch_amount = {}
		this.ctrl.npss_manual_unfreeze_dashboard_srch_amount.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_manual_unfreeze_dashboard_srch.model = {"MEMORY9":"","UETR":"","DBTR_IBAN":"","MSG_ID":"","AMOUNT":""}
		this.screen_instance[this.comp_id].f_npss_manual_unfreeze_dashboard_srch.Meta = [{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"UETR"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_IBAN"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"MSG_ID"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"NUMBER","TARGET_COLUMN":"AMOUNT"}]
		this.screen_instance[this.comp_id].f_npss_manual_unfreeze_dashboard_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_manual_unfreeze_dashboard_srch.dtt_code = "dtt_1304_1665905039255"
		this.screen_instance[this.comp_id].f_npss_manual_unfreeze_dashboard_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_manual_unfreeze_dashboard_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_manual_unfreeze_dashboard_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_manual_unfreeze_dashboard_srch[control][property] = value;
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
    