/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27472 
Modified By     : Admin 
Modified Date   : 2022-Dec-21 11:55 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_setup
Form Name       : NPSS Cash Desk UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_cash_desk_ui',
  templateUrl: './f_npss_cash_desk_ui.component.html',
  styleUrls: ['./f_npss_cash_desk_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_cash_desk_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_cash_desk_ui') form;
  @ViewChild('npss_cash_desk_ui_cashdesk_id') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1666846074129"
	dtt_code : string = "dtt_1304_1666848298941"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of cashdesk_id
		this.ctrl.cashdesk_id = {}
		this.ctrl.cashdesk_id.id = "RN01CN1"
		this.ctrl.cashdesk_id.desc = "Cashdesk ID"
		this.ctrl.cashdesk_id.visible = true
		this.ctrl.cashdesk_id.label_name = "Cashdesk ID"
		this.ctrl.cashdesk_id.df_code = "DF_1304_1666848346905"
		this.ctrl.cashdesk_id.df_description = "Column Group 1"
		this.ctrl.cashdesk_id.uictrl_code = "TXT"
		this.ctrl.cashdesk_id.target_column = "CASHDESK_ID"
		this.ctrl.cashdesk_id.data_type = "TEXT"
		this.ctrl.cashdesk_id.data_length = 16
		this.ctrl.cashdesk_id.zone_df_code = "DF_1304_1666848346905"
		this.ctrl.cashdesk_id.default_value = ""
		this.ctrl.cashdesk_id.is_memory_ctrl = ""
		this.ctrl.cashdesk_id.field_coordinates = ""
		this.ctrl.cashdesk_id.sub_details = ""
		this.ctrl.cashdesk_id.accept_char = ""
		this.ctrl.cashdesk_id.currency_format = ""
		this.ctrl.cashdesk_id.data_scale = ""
		this.ctrl.cashdesk_id.hide_label = false
		this.ctrl.cashdesk_id.depends_on = ""
		this.ctrl.cashdesk_id.placeholder = ""
		this.ctrl.cashdesk_id.dynamic_param = ""
		this.ctrl.cashdesk_id.style_code = ""
		this.ctrl.cashdesk_id.data_source = ""
		this.ctrl.cashdesk_id.image_association = ""
		this.ctrl.cashdesk_id.show = true
		this.ctrl.cashdesk_id.sub_content = "*"
		this.ctrl.cashdesk_id.required = true
		this.ctrl.cashdesk_id.vld_rules = []
		this.ctrl.cashdesk_id.targetcolumn_lower = "cashdesk_id"
		this.ctrl.cashdesk_id.disabled = false
		this.ctrl.cashdesk_id.view_name = "f_npss_cash_desk_ui"
		this.ctrl.cashdesk_id.ctrl_id = "npss_cash_desk_ui_cashdesk_id"
		this.ctrl.npss_cash_desk_ui_cashdesk_id = {}
		this.ctrl.npss_cash_desk_ui_cashdesk_id.onChangecomponent = new EventEmitter<any>()
	
		//Properties of cashdesk_overlay_id
		this.ctrl.cashdesk_overlay_id = {}
		this.ctrl.cashdesk_overlay_id.id = "RN01CN2"
		this.ctrl.cashdesk_overlay_id.desc = "Cashdesk Overlay ID"
		this.ctrl.cashdesk_overlay_id.visible = true
		this.ctrl.cashdesk_overlay_id.label_name = "Cashdesk Overlay ID"
		this.ctrl.cashdesk_overlay_id.df_code = "DF_1304_1666848346905"
		this.ctrl.cashdesk_overlay_id.df_description = "Column Group 1"
		this.ctrl.cashdesk_overlay_id.uictrl_code = "TXT"
		this.ctrl.cashdesk_overlay_id.target_column = "CASHDESK_OVERLAY_ID"
		this.ctrl.cashdesk_overlay_id.data_type = "TEXT"
		this.ctrl.cashdesk_overlay_id.data_length = 30
		this.ctrl.cashdesk_overlay_id.zone_df_code = "DF_1304_1666848346905"
		this.ctrl.cashdesk_overlay_id.default_value = ""
		this.ctrl.cashdesk_overlay_id.is_memory_ctrl = ""
		this.ctrl.cashdesk_overlay_id.field_coordinates = ""
		this.ctrl.cashdesk_overlay_id.sub_details = ""
		this.ctrl.cashdesk_overlay_id.accept_char = ""
		this.ctrl.cashdesk_overlay_id.currency_format = ""
		this.ctrl.cashdesk_overlay_id.data_scale = ""
		this.ctrl.cashdesk_overlay_id.hide_label = false
		this.ctrl.cashdesk_overlay_id.depends_on = ""
		this.ctrl.cashdesk_overlay_id.placeholder = ""
		this.ctrl.cashdesk_overlay_id.dynamic_param = ""
		this.ctrl.cashdesk_overlay_id.style_code = ""
		this.ctrl.cashdesk_overlay_id.data_source = ""
		this.ctrl.cashdesk_overlay_id.image_association = ""
		this.ctrl.cashdesk_overlay_id.show = true
		this.ctrl.cashdesk_overlay_id.sub_content = ""
		this.ctrl.cashdesk_overlay_id.required = false
		this.ctrl.cashdesk_overlay_id.vld_rules = []
		this.ctrl.cashdesk_overlay_id.targetcolumn_lower = "cashdesk_overlay_id"
		this.ctrl.cashdesk_overlay_id.disabled = false
		this.ctrl.cashdesk_overlay_id.view_name = "f_npss_cash_desk_ui"
		this.ctrl.cashdesk_overlay_id.ctrl_id = "npss_cash_desk_ui_cashdesk_overlay_id"
		this.ctrl.npss_cash_desk_ui_cashdesk_overlay_id = {}
		this.ctrl.npss_cash_desk_ui_cashdesk_overlay_id.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_cash_desk_ui.model = {"CASHDESK_ID":"","CASHDESK_OVERLAY_ID":""}
		this.screen_instance[this.comp_id].f_npss_cash_desk_ui.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CASHDESK_ID"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CASHDESK_OVERLAY_ID"}]
		this.screen_instance[this.comp_id].f_npss_cash_desk_ui.dt_code = "dt_1304_1666846074129"
		this.screen_instance[this.comp_id].f_npss_cash_desk_ui.dtt_code = "dtt_1304_1666848298941"
		this.screen_instance[this.comp_id].f_npss_cash_desk_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_cash_desk_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_cash_desk_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_cash_desk_ui[control][property] = value;
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
    