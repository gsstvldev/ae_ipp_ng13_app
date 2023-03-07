/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28512 
Modified By     : Admin 
Modified Date   : 2023-Mar-07 11:9 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_payment_detail
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
import {npss_cs_payment_detaiModule} from '../../../custom_widget/npss_cs_payment_detai/npss_cs_payment_detai.module'
import {npss_cs_liquidity_position_responseModule} from '../../../custom_widget/npss_cs_liquidity_position_response/npss_cs_liquidity_position_response.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_payment_detailComponent } from './s_payment_detail.component';
import { s_payment_detailRoutingModule } from './s_payment_detail.routing.module';
    





@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_payment_detailRoutingModule,
    npss_cs_daily_liquidity_position_responseModule,torus_cs_show_hideModule,npss_cs_payment_detaiModule,npss_cs_liquidity_position_responseModule
  ],
  declarations: [s_payment_detailComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_payment_detailModule { }

// End of class 
