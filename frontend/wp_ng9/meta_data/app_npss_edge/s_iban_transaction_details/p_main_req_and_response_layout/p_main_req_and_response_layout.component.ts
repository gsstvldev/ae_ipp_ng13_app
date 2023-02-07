/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28030 
Modified By     : Admin 
Modified Date   : 2023-Feb-07 14:17 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_iban_transaction_details
Profile Name    : Main Req and Response Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_main_req_and_response_layout',
  templateUrl: './p_main_req_and_response_layout.component.html',
  styleUrls: ['./p_main_req_and_response_layout.component.css']
})

// Start of class 
export class p_main_req_and_response_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	main_back_ui : any = {}
	main_request_ui : any = {}
	main_response_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.main_back_ui.desc = "Main Back UI"
		this.main_back_ui.need_header = ""
		this.main_request_ui.desc = "Main Request UI"
		this.main_request_ui.need_header = ""
		this.main_response_ui.desc = "Main Response UI"
		this.main_response_ui.need_header = ""
	

    this.screen_instance['p_main_req_and_response_layout'] = {};
    this.screen_instance['p_main_req_and_response_layout']['checkHeader']=(component)=>{
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