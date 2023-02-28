/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28386 
Modified By     : Admin 
Modified Date   : 2023-Feb-28 12:36 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_rejected_payments
Profile Name    : Review Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_review_layout',
  templateUrl: './p_review_layout.component.html',
  styleUrls: ['./p_review_layout.component.css']
})

// Start of class 
export class p_review_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	tran_list : any = {}
	failure_list : any = {}
	review_ui : any = {}
	review_action_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.tran_list.desc = "Tran List"
		this.tran_list.need_header = ""
		this.failure_list.desc = "Failure List"
		this.failure_list.need_header = true
		this.review_ui.desc = "Review UI"
		this.review_ui.need_header = false
		this.review_action_ui.desc = "Review Action UI"
		this.review_action_ui.need_header = ""
	

    this.screen_instance['p_review_layout'] = {};
    this.screen_instance['p_review_layout']['checkHeader']=(component)=>{
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