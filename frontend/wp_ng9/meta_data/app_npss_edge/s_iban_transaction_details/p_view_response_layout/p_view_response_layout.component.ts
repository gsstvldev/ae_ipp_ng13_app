/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27894 
Modified By     : Admin 
Modified Date   : 2023-Jan-23 13:22 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_iban_transaction_details
Profile Name    : View Response Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_view_response_layout',
  templateUrl: './p_view_response_layout.component.html',
  styleUrls: ['./p_view_response_layout.component.css']
})

// Start of class 
export class p_view_response_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	response_ui : any = {}
	main_back_ui : any = {}
	hst_process_log_back : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.response_ui.desc = "Response UI"
		this.response_ui.need_header = ""
		this.main_back_ui.desc = "Main Back UI"
		this.main_back_ui.need_header = ""
		this.hst_process_log_back.desc = "HST Process Log Back"
		this.hst_process_log_back.need_header = ""
	

    this.screen_instance['p_view_response_layout'] = {};
    this.screen_instance['p_view_response_layout']['checkHeader']=(component)=>{
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