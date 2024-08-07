/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35880 
Modified By     : Admin 
Modified Date   : 2024-Jun-28 8:1 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_reversal_non_aed
Form Name       : NPSS Reject UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_reject_ui',
  templateUrl: './f_npss_reject_ui.component.html',
  styleUrls: ['./f_npss_reject_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_reject_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_reject_ui') form;
  @ViewChild('npss_reject_ui_cbuae_return_code') element: ElementRef;
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

  
		//Properties of cbuae_return_code
		this.ctrl.cbuae_return_code = {}
		this.ctrl.cbuae_return_code.id = "d92cf835-e691-4a4e-bf10-ba77a1b6fedd_1671282374641"
		this.ctrl.cbuae_return_code.desc = "CBUAE Return Reason"
		this.ctrl.cbuae_return_code.visible = true
		this.ctrl.cbuae_return_code.label_name = "CBUAE Return Reason"
		this.ctrl.cbuae_return_code.df_code = "DF_1304_1665905157963"
		this.ctrl.cbuae_return_code.df_description = "Column Group 1"
		this.ctrl.cbuae_return_code.uictrl_code = "CBO_LIST"
		this.ctrl.cbuae_return_code.target_column = "CBUAE_RETURN_CODE"
		this.ctrl.cbuae_return_code.data_type = "TEXT"
		this.ctrl.cbuae_return_code.data_length = 1024
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
		this.ctrl.cbuae_return_code.dynamic_param = {"mode":"Load On PageLoad","description_column":""}
		this.ctrl.cbuae_return_code.style_code = ""
		this.ctrl.cbuae_return_code.data_source = {"ds_code":"UDS_1304_1666863101383","ds_description":"NPSS CBUAE Destination Return Mapping SQL CDB","rows":[],"type":"DPS_TABLE","value_member":"RETURN_CODE","display_member":"DST_CODE_DESC","first_record_display":"Select","column_list":"","order_by":"RETURN_CODE","target_table":"NPSS_VW_DST_RTN_MAP","context":"","filters":[{"filter_name":"Filter1","binding_name":"PROCESSING_SYSTEM","id":"DF_1702387731468","binding_value":"CBUAE","source_name":"PROCESSING_SYSTEM","source_value":"CBUAE","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter2","binding_name":"TENANT_ID","id":"DF_1702387731468","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"},{"filter_name":"Filter3","binding_name":"NEED_SYNC","id":"DF_1702387731468","binding_value":"Y","source_name":"NEED_SYNC","source_value":"Y","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"PROCESSING_SYSTEM","binding_value":"CBUAE","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"CBUAE"},{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"},{"operators":"=","data_type":"TEXT","binding_name":"NEED_SYNC","binding_value":"Y","sort_order":3,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"Y"}]},"query":"(PROCESSING_SYSTEM = CBUAE AND TENANT_ID = SESSION_LEVEL.TENANT_ID AND NEED_SYNC = Y)"},"sel_columns":[],"need_first_item_selection":false,"has_parent":false}
		this.ctrl.cbuae_return_code.image_association = ""
		this.ctrl.cbuae_return_code.show = true
		this.ctrl.cbuae_return_code.sub_content = ""
		this.ctrl.cbuae_return_code.required = false
		this.ctrl.cbuae_return_code.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Select the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.cbuae_return_code.targetcolumn_lower = "cbuae_return_code"
		this.ctrl.cbuae_return_code.disabled = false
		this.ctrl.cbuae_return_code.view_name = "f_npss_reject_ui"
		this.ctrl.cbuae_return_code.ctrl_id = "npss_reject_ui_cbuae_return_code"
		this.ctrl.npss_reject_ui_cbuae_return_code = {}
		this.ctrl.npss_reject_ui_cbuae_return_code.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_reject_ui.cbuae_return_code = {}
		this.screen_instance[this.comp_id].f_npss_reject_ui.model = {"CBUAE_RETURN_CODE":""}
		this.screen_instance[this.comp_id].f_npss_reject_ui.Meta = [{"CTLR_CODE":"CBO_LIST","DATA_TYPE":"TEXT","TARGET_COLUMN":"CBUAE_RETURN_CODE"}]
		this.screen_instance[this.comp_id].f_npss_reject_ui.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_reject_ui.dtt_code = "dtt_1304_1665905039255"
		this.screen_instance[this.comp_id].f_npss_reject_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_reject_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_reject_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_reject_ui[control][property] = value;
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
    