/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28540 
Modified By     : Admin 
Modified Date   : 2023-Mar-08 7:58 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_user_activities
Profile Name    : Activities--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_activities',
  templateUrl: './p_activities.component.html',
  styleUrls: ['./p_activities.component.css']
})

// Start of class 
export class p_activitiesComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	activities : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.activities.desc = "Activities"
		this.activities.need_header = true
	

    this.screen_instance['p_activities'] = {};
    this.screen_instance['p_activities']['checkHeader']=(component)=>{
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