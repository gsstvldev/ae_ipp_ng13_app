/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27399 
Modified By     : Admin 
Modified Date   : 2022-Dec-16 11:48 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_op_rct_reversal
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
import {npss_cs_reversal_initiateModule} from '../../../custom_widget/npss_cs_reversal_initiate/npss_cs_reversal_initiate.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_op_rct_reversalComponent } from './s_op_rct_reversal.component';
import { s_op_rct_reversalRoutingModule } from './s_op_rct_reversal.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_op_reversal_srchComponent } from './f_npss_op_reversal_srch/f_npss_op_reversal_srch.component'
import { p_vertical_layoutComponent } from './p_vertical_layout/p_vertical_layout.component'
import { f_back_uiComponent } from './f_back_ui/f_back_ui.component'
import { p_view_message_list_layoutComponent } from './p_view_message_list_layout/p_view_message_list_layout.component'
import { f_message_detail_actionComponent } from './f_message_detail_action/f_message_detail_action.component'
import { p_view_history_layoutComponent } from './p_view_history_layout/p_view_history_layout.component'
import { f_process_log_uiComponent } from './f_process_log_ui/f_process_log_ui.component'
import { p_view_response_layoutComponent } from './p_view_response_layout/p_view_response_layout.component'
import { f_single_back_uiComponent } from './f_single_back_ui/f_single_back_ui.component'
import { f_response_uiComponent } from './f_response_ui/f_response_ui.component'
import { p_view_request_layoutComponent } from './p_view_request_layout/p_view_request_layout.component'
import { f_request_uiComponent } from './f_request_ui/f_request_ui.component'
import { p_view_message_ui_layoutComponent } from './p_view_message_ui_layout/p_view_message_ui_layout.component'
import { f_message_back_uiComponent } from './f_message_back_ui/f_message_back_ui.component'
import { f_message_detail_uiComponent } from './f_message_detail_ui/f_message_detail_ui.component'
import { p_view_req_and_res_profileComponent } from './p_view_req_and_res_profile/p_view_req_and_res_profile.component'
import { p_initate_layoutComponent } from './p_initate_layout/p_initate_layout.component'
import { f_npss_op_reversal_uiComponent } from './f_npss_op_reversal_ui/f_npss_op_reversal_ui.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_op_rct_reversalRoutingModule,
    torus_cs_change_routingkeyModule,torus_cs_show_hideModule,npss_cs_reversal_initiateModule
  ],
  declarations: [s_op_rct_reversalComponent,p_main_layoutComponent,f_navigation_uiComponent,p_search_layoutComponent,f_npss_op_reversal_srchComponent,p_vertical_layoutComponent,f_back_uiComponent,p_view_message_list_layoutComponent,f_message_detail_actionComponent,p_view_history_layoutComponent,f_process_log_uiComponent,p_view_response_layoutComponent,f_single_back_uiComponent,f_response_uiComponent,p_view_request_layoutComponent,f_request_uiComponent,p_view_message_ui_layoutComponent,f_message_back_uiComponent,f_message_detail_uiComponent,p_view_req_and_res_profileComponent,p_initate_layoutComponent,f_npss_op_reversal_uiComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_op_rct_reversalModule { }

// End of class 