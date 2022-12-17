/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27429 
Modified By     : Admin 
Modified Date   : 2022-Dec-17 11:37 AM 
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

import {npss_cs_change_customer_mobileModule} from '../../../custom_widget/npss_cs_change_customer_mobile/npss_cs_change_customer_mobile.module'
import {torus_cs_show_hideModule} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.module'
import {npss_c_btn_enb_disbModule} from '../../../custom_widget/npss_c_btn_enb_disb/npss_c_btn_enb_disb.module'
import {npss_cs_customer_enrolmentModule} from '../../../custom_widget/npss_cs_customer_enrolment/npss_cs_customer_enrolment.module'

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
import { f_searchComponent } from './f_search/f_search.component'
import { p_action_layoutComponent } from './p_action_layout/p_action_layout.component'
import { f_customer_detailComponent } from './f_customer_detail/f_customer_detail.component'
import { f_account__detailComponent } from './f_account__detail/f_account__detail.component'
import { f_actionComponent } from './f_action/f_action.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_merchant_setupRoutingModule,
    npss_cs_change_customer_mobileModule,torus_cs_show_hideModule,npss_c_btn_enb_disbModule,npss_cs_customer_enrolmentModule
  ],
  declarations: [s_merchant_setupComponent,p_main_layoutComponent,f_navigation_uiComponent,f_sub_navigation_uiComponent,p_search_layoutComponent,f_searchComponent,p_action_layoutComponent,f_customer_detailComponent,f_account__detailComponent,f_actionComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_merchant_setupModule { }

// End of class 
