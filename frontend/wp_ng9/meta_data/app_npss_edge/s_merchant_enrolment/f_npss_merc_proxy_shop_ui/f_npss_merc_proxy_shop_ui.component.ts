/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26441 
Modified By     : Admin 
Modified Date   : 2022-Oct-14 11:18 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_enrolment
Form Name       : NPSS Merc Proxy Shop UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_merc_proxy_shop_ui',
  templateUrl: './f_npss_merc_proxy_shop_ui.component.html',
  styleUrls: ['./f_npss_merc_proxy_shop_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_merc_proxy_shop_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_merc_proxy_shop_ui') form;
  @ViewChild('npss_merc_proxy_shop_ui_shop_type') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665384579126"
	dtt_code : string = "dtt_1304_1665385894443"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of shop_type
		this.ctrl.shop_type = {}
		this.ctrl.shop_type.id = "RN01CN1"
		this.ctrl.shop_type.desc = "Shop Type"
		this.ctrl.shop_type.visible = true
		this.ctrl.shop_type.label_name = "Shop Type"
		this.ctrl.shop_type.df_code = "DF_1304_1665385948654"
		this.ctrl.shop_type.df_description = "Column Group 1"
		this.ctrl.shop_type.uictrl_code = "CBO"
		this.ctrl.shop_type.target_column = "SHOP_TYPE"
		this.ctrl.shop_type.data_type = "TEXT"
		this.ctrl.shop_type.data_length = 16
		this.ctrl.shop_type.zone_df_code = "DF_1304_1665385948654"
		this.ctrl.shop_type.default_value = ""
		this.ctrl.shop_type.is_memory_ctrl = ""
		this.ctrl.shop_type.field_coordinates = ""
		this.ctrl.shop_type.sub_details = ""
		this.ctrl.shop_type.accept_char = ""
		this.ctrl.shop_type.currency_format = ""
		this.ctrl.shop_type.data_scale = ""
		this.ctrl.shop_type.hide_label = false
		this.ctrl.shop_type.depends_on = ""
		this.ctrl.shop_type.placeholder = ""
		this.ctrl.shop_type.dynamic_param = ""
		this.ctrl.shop_type.style_code = ""
		this.ctrl.shop_type.data_source = {"ds_code":"UDS_1304_1665393618772","ds_description":"NPSS Shop type cdb","rows":[],"type":"DPS_TABLE","value_member":"CD_CODE","display_member":"CD_DESCRIPTION","first_record_display":"Select","column_list":"","order_by":"SORT_ORDER ASC","target_table":"CORE_CODE_DESCRIPTIONS","context":"","filters":[{"filter_name":"Filter1","binding_name":"CD_CATEGORY","id":"DF_1665393719712","binding_value":"NPSS_SHOP_TYPE","source_name":"CD_CATEGORY","source_value":"NPSS_SHOP_TYPE","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter2","binding_name":"TENANT_ID","id":"DF_1665393719712","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"CD_CATEGORY","binding_value":"NPSS_SHOP_TYPE","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"NPSS_SHOP_TYPE"},{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"}]},"query":"(CD_CATEGORY = NPSS_SHOP_TYPE AND TENANT_ID = SESSION_LEVEL.TENANT_ID)"},"sel_columns":[]}
		this.ctrl.shop_type.image_association = ""
		this.ctrl.shop_type.show = true
		this.ctrl.shop_type.sub_content = ""
		this.ctrl.shop_type.required = false
		this.ctrl.shop_type.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Select the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.shop_type.targetcolumn_lower = "shop_type"
		this.ctrl.shop_type.disabled = false
		this.ctrl.shop_type.view_name = "f_npss_merc_proxy_shop_ui"
		this.ctrl.shop_type.ctrl_id = "npss_merc_proxy_shop_ui_shop_type"
		this.ctrl.npss_merc_proxy_shop_ui_shop_type = {}
		this.ctrl.npss_merc_proxy_shop_ui_shop_type.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_merc_proxy_shop_ui.shop_type = {}
	
		//Properties of shop_name
		this.ctrl.shop_name = {}
		this.ctrl.shop_name.id = "RN01CN2"
		this.ctrl.shop_name.desc = "Shop Name"
		this.ctrl.shop_name.visible = true
		this.ctrl.shop_name.label_name = "Shop Name"
		this.ctrl.shop_name.df_code = "DF_1304_1665385948654"
		this.ctrl.shop_name.df_description = "Column Group 1"
		this.ctrl.shop_name.uictrl_code = "TXT"
		this.ctrl.shop_name.target_column = "SHOP_NAME"
		this.ctrl.shop_name.data_type = "TEXT"
		this.ctrl.shop_name.data_length = 64
		this.ctrl.shop_name.zone_df_code = "DF_1304_1665385948654"
		this.ctrl.shop_name.default_value = ""
		this.ctrl.shop_name.is_memory_ctrl = ""
		this.ctrl.shop_name.field_coordinates = ""
		this.ctrl.shop_name.sub_details = ""
		this.ctrl.shop_name.accept_char = ""
		this.ctrl.shop_name.currency_format = ""
		this.ctrl.shop_name.data_scale = ""
		this.ctrl.shop_name.hide_label = false
		this.ctrl.shop_name.depends_on = ""
		this.ctrl.shop_name.placeholder = ""
		this.ctrl.shop_name.dynamic_param = ""
		this.ctrl.shop_name.style_code = ""
		this.ctrl.shop_name.data_source = ""
		this.ctrl.shop_name.image_association = ""
		this.ctrl.shop_name.show = true
		this.ctrl.shop_name.sub_content = ""
		this.ctrl.shop_name.required = false
		this.ctrl.shop_name.vld_rules = []
		this.ctrl.shop_name.targetcolumn_lower = "shop_name"
		this.ctrl.shop_name.disabled = false
		this.ctrl.shop_name.view_name = "f_npss_merc_proxy_shop_ui"
		this.ctrl.shop_name.ctrl_id = "npss_merc_proxy_shop_ui_shop_name"
		this.ctrl.npss_merc_proxy_shop_ui_shop_name = {}
		this.ctrl.npss_merc_proxy_shop_ui_shop_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of door_no
		this.ctrl.door_no = {}
		this.ctrl.door_no.id = "RN01CN3"
		this.ctrl.door_no.desc = "Door No"
		this.ctrl.door_no.visible = true
		this.ctrl.door_no.label_name = "Door No"
		this.ctrl.door_no.df_code = "DF_1304_1665385948654"
		this.ctrl.door_no.df_description = "Column Group 1"
		this.ctrl.door_no.uictrl_code = "TXT"
		this.ctrl.door_no.target_column = "DOOR_NO"
		this.ctrl.door_no.data_type = "NUMBER"
		this.ctrl.door_no.data_length = 9
		this.ctrl.door_no.zone_df_code = "DF_1304_1665385948654"
		this.ctrl.door_no.default_value = ""
		this.ctrl.door_no.is_memory_ctrl = ""
		this.ctrl.door_no.field_coordinates = ""
		this.ctrl.door_no.sub_details = ""
		this.ctrl.door_no.accept_char = ""
		this.ctrl.door_no.currency_format = ""
		this.ctrl.door_no.data_scale = ""
		this.ctrl.door_no.hide_label = false
		this.ctrl.door_no.depends_on = ""
		this.ctrl.door_no.placeholder = ""
		this.ctrl.door_no.dynamic_param = ""
		this.ctrl.door_no.style_code = ""
		this.ctrl.door_no.data_source = ""
		this.ctrl.door_no.image_association = ""
		this.ctrl.door_no.show = true
		this.ctrl.door_no.sub_content = ""
		this.ctrl.door_no.required = false
		this.ctrl.door_no.vld_rules = []
		this.ctrl.door_no.targetcolumn_lower = "door_no"
		this.ctrl.door_no.disabled = false
		this.ctrl.door_no.view_name = "f_npss_merc_proxy_shop_ui"
		this.ctrl.door_no.ctrl_id = "npss_merc_proxy_shop_ui_door_no"
		this.ctrl.npss_merc_proxy_shop_ui_door_no = {}
		this.ctrl.npss_merc_proxy_shop_ui_door_no.onChangecomponent = new EventEmitter<any>()
	
		//Properties of street
		this.ctrl.street = {}
		this.ctrl.street.id = "RN11CN4"
		this.ctrl.street.desc = "Street"
		this.ctrl.street.visible = true
		this.ctrl.street.label_name = "Street"
		this.ctrl.street.df_code = "DF_1304_1665385948654"
		this.ctrl.street.df_description = "Column Group 1"
		this.ctrl.street.uictrl_code = "TXT"
		this.ctrl.street.target_column = "STREET"
		this.ctrl.street.data_type = "TEXT"
		this.ctrl.street.data_length = 64
		this.ctrl.street.zone_df_code = "DF_1304_1665385948654"
		this.ctrl.street.default_value = ""
		this.ctrl.street.is_memory_ctrl = ""
		this.ctrl.street.field_coordinates = ""
		this.ctrl.street.sub_details = ""
		this.ctrl.street.accept_char = ""
		this.ctrl.street.currency_format = ""
		this.ctrl.street.data_scale = ""
		this.ctrl.street.hide_label = false
		this.ctrl.street.depends_on = ""
		this.ctrl.street.placeholder = ""
		this.ctrl.street.dynamic_param = ""
		this.ctrl.street.style_code = ""
		this.ctrl.street.data_source = ""
		this.ctrl.street.image_association = ""
		this.ctrl.street.show = true
		this.ctrl.street.sub_content = ""
		this.ctrl.street.required = false
		this.ctrl.street.vld_rules = []
		this.ctrl.street.targetcolumn_lower = "street"
		this.ctrl.street.disabled = false
		this.ctrl.street.view_name = "f_npss_merc_proxy_shop_ui"
		this.ctrl.street.ctrl_id = "npss_merc_proxy_shop_ui_street"
		this.ctrl.npss_merc_proxy_shop_ui_street = {}
		this.ctrl.npss_merc_proxy_shop_ui_street.onChangecomponent = new EventEmitter<any>()
	
		//Properties of postal_code
		this.ctrl.postal_code = {}
		this.ctrl.postal_code.id = "RN11CN5"
		this.ctrl.postal_code.desc = "Postal Code"
		this.ctrl.postal_code.visible = true
		this.ctrl.postal_code.label_name = "Postal Code"
		this.ctrl.postal_code.df_code = "DF_1304_1665385948654"
		this.ctrl.postal_code.df_description = "Column Group 1"
		this.ctrl.postal_code.uictrl_code = "TXT"
		this.ctrl.postal_code.target_column = "POSTAL_CODE"
		this.ctrl.postal_code.data_type = "TEXT"
		this.ctrl.postal_code.data_length = 16
		this.ctrl.postal_code.zone_df_code = "DF_1304_1665385948654"
		this.ctrl.postal_code.default_value = ""
		this.ctrl.postal_code.is_memory_ctrl = ""
		this.ctrl.postal_code.field_coordinates = ""
		this.ctrl.postal_code.sub_details = ""
		this.ctrl.postal_code.accept_char = ""
		this.ctrl.postal_code.currency_format = ""
		this.ctrl.postal_code.data_scale = ""
		this.ctrl.postal_code.hide_label = false
		this.ctrl.postal_code.depends_on = ""
		this.ctrl.postal_code.placeholder = ""
		this.ctrl.postal_code.dynamic_param = ""
		this.ctrl.postal_code.style_code = ""
		this.ctrl.postal_code.data_source = ""
		this.ctrl.postal_code.image_association = ""
		this.ctrl.postal_code.show = true
		this.ctrl.postal_code.sub_content = ""
		this.ctrl.postal_code.required = false
		this.ctrl.postal_code.vld_rules = []
		this.ctrl.postal_code.targetcolumn_lower = "postal_code"
		this.ctrl.postal_code.disabled = false
		this.ctrl.postal_code.view_name = "f_npss_merc_proxy_shop_ui"
		this.ctrl.postal_code.ctrl_id = "npss_merc_proxy_shop_ui_postal_code"
		this.ctrl.npss_merc_proxy_shop_ui_postal_code = {}
		this.ctrl.npss_merc_proxy_shop_ui_postal_code.onChangecomponent = new EventEmitter<any>()
	
		//Properties of city
		this.ctrl.city = {}
		this.ctrl.city.id = "RN11CN6"
		this.ctrl.city.desc = "City"
		this.ctrl.city.visible = true
		this.ctrl.city.label_name = "City"
		this.ctrl.city.df_code = "DF_1304_1665385948654"
		this.ctrl.city.df_description = "Column Group 1"
		this.ctrl.city.uictrl_code = "TXT"
		this.ctrl.city.target_column = "CITY"
		this.ctrl.city.data_type = "TEXT"
		this.ctrl.city.data_length = 64
		this.ctrl.city.zone_df_code = "DF_1304_1665385948654"
		this.ctrl.city.default_value = ""
		this.ctrl.city.is_memory_ctrl = ""
		this.ctrl.city.field_coordinates = ""
		this.ctrl.city.sub_details = ""
		this.ctrl.city.accept_char = ""
		this.ctrl.city.currency_format = ""
		this.ctrl.city.data_scale = ""
		this.ctrl.city.hide_label = false
		this.ctrl.city.depends_on = ""
		this.ctrl.city.placeholder = ""
		this.ctrl.city.dynamic_param = ""
		this.ctrl.city.style_code = ""
		this.ctrl.city.data_source = ""
		this.ctrl.city.image_association = ""
		this.ctrl.city.show = true
		this.ctrl.city.sub_content = ""
		this.ctrl.city.required = false
		this.ctrl.city.vld_rules = []
		this.ctrl.city.targetcolumn_lower = "city"
		this.ctrl.city.disabled = false
		this.ctrl.city.view_name = "f_npss_merc_proxy_shop_ui"
		this.ctrl.city.ctrl_id = "npss_merc_proxy_shop_ui_city"
		this.ctrl.npss_merc_proxy_shop_ui_city = {}
		this.ctrl.npss_merc_proxy_shop_ui_city.onChangecomponent = new EventEmitter<any>()
	
		//Properties of country
		this.ctrl.country = {}
		this.ctrl.country.id = "RN21CN7"
		this.ctrl.country.desc = "Country"
		this.ctrl.country.visible = false
		this.ctrl.country.label_name = "Country"
		this.ctrl.country.df_code = "DF_1304_1665385948654"
		this.ctrl.country.df_description = "Column Group 1"
		this.ctrl.country.uictrl_code = "CBO"
		this.ctrl.country.target_column = "COUNTRY"
		this.ctrl.country.data_type = "TEXT"
		this.ctrl.country.data_length = 64
		this.ctrl.country.zone_df_code = "DF_1304_1665385948654"
		this.ctrl.country.default_value = ""
		this.ctrl.country.is_memory_ctrl = ""
		this.ctrl.country.field_coordinates = ""
		this.ctrl.country.sub_details = ""
		this.ctrl.country.accept_char = ""
		this.ctrl.country.currency_format = ""
		this.ctrl.country.data_scale = ""
		this.ctrl.country.hide_label = false
		this.ctrl.country.depends_on = ""
		this.ctrl.country.placeholder = ""
		this.ctrl.country.dynamic_param = ""
		this.ctrl.country.style_code = ""
		this.ctrl.country.data_source = {"ds_code":"UDS_1304_1665393723883","ds_description":"NPSS Country Sql","rows":[],"type":"DPS_TABLE","value_member":"COUNTRY_CODE","display_member":"COUNTRY_NAME","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_COUNTRIES","context":"","filters":[],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[]},"query":"()"},"sel_columns":[]}
		this.ctrl.country.image_association = ""
		this.ctrl.country.show = true
		this.ctrl.country.sub_content = ""
		this.ctrl.country.required = false
		this.ctrl.country.vld_rules = []
		this.ctrl.country.targetcolumn_lower = "country"
		this.ctrl.country.disabled = false
		this.ctrl.country.view_name = "f_npss_merc_proxy_shop_ui"
		this.ctrl.country.ctrl_id = "npss_merc_proxy_shop_ui_country"
		this.ctrl.npss_merc_proxy_shop_ui_country = {}
		this.ctrl.npss_merc_proxy_shop_ui_country.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_merc_proxy_shop_ui.country = {}
		this.screen_instance[this.comp_id].f_npss_merc_proxy_shop_ui.model = {"SHOP_TYPE":"","SHOP_NAME":"","DOOR_NO":"","STREET":"","POSTAL_CODE":"","CITY":"","COUNTRY":""}
		this.screen_instance[this.comp_id].f_npss_merc_proxy_shop_ui.Meta = [{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"SHOP_TYPE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"SHOP_NAME"},{"CTLR_CODE":"TXT","DATA_TYPE":"NUMBER","TARGET_COLUMN":"DOOR_NO"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"STREET"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"POSTAL_CODE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CITY"},{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"COUNTRY"}]
		this.screen_instance[this.comp_id].f_npss_merc_proxy_shop_ui.dt_code = "dt_1304_1665384579126"
		this.screen_instance[this.comp_id].f_npss_merc_proxy_shop_ui.dtt_code = "dtt_1304_1665385894443"
		this.screen_instance[this.comp_id].f_npss_merc_proxy_shop_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_merc_proxy_shop_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_merc_proxy_shop_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_merc_proxy_shop_ui[control][property] = value;
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
    