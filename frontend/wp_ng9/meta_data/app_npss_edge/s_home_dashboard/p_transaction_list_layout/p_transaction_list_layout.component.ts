/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34216 
Modified By     : Admin 
Modified Date   : 2024-Jan-29 10:36 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_home_dashboard
Profile Name    : Transaction List Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_transaction_list_layout',
  templateUrl: './p_transaction_list_layout.component.html',
  styleUrls: ['./p_transaction_list_layout.component.css']
})

// Start of class 
export class p_transaction_list_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	navigation : any = {}
	inward_queue : any = {}
	outward : any = {}
	inward : any = {}
	transaction_list : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.navigation.desc = "Navigation"
		this.navigation.need_header = ""
		this.inward_queue.desc = "Inward Queue"
		this.inward_queue.need_header = true
		this.outward.desc = "Outward"
		this.outward.need_header = true
		this.inward.desc = "Inward"
		this.inward.need_header = true
		this.transaction_list.desc = "Transaction List"
		this.transaction_list.need_header = true
	

    this.screen_instance['p_transaction_list_layout'] = {};
    this.screen_instance['p_transaction_list_layout']['checkHeader']=(component)=>{
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