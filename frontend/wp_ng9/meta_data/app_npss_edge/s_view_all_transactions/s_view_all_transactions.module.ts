/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26616 
Modified By     : Admin 
Modified Date   : 2022-Oct-21 9:49 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_all_transactions
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

import { s_view_all_transactionsComponent } from './s_view_all_transactions.component';
import { s_view_all_transactionsRoutingModule } from './s_view_all_transactions.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_process_log_srchComponent } from './f_npss_process_log_srch/f_npss_process_log_srch.component'
import { p_vertical_layoutComponent } from './p_vertical_layout/p_vertical_layout.component'
import { f_back_uiComponent } from './f_back_ui/f_back_ui.component'
import { p_refund_layoutComponent } from './p_refund_layout/p_refund_layout.component'
import { f_refund_uiComponent } from './f_refund_ui/f_refund_ui.component'
import { f_enable_refund_uiComponent } from './f_enable_refund_ui/f_enable_refund_ui.component'
import { f_submit_uiComponent } from './f_submit_ui/f_submit_ui.component'
import { p_view_request_layoutComponent } from './p_view_request_layout/p_view_request_layout.component'
import { f_chart_request_uiComponent } from './f_chart_request_ui/f_chart_request_ui.component'
import { p_view_history_layoutComponent } from './p_view_history_layout/p_view_history_layout.component'
import { p_view_response_layoutComponent } from './p_view_response_layout/p_view_response_layout.component'
import { f_chart_response_uiComponent } from './f_chart_response_ui/f_chart_response_ui.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_view_all_transactionsRoutingModule,
    torus_cs_show_hideModule
  ],
  declarations: [s_view_all_transactionsComponent,p_main_layoutComponent,f_navigation_uiComponent,p_search_layoutComponent,f_npss_process_log_srchComponent,p_vertical_layoutComponent,f_back_uiComponent,p_refund_layoutComponent,f_refund_uiComponent,f_enable_refund_uiComponent,f_submit_uiComponent,p_view_request_layoutComponent,f_chart_request_uiComponent,p_view_history_layoutComponent,p_view_response_layoutComponent,f_chart_response_uiComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_view_all_transactionsModule { }

// End of class 
