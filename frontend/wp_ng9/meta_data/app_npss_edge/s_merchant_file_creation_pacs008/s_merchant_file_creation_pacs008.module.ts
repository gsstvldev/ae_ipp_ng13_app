/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26380 
Modified By     : Admin 
Modified Date   : 2022-Oct-11 9:58 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_file_creation_pacs008
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

import { s_merchant_file_creation_pacs008Component } from './s_merchant_file_creation_pacs008.component';
import { s_merchant_file_creation_pacs008RoutingModule } from './s_merchant_file_creation_pacs008.routing.module';
    


import { p_npss_layoutComponent } from './p_npss_layout/p_npss_layout.component'
import { f_navigationComponent } from './f_navigation/f_navigation.component'
import { f_queue_searchComponent } from './f_queue_search/f_queue_search.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_payment_merc_file_creation_srchComponent } from './f_payment_merc_file_creation_srch/f_payment_merc_file_creation_srch.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_merchant_file_creation_pacs008RoutingModule,
    
  ],
  declarations: [s_merchant_file_creation_pacs008Component,p_npss_layoutComponent,f_navigationComponent,f_queue_searchComponent,p_search_layoutComponent,f_payment_merc_file_creation_srchComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_merchant_file_creation_pacs008Module { }

// End of class 
