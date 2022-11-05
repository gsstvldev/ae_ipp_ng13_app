/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26836 
Modified By     : Admin 
Modified Date   : 2022-Nov-05 11:21 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_bct_transaction_details
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_bct_transaction_detailsComponent} from './s_bct_transaction_details.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_bct_transaction_detailsComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_bct_transaction_detailsRoutingModule { }
// End of class