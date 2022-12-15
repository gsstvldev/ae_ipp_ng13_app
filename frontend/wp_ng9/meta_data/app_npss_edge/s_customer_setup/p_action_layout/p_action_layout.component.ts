/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27358 
Modified By     : Admin 
Modified Date   : 2022-Dec-15 5:43 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_customer_setup
Profile Name    : Action Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_action_layout',
  templateUrl: './p_action_layout.component.html',
  styleUrls: ['./p_action_layout.component.css']
})

// Start of class 
export class p_action_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	customer_detail : any = {}
	account__detail : any = {}
	action : any = {}
	customer_setup_widget : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.customer_detail.desc = "Customer Detail"
		this.customer_detail.need_header = true
		this.account__detail.desc = "Account  Detail"
		this.account__detail.need_header = true
		this.action.desc = "Action"
		this.action.need_header = ""
		this.customer_setup_widget.desc = "Customer Setup Widget"
		this.customer_setup_widget.need_header = ""
	

    this.screen_instance['p_action_layout'] = {};
    this.screen_instance['p_action_layout']['checkHeader']=(component)=>{
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