/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28344 
Modified By     : Admin 
Modified Date   : 2023-Feb-25 15:30 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_volume_values
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
import {npss_cs_volume_valuesModule} from '../../../custom_widget/npss_cs_volume_values/npss_cs_volume_values.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_volume_valuesComponent } from './s_volume_values.component';
import { s_volume_valuesRoutingModule } from './s_volume_values.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_npss_volume_values_srchComponent } from './f_npss_volume_values_srch/f_npss_volume_values_srch.component'
import { f_npss_volume_values_uiComponent } from './f_npss_volume_values_ui/f_npss_volume_values_ui.component'
import { f_api_input_ui_actionsComponent } from './f_api_input_ui_actions/f_api_input_ui_actions.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_volume_valuesRoutingModule,
    torus_cs_show_hideModule,npss_cs_volume_valuesModule
  ],
  declarations: [s_volume_valuesComponent,p_main_layoutComponent,f_npss_volume_values_srchComponent,f_npss_volume_values_uiComponent,f_api_input_ui_actionsComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_volume_valuesModule { }

// End of class 
