/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35310 
Modified By     : Admin 
Modified Date   : 2024-May-02 11:30 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_rejected_payments_by_cb
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_rct_rejected_payments_by_cbComponent} from './s_rct_rejected_payments_by_cb.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_rct_rejected_payments_by_cbComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_rct_rejected_payments_by_cbRoutingModule { }
// End of class