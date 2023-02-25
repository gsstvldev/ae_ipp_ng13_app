
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_liquidity_cycleService } from './npss_cs_liquidity_cycle.service';

@Component({
    selector: 'npss_cs_liquidity_cycle',
    templateUrl: './npss_cs_liquidity_cycle.component.html',
    styleUrls: ['./npss_cs_liquidity_cycle.component.css'],
    providers:[npss_cs_liquidity_cycleService]
})
export class npss_cs_liquidity_cycleComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_liquidity_cycleService) { }
    ngOnInit() {
    }
}