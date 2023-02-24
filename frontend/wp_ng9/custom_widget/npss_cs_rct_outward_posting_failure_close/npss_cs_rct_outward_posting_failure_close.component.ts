
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_rct_outward_posting_failure_closeService } from './npss_cs_rct_outward_posting_failure_close.service';

@Component({
    selector: 'npss_cs_rct_outward_posting_failure_close',
    templateUrl: './npss_cs_rct_outward_posting_failure_close.component.html',
    styleUrls: ['./npss_cs_rct_outward_posting_failure_close.component.css'],
    providers:[npss_cs_rct_outward_posting_failure_closeService]
})
export class npss_cs_rct_outward_posting_failure_closeComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_rct_outward_posting_failure_closeService) { }
    ngOnInit() {
    }
}