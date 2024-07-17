/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 36059 
Modified By     : Admin 
Modified Date   : 2024-Jul-17 7:20 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_camt54_posting_failure
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_camt54_posting_failureComponent} from './s_camt54_posting_failure.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_camt54_posting_failureComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_camt54_posting_failureRoutingModule { }
// End of class