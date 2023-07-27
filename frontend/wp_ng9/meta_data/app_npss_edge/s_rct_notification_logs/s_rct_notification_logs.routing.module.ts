/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 31266 
Modified By     : Admin 
Modified Date   : 2023-Jul-27 5:52 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_notification_logs
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_rct_notification_logsComponent} from './s_rct_notification_logs.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_rct_notification_logsComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_rct_notification_logsRoutingModule { }
// End of class