/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 32937 
Modified By     : Admin 
Modified Date   : 2023-Oct-30 7:31 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_all_op_arc_transactions
Profile Name    : View Process log View Req and Res Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_view_process_log_view_req_and_res_layout',
  templateUrl: './p_view_process_log_view_req_and_res_layout.component.html',
  styleUrls: ['./p_view_process_log_view_req_and_res_layout.component.css']
})

// Start of class 
export class p_view_process_log_view_req_and_res_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	view_pro_log_req_and_res_ui : any = {}
	request_ui : any = {}
	response_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.view_pro_log_req_and_res_ui.desc = "View pro log Req and Res UI"
		this.view_pro_log_req_and_res_ui.need_header = ""
		this.request_ui.desc = "Request UI"
		this.request_ui.need_header = ""
		this.response_ui.desc = "Response UI"
		this.response_ui.need_header = ""
	

    this.screen_instance['p_view_process_log_view_req_and_res_layout'] = {};
    this.screen_instance['p_view_process_log_view_req_and_res_layout']['checkHeader']=(component)=>{
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