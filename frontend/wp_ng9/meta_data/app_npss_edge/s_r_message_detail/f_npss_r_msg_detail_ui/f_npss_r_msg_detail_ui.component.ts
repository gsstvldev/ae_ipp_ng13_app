/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28467 
Modified By     : Admin 
Modified Date   : 2023-Mar-07 15:46 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_r_message_detail
Form Name       : NPSS R Msg Detail UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_r_msg_detail_ui',
  templateUrl: './f_npss_r_msg_detail_ui.component.html',
  styleUrls: ['./f_npss_r_msg_detail_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_r_msg_detail_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_r_msg_detail_ui') form;
  @ViewChild('npss_r_msg_detail_ui_process_name') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665901130705"
	dtt_code : string = "dtt_1304_1670589169341"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of process_name
		this.ctrl.process_name = {}
		this.ctrl.process_name.id = "94869e94-b09a-4259-a503-a3083e31a454_1678167590032"
		this.ctrl.process_name.desc = "Process Name"
		this.ctrl.process_name.visible = true
		this.ctrl.process_name.label_name = "Process Name"
		this.ctrl.process_name.df_code = "DF_1304_1670589236195"
		this.ctrl.process_name.df_description = "Column Group 1"
		this.ctrl.process_name.uictrl_code = "TXT"
		this.ctrl.process_name.target_column = "PROCESS_NAME"
		this.ctrl.process_name.data_type = "TEXT"
		this.ctrl.process_name.data_length = 64
		this.ctrl.process_name.zone_df_code = "DF_1304_1670589236195"
		this.ctrl.process_name.default_value = "rMessageDetail"
		this.ctrl.process_name.is_memory_ctrl = ""
		this.ctrl.process_name.field_coordinates = ""
		this.ctrl.process_name.sub_details = ""
		this.ctrl.process_name.accept_char = ""
		this.ctrl.process_name.currency_format = ""
		this.ctrl.process_name.data_scale = ""
		this.ctrl.process_name.hide_label = false
		this.ctrl.process_name.depends_on = ""
		this.ctrl.process_name.placeholder = ""
		this.ctrl.process_name.dynamic_param = ""
		this.ctrl.process_name.style_code = ""
		this.ctrl.process_name.data_source = ""
		this.ctrl.process_name.image_association = ""
		this.ctrl.process_name.show = true
		this.ctrl.process_name.sub_content = ""
		this.ctrl.process_name.required = false
		this.ctrl.process_name.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.process_name.targetcolumn_lower = "process_name"
		this.ctrl.process_name.disabled = false
		this.ctrl.process_name.view_name = "f_npss_r_msg_detail_ui"
		this.ctrl.process_name.ctrl_id = "npss_r_msg_detail_ui_process_name"
		this.ctrl.npss_r_msg_detail_ui_process_name = {}
		this.ctrl.npss_r_msg_detail_ui_process_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of reftype
		this.ctrl.reftype = {}
		this.ctrl.reftype.id = "69ad377e-cfab-4f02-a108-085434ecaa03_1678167590032"
		this.ctrl.reftype.desc = "Ref Type"
		this.ctrl.reftype.visible = true
		this.ctrl.reftype.label_name = "Ref Type"
		this.ctrl.reftype.df_code = "DF_1304_1670589236195"
		this.ctrl.reftype.df_description = "Column Group 1"
		this.ctrl.reftype.uictrl_code = "TXT"
		this.ctrl.reftype.target_column = "REFTYPE"
		this.ctrl.reftype.data_type = "TEXT"
		this.ctrl.reftype.data_length = 64
		this.ctrl.reftype.zone_df_code = "DF_1304_1670589236195"
		this.ctrl.reftype.default_value = ""
		this.ctrl.reftype.is_memory_ctrl = ""
		this.ctrl.reftype.field_coordinates = ""
		this.ctrl.reftype.sub_details = ""
		this.ctrl.reftype.accept_char = ""
		this.ctrl.reftype.currency_format = ""
		this.ctrl.reftype.data_scale = ""
		this.ctrl.reftype.hide_label = false
		this.ctrl.reftype.depends_on = ""
		this.ctrl.reftype.placeholder = ""
		this.ctrl.reftype.dynamic_param = ""
		this.ctrl.reftype.style_code = ""
		this.ctrl.reftype.data_source = ""
		this.ctrl.reftype.image_association = ""
		this.ctrl.reftype.show = true
		this.ctrl.reftype.sub_content = ""
		this.ctrl.reftype.required = false
		this.ctrl.reftype.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.reftype.targetcolumn_lower = "reftype"
		this.ctrl.reftype.disabled = false
		this.ctrl.reftype.view_name = "f_npss_r_msg_detail_ui"
		this.ctrl.reftype.ctrl_id = "npss_r_msg_detail_ui_reftype"
		this.ctrl.npss_r_msg_detail_ui_reftype = {}
		this.ctrl.npss_r_msg_detail_ui_reftype.onChangecomponent = new EventEmitter<any>()
	
		//Properties of ref
		this.ctrl.ref = {}
		this.ctrl.ref.id = "90abbe94-aa71-44ec-8c8d-8df6f4d24a29_1678167590032"
		this.ctrl.ref.desc = "Ref"
		this.ctrl.ref.visible = true
		this.ctrl.ref.label_name = "Ref"
		this.ctrl.ref.df_code = "DF_1304_1670589236195"
		this.ctrl.ref.df_description = "Column Group 1"
		this.ctrl.ref.uictrl_code = "TXT"
		this.ctrl.ref.target_column = "REF"
		this.ctrl.ref.data_type = "TEXT"
		this.ctrl.ref.data_length = 64
		this.ctrl.ref.zone_df_code = "DF_1304_1670589236195"
		this.ctrl.ref.default_value = ""
		this.ctrl.ref.is_memory_ctrl = ""
		this.ctrl.ref.field_coordinates = ""
		this.ctrl.ref.sub_details = ""
		this.ctrl.ref.accept_char = ""
		this.ctrl.ref.currency_format = ""
		this.ctrl.ref.data_scale = ""
		this.ctrl.ref.hide_label = false
		this.ctrl.ref.depends_on = ""
		this.ctrl.ref.placeholder = ""
		this.ctrl.ref.dynamic_param = ""
		this.ctrl.ref.style_code = ""
		this.ctrl.ref.data_source = ""
		this.ctrl.ref.image_association = ""
		this.ctrl.ref.show = true
		this.ctrl.ref.sub_content = ""
		this.ctrl.ref.required = false
		this.ctrl.ref.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.ref.targetcolumn_lower = "ref"
		this.ctrl.ref.disabled = false
		this.ctrl.ref.view_name = "f_npss_r_msg_detail_ui"
		this.ctrl.ref.ctrl_id = "npss_r_msg_detail_ui_ref"
		this.ctrl.npss_r_msg_detail_ui_ref = {}
		this.ctrl.npss_r_msg_detail_ui_ref.onChangecomponent = new EventEmitter<any>()
	
		//Properties of datetime
		this.ctrl.datetime = {}
		this.ctrl.datetime.id = "f3e72ef4-080d-4b03-81b5-e9a2f3b50cd9_1678167590032"
		this.ctrl.datetime.desc = "Payment Date"
		this.ctrl.datetime.visible = true
		this.ctrl.datetime.label_name = "Payment Date"
		this.ctrl.datetime.df_code = "DF_1304_1670589236195"
		this.ctrl.datetime.df_description = "Column Group 1"
		this.ctrl.datetime.uictrl_code = "DTP"
		this.ctrl.datetime.target_column = "DATETIME"
		this.ctrl.datetime.data_type = "DATETIME"
		this.ctrl.datetime.data_length = 0
		this.ctrl.datetime.zone_df_code = "DF_1304_1670589236195"
		this.ctrl.datetime.default_value = "setcurrentdate(),{}"
		this.ctrl.datetime.is_memory_ctrl = ""
		this.ctrl.datetime.field_coordinates = ""
		this.ctrl.datetime.sub_details = ""
		this.ctrl.datetime.accept_char = ""
		this.ctrl.datetime.currency_format = ""
		this.ctrl.datetime.data_scale = ""
		this.ctrl.datetime.hide_label = false
		this.ctrl.datetime.depends_on = ""
		this.ctrl.datetime.placeholder = ""
		this.ctrl.datetime.dynamic_param = ""
		this.ctrl.datetime.style_code = ""
		this.ctrl.datetime.data_source = ""
		this.ctrl.datetime.image_association = ""
		this.ctrl.datetime.show = true
		this.ctrl.datetime.sub_content = ""
		this.ctrl.datetime.required = false
		this.ctrl.datetime.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Select the date","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.datetime.targetcolumn_lower = "datetime"
		this.ctrl.datetime.disabled = false
		this.ctrl.datetime.view_name = "f_npss_r_msg_detail_ui"
		this.ctrl.datetime.ctrl_id = "npss_r_msg_detail_ui_datetime"
		this.ctrl.npss_r_msg_detail_ui_datetime = {}
		this.ctrl.npss_r_msg_detail_ui_datetime.onChangecomponent = new EventEmitter<any>()
	
		//Properties of senderbic
		this.ctrl.senderbic = {}
		this.ctrl.senderbic.id = "ec90d741-021d-433a-b164-85c277d3b675_1678167590032"
		this.ctrl.senderbic.desc = "Sender BIC"
		this.ctrl.senderbic.visible = true
		this.ctrl.senderbic.label_name = "Sender BIC"
		this.ctrl.senderbic.df_code = "DF_1304_1670589236195"
		this.ctrl.senderbic.df_description = "Column Group 1"
		this.ctrl.senderbic.uictrl_code = "TXT"
		this.ctrl.senderbic.target_column = "SENDERBIC"
		this.ctrl.senderbic.data_type = "TEXT"
		this.ctrl.senderbic.data_length = 32
		this.ctrl.senderbic.zone_df_code = "DF_1304_1670589236195"
		this.ctrl.senderbic.default_value = ""
		this.ctrl.senderbic.is_memory_ctrl = ""
		this.ctrl.senderbic.field_coordinates = ""
		this.ctrl.senderbic.sub_details = ""
		this.ctrl.senderbic.accept_char = ""
		this.ctrl.senderbic.currency_format = ""
		this.ctrl.senderbic.data_scale = ""
		this.ctrl.senderbic.hide_label = false
		this.ctrl.senderbic.depends_on = ""
		this.ctrl.senderbic.placeholder = ""
		this.ctrl.senderbic.dynamic_param = ""
		this.ctrl.senderbic.style_code = ""
		this.ctrl.senderbic.data_source = ""
		this.ctrl.senderbic.image_association = ""
		this.ctrl.senderbic.show = true
		this.ctrl.senderbic.sub_content = ""
		this.ctrl.senderbic.required = false
		this.ctrl.senderbic.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.senderbic.targetcolumn_lower = "senderbic"
		this.ctrl.senderbic.disabled = false
		this.ctrl.senderbic.view_name = "f_npss_r_msg_detail_ui"
		this.ctrl.senderbic.ctrl_id = "npss_r_msg_detail_ui_senderbic"
		this.ctrl.npss_r_msg_detail_ui_senderbic = {}
		this.ctrl.npss_r_msg_detail_ui_senderbic.onChangecomponent = new EventEmitter<any>()
	
		//Properties of datasource
		this.ctrl.datasource = {}
		this.ctrl.datasource.id = "04889e1c-56fc-42e2-8a84-a0cee33dabfa_1678167590032"
		this.ctrl.datasource.desc = "Data Source"
		this.ctrl.datasource.visible = true
		this.ctrl.datasource.label_name = "Data Source"
		this.ctrl.datasource.df_code = "DF_1304_1670589236195"
		this.ctrl.datasource.df_description = "Column Group 1"
		this.ctrl.datasource.uictrl_code = "TXT"
		this.ctrl.datasource.target_column = "DATASOURCE"
		this.ctrl.datasource.data_type = "TEXT"
		this.ctrl.datasource.data_length = 64
		this.ctrl.datasource.zone_df_code = "DF_1304_1670589236195"
		this.ctrl.datasource.default_value = "HISTORICAL"
		this.ctrl.datasource.is_memory_ctrl = ""
		this.ctrl.datasource.field_coordinates = ""
		this.ctrl.datasource.sub_details = ""
		this.ctrl.datasource.accept_char = ""
		this.ctrl.datasource.currency_format = ""
		this.ctrl.datasource.data_scale = ""
		this.ctrl.datasource.hide_label = false
		this.ctrl.datasource.depends_on = ""
		this.ctrl.datasource.placeholder = ""
		this.ctrl.datasource.dynamic_param = ""
		this.ctrl.datasource.style_code = ""
		this.ctrl.datasource.data_source = ""
		this.ctrl.datasource.image_association = ""
		this.ctrl.datasource.show = true
		this.ctrl.datasource.sub_content = ""
		this.ctrl.datasource.required = false
		this.ctrl.datasource.vld_rules = [{"type":"RFV","from_value":"","to_value":"","format":"","max_length":"","min_length":"","override":"","ignore_case":"","reference_value":"NOTEMPTY","click":"Valitem","message":"Enter the value","custom_val_message":"","expression":"required","project_code":"","project_name":"","cv_event":""}]
		this.ctrl.datasource.targetcolumn_lower = "datasource"
		this.ctrl.datasource.disabled = false
		this.ctrl.datasource.view_name = "f_npss_r_msg_detail_ui"
		this.ctrl.datasource.ctrl_id = "npss_r_msg_detail_ui_datasource"
		this.ctrl.npss_r_msg_detail_ui_datasource = {}
		this.ctrl.npss_r_msg_detail_ui_datasource.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_r_msg_detail_ui.model = {"PROCESS_NAME":"rMessageDetail","REFTYPE":"","REF":"","DATETIME":"setcurrentdate(),{}","SENDERBIC":"","DATASOURCE":"HISTORICAL"}
		this.screen_instance[this.comp_id].f_npss_r_msg_detail_ui.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"PROCESS_NAME"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"REFTYPE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"REF"},{"CTLR_CODE":"DTP","DATA_TYPE":"DATETIME","TARGET_COLUMN":"DATETIME"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"SENDERBIC"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DATASOURCE"}]
		this.screen_instance[this.comp_id].f_npss_r_msg_detail_ui.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_r_msg_detail_ui.dtt_code = "dtt_1304_1670589169341"
		this.screen_instance[this.comp_id].f_npss_r_msg_detail_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_r_msg_detail_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_r_msg_detail_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_r_msg_detail_ui[control][property] = value;
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
    