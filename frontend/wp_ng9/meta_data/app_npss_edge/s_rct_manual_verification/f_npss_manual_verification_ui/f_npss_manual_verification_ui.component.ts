/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35510 
Modified By     : Admin 
Modified Date   : 2024-May-21 14:10 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_manual_verification
Form Name       : NPSS Manual verification UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_manual_verification_ui',
  templateUrl: './f_npss_manual_verification_ui.component.html',
  styleUrls: ['./f_npss_manual_verification_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_manual_verification_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_manual_verification_ui') form;
  @ViewChild('npss_manual_verification_ui_intrbk_sttlm_cur') element: ElementRef;
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

  
		//Properties of intrbk_sttlm_cur
		this.ctrl.intrbk_sttlm_cur = {}
		this.ctrl.intrbk_sttlm_cur.id = "RN11CN2"
		this.ctrl.intrbk_sttlm_cur.desc = "Currency"
		this.ctrl.intrbk_sttlm_cur.visible = true
		this.ctrl.intrbk_sttlm_cur.label_name = "Currency"
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
		this.ctrl.intrbk_sttlm_cur.view_name = "f_npss_manual_verification_ui"
		this.ctrl.intrbk_sttlm_cur.ctrl_id = "npss_manual_verification_ui_intrbk_sttlm_cur"
		this.ctrl.npss_manual_verification_ui_intrbk_sttlm_cur = {}
		this.ctrl.npss_manual_verification_ui_intrbk_sttlm_cur.onChangecomponent = new EventEmitter<any>()
	
		//Properties of intrbk_sttlm_amnt
		this.ctrl.intrbk_sttlm_amnt = {}
		this.ctrl.intrbk_sttlm_amnt.id = "RN01CN1"
		this.ctrl.intrbk_sttlm_amnt.desc = "Amount"
		this.ctrl.intrbk_sttlm_amnt.visible = false
		this.ctrl.intrbk_sttlm_amnt.label_name = "Amount"
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
		this.ctrl.intrbk_sttlm_amnt.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.intrbk_sttlm_amnt.targetcolumn_lower = "intrbk_sttlm_amnt"
		this.ctrl.intrbk_sttlm_amnt.disabled = false
		this.ctrl.intrbk_sttlm_amnt.view_name = "f_npss_manual_verification_ui"
		this.ctrl.intrbk_sttlm_amnt.ctrl_id = "npss_manual_verification_ui_intrbk_sttlm_amnt"
		this.ctrl.npss_manual_verification_ui_intrbk_sttlm_amnt = {}
		this.ctrl.npss_manual_verification_ui_intrbk_sttlm_amnt.onChangecomponent = new EventEmitter<any>()
	
		//Properties of charge_amount
		this.ctrl.charge_amount = {}
		this.ctrl.charge_amount.id = "RN21CN3"
		this.ctrl.charge_amount.desc = "Charge Amount"
		this.ctrl.charge_amount.visible = true
		this.ctrl.charge_amount.label_name = "Charge Amount"
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
		this.ctrl.charge_amount.view_name = "f_npss_manual_verification_ui"
		this.ctrl.charge_amount.ctrl_id = "npss_manual_verification_ui_charge_amount"
		this.ctrl.npss_manual_verification_ui_charge_amount = {}
		this.ctrl.npss_manual_verification_ui_charge_amount.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dispute_ref_no
		this.ctrl.dispute_ref_no = {}
		this.ctrl.dispute_ref_no.id = "RN01CN5"
		this.ctrl.dispute_ref_no.desc = "Dispute Ref No"
		this.ctrl.dispute_ref_no.visible = true
		this.ctrl.dispute_ref_no.label_name = "Dispute Ref No"
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
		this.ctrl.dispute_ref_no.view_name = "f_npss_manual_verification_ui"
		this.ctrl.dispute_ref_no.ctrl_id = "npss_manual_verification_ui_dispute_ref_no"
		this.ctrl.npss_manual_verification_ui_dispute_ref_no = {}
		this.ctrl.npss_manual_verification_ui_dispute_ref_no.onChangecomponent = new EventEmitter<any>()
	
		//Properties of force_post_flag
		this.ctrl.force_post_flag = {}
		this.ctrl.force_post_flag.id = "RN01CN7"
		this.ctrl.force_post_flag.desc = "Force Post Flag"
		this.ctrl.force_post_flag.visible = true
		this.ctrl.force_post_flag.label_name = "Force Post Flag"
		this.ctrl.force_post_flag.df_code = "DF_1304_1665901396659"
		this.ctrl.force_post_flag.df_description = "Column Group 1"
		this.ctrl.force_post_flag.uictrl_code = "TXT"
		this.ctrl.force_post_flag.target_column = "FORCE_POST_FLAG"
		this.ctrl.force_post_flag.data_type = "TEXT"
		this.ctrl.force_post_flag.data_length = 1
		this.ctrl.force_post_flag.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.force_post_flag.default_value = ""
		this.ctrl.force_post_flag.is_memory_ctrl = ""
		this.ctrl.force_post_flag.field_coordinates = ""
		this.ctrl.force_post_flag.sub_details = ""
		this.ctrl.force_post_flag.accept_char = ""
		this.ctrl.force_post_flag.currency_format = ""
		this.ctrl.force_post_flag.data_scale = ""
		this.ctrl.force_post_flag.hide_label = false
		this.ctrl.force_post_flag.depends_on = ""
		this.ctrl.force_post_flag.placeholder = ""
		this.ctrl.force_post_flag.dynamic_param = ""
		this.ctrl.force_post_flag.style_code = ""
		this.ctrl.force_post_flag.data_source = ""
		this.ctrl.force_post_flag.image_association = ""
		this.ctrl.force_post_flag.show = true
		this.ctrl.force_post_flag.sub_content = ""
		this.ctrl.force_post_flag.required = false
		this.ctrl.force_post_flag.vld_rules = []
		this.ctrl.force_post_flag.targetcolumn_lower = "force_post_flag"
		this.ctrl.force_post_flag.disabled = false
		this.ctrl.force_post_flag.view_name = "f_npss_manual_verification_ui"
		this.ctrl.force_post_flag.ctrl_id = "npss_manual_verification_ui_force_post_flag"
		this.ctrl.npss_manual_verification_ui_force_post_flag = {}
		this.ctrl.npss_manual_verification_ui_force_post_flag.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cust_splrate_flag
		this.ctrl.cust_splrate_flag = {}
		this.ctrl.cust_splrate_flag.id = "RN11CN6"
		this.ctrl.cust_splrate_flag.desc = "Cust Spl Rate Flag"
		this.ctrl.cust_splrate_flag.visible = true
		this.ctrl.cust_splrate_flag.label_name = "Cust Spl Rate Flag"
		this.ctrl.cust_splrate_flag.df_code = "DF_1304_1665901396659"
		this.ctrl.cust_splrate_flag.df_description = "Column Group 1"
		this.ctrl.cust_splrate_flag.uictrl_code = "TXT"
		this.ctrl.cust_splrate_flag.target_column = "CUST_SPLRATE_FLAG"
		this.ctrl.cust_splrate_flag.data_type = "TEXT"
		this.ctrl.cust_splrate_flag.data_length = 1
		this.ctrl.cust_splrate_flag.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.cust_splrate_flag.default_value = ""
		this.ctrl.cust_splrate_flag.is_memory_ctrl = ""
		this.ctrl.cust_splrate_flag.field_coordinates = ""
		this.ctrl.cust_splrate_flag.sub_details = ""
		this.ctrl.cust_splrate_flag.accept_char = ""
		this.ctrl.cust_splrate_flag.currency_format = ""
		this.ctrl.cust_splrate_flag.data_scale = ""
		this.ctrl.cust_splrate_flag.hide_label = false
		this.ctrl.cust_splrate_flag.depends_on = ""
		this.ctrl.cust_splrate_flag.placeholder = ""
		this.ctrl.cust_splrate_flag.dynamic_param = ""
		this.ctrl.cust_splrate_flag.style_code = ""
		this.ctrl.cust_splrate_flag.data_source = ""
		this.ctrl.cust_splrate_flag.image_association = ""
		this.ctrl.cust_splrate_flag.show = true
		this.ctrl.cust_splrate_flag.sub_content = ""
		this.ctrl.cust_splrate_flag.required = false
		this.ctrl.cust_splrate_flag.vld_rules = []
		this.ctrl.cust_splrate_flag.targetcolumn_lower = "cust_splrate_flag"
		this.ctrl.cust_splrate_flag.disabled = false
		this.ctrl.cust_splrate_flag.view_name = "f_npss_manual_verification_ui"
		this.ctrl.cust_splrate_flag.ctrl_id = "npss_manual_verification_ui_cust_splrate_flag"
		this.ctrl.npss_manual_verification_ui_cust_splrate_flag = {}
		this.ctrl.npss_manual_verification_ui_cust_splrate_flag.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_manual_verification_ui.model = {"INTRBK_STTLM_CUR":"","INTRBK_STTLM_AMNT":"","CHARGE_AMOUNT":"","DISPUTE_REF_NO":"","FORCE_POST_FLAG":"","CUST_SPLRATE_FLAG":""}
		this.screen_instance[this.comp_id].f_npss_manual_verification_ui.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"INTRBK_STTLM_CUR"},{"CTLR_CODE":"CUR","DATA_TYPE":"NUMBER","TARGET_COLUMN":"INTRBK_STTLM_AMNT"},{"CTLR_CODE":"TXT","DATA_TYPE":"NUMBER","TARGET_COLUMN":"CHARGE_AMOUNT"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DISPUTE_REF_NO"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"FORCE_POST_FLAG"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CUST_SPLRATE_FLAG"}]
		this.screen_instance[this.comp_id].f_npss_manual_verification_ui.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_manual_verification_ui.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_manual_verification_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_manual_verification_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_manual_verification_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_manual_verification_ui[control][property] = value;
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
    