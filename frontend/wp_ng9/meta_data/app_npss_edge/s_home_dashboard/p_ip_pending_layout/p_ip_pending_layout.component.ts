/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28817 
Modified By     : Admin 
Modified Date   : 2023-Mar-21 15:13 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_home_dashboard
Profile Name    : IP Pending Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_ip_pending_layout',
  templateUrl: './p_ip_pending_layout.component.html',
  styleUrls: ['./p_ip_pending_layout.component.css']
})

// Start of class 
export class p_ip_pending_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	navigation : any = {}
	inward_chart : any = {}
	transaction_list : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.navigation.desc = "Navigation"
		this.navigation.need_header = ""
		this.inward_chart.desc = "Inward Chart"
		this.inward_chart.need_header = ""
		this.transaction_list.desc = "Transaction List"
		this.transaction_list.need_header = ""
	

    this.screen_instance['p_ip_pending_layout'] = {};
    this.screen_instance['p_ip_pending_layout']['checkHeader']=(component)=>{
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