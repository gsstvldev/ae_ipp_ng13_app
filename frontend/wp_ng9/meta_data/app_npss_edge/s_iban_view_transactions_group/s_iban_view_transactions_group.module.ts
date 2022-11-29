/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27137 
Modified By     : Admin 
Modified Date   : 2022-Nov-29 12:52 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_iban_view_transactions_group
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

import { s_iban_view_transactions_groupComponent } from './s_iban_view_transactions_group.component';
import { s_iban_view_transactions_groupRoutingModule } from './s_iban_view_transactions_group.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'
import { p_vertical_layoutComponent } from './p_vertical_layout/p_vertical_layout.component'
import { f_back_uiComponent } from './f_back_ui/f_back_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_rct_post_plog_srchComponent } from './f_npss_rct_post_plog_srch/f_npss_rct_post_plog_srch.component'
import { p_view_history_layoutComponent } from './p_view_history_layout/p_view_history_layout.component'
import { f_process_log_uiComponent } from './f_process_log_ui/f_process_log_ui.component'
import { p_view_request_layoutComponent } from './p_view_request_layout/p_view_request_layout.component'
import { f_npss_target_request_uiComponent } from './f_npss_target_request_ui/f_npss_target_request_ui.component'
import { f_single_back_uiComponent } from './f_single_back_ui/f_single_back_ui.component'
import { p_view_response_layoutComponent } from './p_view_response_layout/p_view_response_layout.component'
import { f_npss_target_response_uiComponent } from './f_npss_target_response_ui/f_npss_target_response_ui.component'
import { p_view_message_list_layoutComponent } from './p_view_message_list_layout/p_view_message_list_layout.component'
import { f_message_detail_actionComponent } from './f_message_detail_action/f_message_detail_action.component'
import { p_view_message_ui_layoutComponent } from './p_view_message_ui_layout/p_view_message_ui_layout.component'
import { f_npss_message_data_uiComponent } from './f_npss_message_data_ui/f_npss_message_data_ui.component'
import { f_message_back_uiComponent } from './f_message_back_ui/f_message_back_ui.component'
import { p_view_main_message_ui_layoutComponent } from './p_view_main_message_ui_layout/p_view_main_message_ui_layout.component'
import { f_npss_main_page_message_detail_uiComponent } from './f_npss_main_page_message_detail_ui/f_npss_main_page_message_detail_ui.component'
import { p_view_main_request_layoutComponent } from './p_view_main_request_layout/p_view_main_request_layout.component'
import { f_npss_target_main_page_request_uiComponent } from './f_npss_target_main_page_request_ui/f_npss_target_main_page_request_ui.component'
import { p_view_main_response_layoutComponent } from './p_view_main_response_layout/p_view_main_response_layout.component'
import { f_npss_target_main_page_response_uiComponent } from './f_npss_target_main_page_response_ui/f_npss_target_main_page_response_ui.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_iban_view_transactions_groupRoutingModule,
    torus_cs_change_routingkeyModule,torus_cs_show_hideModule
  ],
  declarations: [s_iban_view_transactions_groupComponent,p_main_layoutComponent,f_navigation_uiComponent,p_vertical_layoutComponent,f_back_uiComponent,p_search_layoutComponent,f_npss_rct_post_plog_srchComponent,p_view_history_layoutComponent,f_process_log_uiComponent,p_view_request_layoutComponent,f_npss_target_request_uiComponent,f_single_back_uiComponent,p_view_response_layoutComponent,f_npss_target_response_uiComponent,p_view_message_list_layoutComponent,f_message_detail_actionComponent,p_view_message_ui_layoutComponent,f_npss_message_data_uiComponent,f_message_back_uiComponent,p_view_main_message_ui_layoutComponent,f_npss_main_page_message_detail_uiComponent,p_view_main_request_layoutComponent,f_npss_target_main_page_request_uiComponent,p_view_main_response_layoutComponent,f_npss_target_main_page_response_uiComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_iban_view_transactions_groupModule { }

// End of class 