/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35872 
Modified By     : Admin 
Modified Date   : 2024-Jun-27 12:29 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_reversal_request_details
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

import { s_reversal_request_detailsComponent } from './s_reversal_request_details.component';
import { s_reversal_request_detailsRoutingModule } from './s_reversal_request_details.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigationComponent } from './f_navigation/f_navigation.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_reversal_request_details_srchComponent } from './f_npss_reversal_request_details_srch/f_npss_reversal_request_details_srch.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_reversal_request_detailsRoutingModule,
    npss_cs_dashboard_titleModule,npss_c_export_pdf_for_reportModule,npss_cs_export_excel_for_reportModule,npss_c_cond_ctrl_validationModule,torus_cs_show_hideModule
  ],
  declarations: [s_reversal_request_detailsComponent,p_main_layoutComponent,f_navigationComponent,p_search_layoutComponent,f_npss_reversal_request_details_srchComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_reversal_request_detailsModule { }

// End of class 
