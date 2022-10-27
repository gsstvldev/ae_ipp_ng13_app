/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26671 
Modified By     : Admin 
Modified Date   : 2022-Oct-27 11:8 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_reversal
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

import { s_rct_reversalComponent } from './s_rct_reversal.component';
import { s_rct_reversalRoutingModule } from './s_rct_reversal.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigationComponent } from './f_navigation/f_navigation.component'
import { p_accept_ui_layoutComponent } from './p_accept_ui_layout/p_accept_ui_layout.component'
import { f_npss_rct_reversal_uiComponent } from './f_npss_rct_reversal_ui/f_npss_rct_reversal_ui.component'
import { f_reversal_action_uiComponent } from './f_reversal_action_ui/f_reversal_action_ui.component'
import { p_accept_layoutComponent } from './p_accept_layout/p_accept_layout.component'
import { f_npss_pl_rtn_reason_uiComponent } from './f_npss_pl_rtn_reason_ui/f_npss_pl_rtn_reason_ui.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_rct_reversalRoutingModule,
    torus_cs_show_hideModule
  ],
  declarations: [s_rct_reversalComponent,p_main_layoutComponent,f_navigationComponent,p_accept_ui_layoutComponent,f_npss_rct_reversal_uiComponent,f_reversal_action_uiComponent,p_accept_layoutComponent,f_npss_pl_rtn_reason_uiComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_rct_reversalModule { }

// End of class 
