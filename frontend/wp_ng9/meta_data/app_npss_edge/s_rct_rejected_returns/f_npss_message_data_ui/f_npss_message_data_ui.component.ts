/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34720 
Modified By     : Admin 
Modified Date   : 2024-Mar-12 6:57 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_rejected_returns
Form Name       : NPSS Message Data UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_message_data_ui',
  templateUrl: './f_npss_message_data_ui.component.html',
  styleUrls: ['./f_npss_message_data_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_message_data_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_message_data_ui') form;
  @ViewChild('npss_message_data_ui_message_data') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665901130705"
	dtt_code : string = "dtt_1304_1665903906193"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of message_data
		this.ctrl.message_data = {}
		this.ctrl.message_data.id = "RN01CN1"
		this.ctrl.message_data.desc = "Message Data"
		this.ctrl.message_data.visible = false
		this.ctrl.message_data.label_name = "Message Data"
		this.ctrl.message_data.df_code = "DF_1304_1665904016567"
		this.ctrl.message_data.df_description = "Column Group 1"
		this.ctrl.message_data.uictrl_code = "RICH_TXT"
		this.ctrl.message_data.target_column = "MESSAGE_DATA"
		this.ctrl.message_data.data_type = "TEXT"
		this.ctrl.message_data.data_length = 80000
		this.ctrl.message_data.zone_df_code = "DF_1304_1665904016567"
		this.ctrl.message_data.default_value = ""
		this.ctrl.message_data.is_memory_ctrl = ""
		this.ctrl.message_data.field_coordinates = ""
		this.ctrl.message_data.sub_details = ""
		this.ctrl.message_data.accept_char = ""
		this.ctrl.message_data.currency_format = ""
		this.ctrl.message_data.data_scale = ""
		this.ctrl.message_data.hide_label = false
		this.ctrl.message_data.depends_on = ""
		this.ctrl.message_data.placeholder = ""
		this.ctrl.message_data.dynamic_param = ""
		this.ctrl.message_data.style_code = ""
		this.ctrl.message_data.data_source = ""
		this.ctrl.message_data.image_association = ""
		this.ctrl.message_data.show = true
		this.ctrl.message_data.sub_content = ""
		this.ctrl.message_data.required = false
		this.ctrl.message_data.vld_rules = []
		this.ctrl.message_data.targetcolumn_lower = "message_data"
		this.ctrl.message_data.disabled = false
		this.ctrl.message_data.view_name = "f_npss_message_data_ui"
		this.ctrl.message_data.ctrl_id = "npss_message_data_ui_message_data"
		this.ctrl.npss_message_data_ui_message_data = {}
		this.ctrl.npss_message_data_ui_message_data.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_message_data_ui.model = {"MESSAGE_DATA":""}
		this.screen_instance[this.comp_id].f_npss_message_data_ui.Meta = [{"CTLR_CODE":"RICH_TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"MESSAGE_DATA"}]
		this.screen_instance[this.comp_id].f_npss_message_data_ui.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_message_data_ui.dtt_code = "dtt_1304_1665903906193"
		this.screen_instance[this.comp_id].f_npss_message_data_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_message_data_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_message_data_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_message_data_ui[control][property] = value;
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
    