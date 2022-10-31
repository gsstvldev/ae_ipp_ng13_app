/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26711 
Modified By     : Admin 
Modified Date   : 2022-Oct-31 4:47 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_customer_verify
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

import { s_customer_verifyComponent } from './s_customer_verify.component';
import { s_customer_verifyRoutingModule } from './s_customer_verify.routing.module';
    


import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_dynamic_form_searchComponent } from './f_dynamic_form_search/f_dynamic_form_search.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_customer_verifyRoutingModule,
    torus_cs_show_hideModule
  ],
  declarations: [s_customer_verifyComponent,p_search_layoutComponent,f_dynamic_form_searchComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_customer_verifyModule { }

// End of class 
