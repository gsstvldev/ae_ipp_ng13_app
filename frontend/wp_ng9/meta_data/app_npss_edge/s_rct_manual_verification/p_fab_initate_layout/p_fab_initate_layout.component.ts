/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 31058 
Modified By     : Admin 
Modified Date   : 2023-Aug-18 4:53 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_manual_verification
Profile Name    : FAB Initate Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_fab_initate_layout',
  templateUrl: './p_fab_initate_layout.component.html',
  styleUrls: ['./p_fab_initate_layout.component.css']
})

// Start of class 
export class p_fab_initate_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	original_transaction_details : any = {}
	payment_processing_details : any = {}
	get_usable_balance_widget : any = {}
	get_deal_ui : any = {}
	verification_ui : any = {}
	payment_processing_details_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.original_transaction_details.desc = "Original Transaction Details"
		this.original_transaction_details.need_header = true
		this.payment_processing_details.desc = "Payment Processing Details"
		this.payment_processing_details.need_header = true
		this.get_usable_balance_widget.desc = "Get Usable Balance Widget"
		this.get_usable_balance_widget.need_header = ""
		this.get_deal_ui.desc = "Get Deal UI"
		this.get_deal_ui.need_header = ""
		this.verification_ui.desc = "Verification UI"
		this.verification_ui.need_header = ""
		this.payment_processing_details_ui.desc = "Payment Processing Details UI"
		this.payment_processing_details_ui.need_header = ""
	

    this.screen_instance['p_fab_initate_layout'] = {};
    this.screen_instance['p_fab_initate_layout']['checkHeader']=(component)=>{
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