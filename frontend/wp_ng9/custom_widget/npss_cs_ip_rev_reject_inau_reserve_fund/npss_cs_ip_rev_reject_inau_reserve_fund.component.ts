
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_ip_rev_reject_inau_reserve_fundService } from './npss_cs_ip_rev_reject_inau_reserve_fund.service';

@Component({
    selector: 'npss_cs_ip_rev_reject_inau_reserve_fund',
    templateUrl: './npss_cs_ip_rev_reject_inau_reserve_fund.component.html',
    styleUrls: ['./npss_cs_ip_rev_reject_inau_reserve_fund.component.css'],
    providers:[npss_cs_ip_rev_reject_inau_reserve_fundService]
})
export class npss_cs_ip_rev_reject_inau_reserve_fundComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_ip_rev_reject_inau_reserve_fundService) { }
    ngOnInit() {
    }
}