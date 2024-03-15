/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34784 
Modified By     : Admin 
Modified Date   : 2024-Mar-15 11:47 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_all_op_transactions
Profile Name    : View Message UI Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_view_message_ui_layout',
  templateUrl: './p_view_message_ui_layout.component.html',
  styleUrls: ['./p_view_message_ui_layout.component.css']
})

// Start of class 
export class p_view_message_ui_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	message_back_ui : any = {}
	message_detail_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.message_back_ui.desc = "Message Back UI"
		this.message_back_ui.need_header = false
		this.message_detail_ui.desc = "Message Detail UI"
		this.message_detail_ui.need_header = ""
	

    this.screen_instance['p_view_message_ui_layout'] = {};
    this.screen_instance['p_view_message_ui_layout']['checkHeader']=(component)=>{
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