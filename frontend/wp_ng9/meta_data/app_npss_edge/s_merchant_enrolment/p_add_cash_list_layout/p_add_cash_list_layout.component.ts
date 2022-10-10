/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26346 
Modified By     : Admin 
Modified Date   : 2022-Oct-10 11:0 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_enrolment
Profile Name    : Add Cash List Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_add_cash_list_layout',
  templateUrl: './p_add_cash_list_layout.component.html',
  styleUrls: ['./p_add_cash_list_layout.component.css']
})

// Start of class 
export class p_add_cash_list_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	cash_desk_list : any = {}
	add_desk_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.cash_desk_list.desc = "Cash Desk List"
		this.cash_desk_list.need_header = ""
		this.add_desk_ui.desc = "Add Desk UI"
		this.add_desk_ui.need_header = ""
	

    this.screen_instance['p_add_cash_list_layout'] = {};
    this.screen_instance['p_add_cash_list_layout']['checkHeader']=(component)=>{
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