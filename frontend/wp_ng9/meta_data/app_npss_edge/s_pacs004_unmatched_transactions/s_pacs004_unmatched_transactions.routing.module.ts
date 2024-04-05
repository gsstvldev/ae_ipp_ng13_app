/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35089 
Modified By     : Admin 
Modified Date   : 2024-Apr-05 5:39 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_pacs004_unmatched_transactions
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_pacs004_unmatched_transactionsComponent} from './s_pacs004_unmatched_transactions.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_pacs004_unmatched_transactionsComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_pacs004_unmatched_transactionsRoutingModule { }
// End of class