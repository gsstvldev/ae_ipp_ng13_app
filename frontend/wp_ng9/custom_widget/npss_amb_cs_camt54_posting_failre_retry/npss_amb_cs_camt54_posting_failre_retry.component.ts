
import { Component, OnInit,Input } from '@angular/core';
import { npss_amb_cs_camt54_posting_failre_retryService } from './npss_amb_cs_camt54_posting_failre_retry.service';

@Component({
    selector: 'npss_amb_cs_camt54_posting_failre_retry',
    templateUrl: './npss_amb_cs_camt54_posting_failre_retry.component.html',
    styleUrls: ['./npss_amb_cs_camt54_posting_failre_retry.component.css'],
    providers:[npss_amb_cs_camt54_posting_failre_retryService]
})
export class npss_amb_cs_camt54_posting_failre_retryComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_amb_cs_camt54_posting_failre_retryService) { }
    ngOnInit() {
    }
}