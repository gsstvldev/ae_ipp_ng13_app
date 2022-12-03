/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27175 
Modified By     : Admin 
Modified Date   : 2022-Dec-03 14:23 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_view_api_failures
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
  	search : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
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