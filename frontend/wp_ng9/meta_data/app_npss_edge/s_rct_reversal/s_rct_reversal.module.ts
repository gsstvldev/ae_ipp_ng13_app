/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26999 
Modified By     : Admin 
Modified Date   : 2022-Nov-25 11:37 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_reversal
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {ComponentModule} from '../../../widgets/component/component.module';
import {ControlModule} from '../../../widgets/control/control.module';
import { SharedModule } from '../../../shared/shared.module'

import {torus_cs_show_hideModule} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.module'
import {npss_cs_reversal_acceptModule} from '../../../custom_widget/npss_cs_reversal_accept/npss_cs_reversal_accept.module'
import {npss_cs_reject_pack002Module} from '../../../custom_widget/npss_cs_reject_pack002/npss_cs_reject_pack002.module'
import {npss_cs_return_pac_004Module} from '../../../custom_widget/npss_cs_return_pac_004/npss_cs_return_pac_004.module'
import {npss_cs_reversal_rejectModule} from '../../../custom_widget/npss_cs_reversal_reject/npss_cs_reversal_reject.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_rct_reversalComponent } from './s_rct_reversal.component';
import { s_rct_reversalRoutingModule } from './s_rct_reversal.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigationComponent } from './f_navigation/f_navigation.component'
import { f_process_log_uiComponent } from './f_process_log_ui/f_process_log_ui.component'
import { f_message_back_uiComponent } from './f_message_back_ui/f_message_back_ui.component'
import { f_message_detail_actionComponent } from './f_message_detail_action/f_message_detail_action.component'
import { f_message_detail_uiComponent } from './f_message_detail_ui/f_message_detail_ui.component'
import { p_accept_ui_layoutComponent } from './p_accept_ui_layout/p_accept_ui_layout.component'
import { f_npss_rct_reversal_uiComponent } from './f_npss_rct_reversal_ui/f_npss_rct_reversal_ui.component'
import { f_reversal_action_uiComponent } from './f_reversal_action_ui/f_reversal_action_ui.component'
import { p_accept_layoutComponent } from './p_accept_layout/p_accept_layout.component'
import { f_npss_pl_rtn_reason_uiComponent } from './f_npss_pl_rtn_reason_ui/f_npss_pl_rtn_reason_ui.component'
import { p_change_return_layoutComponent } from './p_change_return_layout/p_change_return_layout.component'
import { f_npss_pl_change_rtn_reason_uiComponent } from './f_npss_pl_change_rtn_reason_ui/f_npss_pl_change_rtn_reason_ui.component'
import { p_error_code_layoutComponent } from './p_error_code_layout/p_error_code_layout.component'
import { f_npss_response_code_uiComponent } from './f_npss_response_code_ui/f_npss_response_code_ui.component'
import { p_vertical_layoutComponent } from './p_vertical_layout/p_vertical_layout.component'
import { f_back_uiComponent } from './f_back_ui/f_back_ui.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_rct_reversalRoutingModule,
    torus_cs_show_hideModule,npss_cs_reversal_acceptModule,npss_cs_reject_pack002Module,npss_cs_return_pac_004Module,npss_cs_reversal_rejectModule
  ],
  declarations: [s_rct_reversalComponent,p_main_layoutComponent,f_navigationComponent,f_process_log_uiComponent,f_message_back_uiComponent,f_message_detail_actionComponent,f_message_detail_uiComponent,p_accept_ui_layoutComponent,f_npss_rct_reversal_uiComponent,f_reversal_action_uiComponent,p_accept_layoutComponent,f_npss_pl_rtn_reason_uiComponent,p_change_return_layoutComponent,f_npss_pl_change_rtn_reason_uiComponent,p_error_code_layoutComponent,f_npss_response_code_uiComponent,p_vertical_layoutComponent,f_back_uiComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_rct_reversalModule { }

// End of class 
