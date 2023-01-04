
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { npss_cs_retrieve_contactComponent } from './npss_cs_retrieve_contact.component'; 
    import { DialogModule } from 'primeng/dialog';
    import { FormsModule } from '@angular/forms';
    @NgModule({
        imports: [CommonModule,DialogModule,FormsModule],
        exports:[npss_cs_retrieve_contactComponent],
        declarations: [npss_cs_retrieve_contactComponent],
        providers:[]
    })
    // Start of class 
    export class npss_cs_retrieve_contactModule { }