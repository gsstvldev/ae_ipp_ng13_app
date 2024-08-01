
import { Component, OnInit,Input } from '@angular/core';
import { npss_deem_cs_liquidity_export_excel_fileService } from './npss_deem_cs_liquidity_export_excel_file.service';

@Component({
    selector: 'npss_deem_cs_liquidity_export_excel_file',
    templateUrl: './npss_deem_cs_liquidity_export_excel_file.component.html',
    styleUrls: ['./npss_deem_cs_liquidity_export_excel_file.component.css'],
    providers:[npss_deem_cs_liquidity_export_excel_fileService]
})
export class npss_deem_cs_liquidity_export_excel_fileComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_deem_cs_liquidity_export_excel_fileService) { }
    ngOnInit() {
    }
}