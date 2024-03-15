/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34784 
Modified By     : Admin 
Modified Date   : 2024-Mar-15 11:47 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_all_op_arc_transactions
Form Name       : NPSS View Tran API Process Log SCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_view_tran_api_process_log_sch',
  templateUrl: './f_npss_view_tran_api_process_log_sch.component.html',
  styleUrls: ['./f_npss_view_tran_api_process_log_sch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_view_tran_api_process_log_schComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_view_tran_api_process_log_sch') form;
  @ViewChild('npss_view_tran_api_process_log_sch_memory79') element: ElementRef;
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

  
		//Properties of memory79
		this.ctrl.memory79 = {}
		this.ctrl.memory79.id = "RN01CN2"
		this.ctrl.memory79.desc = "Created Date"
		this.ctrl.memory79.visible = true
		this.ctrl.memory79.label_name = "Created Date"
		this.ctrl.memory79.df_code = "DF_1304_1665905157963"
		this.ctrl.memory79.df_description = "Column Group 1"
		this.ctrl.memory79.uictrl_code = "DTP"
		this.ctrl.memory79.target_column = "memory79"
		this.ctrl.memory79.data_type = "DATETIME"
		this.ctrl.memory79.data_length = 0
		this.ctrl.memory79.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.memory79.default_value = "setcurrentdate(),{}"
		this.ctrl.memory79.is_memory_ctrl = "Y"
		this.ctrl.memory79.field_coordinates = ""
		this.ctrl.memory79.sub_details = ""
		this.ctrl.memory79.accept_char = ""
		this.ctrl.memory79.currency_format = ""
		this.ctrl.memory79.data_scale = ""
		this.ctrl.memory79.binding_name = "CREATED_DATE"
		this.ctrl.memory79.hide_label = false
		this.ctrl.memory79.depends_on = ""
		this.ctrl.memory79.placeholder = ""
		this.ctrl.memory79.dynamic_param = ""
		this.ctrl.memory79.style_code = ""
		this.ctrl.memory79.data_source = ""
		this.ctrl.memory79.image_association = ""
		this.ctrl.memory79.show = true
		this.ctrl.memory79.sub_content = ""
		this.ctrl.memory79.required = false
		this.ctrl.memory79.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Select the Date","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.memory79.targetcolumn_lower = "memory79"
		this.ctrl.memory79.disabled = false
		this.ctrl.memory79.view_name = "f_npss_view_tran_api_process_log_sch"
		this.ctrl.memory79.ctrl_id = "npss_view_tran_api_process_log_sch_memory79"
		this.ctrl.npss_view_tran_api_process_log_sch_memory79 = {}
		this.ctrl.npss_view_tran_api_process_log_sch_memory79.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_iban
		this.ctrl.dbtr_iban = {}
		this.ctrl.dbtr_iban.id = "RN11CN5"
		this.ctrl.dbtr_iban.desc = "Dr Iban"
		this.ctrl.dbtr_iban.visible = true
		this.ctrl.dbtr_iban.label_name = "Dr Iban"
		this.ctrl.dbtr_iban.df_code = "DF_1304_1665905157963"
		this.ctrl.dbtr_iban.df_description = "Column Group 1"
		this.ctrl.dbtr_iban.uictrl_code = "CDN_CTRL"
		this.ctrl.dbtr_iban.target_column = "DBTR_IBAN"
		this.ctrl.dbtr_iban.data_type = "TEXT"
		this.ctrl.dbtr_iban.data_length = 64
		this.ctrl.dbtr_iban.zone_df_code = "DF_1304_1665905157963"
		this.ctrl.dbtr_iban.default_value = ""
		this.ctrl.dbtr_iban.is_memory_ctrl = ""
		this.ctrl.dbtr_iban.field_coordinates = ""
		this.ctrl.dbtr_iban.sub_details = ""
		this.ctrl.dbtr_iban.accept_char = ""
		this.ctrl.dbtr_iban.currency_format = ""
		this.ctrl.dbtr_iban.data_scale = ""
		this.ctrl.dbtr_iban.binding_name = "DBTR_IBAN"
		this.ctrl.dbtr_iban.hide_label = false
		this.ctrl.dbtr_iban.depends_on = ""
		this.ctrl.dbtr_iban.placeholder = ""
		this.ctrl.dbtr_iban.dynamic_param = ""
		this.ctrl.dbtr_iban.style_code = ""
		this.ctrl.dbtr_iban.data_source = ""
		this.ctrl.dbtr_iban.image_association = ""
		this.ctrl.dbtr_iban.show = true
		this.ctrl.dbtr_iban.sub_content = ""
		this.ctrl.dbtr_iban.required = false
		this.ctrl.dbtr_iban.vld_rules = []
		this.ctrl.dbtr_iban.targetcolumn_lower = "dbtr_iban"
		this.ctrl.dbtr_iban.disabled = false
		this.ctrl.dbtr_iban.view_name = "f_npss_view_tran_api_process_log_sch"
		this.ctrl.dbtr_iban.ctrl_id = "npss_view_tran_api_process_log_sch_dbtr_iban"
		this.ctrl.npss_view_tran_api_process_log_sch_dbtr_iban = {}
		this.ctrl.npss_view_tran_api_process_log_sch_dbtr_iban.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_view_tran_api_process_log_sch.model = {"MEMORY79":"setcurrentdate(),{}","DBTR_IBAN":""}
		this.screen_instance[this.comp_id].f_npss_view_tran_api_process_log_sch.Meta = [{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_IBAN"}]
		this.screen_instance[this.comp_id].f_npss_view_tran_api_process_log_sch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_view_tran_api_process_log_sch.dtt_code = "dtt_1304_1665905039255"
		this.screen_instance[this.comp_id].f_npss_view_tran_api_process_log_sch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_view_tran_api_process_log_sch[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_view_tran_api_process_log_sch[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_view_tran_api_process_log_sch[control][property] = value;
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
    