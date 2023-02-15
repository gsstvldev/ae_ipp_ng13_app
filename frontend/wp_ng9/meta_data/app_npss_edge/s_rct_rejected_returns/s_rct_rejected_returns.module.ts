/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28113 
Modified By     : Admin 
Modified Date   : 2023-Feb-15 15:0 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_rejected_returns
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {ComponentModule} from '../../../widgets/component/component.module';
import {ControlModule} from '../../../widgets/control/control.module';
import { SharedModule } from '../../../shared/shared.module'

import {torus_cs_change_routingkeyModule} from '../../../custom_widget/torus_cs_change_routingkey/torus_cs_change_routingkey.module'
import {torus_cs_show_hideModule} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.module'
import {npss_cs_rct_inward_posting_failure_retry_repostModule} from '../../../custom_widget/npss_cs_rct_inward_posting_failure_retry_repost/npss_cs_rct_inward_posting_failure_retry_repost.module'
import {npss_cs_rct_inward_posting_failure_closeModule} from '../../../custom_widget/npss_cs_rct_inward_posting_failure_close/npss_cs_rct_inward_posting_failure_close.module'
import {npss_c_disable_action_by_multiselectModule} from '../../../custom_widget/npss_c_disable_action_by_multiselect/npss_c_disable_action_by_multiselect.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_rct_rejected_returnsComponent } from './s_rct_rejected_returns.component';
import { s_rct_rejected_returnsRoutingModule } from './s_rct_rejected_returns.routing.module';
    





@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_rct_rejected_returnsRoutingModule,
    torus_cs_change_routingkeyModule,torus_cs_show_hideModule,npss_cs_rct_inward_posting_failure_retry_repostModule,npss_cs_rct_inward_posting_failure_closeModule,npss_c_disable_action_by_multiselectModule
  ],
  declarations: [s_rct_rejected_returnsComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_rct_rejected_returnsModule { }

// End of class 
