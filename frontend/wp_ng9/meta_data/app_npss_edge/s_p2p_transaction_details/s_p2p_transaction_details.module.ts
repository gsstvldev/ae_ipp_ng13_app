/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27894 
Modified By     : Admin 
Modified Date   : 2023-Jan-23 13:22 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_p2p_transaction_details
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

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_p2p_transaction_detailsComponent } from './s_p2p_transaction_details.component';
import { s_p2p_transaction_detailsRoutingModule } from './s_p2p_transaction_details.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_op_transaction_details_srchComponent } from './f_npss_op_transaction_details_srch/f_npss_op_transaction_details_srch.component'
import { p_vertical_layoutComponent } from './p_vertical_layout/p_vertical_layout.component'
import { f_main_back_uiComponent } from './f_main_back_ui/f_main_back_ui.component'
import { p_refund_layoutComponent } from './p_refund_layout/p_refund_layout.component'
import { f_disable_refund_uiComponent } from './f_disable_refund_ui/f_disable_refund_ui.component'
import { f_enable_refund_uiComponent } from './f_enable_refund_ui/f_enable_refund_ui.component'
import { f_submit_uiComponent } from './f_submit_ui/f_submit_ui.component'
import { p_view_response_layoutComponent } from './p_view_response_layout/p_view_response_layout.component'
import { f_npss_target_response_uiComponent } from './f_npss_target_response_ui/f_npss_target_response_ui.component'
import { f_hst_process_log_backComponent } from './f_hst_process_log_back/f_hst_process_log_back.component'
import { p_view_request_layoutComponent } from './p_view_request_layout/p_view_request_layout.component'
import { f_npss_target_request_uiComponent } from './f_npss_target_request_ui/f_npss_target_request_ui.component'
import { p_view_history_layoutComponent } from './p_view_history_layout/p_view_history_layout.component'
import { f_hst_process_log_to_main_backComponent } from './f_hst_process_log_to_main_back/f_hst_process_log_to_main_back.component'
import { p_view_message_layoutComponent } from './p_view_message_layout/p_view_message_layout.component'
import { f_message_detail_actionComponent } from './f_message_detail_action/f_message_detail_action.component'
import { p_view_message_detail_uiComponent } from './p_view_message_detail_ui/p_view_message_detail_ui.component'
import { f_message_detail_back_uiComponent } from './f_message_detail_back_ui/f_message_detail_back_ui.component'
import { f_npss_message_data_uiComponent } from './f_npss_message_data_ui/f_npss_message_data_ui.component'
import { p_main_req_and_response_layoutComponent } from './p_main_req_and_response_layout/p_main_req_and_response_layout.component'
import { f_npss_target_main_page_request_uiComponent } from './f_npss_target_main_page_request_ui/f_npss_target_main_page_request_ui.component'
import { f_npss_target_main_page_response_uiComponent } from './f_npss_target_main_page_response_ui/f_npss_target_main_page_response_ui.component'
import { p_pl_req_and_res_layoutComponent } from './p_pl_req_and_res_layout/p_pl_req_and_res_layout.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_p2p_transaction_detailsRoutingModule,
    torus_cs_change_routingkeyModule,torus_cs_show_hideModule
  ],
  declarations: [s_p2p_transaction_detailsComponent,p_main_layoutComponent,f_navigation_uiComponent,p_search_layoutComponent,f_npss_op_transaction_details_srchComponent,p_vertical_layoutComponent,f_main_back_uiComponent,p_refund_layoutComponent,f_disable_refund_uiComponent,f_enable_refund_uiComponent,f_submit_uiComponent,p_view_response_layoutComponent,f_npss_target_response_uiComponent,f_hst_process_log_backComponent,p_view_request_layoutComponent,f_npss_target_request_uiComponent,p_view_history_layoutComponent,f_hst_process_log_to_main_backComponent,p_view_message_layoutComponent,f_message_detail_actionComponent,p_view_message_detail_uiComponent,f_message_detail_back_uiComponent,f_npss_message_data_uiComponent,p_main_req_and_response_layoutComponent,f_npss_target_main_page_request_uiComponent,f_npss_target_main_page_response_uiComponent,p_pl_req_and_res_layoutComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_p2p_transaction_detailsModule { }

// End of class 
