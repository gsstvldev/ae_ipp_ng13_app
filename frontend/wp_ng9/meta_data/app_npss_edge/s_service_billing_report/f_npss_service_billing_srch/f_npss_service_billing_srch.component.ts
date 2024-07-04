/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35950 
Modified By     : Admin 
Modified Date   : 2024-Jul-04 10:19 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_service_billing_report
Form Name       : NPSS Service Billing SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_service_billing_srch',
  templateUrl: './f_npss_service_billing_srch.component.html',
  styleUrls: ['./f_npss_service_billing_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_service_billing_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_service_billing_srch') form;
  @ViewChild('npss_service_billing_srch_service_name') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665901130705"
	dtt_code : string = "dtt_1304_1681974712398"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of service_name
		this.ctrl.service_name = {}
		this.ctrl.service_name.id = "RN01CN1"
		this.ctrl.service_name.desc = "Service Name"
		this.ctrl.service_name.visible = true
		this.ctrl.service_name.label_name = "Service Name"
		this.ctrl.service_name.df_code = "DF_1304_1681974847836"
		this.ctrl.service_name.df_description = "Column Group 1"
		this.ctrl.service_name.uictrl_code = "CDN_CTRL"
		this.ctrl.service_name.target_column = "SERVICE_NAME"
		this.ctrl.service_name.data_type = "TEXT"
		this.ctrl.service_name.data_length = 256
		this.ctrl.service_name.zone_df_code = "DF_1304_1681974847836"
		this.ctrl.service_name.default_value = ""
		this.ctrl.service_name.is_memory_ctrl = ""
		this.ctrl.service_name.field_coordinates = ""
		this.ctrl.service_name.sub_details = ""
		this.ctrl.service_name.accept_char = ""
		this.ctrl.service_name.currency_format = ""
		this.ctrl.service_name.data_scale = ""
		this.ctrl.service_name.binding_name = "SERVICE_NAME"
		this.ctrl.service_name.depends_on = ""
		this.ctrl.service_name.placeholder = ""
		this.ctrl.service_name.dynamic_param = ""
		this.ctrl.service_name.style_code = ""
		this.ctrl.service_name.data_source = ""
		this.ctrl.service_name.image_association = ""
		this.ctrl.service_name.show = true
		this.ctrl.service_name.sub_content = ""
		this.ctrl.service_name.required = false
		this.ctrl.service_name.vld_rules = []
		this.ctrl.service_name.targetcolumn_lower = "service_name"
		this.ctrl.service_name.disabled = false
		this.ctrl.service_name.view_name = "f_npss_service_billing_srch"
		this.ctrl.service_name.ctrl_id = "npss_service_billing_srch_service_name"
		this.ctrl.npss_service_billing_srch_service_name = {}
		this.ctrl.npss_service_billing_srch_service_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory5
		this.ctrl.memory5 = {}
		this.ctrl.memory5.id = "RN01CN1001"
		this.ctrl.memory5.desc = "Created Date"
		this.ctrl.memory5.visible = true
		this.ctrl.memory5.label_name = "Created Date"
		this.ctrl.memory5.df_code = "DF_1304_1681974847836"
		this.ctrl.memory5.df_description = "Column Group 1"
		this.ctrl.memory5.uictrl_code = "CDN_DATE"
		this.ctrl.memory5.target_column = "memory5"
		this.ctrl.memory5.data_type = "DATETIME"
		this.ctrl.memory5.data_length = 0
		this.ctrl.memory5.zone_df_code = "DF_1304_1681974847836"
		this.ctrl.memory5.default_value = "setcurrentdate(),{}"
		this.ctrl.memory5.is_memory_ctrl = "Y"
		this.ctrl.memory5.field_coordinates = ""
		this.ctrl.memory5.sub_details = ""
		this.ctrl.memory5.accept_char = ""
		this.ctrl.memory5.currency_format = ""
		this.ctrl.memory5.data_scale = ""
		this.ctrl.memory5.binding_name = "CREATED_DATE"
		this.ctrl.memory5.depends_on = ""
		this.ctrl.memory5.placeholder = ""
		this.ctrl.memory5.dynamic_param = ""
		this.ctrl.memory5.style_code = ""
		this.ctrl.memory5.data_source = ""
		this.ctrl.memory5.image_association = ""
		this.ctrl.memory5.show = true
		this.ctrl.memory5.sub_content = ""
		this.ctrl.memory5.required = false
		this.ctrl.memory5.vld_rules = []
		this.ctrl.memory5.targetcolumn_lower = "memory5"
		this.ctrl.memory5.disabled = false
		this.ctrl.memory5.view_name = "f_npss_service_billing_srch"
		this.ctrl.memory5.ctrl_id = "npss_service_billing_srch_memory5"
		this.ctrl.npss_service_billing_srch_memory5 = {}
		this.ctrl.npss_service_billing_srch_memory5.onChangecomponent = new EventEmitter<any>()
	
		//Properties of volume_value_size
		this.ctrl.volume_value_size = {}
		this.ctrl.volume_value_size.id = "RN11CN2"
		this.ctrl.volume_value_size.desc = "Volume Value Size"
		this.ctrl.volume_value_size.visible = true
		this.ctrl.volume_value_size.label_name = "Volume Value Size"
		this.ctrl.volume_value_size.df_code = "DF_1304_1681974847836"
		this.ctrl.volume_value_size.df_description = "Column Group 1"
		this.ctrl.volume_value_size.uictrl_code = "CDN_CTRL"
		this.ctrl.volume_value_size.target_column = "VOLUME_VALUE_SIZE"
		this.ctrl.volume_value_size.data_type = "NUMBER"
		this.ctrl.volume_value_size.data_length = 9
		this.ctrl.volume_value_size.zone_df_code = "DF_1304_1681974847836"
		this.ctrl.volume_value_size.default_value = ""
		this.ctrl.volume_value_size.is_memory_ctrl = ""
		this.ctrl.volume_value_size.field_coordinates = ""
		this.ctrl.volume_value_size.sub_details = ""
		this.ctrl.volume_value_size.accept_char = ""
		this.ctrl.volume_value_size.currency_format = ""
		this.ctrl.volume_value_size.data_scale = ""
		this.ctrl.volume_value_size.binding_name = "VOLUME_VALUE_SIZE"
		this.ctrl.volume_value_size.depends_on = ""
		this.ctrl.volume_value_size.placeholder = ""
		this.ctrl.volume_value_size.dynamic_param = ""
		this.ctrl.volume_value_size.style_code = ""
		this.ctrl.volume_value_size.data_source = ""
		this.ctrl.volume_value_size.image_association = ""
		this.ctrl.volume_value_size.show = true
		this.ctrl.volume_value_size.sub_content = ""
		this.ctrl.volume_value_size.required = false
		this.ctrl.volume_value_size.vld_rules = []
		this.ctrl.volume_value_size.targetcolumn_lower = "volume_value_size"
		this.ctrl.volume_value_size.disabled = false
		this.ctrl.volume_value_size.view_name = "f_npss_service_billing_srch"
		this.ctrl.volume_value_size.ctrl_id = "npss_service_billing_srch_volume_value_size"
		this.ctrl.npss_service_billing_srch_volume_value_size = {}
		this.ctrl.npss_service_billing_srch_volume_value_size.onChangecomponent = new EventEmitter<any>()
	
		//Properties of total_charge_amount
		this.ctrl.total_charge_amount = {}
		this.ctrl.total_charge_amount.id = "RN11CN3"
		this.ctrl.total_charge_amount.desc = "Total Charge Amount"
		this.ctrl.total_charge_amount.visible = true
		this.ctrl.total_charge_amount.label_name = "Total Charge Amount"
		this.ctrl.total_charge_amount.df_code = "DF_1304_1681974847836"
		this.ctrl.total_charge_amount.df_description = "Column Group 1"
		this.ctrl.total_charge_amount.uictrl_code = "CDN_CTRL"
		this.ctrl.total_charge_amount.target_column = "TOTAL_CHARGE_AMOUNT"
		this.ctrl.total_charge_amount.data_type = "NUMBER"
		this.ctrl.total_charge_amount.data_length = 19
		this.ctrl.total_charge_amount.zone_df_code = "DF_1304_1681974847836"
		this.ctrl.total_charge_amount.default_value = ""
		this.ctrl.total_charge_amount.is_memory_ctrl = ""
		this.ctrl.total_charge_amount.field_coordinates = ""
		this.ctrl.total_charge_amount.sub_details = ""
		this.ctrl.total_charge_amount.accept_char = ""
		this.ctrl.total_charge_amount.currency_format = ""
		this.ctrl.total_charge_amount.data_scale = "2"
		this.ctrl.total_charge_amount.binding_name = "TOTAL_CHARGE_AMOUNT"
		this.ctrl.total_charge_amount.depends_on = ""
		this.ctrl.total_charge_amount.placeholder = ""
		this.ctrl.total_charge_amount.dynamic_param = ""
		this.ctrl.total_charge_amount.style_code = ""
		this.ctrl.total_charge_amount.data_source = ""
		this.ctrl.total_charge_amount.image_association = ""
		this.ctrl.total_charge_amount.show = true
		this.ctrl.total_charge_amount.sub_content = ""
		this.ctrl.total_charge_amount.required = false
		this.ctrl.total_charge_amount.vld_rules = []
		this.ctrl.total_charge_amount.targetcolumn_lower = "total_charge_amount"
		this.ctrl.total_charge_amount.disabled = false
		this.ctrl.total_charge_amount.view_name = "f_npss_service_billing_srch"
		this.ctrl.total_charge_amount.ctrl_id = "npss_service_billing_srch_total_charge_amount"
		this.ctrl.npss_service_billing_srch_total_charge_amount = {}
		this.ctrl.npss_service_billing_srch_total_charge_amount.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_service_billing_srch.model = {"SERVICE_NAME":"","MEMORY5":"setcurrentdate(),{}","VOLUME_VALUE_SIZE":"","TOTAL_CHARGE_AMOUNT":""}
		this.screen_instance[this.comp_id].f_npss_service_billing_srch.Meta = [{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"SERVICE_NAME"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"NUMBER","TARGET_COLUMN":"VOLUME_VALUE_SIZE"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"NUMBER","TARGET_COLUMN":"TOTAL_CHARGE_AMOUNT"}]
		this.screen_instance[this.comp_id].f_npss_service_billing_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_service_billing_srch.dtt_code = "dtt_1304_1681974712398"
		this.screen_instance[this.comp_id].f_npss_service_billing_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_service_billing_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_service_billing_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_service_billing_srch[control][property] = value;
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
    