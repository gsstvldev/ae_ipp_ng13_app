/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26351 
Modified By     : Admin 
Modified Date   : 2022-Oct-10 14:3 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_file_creation
Profile Name    : NPSS Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_npss_layout',
  templateUrl: './p_npss_layout.component.html',
  styleUrls: ['./p_npss_layout.component.css']
})

// Start of class 
export class p_npss_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	navigation : any = {}
	queue : any = {}
	transactions_list : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.navigation.desc = "Navigation"
		this.navigation.need_header = ""
		this.queue.desc = "Queue"
		this.queue.need_header = true
		this.transactions_list.desc = "Transactions List"
		this.transactions_list.need_header = true
	

    this.screen_instance['p_npss_layout'] = {};
    this.screen_instance['p_npss_layout']['checkHeader']=(component)=>{
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