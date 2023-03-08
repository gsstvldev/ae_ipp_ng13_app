/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28542 
Modified By     : Admin 
Modified Date   : 2023-Mar-08 6:23 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_exceptions
Form Name       : NPSS Excep Response UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_excep_response_ui',
  templateUrl: './f_npss_excep_response_ui.component.html',
  styleUrls: ['./f_npss_excep_response_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_excep_response_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_excep_response_ui') form;
  @ViewChild('npss_excep_response_ui_res_data') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665901130705"
	dtt_code : string = "dtt_1304_1674198360280"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of res_data
		this.ctrl.res_data = {}
		this.ctrl.res_data.id = "RN01CN1"
		this.ctrl.res_data.desc = "Response Data"
		this.ctrl.res_data.visible = false
		this.ctrl.res_data.label_name = "Response Data"
		this.ctrl.res_data.df_code = "DF_1304_1674198409820"
		this.ctrl.res_data.df_description = "Column Group 1"
		this.ctrl.res_data.uictrl_code = "RICH_TXT"
		this.ctrl.res_data.target_column = "RES_DATA"
		this.ctrl.res_data.data_type = "TEXT"
		this.ctrl.res_data.data_length = 80000
		this.ctrl.res_data.zone_df_code = "DF_1304_1674198409820"
		this.ctrl.res_data.default_value = ""
		this.ctrl.res_data.is_memory_ctrl = ""
		this.ctrl.res_data.field_coordinates = ""
		this.ctrl.res_data.sub_details = ""
		this.ctrl.res_data.accept_char = ""
		this.ctrl.res_data.currency_format = ""
		this.ctrl.res_data.data_scale = ""
		this.ctrl.res_data.hide_label = false
		this.ctrl.res_data.depends_on = ""
		this.ctrl.res_data.placeholder = ""
		this.ctrl.res_data.dynamic_param = ""
		this.ctrl.res_data.style_code = ""
		this.ctrl.res_data.data_source = ""
		this.ctrl.res_data.image_association = ""
		this.ctrl.res_data.show = true
		this.ctrl.res_data.sub_content = ""
		this.ctrl.res_data.required = false
		this.ctrl.res_data.vld_rules = []
		this.ctrl.res_data.targetcolumn_lower = "res_data"
		this.ctrl.res_data.disabled = false
		this.ctrl.res_data.view_name = "f_npss_excep_response_ui"
		this.ctrl.res_data.ctrl_id = "npss_excep_response_ui_res_data"
		this.ctrl.npss_excep_response_ui_res_data = {}
		this.ctrl.npss_excep_response_ui_res_data.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_excep_response_ui.model = {"RES_DATA":""}
		this.screen_instance[this.comp_id].f_npss_excep_response_ui.Meta = [{"CTLR_CODE":"RICH_TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"RES_DATA"}]
		this.screen_instance[this.comp_id].f_npss_excep_response_ui.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_excep_response_ui.dtt_code = "dtt_1304_1674198360280"
		this.screen_instance[this.comp_id].f_npss_excep_response_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_excep_response_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_excep_response_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_excep_response_ui[control][property] = value;
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
    