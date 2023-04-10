/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 29049 
Modified By     : Admin 
Modified Date   : 2023-Apr-10 10:15 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_bct_posting_suspicious
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
import {npss_cs_t24_postingModule} from '../../../custom_widget/npss_cs_t24_posting/npss_cs_t24_posting.module'
import {npss_cs_enquiryModule} from '../../../custom_widget/npss_cs_enquiry/npss_cs_enquiry.module'
import {npss_cs_cc_postingModule} from '../../../custom_widget/npss_cs_cc_posting/npss_cs_cc_posting.module'
import {npss_cs_bct_already_postingModule} from '../../../custom_widget/npss_cs_bct_already_posting/npss_cs_bct_already_posting.module'
import {npss_cs_bct_retryModule} from '../../../custom_widget/npss_cs_bct_retry/npss_cs_bct_retry.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_bct_posting_suspiciousComponent } from './s_bct_posting_suspicious.component';
import { s_bct_posting_suspiciousRoutingModule } from './s_bct_posting_suspicious.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_tran_srchComponent } from './f_npss_tran_srch/f_npss_tran_srch.component'
import { p_cbs_layoutComponent } from './p_cbs_layout/p_cbs_layout.component'
import { f_npss_bct_ref_no_uiComponent } from './f_npss_bct_ref_no_ui/f_npss_bct_ref_no_ui.component'
import { p_view_detail_layoutComponent } from './p_view_detail_layout/p_view_detail_layout.component'
import { f_back_uiComponent } from './f_back_ui/f_back_ui.component'
import { p_view_history_layoutComponent } from './p_view_history_layout/p_view_history_layout.component'
import { f_process_log_uiComponent } from './f_process_log_ui/f_process_log_ui.component'
import { p_view_request_layoutComponent } from './p_view_request_layout/p_view_request_layout.component'
import { f_npss_target_request_uiComponent } from './f_npss_target_request_ui/f_npss_target_request_ui.component'
import { f_single_back_uiComponent } from './f_single_back_ui/f_single_back_ui.component'
import { p_view_response_layoutComponent } from './p_view_response_layout/p_view_response_layout.component'
import { f_npss_target_response_uiComponent } from './f_npss_target_response_ui/f_npss_target_response_ui.component'
import { p_view_req_and_res_profileComponent } from './p_view_req_and_res_profile/p_view_req_and_res_profile.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_bct_posting_suspiciousRoutingModule,
    torus_cs_change_routingkeyModule,torus_cs_show_hideModule,npss_cs_t24_postingModule,npss_cs_enquiryModule,npss_cs_cc_postingModule,npss_cs_bct_already_postingModule,npss_cs_bct_retryModule
  ],
  declarations: [s_bct_posting_suspiciousComponent,p_main_layoutComponent,f_navigation_uiComponent,p_search_layoutComponent,f_npss_tran_srchComponent,p_cbs_layoutComponent,f_npss_bct_ref_no_uiComponent,p_view_detail_layoutComponent,f_back_uiComponent,p_view_history_layoutComponent,f_process_log_uiComponent,p_view_request_layoutComponent,f_npss_target_request_uiComponent,f_single_back_uiComponent,p_view_response_layoutComponent,f_npss_target_response_uiComponent,p_view_req_and_res_profileComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_bct_posting_suspiciousModule { }

// End of class 
