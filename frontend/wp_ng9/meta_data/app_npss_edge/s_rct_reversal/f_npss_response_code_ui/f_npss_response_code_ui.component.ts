/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26999 
Modified By     : Admin 
Modified Date   : 2022-Nov-25 11:37 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_reversal
Form Name       : NPSS Response Code UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_response_code_ui',
  templateUrl: './f_npss_response_code_ui.component.html',
  styleUrls: ['./f_npss_response_code_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_response_code_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_response_code_ui') form;
  @ViewChild('npss_response_code_ui_response_code') element: ElementRef;
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

  
		//Properties of response_code
		this.ctrl.response_code = {}
		this.ctrl.response_code.id = "RN01CN1"
		this.ctrl.response_code.desc = "Response Code"
		this.ctrl.response_code.visible = false
		this.ctrl.response_code.label_name = "Response Code"
		this.ctrl.response_code.df_code = "DF_1304_1665905157963"
		this.ctrl.response_code.df_description = "Column Group 1"
		this.ctrl.response_code.uictrl_code = "CBO"
		this.ctrl.response_code.target_column = "RESPONSE_CODE"
		this.ctrl.response_code.data_type = "TEXT"
		this.ctrl.response_code.data_length = 64
		this.ctrl.response_code.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.response_code.default_value = ""
		this.ctrl.response_code.is_memory_ctrl = ""
		this.ctrl.response_code.field_coordinates = ""
		this.ctrl.response_code.sub_details = ""
		this.ctrl.response_code.accept_char = ""
		this.ctrl.response_code.currency_format = ""
		this.ctrl.response_code.data_scale = ""
		this.ctrl.response_code.hide_label = false
		this.ctrl.response_code.depends_on = ""
		this.ctrl.response_code.placeholder = ""
		this.ctrl.response_code.dynamic_param = ""
		this.ctrl.response_code.style_code = ""
		this.ctrl.response_code.data_source = {"ds_code":"UDS_1304_1668695334844","ds_description":"NPSS Error Code CDB","rows":[],"type":"DPS_TABLE","value_member":"ERROR_CODE","display_member":"ERROR_DESC","first_record_display":"Select","column_list":"","order_by":"ERROR_CODE","target_table":"NPSS_VW_SQL_ERROR_CODE","context":"","filters":[{"filter_name":"Filter1","binding_name":"TENANT_ID","id":"DF_1668696143536","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"},{"filter_name":"Filter2","binding_name":"STATUS","id":"DF_1668696143536","binding_value":"APPROVED","source_name":"STATUS","source_value":"APPROVED","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter3","binding_name":"PROCESSING_SYSTEM","id":"DF_1668696143536","binding_value":"CBUAE","source_name":"PROCESSING_SYSTEM","source_value":"CBUAE","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"},{"operators":"=","data_type":"TEXT","binding_name":"STATUS","binding_value":"APPROVED","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"APPROVED"},{"operators":"=","data_type":"TEXT","binding_name":"PROCESSING_SYSTEM","binding_value":"CBUAE","sort_order":3,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"CBUAE"}]},"query":"(TENANT_ID = SESSION_LEVEL.TENANT_ID AND STATUS = APPROVED AND PROCESSING_SYSTEM = CBUAE)"},"sel_columns":[],"need_first_item_selection":false,"has_parent":false}
		this.ctrl.response_code.image_association = ""
		this.ctrl.response_code.show = true
		this.ctrl.response_code.sub_content = ""
		this.ctrl.response_code.required = false
		this.ctrl.response_code.vld_rules = []
		this.ctrl.response_code.targetcolumn_lower = "response_code"
		this.ctrl.response_code.disabled = false
		this.ctrl.response_code.view_name = "f_npss_response_code_ui"
		this.ctrl.response_code.ctrl_id = "npss_response_code_ui_response_code"
		this.ctrl.npss_response_code_ui_response_code = {}
		this.ctrl.npss_response_code_ui_response_code.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_response_code_ui.response_code = {}
		this.screen_instance[this.comp_id].f_npss_response_code_ui.model = {"RESPONSE_CODE":""}
		this.screen_instance[this.comp_id].f_npss_response_code_ui.Meta = [{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"RESPONSE_CODE"}]
		this.screen_instance[this.comp_id].f_npss_response_code_ui.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_response_code_ui.dtt_code = "dtt_1304_1665905039255"
		this.screen_instance[this.comp_id].f_npss_response_code_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_response_code_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_response_code_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_response_code_ui[control][property] = value;
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
    