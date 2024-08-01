/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 36171 
Modified By     : Admin 
Modified Date   : 2024-Aug-01 4:27 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_camt053
Profile Name    : Message Data Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_message_data_layout',
  templateUrl: './p_message_data_layout.component.html',
  styleUrls: ['./p_message_data_layout.component.css']
})

// Start of class 
export class p_message_data_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	back_ui : any = {}
	message_data_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.back_ui.desc = "Back UI"
		this.back_ui.need_header = ""
		this.message_data_ui.desc = "Message Data UI"
		this.message_data_ui.need_header = ""
	

    this.screen_instance['p_message_data_layout'] = {};
    this.screen_instance['p_message_data_layout']['checkHeader']=(component)=>{
      if(this[component]!=undefined && this[component]["need_header"]!=undefined && (this[component]["need_header"]=="on"||this[component]["need_header"]==true)) {
        return {hidden:false,desc:this[component]["desc"]};
      } else {
        return {hidden:true,desc:''};
      }
    } 
  }
  
  isHidden(comp_id:string,view:string) {
    return !(this.screen_instance[comp_id][view].show && this.screen_instance[comp_id].current_view==view);
  }
}
// End of class 