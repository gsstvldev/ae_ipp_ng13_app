/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35107 
Modified By     : Admin 
Modified Date   : 2024-Apr-05 9:39 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_user_sessions_report
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_user_sessions_reportComponent} from './s_user_sessions_report.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_user_sessions_reportComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_user_sessions_reportRoutingModule { }
// End of class