/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27037 
Modified By     : Admin 
Modified Date   : 2022-Nov-23 11:49 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_transaction_details
Profile Name    : Refund Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_refund_layout',
  templateUrl: './p_refund_layout.component.html',
  styleUrls: ['./p_refund_layout.component.css']
})

// Start of class 
export class p_refund_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	disable_refund_ui : any = {}
	enable_refund_ui : any = {}
	submit_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.disable_refund_ui.desc = "Disable Refund UI"
		this.disable_refund_ui.need_header = ""
		this.enable_refund_ui.desc = "Enable Refund UI"
		this.enable_refund_ui.need_header = ""
		this.submit_ui.desc = "Submit UI"
		this.submit_ui.need_header = ""
	

    this.screen_instance['p_refund_layout'] = {};
    this.screen_instance['p_refund_layout']['checkHeader']=(component)=>{
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