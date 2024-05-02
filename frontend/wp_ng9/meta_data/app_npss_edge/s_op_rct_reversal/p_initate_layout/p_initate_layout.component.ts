/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35310 
Modified By     : Admin 
Modified Date   : 2024-May-02 11:30 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_op_rct_reversal
Profile Name    : Initate Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_initate_layout',
  templateUrl: './p_initate_layout.component.html',
  styleUrls: ['./p_initate_layout.component.css']
})

// Start of class 
export class p_initate_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	initate_ui : any = {}
	initiate_custom_widget : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.initate_ui.desc = "Initate UI"
		this.initate_ui.need_header = ""
		this.initiate_custom_widget.desc = "Initiate custom widget"
		this.initiate_custom_widget.need_header = ""
	

    this.screen_instance['p_initate_layout'] = {};
    this.screen_instance['p_initate_layout']['checkHeader']=(component)=>{
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