/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35086 
Modified By     : Admin 
Modified Date   : 2024-Apr-04 13:7 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_master_dashboard
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
  	nav_ui : any = {}
	outward : any = {}
	inward : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.nav_ui.desc = "Nav UI"
		this.nav_ui.need_header = ""
		this.outward.desc = "Outward"
		this.outward.need_header = true
		this.inward.desc = "Inward"
		this.inward.need_header = true
	

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