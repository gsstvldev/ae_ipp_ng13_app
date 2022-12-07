/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27209 
Modified By     : Admin 
Modified Date   : 2022-Dec-07 6:11 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_bct_view_transactions_group
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_bct_view_transactions_groupComponent} from './s_bct_view_transactions_group.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_bct_view_transactions_groupComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_bct_view_transactions_groupRoutingModule { }
// End of class