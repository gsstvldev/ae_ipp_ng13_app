/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27232 
Modified By     : Admin 
Modified Date   : 2022-Dec-08 11:25 AM 
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

import {torus_cs_show_hideModule} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_rct_simulatorComponent } from './s_rct_simulator.component';
import { s_rct_simulatorRoutingModule } from './s_rct_simulator.routing.module';
    


import { p_mainlayoutComponent } from './p_mainlayout/p_mainlayout.component'
import { f_data_entryComponent } from './f_data_entry/f_data_entry.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'
import { p_list_layoutComponent } from './p_list_layout/p_list_layout.component'
import { f_back_uiComponent } from './f_back_ui/f_back_ui.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_rct_simulatorRoutingModule,
    torus_cs_show_hideModule
  ],
  declarations: [s_rct_simulatorComponent,p_mainlayoutComponent,f_data_entryComponent,f_navigation_uiComponent,p_list_layoutComponent,f_back_uiComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_rct_simulatorModule { }

// End of class 
