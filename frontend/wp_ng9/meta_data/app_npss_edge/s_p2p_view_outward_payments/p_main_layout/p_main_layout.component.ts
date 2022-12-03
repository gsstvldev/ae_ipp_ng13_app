/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27166 
Modified By     : Admin 
Modified Date   : 2022-Dec-03 6:44 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_p2p_view_outward_payments
Profile Name    : Main Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_main_layout',
  templateUrl: './p_main_layout.component.html',
  styleUrls: ['./p_main_layout.component.css']
})

// Start of class 
export class p_main_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	navigation_ui : any = {}
	status_by_group : any = {}
	process_by_system : any = {}
	summary_list : any = {}
	transaction_list : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.navigation_ui.desc = "Navigation UI"
		this.navigation_ui.need_header = ""
		this.status_by_group.desc = "Status by Group"
		this.status_by_group.need_header = true
		this.process_by_system.desc = "Process by System"
		this.process_by_system.need_header = true
		this.summary_list.desc = "Summary List"
		this.summary_list.need_header = true
		this.transaction_list.desc = "Transaction list"
		this.transaction_list.need_header = true
	

    this.screen_instance['p_main_layout'] = {};
    this.screen_instance['p_main_layout']['checkHeader']=(component)=>{
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