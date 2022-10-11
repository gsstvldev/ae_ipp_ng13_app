/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26354 
Modified By     : Admin 
Modified Date   : 2022-Oct-11 5:26 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_salary_file_download
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_salary_file_downloadComponent} from './s_salary_file_download.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_salary_file_downloadComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_salary_file_downloadRoutingModule { }
// End of class