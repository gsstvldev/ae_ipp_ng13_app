/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27750 
Modified By     : Admin 
Modified Date   : 2023-Jan-07 16:5 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_bct_review_time_out_transactions
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {ComponentModule} from '../../../widgets/component/component.module';
import {ControlModule} from '../../../widgets/control/control.module';
import { SharedModule } from '../../../shared/shared.module'

import {torus_cs_change_routingkeyModule} from '../../../custom_widget/torus_cs_change_routingkey/torus_cs_change_routingkey.module'
import {torus_cs_show_hideModule} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.module'
import {npss_cs_bct_timeout_retryModule} from '../../../custom_widget/npss_cs_bct_timeout_retry/npss_cs_bct_timeout_retry.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_bct_review_time_out_transactionsComponent } from './s_bct_review_time_out_transactions.component';
import { s_bct_review_time_out_transactionsRoutingModule } from './s_bct_review_time_out_transactions.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'
import { f_hst_process_log_to_main_backComponent } from './f_hst_process_log_to_main_back/f_hst_process_log_to_main_back.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_tran_srchComponent } from './f_npss_tran_srch/f_npss_tran_srch.component'
import { p_vertical_layoutComponent } from './p_vertical_layout/p_vertical_layout.component'
import { f_back_uiComponent } from './f_back_ui/f_back_ui.component'
import { p_view_history_layoutComponent } from './p_view_history_layout/p_view_history_layout.component'
import { f_process_log_uiComponent } from './f_process_log_ui/f_process_log_ui.component'
import { p_view_request_layoutComponent } from './p_view_request_layout/p_view_request_layout.component'
import { f_npss_target_request_uiComponent } from './f_npss_target_request_ui/f_npss_target_request_ui.component'
import { f_single_back_uiComponent } from './f_single_back_ui/f_single_back_ui.component'
import { p_view_response_layoutComponent } from './p_view_response_layout/p_view_response_layout.component'
import { f_npss_target_response_uiComponent } from './f_npss_target_response_ui/f_npss_target_response_ui.component'
import { p_view_req_and_res_layoutComponent } from './p_view_req_and_res_layout/p_view_req_and_res_layout.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_bct_review_time_out_transactionsRoutingModule,
    torus_cs_change_routingkeyModule,torus_cs_show_hideModule,npss_cs_bct_timeout_retryModule
  ],
  declarations: [s_bct_review_time_out_transactionsComponent,p_main_layoutComponent,f_navigation_uiComponent,f_hst_process_log_to_main_backComponent,p_search_layoutComponent,f_npss_tran_srchComponent,p_vertical_layoutComponent,f_back_uiComponent,p_view_history_layoutComponent,f_process_log_uiComponent,p_view_request_layoutComponent,f_npss_target_request_uiComponent,f_single_back_uiComponent,p_view_response_layoutComponent,f_npss_target_response_uiComponent,p_view_req_and_res_layoutComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_bct_review_time_out_transactionsModule { }

// End of class 
