/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28454 
Modified By     : Admin 
Modified Date   : 2023-Mar-04 8:45 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_payment_list
Profile Name    : Custom Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_custom_layout',
  templateUrl: './p_custom_layout.component.html',
  styleUrls: ['./p_custom_layout.component.css']
})

// Start of class 
export class p_custom_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	payment_list_widget : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.payment_list_widget.desc = "Payment List Widget"
		this.payment_list_widget.need_header = ""
	

    this.screen_instance['p_custom_layout'] = {};
    this.screen_instance['p_custom_layout']['checkHeader']=(component)=>{
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