
import { Component, OnInit,Input } from '@angular/core';
import { npss_s_posting_retryService } from './npss_s_posting_retry.service';

@Component({
    selector: 'npss_s_posting_retry',
    templateUrl: './npss_s_posting_retry.component.html',
    styleUrls: ['./npss_s_posting_retry.component.css'],
    providers:[npss_s_posting_retryService]
})
export class npss_s_posting_retryComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_s_posting_retryService) { }
    ngOnInit() {
    }
}