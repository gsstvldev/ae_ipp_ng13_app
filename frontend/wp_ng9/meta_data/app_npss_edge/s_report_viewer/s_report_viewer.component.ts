/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 36145 
Modified By     : Admin 
Modified Date   : 2024-Jul-30 6:18 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_report_viewer
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {torus_cs_change_routingkeyService} from '../../../custom_widget/torus_cs_change_routingkey/torus_cs_change_routingkey.service'

@Component({
	selector: 's_report_viewer',
	templateUrl: './s_report_viewer.component.html',
	styleUrls: ['./s_report_viewer.component.css'],
	providers:[torus_cs_change_routingkeyService]
})
    
// Start of class 
export class s_report_viewerComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_report_viewer"
	wftpa_id : string = "WFT_NPSS_P_1304_1672983251187_0"
	cg_code : string = "CG_1304_1672982929167"
	key_column : any = {}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_report_viewer_layout"
	uicgc_1 : string = "report_viewer"
	uicgc_2 : string = "report_access"
	key_events : any = {}
	btl_1304_1672983085544 : string = "p_report_viewer_layout"
	btl_1304_1672983069872 : string = "p_report_access_layout"
	forms : any = []
	report_viewer : any = {}
	report_access : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private torus_cs_change_routingkeyService:torus_cs_change_routingkeyService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Report Viewer" 
		this.report_viewer.uictrl_code = "view_reports"
		this.report_viewer.uicgc_desc = "Report Viewer"
		this.report_viewer.uicgc_code = "uicgc_1"
		this.report_viewer.params = {}
		this.report_viewer.datasource = {}
		this.report_viewer.context_menu = []
		this.report_viewer.views = {}
		this.report_viewer.onChangecomponent = new EventEmitter<any>()
		this.report_viewer.show = true
		this.report_viewer.dynamic_param = {}
	
		// Component level properties - "Report Access" 
		this.report_access.uictrl_code = "share_reports"
		this.report_access.uicgc_desc = "Report Access"
		this.report_access.uicgc_code = "uicgc_2"
		this.report_access.params = {}
		this.report_access.datasource = {}
		this.report_access.context_menu = []
		this.report_access.views = {}
		this.report_access.onChangecomponent = new EventEmitter<any>()
		this.report_access.show = true
		this.report_access.dynamic_param = {}
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__cc_for_change_rey_ide()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__cc_for_change_rey_ide() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1673000299996"
		let event_params={"caller_name":"page_load__cc_for_change_rey_ide","event_desc":"CC for Change Rey ide","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_change_routingkeyService.fn_torus_cs_change_routingkey(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

 
	customProject_customValidation(projectName,validation,callback) {
		if(this[projectName+'Service']) {
			this[projectName+'Service'].fn_customValidation(projectName,this,validation,callback)
		}
	}
	closePopup(){
		setTimeout(()=>{
			this.handler.close_popup('','','','','',this,'','','','');
		},100)
	}
}

// End of class 
