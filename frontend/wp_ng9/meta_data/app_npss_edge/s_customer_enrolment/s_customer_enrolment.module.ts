/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26441 
Modified By     : Admin 
Modified Date   : 2022-Oct-14 11:18 AM 
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
import { f_npss_customer_uicgComponent } from './f_npss_customer_uicg/f_npss_customer_uicg.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_customer_srchComponent } from './f_npss_customer_srch/f_npss_customer_srch.component'
import { p_corp_account__layoutComponent } from './p_corp_account__layout/p_corp_account__layout.component'
import { f_bank_details_uiComponent } from './f_bank_details_ui/f_bank_details_ui.component'
import { p_corp_virtual_acct_layoutComponent } from './p_corp_virtual_acct_layout/p_corp_virtual_acct_layout.component'
import { f_corp_virtual_account_uiComponent } from './f_corp_virtual_account_ui/f_corp_virtual_account_ui.component'
import { p_customer_edit_layoutComponent } from './p_customer_edit_layout/p_customer_edit_layout.component'
import { f_npss_modify_customer_uiComponent } from './f_npss_modify_customer_ui/f_npss_modify_customer_ui.component'
import { p_phone_no_edit_layoutComponent } from './p_phone_no_edit_layout/p_phone_no_edit_layout.component'
import { f_npss_modify_phone_no_uiComponent } from './f_npss_modify_phone_no_ui/f_npss_modify_phone_no_ui.component'



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
  declarations: [s_customer_enrolmentComponent,p_list_layoutComponent,f_navigationComponent,p_data_entry_layoutComponent,f_npss_customer_uicgComponent,p_search_layoutComponent,f_npss_customer_srchComponent,p_corp_account__layoutComponent,f_bank_details_uiComponent,p_corp_virtual_acct_layoutComponent,f_corp_virtual_account_uiComponent,p_customer_edit_layoutComponent,f_npss_modify_customer_uiComponent,p_phone_no_edit_layoutComponent,f_npss_modify_phone_no_uiComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_customer_enrolmentModule { }

// End of class 
