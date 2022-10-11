/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26375 
Modified By     : Admin 
Modified Date   : 2022-Oct-11 7:10 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_customer_enrolment
Profile Name    : Corp Account  Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_corp_account__layout',
  templateUrl: './p_corp_account__layout.component.html',
  styleUrls: ['./p_corp_account__layout.component.css']
})

// Start of class 
export class p_corp_account__layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	corporate_accounts_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.corporate_accounts_ui.desc = "Corporate Accounts UI"
		this.corporate_accounts_ui.need_header = ""
	

    this.screen_instance['p_corp_account__layout'] = {};
    this.screen_instance['p_corp_account__layout']['checkHeader']=(component)=>{
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