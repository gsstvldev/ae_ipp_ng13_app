/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 36004 
Modified By     : Admin 
Modified Date   : 2024-Jul-10 6:40 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_liquidity_cycle
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_liquidity_cycleComponent} from './s_liquidity_cycle.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_liquidity_cycleComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_liquidity_cycleRoutingModule { }
// End of class