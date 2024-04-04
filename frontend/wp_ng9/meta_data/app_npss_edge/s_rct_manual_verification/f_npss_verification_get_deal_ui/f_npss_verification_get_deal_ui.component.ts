/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35083 
Modified By     : Admin 
Modified Date   : 2024-Apr-04 11:10 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_manual_verification
Form Name       : NPSS Verification Get Deal UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_verification_get_deal_ui',
  templateUrl: './f_npss_verification_get_deal_ui.component.html',
  styleUrls: ['./f_npss_verification_get_deal_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_verification_get_deal_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_verification_get_deal_ui') form;
  @ViewChild('npss_verification_get_deal_ui_buy_currency') element: ElementRef;
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

  
		//Properties of buy_currency
		this.ctrl.buy_currency = {}
		this.ctrl.buy_currency.id = "RN01CN1"
		this.ctrl.buy_currency.desc = "Buy Currency"
		this.ctrl.buy_currency.visible = true
		this.ctrl.buy_currency.label_name = "Buy Currency"
		this.ctrl.buy_currency.df_code = "DF_1304_1665905157963"
		this.ctrl.buy_currency.df_description = "Column Group 1"
		this.ctrl.buy_currency.uictrl_code = "TXT"
		this.ctrl.buy_currency.target_column = "BUY_CURRENCY"
		this.ctrl.buy_currency.data_type = "TEXT"
		this.ctrl.buy_currency.data_length = 3
		this.ctrl.buy_currency.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.buy_currency.default_value = ""
		this.ctrl.buy_currency.is_memory_ctrl = ""
		this.ctrl.buy_currency.field_coordinates = ""
		this.ctrl.buy_currency.sub_details = ""
		this.ctrl.buy_currency.accept_char = ""
		this.ctrl.buy_currency.currency_format = ""
		this.ctrl.buy_currency.data_scale = ""
		this.ctrl.buy_currency.hide_label = false
		this.ctrl.buy_currency.depends_on = ""
		this.ctrl.buy_currency.placeholder = ""
		this.ctrl.buy_currency.dynamic_param = ""
		this.ctrl.buy_currency.style_code = ""
		this.ctrl.buy_currency.data_source = ""
		this.ctrl.buy_currency.image_association = ""
		this.ctrl.buy_currency.show = true
		this.ctrl.buy_currency.sub_content = ""
		this.ctrl.buy_currency.required = false
		this.ctrl.buy_currency.vld_rules = []
		this.ctrl.buy_currency.targetcolumn_lower = "buy_currency"
		this.ctrl.buy_currency.disabled = false
		this.ctrl.buy_currency.view_name = "f_npss_verification_get_deal_ui"
		this.ctrl.buy_currency.ctrl_id = "npss_verification_get_deal_ui_buy_currency"
		this.ctrl.npss_verification_get_deal_ui_buy_currency = {}
		this.ctrl.npss_verification_get_deal_ui_buy_currency.onChangecomponent = new EventEmitter<any>()
	
		//Properties of sell_currency
		this.ctrl.sell_currency = {}
		this.ctrl.sell_currency.id = "RN01CN2"
		this.ctrl.sell_currency.desc = "Sell Currency"
		this.ctrl.sell_currency.visible = true
		this.ctrl.sell_currency.label_name = "Sell Currency"
		this.ctrl.sell_currency.df_code = "DF_1304_1665905157963"
		this.ctrl.sell_currency.df_description = "Column Group 1"
		this.ctrl.sell_currency.uictrl_code = "TXT"
		this.ctrl.sell_currency.target_column = "SELL_CURRENCY"
		this.ctrl.sell_currency.data_type = "TEXT"
		this.ctrl.sell_currency.data_length = 3
		this.ctrl.sell_currency.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.sell_currency.default_value = ""
		this.ctrl.sell_currency.is_memory_ctrl = ""
		this.ctrl.sell_currency.field_coordinates = ""
		this.ctrl.sell_currency.sub_details = ""
		this.ctrl.sell_currency.accept_char = ""
		this.ctrl.sell_currency.currency_format = ""
		this.ctrl.sell_currency.data_scale = ""
		this.ctrl.sell_currency.hide_label = false
		this.ctrl.sell_currency.depends_on = ""
		this.ctrl.sell_currency.placeholder = ""
		this.ctrl.sell_currency.dynamic_param = ""
		this.ctrl.sell_currency.style_code = ""
		this.ctrl.sell_currency.data_source = ""
		this.ctrl.sell_currency.image_association = ""
		this.ctrl.sell_currency.show = true
		this.ctrl.sell_currency.sub_content = ""
		this.ctrl.sell_currency.required = false
		this.ctrl.sell_currency.vld_rules = []
		this.ctrl.sell_currency.targetcolumn_lower = "sell_currency"
		this.ctrl.sell_currency.disabled = false
		this.ctrl.sell_currency.view_name = "f_npss_verification_get_deal_ui"
		this.ctrl.sell_currency.ctrl_id = "npss_verification_get_deal_ui_sell_currency"
		this.ctrl.npss_verification_get_deal_ui_sell_currency = {}
		this.ctrl.npss_verification_get_deal_ui_sell_currency.onChangecomponent = new EventEmitter<any>()
	
		//Properties of contra_amount
		this.ctrl.contra_amount = {}
		this.ctrl.contra_amount.id = "RN01CN3"
		this.ctrl.contra_amount.desc = "Contra Amount"
		this.ctrl.contra_amount.visible = true
		this.ctrl.contra_amount.label_name = "Contra Amount"
		this.ctrl.contra_amount.df_code = "DF_1304_1665905157963"
		this.ctrl.contra_amount.df_description = "Column Group 1"
		this.ctrl.contra_amount.uictrl_code = "TXT"
		this.ctrl.contra_amount.target_column = "CONTRA_AMOUNT"
		this.ctrl.contra_amount.data_type = "NUMBER"
		this.ctrl.contra_amount.data_length = 19
		this.ctrl.contra_amount.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.contra_amount.default_value = ""
		this.ctrl.contra_amount.is_memory_ctrl = ""
		this.ctrl.contra_amount.field_coordinates = ""
		this.ctrl.contra_amount.sub_details = ""
		this.ctrl.contra_amount.accept_char = ""
		this.ctrl.contra_amount.currency_format = ""
		this.ctrl.contra_amount.data_scale = "2"
		this.ctrl.contra_amount.hide_label = false
		this.ctrl.contra_amount.depends_on = ""
		this.ctrl.contra_amount.placeholder = ""
		this.ctrl.contra_amount.dynamic_param = ""
		this.ctrl.contra_amount.style_code = ""
		this.ctrl.contra_amount.data_source = ""
		this.ctrl.contra_amount.image_association = ""
		this.ctrl.contra_amount.show = true
		this.ctrl.contra_amount.sub_content = ""
		this.ctrl.contra_amount.required = false
		this.ctrl.contra_amount.vld_rules = []
		this.ctrl.contra_amount.targetcolumn_lower = "contra_amount"
		this.ctrl.contra_amount.disabled = false
		this.ctrl.contra_amount.view_name = "f_npss_verification_get_deal_ui"
		this.ctrl.contra_amount.ctrl_id = "npss_verification_get_deal_ui_contra_amount"
		this.ctrl.npss_verification_get_deal_ui_contra_amount = {}
		this.ctrl.npss_verification_get_deal_ui_contra_amount.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dealt_amount
		this.ctrl.dealt_amount = {}
		this.ctrl.dealt_amount.id = "RN01CN4"
		this.ctrl.dealt_amount.desc = "Dealt Amount"
		this.ctrl.dealt_amount.visible = true
		this.ctrl.dealt_amount.label_name = "Dealt Amount"
		this.ctrl.dealt_amount.df_code = "DF_1304_1665905157963"
		this.ctrl.dealt_amount.df_description = "Column Group 1"
		this.ctrl.dealt_amount.uictrl_code = "TXT"
		this.ctrl.dealt_amount.target_column = "DEALT_AMOUNT"
		this.ctrl.dealt_amount.data_type = "NUMBER"
		this.ctrl.dealt_amount.data_length = 19
		this.ctrl.dealt_amount.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.dealt_amount.default_value = ""
		this.ctrl.dealt_amount.is_memory_ctrl = ""
		this.ctrl.dealt_amount.field_coordinates = ""
		this.ctrl.dealt_amount.sub_details = ""
		this.ctrl.dealt_amount.accept_char = ""
		this.ctrl.dealt_amount.currency_format = ""
		this.ctrl.dealt_amount.data_scale = "2"
		this.ctrl.dealt_amount.hide_label = false
		this.ctrl.dealt_amount.depends_on = ""
		this.ctrl.dealt_amount.placeholder = ""
		this.ctrl.dealt_amount.dynamic_param = ""
		this.ctrl.dealt_amount.style_code = ""
		this.ctrl.dealt_amount.data_source = ""
		this.ctrl.dealt_amount.image_association = ""
		this.ctrl.dealt_amount.show = true
		this.ctrl.dealt_amount.sub_content = ""
		this.ctrl.dealt_amount.required = false
		this.ctrl.dealt_amount.vld_rules = []
		this.ctrl.dealt_amount.targetcolumn_lower = "dealt_amount"
		this.ctrl.dealt_amount.disabled = false
		this.ctrl.dealt_amount.view_name = "f_npss_verification_get_deal_ui"
		this.ctrl.dealt_amount.ctrl_id = "npss_verification_get_deal_ui_dealt_amount"
		this.ctrl.npss_verification_get_deal_ui_dealt_amount = {}
		this.ctrl.npss_verification_get_deal_ui_dealt_amount.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory58
		this.ctrl.memory58 = {}
		this.ctrl.memory58.id = "RN01CN5"
		this.ctrl.memory58.desc = "Buy Spread"
		this.ctrl.memory58.visible = true
		this.ctrl.memory58.label_name = "Buy Spread"
		this.ctrl.memory58.df_code = "DF_1304_1665905157963"
		this.ctrl.memory58.df_description = "Column Group 1"
		this.ctrl.memory58.uictrl_code = "TXT"
		this.ctrl.memory58.target_column = "memory58"
		this.ctrl.memory58.data_type = "TEXT"
		this.ctrl.memory58.data_length = 0
		this.ctrl.memory58.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.memory58.default_value = ""
		this.ctrl.memory58.is_memory_ctrl = "Y"
		this.ctrl.memory58.field_coordinates = ""
		this.ctrl.memory58.sub_details = ""
		this.ctrl.memory58.accept_char = ""
		this.ctrl.memory58.currency_format = ""
		this.ctrl.memory58.data_scale = ""
		this.ctrl.memory58.hide_label = false
		this.ctrl.memory58.depends_on = ""
		this.ctrl.memory58.placeholder = ""
		this.ctrl.memory58.dynamic_param = ""
		this.ctrl.memory58.style_code = ""
		this.ctrl.memory58.data_source = ""
		this.ctrl.memory58.image_association = ""
		this.ctrl.memory58.show = true
		this.ctrl.memory58.sub_content = ""
		this.ctrl.memory58.required = false
		this.ctrl.memory58.vld_rules = []
		this.ctrl.memory58.targetcolumn_lower = "memory58"
		this.ctrl.memory58.disabled = false
		this.ctrl.memory58.view_name = "f_npss_verification_get_deal_ui"
		this.ctrl.memory58.ctrl_id = "npss_verification_get_deal_ui_memory58"
		this.ctrl.npss_verification_get_deal_ui_memory58 = {}
		this.ctrl.npss_verification_get_deal_ui_memory58.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory59
		this.ctrl.memory59 = {}
		this.ctrl.memory59.id = "RN01CN6"
		this.ctrl.memory59.desc = "Buy Rate"
		this.ctrl.memory59.visible = true
		this.ctrl.memory59.label_name = "Buy Rate"
		this.ctrl.memory59.df_code = "DF_1304_1665905157963"
		this.ctrl.memory59.df_description = "Column Group 1"
		this.ctrl.memory59.uictrl_code = "TXT"
		this.ctrl.memory59.target_column = "memory59"
		this.ctrl.memory59.data_type = "TEXT"
		this.ctrl.memory59.data_length = 0
		this.ctrl.memory59.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.memory59.default_value = ""
		this.ctrl.memory59.is_memory_ctrl = "Y"
		this.ctrl.memory59.field_coordinates = ""
		this.ctrl.memory59.sub_details = ""
		this.ctrl.memory59.accept_char = ""
		this.ctrl.memory59.currency_format = ""
		this.ctrl.memory59.data_scale = ""
		this.ctrl.memory59.hide_label = false
		this.ctrl.memory59.depends_on = ""
		this.ctrl.memory59.placeholder = ""
		this.ctrl.memory59.dynamic_param = ""
		this.ctrl.memory59.style_code = ""
		this.ctrl.memory59.data_source = ""
		this.ctrl.memory59.image_association = ""
		this.ctrl.memory59.show = true
		this.ctrl.memory59.sub_content = ""
		this.ctrl.memory59.required = false
		this.ctrl.memory59.vld_rules = []
		this.ctrl.memory59.targetcolumn_lower = "memory59"
		this.ctrl.memory59.disabled = false
		this.ctrl.memory59.view_name = "f_npss_verification_get_deal_ui"
		this.ctrl.memory59.ctrl_id = "npss_verification_get_deal_ui_memory59"
		this.ctrl.npss_verification_get_deal_ui_memory59 = {}
		this.ctrl.npss_verification_get_deal_ui_memory59.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_verification_get_deal_ui.model = {"BUY_CURRENCY":"","SELL_CURRENCY":"","CONTRA_AMOUNT":"","DEALT_AMOUNT":"","MEMORY58":"","MEMORY59":""}
		this.screen_instance[this.comp_id].f_npss_verification_get_deal_ui.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"BUY_CURRENCY"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"SELL_CURRENCY"},{"CTLR_CODE":"TXT","DATA_TYPE":"NUMBER","TARGET_COLUMN":"CONTRA_AMOUNT"},{"CTLR_CODE":"TXT","DATA_TYPE":"NUMBER","TARGET_COLUMN":"DEALT_AMOUNT"}]
		this.screen_instance[this.comp_id].f_npss_verification_get_deal_ui.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_verification_get_deal_ui.dtt_code = "dtt_1304_1665905039255"
		this.screen_instance[this.comp_id].f_npss_verification_get_deal_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_verification_get_deal_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_verification_get_deal_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_verification_get_deal_ui[control][property] = value;
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
    