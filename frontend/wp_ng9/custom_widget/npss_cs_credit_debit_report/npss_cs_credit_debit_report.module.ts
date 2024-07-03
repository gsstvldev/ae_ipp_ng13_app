
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { npss_cs_credit_debit_reportComponent } from './npss_cs_credit_debit_report.component'; 
    import { PdfViewerModule } from 'ng2-pdf-viewer';

    @NgModule({
        imports: [CommonModule,PdfViewerModule],
        exports:[npss_cs_credit_debit_reportComponent],
        declarations: [npss_cs_credit_debit_reportComponent],
        providers:[]
    })
    // Start of class 
    export class npss_cs_credit_debit_reportModule { }