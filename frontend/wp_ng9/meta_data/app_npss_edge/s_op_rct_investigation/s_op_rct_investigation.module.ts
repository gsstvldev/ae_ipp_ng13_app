/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 36031 
Modified By     : Admin 
Modified Date   : 2024-Jul-12 10:40 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_op_rct_investigation
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
import {npss_cs_maker_initiateModule} from '../../../custom_widget/npss_cs_maker_initiate/npss_cs_maker_initiate.module'
import {npss_cs_maker_closeModule} from '../../../custom_widget/npss_cs_maker_close/npss_cs_maker_close.module'
import {npss_cs_investigation_pac_028Module} from '../../../custom_widget/npss_cs_investigation_pac_028/npss_cs_investigation_pac_028.module'
import {npss_cs_rev_rejectModule} from '../../../custom_widget/npss_cs_rev_reject/npss_cs_rev_reject.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_op_rct_investigationComponent } from './s_op_rct_investigation.component';
import { s_op_rct_investigationRoutingModule } from './s_op_rct_investigation.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_rct_post_plog_srchComponent } from './f_npss_rct_post_plog_srch/f_npss_rct_post_plog_srch.component'
import { p_vertical_layoutComponent } from './p_vertical_layout/p_vertical_layout.component'
import { f_back_uiComponent } from './f_back_ui/f_back_ui.component'
import { p_view_message_list_layoutComponent } from './p_view_message_list_layout/p_view_message_list_layout.component'
import { f_message_detail_actionComponent } from './f_message_detail_action/f_message_detail_action.component'
import { p_view_history_layoutComponent } from './p_view_history_layout/p_view_history_layout.component'
import { f_process_log_uiComponent } from './f_process_log_ui/f_process_log_ui.component'
import { p_view_response_layoutComponent } from './p_view_response_layout/p_view_response_layout.component'
import { f_single_back_uiComponent } from './f_single_back_ui/f_single_back_ui.component'
import { f_npss_target_response_uiComponent } from './f_npss_target_response_ui/f_npss_target_response_ui.component'
import { p_view_request_layoutComponent } from './p_view_request_layout/p_view_request_layout.component'
import { f_npss_target_request_uiComponent } from './f_npss_target_request_ui/f_npss_target_request_ui.component'
import { p_view_message_ui_layoutComponent } from './p_view_message_ui_layout/p_view_message_ui_layout.component'
import { f_message_back_uiComponent } from './f_message_back_ui/f_message_back_ui.component'
import { f_npss_message_data_uiComponent } from './f_npss_message_data_ui/f_npss_message_data_ui.component'
import { p_view_req_and_res_profileComponent } from './p_view_req_and_res_profile/p_view_req_and_res_profile.component'
import { p_remarks_uiComponent } from './p_remarks_ui/p_remarks_ui.component'
import { f_npss_remarks_uiComponent } from './f_npss_remarks_ui/f_npss_remarks_ui.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_op_rct_investigationRoutingModule,
    torus_cs_change_routingkeyModule,torus_cs_show_hideModule,npss_cs_maker_initiateModule,npss_cs_maker_closeModule,npss_cs_investigation_pac_028Module,npss_cs_rev_rejectModule
  ],
  declarations: [s_op_rct_investigationComponent,p_main_layoutComponent,f_navigation_uiComponent,p_search_layoutComponent,f_npss_rct_post_plog_srchComponent,p_vertical_layoutComponent,f_back_uiComponent,p_view_message_list_layoutComponent,f_message_detail_actionComponent,p_view_history_layoutComponent,f_process_log_uiComponent,p_view_response_layoutComponent,f_single_back_uiComponent,f_npss_target_response_uiComponent,p_view_request_layoutComponent,f_npss_target_request_uiComponent,p_view_message_ui_layoutComponent,f_message_back_uiComponent,f_npss_message_data_uiComponent,p_view_req_and_res_profileComponent,p_remarks_uiComponent,f_npss_remarks_uiComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_op_rct_investigationModule { }

// End of class 
