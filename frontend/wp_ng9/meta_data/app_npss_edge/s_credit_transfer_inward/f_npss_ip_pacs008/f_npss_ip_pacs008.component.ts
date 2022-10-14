/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26447 
Modified By     : Admin 
Modified Date   : 2022-Oct-14 13:21 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_credit_transfer_inward
Form Name       : NPSS IP Pacs008--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_ip_pacs008',
  templateUrl: './f_npss_ip_pacs008.component.html',
  styleUrls: ['./f_npss_ip_pacs008.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_ip_pacs008Component implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_ip_pacs008') form;
  @ViewChild('npss_ip_pacs008_memory64') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665384453253"
	dtt_code : string = "dtt_1304_1665385772257"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of memory64
		this.ctrl.memory64 = {}
		this.ctrl.memory64.id = "RN01CN1"
		this.ctrl.memory64.desc = "IP Pacs008"
		this.ctrl.memory64.visible = false
		this.ctrl.memory64.label_name = "IP Pacs008"
		this.ctrl.memory64.df_code = "DF_1304_1665385905734"
		this.ctrl.memory64.df_description = "Column Group 1"
		this.ctrl.memory64.uictrl_code = "RICH_TXT"
		this.ctrl.memory64.target_column = "memory64"
		this.ctrl.memory64.data_type = "TEXT"
		this.ctrl.memory64.data_length = 0
		this.ctrl.memory64.zone_df_code = "DF_1304_1665385905734"
		this.ctrl.memory64.default_value = ""
		this.ctrl.memory64.is_memory_ctrl = "Y"
		this.ctrl.memory64.field_coordinates = ""
		this.ctrl.memory64.sub_details = ""
		this.ctrl.memory64.accept_char = ""
		this.ctrl.memory64.currency_format = ""
		this.ctrl.memory64.data_scale = ""
		this.ctrl.memory64.hide_label = false
		this.ctrl.memory64.depends_on = ""
		this.ctrl.memory64.placeholder = ""
		this.ctrl.memory64.dynamic_param = ""
		this.ctrl.memory64.style_code = ""
		this.ctrl.memory64.data_source = ""
		this.ctrl.memory64.image_association = ""
		this.ctrl.memory64.show = true
		this.ctrl.memory64.sub_content = ""
		this.ctrl.memory64.required = false
		this.ctrl.memory64.vld_rules = []
		this.ctrl.memory64.targetcolumn_lower = "memory64"
		this.ctrl.memory64.disabled = false
		this.ctrl.memory64.view_name = "f_npss_ip_pacs008"
		this.ctrl.memory64.ctrl_id = "npss_ip_pacs008_memory64"
		this.ctrl.npss_ip_pacs008_memory64 = {}
		this.ctrl.npss_ip_pacs008_memory64.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_ip_pacs008.model = {"MEMORY64":""}
		this.screen_instance[this.comp_id].f_npss_ip_pacs008.Meta = []
		this.screen_instance[this.comp_id].f_npss_ip_pacs008.dt_code = "dt_1304_1665384453253"
		this.screen_instance[this.comp_id].f_npss_ip_pacs008.dtt_code = "dtt_1304_1665385772257"
		this.screen_instance[this.comp_id].f_npss_ip_pacs008.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_ip_pacs008[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_ip_pacs008[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_ip_pacs008[control][property] = value;
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
    