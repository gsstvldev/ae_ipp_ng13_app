/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26432 
Modified By     : Admin 
Modified Date   : 2022-Oct-13 10:44 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rule_template_setup
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {ComponentModule} from '../../../widgets/component/component.module';
import {ControlModule} from '../../../widgets/control/control.module';
import { SharedModule } from '../../../shared/shared.module'


import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_rule_template_setupComponent } from './s_rule_template_setup.component';
import { s_rule_template_setupRoutingModule } from './s_rule_template_setup.routing.module';
    


import { p_list_layoutComponent } from './p_list_layout/p_list_layout.component'
import { f_navigationComponent } from './f_navigation/f_navigation.component'
import { p_data_entry_layoutComponent } from './p_data_entry_layout/p_data_entry_layout.component'
import { f_rule_setup_uiComponent } from './f_rule_setup_ui/f_rule_setup_ui.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_rule_setup_schComponent } from './f_rule_setup_sch/f_rule_setup_sch.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_rule_template_setupRoutingModule,
    
  ],
  declarations: [s_rule_template_setupComponent,p_list_layoutComponent,f_navigationComponent,p_data_entry_layoutComponent,f_rule_setup_uiComponent,p_search_layoutComponent,f_rule_setup_schComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_rule_template_setupModule { }

// End of class 
