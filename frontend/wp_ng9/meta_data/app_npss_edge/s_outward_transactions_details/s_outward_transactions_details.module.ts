/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34424 
Modified By     : Admin 
Modified Date   : 2024-Feb-20 5:18 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_outward_transactions_details
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {ComponentModule} from '../../../widgets/component/component.module';
import {ControlModule} from '../../../widgets/control/control.module';
import { SharedModule } from '../../../shared/shared.module'

import {torus_cs_show_hideModule} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.module'
import {npss_cs_export_excel_for_reportModule} from '../../../custom_widget/npss_cs_export_excel_for_report/npss_cs_export_excel_for_report.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_outward_transactions_detailsComponent } from './s_outward_transactions_details.component';
import { s_outward_transactions_detailsRoutingModule } from './s_outward_transactions_details.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigationComponent } from './f_navigation/f_navigation.component'
import { f_npss_report_label_controlComponent } from './f_npss_report_label_control/f_npss_report_label_control.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_outward_transaction_details_report_srchComponent } from './f_npss_outward_transaction_details_report_srch/f_npss_outward_transaction_details_report_srch.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_outward_transactions_detailsRoutingModule,
    torus_cs_show_hideModule,npss_cs_export_excel_for_reportModule
  ],
  declarations: [s_outward_transactions_detailsComponent,p_main_layoutComponent,f_navigationComponent,f_npss_report_label_controlComponent,p_search_layoutComponent,f_npss_outward_transaction_details_report_srchComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_outward_transactions_detailsModule { }

// End of class 
