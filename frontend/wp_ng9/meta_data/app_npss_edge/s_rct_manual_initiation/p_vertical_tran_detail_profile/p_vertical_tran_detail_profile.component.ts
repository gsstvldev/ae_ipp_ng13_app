/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27673 
Modified By     : Admin 
Modified Date   : 2023-Jan-03 5:51 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_manual_initiation
Profile Name    : Vertical Tran Detail Profile--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_vertical_tran_detail_profile',
  templateUrl: './p_vertical_tran_detail_profile.component.html',
  styleUrls: ['./p_vertical_tran_detail_profile.component.css']
})

// Start of class 
export class p_vertical_tran_detail_profileComponent implements OnInit {
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
		this.view_dr_cr_details.need_header = true
		this.view_payment_details.desc = "View Payment Details"
		this.view_payment_details.need_header = true
	

    this.screen_instance['p_vertical_tran_detail_profile'] = {};
    this.screen_instance['p_vertical_tran_detail_profile']['checkHeader']=(component)=>{
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