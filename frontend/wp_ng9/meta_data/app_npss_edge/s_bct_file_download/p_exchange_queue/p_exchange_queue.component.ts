/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34762 
Modified By     : Admin 
Modified Date   : 2024-Mar-14 7:57 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_bct_file_download
Profile Name    : Exchange Queue--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_exchange_queue',
  templateUrl: './p_exchange_queue.component.html',
  styleUrls: ['./p_exchange_queue.component.css']
})

// Start of class 
export class p_exchange_queueComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	navigation : any = {}
	queue : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.navigation.desc = "Navigation"
		this.navigation.need_header = ""
		this.queue.desc = "Queue"
		this.queue.need_header = true
	

    this.screen_instance['p_exchange_queue'] = {};
    this.screen_instance['p_exchange_queue']['checkHeader']=(component)=>{
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