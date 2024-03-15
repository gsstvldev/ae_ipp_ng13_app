/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34784 
Modified By     : Admin 
Modified Date   : 2024-Mar-15 11:48 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_master_dashboard
Profile Name    : Process Log history List layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_process_log_history_list_layout',
  templateUrl: './p_process_log_history_list_layout.component.html',
  styleUrls: ['./p_process_log_history_list_layout.component.css']
})

// Start of class 
export class p_process_log_history_list_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	process_log_ui : any = {}
	history_detail : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.process_log_ui.desc = "Process Log UI"
		this.process_log_ui.need_header = ""
		this.history_detail.desc = "History Detail"
		this.history_detail.need_header = true
	

    this.screen_instance['p_process_log_history_list_layout'] = {};
    this.screen_instance['p_process_log_history_list_layout']['checkHeader']=(component)=>{
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