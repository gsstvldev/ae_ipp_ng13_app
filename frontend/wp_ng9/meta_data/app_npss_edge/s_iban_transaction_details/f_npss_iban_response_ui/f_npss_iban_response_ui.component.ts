/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26938 
Modified By     : Admin 
Modified Date   : 2022-Nov-17 13:46 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_iban_transaction_details
Form Name       : NPSS IBAN Response UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_iban_response_ui',
  templateUrl: './f_npss_iban_response_ui.component.html',
  styleUrls: ['./f_npss_iban_response_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_iban_response_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_iban_response_ui') form;
  @ViewChild('npss_iban_response_ui_memory11') element: ElementRef;
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

  
		//Properties of memory11
		this.ctrl.memory11 = {}
		this.ctrl.memory11.id = "71635419-871e-4571-8c70-61215ec82da9_1668520983671"
		this.ctrl.memory11.desc = "Response Data"
		this.ctrl.memory11.visible = false
		this.ctrl.memory11.label_name = "Response Data"
		this.ctrl.memory11.df_code = "DF_1304_1665905157963"
		this.ctrl.memory11.df_description = "Column Group 1"
		this.ctrl.memory11.uictrl_code = "RICH_TXT"
		this.ctrl.memory11.target_column = "memory11"
		this.ctrl.memory11.data_type = "TEXT"
		this.ctrl.memory11.data_length = 0
		this.ctrl.memory11.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.memory11.default_value = ""
		this.ctrl.memory11.is_memory_ctrl = "Y"
		this.ctrl.memory11.field_coordinates = ""
		this.ctrl.memory11.sub_details = ""
		this.ctrl.memory11.accept_char = ""
		this.ctrl.memory11.currency_format = ""
		this.ctrl.memory11.data_scale = ""
		this.ctrl.memory11.hide_label = false
		this.ctrl.memory11.depends_on = ""
		this.ctrl.memory11.placeholder = ""
		this.ctrl.memory11.dynamic_param = ""
		this.ctrl.memory11.style_code = ""
		this.ctrl.memory11.data_source = ""
		this.ctrl.memory11.image_association = ""
		this.ctrl.memory11.show = true
		this.ctrl.memory11.sub_content = ""
		this.ctrl.memory11.required = false
		this.ctrl.memory11.vld_rules = []
		this.ctrl.memory11.targetcolumn_lower = "memory11"
		this.ctrl.memory11.disabled = false
		this.ctrl.memory11.view_name = "f_npss_iban_response_ui"
		this.ctrl.memory11.ctrl_id = "npss_iban_response_ui_memory11"
		this.ctrl.npss_iban_response_ui_memory11 = {}
		this.ctrl.npss_iban_response_ui_memory11.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_iban_response_ui.model = {"MEMORY11":""}
		this.screen_instance[this.comp_id].f_npss_iban_response_ui.Meta = []
		this.screen_instance[this.comp_id].f_npss_iban_response_ui.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_iban_response_ui.dtt_code = "dtt_1304_1665905039255"
		this.screen_instance[this.comp_id].f_npss_iban_response_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_iban_response_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_iban_response_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_iban_response_ui[control][property] = value;
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
    