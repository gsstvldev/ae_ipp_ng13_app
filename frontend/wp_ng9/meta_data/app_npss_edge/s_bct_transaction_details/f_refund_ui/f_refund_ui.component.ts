/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27373 
Modified By     : Admin 
Modified Date   : 2022-Dec-15 13:14 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_bct_transaction_details
Form Name       : Refund UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_refund_ui',
  templateUrl: './f_refund_ui.component.html',
  styleUrls: ['./f_refund_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_refund_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_refund_ui') form;
  @ViewChild('refund_ui_value_date') element: ElementRef;
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

  
		//Properties of value_date
		this.ctrl.value_date = {}
		this.ctrl.value_date.id = "RN01CN1"
		this.ctrl.value_date.desc = "Value Date"
		this.ctrl.value_date.visible = true
		this.ctrl.value_date.label_name = "Value Date"
		this.ctrl.value_date.df_code = "DF_1304_1665901396659"
		this.ctrl.value_date.df_description = "Column Group 1"
		this.ctrl.value_date.uictrl_code = "DTP"
		this.ctrl.value_date.target_column = "VALUE_DATE"
		this.ctrl.value_date.data_type = "DATETIME"
		this.ctrl.value_date.data_length = 0
		this.ctrl.value_date.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.value_date.default_value = ""
		this.ctrl.value_date.is_memory_ctrl = ""
		this.ctrl.value_date.field_coordinates = ""
		this.ctrl.value_date.sub_details = ""
		this.ctrl.value_date.accept_char = ""
		this.ctrl.value_date.currency_format = ""
		this.ctrl.value_date.data_scale = ""
		this.ctrl.value_date.hide_label = false
		this.ctrl.value_date.depends_on = ""
		this.ctrl.value_date.placeholder = ""
		this.ctrl.value_date.dynamic_param = ""
		this.ctrl.value_date.style_code = ""
		this.ctrl.value_date.data_source = ""
		this.ctrl.value_date.image_association = ""
		this.ctrl.value_date.show = true
		this.ctrl.value_date.sub_content = ""
		this.ctrl.value_date.required = false
		this.ctrl.value_date.vld_rules = []
		this.ctrl.value_date.targetcolumn_lower = "value_date"
		this.ctrl.value_date.disabled = false
		this.ctrl.value_date.view_name = "f_refund_ui"
		this.ctrl.value_date.ctrl_id = "refund_ui_value_date"
		this.ctrl.refund_ui_value_date = {}
		this.ctrl.refund_ui_value_date.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_acct_no
		this.ctrl.dbtr_acct_no = {}
		this.ctrl.dbtr_acct_no.id = "RN01CN1001"
		this.ctrl.dbtr_acct_no.desc = "DR Account Number"
		this.ctrl.dbtr_acct_no.visible = true
		this.ctrl.dbtr_acct_no.label_name = "DR Account Number"
		this.ctrl.dbtr_acct_no.df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_acct_no.df_description = "Column Group 1"
		this.ctrl.dbtr_acct_no.uictrl_code = "TXT"
		this.ctrl.dbtr_acct_no.target_column = "DBTR_ACCT_NO"
		this.ctrl.dbtr_acct_no.data_type = "TEXT"
		this.ctrl.dbtr_acct_no.data_length = 20
		this.ctrl.dbtr_acct_no.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_acct_no.default_value = ""
		this.ctrl.dbtr_acct_no.is_memory_ctrl = ""
		this.ctrl.dbtr_acct_no.field_coordinates = ""
		this.ctrl.dbtr_acct_no.sub_details = ""
		this.ctrl.dbtr_acct_no.accept_char = ""
		this.ctrl.dbtr_acct_no.currency_format = ""
		this.ctrl.dbtr_acct_no.data_scale = ""
		this.ctrl.dbtr_acct_no.hide_label = false
		this.ctrl.dbtr_acct_no.depends_on = ""
		this.ctrl.dbtr_acct_no.placeholder = ""
		this.ctrl.dbtr_acct_no.dynamic_param = ""
		this.ctrl.dbtr_acct_no.style_code = ""
		this.ctrl.dbtr_acct_no.data_source = ""
		this.ctrl.dbtr_acct_no.image_association = ""
		this.ctrl.dbtr_acct_no.show = true
		this.ctrl.dbtr_acct_no.sub_content = ""
		this.ctrl.dbtr_acct_no.required = false
		this.ctrl.dbtr_acct_no.vld_rules = []
		this.ctrl.dbtr_acct_no.targetcolumn_lower = "dbtr_acct_no"
		this.ctrl.dbtr_acct_no.disabled = false
		this.ctrl.dbtr_acct_no.view_name = "f_refund_ui"
		this.ctrl.dbtr_acct_no.ctrl_id = "refund_ui_dbtr_acct_no"
		this.ctrl.refund_ui_dbtr_acct_no = {}
		this.ctrl.refund_ui_dbtr_acct_no.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_acct_name
		this.ctrl.dbtr_acct_name = {}
		this.ctrl.dbtr_acct_name.id = "RN11CN2"
		this.ctrl.dbtr_acct_name.desc = "DR Account Name"
		this.ctrl.dbtr_acct_name.visible = true
		this.ctrl.dbtr_acct_name.label_name = "DR Account Name"
		this.ctrl.dbtr_acct_name.df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_acct_name.df_description = "Column Group 1"
		this.ctrl.dbtr_acct_name.uictrl_code = "TXT"
		this.ctrl.dbtr_acct_name.target_column = "DBTR_ACCT_NAME"
		this.ctrl.dbtr_acct_name.data_type = "TEXT"
		this.ctrl.dbtr_acct_name.data_length = 128
		this.ctrl.dbtr_acct_name.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_acct_name.default_value = ""
		this.ctrl.dbtr_acct_name.is_memory_ctrl = ""
		this.ctrl.dbtr_acct_name.field_coordinates = ""
		this.ctrl.dbtr_acct_name.sub_details = ""
		this.ctrl.dbtr_acct_name.accept_char = ""
		this.ctrl.dbtr_acct_name.currency_format = ""
		this.ctrl.dbtr_acct_name.data_scale = ""
		this.ctrl.dbtr_acct_name.hide_label = false
		this.ctrl.dbtr_acct_name.depends_on = ""
		this.ctrl.dbtr_acct_name.placeholder = ""
		this.ctrl.dbtr_acct_name.dynamic_param = ""
		this.ctrl.dbtr_acct_name.style_code = ""
		this.ctrl.dbtr_acct_name.data_source = ""
		this.ctrl.dbtr_acct_name.image_association = ""
		this.ctrl.dbtr_acct_name.show = true
		this.ctrl.dbtr_acct_name.sub_content = ""
		this.ctrl.dbtr_acct_name.required = false
		this.ctrl.dbtr_acct_name.vld_rules = []
		this.ctrl.dbtr_acct_name.targetcolumn_lower = "dbtr_acct_name"
		this.ctrl.dbtr_acct_name.disabled = false
		this.ctrl.dbtr_acct_name.view_name = "f_refund_ui"
		this.ctrl.dbtr_acct_name.ctrl_id = "refund_ui_dbtr_acct_name"
		this.ctrl.refund_ui_dbtr_acct_name = {}
		this.ctrl.refund_ui_dbtr_acct_name.onChangecomponent = new EventEmitter<any>()
	
		//Properties of intrbk_sttlm_cur
		this.ctrl.intrbk_sttlm_cur = {}
		this.ctrl.intrbk_sttlm_cur.id = "RN11CN3"
		this.ctrl.intrbk_sttlm_cur.desc = "Intrbk Sttlm Cur"
		this.ctrl.intrbk_sttlm_cur.visible = true
		this.ctrl.intrbk_sttlm_cur.label_name = "Intrbk Sttlm Cur"
		this.ctrl.intrbk_sttlm_cur.df_code = "DF_1304_1665901396659"
		this.ctrl.intrbk_sttlm_cur.df_description = "Column Group 1"
		this.ctrl.intrbk_sttlm_cur.uictrl_code = "TXT"
		this.ctrl.intrbk_sttlm_cur.target_column = "INTRBK_STTLM_CUR"
		this.ctrl.intrbk_sttlm_cur.data_type = "TEXT"
		this.ctrl.intrbk_sttlm_cur.data_length = 3
		this.ctrl.intrbk_sttlm_cur.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.intrbk_sttlm_cur.default_value = ""
		this.ctrl.intrbk_sttlm_cur.is_memory_ctrl = ""
		this.ctrl.intrbk_sttlm_cur.field_coordinates = ""
		this.ctrl.intrbk_sttlm_cur.sub_details = ""
		this.ctrl.intrbk_sttlm_cur.accept_char = ""
		this.ctrl.intrbk_sttlm_cur.currency_format = ""
		this.ctrl.intrbk_sttlm_cur.data_scale = ""
		this.ctrl.intrbk_sttlm_cur.hide_label = false
		this.ctrl.intrbk_sttlm_cur.depends_on = ""
		this.ctrl.intrbk_sttlm_cur.placeholder = ""
		this.ctrl.intrbk_sttlm_cur.dynamic_param = ""
		this.ctrl.intrbk_sttlm_cur.style_code = ""
		this.ctrl.intrbk_sttlm_cur.data_source = ""
		this.ctrl.intrbk_sttlm_cur.image_association = ""
		this.ctrl.intrbk_sttlm_cur.show = true
		this.ctrl.intrbk_sttlm_cur.sub_content = ""
		this.ctrl.intrbk_sttlm_cur.required = false
		this.ctrl.intrbk_sttlm_cur.vld_rules = []
		this.ctrl.intrbk_sttlm_cur.targetcolumn_lower = "intrbk_sttlm_cur"
		this.ctrl.intrbk_sttlm_cur.disabled = false
		this.ctrl.intrbk_sttlm_cur.view_name = "f_refund_ui"
		this.ctrl.intrbk_sttlm_cur.ctrl_id = "refund_ui_intrbk_sttlm_cur"
		this.ctrl.refund_ui_intrbk_sttlm_cur = {}
		this.ctrl.refund_ui_intrbk_sttlm_cur.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_refund_ui.model = {"VALUE_DATE":"","DBTR_ACCT_NO":"","DBTR_ACCT_NAME":"","INTRBK_STTLM_CUR":""}
		this.screen_instance[this.comp_id].f_refund_ui.Meta = [{"CTLR_CODE":"DTP","DATA_TYPE":"DATETIME","TARGET_COLUMN":"VALUE_DATE"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_ACCT_NO"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_ACCT_NAME"},{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"INTRBK_STTLM_CUR"}]
		this.screen_instance[this.comp_id].f_refund_ui.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_refund_ui.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_refund_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_refund_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_refund_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_refund_ui[control][property] = value;
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
    