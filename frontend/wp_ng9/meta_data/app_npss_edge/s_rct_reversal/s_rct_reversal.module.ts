/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27575 
Modified By     : Admin 
Modified Date   : 2022-Dec-28 11:2 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_reversal
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {ComponentModule} from '../../../widgets/component/component.module';
import {ControlModule} from '../../../widgets/control/control.module';
import { SharedModule } from '../../../shared/shared.module'

import {npss_cs_rev_get_usable_balanceModule} from '../../../custom_widget/npss_cs_rev_get_usable_balance/npss_cs_rev_get_usable_balance.module'
import {torus_cs_change_routingkeyModule} from '../../../custom_widget/torus_cs_change_routingkey/torus_cs_change_routingkey.module'
import {torus_cs_show_hideModule} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.module'
import {npss_cs_reversal_set_status_and_bind_valueModule} from '../../../custom_widget/npss_cs_reversal_set_status_and_bind_value/npss_cs_reversal_set_status_and_bind_value.module'
import {npss_cs_ip_rev_accept_inau_reserve_fundModule} from '../../../custom_widget/npss_cs_ip_rev_accept_inau_reserve_fund/npss_cs_ip_rev_accept_inau_reserve_fund.module'
import {npss_cs_reject_pack002Module} from '../../../custom_widget/npss_cs_reject_pack002/npss_cs_reject_pack002.module'
import {npss_cs_ip_rev_ret_auth_pacs004Module} from '../../../custom_widget/npss_cs_ip_rev_ret_auth_pacs004/npss_cs_ip_rev_ret_auth_pacs004.module'
import {npss_cs_ip_rev_reject_inau_reserve_fundModule} from '../../../custom_widget/npss_cs_ip_rev_reject_inau_reserve_fund/npss_cs_ip_rev_reject_inau_reserve_fund.module'
import {npss_cs_reversal_cancelModule} from '../../../custom_widget/npss_cs_reversal_cancel/npss_cs_reversal_cancel.module'
import {npss_cs_reversal_send_to_makerModule} from '../../../custom_widget/npss_cs_reversal_send_to_maker/npss_cs_reversal_send_to_maker.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_rct_reversalComponent } from './s_rct_reversal.component';
import { s_rct_reversalRoutingModule } from './s_rct_reversal.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigationComponent } from './f_navigation/f_navigation.component'
import { f_trig_action_for_list_uiComponent } from './f_trig_action_for_list_ui/f_trig_action_for_list_ui.component'
import { p_fh_review_layoutComponent } from './p_fh_review_layout/p_fh_review_layout.component'
import { f_npss_rct_reversal_uiComponent } from './f_npss_rct_reversal_ui/f_npss_rct_reversal_ui.component'
import { f_npss_reversal_plog_uiComponent } from './f_npss_reversal_plog_ui/f_npss_reversal_plog_ui.component'
import { f_reversal_action_uiComponent } from './f_reversal_action_ui/f_reversal_action_ui.component'
import { p_fab_review_layoutComponent } from './p_fab_review_layout/p_fab_review_layout.component'
import { f_npss_tran_remarks_uiComponent } from './f_npss_tran_remarks_ui/f_npss_tran_remarks_ui.component'
import { p_change_return_layoutComponent } from './p_change_return_layout/p_change_return_layout.component'
import { f_npss_pl_change_rtn_reason_uiComponent } from './f_npss_pl_change_rtn_reason_ui/f_npss_pl_change_rtn_reason_ui.component'
import { p_remarks_layoutComponent } from './p_remarks_layout/p_remarks_layout.component'
import { f_npss_reject_uiComponent } from './f_npss_reject_ui/f_npss_reject_ui.component'
import { f_npss_remarks_uiComponent } from './f_npss_remarks_ui/f_npss_remarks_ui.component'
import { p_vertical_layoutComponent } from './p_vertical_layout/p_vertical_layout.component'
import { f_back_uiComponent } from './f_back_ui/f_back_ui.component'
import { p_view_history_layoutComponent } from './p_view_history_layout/p_view_history_layout.component'
import { f_process_log_uiComponent } from './f_process_log_ui/f_process_log_ui.component'
import { p_view_message_list_layoutComponent } from './p_view_message_list_layout/p_view_message_list_layout.component'
import { f_message_detail_actionComponent } from './f_message_detail_action/f_message_detail_action.component'
import { p_view_message_ui_layoutComponent } from './p_view_message_ui_layout/p_view_message_ui_layout.component'
import { f_message_back_uiComponent } from './f_message_back_ui/f_message_back_ui.component'
import { f_npss_message_data_uiComponent } from './f_npss_message_data_ui/f_npss_message_data_ui.component'
import { p_view_req_and_res_profileComponent } from './p_view_req_and_res_profile/p_view_req_and_res_profile.component'
import { f_single_back_uiComponent } from './f_single_back_ui/f_single_back_ui.component'
import { f_npss_target_request_uiComponent } from './f_npss_target_request_ui/f_npss_target_request_ui.component'
import { f_npss_target_response_uiComponent } from './f_npss_target_response_ui/f_npss_target_response_ui.component'
import { p_cancel_layoutComponent } from './p_cancel_layout/p_cancel_layout.component'
import { f_npss_pl_change_cancel_reason_uiComponent } from './f_npss_pl_change_cancel_reason_ui/f_npss_pl_change_cancel_reason_ui.component'
import { p_send_to_maker_layoutComponent } from './p_send_to_maker_layout/p_send_to_maker_layout.component'
import { f_npss_send_to_maker_uiComponent } from './f_npss_send_to_maker_ui/f_npss_send_to_maker_ui.component'
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
    
    s_rct_reversalRoutingModule,
    npss_cs_rev_get_usable_balanceModule,torus_cs_change_routingkeyModule,torus_cs_show_hideModule,npss_cs_reversal_set_status_and_bind_valueModule,npss_cs_ip_rev_accept_inau_reserve_fundModule,npss_cs_reject_pack002Module,npss_cs_ip_rev_ret_auth_pacs004Module,npss_cs_ip_rev_reject_inau_reserve_fundModule,npss_cs_reversal_cancelModule,npss_cs_reversal_send_to_makerModule
  ],
  declarations: [s_rct_reversalComponent,p_main_layoutComponent,f_navigationComponent,f_trig_action_for_list_uiComponent,p_fh_review_layoutComponent,f_npss_rct_reversal_uiComponent,f_npss_reversal_plog_uiComponent,f_reversal_action_uiComponent,p_fab_review_layoutComponent,f_npss_tran_remarks_uiComponent,p_change_return_layoutComponent,f_npss_pl_change_rtn_reason_uiComponent,p_remarks_layoutComponent,f_npss_reject_uiComponent,f_npss_remarks_uiComponent,p_vertical_layoutComponent,f_back_uiComponent,p_view_history_layoutComponent,f_process_log_uiComponent,p_view_message_list_layoutComponent,f_message_detail_actionComponent,p_view_message_ui_layoutComponent,f_message_back_uiComponent,f_npss_message_data_uiComponent,p_view_req_and_res_profileComponent,f_single_back_uiComponent,f_npss_target_request_uiComponent,f_npss_target_response_uiComponent,p_cancel_layoutComponent,f_npss_pl_change_cancel_reason_uiComponent,p_send_to_maker_layoutComponent,f_npss_send_to_maker_uiComponent,p_view_request_layoutComponent,p_view_response_layoutComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_rct_reversalModule { }

// End of class 
