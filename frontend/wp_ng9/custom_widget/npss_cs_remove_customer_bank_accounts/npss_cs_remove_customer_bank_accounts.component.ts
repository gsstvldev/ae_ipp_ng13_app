
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_remove_customer_bank_accountsService } from './npss_cs_remove_customer_bank_accounts.service';

@Component({
    selector: 'npss_cs_remove_customer_bank_accounts',
    templateUrl: './npss_cs_remove_customer_bank_accounts.component.html',
    styleUrls: ['./npss_cs_remove_customer_bank_accounts.component.css'],
    providers:[npss_cs_remove_customer_bank_accountsService]
})
export class npss_cs_remove_customer_bank_accountsComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_remove_customer_bank_accountsService) { }
    ngOnInit() {
    }
}