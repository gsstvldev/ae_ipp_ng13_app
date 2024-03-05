/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34628 
Modified By     : Admin 
Modified Date   : 2024-Mar-05 8:14 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_cbs_account_file_download
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_cbs_account_file_downloadComponent} from './s_cbs_account_file_download.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_cbs_account_file_downloadComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_cbs_account_file_downloadRoutingModule { }
// End of class