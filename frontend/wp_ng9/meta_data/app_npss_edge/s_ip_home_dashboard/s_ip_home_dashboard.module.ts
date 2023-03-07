/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28530 
Modified By     : Admin 
Modified Date   : 2023-Mar-07 13:38 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_ip_home_dashboard
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {ComponentModule} from '../../../widgets/component/component.module';
import {ControlModule} from '../../../widgets/control/control.module';
import { SharedModule } from '../../../shared/shared.module'


import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_ip_home_dashboardComponent } from './s_ip_home_dashboard.component';
import { s_ip_home_dashboardRoutingModule } from './s_ip_home_dashboard.routing.module';
    


import { p_default_profileComponent } from './p_default_profile/p_default_profile.component'
import { f_navigationComponent } from './f_navigation/f_navigation.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_home_dashboard_uiComponent } from './f_npss_home_dashboard_ui/f_npss_home_dashboard_ui.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_ip_home_dashboardRoutingModule,
    
  ],
  declarations: [s_ip_home_dashboardComponent,p_default_profileComponent,f_navigationComponent,p_search_layoutComponent,f_npss_home_dashboard_uiComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_ip_home_dashboardModule { }

// End of class 
