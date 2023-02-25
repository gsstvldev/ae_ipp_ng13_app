/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28274 
Modified By     : Admin 
Modified Date   : 2023-Feb-25 5:10 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_process_logs
Form Name       : Created Date SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_created_date_srch',
  templateUrl: './f_created_date_srch.component.html',
  styleUrls: ['./f_created_date_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_created_date_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_created_date_srch') form;
  @ViewChild('created_date_srch_memory7') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665901130705"
	dtt_code : string = "dtt_1304_1670589169341"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of memory7
		this.ctrl.memory7 = {}
		this.ctrl.memory7.id = "RN01CN1"
		this.ctrl.memory7.desc = "Created Date"
		this.ctrl.memory7.visible = true
		this.ctrl.memory7.label_name = "Created Date"
		this.ctrl.memory7.df_code = "DF_1304_1670589236195"
		this.ctrl.memory7.df_description = "Column Group 1"
		this.ctrl.memory7.uictrl_code = "CDN_DATE"
		this.ctrl.memory7.target_column = "memory7"
		this.ctrl.memory7.data_type = "DATETIME"
		this.ctrl.memory7.data_length = 0
		this.ctrl.memory7.zone_df_code = "DF_1304_1670589236195"
		this.ctrl.memory7.default_value = "setcurrentdate(),{}"
		this.ctrl.memory7.is_memory_ctrl = "Y"
		this.ctrl.memory7.field_coordinates = ""
		this.ctrl.memory7.sub_details = ""
		this.ctrl.memory7.accept_char = ""
		this.ctrl.memory7.currency_format = ""
		this.ctrl.memory7.data_scale = ""
		this.ctrl.memory7.binding_name = "CREATED_DATE"
		this.ctrl.memory7.hide_label = false
		this.ctrl.memory7.depends_on = ""
		this.ctrl.memory7.placeholder = ""
		this.ctrl.memory7.dynamic_param = ""
		this.ctrl.memory7.style_code = ""
		this.ctrl.memory7.data_source = ""
		this.ctrl.memory7.image_association = ""
		this.ctrl.memory7.show = true
		this.ctrl.memory7.sub_content = ""
		this.ctrl.memory7.required = false
		this.ctrl.memory7.vld_rules = []
		this.ctrl.memory7.targetcolumn_lower = "memory7"
		this.ctrl.memory7.disabled = false
		this.ctrl.memory7.view_name = "f_created_date_srch"
		this.ctrl.memory7.ctrl_id = "created_date_srch_memory7"
		this.ctrl.created_date_srch_memory7 = {}
		this.ctrl.created_date_srch_memory7.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory11
		this.ctrl.memory11 = {}
		this.ctrl.memory11.id = "RN01CN2"
		this.ctrl.memory11.desc = "API"
		this.ctrl.memory11.visible = true
		this.ctrl.memory11.label_name = "API"
		this.ctrl.memory11.df_code = "DF_1304_1670589236195"
		this.ctrl.memory11.df_description = "Column Group 1"
		this.ctrl.memory11.uictrl_code = "TXT"
		this.ctrl.memory11.target_column = "memory11"
		this.ctrl.memory11.data_type = "TEXT"
		this.ctrl.memory11.data_length = 0
		this.ctrl.memory11.zone_df_code = "DF_1304_1670589236195"
		this.ctrl.memory11.default_value = ""
		this.ctrl.memory11.is_memory_ctrl = "Y"
		this.ctrl.memory11.field_coordinates = ""
		this.ctrl.memory11.sub_details = ""
		this.ctrl.memory11.accept_char = ""
		this.ctrl.memory11.currency_format = ""
		this.ctrl.memory11.data_scale = ""
		this.ctrl.memory11.binding_name = "API"
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
		this.ctrl.memory11.view_name = "f_created_date_srch"
		this.ctrl.memory11.ctrl_id = "created_date_srch_memory11"
		this.ctrl.created_date_srch_memory11 = {}
		this.ctrl.created_date_srch_memory11.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_created_date_srch.model = {"MEMORY7":"setcurrentdate(),{}","MEMORY11":""}
		this.screen_instance[this.comp_id].f_created_date_srch.Meta = []
		this.screen_instance[this.comp_id].f_created_date_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_created_date_srch.dtt_code = "dtt_1304_1670589169341"
		this.screen_instance[this.comp_id].f_created_date_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_created_date_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_created_date_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_created_date_srch[control][property] = value;
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
    