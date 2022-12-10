/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27297 
Modified By     : Admin 
Modified Date   : 2022-Dec-10 11:51 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_process_logs
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {ComponentModule} from '../../../widgets/component/component.module';
import {ControlModule} from '../../../widgets/control/control.module';
import { SharedModule } from '../../../shared/shared.module'

import {npss_cs_show_table_viewModule} from '../../../custom_widget/npss_cs_show_table_view/npss_cs_show_table_view.module'
import {torus_cs_show_hideModule} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_view_process_logsComponent } from './s_view_process_logs.component';
import { s_view_process_logsRoutingModule } from './s_view_process_logs.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'
import { p_view_request_layoutComponent } from './p_view_request_layout/p_view_request_layout.component'
import { f_npss_api_request_uiComponent } from './f_npss_api_request_ui/f_npss_api_request_ui.component'
import { f_single_back_uiComponent } from './f_single_back_ui/f_single_back_ui.component'
import { p_view_response_layoutComponent } from './p_view_response_layout/p_view_response_layout.component'
import { f_npss_api_response_uiComponent } from './f_npss_api_response_ui/f_npss_api_response_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_api_plog_srchComponent } from './f_npss_api_plog_srch/f_npss_api_plog_srch.component'
import { p_view_main_req_and_res_layoutComponent } from './p_view_main_req_and_res_layout/p_view_main_req_and_res_layout.component'
import { p_show_table_view_profileComponent } from './p_show_table_view_profile/p_show_table_view_profile.component'
import { f_payment_srchComponent } from './f_payment_srch/f_payment_srch.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_view_process_logsRoutingModule,
    npss_cs_show_table_viewModule,torus_cs_show_hideModule
  ],
  declarations: [s_view_process_logsComponent,p_main_layoutComponent,f_navigation_uiComponent,p_view_request_layoutComponent,f_npss_api_request_uiComponent,f_single_back_uiComponent,p_view_response_layoutComponent,f_npss_api_response_uiComponent,p_search_layoutComponent,f_npss_api_plog_srchComponent,p_view_main_req_and_res_layoutComponent,p_show_table_view_profileComponent,f_payment_srchComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_view_process_logsModule { }

// End of class 
