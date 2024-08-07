/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35197 
Modified By     : Admin 
Modified Date   : 2024-Apr-23 12:19 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_bct_file_download
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {ComponentModule} from '../../../widgets/component/component.module';
import {ControlModule} from '../../../widgets/control/control.module';
import { SharedModule } from '../../../shared/shared.module'

import {npss_c_trigger_exchange_componentModule} from '../../../custom_widget/npss_c_trigger_exchange_component/npss_c_trigger_exchange_component.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_bct_file_downloadComponent } from './s_bct_file_download.component';
import { s_bct_file_downloadRoutingModule } from './s_bct_file_download.routing.module';
    


import { p_exchange_queueComponent } from './p_exchange_queue/p_exchange_queue.component'
import { f_navigationComponent } from './f_navigation/f_navigation.component'
import { p_exchange_layoutsComponent } from './p_exchange_layouts/p_exchange_layouts.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_bct_file_downloadRoutingModule,
    npss_c_trigger_exchange_componentModule
  ],
  declarations: [s_bct_file_downloadComponent,p_exchange_queueComponent,f_navigationComponent,p_exchange_layoutsComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_bct_file_downloadModule { }

// End of class 
