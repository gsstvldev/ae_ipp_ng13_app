/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28743 
Modified By     : Admin 
Modified Date   : 2023-Mar-17 6:59 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_home_dashboard
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {ComponentModule} from '../../../widgets/component/component.module';
import {ControlModule} from '../../../widgets/control/control.module';
import { SharedModule } from '../../../shared/shared.module'


import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_home_dashboardComponent } from './s_home_dashboard.component';
import { s_home_dashboardRoutingModule } from './s_home_dashboard.routing.module';
    


import { p_default_profileComponent } from './p_default_profile/p_default_profile.component'
import { f_nav_uiComponent } from './f_nav_ui/f_nav_ui.component'
import { p_op_layoutComponent } from './p_op_layout/p_op_layout.component'
import { f_navigationComponent } from './f_navigation/f_navigation.component'
import { p_view_tran_detail_layoutComponent } from './p_view_tran_detail_layout/p_view_tran_detail_layout.component'
import { f_back_uiComponent } from './f_back_ui/f_back_ui.component'
import { p_view_history_layoutComponent } from './p_view_history_layout/p_view_history_layout.component'
import { f_process_log_uiComponent } from './f_process_log_ui/f_process_log_ui.component'
import { p_view_message_list_layoutComponent } from './p_view_message_list_layout/p_view_message_list_layout.component'
import { f_message_detail_actionComponent } from './f_message_detail_action/f_message_detail_action.component'
import { p_view_req_and_res_profileComponent } from './p_view_req_and_res_profile/p_view_req_and_res_profile.component'
import { f_single_back_uiComponent } from './f_single_back_ui/f_single_back_ui.component'
import { f_npss_target_request_uiComponent } from './f_npss_target_request_ui/f_npss_target_request_ui.component'
import { f_npss_target_response_uiComponent } from './f_npss_target_response_ui/f_npss_target_response_ui.component'
import { p_view_message_ui_layoutComponent } from './p_view_message_ui_layout/p_view_message_ui_layout.component'
import { f_message_back_uiComponent } from './f_message_back_ui/f_message_back_ui.component'
import { f_npss_message_data_uiComponent } from './f_npss_message_data_ui/f_npss_message_data_ui.component'
import { p_ip_queue_layoutComponent } from './p_ip_queue_layout/p_ip_queue_layout.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_home_dashboard_uiComponent } from './f_npss_home_dashboard_ui/f_npss_home_dashboard_ui.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_home_dashboardRoutingModule,
    
  ],
  declarations: [s_home_dashboardComponent,p_default_profileComponent,f_nav_uiComponent,p_op_layoutComponent,f_navigationComponent,p_view_tran_detail_layoutComponent,f_back_uiComponent,p_view_history_layoutComponent,f_process_log_uiComponent,p_view_message_list_layoutComponent,f_message_detail_actionComponent,p_view_req_and_res_profileComponent,f_single_back_uiComponent,f_npss_target_request_uiComponent,f_npss_target_response_uiComponent,p_view_message_ui_layoutComponent,f_message_back_uiComponent,f_npss_message_data_uiComponent,p_ip_queue_layoutComponent,p_search_layoutComponent,f_npss_home_dashboard_uiComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_home_dashboardModule { }

// End of class 
