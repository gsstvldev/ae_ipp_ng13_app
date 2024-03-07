/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34698 
Modified By     : Admin 
Modified Date   : 2024-Mar-07 11:13 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_reversal
Form Name       : Reversal AED UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_reversal_aed_ui',
  templateUrl: './f_reversal_aed_ui.component.html',
  styleUrls: ['./f_reversal_aed_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_reversal_aed_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_reversal_aed_ui') form;
  @ViewChild('reversal_aed_ui_tran_charge') element: ElementRef;
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

  
		//Properties of tran_charge
		this.ctrl.tran_charge = {}
		this.ctrl.tran_charge.id = "f6b4711b-bdfd-47bf-aff1-32936a141a0d_1677929251282"
		this.ctrl.tran_charge.desc = "Txn Charges AED"
		this.ctrl.tran_charge.visible = true
		this.ctrl.tran_charge.label_name = "Txn Charges AED"
		this.ctrl.tran_charge.df_code = "DF_1304_1665901396659"
		this.ctrl.tran_charge.df_description = "Column Group 1"
		this.ctrl.tran_charge.uictrl_code = "CUR"
		this.ctrl.tran_charge.target_column = "TRAN_CHARGE"
		this.ctrl.tran_charge.data_type = "NUMBER"
		this.ctrl.tran_charge.data_length = 19
		this.ctrl.tran_charge.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.tran_charge.default_value = ""
		this.ctrl.tran_charge.is_memory_ctrl = ""
		this.ctrl.tran_charge.field_coordinates = ""
		this.ctrl.tran_charge.sub_details = ""
		this.ctrl.tran_charge.accept_char = ""
		this.ctrl.tran_charge.currency_format = ""
		this.ctrl.tran_charge.data_scale = "6"
		this.ctrl.tran_charge.hide_label = false
		this.ctrl.tran_charge.depends_on = ""
		this.ctrl.tran_charge.placeholder = ""
		this.ctrl.tran_charge.dynamic_param = ""
		this.ctrl.tran_charge.style_code = ""
		this.ctrl.tran_charge.data_source = ""
		this.ctrl.tran_charge.image_association = ""
		this.ctrl.tran_charge.show = true
		this.ctrl.tran_charge.sub_content = ""
		this.ctrl.tran_charge.required = false
		this.ctrl.tran_charge.vld_rules = []
		this.ctrl.tran_charge.targetcolumn_lower = "tran_charge"
		this.ctrl.tran_charge.disabled = false
		this.ctrl.tran_charge.view_name = "f_reversal_aed_ui"
		this.ctrl.tran_charge.ctrl_id = "reversal_aed_ui_tran_charge"
		this.ctrl.reversal_aed_ui_tran_charge = {}
		this.ctrl.reversal_aed_ui_tran_charge.onChangecomponent = new EventEmitter<any>()
	
		//Properties of tran_amount
		this.ctrl.tran_amount = {}
		this.ctrl.tran_amount.id = "6d5be311-f48c-4282-94b3-2191023470d5_1677929251282"
		this.ctrl.tran_amount.desc = "TXN Amount Account Currency"
		this.ctrl.tran_amount.visible = true
		this.ctrl.tran_amount.label_name = "TXN Amount Account Currency"
		this.ctrl.tran_amount.df_code = "DF_1304_1665901396659"
		this.ctrl.tran_amount.df_description = "Column Group 1"
		this.ctrl.tran_amount.uictrl_code = "CUR"
		this.ctrl.tran_amount.target_column = "TRAN_AMOUNT"
		this.ctrl.tran_amount.data_type = "NUMBER"
		this.ctrl.tran_amount.data_length = 19
		this.ctrl.tran_amount.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.tran_amount.default_value = ""
		this.ctrl.tran_amount.is_memory_ctrl = ""
		this.ctrl.tran_amount.field_coordinates = ""
		this.ctrl.tran_amount.sub_details = ""
		this.ctrl.tran_amount.accept_char = ""
		this.ctrl.tran_amount.currency_format = ""
		this.ctrl.tran_amount.data_scale = "6"
		this.ctrl.tran_amount.hide_label = false
		this.ctrl.tran_amount.depends_on = ""
		this.ctrl.tran_amount.placeholder = ""
		this.ctrl.tran_amount.dynamic_param = ""
		this.ctrl.tran_amount.style_code = ""
		this.ctrl.tran_amount.data_source = ""
		this.ctrl.tran_amount.image_association = ""
		this.ctrl.tran_amount.show = true
		this.ctrl.tran_amount.sub_content = ""
		this.ctrl.tran_amount.required = false
		this.ctrl.tran_amount.vld_rules = []
		this.ctrl.tran_amount.targetcolumn_lower = "tran_amount"
		this.ctrl.tran_amount.disabled = false
		this.ctrl.tran_amount.view_name = "f_reversal_aed_ui"
		this.ctrl.tran_amount.ctrl_id = "reversal_aed_ui_tran_amount"
		this.ctrl.reversal_aed_ui_tran_amount = {}
		this.ctrl.reversal_aed_ui_tran_amount.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_reversal_aed_ui.model = {"TRAN_CHARGE":"","TRAN_AMOUNT":""}
		this.screen_instance[this.comp_id].f_reversal_aed_ui.Meta = [{"CTLR_CODE":"CUR","DATA_TYPE":"NUMBER","TARGET_COLUMN":"TRAN_CHARGE"},{"CTLR_CODE":"CUR","DATA_TYPE":"NUMBER","TARGET_COLUMN":"TRAN_AMOUNT"}]
		this.screen_instance[this.comp_id].f_reversal_aed_ui.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_reversal_aed_ui.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_reversal_aed_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_reversal_aed_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_reversal_aed_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_reversal_aed_ui[control][property] = value;
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
    