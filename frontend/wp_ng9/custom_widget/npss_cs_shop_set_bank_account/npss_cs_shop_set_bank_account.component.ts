
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_shop_set_bank_accountService } from './npss_cs_shop_set_bank_account.service';

@Component({
    selector: 'npss_cs_shop_set_bank_account',
    templateUrl: './npss_cs_shop_set_bank_account.component.html',
    styleUrls: ['./npss_cs_shop_set_bank_account.component.css'],
    providers:[npss_cs_shop_set_bank_accountService]
})
export class npss_cs_shop_set_bank_accountComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_shop_set_bank_accountService) { }
    ngOnInit() {
    }
}