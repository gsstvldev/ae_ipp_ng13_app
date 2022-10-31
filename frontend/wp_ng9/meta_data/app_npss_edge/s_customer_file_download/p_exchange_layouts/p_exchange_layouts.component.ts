/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26711 
Modified By     : Admin 
Modified Date   : 2022-Oct-31 4:47 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_customer_file_download
Profile Name    : Exchange Layouts--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_exchange_layouts',
  templateUrl: './p_exchange_layouts.component.html',
  styleUrls: ['./p_exchange_layouts.component.css']
})

// Start of class 
export class p_exchange_layoutsComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	navigation : any = {}
	exchange_detail : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.navigation.desc = "Navigation"
		this.navigation.need_header = ""
		this.exchange_detail.desc = "Exchange Detail"
		this.exchange_detail.need_header = true
	

    this.screen_instance['p_exchange_layouts'] = {};
    this.screen_instance['p_exchange_layouts']['checkHeader']=(component)=>{
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