/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27607 
Modified By     : Admin 
Modified Date   : 2022-Dec-29 10:16 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_reversal_non_aed
Form Name       : NPSS Tran Remarks UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_tran_remarks_ui',
  templateUrl: './f_npss_tran_remarks_ui.component.html',
  styleUrls: ['./f_npss_tran_remarks_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_tran_remarks_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_tran_remarks_ui') form;
  @ViewChild('npss_tran_remarks_ui_remarks') element: ElementRef;
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

  
		//Properties of remarks
		this.ctrl.remarks = {}
		this.ctrl.remarks.id = "5dc69997-840d-4fde-b31d-2540eb0bd432_1672139269555"
		this.ctrl.remarks.desc = "Remarks"
		this.ctrl.remarks.visible = false
		this.ctrl.remarks.label_name = "Remarks"
		this.ctrl.remarks.df_code = "DF_1304_1665901396659"
		this.ctrl.remarks.df_description = "Column Group 1"
		this.ctrl.remarks.uictrl_code = "TXT"
		this.ctrl.remarks.target_column = "REMARKS"
		this.ctrl.remarks.data_type = "TEXT"
		this.ctrl.remarks.data_length = 256
		this.ctrl.remarks.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.remarks.default_value = ""
		this.ctrl.remarks.is_memory_ctrl = ""
		this.ctrl.remarks.field_coordinates = ""
		this.ctrl.remarks.sub_details = ""
		this.ctrl.remarks.accept_char = ""
		this.ctrl.remarks.currency_format = ""
		this.ctrl.remarks.data_scale = ""
		this.ctrl.remarks.hide_label = false
		this.ctrl.remarks.depends_on = ""
		this.ctrl.remarks.placeholder = ""
		this.ctrl.remarks.dynamic_param = ""
		this.ctrl.remarks.style_code = ""
		this.ctrl.remarks.data_source = ""
		this.ctrl.remarks.image_association = ""
		this.ctrl.remarks.show = true
		this.ctrl.remarks.sub_content = ""
		this.ctrl.remarks.required = false
		this.ctrl.remarks.vld_rules = []
		this.ctrl.remarks.targetcolumn_lower = "remarks"
		this.ctrl.remarks.disabled = false
		this.ctrl.remarks.view_name = "f_npss_tran_remarks_ui"
		this.ctrl.remarks.ctrl_id = "npss_tran_remarks_ui_remarks"
		this.ctrl.npss_tran_remarks_ui_remarks = {}
		this.ctrl.npss_tran_remarks_ui_remarks.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_tran_remarks_ui.model = {"REMARKS":""}
		this.screen_instance[this.comp_id].f_npss_tran_remarks_ui.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"REMARKS"}]
		this.screen_instance[this.comp_id].f_npss_tran_remarks_ui.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_tran_remarks_ui.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_tran_remarks_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_tran_remarks_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_tran_remarks_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_tran_remarks_ui[control][property] = value;
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
    