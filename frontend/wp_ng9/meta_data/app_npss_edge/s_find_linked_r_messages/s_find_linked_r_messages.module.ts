/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34763 
Modified By     : Admin 
Modified Date   : 2024-Mar-14 9:56 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_find_linked_r_messages
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {ComponentModule} from '../../../widgets/component/component.module';
import {ControlModule} from '../../../widgets/control/control.module';
import { SharedModule } from '../../../shared/shared.module'

import {npss_cs_daily_liquidity_position_responseModule} from '../../../custom_widget/npss_cs_daily_liquidity_position_response/npss_cs_daily_liquidity_position_response.module'
import {torus_cs_show_hideModule} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.module'
import {npss_cs_find_linked_r_messagesModule} from '../../../custom_widget/npss_cs_find_linked_r_messages/npss_cs_find_linked_r_messages.module'
import {npss_cs_export_pdfModule} from '../../../custom_widget/npss_cs_export_pdf/npss_cs_export_pdf.module'
import {npss_cs_export_excel_fileModule} from '../../../custom_widget/npss_cs_export_excel_file/npss_cs_export_excel_file.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_find_linked_r_messagesComponent } from './s_find_linked_r_messages.component';
import { s_find_linked_r_messagesRoutingModule } from './s_find_linked_r_messages.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_npss_find_linked_r_message_uiComponent } from './f_npss_find_linked_r_message_ui/f_npss_find_linked_r_message_ui.component'
import { f_api_input_ui_actionsComponent } from './f_api_input_ui_actions/f_api_input_ui_actions.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_find_linked_r_message_srchComponent } from './f_npss_find_linked_r_message_srch/f_npss_find_linked_r_message_srch.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_find_linked_r_messagesRoutingModule,
    npss_cs_daily_liquidity_position_responseModule,torus_cs_show_hideModule,npss_cs_find_linked_r_messagesModule,npss_cs_export_pdfModule,npss_cs_export_excel_fileModule
  ],
  declarations: [s_find_linked_r_messagesComponent,p_main_layoutComponent,f_npss_find_linked_r_message_uiComponent,f_api_input_ui_actionsComponent,f_navigation_uiComponent,p_search_layoutComponent,f_npss_find_linked_r_message_srchComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_find_linked_r_messagesModule { }

// End of class 
