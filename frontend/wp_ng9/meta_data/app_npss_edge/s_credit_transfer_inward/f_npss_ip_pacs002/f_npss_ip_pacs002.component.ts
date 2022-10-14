/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26441 
Modified By     : Admin 
Modified Date   : 2022-Oct-14 11:18 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_credit_transfer_inward
Form Name       : NPSS IP Pacs002--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_ip_pacs002',
  templateUrl: './f_npss_ip_pacs002.component.html',
  styleUrls: ['./f_npss_ip_pacs002.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_ip_pacs002Component implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_ip_pacs002') form;
  @ViewChild('npss_ip_pacs002_memory65') element: ElementRef;
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

  
		//Properties of memory65
		this.ctrl.memory65 = {}
		this.ctrl.memory65.id = "RN01CN1"
		this.ctrl.memory65.desc = "IP Pacs002"
		this.ctrl.memory65.visible = false
		this.ctrl.memory65.label_name = "IP Pacs002"
		this.ctrl.memory65.df_code = "DF_1304_1665385905734"
		this.ctrl.memory65.df_description = "Column Group 1"
		this.ctrl.memory65.uictrl_code = "RICH_TXT"
		this.ctrl.memory65.target_column = "memory65"
		this.ctrl.memory65.data_type = "TEXT"
		this.ctrl.memory65.data_length = 0
		this.ctrl.memory65.zone_df_code = "DF_1304_1665385905734"
		this.ctrl.memory65.default_value = ""
		this.ctrl.memory65.is_memory_ctrl = "Y"
		this.ctrl.memory65.field_coordinates = ""
		this.ctrl.memory65.sub_details = ""
		this.ctrl.memory65.accept_char = ""
		this.ctrl.memory65.currency_format = ""
		this.ctrl.memory65.data_scale = ""
		this.ctrl.memory65.hide_label = false
		this.ctrl.memory65.depends_on = ""
		this.ctrl.memory65.placeholder = ""
		this.ctrl.memory65.dynamic_param = ""
		this.ctrl.memory65.style_code = ""
		this.ctrl.memory65.data_source = ""
		this.ctrl.memory65.image_association = ""
		this.ctrl.memory65.show = true
		this.ctrl.memory65.sub_content = ""
		this.ctrl.memory65.required = false
		this.ctrl.memory65.vld_rules = []
		this.ctrl.memory65.targetcolumn_lower = "memory65"
		this.ctrl.memory65.disabled = false
		this.ctrl.memory65.view_name = "f_npss_ip_pacs002"
		this.ctrl.memory65.ctrl_id = "npss_ip_pacs002_memory65"
		this.ctrl.npss_ip_pacs002_memory65 = {}
		this.ctrl.npss_ip_pacs002_memory65.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_ip_pacs002.model = {"MEMORY65":""}
		this.screen_instance[this.comp_id].f_npss_ip_pacs002.Meta = []
		this.screen_instance[this.comp_id].f_npss_ip_pacs002.dt_code = "dt_1304_1665384453253"
		this.screen_instance[this.comp_id].f_npss_ip_pacs002.dtt_code = "dtt_1304_1665385772257"
		this.screen_instance[this.comp_id].f_npss_ip_pacs002.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_ip_pacs002[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_ip_pacs002[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_ip_pacs002[control][property] = value;
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
    