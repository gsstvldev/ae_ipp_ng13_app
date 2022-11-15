/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26890 
Modified By     : Admin 
Modified Date   : 2022-Nov-15 14:47 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_all_summary
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

import { s_view_all_summaryComponent } from './s_view_all_summary.component';
import { s_view_all_summaryRoutingModule } from './s_view_all_summary.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'
import { p_vertical_layoutComponent } from './p_vertical_layout/p_vertical_layout.component'
import { f_back_uiComponent } from './f_back_ui/f_back_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_investigation_srchComponent } from './f_npss_investigation_srch/f_npss_investigation_srch.component'
import { p_view_history_layoutComponent } from './p_view_history_layout/p_view_history_layout.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_view_all_summaryRoutingModule,
    torus_cs_show_hideModule
  ],
  declarations: [s_view_all_summaryComponent,p_main_layoutComponent,f_navigation_uiComponent,p_vertical_layoutComponent,f_back_uiComponent,p_search_layoutComponent,f_npss_investigation_srchComponent,p_view_history_layoutComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_view_all_summaryModule { }

// End of class 