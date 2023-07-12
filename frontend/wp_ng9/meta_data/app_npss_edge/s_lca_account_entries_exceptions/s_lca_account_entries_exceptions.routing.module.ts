/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 31048 
Modified By     : Admin 
Modified Date   : 2023-Jul-12 12:43 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_lca_account_entries_exceptions
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_lca_account_entries_exceptionsComponent} from './s_lca_account_entries_exceptions.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_lca_account_entries_exceptionsComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_lca_account_entries_exceptionsRoutingModule { }
// End of class