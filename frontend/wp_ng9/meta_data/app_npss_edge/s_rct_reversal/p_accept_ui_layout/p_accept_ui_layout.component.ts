/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27033 
Modified By     : Admin 
Modified Date   : 2022-Nov-23 7:38 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_reversal
Profile Name    : Accept UI Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_accept_ui_layout',
  templateUrl: './p_accept_ui_layout.component.html',
  styleUrls: ['./p_accept_ui_layout.component.css']
})

// Start of class 
export class p_accept_ui_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	reversal_ui : any = {}
	process_log_list : any = {}
	reversal_action_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.reversal_ui.desc = "Reversal UI"
		this.reversal_ui.need_header = ""
		this.process_log_list.desc = "Process Log List"
		this.process_log_list.need_header = true
		this.reversal_action_ui.desc = "Reversal Action UI"
		this.reversal_action_ui.need_header = ""
	

    this.screen_instance['p_accept_ui_layout'] = {};
    this.screen_instance['p_accept_ui_layout']['checkHeader']=(component)=>{
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