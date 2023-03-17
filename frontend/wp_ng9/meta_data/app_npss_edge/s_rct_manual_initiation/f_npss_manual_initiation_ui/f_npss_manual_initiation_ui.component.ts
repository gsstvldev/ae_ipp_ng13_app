/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28770 
Modified By     : Admin 
Modified Date   : 2023-Mar-17 15:8 PM 
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
  @ViewChild('npss_manual_initiation_ui_charge_amount') element: ElementRef;
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
		this.ctrl.intrbk_sttlm_cur.desc = "TXN Amount Account Currency"
		this.ctrl.intrbk_sttlm_cur.visible = true
		this.ctrl.intrbk_sttlm_cur.label_name = "TXN Amount Account Currency"
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
	
		//Properties of memory92
		this.ctrl.memory92 = {}
		this.ctrl.memory92.id = "RN11CN3"
		this.ctrl.memory92.desc = "TXN Amount in AED"
		this.ctrl.memory92.visible = true
		this.ctrl.memory92.label_name = "TXN Amount in AED"
		this.ctrl.memory92.df_code = "DF_1304_1665901396659"
		this.ctrl.memory92.df_description = "Column Group 1"
		this.ctrl.memory92.uictrl_code = "CUR"
		this.ctrl.memory92.target_column = "memory92"
		this.ctrl.memory92.data_type = "NUMBER"
		this.ctrl.memory92.data_length = 19
		this.ctrl.memory92.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory92.default_value = ""
		this.ctrl.memory92.is_memory_ctrl = "Y"
		this.ctrl.memory92.field_coordinates = ""
		this.ctrl.memory92.sub_details = ""
		this.ctrl.memory92.accept_char = ""
		this.ctrl.memory92.currency_format = ""
		this.ctrl.memory92.data_scale = "2"
		this.ctrl.memory92.hide_label = false
		this.ctrl.memory92.depends_on = ""
		this.ctrl.memory92.placeholder = ""
		this.ctrl.memory92.dynamic_param = ""
		this.ctrl.memory92.style_code = ""
		this.ctrl.memory92.data_source = ""
		this.ctrl.memory92.image_association = ""
		this.ctrl.memory92.show = true
		this.ctrl.memory92.sub_content = ""
		this.ctrl.memory92.required = false
		this.ctrl.memory92.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTZERO","click":"Valitem","message":"Enter  the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.memory92.targetcolumn_lower = "memory92"
		this.ctrl.memory92.disabled = false
		this.ctrl.memory92.view_name = "f_npss_manual_initiation_ui"
		this.ctrl.memory92.ctrl_id = "npss_manual_initiation_ui_memory92"
		this.ctrl.npss_manual_initiation_ui_memory92 = {}
		this.ctrl.npss_manual_initiation_ui_memory92.onChangecomponent = new EventEmitter<any>()
	
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
	
		//Properties of buy_margin
		this.ctrl.buy_margin = {}
		this.ctrl.buy_margin.id = "RN21CN7"
		this.ctrl.buy_margin.desc = "Buy spread"
		this.ctrl.buy_margin.visible = true
		this.ctrl.buy_margin.label_name = "Buy spread"
		this.ctrl.buy_margin.df_code = "DF_1304_1665901396659"
		this.ctrl.buy_margin.df_description = "Column Group 1"
		this.ctrl.buy_margin.uictrl_code = "TXT"
		this.ctrl.buy_margin.target_column = "BUY_MARGIN"
		this.ctrl.buy_margin.data_type = "NUMBER"
		this.ctrl.buy_margin.data_length = 19
		this.ctrl.buy_margin.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.buy_margin.default_value = ""
		this.ctrl.buy_margin.is_memory_ctrl = ""
		this.ctrl.buy_margin.field_coordinates = ""
		this.ctrl.buy_margin.sub_details = ""
		this.ctrl.buy_margin.accept_char = ""
		this.ctrl.buy_margin.currency_format = ""
		this.ctrl.buy_margin.data_scale = "6"
		this.ctrl.buy_margin.hide_label = false
		this.ctrl.buy_margin.depends_on = ""
		this.ctrl.buy_margin.placeholder = ""
		this.ctrl.buy_margin.dynamic_param = ""
		this.ctrl.buy_margin.style_code = ""
		this.ctrl.buy_margin.data_source = ""
		this.ctrl.buy_margin.image_association = ""
		this.ctrl.buy_margin.show = true
		this.ctrl.buy_margin.sub_content = ""
		this.ctrl.buy_margin.required = false
		this.ctrl.buy_margin.vld_rules = []
		this.ctrl.buy_margin.targetcolumn_lower = "buy_margin"
		this.ctrl.buy_margin.disabled = false
		this.ctrl.buy_margin.view_name = "f_npss_manual_initiation_ui"
		this.ctrl.buy_margin.ctrl_id = "npss_manual_initiation_ui_buy_margin"
		this.ctrl.npss_manual_initiation_ui_buy_margin = {}
		this.ctrl.npss_manual_initiation_ui_buy_margin.onChangecomponent = new EventEmitter<any>()
	
		//Properties of buy_rate
		this.ctrl.buy_rate = {}
		this.ctrl.buy_rate.id = "RN21CN8"
		this.ctrl.buy_rate.desc = "Buy Rate"
		this.ctrl.buy_rate.visible = true
		this.ctrl.buy_rate.label_name = "Buy Rate"
		this.ctrl.buy_rate.df_code = "DF_1304_1665901396659"
		this.ctrl.buy_rate.df_description = "Column Group 1"
		this.ctrl.buy_rate.uictrl_code = "CUR"
		this.ctrl.buy_rate.target_column = "BUY_RATE"
		this.ctrl.buy_rate.data_type = "NUMBER"
		this.ctrl.buy_rate.data_length = 19
		this.ctrl.buy_rate.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.buy_rate.default_value = ""
		this.ctrl.buy_rate.is_memory_ctrl = ""
		this.ctrl.buy_rate.field_coordinates = ""
		this.ctrl.buy_rate.sub_details = ""
		this.ctrl.buy_rate.accept_char = ""
		this.ctrl.buy_rate.currency_format = ""
		this.ctrl.buy_rate.data_scale = "6"
		this.ctrl.buy_rate.hide_label = false
		this.ctrl.buy_rate.depends_on = ""
		this.ctrl.buy_rate.placeholder = ""
		this.ctrl.buy_rate.dynamic_param = ""
		this.ctrl.buy_rate.style_code = ""
		this.ctrl.buy_rate.data_source = ""
		this.ctrl.buy_rate.image_association = ""
		this.ctrl.buy_rate.show = true
		this.ctrl.buy_rate.sub_content = ""
		this.ctrl.buy_rate.required = false
		this.ctrl.buy_rate.vld_rules = []
		this.ctrl.buy_rate.targetcolumn_lower = "buy_rate"
		this.ctrl.buy_rate.disabled = false
		this.ctrl.buy_rate.view_name = "f_npss_manual_initiation_ui"
		this.ctrl.buy_rate.ctrl_id = "npss_manual_initiation_ui_buy_rate"
		this.ctrl.npss_manual_initiation_ui_buy_rate = {}
		this.ctrl.npss_manual_initiation_ui_buy_rate.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_manual_initiation_ui.model = {"CHARGE_AMOUNT":"","INTRBK_STTLM_CUR":"","MEMORY92":"","DISPUTE_REF_NO":"","BUY_MARGIN":"","BUY_RATE":""}
		this.screen_instance[this.comp_id].f_npss_manual_initiation_ui.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"NUMBER","TARGET_COLUMN":"CHARGE_AMOUNT"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"INTRBK_STTLM_CUR"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DISPUTE_REF_NO"},{"CTLR_CODE":"TXT","DATA_TYPE":"NUMBER","TARGET_COLUMN":"BUY_MARGIN"},{"CTLR_CODE":"CUR","DATA_TYPE":"NUMBER","TARGET_COLUMN":"BUY_RATE"}]
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
    