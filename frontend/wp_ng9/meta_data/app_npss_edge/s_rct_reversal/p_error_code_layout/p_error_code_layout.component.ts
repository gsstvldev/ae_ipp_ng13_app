/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27093 
Modified By     : Admin 
Modified Date   : 2022-Nov-26 15:5 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_reversal
Profile Name    : Error Code Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_error_code_layout',
  templateUrl: './p_error_code_layout.component.html',
  styleUrls: ['./p_error_code_layout.component.css']
})

// Start of class 
export class p_error_code_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	error_code_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.error_code_ui.desc = "Error Code UI"
		this.error_code_ui.need_header = ""
	

    this.screen_instance['p_error_code_layout'] = {};
    this.screen_instance['p_error_code_layout']['checkHeader']=(component)=>{
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