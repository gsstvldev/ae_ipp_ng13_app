/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26520 
Modified By     : Admin 
Modified Date   : 2022-Oct-18 6:23 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_post_view_transactions
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

import { s_post_view_transactionsComponent } from './s_post_view_transactions.component';
import { s_post_view_transactionsRoutingModule } from './s_post_view_transactions.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_hst_dashboard_srchComponent } from './f_npss_hst_dashboard_srch/f_npss_hst_dashboard_srch.component'
import { p_vertical_layoutComponent } from './p_vertical_layout/p_vertical_layout.component'
import { f_back_uiComponent } from './f_back_ui/f_back_ui.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_post_view_transactionsRoutingModule,
    
  ],
  declarations: [s_post_view_transactionsComponent,p_main_layoutComponent,f_navigation_uiComponent,p_search_layoutComponent,f_npss_hst_dashboard_srchComponent,p_vertical_layoutComponent,f_back_uiComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_post_view_transactionsModule { }

// End of class 
