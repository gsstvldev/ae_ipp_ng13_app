/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26447 
Modified By     : Admin 
Modified Date   : 2022-Oct-14 13:21 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_credit_transfer_outward
Profile Name    : Pacs002 Layout --------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_pacs002_layout_',
  templateUrl: './p_pacs002_layout_.component.html',
  styleUrls: ['./p_pacs002_layout_.component.css']
})

// Start of class 
export class p_pacs002_layout_Component implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	pacs002_ui : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.pacs002_ui.desc = "Pacs002 UI"
		this.pacs002_ui.need_header = false
	

    this.screen_instance['p_pacs002_layout_'] = {};
    this.screen_instance['p_pacs002_layout_']['checkHeader']=(component)=>{
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