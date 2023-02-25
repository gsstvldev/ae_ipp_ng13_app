/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28343 
Modified By     : Admin 
Modified Date   : 2023-Feb-25 14:34 PM 
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

import {torus_cs_show_hideModule} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.module'
import {npss_cs_find_linked_r_messagesModule} from '../../../custom_widget/npss_cs_find_linked_r_messages/npss_cs_find_linked_r_messages.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_find_linked_r_messagesComponent } from './s_find_linked_r_messages.component';
import { s_find_linked_r_messagesRoutingModule } from './s_find_linked_r_messages.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_npss_find_linked_r_message_srchComponent } from './f_npss_find_linked_r_message_srch/f_npss_find_linked_r_message_srch.component'
import { f_npss_find_linked_r_message_uiComponent } from './f_npss_find_linked_r_message_ui/f_npss_find_linked_r_message_ui.component'
import { f_api_input_ui_actionsComponent } from './f_api_input_ui_actions/f_api_input_ui_actions.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_find_linked_r_messagesRoutingModule,
    torus_cs_show_hideModule,npss_cs_find_linked_r_messagesModule
  ],
  declarations: [s_find_linked_r_messagesComponent,p_main_layoutComponent,f_npss_find_linked_r_message_srchComponent,f_npss_find_linked_r_message_uiComponent,f_api_input_ui_actionsComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_find_linked_r_messagesModule { }

// End of class 