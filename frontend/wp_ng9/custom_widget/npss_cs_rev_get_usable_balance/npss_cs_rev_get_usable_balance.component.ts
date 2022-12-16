
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_rev_get_usable_balanceService } from './npss_cs_rev_get_usable_balance.service';

@Component({
    selector: 'npss_cs_rev_get_usable_balance',
    templateUrl: './npss_cs_rev_get_usable_balance.component.html',
    styleUrls: ['./npss_cs_rev_get_usable_balance.component.css'],
    providers:[npss_cs_rev_get_usable_balanceService]
})
export class npss_cs_rev_get_usable_balanceComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_rev_get_usable_balanceService) { }
    ngOnInit() {
    }
}