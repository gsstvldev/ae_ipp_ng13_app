
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { npss_c_qr_code_generatorComponent } from './npss_c_qr_code_generator.component'; 
    import { NgxQrcodeStylingModule } from 'ngx-qrcode-styling';
    import { FormsModule } from '@angular/forms';
    import { DialogModule } from 'primeng/dialog'; 
    
    @NgModule({
        imports: [CommonModule,DialogModule,FormsModule,NgxQrcodeStylingModule],
        exports:[npss_c_qr_code_generatorComponent],
        declarations: [npss_c_qr_code_generatorComponent],
        providers:[]
    })
    // Start of class 
    export class npss_c_qr_code_generatorModule { }