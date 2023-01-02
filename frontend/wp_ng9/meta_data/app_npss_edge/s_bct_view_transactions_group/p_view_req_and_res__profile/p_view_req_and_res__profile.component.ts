/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27651 
Modified By     : Admin 
Modified Date   : 2023-Jan-02 8:12 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_bct_view_transactions_group
Profile Name    : View Req and Res  Profile--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_view_req_and_res__profile',
  templateUrl: './p_view_req_and_res__profile.component.html',
  styleUrls: ['./p_view_req_and_res__profile.component.css']
})

// Start of class 
export class p_view_req_and_res__profileComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	single_back_ui : any = {}
	request_ui : any = {}
	response_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.single_back_ui.desc = "Single Back UI"
		this.single_back_ui.need_header = ""
		this.request_ui.desc = "Request UI"
		this.request_ui.need_header = ""
		this.response_ui.desc = "Response UI"
		this.response_ui.need_header = ""
	

    this.screen_instance['p_view_req_and_res__profile'] = {};
    this.screen_instance['p_view_req_and_res__profile']['checkHeader']=(component)=>{
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