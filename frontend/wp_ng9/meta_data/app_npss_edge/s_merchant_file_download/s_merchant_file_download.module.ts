/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26371 
Modified By     : Admin 
Modified Date   : 2022-Oct-11 6:17 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_file_download
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

import { s_merchant_file_downloadComponent } from './s_merchant_file_download.component';
import { s_merchant_file_downloadRoutingModule } from './s_merchant_file_download.routing.module';
    


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
    
    s_merchant_file_downloadRoutingModule,
    torus_cs_show_hideModule
  ],
  declarations: [s_merchant_file_downloadComponent,p_exchange_queueComponent,f_navigationComponent,p_exchange_layoutsComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_merchant_file_downloadModule { }

// End of class 
