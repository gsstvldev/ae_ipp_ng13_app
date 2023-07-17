/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 31106 
Modified By     : Admin 
Modified Date   : 2023-Jul-17 7:13 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_home_dashboard
Profile Name    : ProcessLog Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_processlog_layout',
  templateUrl: './p_processlog_layout.component.html',
  styleUrls: ['./p_processlog_layout.component.css']
})

// Start of class 
export class p_processlog_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	navigation_pl : any = {}
	outward_overlay_failures_chart : any = {}
	overlay_failure_detail_list : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.navigation_pl.desc = "Navigation PL"
		this.navigation_pl.need_header = ""
		this.outward_overlay_failures_chart.desc = "Outward Overlay Failures Chart"
		this.outward_overlay_failures_chart.need_header = true
		this.overlay_failure_detail_list.desc = "Overlay Failure Detail List"
		this.overlay_failure_detail_list.need_header = true
	

    this.screen_instance['p_processlog_layout'] = {};
    this.screen_instance['p_processlog_layout']['checkHeader']=(component)=>{
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