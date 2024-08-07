/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35950 
Modified By     : Admin 
Modified Date   : 2024-Jul-04 10:19 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_debit_advice_report
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {ComponentModule} from '../../../widgets/component/component.module';
import {ControlModule} from '../../../widgets/control/control.module';
import { SharedModule } from '../../../shared/shared.module'

import {npss_cs_credit_debit_reportModule} from '../../../custom_widget/npss_cs_credit_debit_report/npss_cs_credit_debit_report.module'
import {npss_cs_dashboard_titleModule} from '../../../custom_widget/npss_cs_dashboard_title/npss_cs_dashboard_title.module'
import {npss_c_cond_ctrl_validationModule} from '../../../custom_widget/npss_c_cond_ctrl_validation/npss_c_cond_ctrl_validation.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_debit_advice_reportComponent } from './s_debit_advice_report.component';
import { s_debit_advice_reportRoutingModule } from './s_debit_advice_report.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigationComponent } from './f_navigation/f_navigation.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_debit_advice_report_srchComponent } from './f_debit_advice_report_srch/f_debit_advice_report_srch.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_debit_advice_reportRoutingModule,
    npss_cs_credit_debit_reportModule,npss_cs_dashboard_titleModule,npss_c_cond_ctrl_validationModule
  ],
  declarations: [s_debit_advice_reportComponent,p_main_layoutComponent,f_navigationComponent,p_search_layoutComponent,f_debit_advice_report_srchComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_debit_advice_reportModule { }

// End of class 
