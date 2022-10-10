/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26351 
Modified By     : Admin 
Modified Date   : 2022-Oct-10 14:3 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_enrolment
Form Name       : NPSS Merchant Name UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_merchant_name_ui',
  templateUrl: './f_npss_merchant_name_ui.component.html',
  styleUrls: ['./f_npss_merchant_name_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_merchant_name_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_merchant_name_ui') form;
  @ViewChild('npss_merchant_name_ui_merchant') element: ElementRef;
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

  
		//Properties of merchant
		this.ctrl.merchant = {}
		this.ctrl.merchant.id = "RN01CN1"
		this.ctrl.merchant.desc = "Merchant"
		this.ctrl.merchant.visible = false
		this.ctrl.merchant.label_name = "Merchant"
		this.ctrl.merchant.df_code = "DF_1304_1665384730214"
		this.ctrl.merchant.df_description = "Column Group 1"
		this.ctrl.merchant.uictrl_code = "TXT"
		this.ctrl.merchant.target_column = "MERCHANT"
		this.ctrl.merchant.data_type = "TEXT"
		this.ctrl.merchant.data_length = 64
		this.ctrl.merchant.zone_df_code = "DF_1304_1665384730214"
		this.ctrl.merchant.default_value = ""
		this.ctrl.merchant.is_memory_ctrl = ""
		this.ctrl.merchant.field_coordinates = ""
		this.ctrl.merchant.sub_details = ""
		this.ctrl.merchant.accept_char = ""
		this.ctrl.merchant.currency_format = ""
		this.ctrl.merchant.data_scale = ""
		this.ctrl.merchant.hide_label = false
		this.ctrl.merchant.depends_on = ""
		this.ctrl.merchant.placeholder = ""
		this.ctrl.merchant.dynamic_param = ""
		this.ctrl.merchant.style_code = ""
		this.ctrl.merchant.data_source = ""
		this.ctrl.merchant.image_association = ""
		this.ctrl.merchant.show = true
		this.ctrl.merchant.sub_content = ""
		this.ctrl.merchant.required = false
		this.ctrl.merchant.vld_rules = []
		this.ctrl.merchant.targetcolumn_lower = "merchant"
		this.ctrl.merchant.disabled = false
		this.ctrl.merchant.view_name = "f_npss_merchant_name_ui"
		this.ctrl.merchant.ctrl_id = "npss_merchant_name_ui_merchant"
		this.ctrl.npss_merchant_name_ui_merchant = {}
		this.ctrl.npss_merchant_name_ui_merchant.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_merchant_name_ui.model = {"MERCHANT":""}
		this.screen_instance[this.comp_id].f_npss_merchant_name_ui.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"MERCHANT"}]
		this.screen_instance[this.comp_id].f_npss_merchant_name_ui.dt_code = "dt_1304_1665384579126"
		this.screen_instance[this.comp_id].f_npss_merchant_name_ui.dtt_code = "dtt_1304_1665384653050"
		this.screen_instance[this.comp_id].f_npss_merchant_name_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_merchant_name_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_merchant_name_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_merchant_name_ui[control][property] = value;
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
    