/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35909 
Modified By     : Admin 
Modified Date   : 2024-Jul-01 12:58 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_manual_status_update_initiation
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_manual_status_update_initiationComponent} from './s_manual_status_update_initiation.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_manual_status_update_initiationComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_manual_status_update_initiationRoutingModule { }
// End of class