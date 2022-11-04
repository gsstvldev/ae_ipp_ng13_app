/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26739 
Modified By     : Admin 
Modified Date   : 2022-Oct-31 10:26 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_customer_request_to_pay
Profile Name    : QR Layout--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'p_qr_layout',
  templateUrl: './p_qr_layout.component.html',
  styleUrls: ['./p_qr_layout.component.css']
})

// Start of class 
export class p_qr_layoutComponent implements OnInit {
  @Input() screen_instance: any;

  // Variables 
  	qr_code_widget : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.qr_code_widget.desc = "QR Code Widget"
		this.qr_code_widget.need_header = ""
	

    this.screen_instance['p_qr_layout'] = {};
    this.screen_instance['p_qr_layout']['checkHeader']=(component)=>{
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