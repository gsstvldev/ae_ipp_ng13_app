/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35160 
Modified By     : Admin 
Modified Date   : 2024-Apr-16 5:31 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_manual_verification
Form Name       : NPSS Force post Flag UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_force_post_flag_ui',
  templateUrl: './f_npss_force_post_flag_ui.component.html',
  styleUrls: ['./f_npss_force_post_flag_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_force_post_flag_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_force_post_flag_ui') form;
  @ViewChild('npss_force_post_flag_ui_force_post_flag') element: ElementRef;
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

  
		//Properties of force_post_flag
		this.ctrl.force_post_flag = {}
		this.ctrl.force_post_flag.id = "RN01CN1"
		this.ctrl.force_post_flag.desc = "Force Post Flag"
		this.ctrl.force_post_flag.visible = false
		this.ctrl.force_post_flag.label_name = "Force Post Flag"
		this.ctrl.force_post_flag.df_code = "DF_1304_1665901396659"
		this.ctrl.force_post_flag.df_description = "Column Group 1"
		this.ctrl.force_post_flag.uictrl_code = "CBO"
		this.ctrl.force_post_flag.target_column = "FORCE_POST_FLAG"
		this.ctrl.force_post_flag.data_type = "TEXT"
		this.ctrl.force_post_flag.data_length = 1
		this.ctrl.force_post_flag.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.force_post_flag.default_value = ""
		this.ctrl.force_post_flag.is_memory_ctrl = ""
		this.ctrl.force_post_flag.field_coordinates = ""
		this.ctrl.force_post_flag.sub_details = ""
		this.ctrl.force_post_flag.accept_char = ""
		this.ctrl.force_post_flag.currency_format = ""
		this.ctrl.force_post_flag.data_scale = ""
		this.ctrl.force_post_flag.hide_label = false
		this.ctrl.force_post_flag.depends_on = ""
		this.ctrl.force_post_flag.placeholder = ""
		this.ctrl.force_post_flag.dynamic_param = ""
		this.ctrl.force_post_flag.style_code = ""
		this.ctrl.force_post_flag.data_source = {"ds_code":"UDS_1304_1679465433745","ds_description":"NPSS Force Post Flag Static","rows":[{"value":"Y","code":"Y"}],"type":"DPS_STATIC","value_member":"CODE","display_member":"VALUE","first_record_display":"","column_list":"CODE;VALUE","order_by":"","target_table":"","context":"","filters":[],"type_desc":"Combo Binding Static","conditional_operator":"CONTAINS","need_first_item_selection":true,"sel_columns":[]}
		this.ctrl.force_post_flag.image_association = ""
		this.ctrl.force_post_flag.show = true
		this.ctrl.force_post_flag.sub_content = ""
		this.ctrl.force_post_flag.required = false
		this.ctrl.force_post_flag.vld_rules = []
		this.ctrl.force_post_flag.targetcolumn_lower = "force_post_flag"
		this.ctrl.force_post_flag.disabled = false
		this.ctrl.force_post_flag.view_name = "f_npss_force_post_flag_ui"
		this.ctrl.force_post_flag.ctrl_id = "npss_force_post_flag_ui_force_post_flag"
		this.ctrl.npss_force_post_flag_ui_force_post_flag = {}
		this.ctrl.npss_force_post_flag_ui_force_post_flag.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_force_post_flag_ui.force_post_flag = {}
		this.screen_instance[this.comp_id].f_npss_force_post_flag_ui.model = {"FORCE_POST_FLAG":""}
		this.screen_instance[this.comp_id].f_npss_force_post_flag_ui.Meta = [{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"FORCE_POST_FLAG"}]
		this.screen_instance[this.comp_id].f_npss_force_post_flag_ui.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_force_post_flag_ui.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_force_post_flag_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_force_post_flag_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_force_post_flag_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_force_post_flag_ui[control][property] = value;
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
    