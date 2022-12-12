/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27307 
Modified By     : Admin 
Modified Date   : 2022-Dec-12 6:48 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_simulator
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {ComponentModule} from '../../../widgets/component/component.module';
import {ControlModule} from '../../../widgets/control/control.module';
import { SharedModule } from '../../../shared/shared.module'

import {npss_cs_sim_pack_008Module} from '../../../custom_widget/npss_cs_sim_pack_008/npss_cs_sim_pack_008.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_rct_simulatorComponent } from './s_rct_simulator.component';
import { s_rct_simulatorRoutingModule } from './s_rct_simulator.routing.module';
    


import { p_list_layoutComponent } from './p_list_layout/p_list_layout.component'
import { f_submit_uiComponent } from './f_submit_ui/f_submit_ui.component'
import { f_back_uiComponent } from './f_back_ui/f_back_ui.component'
import { f_triger_uiComponent } from './f_triger_ui/f_triger_ui.component'
import { p_mainlayoutComponent } from './p_mainlayout/p_mainlayout.component'
import { f_npss_simulator_uiComponent } from './f_npss_simulator_ui/f_npss_simulator_ui.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_rct_simulatorRoutingModule,
    npss_cs_sim_pack_008Module
  ],
  declarations: [s_rct_simulatorComponent,p_list_layoutComponent,f_submit_uiComponent,f_back_uiComponent,f_triger_uiComponent,p_mainlayoutComponent,f_npss_simulator_uiComponent,f_navigation_uiComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_rct_simulatorModule { }

// End of class 
