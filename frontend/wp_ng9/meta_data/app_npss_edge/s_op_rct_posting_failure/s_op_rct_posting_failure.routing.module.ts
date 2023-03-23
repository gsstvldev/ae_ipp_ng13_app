/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28864 
Modified By     : Admin 
Modified Date   : 2023-Mar-23 15:4 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_op_rct_posting_failure
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_op_rct_posting_failureComponent} from './s_op_rct_posting_failure.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_op_rct_posting_failureComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_op_rct_posting_failureRoutingModule { }
// End of class