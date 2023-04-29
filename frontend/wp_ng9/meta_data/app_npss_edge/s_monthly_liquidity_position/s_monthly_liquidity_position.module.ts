/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 29372 
Modified By     : Admin 
Modified Date   : 2023-Apr-29 9:19 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_monthly_liquidity_position
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
import {npss_cs_monthly_liquidity_positionModule} from '../../../custom_widget/npss_cs_monthly_liquidity_position/npss_cs_monthly_liquidity_position.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_monthly_liquidity_positionComponent } from './s_monthly_liquidity_position.component';
import { s_monthly_liquidity_positionRoutingModule } from './s_monthly_liquidity_position.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_npss_month_liq_position_uiComponent } from './f_npss_month_liq_position_ui/f_npss_month_liq_position_ui.component'
import { f_api_input_ui_actionsComponent } from './f_api_input_ui_actions/f_api_input_ui_actions.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_month_liq_position_srchComponent } from './f_npss_month_liq_position_srch/f_npss_month_liq_position_srch.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_monthly_liquidity_positionRoutingModule,
    npss_cs_liquidity_position_responseModule,torus_cs_show_hideModule,npss_cs_monthly_liquidity_positionModule
  ],
  declarations: [s_monthly_liquidity_positionComponent,p_main_layoutComponent,f_npss_month_liq_position_uiComponent,f_api_input_ui_actionsComponent,p_search_layoutComponent,f_npss_month_liq_position_srchComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_monthly_liquidity_positionModule { }

// End of class 
