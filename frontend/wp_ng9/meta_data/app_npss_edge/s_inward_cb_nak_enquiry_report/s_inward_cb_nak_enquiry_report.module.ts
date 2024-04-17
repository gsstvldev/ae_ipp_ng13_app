/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35168 
Modified By     : Admin 
Modified Date   : 2024-Apr-17 5:42 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_inward_cb_nak_enquiry_report
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {ComponentModule} from '../../../widgets/component/component.module';
import {ControlModule} from '../../../widgets/control/control.module';
import { SharedModule } from '../../../shared/shared.module'

import {npss_cs_dashboard_titleModule} from '../../../custom_widget/npss_cs_dashboard_title/npss_cs_dashboard_title.module'
import {npss_c_export_pdf_for_reportModule} from '../../../custom_widget/npss_c_export_pdf_for_report/npss_c_export_pdf_for_report.module'
import {npss_cs_export_excel_for_reportModule} from '../../../custom_widget/npss_cs_export_excel_for_report/npss_cs_export_excel_for_report.module'
import {npss_c_cond_ctrl_validationModule} from '../../../custom_widget/npss_c_cond_ctrl_validation/npss_c_cond_ctrl_validation.module'
import {torus_cs_show_hideModule} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_inward_cb_nak_enquiry_reportComponent } from './s_inward_cb_nak_enquiry_report.component';
import { s_inward_cb_nak_enquiry_reportRoutingModule } from './s_inward_cb_nak_enquiry_report.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigationComponent } from './f_navigation/f_navigation.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_inward_cb_nak_enquiry_report_srchComponent } from './f_npss_inward_cb_nak_enquiry_report_srch/f_npss_inward_cb_nak_enquiry_report_srch.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_inward_cb_nak_enquiry_reportRoutingModule,
    npss_cs_dashboard_titleModule,npss_c_export_pdf_for_reportModule,npss_cs_export_excel_for_reportModule,npss_c_cond_ctrl_validationModule,torus_cs_show_hideModule
  ],
  declarations: [s_inward_cb_nak_enquiry_reportComponent,p_main_layoutComponent,f_navigationComponent,p_search_layoutComponent,f_npss_inward_cb_nak_enquiry_report_srchComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_inward_cb_nak_enquiry_reportModule { }

// End of class 
