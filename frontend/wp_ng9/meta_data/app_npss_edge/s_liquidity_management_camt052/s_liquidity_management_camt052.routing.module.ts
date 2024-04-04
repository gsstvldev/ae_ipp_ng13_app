/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35072 
Modified By     : Admin 
Modified Date   : 2024-Apr-04 9:30 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_liquidity_management_camt052
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_liquidity_management_camt052Component} from './s_liquidity_management_camt052.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_liquidity_management_camt052Component, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_liquidity_management_camt052RoutingModule { }
// End of class