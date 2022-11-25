/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26999 
Modified By     : Admin 
Modified Date   : 2022-Nov-25 11:37 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_iban_transaction_details
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

import { s_iban_transaction_detailsComponent } from './s_iban_transaction_details.component';
import { s_iban_transaction_detailsRoutingModule } from './s_iban_transaction_details.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_rct_post_plog_srchComponent } from './f_npss_rct_post_plog_srch/f_npss_rct_post_plog_srch.component'
import { p_vertical_layoutComponent } from './p_vertical_layout/p_vertical_layout.component'
import { f_main_back_uiComponent } from './f_main_back_ui/f_main_back_ui.component'
import { p_refund_layoutComponent } from './p_refund_layout/p_refund_layout.component'
import { f_disable_refund_uiComponent } from './f_disable_refund_ui/f_disable_refund_ui.component'
import { f_enable_refund_uiComponent } from './f_enable_refund_ui/f_enable_refund_ui.component'
import { f_submit_uiComponent } from './f_submit_ui/f_submit_ui.component'
import { p_view_response_layoutComponent } from './p_view_response_layout/p_view_response_layout.component'
import { f_npss_iban_response_uiComponent } from './f_npss_iban_response_ui/f_npss_iban_response_ui.component'
import { f_hst_process_log_backComponent } from './f_hst_process_log_back/f_hst_process_log_back.component'
import { p_view_request_layoutComponent } from './p_view_request_layout/p_view_request_layout.component'
import { f_npss_iban_request_uiComponent } from './f_npss_iban_request_ui/f_npss_iban_request_ui.component'
import { p_view_history_layoutComponent } from './p_view_history_layout/p_view_history_layout.component'
import { f_hst_process_log_to_main_backComponent } from './f_hst_process_log_to_main_back/f_hst_process_log_to_main_back.component'
import { p_view_message_layoutComponent } from './p_view_message_layout/p_view_message_layout.component'
import { f_message_detail_actionComponent } from './f_message_detail_action/f_message_detail_action.component'
import { p_view_message_ui_layoutComponent } from './p_view_message_ui_layout/p_view_message_ui_layout.component'
import { f_npss_message_data_uiComponent } from './f_npss_message_data_ui/f_npss_message_data_ui.component'
import { f_message_back_uiComponent } from './f_message_back_ui/f_message_back_ui.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_iban_transaction_detailsRoutingModule,
    torus_cs_show_hideModule
  ],
  declarations: [s_iban_transaction_detailsComponent,p_main_layoutComponent,f_navigation_uiComponent,p_search_layoutComponent,f_npss_rct_post_plog_srchComponent,p_vertical_layoutComponent,f_main_back_uiComponent,p_refund_layoutComponent,f_disable_refund_uiComponent,f_enable_refund_uiComponent,f_submit_uiComponent,p_view_response_layoutComponent,f_npss_iban_response_uiComponent,f_hst_process_log_backComponent,p_view_request_layoutComponent,f_npss_iban_request_uiComponent,p_view_history_layoutComponent,f_hst_process_log_to_main_backComponent,p_view_message_layoutComponent,f_message_detail_actionComponent,p_view_message_ui_layoutComponent,f_npss_message_data_uiComponent,f_message_back_uiComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_iban_transaction_detailsModule { }

// End of class 
