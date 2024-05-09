/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35352 
Modified By     : Admin 
Modified Date   : 2024-May-09 6:17 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_report_viewer
Profile Name    : Report Viewer Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_report_viewer_layout',
  templateUrl: './p_report_viewer_layout.component.html',
  styleUrls: ['./p_report_viewer_layout.component.css']
})

// Start of class 
export class p_report_viewer_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	report_viewer : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.report_viewer.desc = "Report Viewer"
		this.report_viewer.need_header = ""
	

    this.screen_instance['p_report_viewer_layout'] = {};
    this.screen_instance['p_report_viewer_layout']['checkHeader']=(component)=>{
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