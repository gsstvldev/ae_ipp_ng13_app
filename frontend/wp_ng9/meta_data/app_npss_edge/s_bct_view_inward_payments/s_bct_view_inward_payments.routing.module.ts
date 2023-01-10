/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27773 
Modified By     : Admin 
Modified Date   : 2023-Jan-10 5:43 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_bct_view_inward_payments
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_bct_view_inward_paymentsComponent} from './s_bct_view_inward_payments.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_bct_view_inward_paymentsComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_bct_view_inward_paymentsRoutingModule { }
// End of class