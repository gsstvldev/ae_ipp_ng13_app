/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 32631 
Modified By     : Admin 
Modified Date   : 2023-Oct-10 12:58 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_all_op_transactions
Profile Name    : View API Failure Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_view_api_failure_layout',
  templateUrl: './p_view_api_failure_layout.component.html',
  styleUrls: ['./p_view_api_failure_layout.component.css']
})

// Start of class 
export class p_view_api_failure_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	view_api_failure__action_ui : any = {}
	api_queue : any = {}
	view_process_log_list : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.view_api_failure__action_ui.desc = "View API Failure  Action UI"
		this.view_api_failure__action_ui.need_header = ""
		this.api_queue.desc = "API Queue"
		this.api_queue.need_header = true
		this.view_process_log_list.desc = "View Process Log List"
		this.view_process_log_list.need_header = true
	

    this.screen_instance['p_view_api_failure_layout'] = {};
    this.screen_instance['p_view_api_failure_layout']['checkHeader']=(component)=>{
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