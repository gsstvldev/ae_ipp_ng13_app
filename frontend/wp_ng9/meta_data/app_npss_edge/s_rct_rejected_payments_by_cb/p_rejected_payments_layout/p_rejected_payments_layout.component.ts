/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35310 
Modified By     : Admin 
Modified Date   : 2024-May-02 11:30 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_rejected_payments_by_cb
Profile Name    : Rejected Payments Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_rejected_payments_layout',
  templateUrl: './p_rejected_payments_layout.component.html',
  styleUrls: ['./p_rejected_payments_layout.component.css']
})

// Start of class 
export class p_rejected_payments_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	navigation_ui : any = {}
	search : any = {}
	queue : any = {}
	transaction_list : any = {}
	error_details : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.navigation_ui.desc = "Navigation UI"
		this.navigation_ui.need_header = ""
		this.search.desc = "Search"
		this.search.need_header = true
		this.queue.desc = "Queue"
		this.queue.need_header = true
		this.transaction_list.desc = "Transaction List"
		this.transaction_list.need_header = true
		this.error_details.desc = "Error Details"
		this.error_details.need_header = true
	

    this.screen_instance['p_rejected_payments_layout'] = {};
    this.screen_instance['p_rejected_payments_layout']['checkHeader']=(component)=>{
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