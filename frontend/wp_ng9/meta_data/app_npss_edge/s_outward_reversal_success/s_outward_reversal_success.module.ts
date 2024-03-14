/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34763 
Modified By     : Admin 
Modified Date   : 2024-Mar-14 9:56 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_outward_reversal_success
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
import {torus_cs_show_hideModule} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.module'
import {npss_c_date_validation_for_reportModule} from '../../../custom_widget/npss_c_date_validation_for_report/npss_c_date_validation_for_report.module'
import {npss_c_cond_ctrl_ui_validationModule} from '../../../custom_widget/npss_c_cond_ctrl_ui_validation/npss_c_cond_ctrl_ui_validation.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_outward_reversal_successComponent } from './s_outward_reversal_success.component';
import { s_outward_reversal_successRoutingModule } from './s_outward_reversal_success.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigationComponent } from './f_navigation/f_navigation.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_outward_reversal_success_srchComponent } from './f_npss_outward_reversal_success_srch/f_npss_outward_reversal_success_srch.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_outward_reversal_successRoutingModule,
    npss_cs_dashboard_titleModule,npss_c_export_pdf_for_reportModule,npss_cs_export_excel_for_reportModule,torus_cs_show_hideModule,npss_c_date_validation_for_reportModule,npss_c_cond_ctrl_ui_validationModule
  ],
  declarations: [s_outward_reversal_successComponent,p_main_layoutComponent,f_navigationComponent,p_search_layoutComponent,f_npss_outward_reversal_success_srchComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_outward_reversal_successModule { }

// End of class 
