/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26711 
Modified By     : Admin 
Modified Date   : 2022-Oct-31 4:47 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_customer_enrolment
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

import { s_customer_enrolmentComponent } from './s_customer_enrolment.component';
import { s_customer_enrolmentRoutingModule } from './s_customer_enrolment.routing.module';
    


import { p_customer_edit_layoutComponent } from './p_customer_edit_layout/p_customer_edit_layout.component'
import { f_customer_editComponent } from './f_customer_edit/f_customer_edit.component'



@NgModule({

  imports: [
    CommonModule,
    ComponentModule,
    ControlModule,
    SharedModule,
    DialogModule,
    OverlayPanelModule,
    
    s_customer_enrolmentRoutingModule,
    
  ],
  declarations: [s_customer_enrolmentComponent,p_customer_edit_layoutComponent,f_customer_editComponent,],
  providers:[AppHandlerService,ComponenthelperService]
})


// Start of class 
export class s_customer_enrolmentModule { }

// End of class 
