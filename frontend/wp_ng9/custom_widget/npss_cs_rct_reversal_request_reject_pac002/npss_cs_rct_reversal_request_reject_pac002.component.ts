
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_rct_reversal_request_reject_pac002Service } from './npss_cs_rct_reversal_request_reject_pac002.service';

@Component({
    selector: 'npss_cs_rct_reversal_request_reject_pac002',
    templateUrl: './npss_cs_rct_reversal_request_reject_pac002.component.html',
    styleUrls: ['./npss_cs_rct_reversal_request_reject_pac002.component.css'],
    providers:[npss_cs_rct_reversal_request_reject_pac002Service]
})
export class npss_cs_rct_reversal_request_reject_pac002Component implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_rct_reversal_request_reject_pac002Service) { }
    ngOnInit() {
    }
}