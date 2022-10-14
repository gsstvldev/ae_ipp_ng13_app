/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26448 
Modified By     : Admin 
Modified Date   : 2022-Oct-14 14:20 PM 
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

import {npssp_cs_verify_ibanModule} from '../../../custom_widget/npssp_cs_verify_iban/npssp_cs_verify_iban.module'
import {npssp_c_clear_custom_widgetModule} from '../../../custom_widget/npssp_c_clear_custom_widget/npssp_c_clear_custom_widget.module'
import {torus_cs_show_hideModule} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.module'
import {npssp_cs_tran_insertModule} from '../../../custom_widget/npssp_cs_tran_insert/npssp_cs_tran_insert.module'
import {npssp_cs_initiate_crdt_transferModule} from '../../../custom_widget/npssp_cs_initiate_crdt_transfer/npssp_cs_initiate_crdt_transfer.module'
import {npssp_cs_show_account_balanceModule} from '../../../custom_widget/npssp_cs_show_account_balance/npssp_cs_show_account_balance.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {TabViewModule} from 'primeng/tabview';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_customer_request_to_payComponent } from './s_customer_request_to_pay.component';
import { s_customer_request_to_payRoutingModule } from './s_customer_request_to_pay.routing.module';
    


import { p_pacs008_layoutComponent } from './p_pacs008_layout/p_pacs008_layout.component'
import { f_pacs008_uiComponent } from './f_pacs008_ui/f_pacs008_ui.component'
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
    npssp_cs_verify_ibanModule,npssp_c_clear_custom_widgetModule,torus_cs_show_hideModule,npssp_cs_tran_insertModule,npssp_cs_initiate_crdt_transferModule,npssp_cs_show_account_balanceModule
  ],
  declarations: [s_customer_request_to_payComponent,p_pacs008_layoutComponent,f_pacs008_uiComponent,f_dynamic_searchComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_customer_request_to_payModule { }

// End of class 
