/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28778 
Modified By     : Admin 
Modified Date   : 2023-Mar-20 11:11 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_ip_transaction_by_ps
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_view_ip_transaction_by_psComponent} from './s_view_ip_transaction_by_ps.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_view_ip_transaction_by_psComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_view_ip_transaction_by_psRoutingModule { }
// End of class