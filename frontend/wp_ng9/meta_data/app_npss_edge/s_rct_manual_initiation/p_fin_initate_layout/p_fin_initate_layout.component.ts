/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34188 
Modified By     : Admin 
Modified Date   : 2024-Jan-24 11:3 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_manual_initiation
Profile Name    : FIN Initate Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_fin_initate_layout',
  templateUrl: './p_fin_initate_layout.component.html',
  styleUrls: ['./p_fin_initate_layout.component.css']
})

// Start of class 
export class p_fin_initate_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	original_transaction_details : any = {}
	payment_processing_details : any = {}
	payment_processing_details_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.original_transaction_details.desc = "Original Transaction Details"
		this.original_transaction_details.need_header = true
		this.payment_processing_details.desc = "Payment Processing Details"
		this.payment_processing_details.need_header = true
		this.payment_processing_details_ui.desc = "Payment Processing Details UI"
		this.payment_processing_details_ui.need_header = ""
	

    this.screen_instance['p_fin_initate_layout'] = {};
    this.screen_instance['p_fin_initate_layout']['checkHeader']=(component)=>{
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