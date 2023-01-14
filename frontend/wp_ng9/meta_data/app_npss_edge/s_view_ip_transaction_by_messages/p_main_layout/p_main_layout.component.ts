/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27836 
Modified By     : Admin 
Modified Date   : 2023-Jan-14 6:5 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_ip_transaction_by_messages
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
  	message_type_list : any = {}
	payment_type_group : any = {}
	navigation_ui : any = {}
	queue_group : any = {}
	transaction_list : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.message_type_list.desc = "Message Type List"
		this.message_type_list.need_header = true
		this.payment_type_group.desc = "Payment Type Group"
		this.payment_type_group.need_header = true
		this.navigation_ui.desc = "Navigation UI"
		this.navigation_ui.need_header = ""
		this.queue_group.desc = "Queue Group"
		this.queue_group.need_header = true
		this.transaction_list.desc = "Transaction List"
		this.transaction_list.need_header = true
	

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