/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27310 
Modified By     : Admin 
Modified Date   : 2022-Dec-12 8:3 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_iban_transaction_details
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_iban_transaction_detailsComponent} from './s_iban_transaction_details.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_iban_transaction_detailsComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_iban_transaction_detailsRoutingModule { }
// End of class