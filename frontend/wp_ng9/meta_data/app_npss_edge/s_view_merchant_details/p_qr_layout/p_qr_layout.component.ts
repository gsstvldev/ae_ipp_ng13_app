/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 29011 
Modified By     : Admin 
Modified Date   : 2023-Apr-03 13:21 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_merchant_details
Profile Name    : QR layout--------------------------------------------------------------------------- */

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
  	payor_information : any = {}
	payee_information : any = {}
	qr_ui : any = {}
	npss_qr_widget : any = {}


  // Constructor 
  constructor() { }
  
  // Page Init 
  ngOnInit() {
    	this.payor_information.desc = "Payor Information"
		this.payor_information.need_header = true
		this.payee_information.desc = "Payee Information"
		this.payee_information.need_header = true
		this.qr_ui.desc = "QR UI"
		this.qr_ui.need_header = ""
		this.npss_qr_widget.desc = "NPSS QR Widget"
		this.npss_qr_widget.need_header = ""
	

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