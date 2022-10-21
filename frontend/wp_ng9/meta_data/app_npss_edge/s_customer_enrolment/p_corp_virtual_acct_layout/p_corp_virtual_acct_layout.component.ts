/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26605 
Modified By     : Admin 
Modified Date   : 2022-Oct-21 14:27 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_customer_enrolment
Profile Name    : Corp Virtual Acct Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_corp_virtual_acct_layout',
  templateUrl: './p_corp_virtual_acct_layout.component.html',
  styleUrls: ['./p_corp_virtual_acct_layout.component.css']
})

// Start of class 
export class p_corp_virtual_acct_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	corp_virtual_account_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.corp_virtual_account_ui.desc = "Corp Virtual Account UI"
		this.corp_virtual_account_ui.need_header = ""
	

    this.screen_instance['p_corp_virtual_acct_layout'] = {};
    this.screen_instance['p_corp_virtual_acct_layout']['checkHeader']=(component)=>{
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