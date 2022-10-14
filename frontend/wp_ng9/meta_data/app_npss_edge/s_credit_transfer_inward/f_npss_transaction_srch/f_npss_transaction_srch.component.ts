/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26441 
Modified By     : Admin 
Modified Date   : 2022-Oct-14 11:18 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_credit_transfer_inward
Form Name       : NPSS Transaction SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_transaction_srch',
  templateUrl: './f_npss_transaction_srch.component.html',
  styleUrls: ['./f_npss_transaction_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_transaction_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_transaction_srch') form;
  @ViewChild('npss_transaction_srch_memory63') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665384453253"
	dtt_code : string = "dtt_1304_1665385772257"

  
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
		this.ctrl.memory63.id = "RN01CN3"
		this.ctrl.memory63.desc = "Process Type"
		this.ctrl.memory63.visible = true
		this.ctrl.memory63.label_name = "Process Type"
		this.ctrl.memory63.df_code = "DF_1304_1665385905734"
		this.ctrl.memory63.df_description = "Column Group 1"
		this.ctrl.memory63.uictrl_code = "CBO"
		this.ctrl.memory63.target_column = "memory63"
		this.ctrl.memory63.data_type = "TEXT"
		this.ctrl.memory63.data_length = 32
		this.ctrl.memory63.zone_df_code = "DF_1304_1665385905734"
		this.ctrl.memory63.default_value = ""
		this.ctrl.memory63.is_memory_ctrl = "Y"
		this.ctrl.memory63.field_coordinates = ""
		this.ctrl.memory63.sub_details = ""
		this.ctrl.memory63.accept_char = ""
		this.ctrl.memory63.currency_format = ""
		this.ctrl.memory63.data_scale = ""
		this.ctrl.memory63.binding_name = "PROCESSTYPE"
		this.ctrl.memory63.hide_label = false
		this.ctrl.memory63.depends_on = ""
		this.ctrl.memory63.placeholder = ""
		this.ctrl.memory63.dynamic_param = ""
		this.ctrl.memory63.style_code = ""
		this.ctrl.memory63.data_source = {"ds_code":"UDS_1304_1665740879071","ds_description":"NPSS Process Type Static","rows":[{"value":"Select","code":""},{"value":"OUTWARD","code":"OUTWARD"},{"value":"INWARD","code":"INWARD"}],"type":"DPS_STATIC","value_member":"CODE","display_member":"VALUE","first_record_display":"Select","column_list":"CODE;VALUE","order_by":"","target_table":"","context":"","filters":[],"type_desc":"Combo Binding Static","conditional_operator":"CONTAINS","sel_columns":[]}
		this.ctrl.memory63.image_association = ""
		this.ctrl.memory63.show = true
		this.ctrl.memory63.sub_content = ""
		this.ctrl.memory63.required = false
		this.ctrl.memory63.vld_rules = []
		this.ctrl.memory63.targetcolumn_lower = "memory63"
		this.ctrl.memory63.disabled = false
		this.ctrl.memory63.view_name = "f_npss_transaction_srch"
		this.ctrl.memory63.ctrl_id = "npss_transaction_srch_memory63"
		this.ctrl.npss_transaction_srch_memory63 = {}
		this.ctrl.npss_transaction_srch_memory63.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_transaction_srch.memory63 = {}
	
		//Properties of memory61
		this.ctrl.memory61 = {}
		this.ctrl.memory61.id = "RN01CN1001"
		this.ctrl.memory61.desc = "Last Accessed Date"
		this.ctrl.memory61.visible = true
		this.ctrl.memory61.label_name = "Last Accessed Date"
		this.ctrl.memory61.df_code = "DF_1304_1665385905734"
		this.ctrl.memory61.df_description = "Column Group 1"
		this.ctrl.memory61.uictrl_code = "CDN_DATE"
		this.ctrl.memory61.target_column = "memory61"
		this.ctrl.memory61.data_type = "DATETIME"
		this.ctrl.memory61.data_length = 0
		this.ctrl.memory61.zone_df_code = "DF_1304_1665385905734"
		this.ctrl.memory61.default_value = "setcurrentdate(),{}"
		this.ctrl.memory61.is_memory_ctrl = "Y"
		this.ctrl.memory61.field_coordinates = ""
		this.ctrl.memory61.sub_details = ""
		this.ctrl.memory61.accept_char = ""
		this.ctrl.memory61.currency_format = ""
		this.ctrl.memory61.data_scale = ""
		this.ctrl.memory61.binding_name = "LASTACCESSEDDATE"
		this.ctrl.memory61.hide_label = false
		this.ctrl.memory61.depends_on = ""
		this.ctrl.memory61.placeholder = ""
		this.ctrl.memory61.dynamic_param = ""
		this.ctrl.memory61.style_code = ""
		this.ctrl.memory61.data_source = ""
		this.ctrl.memory61.image_association = ""
		this.ctrl.memory61.show = true
		this.ctrl.memory61.sub_content = ""
		this.ctrl.memory61.required = false
		this.ctrl.memory61.vld_rules = []
		this.ctrl.memory61.targetcolumn_lower = "memory61"
		this.ctrl.memory61.disabled = false
		this.ctrl.memory61.view_name = "f_npss_transaction_srch"
		this.ctrl.memory61.ctrl_id = "npss_transaction_srch_memory61"
		this.ctrl.npss_transaction_srch_memory61 = {}
		this.ctrl.npss_transaction_srch_memory61.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory62
		this.ctrl.memory62 = {}
		this.ctrl.memory62.id = "RN11CN2"
		this.ctrl.memory62.desc = "Message ID"
		this.ctrl.memory62.visible = false
		this.ctrl.memory62.label_name = "Message ID"
		this.ctrl.memory62.df_code = "DF_1304_1665385905734"
		this.ctrl.memory62.df_description = "Column Group 1"
		this.ctrl.memory62.uictrl_code = "CDN_CTRL"
		this.ctrl.memory62.target_column = "memory62"
		this.ctrl.memory62.data_type = "TEXT"
		this.ctrl.memory62.data_length = 64
		this.ctrl.memory62.zone_df_code = "DF_1304_1665385905734"
		this.ctrl.memory62.default_value = ""
		this.ctrl.memory62.is_memory_ctrl = "Y"
		this.ctrl.memory62.field_coordinates = ""
		this.ctrl.memory62.sub_details = ""
		this.ctrl.memory62.accept_char = ""
		this.ctrl.memory62.currency_format = ""
		this.ctrl.memory62.data_scale = ""
		this.ctrl.memory62.binding_name = "MSGID"
		this.ctrl.memory62.hide_label = false
		this.ctrl.memory62.depends_on = ""
		this.ctrl.memory62.placeholder = ""
		this.ctrl.memory62.dynamic_param = ""
		this.ctrl.memory62.style_code = ""
		this.ctrl.memory62.data_source = ""
		this.ctrl.memory62.image_association = ""
		this.ctrl.memory62.show = true
		this.ctrl.memory62.sub_content = ""
		this.ctrl.memory62.required = false
		this.ctrl.memory62.vld_rules = []
		this.ctrl.memory62.targetcolumn_lower = "memory62"
		this.ctrl.memory62.disabled = false
		this.ctrl.memory62.view_name = "f_npss_transaction_srch"
		this.ctrl.memory62.ctrl_id = "npss_transaction_srch_memory62"
		this.ctrl.npss_transaction_srch_memory62 = {}
		this.ctrl.npss_transaction_srch_memory62.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_transaction_srch.model = {"MEMORY63":"","MEMORY61":"setcurrentdate(),{}","MEMORY62":""}
		this.screen_instance[this.comp_id].f_npss_transaction_srch.Meta = []
		this.screen_instance[this.comp_id].f_npss_transaction_srch.dt_code = "dt_1304_1665384453253"
		this.screen_instance[this.comp_id].f_npss_transaction_srch.dtt_code = "dtt_1304_1665385772257"
		this.screen_instance[this.comp_id].f_npss_transaction_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_transaction_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_transaction_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_transaction_srch[control][property] = value;
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
    