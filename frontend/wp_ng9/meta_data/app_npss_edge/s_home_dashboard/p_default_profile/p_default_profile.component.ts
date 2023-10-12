/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 32663 
Modified By     : Admin 
Modified Date   : 2023-Oct-12 6:51 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_home_dashboard
Profile Name    : Default Profile--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_default_profile',
  templateUrl: './p_default_profile.component.html',
  styleUrls: ['./p_default_profile.component.css']
})

// Start of class 
export class p_default_profileComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	home_dashboard_title : any = {}
	nav_ui : any = {}
	outward_list : any = {}
	outward_overlay_failures_list : any = {}
	inward_list : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.home_dashboard_title.desc = "Home Dashboard Title"
		this.home_dashboard_title.need_header = ""
		this.nav_ui.desc = "Nav UI"
		this.nav_ui.need_header = ""
		this.outward_list.desc = "Outward List"
		this.outward_list.need_header = true
		this.outward_overlay_failures_list.desc = "Outward Overlay Failures List"
		this.outward_overlay_failures_list.need_header = true
		this.inward_list.desc = "Inward List"
		this.inward_list.need_header = true
	

    this.screen_instance['p_default_profile'] = {};
    this.screen_instance['p_default_profile']['checkHeader']=(component)=>{
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