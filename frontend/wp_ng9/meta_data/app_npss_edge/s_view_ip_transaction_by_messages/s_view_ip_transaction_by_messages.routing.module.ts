/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28391 
Modified By     : Admin 
Modified Date   : 2023-Feb-28 14:24 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_ip_transaction_by_messages
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_view_ip_transaction_by_messagesComponent} from './s_view_ip_transaction_by_messages.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_view_ip_transaction_by_messagesComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_view_ip_transaction_by_messagesRoutingModule { }
// End of class