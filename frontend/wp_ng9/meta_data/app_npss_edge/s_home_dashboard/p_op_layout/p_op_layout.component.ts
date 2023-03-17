/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28771 
Modified By     : Admin 
Modified Date   : 2023-Mar-17 15:19 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_home_dashboard
Profile Name    : OP Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_op_layout',
  templateUrl: './p_op_layout.component.html',
  styleUrls: ['./p_op_layout.component.css']
})

// Start of class 
export class p_op_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	navigation : any = {}
	outward_chart : any = {}
	transaction_list : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.navigation.desc = "Navigation"
		this.navigation.need_header = ""
		this.outward_chart.desc = "Outward Chart"
		this.outward_chart.need_header = ""
		this.transaction_list.desc = "Transaction List"
		this.transaction_list.need_header = true
	

    this.screen_instance['p_op_layout'] = {};
    this.screen_instance['p_op_layout']['checkHeader']=(component)=>{
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