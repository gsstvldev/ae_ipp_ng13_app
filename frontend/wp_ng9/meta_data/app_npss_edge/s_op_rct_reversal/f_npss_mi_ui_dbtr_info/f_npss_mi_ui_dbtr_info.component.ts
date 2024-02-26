/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34542 
Modified By     : Admin 
Modified Date   : 2024-Feb-26 7:9 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_op_rct_reversal
Form Name       : NPSS MI UI DBTR INFO--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_mi_ui_dbtr_info',
  templateUrl: './f_npss_mi_ui_dbtr_info.component.html',
  styleUrls: ['./f_npss_mi_ui_dbtr_info.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_mi_ui_dbtr_infoComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_mi_ui_dbtr_info') form;
  @ViewChild('npss_mi_ui_dbtr_info_memory97') element: ElementRef;
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

  
		//Properties of memory97
		this.ctrl.memory97 = {}
		this.ctrl.memory97.id = "RN01CN1"
		this.ctrl.memory97.desc = "Dr Info"
		this.ctrl.memory97.visible = false
		this.ctrl.memory97.label_name = "Dr Info"
		this.ctrl.memory97.df_code = "DF_1304_1665901396659"
		this.ctrl.memory97.df_description = "Column Group 1"
		this.ctrl.memory97.uictrl_code = "CBO"
		this.ctrl.memory97.target_column = "memory97"
		this.ctrl.memory97.data_type = "TEXT"
		this.ctrl.memory97.data_length = 64
		this.ctrl.memory97.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory97.default_value = ""
		this.ctrl.memory97.is_memory_ctrl = "Y"
		this.ctrl.memory97.field_coordinates = ""
		this.ctrl.memory97.sub_details = ""
		this.ctrl.memory97.accept_char = ""
		this.ctrl.memory97.currency_format = ""
		this.ctrl.memory97.data_scale = ""
		this.ctrl.memory97.hide_label = false
		this.ctrl.memory97.depends_on = ""
		this.ctrl.memory97.placeholder = ""
		this.ctrl.memory97.dynamic_param = ""
		this.ctrl.memory97.style_code = ""
		this.ctrl.memory97.data_source = {"ds_code":"UDS_1304_1674471548074","ds_description":"Search Info SQL CDB","rows":[],"type":"DPS_TABLE","value_member":"CD_CODE","display_member":"CD_DESCRIPTION","first_record_display":"","column_list":"","order_by":"SORT_ORDER ASC","target_table":"CORE_NC_CODE_DESCRIPTIONS","context":"","filters":[{"filter_name":"Filter1","binding_name":"CD_CATEGORY","id":"DF_1680238453020","binding_value":"SEARCH_INFO","source_name":"CD_CATEGORY","source_value":"SEARCH_INFO","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"},{"filter_name":"Filter2","binding_name":"TENANT_ID","id":"DF_1680238453020","binding_value":"SESSION_LEVEL.TENANT_ID","source_name":"TENANT_ID","source_value":"SESSION_LEVEL.TENANT_ID","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"F.BINDING_VALUE = global.SessionInfo['undefined']","is_cluster_key":"N","filter_values":"SESSION_LEVEL"},{"filter_name":"Filter3","binding_name":"NEED_SYNC","id":"DF_1680238453020","binding_value":"Y","source_name":"NEED_SYNC","source_value":"Y","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":"","assign_binding_value":"","is_cluster_key":"N","filter_values":"HARDCODED"}],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[{"operators":"=","data_type":"TEXT","binding_name":"CD_CATEGORY","binding_value":"SEARCH_INFO","sort_order":1,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"SEARCH_INFO"},{"operators":"=","data_type":"TEXT","binding_name":"TENANT_ID","binding_value":"SESSION_LEVEL.TENANT_ID","sort_order":2,"conjuction_operator":"","is_cluster_key":"N","filter_values":"SESSION_LEVEL","temp_value":"TENANT_ID"},{"operators":"=","data_type":"TEXT","binding_name":"NEED_SYNC","binding_value":"Y","sort_order":3,"conjuction_operator":"","is_cluster_key":"N","filter_values":"HARDCODED","temp_value":"Y"}]},"query":"(CD_CATEGORY = SEARCH_INFO AND TENANT_ID = SESSION_LEVEL.TENANT_ID AND NEED_SYNC = Y)"},"need_first_item_selection":true,"sel_columns":[],"has_parent":false}
		this.ctrl.memory97.image_association = ""
		this.ctrl.memory97.show = true
		this.ctrl.memory97.sub_content = ""
		this.ctrl.memory97.required = false
		this.ctrl.memory97.vld_rules = []
		this.ctrl.memory97.targetcolumn_lower = "memory97"
		this.ctrl.memory97.disabled = false
		this.ctrl.memory97.view_name = "f_npss_mi_ui_dbtr_info"
		this.ctrl.memory97.ctrl_id = "npss_mi_ui_dbtr_info_memory97"
		this.ctrl.npss_mi_ui_dbtr_info_memory97 = {}
		this.ctrl.npss_mi_ui_dbtr_info_memory97.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_mi_ui_dbtr_info.memory97 = {}
		this.screen_instance[this.comp_id].f_npss_mi_ui_dbtr_info.model = {"MEMORY97":""}
		this.screen_instance[this.comp_id].f_npss_mi_ui_dbtr_info.Meta = []
		this.screen_instance[this.comp_id].f_npss_mi_ui_dbtr_info.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_mi_ui_dbtr_info.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_mi_ui_dbtr_info.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_mi_ui_dbtr_info[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_mi_ui_dbtr_info[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_mi_ui_dbtr_info[control][property] = value;
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
    