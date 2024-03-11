/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34701 
Modified By     : Admin 
Modified Date   : 2024-Mar-11 6:28 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_investigation
Profile Name    : Close Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_close_layout',
  templateUrl: './p_close_layout.component.html',
  styleUrls: ['./p_close_layout.component.css']
})

// Start of class 
export class p_close_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	remark_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.remark_ui.desc = "Remark UI"
		this.remark_ui.need_header = ""
	

    this.screen_instance['p_close_layout'] = {};
    this.screen_instance['p_close_layout']['checkHeader']=(component)=>{
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