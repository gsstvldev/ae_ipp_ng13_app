/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26401 
Modified By     : Admin 
Modified Date   : 2022-Oct-12 5:35 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_power_bi_dashboard
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

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_power_bi_dashboardComponent } from './s_power_bi_dashboard.component';
import { s_power_bi_dashboardRoutingModule } from './s_power_bi_dashboard.routing.module';
    


import { p_power_dashboard_layoutComponent } from './p_power_dashboard_layout/p_power_dashboard_layout.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_power_reports_srchComponent } from './f_npss_power_reports_srch/f_npss_power_reports_srch.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_power_bi_dashboardRoutingModule,
    torus_cs_show_hideModule
  ],
  declarations: [s_power_bi_dashboardComponent,p_power_dashboard_layoutComponent,p_search_layoutComponent,f_npss_power_reports_srchComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_power_bi_dashboardModule { }

// End of class 
