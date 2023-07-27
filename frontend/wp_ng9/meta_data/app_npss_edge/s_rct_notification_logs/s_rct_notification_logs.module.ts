/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 31266 
Modified By     : Admin 
Modified Date   : 2023-Jul-27 5:52 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_notification_logs
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {ComponentModule} from '../../../widgets/component/component.module';
import {ControlModule} from '../../../widgets/control/control.module';
import { SharedModule } from '../../../shared/shared.module'

import {npss_cs_communication_send_outward_ipp_payment_ntfModule} from '../../../custom_widget/npss_cs_communication_send_outward_ipp_payment_ntf/npss_cs_communication_send_outward_ipp_payment_ntf.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_rct_notification_logsComponent } from './s_rct_notification_logs.component';
import { s_rct_notification_logsRoutingModule } from './s_rct_notification_logs.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_notification_log_srchComponent } from './f_npss_notification_log_srch/f_npss_notification_log_srch.component'
import { p_view_message_layoutComponent } from './p_view_message_layout/p_view_message_layout.component'
import { f_back_uiComponent } from './f_back_ui/f_back_ui.component'
import { f_npss_kafka_message_uiComponent } from './f_npss_kafka_message_ui/f_npss_kafka_message_ui.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_rct_notification_logsRoutingModule,
    npss_cs_communication_send_outward_ipp_payment_ntfModule
  ],
  declarations: [s_rct_notification_logsComponent,p_main_layoutComponent,f_navigation_uiComponent,p_search_layoutComponent,f_npss_notification_log_srchComponent,p_view_message_layoutComponent,f_back_uiComponent,f_npss_kafka_message_uiComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_rct_notification_logsModule { }

// End of class 
