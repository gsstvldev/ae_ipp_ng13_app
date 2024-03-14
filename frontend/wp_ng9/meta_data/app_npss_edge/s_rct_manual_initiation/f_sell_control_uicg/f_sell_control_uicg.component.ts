/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34767 
Modified By     : Admin 
Modified Date   : 2024-Mar-14 12:26 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_manual_initiation
Form Name       : Sell Control UICG--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_sell_control_uicg',
  templateUrl: './f_sell_control_uicg.component.html',
  styleUrls: ['./f_sell_control_uicg.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_sell_control_uicgComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_sell_control_uicg') form;
  @ViewChild('sell_control_uicg_sell_margin') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665901130705"
	dtt_code : string = "dtt_1304_1665901217208"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of sell_margin
		this.ctrl.sell_margin = {}
		this.ctrl.sell_margin.id = "RN01CN1"
		this.ctrl.sell_margin.desc = "Sell Margin"
		this.ctrl.sell_margin.visible = true
		this.ctrl.sell_margin.label_name = "Sell Margin"
		this.ctrl.sell_margin.df_code = "DF_1304_1665901396659"
		this.ctrl.sell_margin.df_description = "Column Group 1"
		this.ctrl.sell_margin.uictrl_code = "TXT"
		this.ctrl.sell_margin.target_column = "SELL_MARGIN"
		this.ctrl.sell_margin.data_type = "NUMBER"
		this.ctrl.sell_margin.data_length = 19
		this.ctrl.sell_margin.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.sell_margin.default_value = ""
		this.ctrl.sell_margin.is_memory_ctrl = ""
		this.ctrl.sell_margin.field_coordinates = ""
		this.ctrl.sell_margin.sub_details = ""
		this.ctrl.sell_margin.accept_char = ""
		this.ctrl.sell_margin.currency_format = ""
		this.ctrl.sell_margin.data_scale = "6"
		this.ctrl.sell_margin.hide_label = false
		this.ctrl.sell_margin.depends_on = ""
		this.ctrl.sell_margin.placeholder = ""
		this.ctrl.sell_margin.dynamic_param = ""
		this.ctrl.sell_margin.style_code = ""
		this.ctrl.sell_margin.data_source = ""
		this.ctrl.sell_margin.image_association = ""
		this.ctrl.sell_margin.show = true
		this.ctrl.sell_margin.sub_content = ""
		this.ctrl.sell_margin.required = false
		this.ctrl.sell_margin.vld_rules = []
		this.ctrl.sell_margin.targetcolumn_lower = "sell_margin"
		this.ctrl.sell_margin.disabled = false
		this.ctrl.sell_margin.view_name = "f_sell_control_uicg"
		this.ctrl.sell_margin.ctrl_id = "sell_control_uicg_sell_margin"
		this.ctrl.sell_control_uicg_sell_margin = {}
		this.ctrl.sell_control_uicg_sell_margin.onChangecomponent = new EventEmitter<any>()
	
		//Properties of sell_rate
		this.ctrl.sell_rate = {}
		this.ctrl.sell_rate.id = "RN01CN2"
		this.ctrl.sell_rate.desc = "Sell Rate"
		this.ctrl.sell_rate.visible = true
		this.ctrl.sell_rate.label_name = "Sell Rate"
		this.ctrl.sell_rate.df_code = "DF_1304_1665901396659"
		this.ctrl.sell_rate.df_description = "Column Group 1"
		this.ctrl.sell_rate.uictrl_code = "TXT"
		this.ctrl.sell_rate.target_column = "SELL_RATE"
		this.ctrl.sell_rate.data_type = "NUMBER"
		this.ctrl.sell_rate.data_length = 19
		this.ctrl.sell_rate.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.sell_rate.default_value = ""
		this.ctrl.sell_rate.is_memory_ctrl = ""
		this.ctrl.sell_rate.field_coordinates = ""
		this.ctrl.sell_rate.sub_details = ""
		this.ctrl.sell_rate.accept_char = ""
		this.ctrl.sell_rate.currency_format = ""
		this.ctrl.sell_rate.data_scale = "6"
		this.ctrl.sell_rate.hide_label = false
		this.ctrl.sell_rate.depends_on = ""
		this.ctrl.sell_rate.placeholder = ""
		this.ctrl.sell_rate.dynamic_param = ""
		this.ctrl.sell_rate.style_code = ""
		this.ctrl.sell_rate.data_source = ""
		this.ctrl.sell_rate.image_association = ""
		this.ctrl.sell_rate.show = true
		this.ctrl.sell_rate.sub_content = ""
		this.ctrl.sell_rate.required = false
		this.ctrl.sell_rate.vld_rules = []
		this.ctrl.sell_rate.targetcolumn_lower = "sell_rate"
		this.ctrl.sell_rate.disabled = false
		this.ctrl.sell_rate.view_name = "f_sell_control_uicg"
		this.ctrl.sell_rate.ctrl_id = "sell_control_uicg_sell_rate"
		this.ctrl.sell_control_uicg_sell_rate = {}
		this.ctrl.sell_control_uicg_sell_rate.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_sell_control_uicg.model = {"SELL_MARGIN":"","SELL_RATE":""}
		this.screen_instance[this.comp_id].f_sell_control_uicg.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"NUMBER","TARGET_COLUMN":"SELL_MARGIN"},{"CTLR_CODE":"TXT","DATA_TYPE":"NUMBER","TARGET_COLUMN":"SELL_RATE"}]
		this.screen_instance[this.comp_id].f_sell_control_uicg.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_sell_control_uicg.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_sell_control_uicg.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_sell_control_uicg[control]==undefined) {
      this.screen_instance[this.comp_id].f_sell_control_uicg[control] = {}
    }
    this.screen_instance[this.comp_id].f_sell_control_uicg[control][property] = value;
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
    