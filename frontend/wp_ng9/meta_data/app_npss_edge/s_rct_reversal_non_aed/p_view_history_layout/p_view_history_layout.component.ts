/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 29006 
Modified By     : Admin 
Modified Date   : 2023-Apr-03 11:23 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_reversal_non_aed
Profile Name    : View History Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_view_history_layout',
  templateUrl: './p_view_history_layout.component.html',
  styleUrls: ['./p_view_history_layout.component.css']
})

// Start of class 
export class p_view_history_layoutComponent implements OnInit {
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
	

    this.screen_instance['p_view_history_layout'] = {};
    this.screen_instance['p_view_history_layout']['checkHeader']=(component)=>{
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