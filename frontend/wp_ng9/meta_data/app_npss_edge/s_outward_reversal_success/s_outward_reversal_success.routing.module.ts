/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34785 
Modified By     : Admin 
Modified Date   : 2024-Mar-15 12:17 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_outward_reversal_success
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_outward_reversal_successComponent} from './s_outward_reversal_success.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_outward_reversal_successComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_outward_reversal_successRoutingModule { }
// End of class