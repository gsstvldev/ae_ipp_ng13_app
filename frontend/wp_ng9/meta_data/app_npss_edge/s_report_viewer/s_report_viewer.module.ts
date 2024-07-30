/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 36145 
Modified By     : Admin 
Modified Date   : 2024-Jul-30 6:18 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_report_viewer
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {ComponentModule} from '../../../widgets/component/component.module';
import {ControlModule} from '../../../widgets/control/control.module';
import { SharedModule } from '../../../shared/shared.module'

import {torus_cs_change_routingkeyModule} from '../../../custom_widget/torus_cs_change_routingkey/torus_cs_change_routingkey.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_report_viewerComponent } from './s_report_viewer.component';
import { s_report_viewerRoutingModule } from './s_report_viewer.routing.module';
    


import { p_report_viewer_layoutComponent } from './p_report_viewer_layout/p_report_viewer_layout.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_report_viewerRoutingModule,
    torus_cs_change_routingkeyModule
  ],
  declarations: [s_report_viewerComponent,p_report_viewer_layoutComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_report_viewerModule { }

// End of class 
