/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26448 
Modified By     : Admin 
Modified Date   : 2022-Oct-14 14:20 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_credit_transfer_outward
Profile Name    : Form Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_form_layout',
  templateUrl: './p_form_layout.component.html',
  styleUrls: ['./p_form_layout.component.css']
})

// Start of class 
export class p_form_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	payment_form : any = {}
	payment_form_action : any = {}
	npss_op_error_widget : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.payment_form.desc = "Payment Form"
		this.payment_form.need_header = true
		this.payment_form_action.desc = "Payment Form Action"
		this.payment_form_action.need_header = true
		this.npss_op_error_widget.desc = "npss_op_error_widget"
		this.npss_op_error_widget.need_header = ""
	

    this.screen_instance['p_form_layout'] = {};
    this.screen_instance['p_form_layout']['checkHeader']=(component)=>{
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