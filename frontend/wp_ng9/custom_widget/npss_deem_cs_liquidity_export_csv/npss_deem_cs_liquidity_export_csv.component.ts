
import { Component, OnInit,Input } from '@angular/core';
import { npss_deem_cs_liquidity_export_csvService } from './npss_deem_cs_liquidity_export_csv.service';

@Component({
    selector: 'npss_deem_cs_liquidity_export_csv',
    templateUrl: './npss_deem_cs_liquidity_export_csv.component.html',
    styleUrls: ['./npss_deem_cs_liquidity_export_csv.component.css'],
    providers:[npss_deem_cs_liquidity_export_csvService]
})
export class npss_deem_cs_liquidity_export_csvComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_deem_cs_liquidity_export_csvService) { }
    ngOnInit() {
    }
}