/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27851 
Modified By     : Admin 
Modified Date   : 2023-Jan-19 14:21 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_exceptions
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

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_view_exceptionsComponent } from './s_view_exceptions.component';
import { s_view_exceptionsRoutingModule } from './s_view_exceptions.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_exceptional_srchComponent } from './f_npss_exceptional_srch/f_npss_exceptional_srch.component'
import { p_view_main_req_and_res_layoutComponent } from './p_view_main_req_and_res_layout/p_view_main_req_and_res_layout.component'
import { f_single_back_uiComponent } from './f_single_back_ui/f_single_back_ui.component'
import { f_npss_exceptional_req_uiComponent } from './f_npss_exceptional_req_ui/f_npss_exceptional_req_ui.component'
import { f_npss_exceptional_res_uiComponent } from './f_npss_exceptional_res_ui/f_npss_exceptional_res_ui.component'
import { p_view_message_log_layoutComponent } from './p_view_message_log_layout/p_view_message_log_layout.component'
import { f_npss_exceptional_message_datauiComponent } from './f_npss_exceptional_message_dataui/f_npss_exceptional_message_dataui.component'
import { p_view_error_log_layoutComponent } from './p_view_error_log_layout/p_view_error_log_layout.component'
import { f_npss_exceptional_error_datauiComponent } from './f_npss_exceptional_error_dataui/f_npss_exceptional_error_dataui.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_view_exceptionsRoutingModule,
    torus_cs_show_hideModule
  ],
  declarations: [s_view_exceptionsComponent,p_main_layoutComponent,f_navigation_uiComponent,p_search_layoutComponent,f_npss_exceptional_srchComponent,p_view_main_req_and_res_layoutComponent,f_single_back_uiComponent,f_npss_exceptional_req_uiComponent,f_npss_exceptional_res_uiComponent,p_view_message_log_layoutComponent,f_npss_exceptional_message_datauiComponent,p_view_error_log_layoutComponent,f_npss_exceptional_error_datauiComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_view_exceptionsModule { }

// End of class 
