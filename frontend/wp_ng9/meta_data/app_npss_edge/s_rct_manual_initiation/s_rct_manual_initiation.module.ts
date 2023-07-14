/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 31091 
Modified By     : Admin 
Modified Date   : 2023-Jul-14 8:0 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_manual_initiation
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {ComponentModule} from '../../../widgets/component/component.module';
import {ControlModule} from '../../../widgets/control/control.module';
import { SharedModule } from '../../../shared/shared.module'

import {npss_cs_rev_get_usable_balanceModule} from '../../../custom_widget/npss_cs_rev_get_usable_balance/npss_cs_rev_get_usable_balance.module'
import {torus_cs_change_routingkeyModule} from '../../../custom_widget/torus_cs_change_routingkey/torus_cs_change_routingkey.module'
import {torus_cs_show_hideModule} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.module'
import {torus_cs_set_rule_mi_paramModule} from '../../../custom_widget/torus_cs_set_rule_mi_param/torus_cs_set_rule_mi_param.module'
import {npss_cs_outward_manual_initiationModule} from '../../../custom_widget/npss_cs_outward_manual_initiation/npss_cs_outward_manual_initiation.module'
import {npss_cs_manual_initiation_get_dealModule} from '../../../custom_widget/npss_cs_manual_initiation_get_deal/npss_cs_manual_initiation_get_deal.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_rct_manual_initiationComponent } from './s_rct_manual_initiation.component';
import { s_rct_manual_initiationRoutingModule } from './s_rct_manual_initiation.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'
import { f_search_info_uiComponent } from './f_search_info_ui/f_search_info_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_manual_initiation_srchComponent } from './f_npss_manual_initiation_srch/f_npss_manual_initiation_srch.component'
import { p_fab_initate_layoutComponent } from './p_fab_initate_layout/p_fab_initate_layout.component'
import { f_npss_mi_get_deal_uiComponent } from './f_npss_mi_get_deal_ui/f_npss_mi_get_deal_ui.component'
import { f_sell_control_uicgComponent } from './f_sell_control_uicg/f_sell_control_uicg.component'
import { f_npss_manual_initiation_uiComponent } from './f_npss_manual_initiation_ui/f_npss_manual_initiation_ui.component'
import { p_fin_initate_layoutComponent } from './p_fin_initate_layout/p_fin_initate_layout.component'
import { p_vertical_tran_detail_profileComponent } from './p_vertical_tran_detail_profile/p_vertical_tran_detail_profile.component'
import { f_back_uiComponent } from './f_back_ui/f_back_ui.component'
import { p_view_history_layoutComponent } from './p_view_history_layout/p_view_history_layout.component'
import { f_process_log_uiComponent } from './f_process_log_ui/f_process_log_ui.component'
import { p_view_message_list_layoutComponent } from './p_view_message_list_layout/p_view_message_list_layout.component'
import { f_message_detail_actionComponent } from './f_message_detail_action/f_message_detail_action.component'
import { p_view_message_ui_layoutComponent } from './p_view_message_ui_layout/p_view_message_ui_layout.component'
import { f_message_back_uiComponent } from './f_message_back_ui/f_message_back_ui.component'
import { f_npss_message_data_uiComponent } from './f_npss_message_data_ui/f_npss_message_data_ui.component'
import { p_view_req_and_resComponent } from './p_view_req_and_res/p_view_req_and_res.component'
import { f_single_back_uiComponent } from './f_single_back_ui/f_single_back_ui.component'
import { f_npss_target_request_uiComponent } from './f_npss_target_request_ui/f_npss_target_request_ui.component'
import { f_npss_target_response_uiComponent } from './f_npss_target_response_ui/f_npss_target_response_ui.component'
import { p_view_request_layoutComponent } from './p_view_request_layout/p_view_request_layout.component'
import { p_view_response_layoutComponent } from './p_view_response_layout/p_view_response_layout.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_rct_manual_initiationRoutingModule,
    npss_cs_rev_get_usable_balanceModule,torus_cs_change_routingkeyModule,torus_cs_show_hideModule,torus_cs_set_rule_mi_paramModule,npss_cs_outward_manual_initiationModule,npss_cs_manual_initiation_get_dealModule
  ],
  declarations: [s_rct_manual_initiationComponent,p_main_layoutComponent,f_navigation_uiComponent,f_search_info_uiComponent,p_search_layoutComponent,f_npss_manual_initiation_srchComponent,p_fab_initate_layoutComponent,f_npss_mi_get_deal_uiComponent,f_sell_control_uicgComponent,f_npss_manual_initiation_uiComponent,p_fin_initate_layoutComponent,p_vertical_tran_detail_profileComponent,f_back_uiComponent,p_view_history_layoutComponent,f_process_log_uiComponent,p_view_message_list_layoutComponent,f_message_detail_actionComponent,p_view_message_ui_layoutComponent,f_message_back_uiComponent,f_npss_message_data_uiComponent,p_view_req_and_resComponent,f_single_back_uiComponent,f_npss_target_request_uiComponent,f_npss_target_response_uiComponent,p_view_request_layoutComponent,p_view_response_layoutComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_rct_manual_initiationModule { }

// End of class 
