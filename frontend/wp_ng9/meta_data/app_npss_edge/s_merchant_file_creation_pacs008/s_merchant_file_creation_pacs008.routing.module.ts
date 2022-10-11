/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26380 
Modified By     : Admin 
Modified Date   : 2022-Oct-11 9:58 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_file_creation_pacs008
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_merchant_file_creation_pacs008Component} from './s_merchant_file_creation_pacs008.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_merchant_file_creation_pacs008Component, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_merchant_file_creation_pacs008RoutingModule { }
// End of class