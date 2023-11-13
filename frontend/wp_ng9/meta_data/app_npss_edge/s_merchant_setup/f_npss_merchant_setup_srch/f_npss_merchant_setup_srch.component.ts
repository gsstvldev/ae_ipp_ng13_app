/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 33186 
Modified By     : Admin 
Modified Date   : 2023-Nov-13 12:57 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_setup
Form Name       : NPSS Merchant Setup SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_merchant_setup_srch',
  templateUrl: './f_npss_merchant_setup_srch.component.html',
  styleUrls: ['./f_npss_merchant_setup_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_merchant_setup_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_merchant_setup_srch') form;
  @ViewChild('npss_merchant_setup_srch_memory26') element: ElementRef;
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

  
		//Properties of memory26
		this.ctrl.memory26 = {}
		this.ctrl.memory26.id = "RN01CN1"
		this.ctrl.memory26.desc = "Created Date"
		this.ctrl.memory26.visible = false
		this.ctrl.memory26.label_name = "Created Date"
		this.ctrl.memory26.df_code = "DF_1304_1666846276198"
		this.ctrl.memory26.df_description = "Column Group 1"
		this.ctrl.memory26.uictrl_code = "CDN_DATE"
		this.ctrl.memory26.target_column = "memory26"
		this.ctrl.memory26.data_type = "DATETIME"
		this.ctrl.memory26.data_length = 0
		this.ctrl.memory26.zone_df_code = "DF_1304_1666846276198"
		this.ctrl.memory26.default_value = "setcurrentdate(),{}"
		this.ctrl.memory26.is_memory_ctrl = "Y"
		this.ctrl.memory26.field_coordinates = ""
		this.ctrl.memory26.sub_details = ""
		this.ctrl.memory26.accept_char = ""
		this.ctrl.memory26.currency_format = ""
		this.ctrl.memory26.data_scale = ""
		this.ctrl.memory26.binding_name = "CREATED_DATE"
		this.ctrl.memory26.hide_label = false
		this.ctrl.memory26.depends_on = ""
		this.ctrl.memory26.placeholder = ""
		this.ctrl.memory26.dynamic_param = ""
		this.ctrl.memory26.style_code = ""
		this.ctrl.memory26.data_source = ""
		this.ctrl.memory26.image_association = ""
		this.ctrl.memory26.show = true
		this.ctrl.memory26.sub_content = ""
		this.ctrl.memory26.required = false
		this.ctrl.memory26.vld_rules = []
		this.ctrl.memory26.targetcolumn_lower = "memory26"
		this.ctrl.memory26.disabled = false
		this.ctrl.memory26.view_name = "f_npss_merchant_setup_srch"
		this.ctrl.memory26.ctrl_id = "npss_merchant_setup_srch_memory26"
		this.ctrl.npss_merchant_setup_srch_memory26 = {}
		this.ctrl.npss_merchant_setup_srch_memory26.onChangecomponent = new EventEmitter<any>()
	
		//Properties of bankuserid
		this.ctrl.bankuserid = {}
		this.ctrl.bankuserid.id = "RN11CN5"
		this.ctrl.bankuserid.desc = "Bank User ID"
		this.ctrl.bankuserid.visible = false
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
		this.ctrl.bankuserid.hide_label = false
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
		this.ctrl.bankuserid.view_name = "f_npss_merchant_setup_srch"
		this.ctrl.bankuserid.ctrl_id = "npss_merchant_setup_srch_bankuserid"
		this.ctrl.npss_merchant_setup_srch_bankuserid = {}
		this.ctrl.npss_merchant_setup_srch_bankuserid.onChangecomponent = new EventEmitter<any>()
	
		//Properties of merchant_name
		this.ctrl.merchant_name = {}
		this.ctrl.merchant_name.id = "RN21CN6"
		this.ctrl.merchant_name.desc = "Merchant Name"
		this.ctrl.merchant_name.visible = false
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
		this.ctrl.merchant_name.view_name = "f_npss_merchant_setup_srch"
		this.ctrl.merchant_name.ctrl_id = "npss_merchant_setup_srch_merchant_name"
		this.ctrl.npss_merchant_setup_srch_merchant_name = {}
		this.ctrl.npss_merchant_setup_srch_merchant_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of surname
		this.ctrl.surname = {}
		this.ctrl.surname.id = "RN31CN7"
		this.ctrl.surname.desc = "Surname"
		this.ctrl.surname.visible = false
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
		this.ctrl.surname.binding_name = "SURNAME"
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
		this.ctrl.surname.view_name = "f_npss_merchant_setup_srch"
		this.ctrl.surname.ctrl_id = "npss_merchant_setup_srch_surname"
		this.ctrl.npss_merchant_setup_srch_surname = {}
		this.ctrl.npss_merchant_setup_srch_surname.onChangecomponent = new EventEmitter<any>()
	
		//Properties of mobile
		this.ctrl.mobile = {}
		this.ctrl.mobile.id = "RN41CN8"
		this.ctrl.mobile.desc = "Mobile"
		this.ctrl.mobile.visible = false
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
		this.ctrl.mobile.hide_label = false
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
		this.ctrl.mobile.view_name = "f_npss_merchant_setup_srch"
		this.ctrl.mobile.ctrl_id = "npss_merchant_setup_srch_mobile"
		this.ctrl.npss_merchant_setup_srch_mobile = {}
		this.ctrl.npss_merchant_setup_srch_mobile.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_merchant_setup_srch.model = {"MEMORY26":"setcurrentdate(),{}","BANKUSERID":"","MERCHANT_NAME":"","SURNAME":"","MOBILE":""}
		this.screen_instance[this.comp_id].f_npss_merchant_setup_srch.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"BANKUSERID"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"MERCHANT_NAME"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"SURNAME"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"MOBILE"}]
		this.screen_instance[this.comp_id].f_npss_merchant_setup_srch.dt_code = "dt_1304_1666846074129"
		this.screen_instance[this.comp_id].f_npss_merchant_setup_srch.dtt_code = "dtt_1304_1666846129395"
		this.screen_instance[this.comp_id].f_npss_merchant_setup_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_merchant_setup_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_merchant_setup_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_merchant_setup_srch[control][property] = value;
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
    