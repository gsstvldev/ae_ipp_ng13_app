/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 29011 
Modified By     : Admin 
Modified Date   : 2023-Apr-03 13:21 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_bct_review_time_out_transactions
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_bct_review_time_out_transactionsComponent} from './s_bct_review_time_out_transactions.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_bct_review_time_out_transactionsComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_bct_review_time_out_transactionsRoutingModule { }
// End of class