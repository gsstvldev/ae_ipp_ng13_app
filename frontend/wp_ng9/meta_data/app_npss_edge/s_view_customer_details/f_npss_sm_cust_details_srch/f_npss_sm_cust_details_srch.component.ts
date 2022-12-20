/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27457 
Modified By     : Admin 
Modified Date   : 2022-Dec-20 7:36 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_customer_details
Form Name       : NPSS SM Cust Details SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_sm_cust_details_srch',
  templateUrl: './f_npss_sm_cust_details_srch.component.html',
  styleUrls: ['./f_npss_sm_cust_details_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_sm_cust_details_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_sm_cust_details_srch') form;
  @ViewChild('npss_sm_cust_details_srch_bankuserid') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1666846042955"
	dtt_code : string = "dtt_1304_1666846082411"

  
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
		this.ctrl.bankuserid.df_code = "DF_1304_1666846148448"
		this.ctrl.bankuserid.df_description = "Customer"
		this.ctrl.bankuserid.uictrl_code = "TXT"
		this.ctrl.bankuserid.target_column = "BANKUSERID"
		this.ctrl.bankuserid.data_type = "TEXT"
		this.ctrl.bankuserid.data_length = 16
		this.ctrl.bankuserid.zone_df_code = "DF_1304_1666846148448"
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
		this.ctrl.bankuserid.view_name = "f_npss_sm_cust_details_srch"
		this.ctrl.bankuserid.ctrl_id = "npss_sm_cust_details_srch_bankuserid"
		this.ctrl.npss_sm_cust_details_srch_bankuserid = {}
		this.ctrl.npss_sm_cust_details_srch_bankuserid.onChangecomponent = new EventEmitter<any>()
	
		//Properties of customer_name
		this.ctrl.customer_name = {}
		this.ctrl.customer_name.id = "RN01CN2"
		this.ctrl.customer_name.desc = "Customer Name"
		this.ctrl.customer_name.visible = true
		this.ctrl.customer_name.label_name = "Customer Name"
		this.ctrl.customer_name.df_code = "DF_1304_1666846148448"
		this.ctrl.customer_name.df_description = "Customer"
		this.ctrl.customer_name.uictrl_code = "CDN_CTRL"
		this.ctrl.customer_name.target_column = "CUSTOMER_NAME"
		this.ctrl.customer_name.data_type = "TEXT"
		this.ctrl.customer_name.data_length = 50
		this.ctrl.customer_name.zone_df_code = "DF_1304_1666846148448"
		this.ctrl.customer_name.default_value = ""
		this.ctrl.customer_name.is_memory_ctrl = ""
		this.ctrl.customer_name.field_coordinates = ""
		this.ctrl.customer_name.sub_details = ""
		this.ctrl.customer_name.accept_char = ""
		this.ctrl.customer_name.currency_format = ""
		this.ctrl.customer_name.data_scale = ""
		this.ctrl.customer_name.binding_name = "CUSTOMER_NAME"
		this.ctrl.customer_name.hide_label = false
		this.ctrl.customer_name.depends_on = ""
		this.ctrl.customer_name.placeholder = ""
		this.ctrl.customer_name.dynamic_param = ""
		this.ctrl.customer_name.style_code = ""
		this.ctrl.customer_name.data_source = ""
		this.ctrl.customer_name.image_association = ""
		this.ctrl.customer_name.show = true
		this.ctrl.customer_name.sub_content = ""
		this.ctrl.customer_name.required = true
		this.ctrl.customer_name.vld_rules = []
		this.ctrl.customer_name.targetcolumn_lower = "customer_name"
		this.ctrl.customer_name.disabled = false
		this.ctrl.customer_name.view_name = "f_npss_sm_cust_details_srch"
		this.ctrl.customer_name.ctrl_id = "npss_sm_cust_details_srch_customer_name"
		this.ctrl.npss_sm_cust_details_srch_customer_name = {}
		this.ctrl.npss_sm_cust_details_srch_customer_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of surname
		this.ctrl.surname = {}
		this.ctrl.surname.id = "RN11CN3"
		this.ctrl.surname.desc = "Surname"
		this.ctrl.surname.visible = true
		this.ctrl.surname.label_name = "Surname"
		this.ctrl.surname.df_code = "DF_1304_1666846148448"
		this.ctrl.surname.df_description = "Customer"
		this.ctrl.surname.uictrl_code = "CDN_CTRL"
		this.ctrl.surname.target_column = "SURNAME"
		this.ctrl.surname.data_type = "TEXT"
		this.ctrl.surname.data_length = 50
		this.ctrl.surname.zone_df_code = "DF_1304_1666846148448"
		this.ctrl.surname.default_value = ""
		this.ctrl.surname.is_memory_ctrl = ""
		this.ctrl.surname.field_coordinates = ""
		this.ctrl.surname.sub_details = ""
		this.ctrl.surname.accept_char = ""
		this.ctrl.surname.currency_format = ""
		this.ctrl.surname.data_scale = ""
		this.ctrl.surname.binding_name = "SURNAME"
		this.ctrl.surname.hide_label = false
		this.ctrl.surname.depends_on = ""
		this.ctrl.surname.placeholder = ""
		this.ctrl.surname.dynamic_param = ""
		this.ctrl.surname.style_code = ""
		this.ctrl.surname.data_source = ""
		this.ctrl.surname.image_association = ""
		this.ctrl.surname.show = true
		this.ctrl.surname.sub_content = ""
		this.ctrl.surname.required = true
		this.ctrl.surname.vld_rules = []
		this.ctrl.surname.targetcolumn_lower = "surname"
		this.ctrl.surname.disabled = false
		this.ctrl.surname.view_name = "f_npss_sm_cust_details_srch"
		this.ctrl.surname.ctrl_id = "npss_sm_cust_details_srch_surname"
		this.ctrl.npss_sm_cust_details_srch_surname = {}
		this.ctrl.npss_sm_cust_details_srch_surname.onChangecomponent = new EventEmitter<any>()
	
		//Properties of mobile
		this.ctrl.mobile = {}
		this.ctrl.mobile.id = "RN11CN4"
		this.ctrl.mobile.desc = "Mobile"
		this.ctrl.mobile.visible = true
		this.ctrl.mobile.label_name = "Mobile"
		this.ctrl.mobile.df_code = "DF_1304_1666846148448"
		this.ctrl.mobile.df_description = "Customer"
		this.ctrl.mobile.uictrl_code = "TXT"
		this.ctrl.mobile.target_column = "MOBILE"
		this.ctrl.mobile.data_type = "TEXT"
		this.ctrl.mobile.data_length = 30
		this.ctrl.mobile.zone_df_code = "DF_1304_1666846148448"
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
		this.ctrl.mobile.view_name = "f_npss_sm_cust_details_srch"
		this.ctrl.mobile.ctrl_id = "npss_sm_cust_details_srch_mobile"
		this.ctrl.npss_sm_cust_details_srch_mobile = {}
		this.ctrl.npss_sm_cust_details_srch_mobile.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory19
		this.ctrl.memory19 = {}
		this.ctrl.memory19.id = "RN21CN5"
		this.ctrl.memory19.desc = "Created Date"
		this.ctrl.memory19.visible = true
		this.ctrl.memory19.label_name = "Created Date"
		this.ctrl.memory19.df_code = "DF_1304_1666846148448"
		this.ctrl.memory19.df_description = "Customer"
		this.ctrl.memory19.uictrl_code = "CDN_DATE"
		this.ctrl.memory19.target_column = "memory19"
		this.ctrl.memory19.data_type = "DATETIME"
		this.ctrl.memory19.data_length = 0
		this.ctrl.memory19.zone_df_code = "DF_1304_1666846148448"
		this.ctrl.memory19.default_value = "setcurrentdate(),{}"
		this.ctrl.memory19.is_memory_ctrl = "Y"
		this.ctrl.memory19.field_coordinates = ""
		this.ctrl.memory19.sub_details = ""
		this.ctrl.memory19.accept_char = ""
		this.ctrl.memory19.currency_format = ""
		this.ctrl.memory19.data_scale = ""
		this.ctrl.memory19.binding_name = "CREATED_DATE"
		this.ctrl.memory19.hide_label = false
		this.ctrl.memory19.depends_on = ""
		this.ctrl.memory19.placeholder = ""
		this.ctrl.memory19.dynamic_param = ""
		this.ctrl.memory19.style_code = ""
		this.ctrl.memory19.data_source = ""
		this.ctrl.memory19.image_association = ""
		this.ctrl.memory19.show = true
		this.ctrl.memory19.sub_content = ""
		this.ctrl.memory19.required = false
		this.ctrl.memory19.vld_rules = []
		this.ctrl.memory19.targetcolumn_lower = "memory19"
		this.ctrl.memory19.disabled = false
		this.ctrl.memory19.view_name = "f_npss_sm_cust_details_srch"
		this.ctrl.memory19.ctrl_id = "npss_sm_cust_details_srch_memory19"
		this.ctrl.npss_sm_cust_details_srch_memory19 = {}
		this.ctrl.npss_sm_cust_details_srch_memory19.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_sm_cust_details_srch.model = {"BANKUSERID":"","CUSTOMER_NAME":"","SURNAME":"","MOBILE":"","MEMORY19":"setcurrentdate(),{}"}
		this.screen_instance[this.comp_id].f_npss_sm_cust_details_srch.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"BANKUSERID"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"CUSTOMER_NAME"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"SURNAME"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"MOBILE"}]
		this.screen_instance[this.comp_id].f_npss_sm_cust_details_srch.dt_code = "dt_1304_1666846042955"
		this.screen_instance[this.comp_id].f_npss_sm_cust_details_srch.dtt_code = "dtt_1304_1666846082411"
		this.screen_instance[this.comp_id].f_npss_sm_cust_details_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_sm_cust_details_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_sm_cust_details_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_sm_cust_details_srch[control][property] = value;
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
    