
import { Component, OnInit,Input } from '@angular/core';
import { npss_amb_s_p2b_refund_unfreeze_customer_accountService } from './npss_amb_s_p2b_refund_unfreeze_customer_account.service';

@Component({
    selector: 'npss_amb_s_p2b_refund_unfreeze_customer_account',
    templateUrl: './npss_amb_s_p2b_refund_unfreeze_customer_account.component.html',
    styleUrls: ['./npss_amb_s_p2b_refund_unfreeze_customer_account.component.css'],
    providers:[npss_amb_s_p2b_refund_unfreeze_customer_accountService]
})
export class npss_amb_s_p2b_refund_unfreeze_customer_accountComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_amb_s_p2b_refund_unfreeze_customer_accountService) { }
    ngOnInit() {
    }
}