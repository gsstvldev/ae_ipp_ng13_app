
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_rct_rev_approveService } from './npss_cs_rct_rev_approve.service';

@Component({
    selector: 'npss_cs_rct_rev_approve',
    templateUrl: './npss_cs_rct_rev_approve.component.html',
    styleUrls: ['./npss_cs_rct_rev_approve.component.css'],
    providers:[npss_cs_rct_rev_approveService]
})
export class npss_cs_rct_rev_approveComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_rct_rev_approveService) { }
    ngOnInit() {
    }
}