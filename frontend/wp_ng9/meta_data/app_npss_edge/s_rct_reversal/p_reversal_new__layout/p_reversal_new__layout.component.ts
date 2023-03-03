/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28437 
Modified By     : Admin 
Modified Date   : 2023-Mar-03 11:30 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_reversal
Profile Name    : Reversal New  Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_reversal_new__layout',
  templateUrl: './p_reversal_new__layout.component.html',
  styleUrls: ['./p_reversal_new__layout.component.css']
})

// Start of class 
export class p_reversal_new__layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	tran_details : any = {}
	reversal_ui : any = {}
	get_usable_balance_widget : any = {}
	cbs_accounts : any = {}
	process_log_list : any = {}
	reversal_action_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.tran_details.desc = "Tran Details"
		this.tran_details.need_header = true
		this.reversal_ui.desc = "Reversal UI"
		this.reversal_ui.need_header = ""
		this.get_usable_balance_widget.desc = "Get Usable Balance Widget"
		this.get_usable_balance_widget.need_header = ""
		this.cbs_accounts.desc = "CBS Accounts"
		this.cbs_accounts.need_header = true
		this.process_log_list.desc = "Process Log List"
		this.process_log_list.need_header = true
		this.reversal_action_ui.desc = "Reversal Action UI"
		this.reversal_action_ui.need_header = ""
	

    this.screen_instance['p_reversal_new__layout'] = {};
    this.screen_instance['p_reversal_new__layout']['checkHeader']=(component)=>{
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