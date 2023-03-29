/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28958 
Modified By     : Admin 
Modified Date   : 2023-Mar-29 13:6 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_r_message_detail
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {ComponentModule} from '../../../widgets/component/component.module';
import {ControlModule} from '../../../widgets/control/control.module';
import { SharedModule } from '../../../shared/shared.module'

import {npss_cs_liquidity_position_responseModule} from '../../../custom_widget/npss_cs_liquidity_position_response/npss_cs_liquidity_position_response.module'
import {torus_cs_show_hideModule} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.module'
import {npss_cs_rmessage_detailsModule} from '../../../custom_widget/npss_cs_rmessage_details/npss_cs_rmessage_details.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_r_message_detailComponent } from './s_r_message_detail.component';
import { s_r_message_detailRoutingModule } from './s_r_message_detail.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_npss_r_msg_detail_uiComponent } from './f_npss_r_msg_detail_ui/f_npss_r_msg_detail_ui.component'
import { f_api_input_ui_actionsComponent } from './f_api_input_ui_actions/f_api_input_ui_actions.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_r_msg_detail_srchComponent } from './f_npss_r_msg_detail_srch/f_npss_r_msg_detail_srch.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_r_message_detailRoutingModule,
    npss_cs_liquidity_position_responseModule,torus_cs_show_hideModule,npss_cs_rmessage_detailsModule
  ],
  declarations: [s_r_message_detailComponent,p_main_layoutComponent,f_npss_r_msg_detail_uiComponent,f_api_input_ui_actionsComponent,p_search_layoutComponent,f_npss_r_msg_detail_srchComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_r_message_detailModule { }

// End of class 
