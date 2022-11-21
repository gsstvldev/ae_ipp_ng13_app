
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_rct_ipir_posting_failure_retryService } from './npss_cs_rct_ipir_posting_failure_retry.service';

@Component({
    selector: 'npss_cs_rct_ipir_posting_failure_retry',
    templateUrl: './npss_cs_rct_ipir_posting_failure_retry.component.html',
    styleUrls: ['./npss_cs_rct_ipir_posting_failure_retry.component.css'],
    providers:[npss_cs_rct_ipir_posting_failure_retryService]
})
export class npss_cs_rct_ipir_posting_failure_retryComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_rct_ipir_posting_failure_retryService) { }
    ngOnInit() {
    }
}