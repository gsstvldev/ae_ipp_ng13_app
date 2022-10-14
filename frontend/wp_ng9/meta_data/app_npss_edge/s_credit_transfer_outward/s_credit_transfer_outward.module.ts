/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26441 
Modified By     : Admin 
Modified Date   : 2022-Oct-14 11:18 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_credit_transfer_outward
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

import { s_credit_transfer_outwardComponent } from './s_credit_transfer_outward.component';
import { s_credit_transfer_outwardRoutingModule } from './s_credit_transfer_outward.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { t_payment_tabviewComponent } from './t_payment_tabview/t_payment_tabview.component'
import { p_form_layoutComponent } from './p_form_layout/p_form_layout.component'
import { f_op_cust_transaction_uiComponent } from './f_op_cust_transaction_ui/f_op_cust_transaction_ui.component'
import { f_payment_form_actionComponent } from './f_payment_form_action/f_payment_form_action.component'
import { p_history_layoutComponent } from './p_history_layout/p_history_layout.component'
import { f_npss_transaction_srchComponent } from './f_npss_transaction_srch/f_npss_transaction_srch.component'
import { f_dynamic_searchComponent } from './f_dynamic_search/f_dynamic_search.component'
import { p_vertical_details_layoutComponent } from './p_vertical_details_layout/p_vertical_details_layout.component'
import { p_pacs008_layoutComponent } from './p_pacs008_layout/p_pacs008_layout.component'
import { f_op_pacs008Component } from './f_op_pacs008/f_op_pacs008.component'
import { p_pacs002_layout_Component } from './p_pacs002_layout_/p_pacs002_layout_.component'
import { f_op_pacs002Component } from './f_op_pacs002/f_op_pacs002.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    TabViewModule,
    s_credit_transfer_outwardRoutingModule,
    torus_cs_show_hideModule
  ],
  declarations: [s_credit_transfer_outwardComponent,p_main_layoutComponent,t_payment_tabviewComponent,p_form_layoutComponent,f_op_cust_transaction_uiComponent,f_payment_form_actionComponent,p_history_layoutComponent,f_npss_transaction_srchComponent,f_dynamic_searchComponent,p_vertical_details_layoutComponent,p_pacs008_layoutComponent,f_op_pacs008Component,p_pacs002_layout_Component,f_op_pacs002Component,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_credit_transfer_outwardModule { }

// End of class 
