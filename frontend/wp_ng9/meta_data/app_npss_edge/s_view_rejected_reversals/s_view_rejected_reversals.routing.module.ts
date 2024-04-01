/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35051 
Modified By     : Admin 
Modified Date   : 2024-Apr-01 12:12 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_rejected_reversals
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_view_rejected_reversalsComponent} from './s_view_rejected_reversals.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_view_rejected_reversalsComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_view_rejected_reversalsRoutingModule { }
// End of class