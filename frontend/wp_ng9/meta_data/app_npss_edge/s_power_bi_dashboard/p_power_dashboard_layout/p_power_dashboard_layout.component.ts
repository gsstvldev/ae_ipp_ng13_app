/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26401 
Modified By     : Admin 
Modified Date   : 2022-Oct-12 5:35 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_power_bi_dashboard
Profile Name    : Power Dashboard Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_power_dashboard_layout',
  templateUrl: './p_power_dashboard_layout.component.html',
  styleUrls: ['./p_power_dashboard_layout.component.css']
})

// Start of class 
export class p_power_dashboard_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	list : any = {}
	power_reports_dashboard : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.list.desc = "List"
		this.list.need_header = true
		this.power_reports_dashboard.desc = "Power_reports_dashboard"
		this.power_reports_dashboard.need_header = ""
	

    this.screen_instance['p_power_dashboard_layout'] = {};
    this.screen_instance['p_power_dashboard_layout']['checkHeader']=(component)=>{
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