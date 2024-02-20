/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34421 
Modified By     : Admin 
Modified Date   : 2024-Feb-20 5:7 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_user_activities
Profile Name    : Menu Access Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_menu_access_layout',
  templateUrl: './p_menu_access_layout.component.html',
  styleUrls: ['./p_menu_access_layout.component.css']
})

// Start of class 
export class p_menu_access_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	menu_access : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.menu_access.desc = "Menu Access"
		this.menu_access.need_header = true
	

    this.screen_instance['p_menu_access_layout'] = {};
    this.screen_instance['p_menu_access_layout']['checkHeader']=(component)=>{
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