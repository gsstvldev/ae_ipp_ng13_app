/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 29075 
Modified By     : Admin 
Modified Date   : 2023-Apr-11 9:52 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_manual_verification
Profile Name    : View Req and Res--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_view_req_and_res',
  templateUrl: './p_view_req_and_res.component.html',
  styleUrls: ['./p_view_req_and_res.component.css']
})

// Start of class 
export class p_view_req_and_resComponent implements OnInit {
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
	

    this.screen_instance['p_view_req_and_res'] = {};
    this.screen_instance['p_view_req_and_res']['checkHeader']=(component)=>{
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