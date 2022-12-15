/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27373 
Modified By     : Admin 
Modified Date   : 2022-Dec-15 13:14 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_p2p_view_transactions_group
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_p2p_view_transactions_groupComponent} from './s_p2p_view_transactions_group.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_p2p_view_transactions_groupComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_p2p_view_transactions_groupRoutingModule { }
// End of class