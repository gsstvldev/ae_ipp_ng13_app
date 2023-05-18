
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_pacs_retryService } from './npss_cs_pacs_retry.service';

@Component({
    selector: 'npss_cs_pacs_retry',
    templateUrl: './npss_cs_pacs_retry.component.html',
    styleUrls: ['./npss_cs_pacs_retry.component.css'],
    providers:[npss_cs_pacs_retryService]
})
export class npss_cs_pacs_retryComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_pacs_retryService) { }
    ngOnInit() {
    }
}