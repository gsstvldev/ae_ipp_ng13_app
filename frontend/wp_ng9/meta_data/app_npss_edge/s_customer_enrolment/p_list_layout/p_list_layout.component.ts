/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26605 
Modified By     : Admin 
Modified Date   : 2022-Oct-21 14:27 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_customer_enrolment
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
  	navigation : any = {}
	customer_details : any = {}
	bank_account_details : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.navigation.desc = "Navigation"
		this.navigation.need_header = ""
		this.customer_details.desc = "Customer Details"
		this.customer_details.need_header = true
		this.bank_account_details.desc = "Account Details"
		this.bank_account_details.need_header = true
	

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