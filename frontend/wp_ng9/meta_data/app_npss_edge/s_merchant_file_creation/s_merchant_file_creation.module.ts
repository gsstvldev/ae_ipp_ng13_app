/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26577 
Modified By     : Admin 
Modified Date   : 2022-Oct-19 15:6 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_file_creation
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {ComponentModule} from '../../../widgets/component/component.module';
import {ControlModule} from '../../../widgets/control/control.module';
import { SharedModule } from '../../../shared/shared.module'

import {sprp_c_set_exg_additional_paramModule} from '../../../custom_widget/sprp_c_set_exg_additional_param/sprp_c_set_exg_additional_param.module'

import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_merchant_file_creationComponent } from './s_merchant_file_creation.component';
import { s_merchant_file_creationRoutingModule } from './s_merchant_file_creation.routing.module';
    


import { p_ips_layoutComponent } from './p_ips_layout/p_ips_layout.component'
import { f_navigationComponent } from './f_navigation/f_navigation.component'
import { f_queue_searchComponent } from './f_queue_search/f_queue_search.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_address_srch_uiComponent } from './f_npss_address_srch_ui/f_npss_address_srch_ui.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_merchant_file_creationRoutingModule,
    sprp_c_set_exg_additional_paramModule
  ],
  declarations: [s_merchant_file_creationComponent,p_ips_layoutComponent,f_navigationComponent,f_queue_searchComponent,p_search_layoutComponent,f_npss_address_srch_uiComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_merchant_file_creationModule { }

// End of class 
