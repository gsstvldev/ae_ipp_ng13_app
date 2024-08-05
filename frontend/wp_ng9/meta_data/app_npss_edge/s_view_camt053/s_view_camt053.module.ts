/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 36198 
Modified By     : Admin 
Modified Date   : 2024-Aug-05 4:16 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_camt053
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
import {npss_deem_cs_liquidity_export_excel_fileModule} from '../../../custom_widget/npss_deem_cs_liquidity_export_excel_file/npss_deem_cs_liquidity_export_excel_file.module'
import {npss_deem_cs_liquidity_export_pdfModule} from '../../../custom_widget/npss_deem_cs_liquidity_export_pdf/npss_deem_cs_liquidity_export_pdf.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_view_camt053Component } from './s_view_camt053.component';
import { s_view_camt053RoutingModule } from './s_view_camt053.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigation_uiComponent } from './f_navigation_ui/f_navigation_ui.component'
import { p_view_tran_detail_layoutComponent } from './p_view_tran_detail_layout/p_view_tran_detail_layout.component'
import { f_back_uiComponent } from './f_back_ui/f_back_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_view_camt053_srchComponent } from './f_npss_view_camt053_srch/f_npss_view_camt053_srch.component'
import { p_message_data_layoutComponent } from './p_message_data_layout/p_message_data_layout.component'
import { f_npss_view_camt053_message_data_uiComponent } from './f_npss_view_camt053_message_data_ui/f_npss_view_camt053_message_data_ui.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_view_camt053RoutingModule,
    torus_cs_show_hideModule,npss_deem_cs_liquidity_export_excel_fileModule,npss_deem_cs_liquidity_export_pdfModule
  ],
  declarations: [s_view_camt053Component,p_main_layoutComponent,f_navigation_uiComponent,p_view_tran_detail_layoutComponent,f_back_uiComponent,p_search_layoutComponent,f_npss_view_camt053_srchComponent,p_message_data_layoutComponent,f_npss_view_camt053_message_data_uiComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_view_camt053Module { }

// End of class 
