/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27924 
Modified By     : Admin 
Modified Date   : 2023-Jan-27 4:48 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_setup
Profile Name    : Action Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_action_layout',
  templateUrl: './p_action_layout.component.html',
  styleUrls: ['./p_action_layout.component.css']
})

// Start of class 
export class p_action_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	merchant_detail : any = {}
	account__detail : any = {}
	shop_detail : any = {}
	cashdesk_detail : any = {}
	action : any = {}
	merchant_setup_widget : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.merchant_detail.desc = "Merchant Detail"
		this.merchant_detail.need_header = true
		this.account__detail.desc = "Account  Detail"
		this.account__detail.need_header = true
		this.shop_detail.desc = "Shop Detail"
		this.shop_detail.need_header = true
		this.cashdesk_detail.desc = "CashDesk Detail"
		this.cashdesk_detail.need_header = true
		this.action.desc = "Action"
		this.action.need_header = ""
		this.merchant_setup_widget.desc = "Merchant Setup Widget"
		this.merchant_setup_widget.need_header = ""
	

    this.screen_instance['p_action_layout'] = {};
    this.screen_instance['p_action_layout']['checkHeader']=(component)=>{
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