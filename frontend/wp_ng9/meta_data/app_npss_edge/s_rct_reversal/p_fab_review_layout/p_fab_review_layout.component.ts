/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28063 
Modified By     : Admin 
Modified Date   : 2023-Feb-10 8:1 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_reversal
Profile Name    : FAB Review Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_fab_review_layout',
  templateUrl: './p_fab_review_layout.component.html',
  styleUrls: ['./p_fab_review_layout.component.css']
})

// Start of class 
export class p_fab_review_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	reversal_ui : any = {}
	reversal_additional_ui : any = {}
	process_log_control_ui : any = {}
	cbs_accounts : any = {}
	get_usable_balance_widget : any = {}
	process_log_list : any = {}
	reversal_action_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.reversal_ui.desc = "Reversal UI"
		this.reversal_ui.need_header = false
		this.reversal_additional_ui.desc = "Reversal Additional UI"
		this.reversal_additional_ui.need_header = ""
		this.process_log_control_ui.desc = "Process Log Control UI"
		this.process_log_control_ui.need_header = ""
		this.cbs_accounts.desc = "CBS Accounts"
		this.cbs_accounts.need_header = true
		this.get_usable_balance_widget.desc = "Get Usable Balance Widget"
		this.get_usable_balance_widget.need_header = ""
		this.process_log_list.desc = "Process Log List"
		this.process_log_list.need_header = true
		this.reversal_action_ui.desc = "Reversal Action UI"
		this.reversal_action_ui.need_header = false
	

    this.screen_instance['p_fab_review_layout'] = {};
    this.screen_instance['p_fab_review_layout']['checkHeader']=(component)=>{
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