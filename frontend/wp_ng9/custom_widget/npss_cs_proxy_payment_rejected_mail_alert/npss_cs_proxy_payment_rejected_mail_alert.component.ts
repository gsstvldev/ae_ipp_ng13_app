
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_proxy_payment_rejected_mail_alertService } from './npss_cs_proxy_payment_rejected_mail_alert.service';

@Component({
    selector: 'npss_cs_proxy_payment_rejected_mail_alert',
    templateUrl: './npss_cs_proxy_payment_rejected_mail_alert.component.html',
    styleUrls: ['./npss_cs_proxy_payment_rejected_mail_alert.component.css'],
    providers:[npss_cs_proxy_payment_rejected_mail_alertService]
})
export class npss_cs_proxy_payment_rejected_mail_alertComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_proxy_payment_rejected_mail_alertService) { }
    ngOnInit() {
    }
}