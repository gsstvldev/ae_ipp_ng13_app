
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { npss_cs_reversal_initiateComponent } from './npss_cs_reversal_initiate.component'; 
    import { FormsModule } from '@angular/forms';
    import { DialogModule } from 'primeng/dialog';
    @NgModule({
        imports: [CommonModule,FormsModule,DialogModule],
        exports:[npss_cs_reversal_initiateComponent],
        declarations: [npss_cs_reversal_initiateComponent],
        providers:[]
    })
    // Start of class 
    export class npss_cs_reversal_initiateModule { }