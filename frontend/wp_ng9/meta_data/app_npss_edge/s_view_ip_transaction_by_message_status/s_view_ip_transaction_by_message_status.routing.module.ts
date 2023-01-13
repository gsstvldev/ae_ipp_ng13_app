/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27827 
Modified By     : Admin 
Modified Date   : 2023-Jan-13 14:21 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_ip_transaction_by_message_status
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_view_ip_transaction_by_message_statusComponent} from './s_view_ip_transaction_by_message_status.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_view_ip_transaction_by_message_statusComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_view_ip_transaction_by_message_statusRoutingModule { }
// End of class