/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27641 
Modified By     : Admin 
Modified Date   : 2023-Jan-02 5:44 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_op_rct_reversal
Profile Name    : Send to Maker Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_send_to_maker_layout',
  templateUrl: './p_send_to_maker_layout.component.html',
  styleUrls: ['./p_send_to_maker_layout.component.css']
})

// Start of class 
export class p_send_to_maker_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	send_to_maker_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.send_to_maker_ui.desc = "Send to Maker UI"
		this.send_to_maker_ui.need_header = ""
	

    this.screen_instance['p_send_to_maker_layout'] = {};
    this.screen_instance['p_send_to_maker_layout']['checkHeader']=(component)=>{
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