/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28542 
Modified By     : Admin 
Modified Date   : 2023-Mar-08 6:23 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_exceptions
Profile Name    : View Error Log Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_view_error_log_layout',
  templateUrl: './p_view_error_log_layout.component.html',
  styleUrls: ['./p_view_error_log_layout.component.css']
})

// Start of class 
export class p_view_error_log_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	single_back_ui : any = {}
	error_log : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.single_back_ui.desc = "Single Back UI"
		this.single_back_ui.need_header = ""
		this.error_log.desc = "Error Log"
		this.error_log.need_header = false
	

    this.screen_instance['p_view_error_log_layout'] = {};
    this.screen_instance['p_view_error_log_layout']['checkHeader']=(component)=>{
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