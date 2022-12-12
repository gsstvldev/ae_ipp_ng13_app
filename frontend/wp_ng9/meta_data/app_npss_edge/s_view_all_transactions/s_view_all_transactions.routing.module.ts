/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27306 
Modified By     : Admin 
Modified Date   : 2022-Dec-12 7:4 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_all_transactions
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_view_all_transactionsComponent} from './s_view_all_transactions.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_view_all_transactionsComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_view_all_transactionsRoutingModule { }
// End of class