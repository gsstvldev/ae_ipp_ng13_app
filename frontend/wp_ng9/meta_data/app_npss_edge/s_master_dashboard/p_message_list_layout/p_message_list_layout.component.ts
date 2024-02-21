/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34474 
Modified By     : Admin 
Modified Date   : 2024-Feb-21 8:4 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_master_dashboard
Profile Name    : Message List Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_message_list_layout',
  templateUrl: './p_message_list_layout.component.html',
  styleUrls: ['./p_message_list_layout.component.css']
})

// Start of class 
export class p_message_list_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	message_detail_action : any = {}
	message_detail : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.message_detail_action.desc = "Message Detail Action"
		this.message_detail_action.need_header = ""
		this.message_detail.desc = "Message Detail"
		this.message_detail.need_header = true
	

    this.screen_instance['p_message_list_layout'] = {};
    this.screen_instance['p_message_list_layout']['checkHeader']=(component)=>{
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