/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28918 
Modified By     : Admin 
Modified Date   : 2023-Mar-25 13:35 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_rejected_reversals
Profile Name    : History Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_history_layout',
  templateUrl: './p_history_layout.component.html',
  styleUrls: ['./p_history_layout.component.css']
})

// Start of class 
export class p_history_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	process_log_action : any = {}
	history_detail : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.process_log_action.desc = "Process Log Action"
		this.process_log_action.need_header = ""
		this.history_detail.desc = "History Detail"
		this.history_detail.need_header = true
	

    this.screen_instance['p_history_layout'] = {};
    this.screen_instance['p_history_layout']['checkHeader']=(component)=>{
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