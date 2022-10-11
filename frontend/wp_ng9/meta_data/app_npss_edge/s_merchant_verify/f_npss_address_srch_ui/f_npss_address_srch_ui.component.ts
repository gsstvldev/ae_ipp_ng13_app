/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26371 
Modified By     : Admin 
Modified Date   : 2022-Oct-11 6:17 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_verify
Form Name       : NPSS Address Srch UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_address_srch_ui',
  templateUrl: './f_npss_address_srch_ui.component.html',
  styleUrls: ['./f_npss_address_srch_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_address_srch_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_address_srch_ui') form;
  @ViewChild('npss_address_srch_ui_category') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665384579126"
	dtt_code : string = "dtt_1304_1665384653050"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of category
		this.ctrl.category = {}
		this.ctrl.category.id = "RN01CN1"
		this.ctrl.category.desc = "Category"
		this.ctrl.category.visible = true
		this.ctrl.category.label_name = "Category"
		this.ctrl.category.df_code = "DF_1304_1665384730214"
		this.ctrl.category.df_description = "Column Group 1"
		this.ctrl.category.uictrl_code = "CBO"
		this.ctrl.category.target_column = "CATEGORY"
		this.ctrl.category.data_type = "TEXT"
		this.ctrl.category.data_length = 16
		this.ctrl.category.zone_df_code = "DF_1304_1665384730214"
		this.ctrl.category.default_value = ""
		this.ctrl.category.is_memory_ctrl = ""
		this.ctrl.category.field_coordinates = ""
		this.ctrl.category.sub_details = ""
		this.ctrl.category.accept_char = ""
		this.ctrl.category.currency_format = ""
		this.ctrl.category.data_scale = ""
		this.ctrl.category.binding_name = "CATEGORY"
		this.ctrl.category.hide_label = false
		this.ctrl.category.depends_on = ""
		this.ctrl.category.placeholder = ""
		this.ctrl.category.dynamic_param = ""
		this.ctrl.category.style_code = ""
		this.ctrl.category.data_source = {"ds_code":"UDS_1304_1665392732834","ds_description":"NPSS Category CDB","rows":[],"type":"DPS_TABLE","value_member":"CD_CODE","display_member":"CD_DESCRIPTION","first_record_display":"Select","column_list":"","order_by":"SORT_ORDER ASC","target_table":"CORE_CODE_DESCRIPTIONS","context":"","filters":[{"filter_name":"Filter1","binding_name":"CD_CATEGORY","id":"DF_1665392833793","binding_value":"NPSS_CATEGORY","source_name":"CD_CATEGORY","source_value":"NPSS_CATEGORY","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter2","binding_name":"TENANT_ID","id":"DF_1665392833793","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"CD_CATEGORY","binding_value":"NPSS_CATEGORY","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"NPSS_CATEGORY"},{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"}]},"query":"(CD_CATEGORY = NPSS_CATEGORY AND TENANT_ID = SESSION_LEVEL.TENANT_ID)"},"sel_columns":[]}
		this.ctrl.category.image_association = ""
		this.ctrl.category.show = true
		this.ctrl.category.sub_content = ""
		this.ctrl.category.required = false
		this.ctrl.category.vld_rules = []
		this.ctrl.category.targetcolumn_lower = "category"
		this.ctrl.category.disabled = false
		this.ctrl.category.view_name = "f_npss_address_srch_ui"
		this.ctrl.category.ctrl_id = "npss_address_srch_ui_category"
		this.ctrl.npss_address_srch_ui_category = {}
		this.ctrl.npss_address_srch_ui_category.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_address_srch_ui.category = {}
	
		//Properties of merchant_tag
		this.ctrl.merchant_tag = {}
		this.ctrl.merchant_tag.id = "RN01CN2"
		this.ctrl.merchant_tag.desc = "Merchant Tag"
		this.ctrl.merchant_tag.visible = true
		this.ctrl.merchant_tag.label_name = "Merchant Tag"
		this.ctrl.merchant_tag.df_code = "DF_1304_1665384730214"
		this.ctrl.merchant_tag.df_description = "Column Group 1"
		this.ctrl.merchant_tag.uictrl_code = "CDN_CTRL"
		this.ctrl.merchant_tag.target_column = "MERCHANT_TAG"
		this.ctrl.merchant_tag.data_type = "TEXT"
		this.ctrl.merchant_tag.data_length = 16
		this.ctrl.merchant_tag.zone_df_code = "DF_1304_1665384730214"
		this.ctrl.merchant_tag.default_value = ""
		this.ctrl.merchant_tag.is_memory_ctrl = ""
		this.ctrl.merchant_tag.field_coordinates = ""
		this.ctrl.merchant_tag.sub_details = ""
		this.ctrl.merchant_tag.accept_char = ""
		this.ctrl.merchant_tag.currency_format = ""
		this.ctrl.merchant_tag.data_scale = ""
		this.ctrl.merchant_tag.binding_name = "MERCHANT_TAG"
		this.ctrl.merchant_tag.hide_label = false
		this.ctrl.merchant_tag.depends_on = ""
		this.ctrl.merchant_tag.placeholder = ""
		this.ctrl.merchant_tag.dynamic_param = ""
		this.ctrl.merchant_tag.style_code = ""
		this.ctrl.merchant_tag.data_source = ""
		this.ctrl.merchant_tag.image_association = ""
		this.ctrl.merchant_tag.show = true
		this.ctrl.merchant_tag.sub_content = ""
		this.ctrl.merchant_tag.required = false
		this.ctrl.merchant_tag.vld_rules = []
		this.ctrl.merchant_tag.targetcolumn_lower = "merchant_tag"
		this.ctrl.merchant_tag.disabled = false
		this.ctrl.merchant_tag.view_name = "f_npss_address_srch_ui"
		this.ctrl.merchant_tag.ctrl_id = "npss_address_srch_ui_merchant_tag"
		this.ctrl.npss_address_srch_ui_merchant_tag = {}
		this.ctrl.npss_address_srch_ui_merchant_tag.onChangecomponent = new EventEmitter<any>()
	
		//Properties of iban
		this.ctrl.iban = {}
		this.ctrl.iban.id = "RN01CN3"
		this.ctrl.iban.desc = "IBAN"
		this.ctrl.iban.visible = true
		this.ctrl.iban.label_name = "IBAN"
		this.ctrl.iban.df_code = "DF_1304_1665384730214"
		this.ctrl.iban.df_description = "Column Group 1"
		this.ctrl.iban.uictrl_code = "CDN_CTRL"
		this.ctrl.iban.target_column = "IBAN"
		this.ctrl.iban.data_type = "TEXT"
		this.ctrl.iban.data_length = 32
		this.ctrl.iban.zone_df_code = "DF_1304_1665384730214"
		this.ctrl.iban.default_value = ""
		this.ctrl.iban.is_memory_ctrl = ""
		this.ctrl.iban.field_coordinates = ""
		this.ctrl.iban.sub_details = ""
		this.ctrl.iban.accept_char = ""
		this.ctrl.iban.currency_format = ""
		this.ctrl.iban.data_scale = ""
		this.ctrl.iban.binding_name = "IBAN"
		this.ctrl.iban.hide_label = false
		this.ctrl.iban.depends_on = ""
		this.ctrl.iban.placeholder = ""
		this.ctrl.iban.dynamic_param = ""
		this.ctrl.iban.style_code = ""
		this.ctrl.iban.data_source = ""
		this.ctrl.iban.image_association = ""
		this.ctrl.iban.show = true
		this.ctrl.iban.sub_content = ""
		this.ctrl.iban.required = false
		this.ctrl.iban.vld_rules = []
		this.ctrl.iban.targetcolumn_lower = "iban"
		this.ctrl.iban.disabled = false
		this.ctrl.iban.view_name = "f_npss_address_srch_ui"
		this.ctrl.iban.ctrl_id = "npss_address_srch_ui_iban"
		this.ctrl.npss_address_srch_ui_iban = {}
		this.ctrl.npss_address_srch_ui_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of vat_id
		this.ctrl.vat_id = {}
		this.ctrl.vat_id.id = "RN01CN4"
		this.ctrl.vat_id.desc = "Vat ID"
		this.ctrl.vat_id.visible = true
		this.ctrl.vat_id.label_name = "Vat ID"
		this.ctrl.vat_id.df_code = "DF_1304_1665384730214"
		this.ctrl.vat_id.df_description = "Column Group 1"
		this.ctrl.vat_id.uictrl_code = "CDN_CTRL"
		this.ctrl.vat_id.target_column = "VAT_ID"
		this.ctrl.vat_id.data_type = "NUMBER"
		this.ctrl.vat_id.data_length = 9
		this.ctrl.vat_id.zone_df_code = "DF_1304_1665384730214"
		this.ctrl.vat_id.default_value = ""
		this.ctrl.vat_id.is_memory_ctrl = ""
		this.ctrl.vat_id.field_coordinates = ""
		this.ctrl.vat_id.sub_details = ""
		this.ctrl.vat_id.accept_char = ""
		this.ctrl.vat_id.currency_format = ""
		this.ctrl.vat_id.data_scale = ""
		this.ctrl.vat_id.binding_name = "VAT_ID"
		this.ctrl.vat_id.hide_label = false
		this.ctrl.vat_id.depends_on = ""
		this.ctrl.vat_id.placeholder = ""
		this.ctrl.vat_id.dynamic_param = ""
		this.ctrl.vat_id.style_code = ""
		this.ctrl.vat_id.data_source = ""
		this.ctrl.vat_id.image_association = ""
		this.ctrl.vat_id.show = true
		this.ctrl.vat_id.sub_content = ""
		this.ctrl.vat_id.required = false
		this.ctrl.vat_id.vld_rules = []
		this.ctrl.vat_id.targetcolumn_lower = "vat_id"
		this.ctrl.vat_id.disabled = false
		this.ctrl.vat_id.view_name = "f_npss_address_srch_ui"
		this.ctrl.vat_id.ctrl_id = "npss_address_srch_ui_vat_id"
		this.ctrl.npss_address_srch_ui_vat_id = {}
		this.ctrl.npss_address_srch_ui_vat_id.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_address_srch_ui.model = {"CATEGORY":"","MERCHANT_TAG":"","IBAN":"","VAT_ID":""}
		this.screen_instance[this.comp_id].f_npss_address_srch_ui.Meta = [{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"CATEGORY"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"MERCHANT_TAG"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"IBAN"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"NUMBER","TARGET_COLUMN":"VAT_ID"}]
		this.screen_instance[this.comp_id].f_npss_address_srch_ui.dt_code = "dt_1304_1665384579126"
		this.screen_instance[this.comp_id].f_npss_address_srch_ui.dtt_code = "dtt_1304_1665384653050"
		this.screen_instance[this.comp_id].f_npss_address_srch_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_address_srch_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_address_srch_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_address_srch_ui[control][property] = value;
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
    