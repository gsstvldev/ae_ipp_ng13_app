/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26794 
Modified By     : Admin 
Modified Date   : 2022-Nov-03 7:25 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_customer_details
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

import { s_view_customer_detailsComponent } from './s_view_customer_details.component';
import { s_view_customer_detailsRoutingModule } from './s_view_customer_details.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigationComponent } from './f_navigation/f_navigation.component'
import { p_view_account_layoutComponent } from './p_view_account_layout/p_view_account_layout.component'
import { f_back_uiComponent } from './f_back_ui/f_back_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_sm_cust_details_srchComponent } from './f_npss_sm_cust_details_srch/f_npss_sm_cust_details_srch.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_view_customer_detailsRoutingModule,
    
  ],
  declarations: [s_view_customer_detailsComponent,p_main_layoutComponent,f_navigationComponent,p_view_account_layoutComponent,f_back_uiComponent,p_search_layoutComponent,f_npss_sm_cust_details_srchComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_view_customer_detailsModule { }

// End of class 
