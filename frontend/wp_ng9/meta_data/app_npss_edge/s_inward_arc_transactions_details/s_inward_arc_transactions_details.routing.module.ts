/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35950 
Modified By     : Admin 
Modified Date   : 2024-Jul-04 10:19 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_inward_arc_transactions_details
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_inward_arc_transactions_detailsComponent} from './s_inward_arc_transactions_details.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_inward_arc_transactions_detailsComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_inward_arc_transactions_detailsRoutingModule { }
// End of class