
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_cc_postingService } from './npss_cs_cc_posting.service';

@Component({
    selector: 'npss_cs_cc_posting',
    templateUrl: './npss_cs_cc_posting.component.html',
    styleUrls: ['./npss_cs_cc_posting.component.css'],
    providers:[npss_cs_cc_postingService]
})
export class npss_cs_cc_postingComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_cc_postingService) { }
    ngOnInit() {
    }
}