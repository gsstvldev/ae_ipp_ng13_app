/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 29190 
Modified By     : Admin 
Modified Date   : 2023-Apr-21 8:9 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_monthly_liquidity_position
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_monthly_liquidity_positionComponent} from './s_monthly_liquidity_position.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_monthly_liquidity_positionComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_monthly_liquidity_positionRoutingModule { }
// End of class