
import { Component, OnInit,Input } from '@angular/core';
import { npss_deem_cs_liquidity_export_pdfService } from './npss_deem_cs_liquidity_export_pdf.service';

@Component({
    selector: 'npss_deem_cs_liquidity_export_pdf',
    templateUrl: './npss_deem_cs_liquidity_export_pdf.component.html',
    styleUrls: ['./npss_deem_cs_liquidity_export_pdf.component.css'],
    providers:[npss_deem_cs_liquidity_export_pdfService]
})
export class npss_deem_cs_liquidity_export_pdfComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_deem_cs_liquidity_export_pdfService) { }
    ngOnInit() {
    }
}