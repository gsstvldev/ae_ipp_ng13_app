/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27345 
Modified By     : Admin 
Modified Date   : 2022-Dec-14 13:35 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_transaction_details
Form Name       : Request UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_request_ui',
  templateUrl: './f_request_ui.component.html',
  styleUrls: ['./f_request_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_request_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_request_ui') form;
  @ViewChild('request_ui_memory10') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665901130705"
	dtt_code : string = "dtt_1304_1665905039255"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of memory10
		this.ctrl.memory10 = {}
		this.ctrl.memory10.id = "RN01CN1"
		this.ctrl.memory10.desc = "Request Data"
		this.ctrl.memory10.visible = false
		this.ctrl.memory10.label_name = "Request Data"
		this.ctrl.memory10.df_code = "DF_1304_1665905157963"
		this.ctrl.memory10.df_description = "Column Group 1"
		this.ctrl.memory10.uictrl_code = "RICH_TXT"
		this.ctrl.memory10.target_column = "memory10"
		this.ctrl.memory10.data_type = "TEXT"
		this.ctrl.memory10.data_length = 0
		this.ctrl.memory10.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.memory10.default_value = ""
		this.ctrl.memory10.is_memory_ctrl = "Y"
		this.ctrl.memory10.field_coordinates = ""
		this.ctrl.memory10.sub_details = ""
		this.ctrl.memory10.accept_char = ""
		this.ctrl.memory10.currency_format = ""
		this.ctrl.memory10.data_scale = ""
		this.ctrl.memory10.hide_label = false
		this.ctrl.memory10.depends_on = ""
		this.ctrl.memory10.placeholder = ""
		this.ctrl.memory10.dynamic_param = ""
		this.ctrl.memory10.style_code = ""
		this.ctrl.memory10.data_source = ""
		this.ctrl.memory10.image_association = ""
		this.ctrl.memory10.show = true
		this.ctrl.memory10.sub_content = ""
		this.ctrl.memory10.required = false
		this.ctrl.memory10.vld_rules = []
		this.ctrl.memory10.targetcolumn_lower = "memory10"
		this.ctrl.memory10.disabled = false
		this.ctrl.memory10.view_name = "f_request_ui"
		this.ctrl.memory10.ctrl_id = "request_ui_memory10"
		this.ctrl.request_ui_memory10 = {}
		this.ctrl.request_ui_memory10.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_request_ui.model = {"MEMORY10":""}
		this.screen_instance[this.comp_id].f_request_ui.Meta = []
		this.screen_instance[this.comp_id].f_request_ui.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_request_ui.dtt_code = "dtt_1304_1665905039255"
		this.screen_instance[this.comp_id].f_request_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_request_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_request_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_request_ui[control][property] = value;
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
    