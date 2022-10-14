/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26446 
Modified By     : Admin 
Modified Date   : 2022-Oct-14 12:19 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_credit_transfer_inward
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

import { s_credit_transfer_inwardComponent } from './s_credit_transfer_inward.component';
import { s_credit_transfer_inwardRoutingModule } from './s_credit_transfer_inward.routing.module';
    


import { p_vertical_details_layoutComponent } from './p_vertical_details_layout/p_vertical_details_layout.component'
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
    s_credit_transfer_inwardRoutingModule,
    torus_cs_show_hideModule
  ],
  declarations: [s_credit_transfer_inwardComponent,p_vertical_details_layoutComponent,f_dynamic_searchComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_credit_transfer_inwardModule { }

// End of class 
