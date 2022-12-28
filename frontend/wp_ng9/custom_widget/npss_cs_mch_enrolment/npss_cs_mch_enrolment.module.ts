
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { npss_cs_mch_enrolmentComponent } from './npss_cs_mch_enrolment.component'; 
    import { DialogModule } from 'primeng/dialog';
    import { FormsModule } from '@angular/forms';
    @NgModule({
        imports: [CommonModule,DialogModule,FormsModule],
        exports:[npss_cs_mch_enrolmentComponent],
        declarations: [npss_cs_mch_enrolmentComponent],
        providers:[]
    })
    // Start of class 
    export class npss_cs_mch_enrolmentModule { }