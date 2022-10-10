/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26351 
Modified By     : Admin 
Modified Date   : 2022-Oct-10 14:3 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_enrolment
Profile Name    : Data Entry Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_data_entry_layout',
  templateUrl: './p_data_entry_layout.component.html',
  styleUrls: ['./p_data_entry_layout.component.css']
})

// Start of class 
export class p_data_entry_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	merchant_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.merchant_ui.desc = "Merchant UI"
		this.merchant_ui.need_header = ""
	

    this.screen_instance['p_data_entry_layout'] = {};
    this.screen_instance['p_data_entry_layout']['checkHeader']=(component)=>{
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