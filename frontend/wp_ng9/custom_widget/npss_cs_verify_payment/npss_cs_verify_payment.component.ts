
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_verify_paymentService } from './npss_cs_verify_payment.service';

@Component({
    selector: 'npss_cs_verify_payment',
    templateUrl: './npss_cs_verify_payment.component.html',
    styleUrls: ['./npss_cs_verify_payment.component.css'],
    providers:[npss_cs_verify_paymentService]
})
export class npss_cs_verify_paymentComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_verify_paymentService) { }
    ngOnInit() {
    }
}