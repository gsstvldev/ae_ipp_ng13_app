
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { npss_cs_change_customer_mobileComponent } from './npss_cs_change_customer_mobile.component'; 
    import { DialogModule } from 'primeng/dialog';
    import { FormsModule } from '@angular/forms';
    @NgModule({
        imports: [CommonModule,DialogModule,FormsModule],
        exports:[npss_cs_change_customer_mobileComponent],
        declarations: [npss_cs_change_customer_mobileComponent],
        providers:[]
    })
    // Start of class 
    export class npss_cs_change_customer_mobileModule { }