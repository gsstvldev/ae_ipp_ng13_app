/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27141 
Modified By     : Admin 
Modified Date   : 2022-Nov-29 13:45 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_bct_posting_failures
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_bct_posting_failuresComponent} from './s_bct_posting_failures.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_bct_posting_failuresComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_bct_posting_failuresRoutingModule { }
// End of class