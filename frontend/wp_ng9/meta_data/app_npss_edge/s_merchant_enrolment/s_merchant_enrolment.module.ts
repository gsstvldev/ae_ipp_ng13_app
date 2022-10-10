/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26345 
Modified By     : Admin 
Modified Date   : 2022-Oct-10 8:10 AM 
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
import { f_merchant_uiComponent } from './f_merchant_ui/f_merchant_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_searchComponent } from './f_search/f_search.component'
import { p_bank_layoutComponent } from './p_bank_layout/p_bank_layout.component'
import { f_bank_uiComponent } from './f_bank_ui/f_bank_ui.component'
import { p_shop_layoutComponent } from './p_shop_layout/p_shop_layout.component'
import { f_shop_uiComponent } from './f_shop_ui/f_shop_ui.component'
import { p_phone_no_layoutComponent } from './p_phone_no_layout/p_phone_no_layout.component'
import { f_phone_no_uiComponent } from './f_phone_no_ui/f_phone_no_ui.component'
import { p_personal_date_layoutComponent } from './p_personal_date_layout/p_personal_date_layout.component'
import { f_personal_data_uiComponent } from './f_personal_data_ui/f_personal_data_ui.component'
import { p_add_cash_layoutComponent } from './p_add_cash_layout/p_add_cash_layout.component'
import { f_add_desk_uiComponent } from './f_add_desk_ui/f_add_desk_ui.component'
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
  declarations: [s_merchant_enrolmentComponent,p_list_layoutComponent,f_navigationComponent,p_data_entry_layoutComponent,f_merchant_uiComponent,p_search_layoutComponent,f_searchComponent,p_bank_layoutComponent,f_bank_uiComponent,p_shop_layoutComponent,f_shop_uiComponent,p_phone_no_layoutComponent,f_phone_no_uiComponent,p_personal_date_layoutComponent,f_personal_data_uiComponent,p_add_cash_layoutComponent,f_add_desk_uiComponent,p_add_cash_list_layoutComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_merchant_enrolmentModule { }

// End of class 
