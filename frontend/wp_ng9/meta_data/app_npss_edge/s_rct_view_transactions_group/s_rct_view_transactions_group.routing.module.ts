/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27597 
Modified By     : Admin 
Modified Date   : 2022-Dec-29 6:53 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_view_transactions_group
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_rct_view_transactions_groupComponent} from './s_rct_view_transactions_group.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_rct_view_transactions_groupComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_rct_view_transactions_groupRoutingModule { }
// End of class