/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28533 
Modified By     : Admin 
Modified Date   : 2023-Mar-08 4:42 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_daily_liquidity_position
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_daily_liquidity_positionComponent} from './s_daily_liquidity_position.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_daily_liquidity_positionComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_daily_liquidity_positionRoutingModule { }
// End of class