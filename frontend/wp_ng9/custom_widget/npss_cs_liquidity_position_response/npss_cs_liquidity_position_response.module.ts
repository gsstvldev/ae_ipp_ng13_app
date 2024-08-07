
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { npss_cs_liquidity_position_responseComponent } from './npss_cs_liquidity_position_response.component'; 
    import {TableModule} from 'primeng/table';

    @NgModule({
        imports: [CommonModule,TableModule],
        exports:[npss_cs_liquidity_position_responseComponent],
        declarations: [npss_cs_liquidity_position_responseComponent],
        providers:[]
    })
    // Start of class 
    export class npss_cs_liquidity_position_responseModule { }