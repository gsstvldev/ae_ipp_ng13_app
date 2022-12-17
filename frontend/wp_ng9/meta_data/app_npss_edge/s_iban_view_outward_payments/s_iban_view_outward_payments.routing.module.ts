/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27407 
Modified By     : Admin 
Modified Date   : 2022-Dec-17 4:54 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_iban_view_outward_payments
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_iban_view_outward_paymentsComponent} from './s_iban_view_outward_payments.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_iban_view_outward_paymentsComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_iban_view_outward_paymentsRoutingModule { }
// End of class