/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27748 
Modified By     : Admin 
Modified Date   : 2023-Jan-07 13:3 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_reversal_non_aed
Profile Name    : Cancel Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_cancel_layout',
  templateUrl: './p_cancel_layout.component.html',
  styleUrls: ['./p_cancel_layout.component.css']
})

// Start of class 
export class p_cancel_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	cancel_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.cancel_ui.desc = "Cancel UI"
		this.cancel_ui.need_header = ""
	

    this.screen_instance['p_cancel_layout'] = {};
    this.screen_instance['p_cancel_layout']['checkHeader']=(component)=>{
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