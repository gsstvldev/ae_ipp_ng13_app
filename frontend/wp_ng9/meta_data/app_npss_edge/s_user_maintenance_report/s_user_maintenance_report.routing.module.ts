/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35876 
Modified By     : Admin 
Modified Date   : 2024-Jun-27 13:5 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_user_maintenance_report
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_user_maintenance_reportComponent} from './s_user_maintenance_report.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_user_maintenance_reportComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_user_maintenance_reportRoutingModule { }
// End of class