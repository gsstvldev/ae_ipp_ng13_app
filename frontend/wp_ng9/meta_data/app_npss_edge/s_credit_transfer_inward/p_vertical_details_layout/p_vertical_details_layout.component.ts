/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26447 
Modified By     : Admin 
Modified Date   : 2022-Oct-14 13:21 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_credit_transfer_inward
Profile Name    : Vertical Details Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_vertical_details_layout',
  templateUrl: './p_vertical_details_layout.component.html',
  styleUrls: ['./p_vertical_details_layout.component.css']
})

// Start of class 
export class p_vertical_details_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	transaction_details_view : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.transaction_details_view.desc = "Transaction Details View"
		this.transaction_details_view.need_header = false
	

    this.screen_instance['p_vertical_details_layout'] = {};
    this.screen_instance['p_vertical_details_layout']['checkHeader']=(component)=>{
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