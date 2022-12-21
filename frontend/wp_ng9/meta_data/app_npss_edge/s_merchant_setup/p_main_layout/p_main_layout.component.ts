/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27472 
Modified By     : Admin 
Modified Date   : 2022-Dec-21 11:55 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_setup
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
  	queue : any = {}
	navigation_ui : any = {}
	merchant : any = {}
	sub_navigation_ui : any = {}
	accounts : any = {}
	shop_action : any = {}
	shop : any = {}
	cash_desk_action : any = {}
	cash_desk : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.queue.desc = "Queue"
		this.queue.need_header = true
		this.navigation_ui.desc = "Navigation UI"
		this.navigation_ui.need_header = ""
		this.merchant.desc = "Merchant"
		this.merchant.need_header = true
		this.sub_navigation_ui.desc = "Sub Navigation UI"
		this.sub_navigation_ui.need_header = ""
		this.accounts.desc = "Accounts"
		this.accounts.need_header = ""
		this.shop_action.desc = "Shop Action"
		this.shop_action.need_header = ""
		this.shop.desc = "Shop"
		this.shop.need_header = true
		this.cash_desk_action.desc = "Cash Desk Action"
		this.cash_desk_action.need_header = ""
		this.cash_desk.desc = "Cash Desk"
		this.cash_desk.need_header = true
	

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