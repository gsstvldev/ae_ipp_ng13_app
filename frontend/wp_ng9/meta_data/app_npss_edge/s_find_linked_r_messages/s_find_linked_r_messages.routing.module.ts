/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 29212 
Modified By     : Admin 
Modified Date   : 2023-Apr-21 14:48 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_find_linked_r_messages
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_find_linked_r_messagesComponent} from './s_find_linked_r_messages.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_find_linked_r_messagesComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_find_linked_r_messagesRoutingModule { }
// End of class