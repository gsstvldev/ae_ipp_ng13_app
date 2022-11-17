/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26950 
Modified By     : Admin 
Modified Date   : 2022-Nov-17 15:46 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_reversal
Form Name       : NPSS PL Change RTN Reason UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_pl_change_rtn_reason_ui',
  templateUrl: './f_npss_pl_change_rtn_reason_ui.component.html',
  styleUrls: ['./f_npss_pl_change_rtn_reason_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_pl_change_rtn_reason_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_pl_change_rtn_reason_ui') form;
  @ViewChild('npss_pl_change_rtn_reason_ui_t24_return_code') element: ElementRef;
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

  
		//Properties of t24_return_code
		this.ctrl.t24_return_code = {}
		this.ctrl.t24_return_code.id = "998a0523-61f6-4489-87b4-e1d922b4b2e7_1666864646957"
		this.ctrl.t24_return_code.desc = "T24 Return Reason"
		this.ctrl.t24_return_code.visible = true
		this.ctrl.t24_return_code.label_name = "T24 Return Reason"
		this.ctrl.t24_return_code.df_code = "DF_1304_1665905157963"
		this.ctrl.t24_return_code.df_description = "Column Group 1"
		this.ctrl.t24_return_code.uictrl_code = "CBO"
		this.ctrl.t24_return_code.target_column = "T24_RETURN_CODE"
		this.ctrl.t24_return_code.data_type = "TEXT"
		this.ctrl.t24_return_code.data_length = 16
		this.ctrl.t24_return_code.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.t24_return_code.default_value = ""
		this.ctrl.t24_return_code.is_memory_ctrl = ""
		this.ctrl.t24_return_code.field_coordinates = ""
		this.ctrl.t24_return_code.sub_details = ""
		this.ctrl.t24_return_code.accept_char = ""
		this.ctrl.t24_return_code.currency_format = ""
		this.ctrl.t24_return_code.data_scale = ""
		this.ctrl.t24_return_code.hide_label = false
		this.ctrl.t24_return_code.depends_on = ""
		this.ctrl.t24_return_code.placeholder = ""
		this.ctrl.t24_return_code.dynamic_param = ""
		this.ctrl.t24_return_code.style_code = ""
		this.ctrl.t24_return_code.data_source = {"ds_code":"UDS_1304_1666862953229","ds_description":"NPSS T24 Source Return Mapping SQL CDB","rows":[],"type":"DPS_TABLE","value_member":"SOURCE_RETURN_CODE","display_member":"SRC_CODE_DESC","first_record_display":"Select","column_list":"","order_by":"SOURCE_RETURN_CODE","target_table":"NPSS_VW_SRC_RTN_MAP","context":"","filters":[{"filter_name":"Filter1","binding_name":"SOURCE_SYSTEM","id":"DF_1668695315581","binding_value":"T24","source_name":"SOURCE_SYSTEM","source_value":"T24","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter2","binding_name":"TENANT_ID","id":"DF_1668695315581","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"},{"filter_name":"Filter3","binding_name":"STATUS","id":"DF_1668695315581","binding_value":"APPROVED","source_name":"STATUS","source_value":"APPROVED","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"SOURCE_SYSTEM","binding_value":"T24","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"T24"},{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"},{"operators":"=","data_type":"TEXT","binding_name":"STATUS","binding_value":"APPROVED","sort_order":3,"conjuction_operator":"","is_cluster_key":"N","temp_value":"APPROVED","filter_values":"HARDCODED"}]},"query":"(SOURCE_SYSTEM = T24 AND TENANT_ID = SESSION_LEVEL.TENANT_ID AND STATUS = APPROVED)"},"sel_columns":[],"need_first_item_selection":false,"has_parent":false}
		this.ctrl.t24_return_code.image_association = ""
		this.ctrl.t24_return_code.show = true
		this.ctrl.t24_return_code.sub_content = ""
		this.ctrl.t24_return_code.required = false
		this.ctrl.t24_return_code.vld_rules = []
		this.ctrl.t24_return_code.targetcolumn_lower = "t24_return_code"
		this.ctrl.t24_return_code.disabled = false
		this.ctrl.t24_return_code.view_name = "f_npss_pl_change_rtn_reason_ui"
		this.ctrl.t24_return_code.ctrl_id = "npss_pl_change_rtn_reason_ui_t24_return_code"
		this.ctrl.npss_pl_change_rtn_reason_ui_t24_return_code = {}
		this.ctrl.npss_pl_change_rtn_reason_ui_t24_return_code.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_pl_change_rtn_reason_ui.t24_return_code = {}
	
		//Properties of cbuae_return_code
		this.ctrl.cbuae_return_code = {}
		this.ctrl.cbuae_return_code.id = "c394dc67-6924-4eef-8d73-8d0680584602_1666864646958"
		this.ctrl.cbuae_return_code.desc = "CBUAE Return Reason"
		this.ctrl.cbuae_return_code.visible = true
		this.ctrl.cbuae_return_code.label_name = "CBUAE Return Reason"
		this.ctrl.cbuae_return_code.df_code = "DF_1304_1665905157963"
		this.ctrl.cbuae_return_code.df_description = "Column Group 1"
		this.ctrl.cbuae_return_code.uictrl_code = "CBO"
		this.ctrl.cbuae_return_code.target_column = "CBUAE_RETURN_CODE"
		this.ctrl.cbuae_return_code.data_type = "TEXT"
		this.ctrl.cbuae_return_code.data_length = 16
		this.ctrl.cbuae_return_code.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.cbuae_return_code.default_value = ""
		this.ctrl.cbuae_return_code.is_memory_ctrl = ""
		this.ctrl.cbuae_return_code.field_coordinates = ""
		this.ctrl.cbuae_return_code.sub_details = ""
		this.ctrl.cbuae_return_code.accept_char = ""
		this.ctrl.cbuae_return_code.currency_format = ""
		this.ctrl.cbuae_return_code.data_scale = ""
		this.ctrl.cbuae_return_code.hide_label = false
		this.ctrl.cbuae_return_code.depends_on = ""
		this.ctrl.cbuae_return_code.placeholder = ""
		this.ctrl.cbuae_return_code.dynamic_param = ""
		this.ctrl.cbuae_return_code.style_code = ""
		this.ctrl.cbuae_return_code.data_source = {"ds_code":"UDS_1304_1666863101383","ds_description":"NPSS CBUAE Destination Return Mapping SQL CDB","rows":[],"type":"DPS_TABLE","value_member":"DESTINATION_RETURN_CODE","display_member":"DST_CODE_DESC","first_record_display":"Select","column_list":"","order_by":"DESTINATION_RETURN_CODE","target_table":"NPSS_VW_DST_RTN_MAP","context":"","filters":[{"filter_name":"Filter1","binding_name":"DESTINATION_SYSTEM","id":"DF_1668695301775","binding_value":"CBUAE","source_name":"DESTINATION_SYSTEM","source_value":"CBUAE","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter2","binding_name":"TENANT_ID","id":"DF_1668695301775","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"},{"filter_name":"Filter3","binding_name":"STATUS","id":"DF_1668695301776","binding_value":"APPROVED","source_name":"STATUS","source_value":"APPROVED","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"DESTINATION_SYSTEM","binding_value":"CBUAE","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"CBUAE"},{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"},{"operators":"=","data_type":"TEXT","binding_name":"STATUS","binding_value":"APPROVED","sort_order":3,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"APPROVED"}]},"query":"(DESTINATION_SYSTEM = CBUAE AND TENANT_ID = SESSION_LEVEL.TENANT_ID AND STATUS = APPROVED)"},"sel_columns":[],"need_first_item_selection":false,"has_parent":false}
		this.ctrl.cbuae_return_code.image_association = ""
		this.ctrl.cbuae_return_code.show = true
		this.ctrl.cbuae_return_code.sub_content = ""
		this.ctrl.cbuae_return_code.required = false
		this.ctrl.cbuae_return_code.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Select the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.cbuae_return_code.targetcolumn_lower = "cbuae_return_code"
		this.ctrl.cbuae_return_code.disabled = false
		this.ctrl.cbuae_return_code.view_name = "f_npss_pl_change_rtn_reason_ui"
		this.ctrl.cbuae_return_code.ctrl_id = "npss_pl_change_rtn_reason_ui_cbuae_return_code"
		this.ctrl.npss_pl_change_rtn_reason_ui_cbuae_return_code = {}
		this.ctrl.npss_pl_change_rtn_reason_ui_cbuae_return_code.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_pl_change_rtn_reason_ui.cbuae_return_code = {}
		this.screen_instance[this.comp_id].f_npss_pl_change_rtn_reason_ui.model = {"T24_RETURN_CODE":"","CBUAE_RETURN_CODE":""}
		this.screen_instance[this.comp_id].f_npss_pl_change_rtn_reason_ui.Meta = [{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"T24_RETURN_CODE"},{"CTLR_CODE":"CBO","DATA_TYPE":"TEXT","TARGET_COLUMN":"CBUAE_RETURN_CODE"}]
		this.screen_instance[this.comp_id].f_npss_pl_change_rtn_reason_ui.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_pl_change_rtn_reason_ui.dtt_code = "dtt_1304_1665905039255"
		this.screen_instance[this.comp_id].f_npss_pl_change_rtn_reason_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_pl_change_rtn_reason_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_pl_change_rtn_reason_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_pl_change_rtn_reason_ui[control][property] = value;
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
    