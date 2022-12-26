/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27543 
Modified By     : Admin 
Modified Date   : 2022-Dec-26 14:30 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_merchant_details
Profile Name    : Cash Desk Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_cash_desk_layout',
  templateUrl: './p_cash_desk_layout.component.html',
  styleUrls: ['./p_cash_desk_layout.component.css']
})

// Start of class 
export class p_cash_desk_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	navigation : any = {}
	shop_detail : any = {}
	cash_desk_list : any = {}
	cash_desk_detail : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.navigation.desc = "Navigation"
		this.navigation.need_header = ""
		this.shop_detail.desc = "Shop Detail"
		this.shop_detail.need_header = true
		this.cash_desk_list.desc = "Cash Desk List"
		this.cash_desk_list.need_header = true
		this.cash_desk_detail.desc = "Cash Desk Detail"
		this.cash_desk_detail.need_header = true
	

    this.screen_instance['p_cash_desk_layout'] = {};
    this.screen_instance['p_cash_desk_layout']['checkHeader']=(component)=>{
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