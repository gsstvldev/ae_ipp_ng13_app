/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26712 
Modified By     : Admin 
Modified Date   : 2022-Oct-31 4:47 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_salary_file_creation
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

import { s_salary_file_creationComponent } from './s_salary_file_creation.component';
import { s_salary_file_creationRoutingModule } from './s_salary_file_creation.routing.module';
    


import { p_npss_layoutComponent } from './p_npss_layout/p_npss_layout.component'
import { f_navigationComponent } from './f_navigation/f_navigation.component'
import { f_queue_searchComponent } from './f_queue_search/f_queue_search.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_searchComponent } from './f_search/f_search.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_salary_file_creationRoutingModule,
    
  ],
  declarations: [s_salary_file_creationComponent,p_npss_layoutComponent,f_navigationComponent,f_queue_searchComponent,p_search_layoutComponent,f_searchComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_salary_file_creationModule { }

// End of class 
