/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 29518 
Modified By     : Admin 
Modified Date   : 2023-May-11 11:41 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_manual_unfreeze_dashboard
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
import {npss_cs_manual_unfreeze_send_to_makerModule} from '../../../custom_widget/npss_cs_manual_unfreeze_send_to_maker/npss_cs_manual_unfreeze_send_to_maker.module'
import {npss_cs_manual_unfreeze_send_to_checkerModule} from '../../../custom_widget/npss_cs_manual_unfreeze_send_to_checker/npss_cs_manual_unfreeze_send_to_checker.module'
import {npss_cs_call_p2b_unfreeze_apiModule} from '../../../custom_widget/npss_cs_call_p2b_unfreeze_api/npss_cs_call_p2b_unfreeze_api.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_manual_unfreeze_dashboardComponent } from './s_manual_unfreeze_dashboard.component';
import { s_manual_unfreeze_dashboardRoutingModule } from './s_manual_unfreeze_dashboard.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigationComponent } from './f_navigation/f_navigation.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_manual_unfreeze_dashboard_srchComponent } from './f_npss_manual_unfreeze_dashboard_srch/f_npss_manual_unfreeze_dashboard_srch.component'
import { p_view_history_layoutComponent } from './p_view_history_layout/p_view_history_layout.component'
import { f_process_log_uiComponent } from './f_process_log_ui/f_process_log_ui.component'
import { p_view_api_req_and_res_layoutComponent } from './p_view_api_req_and_res_layout/p_view_api_req_and_res_layout.component'
import { f_view_req_back_uiComponent } from './f_view_req_back_ui/f_view_req_back_ui.component'
import { f_npss_target_request_uiComponent } from './f_npss_target_request_ui/f_npss_target_request_ui.component'
import { f_npss_target_response_uiComponent } from './f_npss_target_response_ui/f_npss_target_response_ui.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_manual_unfreeze_dashboardRoutingModule,
    torus_cs_show_hideModule,npss_cs_manual_unfreeze_send_to_makerModule,npss_cs_manual_unfreeze_send_to_checkerModule,npss_cs_call_p2b_unfreeze_apiModule
  ],
  declarations: [s_manual_unfreeze_dashboardComponent,p_main_layoutComponent,f_navigationComponent,p_search_layoutComponent,f_npss_manual_unfreeze_dashboard_srchComponent,p_view_history_layoutComponent,f_process_log_uiComponent,p_view_api_req_and_res_layoutComponent,f_view_req_back_uiComponent,f_npss_target_request_uiComponent,f_npss_target_response_uiComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_manual_unfreeze_dashboardModule { }

// End of class 
