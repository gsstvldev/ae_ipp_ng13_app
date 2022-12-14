/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27337 
Modified By     : Admin 
Modified Date   : 2022-Dec-14 8:12 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_customer_setup
Form Name       : NPSS Customer Account UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_customer_account_ui',
  templateUrl: './f_npss_customer_account_ui.component.html',
  styleUrls: ['./f_npss_customer_account_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_customer_account_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_customer_account_ui') form;
  @ViewChild('npss_customer_account_ui_iban') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1666846042955"
	dtt_code : string = "dtt_1304_1666846862798"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of iban
		this.ctrl.iban = {}
		this.ctrl.iban.id = "RN01CN1"
		this.ctrl.iban.desc = "IBAN"
		this.ctrl.iban.visible = true
		this.ctrl.iban.label_name = "IBAN"
		this.ctrl.iban.df_code = "DF_1304_1666846901765"
		this.ctrl.iban.df_description = "Customer Accounts"
		this.ctrl.iban.uictrl_code = "TXT"
		this.ctrl.iban.target_column = "IBAN"
		this.ctrl.iban.data_type = "TEXT"
		this.ctrl.iban.data_length = 35
		this.ctrl.iban.zone_df_code = "DF_1304_1666846901765"
		this.ctrl.iban.default_value = ""
		this.ctrl.iban.is_memory_ctrl = ""
		this.ctrl.iban.field_coordinates = ""
		this.ctrl.iban.sub_details = ""
		this.ctrl.iban.accept_char = ""
		this.ctrl.iban.currency_format = ""
		this.ctrl.iban.data_scale = ""
		this.ctrl.iban.hide_label = false
		this.ctrl.iban.depends_on = ""
		this.ctrl.iban.placeholder = ""
		this.ctrl.iban.dynamic_param = ""
		this.ctrl.iban.style_code = ""
		this.ctrl.iban.data_source = ""
		this.ctrl.iban.image_association = ""
		this.ctrl.iban.show = true
		this.ctrl.iban.sub_content = "*"
		this.ctrl.iban.required = true
		this.ctrl.iban.vld_rules = []
		this.ctrl.iban.targetcolumn_lower = "iban"
		this.ctrl.iban.disabled = false
		this.ctrl.iban.view_name = "f_npss_customer_account_ui"
		this.ctrl.iban.ctrl_id = "npss_customer_account_ui_iban"
		this.ctrl.npss_customer_account_ui_iban = {}
		this.ctrl.npss_customer_account_ui_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of currency
		this.ctrl.currency = {}
		this.ctrl.currency.id = "RN01CN2"
		this.ctrl.currency.desc = "Currency"
		this.ctrl.currency.visible = true
		this.ctrl.currency.label_name = "Currency"
		this.ctrl.currency.df_code = "DF_1304_1666846901765"
		this.ctrl.currency.df_description = "Customer Accounts"
		this.ctrl.currency.uictrl_code = "TXT"
		this.ctrl.currency.target_column = "CURRENCY"
		this.ctrl.currency.data_type = "TEXT"
		this.ctrl.currency.data_length = 3
		this.ctrl.currency.zone_df_code = "DF_1304_1666846901765"
		this.ctrl.currency.default_value = ""
		this.ctrl.currency.is_memory_ctrl = ""
		this.ctrl.currency.field_coordinates = ""
		this.ctrl.currency.sub_details = ""
		this.ctrl.currency.accept_char = ""
		this.ctrl.currency.currency_format = ""
		this.ctrl.currency.data_scale = ""
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
		this.ctrl.currency.view_name = "f_npss_customer_account_ui"
		this.ctrl.currency.ctrl_id = "npss_customer_account_ui_currency"
		this.ctrl.npss_customer_account_ui_currency = {}
		this.ctrl.npss_customer_account_ui_currency.onChangecomponent = new EventEmitter<any>()
	
		//Properties of instant_payment
		this.ctrl.instant_payment = {}
		this.ctrl.instant_payment.id = "RN01CN4"
		this.ctrl.instant_payment.desc = "Instant Payment"
		this.ctrl.instant_payment.visible = true
		this.ctrl.instant_payment.label_name = "Instant Payment"
		this.ctrl.instant_payment.df_code = "DF_1304_1666846901765"
		this.ctrl.instant_payment.df_description = "Customer Accounts"
		this.ctrl.instant_payment.uictrl_code = "TXT"
		this.ctrl.instant_payment.target_column = "INSTANT_PAYMENT"
		this.ctrl.instant_payment.data_type = "TEXT"
		this.ctrl.instant_payment.data_length = 5
		this.ctrl.instant_payment.zone_df_code = "DF_1304_1666846901765"
		this.ctrl.instant_payment.default_value = ""
		this.ctrl.instant_payment.is_memory_ctrl = ""
		this.ctrl.instant_payment.field_coordinates = ""
		this.ctrl.instant_payment.sub_details = ""
		this.ctrl.instant_payment.accept_char = ""
		this.ctrl.instant_payment.currency_format = ""
		this.ctrl.instant_payment.data_scale = ""
		this.ctrl.instant_payment.hide_label = false
		this.ctrl.instant_payment.depends_on = ""
		this.ctrl.instant_payment.placeholder = ""
		this.ctrl.instant_payment.dynamic_param = ""
		this.ctrl.instant_payment.style_code = ""
		this.ctrl.instant_payment.data_source = ""
		this.ctrl.instant_payment.image_association = ""
		this.ctrl.instant_payment.show = true
		this.ctrl.instant_payment.sub_content = ""
		this.ctrl.instant_payment.required = false
		this.ctrl.instant_payment.vld_rules = []
		this.ctrl.instant_payment.targetcolumn_lower = "instant_payment"
		this.ctrl.instant_payment.disabled = false
		this.ctrl.instant_payment.view_name = "f_npss_customer_account_ui"
		this.ctrl.instant_payment.ctrl_id = "npss_customer_account_ui_instant_payment"
		this.ctrl.npss_customer_account_ui_instant_payment = {}
		this.ctrl.npss_customer_account_ui_instant_payment.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory9
		this.ctrl.memory9 = {}
		this.ctrl.memory9.id = "RN11CN4"
		this.ctrl.memory9.desc = "BlockIBAN"
		this.ctrl.memory9.visible = true
		this.ctrl.memory9.label_name = "BlockIBAN"
		this.ctrl.memory9.df_code = "DF_1304_1666846901765"
		this.ctrl.memory9.df_description = "Customer Accounts"
		this.ctrl.memory9.uictrl_code = "TXT"
		this.ctrl.memory9.target_column = "memory9"
		this.ctrl.memory9.data_type = "TEXT"
		this.ctrl.memory9.data_length = 35
		this.ctrl.memory9.zone_df_code = "DF_1304_1666846901765"
		this.ctrl.memory9.default_value = ""
		this.ctrl.memory9.is_memory_ctrl = "Y"
		this.ctrl.memory9.field_coordinates = ""
		this.ctrl.memory9.sub_details = ""
		this.ctrl.memory9.accept_char = ""
		this.ctrl.memory9.currency_format = ""
		this.ctrl.memory9.data_scale = ""
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
		this.ctrl.memory9.view_name = "f_npss_customer_account_ui"
		this.ctrl.memory9.ctrl_id = "npss_customer_account_ui_memory9"
		this.ctrl.npss_customer_account_ui_memory9 = {}
		this.ctrl.npss_customer_account_ui_memory9.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory10
		this.ctrl.memory10 = {}
		this.ctrl.memory10.id = "RN11CN5"
		this.ctrl.memory10.desc = "UnblockIBAN"
		this.ctrl.memory10.visible = true
		this.ctrl.memory10.label_name = "UnblockIBAN"
		this.ctrl.memory10.df_code = "DF_1304_1666846901765"
		this.ctrl.memory10.df_description = "Customer Accounts"
		this.ctrl.memory10.uictrl_code = "TXT"
		this.ctrl.memory10.target_column = "memory10"
		this.ctrl.memory10.data_type = "TEXT"
		this.ctrl.memory10.data_length = 35
		this.ctrl.memory10.zone_df_code = "DF_1304_1666846901765"
		this.ctrl.memory10.default_value = ""
		this.ctrl.memory10.is_memory_ctrl = "Y"
		this.ctrl.memory10.field_coordinates = ""
		this.ctrl.memory10.sub_details = ""
		this.ctrl.memory10.accept_char = ""
		this.ctrl.memory10.currency_format = ""
		this.ctrl.memory10.data_scale = ""
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
		this.ctrl.memory10.view_name = "f_npss_customer_account_ui"
		this.ctrl.memory10.ctrl_id = "npss_customer_account_ui_memory10"
		this.ctrl.npss_customer_account_ui_memory10 = {}
		this.ctrl.npss_customer_account_ui_memory10.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_customer_account_ui.model = {"IBAN":"","CURRENCY":"","INSTANT_PAYMENT":"","MEMORY9":"","MEMORY10":""}
		this.screen_instance[this.comp_id].f_npss_customer_account_ui.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"IBAN"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CURRENCY"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"INSTANT_PAYMENT"}]
		this.screen_instance[this.comp_id].f_npss_customer_account_ui.dt_code = "dt_1304_1666846042955"
		this.screen_instance[this.comp_id].f_npss_customer_account_ui.dtt_code = "dtt_1304_1666846862798"
		this.screen_instance[this.comp_id].f_npss_customer_account_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_customer_account_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_customer_account_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_customer_account_ui[control][property] = value;
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
    