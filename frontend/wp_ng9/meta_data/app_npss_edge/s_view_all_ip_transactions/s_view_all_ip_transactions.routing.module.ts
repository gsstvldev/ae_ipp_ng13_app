/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35168 
Modified By     : Admin 
Modified Date   : 2024-Apr-17 5:42 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_all_ip_transactions
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_view_all_ip_transactionsComponent} from './s_view_all_ip_transactions.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_view_all_ip_transactionsComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_view_all_ip_transactionsRoutingModule { }
// End of class