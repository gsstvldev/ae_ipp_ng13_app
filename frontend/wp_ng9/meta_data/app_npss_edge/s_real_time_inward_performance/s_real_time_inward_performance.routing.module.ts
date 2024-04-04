/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35084 
Modified By     : Admin 
Modified Date   : 2024-Apr-04 11:56 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_real_time_inward_performance
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_real_time_inward_performanceComponent} from './s_real_time_inward_performance.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_real_time_inward_performanceComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_real_time_inward_performanceRoutingModule { }
// End of class