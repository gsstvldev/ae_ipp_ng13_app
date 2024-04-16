/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35163 
Modified By     : Admin 
Modified Date   : 2024-Apr-16 9:53 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_home_dashboard
Profile Name    : View Tran Detail Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_view_tran_detail_layout',
  templateUrl: './p_view_tran_detail_layout.component.html',
  styleUrls: ['./p_view_tran_detail_layout.component.css']
})

// Start of class 
export class p_view_tran_detail_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	back_ui : any = {}
	view_dr_cr_details : any = {}
	view_payment_details : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.back_ui.desc = "Back UI"
		this.back_ui.need_header = ""
		this.view_dr_cr_details.desc = "View Dr Cr Details"
		this.view_dr_cr_details.need_header = ""
		this.view_payment_details.desc = "View Payment Details"
		this.view_payment_details.need_header = ""
	

    this.screen_instance['p_view_tran_detail_layout'] = {};
    this.screen_instance['p_view_tran_detail_layout']['checkHeader']=(component)=>{
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