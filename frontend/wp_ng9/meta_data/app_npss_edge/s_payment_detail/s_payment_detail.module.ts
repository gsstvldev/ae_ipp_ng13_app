/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28341 
Modified By     : Admin 
Modified Date   : 2023-Feb-25 14:37 PM 
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

import {torus_cs_show_hideModule} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.module'
import {npss_cs_payment_detaiModule} from '../../../custom_widget/npss_cs_payment_detai/npss_cs_payment_detai.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_payment_detailComponent } from './s_payment_detail.component';
import { s_payment_detailRoutingModule } from './s_payment_detail.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_npss_payment_details_srchComponent } from './f_npss_payment_details_srch/f_npss_payment_details_srch.component'
import { f_npss_payment_detail_uiComponent } from './f_npss_payment_detail_ui/f_npss_payment_detail_ui.component'
import { f_api_input_ui_actionsComponent } from './f_api_input_ui_actions/f_api_input_ui_actions.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_payment_detailRoutingModule,
    torus_cs_show_hideModule,npss_cs_payment_detaiModule
  ],
  declarations: [s_payment_detailComponent,p_main_layoutComponent,f_npss_payment_details_srchComponent,f_npss_payment_detail_uiComponent,f_api_input_ui_actionsComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_payment_detailModule { }

// End of class 