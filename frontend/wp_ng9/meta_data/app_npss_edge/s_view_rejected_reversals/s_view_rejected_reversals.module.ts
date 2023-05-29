/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 29743 
Modified By     : Admin 
Modified Date   : 2023-May-29 6:8 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_rejected_reversals
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

import { s_view_rejected_reversalsComponent } from './s_view_rejected_reversals.component';
import { s_view_rejected_reversalsRoutingModule } from './s_view_rejected_reversals.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'
import { p_history_layoutComponent } from './p_history_layout/p_history_layout.component'
import { f_process_log_actionComponent } from './f_process_log_action/f_process_log_action.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_api_process_log__srchComponent } from './f_npss_api_process_log__srch/f_npss_api_process_log__srch.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_view_rejected_reversalsRoutingModule,
    torus_cs_show_hideModule
  ],
  declarations: [s_view_rejected_reversalsComponent,p_main_layoutComponent,f_navigation_uiComponent,p_history_layoutComponent,f_process_log_actionComponent,p_search_layoutComponent,f_npss_api_process_log__srchComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_view_rejected_reversalsModule { }

// End of class 
