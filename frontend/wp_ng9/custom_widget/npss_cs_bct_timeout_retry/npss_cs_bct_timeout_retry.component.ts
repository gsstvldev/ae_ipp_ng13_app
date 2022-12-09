
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_bct_timeout_retryService } from './npss_cs_bct_timeout_retry.service';

@Component({
    selector: 'npss_cs_bct_timeout_retry',
    templateUrl: './npss_cs_bct_timeout_retry.component.html',
    styleUrls: ['./npss_cs_bct_timeout_retry.component.css'],
    providers:[npss_cs_bct_timeout_retryService]
})
export class npss_cs_bct_timeout_retryComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_bct_timeout_retryService) { }
    ngOnInit() {
    }
}