/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34542 
Modified By     : Admin 
Modified Date   : 2024-Feb-26 7:10 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_merchant_details
Form Name       : NPSS Merchant QR UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_merchant_qr_ui',
  templateUrl: './f_npss_merchant_qr_ui.component.html',
  styleUrls: ['./f_npss_merchant_qr_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_merchant_qr_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_merchant_qr_ui') form;
  @ViewChild('npss_merchant_qr_ui_merchant_name') element: ElementRef;
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

  
		//Properties of merchant_name
		this.ctrl.merchant_name = {}
		this.ctrl.merchant_name.id = "RN01CN1"
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
		this.ctrl.merchant_name.view_name = "f_npss_merchant_qr_ui"
		this.ctrl.merchant_name.ctrl_id = "npss_merchant_qr_ui_merchant_name"
		this.ctrl.npss_merchant_qr_ui_merchant_name = {}
		this.ctrl.npss_merchant_qr_ui_merchant_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of merchant_tag
		this.ctrl.merchant_tag = {}
		this.ctrl.merchant_tag.id = "RN01CN2"
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
		this.ctrl.merchant_tag.view_name = "f_npss_merchant_qr_ui"
		this.ctrl.merchant_tag.ctrl_id = "npss_merchant_qr_ui_merchant_tag"
		this.ctrl.npss_merchant_qr_ui_merchant_tag = {}
		this.ctrl.npss_merchant_qr_ui_merchant_tag.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_merchant_qr_ui.model = {"MERCHANT_NAME":"","MERCHANT_TAG":""}
		this.screen_instance[this.comp_id].f_npss_merchant_qr_ui.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"MERCHANT_NAME"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"MERCHANT_TAG"}]
		this.screen_instance[this.comp_id].f_npss_merchant_qr_ui.dt_code = "dt_1304_1666846074129"
		this.screen_instance[this.comp_id].f_npss_merchant_qr_ui.dtt_code = "dtt_1304_1666846129395"
		this.screen_instance[this.comp_id].f_npss_merchant_qr_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_merchant_qr_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_merchant_qr_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_merchant_qr_ui[control][property] = value;
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
    