/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26346 
Modified By     : Admin 
Modified Date   : 2022-Oct-10 11:0 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_enrolment
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

import { s_merchant_enrolmentComponent } from './s_merchant_enrolment.component';
import { s_merchant_enrolmentRoutingModule } from './s_merchant_enrolment.routing.module';
    


import { p_list_layoutComponent } from './p_list_layout/p_list_layout.component'
import { f_navigationComponent } from './f_navigation/f_navigation.component'
import { p_data_entry_layoutComponent } from './p_data_entry_layout/p_data_entry_layout.component'
import { f_npss_merc_proxy_address_uiComponent } from './f_npss_merc_proxy_address_ui/f_npss_merc_proxy_address_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_address_srch_uiComponent } from './f_npss_address_srch_ui/f_npss_address_srch_ui.component'
import { p_bank_layoutComponent } from './p_bank_layout/p_bank_layout.component'
import { f_npss_merc_proxy_banksComponent } from './f_npss_merc_proxy_banks/f_npss_merc_proxy_banks.component'
import { p_shop_layoutComponent } from './p_shop_layout/p_shop_layout.component'
import { f_npss_merc_proxy_shop_uiComponent } from './f_npss_merc_proxy_shop_ui/f_npss_merc_proxy_shop_ui.component'
import { p_phone_no_layoutComponent } from './p_phone_no_layout/p_phone_no_layout.component'
import { f_npss_phone_no_uiComponent } from './f_npss_phone_no_ui/f_npss_phone_no_ui.component'
import { p_personal_date_layoutComponent } from './p_personal_date_layout/p_personal_date_layout.component'
import { f_npss_merchant_name_uiComponent } from './f_npss_merchant_name_ui/f_npss_merchant_name_ui.component'
import { p_add_cash_layoutComponent } from './p_add_cash_layout/p_add_cash_layout.component'
import { f_npss_cash_desk_uiComponent } from './f_npss_cash_desk_ui/f_npss_cash_desk_ui.component'
import { p_add_cash_list_layoutComponent } from './p_add_cash_list_layout/p_add_cash_list_layout.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_merchant_enrolmentRoutingModule,
    
  ],
  declarations: [s_merchant_enrolmentComponent,p_list_layoutComponent,f_navigationComponent,p_data_entry_layoutComponent,f_npss_merc_proxy_address_uiComponent,p_search_layoutComponent,f_npss_address_srch_uiComponent,p_bank_layoutComponent,f_npss_merc_proxy_banksComponent,p_shop_layoutComponent,f_npss_merc_proxy_shop_uiComponent,p_phone_no_layoutComponent,f_npss_phone_no_uiComponent,p_personal_date_layoutComponent,f_npss_merchant_name_uiComponent,p_add_cash_layoutComponent,f_npss_cash_desk_uiComponent,p_add_cash_list_layoutComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_merchant_enrolmentModule { }

// End of class 
