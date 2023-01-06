/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27718 
Modified By     : Admin 
Modified Date   : 2023-Jan-06 6:32 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_notification_logs
Form Name       : NPSS Kafka Message UI--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input,ViewChild,EventEmitter,ElementRef } from '@angular/core';
import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
@Component({
  selector: 'f_npss_kafka_message_ui',
  templateUrl: './f_npss_kafka_message_ui.component.html',
  styleUrls: ['./f_npss_kafka_message_ui.component.css'],
  providers:[ComponenthelperService]
})

// Start of class 
export class f_npss_kafka_message_uiComponent implements OnInit {
  @Input() screen_instance: any;
  @Input() comp_id: any; 
  hasHeader:boolean;
  component_header:string;
  @ViewChild('f_npss_kafka_message_ui') form;
  @ViewChild('npss_kafka_message_ui_kafka_message') element: ElementRef;
  // Variables 
  show:boolean  
  profile_name
	ctrl : any = {}
	dt_code : string = "dt_1304_1665901130705"
	dtt_code : string = "dtt_1304_1672928670076"

  
  // Constructor 
  constructor(private ComponenthelperService:ComponenthelperService, private element_profile:ElementRef) { 
  }
  
focustoelement(){
      this.element.nativeElement.children[0].children[0].children[1].focus()
    }

  // Page Init 
  ngOnInit() {
    this.screen_instance[this.comp_id].form_instance = this;

  
		//Properties of kafka_message
		this.ctrl.kafka_message = {}
		this.ctrl.kafka_message.id = "RN01CN1"
		this.ctrl.kafka_message.desc = "kafka message"
		this.ctrl.kafka_message.visible = false
		this.ctrl.kafka_message.label_name = "kafka message"
		this.ctrl.kafka_message.df_code = "DF_1304_1672928913148"
		this.ctrl.kafka_message.df_description = "Column Group 1"
		this.ctrl.kafka_message.uictrl_code = "RICH_TXT"
		this.ctrl.kafka_message.target_column = "KAFKA_MESSAGE"
		this.ctrl.kafka_message.data_type = "TEXT"
		this.ctrl.kafka_message.data_length = 80000
		this.ctrl.kafka_message.zone_df_code = "DF_1304_1672928913148"
		this.ctrl.kafka_message.default_value = ""
		this.ctrl.kafka_message.is_memory_ctrl = ""
		this.ctrl.kafka_message.field_coordinates = ""
		this.ctrl.kafka_message.sub_details = ""
		this.ctrl.kafka_message.accept_char = ""
		this.ctrl.kafka_message.currency_format = ""
		this.ctrl.kafka_message.data_scale = ""
		this.ctrl.kafka_message.hide_label = false
		this.ctrl.kafka_message.depends_on = ""
		this.ctrl.kafka_message.placeholder = ""
		this.ctrl.kafka_message.dynamic_param = ""
		this.ctrl.kafka_message.style_code = ""
		this.ctrl.kafka_message.data_source = ""
		this.ctrl.kafka_message.image_association = ""
		this.ctrl.kafka_message.show = true
		this.ctrl.kafka_message.sub_content = ""
		this.ctrl.kafka_message.required = false
		this.ctrl.kafka_message.vld_rules = []
		this.ctrl.kafka_message.targetcolumn_lower = "kafka_message"
		this.ctrl.kafka_message.disabled = false
		this.ctrl.kafka_message.view_name = "f_npss_kafka_message_ui"
		this.ctrl.kafka_message.ctrl_id = "npss_kafka_message_ui_kafka_message"
		this.ctrl.npss_kafka_message_ui_kafka_message = {}
		this.ctrl.npss_kafka_message_ui_kafka_message.onChangecomponent = new EventEmitter<any>()
		this.screen_instance[this.comp_id].f_npss_kafka_message_ui.model = {"KAFKA_MESSAGE":""}
		this.screen_instance[this.comp_id].f_npss_kafka_message_ui.Meta = [{"CTLR_CODE":"RICH_TXT","DATA_TYPE":"TEXT","TARGET_COLUMN":"KAFKA_MESSAGE"}]
		this.screen_instance[this.comp_id].f_npss_kafka_message_ui.dt_code = "dt_1304_1665901130705"
		this.screen_instance[this.comp_id].f_npss_kafka_message_ui.dtt_code = "dtt_1304_1672928670076"
		this.screen_instance[this.comp_id].f_npss_kafka_message_ui.controls = this.screen_instance[this.comp_id].form_instance.ctrl
	
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
    if(this.screen_instance[this.comp_id].f_npss_kafka_message_ui[control]==undefined) {
      this.screen_instance[this.comp_id].f_npss_kafka_message_ui[control] = {}
    }
    this.screen_instance[this.comp_id].f_npss_kafka_message_ui[control][property] = value;
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
    