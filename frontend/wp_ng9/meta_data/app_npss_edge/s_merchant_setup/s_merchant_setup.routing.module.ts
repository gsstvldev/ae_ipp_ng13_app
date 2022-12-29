/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27609 
Modified By     : Admin 
Modified Date   : 2022-Dec-29 13:15 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_setup
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_merchant_setupComponent} from './s_merchant_setup.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_merchant_setupComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_merchant_setupRoutingModule { }
// End of class