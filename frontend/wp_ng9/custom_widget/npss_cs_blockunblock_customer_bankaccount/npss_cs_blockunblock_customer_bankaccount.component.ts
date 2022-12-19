
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_blockunblock_customer_bankaccountService } from './npss_cs_blockunblock_customer_bankaccount.service';

@Component({
    selector: 'npss_cs_blockunblock_customer_bankaccount',
    templateUrl: './npss_cs_blockunblock_customer_bankaccount.component.html',
    styleUrls: ['./npss_cs_blockunblock_customer_bankaccount.component.css'],
    providers:[npss_cs_blockunblock_customer_bankaccountService]
})
export class npss_cs_blockunblock_customer_bankaccountComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_blockunblock_customer_bankaccountService) { }
    ngOnInit() {
    }
}