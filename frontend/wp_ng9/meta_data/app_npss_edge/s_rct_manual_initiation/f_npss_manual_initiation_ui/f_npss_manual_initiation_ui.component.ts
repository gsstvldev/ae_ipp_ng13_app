/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27678 
Modified By     : Admin 
Modified Date   : 2023-Jan-03 10:55 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_manual_initiation
Form Name       : NPSS Manual initiation UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_manual_initiation_ui',
  templateUrl: './f_npss_manual_initiation_ui.component.html',
  styleUrls: ['./f_npss_manual_initiation_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_manual_initiation_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_manual_initiation_ui') form;
  @ViewChild('npss_manual_initiation_ui_value_date') element: ElementRef;
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
		this.ctrl.value_date.id = "RN31CN6"
		this.ctrl.value_date.desc = "Txn Value Date"
		this.ctrl.value_date.visible = true
		this.ctrl.value_date.label_name = "Txn Value Date"
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
		this.ctrl.value_date.view_name = "f_npss_manual_initiation_ui"
		this.ctrl.value_date.ctrl_id = "npss_manual_initiation_ui_value_date"
		this.ctrl.npss_manual_initiation_ui_value_date = {}
		this.ctrl.npss_manual_initiation_ui_value_date.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory95
		this.ctrl.memory95 = {}
		this.ctrl.memory95.id = "RN31CN6001"
		this.ctrl.memory95.desc = "DR Account Currency"
		this.ctrl.memory95.visible = true
		this.ctrl.memory95.label_name = "DR Account Currency"
		this.ctrl.memory95.df_code = "DF_1304_1665901396659"
		this.ctrl.memory95.df_description = "Column Group 1"
		this.ctrl.memory95.uictrl_code = "TXT"
		this.ctrl.memory95.target_column = "memory95"
		this.ctrl.memory95.data_type = "TEXT"
		this.ctrl.memory95.data_length = 32
		this.ctrl.memory95.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory95.default_value = "AED"
		this.ctrl.memory95.is_memory_ctrl = "Y"
		this.ctrl.memory95.field_coordinates = ""
		this.ctrl.memory95.sub_details = ""
		this.ctrl.memory95.accept_char = ""
		this.ctrl.memory95.currency_format = ""
		this.ctrl.memory95.data_scale = ""
		this.ctrl.memory95.hide_label = false
		this.ctrl.memory95.depends_on = ""
		this.ctrl.memory95.placeholder = ""
		this.ctrl.memory95.dynamic_param = ""
		this.ctrl.memory95.style_code = ""
		this.ctrl.memory95.data_source = ""
		this.ctrl.memory95.image_association = ""
		this.ctrl.memory95.show = true
		this.ctrl.memory95.sub_content = ""
		this.ctrl.memory95.required = false
		this.ctrl.memory95.vld_rules = []
		this.ctrl.memory95.targetcolumn_lower = "memory95"
		this.ctrl.memory95.disabled = false
		this.ctrl.memory95.view_name = "f_npss_manual_initiation_ui"
		this.ctrl.memory95.ctrl_id = "npss_manual_initiation_ui_memory95"
		this.ctrl.npss_manual_initiation_ui_memory95 = {}
		this.ctrl.npss_manual_initiation_ui_memory95.onChangecomponent = new EventEmitter<any>()
	
		//Properties of charge_amount
		this.ctrl.charge_amount = {}
		this.ctrl.charge_amount.id = "RN01CN1"
		this.ctrl.charge_amount.desc = "Txn Charges AED"
		this.ctrl.charge_amount.visible = true
		this.ctrl.charge_amount.label_name = "Txn Charges AED"
		this.ctrl.charge_amount.df_code = "DF_1304_1665901396659"
		this.ctrl.charge_amount.df_description = "Column Group 1"
		this.ctrl.charge_amount.uictrl_code = "TXT"
		this.ctrl.charge_amount.target_column = "CHARGE_AMOUNT"
		this.ctrl.charge_amount.data_type = "NUMBER"
		this.ctrl.charge_amount.data_length = 9
		this.ctrl.charge_amount.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.charge_amount.default_value = ""
		this.ctrl.charge_amount.is_memory_ctrl = ""
		this.ctrl.charge_amount.field_coordinates = ""
		this.ctrl.charge_amount.sub_details = ""
		this.ctrl.charge_amount.accept_char = ""
		this.ctrl.charge_amount.currency_format = ""
		this.ctrl.charge_amount.data_scale = "2"
		this.ctrl.charge_amount.hide_label = false
		this.ctrl.charge_amount.depends_on = ""
		this.ctrl.charge_amount.placeholder = ""
		this.ctrl.charge_amount.dynamic_param = ""
		this.ctrl.charge_amount.style_code = ""
		this.ctrl.charge_amount.data_source = ""
		this.ctrl.charge_amount.image_association = ""
		this.ctrl.charge_amount.show = true
		this.ctrl.charge_amount.sub_content = ""
		this.ctrl.charge_amount.required = false
		this.ctrl.charge_amount.vld_rules = []
		this.ctrl.charge_amount.targetcolumn_lower = "charge_amount"
		this.ctrl.charge_amount.disabled = false
		this.ctrl.charge_amount.view_name = "f_npss_manual_initiation_ui"
		this.ctrl.charge_amount.ctrl_id = "npss_manual_initiation_ui_charge_amount"
		this.ctrl.npss_manual_initiation_ui_charge_amount = {}
		this.ctrl.npss_manual_initiation_ui_charge_amount.onChangecomponent = new EventEmitter<any>()
	
		//Properties of intrbk_sttlm_cur
		this.ctrl.intrbk_sttlm_cur = {}
		this.ctrl.intrbk_sttlm_cur.id = "RN01CN2"
		this.ctrl.intrbk_sttlm_cur.desc = "TXN Currency"
		this.ctrl.intrbk_sttlm_cur.visible = true
		this.ctrl.intrbk_sttlm_cur.label_name = "TXN Currency"
		this.ctrl.intrbk_sttlm_cur.df_code = "DF_1304_1665901396659"
		this.ctrl.intrbk_sttlm_cur.df_description = "Column Group 1"
		this.ctrl.intrbk_sttlm_cur.uictrl_code = "TXT"
		this.ctrl.intrbk_sttlm_cur.target_column = "INTRBK_STTLM_CUR"
		this.ctrl.intrbk_sttlm_cur.data_type = "TEXT"
		this.ctrl.intrbk_sttlm_cur.data_length = 3
		this.ctrl.intrbk_sttlm_cur.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.intrbk_sttlm_cur.default_value = ""
		this.ctrl.intrbk_sttlm_cur.is_memory_ctrl = ""
		this.ctrl.intrbk_sttlm_cur.field_coordinates = ""
		this.ctrl.intrbk_sttlm_cur.sub_details = ""
		this.ctrl.intrbk_sttlm_cur.accept_char = ""
		this.ctrl.intrbk_sttlm_cur.currency_format = ""
		this.ctrl.intrbk_sttlm_cur.data_scale = ""
		this.ctrl.intrbk_sttlm_cur.hide_label = false
		this.ctrl.intrbk_sttlm_cur.depends_on = ""
		this.ctrl.intrbk_sttlm_cur.placeholder = ""
		this.ctrl.intrbk_sttlm_cur.dynamic_param = ""
		this.ctrl.intrbk_sttlm_cur.style_code = ""
		this.ctrl.intrbk_sttlm_cur.data_source = ""
		this.ctrl.intrbk_sttlm_cur.image_association = ""
		this.ctrl.intrbk_sttlm_cur.show = true
		this.ctrl.intrbk_sttlm_cur.sub_content = ""
		this.ctrl.intrbk_sttlm_cur.required = false
		this.ctrl.intrbk_sttlm_cur.vld_rules = []
		this.ctrl.intrbk_sttlm_cur.targetcolumn_lower = "intrbk_sttlm_cur"
		this.ctrl.intrbk_sttlm_cur.disabled = false
		this.ctrl.intrbk_sttlm_cur.view_name = "f_npss_manual_initiation_ui"
		this.ctrl.intrbk_sttlm_cur.ctrl_id = "npss_manual_initiation_ui_intrbk_sttlm_cur"
		this.ctrl.npss_manual_initiation_ui_intrbk_sttlm_cur = {}
		this.ctrl.npss_manual_initiation_ui_intrbk_sttlm_cur.onChangecomponent = new EventEmitter<any>()
	
		//Properties of intrbk_sttlm_amnt
		this.ctrl.intrbk_sttlm_amnt = {}
		this.ctrl.intrbk_sttlm_amnt.id = "RN11CN3"
		this.ctrl.intrbk_sttlm_amnt.desc = "TXN Amount in AED"
		this.ctrl.intrbk_sttlm_amnt.visible = true
		this.ctrl.intrbk_sttlm_amnt.label_name = "TXN Amount in AED"
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
		this.ctrl.intrbk_sttlm_amnt.view_name = "f_npss_manual_initiation_ui"
		this.ctrl.intrbk_sttlm_amnt.ctrl_id = "npss_manual_initiation_ui_intrbk_sttlm_amnt"
		this.ctrl.npss_manual_initiation_ui_intrbk_sttlm_amnt = {}
		this.ctrl.npss_manual_initiation_ui_intrbk_sttlm_amnt.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dispute_ref_no
		this.ctrl.dispute_ref_no = {}
		this.ctrl.dispute_ref_no.id = "RN11CN4"
		this.ctrl.dispute_ref_no.desc = "Dispute Reference Number"
		this.ctrl.dispute_ref_no.visible = true
		this.ctrl.dispute_ref_no.label_name = "Dispute Reference Number"
		this.ctrl.dispute_ref_no.df_code = "DF_1304_1665901396659"
		this.ctrl.dispute_ref_no.df_description = "Column Group 1"
		this.ctrl.dispute_ref_no.uictrl_code = "TXT"
		this.ctrl.dispute_ref_no.target_column = "DISPUTE_REF_NO"
		this.ctrl.dispute_ref_no.data_type = "TEXT"
		this.ctrl.dispute_ref_no.data_length = 256
		this.ctrl.dispute_ref_no.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.dispute_ref_no.default_value = ""
		this.ctrl.dispute_ref_no.is_memory_ctrl = ""
		this.ctrl.dispute_ref_no.field_coordinates = ""
		this.ctrl.dispute_ref_no.sub_details = ""
		this.ctrl.dispute_ref_no.accept_char = ""
		this.ctrl.dispute_ref_no.currency_format = ""
		this.ctrl.dispute_ref_no.data_scale = ""
		this.ctrl.dispute_ref_no.hide_label = false
		this.ctrl.dispute_ref_no.depends_on = ""
		this.ctrl.dispute_ref_no.placeholder = ""
		this.ctrl.dispute_ref_no.dynamic_param = ""
		this.ctrl.dispute_ref_no.style_code = ""
		this.ctrl.dispute_ref_no.data_source = ""
		this.ctrl.dispute_ref_no.image_association = ""
		this.ctrl.dispute_ref_no.show = true
		this.ctrl.dispute_ref_no.sub_content = ""
		this.ctrl.dispute_ref_no.required = false
		this.ctrl.dispute_ref_no.vld_rules = []
		this.ctrl.dispute_ref_no.targetcolumn_lower = "dispute_ref_no"
		this.ctrl.dispute_ref_no.disabled = false
		this.ctrl.dispute_ref_no.view_name = "f_npss_manual_initiation_ui"
		this.ctrl.dispute_ref_no.ctrl_id = "npss_manual_initiation_ui_dispute_ref_no"
		this.ctrl.npss_manual_initiation_ui_dispute_ref_no = {}
		this.ctrl.npss_manual_initiation_ui_dispute_ref_no.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_manual_initiation_ui.model = {"VALUE_DATE":"setcurrentdate(),{}","MEMORY95":"AED","CHARGE_AMOUNT":"","INTRBK_STTLM_CUR":"","INTRBK_STTLM_AMNT":"","DISPUTE_REF_NO":""}
		this.screen_instance[this.comp_id].f_npss_manual_initiation_ui.Meta = [{"CTLR_CODE":"DTP","DATA_TYPE":"DATETIME","TARGET_COLUMN":"VALUE_DATE"},{"CTLR_CODE":"TXT","DATA_TYPE":"NUMBER","TARGET_COLUMN":"CHARGE_AMOUNT"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"INTRBK_STTLM_CUR"},{"CTLR_CODE":"CUR","DATA_TYPE":"NUMBER","TARGET_COLUMN":"INTRBK_STTLM_AMNT"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DISPUTE_REF_NO"}]
		this.screen_instance[this.comp_id].f_npss_manual_initiation_ui.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_manual_initiation_ui.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_manual_initiation_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_manual_initiation_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_manual_initiation_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_manual_initiation_ui[control][property] = value;
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
    