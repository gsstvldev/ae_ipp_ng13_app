/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26957 
Modified By     : Admin 
Modified Date   : 2022-Nov-19 11:37 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_posting_suspicious
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
import {npss_cs_t24_postingModule} from '../../../custom_widget/npss_cs_t24_posting/npss_cs_t24_posting.module'
import {npss_cs_enquiryModule} from '../../../custom_widget/npss_cs_enquiry/npss_cs_enquiry.module'
import {npss_cs_cc_postingModule} from '../../../custom_widget/npss_cs_cc_posting/npss_cs_cc_posting.module'
import {npss_cs_rct_already_postingModule} from '../../../custom_widget/npss_cs_rct_already_posting/npss_cs_rct_already_posting.module'
import {npss_cs_rct_retryModule} from '../../../custom_widget/npss_cs_rct_retry/npss_cs_rct_retry.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_rct_posting_suspiciousComponent } from './s_rct_posting_suspicious.component';
import { s_rct_posting_suspiciousRoutingModule } from './s_rct_posting_suspicious.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_rct_post_plog_srchComponent } from './f_npss_rct_post_plog_srch/f_npss_rct_post_plog_srch.component'
import { p_cbs_layoutComponent } from './p_cbs_layout/p_cbs_layout.component'
import { f_cbs_ref_uiComponent } from './f_cbs_ref_ui/f_cbs_ref_ui.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_rct_posting_suspiciousRoutingModule,
    torus_cs_show_hideModule,npss_cs_t24_postingModule,npss_cs_enquiryModule,npss_cs_cc_postingModule,npss_cs_rct_already_postingModule,npss_cs_rct_retryModule
  ],
  declarations: [s_rct_posting_suspiciousComponent,p_main_layoutComponent,f_navigation_uiComponent,p_search_layoutComponent,f_npss_rct_post_plog_srchComponent,p_cbs_layoutComponent,f_cbs_ref_uiComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_rct_posting_suspiciousModule { }

// End of class 
