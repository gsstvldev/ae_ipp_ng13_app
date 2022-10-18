/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26518 
Modified By     : Admin 
Modified Date   : 2022-Oct-18 5:43 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_reversal_process
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

import { s_reversal_processComponent } from './s_reversal_process.component';
import { s_reversal_processRoutingModule } from './s_reversal_process.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_hst_dashboard_srchComponent } from './f_npss_hst_dashboard_srch/f_npss_hst_dashboard_srch.component'
import { p_vertical_layoutComponent } from './p_vertical_layout/p_vertical_layout.component'
import { f_back_uiComponent } from './f_back_ui/f_back_ui.component'
import { p_refund_layoutComponent } from './p_refund_layout/p_refund_layout.component'
import { f_refund_uiComponent } from './f_refund_ui/f_refund_ui.component'
import { f_refund_editable_uiComponent } from './f_refund_editable_ui/f_refund_editable_ui.component'
import { f_submit_uiComponent } from './f_submit_ui/f_submit_ui.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_reversal_processRoutingModule,
    
  ],
  declarations: [s_reversal_processComponent,p_main_layoutComponent,f_navigation_uiComponent,p_search_layoutComponent,f_npss_hst_dashboard_srchComponent,p_vertical_layoutComponent,f_back_uiComponent,p_refund_layoutComponent,f_refund_uiComponent,f_refund_editable_uiComponent,f_submit_uiComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_reversal_processModule { }

// End of class 
