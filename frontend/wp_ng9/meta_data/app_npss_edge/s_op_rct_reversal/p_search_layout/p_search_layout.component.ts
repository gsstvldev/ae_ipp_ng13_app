/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 29106 
Modified By     : Admin 
Modified Date   : 2023-Apr-18 5:23 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_op_rct_reversal
Profile Name    : Search Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_search_layout',
  templateUrl: './p_search_layout.component.html',
  styleUrls: ['./p_search_layout.component.css']
})

// Start of class 
export class p_search_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	search_info_ui : any = {}
	search : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.search_info_ui.desc = "Search Info UI"
		this.search_info_ui.need_header = ""
		this.search.desc = "Search"
		this.search.need_header = ""
	

    this.screen_instance['p_search_layout'] = {};
    this.screen_instance['p_search_layout']['checkHeader']=(component)=>{
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