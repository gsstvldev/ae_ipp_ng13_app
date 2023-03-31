/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28993 
Modified By     : Admin 
Modified Date   : 2023-Mar-31 11:19 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_merchant_details
Profile Name    : View Shop Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_view_shop_layout',
  templateUrl: './p_view_shop_layout.component.html',
  styleUrls: ['./p_view_shop_layout.component.css']
})

// Start of class 
export class p_view_shop_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	navigation : any = {}
	merchant_details : any = {}
	shop_list : any = {}
	shop_detail : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.navigation.desc = "Navigation"
		this.navigation.need_header = ""
		this.merchant_details.desc = "Merchant Details"
		this.merchant_details.need_header = true
		this.shop_list.desc = "Shop List"
		this.shop_list.need_header = true
		this.shop_detail.desc = "Shop Detail"
		this.shop_detail.need_header = true
	

    this.screen_instance['p_view_shop_layout'] = {};
    this.screen_instance['p_view_shop_layout']['checkHeader']=(component)=>{
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