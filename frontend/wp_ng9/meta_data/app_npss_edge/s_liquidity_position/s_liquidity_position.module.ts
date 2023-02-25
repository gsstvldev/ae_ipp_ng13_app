/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28334 
Modified By     : Admin 
Modified Date   : 2023-Feb-25 7:1 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_liquidity_position
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

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_liquidity_positionComponent } from './s_liquidity_position.component';
import { s_liquidity_positionRoutingModule } from './s_liquidity_position.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_npss_liq_pos__srchComponent } from './f_npss_liq_pos__srch/f_npss_liq_pos__srch.component'
import { f_npss_liq_pos_uiComponent } from './f_npss_liq_pos_ui/f_npss_liq_pos_ui.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_liquidity_positionRoutingModule,
    torus_cs_show_hideModule
  ],
  declarations: [s_liquidity_positionComponent,p_main_layoutComponent,f_npss_liq_pos__srchComponent,f_npss_liq_pos_uiComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_liquidity_positionModule { }

// End of class 
