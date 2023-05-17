/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 29576 
Modified By     : Admin 
Modified Date   : 2023-May-17 10:14 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_op_rct_posting_failure
Profile Name    : CBS Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_cbs_layout',
  templateUrl: './p_cbs_layout.component.html',
  styleUrls: ['./p_cbs_layout.component.css']
})

// Start of class 
export class p_cbs_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	cbs_ref_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.cbs_ref_ui.desc = "CBS REF UI"
		this.cbs_ref_ui.need_header = ""
	

    this.screen_instance['p_cbs_layout'] = {};
    this.screen_instance['p_cbs_layout']['checkHeader']=(component)=>{
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