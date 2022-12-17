/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27437 
Modified By     : Admin 
Modified Date   : 2022-Dec-17 13:27 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_reversal
Profile Name    : Remarks Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_remarks_layout',
  templateUrl: './p_remarks_layout.component.html',
  styleUrls: ['./p_remarks_layout.component.css']
})

// Start of class 
export class p_remarks_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	reject_ui : any = {}
	remarks_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.reject_ui.desc = "Reject UI"
		this.reject_ui.need_header = ""
		this.remarks_ui.desc = "Remarks UI"
		this.remarks_ui.need_header = ""
	

    this.screen_instance['p_remarks_layout'] = {};
    this.screen_instance['p_remarks_layout']['checkHeader']=(component)=>{
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