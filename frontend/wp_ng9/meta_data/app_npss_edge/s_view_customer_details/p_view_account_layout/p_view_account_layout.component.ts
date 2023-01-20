/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27877 
Modified By     : Admin 
Modified Date   : 2023-Jan-20 13:3 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_customer_details
Profile Name    : View Account Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_view_account_layout',
  templateUrl: './p_view_account_layout.component.html',
  styleUrls: ['./p_view_account_layout.component.css']
})

// Start of class 
export class p_view_account_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	customer_details : any = {}
	back_ui : any = {}
	account_list : any = {}
	account_details : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.customer_details.desc = "Customer Details"
		this.customer_details.need_header = true
		this.back_ui.desc = "Back UI"
		this.back_ui.need_header = ""
		this.account_list.desc = "Account List"
		this.account_list.need_header = true
		this.account_details.desc = "Account Details"
		this.account_details.need_header = true
	

    this.screen_instance['p_view_account_layout'] = {};
    this.screen_instance['p_view_account_layout']['checkHeader']=(component)=>{
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