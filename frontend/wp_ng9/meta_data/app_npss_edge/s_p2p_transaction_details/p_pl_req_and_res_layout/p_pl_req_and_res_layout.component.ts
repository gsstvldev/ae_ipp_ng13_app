/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27800 
Modified By     : Admin 
Modified Date   : 2023-Jan-12 12:47 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_p2p_transaction_details
Profile Name    : PL Req and Res Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_pl_req_and_res_layout',
  templateUrl: './p_pl_req_and_res_layout.component.html',
  styleUrls: ['./p_pl_req_and_res_layout.component.css']
})

// Start of class 
export class p_pl_req_and_res_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	hst_process_log_back : any = {}
	request_ui : any = {}
	response_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.hst_process_log_back.desc = "HST Process Log Back"
		this.hst_process_log_back.need_header = ""
		this.request_ui.desc = "Request UI"
		this.request_ui.need_header = ""
		this.response_ui.desc = "Response UI"
		this.response_ui.need_header = ""
	

    this.screen_instance['p_pl_req_and_res_layout'] = {};
    this.screen_instance['p_pl_req_and_res_layout']['checkHeader']=(component)=>{
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