/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35051 
Modified By     : Admin 
Modified Date   : 2024-Apr-01 12:12 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_reversal_non_aed
Form Name       : NPSS Reversal N UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_reversal_n_ui',
  templateUrl: './f_npss_reversal_n_ui.component.html',
  styleUrls: ['./f_npss_reversal_n_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_reversal_n_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_reversal_n_ui') form;
  @ViewChild('npss_reversal_n_ui_tran_charge') element: ElementRef;
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

  
		//Properties of tran_charge
		this.ctrl.tran_charge = {}
		this.ctrl.tran_charge.id = "RN01CN1"
		this.ctrl.tran_charge.desc = "Txn Charges AED"
		this.ctrl.tran_charge.visible = true
		this.ctrl.tran_charge.label_name = "Txn Charges AED"
		this.ctrl.tran_charge.df_code = "DF_1304_1665901396659"
		this.ctrl.tran_charge.df_description = "Column Group 1"
		this.ctrl.tran_charge.uictrl_code = "CUR"
		this.ctrl.tran_charge.target_column = "TRAN_CHARGE"
		this.ctrl.tran_charge.data_type = "NUMBER"
		this.ctrl.tran_charge.data_length = 19
		this.ctrl.tran_charge.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.tran_charge.default_value = ""
		this.ctrl.tran_charge.is_memory_ctrl = ""
		this.ctrl.tran_charge.field_coordinates = ""
		this.ctrl.tran_charge.sub_details = ""
		this.ctrl.tran_charge.accept_char = ""
		this.ctrl.tran_charge.currency_format = ""
		this.ctrl.tran_charge.data_scale = "6"
		this.ctrl.tran_charge.hide_label = false
		this.ctrl.tran_charge.depends_on = ""
		this.ctrl.tran_charge.placeholder = ""
		this.ctrl.tran_charge.dynamic_param = ""
		this.ctrl.tran_charge.style_code = ""
		this.ctrl.tran_charge.data_source = ""
		this.ctrl.tran_charge.image_association = ""
		this.ctrl.tran_charge.show = true
		this.ctrl.tran_charge.sub_content = ""
		this.ctrl.tran_charge.required = false
		this.ctrl.tran_charge.vld_rules = []
		this.ctrl.tran_charge.targetcolumn_lower = "tran_charge"
		this.ctrl.tran_charge.disabled = false
		this.ctrl.tran_charge.view_name = "f_npss_reversal_n_ui"
		this.ctrl.tran_charge.ctrl_id = "npss_reversal_n_ui_tran_charge"
		this.ctrl.npss_reversal_n_ui_tran_charge = {}
		this.ctrl.npss_reversal_n_ui_tran_charge.onChangecomponent = new EventEmitter<any>()
	
		//Properties of buy_rate
		this.ctrl.buy_rate = {}
		this.ctrl.buy_rate.id = "RN01CN4"
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
		this.ctrl.buy_rate.view_name = "f_npss_reversal_n_ui"
		this.ctrl.buy_rate.ctrl_id = "npss_reversal_n_ui_buy_rate"
		this.ctrl.npss_reversal_n_ui_buy_rate = {}
		this.ctrl.npss_reversal_n_ui_buy_rate.onChangecomponent = new EventEmitter<any>()
	
		//Properties of buy_margin
		this.ctrl.buy_margin = {}
		this.ctrl.buy_margin.id = "RN01CN2"
		this.ctrl.buy_margin.desc = "Buy spread"
		this.ctrl.buy_margin.visible = true
		this.ctrl.buy_margin.label_name = "Buy spread"
		this.ctrl.buy_margin.df_code = "DF_1304_1665901396659"
		this.ctrl.buy_margin.df_description = "Column Group 1"
		this.ctrl.buy_margin.uictrl_code = "CUR"
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
		this.ctrl.buy_margin.view_name = "f_npss_reversal_n_ui"
		this.ctrl.buy_margin.ctrl_id = "npss_reversal_n_ui_buy_margin"
		this.ctrl.npss_reversal_n_ui_buy_margin = {}
		this.ctrl.npss_reversal_n_ui_buy_margin.onChangecomponent = new EventEmitter<any>()
	
		//Properties of tran_amount
		this.ctrl.tran_amount = {}
		this.ctrl.tran_amount.id = "RN01CN3"
		this.ctrl.tran_amount.desc = "TXN Amount Account Currency"
		this.ctrl.tran_amount.visible = true
		this.ctrl.tran_amount.label_name = "TXN Amount Account Currency"
		this.ctrl.tran_amount.df_code = "DF_1304_1665901396659"
		this.ctrl.tran_amount.df_description = "Column Group 1"
		this.ctrl.tran_amount.uictrl_code = "CUR"
		this.ctrl.tran_amount.target_column = "TRAN_AMOUNT"
		this.ctrl.tran_amount.data_type = "NUMBER"
		this.ctrl.tran_amount.data_length = 19
		this.ctrl.tran_amount.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.tran_amount.default_value = ""
		this.ctrl.tran_amount.is_memory_ctrl = ""
		this.ctrl.tran_amount.field_coordinates = ""
		this.ctrl.tran_amount.sub_details = ""
		this.ctrl.tran_amount.accept_char = ""
		this.ctrl.tran_amount.currency_format = ""
		this.ctrl.tran_amount.data_scale = "6"
		this.ctrl.tran_amount.hide_label = false
		this.ctrl.tran_amount.depends_on = ""
		this.ctrl.tran_amount.placeholder = ""
		this.ctrl.tran_amount.dynamic_param = ""
		this.ctrl.tran_amount.style_code = ""
		this.ctrl.tran_amount.data_source = ""
		this.ctrl.tran_amount.image_association = ""
		this.ctrl.tran_amount.show = true
		this.ctrl.tran_amount.sub_content = ""
		this.ctrl.tran_amount.required = false
		this.ctrl.tran_amount.vld_rules = []
		this.ctrl.tran_amount.targetcolumn_lower = "tran_amount"
		this.ctrl.tran_amount.disabled = false
		this.ctrl.tran_amount.view_name = "f_npss_reversal_n_ui"
		this.ctrl.tran_amount.ctrl_id = "npss_reversal_n_ui_tran_amount"
		this.ctrl.npss_reversal_n_ui_tran_amount = {}
		this.ctrl.npss_reversal_n_ui_tran_amount.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_reversal_n_ui.model = {"TRAN_CHARGE":"","BUY_RATE":"","BUY_MARGIN":"","TRAN_AMOUNT":""}
		this.screen_instance[this.comp_id].f_npss_reversal_n_ui.Meta = [{"CTLR_CODE":"CUR","DATA_TYPE":"NUMBER","TARGET_COLUMN":"TRAN_CHARGE"},{"CTLR_CODE":"CUR","DATA_TYPE":"NUMBER","TARGET_COLUMN":"BUY_RATE"},{"CTLR_CODE":"CUR","DATA_TYPE":"NUMBER","TARGET_COLUMN":"BUY_MARGIN"},{"CTLR_CODE":"CUR","DATA_TYPE":"NUMBER","TARGET_COLUMN":"TRAN_AMOUNT"}]
		this.screen_instance[this.comp_id].f_npss_reversal_n_ui.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_reversal_n_ui.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_reversal_n_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_reversal_n_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_reversal_n_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_reversal_n_ui[control][property] = value;
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
    