
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_rct_outward_posting_failure_retry_repostService } from './npss_cs_rct_outward_posting_failure_retry_repost.service';

@Component({
    selector: 'npss_cs_rct_outward_posting_failure_retry_repost',
    templateUrl: './npss_cs_rct_outward_posting_failure_retry_repost.component.html',
    styleUrls: ['./npss_cs_rct_outward_posting_failure_retry_repost.component.css'],
    providers:[npss_cs_rct_outward_posting_failure_retry_repostService]
})
export class npss_cs_rct_outward_posting_failure_retry_repostComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_rct_outward_posting_failure_retry_repostService) { }
    ngOnInit() {
    }
}