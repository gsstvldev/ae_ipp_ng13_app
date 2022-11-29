/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27118 
Modified By     : Admin 
Modified Date   : 2022-Nov-29 8:11 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_iban_view_transactions_group
Profile Name    : View Main Request Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_view_main_request_layout',
  templateUrl: './p_view_main_request_layout.component.html',
  styleUrls: ['./p_view_main_request_layout.component.css']
})

// Start of class 
export class p_view_main_request_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	main_request_ui : any = {}
	back_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.main_request_ui.desc = "Main Request UI"
		this.main_request_ui.need_header = ""
		this.back_ui.desc = "Back UI"
		this.back_ui.need_header = ""
	

    this.screen_instance['p_view_main_request_layout'] = {};
    this.screen_instance['p_view_main_request_layout']['checkHeader']=(component)=>{
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