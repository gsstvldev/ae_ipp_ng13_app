/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26448 
Modified By     : Admin 
Modified Date   : 2022-Oct-14 14:19 PM 
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

import {npssp_cs_verify_recepient_ibanModule} from '../../../custom_widget/npssp_cs_verify_recepient_iban/npssp_cs_verify_recepient_iban.module'
import {torus_cs_show_hideModule} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.module'
import {npssp_c_clear_custom_widgetModule} from '../../../custom_widget/npssp_c_clear_custom_widget/npssp_c_clear_custom_widget.module'
import {npssp_cs_acceptModule} from '../../../custom_widget/npssp_cs_accept/npssp_cs_accept.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {TabViewModule} from 'primeng/tabview';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_credit_transfer_inwardComponent } from './s_credit_transfer_inward.component';
import { s_credit_transfer_inwardRoutingModule } from './s_credit_transfer_inward.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { t_payment_tabviewComponent } from './t_payment_tabview/t_payment_tabview.component'
import { p_history_layoutComponent } from './p_history_layout/p_history_layout.component'
import { f_ip_payment_form_actionComponent } from './f_ip_payment_form_action/f_ip_payment_form_action.component'
import { f_npss_transaction_srchComponent } from './f_npss_transaction_srch/f_npss_transaction_srch.component'
import { f_dynamic_searchComponent } from './f_dynamic_search/f_dynamic_search.component'
import { p_vertical_details_layoutComponent } from './p_vertical_details_layout/p_vertical_details_layout.component'
import { p_pacs008_layoutComponent } from './p_pacs008_layout/p_pacs008_layout.component'
import { f_npss_ip_pacs008Component } from './f_npss_ip_pacs008/f_npss_ip_pacs008.component'
import { p_pacs002_layout_Component } from './p_pacs002_layout_/p_pacs002_layout_.component'
import { f_npss_ip_pacs002Component } from './f_npss_ip_pacs002/f_npss_ip_pacs002.component'



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
    npssp_cs_verify_recepient_ibanModule,torus_cs_show_hideModule,npssp_c_clear_custom_widgetModule,npssp_cs_acceptModule
  ],
  declarations: [s_credit_transfer_inwardComponent,p_main_layoutComponent,t_payment_tabviewComponent,p_history_layoutComponent,f_ip_payment_form_actionComponent,f_npss_transaction_srchComponent,f_dynamic_searchComponent,p_vertical_details_layoutComponent,p_pacs008_layoutComponent,f_npss_ip_pacs008Component,p_pacs002_layout_Component,f_npss_ip_pacs002Component,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_credit_transfer_inwardModule { }

// End of class 
