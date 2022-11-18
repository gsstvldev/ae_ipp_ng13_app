/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26969 
Modified By     : Admin 
Modified Date   : 2022-Nov-18 10:55 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_all_summary
Profile Name    : Vertical Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_vertical_layout',
  templateUrl: './p_vertical_layout.component.html',
  styleUrls: ['./p_vertical_layout.component.css']
})

// Start of class 
export class p_vertical_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	view_transaction_detail : any = {}
	back_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.view_transaction_detail.desc = "View Transaction Detail"
		this.view_transaction_detail.need_header = true
		this.back_ui.desc = "Back UI"
		this.back_ui.need_header = ""
	

    this.screen_instance['p_vertical_layout'] = {};
    this.screen_instance['p_vertical_layout']['checkHeader']=(component)=>{
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