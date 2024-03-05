/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34657 
Modified By     : Admin 
Modified Date   : 2024-Mar-05 8:13 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_view_api_failures
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_rct_view_api_failuresComponent} from './s_rct_view_api_failures.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_rct_view_api_failuresComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_rct_view_api_failuresRoutingModule { }
// End of class