/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 32156 
Modified By     : Admin 
Modified Date   : 2023-Sep-13 12:33 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_op_rct_reversal
Form Name       : NPSS Send to maker UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_send_to_maker_ui',
  templateUrl: './f_npss_send_to_maker_ui.component.html',
  styleUrls: ['./f_npss_send_to_maker_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_send_to_maker_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_send_to_maker_ui') form;
  @ViewChild('npss_send_to_maker_ui_memory90') element: ElementRef;
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

  
		//Properties of memory90
		this.ctrl.memory90 = {}
		this.ctrl.memory90.id = "2086ea74-ec42-4957-a42a-ad4ea056ab21_1672138563509"
		this.ctrl.memory90.desc = "Remarks"
		this.ctrl.memory90.visible = false
		this.ctrl.memory90.label_name = "Remarks"
		this.ctrl.memory90.df_code = "DF_1304_1665901396659"
		this.ctrl.memory90.df_description = "Column Group 1"
		this.ctrl.memory90.uictrl_code = "TXT"
		this.ctrl.memory90.target_column = "memory90"
		this.ctrl.memory90.data_type = "TEXT"
		this.ctrl.memory90.data_length = 0
		this.ctrl.memory90.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory90.default_value = ""
		this.ctrl.memory90.is_memory_ctrl = "Y"
		this.ctrl.memory90.field_coordinates = ""
		this.ctrl.memory90.sub_details = ""
		this.ctrl.memory90.accept_char = ""
		this.ctrl.memory90.currency_format = ""
		this.ctrl.memory90.data_scale = ""
		this.ctrl.memory90.hide_label = false
		this.ctrl.memory90.depends_on = ""
		this.ctrl.memory90.placeholder = ""
		this.ctrl.memory90.dynamic_param = ""
		this.ctrl.memory90.style_code = ""
		this.ctrl.memory90.data_source = ""
		this.ctrl.memory90.image_association = ""
		this.ctrl.memory90.show = true
		this.ctrl.memory90.sub_content = ""
		this.ctrl.memory90.required = false
		this.ctrl.memory90.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.memory90.targetcolumn_lower = "memory90"
		this.ctrl.memory90.disabled = false
		this.ctrl.memory90.view_name = "f_npss_send_to_maker_ui"
		this.ctrl.memory90.ctrl_id = "npss_send_to_maker_ui_memory90"
		this.ctrl.npss_send_to_maker_ui_memory90 = {}
		this.ctrl.npss_send_to_maker_ui_memory90.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_send_to_maker_ui.model = {"MEMORY90":""}
		this.screen_instance[this.comp_id].f_npss_send_to_maker_ui.Meta = []
		this.screen_instance[this.comp_id].f_npss_send_to_maker_ui.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_send_to_maker_ui.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_send_to_maker_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_send_to_maker_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_send_to_maker_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_send_to_maker_ui[control][property] = value;
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
    