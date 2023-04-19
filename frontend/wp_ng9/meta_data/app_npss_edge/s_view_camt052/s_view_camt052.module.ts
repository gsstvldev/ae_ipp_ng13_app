/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 29130 
Modified By     : Admin 
Modified Date   : 2023-Apr-19 10:25 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_camt052
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {ComponentModule} from '../../../widgets/component/component.module';
import {ControlModule} from '../../../widgets/control/control.module';
import { SharedModule } from '../../../shared/shared.module'


import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_view_camt052Component } from './s_view_camt052.component';
import { s_view_camt052RoutingModule } from './s_view_camt052.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'
import { p_message_data_layoutComponent } from './p_message_data_layout/p_message_data_layout.component'
import { f_back_uiComponent } from './f_back_ui/f_back_ui.component'
import { f_npss_camt_052_message_data_uiComponent } from './f_npss_camt_052_message_data_ui/f_npss_camt_052_message_data_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_camt_052_srchComponent } from './f_npss_camt_052_srch/f_npss_camt_052_srch.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_view_camt052RoutingModule,
    
  ],
  declarations: [s_view_camt052Component,p_main_layoutComponent,f_navigation_uiComponent,p_message_data_layoutComponent,f_back_uiComponent,f_npss_camt_052_message_data_uiComponent,p_search_layoutComponent,f_npss_camt_052_srchComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_view_camt052Module { }

// End of class 
