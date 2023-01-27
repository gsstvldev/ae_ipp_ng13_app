/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27925 
Modified By     : Admin 
Modified Date   : 2023-Jan-27 7:57 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_setup
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {ComponentModule} from '../../../widgets/component/component.module';
import {ControlModule} from '../../../widgets/control/control.module';
import { SharedModule } from '../../../shared/shared.module'

import {npss_cs_mch_enrolmentModule} from '../../../custom_widget/npss_cs_mch_enrolment/npss_cs_mch_enrolment.module'
import {torus_cs_show_hideModule} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.module'
import {npss_c_btn_enb_disbModule} from '../../../custom_widget/npss_c_btn_enb_disb/npss_c_btn_enb_disb.module'
import {npss_cs_mch_change_mobileModule} from '../../../custom_widget/npss_cs_mch_change_mobile/npss_cs_mch_change_mobile.module'
import {npss_cs_mch_set_defaultModule} from '../../../custom_widget/npss_cs_mch_set_default/npss_cs_mch_set_default.module'
import {npss_cs_mch_unblock_bank_accountModule} from '../../../custom_widget/npss_cs_mch_unblock_bank_account/npss_cs_mch_unblock_bank_account.module'
import {npss_cs_mch_update_mccModule} from '../../../custom_widget/npss_cs_mch_update_mcc/npss_cs_mch_update_mcc.module'
import {npss_cs_mch_remove_bank_accountsModule} from '../../../custom_widget/npss_cs_mch_remove_bank_accounts/npss_cs_mch_remove_bank_accounts.module'
import {npss_cs_desk_enrolmentModule} from '../../../custom_widget/npss_cs_desk_enrolment/npss_cs_desk_enrolment.module'
import {npss_cs_desk_updateModule} from '../../../custom_widget/npss_cs_desk_update/npss_cs_desk_update.module'
import {npss_cs_desk_disableModule} from '../../../custom_widget/npss_cs_desk_disable/npss_cs_desk_disable.module'
import {npss_cs_mch_disableModule} from '../../../custom_widget/npss_cs_mch_disable/npss_cs_mch_disable.module'
import {npss_cs_mch_update_personal_dataModule} from '../../../custom_widget/npss_cs_mch_update_personal_data/npss_cs_mch_update_personal_data.module'
import {npss_cs_mch_add_bank_accountsModule} from '../../../custom_widget/npss_cs_mch_add_bank_accounts/npss_cs_mch_add_bank_accounts.module'
import {npss_cs_mch_block_bank_accountModule} from '../../../custom_widget/npss_cs_mch_block_bank_account/npss_cs_mch_block_bank_account.module'
import {npss_cs_shop_enrolmentModule} from '../../../custom_widget/npss_cs_shop_enrolment/npss_cs_shop_enrolment.module'
import {npss_cs_shop_updateModule} from '../../../custom_widget/npss_cs_shop_update/npss_cs_shop_update.module'
import {npss_cs_shop_set_bank_accountModule} from '../../../custom_widget/npss_cs_shop_set_bank_account/npss_cs_shop_set_bank_account.module'
import {npss_cs_shop_remove_bank_accountModule} from '../../../custom_widget/npss_cs_shop_remove_bank_account/npss_cs_shop_remove_bank_account.module'
import {npss_cs_shop_disableModule} from '../../../custom_widget/npss_cs_shop_disable/npss_cs_shop_disable.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_merchant_setupComponent } from './s_merchant_setup.component';
import { s_merchant_setupRoutingModule } from './s_merchant_setup.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'
import { f_sub_navigation_uiComponent } from './f_sub_navigation_ui/f_sub_navigation_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_merchant_setup_srchComponent } from './f_npss_merchant_setup_srch/f_npss_merchant_setup_srch.component'
import { p_action_layoutComponent } from './p_action_layout/p_action_layout.component'
import { f_npss_merchant_uiComponent } from './f_npss_merchant_ui/f_npss_merchant_ui.component'
import { f_npss_mer_account_uiComponent } from './f_npss_mer_account_ui/f_npss_mer_account_ui.component'
import { f_npss_shop_uiComponent } from './f_npss_shop_ui/f_npss_shop_ui.component'
import { f_npss_cash_desk_uiComponent } from './f_npss_cash_desk_ui/f_npss_cash_desk_ui.component'
import { f_actionComponent } from './f_action/f_action.component'
import { p_view_history_layoutComponent } from './p_view_history_layout/p_view_history_layout.component'
import { f_process_log_uiComponent } from './f_process_log_ui/f_process_log_ui.component'
import { p_view_req_and_res_profileComponent } from './p_view_req_and_res_profile/p_view_req_and_res_profile.component'
import { f_single_back_uiComponent } from './f_single_back_ui/f_single_back_ui.component'
import { f_npss_sm_request_uiComponent } from './f_npss_sm_request_ui/f_npss_sm_request_ui.component'
import { f_npss_sm_response_uiComponent } from './f_npss_sm_response_ui/f_npss_sm_response_ui.component'
import { p_shop_and_cashdesk_layoutComponent } from './p_shop_and_cashdesk_layout/p_shop_and_cashdesk_layout.component'
import { f_shop_actionComponent } from './f_shop_action/f_shop_action.component'
import { f_cashdesk_actionComponent } from './f_cashdesk_action/f_cashdesk_action.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_merchant_setupRoutingModule,
    npss_cs_mch_enrolmentModule,torus_cs_show_hideModule,npss_c_btn_enb_disbModule,npss_cs_mch_change_mobileModule,npss_cs_mch_set_defaultModule,npss_cs_mch_unblock_bank_accountModule,npss_cs_mch_update_mccModule,npss_cs_mch_remove_bank_accountsModule,npss_cs_desk_enrolmentModule,npss_cs_desk_updateModule,npss_cs_desk_disableModule,npss_cs_mch_disableModule,npss_cs_mch_update_personal_dataModule,npss_cs_mch_add_bank_accountsModule,npss_cs_mch_block_bank_accountModule,npss_cs_shop_enrolmentModule,npss_cs_shop_updateModule,npss_cs_shop_set_bank_accountModule,npss_cs_shop_remove_bank_accountModule,npss_cs_shop_disableModule
  ],
  declarations: [s_merchant_setupComponent,p_main_layoutComponent,f_navigation_uiComponent,f_sub_navigation_uiComponent,p_search_layoutComponent,f_npss_merchant_setup_srchComponent,p_action_layoutComponent,f_npss_merchant_uiComponent,f_npss_mer_account_uiComponent,f_npss_shop_uiComponent,f_npss_cash_desk_uiComponent,f_actionComponent,p_view_history_layoutComponent,f_process_log_uiComponent,p_view_req_and_res_profileComponent,f_single_back_uiComponent,f_npss_sm_request_uiComponent,f_npss_sm_response_uiComponent,p_shop_and_cashdesk_layoutComponent,f_shop_actionComponent,f_cashdesk_actionComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_merchant_setupModule { }

// End of class 
