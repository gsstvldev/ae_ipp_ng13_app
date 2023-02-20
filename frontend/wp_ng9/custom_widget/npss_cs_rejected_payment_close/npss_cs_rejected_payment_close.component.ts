
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_rejected_payment_closeService } from './npss_cs_rejected_payment_close.service';

@Component({
    selector: 'npss_cs_rejected_payment_close',
    templateUrl: './npss_cs_rejected_payment_close.component.html',
    styleUrls: ['./npss_cs_rejected_payment_close.component.css'],
    providers:[npss_cs_rejected_payment_closeService]
})
export class npss_cs_rejected_payment_closeComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_rejected_payment_closeService) { }
    ngOnInit() {
    }
}