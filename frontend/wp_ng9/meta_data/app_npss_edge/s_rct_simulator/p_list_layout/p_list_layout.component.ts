/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28958 
Modified By     : Admin 
Modified Date   : 2023-Mar-29 13:6 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_simulator
Profile Name    : List Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_list_layout',
  templateUrl: './p_list_layout.component.html',
  styleUrls: ['./p_list_layout.component.css']
})

// Start of class 
export class p_list_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	list : any = {}
	submit_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.list.desc = "List"
		this.list.need_header = true
		this.submit_ui.desc = "Submit UI"
		this.submit_ui.need_header = ""
	

    this.screen_instance['p_list_layout'] = {};
    this.screen_instance['p_list_layout']['checkHeader']=(component)=>{
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