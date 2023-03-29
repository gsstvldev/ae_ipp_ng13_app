/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28958 
Modified By     : Admin 
Modified Date   : 2023-Mar-29 13:6 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_exceptions
Form Name       : NPSS Excep Error UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_excep_error_ui',
  templateUrl: './f_npss_excep_error_ui.component.html',
  styleUrls: ['./f_npss_excep_error_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_excep_error_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_excep_error_ui') form;
  @ViewChild('npss_excep_error_ui_err_datacore') element: ElementRef;
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

  
		//Properties of err_datacore
		this.ctrl.err_datacore = {}
		this.ctrl.err_datacore.id = "RN01CN1"
		this.ctrl.err_datacore.desc = "Err Datacore"
		this.ctrl.err_datacore.visible = false
		this.ctrl.err_datacore.label_name = "Err Datacore"
		this.ctrl.err_datacore.df_code = "DF_1304_1674198409820"
		this.ctrl.err_datacore.df_description = "Column Group 1"
		this.ctrl.err_datacore.uictrl_code = "RICH_TXT"
		this.ctrl.err_datacore.target_column = "ERR_DATACORE"
		this.ctrl.err_datacore.data_type = "TEXT"
		this.ctrl.err_datacore.data_length = 80000
		this.ctrl.err_datacore.zone_df_code = "DF_1304_1674198409820"
		this.ctrl.err_datacore.default_value = ""
		this.ctrl.err_datacore.is_memory_ctrl = ""
		this.ctrl.err_datacore.field_coordinates = ""
		this.ctrl.err_datacore.sub_details = ""
		this.ctrl.err_datacore.accept_char = ""
		this.ctrl.err_datacore.currency_format = ""
		this.ctrl.err_datacore.data_scale = ""
		this.ctrl.err_datacore.hide_label = false
		this.ctrl.err_datacore.depends_on = ""
		this.ctrl.err_datacore.placeholder = ""
		this.ctrl.err_datacore.dynamic_param = ""
		this.ctrl.err_datacore.style_code = ""
		this.ctrl.err_datacore.data_source = ""
		this.ctrl.err_datacore.image_association = ""
		this.ctrl.err_datacore.show = true
		this.ctrl.err_datacore.sub_content = ""
		this.ctrl.err_datacore.required = false
		this.ctrl.err_datacore.vld_rules = []
		this.ctrl.err_datacore.targetcolumn_lower = "err_datacore"
		this.ctrl.err_datacore.disabled = false
		this.ctrl.err_datacore.view_name = "f_npss_excep_error_ui"
		this.ctrl.err_datacore.ctrl_id = "npss_excep_error_ui_err_datacore"
		this.ctrl.npss_excep_error_ui_err_datacore = {}
		this.ctrl.npss_excep_error_ui_err_datacore.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_excep_error_ui.model = {"ERR_DATACORE":""}
		this.screen_instance[this.comp_id].f_npss_excep_error_ui.Meta = [{"CTLR_CODE":"RICH_TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"ERR_DATACORE"}]
		this.screen_instance[this.comp_id].f_npss_excep_error_ui.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_excep_error_ui.dtt_code = "dtt_1304_1674198360280"
		this.screen_instance[this.comp_id].f_npss_excep_error_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_excep_error_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_excep_error_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_excep_error_ui[control][property] = value;
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
    