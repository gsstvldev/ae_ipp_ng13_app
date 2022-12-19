/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27446 
Modified By     : Admin 
Modified Date   : 2022-Dec-19 9:55 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_setup
Form Name       : NPSS Shop UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_shop_ui',
  templateUrl: './f_npss_shop_ui.component.html',
  styleUrls: ['./f_npss_shop_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_shop_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_shop_ui') form;
  @ViewChild('npss_shop_ui_shop_name') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1666846074129"
	dtt_code : string = "dtt_1304_1666847660575"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of shop_name
		this.ctrl.shop_name = {}
		this.ctrl.shop_name.id = "RN01CN1"
		this.ctrl.shop_name.desc = "Shop Name"
		this.ctrl.shop_name.visible = true
		this.ctrl.shop_name.label_name = "Shop Name"
		this.ctrl.shop_name.df_code = "DF_1304_1666847814853"
		this.ctrl.shop_name.df_description = "Column Group 1"
		this.ctrl.shop_name.uictrl_code = "TXT"
		this.ctrl.shop_name.target_column = "SHOP_NAME"
		this.ctrl.shop_name.data_type = "TEXT"
		this.ctrl.shop_name.data_length = 100
		this.ctrl.shop_name.zone_df_code = "DF_1304_1666847814853"
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
		this.ctrl.shop_name.sub_content = "*"
		this.ctrl.shop_name.required = true
		this.ctrl.shop_name.vld_rules = []
		this.ctrl.shop_name.targetcolumn_lower = "shop_name"
		this.ctrl.shop_name.disabled = false
		this.ctrl.shop_name.view_name = "f_npss_shop_ui"
		this.ctrl.shop_name.ctrl_id = "npss_shop_ui_shop_name"
		this.ctrl.npss_shop_ui_shop_name = {}
		this.ctrl.npss_shop_ui_shop_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of shop_mid
		this.ctrl.shop_mid = {}
		this.ctrl.shop_mid.id = "RN01CN2"
		this.ctrl.shop_mid.desc = "Shop Mid"
		this.ctrl.shop_mid.visible = true
		this.ctrl.shop_mid.label_name = "Shop Mid"
		this.ctrl.shop_mid.df_code = "DF_1304_1666847814853"
		this.ctrl.shop_mid.df_description = "Column Group 1"
		this.ctrl.shop_mid.uictrl_code = "TXT"
		this.ctrl.shop_mid.target_column = "SHOP_MID"
		this.ctrl.shop_mid.data_type = "TEXT"
		this.ctrl.shop_mid.data_length = 8
		this.ctrl.shop_mid.zone_df_code = "DF_1304_1666847814853"
		this.ctrl.shop_mid.default_value = ""
		this.ctrl.shop_mid.is_memory_ctrl = ""
		this.ctrl.shop_mid.field_coordinates = ""
		this.ctrl.shop_mid.sub_details = ""
		this.ctrl.shop_mid.accept_char = ""
		this.ctrl.shop_mid.currency_format = ""
		this.ctrl.shop_mid.data_scale = ""
		this.ctrl.shop_mid.hide_label = false
		this.ctrl.shop_mid.depends_on = ""
		this.ctrl.shop_mid.placeholder = ""
		this.ctrl.shop_mid.dynamic_param = ""
		this.ctrl.shop_mid.style_code = ""
		this.ctrl.shop_mid.data_source = ""
		this.ctrl.shop_mid.image_association = ""
		this.ctrl.shop_mid.show = true
		this.ctrl.shop_mid.sub_content = ""
		this.ctrl.shop_mid.required = false
		this.ctrl.shop_mid.vld_rules = []
		this.ctrl.shop_mid.targetcolumn_lower = "shop_mid"
		this.ctrl.shop_mid.disabled = false
		this.ctrl.shop_mid.view_name = "f_npss_shop_ui"
		this.ctrl.shop_mid.ctrl_id = "npss_shop_ui_shop_mid"
		this.ctrl.npss_shop_ui_shop_mid = {}
		this.ctrl.npss_shop_ui_shop_mid.onChangecomponent = new EventEmitter<any>()
	
		//Properties of shop_type
		this.ctrl.shop_type = {}
		this.ctrl.shop_type.id = "RN01CN3"
		this.ctrl.shop_type.desc = "Shop Type"
		this.ctrl.shop_type.visible = true
		this.ctrl.shop_type.label_name = "Shop Type"
		this.ctrl.shop_type.df_code = "DF_1304_1666847814853"
		this.ctrl.shop_type.df_description = "Column Group 1"
		this.ctrl.shop_type.uictrl_code = "TXT"
		this.ctrl.shop_type.target_column = "SHOP_TYPE"
		this.ctrl.shop_type.data_type = "TEXT"
		this.ctrl.shop_type.data_length = 30
		this.ctrl.shop_type.zone_df_code = "DF_1304_1666847814853"
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
		this.ctrl.shop_type.data_source = ""
		this.ctrl.shop_type.image_association = ""
		this.ctrl.shop_type.show = true
		this.ctrl.shop_type.sub_content = "*"
		this.ctrl.shop_type.required = true
		this.ctrl.shop_type.vld_rules = []
		this.ctrl.shop_type.targetcolumn_lower = "shop_type"
		this.ctrl.shop_type.disabled = false
		this.ctrl.shop_type.view_name = "f_npss_shop_ui"
		this.ctrl.shop_type.ctrl_id = "npss_shop_ui_shop_type"
		this.ctrl.npss_shop_ui_shop_type = {}
		this.ctrl.npss_shop_ui_shop_type.onChangecomponent = new EventEmitter<any>()
	
		//Properties of shop_mcc
		this.ctrl.shop_mcc = {}
		this.ctrl.shop_mcc.id = "RN01CN4"
		this.ctrl.shop_mcc.desc = "Shop MCC"
		this.ctrl.shop_mcc.visible = true
		this.ctrl.shop_mcc.label_name = "Shop MCC"
		this.ctrl.shop_mcc.df_code = "DF_1304_1666847814853"
		this.ctrl.shop_mcc.df_description = "Column Group 1"
		this.ctrl.shop_mcc.uictrl_code = "TXT"
		this.ctrl.shop_mcc.target_column = "SHOP_MCC"
		this.ctrl.shop_mcc.data_type = "TEXT"
		this.ctrl.shop_mcc.data_length = 4
		this.ctrl.shop_mcc.zone_df_code = "DF_1304_1666847814853"
		this.ctrl.shop_mcc.default_value = ""
		this.ctrl.shop_mcc.is_memory_ctrl = ""
		this.ctrl.shop_mcc.field_coordinates = ""
		this.ctrl.shop_mcc.sub_details = ""
		this.ctrl.shop_mcc.accept_char = ""
		this.ctrl.shop_mcc.currency_format = ""
		this.ctrl.shop_mcc.data_scale = ""
		this.ctrl.shop_mcc.hide_label = false
		this.ctrl.shop_mcc.depends_on = ""
		this.ctrl.shop_mcc.placeholder = ""
		this.ctrl.shop_mcc.dynamic_param = ""
		this.ctrl.shop_mcc.style_code = ""
		this.ctrl.shop_mcc.data_source = ""
		this.ctrl.shop_mcc.image_association = ""
		this.ctrl.shop_mcc.show = true
		this.ctrl.shop_mcc.sub_content = ""
		this.ctrl.shop_mcc.required = false
		this.ctrl.shop_mcc.vld_rules = []
		this.ctrl.shop_mcc.targetcolumn_lower = "shop_mcc"
		this.ctrl.shop_mcc.disabled = false
		this.ctrl.shop_mcc.view_name = "f_npss_shop_ui"
		this.ctrl.shop_mcc.ctrl_id = "npss_shop_ui_shop_mcc"
		this.ctrl.npss_shop_ui_shop_mcc = {}
		this.ctrl.npss_shop_ui_shop_mcc.onChangecomponent = new EventEmitter<any>()
	
		//Properties of shop_iban
		this.ctrl.shop_iban = {}
		this.ctrl.shop_iban.id = "RN01CN5"
		this.ctrl.shop_iban.desc = "Shop IBAN"
		this.ctrl.shop_iban.visible = true
		this.ctrl.shop_iban.label_name = "Shop IBAN"
		this.ctrl.shop_iban.df_code = "DF_1304_1666847814853"
		this.ctrl.shop_iban.df_description = "Column Group 1"
		this.ctrl.shop_iban.uictrl_code = "TXT"
		this.ctrl.shop_iban.target_column = "SHOP_IBAN"
		this.ctrl.shop_iban.data_type = "TEXT"
		this.ctrl.shop_iban.data_length = 35
		this.ctrl.shop_iban.zone_df_code = "DF_1304_1666847814853"
		this.ctrl.shop_iban.default_value = ""
		this.ctrl.shop_iban.is_memory_ctrl = ""
		this.ctrl.shop_iban.field_coordinates = ""
		this.ctrl.shop_iban.sub_details = ""
		this.ctrl.shop_iban.accept_char = ""
		this.ctrl.shop_iban.currency_format = ""
		this.ctrl.shop_iban.data_scale = ""
		this.ctrl.shop_iban.hide_label = false
		this.ctrl.shop_iban.depends_on = ""
		this.ctrl.shop_iban.placeholder = ""
		this.ctrl.shop_iban.dynamic_param = ""
		this.ctrl.shop_iban.style_code = ""
		this.ctrl.shop_iban.data_source = ""
		this.ctrl.shop_iban.image_association = ""
		this.ctrl.shop_iban.show = true
		this.ctrl.shop_iban.sub_content = ""
		this.ctrl.shop_iban.required = false
		this.ctrl.shop_iban.vld_rules = []
		this.ctrl.shop_iban.targetcolumn_lower = "shop_iban"
		this.ctrl.shop_iban.disabled = false
		this.ctrl.shop_iban.view_name = "f_npss_shop_ui"
		this.ctrl.shop_iban.ctrl_id = "npss_shop_ui_shop_iban"
		this.ctrl.npss_shop_ui_shop_iban = {}
		this.ctrl.npss_shop_ui_shop_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of building
		this.ctrl.building = {}
		this.ctrl.building.id = "RN01CN6"
		this.ctrl.building.desc = "Building"
		this.ctrl.building.visible = true
		this.ctrl.building.label_name = "Building"
		this.ctrl.building.df_code = "DF_1304_1666847814853"
		this.ctrl.building.df_description = "Column Group 1"
		this.ctrl.building.uictrl_code = "TXT"
		this.ctrl.building.target_column = "BUILDING"
		this.ctrl.building.data_type = "TEXT"
		this.ctrl.building.data_length = 50
		this.ctrl.building.zone_df_code = "DF_1304_1666847814853"
		this.ctrl.building.default_value = ""
		this.ctrl.building.is_memory_ctrl = ""
		this.ctrl.building.field_coordinates = ""
		this.ctrl.building.sub_details = ""
		this.ctrl.building.accept_char = ""
		this.ctrl.building.currency_format = ""
		this.ctrl.building.data_scale = ""
		this.ctrl.building.hide_label = false
		this.ctrl.building.depends_on = ""
		this.ctrl.building.placeholder = ""
		this.ctrl.building.dynamic_param = ""
		this.ctrl.building.style_code = ""
		this.ctrl.building.data_source = ""
		this.ctrl.building.image_association = ""
		this.ctrl.building.show = true
		this.ctrl.building.sub_content = ""
		this.ctrl.building.required = false
		this.ctrl.building.vld_rules = []
		this.ctrl.building.targetcolumn_lower = "building"
		this.ctrl.building.disabled = false
		this.ctrl.building.view_name = "f_npss_shop_ui"
		this.ctrl.building.ctrl_id = "npss_shop_ui_building"
		this.ctrl.npss_shop_ui_building = {}
		this.ctrl.npss_shop_ui_building.onChangecomponent = new EventEmitter<any>()
	
		//Properties of street
		this.ctrl.street = {}
		this.ctrl.street.id = "RN11CN7"
		this.ctrl.street.desc = "Street"
		this.ctrl.street.visible = true
		this.ctrl.street.label_name = "Street"
		this.ctrl.street.df_code = "DF_1304_1666847814853"
		this.ctrl.street.df_description = "Column Group 1"
		this.ctrl.street.uictrl_code = "TXT"
		this.ctrl.street.target_column = "STREET"
		this.ctrl.street.data_type = "TEXT"
		this.ctrl.street.data_length = 50
		this.ctrl.street.zone_df_code = "DF_1304_1666847814853"
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
		this.ctrl.street.view_name = "f_npss_shop_ui"
		this.ctrl.street.ctrl_id = "npss_shop_ui_street"
		this.ctrl.npss_shop_ui_street = {}
		this.ctrl.npss_shop_ui_street.onChangecomponent = new EventEmitter<any>()
	
		//Properties of city
		this.ctrl.city = {}
		this.ctrl.city.id = "RN11CN8"
		this.ctrl.city.desc = "City"
		this.ctrl.city.visible = true
		this.ctrl.city.label_name = "City"
		this.ctrl.city.df_code = "DF_1304_1666847814853"
		this.ctrl.city.df_description = "Column Group 1"
		this.ctrl.city.uictrl_code = "TXT"
		this.ctrl.city.target_column = "CITY"
		this.ctrl.city.data_type = "TEXT"
		this.ctrl.city.data_length = 50
		this.ctrl.city.zone_df_code = "DF_1304_1666847814853"
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
		this.ctrl.city.view_name = "f_npss_shop_ui"
		this.ctrl.city.ctrl_id = "npss_shop_ui_city"
		this.ctrl.npss_shop_ui_city = {}
		this.ctrl.npss_shop_ui_city.onChangecomponent = new EventEmitter<any>()
	
		//Properties of postal_code
		this.ctrl.postal_code = {}
		this.ctrl.postal_code.id = "RN11CN9"
		this.ctrl.postal_code.desc = "Postal Code"
		this.ctrl.postal_code.visible = true
		this.ctrl.postal_code.label_name = "Postal Code"
		this.ctrl.postal_code.df_code = "DF_1304_1666847814853"
		this.ctrl.postal_code.df_description = "Column Group 1"
		this.ctrl.postal_code.uictrl_code = "TXT"
		this.ctrl.postal_code.target_column = "POSTAL_CODE"
		this.ctrl.postal_code.data_type = "TEXT"
		this.ctrl.postal_code.data_length = 10
		this.ctrl.postal_code.zone_df_code = "DF_1304_1666847814853"
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
		this.ctrl.postal_code.view_name = "f_npss_shop_ui"
		this.ctrl.postal_code.ctrl_id = "npss_shop_ui_postal_code"
		this.ctrl.npss_shop_ui_postal_code = {}
		this.ctrl.npss_shop_ui_postal_code.onChangecomponent = new EventEmitter<any>()
	
		//Properties of county
		this.ctrl.county = {}
		this.ctrl.county.id = "RN11CN10"
		this.ctrl.county.desc = "County"
		this.ctrl.county.visible = true
		this.ctrl.county.label_name = "County"
		this.ctrl.county.df_code = "DF_1304_1666847814853"
		this.ctrl.county.df_description = "Column Group 1"
		this.ctrl.county.uictrl_code = "TXT"
		this.ctrl.county.target_column = "COUNTY"
		this.ctrl.county.data_type = "TEXT"
		this.ctrl.county.data_length = 50
		this.ctrl.county.zone_df_code = "DF_1304_1666847814853"
		this.ctrl.county.default_value = ""
		this.ctrl.county.is_memory_ctrl = ""
		this.ctrl.county.field_coordinates = ""
		this.ctrl.county.sub_details = ""
		this.ctrl.county.accept_char = ""
		this.ctrl.county.currency_format = ""
		this.ctrl.county.data_scale = ""
		this.ctrl.county.hide_label = false
		this.ctrl.county.depends_on = ""
		this.ctrl.county.placeholder = ""
		this.ctrl.county.dynamic_param = ""
		this.ctrl.county.style_code = ""
		this.ctrl.county.data_source = ""
		this.ctrl.county.image_association = ""
		this.ctrl.county.show = true
		this.ctrl.county.sub_content = ""
		this.ctrl.county.required = false
		this.ctrl.county.vld_rules = []
		this.ctrl.county.targetcolumn_lower = "county"
		this.ctrl.county.disabled = false
		this.ctrl.county.view_name = "f_npss_shop_ui"
		this.ctrl.county.ctrl_id = "npss_shop_ui_county"
		this.ctrl.npss_shop_ui_county = {}
		this.ctrl.npss_shop_ui_county.onChangecomponent = new EventEmitter<any>()
	
		//Properties of country
		this.ctrl.country = {}
		this.ctrl.country.id = "RN11CN11"
		this.ctrl.country.desc = "Country"
		this.ctrl.country.visible = true
		this.ctrl.country.label_name = "Country"
		this.ctrl.country.df_code = "DF_1304_1666847814853"
		this.ctrl.country.df_description = "Column Group 1"
		this.ctrl.country.uictrl_code = "TXT"
		this.ctrl.country.target_column = "COUNTRY"
		this.ctrl.country.data_type = "TEXT"
		this.ctrl.country.data_length = 50
		this.ctrl.country.zone_df_code = "DF_1304_1666847814853"
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
		this.ctrl.country.data_source = ""
		this.ctrl.country.image_association = ""
		this.ctrl.country.show = true
		this.ctrl.country.sub_content = ""
		this.ctrl.country.required = false
		this.ctrl.country.vld_rules = []
		this.ctrl.country.targetcolumn_lower = "country"
		this.ctrl.country.disabled = false
		this.ctrl.country.view_name = "f_npss_shop_ui"
		this.ctrl.country.ctrl_id = "npss_shop_ui_country"
		this.ctrl.npss_shop_ui_country = {}
		this.ctrl.npss_shop_ui_country.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_shop_ui.model = {"SHOP_NAME":"","SHOP_MID":"","SHOP_TYPE":"","SHOP_MCC":"","SHOP_IBAN":"","BUILDING":"","STREET":"","CITY":"","POSTAL_CODE":"","COUNTY":"","COUNTRY":""}
		this.screen_instance[this.comp_id].f_npss_shop_ui.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"SHOP_NAME"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"SHOP_MID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"SHOP_TYPE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"SHOP_MCC"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"SHOP_IBAN"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"BUILDING"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"STREET"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CITY"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"POSTAL_CODE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"COUNTY"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"COUNTRY"}]
		this.screen_instance[this.comp_id].f_npss_shop_ui.dt_code = "dt_1304_1666846074129"
		this.screen_instance[this.comp_id].f_npss_shop_ui.dtt_code = "dtt_1304_1666847660575"
		this.screen_instance[this.comp_id].f_npss_shop_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_shop_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_shop_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_shop_ui[control][property] = value;
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
    