/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27310 
Modified By     : Admin 
Modified Date   : 2022-Dec-12 8:3 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_transaction_details
Profile Name    : Main Req and Res Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_main_req_and_res_layout',
  templateUrl: './p_main_req_and_res_layout.component.html',
  styleUrls: ['./p_main_req_and_res_layout.component.css']
})

// Start of class 
export class p_main_req_and_res_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	message_detail_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.message_detail_ui.desc = "Message Detail UI"
		this.message_detail_ui.need_header = ""
	

    this.screen_instance['p_main_req_and_res_layout'] = {};
    this.screen_instance['p_main_req_and_res_layout']['checkHeader']=(component)=>{
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