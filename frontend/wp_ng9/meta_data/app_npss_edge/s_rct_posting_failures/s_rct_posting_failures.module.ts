/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27052 
Modified By     : Admin 
Modified Date   : 2022-Nov-24 7:53 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_posting_failures
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
import {npss_cs_rct_ipir_posting_failure_retryModule} from '../../../custom_widget/npss_cs_rct_ipir_posting_failure_retry/npss_cs_rct_ipir_posting_failure_retry.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_rct_posting_failuresComponent } from './s_rct_posting_failures.component';
import { s_rct_posting_failuresRoutingModule } from './s_rct_posting_failures.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_rct_post_plog_srchComponent } from './f_npss_rct_post_plog_srch/f_npss_rct_post_plog_srch.component'
import { p_vertical_tran_detail_profileComponent } from './p_vertical_tran_detail_profile/p_vertical_tran_detail_profile.component'
import { f_back_uiComponent } from './f_back_ui/f_back_ui.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_rct_posting_failuresRoutingModule,
    torus_cs_show_hideModule,npss_cs_rct_ipir_posting_failure_retryModule
  ],
  declarations: [s_rct_posting_failuresComponent,p_main_layoutComponent,f_navigation_uiComponent,p_search_layoutComponent,f_npss_rct_post_plog_srchComponent,p_vertical_tran_detail_profileComponent,f_back_uiComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_rct_posting_failuresModule { }

// End of class 
