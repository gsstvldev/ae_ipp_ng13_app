/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28949 
Modified By     : Admin 
Modified Date   : 2023-Mar-29 7:7 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_reversal_non_aed
Form Name       : NPSS Reversal PLog UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_reversal_plog_ui',
  templateUrl: './f_npss_reversal_plog_ui.component.html',
  styleUrls: ['./f_npss_reversal_plog_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_reversal_plog_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_reversal_plog_ui') form;
  @ViewChild('npss_reversal_plog_ui_process_ref_no') element: ElementRef;
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

  
		//Properties of process_ref_no
		this.ctrl.process_ref_no = {}
		this.ctrl.process_ref_no.id = "RN01CN4"
		this.ctrl.process_ref_no.desc = "Core System Ref Number"
		this.ctrl.process_ref_no.visible = true
		this.ctrl.process_ref_no.label_name = "Core System Ref Number"
		this.ctrl.process_ref_no.df_code = "DF_1304_1665905157963"
		this.ctrl.process_ref_no.df_description = "Column Group 1"
		this.ctrl.process_ref_no.uictrl_code = "TXT"
		this.ctrl.process_ref_no.target_column = "PROCESS_REF_NO"
		this.ctrl.process_ref_no.data_type = "TEXT"
		this.ctrl.process_ref_no.data_length = 64
		this.ctrl.process_ref_no.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.process_ref_no.default_value = ""
		this.ctrl.process_ref_no.is_memory_ctrl = ""
		this.ctrl.process_ref_no.field_coordinates = ""
		this.ctrl.process_ref_no.sub_details = ""
		this.ctrl.process_ref_no.accept_char = ""
		this.ctrl.process_ref_no.currency_format = ""
		this.ctrl.process_ref_no.data_scale = ""
		this.ctrl.process_ref_no.hide_label = false
		this.ctrl.process_ref_no.depends_on = ""
		this.ctrl.process_ref_no.placeholder = ""
		this.ctrl.process_ref_no.dynamic_param = ""
		this.ctrl.process_ref_no.style_code = ""
		this.ctrl.process_ref_no.data_source = ""
		this.ctrl.process_ref_no.image_association = ""
		this.ctrl.process_ref_no.show = true
		this.ctrl.process_ref_no.sub_content = ""
		this.ctrl.process_ref_no.required = false
		this.ctrl.process_ref_no.vld_rules = []
		this.ctrl.process_ref_no.targetcolumn_lower = "process_ref_no"
		this.ctrl.process_ref_no.disabled = false
		this.ctrl.process_ref_no.view_name = "f_npss_reversal_plog_ui"
		this.ctrl.process_ref_no.ctrl_id = "npss_reversal_plog_ui_process_ref_no"
		this.ctrl.npss_reversal_plog_ui_process_ref_no = {}
		this.ctrl.npss_reversal_plog_ui_process_ref_no.onChangecomponent = new EventEmitter<any>()
	
		//Properties of amount_credited
		this.ctrl.amount_credited = {}
		this.ctrl.amount_credited.id = "RN01CN1"
		this.ctrl.amount_credited.desc = "Amount Credited"
		this.ctrl.amount_credited.visible = true
		this.ctrl.amount_credited.label_name = "Amount Credited"
		this.ctrl.amount_credited.df_code = "DF_1304_1665905157963"
		this.ctrl.amount_credited.df_description = "Column Group 1"
		this.ctrl.amount_credited.uictrl_code = "TXT"
		this.ctrl.amount_credited.target_column = "AMOUNT_CREDITED"
		this.ctrl.amount_credited.data_type = "TEXT"
		this.ctrl.amount_credited.data_length = 32
		this.ctrl.amount_credited.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.amount_credited.default_value = ""
		this.ctrl.amount_credited.is_memory_ctrl = ""
		this.ctrl.amount_credited.field_coordinates = ""
		this.ctrl.amount_credited.sub_details = ""
		this.ctrl.amount_credited.accept_char = ""
		this.ctrl.amount_credited.currency_format = ""
		this.ctrl.amount_credited.data_scale = ""
		this.ctrl.amount_credited.hide_label = false
		this.ctrl.amount_credited.depends_on = ""
		this.ctrl.amount_credited.placeholder = ""
		this.ctrl.amount_credited.dynamic_param = ""
		this.ctrl.amount_credited.style_code = ""
		this.ctrl.amount_credited.data_source = ""
		this.ctrl.amount_credited.image_association = ""
		this.ctrl.amount_credited.show = true
		this.ctrl.amount_credited.sub_content = ""
		this.ctrl.amount_credited.required = false
		this.ctrl.amount_credited.vld_rules = []
		this.ctrl.amount_credited.targetcolumn_lower = "amount_credited"
		this.ctrl.amount_credited.disabled = false
		this.ctrl.amount_credited.view_name = "f_npss_reversal_plog_ui"
		this.ctrl.amount_credited.ctrl_id = "npss_reversal_plog_ui_amount_credited"
		this.ctrl.npss_reversal_plog_ui_amount_credited = {}
		this.ctrl.npss_reversal_plog_ui_amount_credited.onChangecomponent = new EventEmitter<any>()
	
		//Properties of amt_cr_loc_cur
		this.ctrl.amt_cr_loc_cur = {}
		this.ctrl.amt_cr_loc_cur.id = "RN01CN1001"
		this.ctrl.amt_cr_loc_cur.desc = "Amount Credited in Loc"
		this.ctrl.amt_cr_loc_cur.visible = true
		this.ctrl.amt_cr_loc_cur.label_name = "Amount Credited in Loc"
		this.ctrl.amt_cr_loc_cur.df_code = "DF_1304_1665905157963"
		this.ctrl.amt_cr_loc_cur.df_description = "Column Group 1"
		this.ctrl.amt_cr_loc_cur.uictrl_code = "CUR"
		this.ctrl.amt_cr_loc_cur.target_column = "AMT_CR_LOC_CUR"
		this.ctrl.amt_cr_loc_cur.data_type = "NUMBER"
		this.ctrl.amt_cr_loc_cur.data_length = 9
		this.ctrl.amt_cr_loc_cur.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.amt_cr_loc_cur.default_value = ""
		this.ctrl.amt_cr_loc_cur.is_memory_ctrl = ""
		this.ctrl.amt_cr_loc_cur.field_coordinates = ""
		this.ctrl.amt_cr_loc_cur.sub_details = ""
		this.ctrl.amt_cr_loc_cur.accept_char = ""
		this.ctrl.amt_cr_loc_cur.currency_format = ""
		this.ctrl.amt_cr_loc_cur.data_scale = "2"
		this.ctrl.amt_cr_loc_cur.hide_label = false
		this.ctrl.amt_cr_loc_cur.depends_on = ""
		this.ctrl.amt_cr_loc_cur.placeholder = ""
		this.ctrl.amt_cr_loc_cur.dynamic_param = ""
		this.ctrl.amt_cr_loc_cur.style_code = ""
		this.ctrl.amt_cr_loc_cur.data_source = ""
		this.ctrl.amt_cr_loc_cur.image_association = ""
		this.ctrl.amt_cr_loc_cur.show = true
		this.ctrl.amt_cr_loc_cur.sub_content = ""
		this.ctrl.amt_cr_loc_cur.required = false
		this.ctrl.amt_cr_loc_cur.vld_rules = []
		this.ctrl.amt_cr_loc_cur.targetcolumn_lower = "amt_cr_loc_cur"
		this.ctrl.amt_cr_loc_cur.disabled = false
		this.ctrl.amt_cr_loc_cur.view_name = "f_npss_reversal_plog_ui"
		this.ctrl.amt_cr_loc_cur.ctrl_id = "npss_reversal_plog_ui_amt_cr_loc_cur"
		this.ctrl.npss_reversal_plog_ui_amt_cr_loc_cur = {}
		this.ctrl.npss_reversal_plog_ui_amt_cr_loc_cur.onChangecomponent = new EventEmitter<any>()
	
		//Properties of charge_amount
		this.ctrl.charge_amount = {}
		this.ctrl.charge_amount.id = "RN01CN2"
		this.ctrl.charge_amount.desc = "Original Txn Charges Account Currency"
		this.ctrl.charge_amount.visible = true
		this.ctrl.charge_amount.label_name = "Original Txn Charges Account Currency"
		this.ctrl.charge_amount.df_code = "DF_1304_1665905157963"
		this.ctrl.charge_amount.df_description = "Column Group 1"
		this.ctrl.charge_amount.uictrl_code = "CUR"
		this.ctrl.charge_amount.target_column = "CHARGE_AMOUNT"
		this.ctrl.charge_amount.data_type = "NUMBER"
		this.ctrl.charge_amount.data_length = 9
		this.ctrl.charge_amount.zone_df_code = "DF_1304_1665905157963"
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
		this.ctrl.charge_amount.view_name = "f_npss_reversal_plog_ui"
		this.ctrl.charge_amount.ctrl_id = "npss_reversal_plog_ui_charge_amount"
		this.ctrl.npss_reversal_plog_ui_charge_amount = {}
		this.ctrl.npss_reversal_plog_ui_charge_amount.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_reversal_plog_ui.model = {"PROCESS_REF_NO":"","AMOUNT_CREDITED":"","AMT_CR_LOC_CUR":"","CHARGE_AMOUNT":""}
		this.screen_instance[this.comp_id].f_npss_reversal_plog_ui.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROCESS_REF_NO"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"AMOUNT_CREDITED"},{"CTLR_CODE":"CUR","DATA_TYPE":"NUMBER","TARGET_COLUMN":"AMT_CR_LOC_CUR"},{"CTLR_CODE":"CUR","DATA_TYPE":"NUMBER","TARGET_COLUMN":"CHARGE_AMOUNT"}]
		this.screen_instance[this.comp_id].f_npss_reversal_plog_ui.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_reversal_plog_ui.dtt_code = "dtt_1304_1665905039255"
		this.screen_instance[this.comp_id].f_npss_reversal_plog_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_reversal_plog_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_reversal_plog_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_reversal_plog_ui[control][property] = value;
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
    