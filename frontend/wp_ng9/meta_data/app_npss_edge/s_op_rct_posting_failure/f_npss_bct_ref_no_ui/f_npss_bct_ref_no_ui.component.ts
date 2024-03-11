/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34701 
Modified By     : Admin 
Modified Date   : 2024-Mar-11 6:27 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_op_rct_posting_failure
Form Name       : NPSS BCT REF NO UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_bct_ref_no_ui',
  templateUrl: './f_npss_bct_ref_no_ui.component.html',
  styleUrls: ['./f_npss_bct_ref_no_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_bct_ref_no_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_bct_ref_no_ui') form;
  @ViewChild('npss_bct_ref_no_ui_cbs_ref_no') element: ElementRef;
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

  
		//Properties of cbs_ref_no
		this.ctrl.cbs_ref_no = {}
		this.ctrl.cbs_ref_no.id = "RN01CN1"
		this.ctrl.cbs_ref_no.desc = "CBS Reference Number"
		this.ctrl.cbs_ref_no.visible = false
		this.ctrl.cbs_ref_no.label_name = "CBS Reference Number"
		this.ctrl.cbs_ref_no.df_code = "DF_1304_1665901396659"
		this.ctrl.cbs_ref_no.df_description = "Column Group 1"
		this.ctrl.cbs_ref_no.uictrl_code = "TXT"
		this.ctrl.cbs_ref_no.target_column = "CBS_REF_NO"
		this.ctrl.cbs_ref_no.data_type = "TEXT"
		this.ctrl.cbs_ref_no.data_length = 40
		this.ctrl.cbs_ref_no.zone_df_code = "DF_1304_1665901396659"
		this.ctrl.cbs_ref_no.default_value = ""
		this.ctrl.cbs_ref_no.is_memory_ctrl = ""
		this.ctrl.cbs_ref_no.field_coordinates = ""
		this.ctrl.cbs_ref_no.sub_details = ""
		this.ctrl.cbs_ref_no.accept_char = ""
		this.ctrl.cbs_ref_no.currency_format = ""
		this.ctrl.cbs_ref_no.data_scale = ""
		this.ctrl.cbs_ref_no.hide_label = false
		this.ctrl.cbs_ref_no.depends_on = ""
		this.ctrl.cbs_ref_no.placeholder = ""
		this.ctrl.cbs_ref_no.dynamic_param = ""
		this.ctrl.cbs_ref_no.style_code = ""
		this.ctrl.cbs_ref_no.data_source = ""
		this.ctrl.cbs_ref_no.image_association = ""
		this.ctrl.cbs_ref_no.show = true
		this.ctrl.cbs_ref_no.sub_content = ""
		this.ctrl.cbs_ref_no.required = false
		this.ctrl.cbs_ref_no.vld_rules = []
		this.ctrl.cbs_ref_no.targetcolumn_lower = "cbs_ref_no"
		this.ctrl.cbs_ref_no.disabled = false
		this.ctrl.cbs_ref_no.view_name = "f_npss_bct_ref_no_ui"
		this.ctrl.cbs_ref_no.ctrl_id = "npss_bct_ref_no_ui_cbs_ref_no"
		this.ctrl.npss_bct_ref_no_ui_cbs_ref_no = {}
		this.ctrl.npss_bct_ref_no_ui_cbs_ref_no.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_bct_ref_no_ui.model = {"CBS_REF_NO":""}
		this.screen_instance[this.comp_id].f_npss_bct_ref_no_ui.Meta = [{"CTLR_CODE":"TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"CBS_REF_NO"}]
		this.screen_instance[this.comp_id].f_npss_bct_ref_no_ui.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_bct_ref_no_ui.dtt_code = "dtt_1304_1665901217208"
		this.screen_instance[this.comp_id].f_npss_bct_ref_no_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_bct_ref_no_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_bct_ref_no_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_bct_ref_no_ui[control][property] = value;
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
    