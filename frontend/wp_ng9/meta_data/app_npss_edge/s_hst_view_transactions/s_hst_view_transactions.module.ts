/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26616 
Modified By     : Admin 
Modified Date   : 2022-Oct-21 9:49 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_hst_view_transactions
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

import { s_hst_view_transactionsComponent } from './s_hst_view_transactions.component';
import { s_hst_view_transactionsRoutingModule } from './s_hst_view_transactions.routing.module';
    


import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_hst_dashboard_srchComponent } from './f_npss_hst_dashboard_srch/f_npss_hst_dashboard_srch.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_hst_view_transactionsRoutingModule,
    
  ],
  declarations: [s_hst_view_transactionsComponent,p_search_layoutComponent,f_npss_hst_dashboard_srchComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_hst_view_transactionsModule { }

// End of class 
