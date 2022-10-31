/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26739 
Modified By     : Admin 
Modified Date   : 2022-Oct-31 10:26 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_customer_request_to_pay
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

import {TabViewModule} from 'primeng/tabview';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_customer_request_to_payComponent } from './s_customer_request_to_pay.component';
import { s_customer_request_to_payRoutingModule } from './s_customer_request_to_pay.routing.module';
    


import { p_qr_layoutComponent } from './p_qr_layout/p_qr_layout.component'
import { f_dynamic_searchComponent } from './f_dynamic_search/f_dynamic_search.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    TabViewModule,
    s_customer_request_to_payRoutingModule,
    torus_cs_show_hideModule
  ],
  declarations: [s_customer_request_to_payComponent,p_qr_layoutComponent,f_dynamic_searchComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_customer_request_to_payModule { }

// End of class 
