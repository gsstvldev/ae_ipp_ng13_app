/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27538 
Modified By     : Admin 
Modified Date   : 2022-Dec-26 12:14 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_sm_api_failures
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_view_sm_api_failuresComponent} from './s_view_sm_api_failures.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_view_sm_api_failuresComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_view_sm_api_failuresRoutingModule { }
// End of class