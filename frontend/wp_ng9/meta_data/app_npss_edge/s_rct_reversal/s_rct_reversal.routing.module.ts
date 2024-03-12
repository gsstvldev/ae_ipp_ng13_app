/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34720 
Modified By     : Admin 
Modified Date   : 2024-Mar-12 6:57 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_reversal
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_rct_reversalComponent} from './s_rct_reversal.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_rct_reversalComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_rct_reversalRoutingModule { }
// End of class