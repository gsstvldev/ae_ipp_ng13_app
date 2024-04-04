/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35084 
Modified By     : Admin 
Modified Date   : 2024-Apr-04 11:55 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_batch_delayed_inward_payment
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_batch_delayed_inward_paymentComponent} from './s_batch_delayed_inward_payment.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_batch_delayed_inward_paymentComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_batch_delayed_inward_paymentRoutingModule { }
// End of class