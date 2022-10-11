/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26370 
Modified By     : Admin 
Modified Date   : 2022-Oct-11 4:41 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_customer_enrolment
Form Name       : NPSS Modify Customer UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_modify_customer_ui',
  templateUrl: './f_npss_modify_customer_ui.component.html',
  styleUrls: ['./f_npss_modify_customer_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_modify_customer_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_modify_customer_ui') form;
  @ViewChild('npss_modify_customer_ui_customer') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665384453253"
	dtt_code : string = "dtt_1304_1665384533560"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of customer
		this.ctrl.customer = {}
		this.ctrl.customer.id = "RN01CN1"
		this.ctrl.customer.desc = "Customer"
		this.ctrl.customer.visible = false
		this.ctrl.customer.label_name = "Customer"
		this.ctrl.customer.df_code = "DF_1304_1665384649010"
		this.ctrl.customer.df_description = "Column Group 1"
		this.ctrl.customer.uictrl_code = "TXT"
		this.ctrl.customer.target_column = "CUSTOMER"
		this.ctrl.customer.data_type = "TEXT"
		this.ctrl.customer.data_length = 64
		this.ctrl.customer.zone_df_code = "DF_1304_1665384649010"
		this.ctrl.customer.default_value = ""
		this.ctrl.customer.is_memory_ctrl = ""
		this.ctrl.customer.field_coordinates = ""
		this.ctrl.customer.sub_details = ""
		this.ctrl.customer.accept_char = ""
		this.ctrl.customer.currency_format = ""
		this.ctrl.customer.data_scale = ""
		this.ctrl.customer.hide_label = false
		this.ctrl.customer.depends_on = ""
		this.ctrl.customer.placeholder = ""
		this.ctrl.customer.dynamic_param = ""
		this.ctrl.customer.style_code = ""
		this.ctrl.customer.data_source = ""
		this.ctrl.customer.image_association = ""
		this.ctrl.customer.show = true
		this.ctrl.customer.sub_content = ""
		this.ctrl.customer.required = false
		this.ctrl.customer.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.customer.targetcolumn_lower = "customer"
		this.ctrl.customer.disabled = false
		this.ctrl.customer.view_name = "f_npss_modify_customer_ui"
		this.ctrl.customer.ctrl_id = "npss_modify_customer_ui_customer"
		this.ctrl.npss_modify_customer_ui_customer = {}
		this.ctrl.npss_modify_customer_ui_customer.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_modify_customer_ui.model = {"CUSTOMER":""}
		this.screen_instance[this.comp_id].f_npss_modify_customer_ui.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CUSTOMER"}]
		this.screen_instance[this.comp_id].f_npss_modify_customer_ui.dt_code = "dt_1304_1665384453253"
		this.screen_instance[this.comp_id].f_npss_modify_customer_ui.dtt_code = "dtt_1304_1665384533560"
		this.screen_instance[this.comp_id].f_npss_modify_customer_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_modify_customer_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_modify_customer_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_modify_customer_ui[control][property] = value;
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
    