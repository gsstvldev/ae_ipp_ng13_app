
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { npss_cs_unenrolment_customerComponent } from './npss_cs_unenrolment_customer.component'; 
    import { DialogModule } from 'primeng/dialog';
    import { FormsModule } from '@angular/forms';
    @NgModule({
        imports: [CommonModule,DialogModule,FormsModule],
        exports:[npss_cs_unenrolment_customerComponent],
        declarations: [npss_cs_unenrolment_customerComponent],
        providers:[]
    })
    // Start of class 
    export class npss_cs_unenrolment_customerModule { }