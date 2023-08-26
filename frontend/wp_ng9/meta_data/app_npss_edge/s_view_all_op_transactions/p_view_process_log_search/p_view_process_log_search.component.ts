/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 31410 
Modified By     : Admin 
Modified Date   : 2023-Aug-26 9:51 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_all_op_transactions
Profile Name    : View Process Log Search--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_view_process_log_search',
  templateUrl: './p_view_process_log_search.component.html',
  styleUrls: ['./p_view_process_log_search.component.css']
})

// Start of class 
export class p_view_process_log_searchComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	process_log_search : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.process_log_search.desc = "Process Log Search"
		this.process_log_search.need_header = ""
	

    this.screen_instance['p_view_process_log_search'] = {};
    this.screen_instance['p_view_process_log_search']['checkHeader']=(component)=>{
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