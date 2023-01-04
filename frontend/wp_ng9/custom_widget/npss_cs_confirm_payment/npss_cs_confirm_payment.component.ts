
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_confirm_paymentService } from './npss_cs_confirm_payment.service';

@Component({
    selector: 'npss_cs_confirm_payment',
    templateUrl: './npss_cs_confirm_payment.component.html',
    styleUrls: ['./npss_cs_confirm_payment.component.css'],
    providers:[npss_cs_confirm_paymentService]
})
export class npss_cs_confirm_paymentComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_confirm_paymentService) { }
    ngOnInit() {
    }
}