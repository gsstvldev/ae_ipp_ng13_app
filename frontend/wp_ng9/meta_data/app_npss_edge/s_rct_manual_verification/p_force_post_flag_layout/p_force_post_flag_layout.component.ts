/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34784 
Modified By     : Admin 
Modified Date   : 2024-Mar-15 11:47 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_manual_verification
Profile Name    : Force Post Flag Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_force_post_flag_layout',
  templateUrl: './p_force_post_flag_layout.component.html',
  styleUrls: ['./p_force_post_flag_layout.component.css']
})

// Start of class 
export class p_force_post_flag_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	force_post_flag_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.force_post_flag_ui.desc = "Force Post Flag UI"
		this.force_post_flag_ui.need_header = ""
	

    this.screen_instance['p_force_post_flag_layout'] = {};
    this.screen_instance['p_force_post_flag_layout']['checkHeader']=(component)=>{
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