/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35310 
Modified By     : Admin 
Modified Date   : 2024-May-02 11:30 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_master_dashboard
Form Name       : NPSS Master Dashboard SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_master_dashboard_srch',
  templateUrl: './f_npss_master_dashboard_srch.component.html',
  styleUrls: ['./f_npss_master_dashboard_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_master_dashboard_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_master_dashboard_srch') form;
  @ViewChild('npss_master_dashboard_srch_memory63') element: ElementRef;
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

  
		//Properties of memory63
		this.ctrl.memory63 = {}
		this.ctrl.memory63.id = "RN01CN1"
		this.ctrl.memory63.desc = "Created date"
		this.ctrl.memory63.visible = true
		this.ctrl.memory63.label_name = "Created date"
		this.ctrl.memory63.df_code = "DF_1304_1665901396659"
		this.ctrl.memory63.df_description = "Column Group 1"
		this.ctrl.memory63.uictrl_code = "DTP"
		this.ctrl.memory63.target_column = "memory63"
		this.ctrl.memory63.data_type = "DATETIME"
		this.ctrl.memory63.data_length = 0
		this.ctrl.memory63.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory63.default_value = "setcurrentdate(),{}"
		this.ctrl.memory63.is_memory_ctrl = "Y"
		this.ctrl.memory63.field_coordinates = ""
		this.ctrl.memory63.sub_details = ""
		this.ctrl.memory63.accept_char = ""
		this.ctrl.memory63.currency_format = ""
		this.ctrl.memory63.data_scale = ""
		this.ctrl.memory63.binding_name = "CREATED_DATE"
		this.ctrl.memory63.hide_label = false
		this.ctrl.memory63.depends_on = ""
		this.ctrl.memory63.placeholder = ""
		this.ctrl.memory63.dynamic_param = ""
		this.ctrl.memory63.style_code = ""
		this.ctrl.memory63.data_source = ""
		this.ctrl.memory63.image_association = ""
		this.ctrl.memory63.show = true
		this.ctrl.memory63.sub_content = ""
		this.ctrl.memory63.required = false
		this.ctrl.memory63.vld_rules = []
		this.ctrl.memory63.targetcolumn_lower = "memory63"
		this.ctrl.memory63.disabled = false
		this.ctrl.memory63.view_name = "f_npss_master_dashboard_srch"
		this.ctrl.memory63.ctrl_id = "npss_master_dashboard_srch_memory63"
		this.ctrl.npss_master_dashboard_srch_memory63 = {}
		this.ctrl.npss_master_dashboard_srch_memory63.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory124
		this.ctrl.memory124 = {}
		this.ctrl.memory124.id = "RN01CN2"
		this.ctrl.memory124.desc = "Process Group"
		this.ctrl.memory124.visible = true
		this.ctrl.memory124.label_name = "Process Group"
		this.ctrl.memory124.df_code = "DF_1304_1665901396659"
		this.ctrl.memory124.df_description = "Column Group 1"
		this.ctrl.memory124.uictrl_code = "CBO"
		this.ctrl.memory124.target_column = "memory124"
		this.ctrl.memory124.data_type = "TEXT"
		this.ctrl.memory124.data_length = 64
		this.ctrl.memory124.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory124.default_value = ""
		this.ctrl.memory124.is_memory_ctrl = "Y"
		this.ctrl.memory124.field_coordinates = ""
		this.ctrl.memory124.sub_details = ""
		this.ctrl.memory124.accept_char = ""
		this.ctrl.memory124.currency_format = ""
		this.ctrl.memory124.data_scale = ""
		this.ctrl.memory124.binding_name = "PROCESSGROUP"
		this.ctrl.memory124.hide_label = false
		this.ctrl.memory124.depends_on = ""
		this.ctrl.memory124.placeholder = ""
		this.ctrl.memory124.dynamic_param = ""
		this.ctrl.memory124.style_code = ""
		this.ctrl.memory124.data_source = {"ds_code":"UDS_1304_1679510002946","ds_description":"NPSS Online Batch Static","rows":[{"value":"Select","code":""},{"value":"Online","code":"Online"},{"value":"Batch","code":"Batch"}],"type":"DPS_STATIC","value_member":"CODE","display_member":"VALUE","first_record_display":"Select","column_list":"CODE;VALUE","order_by":"","target_table":"","context":"","filters":[],"type_desc":"Combo Binding Static","conditional_operator":"CONTAINS","sel_columns":[]}
		this.ctrl.memory124.image_association = ""
		this.ctrl.memory124.show = true
		this.ctrl.memory124.sub_content = ""
		this.ctrl.memory124.required = false
		this.ctrl.memory124.vld_rules = []
		this.ctrl.memory124.targetcolumn_lower = "memory124"
		this.ctrl.memory124.disabled = false
		this.ctrl.memory124.view_name = "f_npss_master_dashboard_srch"
		this.ctrl.memory124.ctrl_id = "npss_master_dashboard_srch_memory124"
		this.ctrl.npss_master_dashboard_srch_memory124 = {}
		this.ctrl.npss_master_dashboard_srch_memory124.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_master_dashboard_srch.memory124 = {}
		this.screen_instance[this.comp_id].f_npss_master_dashboard_srch.model = {"MEMORY63":"setcurrentdate(),{}","MEMORY124":""}
		this.screen_instance[this.comp_id].f_npss_master_dashboard_srch.Meta = []
		this.screen_instance[this.comp_id].f_npss_master_dashboard_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_master_dashboard_srch.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_master_dashboard_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_master_dashboard_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_master_dashboard_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_master_dashboard_srch[control][property] = value;
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
    