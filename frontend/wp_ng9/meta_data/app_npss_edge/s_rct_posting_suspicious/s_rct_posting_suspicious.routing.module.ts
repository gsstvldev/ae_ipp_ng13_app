/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27177 
Modified By     : Admin 
Modified Date   : 2022-Dec-03 15:28 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_posting_suspicious
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_rct_posting_suspiciousComponent} from './s_rct_posting_suspicious.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_rct_posting_suspiciousComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_rct_posting_suspiciousRoutingModule { }
// End of class