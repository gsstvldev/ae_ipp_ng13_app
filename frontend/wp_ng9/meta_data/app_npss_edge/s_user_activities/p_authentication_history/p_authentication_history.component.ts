/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34725 
Modified By     : Admin 
Modified Date   : 2024-Mar-12 8:37 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_user_activities
Profile Name    : Authentication History--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_authentication_history',
  templateUrl: './p_authentication_history.component.html',
  styleUrls: ['./p_authentication_history.component.css']
})

// Start of class 
export class p_authentication_historyComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	authentication_history : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.authentication_history.desc = "Authentication History"
		this.authentication_history.need_header = true
	

    this.screen_instance['p_authentication_history'] = {};
    this.screen_instance['p_authentication_history']['checkHeader']=(component)=>{
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