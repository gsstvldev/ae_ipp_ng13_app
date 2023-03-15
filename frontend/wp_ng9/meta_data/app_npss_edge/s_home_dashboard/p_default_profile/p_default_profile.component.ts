/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28699 
Modified By     : Admin 
Modified Date   : 2023-Mar-15 10:32 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_home_dashboard
Profile Name    : Default Profile--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_default_profile',
  templateUrl: './p_default_profile.component.html',
  styleUrls: ['./p_default_profile.component.css']
})

// Start of class 
export class p_default_profileComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	navigation : any = {}
	outward_list : any = {}
	inward_list : any = {}
	inward_queue : any = {}
	transaction_list : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.navigation.desc = "Navigation"
		this.navigation.need_header = ""
		this.outward_list.desc = "Outward List"
		this.outward_list.need_header = true
		this.inward_list.desc = "Inward List"
		this.inward_list.need_header = true
		this.inward_queue.desc = "Inward Queue"
		this.inward_queue.need_header = true
		this.transaction_list.desc = "Transaction List"
		this.transaction_list.need_header = true
	

    this.screen_instance['p_default_profile'] = {};
    this.screen_instance['p_default_profile']['checkHeader']=(component)=>{
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