/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26345 
Modified By     : Admin 
Modified Date   : 2022-Oct-10 8:10 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_customer_enrolment
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

import { s_customer_enrolmentComponent } from './s_customer_enrolment.component';
import { s_customer_enrolmentRoutingModule } from './s_customer_enrolment.routing.module';
    


import { p_list_layoutComponent } from './p_list_layout/p_list_layout.component'
import { f_navigationComponent } from './f_navigation/f_navigation.component'
import { p_data_entry_layoutComponent } from './p_data_entry_layout/p_data_entry_layout.component'
import { f_data_entryComponent } from './f_data_entry/f_data_entry.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_searchComponent } from './f_search/f_search.component'
import { p_corp_account__layoutComponent } from './p_corp_account__layout/p_corp_account__layout.component'
import { f_bank_details_uiComponent } from './f_bank_details_ui/f_bank_details_ui.component'
import { p_corp_virtual_acct_layoutComponent } from './p_corp_virtual_acct_layout/p_corp_virtual_acct_layout.component'
import { f_corp_virtual_account_uiComponent } from './f_corp_virtual_account_ui/f_corp_virtual_account_ui.component'
import { p_customer_edit_layoutComponent } from './p_customer_edit_layout/p_customer_edit_layout.component'
import { f_customer_editComponent } from './f_customer_edit/f_customer_edit.component'
import { p_phone_no_edit_layoutComponent } from './p_phone_no_edit_layout/p_phone_no_edit_layout.component'
import { f_phone_no_editComponent } from './f_phone_no_edit/f_phone_no_edit.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_customer_enrolmentRoutingModule,
    
  ],
  declarations: [s_customer_enrolmentComponent,p_list_layoutComponent,f_navigationComponent,p_data_entry_layoutComponent,f_data_entryComponent,p_search_layoutComponent,f_searchComponent,p_corp_account__layoutComponent,f_bank_details_uiComponent,p_corp_virtual_acct_layoutComponent,f_corp_virtual_account_uiComponent,p_customer_edit_layoutComponent,f_customer_editComponent,p_phone_no_edit_layoutComponent,f_phone_no_editComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_customer_enrolmentModule { }

// End of class 
