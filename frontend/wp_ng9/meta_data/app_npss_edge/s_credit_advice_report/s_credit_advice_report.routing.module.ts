/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35120 
Modified By     : Admin 
Modified Date   : 2024-Apr-09 9:33 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_credit_advice_report
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_credit_advice_reportComponent} from './s_credit_advice_report.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_credit_advice_reportComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_credit_advice_reportRoutingModule { }
// End of class