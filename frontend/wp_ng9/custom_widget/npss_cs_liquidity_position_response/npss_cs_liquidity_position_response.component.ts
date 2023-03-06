
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_liquidity_position_responseService } from './npss_cs_liquidity_position_response.service';

@Component({
    selector: 'npss_cs_liquidity_position_response',
    templateUrl: './npss_cs_liquidity_position_response.component.html',
    styleUrls: ['./npss_cs_liquidity_position_response.component.css'],
    providers:[npss_cs_liquidity_position_responseService]
})
export class npss_cs_liquidity_position_responseComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_liquidity_position_responseService) { }
    ngOnInit() {
    }
}