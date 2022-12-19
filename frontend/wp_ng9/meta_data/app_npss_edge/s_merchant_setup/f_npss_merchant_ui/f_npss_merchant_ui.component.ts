/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27443 
Modified By     : Admin 
Modified Date   : 2022-Dec-19 5:59 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_setup
Form Name       : NPSS Merchant UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_merchant_ui',
  templateUrl: './f_npss_merchant_ui.component.html',
  styleUrls: ['./f_npss_merchant_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_merchant_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_merchant_ui') form;
  @ViewChild('npss_merchant_ui_channel_id') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1666846074129"
	dtt_code : string = "dtt_1304_1666846129395"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of channel_id
		this.ctrl.channel_id = {}
		this.ctrl.channel_id.id = "RN01CN1"
		this.ctrl.channel_id.desc = "Channel ID"
		this.ctrl.channel_id.visible = true
		this.ctrl.channel_id.label_name = "Channel ID"
		this.ctrl.channel_id.df_code = "DF_1304_1666846276198"
		this.ctrl.channel_id.df_description = "Column Group 1"
		this.ctrl.channel_id.uictrl_code = "TXT"
		this.ctrl.channel_id.target_column = "CHANNEL_ID"
		this.ctrl.channel_id.data_type = "TEXT"
		this.ctrl.channel_id.data_length = 128
		this.ctrl.channel_id.zone_df_code = "DF_1304_1666846276198"
		this.ctrl.channel_id.default_value = ""
		this.ctrl.channel_id.is_memory_ctrl = ""
		this.ctrl.channel_id.field_coordinates = ""
		this.ctrl.channel_id.sub_details = ""
		this.ctrl.channel_id.accept_char = ""
		this.ctrl.channel_id.currency_format = ""
		this.ctrl.channel_id.data_scale = ""
		this.ctrl.channel_id.hide_label = false
		this.ctrl.channel_id.depends_on = ""
		this.ctrl.channel_id.placeholder = ""
		this.ctrl.channel_id.dynamic_param = ""
		this.ctrl.channel_id.style_code = ""
		this.ctrl.channel_id.data_source = ""
		this.ctrl.channel_id.image_association = ""
		this.ctrl.channel_id.show = true
		this.ctrl.channel_id.sub_content = ""
		this.ctrl.channel_id.required = false
		this.ctrl.channel_id.vld_rules = []
		this.ctrl.channel_id.targetcolumn_lower = "channel_id"
		this.ctrl.channel_id.disabled = false
		this.ctrl.channel_id.view_name = "f_npss_merchant_ui"
		this.ctrl.channel_id.ctrl_id = "npss_merchant_ui_channel_id"
		this.ctrl.npss_merchant_ui_channel_id = {}
		this.ctrl.npss_merchant_ui_channel_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of bankuserid
		this.ctrl.bankuserid = {}
		this.ctrl.bankuserid.id = "RN01CN2"
		this.ctrl.bankuserid.desc = "Bank User ID"
		this.ctrl.bankuserid.visible = true
		this.ctrl.bankuserid.label_name = "Bank User ID"
		this.ctrl.bankuserid.df_code = "DF_1304_1666846276198"
		this.ctrl.bankuserid.df_description = "Column Group 1"
		this.ctrl.bankuserid.uictrl_code = "TXT"
		this.ctrl.bankuserid.target_column = "BANKUSERID"
		this.ctrl.bankuserid.data_type = "TEXT"
		this.ctrl.bankuserid.data_length = 16
		this.ctrl.bankuserid.zone_df_code = "DF_1304_1666846276198"
		this.ctrl.bankuserid.default_value = ""
		this.ctrl.bankuserid.is_memory_ctrl = ""
		this.ctrl.bankuserid.field_coordinates = ""
		this.ctrl.bankuserid.sub_details = ""
		this.ctrl.bankuserid.accept_char = ""
		this.ctrl.bankuserid.currency_format = ""
		this.ctrl.bankuserid.data_scale = ""
		this.ctrl.bankuserid.hide_label = false
		this.ctrl.bankuserid.depends_on = ""
		this.ctrl.bankuserid.placeholder = ""
		this.ctrl.bankuserid.dynamic_param = ""
		this.ctrl.bankuserid.style_code = ""
		this.ctrl.bankuserid.data_source = ""
		this.ctrl.bankuserid.image_association = ""
		this.ctrl.bankuserid.show = true
		this.ctrl.bankuserid.sub_content = "*"
		this.ctrl.bankuserid.required = true
		this.ctrl.bankuserid.vld_rules = []
		this.ctrl.bankuserid.targetcolumn_lower = "bankuserid"
		this.ctrl.bankuserid.disabled = false
		this.ctrl.bankuserid.view_name = "f_npss_merchant_ui"
		this.ctrl.bankuserid.ctrl_id = "npss_merchant_ui_bankuserid"
		this.ctrl.npss_merchant_ui_bankuserid = {}
		this.ctrl.npss_merchant_ui_bankuserid.onChangecomponent = new EventEmitter<any>()
	
		//Properties of merchant_name
		this.ctrl.merchant_name = {}
		this.ctrl.merchant_name.id = "RN01CN4"
		this.ctrl.merchant_name.desc = "Merchant Name"
		this.ctrl.merchant_name.visible = true
		this.ctrl.merchant_name.label_name = "Merchant Name"
		this.ctrl.merchant_name.df_code = "DF_1304_1666846276198"
		this.ctrl.merchant_name.df_description = "Column Group 1"
		this.ctrl.merchant_name.uictrl_code = "TXT"
		this.ctrl.merchant_name.target_column = "MERCHANT_NAME"
		this.ctrl.merchant_name.data_type = "TEXT"
		this.ctrl.merchant_name.data_length = 50
		this.ctrl.merchant_name.zone_df_code = "DF_1304_1666846276198"
		this.ctrl.merchant_name.default_value = ""
		this.ctrl.merchant_name.is_memory_ctrl = ""
		this.ctrl.merchant_name.field_coordinates = ""
		this.ctrl.merchant_name.sub_details = ""
		this.ctrl.merchant_name.accept_char = ""
		this.ctrl.merchant_name.currency_format = ""
		this.ctrl.merchant_name.data_scale = ""
		this.ctrl.merchant_name.hide_label = false
		this.ctrl.merchant_name.depends_on = ""
		this.ctrl.merchant_name.placeholder = ""
		this.ctrl.merchant_name.dynamic_param = ""
		this.ctrl.merchant_name.style_code = ""
		this.ctrl.merchant_name.data_source = ""
		this.ctrl.merchant_name.image_association = ""
		this.ctrl.merchant_name.show = true
		this.ctrl.merchant_name.sub_content = ""
		this.ctrl.merchant_name.required = false
		this.ctrl.merchant_name.vld_rules = []
		this.ctrl.merchant_name.targetcolumn_lower = "merchant_name"
		this.ctrl.merchant_name.disabled = false
		this.ctrl.merchant_name.view_name = "f_npss_merchant_ui"
		this.ctrl.merchant_name.ctrl_id = "npss_merchant_ui_merchant_name"
		this.ctrl.npss_merchant_ui_merchant_name = {}
		this.ctrl.npss_merchant_ui_merchant_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of surname
		this.ctrl.surname = {}
		this.ctrl.surname.id = "RN01CN3"
		this.ctrl.surname.desc = "Surname"
		this.ctrl.surname.visible = true
		this.ctrl.surname.label_name = "Surname"
		this.ctrl.surname.df_code = "DF_1304_1666846276198"
		this.ctrl.surname.df_description = "Column Group 1"
		this.ctrl.surname.uictrl_code = "TXT"
		this.ctrl.surname.target_column = "SURNAME"
		this.ctrl.surname.data_type = "TEXT"
		this.ctrl.surname.data_length = 50
		this.ctrl.surname.zone_df_code = "DF_1304_1666846276198"
		this.ctrl.surname.default_value = ""
		this.ctrl.surname.is_memory_ctrl = ""
		this.ctrl.surname.field_coordinates = ""
		this.ctrl.surname.sub_details = ""
		this.ctrl.surname.accept_char = ""
		this.ctrl.surname.currency_format = ""
		this.ctrl.surname.data_scale = ""
		this.ctrl.surname.hide_label = false
		this.ctrl.surname.depends_on = ""
		this.ctrl.surname.placeholder = ""
		this.ctrl.surname.dynamic_param = ""
		this.ctrl.surname.style_code = ""
		this.ctrl.surname.data_source = ""
		this.ctrl.surname.image_association = ""
		this.ctrl.surname.show = true
		this.ctrl.surname.sub_content = ""
		this.ctrl.surname.required = false
		this.ctrl.surname.vld_rules = []
		this.ctrl.surname.targetcolumn_lower = "surname"
		this.ctrl.surname.disabled = false
		this.ctrl.surname.view_name = "f_npss_merchant_ui"
		this.ctrl.surname.ctrl_id = "npss_merchant_ui_surname"
		this.ctrl.npss_merchant_ui_surname = {}
		this.ctrl.npss_merchant_ui_surname.onChangecomponent = new EventEmitter<any>()
	
		//Properties of mobile
		this.ctrl.mobile = {}
		this.ctrl.mobile.id = "RN11CN6"
		this.ctrl.mobile.desc = "Mobile"
		this.ctrl.mobile.visible = true
		this.ctrl.mobile.label_name = "Mobile"
		this.ctrl.mobile.df_code = "DF_1304_1666846276198"
		this.ctrl.mobile.df_description = "Column Group 1"
		this.ctrl.mobile.uictrl_code = "TXT"
		this.ctrl.mobile.target_column = "MOBILE"
		this.ctrl.mobile.data_type = "TEXT"
		this.ctrl.mobile.data_length = 30
		this.ctrl.mobile.zone_df_code = "DF_1304_1666846276198"
		this.ctrl.mobile.default_value = ""
		this.ctrl.mobile.is_memory_ctrl = ""
		this.ctrl.mobile.field_coordinates = ""
		this.ctrl.mobile.sub_details = ""
		this.ctrl.mobile.accept_char = ""
		this.ctrl.mobile.currency_format = ""
		this.ctrl.mobile.data_scale = ""
		this.ctrl.mobile.hide_label = false
		this.ctrl.mobile.depends_on = ""
		this.ctrl.mobile.placeholder = ""
		this.ctrl.mobile.dynamic_param = ""
		this.ctrl.mobile.style_code = ""
		this.ctrl.mobile.data_source = ""
		this.ctrl.mobile.image_association = ""
		this.ctrl.mobile.show = true
		this.ctrl.mobile.sub_content = "*"
		this.ctrl.mobile.required = true
		this.ctrl.mobile.vld_rules = []
		this.ctrl.mobile.targetcolumn_lower = "mobile"
		this.ctrl.mobile.disabled = false
		this.ctrl.mobile.view_name = "f_npss_merchant_ui"
		this.ctrl.mobile.ctrl_id = "npss_merchant_ui_mobile"
		this.ctrl.npss_merchant_ui_mobile = {}
		this.ctrl.npss_merchant_ui_mobile.onChangecomponent = new EventEmitter<any>()
	
		//Properties of proxy_type
		this.ctrl.proxy_type = {}
		this.ctrl.proxy_type.id = "RN11CN7"
		this.ctrl.proxy_type.desc = "Proxy Type"
		this.ctrl.proxy_type.visible = true
		this.ctrl.proxy_type.label_name = "Proxy Type"
		this.ctrl.proxy_type.df_code = "DF_1304_1666846276198"
		this.ctrl.proxy_type.df_description = "Column Group 1"
		this.ctrl.proxy_type.uictrl_code = "TXT"
		this.ctrl.proxy_type.target_column = "PROXY_TYPE"
		this.ctrl.proxy_type.data_type = "TEXT"
		this.ctrl.proxy_type.data_length = 50
		this.ctrl.proxy_type.zone_df_code = "DF_1304_1666846276198"
		this.ctrl.proxy_type.default_value = ""
		this.ctrl.proxy_type.is_memory_ctrl = ""
		this.ctrl.proxy_type.field_coordinates = ""
		this.ctrl.proxy_type.sub_details = ""
		this.ctrl.proxy_type.accept_char = ""
		this.ctrl.proxy_type.currency_format = ""
		this.ctrl.proxy_type.data_scale = ""
		this.ctrl.proxy_type.hide_label = false
		this.ctrl.proxy_type.depends_on = ""
		this.ctrl.proxy_type.placeholder = ""
		this.ctrl.proxy_type.dynamic_param = ""
		this.ctrl.proxy_type.style_code = ""
		this.ctrl.proxy_type.data_source = ""
		this.ctrl.proxy_type.image_association = ""
		this.ctrl.proxy_type.show = true
		this.ctrl.proxy_type.sub_content = ""
		this.ctrl.proxy_type.required = false
		this.ctrl.proxy_type.vld_rules = []
		this.ctrl.proxy_type.targetcolumn_lower = "proxy_type"
		this.ctrl.proxy_type.disabled = false
		this.ctrl.proxy_type.view_name = "f_npss_merchant_ui"
		this.ctrl.proxy_type.ctrl_id = "npss_merchant_ui_proxy_type"
		this.ctrl.npss_merchant_ui_proxy_type = {}
		this.ctrl.npss_merchant_ui_proxy_type.onChangecomponent = new EventEmitter<any>()
	
		//Properties of proxy_value
		this.ctrl.proxy_value = {}
		this.ctrl.proxy_value.id = "RN11CN8"
		this.ctrl.proxy_value.desc = "Proxy Value"
		this.ctrl.proxy_value.visible = true
		this.ctrl.proxy_value.label_name = "Proxy Value"
		this.ctrl.proxy_value.df_code = "DF_1304_1666846276198"
		this.ctrl.proxy_value.df_description = "Column Group 1"
		this.ctrl.proxy_value.uictrl_code = "TXT"
		this.ctrl.proxy_value.target_column = "PROXY_VALUE"
		this.ctrl.proxy_value.data_type = "TEXT"
		this.ctrl.proxy_value.data_length = 50
		this.ctrl.proxy_value.zone_df_code = "DF_1304_1666846276198"
		this.ctrl.proxy_value.default_value = ""
		this.ctrl.proxy_value.is_memory_ctrl = ""
		this.ctrl.proxy_value.field_coordinates = ""
		this.ctrl.proxy_value.sub_details = ""
		this.ctrl.proxy_value.accept_char = ""
		this.ctrl.proxy_value.currency_format = ""
		this.ctrl.proxy_value.data_scale = ""
		this.ctrl.proxy_value.hide_label = false
		this.ctrl.proxy_value.depends_on = ""
		this.ctrl.proxy_value.placeholder = ""
		this.ctrl.proxy_value.dynamic_param = ""
		this.ctrl.proxy_value.style_code = ""
		this.ctrl.proxy_value.data_source = ""
		this.ctrl.proxy_value.image_association = ""
		this.ctrl.proxy_value.show = true
		this.ctrl.proxy_value.sub_content = ""
		this.ctrl.proxy_value.required = false
		this.ctrl.proxy_value.vld_rules = []
		this.ctrl.proxy_value.targetcolumn_lower = "proxy_value"
		this.ctrl.proxy_value.disabled = false
		this.ctrl.proxy_value.view_name = "f_npss_merchant_ui"
		this.ctrl.proxy_value.ctrl_id = "npss_merchant_ui_proxy_value"
		this.ctrl.npss_merchant_ui_proxy_value = {}
		this.ctrl.npss_merchant_ui_proxy_value.onChangecomponent = new EventEmitter<any>()
	
		//Properties of denomination
		this.ctrl.denomination = {}
		this.ctrl.denomination.id = "RN11CN9"
		this.ctrl.denomination.desc = "Denomination"
		this.ctrl.denomination.visible = true
		this.ctrl.denomination.label_name = "Denomination"
		this.ctrl.denomination.df_code = "DF_1304_1666846276198"
		this.ctrl.denomination.df_description = "Column Group 1"
		this.ctrl.denomination.uictrl_code = "TXT"
		this.ctrl.denomination.target_column = "DENOMINATION"
		this.ctrl.denomination.data_type = "TEXT"
		this.ctrl.denomination.data_length = 100
		this.ctrl.denomination.zone_df_code = "DF_1304_1666846276198"
		this.ctrl.denomination.default_value = ""
		this.ctrl.denomination.is_memory_ctrl = ""
		this.ctrl.denomination.field_coordinates = ""
		this.ctrl.denomination.sub_details = ""
		this.ctrl.denomination.accept_char = ""
		this.ctrl.denomination.currency_format = ""
		this.ctrl.denomination.data_scale = ""
		this.ctrl.denomination.hide_label = false
		this.ctrl.denomination.depends_on = ""
		this.ctrl.denomination.placeholder = ""
		this.ctrl.denomination.dynamic_param = ""
		this.ctrl.denomination.style_code = ""
		this.ctrl.denomination.data_source = ""
		this.ctrl.denomination.image_association = ""
		this.ctrl.denomination.show = true
		this.ctrl.denomination.sub_content = "*"
		this.ctrl.denomination.required = true
		this.ctrl.denomination.vld_rules = []
		this.ctrl.denomination.targetcolumn_lower = "denomination"
		this.ctrl.denomination.disabled = false
		this.ctrl.denomination.view_name = "f_npss_merchant_ui"
		this.ctrl.denomination.ctrl_id = "npss_merchant_ui_denomination"
		this.ctrl.npss_merchant_ui_denomination = {}
		this.ctrl.npss_merchant_ui_denomination.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_merchant_ui.model = {"CHANNEL_ID":"","BANKUSERID":"","MERCHANT_NAME":"","SURNAME":"","MOBILE":"","PROXY_TYPE":"","PROXY_VALUE":"","DENOMINATION":""}
		this.screen_instance[this.comp_id].f_npss_merchant_ui.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CHANNEL_ID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"BANKUSERID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"MERCHANT_NAME"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"SURNAME"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"MOBILE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROXY_TYPE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROXY_VALUE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DENOMINATION"}]
		this.screen_instance[this.comp_id].f_npss_merchant_ui.dt_code = "dt_1304_1666846074129"
		this.screen_instance[this.comp_id].f_npss_merchant_ui.dtt_code = "dtt_1304_1666846129395"
		this.screen_instance[this.comp_id].f_npss_merchant_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_merchant_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_merchant_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_merchant_ui[control][property] = value;
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
    