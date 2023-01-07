/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27746 
Modified By     : Admin 
Modified Date   : 2023-Jan-07 12:52 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_transaction_details
Profile Name    : View message detail ui--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_view_message_detail_ui',
  templateUrl: './p_view_message_detail_ui.component.html',
  styleUrls: ['./p_view_message_detail_ui.component.css']
})

// Start of class 
export class p_view_message_detail_uiComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	message_detail_back_ui : any = {}
	message_detailui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.message_detail_back_ui.desc = "Message Detail back UI"
		this.message_detail_back_ui.need_header = ""
		this.message_detailui.desc = "Message DetailUI"
		this.message_detailui.need_header = ""
	

    this.screen_instance['p_view_message_detail_ui'] = {};
    this.screen_instance['p_view_message_detail_ui']['checkHeader']=(component)=>{
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