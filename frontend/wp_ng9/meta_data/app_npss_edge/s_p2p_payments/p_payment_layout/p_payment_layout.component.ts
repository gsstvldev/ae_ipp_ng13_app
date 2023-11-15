/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 33217 
Modified By     : Admin 
Modified Date   : 2023-Nov-15 11:18 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_p2p_payments
Profile Name    : Payment Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_payment_layout',
  templateUrl: './p_payment_layout.component.html',
  styleUrls: ['./p_payment_layout.component.css']
})

// Start of class 
export class p_payment_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	payment_type_ui : any = {}
	retrieve_contact_cw : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.payment_type_ui.desc = "Payment Type UI"
		this.payment_type_ui.need_header = ""
		this.retrieve_contact_cw.desc = "Retrieve Contact CW"
		this.retrieve_contact_cw.need_header = ""
	

    this.screen_instance['p_payment_layout'] = {};
    this.screen_instance['p_payment_layout']['checkHeader']=(component)=>{
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