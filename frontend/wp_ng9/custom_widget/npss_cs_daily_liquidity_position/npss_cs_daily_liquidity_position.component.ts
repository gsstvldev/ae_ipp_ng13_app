
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_daily_liquidity_positionService } from './npss_cs_daily_liquidity_position.service';

@Component({
    selector: 'npss_cs_daily_liquidity_position',
    templateUrl: './npss_cs_daily_liquidity_position.component.html',
    styleUrls: ['./npss_cs_daily_liquidity_position.component.css'],
    providers:[npss_cs_daily_liquidity_positionService]
})
export class npss_cs_daily_liquidity_positionComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_daily_liquidity_positionService) { }
    ngOnInit() {
    }
}