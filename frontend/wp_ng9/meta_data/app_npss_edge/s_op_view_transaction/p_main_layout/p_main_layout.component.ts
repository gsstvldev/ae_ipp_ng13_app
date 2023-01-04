/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27695 
Modified By     : Admin 
Modified Date   : 2023-Jan-04 12:40 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_op_view_transaction
Profile Name    : Main Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_main_layout',
  templateUrl: './p_main_layout.component.html',
  styleUrls: ['./p_main_layout.component.css']
})

// Start of class 
export class p_main_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	navigation_ui : any = {}
	channel_group : any = {}
	payment_type_group : any = {}
	queue_group : any = {}
	message_type_group : any = {}
	chart : any = {}
	process_log : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.navigation_ui.desc = "Navigation UI"
		this.navigation_ui.need_header = ""
		this.channel_group.desc = "Channel Group"
		this.channel_group.need_header = true
		this.payment_type_group.desc = "Payment Type Group"
		this.payment_type_group.need_header = true
		this.queue_group.desc = "Queue Group"
		this.queue_group.need_header = true
		this.message_type_group.desc = "Message Type Group"
		this.message_type_group.need_header = true
		this.chart.desc = "Chart"
		this.chart.need_header = ""
		this.process_log.desc = "Process Log"
		this.process_log.need_header = true
	

    this.screen_instance['p_main_layout'] = {};
    this.screen_instance['p_main_layout']['checkHeader']=(component)=>{
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