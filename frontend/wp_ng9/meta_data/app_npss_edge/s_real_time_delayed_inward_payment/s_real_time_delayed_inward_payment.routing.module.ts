/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35094 
Modified By     : Admin 
Modified Date   : 2024-Apr-05 6:44 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_real_time_delayed_inward_payment
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_real_time_delayed_inward_paymentComponent} from './s_real_time_delayed_inward_payment.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_real_time_delayed_inward_paymentComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_real_time_delayed_inward_paymentRoutingModule { }
// End of class