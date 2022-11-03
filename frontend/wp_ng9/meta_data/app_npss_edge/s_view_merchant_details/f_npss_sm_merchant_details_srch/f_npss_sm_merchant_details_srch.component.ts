/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26794 
Modified By     : Admin 
Modified Date   : 2022-Nov-03 7:25 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_merchant_details
Form Name       : NPSS SM Merchant Details SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_sm_merchant_details_srch',
  templateUrl: './f_npss_sm_merchant_details_srch.component.html',
  styleUrls: ['./f_npss_sm_merchant_details_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_sm_merchant_details_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_sm_merchant_details_srch') form;
  @ViewChild('npss_sm_merchant_details_srch_bankuserid') element: ElementRef;
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

  
		//Properties of bankuserid
		this.ctrl.bankuserid = {}
		this.ctrl.bankuserid.id = "RN01CN1"
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
		this.ctrl.bankuserid.binding_name = "BANKUSERID"
		this.ctrl.bankuserid.depends_on = ""
		this.ctrl.bankuserid.placeholder = ""
		this.ctrl.bankuserid.dynamic_param = ""
		this.ctrl.bankuserid.style_code = ""
		this.ctrl.bankuserid.data_source = ""
		this.ctrl.bankuserid.image_association = ""
		this.ctrl.bankuserid.show = true
		this.ctrl.bankuserid.sub_content = ""
		this.ctrl.bankuserid.required = true
		this.ctrl.bankuserid.vld_rules = []
		this.ctrl.bankuserid.targetcolumn_lower = "bankuserid"
		this.ctrl.bankuserid.disabled = false
		this.ctrl.bankuserid.view_name = "f_npss_sm_merchant_details_srch"
		this.ctrl.bankuserid.ctrl_id = "npss_sm_merchant_details_srch_bankuserid"
		this.ctrl.npss_sm_merchant_details_srch_bankuserid = {}
		this.ctrl.npss_sm_merchant_details_srch_bankuserid.onChangecomponent = new EventEmitter<any>()
	
		//Properties of merchant_name
		this.ctrl.merchant_name = {}
		this.ctrl.merchant_name.id = "RN01CN2"
		this.ctrl.merchant_name.desc = "Merchant Name"
		this.ctrl.merchant_name.visible = true
		this.ctrl.merchant_name.label_name = "Merchant Name"
		this.ctrl.merchant_name.df_code = "DF_1304_1666846276198"
		this.ctrl.merchant_name.df_description = "Column Group 1"
		this.ctrl.merchant_name.uictrl_code = "CDN_CTRL"
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
		this.ctrl.merchant_name.binding_name = "MERCHANT_NAME"
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
		this.ctrl.merchant_name.view_name = "f_npss_sm_merchant_details_srch"
		this.ctrl.merchant_name.ctrl_id = "npss_sm_merchant_details_srch_merchant_name"
		this.ctrl.npss_sm_merchant_details_srch_merchant_name = {}
		this.ctrl.npss_sm_merchant_details_srch_merchant_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of merchant_tag
		this.ctrl.merchant_tag = {}
		this.ctrl.merchant_tag.id = "RN11CN3"
		this.ctrl.merchant_tag.desc = "Merchant Tag"
		this.ctrl.merchant_tag.visible = true
		this.ctrl.merchant_tag.label_name = "Merchant Tag"
		this.ctrl.merchant_tag.df_code = "DF_1304_1666846276198"
		this.ctrl.merchant_tag.df_description = "Column Group 1"
		this.ctrl.merchant_tag.uictrl_code = "TXT"
		this.ctrl.merchant_tag.target_column = "MERCHANT_TAG"
		this.ctrl.merchant_tag.data_type = "TEXT"
		this.ctrl.merchant_tag.data_length = 8
		this.ctrl.merchant_tag.zone_df_code = "DF_1304_1666846276198"
		this.ctrl.merchant_tag.default_value = ""
		this.ctrl.merchant_tag.is_memory_ctrl = ""
		this.ctrl.merchant_tag.field_coordinates = ""
		this.ctrl.merchant_tag.sub_details = ""
		this.ctrl.merchant_tag.accept_char = ""
		this.ctrl.merchant_tag.currency_format = ""
		this.ctrl.merchant_tag.data_scale = ""
		this.ctrl.merchant_tag.binding_name = "MERCHANT_TAG"
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
		this.ctrl.merchant_tag.view_name = "f_npss_sm_merchant_details_srch"
		this.ctrl.merchant_tag.ctrl_id = "npss_sm_merchant_details_srch_merchant_tag"
		this.ctrl.npss_sm_merchant_details_srch_merchant_tag = {}
		this.ctrl.npss_sm_merchant_details_srch_merchant_tag.onChangecomponent = new EventEmitter<any>()
	
		//Properties of mcc
		this.ctrl.mcc = {}
		this.ctrl.mcc.id = "RN11CN4"
		this.ctrl.mcc.desc = "MCC"
		this.ctrl.mcc.visible = true
		this.ctrl.mcc.label_name = "MCC"
		this.ctrl.mcc.df_code = "DF_1304_1666846276198"
		this.ctrl.mcc.df_description = "Column Group 1"
		this.ctrl.mcc.uictrl_code = "TXT"
		this.ctrl.mcc.target_column = "MCC"
		this.ctrl.mcc.data_type = "TEXT"
		this.ctrl.mcc.data_length = 4
		this.ctrl.mcc.zone_df_code = "DF_1304_1666846276198"
		this.ctrl.mcc.default_value = ""
		this.ctrl.mcc.is_memory_ctrl = ""
		this.ctrl.mcc.field_coordinates = ""
		this.ctrl.mcc.sub_details = ""
		this.ctrl.mcc.accept_char = ""
		this.ctrl.mcc.currency_format = ""
		this.ctrl.mcc.data_scale = ""
		this.ctrl.mcc.binding_name = "MCC"
		this.ctrl.mcc.depends_on = ""
		this.ctrl.mcc.placeholder = ""
		this.ctrl.mcc.dynamic_param = ""
		this.ctrl.mcc.style_code = ""
		this.ctrl.mcc.data_source = ""
		this.ctrl.mcc.image_association = ""
		this.ctrl.mcc.show = true
		this.ctrl.mcc.sub_content = ""
		this.ctrl.mcc.required = true
		this.ctrl.mcc.vld_rules = []
		this.ctrl.mcc.targetcolumn_lower = "mcc"
		this.ctrl.mcc.disabled = false
		this.ctrl.mcc.view_name = "f_npss_sm_merchant_details_srch"
		this.ctrl.mcc.ctrl_id = "npss_sm_merchant_details_srch_mcc"
		this.ctrl.npss_sm_merchant_details_srch_mcc = {}
		this.ctrl.npss_sm_merchant_details_srch_mcc.onChangecomponent = new EventEmitter<any>()
	
		//Properties of mobile
		this.ctrl.mobile = {}
		this.ctrl.mobile.id = "RN21CN5"
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
		this.ctrl.mobile.binding_name = "MOBILE"
		this.ctrl.mobile.depends_on = ""
		this.ctrl.mobile.placeholder = ""
		this.ctrl.mobile.dynamic_param = ""
		this.ctrl.mobile.style_code = ""
		this.ctrl.mobile.data_source = ""
		this.ctrl.mobile.image_association = ""
		this.ctrl.mobile.show = true
		this.ctrl.mobile.sub_content = ""
		this.ctrl.mobile.required = true
		this.ctrl.mobile.vld_rules = []
		this.ctrl.mobile.targetcolumn_lower = "mobile"
		this.ctrl.mobile.disabled = false
		this.ctrl.mobile.view_name = "f_npss_sm_merchant_details_srch"
		this.ctrl.mobile.ctrl_id = "npss_sm_merchant_details_srch_mobile"
		this.ctrl.npss_sm_merchant_details_srch_mobile = {}
		this.ctrl.npss_sm_merchant_details_srch_mobile.onChangecomponent = new EventEmitter<any>()
	
		//Properties of denomination
		this.ctrl.denomination = {}
		this.ctrl.denomination.id = "RN21CN6"
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
		this.ctrl.denomination.binding_name = "DENOMINATION"
		this.ctrl.denomination.depends_on = ""
		this.ctrl.denomination.placeholder = ""
		this.ctrl.denomination.dynamic_param = ""
		this.ctrl.denomination.style_code = ""
		this.ctrl.denomination.data_source = ""
		this.ctrl.denomination.image_association = ""
		this.ctrl.denomination.show = true
		this.ctrl.denomination.sub_content = ""
		this.ctrl.denomination.required = true
		this.ctrl.denomination.vld_rules = []
		this.ctrl.denomination.targetcolumn_lower = "denomination"
		this.ctrl.denomination.disabled = false
		this.ctrl.denomination.view_name = "f_npss_sm_merchant_details_srch"
		this.ctrl.denomination.ctrl_id = "npss_sm_merchant_details_srch_denomination"
		this.ctrl.npss_sm_merchant_details_srch_denomination = {}
		this.ctrl.npss_sm_merchant_details_srch_denomination.onChangecomponent = new EventEmitter<any>()
	
		//Properties of vat_number
		this.ctrl.vat_number = {}
		this.ctrl.vat_number.id = "RN31CN7"
		this.ctrl.vat_number.desc = "Vat Number"
		this.ctrl.vat_number.visible = false
		this.ctrl.vat_number.label_name = "Vat Number"
		this.ctrl.vat_number.df_code = "DF_1304_1666846276198"
		this.ctrl.vat_number.df_description = "Column Group 1"
		this.ctrl.vat_number.uictrl_code = "TXT"
		this.ctrl.vat_number.target_column = "VAT_NUMBER"
		this.ctrl.vat_number.data_type = "TEXT"
		this.ctrl.vat_number.data_length = 20
		this.ctrl.vat_number.zone_df_code = "DF_1304_1666846276198"
		this.ctrl.vat_number.default_value = ""
		this.ctrl.vat_number.is_memory_ctrl = ""
		this.ctrl.vat_number.field_coordinates = ""
		this.ctrl.vat_number.sub_details = ""
		this.ctrl.vat_number.accept_char = ""
		this.ctrl.vat_number.currency_format = ""
		this.ctrl.vat_number.data_scale = ""
		this.ctrl.vat_number.binding_name = "VAT_NUMBER"
		this.ctrl.vat_number.depends_on = ""
		this.ctrl.vat_number.placeholder = ""
		this.ctrl.vat_number.dynamic_param = ""
		this.ctrl.vat_number.style_code = ""
		this.ctrl.vat_number.data_source = ""
		this.ctrl.vat_number.image_association = ""
		this.ctrl.vat_number.show = true
		this.ctrl.vat_number.sub_content = ""
		this.ctrl.vat_number.required = true
		this.ctrl.vat_number.vld_rules = []
		this.ctrl.vat_number.targetcolumn_lower = "vat_number"
		this.ctrl.vat_number.disabled = false
		this.ctrl.vat_number.view_name = "f_npss_sm_merchant_details_srch"
		this.ctrl.vat_number.ctrl_id = "npss_sm_merchant_details_srch_vat_number"
		this.ctrl.npss_sm_merchant_details_srch_vat_number = {}
		this.ctrl.npss_sm_merchant_details_srch_vat_number.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_sm_merchant_details_srch.model = {"BANKUSERID":"","MERCHANT_NAME":"","MERCHANT_TAG":"","MCC":"","MOBILE":"","DENOMINATION":"","VAT_NUMBER":""}
		this.screen_instance[this.comp_id].f_npss_sm_merchant_details_srch.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"BANKUSERID"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"MERCHANT_NAME"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"MERCHANT_TAG"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"MCC"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"MOBILE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DENOMINATION"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"VAT_NUMBER"}]
		this.screen_instance[this.comp_id].f_npss_sm_merchant_details_srch.dt_code = "dt_1304_1666846074129"
		this.screen_instance[this.comp_id].f_npss_sm_merchant_details_srch.dtt_code = "dtt_1304_1666846129395"
		this.screen_instance[this.comp_id].f_npss_sm_merchant_details_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_sm_merchant_details_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_sm_merchant_details_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_sm_merchant_details_srch[control][property] = value;
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
    