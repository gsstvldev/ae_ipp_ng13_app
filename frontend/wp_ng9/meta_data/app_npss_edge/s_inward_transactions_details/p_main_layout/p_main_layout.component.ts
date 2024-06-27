/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35865 
Modified By     : Admin 
Modified Date   : 2024-Jun-27 7:13 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_inward_transactions_details
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
  	navigation : any = {}
	home_dashboard_title : any = {}
	list : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.navigation.desc = "Navigation"
		this.navigation.need_header = ""
		this.home_dashboard_title.desc = "Home Dashboard Title"
		this.home_dashboard_title.need_header = ""
		this.list.desc = "List"
		this.list.need_header = true
	

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