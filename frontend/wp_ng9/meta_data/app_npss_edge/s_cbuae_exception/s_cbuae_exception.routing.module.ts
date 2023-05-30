/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 29791 
Modified By     : Admin 
Modified Date   : 2023-May-30 10:55 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_cbuae_exception
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_cbuae_exceptionComponent} from './s_cbuae_exception.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_cbuae_exceptionComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_cbuae_exceptionRoutingModule { }
// End of class