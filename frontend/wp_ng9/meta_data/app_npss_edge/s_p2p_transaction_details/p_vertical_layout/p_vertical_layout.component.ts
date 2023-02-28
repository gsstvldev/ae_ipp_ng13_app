/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28391 
Modified By     : Admin 
Modified Date   : 2023-Feb-28 14:23 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_p2p_transaction_details
Profile Name    : Vertical Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_vertical_layout',
  templateUrl: './p_vertical_layout.component.html',
  styleUrls: ['./p_vertical_layout.component.css']
})

// Start of class 
export class p_vertical_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	main_back_ui : any = {}
	view_dr_cr_tran_details : any = {}
	view_payment_tran_details : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.main_back_ui.desc = "Main Back UI"
		this.main_back_ui.need_header = ""
		this.view_dr_cr_tran_details.desc = "View Dr Cr Tran Details"
		this.view_dr_cr_tran_details.need_header = true
		this.view_payment_tran_details.desc = "View Payment Tran Details"
		this.view_payment_tran_details.need_header = true
	

    this.screen_instance['p_vertical_layout'] = {};
    this.screen_instance['p_vertical_layout']['checkHeader']=(component)=>{
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