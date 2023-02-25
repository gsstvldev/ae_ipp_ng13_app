/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28339 
Modified By     : Admin 
Modified Date   : 2023-Feb-25 13:17 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_process_logs
Profile Name    : Show Table View Profile--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_show_table_view_profile',
  templateUrl: './p_show_table_view_profile.component.html',
  styleUrls: ['./p_show_table_view_profile.component.css']
})

// Start of class 
export class p_show_table_view_profileComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	payment_search : any = {}
	payment_action : any = {}
	npss_show_table_view_cw : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.payment_search.desc = "Payment Search"
		this.payment_search.need_header = ""
		this.payment_action.desc = "Payment Action"
		this.payment_action.need_header = ""
		this.npss_show_table_view_cw.desc = "NPSS Show Table View CW"
		this.npss_show_table_view_cw.need_header = ""
	

    this.screen_instance['p_show_table_view_profile'] = {};
    this.screen_instance['p_show_table_view_profile']['checkHeader']=(component)=>{
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