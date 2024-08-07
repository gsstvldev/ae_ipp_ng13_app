/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27229 
Modified By     : Admin 
Modified Date   : 2022-Dec-08 7:43 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rtc_simulator
Profile Name    : MainLayout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_mainlayout',
  templateUrl: './p_mainlayout.component.html',
  styleUrls: ['./p_mainlayout.component.css']
})

// Start of class 
export class p_mainlayoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	data_entry : any = {}
	navigation_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.data_entry.desc = "Data Entry"
		this.data_entry.need_header = ""
		this.navigation_ui.desc = "Navigation UI"
		this.navigation_ui.need_header = ""
	

    this.screen_instance['p_mainlayout'] = {};
    this.screen_instance['p_mainlayout']['checkHeader']=(component)=>{
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