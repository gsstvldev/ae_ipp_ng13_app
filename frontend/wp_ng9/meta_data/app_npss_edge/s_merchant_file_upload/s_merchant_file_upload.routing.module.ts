/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26589 
Modified By     : Admin 
Modified Date   : 2022-Oct-20 4:28 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_file_upload
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_merchant_file_uploadComponent} from './s_merchant_file_upload.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_merchant_file_uploadComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_merchant_file_uploadRoutingModule { }
// End of class