/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35107 
Modified By     : Admin 
Modified Date   : 2024-Apr-05 9:39 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_merchant_details
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {ComponentModule} from '../../../widgets/component/component.module';
import {ControlModule} from '../../../widgets/control/control.module';
import { SharedModule } from '../../../shared/shared.module'

import {npss_c_qr_code_generatorModule} from '../../../custom_widget/npss_c_qr_code_generator/npss_c_qr_code_generator.module'
import {npss_cs_update_mch_tagModule} from '../../../custom_widget/npss_cs_update_mch_tag/npss_cs_update_mch_tag.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_view_merchant_detailsComponent } from './s_view_merchant_details.component';
import { s_view_merchant_detailsRoutingModule } from './s_view_merchant_details.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigationComponent } from './f_navigation/f_navigation.component'
import { f_back_uiComponent } from './f_back_ui/f_back_ui.component'
import { p_view_account_layoutComponent } from './p_view_account_layout/p_view_account_layout.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_sm_merchant_details_srchComponent } from './f_npss_sm_merchant_details_srch/f_npss_sm_merchant_details_srch.component'
import { p_view_shop_layoutComponent } from './p_view_shop_layout/p_view_shop_layout.component'
import { p_cash_desk_layoutComponent } from './p_cash_desk_layout/p_cash_desk_layout.component'
import { p_qr_layoutComponent } from './p_qr_layout/p_qr_layout.component'
import { f_npss_merchant_qr_uiComponent } from './f_npss_merchant_qr_ui/f_npss_merchant_qr_ui.component'
import { f_npss_merchant_payment_type_qr_uiComponent } from './f_npss_merchant_payment_type_qr_ui/f_npss_merchant_payment_type_qr_ui.component'
import { f_qr_uiComponent } from './f_qr_ui/f_qr_ui.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_view_merchant_detailsRoutingModule,
    npss_c_qr_code_generatorModule,npss_cs_update_mch_tagModule
  ],
  declarations: [s_view_merchant_detailsComponent,p_main_layoutComponent,f_navigationComponent,f_back_uiComponent,p_view_account_layoutComponent,p_search_layoutComponent,f_npss_sm_merchant_details_srchComponent,p_view_shop_layoutComponent,p_cash_desk_layoutComponent,p_qr_layoutComponent,f_npss_merchant_qr_uiComponent,f_npss_merchant_payment_type_qr_uiComponent,f_qr_uiComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_view_merchant_detailsModule { }

// End of class 
