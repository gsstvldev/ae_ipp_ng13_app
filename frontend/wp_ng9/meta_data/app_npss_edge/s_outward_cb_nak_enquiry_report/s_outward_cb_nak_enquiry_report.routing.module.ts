/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34767 
Modified By     : Admin 
Modified Date   : 2024-Mar-14 12:27 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_outward_cb_nak_enquiry_report
--------------------------------------------------------------------------- */

// Component Definition 
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {s_outward_cb_nak_enquiry_reportComponent} from './s_outward_cb_nak_enquiry_report.component'; 
const dynamicRoutes: Routes = [ 
  { path: '', component: s_outward_cb_nak_enquiry_reportComponent, pathMatch: 'full' }, 
]; 
@NgModule({ 
  imports: [RouterModule.forChild(dynamicRoutes)], 
  exports: [RouterModule] 
}) 
// Start of class
export class s_outward_cb_nak_enquiry_reportRoutingModule { }
// End of class