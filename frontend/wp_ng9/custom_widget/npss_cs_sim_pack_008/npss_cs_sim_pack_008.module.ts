
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { npss_cs_sim_pack_008Component } from './npss_cs_sim_pack_008.component'; 
     import { DialogModule } from 'primeng/dialog';
    import { FormsModule } from '@angular/forms';
    @NgModule({
        imports: [CommonModule,FormsModule,DialogModule],
        exports:[npss_cs_sim_pack_008Component],
        declarations: [npss_cs_sim_pack_008Component],
        providers:[]
    })
    // Start of class 
    export class npss_cs_sim_pack_008Module { }