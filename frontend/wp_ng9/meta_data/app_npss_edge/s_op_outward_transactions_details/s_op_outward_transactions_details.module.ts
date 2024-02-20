/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34448 
Modified By     : Admin 
Modified Date   : 2024-Feb-20 10:7 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_op_outward_transactions_details
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

import { s_op_outward_transactions_detailsComponent } from './s_op_outward_transactions_details.component';
import { s_op_outward_transactions_detailsRoutingModule } from './s_op_outward_transactions_details.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_outward_transaction_details_report_srchComponent } from './f_npss_outward_transaction_details_report_srch/f_npss_outward_transaction_details_report_srch.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_op_outward_transactions_detailsRoutingModule,
    
  ],
  declarations: [s_op_outward_transactions_detailsComponent,p_main_layoutComponent,f_navigation_uiComponent,p_search_layoutComponent,f_npss_outward_transaction_details_report_srchComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_op_outward_transactions_detailsModule { }

// End of class 
