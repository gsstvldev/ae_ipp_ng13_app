
import { Component, OnInit,Input } from '@angular/core';
import { npssp_cs_show_account_balanceService } from './npssp_cs_show_account_balance.service';

@Component({
    selector: 'npssp_cs_show_account_balance',
    templateUrl: './npssp_cs_show_account_balance.component.html',
    styleUrls: ['./npssp_cs_show_account_balance.component.css'],
    providers:[npssp_cs_show_account_balanceService]
})
export class npssp_cs_show_account_balanceComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npssp_cs_show_account_balanceService) { }
    ngOnInit() {
    }
}