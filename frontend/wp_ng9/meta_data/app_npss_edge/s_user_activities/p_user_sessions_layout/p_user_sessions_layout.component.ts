/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35197 
Modified By     : Admin 
Modified Date   : 2024-Apr-23 12:19 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_user_activities
Profile Name    : User Sessions Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_user_sessions_layout',
  templateUrl: './p_user_sessions_layout.component.html',
  styleUrls: ['./p_user_sessions_layout.component.css']
})

// Start of class 
export class p_user_sessions_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	user_sessions : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.user_sessions.desc = "User Sessions"
		this.user_sessions.need_header = true
	

    this.screen_instance['p_user_sessions_layout'] = {};
    this.screen_instance['p_user_sessions_layout']['checkHeader']=(component)=>{
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