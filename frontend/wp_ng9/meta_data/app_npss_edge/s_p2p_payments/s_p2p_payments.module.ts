/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 33217 
Modified By     : Admin 
Modified Date   : 2023-Nov-15 11:18 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_p2p_payments
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {ComponentModule} from '../../../widgets/component/component.module';
import {ControlModule} from '../../../widgets/control/control.module';
import { SharedModule } from '../../../shared/shared.module'

import {npss_cs_retrieve_contactModule} from '../../../custom_widget/npss_cs_retrieve_contact/npss_cs_retrieve_contact.module'
import {npss_cs_verify_paymentModule} from '../../../custom_widget/npss_cs_verify_payment/npss_cs_verify_payment.module'
import {npss_cs_confirm_paymentModule} from '../../../custom_widget/npss_cs_confirm_payment/npss_cs_confirm_payment.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_p2p_paymentsComponent } from './s_p2p_payments.component';
import { s_p2p_paymentsRoutingModule } from './s_p2p_payments.routing.module';
    


import { p_payment_layoutComponent } from './p_payment_layout/p_payment_layout.component'
import { f_npss_p2p_retrive_contacctComponent } from './f_npss_p2p_retrive_contacct/f_npss_p2p_retrive_contacct.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_p2p_paymentsRoutingModule,
    npss_cs_retrieve_contactModule,npss_cs_verify_paymentModule,npss_cs_confirm_paymentModule
  ],
  declarations: [s_p2p_paymentsComponent,p_payment_layoutComponent,f_npss_p2p_retrive_contacctComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_p2p_paymentsModule { }

// End of class 
