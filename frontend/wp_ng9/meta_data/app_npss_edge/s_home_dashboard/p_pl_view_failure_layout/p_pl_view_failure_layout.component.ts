/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 31109 
Modified By     : Admin 
Modified Date   : 2023-Jul-17 12:26 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_home_dashboard
Profile Name    : PL View Failure Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_pl_view_failure_layout',
  templateUrl: './p_pl_view_failure_layout.component.html',
  styleUrls: ['./p_pl_view_failure_layout.component.css']
})

// Start of class 
export class p_pl_view_failure_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	single_pl_back_ui : any = {}
	view_failure_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.single_pl_back_ui.desc = "Single PL Back UI"
		this.single_pl_back_ui.need_header = ""
		this.view_failure_ui.desc = "View Failure UI"
		this.view_failure_ui.need_header = ""
	

    this.screen_instance['p_pl_view_failure_layout'] = {};
    this.screen_instance['p_pl_view_failure_layout']['checkHeader']=(component)=>{
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