/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34424 
Modified By     : Admin 
Modified Date   : 2024-Feb-20 5:18 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_outward_transactions_details
Form Name       : NPSS Report Label Control--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_report_label_control',
  templateUrl: './f_npss_report_label_control.component.html',
  styleUrls: ['./f_npss_report_label_control.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_report_label_controlComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_report_label_control') form;
  @ViewChild('npss_report_label_control_memory143') element: ElementRef;
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

  
		//Properties of memory143
		this.ctrl.memory143 = {}
		this.ctrl.memory143.id = "RN01CN2"
		this.ctrl.memory143.desc = "Outward Transactions Details"
		this.ctrl.memory143.visible = false
		this.ctrl.memory143.label_name = "Outward Transactions Details"
		this.ctrl.memory143.df_code = "DF_1304_1665901396659"
		this.ctrl.memory143.df_description = "Column Group 1"
		this.ctrl.memory143.uictrl_code = "LBL"
		this.ctrl.memory143.target_column = "memory143"
		this.ctrl.memory143.data_type = "TEXT"
		this.ctrl.memory143.data_length = 0
		this.ctrl.memory143.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory143.default_value = ""
		this.ctrl.memory143.is_memory_ctrl = "Y"
		this.ctrl.memory143.field_coordinates = ""
		this.ctrl.memory143.sub_details = ""
		this.ctrl.memory143.accept_char = ""
		this.ctrl.memory143.currency_format = ""
		this.ctrl.memory143.data_scale = ""
		this.ctrl.memory143.hide_label = false
		this.ctrl.memory143.depends_on = ""
		this.ctrl.memory143.placeholder = ""
		this.ctrl.memory143.dynamic_param = ""
		this.ctrl.memory143.style_code = ""
		this.ctrl.memory143.data_source = ""
		this.ctrl.memory143.image_association = ""
		this.ctrl.memory143.show = true
		this.ctrl.memory143.sub_content = ""
		this.ctrl.memory143.required = false
		this.ctrl.memory143.vld_rules = []
		this.ctrl.memory143.targetcolumn_lower = "memory143"
		this.ctrl.memory143.disabled = false
		this.ctrl.memory143.view_name = "f_npss_report_label_control"
		this.ctrl.memory143.ctrl_id = "npss_report_label_control_memory143"
		this.ctrl.npss_report_label_control_memory143 = {}
		this.ctrl.npss_report_label_control_memory143.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_report_label_control.memory143 = {}
		this.screen_instance[this.comp_id].f_npss_report_label_control.model = {"MEMORY143":""}
		this.screen_instance[this.comp_id].f_npss_report_label_control.Meta = []
		this.screen_instance[this.comp_id].f_npss_report_label_control.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_report_label_control.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_report_label_control.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_report_label_control[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_report_label_control[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_report_label_control[control][property] = value;
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
    