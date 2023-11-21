/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 33273 
Modified By     : Admin 
Modified Date   : 2023-Nov-21 6:39 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_customer_setup
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {ComponentModule} from '../../../widgets/component/component.module';
import {ControlModule} from '../../../widgets/control/control.module';
import { SharedModule } from '../../../shared/shared.module'

import {npss_cs_change_customer_mobileModule} from '../../../custom_widget/npss_cs_change_customer_mobile/npss_cs_change_customer_mobile.module'
import {torus_cs_show_hideModule} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.module'
import {npss_c_btn_enb_disbModule} from '../../../custom_widget/npss_c_btn_enb_disb/npss_c_btn_enb_disb.module'
import {npss_cs_customer_enrolmentModule} from '../../../custom_widget/npss_cs_customer_enrolment/npss_cs_customer_enrolment.module'
import {npss_cs_add_customer_bank_accountsModule} from '../../../custom_widget/npss_cs_add_customer_bank_accounts/npss_cs_add_customer_bank_accounts.module'
import {npss_cs_blockunblock_customer_bankaccountModule} from '../../../custom_widget/npss_cs_blockunblock_customer_bankaccount/npss_cs_blockunblock_customer_bankaccount.module'
import {npss_cs_update_customer_personal_dataModule} from '../../../custom_widget/npss_cs_update_customer_personal_data/npss_cs_update_customer_personal_data.module'
import {npss_cs_unenrolment_customerModule} from '../../../custom_widget/npss_cs_unenrolment_customer/npss_cs_unenrolment_customer.module'
import {npss_cs_remove_customer_bank_accountsModule} from '../../../custom_widget/npss_cs_remove_customer_bank_accounts/npss_cs_remove_customer_bank_accounts.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_customer_setupComponent } from './s_customer_setup.component';
import { s_customer_setupRoutingModule } from './s_customer_setup.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'
import { f_sub_navigation_uiComponent } from './f_sub_navigation_ui/f_sub_navigation_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_customer_srchComponent } from './f_npss_customer_srch/f_npss_customer_srch.component'
import { p_action_layoutComponent } from './p_action_layout/p_action_layout.component'
import { f_npss_customer_proxy_uiComponent } from './f_npss_customer_proxy_ui/f_npss_customer_proxy_ui.component'
import { f_npss_customer_account_uiComponent } from './f_npss_customer_account_ui/f_npss_customer_account_ui.component'
import { f_actionComponent } from './f_action/f_action.component'
import { p_view_history_layoutComponent } from './p_view_history_layout/p_view_history_layout.component'
import { f_process_log_uiComponent } from './f_process_log_ui/f_process_log_ui.component'
import { p_view_req_and_res_profileComponent } from './p_view_req_and_res_profile/p_view_req_and_res_profile.component'
import { f_single_back_uiComponent } from './f_single_back_ui/f_single_back_ui.component'
import { f_npss_sm_request_uiComponent } from './f_npss_sm_request_ui/f_npss_sm_request_ui.component'
import { f_npss_sm_response_uiComponent } from './f_npss_sm_response_ui/f_npss_sm_response_ui.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_customer_setupRoutingModule,
    npss_cs_change_customer_mobileModule,torus_cs_show_hideModule,npss_c_btn_enb_disbModule,npss_cs_customer_enrolmentModule,npss_cs_add_customer_bank_accountsModule,npss_cs_blockunblock_customer_bankaccountModule,npss_cs_update_customer_personal_dataModule,npss_cs_unenrolment_customerModule,npss_cs_remove_customer_bank_accountsModule
  ],
  declarations: [s_customer_setupComponent,p_main_layoutComponent,f_navigation_uiComponent,f_sub_navigation_uiComponent,p_search_layoutComponent,f_npss_customer_srchComponent,p_action_layoutComponent,f_npss_customer_proxy_uiComponent,f_npss_customer_account_uiComponent,f_actionComponent,p_view_history_layoutComponent,f_process_log_uiComponent,p_view_req_and_res_profileComponent,f_single_back_uiComponent,f_npss_sm_request_uiComponent,f_npss_sm_response_uiComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_customer_setupModule { }

// End of class 
