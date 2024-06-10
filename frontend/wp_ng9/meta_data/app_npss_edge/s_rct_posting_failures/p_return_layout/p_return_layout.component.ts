/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35687 
Modified By     : Admin 
Modified Date   : 2024-Jun-10 10:35 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_posting_failures
Profile Name    : Return Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_return_layout',
  templateUrl: './p_return_layout.component.html',
  styleUrls: ['./p_return_layout.component.css']
})

// Start of class 
export class p_return_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	return_ui : any = {}
	save_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.return_ui.desc = "Return UI"
		this.return_ui.need_header = ""
		this.save_ui.desc = "Save UI"
		this.save_ui.need_header = ""
	

    this.screen_instance['p_return_layout'] = {};
    this.screen_instance['p_return_layout']['checkHeader']=(component)=>{
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