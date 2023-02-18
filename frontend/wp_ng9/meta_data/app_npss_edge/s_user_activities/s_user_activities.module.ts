/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28171 
Modified By     : Admin 
Modified Date   : 2023-Feb-18 6:3 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_user_activities
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

import {TabViewModule} from 'primeng/tabview';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import { ComponenthelperService } from '../../../scripts/fx/componenthelper.service';

import { s_user_activitiesComponent } from './s_user_activities.component';
import { s_user_activitiesRoutingModule } from './s_user_activities.routing.module';
    


import { p_main_layoutComponent } from './p_main_layout/p_main_layout.component'
import { f_navigationComponent } from './f_navigation/f_navigation.component'
import { t_tabviewComponent } from './t_tabview/t_tabview.component'
import { p_user_sessions_layoutComponent } from './p_user_sessions_layout/p_user_sessions_layout.component'
import { p_authentication_historyComponent } from './p_authentication_history/p_authentication_history.component'
import { p_password_history_layoutComponent } from './p_password_history_layout/p_password_history_layout.component'
import { p_menu_access_layoutComponent } from './p_menu_access_layout/p_menu_access_layout.component'
import { p_activitiesComponent } from './p_activities/p_activities.component'
import { p_search_layoutComponent } from './p_search_layout/p_search_layout.component'
import { f_npss_user_log_srchComponent } from './f_npss_user_log_srch/f_npss_user_log_srch.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    TabViewModule,
    s_user_activitiesRoutingModule,
    
  ],
  declarations: [s_user_activitiesComponent,p_main_layoutComponent,f_navigationComponent,t_tabviewComponent,p_user_sessions_layoutComponent,p_authentication_historyComponent,p_password_history_layoutComponent,p_menu_access_layoutComponent,p_activitiesComponent,p_search_layoutComponent,f_npss_user_log_srchComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_user_activitiesModule { }

// End of class 
