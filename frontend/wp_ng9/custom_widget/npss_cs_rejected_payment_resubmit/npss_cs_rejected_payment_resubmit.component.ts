
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_rejected_payment_resubmitService } from './npss_cs_rejected_payment_resubmit.service';

@Component({
    selector: 'npss_cs_rejected_payment_resubmit',
    templateUrl: './npss_cs_rejected_payment_resubmit.component.html',
    styleUrls: ['./npss_cs_rejected_payment_resubmit.component.css'],
    providers:[npss_cs_rejected_payment_resubmitService]
})
export class npss_cs_rejected_payment_resubmitComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_rejected_payment_resubmitService) { }
    ngOnInit() {
    }
}