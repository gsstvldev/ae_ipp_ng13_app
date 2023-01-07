/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27723 
Modified By     : Admin 
Modified Date   : 2023-Jan-07 6:50 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_p2p_view_outward_payments
Profile Name    : Main Req and Res Profile--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_main_req_and_res_profile',
  templateUrl: './p_main_req_and_res_profile.component.html',
  styleUrls: ['./p_main_req_and_res_profile.component.css']
})

// Start of class 
export class p_main_req_and_res_profileComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	back_ui : any = {}
	main_request_ui : any = {}
	main_response_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.back_ui.desc = "Back UI"
		this.back_ui.need_header = ""
		this.main_request_ui.desc = "Main Request UI"
		this.main_request_ui.need_header = ""
		this.main_response_ui.desc = "Main Response UI"
		this.main_response_ui.need_header = ""
	

    this.screen_instance['p_main_req_and_res_profile'] = {};
    this.screen_instance['p_main_req_and_res_profile']['checkHeader']=(component)=>{
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