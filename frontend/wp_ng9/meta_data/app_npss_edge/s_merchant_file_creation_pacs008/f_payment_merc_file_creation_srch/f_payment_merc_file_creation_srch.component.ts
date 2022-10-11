/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26378 
Modified By     : Admin 
Modified Date   : 2022-Oct-11 9:14 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_file_creation_pacs008
Form Name       : Payment Merc File Creation SRCH--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_payment_merc_file_creation_srch',
  templateUrl: './f_payment_merc_file_creation_srch.component.html',
  styleUrls: ['./f_payment_merc_file_creation_srch.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_payment_merc_file_creation_srchComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_payment_merc_file_creation_srch') form;
  @ViewChild('payment_merc_file_creation_srch_memory58') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665384579126"
	dtt_code : string = "dtt_1304_1665386727379"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of memory58
		this.ctrl.memory58 = {}
		this.ctrl.memory58.id = "RN01CN1"
		this.ctrl.memory58.desc = "Createddate"
		this.ctrl.memory58.visible = false
		this.ctrl.memory58.label_name = "Createddate"
		this.ctrl.memory58.df_code = "DF_1304_1665386831744"
		this.ctrl.memory58.df_description = "Column Group 2"
		this.ctrl.memory58.uictrl_code = "DTP"
		this.ctrl.memory58.target_column = "memory58"
		this.ctrl.memory58.data_type = "DATETIME"
		this.ctrl.memory58.data_length = 0
		this.ctrl.memory58.zone_df_code = "DF_1304_1665386831744"
		this.ctrl.memory58.default_value = ""
		this.ctrl.memory58.is_memory_ctrl = "Y"
		this.ctrl.memory58.field_coordinates = ""
		this.ctrl.memory58.sub_details = ""
		this.ctrl.memory58.accept_char = ""
		this.ctrl.memory58.currency_format = ""
		this.ctrl.memory58.data_scale = ""
		this.ctrl.memory58.binding_name = "CREATEDDATE"
		this.ctrl.memory58.hide_label = false
		this.ctrl.memory58.depends_on = ""
		this.ctrl.memory58.placeholder = ""
		this.ctrl.memory58.dynamic_param = ""
		this.ctrl.memory58.style_code = ""
		this.ctrl.memory58.data_source = ""
		this.ctrl.memory58.image_association = ""
		this.ctrl.memory58.show = true
		this.ctrl.memory58.sub_content = ""
		this.ctrl.memory58.required = false
		this.ctrl.memory58.vld_rules = []
		this.ctrl.memory58.targetcolumn_lower = "memory58"
		this.ctrl.memory58.disabled = false
		this.ctrl.memory58.view_name = "f_payment_merc_file_creation_srch"
		this.ctrl.memory58.ctrl_id = "payment_merc_file_creation_srch_memory58"
		this.ctrl.payment_merc_file_creation_srch_memory58 = {}
		this.ctrl.payment_merc_file_creation_srch_memory58.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_payment_merc_file_creation_srch.model = {"MEMORY58":""}
		this.screen_instance[this.comp_id].f_payment_merc_file_creation_srch.Meta = []
		this.screen_instance[this.comp_id].f_payment_merc_file_creation_srch.dt_code = "dt_1304_1665384579126"
		this.screen_instance[this.comp_id].f_payment_merc_file_creation_srch.dtt_code = "dtt_1304_1665386727379"
		this.screen_instance[this.comp_id].f_payment_merc_file_creation_srch.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_payment_merc_file_creation_srch[control]==undefined) {
      this.screen_instance[this.comp_id].f_payment_merc_file_creation_srch[control] = {}
    }
    this.screen_instance[this.comp_id].f_payment_merc_file_creation_srch[control][property] = value;
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
    