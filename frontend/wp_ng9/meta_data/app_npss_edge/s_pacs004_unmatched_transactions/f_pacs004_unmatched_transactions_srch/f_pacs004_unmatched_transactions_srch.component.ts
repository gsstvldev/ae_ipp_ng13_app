/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35107 
Modified By     : Admin 
Modified Date   : 2024-Apr-05 9:38 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_pacs004_unmatched_transactions
Form Name       : Pacs004 Unmatched Transactions SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_pacs004_unmatched_transactions_srch',
  templateUrl: './f_pacs004_unmatched_transactions_srch.component.html',
  styleUrls: ['./f_pacs004_unmatched_transactions_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_pacs004_unmatched_transactions_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_pacs004_unmatched_transactions_srch') form;
  @ViewChild('pacs004_unmatched_transactions_srch_memory63') element: ElementRef;
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
		this.ctrl.memory63.desc = "Transaction Date"
		this.ctrl.memory63.visible = true
		this.ctrl.memory63.label_name = "Transaction Date"
		this.ctrl.memory63.df_code = "DF_1304_1665901396659"
		this.ctrl.memory63.df_description = "Column Group 1"
		this.ctrl.memory63.uictrl_code = "CDN_DATE"
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
		this.ctrl.memory63.view_name = "f_pacs004_unmatched_transactions_srch"
		this.ctrl.memory63.ctrl_id = "pacs004_unmatched_transactions_srch_memory63"
		this.ctrl.pacs004_unmatched_transactions_srch_memory63 = {}
		this.ctrl.pacs004_unmatched_transactions_srch_memory63.onChangecomponent = new EventEmitter<any>()
	
		//Properties of intrbk_sttlm_amnt
		this.ctrl.intrbk_sttlm_amnt = {}
		this.ctrl.intrbk_sttlm_amnt.id = "RN01CN2"
		this.ctrl.intrbk_sttlm_amnt.desc = "Transaction Amount"
		this.ctrl.intrbk_sttlm_amnt.visible = true
		this.ctrl.intrbk_sttlm_amnt.label_name = "Transaction Amount"
		this.ctrl.intrbk_sttlm_amnt.df_code = "DF_1304_1665901396659"
		this.ctrl.intrbk_sttlm_amnt.df_description = "Column Group 1"
		this.ctrl.intrbk_sttlm_amnt.uictrl_code = "CDN_CUR_CTRL"
		this.ctrl.intrbk_sttlm_amnt.target_column = "INTRBK_STTLM_AMNT"
		this.ctrl.intrbk_sttlm_amnt.data_type = "NUMBER"
		this.ctrl.intrbk_sttlm_amnt.data_length = 19
		this.ctrl.intrbk_sttlm_amnt.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.intrbk_sttlm_amnt.default_value = ""
		this.ctrl.intrbk_sttlm_amnt.is_memory_ctrl = ""
		this.ctrl.intrbk_sttlm_amnt.field_coordinates = ""
		this.ctrl.intrbk_sttlm_amnt.sub_details = ""
		this.ctrl.intrbk_sttlm_amnt.accept_char = ""
		this.ctrl.intrbk_sttlm_amnt.currency_format = ""
		this.ctrl.intrbk_sttlm_amnt.data_scale = "2"
		this.ctrl.intrbk_sttlm_amnt.binding_name = "INTRBK_STTLM_AMNT"
		this.ctrl.intrbk_sttlm_amnt.hide_label = false
		this.ctrl.intrbk_sttlm_amnt.depends_on = ""
		this.ctrl.intrbk_sttlm_amnt.placeholder = ""
		this.ctrl.intrbk_sttlm_amnt.dynamic_param = ""
		this.ctrl.intrbk_sttlm_amnt.style_code = ""
		this.ctrl.intrbk_sttlm_amnt.data_source = ""
		this.ctrl.intrbk_sttlm_amnt.image_association = ""
		this.ctrl.intrbk_sttlm_amnt.show = true
		this.ctrl.intrbk_sttlm_amnt.sub_content = ""
		this.ctrl.intrbk_sttlm_amnt.required = false
		this.ctrl.intrbk_sttlm_amnt.vld_rules = []
		this.ctrl.intrbk_sttlm_amnt.targetcolumn_lower = "intrbk_sttlm_amnt"
		this.ctrl.intrbk_sttlm_amnt.disabled = false
		this.ctrl.intrbk_sttlm_amnt.view_name = "f_pacs004_unmatched_transactions_srch"
		this.ctrl.intrbk_sttlm_amnt.ctrl_id = "pacs004_unmatched_transactions_srch_intrbk_sttlm_amnt"
		this.ctrl.pacs004_unmatched_transactions_srch_intrbk_sttlm_amnt = {}
		this.ctrl.pacs004_unmatched_transactions_srch_intrbk_sttlm_amnt.onChangecomponent = new EventEmitter<any>()
	
		//Properties of dbtr_iban
		this.ctrl.dbtr_iban = {}
		this.ctrl.dbtr_iban.id = "RN11CN4"
		this.ctrl.dbtr_iban.desc = "Debtor IBAN"
		this.ctrl.dbtr_iban.visible = true
		this.ctrl.dbtr_iban.label_name = "Debtor IBAN"
		this.ctrl.dbtr_iban.df_code = "DF_1304_1665901396659"
		this.ctrl.dbtr_iban.df_description = "Column Group 1"
		this.ctrl.dbtr_iban.uictrl_code = "CDN_CTRL"
		this.ctrl.dbtr_iban.target_column = "DBTR_IBAN"
		this.ctrl.dbtr_iban.data_type = "TEXT"
		this.ctrl.dbtr_iban.data_length = 64
		this.ctrl.dbtr_iban.zone_df_code = "DF_1304_1665901396659"
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
		this.ctrl.dbtr_iban.view_name = "f_pacs004_unmatched_transactions_srch"
		this.ctrl.dbtr_iban.ctrl_id = "pacs004_unmatched_transactions_srch_dbtr_iban"
		this.ctrl.pacs004_unmatched_transactions_srch_dbtr_iban = {}
		this.ctrl.pacs004_unmatched_transactions_srch_dbtr_iban.onChangecomponent = new EventEmitter<any>()
	
		//Properties of memory154
		this.ctrl.memory154 = {}
		this.ctrl.memory154.id = "RN11CN6"
		this.ctrl.memory154.desc = "Beneficiary Bank"
		this.ctrl.memory154.visible = true
		this.ctrl.memory154.label_name = "Beneficiary Bank"
		this.ctrl.memory154.df_code = "DF_1304_1665901396659"
		this.ctrl.memory154.df_description = "Column Group 1"
		this.ctrl.memory154.uictrl_code = "CBO"
		this.ctrl.memory154.target_column = "memory154"
		this.ctrl.memory154.data_type = "TEXT"
		this.ctrl.memory154.data_length = 32
		this.ctrl.memory154.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.memory154.default_value = ""
		this.ctrl.memory154.is_memory_ctrl = "Y"
		this.ctrl.memory154.field_coordinates = ""
		this.ctrl.memory154.sub_details = ""
		this.ctrl.memory154.accept_char = ""
		this.ctrl.memory154.currency_format = ""
		this.ctrl.memory154.data_scale = ""
		this.ctrl.memory154.binding_name = "BANK_NAME"
		this.ctrl.memory154.hide_label = false
		this.ctrl.memory154.depends_on = ""
		this.ctrl.memory154.placeholder = ""
		this.ctrl.memory154.dynamic_param = ""
		this.ctrl.memory154.style_code = ""
		this.ctrl.memory154.data_source = {"ds_code":"UDS_1304_1675679493844","ds_description":"BankName CDB for Report","rows":[],"type":"DPS_TABLE","value_member":"BANK_NAME","display_member":"BANK_NAME","first_record_display":"Select","column_list":"","order_by":"","target_table":"CORE_MEMBER_BANKS","context":"","filters":[],"type_desc":"Combo Binding SQL","conditional_operator":"CONTAINS","rules":{"group":{"operator":"AND","rules":[]},"query":"()"},"sel_columns":[]}
		this.ctrl.memory154.image_association = ""
		this.ctrl.memory154.show = true
		this.ctrl.memory154.sub_content = ""
		this.ctrl.memory154.required = false
		this.ctrl.memory154.vld_rules = []
		this.ctrl.memory154.targetcolumn_lower = "memory154"
		this.ctrl.memory154.disabled = false
		this.ctrl.memory154.view_name = "f_pacs004_unmatched_transactions_srch"
		this.ctrl.memory154.ctrl_id = "pacs004_unmatched_transactions_srch_memory154"
		this.ctrl.pacs004_unmatched_transactions_srch_memory154 = {}
		this.ctrl.pacs004_unmatched_transactions_srch_memory154.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_pacs004_unmatched_transactions_srch.memory154 = {}
	
		//Properties of uetr
		this.ctrl.uetr = {}
		this.ctrl.uetr.id = "RN21CN5"
		this.ctrl.uetr.desc = "UETR"
		this.ctrl.uetr.visible = true
		this.ctrl.uetr.label_name = "UETR"
		this.ctrl.uetr.df_code = "DF_1304_1665901396659"
		this.ctrl.uetr.df_description = "Column Group 1"
		this.ctrl.uetr.uictrl_code = "CDN_CTRL"
		this.ctrl.uetr.target_column = "UETR"
		this.ctrl.uetr.data_type = "TEXT"
		this.ctrl.uetr.data_length = 64
		this.ctrl.uetr.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.uetr.default_value = ""
		this.ctrl.uetr.is_memory_ctrl = ""
		this.ctrl.uetr.field_coordinates = ""
		this.ctrl.uetr.sub_details = ""
		this.ctrl.uetr.accept_char = ""
		this.ctrl.uetr.currency_format = ""
		this.ctrl.uetr.data_scale = ""
		this.ctrl.uetr.binding_name = "UETR"
		this.ctrl.uetr.hide_label = false
		this.ctrl.uetr.depends_on = ""
		this.ctrl.uetr.placeholder = ""
		this.ctrl.uetr.dynamic_param = ""
		this.ctrl.uetr.style_code = ""
		this.ctrl.uetr.data_source = ""
		this.ctrl.uetr.image_association = ""
		this.ctrl.uetr.show = true
		this.ctrl.uetr.sub_content = ""
		this.ctrl.uetr.required = false
		this.ctrl.uetr.vld_rules = []
		this.ctrl.uetr.targetcolumn_lower = "uetr"
		this.ctrl.uetr.disabled = false
		this.ctrl.uetr.view_name = "f_pacs004_unmatched_transactions_srch"
		this.ctrl.uetr.ctrl_id = "pacs004_unmatched_transactions_srch_uetr"
		this.ctrl.pacs004_unmatched_transactions_srch_uetr = {}
		this.ctrl.pacs004_unmatched_transactions_srch_uetr.onChangecomponent = new EventEmitter<any>()
	
		//Properties of payment_endtoend_id
		this.ctrl.payment_endtoend_id = {}
		this.ctrl.payment_endtoend_id.id = "RN21CN6"
		this.ctrl.payment_endtoend_id.desc = "End to End ID"
		this.ctrl.payment_endtoend_id.visible = true
		this.ctrl.payment_endtoend_id.label_name = "End to End ID"
		this.ctrl.payment_endtoend_id.df_code = "DF_1304_1665901396659"
		this.ctrl.payment_endtoend_id.df_description = "Column Group 1"
		this.ctrl.payment_endtoend_id.uictrl_code = "CDN_CTRL"
		this.ctrl.payment_endtoend_id.target_column = "PAYMENT_ENDTOEND_ID"
		this.ctrl.payment_endtoend_id.data_type = "TEXT"
		this.ctrl.payment_endtoend_id.data_length = 64
		this.ctrl.payment_endtoend_id.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.payment_endtoend_id.default_value = ""
		this.ctrl.payment_endtoend_id.is_memory_ctrl = ""
		this.ctrl.payment_endtoend_id.field_coordinates = ""
		this.ctrl.payment_endtoend_id.sub_details = ""
		this.ctrl.payment_endtoend_id.accept_char = ""
		this.ctrl.payment_endtoend_id.currency_format = ""
		this.ctrl.payment_endtoend_id.data_scale = ""
		this.ctrl.payment_endtoend_id.binding_name = "PAYMENT_ENDTOEND_ID"
		this.ctrl.payment_endtoend_id.hide_label = false
		this.ctrl.payment_endtoend_id.depends_on = ""
		this.ctrl.payment_endtoend_id.placeholder = ""
		this.ctrl.payment_endtoend_id.dynamic_param = ""
		this.ctrl.payment_endtoend_id.style_code = ""
		this.ctrl.payment_endtoend_id.data_source = ""
		this.ctrl.payment_endtoend_id.image_association = ""
		this.ctrl.payment_endtoend_id.show = true
		this.ctrl.payment_endtoend_id.sub_content = ""
		this.ctrl.payment_endtoend_id.required = false
		this.ctrl.payment_endtoend_id.vld_rules = []
		this.ctrl.payment_endtoend_id.targetcolumn_lower = "payment_endtoend_id"
		this.ctrl.payment_endtoend_id.disabled = false
		this.ctrl.payment_endtoend_id.view_name = "f_pacs004_unmatched_transactions_srch"
		this.ctrl.payment_endtoend_id.ctrl_id = "pacs004_unmatched_transactions_srch_payment_endtoend_id"
		this.ctrl.pacs004_unmatched_transactions_srch_payment_endtoend_id = {}
		this.ctrl.pacs004_unmatched_transactions_srch_payment_endtoend_id.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_pacs004_unmatched_transactions_srch.model = {"MEMORY63":"setcurrentdate(),{}","INTRBK_STTLM_AMNT":"","DBTR_IBAN":"","MEMORY154":"","UETR":"","PAYMENT_ENDTOEND_ID":""}
		this.screen_instance[this.comp_id].f_pacs004_unmatched_transactions_srch.Meta = [{"CTLR_CODE":"CDN_CUR_CTRL","DATA_TYPE":"NUMBER","TARGET_COLUMN":"INTRBK_STTLM_AMNT"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"DBTR_IBAN"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"UETR"},{"CTLR_CODE":"CDN_CTRL","DATA_TYPE":"TEXT","TARGET_COLUMN":"PAYMENT_ENDTOEND_ID"}]
		this.screen_instance[this.comp_id].f_pacs004_unmatched_transactions_srch.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_pacs004_unmatched_transactions_srch.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_pacs004_unmatched_transactions_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_pacs004_unmatched_transactions_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_pacs004_unmatched_transactions_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_pacs004_unmatched_transactions_srch[control][property] = value;
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
    