/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34531 
Modified By     : Admin 
Modified Date   : 2024-Feb-23 7:11 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_rejected_payments
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
import {npss_cs_rejected_payment_closeModule} from '../../../custom_widget/npss_cs_rejected_payment_close/npss_cs_rejected_payment_close.module'
import {npss_cs_rejected_payment_rejectModule} from '../../../custom_widget/npss_cs_rejected_payment_reject/npss_cs_rejected_payment_reject.module'
import {npss_cs_rejected_payment_resubmitModule} from '../../../custom_widget/npss_cs_rejected_payment_resubmit/npss_cs_rejected_payment_resubmit.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_rct_rejected_paymentsComponent } from './s_rct_rejected_payments.component';
import { s_rct_rejected_paymentsRoutingModule } from './s_rct_rejected_payments.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_reject_payment_srchComponent } from './f_npss_reject_payment_srch/f_npss_reject_payment_srch.component'
import { p_vertical_tran_detail_profileComponent } from './p_vertical_tran_detail_profile/p_vertical_tran_detail_profile.component'
import { f_back_uiComponent } from './f_back_ui/f_back_ui.component'
import { p_view_history_layoutComponent } from './p_view_history_layout/p_view_history_layout.component'
import { f_process_log_uiComponent } from './f_process_log_ui/f_process_log_ui.component'
import { p_view_message_list_layoutComponent } from './p_view_message_list_layout/p_view_message_list_layout.component'
import { f_message_detail_actionComponent } from './f_message_detail_action/f_message_detail_action.component'
import { p_view_message_ui_layoutComponent } from './p_view_message_ui_layout/p_view_message_ui_layout.component'
import { f_message_back_uiComponent } from './f_message_back_ui/f_message_back_ui.component'
import { f_message_detail_uiComponent } from './f_message_detail_ui/f_message_detail_ui.component'
import { p_view_req_and_resComponent } from './p_view_req_and_res/p_view_req_and_res.component'
import { f_single_back_uiComponent } from './f_single_back_ui/f_single_back_ui.component'
import { f_npss_target_request_uiComponent } from './f_npss_target_request_ui/f_npss_target_request_ui.component'
import { f_npss_target_response_uiComponent } from './f_npss_target_response_ui/f_npss_target_response_ui.component'
import { p_review_layoutComponent } from './p_review_layout/p_review_layout.component'
import { f_npss_reject_pay_review_uiComponent } from './f_npss_reject_pay_review_ui/f_npss_reject_pay_review_ui.component'
import { f_review_action_uiComponent } from './f_review_action_ui/f_review_action_ui.component'
import { p_close_layoutComponent } from './p_close_layout/p_close_layout.component'
import { f_npss_remarks_uiComponent } from './f_npss_remarks_ui/f_npss_remarks_ui.component'
import { p_view_request_layoutComponent } from './p_view_request_layout/p_view_request_layout.component'
import { p_view_response_layoutComponent } from './p_view_response_layout/p_view_response_layout.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_rct_rejected_paymentsRoutingModule,
    torus_cs_change_routingkeyModule,torus_cs_show_hideModule,npss_cs_rejected_payment_closeModule,npss_cs_rejected_payment_rejectModule,npss_cs_rejected_payment_resubmitModule
  ],
  declarations: [s_rct_rejected_paymentsComponent,p_main_layoutComponent,f_navigation_uiComponent,p_search_layoutComponent,f_npss_reject_payment_srchComponent,p_vertical_tran_detail_profileComponent,f_back_uiComponent,p_view_history_layoutComponent,f_process_log_uiComponent,p_view_message_list_layoutComponent,f_message_detail_actionComponent,p_view_message_ui_layoutComponent,f_message_back_uiComponent,f_message_detail_uiComponent,p_view_req_and_resComponent,f_single_back_uiComponent,f_npss_target_request_uiComponent,f_npss_target_response_uiComponent,p_review_layoutComponent,f_npss_reject_pay_review_uiComponent,f_review_action_uiComponent,p_close_layoutComponent,f_npss_remarks_uiComponent,p_view_request_layoutComponent,p_view_response_layoutComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_rct_rejected_paymentsModule { }

// End of class 
