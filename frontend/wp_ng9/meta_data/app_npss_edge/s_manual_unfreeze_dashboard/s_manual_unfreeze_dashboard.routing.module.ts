/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34474 
Modified By     : Admin 
Modified Date   : 2024-Feb-21 8:5 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_manual_unfreeze_dashboard
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_manual_unfreeze_dashboardComponent} from './s_manual_unfreeze_dashboard.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_manual_unfreeze_dashboardComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_manual_unfreeze_dashboardRoutingModule { }
// End of class