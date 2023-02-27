/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28355 
Modified By     : Admin 
Modified Date   : 2023-Feb-27 7:5 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_liquidity_cycle
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
import {npss_cs_liquidity_cycleModule} from '../../../custom_widget/npss_cs_liquidity_cycle/npss_cs_liquidity_cycle.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_liquidity_cycleComponent } from './s_liquidity_cycle.component';
import { s_liquidity_cycleRoutingModule } from './s_liquidity_cycle.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_npss_liq_cycle_srchComponent } from './f_npss_liq_cycle_srch/f_npss_liq_cycle_srch.component'
import { f_npss_liq_cycle_uiComponent } from './f_npss_liq_cycle_ui/f_npss_liq_cycle_ui.component'
import { f_api_input_ui_actionsComponent } from './f_api_input_ui_actions/f_api_input_ui_actions.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_liquidity_cycleRoutingModule,
    torus_cs_show_hideModule,npss_cs_liquidity_cycleModule
  ],
  declarations: [s_liquidity_cycleComponent,p_main_layoutComponent,f_npss_liq_cycle_srchComponent,f_npss_liq_cycle_uiComponent,f_api_input_ui_actionsComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_liquidity_cycleModule { }

// End of class 
