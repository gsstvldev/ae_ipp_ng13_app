/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 30907 
Modified By     : Admin 
Modified Date   : 2023-Jul-05 13:19 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_lca_account_entries_exceptions
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
import {npss_cs_check_hdrModule} from '../../../custom_widget/npss_cs_check_hdr/npss_cs_check_hdr.module'
import {npss_cs_lca_acc_entries_exceptionModule} from '../../../custom_widget/npss_cs_lca_acc_entries_exception/npss_cs_lca_acc_entries_exception.module'
import {npss_cs_rct_inward_posting_failure_closeModule} from '../../../custom_widget/npss_cs_rct_inward_posting_failure_close/npss_cs_rct_inward_posting_failure_close.module'
import {npss_cs_rct_inward_posting_failure_retry_repostModule} from '../../../custom_widget/npss_cs_rct_inward_posting_failure_retry_repost/npss_cs_rct_inward_posting_failure_retry_repost.module'
import {npss_c_disable_action_by_multiselectModule} from '../../../custom_widget/npss_c_disable_action_by_multiselect/npss_c_disable_action_by_multiselect.module'
import {npss_cs_rct_already_postingModule} from '../../../custom_widget/npss_cs_rct_already_posting/npss_cs_rct_already_posting.module'
import {npss_cs_cc_postingModule} from '../../../custom_widget/npss_cs_cc_posting/npss_cs_cc_posting.module'
import {npss_cs_enquiryModule} from '../../../custom_widget/npss_cs_enquiry/npss_cs_enquiry.module'
import {npss_cs_t24_postingModule} from '../../../custom_widget/npss_cs_t24_posting/npss_cs_t24_posting.module'
import {npss_cs_rct_completeModule} from '../../../custom_widget/npss_cs_rct_complete/npss_cs_rct_complete.module'
import {npss_cs_inward_posting_failure_force_to_postModule} from '../../../custom_widget/npss_cs_inward_posting_failure_force_to_post/npss_cs_inward_posting_failure_force_to_post.module'
import {npss_cs_outward_posting_failure_send_to_checkerModule} from '../../../custom_widget/npss_cs_outward_posting_failure_send_to_checker/npss_cs_outward_posting_failure_send_to_checker.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_lca_account_entries_exceptionsComponent } from './s_lca_account_entries_exceptions.component';
import { s_lca_account_entries_exceptionsRoutingModule } from './s_lca_account_entries_exceptions.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_lca_tran_srchComponent } from './f_npss_lca_tran_srch/f_npss_lca_tran_srch.component'
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
import { p_cbs_layoutComponent } from './p_cbs_layout/p_cbs_layout.component'
import { f_cbs_ref_uiComponent } from './f_cbs_ref_ui/f_cbs_ref_ui.component'
import { p_send_to_maker_layoutComponent } from './p_send_to_maker_layout/p_send_to_maker_layout.component'
import { f_send_to_maker_uiComponent } from './f_send_to_maker_ui/f_send_to_maker_ui.component'
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
    
    s_lca_account_entries_exceptionsRoutingModule,
    torus_cs_change_routingkeyModule,torus_cs_show_hideModule,npss_cs_check_hdrModule,npss_cs_lca_acc_entries_exceptionModule,npss_cs_rct_inward_posting_failure_closeModule,npss_cs_rct_inward_posting_failure_retry_repostModule,npss_c_disable_action_by_multiselectModule,npss_cs_rct_already_postingModule,npss_cs_cc_postingModule,npss_cs_enquiryModule,npss_cs_t24_postingModule,npss_cs_rct_completeModule,npss_cs_inward_posting_failure_force_to_postModule,npss_cs_outward_posting_failure_send_to_checkerModule
  ],
  declarations: [s_lca_account_entries_exceptionsComponent,p_main_layoutComponent,f_navigation_uiComponent,p_search_layoutComponent,f_npss_lca_tran_srchComponent,p_vertical_tran_detail_profileComponent,f_back_uiComponent,p_view_history_layoutComponent,f_process_log_uiComponent,p_view_message_list_layoutComponent,f_message_detail_actionComponent,p_view_message_ui_layoutComponent,f_message_back_uiComponent,f_message_detail_uiComponent,p_view_req_and_resComponent,f_single_back_uiComponent,f_npss_target_request_uiComponent,f_npss_target_response_uiComponent,p_cbs_layoutComponent,f_cbs_ref_uiComponent,p_send_to_maker_layoutComponent,f_send_to_maker_uiComponent,p_view_request_layoutComponent,p_view_response_layoutComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_lca_account_entries_exceptionsModule { }

// End of class 