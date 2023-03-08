/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28540 
Modified By     : Admin 
Modified Date   : 2023-Mar-08 7:58 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_op_view_dashboard
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_op_view_dashboardComponent} from './s_op_view_dashboard.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_op_view_dashboardComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_op_view_dashboardRoutingModule { }
// End of class