/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27609 
Modified By     : Admin 
Modified Date   : 2022-Dec-29 13:15 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_setup
Profile Name    : Shop and Cashdesk Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_shop_and_cashdesk_layout',
  templateUrl: './p_shop_and_cashdesk_layout.component.html',
  styleUrls: ['./p_shop_and_cashdesk_layout.component.css']
})

// Start of class 
export class p_shop_and_cashdesk_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	shop_action : any = {}
	shop : any = {}
	cashdesk_action : any = {}
	cashdesk : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.shop_action.desc = "Shop Action"
		this.shop_action.need_header = ""
		this.shop.desc = "Shop"
		this.shop.need_header = true
		this.cashdesk_action.desc = "CashDesk Action"
		this.cashdesk_action.need_header = false
		this.cashdesk.desc = "CashDesk"
		this.cashdesk.need_header = true
	

    this.screen_instance['p_shop_and_cashdesk_layout'] = {};
    this.screen_instance['p_shop_and_cashdesk_layout']['checkHeader']=(component)=>{
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