
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { npss_cs_show_table_viewComponent } from './npss_cs_show_table_view.component'; 
    import {TableModule} from 'primeng/table';
    @NgModule({
        imports: [CommonModule,TableModule],
        exports:[npss_cs_show_table_viewComponent],
        declarations: [npss_cs_show_table_viewComponent],
        providers:[]
    })
    // Start of class 
    export class npss_cs_show_table_viewModule { }