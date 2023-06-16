/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 30225 
Modified By     : Admin 
Modified Date   : 2023-Jun-16 10:52 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_all_op_transactions
Profile Name    : View Process log Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_view_process_log_layout',
  templateUrl: './p_view_process_log_layout.component.html',
  styleUrls: ['./p_view_process_log_layout.component.css']
})

// Start of class 
export class p_view_process_log_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	view_process_log_ui : any = {}
	history_details : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.view_process_log_ui.desc = "View Process log UI"
		this.view_process_log_ui.need_header = ""
		this.history_details.desc = "History Details"
		this.history_details.need_header = true
	

    this.screen_instance['p_view_process_log_layout'] = {};
    this.screen_instance['p_view_process_log_layout']['checkHeader']=(component)=>{
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