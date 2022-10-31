/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26719 
Modified By     : Admin 
Modified Date   : 2022-Oct-31 4:50 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_credit_transfer_inward
Profile Name    : History Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_history_layout',
  templateUrl: './p_history_layout.component.html',
  styleUrls: ['./p_history_layout.component.css']
})

// Start of class 
export class p_history_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	ip_payment_form_action : any = {}
	npss_ip_error_widget : any = {}
	history_search : any = {}
	transactions : any = {}
	transaction_detail : any = {}
	ip_cust__transactions : any = {}
	ip_transactions : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.ip_payment_form_action.desc = "IP Payment Form Action"
		this.ip_payment_form_action.need_header = ""
		this.npss_ip_error_widget.desc = "npss_ip_error_widget"
		this.npss_ip_error_widget.need_header = false
		this.history_search.desc = "History Search"
		this.history_search.need_header = true
		this.transactions.desc = "Transactions"
		this.transactions.need_header = false
		this.transaction_detail.desc = "Transaction Detail"
		this.transaction_detail.need_header = false
		this.ip_cust__transactions.desc = "IP Cust  transactions"
		this.ip_cust__transactions.need_header = ""
		this.ip_transactions.desc = "IP Transactions"
		this.ip_transactions.need_header = ""
	

    this.screen_instance['p_history_layout'] = {};
    this.screen_instance['p_history_layout']['checkHeader']=(component)=>{
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